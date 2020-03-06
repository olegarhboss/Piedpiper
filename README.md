## Тестовое задание на должность PHP программиста в компанию Фогстрим

В данном задании также частично охвачено тестовое задание на должность фронтенд разработчика.
Фронтент реализован как SPA Vue.js с использованием аналогов React:

- [Demo](https://wmdv.site).

### Frontend

- [Vue.js](https://vuejs.org).
- [vue-router](https://router.vuejs.org).
- [vuex](https://vuex.vuejs.org).
- [vuetify](vuetifyjs.com).
- [vue-recaptcha](https://github.com/DanSnow/vue-recaptcha#readme).
- [axios](https://github.com/axios/axios).

### Backend

- [Laravel 7](https://laravel.com).
- [Laravel Airlock](https://laravel.com/docs/7.x/airlock).
- [intervention/image](http://image.intervention.io).
- [guzzlehttp/guzzle](https://laravel.com/docs/7.x/http-client).

#### Комментарии

Для взамодействия с бэкэндом был задействован официальный пакет Airlock для упращения работы с API. Часть маршрутов защищена middleware авторизации и Google reCapcha v2 (логин и регистрация), все необходимые настройки находется в .env. Так же реализовано два ресурсных контроллера для моделей User (пользователи) и Post (новости). Все контроллеры API находятся в отдельной дерриктории контроллеров App\Http\Controllers\API.



