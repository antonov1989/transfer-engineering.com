@extends('layouts.public')

@section('title', 'Transfer-engineering - Оплата')
@section('description', 'Оплата за игру в бампербол в Харькове')
@section('keywords', 'Price оплата условия ')

@section('content')
    <!--Main-->
    <main>
        <div class="profile-page">
            <div class="container">
                <ol class="breadcrumb" xmlns:v="http://rdf.data-vocabulary.org/#">
                    <li typeof="v:Breadcrumb"><a href="/" rel="v:url" property="v:title"><i class="ion-ios-home-outline"></i> Главная</a></li>
                    <li typeof="v:Breadcrumb" class="active"><a href="#" rel="v:url" property="v:title">Оплата</a></li>
                </ol>
                <div class="page-header clearfix">
                    <h1 class="name pull-left">Оплата</h1>
                </div>
                <div class="row">
                    <div class="point-block">
                        <div class="container">
                            <div class="header-point">
                                <div class="descr wow fadeIn">
                                    <br />
                                    В стоимость входит: аренда поля, инструктор, который расскажет правила игры и технику безопасности, судья, шары для игры, а так же вода.<br />
                                    Мы найдем место для проведения мероприятия в удобном для вас районе города.<br />
                                    При заказе Вам необходимо внести 50% предоплату за первый час игры.
                                </div>
                            </div>
                            <div class="inner scrollimation price-block">
                                <div class="row">
                                    <div class="col-xs-6">
                                        <div class="content left-content">
                                            <div class="image wow zoomIn">
                                                <h3>Предложение "Стандарт"</h3>
                                                <p>6-12 человек</p>
                                                <br>
                                                <p><b>6 шаров</b> - 1599грн</p>
                                                <p><b>8 шаров</b> - 1699грн</p>
                                                <p><b>10 шаров</b> - 1799грн</p>
                                                <p><b>12 шаров</b> - 1899грн</p>
                                                <br>
                                                <p><b>каждый следующий час на 30% дешевле</b></p>
                                            </div>
                                        </div>
                                    </div>
                                    <div class="col-xs-6">
                                        <div class="content right-content">
                                            <div class="image wow zoomIn">
                                                <h3>Предложение "X-Ball"</h3>
                                                <p>
                                                    Предоставляем 6-12 шаров для вашей игры<br />
                                                    Приедем к вам за 100 км от Харькова<br />
                                                </p>
                                                <br>
                                                <p><b>6 шаров</b> - 2199грн</p>
                                                <p><b>8 шаров</b> - 2299грн</p>
                                                <p><b>10 шаров</b> - 2399грн</p>
                                                <p><b>12 шаров</b> - 2499грн</p>
                                                <br>
                                                <p><b>каждый следующий час на 50% дешевле</b></p>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div class="row">
                                <div class="col-xs-12">
                                    При отмене заказа:     <br />
                                    - Отказ более чем 14 дней - возвращается полная предоплата, за исключением комиссии банка<br />
                                    - Отказ более 36 часов - возвращается предоплата, за исключением комиссии банка и стоимости арендной платы за поле.<br />
                                    - Отказ в течении 36 часов до началы игры - предоплата не возвращается.          <br />
                                </div>
                                <div class="col-xs-12">
                                    <p>Дополнительно можно заказать <b>Фото и Видео съемку</b> - 250 грн за час</p>
                                </div>
                            </div>    
                            <div class="row">
                                <div class="col-xs-3"></div>
                                <div class="col-xs-6">
                                    <a class="order-add-button" data-target="#add-order" data-toggle="modal" href="#">Заказать игру</a>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                
                @include('includes/calc')
            </div>
        </div>

        <div id="darkness" class="hidden-xs"></div>
    </main>
    <!--Main End-->

    <div class="sticky-btns">
        <span id="scrollTop-btn"><i class="fa fa-chevron-up"></i></span>
    </div>
@endsection