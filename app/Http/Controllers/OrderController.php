<?php
/**
 * Created by PhpStorm.
 * User: bandit
 * Date: 28.06.17
 * Time: 21:56
 */

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Models\SendSMS;
use App\Models\Xorder;
use Config;

class OrderController extends Controller
{
    public function addOrder(Request $request)
    {
        if ($request->ajax()) {
            $user_name = $request->input('user_name');
            $user_info = $request->input('user_info');
            $user_contact = $request->input('user_contact');
            
            if ($user_name AND $user_contact) {
                $order = new Xorder();
                $order->user_name = $user_name;
                $order->user_info = $user_info;
                $order->user_contact = $user_contact;
                
                if ($order->save())
                {
                    $text = "New game on Xball from " . $user_contact;
                    SendSMS::send($text);   
                    
                    echo json_encode([
                        'status'    => 'success',
                        'message'   => 'Ваш заказ успешно принят, скоро мы свяжемся с Вами!'  
                    ]); 
                    exit;
                }
            } 
            
            echo json_encode([
                'status'    => 'error',
                'message'   => 'Произошла ошибка, проверте все введенные данные'  
            ]); 
        }
        
        exit;
    }
    
    public function addCallback(Request $request)
    {
        if ($request->ajax()) {
            $user_phone = $request->input('user_phone');
            if ($user_phone && strlen($user_phone) > 9) {
                $order = new Xorder();
                $order->user_name = 'XXX';
                $order->user_info = 'Перезвоните на ' . $user_phone;
                $order->user_contact = $user_phone;
                
                if ($order->save())
                {
                    $text = "New callback on Xball from " . $user_phone;
                    SendSMS::send($text);
                    
                    echo json_encode([
                        'status'    => 'success',
                        'message'   => 'Ваш запрос успешно отправлен, скоро мы свяжемся с Вами!'  
                    ]);
                }
            } else {
                echo json_encode([
                        'status'    => 'error',
                        'message'   => 'Произошла ошибка, проверте все введенные данные'  
                    ]);
            } 
        }
        
        exit;
    }
}