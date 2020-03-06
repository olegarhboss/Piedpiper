<!DOCTYPE html>
<html lang={{ config('app.locale') }}>

{{-- Preconnect --}}
<link rel=preconnect href=https://fonts.googleapis.com>
<link rel=preconnect href=https://cdn.jsdelivr.net>
<link rel=preconnect href=https://www.google.com>
<link rel=preconnect href=https:/www.gstatic.com>

{{-- Метаданные --}}
<meta charset=utf-8>
<title>{{ $meta['title'] ?? config('app.name') }}</title>
<meta name=description content="{{ $meta['description'] ?? 'Get ready for the best fucking experience of your life' }}">
<link rel=canonical href={{ $meta['canonical'] ?? config('app.url') }}>

{{-- Микроформаты --}}
<meta property=og:type content=website>
<meta property=og:site_name content="{{ config('app.name') }}">
<meta property=og:title content="{{ $meta['title'] ?? config('app.name') }}">
<meta property=og:description content="{{ $meta['description'] ?? 'Get ready for the best fucking experience of your life' }}">
<meta property=og:url content={{ $meta['canonical'] ?? config('app.url') }}>
<meta property=og:image content={{ $meta['image'] ?? asset('/favicons/android-chrome-192x192.png') }}>
<meta property=og:image:height content={{ $meta['height'] ?? 192 }}>
<meta property=og:image:width content={{ $meta['width'] ?? 192 }}>
<meta property=og:image:type content=image/png>

<meta name=csrf-token content="{{ csrf_token() }}">
<meta name=author content="Oleg Polyakov">
<meta name=viewport content="width=device-width, initial-scale=1, shrink-to-fit=no">
<meta http-equiv=X-UA-Compatible content="IE=Edge">

{{-- Иконочки приложения --}}
<link rel="apple-touch-icon" sizes="57x57" href="/favicons/apple-touch-icon-57x57.png">
<link rel="apple-touch-icon" sizes="60x60" href="/favicons/apple-touch-icon-60x60.png">
<link rel="apple-touch-icon" sizes="72x72" href="/favicons/apple-touch-icon-72x72.png">
<link rel="apple-touch-icon" sizes="76x76" href="/favicons/apple-touch-icon-76x76.png">
<link rel="apple-touch-icon" sizes="114x114" href="/favicons/apple-touch-icon-114x114.png">
<link rel="apple-touch-icon" sizes="120x120" href="/favicons/apple-touch-icon-120x120.png">
<link rel="apple-touch-icon" sizes="144x144" href="/favicons/apple-touch-icon-144x144.png">
<link rel="apple-touch-icon" sizes="152x152" href="/favicons/apple-touch-icon-152x152.png">
<link rel="apple-touch-icon" sizes="167x167" href="/favicons/apple-touch-icon-167x167.png">
<link rel="apple-touch-icon" sizes="180x180" href="/favicons/apple-touch-icon-180x180.png">
<link rel="apple-touch-icon" sizes="1024x1024" href="/favicons/apple-touch-icon-1024x1024.png">
<link rel="apple-touch-startup-image" media="(device-width: 320px) and (device-height: 480px) and (-webkit-device-pixel-ratio: 1)" href="/favicons/apple-touch-startup-image-320x460.png">
<link rel="apple-touch-startup-image" media="(device-width: 320px) and (device-height: 480px) and (-webkit-device-pixel-ratio: 2)" href="/favicons/apple-touch-startup-image-640x920.png">
<link rel="apple-touch-startup-image" media="(device-width: 320px) and (device-height: 568px) and (-webkit-device-pixel-ratio: 2)" href="/favicons/apple-touch-startup-image-640x1096.png">
<link rel="apple-touch-startup-image" media="(device-width: 375px) and (device-height: 667px) and (-webkit-device-pixel-ratio: 2)" href="/favicons/apple-touch-startup-image-750x1294.png">
<link rel="apple-touch-startup-image" media="(device-width: 414px) and (device-height: 736px) and (orientation: landscape) and (-webkit-device-pixel-ratio: 3)" href="/favicons/apple-touch-startup-image-1182x2208.png">
<link rel="apple-touch-startup-image" media="(device-width: 414px) and (device-height: 736px) and (orientation: portrait) and (-webkit-device-pixel-ratio: 3)" href="/favicons/apple-touch-startup-image-1242x2148.png">
<link rel="apple-touch-startup-image" media="(device-width: 768px) and (device-height: 1024px) and (orientation: landscape) and (-webkit-device-pixel-ratio: 1)" href="/favicons/apple-touch-startup-image-748x1024.png">
<link rel="apple-touch-startup-image" media="(device-width: 768px) and (device-height: 1024px) and (orientation: landscape) and (-webkit-device-pixel-ratio: 2)" href="/favicons/apple-touch-startup-image-1496x2048.png">
<link rel="apple-touch-startup-image" media="(device-width: 768px) and (device-height: 1024px) and (orientation: portrait) and (-webkit-device-pixel-ratio: 1)" href="/favicons/apple-touch-startup-image-768x1004.png">
<link rel="apple-touch-startup-image" media="(device-width: 768px) and (device-height: 1024px) and (orientation: portrait) and (-webkit-device-pixel-ratio: 2)" href="/favicons/apple-touch-startup-image-1536x2008.png">
<link rel="icon" type="image/png" sizes="16x16" href="/favicons/favicon-16x16.png">
<link rel="icon" type="image/png" sizes="32x32" href="/favicons/favicon-32x32.png">
<link rel="icon" type="image/png" sizes="228x228" href="/favicons/coast-228x228.png">
{{--<link rel="manifest" href="/favicons/manifest.json">--}}
<link rel="shortcut icon" href="/favicons/favicon.ico">
{{--<link rel="yandex-tableau-widget" href="/favicons/yandex-browser-manifest.json">--}}
<meta name="apple-mobile-web-app-capable" content="yes">
<meta name="apple-mobile-web-app-status-bar-style" content="black-translucent">
<meta name="apple-mobile-web-app-title">
<meta name="application-name">
<meta name="mobile-web-app-capable" content="yes">
<meta name="msapplication-TileColor" content="#fff">
<meta name="msapplication-TileImage" content="/favicons/mstile-144x144.png">
{{--<meta name="msapplication-config" content="/favicons/browserconfig.xml">--}}
<meta name="theme-color" content="#fff">

{{-- Логотип --}}
<script type="application/ld+json">
{
  "@context": "https://schema.org",
  "@type": "Organization",
  "url": "{{ config('app.url') }}",
  "logo": "{{ config('app.url') }}/img/logo.png"
}
</script>

{{-- Fonts --}}
<link href="https://fonts.googleapis.com/css?family=Open+Sans&display=swap" rel="stylesheet">
<link href="https://cdn.jsdelivr.net/npm/@mdi/font@4.x/css/materialdesignicons.min.css" rel="stylesheet">

{{-- "Красотища" --}}
<link rel=stylesheet href="{{ mix('css/app.css') }}">

{{-- Точка входа для Vue --}}
<div id=js-app></div>

{{-- Магия --}}
<script src="{{ mix('js/app.js') }}"></script>
</html>
