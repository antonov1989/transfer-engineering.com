<?php

/*
|--------------------------------------------------------------------------
| Application Routes
|--------------------------------------------------------------------------
|
| Here is where you can register all of the routes for an application.
| It's a breeze. Simply tell Laravel the URIs it should respond to
| and give it the controller to call when that URI is requested.
|
*/

/*Route::get('/faq', 'HomeController@faq')->name('faq');
Route::get('/price', 'HomeController@price')->name('price');
Route::get('/contacts', 'HomeController@contacts')->name('contacts');
//Route::get('/gallery', 'GalleryController@index')->name('gallery');
//Route::get('/video', 'VideoController@index')->name('video');
//Route::get('/promo', 'PromoController@index')->name('promo');

Route::get('/add-order', ['as' => 'addOrder', 'uses' => 'OrderController@addOrder']);
Route::get('/add-callback', ['as' => 'addCallback', 'uses' => 'OrderController@addCallback']);
Route::get('/map', 'MapController@index')->name('map');*/

$localizer = \App::make(\App\Helpers\UriLocalizer::class);

Route::group(['prefix' => $localizer->localeFromRequest(), 'middleware' => 'localize'], function () {
    Route::get('/', 'HomeController@index')->name('home');

    Route::get('/product/{alias}.html', 'ProductController@index')->name('product');
});

Route::post('/api/sendMessage', 'HomeController@sendMessage')->name('sendMessage');

/*
Route::get('/{locale}', function ($locale) {
    if (! in_array($locale, ['en', 'ru', 'uk'])) {
        abort(400);
    }
    
    App::setLocale($locale);
});*/

Route::group(['prefix' => 'auth'], function () {
    Route::get('login', 'Auth\AuthController@getLogin');
    Route::post('login', 'Auth\AuthController@postLogin');
    Route::get('admin', 'Auth\AuthController@getAdminLogin');
    Route::post('admin', 'Auth\AuthController@postAdminLogin');
    Route::get('logout', 'Auth\AuthController@getLogout');

    //Route::get('register', 'Auth\AuthController@getRegister');
    //Route::post('register', 'Auth\AuthController@postRegister');
});
   
Route::get('/admin', function () {
    return redirect('/auth/login');
});

Route::get('/home', function () {
    return redirect('/admin/dashboard');
});
/*Route::group(['prefix' => 'admin'], function () {
    Route::get('login', 'Admin\Auth\LoginController@showLoginForm')->name('admin.login');
    Route::post('login', 'Admin\Auth\LoginController@login');          
    Route::get('logout', 'Admin\Auth\LoginController@logout'); 
});*/ 


/*Route::group(['before' => 'guest.admin', 'as' => 'admin::'], function () {
    Route::get('auth/login', function () {
        return View::make('user.login');
    })->name('login');

    Route::post('auth/login', 'UserController@adminLogin');
});  */

/*Route::group(['prefix' => 'admin', 'middleware' => 'menu.admin'], function () {
    Route::get('dashboard', function () {
        return view('welcome');
    });
});

Route::group(['prefix' => 'user', 'middleware' => 'menu.user'], function () {
    Route::get('dashboard', function () {
        return view('welcome');
    });
}); */

/*Route::get('protected', ['middleware' => ['auth', 'admin'], function() {
    return "this page requires that you be logged in and an Admin";
}]);      */

/*Route::group(['prefix'=>'admin'],   function() {
    Route::get('/xorders', ['as' => 'adminOrders', 'uses' => 'AdminController@index']);
});  */
