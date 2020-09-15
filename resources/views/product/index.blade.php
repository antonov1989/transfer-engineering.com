@extends('layouts.public')
@section('title', $translation->meta_title)
@section('description', $translation->meta_description)
@section('keywords', $translation->meta_keywords)

@section('content')
    <!--Main-->
    <div id="site_wrapper1">
        <div id="sections_list">
            @include('includes.header', ['menu' => false])

            <div blk_class="section" class=" blk_section block-content sprint4">

                <div class="mha clearfix blk_section_inner">
                    <h1>{{ $translation->h1 }}</h1>

                    @if ($product->image)
                        <div style="width: 100%; text-align: center; padding: 20px;">
                            <img alt="{{ $product->name }}" title="{{ $product->name }}" src="/img/products/page/{{ $product->image }}" />
                        </div>
                    @endif

                    <div class="blk blk_text blk-no-bg-lpm-449" id="45c5ebdb974b4d76b394cab21ebb108f" blk_class="blk_text" data-id="b-45c5ebdb974b4d76b394cab21ebb108f">
                        <div class="blk-data blk-data--pc clearfix ie_css3">
                            <p>
                                <span style="font-size:18px;line-height: 25px">
                                    <span style="font-family:roboto;font-style:normal;font-weight:300;">
                                        {!! $translation->content  !!}
                                    </span>
                                </span>
                            </p>
                        </div>
                        <div class="blk-data blk-data--mobile370 clearfix ie_css3">
                            <!--noindex-->
                            <p><span style="font-size: inherit; text-align: inherit; line-height: normal;"><span style="font-family: roboto; font-style: normal; font-weight: 300; font-size: inherit; text-align: inherit; line-height: normal;">{!! $translation->content  !!}</span></span></p>
                            <!--/noindex-->
                        </div>
                    </div>
                </div>
            </div>

            @include('includes.footer')
        </div>
    </div>
@endsection