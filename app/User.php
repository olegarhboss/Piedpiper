<?php

namespace App;

// Пожалуй оставим это на всякий случай =)
use Illuminate\Contracts\Auth\MustVerifyEmail;
use Illuminate\Foundation\Auth\User as Authenticatable;
use Illuminate\Notifications\Notifiable;

// Трейт для корректной работы Arlock
use Laravel\Airlock\HasApiTokens;

// Раширение модели пользователя, для удобства
use App\Traits\UserTrait;

class User extends Authenticatable
{
    use HasApiTokens, Notifiable, UserTrait;

    /**
     * The attributes that are mass assignable.
     *
     * @var array
     */
    protected $fillable = [
        'name', 'email', 'password', 'birthday'
    ];

    /**
     * The attributes that should be hidden for arrays.
     *
     * @var array
     */
    protected $hidden = [
        'password', 'remember_token',
    ];

    /**
     * The attributes that should be cast to native types.
     *
     * @var array
     */
    protected $casts = [
        'email_verified_at' => 'datetime',
    ];

    protected $dates = [
        'birthday',
    ];
}
