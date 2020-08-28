@extends('layouts.admin')

@section('title', 'Callback edit')

@section('content_header')
    <h1>Callback edit</h1>
@stop

@section('content')
    {{--@include('admin.errors')--}}
    <div class="row" style="margin: 0">
        <div class="col-xs-12 form-in-content">
            <div class="box box-exchanges">
                {!! Form::model($xorder, ['enctype' => 'multipart/form-data', 'method' => 'put',
                                        'route' => ['admin.xorderSave', 'id' => $xorder->id],
                                        'class' => 'form-horizontal']) !!}
                @include('admin.xorder.form')
                {!! Form::close() !!}
            </div>
        </div>
    </div>
@stop
