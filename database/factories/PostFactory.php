<?php

/** @var \Illuminate\Database\Eloquent\Factory $factory */

use App\Models\Post;
use Faker\Generator as Faker;

$factory->define(Post::class, function (Faker $faker) {
    return [
        'cover'         => rand(1, 10) . '.jpg',
        'title'         => $faker->realText($maxNbChars = 42),
        'description'   => $faker->paragraph,
        'content'       => $faker->realText($maxNbChars = 3200),
        'published_at'    => $faker->date($format = 'Y-m-d', $max = 'now')
    ];
});
