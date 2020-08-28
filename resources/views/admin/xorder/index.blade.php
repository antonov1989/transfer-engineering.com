@extends('layouts.admin')

@section('title', 'Callback')

@section('content_header')
    <h1>Callback</h1>
@stop

@section('content')
    <div class="row">
        <div class="col-xs-12">
            <div class="box">
                <div class="box-body">
                    <table id="xorderIndex" class="table table-bordered table-hover defaultIndexTable" data-page-length="25">
                        <thead>
                            <tr>
                                <td>ID</td>            
                                <td>Status</td>            
                                <td>Date</td>            
                                <td>User Name</td>            
                                <td>User Contact</td>            
                                <td>User Info</td>            
                                <td width="1"></td>
                            </tr>
                        </thead>
                        <tbody>
                        @foreach ($xorders as $order)
                            <tr>
                                <td>{{ $order->id }}</td>       
                                <td><b class="label label-{{ ($order->status ? 'success' : 'danger') }}">{{ ($order->status ? 'Проверено' : 'Не проверено') }}</b></td>                 
                                <td>{{ $order->created_at }}</td>
                                <td>{{ $order->user_name }}</td>            
                                <td>{{ $order->user_contact }}</td>            
                                <td>{{ $order->user_info }}</td>            
                                <td width="150">
                                    <a class="btn btn-primary btn-sm" href="{{ route('admin.xorderEdit', ['id' => $order->id]) }}">
                                        <i class="glyphicon glyphicon-pencil"></i>
                                        Edit
                                    </a>
                                    <a class="btn btn-sm btn-danger deleteButton" data-target="#deleteModal" data-toggle="modal" data-href="{{ route('admin.xorderDelete', ['id' => $order->id]) }}">
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