@extends('layouts.admin')

@section('title', 'Редактирование страницы')

@section('content_header')
    <h1>Редактирование страницы</h1>
@stop

@section('content')
    @include('admin.errors')        
    <div class="row" style="margin: 0">
        <div class="col-xs-12 form-in-content">
            <div class="box box-exchanges">
                {!! Form::model($page, ['enctype' => 'multipart/form-data', 'method' => 'put',
                                        'route' => ['admin.pageSave', 'id' => $page->id],
                                        'class' => 'form-horizontal']) !!}
                @include('admin.pages.form')
                {!! Form::close() !!}
            </div>
        </div>
    </div>
@stop
