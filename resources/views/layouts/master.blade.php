<!DOCTYPE html>
<html lang="{{ $currentLanguage['locale'] }}">
    <head>
        <meta charset="UTF-8">
        <meta name="viewport" content="width=device-width, initial-scale=1.0, maximum-scale=1.0, user-scalable=no">

        <title>@yield('title')</title>

        <meta name="description" content="@yield('description')" />
        <meta name="keywords" content="@yield('keywords')" />

        <meta name="robots" content="index,follow" />

        @if (isset($currentLanguage) && $currentLanguage['locale'] !== 'en')
        <link rel="alternate" hreflang="en" href="{{ URL::to('/en') }}" />
        @endif
        @if (isset($currentLanguage) && $currentLanguage['locale'] !== 'ru')
        <link rel="alternate" hreflang="ru" href="{{ URL::to('/ru') }}" />
        @endif
        @if (isset($currentLanguage) && $currentLanguage['locale'] !== 'uk')
        <link rel="alternate" hreflang="uk" href="{{ URL::to('/uk') }}" />
        @endif

        <link rel="apple-touch-icon" sizes="57x57" href="/img/favicon/apple-icon-57x57.png">
        <link rel="apple-touch-icon" sizes="60x60" href="/img/favicon/apple-icon-60x60.png">
        <link rel="apple-touch-icon" sizes="72x72" href="/img/favicon/apple-icon-72x72.png">
        <link rel="apple-touch-icon" sizes="76x76" href="/img/favicon/apple-icon-76x76.png">
        <link rel="apple-touch-icon" sizes="114x114" href="/img/favicon/apple-icon-114x114.png">
        <link rel="apple-touch-icon" sizes="120x120" href="/img/favicon/apple-icon-120x120.png">
        <link rel="apple-touch-icon" sizes="144x144" href="/img/favicon/apple-icon-144x144.png">
        <link rel="apple-touch-icon" sizes="152x152" href="/img/favicon/apple-icon-152x152.png">
        <link rel="apple-touch-icon" sizes="180x180" href="/img/favicon/apple-icon-180x180.png">
        <link rel="icon" type="image/png" sizes="192x192" href="/img/favicon/android-icon-192x192.png">
        <link rel="icon" type="image/png" sizes="32x32" href="/img/favicon/favicon-32x32.png">
        <link rel="icon" type="image/png" sizes="96x96" href="/img/favicon/favicon-96x96.png">
        <link rel="icon" type="image/png" sizes="16x16" href="/img/favicon/favicon-16x16.png">
        <link rel="manifest" href="/img/favicon/manifest.json">
        <meta name="msapplication-TileColor" content="#ffffff">
        <meta name="msapplication-TileImage" content="/img/favicon/ms-icon-144x144.png">
        <meta name="theme-color" content="#ffffff">

        <!-- Global site tag (gtag.js) - Google Analytics -->
        <script async src="https://www.googletagmanager.com/gtag/js?id=UA-176716853-1"></script>
        <script>
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());

            gtag('config', 'UA-176716853-1');
        </script>

        <link rel="stylesheet" type="text/css" href="/css/bootstrap/bootstrap.min.css"/>
        <link rel="stylesheet" type="text/css" href="/css/theme/sites.css"/>
        <link rel="stylesheet" type="text/css" href="/css/theme/published.css"/>
        <link rel="stylesheet" type="text/css" href="/css/style.css"/>
        <link rel="stylesheet" type="text/css" href="/css/theme/slick.css"/>
        <link rel="stylesheet" type="text/css" href="/css/theme/fonts.css"/>

        <meta name="csrf-token" content="{{ csrf_token() }}">
    </head>

    <body class=" sprint5" data-gr-c-s-loaded="true" cz-shortcut-listen="true">

        @yield('layout')

    </body>
</html>
