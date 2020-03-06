<?php

namespace App\Http\Controllers\API\Auth;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;

use App\Http\Resources\User as UserResource;
use App\User;

// Хеширование пароля
use Illuminate\Support\Facades\Hash;

class RegisterController extends Controller
{
    /**
     * Handle the incoming request.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return \Illuminate\Http\Response
     */
    public function __invoke(Request $request)
    {
        //! Обязательно проверим пользовательский ввод
        $request->validate([
            'name' => 'required|string|max:255',
            'birthday' => 'required|date',
            'email' => 'required|string|email|max:255|unique:users',
            'password' => 'required|string|min:8|confirmed',
            'photo' => 'required|file|mimes:jpeg,png|max:2048'
        ]);
        
        // Создаём нового пользователя
        $user = User::create([
            'name' => $request->name,
            'email' => $request->email,
            'birthday' => $request->birthday,
            'password' => Hash::make($request->password),
        ]);
        
        // Прикрепляем к нему фоточку
        $user->setPhoto($request->photo);
        
        // Возвращаем токен авторизации и некоторые данные пользователя
        return response()->json(['token' => $user->createToken($request->device_name)->plainTextToken, 'user' => new UserResource($user)]);
    }
}