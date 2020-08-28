<?php

use Illuminate\Database\Seeder;

class XordersTableSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        $list = file(__DIR__ . '/xorder-list.txt');

        $insertArray = [];
        $inserKeys = [
            'id',
            'user_name',
            'user_contact',
            'user_info',
            'ip',
            'status',
            'created_at',
        ];

        foreach ($list as $item) {
            $arr = explode("\t", $item);

            $insertArray[] = array_combine($inserKeys, $arr);
        }

        DB::table('xorders')->insert($insertArray);
    }
}
