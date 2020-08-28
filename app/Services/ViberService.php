<?php

namespace App\Services;

class ViberService
{
    private $url_api = "https://chatapi.viber.com/pa/";
    
    private $token = "4c048dcc4327dc23-f3f43f5c086f82b4-18a5db3b59156fe4";
    
    public function message_post
    (
        $from,          // ID администратора Public Account.
        array $sender,  // Данные отправителя.
        $text           // Текст.
    )
    {
        $data['from']   = $from;
        $data['sender'] = $sender;
        $data['type']   = 'text';
        $data['text']   = $text;
        return $this->call_api('post', $data);
    }
    
    private function call_api($method, $data)
    {
        $url = $this->url_api.$method;
        
        $options = array(
            'http' => array(
                'header'  => "Content-type: application/x-www-form-urlencoded\r\nX-Viber-Auth-Token: ".$this->token."\r\n",
                'method'  => 'POST',
                'content' => json_encode($data)
            )
        );
        $context  = stream_context_create($options);
        $response = file_get_contents($url, false, $context);
        return json_decode($response);
    }
    
    /** EXAMPLE
    $Viber = new ViberService();
    $res = $Viber->message_post(
    'transferengineering1',
    [
    'name' => 'transferengineering', // Имя отправителя. Максимум символов 28.
    'avatar' => 'https://pixelbox.ru/wp-content/uploads/2018/02/anonymous_steam_avatars-1-1.jpg' // Ссылка на аватарку. Максимальный размер 100кб.
    ],
    'Test'
    );
    */
}