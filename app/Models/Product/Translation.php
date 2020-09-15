<?php

namespace App\Models\Product;

use App\ValueObjects\Admin\Product\TranslationValueObject;
use Illuminate\Database\Eloquent\Model;

class Translation extends Model
{
    /**
     *  Table name in the database.
     *  @var string
     */
    protected $table = 'product_translations';

    public $timestamps = false;

    /**
     *  List of variables that can be mass assigned
     *  @var array
     */
    protected $fillable = ['product_id', 'locale', 'meta_title', 'meta_description', 'meta_keywords', 'h1', 'content'];

    /**
     *  Each translation belongs to a language.
     */
    public function language()
    {
        return $this->belongsTo(Language::class, 'locale', 'locale');
    }

    /**
     * Create new translation
     *
     * @param TranslationValueObject $translationObj
     * @return Translation
     */
    public static function createTranslation(TranslationValueObject $translationObj)
    {
        $translation = new self();

        $translation->product_id = $translationObj->product_id;
        $translation->locale = $translationObj->locale;
        $translation->meta_title = $translationObj->meta_title;
        $translation->meta_description = $translationObj->meta_description;
        $translation->meta_keywords = $translationObj->meta_keywords;
        $translation->h1 = $translationObj->h1;
        $translation->content = $translationObj->content;

        return $translation;
    }
}
