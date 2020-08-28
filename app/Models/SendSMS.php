<?php

namespace App\Models;

class SendSMS
{
    private static $smslogin = '380994059722';
    private static $smspassword = 'antonov8905';
    
    const CONTACT_PHONE = [
        '380994059722',
        //'380995087807'
    ];
    
    public static function send($text)
    {
        // iconv используется для корректного перекодирования кириллических сообщений в UTF-8
        // для тех, кто изначально работает с UTF-8 преобразование делать не нужно.
        $text = iconv('windows-1251', 'utf-8', htmlspecialchars($text));
        $description    = iconv('windows-1251', 'utf-8', htmlspecialchars($text));
        $start_time     = 'AUTO'; //отправить немедленно
        $end_time       = 'AUTO'; // автоматически рассчитать системой
        $rate           = 1; // скорость отправки сообщений (1 = 1 смс минута). Одиночные СМС сообщения отправляются всегда с максимальной скоростью.
        $lifetime       = 4; // срок жизни сообщения 4 часа
        $source         = 'Xball'; // Alfaname
        
        $myXML = "<?xml version=\"1.0\" encoding=\"utf-8\"?>\n";
        $myXML .= "<request>";
        $myXML .= "<operation>SENDSMS</operation>";
        $myXML .= ' <message start_time="'.$start_time.'" end_time="'.$end_time.'" lifetime="'.$lifetime.'" rate="'.$rate.'"
        desc="'.$description.'" source="'.$source.'">'."\n";
        $myXML .= " <body>".$text."</body>";
        foreach (self::CONTACT_PHONE as $phone) {
            $myXML .= " <recipient>" . $phone . "</recipient>";
        }
        $myXML .= "</message>";
        $myXML .= "</request>";
        
        $ch = curl_init();
        curl_setopt($ch, CURLOPT_USERPWD , self::$smslogin . ':' . self::$smspassword);
        curl_setopt($ch, CURLOPT_SSL_VERIFYPEER, FALSE);
        curl_setopt($ch, CURLOPT_POST, 1);
        curl_setopt($ch, CURLOPT_URL, 'http://svitsms.com/api/api.php');
        curl_setopt($ch, CURLOPT_HTTPHEADER, array("Content-Type: text/xml", "Accept: text/xml"));
        curl_setopt($ch, CURLOPT_RETURNTRANSFER, 1);
        curl_setopt($ch, CURLOPT_POSTFIELDS, $myXML);
        $response = curl_exec($ch);
        //var_dump($response); exit;
        curl_close($ch);
        
        return true;
        // вывод результата в браузер для удобства чтения обрамлен в textarea
        echo '<textarea spellcheck="false" name="111" rows="25" cols="150">';
        echo $response;
        echo '</textarea>';;  exit;
    }
}