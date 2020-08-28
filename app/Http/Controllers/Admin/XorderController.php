<?php

namespace App\Http\Controllers\Admin;

use Illuminate\Http\Request;
use Illuminate\Http\Response;

use App\Models\Xorder;

class XorderController extends Controller
{
    public function __construct()
    {
        $this->middleware('admin');
    }
    
    public function index(Request $request)
    {
        $xorders = Xorder::orderby('created_at', 'DESC')->get();

        return view('admin.xorder.index', [
            'xorders' => $xorders 
        ]);
    }
    
    public function edit($id, Request $request)
    {
        $xorder = Xorder::find($id);
        return view('admin.xorder.edit', [
            'xorder' => $xorder
        ]);
    }
    
    public function save($id, Request $request)
    {
        $xorder = Xorder::find($id);
        
        $data = $request->all();
        if (isset($data['status'])) {
            $data['status'] = 1;
        } else {
            $data['status'] = 0;
        }
        
        $xorder->fill($data);
        if (!$xorder->save()) {
            return redirect()->route('admin.xorders')
                ->withInput()
                ->with('notifications', ['type' => 'error', 'message' => 'Save error']);
        } else {
            return redirect()->route('admin.xorders')
                ->with('notifications', ['type' => 'success', 'message' => 'Has been saved']);
        }
    }
    
    public function delete($id)
    {
        $xorder = Xorder::find($id);

        if (!$xorder->delete()) {
            return response()->json(['success' => false], 200);
        } else {
            return response()->json(['success' => true], 200);
        }
    }
}