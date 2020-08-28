<?php

namespace App\Http\Controllers\Admin;

use Illuminate\Http\Request;

use App\Models\Page;

class PageController extends Controller
{
    public function __construct()
    {
        $this->middleware('admin');
    }
    
    public function index(Request $request)
    {       
        $list = Page::get();
        
        return view('admin.pages.index', [
            'list' => $list 
        ]);
    }
    
    public function edit($id, Request $request)
    {
        $page = Page::find($id);

        return view('admin.pages.edit', [
            'page' => $page
        ]);
    }
    
    public function save($id, Request $request)
    {
        $page = Page::find($id);
        $data = $request->all();

        $page->fill($data);
        
        if (!$page->save()) {
            return redirect()->route('admin.pages')
                ->withInput()
                ->with('notifications', ['type' => 'error', 'message' => 'Save error']);
        } else {
            return redirect()->route('admin.pages')
                ->with('notifications', ['type' => 'success', 'message' => 'Has been saved']);
        }
    }
}