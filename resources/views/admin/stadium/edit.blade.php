@extends('layouts.admin')

@section('title', 'Редактирование стадиона')

@section('content_header')
    <h1>Редактирование стадиона</h1>
@stop

@section('content')
    @include('admin.errors')        
    <div class="row" style="margin: 0">
        <div class="col-xs-12 form-in-content">
            <div class="box box-exchanges">
                {!! Form::model($stadium, ['enctype' => 'multipart/form-data', 'method' => 'put',
                                        'route' => ['admin.stadiumSave', 'id' => $stadium->id],
                                        'class' => 'form-horizontal']) !!}
                @include('admin.stadium.form')
                {!! Form::close() !!}
            </div>
        </div>
    </div>
@stop
