<?php
/**
 * Created by PhpStorm.
 * User: Pushok
 * Date: 05.09.2016
 * Time: 18:43
 */

namespace App\Http\Controllers;

use App\Models\Product\Product;
use App\Services\TelegramService;
use Illuminate\Http\Request;
use App\Models\Xorder;

class HomeController extends Controller
{
    public function index()
    {
        return view('home.index')->with([
            //'meta' => Product::getPageByAlias('home')
        ]);
    }
    
    public function sendMessage(Request $request)
    {
        $formFieldsName = $request->get('formFieldsName');
        $formData = $request->get($formFieldsName);
        
        $dataMessage = [];
        
        if ($formFieldsName === 'frme07921d17578494992743f305cb3b61f') {
            if (empty($formData['field7b0bac286ea842e79267fe4cfe3332ab'])) {
                return response()->json([
                    'res' => '0',
                    "error" => [
                        "field7b0bac286ea842e79267fe4cfe3332ab" => [
                            trans('request.required_field')
                        ],
                    ],
                ]);
            }
            
            if (!filter_var($formData['field7b0bac286ea842e79267fe4cfe3332ab'], FILTER_VALIDATE_EMAIL)) {
                return response()->json([
                    'res' => '0',
                    "error" => [
                        "field7b0bac286ea842e79267fe4cfe3332ab" => [
                            trans('request.email_error_email')
                        ],
                    ],
                ]);
            }
            
            $dataMessage = [
                'name' => $formData['field76a38e2ce23a48c0a24e814e5e961f91'],
                'email' => $formData['field7b0bac286ea842e79267fe4cfe3332ab'],
                'phone' => $formData['fieldf82a884bbc1b4f479f2250e2d3d7ffb5'],
            ];
        } elseif ($formFieldsName === 'frm5360d24c7af04e3a923ac5f7c477241c') {
            if (empty($formData['field14988c0a6d7d439191ccff20b4c8d66b'])) {
                return response()->json([
                    'res' => '0',
                    "error" => [
                        "field14988c0a6d7d439191ccff20b4c8d66b" => [
                            trans('request.callback_error_phone')
                        ],
                    ],
                ]);
            }
            
            $dataMessage = [
                'name' => $formData['fieldc8778bac203a467a93dc2b6c6a3699bd'] ,
                'phone' => preg_replace("/[^0-9]+/", "", $formData['field14988c0a6d7d439191ccff20b4c8d66b']),
            ];
            
            if (!preg_match('/^[0-9]{10,12}+$/', $dataMessage['phone'])) {
                return response()->json([
                    'res' => '0',
                    "error" => [
                        "field14988c0a6d7d439191ccff20b4c8d66b" => [
                            "Номер телефона не верный"
                        ],
                    ],
                ]);
            }
        } else {
            return response()->json([
                'res' => '0',
                "error" => [
                    'Undefined error'
                ],
            ]);
        }
    
    
        $Telegram = new TelegramService();
        $result = $Telegram->message_post(
'******************************
Форма обратной связи TransferEengineering
Name: ' . (!empty($dataMessage['name']) ? $dataMessage['name'] : 'Не указан') . '
Email: ' . (!empty($dataMessage['email']) ? $dataMessage['email'] : 'Не указан') . '
Phone: ' . (!empty($dataMessage['phone']) ? $dataMessage['phone'] : 'Не указан') .'
******************************'
        );
        
        $order = new Xorder();
        $order->user_name = (!empty($dataMessage['name']) ? $dataMessage['name'] : 'Не указан');
        $order->user_info = 'Форма обратной связи TransferEengineering';
        $order->user_contact = 'Email: ' . (!empty($dataMessage['email']) ? $dataMessage['email'] : 'Не указан')
            . ' Phone: ' . (!empty($dataMessage['phone']) ? $dataMessage['phone'] : 'Не указан');
    
        $order->save();
    
        return response()->json([
            'res' => '1',
            "id_lead" => "16497626",
            "key" =>"d9c02db19fc74dda",
            "lead" =>"16497626",
        ]);
    }
}