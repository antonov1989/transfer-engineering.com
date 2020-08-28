<?php

use Illuminate\Database\Seeder;
use Illuminate\Support\Facades\Artisan;
use App\Models\Language\Translation;

class TranslationsSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        foreach ($this->dataLanguages() as $locale => $language) {

            $translations = [];
            foreach ($this->dataTranslations()[$locale] as $groupName => $group) {
                foreach ($group as $key => $text) {
                    $translation = Translation::where('item', '=', $key)
                        ->where('group', '=', $groupName)
                        ->where('locale', '=', $locale)
                        ->first();

                    if (!$translation) {
                        $translation = new Translation();
                        $translation->setAttribute('group', $groupName);
                        $translation->setAttribute('item', $key);
                        $translation->setAttribute('text', $text);
                        $translation->setAttribute('locale', $locale);
                        $translation->save();
                    }
                }
            }
        }

        Artisan::call('translator:flush');
        Artisan::call('config:cache');
    }

    private function dataLanguages()
    {
        return [
            'en' => [
                'name' => 'English',
                'locale' => 'en',
            ],
            /*'ru' => [
                'name' => 'Русский',
                'locale' => 'ru',
            ]*/
        ];
    }

    private function dataTranslations()
    {
        $pathToLang = realpath(__DIR__ . '/../../resources/lang');

        return [
            'en' => [
                'main' => include $pathToLang . '/en/main_dev.php',
                'meta' => include $pathToLang . '/en/meta_dev.php',
                'request' => include $pathToLang . '/en/request_dev.php',
            ],
        ];
    }
}