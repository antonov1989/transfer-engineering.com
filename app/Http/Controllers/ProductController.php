<?php

namespace App\Http\Controllers;

use App\Models\Product\Product;
use App\Models\Product\Translation;

class ProductController extends Controller
{
    public function index($alias)
    {
        $locale = app()->getLocale();

        $product = Product::getProductByAlias($alias);
        $translation = Translation::where('product_id', '=', $product->id)->where('locale', $locale)->first();

        if (!$product || !$translation) {
            header( "HTTP/1.1 404 Not Found" );
            return response()->view('errors.404', [], 404);
        }

        return view('product.index', [
            'product' => $product,
            'translation' => $translation,
        ]);
    }
}