@extends('layouts.admin')

@section('title', 'Стадионы')

@section('content_header')
    <h1>Стадионы</h1>
@stop

@section('content')
    <div class="row">
        <div class="col-xs-12">
            <div class="box">
                <div class="box-body">
                    <table id="stadiumIndex" class="table table-bordered table-hover defaultIndexTable" data-page-length="25">
                        <thead>
                            <tr>
                                <td>ID</td>            
                                <td>Status</td>            
                                <td>Name</td>            
                                <td>Address</td>            
                                <td>Phone</td>            
                                <td>Site</td>            
                                <td width="1"></td>
                            </tr>
                        </thead>
                        <tbody>
                            @foreach ($list as $stadium)
                                <tr>
                                    <td>{{ $stadium->id }}</td>            
                                    <td><b class="label label-{{ ($stadium->status ? 'success' : 'danger') }}">{{ ($stadium->status ? 'Активен' : 'Не активен') }}</b></td>            
                                    <td>{{ $stadium->name }}</td>            
                                    <td>{{ $stadium->address }}</td>            
                                    <td>{{ $stadium->phone }}</td>            
                                    <td>{{ $stadium->site }}</td>
                                    <td>
                                        <a class="btn btn-success btn-sm ad-click-event" href="{{ route('admin.stadiumEdit', ['id' => $stadium->id]) }}">Edit</a>
                                    </td>           
                                </tr>
                            @endforeach
                        </tbody>
                    </table>
                </div>
            </div>
        </div>
    </div>
@stop