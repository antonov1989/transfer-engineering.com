<?php

namespace App\Http\Controllers\Admin;

use Illuminate\Http\Request;
use Illuminate\Http\Response;

use App\Models\Orders;
use App\Models\Stadium;

class OrdersController extends Controller
{
    public function __construct()
    {
        $this->middleware('admin');
    }

    public function index(Request $request)
    {
        $orders = Orders::orderby('game_time_from_at', 'ASC')->get();

        return view('admin.orders.index', [
            'orders' => $orders,
            'statusList' => Orders::getStatusList(),
            'statusClass' => Orders::getStatusClass(),
        ]);
    }

    public function edit($id, Request $request)
    {
        $order = Orders::find($id);

        return view('admin.orders.edit', [
            'order' => $order,
            'stadiums' => Stadium::all()->pluck('name', 'id'),
            'statusList' => Orders::getStatusList(),
        ]);
    }

    public function add(Request $request)
    {
        $order = new Orders();

        return view('admin.orders.add', [
            'order' => $order,
            'stadiums' => Stadium::all()->pluck('name', 'id'),
            'statusList' => Orders::getStatusList(),
        ]);
    }

    public function save($id, Request $request)
    {
        $data = $request->all();

        if ($id) {
            $order = Orders::find($id);
        } else {
            $order = new Orders();
            unset($data['id']);
        }

        $data['has_video_stream'] = isset($data['has_video_stream']);

        $order->fill($data);
        if (!$order->save()) {
            return redirect()->route('admin.orders')
                ->withInput()
                ->with('notifications', ['type' => 'error', 'message' => 'Save error']);
        }

        return redirect()->route('admin.orders')
            ->with('notifications', ['type' => 'success', 'message' => 'Has been saved']);
    }

    public function delete($id)
    {
        $order = Orders::find($id);

        if (!$order->delete()) {
            return response()->json(['success' => false], 200);
        }

        return response()->json(['success' => true], 200);
    }
}