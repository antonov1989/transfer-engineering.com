@extends('layouts.public')
@section('title', trans('meta.home_title'))
@section('description', trans('meta.home_description'))
@section('keywords', trans('meta.home_keywords'))

@section('content')
    <!--Main-->
    <div id="site_wrapper1">
        <div id="sections_list">

            @include('includes.header')

            <div blk_class="section" class=" blk_section block-content bg_type_image sprint4 is_cover " data-par-speed="" id="192d6d88736a4ded9d08de830100a7e2" data-id="s-192d6d88736a4ded9d08de830100a7e2" bg_type="image">
                <div class="section_image_container">
                    <div id="section_image_192d6d88736a4ded9d08de830100a7e2"
                         class="section-image "
                         style="background-image: url('/img/theme/TE1.jpg'); background-position: 50% 50%; background-repeat: no-repeat; "></div>
                </div>
                <div id="section_image_svg_192d6d88736a4ded9d08de830100a7e2" class="svg_wrap section-image__svg" style="display: none;">
                    <div class="svg_container"> </div>
                </div>
                <div class="section-blackout" style="-ms-filter:'progid:DXImageTransform.Microsoft.Alpha(Opacity=0.87)'; filter:alpha(opacity=0.87); -moz-opacity:0.87; -khtml-opacity:0.87; opacity:0.87;background: #030303;filter: progid:DXImageTransform.Microsoft.gradient(startColorstr='#030303', endColorstr='#FFFFFF');background: -o-linear-gradient(96deg, #030303, rgba(0,0,0,0));background: -ms-linear-gradient(96deg, #030303, rgba(0,0,0,0));background: -moz-linear-gradient(96deg, #030303, rgba(0,0,0,0));background: -webkit-linear-gradient(96deg, #030303, rgba(0,0,0,0));background: linear-gradient(96deg, #030303, rgba(0,0,0,0));"></div>
                <div class="mha clearfix blk_section_inner">
                    <div class="section-cell tpl_cell tpl_section_cell sortable_cell l_float " id="92e172d1beaf49b7be907c4dbe7afa56">
                        <div blk_class="blk_container" style="height: 200px;" class="blk_container v3 cnt-cells-2 orange_cell_resize " id="7bb5823b56164b7bbef5ac183c575274" data-id="b-7bb5823b56164b7bbef5ac183c575274" type_id="" pos="1">
                            <div class="blk_container_cells_wrap">
                                <div class="blk_container_cells cells-2">
                                    <div class="td_container_cell" cell_id="a5c5fab8345a48c0943de0f4568b8d25" data-cell_id="c-a5c5fab8345a48c0943de0f4568b8d25">
                                        <div class="cell v3 container_cell sortable_cell first_cell" id="a5c5fab8345a48c0943de0f4568b8d25">
                                            <div class="blk blk_text blk-no-bg-lpm-449" id="ba9a55ee9d514731bc7e5a2851fa4ec9" blk_class="blk_text" data-id="b-ba9a55ee9d514731bc7e5a2851fa4ec9">
                                                <div class="blk-data blk-data--pc clearfix ie_css3" >
                                                    <p>
                                                        <span style="line-height:1;">
                                                            <span style="font-size:48px;">
                                                                <span  style="font-family:roboto;font-style:normal;font-weight:500;">
                                                                    <h1 style="color:#C61900;">@lang('main.page_h1')</h1>
                                                                </span></span></span></p>
                                                </div>
                                                <div class="blk-data blk-data--mobile370 clearfix ie_css3" >
                                                    <!--noindex-->
                                                    <p><span style="line-height: normal; font-size: inherit; text-align: inherit;">
                                                            <span style="font-size: inherit; text-align: inherit; line-height: normal;">
                                                                <span  style="font-family: roboto; font-style: normal; font-weight: 500; font-size: inherit; text-align: inherit; line-height: normal;">
                                                                    <h1 style="color:#C61900; font-size: inherit; text-align: inherit; line-height: normal;">@lang('main.page_h1')</h1>
                                                                </span></span></span></p>
                                                    <!--/noindex-->
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            @include('includes.section.products')

            @include('includes.section.works')

            @include('includes.section.aboutus')

            @include('includes.section.request')

            @include('includes.section.contact')

            @include('includes.footer')

        </div>
        <div id="popup_list"></div>

    </div>

    <div id="wind_container" style="display:none;">
        <div class="wind hidden popover-form" id="formPopover" tabindex="-1"></div>
        <div class="wind hidden" id="btnPopupWnd" tabindex="-1" style="width: 600px;"> <div class="wind-header"> <a class="wind-close"><div></div></a> <div class="fnt div_h3"></div> </div> <div class="wind-body"> </div> <div class="wind-footer c_text"> <button class="btn wind-btn-apply btn-small" style="padding:2px 10px;">Закрыть</button> </div></div><div class="wind hidden iblk no_sel" id="j_lead_alert" tabindex="-1" style="width:450px;" oncontextmenu="return false;"> <div class="wind_close_wrap"> <a class="wind-close"> <svg enable-background="new 0 0 512 512" id="Layer_1" version="1.1" viewBox="0 0 512 512" xml:space="preserve" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink"><path d="M284.1,256L506.2,33.9c7.8-7.8,7.8-20.3,0-28.1s-20.3-7.8-28.1,0L256,227.9L33.9,5.8 c-7.8-7.8-20.3-7.8-28.1,0s-7.8,20.3,0,28.1L227.9,256L5.8,478.1c-7.8,7.8-7.8,20.3,0,28.1c3.9,3.9,9,5.8,14,5.8s10.2-1.9,14-5.8 L256,284.1l222.1,222.1c3.9,3.9,9,5.8,14,5.8s10.2-1.9,14-5.8c7.8-7.8,7.8-20.3,0-28.1L284.1,256z"></path></svg> </a> </div> <div class="checkmark"> <svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" enable-background="new 0 0 56.693 56.693" height="75.693px" id="Layer_1" version="1.1" viewBox="0 0 56.693 56.693" width="75.693px" xml:space="preserve"><path d="M45.922,11.767c-9.709-9.707-25.443-9.705-35.15,0c-9.709,9.711-9.711,25.447-0.002,35.155 c9.707,9.709,25.447,9.711,35.156,0.002C55.633,37.219,55.629,21.476,45.922,11.767z M40.409,21.747L26.316,40.201 c-0.452,0.591-1.137,0.941-1.878,0.956h-0.005h-0.052c-0.721,0-1.398-0.314-1.858-0.863l-6.038-7.139 c-0.419-0.494-0.619-1.125-0.566-1.773c0.055-0.648,0.358-1.236,0.853-1.656c0.957-0.811,2.625-0.668,3.432,0.287l4.083,4.826 l12.253-16.047c0.762-0.996,2.411-1.221,3.412-0.458c0.517,0.395,0.849,0.967,0.935,1.612 C40.973,20.591,40.804,21.231,40.409,21.747z"></path></svg> </div> <div id="jAlertBody"> </div> <div class="wind-footer c_text"> <a class="wind-btn-apply w10 no_sel" ondragstart="return false;">OK</a> </div></div><div class="wind hidden iblk" id="j_lead_confirm" tabindex="-1" style="width: 500px;"> <table class="iblk_header w_full vam gray"> <tbody><tr> <td class="td_narrow nowp c_text pr1"><div class="fnt2 h5-fake"></div></td> <td>&nbsp;</td> <td class="td_narrow td-wind-close"><a class="wind-close"></a></td> </tr> </tbody></table> <div class="c_text" style="padding: 30px 22px 0;font-size: 22px;" id="jConfirmBody"></div> <div class="wind-footer c_text" style="padding-top: 40px; padding-bottom: 30px;"> <table style="width: 100%" class="mha"> <tbody><tr> <td> <div class="yandex_img mb1"></div> </td> <td> <div class="card_img mb1"></div> </td> </tr> <tr> <td> <button class="n-btn n-btn-success btn-round" id="jConfirmOk">OK</button> </td> <td> <button class="n-btn n-btn-success btn-round ml1 wind-btn-cancel" id="jConfirmCancel">Отмена</button> </td> </tr> </tbody></table> </div></div><div class="wind hidden iblk" id="jConfirm" tabindex="-1" style="width: 500px;"> <table class="iblk_header w_full vam gray"> <tbody><tr> <td class="td_narrow nowp pr1"><div class="h5-fake"></div></td> <td>&nbsp;</td> <td class="td_narrow td-wind-close"><a class="wind-close"></a></td> </tr> </tbody></table> <div style="padding: 20px 22px 0; line-height: 1.4" id="jConfirmBody"></div> <div class="wind-footer new_css c_text" style="padding-top: 20px; padding-bottom: 20px;"> <button class="btn btn-success wind-btn-apply" id="jConfirmOk">OK</button> <button class="btn btn-default wind-btn-cancel w11 ml1" id="jConfirmCancel">Отмена</button> </div></div>
    </div>

    <script src="/js/theme/jquery.js"></script>
    <script src="/js/theme/jquery-sites.min.js"></script>
    <script src="/js/theme/bootstrap.min.js"></script>
    <script>
        window.speedUpVideoLoadIsEnabled = true;
    </script>
    <script>
        window.lazyLoadOptions={threshold:100};
    </script>
    <script src="/js/theme/published.min.js"></script>
    <script>
        window.siteWidth=1170;
    </script>
    <script>
        FE.runOnObjectReady('adapterManager',function(){
            adapterManager.data = {"mobile370":{"06c6dcba6a324194bf4dfe13a39eec54":{"blc_height":0,"block_name":"divider"},
                    "15b27a2098ca400b9cdbda0d77a3ac67":{"blc_height":37,"block_name":"divider"},
                    "189f707ecda5447b9e7f9468623527d2":{"body":"<link f_id=\"roboto_thin\" type=\"text\/css\" rel=\"stylesheet\" href=\"\/\/fonts.googleapis.com\/css?family=Roboto:100normal&amp;subset=latin,cyrillic\" \/><div style=\"text-align: inherit; font-size: inherit; line-height: normal;\"><span style=\"font-size: inherit; text-align: inherit; line-height: normal;\"><span f_id=\"roboto_thin\" style=\"font-family: roboto; font-style: normal; font-weight: 300; font-size: inherit; text-align: inherit; line-height: normal;\">Покраска автомобиля<\/span><\/span><\/div>","text_align":"center","font_size":18,"padding_top":10,"padding_bottom":30,"block_name":"text"},"1cd97b76424f443296c598411dfa7745":{"body":"<link f_id=\"open_sans_light\" type=\"text\/css\" rel=\"stylesheet\" href=\"https:\/\/fonts.googleapis.com\/css?family=Open+Sans:300normal&amp;subset=latin,cyrillic\" \/><p style=\"text-align: inherit; font-size: inherit;\"><span style=\"color: rgb(255, 255, 255); font-size: inherit; text-align: inherit;\"><span f_id=\"open_sans_light\" style=\"font-family: &quot;open sans&quot;; font-style: normal; font-weight: 300; font-size: inherit; text-align: inherit;\">" +
                        "<span style=\"font-size: inherit; text-align: inherit;\">+38099999999<\/span><\/span><\/span><\/p>","text_align":"center","font_size":20,"padding_top":10,"padding_bottom":0,"block_name":"text"},"1daa3e57e5494641b77123694bb9b1ef":{"body":"<link f_id=\"roboto_normal\" type=\"text\/css\" rel=\"stylesheet\" href=\"\/\/fonts.googleapis.com\/css?family=Roboto:400normal&amp;subset=latin,cyrillic\" \/><link f_id=\"roboto_thin\" type=\"text\/css\" rel=\"stylesheet\" href=\"\/\/fonts.googleapis.com\/css?family=Roboto:100normal&amp;subset=latin,cyrillic\" \/><div><span style=\"font-family: roboto; font-size: inherit; color: rgb(255, 255, 255); text-align: inherit; line-height: normal;\"><span f_id=\"roboto_thin\" style=\"font-style: normal; font-weight: 300; font-size: inherit; text-align: inherit; line-height: normal;\">Пройди<\/span> <\/span><span f_id=\"roboto_normal\" style=\"font-family: roboto; font-size: inherit; color: inherit; text-align: inherit; line-height: normal;\"><span style=\"color: #C61900; font-size: inherit; text-align: inherit; line-height: normal;\">бесплатную диагностику&nbsp;<\/span><\/span><br \/><span style=\"font-size: inherit; text-align: inherit; line-height: normal;\"><span f_id=\"roboto_thin\" style=\"font-family: roboto; font-style: normal; font-weight: 300; font-size: inherit; text-align: inherit; line-height: normal;\"><span style=\"color: rgb(255, 255, 255); font-size: inherit; text-align: inherit; line-height: normal;\">и получи<span f_id=\"roboto_thin\"> скидку <\/span>на все услуги&nbsp;<\/span><\/span><\/span><\/div>","text_align":"center","font_size":23,"padding_top":0,"padding_bottom":13,"block_name":"text"},"206984ee1968411489d7cc85c98cc657":{"body":"<link f_id=\"roboto_thin\" type=\"text\/css\" rel=\"stylesheet\" href=\"\/\/fonts.googleapis.com\/css?family=Roboto:100normal&amp;subset=latin,cyrillic\" \/><div style=\"text-align: inherit; font-size: inherit; line-height: normal;\"><span style=\"font-size: inherit; text-align: inherit; line-height: normal;\"><span f_id=\"roboto_thin\" style=\"font-family: roboto; font-style: normal; font-weight: 300; font-size: inherit; text-align: inherit; line-height: normal;\">Диагностика<\/span><\/span><\/div>","text_align":"center","font_size":18,"padding_top":10,"padding_bottom":30,"block_name":"text"},"293a57f50809418c91a76a81bd18db45":{"count_cell_in_row":1,"block_name":"container_v3"},"386c0e62b25f44b49d0f034f1a20b7d8":{"text_align":"center","font_size":25,"padding_top":1,"padding_bottom":0,"block_name":"text"},"39ff791de8ad40098425b4c324b11dc7":{"body":"<link f_id=\"roboto_medium\" type=\"text\/css\" rel=\"stylesheet\" href=\"\/\/fonts.googleapis.com\/css?family=Roboto:500normal&amp;subset=latin,cyrillic\"><p><span style=\"color: #C61900; font-size: inherit; text-align: inherit; line-height: normal;\"><span style=\"line-height: normal; font-size: inherit; text-align: inherit;\"><span style=\"font-size: inherit; text-align: inherit; line-height: normal;\"><span f_id=\"roboto_medium\" style=\"font-family: roboto; font-style: normal; font-weight: 500; font-size: inherit; text-align: inherit; line-height: normal;\">​УСЛУГИ<\/span><\/span><\/span><\/span><\/p>","text_align":"center","font_size":29,"padding_top":0,"padding_bottom":0,"block_name":"text"},"3dff0c2389c24312808c325b13b487d8":{"body":"<link f_id=\"roboto_normal\" type=\"text\/css\" rel=\"stylesheet\" href=\"\/\/fonts.googleapis.com\/css?family=Roboto:400normal&amp;subset=latin,cyrillic\" \/><div><span style=\"color: rgb(255, 255, 255); font-size: inherit; text-align: inherit; line-height: normal;\"><span f_id=\"roboto_normal\" style=\"font-family: roboto; font-style: normal; font-weight: 400; font-size: inherit; text-align: inherit; line-height: normal;\"><span style=\"font-size: inherit; text-align: inherit; line-height: normal;\">Transfer<\/span><\/span><\/span><span style=\"color: #C61900; font-size: inherit; text-align: inherit; line-height: normal;\"><span f_id=\"roboto_normal\" style=\"font-family: roboto; font-style: normal; font-weight: 400; font-size: inherit; text-align: inherit; line-height: normal;\"><span style=\"font-size: inherit; text-align: inherit; line-height: normal;\">Engineering<\/span><\/span><\/span><\/div>","text_align":"center","font_size":27,"padding_top":0,"padding_bottom":0,"block_name":"text"},"42b37d1c38014be396c37fe9560d1475":{"text_align":"center","font_size":29,"padding_top":0,"padding_bottom":0,"block_name":"text"},"45c5ebdb974b4d76b394cab21ebb108f":{"body":"<link f_id=\"roboto_thin\" type=\"text\/css\" rel=\"stylesheet\" href=\"\/\/fonts.googleapis.com\/css?family=Roboto:100normal&amp;subset=latin,cyrillic\" \/><p><span style=\"font-size: inherit; text-align: inherit; line-height: normal;\"><span f_id=\"roboto_thin\" style=\"font-family: roboto; font-style: normal; font-weight: 300; font-size: inherit; text-align: inherit; line-height: normal;\">Постоянным клиентам<br \/>дарим скидку на все&nbsp;​виды услуг<\/span><\/span><\/p>","text_align":"start","font_size":14,"padding_top":0,"padding_bottom":35,"block_name":"text"},"473464442834443795363988ad33a3fb":{"align":"r_text","block_name":"button"},"47461c29df554aa6b20b9ddfeb441454":{"body":"<link f_id=\"roboto_thin\" type=\"text\/css\" rel=\"stylesheet\" href=\"\/\/fonts.googleapis.com\/css?family=Roboto:100normal&amp;subset=latin,cyrillic\" \/><p><span style=\"font-size: inherit; text-align: inherit; line-height: normal;\"><span f_id=\"roboto_thin\" style=\"font-family: roboto; font-style: normal; font-weight: 300; font-size: inherit; text-align: inherit; line-height: normal;\"><span style=\"color: rgb(255, 255, 255); font-size: inherit; text-align: inherit; line-height: normal;\">Автосервис в Киеве для русских машин и иномарок. Всегда в наличии запчасти. Опыт 20 лет.<br \/>Работаем в России и по регионам<\/span><\/span><\/span><\/p>","text_align":"start","font_size":15,"padding_top":0,"padding_bottom":0,"block_name":"text"},"492065d59c68496b91e097e2a39ed5e5":{"body":"<link f_id=\"roboto_thin\" type=\"text\/css\" rel=\"stylesheet\" href=\"\/\/fonts.googleapis.com\/css?family=Roboto:100normal&amp;subset=latin,cyrillic\" \/><div style=\"text-align: inherit; font-size: inherit; line-height: normal;\"><span style=\"font-size: inherit; text-align: inherit; line-height: normal;\"><span f_id=\"roboto_thin\" style=\"font-family: roboto; font-style: normal; font-weight: 300; font-size: inherit; text-align: inherit; line-height: normal;\">Кузовной ремонт<\/span><\/span><\/div>","text_align":"center","font_size":18,"padding_top":10,"padding_bottom":30,"block_name":"text"},"4aeca838369d46c18219de513e2b7e3c":{"align":"l_text","block_name":"button"},"4d84299dd31f41b4aff19210f9b91d3c":{"body":"<link f_id=\"roboto_light\" type=\"text\/css\" rel=\"stylesheet\" href=\"\/\/fonts.googleapis.com\/css?family=Roboto:300normal&amp;subset=latin,cyrillic\"><link f_id=\"roboto_medium\" type=\"text\/css\" rel=\"stylesheet\" href=\"\/\/fonts.googleapis.com\/css?family=Roboto:500normal&amp;subset=latin,cyrillic\"><p><span style=\"font-size: inherit; text-align: inherit; line-height: normal;\"><span f_id=\"roboto_medium\" style=\"font-family: roboto; font-style: normal; font-weight: 500; font-size: inherit; text-align: inherit; line-height: normal;\"><span style=\"color: #C61900; font-size: inherit; text-align: inherit; line-height: normal;\">НАШ АДРЕС<\/span><\/span><\/span><br><span style=\"color: rgb(255, 255, 255); font-size: inherit; text-align: inherit; line-height: normal;\"><span style=\"font-size: inherit; text-align: inherit; line-height: normal;\"><span f_id=\"roboto_medium\" style=\"font-family: roboto; font-style: normal; font-weight: 500; font-size: inherit; text-align: inherit; line-height: normal;\">​<\/span>" +
                        "<span f_id=\"roboto_light\"" +
                        "style=\"font-family: roboto; font-style: normal; font-weight: 300; font-size: inherit; text-align: inherit; line-height: normal;\">Киев<br>+38099999999<\/span><\/span><\/span><\/p>","text_align":"left","font_size":18,"padding_top":50,"padding_bottom":50,"block_name":"text"},"4e7472611c0c4eb3bd2dbc1cafd215b9":{"real_w":457,"real_h":621,"prod_w":227,"prod_h":308,"offset_top":0,"offset_left":0,"crop_w":227,"crop_h":306,"has_crop_image":1,"block_name":"image_ext"},"59b35cfe0a6e43c78e23d9c7f5f241cb":{"count_cell_in_row":1,"block_name":"container_v3"},"5ad013bb6ba0415cb5ced1ed0c41bd85":{"body":"<link f_id=\"roboto_medium\" type=\"text\/css\" rel=\"stylesheet\" href=\"\/\/fonts.googleapis.com\/css?family=Roboto:500normal&amp;subset=latin,cyrillic\"><p style=\"text-align: inherit; font-size: inherit; line-height: normal;\"><span style=\"font-size: inherit; text-align: inherit; line-height: normal;\"><span f_id=\"roboto_medium\" style=\"font-family: roboto; font-style: normal; font-weight: 500; font-size: inherit; text-align: inherit; line-height: normal;\"><span style=\"line-height: normal; font-size: inherit; text-align: inherit;\"><span style=\"color: rgb(255, 255, 255); font-size: inherit; text-align: inherit; line-height: normal;\">ЗАЯВКУ <\/span><span style=\"color: #C61900; font-size: inherit; text-align: inherit; line-height: normal;\">СЕЙЧАС<\/span><\/span><\/span><\/span><\/p>","text_align":"center","font_size":19,"padding_top":0,"padding_bottom":0,"block_name":"text"},"669510f361b94a9d815e95e29b97c203":{"body":"<link f_id=\"roboto_normal\" type=\"text\/css\" rel=\"stylesheet\" href=\"\/\/fonts.googleapis.com\/css?family=Roboto:400normal&amp;subset=latin,cyrillic\"><div><span style=\"color: rgb(255, 255, 255); font-size: inherit; text-align: inherit; line-height: normal;\"><span f_id=\"roboto_normal\" style=\"font-family: roboto; font-style: normal; font-weight: 400; font-size: inherit; text-align: inherit; line-height: normal;\"><span style=\"font-size: inherit; text-align: inherit; line-height: normal;\">Transfer<\/span><\/span><\/span><span style=\"color: #C61900; font-size: inherit; text-align: inherit; line-height: normal;\"><span f_id=\"roboto_normal\" style=\"font-family: roboto; font-style: normal; font-weight: 400; font-size: inherit; text-align: inherit; line-height: normal;\"><span style=\"font-size: inherit; text-align: inherit; line-height: normal;\">Engineering<\/span><\/span><\/span><\/div>","text_align":"start","font_size":25,"padding_top":5,"padding_bottom":0,"block_name":"text"},"6a5df26871ec4ed7977beec2243c1fbc":{"body":"<link f_id=\"roboto_thin\" type=\"text\/css\" rel=\"stylesheet\" href=\"\/\/fonts.googleapis.com\/css?family=Roboto:100normal&amp;subset=latin,cyrillic\" \/><div style=\"text-align: inherit; font-size: inherit; line-height: normal;\"><span style=\"font-size: inherit; text-align: inherit; line-height: normal;\"><span f_id=\"roboto_thin\" style=\"font-family: roboto; font-style: normal; font-weight: 300; font-size: inherit; text-align: inherit; line-height: normal;\">Ремонт двигателя<\/span><\/span><\/div>","text_align":"center","font_size":18,"padding_top":10,"padding_bottom":30,"block_name":"text"},"6f6b2633c41c438386d789f737cd663b":{"count_cell_in_row":1,"block_name":"container_v3"},"702f3ea279f84caf8103994000f81c03":{"body":"<link f_id=\"roboto_thin\" type=\"text\/css\" rel=\"stylesheet\" href=\"\/\/fonts.googleapis.com\/css?family=Roboto:100normal&amp;subset=latin,cyrillic\"><p><span style=\"font-size: inherit; text-align: inherit; line-height: normal;\"><span f_id=\"roboto_thin\" style=\"font-family: roboto; font-style: normal; font-weight: 300; font-size: inherit; text-align: inherit; line-height: normal;\">Ремонт любой&nbsp;сложности<br>производится в кратчайшие сроки<\/span><\/span><\/p>","text_align":"start","font_size":14,"padding_top":0,"padding_bottom":0,"block_name":"text"},"711d63176f894b568686f6b007b47d65":{"count_cell_in_row":1,"block_name":"container_v3"},"786af05c9d5f436abe308db94a1a3ceb":{"body":"<link f_id=\"open_sans_light\" type=\"text\/css\" rel=\"stylesheet\" href=\"\/\/fonts.googleapis.com\/css?family=Open+Sans:300normal&amp;subset=latin,cyrillic\" \/><p><span style=\"color: rgb(255, 255, 255); font-size: inherit; text-align: inherit;\"><span f_id=\"open_sans_light\" style=\"font-family: &quot;open sans&quot;; font-style: normal; font-weight: 300; font-size: inherit; text-align: inherit;\"><span style=\"font-size: inherit; text-align: inherit;\">support@gmail.com<\/span><br \/><span style=\"font-size: inherit; text-align: inherit;\">г.Киев, ул. Сибирская&nbsp;д. 45<\/span><\/span><\/span><\/p>","text_align":"center","font_size":14,"padding_top":0,"padding_bottom":0,"block_name":"text"},"7afe6e98cd8444ff842b26072b68d062":{"align":"c_text","block_name":"button"},"7bb5823b56164b7bbef5ac183c575274":{"count_cell_in_row":1,"block_name":"container_v3"},"7e05ef4433ae45f3bdeb99c92644cde2":{"align":"c_text","block_name":"button"},"82d44f5a74c04b9fb69acf1280ef4662":{"body":"<link f_id=\"roboto_thin\" type=\"text\/css\" rel=\"stylesheet\" href=\"\/\/fonts.googleapis.com\/css?family=Roboto:100normal&amp;subset=latin,cyrillic\"><p><span style=\"line-height: normal; font-size: inherit; text-align: inherit;\"><span style=\"font-size: inherit; text-align: inherit; line-height: normal;\"><span f_id=\"roboto_thin\" style=\"font-family: roboto; font-style: normal; font-weight: 300; font-size: inherit; text-align: inherit; line-height: normal;\"><font color=\"#333333\" face=\"roboto\">РАБОТАТЬ С НАМИ<\/font><\/span><\/span><\/span><\/p>","text_align":"left","font_size":19,"padding_top":0,"padding_bottom":14,"block_name":"text"},"862cfff6d5f145dfb782477e15248455":{"count_cell_in_row":1,"block_name":"container_v3"},"92bc257bf1884568b865a186cb4d0a56":{"count_cell_in_row":2,"block_name":"container_v3"},"93f84a623488450498d41485eda10e50":{"count_cell_in_row":1,"block_name":"container_v3"},"95647973e8db4885b76b54b6de6a8e96":{"body":"<link f_id=\"roboto_thin\" type=\"text\/css\" rel=\"stylesheet\" href=\"\/\/fonts.googleapis.com\/css?family=Roboto:100normal&amp;subset=latin,cyrillic\"><p><span style=\"color: rgb(255, 255, 255); font-size: inherit; text-align: inherit; line-height: normal;\"><span style=\"line-height: normal; font-size: inherit; text-align: inherit;\"><span style=\"font-size: inherit; text-align: inherit; line-height: normal;\"><span f_id=\"roboto_thin\" style=\"font-family: roboto; font-style: normal; font-weight: 300; font-size: inherit; text-align: inherit; line-height: normal;\"><font face=\"roboto\">ЧТО МЫ ДЕЛАЕМ<\/font><\/span><\/span><\/span><\/span><\/p>","text_align":"center","font_size":19,"padding_top":0,"padding_bottom":14,"block_name":"text"},"9e64ae8b313f4d4fb0014efa9a9e1a48":{"align":"r_text","block_name":"button"},"9e8ffd9f7a70427ca624b54b7f84cce5":{"body":"<link f_id=\"roboto_thin\" type=\"text\/css\" rel=\"stylesheet\" href=\"\/\/fonts.googleapis.com\/css?family=Roboto:100normal&amp;subset=latin,cyrillic\"><p><span style=\"line-height: normal; font-size: inherit; text-align: inherit;\"><span style=\"font-size: inherit; text-align: inherit; line-height: normal;\"><span f_id=\"roboto_thin\" style=\"font-family: roboto; font-style: normal; font-weight: 300; font-size: inherit; text-align: inherit; line-height: normal;\">НАШЕГО АВТОСЕРВИСА<\/span><\/span><\/span><\/p>","text_align":"center","font_size":19,"padding_top":0,"padding_bottom":20,"block_name":"text"},"a1c28611861e4977ab1581a140c5ea32":{"body":"<link f_id=\"roboto_thin\" type=\"text\/css\" rel=\"stylesheet\" href=\"\/\/fonts.googleapis.com\/css?family=Roboto:100normal&amp;subset=latin,cyrillic\" \/><div style=\"text-align: inherit; font-size: inherit; line-height: normal;\"><span style=\"font-size: inherit; text-align: inherit; line-height: normal;\"><span f_id=\"roboto_thin\" style=\"font-family: roboto; font-style: normal; font-weight: 300; font-size: inherit; text-align: inherit; line-height: normal;\">Шиномонтаж<\/span><\/span><\/div>","text_align":"center","font_size":18,"padding_top":10,"padding_bottom":30,"block_name":"text"},"a524e5622813445699befca134f17db2":{"count_cell_in_row":1,"block_name":"container_v3"},"a897395a67ee42be8f5e6b001fc65519":{"count_cell_in_row":1,"block_name":"container_v3"},"b862b017ea424c23a8cbda4eb36cb04c":{"text_align":"left","font_size":29,"padding_top":0,"padding_bottom":0,"block_name":"text"},"ba9a55ee9d514731bc7e5a2851fa4ec9":{"body":"<link f_id=\"roboto_medium\" type=\"text\/css\" rel=\"stylesheet\" href=\"\/\/fonts.googleapis.com\/css?family=Roboto:500normal&amp;subset=latin,cyrillic\"><p><span style=\"line-height: normal; font-size: inherit; text-align: inherit;\"><span style=\"font-size: inherit; text-align: inherit; line-height: normal;\"><span f_id=\"roboto_medium\" style=\"font-family: roboto; font-style: normal; font-weight: 500; font-size: inherit; text-align: inherit; line-height: normal;\"><span style=\"color: #C61900; font-size: inherit; text-align: inherit; line-height: normal;\">РЕМОНТ АВТО&nbsp;<\/span><br><span style=\"color: rgb(255, 255, 255); font-size: inherit; text-align: inherit; line-height: normal;\">В Киеве<\/span><\/span><\/span><\/span><\/p>","text_align":"start","font_size":29,"padding_top":0,"padding_bottom":15,"block_name":"text"},"bc17791858bc4d45ac64ef8ebc5faece":{"body":"<link f_id=\"roboto_bold\" type=\"text\/css\" rel=\"stylesheet\" href=\"\/\/fonts.googleapis.com\/css?family=Roboto:700normal&amp;subset=latin,cyrillic\" \/><p style=\"text-align: inherit; font-size: inherit; line-height: normal;\"><span style=\"font-size: inherit; text-align: inherit; line-height: normal;\"><span f_id=\"roboto_bold\" style=\"font-family: roboto; font-style: normal; font-weight: 700; font-size: inherit; text-align: inherit; line-height: normal;\"><span style=\"line-height: normal; font-size: inherit; text-align: inherit;\"><span style=\"color: rgb(255, 255, 255); font-size: inherit; text-align: inherit; line-height: normal;\">ОСТАВЬТЕ<\/span><\/span><\/span><\/span><\/p>","text_align":"center","font_size":29,"padding_top":11,"padding_bottom":0,"block_name":"text"},"c40de20b080940668aac724f7d5ac098":{"align":"l_text","block_name":"button"},"d86d74b25e53414a8b8a79ad587f26e9":{"count_cell_in_row":1,"block_name":"container_v3"},"da4161124a6f4e9d950bd71dcba12e17":{"align":"l_text","block_name":"form"},"dc33141e68894a48872a433d21f0ceb4":{"body":"<link f_id=\"roboto_thin\" type=\"text\/css\" rel=\"stylesheet\" href=\"\/\/fonts.googleapis.com\/css?family=Roboto:100normal&amp;subset=latin,cyrillic\" \/><p><span style=\"font-size: inherit; text-align: inherit; line-height: normal;\"><span f_id=\"roboto_thin\" style=\"font-family: roboto; font-style: normal; font-weight: 300; font-size: inherit; text-align: inherit; line-height: normal;\">Квалифицированные мастера, профессионалы своего дела<\/span><\/span><\/p>","text_align":"start","font_size":14,"padding_top":0,"padding_bottom":30,"block_name":"text"},"e15bacc921444aad9ec63b865e67979f":{"count_cell_in_row":3,"block_name":"container_v3"},"e8aaa36fa47049a9895da9e8d833e94f":{"blc_height":90,"block_name":"divider"},"e978c4ba7a5c4ec78e435275b98f1f96":{"body":"<link f_id=\"roboto_light\" type=\"text\/css\" rel=\"stylesheet\" href=\"\/\/fonts.googleapis.com\/css?family=Roboto:300normal&amp;subset=latin,cyrillic\"><p><span style=\"color: rgb(255, 255, 255); font-size: inherit; text-align: inherit; line-height: normal;\"><span f_id=\"roboto_light\" style=\"font-family: roboto; font-style: normal; font-weight: 300; font-size: inherit; text-align: inherit; line-height: normal;\"><span style=\"font-size: inherit; text-align: inherit; line-height: normal;\">Наша компания работает на рынке услуг уже 20 лет. Мы работаем с клиентами из России и бывших стран СНГ. Самым важным<br>для нас всегда будет добиться результата, который хочет получить наш клиент, сотрудничая с нашей компанией. Ежемесячно мы делаем клиентам взаимовыгодные предложения.&nbsp;<\/span><\/span><\/span><\/p>","text_align":"left","font_size":16,"padding_top":0,"padding_bottom":0,"block_name":"text"},"e9e882b105254e84ab0e574ee4de1344":{"align":"r_text","block_name":"button"},"eb5f43856dae477c98c2f4981ab5c7a8":{"body":"<link f_id=\"roboto_thin\" type=\"text\/css\" rel=\"stylesheet\" href=\"\/\/fonts.googleapis.com\/css?family=Roboto:100normal&amp;subset=latin,cyrillic\"><link f_id=\"roboto_medium\" type=\"text\/css\" rel=\"stylesheet\" href=\"\/\/fonts.googleapis.com\/css?family=Roboto:500normal&amp;subset=latin,cyrillic\"><p><span style=\"line-height: normal; font-size: inherit; text-align: inherit;\"><span style=\"font-size: inherit; text-align: inherit; line-height: normal;\"><span style=\"color: rgb(255, 255, 255); font-size: inherit; text-align: inherit; line-height: normal;\"><span f_id=\"roboto_thin\" style=\"font-family: roboto; font-style: normal; font-weight: 300; font-size: inherit; text-align: inherit; line-height: normal;\">ДИАГНОСТИКА И ТЕХ. ОСМОТР<\/span><\/span><\/span><\/span><\/p>","text_align":"start","font_size":19,"padding_top":0,"padding_bottom":20,"block_name":"text"},"f1e69eaccc9b444d8da8c712243c717a":{"blc_height":35,"block_name":"divider"},"f3a940a020554675a3311328f005f49f":{"body":"<link f_id=\"roboto_thin\" type=\"text\/css\" rel=\"stylesheet\" href=\"\/\/fonts.googleapis.com\/css?family=Roboto:100normal&amp;subset=latin,cyrillic\" \/><div style=\"text-align: inherit; font-size: inherit; line-height: normal;\"><span style=\"font-size: inherit; text-align: inherit; line-height: normal;\"><span f_id=\"roboto_thin\" style=\"font-family: roboto; font-style: normal; font-weight: 300; font-size: inherit; text-align: inherit; line-height: normal;\">&nbsp;Автодиагностика<\/span><\/span><\/div>","text_align":"center","font_size":18,"padding_top":10,"padding_bottom":30,"block_name":"text"},"192d6d88736a4ded9d08de830100a7e2":{"pad_bottom":134,"pad_top":144,"block_name":"section"},"3f18ec48a82949d88db2ee2b4c513e3e":{"is_hidden":1,"pad_bottom":9,"pad_top":30,"block_name":"section"},"4937db152635491ebf8ba9400d1840d1":{"pad_bottom":70,"pad_top":70,"block_name":"section"},"62c5b67ad49246a79ea8544d5ad35f80":{"pad_bottom":10,"pad_top":20,"block_name":"section"},"718ce204f4464f979714bbc073d4c653":{"pad_bottom":0,"pad_top":62,"block_name":"section_split"},"7ea86375a9a9414b9ab479e42a640208":{"pad_bottom":60,"pad_top":60,"is_hidden":0,"block_name":"section"},"abaf7bafa6874cdd9a842416005ed42c":{"is_hidden":1,"block_name":"section"},"c6c4e43bb06548b79d918e27da7efcf3":{"pad_bottom":30,"pad_top":30,"block_name":"section"},"cbe82f7fb2e644a79bfcfb07cef6f689":{"pad_bottom":16,"pad_top":28,"block_name":"section"},"d2ba9b638d4e4f4199048f1b33429845":{"pad_bottom":60,"pad_top":60,"block_name":"section"},"3db52d2e8a7942449e45708c059cc0d2":{"width":98.275999999999996,"block_name":"container_cell"},"456e4b27c9fd43a89c65ed9a849d2b6f":{"width":98.275999999999996,"block_name":"container_cell"},"68b98ca5847649be9dd928d6bee778e3":{"width":98.275999999999996,"block_name":"container_cell"},"143555b35de443ad81f02f7af5987154":{"width":98.275999999999996,"block_name":"container_cell"},"8042dd56d3fd4e149334336034102109":{"width":98.275999999999996,"block_name":"container_cell"},"11f8ca146b3246918f34efe033075131":{"width":98.275999999999996,"block_name":"container_cell"},"e0556f0a76a54b87adf6664a3e0ac04b":{"width":98.275999999999996,"block_name":"container_cell"},"7ba75e99482f4cceb0c7c61db4108128":{"width":98.275999999999996,"block_name":"container_cell"},"47f59ac518e84c30be8737ef11d979c8":{"width":98.275999999999996,"block_name":"container_cell"},"71986fa55f554c06b21a688b7bd0b957":{"width":98.275999999999996,"block_name":"container_cell"},"0637d6b346c6441fab1dadc10cb7be0d":{"width":98.275999999999996,"block_name":"container_cell"},"9fdfddfa385c450b9cea4dd78fdc162f":{"width":98.275999999999996,"block_name":"container_cell"},"a5c4aca0ee484529ae899280b6ccf3c7":{"width":98.275999999999996,"block_name":"container_cell"},"a5c5fab8345a48c0943de0f4568b8d25":{"width":98.275999999999996,"block_name":"container_cell"},"0e622387b1fc43d8af25d3be4dd768c3":{"width":98.275999999999996,"block_name":"container_cell"},"c0c38b756ebb4983aeccf9089f4c7c3e":{"width":98.275999999999996,"block_name":"container_cell"},"7c5d3567e2284d3ebe168f417fcdfabe":{"width":98.275999999999996,"block_name":"container_cell"},"25c94e10d6824f429aaa73a87bfe07a8":{"width":98.275999999999996,"block_name":"container_cell"},"5f79beadfc9044ac9e3d4c30774dd832":{"width":"26.784","block_name":"container_cell"},"dc435bb2902348e8b689c295daf9fcc3":{"width":"70.100","block_name":"container_cell"},"6c9ac570d5994bd287baeea52a627383":{"width":98.275999999999996,"block_name":"container_cell"},"091899d0513a4a6490c80f654f815712":{"width":98.275999999999996,"block_name":"container_cell"},"ff5b9abe606848b58696a3e798f4594f":{"width":98.275999999999996,"block_name":"container_cell"},"38506227254d4f928b92ed42fbacd27f":{"width":98.275999999999996,"block_name":"container_cell"},"2c3e896ad7d948f3bfdd7a666061477b":{"width":98.275999999999996,"block_name":"container_cell"},"4f71948b78d14671969daceda04d8be6":{"width":98.275999999999996,"block_name":"container_cell"},"6c6666f601e04d0fbf3422550478a93a":{"width":98.275999999999996,"block_name":"container_cell"},"674335b10a7f45fc8fecfedf285f3eb4":{"width":"11.948","block_name":"container_cell"},"9e2aca21af63412193c1913bcbb49b3b":{"width":"14.442","block_name":"container_cell"},"3a4aef2d50ff4918ae1e76db55699d6d":{"width":"70.162","block_name":"container_cell"}},"pc":[]};});
    </script>
    <script>
        FE.runOnObjectReady('adapterManager',function(){adapterManager.view_port='view';adapterManager.site_width=window.siteWidth;adapterManager.DEVICE_TABLET_CONTENT_MIN_WIDTH=800;adapterManager.DEVICE_TABLET_POPUP_MIN_WIDTH=400;adapterManager.DEVICE_MOBILE_CONTENT_MIN_WIDTH=370;adapterManager.DEVICE_MOBILE_POPUP_MIN_WIDTH=300;adapterManager.allowMediaQuery=1;adapterManager.initStates({"pc":true,"mobile370":true});adapterManager.initView();adapterManager.initResize([{"name":"pc","min":0,"max":65000},{"name":"mobile370","min":0,"max":500}]);});
    </script>
    <script>
        window.YANDEX_MAPS_API_VERSION='2.1';window.YANDEX_MAPS_API_KEY='4217c84f-2b1a-454a-ac11-02932f16a3a6';
    </script>
    <script>
        window.hasTagWebvisor20 = 0
    </script>
    <script>
        FE.add('onload',function(e,t){ try{ window.r330=document.referrer;if(r330.length){setCookie('bm360track',r330)};window.r330=null;;yandexMaps.init(); }catch(err){alert(err);} });FE.add('onready',function(e,t){ try{ initAnchors();;
        yandexMaps.addMap('cbe82f7fb2e644a79bfcfb07cef6f689','50.4276094','30.3664108');window.initFileFields && initFileFields(10485760,1,10485760);; }catch(err){alert(err);} });
    </script>

    <script>
        if (window.ga) {
            ga(function(t) {
                window.ga_cid = t.get('clientId');
                console.log('got client id: ', window.ga_cid);
                $('.frm_field1').val(window.ga_cid);
            });
        }
    </script>
@endsection