@extends('layouts.admin')

@section('title', 'Страницы')

@section('content_header')
    <h1 style="display: inline-block; margin-right: 15px">Продукты</h1>
    <a class="btn btn-success above-table-action" href="{{route('admin.productAdd')}}"><i class="glyphicon glyphicon-plus"></i> Add product </a>
@stop

@section('content')
    <div class="row">
        <div class="col-xs-12">
            <div class="box">
                <div class="box-body">
                    <table id="productIndex" class="table table-bordered table-hover defaultIndexTable" data-order='[[ 0, "asc" ]]' data-product-length="25">
                        <thead>
                            <tr>
                                <td>ID</td>
                                <th class="sortable sorting">Active</th>
                                <td>Alias</td>            
                                <td>Name</td>
                                <td width="100"></td>
                            </tr>
                        </thead>
                        <tbody>
                            @foreach ($list as $product)
                                <tr>
                                    <td>{{ $product->id }}</td>
                                    <td><b class="label label-{{ ($product->active ? 'success' : 'danger') }}">{{ ($product->active ? 'Активен' : 'Не активен') }}</b></td>
                                    <td>{{ $product->alias }}</td>
                                    <td>{{ $product->name }}</td>
                                    <td>
                                        <a class="btn btn-success btn-sm ad-click-event" href="{{ route('admin.productEdit', ['id' => $product->id]) }}">Edit</a>
                                        <a class="btn btn-success btn-sm ad-click-event" target="_blank" href="{{ route('product', ['alias' => $product->alias]) }}">
                                            Preview
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
@stop