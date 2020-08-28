@extends('adminlte::page')

@section('title', 'Edit Language - Admin Panel | VCDepth.io')

@section('content_header')
    <h1>Edit Language - {{$language->name}}</h1>
    {{--{{ Breadcrumbs::render('languages.action', 'Edit Coin') }}--}}
@stop

@section('content')
    @include('admin.notifications')
    @include('admin.errors')
    <div class="row" style="margin: 0">
        <div class="col-xs-12 form-in-content">
                {!! Form::model($data['language'], ['method' => 'put', 'route' => ['language.update', 'id' => $data['language']->id], 'enctype' => "multipart/form-data", 'class' => 'form-horizontal language-form']) !!}
                @include('admin.translations.form')
                {!! Form::close() !!}
        </div>
    </div>
@stop


