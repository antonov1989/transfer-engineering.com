@extends('layouts.admin')

@section('title', 'Callback edit')

@section('content_header')
    <h1>Редактирование заказа</h1>
@stop

@section('content')
    {{--@include('admin.errors')--}}
    <div class="row" style="margin: 0">
        <div class="col-xs-12 form-in-content">
            <div class="box box-exchanges">
                {!! Form::model($order, ['enctype' => 'multipart/form-data', 'method' => 'put',
                                        'route' => ['admin.orderSave', 'id' => $order->id],
                                        'class' => 'form-horizontal']) !!}
                @include('admin.orders.form')
                {!! Form::close() !!}
            </div>
        </div>
    </div>
@stop
