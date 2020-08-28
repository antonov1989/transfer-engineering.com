<?php

namespace App\Http\Controllers\Admin;

use Illuminate\Http\Request;

use App\Models\Stadium;

class StadiumController extends Controller
{
    public function __construct()
    {
        $this->middleware('admin');
    }
    
    public function index(Request $request)
    {       
        $list = Stadium::get();
        
        return view('admin.stadium.index', [
            'list' => $list 
        ]);
    }
    
    public function edit($id, Request $request)
    {
        $stadium = Stadium::find($id);

        return view('admin.stadium.edit', [
            'stadium' => $stadium
        ]);
    }
    
    public function save($id, Request $request)
    {
        $stadium = Stadium::find($id);
        
        $data = $request->all();
        if (isset($data['status'])) {
            $data['status'] = 1;
        } else {
            $data['status'] = 0;
        }
        
        $stadium->fill($data);
        if (!$stadium->save()) {
            return redirect()->route('admin.stadiums')
                ->withInput()
                ->with('notifications', ['type' => 'error', 'message' => 'Save error']);
        } else {
            return redirect()->route('admin.stadiums')
                ->with('notifications', ['type' => 'success', 'message' => 'Has been saved']);
        }
    }
}