<?php

namespace App\Models\Language;

use App\Models\Language\Translation;
use App\ValueObjects\Admin\Translations\LanguageValueObject;
use App\ValueObjects\Admin\Translations\TranslationValueObject;
use Illuminate\Database\Eloquent\Model;

class Language extends Model
{
    use \Illuminate\Database\Eloquent\SoftDeletes;

    const STATUS_ENABLED = 1;
    const STATUS_DRAFT = 0;
    const DEFAULT_LOCALE = 'en';

    /**
     *  Table name in the database.
     *  @var string
     */
    protected $table = 'translator_languages';

    /**
     *  List of variables that cannot be mass assigned
     *  @var array
     */
    protected $fillable = ['locale', 'name', 'short_name', 'enabled'];

    /**
     *  Each language may have several translations.
     */
    public function translations()
    {
        return $this->hasMany(Translation::class, 'locale', 'locale')->orderBy('item');
    }

    /**
     *  Returns the name of this language in the current selected language.
     *
     *  @return string
     */
    public function getLanguageCodeAttribute()
    {
        return "languages.{$this->locale}";
    }

    public function scopeActive($query)
    {
        return $query->where('enabled', '=', self::STATUS_ENABLED);
    }

    /**
     * Create new language
     *
     * @param LanguageValueObject $languageObj
     * @return Language
     */
    public static function createLanguage(LanguageValueObject $languageObj)
    {
        $language = new self();
        $language->name = $languageObj->name;
        $language->short_name = $languageObj->short_name;
        $language->locale = $languageObj->locale;
        $language->enabled = $languageObj->locale === self::DEFAULT_LOCALE ? self::STATUS_ENABLED : $languageObj->enabled;
        return $language;
    }

    /**
     * Edit existing language
     *
     * @param LanguageValueObject $languageObj
     */
    public function edit(LanguageValueObject $languageObj)
    {
        $this->name = $languageObj->name;
        $this->short_name = $languageObj->short_name;
        $this->enabled = $this->isDefault() ? self::STATUS_ENABLED : $languageObj->enabled;
    }

    /**
     * Update translation of language
     *
     * @param TranslationValueObject $translationValueObject
     */
    public function updateTranslation(TranslationValueObject $translationValueObject)
    {
        $translation = $this->getTranslationById($translationValueObject->id);
        $translation->edit($translationValueObject);
        $this->translations()->save($translation);
    }

    /**
     * Delete translation of language
     *
     * @param TranslationValueObject $translationValueObject
     * @throws \Exception
     */
    public function deleteTranslation(TranslationValueObject $translationValueObject)
    {
        $translation = $this->getTranslationById($translationValueObject->id);
        $translation->delete();
    }

    /**
     * Create translation of language
     *
     * @param TranslationValueObject $translationValueObject
     */
    public function createTranslation(TranslationValueObject $translationValueObject)
    {
        $translation = Translation::createTranslation($translationValueObject);
        $this->translations()->save($translation);
    }

    /**
     * Get language translation by id
     *
     * @param $id
     * @return Translation|null
     */
    public function getTranslationById($id)
    {
        foreach ($this->translations as $translation){
            if($translation->id === $id){
                return $translation;
            }
        }
        return null;
    }

    public function isDefault()
    {
        return $this->locale === self::DEFAULT_LOCALE;
    }
}
