<?php

namespace App\Http\Controllers\API;

//use App\Http\Controllers\Controller;
//use Illuminate\Http\Request;

class RecaptchaKey// extends Controller
{
    /**
     * Handle the incoming request.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return \Illuminate\Http\Response
     */
    public function __invoke()
    {
        return response()->json(['key' => config('recaptcha.key')]);
    }
}
