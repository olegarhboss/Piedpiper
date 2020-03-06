<?php

namespace App\Http\Controllers\API\Auth;

//use App\Http\Controllers\Controller; # Потому что избыточно в конкретном случае
use Illuminate\Http\Request;

class LogoutController// extends Controller
{
    /**
     * Handle the incoming request.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return \Illuminate\Http\Response
     */
    public function __invoke(Request $request)
    {   
        /** 
         * Просто удаляем все токены при выходе пользователя из системы
         * Деавторизация происходит на всех устройствах, однако можно и по другому...
        */
        $request->user()->tokens()->delete();

        return response()->json('Logged out successfully', 200);
    }
}
