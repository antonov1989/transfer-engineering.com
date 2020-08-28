<?php

namespace App\Services;

class TelegramService
{
    private $TELEGRAM_TOKEN = '1258903825:AAHlPRZrhilbL6Ac5scMAkzl8gHn60_PMRw';
    
    private $TELEGRAM_CHATID = '1069190878'; //vovka
    //private $TELEGRAM_CHATID = '563527435'; // my

    public function message_post($text)
    {
        $ch = curl_init();
        curl_setopt_array(
            $ch,
            array(
                CURLOPT_URL => 'https://api.telegram.org/bot' . $this->TELEGRAM_TOKEN . '/sendMessage',
                CURLOPT_POST => TRUE,
                CURLOPT_RETURNTRANSFER => TRUE,
                CURLOPT_TIMEOUT => 10,
                CURLOPT_POSTFIELDS => array(
                    'chat_id' => $this->TELEGRAM_CHATID,
                    'text' => $text,
                ),
            )
        );
        curl_exec($ch);
    }
}