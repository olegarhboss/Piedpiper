<?php

namespace App\Providers;

use Illuminate\Support\ServiceProvider;

// Для отключения внешней обёртки ресурсов
use Illuminate\Http\Resources\Json\JsonResource;

class AppServiceProvider extends ServiceProvider
{
    /**
     * Register any application services.
     *
     * @return void
     */
    public function register()
    {
        //
    }

    /**
     * Bootstrap any application services.
     *
     * @return void
     */
    public function boot()
    {
        // Отключение внешней обёртки ресурсов
        JsonResource::withoutWrapping();
    }
}
