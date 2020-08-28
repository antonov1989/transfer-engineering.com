@extends('layouts.master')

@section('layout')

    @yield('content')

@endsection

{{--  <div class="page lp-page lp-vape grey">
       <!--Header-->
       <header>
           <div class="container">
               <div class="header-inner">
                   <div class="header-top clearfix hidden-xs">
                       <div class="scroll-menu">
                           <div class="scroll-menu-container">
                               <div class="scroll-hide-menu">
                                   <a class="mini-logo" href="/">
                                       <img alt="Bumperball" src="/img/logo_mini.png">
                                   </a>
                               </div>
                               <ul class="nav navbar-nav navbar-left">
                                   <li class="social-btn">
                                       <a href="https://www.facebook.com/xball.kharkov/" class="social-box" title="facebook" target="_blank">
                                           <span class="icon icon-facebook"></span>
                                       </a>
                                       <a href="https://vk.com/xball_kharkov" class="social-box" title="vkontakte" target="_blank">
                                           <span class="icon icon-vk"></span>
                                       </a>
                                       <a href="https://twitter.com/XballKharkov" class="social-box" title="twitter" target="_blank">
                                           <span class="icon icon-twitter"></span>
                                       </a>
                                       <a href="https://www.instagram.com/xball_kharkov/" class="social-box" title="instagram" target="_blank">
                                           <span class="icon icon-instagram"></span>
                                       </a>
                                   </li>
                               </ul>

                               <div class="phone-list">
                                   <span>0994059722</span>
                                   <span>0734823238</span>
                                   <span>xballkh@gmail.com</span>
                               </div>

                               <div class="nav-site pull-right">
                                   <button type="button" class="navbar-toggle">
                                       <span class="sr-only">Toggle navigation</span>
                                       <span class="icon-bar"></span>
                                       <span class="icon-bar"></span>
                                       <span class="icon-bar"></span>
                                   </button>

                                   <div class="navbar-collapse" id="top-menu">
                                       <ul class="nav navbar-nav">
                                           <li><a href="/faq"><span>Вопросы и ответы</span></a></li>
                                           <li><a href="/price"><span>Оплата</span></a></li>
                                           <li><a href="/map"><span>Стадионы</span></a></li>
                                           <li><a href="/contacts"><span>Контакты</span></a></li>
                                       </ul>
                                   </div>
                               </div>
                           </div>
                       </div>
                   </div>

                   <div class="main-header">
                       <ul class="main-menu">

                           <li class="logo">
                               <div class="inner">
                                   <a href="/"><img src="/img/logo.png" alt="Bumperball"/></a>
                               </div>
                           </li>
                       </ul>

                       <div class="clearfix visible-xs"></div>
                   </div>
               </div>
           </div>
       </header>
       <!--Header End-->

       <div class="header-margin"></div>

   </div>

   <!--Footer-->
   <footer>
       <div class="container">
       </div>
       <div class="bottom-block">
           <div class="container">
               <div class="col-sm-6 no-padd">
                   <div class="copyright">
                       &copy; 2017 -  Bumperball в Харькове
                   </div>
               </div>
           </div>
       </div>
   </footer>
   <!--Footer End-->
   <div id="message-block"></div>
   <div id="error-block"></div>


   <!-- Modals -->
   @include('dialogs/order')
   @include('dialogs/callback')

   --}}