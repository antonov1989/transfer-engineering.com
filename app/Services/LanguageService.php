<?php

namespace App\Services;

use App\Models\Language\Language;
use App\Repositories\Language\LanguageRepository;
use Waavi\Translation\Repositories\TranslationRepository;

/**
 * Class SiteSettingsService
 * @package App\Services
 */
class LanguageService
{
    /**
     * @var LanguageRepository
     */
    private $languageRepository;

    /**
     * @var TranslationRepository
     */
    private $translationRepository;

    /**
     * LanguageService constructor.
     * @param LanguageRepository $languageRepository
     * @param TranslationRepository $translationRepository
     */
    public function __construct(LanguageRepository $languageRepository, TranslationRepository $translationRepository)
    {
        $this->languageRepository = $languageRepository;
        $this->translationRepository = $translationRepository;
    }

    /**
     * Stores languages list to locales.js file
     */
    public function storeLanguagesListToJson()
    {
        $languages = $this->languageRepository->allActive()->map(function($language) {
            $locale = mb_strtolower($language->locale);
            return [
                'code' => $locale,
                'file' => "{$locale}.js",
                'name' => $language->name,
            ];
        });

        $path = $this->getLangFolderPath('locales.js');
        $content = 'const locales = ' . json_encode($languages) . '; module.exports = locales;';
//        $this->setPermissions($path);

        file_put_contents($path, $content);
        $this->clearNonExistingLocalesTranslations();
    }

    /**
     * Stores translations for given locales to corresponding json files
     *
     * @param array $locales
     */
    public function storeTranslationsToJson($locales = [])
    {
        if (empty($locales)) {
            $locales = $this->languageRepository
                ->getAllActiveFromDB()
                ->pluck('locale')
                ->toArray();
        }

        foreach ($locales as $locale) {
            $mainTranslations = __('main', [], $locale);

            $otherTranslations = $this->translationRepository->allByLocale($locale)
                ->where('group', '!=', 'main')
                ->map(function($translation) {
                    $translation->key = $translation->group . '.' . $translation->item;
                    return $translation;
                })
                ->pluck('text', 'key')
                ->toArray();

            $translations = array_merge($mainTranslations, $otherTranslations);
            $path = $this->getLangFolderPath(mb_strtolower($locale) . '.js');
            $this->adaptTranslationStrings($translations);

            file_put_contents($path, 'export default ' . json_encode($translations));
        }

        $this->clearNonExistingLocalesTranslations();
    }

    /** Set permission to file by path
     *
     * @param string $path
     * @param int $permissions
     */
    private function setPermissions($path, $permissions = 0755)
    {
        chmod($path, $permissions);
    }

    private function adaptTranslationStrings(&$strings, $symbol = ':')
    {
        foreach ($strings as $key => $string) {
            if (strpos($string, $symbol) === false) {
                continue;
            }
            $words = explode(' ', $string);
            $words = array_map(function($word) use ($symbol){
                $symbolPosition = strpos($word, $symbol);
                if ($symbolPosition === false || $symbolPosition === strlen($word) - 1) {
                    return $word;
                }

                if ($symbolPosition === 0) {
                    return '{' . strtolower(substr($word,1)) . '}';
                }

                // If word contain symbol somewhere in the middle (like "(:TICKER)"
                $specialChars = ['!', '@', '#', '$', '%', '^', '&', '*', '(', ')', '-', '_', '=', '+', '/', '\\', '.', ',', '?'];
                $wordLastSymbolPosition = $symbolPosition + 1;
                $wordLength = mb_strlen($word, 'UTF-8');
                while ($wordLastSymbolPosition < $wordLength && !in_array($word[$wordLastSymbolPosition], $specialChars)) {
                    $wordLastSymbolPosition++;
                }

                $word = substr_replace($word, '{', $symbolPosition,1);
                $word = substr_replace($word, '}', $wordLastSymbolPosition,0);

                return strtolower($word);
            }, $words);
            $strings[$key] = implode(' ', $words);
        }

    }

    private function clearNonExistingLocalesTranslations()
    {
        $files = array_diff(scandir($this->getLangFolderPath()), array('.', '..', 'locales.js'));
        $locales = Language::all()
            ->pluck('locale')
            ->map(function($locale) {
                return "{$locale}.js";
            })
            ->toArray();
        $filesForNonExistingLocales = array_diff($files, $locales);
        foreach ($filesForNonExistingLocales as $fileForNonExistingLocale) {
            unlink($this->getLangFolderPath($fileForNonExistingLocale));
        }
    }

    private function getLangFolderPath($additionalPath = '')
    {
        return $additionalPath
            ? base_path('client/lang') . '/' . $additionalPath
            : base_path('client/lang');
    }
}
