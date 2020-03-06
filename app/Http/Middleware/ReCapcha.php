<?php

namespace App\Http\Middleware;

use Closure;

// Для HTTP запросов (тот же guzzlehttp)
use Illuminate\Support\Facades\Http;

class ReCapcha
{
    /**
     * Handle an incoming request.
     *
     * @param  \Illuminate\Http\Request  $request
     * @param  \Closure  $next
     * @return mixed
     */
    public function handle($request, Closure $next)
    {   
        // Уточняем у Гугла всё ли хорошо с капчей
        $response = Http::asForm()->post('https://www.google.com/recaptcha/api/siteverify', [
            'secret'   => config('recaptcha.secret'),
            'response' => $request->recaptchaToken,
            'remoteip' => $request->ip(),
        ]);
        
        // Продолжаем если гуглорекапча врена
        if ($response->json()['success']) {
            return $next($request);
        }
    }
}
