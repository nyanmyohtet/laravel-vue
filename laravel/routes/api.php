<?php

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;

/*
|--------------------------------------------------------------------------
| API Routes
|--------------------------------------------------------------------------
|
| Here is where you can register API routes for your application. These
| routes are loaded by the RouteServiceProvider within a group which
| is assigned the "api" middleware group. Enjoy building your API!
|
*/

Route::middleware('auth:api')->get('/user', function (Request $request) {
    return $request->user();
});

// Register verify API
Route::get('/auth/signup/activate/{token}', 'Auth\AuthController@registerActivate');

Route::post('login', 'Auth\AuthController@login');
Route::post('register', 'Auth\AuthController@register');

// auth routes
Route::group(['middleware' => 'auth:api'], function () {
    Route::post('details', 'Auth\AuthController@details');

    // Post API
    Route::get('posts', 'PostController@index');
    Route::group(['prefix' => 'post'], function () {
        Route::get('edit/{id}', 'PostController@edit');
        Route::post('create', 'PostController@store');
        Route::post('update/{id}', 'PostController@update');
        Route::delete('delete/{id}', 'PostController@delete');
    });
});

// PDF download route
Route::post('/pdf/download', 'PDF\PDFController@download');
