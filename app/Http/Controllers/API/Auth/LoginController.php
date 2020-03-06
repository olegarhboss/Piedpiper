<?php

namespace App\Http\Controllers\API\Auth;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;

use App\User;
use App\Http\Resources\User as UserResource;

// Хеширование пароля
use Illuminate\Support\Facades\Hash;

class LoginController extends Controller
{
    /**
     * Handle the incoming request.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return \Illuminate\Http\Response
     */
    public function __invoke(Request $request)
    {   
        //! Ни когда не доверяй пользовательскому вводу
        $request->validate([
            'email' => 'required|string|email|max:255',
            'password' => 'required|string|min:8',
            'device_name' => 'required|string'
        ]);
        
        // Сначала попробуем найти пользователя с таким Email
        $user = User::whereEmail($request->email)->first();
        
        // Проверим есть ли такой пользователь в базе и верно ли он указал свой пароль
        // Если что-то не верно, плюнем ошибкой
        if (!$user || !Hash::check($request->password, $user->password))
        {
            abort(422, 'Неверные учётные данные.');
        }
        
        // Если запрос прошел все тяготы испытаний, то пожалуй можно добавить новый токен и отправить данные пользователя на клиент
        return response()->json([
            'token' => $user->createToken($request->device_name)->plainTextToken, 
            'user' => new UserResource($user)
        ]);
    }
}
