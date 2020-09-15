@extends('layouts.public')
@section('title', trans('meta.home_title'))
@section('description', trans('meta.home_description'))
@section('keywords', trans('meta.home_keywords'))

@section('content')
    <!--Main-->
    <div id="site_wrapper1">
        <div id="sections_list">

    @include('includes.header')
@endsection