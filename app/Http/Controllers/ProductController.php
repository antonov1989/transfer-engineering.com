<?php

namespace App\Http\Controllers;

use App\Models\Product\Product;

class ProductController extends Controller
{
    public function index($alias)
    {
        $product = Product::getProductByAlias($alias);
        if (!$product) {
            header( "HTTP/1.1 404 Not Found" );
            return response()->view('errors.404', [], 404);
        }

        return view('product.index', [
            'product' => $product
        ]);
    }
}