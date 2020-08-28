<?php
/**
 * Created by PhpStorm.
 * User: bandit
 * Date: 28.06.17
 * Time: 21:56
 */

namespace App\Http\Admin\Controllers;

class AdminController extends Controller
{
    public function __construct()
    {
        $this->middleware('admin');
    }
}