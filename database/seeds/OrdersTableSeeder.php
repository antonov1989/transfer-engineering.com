<?php

use Illuminate\Database\Seeder;

class OrdersTableSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        DB::table('orders')->insert([
            [
                'user_name' => 'Колян - проставь',
                'user_phone' => 'Колян - проставь',
                'game_time_from_at' => '2018-04-22 14:15:00',
                'game_time_to_at' => '2018-04-22 15:45:00',
                'stadium_time_from_at' => '2018-04-22 14:00:00',
                'stadium_time_to_at' => '2018-04-22 16:00:00',
                'stadium_id' => '117',
                'ball_count' => '8',
                'people_count' => '8',
                'time_hours' => '1.5',
                'stadium_pay' => '700.00',
                'order_pay' => '2050.00',
                'video_pay' => '150.00',
                'has_video_stream' => 'true',
                'info' => 'Делаем скидку 10% в честь дня рождения',
                'status' => '2',
            ],
        ]);
    }
}
