<?php

/*Route::get('', function () {
    return redirect('/auth/login');
});     */

Route::get('dashboard', 'Admin\HomeController@index')->name('admin.dashboard');

//Callbacks
Route::get('xorders', ['uses' => 'Admin\XorderController@index'])->name('admin.xorders');
Route::get('xorder/edit/{id}', ['uses' => 'Admin\XorderController@edit'])->name('admin.xorderEdit');
Route::put('xorder/save/{id}', 'Admin\XorderController@save')->name('admin.xorderSave');
Route::delete('xorder/delete/{id}', 'Admin\XorderController@delete')->name('admin.xorderDelete');

//Stadiums
Route::get('stadiums', ['uses' => 'Admin\StadiumController@index'])->name('admin.stadiums');
Route::get('stadium/edit/{id}', ['uses' => 'Admin\StadiumController@edit'])->name('admin.stadiumEdit');
Route::put('stadium/save/{id}', 'Admin\StadiumController@save')->name('admin.stadiumSave');

//Pages
Route::get('pages', ['uses' => 'Admin\PageController@index'])->name('admin.pages');
Route::get('page/edit/{id}', ['uses' => 'Admin\PageController@edit'])->name('admin.pageEdit');
Route::put('page/save/{id}', 'Admin\PageController@save')->name('admin.pageSave');

//orders
Route::get('orders', ['uses' => 'Admin\OrdersController@index'])->name('admin.orders');
Route::get('order/add', ['uses' => 'Admin\OrdersController@add'])->name('admin.orderAdd');
Route::get('order/edit/{id}', ['uses' => 'Admin\OrdersController@edit'])->name('admin.orderEdit');
Route::put('order/save/{id}', 'Admin\OrdersController@save')->name('admin.orderSave');
Route::delete('order/delete/{id}', 'Admin\OrdersController@delete')->name('admin.orderDelete');

//Translations
Route::get('languages', 'Admin\TranslationsController@index')->name('language.index');
Route::get('languages/{language}/edit', 'Admin\TranslationsController@edit')->name('language.edit.get');
Route::post('languages/{language}/edit', 'Admin\TranslationsController@edit')->name('language.edit.post');
Route::put('languages/{language}', 'Admin\TranslationsController@update')->name('language.update');
Route::delete('languages/{language}', 'Admin\TranslationsController@destroy')->name('language.destroy');
Route::get('languages/create', 'Admin\TranslationsController@create')->name('language.create');
Route::post('languages/store', 'Admin\TranslationsController@store')->name('language.store');
Route::post('languages/{language}/switch-status', 'Admin\TranslationsController@switchStatus');
