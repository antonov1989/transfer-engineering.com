<!DOCTYPE html>
<html>
    <head lang="en">
        <meta charset="UTF-8">
        <meta name="viewport" content="width=device-width, initial-scale=1.0, maximum-scale=1.0, user-scalable=no">

        <title>@yield('title')</title>

        <meta name="description" content="@yield('description')" />
        <meta name="keywords" content="@yield('keywords')" />

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

        {{--<meta content="website" property="og:type">
        <meta content="Бампербол - футбол в шарах в Харькове" property="og:title">
        <meta content="http://www.xball.kh.ua" property="og:url">
        <meta content="http://www.xball.kh.ua/img/logos/bumber_ball_xball.jpg" property="og:image">
        <meta content="www.xball.kh.ua" property="og:site_name">
        <meta content="300" property="og:image:width">
        <meta content="225" property="og:image:height">

        <!--bootstrap css -->
        <link href="https://maxcdn.bootstrapcdn.com/bootstrap/3.3.7/css/bootstrap.min.css" type="text/css" rel="stylesheet" media="screen" />
        <!--font-->
        <link href='https://fonts.googleapis.com/css?family=Ubuntu+Condensed&subset=latin,cyrillic' rel='stylesheet' type='text/css'>
        <link href='https://fonts.googleapis.com/css?family=Open+Sans:400,300,600,700,800&subset=latin,cyrillic' rel='stylesheet' type='text/css'>

        <link rel="stylesheet" href="/css/fonts/ico-parallax/icoparallax.css"/>
        <link rel="stylesheet" href="/css/fonts/font-mm/font-mm.css"/>
        <link rel="stylesheet" href="/css/fonts/ionicons/ionicons.min.css"/>
        <link rel="stylesheet" href="/css/fonts/fontawesome/font-awesome.min.css"/>
        <link rel="stylesheet" href="/css/fonts/font-icons-lp/icon-lp.css"/>
        <!--.css files -->
        <link rel="stylesheet" href="/css/libs/mmenu/jquery.mmenu.all.css"/>
        <link rel="stylesheet" href="/css/libs/owl-carousel/owl.carousel.css"/>
        <link rel="stylesheet" href="/css/libs/owl-carousel/owl.theme.css"/>
        <link rel="stylesheet" href="/css/libs/owl-carousel/owl.transitions.css"/>
        <link rel="stylesheet" href="/css/libs/form-styler/jquery.formstyler.css"/>
        <link rel="stylesheet" href="/css/libs/gallery/magnific-popup.css"/>
        <link rel="stylesheet" href="/css/libs/master-slider/masterslider.css"/>
        <link rel="stylesheet" href="/css/libs/notify/toastr.min.css"/>
        <link rel="stylesheet" href="/css/libs/animated/animate.css"/>

        <link rel="stylesheet" href="/css/style.css"/>
        <link rel="shortcut icon" type="image/x-icon" href="/img/favicon.png">
        <!-- Jquery -->
        <script src="/js/libs/jquery.min.js" type="text/javascript"></script>
        <link rel="stylesheet" type="text/css" href="/css/libs/fancybox/jquery.fancybox.css?v=2.1.4" media="screen" />
        <!-- Global site tag (gtag.js) - Google Analytics -->
        <script async src="https://www.googletagmanager.com/gtag/js?id=UA-112532937-1"></script>
        <script>
          window.dataLayer = window.dataLayer || [];
          function gtag(){dataLayer.push(arguments);}
          gtag('js', new Date());

          gtag('config', 'UA-112532937-1');
        </script> --}}

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
{{--
<!-- Bootstrap Jquery -->
<script src="/js/libs/bootstrap.min.js" type="text/javascript"></script>
<script src="https://ze2019.com/ze-widget.js"></script>

<!-- Add fancyBox main JS and CSS files -->
<script type="text/javascript" src="/js/libs/fancybox/jquery.mousewheel-3.0.6.pack.js"></script>
<script type="text/javascript" src="/js/libs/fancybox/jquery.fancybox.js?v=2.1.4"></script>
--}}
