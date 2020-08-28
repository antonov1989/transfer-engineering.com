@extends('adminlte::page')

@section('title', 'Add Language - Admin Panel | VCDepth.io')

@section('content_header')
    <h1>Add Language</h1>
    {{--{{ Breadcrumbs::render('languages.action', 'Edit Coin') }}--}}
@stop

@section('content')
    @include('admin.notifications')
    @include('admin.errors')
    <div class="row" style="margin: 0">
        <div class="col-xs-12 form-in-content">
                {!! Form::open(['method' => 'post', 'route' => ['language.store'], 'enctype' => "multipart/form-data", 'class' => 'form-horizontal language-form']) !!}
                @include('admin.translations.form')
                {!! Form::close() !!}
        </div>
    </div>
@stop

