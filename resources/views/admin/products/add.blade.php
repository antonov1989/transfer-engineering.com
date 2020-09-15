@extends('layouts.admin')

@section('title', 'Редактирование страницы')

@section('content_header')
    <h1>Добавить продукт</h1>
@stop

@section('content')
    @include('admin.errors')
    <div class="row" style="margin: 0">
        <div class="col-xs-12 form-in-content">
            <div class="box box-exchanges">
                {!! Form::open(['enctype' => 'multipart/form-data', 'method' => 'put',
                                        'route' => ['admin.productStore'],
                                        'class' => 'form-horizontal']) !!}
                @include('admin.products.form')
                {!! Form::close() !!}
            </div>
        </div>
    </div>
@stop