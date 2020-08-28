
$(function(){

    /** Scroll top btn Init
     **********************************************************/
    var $scrollTopBtn = $('#scrollTop-btn'),
        ajaxLouder = false;
    

    //Scroll to Top Button
    $(window).scroll(function(){
        if ($(this).scrollTop() > 500) {
            $scrollTopBtn.parent().addClass('scrolled');
        } else {
            $scrollTopBtn.parent().removeClass('scrolled');
        }
    });
    $scrollTopBtn.click(function(){
        $('html, body').animate({scrollTop : 0}, {duration: 700, easing:"easeOutExpo"});
    });

    /** Hover btn menu catalog Init
     **********************************************************/
    $(".main-header .dropdown a:first-child").hover(function(){
        $(".main-header .dropdown a:first-child").removeClass("active");
        $(this).addClass("active");
        $("#darkness").addClass("active").fadeIn(500);
        var curMenuSelector = $(this).attr('data-tab');
        if (!curMenuSelector) {
            $(".dropdown-menu").stop(true,true).hide();
            return;
        }
        var curMenu = $(curMenuSelector);
        $(".dropdown-menu").not(curMenu).stop(true,true).hide();
        $(curMenu).stop(true,true).fadeIn(500);
    });

    //$("header .tab-item").mouseleave(function(){
    //    $(".main-header .dropdown a").removeClass("active");
    //    $(".dropdown-menu").hide();
    //});
    $("header .main-header").mouseleave(function(){
        $(".main-header .dropdown a:first-child").removeClass("active");
        $(".dropdown-menu").hide();
        $("#darkness").removeClass("active");
    });
    $(".dropdown-menu").mouseover(function(){
        $(".main-header .dropdown a").addClass("active");
        $(this).show();
    });

    /** Button phones header Init
     **********************************************************/
    $(".navbar-right .menu-dropdown .current").click(function(){
        $(this).toggleClass("active");
        $(".navbar-right .menu-dropdown .dropdown").slideToggle();
    });

    /** Button search header Init
     **********************************************************/
    $("header .header-search > a").click(function(e){
        e.preventDefault();
        $(".header-search .search-dropdown").addClass("active");
        $(".header-search .input-box .form-control").focus();

    });

    $('.mega-dropdown-menu .nav-tabs li a').hover(function (e) {
        e.preventDefault();
        $(this).tab('show')
    });


    /** Button menu on tablet on top header Init
     **********************************************************/
    $(".nav-site .navbar-toggle").click(function(){
        $(this).toggleClass("active");
        $("#top-menu").slideToggle();
    });

    /** Main menu Init
     **********************************************************/
    $("#menu").mmenu({
        "extensions": [
            //"effect-menu-zoom",
            "pageshadow",
            "theme-black"
        ],
        "offCanvas": {
            "position": "right"
        },
        navbars: [ {
            content: ['<a href="#" class="fa fa-envelope"></a>', '<a href="#" class="fa fa-twitter"></a>', '<a href="#" class="fa fa-facebook"></a>']
        }, {
            content: ["prev", "title"]
        }],
        "autoHeight": true,
        //"navbars": [
        //    {
        //        "position": "bottom",
        //        "content": [
        //            "<a>Some text :)</a>"
        //        ]
        //    }
        //],
        "sectionIndexer": true
    });

    /** Sign in / Sign up form switching (in modal)
     *********************************************************/
    $('.form-switch a').click(function(e){
        var form = $(this).attr('href');
        e.preventDefault();
        $(form + '> a').click();
    });

    /** Switch to Sign In/Sign Up Form when Modal open (For separate Sign In/Sign Up button)
     *****************************************************************************************/
    $('[data-modal-form="sign-in"]').click(function(){
        $('#form-2 a').click();
    });
    $('[data-modal-form="sign-up"]').click(function(){
        $('#form-1 a').click();
    });

    /** Material Effect on Inputs
     **********************************************************/
    var $input = $('.form-input input, .form-input textarea');
    $input.on('focus', function(){
        if (this.value == '') {
            $(this).parent().addClass('active');
        }
    });
    $input.on('blur', function(){
        if (this.value == '') {
            $(this).parent().removeClass('active');
        }
    });

    $(".product-block .product-name").dotdotdot({
        ellipsis: "... ",
        wrap: "word",
        fallbackToLetter: true,
        after: null,
        watch: false,
        height: null,
        tolerance: 0,
        callback: function(isTruncated, orgContent){},
        lastCharacter: {
            remove: [" ", ",", ";", ".", "!", "?"],
            noEllipsis: []
        }
    });

    function recalculateTopBtn()
    {
        var containerWidth = $('main .container:first').width();
        var documentWidth = $(document).width();
        var diff = documentWidth - containerWidth;

        var halfWidth = diff / 2;

        if (halfWidth >= 50) {
            $scrollTopBtn.removeClass('sticky-min').width(halfWidth);
        } else {
            $scrollTopBtn.addClass('sticky-min');
        }

        console.log(halfWidth);
    }

    $( window ).resize(function() {
        recalculateTopBtn();
    });

    recalculateTopBtn();
    
    $('#add-callback').off('click', 'button.btn-success').on('click', 'button.btn-success', function(){
        if (!ajaxLouder) {
            ajaxLouder = true;
            
            var parentModal = $('#add-callback');
            
            $.ajax({
                url: '/add-callback',
                type: 'get',
                data: {user_phone: parentModal.find('input.user_phone').val()},
                dataType: 'JSON',
                beforeSend: function () {
                    $('#ajax-loader').show();
                },
                complete: function () {
                    $('#ajax-loader').hide();
                    ajaxLouder = false;
                },
                success: function (json) {
                    if (json.status == 'success') {
                        parentModal.modal('hide'); 
                        showMessage(json.message) 
                    } else {
                        showError(json.message);
                    }
                    console.log(json);
                }

            });
        }
    });
    
    $('#add-order').off('click', 'button.btn-success').on('click', 'button.btn-success', function(){
        if (!ajaxLouder) {
            ajaxLouder = true;
            
            var parentModal = $('#add-order');
            
            $.ajax({
                url: '/add-order',
                type: 'get',
                data: {
                    user_name: parentModal.find('input.user_name').val(),
                    user_contact: parentModal.find('input.user_contact').val(),
                    user_info: parentModal.find('textarea.user_info').val()
                },
                dataType: 'JSON',
                beforeSend: function () {
                    $('#ajax-loader').show();
                },
                complete: function () {
                    $('#ajax-loader').hide();
                    ajaxLouder = false;
                },
                success: function (json) {
                    if (json.status == 'success') {
                        parentModal.modal('hide'); 
                        showMessage(json.message);
                    } else {
                        showError(json.message);
                    }
                    console.log(json);
                }

            });
        }
    });
});

