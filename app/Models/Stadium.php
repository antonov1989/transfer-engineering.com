<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;

class Stadium extends Model
{
    protected $table = 'stadiums';

    public $timestamps = false;
    
    protected $fillable = ['name', 'address', 'site', 'status', 'phone', 'email', 'lat', 'lon'];
}
