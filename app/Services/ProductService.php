<?php

namespace App\Services;

use App\Models\Product\Product;
use App\Models\Product\Translation;
use App\ValueObjects\Admin\Product\TranslationValueObject;

class ProductService
{
    public function updateTranslations(Product $product, $request)
    {
        $translations = $request->get('translations');

        foreach ($translations as $locale => $translation) {
            $translationObj = [
                'product_id'  => $product->id,
                'locale'  => $locale,
                'meta_title' => $translation['meta_title'],
                'meta_description' => $translation['meta_description'],
                'meta_keywords' => $translation['meta_keywords'],
                'h1' => $translation['h1'],
                'content' => $translation['content'],
            ];

            $translation_id = (int)$translation['id'];
            if ($translation_id) {
                $translationModel = Translation::find($translation_id);
            } else {
                $translationModel = new Translation();
            }
            $translationModel->fill($translationObj);
            $translationModel->save();
        }

        return true;
    }

    public function getTranslations(Product $product)
    {
        $translations = Translation::where('product_id', '=', $product->id)->get();
        $product_translation = [];

        foreach ($translations as $translation) {
            $product_translation[$translation->locale] = $translation;
        }

        //var_dump($product_translation); exit;
        return $product_translation;
    }
}