<?php

use Illuminate\Database\Schema\Blueprint;
use Illuminate\Database\Migrations\Migration;

class CreateXordersTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('xorders', function (Blueprint $table) {
            $table->increments('id');
            $table->string('user_name');
            $table->string('user_contact');
            $table->text('user_info');
            $table->string('ip', 16);
            $table->smallInteger('status');
            $table->timestamps();
        });
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        Schema::drop('xorders');
    }
}
