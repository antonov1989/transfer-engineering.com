<?php

use Illuminate\Database\Schema\Blueprint;
use Illuminate\Database\Migrations\Migration;

class CreateOrdersTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('orders', function (Blueprint $table) {
            $table->increments('id');
            $table->string('user_name');
            $table->string('user_phone');
            $table->dateTime('game_time_from_at');
            $table->dateTime('game_time_to_at');
            $table->dateTime('stadium_time_from_at');
            $table->dateTime('stadium_time_to_at');
            $table->unsignedInteger('stadium_id');
            $table->smallInteger('ball_count');
            $table->smallInteger('people_count');
            $table->decimal('time_hours', 3, 1);
            $table->decimal('stadium_pay', 6, 2);
            $table->decimal('order_pay',  6, 2);
            $table->decimal('video_pay',  6, 2);
            $table->boolean('has_video_stream');
            $table->text('info');
            $table->smallInteger('status');
            $table->timestamps();

            $table->foreign('stadium_id')->references('id')->on('stadiums');
        });
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        Schema::drop('orders');
    }
}
