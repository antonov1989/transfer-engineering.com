<?php


namespace App\ValueObjects\Admin\Translations;

/**
 * @property  TranslationValueObject[] $translations
 */

class LanguageValueObject
{
    public $id;
    public $name;
    public $short_name;
    public $locale;
    public $enabled;
    public $translations;


    public function __construct($language)
    {
        $this->id = $language['id'];
        $this->name = $language['name'];
        $this->short_name = $language['short_name'];
        $this->locale = $language['locale'];
        $this->enabled = $language['enabled'];
        $this->translations = $language['translations'];
    }
}