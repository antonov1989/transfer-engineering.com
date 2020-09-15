<?php

namespace App\ValueObjects\Admin\Product;

class TranslationValueObject
{
    public $id;
    public $product_id;
    public $locale;
    public $meta_title;
    public $meta_description;
    public $meta_keywords;
    public $h1;
    public $content;

    /**
     * TranslationValueObject constructor.
     * @param $translation
     */
    public function __construct($translation)
    {
        $this->id = $translation['id'];
        $this->product_id = $translation['product_id'];
        $this->locale = $translation['locale'];
        $this->meta_title = $translation['meta_title'];
        $this->meta_description = $translation['meta_description'];
        $this->meta_keywords = $translation['meta_keywords'];
        $this->h1 = $translation['h1'];
        $this->content = $translation['content'];
    }
}
