<?php

namespace App\Models\Product;

use Illuminate\Database\Eloquent\Model;

class Product extends Model
{
    public $timestamps = false;
    
    protected $fillable = ['name', 'alias', 'image', 'active'];
    
    /**
    * Get product by alias
    * 
    * @param $alias alias of the product
    * 
    * return product object | null
    */
    public static function getProductByAlias($alias)
    {
        return self::where('alias', '=', $alias)->first();    
    }
}
