<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;

class Orders extends Model
{
    const STATUS_NEW = 0;
    const STATUS_PREPAY = 1;
    const STATUS_SUCCESS = 2;
    const STATUS_CANCEL = 3;

    protected $guarded = ['id'];

    public static function getStatusList()
    {
        return [
            self::STATUS_NEW => 'Новый',
            self::STATUS_PREPAY => 'Внесли предоплату',
            self::STATUS_SUCCESS => 'Завершен Успешно',
            self::STATUS_CANCEL => 'Отмена заказа',
        ];
    }

    public static function getStatusClass()
    {
        return [
            self::STATUS_NEW => 'info',
            self::STATUS_PREPAY => 'warning',
            self::STATUS_SUCCESS => 'success',
            self::STATUS_CANCEL => 'danger',
        ];
    }
}
