@extends('layouts.admin')

@section('title', 'Страницы')

@section('content_header')
    <h1>Страницы</h1>
@stop

@section('content')
    <div class="row">
        <div class="col-xs-12">
            <div class="box">
                <div class="box-body">
                    <table id="pageIndex" class="table table-bordered table-hover defaultIndexTable" data-order='[[ 0, "asc" ]]' data-page-length="25">
                        <thead>
                            <tr>
                                <td>ID</td>            
                                <td>Alias</td>            
                                <td>Title</td>                      
                                <td width="1"></td>
                            </tr>
                        </thead>
                        <tbody>
                            @foreach ($list as $page)
                                <tr>
                                    <td>{{ $page->id }}</td>            
                                    <td>{{ $page->alias }}</td>            
                                    <td>{{ $page->title }}</td>            
                                    <td>
                                        <a class="btn btn-success btn-sm ad-click-event" href="{{ route('admin.pageEdit', ['id' => $page->id]) }}">Edit</a>
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