function showMessage(massege) {
    var mblock = $('#message-block');
    mblock.text(massege);
    mblock.slideDown();
    setTimeout(function(){
        mblock.slideUp();
    }, 10000);
}

function showError(massege) {
    var mblock = $('#error-block');
    mblock.text(massege);
    mblock.slideDown();
    setTimeout(function(){
        mblock.slideUp();
    }, 5000);
}


$(document).mouseup(function (e){
    var search = $("header .header-search");
    if (!search.is(e.target)
            && search.has(e.target).length === 0) {
        $(".header-search .search-dropdown").removeClass("active");
    }
});

var Main = (function() {
    var $document = $(document),
        mainSelf = this,
        log = function() {
            if (console) {}
        },
        truncate = function(str, maxlength) {
            if (str.length > maxlength) {
                return str.slice(0, maxlength - 3) + '...';
            }
            return str;
        },
        router = {
            'initMap': {
                defaultOption: {
                    mapObject: [],
                    markers: [],
                    centerLat: 49.99643,
                    centerLon: 36.22415,
                    markersData: [],
                    marker: [],
                    page: 2
                },
                compOptions: false,
                init: function(options) {
                    var tmp = $.extend({}, this);
                    tmp.compOptions = $.extend({}, tmp.defaultOption, options);
                    tmp.events();
                },
                events: function() {
                    var self = this;
                    var mapOptions = {
                        zoom: 12,
                        center: new google.maps.LatLng(self.compOptions.centerLat, self.compOptions.centerLon),
                        mapTypeId: google.maps.MapTypeId.ROADMAP,

                        mapTypeControl: false,
                        mapTypeControlOptions: {
                            style: google.maps.MapTypeControlStyle.DROPDOWN_MENU,
                            position: google.maps.ControlPosition.LEFT_CENTER
                        },
                        panControl: false,
                        panControlOptions: {
                            position: google.maps.ControlPosition.TOP_RIGHT
                        },
                        zoomControl: true,
                        zoomControlOptions: {
                            style: google.maps.ZoomControlStyle.LARGE,
                            position: google.maps.ControlPosition.TOP_RIGHT
                        },
                        scrollwheel: false,
                        scaleControl: false,
                        scaleControlOptions: {
                            position: google.maps.ControlPosition.TOP_LEFT
                        },
                        streetViewControl: true,
                        streetViewControlOptions: {
                            position: google.maps.ControlPosition.LEFT_TOP
                        },
                        styles: []
                    };
                    
                    self.compOptions.mapObject = new google.maps.Map(document.getElementById('map'), mapOptions);
                    
                    //for (var key in self.compOptions.markersData) {
                        
                    self.initMarker(self.compOptions.markersData, 'stadium');
                    //};
                                        
                    $(document).on('click', '.onmap', function() {
                        var photoID = $(this).data('index');

                        google.maps.event.trigger(self.compOptions.markers[photoID], 'click');
                        
                    });
                    
                    $(document).on('click', '.pager a', function() {
                        self.loadMore($(this));
                    });
                },
                
                initMarker: function(itemMarker, key) {
                    var self = this;
                    itemMarker.forEach(function (item) {
                        marker = new google.maps.Marker({
                            position: new google.maps.LatLng(item.location_latitude, item.location_longitude),
                            map: self.compOptions.mapObject,
                            icon: '/img/balls/football.png',
                            animation: google.maps.Animation.DROP
                        });

                        if ('undefined' === typeof self.compOptions.markers[item.key])
                            self.compOptions.markers[item.key] = [];
                            
                        self.compOptions.markers[item.key]= marker;
                        
                        google.maps.event.addListener(marker, 'click', (function () {
                            self.closeInfoBox();
                            self.getInfoBox(item).open(self.compOptions.mapObject, this);
                            self.compOptions.mapObject.setCenter(new google.maps.LatLng(item.location_latitude, item.location_longitude));
                        }));
                    });
                },
                
                loadMore: function(target) {
                    var self = this;
                    console.log(target, target.data('mod'));
                    $.rex(target.data('mod'), target.data('act'), {task: target.data('task'), page: self.compOptions.page}, function(data) {
                        if (!data.markers) {
                            $('.pager').hide();
                        }
                        
                        if (data.content) {
                            $('.list-conteiner').append(data.content); 
                            
                            var markers = (jQuery.parseJSON(data.markers));
        
                            for (var key in markers) {
                                self.initMarker(markers[key], key);
                            }
                            
                            self.compOptions.page++;
                        }
                    });
                },
                
                hideAllMarkers: function() {
                    for (var key in self.compOptions.markers)
                        self.compOptions.markers[key].forEach(function (marker) {
                            marker.setMap(null);
                        });
                },

                closeInfoBox: function() {
                    $('div.infoBox').remove();
                },

                getInfoBox: function(item) {
                    return new InfoBox({
                        content:
                        '<div class="marker_info" id="marker_info">' +
                        '<h3>'+ item.name_point +'</h3>' +
                        '<span>'+ item.description_point +'</span>' +
                        '</div>',
                        disableAutoPan: true,
                        maxWidth: 0,
                        pixelOffset: new google.maps.Size(40, -190),
                        closeBoxMargin: '-20px 0 0',
                        isHidden: false,
                        pane: 'floatPane',
                        enableEventPropagation: true
                    });


                },
            },
            init: function(option) {
                for (var key in option) {
                    var optionItem = option[key];
                    for (var keyOption in optionItem) {
                        var subItem = optionItem[keyOption];
                        if ('object' == typeof(this[keyOption])) {
                            var runObject = this[keyOption];
                            if ('function' == typeof(runObject.init)) {
                                runObject.init(subItem, this);
                            }
                        }
                    }
                }
            }
        },
        routerDefault = {
            //'markReview': {},
        },
        addedInitRoute = function(route, data) {
            for (var nameRoute in data) {
                var t = {};
                t[nameRoute] = data[nameRoute];
                route.push(t);
            }
        };
        
    return {
        addRouteObject: function(addRouter) {
            router = $.extend({}, router, addRouter);
        },
        addRouteDefault: function(addDefault) {
            routerDefault = $.extend({}, routerDefault, addDefault);
        },
        init: function(options) {
            var defaults = {
                    'route': []
                },
                options = $.extend({}, defaults, options);
            addedInitRoute(options.route, routerDefault);
            router.init(options.route)
        }
    }
})();
    