@extends('adminlte::page')

@section('title', 'Languages - Admin Panel | TE')

@section('content_header')
    <h1 style="display: inline-block">Languages</h1>
    <a class="btn btn-success above-table-action" href="{{route('language.create')}}"><i class="glyphicon glyphicon-plus"></i> Add Language </a>
@stop

@section('content')
    {{--<div data-code="WNhLSp5K" class="lg-embed-shortcode"></div>--}}
    {{--staging--}}
    {{--<script>function cl(){var s=document.createElement('script');s.type='text/javascript';s.async=true;s.src='https://staging.interactiveads.ai/js/Chat.js?code=Lz7QSp7q';var x=document.getElementsByTagName('script')[0];x.parentNode.insertBefore(s,x);}if (window.attachEvent){window.attachEvent('onload',cl);}else{window.addEventListener('load',cl,false);}</script>--}}
    {{--local--}}
    {{--<script>function cl(){var s=document.createElement('script');s.type='text/javascript';s.async=true;s.src='https://leadgen.loc/js/Chat.js?code=u8q5Lh6W';var x=document.getElementsByTagName('script')[0];x.parentNode.insertBefore(s,x);}if (window.attachEvent){window.attachEvent('onload',cl);}else{window.addEventListener('load',cl,false);}</script>--}}
    {{--<script>function cl(){var s=document.createElement('script');s.type='text/javascript';s.async=true;s.src='https://leadgen.loc/js/Chat.js?code=XaPNVwBo';var x=document.getElementsByTagName('script')[0];x.parentNode.insertBefore(s,x);}if (window.attachEvent){window.attachEvent('onload',cl);}else{window.addEventListener('load',cl,false);}</script>    t1--}}
    {{--<script>function cl(){var s=document.createElement('script');s.type='text/javascript';s.async=true;s.src='https://t1.leadoo.com/js/Chat.js?code=u8q5Lh6W';var x=document.getElementsByTagName('script')[0];x.parentNode.insertBefore(s,x);}if (window.attachEvent){window.attachEvent('onload',cl);}else{window.addEventListener('load',cl,false);}</script>--}}
    {{--<script>function cl(){var s=document.createElement('script');s.type='text/javascript';s.async=true;s.src='https://t1.leadoo.com/js/Chat.js?code=u8q5Lh6W';var x=document.getElementsByTagName('script')[0];x.parentNode.insertBefore(s,x);}if (window.attachEvent){window.attachEvent('onload',cl);}else{window.addEventListener('load',cl,false);}</script>--}}
    {{--t5--}}
    {{--<script>function cl(){var s=document.createElement('script');s.type='text/javascript';s.async=true;s.src='https://t2.leadoo.com/js/Chat.js?code=rTWxWr2P';var x=document.getElementsByTagName('script')[0];x.parentNode.insertBefore(s,x);}if (window.attachEvent){window.attachEvent('onload',cl);}else{window.addEventListener('load',cl,false);}</script>--}}
    {{--<script>function cl(){var s=document.createElement('script');s.type='text/javascript';s.async=true;s.src='http://t5.leadoo.com/js/Chat.js?code=ZOBlN0Wq';var x=document.getElementsByTagName('script')[0];x.parentNode.insertBefore(s,x);}if (window.attachEvent){window.attachEvent('onload',cl);}else{window.addEventListener('load',cl,false);}</script>--}}
    <div class="modal custom-modal" id="modal" tabindex="-1" role="dialog" aria-labelledby="myModalLabel">
        <div class="modal-dialog" role="document">
            <div class="modal-content">
                <div class="modal-header">
                    <button type="button" class="close" data-dismiss="modal" aria-label="Close"><span aria-hidden="true">&times;</span></button>
                    <h4 class="modal-title" id="myModalLabel">Delete Language</h4>
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
    @include('admin.notifications')
    @include('admin.errors')
    <div class="row">
        <div class="col-xs-12">
            <div class="box">
                <div class="box-body">
                    <div class="col-sm-12 table-responsive table-hover">
                        <table id="languages" class="table table-bordered table-striped dataTable" role="grid">
                            <thead>
                            <tr role="row">
                                <th class="sortable sorting">#</th>
                                <th class="sortable sorting">Enable</th>
                                <th class="sortable sorting">Name</th>
                                <th class="sortable sorting">Short Name</th>
                                <th class="sortable sorting">Locale</th>
                                <th class="sortable sorting">Actions</th>
                            </tr>
                            </thead>
                            <tbody>
                            @foreach ($list as $item)
                                <tr>
                                    <td>{{ $item->id }}</td>
                                    <td><b class="label label-{{ ($item->enabled ? 'success' : 'danger') }}">{{ ($item->enabled ? 'Активен' : 'Не активен') }}</b></td>
                                    <td>{{ $item->name }}</td>
                                    <td>{{ $item->short_name }}</td>
                                    <td>{{ $item->locale }}</td>
                                    <td>
                                        <a class="btn btn-success btn-sm ad-click-event" href="{{ route('language.edit.get', ['id' => $item->id]) }}">Edit</a>
                                    </td>
                                </tr>
                            @endforeach
                            </tbody>
                        </table>
                    </div>
                </div>
            </div>
        </div>
    </div>
    {{--<div style="overflow:auto !important; -webkit-overflow-scrolling:touch !important;"><iframe style="width: 100%;" height="400" src="https://app.interactiveads.ai/embed/WNhLSp5K" frameborder="0"></iframe></div>--}}
    {{--<div style="overflow:auto !important; -webkit-overflow-scrolling:touch !important;"><iframe style="width: 100%;" height="400" src="https://leadgen.loc/embed/XuQAgUOS" frameborder="0"></iframe></div>--}}
    {{--<script>function el(){var s=document.createElement('script');s.type='text/javascript';s.async=true;s.src='https://leadgen.loc/js/Embed.js';var x=document.getElementsByTagName('script')[0];x.parentNode.insertBefore(s,x);}if (window.attachEvent){window.attachEvent('onload',el);}else{window.addEventListener('load',el,false);}</script>--}}
@stop

