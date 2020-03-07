# Тестовое задание на должность PHP программиста в компанию Фогстрим

В данном задании также частично охвачено тестовое задание на должность фронтенд разработчика.
Фронтент реализован как SPA Vue.js с использованием аналогов React:

- [Demo](https://wmdv.site).

- [Swagger](https://app.swaggerhub.com/apis/webmasterolegan/TestTask/0.0.1)
Со **Swagger** познакомился впервые, но инструмент очень понравился. При тестировании на хостинге [wmdv.site](https://wmdv.site) запросы PUT и DELETE отключены на сервере, поэтому необходимо вместо них использовать POST запросы с переменной _method содержащей имя метода (PUT,DELETE).

API описан без учёта особенностей настроек хостинга демоверсии. Так же в личном кабинете пользователя (страница профиля) предусмотрена возможность скопировать токен авторизации для удобства тестирования. При выходе из системы происходит удаление всех токенов (выход со всех устройств)

## Frontend

- [Vue.js](https://vuejs.org) - Frontend Framework.
- [vue-router](https://router.vuejs.org) - Маршрутизация.
- [vuex](https://vuex.vuejs.org) - Управление состоянием для Vue.js (Аналог Redux).
- [vuetify](https://vuetifyjs.com) - Material UI для Vue.js.
- [vue-recaptcha](https://github.com/DanSnow/vue-recaptcha#readme) - Компонент для внедрения Google reCaptcha.
- [axios](https://github.com/axios/axios) - Асинхронные HTTP запросы.

## Backend

- [Laravel 7](https://laravel.com) - Наисвежайший! Backend Framework.
- [Laravel Airlock](https://laravel.com/docs/7.x/airlock) - API Авторизация со всякими плюшками уже в комплекте.
- [intervention/image](http://image.intervention.io) - Обработка изображений (Реализована загрузка изображений для профиля пользователя).
- [guzzlehttp/guzzle](https://laravel.com/docs/7.x/http-client) - Фасад для HTTP запросов, в данном случае использется для работы с Google reCaptcha.

### Комментарии

Для API авторизации был задействован официальный пакет [Airlock](https://laravel.com/docs/7.x/airlock), с ним очень просто делать авторизацию для API, в нём уже многое есть из каробки.

Так же реализовано два [ресурсных](https://laravel.com/docs/7.x/controllers#resource-controllers) API контроллера для моделей User (пользователи) и Post (новости), Так же для этих моделей созданы [API ресурсы](https://laravel.com/docs/7.x/eloquent-resources).
Все контроллеры API находятся в отдельной дерриктории контроллеров App\Http\Controllers\API.