<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;

class Page extends Model
{
    //protected $table = 'stadiums';

    public $timestamps = false;
    
    protected $fillable = ['title', 'description', 'keywords', 'h1', 'content'];
    
    /**
    * Get page by alias
    * 
    * @param $alias alias of the page
    * 
    * return page object | null
    */
    public static function getPageByAlias($alias) 
    {
        return self::where('alias', '=', $alias)->first();    
    }
}
