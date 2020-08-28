<?php

namespace App\Http\Controllers\Admin;

class HomeController extends Controller
{

    /**
     * Display a home admin page.
     *
     * @return mixed
     */
    public function index()
    {
        return view('admin.dashboard');
    }
}
