<?php

use Illuminate\Database\Schema\Blueprint;
use Illuminate\Database\Migrations\Migration;

class CreateProductTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('products', function (Blueprint $table) {
            $table->increments('id');
            $table->string('name');
            $table->string('alias', 32);
            $table->string('image', 32);
            $table->boolean('active')->default(false);
            $table->timestamps();
        });

        Schema::create('product_translations', function (Blueprint $table) {
            $table->increments('id');
            $table->integer('product_id');
            $table->string('locale', 6);
            $table->string('meta_title');
            $table->string('meta_description');
            $table->string('meta_keywords');
            $table->string('h1');
            $table->text('content');
            $table->foreign('locale')->references('locale')->on('translator_languages');
            $table->foreign('product_id')->references('id')->on('products');
            $table->unique(['product_id', 'locale']);
        });
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        Schema::drop('products');
        Schema::drop('product_translations');
    }
}
