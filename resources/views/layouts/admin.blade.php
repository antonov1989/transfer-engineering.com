@extends('adminlte::page')

@push('adminlte_css')
    <link rel="stylesheet"
          href="{{ asset('vendor/adminlte/dist/css/skins/skin-' . config('adminlte.skin', 'blue') . '.min.css')}} ">
    <link rel="stylesheet" href="{!! asset('css/bootstrap/bootstrap-datetimepicker.min.css') !!}">
@endpush

@section('adminlte_js')
    <meta name="csrf-token" content="{{ csrf_token() }}">
    <link rel="stylesheet" href="{!! asset('css/bootstrap/bootstrap3-wysihtml5.min.css') !!}">
    <script src="{!! asset('js/bootstrap/bootstrap3-wysihtml5.all.min.js') !!}"></script>
    <script src="{!! asset('js/jquery/moment.js') !!}"></script>
    <script src="{!! asset('js/bootstrap/bootstrap-datetimepicker.min.js') !!}"></script>
    <script src="{!! asset('js/admin/custom.js') !!}"></script>
@stop