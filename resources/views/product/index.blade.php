@extends('layouts.public')
@section('title', $translation->meta_title)
@section('description', $translation->meta_description)
@section('keywords', $translation->meta_keywords)

@section('content')
    <!--Main-->
    <div id="site_wrapper1">
        <div id="sections_list">
            @include('includes.header')

            <div blk_class="section" class=" blk_section block-content bg_type_map sprint4">

                <div class="mha clearfix blk_section_inner">
                    <h1>{{ $translation->h1 }}</h1>

                    @if ($product->image)
                        <img alt="{{ $product->name }}" title="{{ $product->name }}" src="/img/products/page/{{ $product->image }}" />
                    @endif

                    <div>{!! $translation->content  !!}</div>
                </div>
            </div>

            @include('includes.footer')
        </div>
    </div>
@endsection