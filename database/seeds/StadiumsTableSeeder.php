<?php

use Illuminate\Database\Seeder;

class StadiumsTableSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        $list = file(__DIR__ . '/stadium-list.txt');

        $insertArray = [];
        $inserKeys = [
            'id',
            'name',
            'address',
            'phone',
            'email',
            'site',
            'status',
            'lat',
            'lon',
        ];

        foreach ($list as $item) {
            $arr = explode("\t", $item);

            if (sizeof($arr) != 9) {
                $arr[] = 0;
                $arr[] = 0;
            }

            $insertArray[] = array_combine($inserKeys, $arr);
        }

        DB::table('stadiums')->insert($insertArray);
    }
}
