<?php

use Illuminate\Http\Request;

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

Route::namespace('API')->group(function () {
    # Передаём ключ гугло капчи на фронтенд
    Route::get('recaptcha', 'RecaptchaKey');
    
    # Авторизация
    Route::post('auth/login', 'Auth\LoginController')->middleware('ReCapcha');
    
    # Регистрация
    Route::post('auth/register', 'Auth\RegisterController')->middleware('ReCapcha');

    # Просмотр публикаций
    Route::apiResource('posts', 'PostController')->only(['index', 'show']);
});

# Только для авторизированных пользователей
Route::namespace('API')->middleware('auth:airlock')->group(function () {
    # Выход из системы
    Route::get('auth/logout', 'Auth\LogoutController');

    # Управление профилем пользователя
    Route::apiResource('users', 'UserController');

    # Управление публикациями (Новости)
    Route::apiResource('posts', 'PostController')->except(['index', 'show']);
});
