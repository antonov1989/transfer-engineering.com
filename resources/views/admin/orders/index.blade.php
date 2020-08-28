@extends('layouts.admin')

@section('title', 'Callback')

@section('content_header')
    <h1>Заказы</h1>
@stop

@section('content')
    <div class="row">
        <div class="col-xs-12">
            <a class="btn btn-success" href="{{ route('admin.orderAdd', []) }}">
                <i class="glyphicon glyphicon-plus"></i>
                Add
            </a>
        </div>
    </div>
    <div class="row">
        <div class="col-xs-12">
            <div class="box">
                <div class="box-body">
                    <table id="orderIndex" class="table table-bordered table-hover defaultIndexTable">
                        <thead>
                            <tr>
                                <td>ID</td>
                                <td>Статус</td>
                                <td>Заказчик</td>
                                <td>Телефон</td>
                                <td>Время Игры</td>
                                <td>Время Стадиона</td>
                                <td>Мячей</td>
                                <td>Людей</td>
                                <td>Нужно видео?</td>
                                <td>Ст. Заказа</td>
                                <td>Ст. Стадиона</td>
                                <td>Ст. съемки</td>
                                <td>Инфо</td>
                                <td width="1"></td>
                            </tr>
                        </thead>
                        <tbody>
                        @foreach ($orders as $order)
                            <tr>
                                <td>{{ $order->id }}</td>       
                                <td><b class="label label-{{ $statusClass[$order->status] }}">{{ $statusList[$order->status] }}</b></td>
                                <td>{{ $order->user_name }}</td>
                                <td>{{ $order->user_phone }}</td>
                                <td>{{ $order->game_time_from_at }} - {{ $order->game_time_to_at }}</td>
                                <td>{{ $order->stadium_time_from_at }} - {{ $order->stadium_time_to_at }}</td>
                                <td>{{ $order->ball_count }}</td>
                                <td>{{ $order->people_count }}</td>
                                <td>{{ ($order->has_video_stream ? 'Да' : 'Нет') }}</td>
                                <td>{{ $order->order_pay }}</td>
                                <td>{{ $order->stadium_pay }}</td>
                                <td>{{ $order->video_pay }}</td>
                                <td>{{ $order->info }}</td>
                                <td width="150">
                                    <a class="btn btn-primary btn-sm" href="{{ route('admin.orderEdit', ['id' => $order->id]) }}">
                                        <i class="glyphicon glyphicon-pencil"></i>
                                        Edit
                                    </a>
                                    <a class="btn btn-sm btn-danger deleteButton" data-target="#deleteModal" data-toggle="modal" data-href="{{ route('admin.orderDelete', ['id' => $order->id]) }}">
                                        <i class="glyphicon glyphicon-trash"></i>
                                        <span>Delete</span>
                                    </a>
                                </td>            
                            </tr>
                        @endforeach
                        </tbody>
                    </table>
                </div>
            </div>
        </div>
    </div>
    
    <div class="modal custom-modal" id="deleteModal" tabindex="-1" role="dialog" aria-labelledby="deleteModalLabel">
        <div class="modal-dialog" role="document">
            <div class="modal-content">
                <div class="modal-header">
                    <button type="button" class="close" data-dismiss="modal" aria-label="Close"><span aria-hidden="true">&times;</span></button>
                    <h4 class="modal-title" id="myModalLabel">Delete Footer Link</h4>
                </div>
                <div class="modal-body">
                    Are you sure you want to delete this item?
                </div>
                <div class="modal-footer">
                    <button type="button" id="modal-close" class="btn btn-default pull-left" data-dismiss="modal">Close</button>
                    <button type="button" id="modal-delete" class="btn btn-danger">Delete</button>
                </div>
            </div>
        </div>
    </div>
    
@stop