function isIos(t) {
    return /iP(hone|od|ad)/.test(t || navigator.platform)
}

function getIosVersion(t, e) {
    if (t = t || navigator.platform, e = e || navigator.appVersion, !isIos(t)) return !1;
    var i = e.match(/OS (\d+)_(\d+)_?(\d+)?/);
    return [parseInt(i[1], 10), parseInt(i[2], 10), parseInt(i[3] || 0, 10)]
}

function _eC(t, e, i) {
    var n = "";
    if ("undefined" != typeof i && i.trace && 1 == getCookie("show_me_debug")) {
        var a = "trace" + 999999999 * Math.random();
        n = '<div style="margin-top:10px;"><a style="color: #0af;padding: 10px 0 0;" onclick="var el=document.getElementById(\'' + a + "'); if(el){el.style.display=('none'==el.style.display)?'block':'none';}\">Подробнее &raquo;</a></div><div id=\"" + a + '" style="margin-top:10px;display: none;"><ul>';
        for (var o = 0; o < i.trace.length; o++) n += "<li>" + i.trace[o] + "</li>";
        n += "</ul></div>"
    }
    var r = $("<span/>").text(t.message).html();
    $('<div id="locked_screen" style="overflow:auto"><div class="wnd" style="text-align:left;margin:60px auto;"><div class="header">Ошибка' + (t.code > 0 ? " #" + t.code : "") + '!</div><div style="font-size:16px;margin:30px 0 0;padding: 20px;background: rgba(0,0,0,.05);border-radius: 3px;">' + r + "</div>" + n + (e > 0 ? '<div style="color:#ccc;margin-top:10px;font-size:10px;">(catcher ' + e + ")</div>" : "") + '<div class="btn_wrap"><div class="btn-m btn-default btn-ghost" onclick="window.location.reload();">Перезагрузить страницу</div></div></div></div>').appendTo($("body")), setTimeout(function() {
        throw t
    }, 0)
}

function each(t, e) {
    var i, n = 0,
        a = t.length;
    if (void 0 === a) {
        for (i in t)
            if (e.call(t[i], i, t[i]) === !1) break
    } else
        for (var o = t[0]; n < a && e.call(o, n, o) !== !1; o = t[++n]);
    return t
}

function getWindowSize() {
    return {
        width: window.innerWidth || document.documentElement.clientWidth || document.getElementsByTagName("body")[0].clientWidth,
        height: window.innerHeight || document.documentElement.clientHeight || document.getElementsByTagName("body")[0].clientHeight
    }
}

function rnd() {
    return window.rnd_seed = (9301 * window.rnd_seed + 49297) % 233280, window.rnd_seed / 233280
}

function random(t) {
    return Math.ceil(rnd() * t)
}

function irand(t, e) {
    return Math.floor(rand(t, e))
}

function cwarn() {
    if (window.dbgMode && window.console) {
        var t = Array.prototype.slice.call(arguments);
        console.warn.apply(window, t)
    }
}

function genPass(t, e) {
    t = t || 7, e = e || "qwertyuiopasdfghjklzxcvbnm0123456789";
    for (var i = e.length, n = "", a = 0; a < t; a++) {
        for (;;) {
            var o = e[getRandomInt(0, i - 1)];
            if (n.substr(-1, 1) != o) break
        }
        n += o
    }
    return n
}

function extendClass(t, e) {
    t.prototype = new e, t.prototype.constructor = t
}

function htmlentities(t) {
    return String(t).replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;").replace(/"/g, "&quot;")
}

function htmlspecialchars(t) {
    return t.replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;").replace(/"/g, "&quot;").replace(/'/g, "&#039;")
}

function htmlspecialchars_decode(t, e) {
    var i = 0,
        n = 0,
        a = !1;
    "undefined" == typeof e && (e = 2), t = t.toString().replace(/&lt;/g, "<").replace(/&gt;/g, ">");
    var o = {
        ENT_NOQUOTES: 0,
        ENT_HTML_QUOTE_SINGLE: 1,
        ENT_HTML_QUOTE_DOUBLE: 2,
        ENT_COMPAT: 2,
        ENT_QUOTES: 3,
        ENT_IGNORE: 4
    };
    if (0 === e && (a = !0), "number" != typeof e) {
        for (e = [].concat(e), n = 0; n < e.length; n++) 0 === o[e[n]] ? a = !0 : o[e[n]] && (i |= o[e[n]]);
        e = i
    }
    return e & o.ENT_HTML_QUOTE_SINGLE && (t = t.replace(/&#0*39;/g, "'")), a || (t = t.replace(/&quot;/g, '"')), t = t.replace(/&amp;/g, "&")
}

function setcookie(t, e, i, n, a, o) {
    document.cookie = t + "=" + escape(e) + (i ? "; expires=" + new Date(i) : "") + (n ? "; path=" + n : "") + (a ? "; domain=" + a : "") + (o ? "; secure" : "")
}

function _initCookies() {
    window._cookies = {};
    for (var t = document.cookie.split(";"), e = 0, i = t.length, n = 0; n < i; n++)
        if (e = t[n].indexOf("="), e > 0) {
            var a = t[n].substr(0, e),
                o = t[n].substr(e + 1);
            window._cookies[trim(a)] = unescape(trim(o))
        }
}

function getCookie(t) {
    return _initCookies(), window._cookies[t]
}

function setCookie(t, e, i, n) {
    var a = "";
    if (i) {
        var o = new Date;
        o.setTime(o.getTime() + 24 * i * 60 * 60 * 1e3), a = "; expires=" + o.toGMTString()
    }
    document.cookie = t + "=" + escape(e) + a + "; path=/" + (window.baseDomain ? "; domain=." + window.baseDomain : "") + (n && window.isHttps ? "; secure" : "")
}

function generateUUID() {
    var t = (new Date).getTime(),
        e = "xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx".replace(/[xy]/g, function(e) {
            var i = (t + 16 * Math.random()) % 16 | 0;
            return t = Math.floor(t / 16), ("x" == e ? i : 7 & i | 8).toString(16)
        });
    return e
}

function fileUploaded(t) {
    isset(t.type) && FE.run("file_uploaded_" + t.type, t)
}

function fileUploadFail(t) {
    isset(t.type) && FE.run("file_upload_fail_" + t.type, t)
}

function makeBtnDisabled(t, e) {
    return "undefined" == typeof $(t).data("clicked") && (e = e || "Загружается...", $(t).val(e).text(e).addClass("disabled").data("clicked", !0), !0)
}

function toggleDropdown(t) {
    $(".dropdown_part:visible").hide();
    var e = $(t).closest(".inp_wrap"),
        i = e.children(".dropdown_part");
    i.css({
        width: e.width()
    }), i.removeClass("dropped_down dropped_up"), e.offset().top + e.outerHeight() + i.outerHeight() < $(window).height() ? (i.css({
        top: e.outerHeight() - 1
    }), i.addClass("dropped_down")) : (i.css({
        top: -i.outerHeight()
    }), i.addClass("dropped_up")), i.show()
}

function setStateCookie(t, e) {
    "function" == typeof $.cookie && ($.removeCookie(t), $.cookie(t, e, {
        expires: 360,
        path: "/"
    }))
}

function ColorLuminance(t, e) {
    t = String(t).replace(/[^0-9a-f]/gi, ""), t.length < 6 && (t = t[0] + t[0] + t[1] + t[1] + t[2] + t[2]), e = e || 0;
    var i, n, a = "#";
    for (n = 0; n < 3; n++) i = parseInt(t.substr(2 * n, 2), 16), i = Math.round(Math.min(Math.max(0, i + i * e), 255)).toString(16), a += ("00" + i).substr(i.length);
    return a
}

function convertToHex(t) {
    var e = {
        hex: null,
        opacity: 1
    };
    if (/(^#?[0-9A-F]{6}$)|(^#?[0-9A-F]{3}$)/i.test(t)) e.hex = "#" + t.replace("#", "");
    else {
        var i = t.match(/^rgba\((\d+),\s*(\d+),\s*(\d+),\s*(.+)\)$/);
        if (i) e.hex = "#" + ("0" + parseInt(i[1], 10).toString(16)).slice(-2) + ("0" + parseInt(i[2], 10).toString(16)).slice(-2) + ("0" + parseInt(i[3], 10).toString(16)).slice(-2), e.opacity = parseFloat(i[4]);
        else if ("transparent" == t) e.opacity = 0;
        else {
            var n = rgb2hex(t);
            null != n && (e.hex = n)
        }
    }
    return (null == e.opacity || isNaN(e.opacity)) && (e.opacity = 1), e
}

function rgb2hex(t) {
    return t ? (t = t.match(/^rgb\((\d+),\s*(\d+),\s*(\d+)\)$/), t ? "#" + ("0" + parseInt(t[1], 10).toString(16)).slice(-2) + ("0" + parseInt(t[2], 10).toString(16)).slice(-2) + ("0" + parseInt(t[3], 10).toString(16)).slice(-2) : null) : null
}

function hex2rgb(t) {
    var e = parseInt(t.indexOf("#") > -1 ? t.substring(1) : t, 16),
        i = e >> 16,
        n = (65280 & e) >> 8,
        a = 255 & e;
    return [i, n, a]
}

function rgba2parts(t) {
    var e, i, n = "#ffffff",
        a = 1;
    return null != t && (i = t.match(/^rgba\((\d+),\s*(\d+),\s*(\d+),\s*(.+)\)$/), i ? (n = "#" + ("0" + parseInt(i[1], 10).toString(16)).slice(-2) + ("0" + parseInt(i[2], 10).toString(16)).slice(-2) + ("0" + parseInt(i[3], 10).toString(16)).slice(-2), a = parseFloat(i[4]), (null == a || isNaN(a)) && (a = 1)) : "transparent" == t ? a = 0 : (e = rgb2hex(t), null != e && (n = e))), {
        color: n,
        opacity: a
    }
}

function escapeRus(t) {
    var e = [];
    t += "";
    for (var i = 1040; i <= 1103; i++) e[i] = i - 848;
    e[1025] = 168, e[1105] = 184;
    var n = [];
    for (i = 0; i < t.length; i++) {
        var a = t.charCodeAt(i);
        "undefined" != typeof e[a] && (a = e[a]), a <= 255 && (n[i] = escape(String.fromCharCode(a))), 8470 == a && (n[i] = "%B9"), 43 == a && (n[i] = "%2B")
    }
    return n.join("")
}

function hasInFileList(t, e) {
    for (var i, n, a = 0; a < t.length; a++)
        for (i = t[a].entries(), n = i.next(); !n.done;) {
            if (n.value[0].includes(e)) return n.value[1].name;
            n = i.next()
        }
    return null
}

function ajaxForUploadFileToLead(t, e, i) {
    for (var n = 0; n < t.length; n++) $.ajax({
        data: t[n],
        dataType: "json",
        method: "post",
        cache: !1,
        processData: !1,
        contentType: !1,
        url: baseUrl + window.siteId + "/leads/save_files_to_lead/frm:" + i + "/lead_id:" + e,
        success: function(t) {
            0 == t.saved && alert("Возникла ошибка при сохранении файлов")
        }
    })
}

function splitRequestByFile(t, e, i, n) {
    for (var a = new FormData, o = 0, r = 0, s = 0; e.length > s; s++) e[s].files[0] && (o += e[s].files[0].size, window.maxPostSize > o || (o -= e[s].files[0].size, r += e[s].files[0].size, window.maxPostSize < r && (n.push(a), a = new FormData, r = e[s].files[0].size), a.append(e[s].name, e[s].files[0], e[s].files[0].name), i.delete(e[s].name)));
    r && n.push(a)
}

function checkRequiredFieldsContainFiles(t, e) {
    for (var i = !0, n = 0; e.length > n; n++)
        if (!(e[n].files.length > 0)) {
            var a = e[n].id.indexOf("field") + 5,
                o = e[n].id.substr(a),
                r = t.find("[field-id=" + o + "]");
            if (r.hasClass("is_required")) {
                var s = !1,
                    l = t.find("#" + t.attr("id") + "__field" + o),
                    d = t.find(".ui_error[for=" + t.attr("id") + "__field" + o + "]");
                l.length && (l.addClass("ui_has_error"), !1 === s && (l.focus(), s = !0)), d.length && (d.show(), d.html("<div>Нужно выбрать файл</div>")), i = !1
            }
        } return i
}

function showCloudPaymentsWidget(t) {
    var e = JSON.parse(t),
        i = new cp.CloudPayments;
    i.charge(e, function(t) {
        ajaxLoad({
            fullUrl: window.lpmBaseUrl + "payment_acceptance/cloud_payments_success/",
            data: {
                payment_id: t.data.payment_id,
                signature: t.data.signature
            },
            onSuccess: function(e) {
                e.res && 1 === parseInt(e.res) && t.data.success_url && (window.location.href = t.data.success_url)
            }
        })
    }, function(t, e) {
        ajaxLoad({
            fullUrl: window.lpmBaseUrl + "payment_acceptance/cloud_payments_fail/",
            data: {
                reason: t || "",
                payment_id: e.data.payment_id,
                signature: e.data.signature
            }
        })
    })
}

function jAlert(t, e) {
    e = $.extend({
        id: "jAlert",
        html: !0,
        showCloseBtn: !1,
        width: !1,
        okText: !1,
        btnCls: "ibtn-blue",
        btnWidth: 100,
        onOk: function() {},
        headerText: !1,
        hideOnBlackoutClick: !1,
        alertClass: "",
        mobileAdapt: !1
    }, e);
    var i = $("#" + e.id);
    if (i.length) {
        if (i.attr("class", i.attr("class").replace(/^custom-/g, "")), e.alertClass.length)
            for (var n = e.alertClass.split(/\s+/g), a = 0, o = n.length; a < o; a++) i.addClass("custom-" + n[a]);
        !1 !== e.headerText ? i.find(".iblk_header").show().find(".h5-fake").text(e.headerText) : i.find(".iblk_header").hide(), i.find(".wind-btn-apply").text(e.okText || "OK").attr("class", "btn wind-btn-apply " + e.btnCls).css("width", e.btnWidth), i.find("#jAlertBody")[!0 === e.html ? "html" : "text"](t), i.wind("setApplyFunc", function() {
            e.onOk()
        }), e.onCancel && "function" == typeof e.onCancel && (i.wind("setCancelFunc", e.onCancel), i.wind("setCloseFunc", e.onCancel)), e.hideOnBlackoutClick && i.on("click", function() {
            return !1
        }), !1 !== e.width && i.css({
            width: e.width
        }), e.mobileAdapt && quizMobileView.adaptWind(i), i.wind("show")
    }
    i = null
}

function jConfirm(t, e, i) {
    e = $.extend({
        width: 500,
        html: !0,
        okText: "OK",
        cancelText: "Отмена",
        btnWidth: 94,
        okClass: "btn-success",
        cancelClass: "",
        onOk: function() {},
        onCancel: function() {},
        headerText: !1,
        showClose: !0
    }, e);
    var n;
    n = i === !0 ? $("#" + e.id) : $("#jConfirm"), n.length && (!1 !== e.headerText ? n.find(".iblk_header").show().find(".h5-fake").text(e.headerText) : n.find(".iblk_header").hide(), !0 === e.html ? n.find("#jConfirmBody").html(t) : n.find("#jConfirmBody").text(t), n.find("#jConfirmOk").attr("class", "btn btn-default wind-btn-apply " + e.okClass).text(e.okText).css("min-width", e.btnOkWidth || e.btnWidth), n.find("#jConfirmCancel").attr("class", "btn btn-default wind-btn-cancel ml1 " + e.cancelClass).text(e.cancelText).css("min-width", e.btnCancelWidth || e.btnWidth), n.find(".wind-close")[e.showClose ? "show" : "hide"](), n.css({
        width: e.width
    }), n.wind("setApplyFunc", e.onOk), n.wind("setCancelFunc", e.onCancel), e.onClose && "function" == typeof e.onClose ? n.wind("setCloseFunc", e.onClose) : n.wind("setCloseFunc", e.onCancel), n.wind("show"), e.onShow && "function" == typeof e.onShow && e.onShow()), n = null
}

function showDoneBox(t, e) {
    var i = $('<div class="pp_mes_wrap"><div class="pp_mes">' + t + "</div></div>");
    e = $.extend({
        width: 380,
        top: "40%",
        fadeIn: 100,
        showTime: 2e3,
        fadeOut: 500,
        cls: "",
        el: i
    }, e), i.css({
        width: e.width,
        "margin-left": -1 * Math.round(e.width / 2),
        top: e.top,
        opacity: 0
    }), e.cls.length && i.addClass(e.cls), i.appendTo($("body")), i.animate({
        opacity: 1
    }, e.fadeIn, function() {
        setTimeout(function() {
            e.el.animate({
                opacity: 0
            }, e.fadeOut, function() {
                $(this).remove()
            })
        }, e.showTime)
    }), i = null
}

function goTo(t) {
    window.location.href = window.baseUrl + t
}

function getUrl() {
    return window.location.href.replace(window.baseUrl, "")
}

function if_var_val(t, e, i) {
    for (var n in e)
        if (t == n) return n = null, e[n];
    return n = null, i || !1
}

function plural(t, e, i, n) {
    if (t < 0 && (t = -1 * t), "undefined" == typeof n) return 1 == t ? e : i;
    var a = t % 10,
        o = t % 100;
    return 1 == t || 1 == a && 11 != o ? (a = o = null, e) : a > 1 && a < 5 && 12 != o && 13 != o && 14 != o ? (a = o = null, i) : (a = o = null, n)
}

function strtr(t, e) {
    for (var i in e) t = t.replace(new RegExp(i, "g"), e[i]);
    return i = null, t
}

function number_format(t, e, i, n) {
    t = (t + "").replace(/[^0-9+\-Ee.]/g, "");
    var a = isFinite(+t) ? +t : 0,
        o = isFinite(+e) ? Math.abs(e) : 0,
        r = "undefined" == typeof n ? " " : n,
        s = "undefined" == typeof i ? "." : i,
        l = "",
        d = function(t, e) {
            var i = Math.pow(10, e);
            return "" + Math.round(t * i) / i
        };
    return l = (o ? d(a, o) : "" + Math.round(a)).split("."), l[0].length > 3 && (l[0] = l[0].replace(/\B(?=(?:\d{3})+(?!\d))/g, r)), (l[1] || "").length < o && (l[1] = l[1] || "", l[1] += new Array(o - l[1].length + 1).join("0")), l.join(s)
}

function formatFileSize(t, e) {
    if (0 == t) return "0 байт";
    "undefined" == typeof e && (e = 0);
    var i = e + 1 || 3,
        n = ["байт", "KB", "MB", "GB", "TB", "PB", "EB", "ZB", "YB"],
        a = Math.floor(Math.log(t) / Math.log(1024));
    return parseFloat((t / Math.pow(1024, a)).toFixed(i)) + " " + n[a]
}

function reachYaGoal(t) {
    if (isset(window.Ya) && t) {
        var e;
        if (isset(Ya.Metrika2)) e = Ya.Metrika2.counters();
        else {
            if (!isset(Ya.Metrika)) return void slackErrorDump(new Error("Error #4911"));
            e = Ya.Metrika.counters()
        }
        for (var i in e) e.hasOwnProperty(i) && (window["yaCounter" + e[i].id] ? (window.hasTagWebvisor20 ? ym(e[i].id, "reachGoal", t) : window["yaCounter" + e[i].id].reachGoal(t), consoleDbg("reachGoal " + t)) : consoleDbg("notFound yaCounter" + e[i].id));
        e = i = null
    }
}

function reachGoalByAttr(t, e) {
    var i = t.attr(e);
    reachYaGoal(i), i = null
}

function popoverForm(t) {
    try {
        var e = $(t),
            i = e.closest(".blk"),
            n = e.closest(".blk_form_wrap"),
            a = $("#formPopover"),
            o = a.children(".wind-body");
        if (o.children("form").hide(), n.hasClass("is_popover")) {
            var r = n.children("form.user_form"),
                s = e.parent().hasClass("quiz-form");
            if (r.length ? r.appendTo(a).addClass("is_popover") : r = a.children("form[id=frm" + i.attr("id") + "]"), r.length) {
                var l = getIosVersion();
                if (l && 11 === l[0] && l[1] < 3) {
                    var d = 0;
                    a.wind("setCloseFunc", function() {
                        $("body").removeClass("ios-11-fix"), $(window).scrollTop(d)
                    }), d = $(window).scrollTop(), $("body").addClass("ios-11-fix").css("top", -d)
                }
            }
            s ? (a.addClass("quiz-form").parent().css("overflow-y", "auto"), quizMobileView.toQuizView(r)) : a.removeClass("quiz-form").parent().removeAttr("style");
            var c = a.find(".user_form_regulation");
            1 === c.data("is-regulation-enabled") && c.addClass("hidden"), r.length && (reachGoalByAttr(r, "goal-popover"), a.children().hide(), r.show(), a.wind("show"), s && (quizMobileView.getSmartHeader().recalcHeaderHeight(), sitesMan.adaptQuizContent(sitesMan.quizForm(r))))
        }
    } catch (t) {
        consoleDbg(t)
    }
    return FE.run("popoverFormOpen"), !1
}

function initSlick(t) {
    var e = t.children(".slider:first"),
        i = t.closest(".blk_box_slider");
    if (e.children(".slide").removeClass("hidden-slide"), e.hasClass("slick-initialized")) return e.slick("unslick"), void e.slick(adapterManager.slickOpt[i.attr("id")]);
    var n = t.children(".settings-slick:first"),
        a = {
            touchMove: !1,
            infinite: !0,
            speed: parseInt(n.attr("slide-aspeed")) || 300,
            dots: 1 === parseInt(n.attr("slide-circle")),
            customPaging: function() {
                return "<p>&nbsp;</p>"
            },
            arrows: 1 === parseInt(n.attr("slide-arrow")),
            nextArrow: '<div class="next-slide"><div></div></div>',
            prevArrow: '<div class="prev-slide"><div></div></div>',
            slidesToShow: 1
        };
    1 === parseInt(n.attr("slide-auto")) && 1 != n.attr("in-af") && (a.autoplay = !0, a.autoplaySpeed = 1e3 * parseFloat(n.attr("slide-pspeed")) || 2e3), "crossfade" == n.attr("slide-anim") && (a.fade = !0, a.cssEase = "linear"), e.slick(a), window.animManager.onScroll(), window.adapterManager.slickOpt[i.attr("id")] = a
}

function hideSectionPopup(t) {
    var e = $("#popup_list > #" + t),
        i = e.hasClass("blk-section--ms-popup"),
        n = /\?af_popup/i.test(window.location.href);
    if (n) return !1;
    if (e.removeClass("open"), !window._isEditor) {
        var a = ".blk.blk_video .video.autoplay iframe";
        window.speedUpVideoLoadIsEnabled && (a += ", .blk_video.video--play iframe"), e.find(a).each(function() {
            window.stopAutoPlayVideo($(this))
        })
    }
    reInitVideoIFrame(e), window.active_fixed_sections && $.each(window.active_fixed_sections, function() {
        $(this).css({
            "z-index": 999
        })
    });
    var o = $("body");
    o.css("margin-right", 0).removeClass("open_popup"), i && o.removeClass("open-popup-ms"), $("body>.navbar>.navbar-inner").css("padding-right", 0), FE.run("sectionPopup_hide")
}

function clickButtonLink(t, e, i) {
    insertJavaScript(t, e, function() {
        var t = $(i);
        t.attr("href") && ("_blank" == t.attr("target") ? window.open(t.attr("href")) : window.location.href = t.attr("href"))
    })
}

function insertJavaScript(t, e, i) {
    if (!t || !e) return void("function" == typeof i && i());
    var n = document.getElementById(e);
    return n ? void("function" == typeof i && i()) : (n = document.createElement("script"), n.type = "text/javascript", n.src = t, n.id = e, "function" == typeof i && (n.onload = i), void document.getElementsByTagName("body")[0].appendChild(n))
}

function btnPopupWnd(t) {
    var e = $(t).closest(".blk"),
        i = e.attr("id"),
        n = $("#btnPopupWnd"),
        a = n.attr("cur-blk"),
        o = e.find(".wnd_data:first");
    if ("undefined" == typeof a || a != i) {
        var r = parseInt(o.attr("wnd_width")) || 600;
        "undefined" == typeof adapterManager || adapterManager.isPC() || (r = adapterManager.getSettings(adapterManager.type).window_popover_width), n.width(r), n.find(".wind-header h3, .wind-header .div_h3").text(o.find(".wnd_data_title").text()), n.find(".wind-body").html(o.find(".wnd_data_text").html()), n.attr("cur-blk", i), consoleDbg("btnPopupWnd: move content")
    }
    n.wind("show"), n = null, FE.run("popupWndOpen")
}

function showExpiredWind(t) {
    var e = $("#sessionExpired form#frmlogin");
    e.find("#frmlogin__magic").val(t), $("#sessionExpired").wind("show").find("#frmlogin__username").focus()
}

function ExpiredWindbeforeSend() {
    var t = $("#sessionExpired #frmlogin__password"),
        e = $("#sessionExpired #frmlogin__magic");
    t.val($.sha1($.sha1(t.val()) + e.val()))
}

function truncate(t, e) {
    return "string" == typeof t ? t.length < e ? t : t.slice(0, e) : t
}

function arrayRemoveByName(t, e) {
    var i = t.indexOf(e),
        n = !1;
    return -1 != i && (t = t.splice(i, 1), n = !0), i = null, n
}

function arrayInsertBeforeItem(t, e, i) {
    var n = t.indexOf(e),
        a = !1;
    return -1 != n && (t.splice(n, 0, i), a = !0), n = null, a
}

function arrayInsertAfterItem(t, e, i) {
    var n = t.indexOf(e),
        a = !1;
    return -1 != n && (n == t.length - 1 ? t.push(i) : t.splice(n + 1, 0, i), a = !0), n = null, a
}

function arrayInsertItemUniq(t, e) {
    -1 == t.indexOf(e) && t.push(e)
}

function arrayMoveItemBefore(t, e, i) {
    return !(!arrayRemoveByName(t, e) || !arrayInsertBeforeItem(t, i, e))
}

function arrayMoveItemAfter(t, e, i) {
    return !(!arrayRemoveByName(t, e) || !arrayInsertAfterItem(t, i, e))
}

function arraySubset(t, e, i) {
    var n = t.indexOf(e),
        a = t.indexOf(i),
        o = [];
    return -1 != n && -1 != a && (n > a && (n += a, a = n - a, n -= a), o = t.slice(n, a + 1)), n = a = null, o
}

function ajaxLoad(ops) {
    var ajaxOptions = {
        type: "POST",
        ops: ops,
        cache: !1,
        timeout: 4e4,
        url: ops.fullUrl ? ops.fullUrl : window.baseUrl + ops.url,
        dataType: "json",
        data: ops.data ? ops.data : null,
        success: function(data) {
            if (!this.ops.onBeforeSuccess || "function" != typeof this.ops.onBeforeSuccess || this.ops.onBeforeSuccess(data, this.ops)) {
                if (isset(data.error) && ("object" == typeof data.error.name ? alert(data.error.name) : alert(data.error)), data.html && this.ops.block && $(this.ops.block).html(data.html), isset(data.script)) try {
                    eval(data.script)
                } catch (t) {
                    window.console && window.dbgMode && (console.log(t), console.log("[_Ошибка JS_] " + t.stack), alert("Смотри ошибку в консоли"))
                }
                this.ops.onSuccess && "function" == typeof this.ops.onSuccess && this.ops.onSuccess(data, this.ops), window.dbgMode && console.log(data)
            }
        }
    };
    return ajaxOptions.error = function(t, e, i) {
        onQueryAjaxError(t, e, i, {
            dataSerialized: ajaxOptions.data,
            url: ajaxOptions.url
        })
    }, $.ajax(ajaxOptions)
}

function runRequestToAjaxAction(t) {
    var e = t;
    e.url = window.baseUrl + t.url, e.dataType = "json", e.success = function(e, i, n) {
        return t.onAlways && "function" == typeof t.onAlways && t.onAlways(), e.debug && console.log("debug", e.debug), e.error ? void alert("Ошибка №" + e.error.code + " " + e.error.message) : e.exception ? (console.log("exception", e.exception), void alert("Wrong response from server #" + e.exception.code + ". Watch info in console")) : e.res && 1 === parseInt(e.res) ? void(t.onSuccess && "function" == typeof t.onSuccess && t.onSuccess(e.content)) : (console.log("unexpected", e), void alert("Unexpected response from server #5810. Watch info in console"))
    }, e.error = function(i, n, a) {
        t.onAlways && "function" == typeof t.onAlways && t.onAlways(), onQueryAjaxError(i, n, a, {
            dataSerialized: e.data,
            url: e.url
        })
    }, $.ajax(e)
}

function onQueryAjaxError(t, e, i, n) {
    switch (n || (n = {}), window.console && (n.isSuperman || window.dbgMode) && console.log(e, i, t.status, t.responseText), e) {
        case "timeout":
            alert("Ошибка! Нет связи с сервером. Проверьте подключение к интернету и попробуйте снова.");
            break;
        case "error":
        case "parsererror":
            mottorLogError("AJAX_ERROR_DEBUG #6563 Status: " + e + " Error: " + i, {
                response: t.responseText,
                dataSerialized: n.dataSerialized || !1,
                url: n.url
            }), n.isSuperman ? alert("Извините, на сервере возникла ошибка!\n\nАдминистратор оповещен о проблеме и скоро всё исправит.\nПопробуйте снова через некоторое время.") : alert("Извините, на сервере возникла ошибка!\n\nПожалуйста, напишите нам в тех-поддержку support@transfer-engineering.com.ua")
    }
}

function scrollTop() {
    return document.body.scrollTop || document.documentElement.scrollTop
}

function cancelEvent(t) {
    if (t = t || window.e, !t) return !1;
    for (; t.originalEvent;) t = t.originalEvent;
    return t.preventDefault && t.preventDefault(), t.stopPropagation && t.stopPropagation(), t.cancelBubble = !0, t.returnValue = !1, !1
}

function helpSlider(t, e) {
    var i = "string" == typeof t ? $(t) : t;
    if (i.length) {
        i.addClass("help-slider-inited"), i.find(".prev_slide, .next_slide").click(function() {
            helpSliderRoll($(this).closest(".help-slider-inited"), $(this).hasClass("next_slide") ? "next" : "prev")
        });
        var n = i.find(".slides_container");
        n.css({
            overflow: "hidden",
            position: "relative"
        }), n.children().css({
            cursor: "pointer"
        }).click(function() {
            helpSliderRoll($(this).closest(".help-slider-inited"), "next")
        })
    }
    i = null
}

function helpSliderRoll(t, e) {
    var i = t.find(".slides_container"),
        n = i.children(),
        a = n.filter(":visible"),
        o = null,
        r = null,
        s = a.height();
    if (!a.is(":animated"))
        if (i.css({
            height: s
        }), a.css({
            position: "absolute",
            top: 0,
            left: 0
        }), "prev" === e) {
            if (o = a.prev(), !o.length) return;
            r = o.width(), o.css({
                position: "absolute",
                opacity: 1,
                left: -r
            }).show(), a.animate({
                left: r,
                opacity: .5
            }, 400, function() {
                $(this).hide()
            }), o.animate({
                left: 0
            }, 400, function() {
                $(this).css({
                    position: "static"
                })
            }), 0 == o.prev().length && o.closest(".help-slider-inited").find(".prev_slide").hide(), o.closest(".help-slider-inited").find(".next_slide").show()
        } else if ("next" === e) {
            if (o = a.next(), !o.length) return;
            r = o.width(), o.css({
                position: "absolute",
                opacity: 1,
                left: r
            }).show(), a.animate({
                left: -r,
                opacity: .5
            }, 400, function() {
                $(this).hide()
            }), o.animate({
                left: 0
            }, 400, function() {
                $(this).css({
                    position: "static"
                })
            }), 0 == o.next().length && o.closest(".help-slider-inited").find(".next_slide").hide(), o.closest(".help-slider-inited").find(".prev_slide").show()
        }
    i = n = a = o = r = s = null
}

function getURLParam(t) {
    return decodeURI((RegExp(t + "=(.+?)(&|$)").exec(location.search) || [, null])[1])
}

function getURLParam2(t) {
    var e = RegExp(t + "=(.+?)(&|$)").exec(location.search);
    return null !== e && "undefined" != typeof e[1] ? e[1] : null
}

function insertPixel(t) {
    $(document).ready(function() {
        $("body").append($('<img src="' + t.replace("{order_id}", getURLParam("order_id")) + '" width="1" height="1" style="position: absolute;left:-9999px;"/>'))
    })
}

function stVisit() {
    var t = getCookie("LPmagCode"),
        e = {
            ref: document.referrer
        };
    "undefined" == typeof t ? e.new = 1 : e.id = t, $.ajax({
        url: window.baseUrl + "stat/visit",
        data: e,
        cache: !1,
        success: function(t) {
            var e = JSON.parse(t);
            if (console.log(e), "undefined" != typeof e.res) switch (e.res) {
                case "0":
                    console.log(e.mes);
                    break;
                case "1":
                    if ("undefined" != typeof e.id) stVisitPropagate(e.id);
                    else {
                        var i = getCookie("_magCode");
                        "undefined" != typeof i && stVisitPropagate(i)
                    }
            }
        }
    })
}

function stVisitPropagate(t) {
    var e, i = ["transfer-engineering.com.ua", "admin.transfer-engineering.com.ua"];
    for (var n in i) e = document.createElement("img"), e.className = "mag_img", e.src = ("https:" == document.location.protocol ? "https:" : "http:") + "/" + i[n] + "/stat/magcode.png?id=" + t, e.onload = function() {
        this.parentNode.removeChild(this)
    }, document.getElementsByTagName("body")[0].appendChild(e);
    e = n = i = null
}

function stLpcidPropagate() {
    var t = getCookie("_lpcid");
    if ("undefined" != typeof t) {
        var e, i, n = document.getElementsByTagName("body")[0];
        for (e in window._lpcid_hosts) window._lpcid_hosts[e].replace(/^http(|s):\/\//, "") != document.location.host && (i = new Image, i.className = "mag_img", i.onload = stVisImgRemove, i.src = window._lpcid_hosts[e] + "/stat/cid.gif?v=" + t + "&t=" + +new Date, n.appendChild(i));
        e = i = n = null
    }
}

function stVisImgRemove() {
    this.parentNode && this.parentNode.removeChild(this)
}

function stVisImgLoaded() {
    stLpcidPropagate(), this.parentNode && this.parentNode.removeChild(this)
}

function stVis(t) {
    "undefined" == typeof t && (t = "landing");
    var e = new Image,
        i = getURLParam2("p");
    e.className = "mag_img", e.onload = stVisImgLoaded, e.src = ("https:" == document.location.protocol ? "https:" : "http:") + "//" + document.location.host + "/stat/vis.gif?type=" + t + "&ref=" + document.referrer + (null === i ? "" : "&p=" + encodeURI(i)) + "&t=" + +new Date, document.getElementsByTagName("body")[0].appendChild(e), e = null
}

function animInit() {}

function createFrame(t, e) {
    var i = document.createElement("iframe");
    i.className = "mag_frame", i.src = t + "/tracer/frame/cid:" + e + "?_=" + 1 * new Date, document.body.appendChild(i)
}

function gaSpread(t) {
    console.log("gaSpread...");
    var e = getCookie("_ga_cid");
    if ("undefined" != typeof e) switch (console.log("gaSpread=", t), createFrame("//admin.transfer-engineering.com.ua", e), t) {
        case "lpmotor":
            createFrame("//transfer-engineering.com.ua", e);
            break;
        case "bm360":
            createFrame("//transfer-engineering.com.ua", e)
    }
}

function analyticSendEvent(t, e) {
    if (!window.carrotquest) return !1;
    if (e = "undefined" == typeof e ? {} : e, "undefined" != typeof e.delay && e.delay > 0) return setTimeout(function() {
        analyticSendEvent(t, e)
    }, e.delay), delete e.delay, !0;
    if ("undefined" != typeof e.check_cookie) {
        var i = getCookie(e.check_cookie);
        if ("undefined" == typeof i) return !1;
        if ("undefined" != typeof e.value_cookie && e.value_cookie != i) return !1
    }
    if ("undefined" != typeof e.once && e.once === !0) try {
        var n = localStorage.getItem("analytic_event");
        if (n = null == n || "undefined" == typeof n ? {} : JSON.parse(n), "undefined" != typeof n[t]) return !1;
        n[t] = 1, localStorage.setItem("analytic_event", JSON.stringify(n))
    } catch (t) {
        console.log(t)
    }
    carrotquest.track(t, e), dbgMode && console.log("send event [", t, "] ", e)
}

function var_dump() {
    var t = "",
        e = " ",
        i = 2,
        n = 0,
        a = 0,
        o = function(t) {
            var e = /\W*function\s+([\w\$]+)\s*\(/.exec(t);
            return e ? e[1] : "(Anonymous)"
        },
        r = function(t, e) {
            for (var i = "", n = 0; n < t; n++) i += e;
            return i
        },
        s = function(t, e) {
            var i = "";
            if (null === t) i = "NULL";
            else if ("boolean" == typeof t) i = "bool(" + t + ")";
            else if ("string" == typeof t) i = "string(" + t.length + ') "' + t + '"';
            else if ("number" == typeof t) i = parseFloat(t) == parseInt(t, 10) ? "int(" + t + ")" : "float(" + t + ")";
            else if ("undefined" == typeof t) i = "undefined";
            else if ("function" == typeof t) i += "function " + o(t);
            else if (t instanceof Date) i = "Date(" + t + ")";
            else if (t instanceof RegExp) i = "RegExp(" + t + ")";
            else if (t.nodeName) switch (t.nodeType) {
                case 1:
                    i = "undefined" == typeof t.namespaceURI || "http://www.w3.org/1999/xhtml" === t.namespaceURI ? 'HTMLElement("' + t.nodeName + '")' : 'XML Element("' + t.nodeName + '")';
                    break;
                case 2:
                    i = "ATTRIBUTE_NODE(" + t.nodeName + ")";
                    break;
                case 3:
                    i = "TEXT_NODE(" + t.nodeValue + ")";
                    break;
                case 4:
                    i = "CDATA_SECTION_NODE(" + t.nodeValue + ")";
                    break;
                case 5:
                    i = "ENTITY_REFERENCE_NODE";
                    break;
                case 6:
                    i = "ENTITY_NODE";
                    break;
                case 7:
                    i = "PROCESSING_INSTRUCTION_NODE(" + t.nodeName + ":" + t.nodeValue + ")";
                    break;
                case 8:
                    i = "COMMENT_NODE(" + t.nodeValue + ")";
                    break;
                case 9:
                    i = "DOCUMENT_NODE";
                    break;
                case 10:
                    i = "DOCUMENT_TYPE_NODE";
                    break;
                case 11:
                    i = "DOCUMENT_FRAGMENT_NODE";
                    break;
                case 12:
                    i = "NOTATION_NODE"
            }
            return i
        },
        l = function(t, e, i, a) {
            var d = "";
            e > 0 && e++;
            var c = r(i * (e - 1), a),
                u = r(i * (e + 1), a),
                p = "",
                f = "";
            if ("object" == typeof t && null !== t)
                if (t.jquery) p += (t.selector ? "jQuery('" + t.selector + "')" : "[jQuery object]") + "\n";
                else {
                    if (t.constructor && "PHPJS_Resource" === o(t.constructor)) return t.var_dump();
                    n = 0;
                    for (d in t) n++;
                    p += "array(" + n + ") {\n";
                    for (var h in t) {
                        var m = t[h];
                        "object" != typeof m || null === m || m instanceof Date || m instanceof RegExp || m.nodeName ? (f = s(m, u), p += u + "[" + h + "] => " + f + "\n") : p += u + "[" + h + "] => " + l(m, e + 1, i, a)
                    }
                    p += c + "}\n"
                }
            else p = s(t, u);
            return p
        };
    for (t = l(arguments[0], 0, i, e), a = 1; a < arguments.length; a++) t += "\n" + l(arguments[a], 0, i, e);
    return t
}

function lockScreen(t, e) {
    e = extend({
        show_animation: !1,
        show_timer: !1,
        show_btn_close: !1,
        delay_before: 0,
        css_class: "",
        hide_bg: !1,
        v2: !1,
        v3: !1
    }, e);
    var i = {},
        n = $('<div class="locker" style="display: none"><div class="locker-background"></div><div class="locker-content"><div class="locker-btn-list"><div class="locker-close-btn"></div></div><div class="locker-animation"></div><div class="locker-text"></div><div class="locker-timer"></div></div></div>');
    e.v2 && (n = $('<div class="screen-lock"> <div class="screen-lock__loader-wrap"> <div class="screen-lock__loader"></div><div class="screen-lock__text"></div> </div> </div>'), e.bg && n.find(".screen-lock__loader-wrap").css("background", e.bg)), e.v3 && (n = $('<div class="editor_lock_sceen" id="editor_loading_screen1" style="z-index: 999999; top:0;left:0; position: fixed; width: 100%; height: 100%; background: rgba(255,255,255,.9);">\n            <div class="editor_lock_sceen-info" style="width: 300px;position:absolute;top:50%;left:50%;margin: -37px 0 0 -150px;">\n                <svg style="margin-left: 100px;" width="100" height="21" viewBox="0 0 400 85" fill="none" xmlns="http://www.w3.org/2000/svg">\n                    <path d="M396.646 17.1597C395.021 15.0294 392.178 14.1772 388.523 14.1772H387.305C377.964 14.1772 362.532 19.2899 362.532 38.8886V82.3464C362.532 83.1985 363.344 84.0507 364.156 84.0507C367.405 84.0507 370.248 83.1985 371.872 81.9204C373.903 80.6422 375.121 78.5119 375.121 75.5295V38.8886C375.121 29.5153 383.244 26.959 387.305 26.959H398.27C399.488 26.959 400.301 26.1069 399.894 24.8287C399.488 20.9942 397.864 18.8639 396.646 17.1597Z" fill="#0B63F6"/>\n                    <path d="M65.3705 14.1772H64.5324C58.6658 14.1772 51.1231 15.8815 45.6755 21.4202C40.228 15.8815 32.2662 14.1772 26.8187 14.1772H25.5615C15.9236 14.1772 0 19.2899 0 38.8886V82.3464C0 83.1985 0.838082 84.0507 1.67617 84.0507C5.0285 84.0507 7.9618 83.1985 9.63796 81.9204C11.7332 80.6422 12.9903 78.5119 12.9903 75.5295V38.8886C12.9903 29.5153 21.3711 26.959 25.5615 26.959H25.9806C30.59 26.959 38.5518 29.5153 38.5518 38.8886V82.3464C38.5518 83.1985 39.3899 84.0507 40.228 84.0507C43.5803 84.0507 46.5136 83.1985 48.1898 81.9204C50.285 80.6422 51.5421 78.5119 51.5421 75.5295V38.8886C51.5421 29.5153 59.923 26.959 64.1134 26.959H64.5324C69.1419 26.959 77.1037 29.5153 77.1037 38.8886V82.3464C77.1037 83.1985 77.9418 84.0507 78.7798 84.0507C82.1322 84.0507 85.0655 83.1985 86.7416 81.9204C88.8368 80.6422 90.094 78.5119 90.094 75.5295V38.8886C90.9321 19.2899 75.4275 14.1772 65.3705 14.1772Z" fill="#0B63F6"/>\n                    <path d="M217.543 28.983C218.865 28.983 219.747 28.1549 219.747 26.9128C219.306 23.6004 218.425 21.5302 216.662 19.874C214.899 17.8038 211.814 16.5617 207.407 16.5617H202.56V2.07021C202.56 0.828085 201.678 0 200.356 0C196.831 0.414043 194.187 0.828085 192.424 2.07021C190.22 3.31234 188.898 5.7966 188.898 8.69489V16.9757H174.355C173.033 16.9757 172.152 17.8038 172.152 19.046C172.593 22.3583 173.474 24.0145 174.796 26.0847C176.559 28.1549 179.203 29.397 182.729 29.397H188.898V64.1766C188.898 70.3872 190.661 74.9417 193.746 78.6681C196.831 81.9804 201.238 83.6366 207.407 84.0506C217.103 84.0506 218.865 78.254 219.306 74.5277C219.306 73.2855 218.425 72.4574 217.103 72.4574H210.052C207.407 72.4574 205.645 71.6294 204.323 70.3872C203 69.1451 202.56 66.6609 202.56 63.3485V28.983H217.543Z" fill="#0B63F6"/>\n                    <path d="M270.342 28.983C271.58 28.983 272.405 28.1549 272.405 26.9128C271.993 23.6004 271.167 21.5302 269.517 19.874C267.867 17.8038 264.979 16.5617 260.853 16.5617H256.315V2.07021C256.315 0.828085 255.49 0 254.252 0C250.952 0.414043 248.476 0.828085 246.826 2.07021C244.763 3.31234 243.526 5.7966 243.526 8.69489V16.9757H229.911C228.673 16.9757 227.848 17.8038 227.848 19.046C228.261 22.3583 229.086 24.0145 230.324 26.0847C231.974 28.1549 234.449 29.397 237.75 29.397H243.526V64.1766C243.526 70.3872 245.176 74.9417 248.064 78.6681C250.952 81.9804 255.077 83.6366 260.853 84.0506C269.93 84.0506 271.58 78.254 271.993 74.5277C271.993 73.2855 271.167 72.4574 269.93 72.4574H263.329C260.853 72.4574 259.203 71.6294 257.965 70.3872C256.728 69.1451 256.315 66.6609 256.315 63.3485V28.983H270.342Z" fill="#0B63F6"/>\n                    <path d="M136.202 14.1772C117.308 14.1772 102.278 29.9414 102.278 49.114C102.278 68.2865 117.308 84.0507 136.202 84.0507C155.097 84.0507 170.126 68.2865 170.126 49.114C170.126 29.9414 155.097 14.1772 136.202 14.1772ZM136.202 71.695C124.608 71.695 115.161 61.4696 115.161 49.114C115.161 36.7583 124.608 26.5329 136.202 26.5329C147.797 26.5329 157.244 36.7583 157.244 49.114C157.244 61.4696 147.797 71.695 136.202 71.695Z" fill="#0B63F6"/>\n                    <path d="M315.443 14.1772C297.113 14.1772 282.532 29.9414 282.532 49.114C282.532 68.2865 297.113 84.0507 315.443 84.0507C333.774 84.0507 348.355 68.2865 348.355 49.114C348.355 29.9414 333.357 14.1772 315.443 14.1772ZM315.443 71.695C304.195 71.695 295.03 61.4696 295.03 49.114C295.03 36.7583 304.195 26.5329 315.443 26.5329C326.691 26.5329 335.857 36.7583 335.857 49.114C335.857 61.4696 326.691 71.695 315.443 71.695Z" fill="#0B63F6"/>\n                </svg>\n                <div style="border-radius: 2px; overflow: hidden; width: 300px; height: 4px; margin-top: 40px;">\n                    <div class="bar">\n                        <div class="progress"></div>\n                    </div>\n                </div>\n            </div>\n        </div>')),
    e.hide_bg && n.find(".locker-background").hide(), e.css_class.length > 0 && n.addClass(e.css_class);
    var a = generateUUID();
    if (n.attr("id", a), n.find(".locker-close-btn:first").bind("click", function() {
        unlockScreen(a)
    }), "undefined" != typeof t && t.length > 0 && (e.v2 ? n.find(".screen-lock__text").text(t) : (i["l-show-text"] = !0, n.find(".locker-content .locker-text:first").html(t))), e.show_animation === !0 && (i["l-show-animation"] = !0), e.show_timer === !0 && (i["l-show-timer"] = !0), e.show_btn_close === !0 && (i["l-show-btn-close"] = !0), Object.keys(i).length > 0 && (i["l-show-content"] = !0, n.addClass(Object.keys(i).join(" "))), $("body").append(n), e.delay_before > 0) {
        var o = setTimeout(function() {
            n.show()
        }, e.delay_before);
        n.attr("timeout_id", o)
    } else n.show();
    return n.attr("id")
}

function unlockScreen(t) {
    var e = $("");
    e = "undefined" != typeof t ? $("#" + t) : $("body").children(".locker:last"), "undefined" != typeof e.attr("timeout_id") && clearTimeout(e.attr("timeout_id")), e.remove()
}

function processingBlockInCells(t) {
    "undefined" != typeof adapterManager && adapterManager.updateCells(t.closest(".blk_container")), (!0 === window._isEditor || "undefined" != typeof adapterManager && adapterManager.isEditor()) && t.find(".blk_image_ext").each(function() {
        pages_editor.setZoomImgExt($(this).attr("id"), $(this).find("img:first"))
    }), t.find(".blk_image").each(function() {
        var t = $(this).find("img:first"),
            e = $(this).parent().width(),
            i = {
                w: t.width(),
                h: t.height()
            };
        e <= t.attr("prod_w") ? (e = e < 2 ? 2 : e, e = e > t.attr("real_w") ? t.attr("real_w") : e, t.css({
            width: e,
            height: "auto"
        }), t.height() < 2 && (e = Math.ceil(2 * i.w / i.h), t.css({
            width: e
        }))) : t.css({
            width: t.attr("prod_w"),
            height: "auto"
        }), t = null
    }), t.find(".blk_video").each(function() {
        var t = 20,
            e = $(this).find("iframe:first"),
            i = $(this).parent().width();
        i <= parseInt(e.css("width")) ? (i = i < t ? t : i, i = i > e.attr("data-width") ? e.attr("data-width") : i, e.css({
            width: i
        })) : e.css({
            width: e.attr("data-width")
        }), e = null
    })
}

function reInitVideoIFrame(t) {
    var e = t.hasClass("blk_video") ? t : t.find(".blk_video");
    e.each(function() {
        var t = $(this).find(".video iframe:first");
        t.attr("src", t.attr("src"))
    })
}

function toggleBtnLocker(t) {
    var e = t.find(".btn-locker"),
        i = t.attr("disabled");
    "undefined" != typeof i && !1 !== i ? (t.removeAttr("disabled"), e.hide()) : (t.attr("disabled", !0), e.show())
}

function initFileFields(t, e, i) {
    window.maxPostSize = i, window._isEditor ? $(document).on("click", ".user_form .userfiles_btn", function(t) {
        return t.preventDefault(), !1
    }) : ($(".user_form .userfiles_input").on("click", function() {
        $(this).closest(".field_wrap").find(".userfiles_btn input[type=file]").click()
    }), $(".user_form .userfiles_clear").on("click", function(t) {
        t.stopPropagation();
        var e = $(this).closest(".field_wrap").find(".userfiles_btn input[type=file]");
        confirm("Удалить загруженный вами файл?") && (e.val(null).trigger("change", t), e = null)
    }), $(".user_form .userfiles_btn input[type=file]").on("change", function(i) {
        var n, a = $(this),
            o = a.closest(".field_wrap"),
            r = o.find(".userfiles_selected_text"),
            s = o.find(".userfiles_btn");
        if (toggleBtnLocker(s), a.val()) {
            var l = "Файл выбран";
            if (this.files && this.files[0]) {
                if (e > 0 && this.files.length > e) return a.val(null), o = a = null, alert("Можно выбрать не более " + e + " файл" + plural(e, "а", "ов", "ов")), toggleBtnLocker(s), !1;
                for (l = [], n = 0; this.files.length > n; n++) {
                    if (t > 0 && this.files[n].size > t) return a.val(null), o = a = null, alert("Вы можете загрузить файл размером не более " + formatFileSize(t)), toggleBtnLocker(s), !1;
                    l.push(htmlspecialchars(this.files[n].name))
                }
                l = l.join(", ")
            }
            r.text(l).attr("title", l), o.addClass("userfiles_selected")
        } else r.text("").attr("title", ""), r.removeAttr("style"), o.removeClass("userfiles_selected");
        o.find(".ui_error").hide(), toggleBtnLocker(s), o = a = s = null
    }))
}

function includeFiles(t) {
    function e(t) {
        d.indexOf(t.href) == -1 && (d.push(t.href), d.length >= s.length && FE.runAndClr("css_dynamically_loaded"), p++, n())
    }

    function i(t) {
        t.forEach(function(t) {
            var i = document.createElement("link");
            i.setAttribute("rel", "stylesheet"), i.setAttribute("type", "text/css"), i.setAttribute("href", t), i.onload = function() {
                e(i)
            }, i.addEventListener && i.addEventListener("load", function() {
                e(i)
            }, !1), i.onreadystatechange = function() {
                var t = i.readyState;
                "loaded" !== t && "complete" !== t || (i.onreadystatechange = null, e(i))
            }, document.getElementsByTagName("head")[0].appendChild(i)
        })
    }

    function n() {
        if (p == u) return FE.run("all_files_dynamically_loaded"), !0
    }

    function a() {
        n() || r(l[c])
    }

    function o(t) {
        for (var e in t) "css" == e ? isArray(t[e]) ? (u += t[e].length, t[e].forEach(function(i) {
            s.push(t[e])
        })) : (u++, s.push(t[e])) : "js" == e ? isArray(t[e]) ? (u += t[e].length, t[e].forEach(function(t) {
            l.push(t)
        })) : (u++, l.push(t[e])) : "object" == typeof t[e] && o(t[e])
    }

    function r(t) {
        var e = document.createElement("script");
        document.head.appendChild(e), e.onload = function() {
            c++, p++, c == l.length ? n() : a(t)
        }, e.src = t
    }
    var s = [],
        l = [],
        d = [],
        c = 0,
        u = 0,
        p = 0;
    o(t), s.length && i(s), l.length && r(l[c]), n()
}

function initAnchors() {
    $(document).on("click", "a[href*=#]", function(t) {
        var e = $(this).attr("href"),
            i = e.match(/#(.*)$/i),
            n = !1,
            a = $(),
            o = 0;
        if (a = $("body").hasClass("non-pc") ? $("#sections_list .blk_section.is_fixed:not(.section_menu):visible:first") : $("#sections_list .blk_section.is_fixed:visible:first"), a.length && (o = a.outerHeight() - 1), null !== i && i[1]) {
            var r = $("#" + i[1]);
            if (r.length) $("html,body").stop().animate({
                scrollTop: r.offset().top - o
            }, 600), n = !0;
            else {
                var s = e.replace(new RegExp("^#", "gi"), ""),
                    l = $("a[name=" + s + "]");
                l.length && ($("html,body").stop().animate({
                    scrollTop: l.offset().top - o
                }, 600), n = !0)
            }
            if (n) return t.preventDefault(), !1
        }
    })
}

function sendSlackMessage(t, e, i) {
    if (window.$) {
        "undefined" == typeof i && (i = "Browser Debug");
        var n = {
                text: e,
                username: i
            },
            a = new XMLHttpRequest;
        a.open("POST", t, !0), a.send(JSON.stringify(n))
    }
}

function slackDebug(t) {
    sendSlackMessage("https://hooks.slack.com/services/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", t)
}

function slackErrorDump(t, e) {
    var i = "https://hooks.slack.com/services/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",
        n = "[JS] " + t.toString();
    sendSlackMessage(i, n, e), window.Sentry && Sentry.captureException(t)
}

function mottorLogError(t, e) {
    if (("string" == typeof t || t instanceof String) && (e && e.url && (t += " URL: `" + e.url + "`"), e && e.dataSerialized && (t += " DATA: `" + e.dataSerialized + "`"), e && "undefined" != typeof e.response && (t += " RESPONSE: `" + e.response + "`"), t = new Error(t)), window.Sentry) return void Sentry.captureException(t);
    var i, n = "https://hooks.slack.com/services/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",
        a = "[JS] " + t.toString();
    e && e.username && (i = e.username), sendSlackMessage(n, a, i)
}

function checkProtocolInUrl(t) {
    var e = new RegExp("^http(s*)://");
    return !!e.test(t) && 2 === t.split("://").length
}

function inputUrlProcessing(t) {
    var e = "https";
    return t = t.trim(), t.length > 6 && checkProtocolInUrl(t) ? t : t.length > 3 && 0 == /^http/.test(t) ? e + "://" + t : t
}

function formatMoney(t) {
    "number" != typeof t && (t = parseFloat(t));
    var e = Math.round(t),
        i = t.toFixed(1),
        n = t.toFixed(2),
        a = parseFloat(i),
        o = parseFloat(n);
    return a !== o ? n : e !== a ? i : e.toFixed(0)
}

function ucfirst(t) {
    var e = t.charAt(0).toUpperCase();
    return e + t.substr(1, t.length - 1)
}

function lcfirst(t) {
    var e = t.charAt(0).toLowerCase();
    return e + t.substr(1, t.length - 1)
}

function convertUnderScoreToStudlyCaps(t) {
    t = t.toLowerCase();
    for (var e = t.split("_"), i = "", n = 0; e.length > n; n++) {
        var a = e[n];
        "" !== a && (i += ucfirst(a))
    }
    return i
}

function convertUnderScoreToCamelCase(t) {
    return t = convertUnderScoreToStudlyCaps(t), lcfirst(t)
}

function convertDateFromDbToIsoFormat(t) {
    return t.replace(" ", "T") + ".000Z"
}

function getSvgIconPath(t) {
    return null == t ? "" : window.mottorUiSvgSpritePath + "#" + t
}

function getUserIdFromUrl() {
    var t = window.location.href.match(/user:(\d+)/);
    return null !== t ? t[1] : 0
}

function F_wind(t, e) {
    this.ops = e, this.$el = $(t), this.params = {}, this.hidePrevWnd = !0, this.whiteBg = !1, this.closeOutside = !1, this.isShown = !1, this.$btnClose = this.$el.find("a.wind-close"), this.$btnApply = this.$el.find(".wind-btn-apply:first"), this.$btnCancel = this.$el.find(".wind-btn-cancel:first"), this.$el.on("click", "a.wind-close, .wnd-hide", this, function(t) {
        t.preventDefault(), t.data.clickBtnClose()
    }), this.$btnApply.click(this, function(t) {
        t.preventDefault(), t.data.clickBtnApply()
    }), this.$btnCancel.click(this, function(t) {
        t.preventDefault(), t.data.clickBtnCancel()
    }), this.applyFunc = function() {
        return !0
    }
}

function showWind(t, e) {
    var i = $.extend({}, {
        width: 500,
        title: "Заголовок",
        cont: ""
    }, "object" == typeof e && e);
    '<div class="wind hidden bp0" id="' + t + '" tabindex="-1" style="width:' + i.w + 'px;"><div class="wind-header"><a class="wind-close"><i class="icon-remove"></i></a><h3 class="fnt">' + i.title + '</h3></div><div class="wind-body">' + i.cont + '</div><div class="wind-footer"><button class="btn wind-btn-apply btn-primary">OK</button><button class="btn wind-btn-cancel btn-link">Отмена</button></div>'
}

function shakeWnd(t) {
    t = $(t);
    var e = t.css("position");
    t.css("position", "relative"), t.animate({
        left: -10
    }, 50, function() {
        $(this).animate({
            left: 10
        }, 100, function() {
            $(this).animate({
                left: 0
            }, 50, function() {
                $(this).css("position", e), e = null
            })
        })
    })
}

function FanimManager() {
    this.is_ready = !1, this.data = {}, this.visible_elements = {}, this.animated_blocks = {}, this.height_window = 0, this.ready = function() {
        this.is_ready = !0, FE.runAndClr("animManager/ready")
    }, this.init = function(t) {
        var e = !1;
        if (window.animManager.data = t, window.animManager.height_window = window.innerHeight, !$.isEmptyObject(window.animManager.data))
            for (var i in window.animManager.data) e = $("#" + window.animManager.data[i].block_id), e.length > 0 && (window.animManager.animated_blocks[i] = e);
        var n = !1;
        $(window).on("resize", function(t) {
            n === !1 && (n = setTimeout(function() {
                n = !1, window.animManager.h = window.innerHeight, window.animManager.onScroll(t)
            }, 500))
        }), $(document).on("scroll", function(t) {
            window.animManager.onScroll(t)
        }), $("#popup_list .section_popup").on("scroll", function(t) {
            window.animManager.onScroll(t)
        }), FE.add("show_section_popup", function() {
            window.animManager.onScroll()
        }), window.animManager.onScroll()
    }, this.getAnimatedObject = function(t) {
        var e = $("#" + t);
        if (0 == e.length) return !1;
        switch (e.attr("blk_class")) {
            case "blk_image":
                e = e.find("img:first");
                break;
            case "blk_form":
                e = e.find(".blk_form_wrap:first");
                break;
            case "blk_text":
                e = e.find(".blk-data:first");
                break;
            case "blk_video":
                e = e.find(".video_container:first");
                break;
            case "blk_slider":
                e = e.find(".fotorama:first");
                break;
            case "blk_button":
                e = e.find("a:first")
        }
        return e
    }, this.setStyle = function(t, e, i) {
        var n = t[0],
            a = window.getComputedStyle(n),
            o = "";
        o = a.getPropertyValue("-webkit-animation-delay") ? "-webkit-animation-delay" : a.getPropertyValue("-moz-animation-delay") ? "-moz-animation-delay" : a.getPropertyValue("-o-animation-delay") ? "-o-animation-delay" : "animation-delay", n.style.setProperty(o, "0s"), o = a.getPropertyValue("-webkit-animation-duration") ? "-webkit-animation-duration" : a.getPropertyValue("-moz-animation-duration") ? "-moz-animation-duration" : a.getPropertyValue("-o-animation-duration") ? "-o-animation-duration" : "animation-duration", n.style.setProperty(o, i + "s")
    }, this.setClass = function(t, e) {
        t.hasClass(e) || t.addClass(e)
    }, this.onScroll = function(t) {
        var e = self.pageYOffset || document.documentElement && document.documentElement.scrollTop || document.body && document.body.scrollTop,
            i = window.animManager.height_window / 100 * 5;
        window.animManager.visible_elements = {};
        for (var n in window.animManager.animated_blocks) {
            var a = window.animManager.animated_blocks[n],
                o = window.animManager.getAnimatedObject(window.animManager.data[n].block_id);
            a !== !1 && o !== !1 && (o.closest(".blk_box_slider_self").length > 0 ? (window.animManager.setClass(o, window.animManager.data[n].animation_type), a.removeClass("is_animated_block")) : o.offset().top <= e + window.animManager.height_window - i && o.offset().top + o.outerHeight() >= e + i && (window.animManager.visible_elements[n] = a, window.animManager.startAnimation(a, o, window.animManager.data[n]), window.animManager.animated_blocks[n] = !1))
        }
    }, this.startAnimation = function(t, e, i) {
        window.animManager.setStyle(e, i.delay, i.duration);
        var n = function() {
            window.animManager.setClass(e, i.animation_type), t.removeClass("is_animated_block")
        };
        parseFloat(i.delay) > 0 ? setTimeout(n, 1e3 * parseFloat(i.delay)) : n()
    }
}

function ModuleButtonUp(t) {
    this.settings_arr = [], this.$btn_wrap = $("#button_up_wrap"), this.settings_arr = $.map(t, function(t, e) {
        return [t]
    }), this.drawButton(), this.bindEvent()
}
if (window.rnd_seed = (new Date).getTime(), !window._ua) var _ua = navigator.userAgent.toLowerCase();
var browser = {
    version: (_ua.match(/.+(?:me|ox|on|rv|it|era|ie)[\/: ]([\d.]+)/) || [0, "0"])[1],
    opera: /opera/i.test(_ua),
    msie: /msie/i.test(_ua) && !/opera/i.test(_ua),
    msie6: /msie 6/i.test(_ua) && !/opera/i.test(_ua),
    msie7: /msie 7/i.test(_ua) && !/opera/i.test(_ua),
    msie8: /msie 8/i.test(_ua) && !/opera/i.test(_ua),
    msie9: /msie 9/i.test(_ua) && !/opera/i.test(_ua),
    mozilla: /firefox/i.test(_ua),
    chrome: /chrome/i.test(_ua),
    safari: !/chrome/i.test(_ua) && /webkit|safari|khtml/i.test(_ua),
    iphone: /iphone/i.test(_ua),
    ipod: /ipod/i.test(_ua),
    iphone4: /iphone.*OS 4/i.test(_ua),
    ipod4: /ipod.*OS 4/i.test(_ua),
    ipad: /ipad/i.test(_ua),
    android: /android/i.test(_ua),
    bada: /bada/i.test(_ua),
    mobile: /iphone|ipod|ipad|opera mini|opera mobi|iemobile|android/i.test(_ua),
    msie_mobile: /iemobile/i.test(_ua),
    safari_mobile: /iphone|ipod|ipad/i.test(_ua),
    opera_mobile: /opera mini|opera mobi/i.test(_ua),
    opera_mini: /opera mini/i.test(_ua),
    mac: /mac/i.test(_ua)
};
Array.prototype.forEach || (Array.prototype.forEach = function(t, e) {
    for (var i = 0, n = this.length; i < n; ++i) t.call(e, this[i], i, this)
}), Date.prototype.toISOString || (Date.prototype.toISOString = function() {
    function t(t) {
        return t < 10 ? "0" + t : t
    }
    return this.getUTCFullYear() + "-" + t(this.getUTCMonth() + 1) + "-" + t(this.getUTCDate()) + "T" + t(this.getUTCHours()) + ":" + t(this.getUTCMinutes()) + ":" + t(this.getUTCSeconds()) + "." + t(this.getUTCMilliseconds()) + "Z"
}), window.trim = function(t) {
    return t.replace(/^\s+/, "").replace(/\s+$/, "")
}, window.ge = function(t) {
    return "string" == typeof t || "number" == typeof t ? document.getElementById(t) : t
}, window.geByTag = function(t, e) {
    return (e || document).getElementsByTagName(t)
}, window.geByTag1 = function(t, e) {
    return e = e || document, e.querySelector && e.querySelector(t) || geByTag(t, e)[0]
}, window.geByClass = function(t, e, i) {
    if (e = e || document, i = i || "*", !browser.msie8 && e.querySelectorAll && "*" != i) return e.querySelectorAll(i + "." + t);
    var n = [];
    if (e.getElementsByClassName) {
        var a = e.getElementsByClassName(t);
        if ("*" != i) {
            i = i.toUpperCase();
            for (var o = 0, r = a.length; o < r; ++o) a[o].tagName.toUpperCase() == i && n.push(a[o]);
            o = r = null
        } else n = Array.prototype.slice.call(a);
        a = null
    } else {
        for (var s = geByTag(i, e), l = new RegExp("(^|\\s)" + t + "(\\s|$)"), o = 0, r = s.length; o < r; ++o) l.test(s[o].className) && n.push(s[o]);
        s = l = o = r = 0
    }
    return n
}, window.geByClass1 = function(t, e, i) {
    return e = e || document, i = i || "*", !browser.msie8 && e.querySelector && e.querySelector(i + "." + t) || geByClass(t, e, i)[0]
}, window.ce = function(t, e, i) {
    var n = document.createElement(t);
    return e && extend(n, e), i && setStyle(n, i), n
}, window.re = function(t) {
    return t = ge(t), t && t.parentNode && t.parentNode.removeChild(t), t
}, window.se = function(t) {
    var e = document.createElement("div");
    return e.innerHTML = t, e.firstChild
}, window.rs = function(t, e) {
    return each(e, function(e, i) {
        t = t.replace(new RegExp("%" + e + "%", "g"), i)
    }), t
}, window.insertBefore = function(t, e) {
    t.parentNode.insertBefore(e, t)
}, window.insertAfter = function(t, e) {
    t.nextSibling ? t.parentNode.insertBefore(e, t.nextSibling) : t.parentNode.appendChild(e)
}, window.domEL = function(t, e) {
    for (e = e ? "previousSibling" : "nextSibling"; t && !t.tagName;) t = t[e];
    return t
}, window.domNS = function(t) {
    return domEL((t || {}).nextSibling)
}, window.domPS = function(t) {
    return domEL((t || {}).previousSibling, 1)
}, window.domFC = function(t) {
    return domEL((t || {}).firstChild)
}, window.domLC = function(t) {
    return domEL((t || {}).lastChild, 1)
}, window.domPN = function(t) {
    return (t || {}).parentNode
}, window.show = function(t) {
    if (arguments.length > 1) {
        for (var e = 0; e < arguments.length; ++e) show(arguments[e]);
        e = null
    } else {
        if ("string" == typeof t && (t = ge(t)), !t || !t.style) return;
        if ("none" == getStyle(t, "display")) {
            var i = t.olddisplay,
                n = "block",
                a = t.tagName.toLowerCase();
            t.style.display = i || "", n = hasClass(t, "inline") ? "inline" : "tr" != a || browser.msie() ? "table" != a || browser.msie() ? "block" : "table" : "table-row", t.style.display = t.olddisplay = n, i = n = a = null
        }
    }
}, window.hide = function(t) {
    if (arguments.length > 1) {
        for (var e = 0; e < arguments.length; ++e) hide(arguments[e]);
        e = null
    } else {
        if ("string" == typeof t && (t = ge(t)), !t || !t.style) return;
        var i = getStyle(t, "display");
        "none" != i && (t.olddisplay = i, t.style.display = "none"), i = null
    }
}, window.convertKebabCaseToCamelCase = function(t) {
    return t.replace(/-(\w)/g, function(t, e) {
        return e.toUpperCase()
    })
}, window.isVisible = function(t) {
    return t = ge(t), !(!t || !t.style) && "none" != getStyle(t, "display")
}, window.toggle = function(t, e) {
    null == e && (e = !isVisible(t)), e ? show(t) : hide(t)
}, window.isFunction = function(t) {
    return "[object Function]" === Object.prototype.toString.call(t)
}, window.isArray = function(t) {
    return "[object Array]" === Object.prototype.toString.call(t)
}, window.intval = function(t) {
    return t === !0 ? 1 : parseInt(t) || 0
}, window.floatval = function(t) {
    return t === !0 ? 1 : parseFloat(t) || 0
}, window.extend = function() {
    var t, e = arguments,
        i = e[0] || {},
        n = 1,
        a = e.length,
        o = !1;
    for ("boolean" == typeof i && (o = i, i = e[1] || {}, n = 2), "object" == typeof i || isFunction(i) || (i = {}); n < a; ++n)
        if (null != (t = e[n]))
            for (var r in t) {
                var s = i[r],
                    l = t[r];
                i !== l && (o && l && "object" == typeof l && !l.nodeType ? i[r] = extend(o, s || (null != l.length ? [] : {}), l) : void 0 !== l && (i[r] = l))
            }
    return i
}, window.hasClass = function(t, e) {
    return t = ge(t), t && new RegExp("(\\s|^)" + e + "(\\s|$)").test(t.className)
}, window.addClass = function(t, e) {
    if (isArray(t)) {
        for (var i in t) addClass(t[i], e);
        return void(i = null)
    }
    "string" == typeof t && (t = ge(t)), t.className || (t.className = ""), hasClass(t, e) || (t.className = (t.className ? t.className + " " : "") + e)
}, window.removeClass = function(t, e) {
    if (isArray(t)) {
        for (var i in t) removeClass(t[i], e);
        return void(i = null)
    }
    "string" == typeof t && (t = ge(t)), t && (t.className = trim((t.className || "").replace(new RegExp("(\\s|^)" + e + "(\\s|$)"), " ")))
}, window.toggleClass = function(t, e, i) {
    return "undefined" == typeof i && (i = !hasClass(t, e)), window[i ? "addClass" : "removeClass"](t, e)
}, window.getClassList = function(t) {
    return t.className.split(/\s+/)
}, window.getClosestOrSameElement = function(t, e) {
    return hasClass(t, e) ? t : closest(t, e)
}, window.closest = function(t, e) {
    if (!t) return null;
    for (var i = t, n = 0;;) {
        if (!i.parentNode) return null;
        if (i = i.parentNode, !i || "body" === i.nodeName.toLowerCase() || ++n > 100) {
            i = null;
            break
        }
        if (hasClass(i, e)) break
    }
    return n = null, i
}, window.getStyle = function(t, e, i) {
    if (t = ge(t), isArray(e)) {
        var n = {};
        return each(e, function(e, i) {
            n[i] = getStyle(t, i)
        }), n
    }
    if (void 0 === i && (i = !0), !i && "opacity" == e && browser.msie) {
        var a = t.style.filter;
        return a ? a.indexOf("opacity=") >= 0 ? parseFloat(a.match(/opacity=([^)]*)/)[1]) / 100 + "" : "1" : ""
    }
    if (!i && t.style && (t.style[e] || "height" == e)) return t.style[e];
    var o, r = document.defaultView || window;
    if (r.getComputedStyle) {
        e = e.replace(/([A-Z])/g, "-$1").toLowerCase();
        var s = r.getComputedStyle(t, null);
        s && (o = s.getPropertyValue(e))
    } else if (t.currentStyle) {
        if ("opacity" == e && browser.msie) {
            var a = t.currentStyle.filter;
            return a && a.indexOf("opacity=") >= 0 ? parseFloat(a.match(/opacity=([^)]*)/)[1]) / 100 + "" : "1"
        }
        var l = convertKebabCaseToCamelCase(e);
        if (o = t.currentStyle[e] || t.currentStyle[l], "auto" == o && (o = 0), !/^\d+(px)?$/i.test(o) && /^\d/.test(o)) {
            var d = t.style,
                c = d.left,
                u = t.runtimeStyle.left;
            t.runtimeStyle.left = t.currentStyle.left, d.left = o || 0, o = d.pixelLeft + "px", d.left = c, t.runtimeStyle.left = u
        }
    }
    if (i && ("width" == e || "height" == e)) {
        var p = getSize(t, !0)[{
            width: 0,
            height: 1
        } [e]];
        o = (intval(o) ? Math.max(floatval(o), p) : p) + "px"
    }
    return o
}, window.setStyle = function(t, e, i) {
    if (t = ge(t)) {
        if ("object" == typeof e) return each(e, function(e, i) {
            setStyle(t, e, i)
        });
        if ("opacity" == e) browser.msie && ((i + "").length ? 1 !== i ? t.style.filter = "alpha(opacity=" + 100 * i + ")" : t.style.filter = "" : t.style.cssText = t.style.cssText.replace(/filter\s*:[^;]*/gi, ""), t.style.zoom = 1), t.style.opacity = i;
        else {
            var n = "number" == typeof i;
            n && /height|width/i.test(e) && (i = Math.abs(i)), t.style[e] = n && !/z-?index|font-?weight|opacity|zoom|line-?height/i.test(e) ? i + "px" : i
        }
    }
}, window.getElementAttributes = function(t) {
    var e = {};
    if (null == t || null == t.attributes) return e;
    for (var i = t.attributes.length, n = 0; n < i; n++) {
        var a = t.attributes[n];
        e[a.nodeName] = a.nodeValue
    }
    return e
}, window.attr = function(t, e, i) {
    if (t && 3 !== t.nodeType && 8 !== t.nodeType && 2 !== t.nodeType) {
        if ("undefined" == typeof i) {
            if ("undefined" == typeof t.getAttribute) throw "elem has no getAttribute";
            return t.getAttribute(e)
        }
        if (null !== i) {
            try {
                t.setAttribute(e, i + "")
            } catch (e) {
                try {
                    t.name = i + ""
                } catch (t) {}
            }
            return i
        }
        t.removeAttribute(e)
    }
}, window.replaceAll = function(t, e, i) {
    return t.replace(new RegExp(escapeRegExp(e), "g"), i)
}, window.escapeRegExp = function(t) {
    return t.replace(/[.*+?^${}()|[\]\\]/g, "\\$&")
};
var escapeHtmlEntityMap = {
    "&": "&amp;",
    "<": "&lt;",
    ">": "&gt;",
    '"': "&quot;",
    "'": "&#039;"
};
window.escapeHtml = function(t) {
    var e = typeof t;
    return "number" == e ? t : ("string" != e && (t = null == t ? "" : t.toString()), t.replace(/[&<>"']/g, function(t) {
        return escapeHtmlEntityMap[t]
    }))
}, window.consoleDbg = function(t) {
    window.dbgMode && window.console && console.log(t)
}, window.getRandomInt = function(t, e) {
    return Math.floor(Math.random() * (e - t + 1)) + t
}, window.isset = function(t) {
    return "undefined" != typeof t
}, window.clone = function(t) {
    if (null == t || "object" != typeof t) return t;
    if (t instanceof Date) {
        var e = new Date;
        return e.setTime(t.getTime()), e
    }
    if (t instanceof Array) {
        for (var e = [], i = 0, n = t.length; i < n; i++) e[i] = clone(t[i]);
        return e
    }
    if (t instanceof Object) {
        var e = {};
        for (var a in t) t.hasOwnProperty(a) && t[a] !== document && (e[a] = clone(t[a]));
        return e
    }
    throw new Error("Unable to copy obj! Its type isn't supported.")
}, window.initDropdown = function() {
    window.curDropDown = null;
    var t = $("html");
    t.click(function() {
        $(".dropdown_part:visible").hide()
    }), t.find(".dropdown_part").click(function(t) {
        $(this).is(":visible") && t.stopPropagation()
    }), t.find(".joined").click(function(t) {
        $(this).closest(".sel_wrap").find(".dropdown_part").is(":visible") && t.stopPropagation()
    })
}, FE.add("onready", "initDropdown()"), window.jQuery && (jQuery.fn.outerHTML = function(t) {
    return t ? this.before(t).remove() : jQuery("<div></div>").append(this.eq(0).clone()).html()
}), $("body").popover({
    trigger: "hover",
    selector: ".has_popover",
    placement: "top",
    html: "true",
    delay: "100"
}), $(document).on("click", ".btn-smart", function() {
    if (!$(this).data("button")) {
        var t = $(this).attr("data-loading");
        $(this).button({
            loadingText: t ? t : "Загрузка..."
        })
    }
    $(this).button("loading")
}), window.getUrlVars = function() {
    var t = window.location.href.slice(window.location.href.indexOf("?") + 1);
    if ("" == t || window.baseUrl == t) return t = null, {};
    for (var e, i = {}, n = t.split("&"), a = 0; a < n.length; a++) e = n[a].split("="), i[e[0]] = e[1];
    return e = n = t = null, i
}, $(document).on("click", "form.frm_lead:not(.editor)", function(t) {
    t.stopPropagation()
}), $(document).on("click", ".wrap-for-formPopover", function(t) {
    $("#formPopover").wind("hide")
}), $(document).on("submit", "form.frm_lead", function(e) {
    var id = $(this).attr("id");
    id || (id = $(this).attr("frm-id"));
    var frm = $(this),
        $parent = $(frm).parent(),
        isQuiz = $parent.hasClass("quiz-form"),
        quizForm;
    isQuiz && (quizForm = sitesMan.quizForm(frm));
    var canSplitData = parseInt(frm.attr("can-split-data"));
    frm.find("input.is_split_form_with_files").length || $('<input type="hidden" class="is_split_form_with_files" name="is_split_form_with_files" value="' + canSplitData + '"/>').appendTo(frm);
    var inp_track = frm.find("input.inp_track");
    if (inp_track.length || (inp_track = $('<input type="hidden" class="inp_track" name="inp_track" value=""/>'), inp_track.appendTo(frm)), inp_track.val(escapeRus(getCookie("bm360track"))), !frm.find("input.inp_utm").length) {
        $('<input type="hidden" class="inp_utm" name="has_utm" value="1"/>').appendTo(frm);
        var params = getUrlVars();
        for (var k in params) $('<input type="hidden" class="inp_utm" name="' + k + '" value="' + params[k] + '"/>').appendTo(frm)
    }
    var data_mes_url = parseInt(frm.attr("data-mes-url")),
        $frm = $(frm),
        btnSubmit = $frm.find(".btn-submit"),
        btn = $frm.find("input.ui_btn, input.btn-submit");
    if (btn.css({
        width: btn.outerWidth()
    }), !btn.data("button")) {
        var lang = btn.attr("lang");
        btn.button({
            loadingText: lang && "en" == lang ? "Loading..." : "Загрузка...",
            defText: btn.val()
        }), lang = null
    }
    btn.button("loading"), toggleBtnLocker(btnSubmit);
    var fileList = [],
        ajax_cfg = {
            frm: $frm,
            type: "POST",
            cache: !1,
            timeout: 4e4,
            headers: {
                'X-CSRF-TOKEN': $('meta[name="csrf-token"]').attr('content')
            },
            url: $(this).attr("action"), // + "/frm:" + id,
            success: function(data) {
                var isQuiz = frm.parent().hasClass("quiz-form");
                if (frm.find(".ui_has_error").removeClass("ui_has_error"), frm.find(".ui_error").hide().html(""), frm.find("input.ui_btn, input.btn-submit").button("def"), toggleBtnLocker(btnSubmit), "function" == typeof data.split && (data = JSON.parse(data)), isset(data.error)) {
                    var firstErr = !1;
                    for (var attrId in data.error) {
                        var $attr = frm.find("#" + frm.attr("id") + "__" + attrId),
                            $attrErr = frm.find(".ui_error[for=" + frm.attr("id") + "__" + attrId + "]");
                        if ($attr.length && ($attr.addClass("ui_has_error"), !1 === firstErr && ($attr.focus(), firstErr = !0, isQuiz && quizForm))) {
                            var $steps = frm.find(".quiz"),
                                index = $steps.index($attr.closest(".quiz"));
                            sitesMan.toQuizStep(quizForm, index), FE.run("quiz-validate-error", {
                                step: $steps.eq(index)
                            })
                        }
                        data.error.hasOwnProperty(attrId) && $attrErr.length && ($attrErr.show(), $attrErr.html("<div>" + data.error[attrId].join("</div><div>") + "</div>"))
                    }
                }
                if (isset(data.exception) && window.dbgMode && alert(data.exception), isset(data.script)) try {
                    eval(data.script)
                } catch (t) {
                    window.console && window.dbgMode && (console.log(t), console.log("[_Ошибка JS_] " + t.stack))
                }
                if (isset(data.post_data)) try {
                    $.ajax({
                        url: data.post_data.url,
                        data: data.post_data.params,
                        method: "POST",
                        async: !0
                    })
                } catch (t) {
                    window.console && window.dbgMode && (console.log(t), console.log("[_POST_request_error_] " + t.stack))
                }
                if (isset(data.res))
                    if (1 == data.res) {
                        0 < fileList.length && !isset(data.lead_preview) && canSplitData && !data.osd && data.id_lead && ajaxForUploadFileToLead(fileList, data.id_lead, id), reachGoalByAttr(frm, "goal-submitted");
                        var mes = !1,
                            f_show_msg = function(t) {
                                if (mes = t.attr("success-message"), mes.length || (mes = "Спасибо!\\nВаша заявка принята.\\nВ ближайшее время мы с вами свяжемся!"), isset(data.lead_preview)) {
                                    mes += '<div class="lead_preview"><div class="c_text">--------[ ВНИМАНИЕ ]--------</div><div class="c_text">(В предпросмотре заявка не создается)</div><div class="l_text mt1">Данные, принятые с формы:</div><ul class="l_text mb0">';
                                    var e = null;
                                    for (var i in data.lead_preview) canSplitData && (e = data.lead_preview[i].id ? hasInFileList(fileList, data.lead_preview[i].id) : null), mes += e ? "<li><b>" + data.lead_preview[i].name + "</b>: " + e + "</li>" : "<li><b>" + data.lead_preview[i].name + "</b>: " + (null === data.lead_preview[i].val ? "" : data.lead_preview[i].val) + "</li>";
                                    mes += "</ul></div>"
                                }
                            };
                        if (1 === data_mes_url && f_show_msg(frm), !data.osd) switch (data_mes_url) {
                            case 2:
                                var loc = frm.attr("data-goto-url");
                                if (loc.length) {
                                    /^http(|s):\/\//.test(loc) !== !0 && (loc = "http://" + loc);
                                    var inp;
                                    return -1 !== loc.indexOf("{name}") && (inp = frm.find(".field.fname:first input.inp"), inp.length && (loc = loc.replace("{name}", encodeURIComponent(inp.val())))), -1 !== loc.indexOf("{email}") && (inp = frm.find(".field.femail:first input.inp"), inp.length && (loc = loc.replace("{email}", encodeURIComponent(inp.val())))), -1 !== loc.indexOf("{phone}") && (inp = frm.find(".field.fphone:first input.inp"), inp.length && (loc = loc.replace("{phone}", encodeURIComponent(inp.val())))), -1 !== loc.indexOf("{order_id}") && data.id_lead && (loc = loc.replace("{order_id}", data.id_lead)), window.location.href = loc, void $("#formPopover").wind("hide")
                                }
                                loc = null;
                                break;
                            case 3:
                                var frm_id = frm.attr("frm-id"),
                                    lead_id = data.id_lead,
                                    key = data.key;
                                if ($("#ymis_" + frm_id).length > 0) {
                                    var c_ops = {
                                        id: "j_lead_confirm",
                                        html: !0,
                                        width: null,
                                        okText: "Яндекс.Деньги",
                                        cancelText: "Банковская карта",
                                        btnWidth: 120,
                                        okClass: "n-btn n-btn-success btn-round",
                                        cancelClass: "n-btn n-btn-success btn-round",
                                        onOk: function() {
                                            ymis_manager.submitLeadForm(frm_id, lead_id, key, "PC")
                                        },
                                        onCancel: function() {
                                            ymis_manager.submitLeadForm(frm_id, lead_id, key, "AC")
                                        },
                                        headerText: !1,
                                        showClose: !0
                                    };
                                    jConfirm("Выберите способ оплаты", c_ops, !0), $("#j_lead_confirm").find("#jConfirmOk").removeClass("ibtn wind-btn-apply")
                                } else f_show_msg(frm);
                                break;
                            case 4:
                                var robokassaForm = $("#robokassa_" + frm.attr("frm-id"));
                                robokassaForm.length > 0 ? (robokassaForm.find("input[name=InvId]").val(data.id_lead), robokassaForm.find("input[name=SignatureValue]").val(data.signature), robokassaForm.submit()) : (consoleDbg(data), f_show_msg(frm));
                                break;
                            case 5:
                                data.ya_kassa_res && data.ya_kassa_res.confirmation_url ? window.location.href = data.ya_kassa_res.confirmation_url : (consoleDbg(data.ya_kassa_res), f_show_msg(frm));
                                break;
                            case 6:
                                data.pay_pal_res && data.pay_pal_res.approval_link ? window.location.href = data.pay_pal_res.approval_link : (consoleDbg(data.pay_pal_res), f_show_msg(frm));
                                break;
                            case 7:
                                data.cloud_payments_int && data.cloud_payments_int.widget_options_encoded ? showCloudPaymentsWidget(data.cloud_payments_int.widget_options_encoded) : (consoleDbg(data.cloud_payments_int), f_show_msg(frm));
                                break;
                            case 8:
                                data.tinkoff_int && data.tinkoff_int.pay_link ? window.location.href = data.tinkoff_int.pay_link : (consoleDbg(data.tinkoff_int), f_show_msg(frm));
                                break;
                            case 9:
                                data.sberbank_int && data.sberbank_int.pay_link ? window.location.href = data.sberbank_int.pay_link : (consoleDbg(data.sberbank_int), f_show_msg(frm));
                                break;
                            default:
                                console.log("FORM has action type = " + data_mes_url + " (it is not defined)")
                        }
                        isQuiz && quizForm && sitesMan.toQuizStep(quizForm, 0), frm.find("input.inp,textarea.inp").val(""), frm.find("input[type=checkbox]").prop("checked", !1), frm.find(".fradio input:first").prop("checked", !0), frm.find(".fselect option:first").prop("selected", "selected"), frm.find("input[type=file]").val(null).trigger("change", e);
                        var w = frm.closest(".wind");
                        if (w.length && w.wind("hide"), w = null, !1 !== mes) {
                            if (window.jAlert) {
                                var wnd_width = "undefined" == typeof adapterManager || adapterManager.isPC() ? 400 : 340;
                                $("#wind_container").addClass("j_alert"), jAlert(mes.replace(/\\n/g, "<br/>"), {
                                    id: "j_lead_alert",
                                    showCloseBtn: !0,
                                    btnCls: "btn",
                                    width: wnd_width,
                                    btnWidth: "auto",
                                    hideOnBlackoutClick: !0,
                                    html: !0,
                                    mobileAdapt: isQuiz && !quizMobileView.isMobileInPreview(),
                                    onOk: function() {
                                        $("#wind_container").removeClass("j_alert")
                                    }
                                })
                            } else alert(mes.replace(/\\n/g, "\n"));
                            mes = null
                        }
                    } else if (data.show_alert) switch (data.show_alert) {
                        case "empty_data":
                            alert("Нужно заполнить хотя бы одно поле");
                            break;
                        default:
                            alert("Error: " + data.show_alert)
                    } else 1 == data.is_site_demo && showSiteDemoWarning();
                window.dbgMode && console.log(data)
            },
            error: function(t, e, i) {
                switch (toggleBtnLocker(btnSubmit), console.log(e), e) {
                    case "timeout":
                        alert("Ошибка! Нет связи с сервером. Проверьте подключение к интернету и попробуйте снова.");
                        break;
                    case "error":
                    case "parsererror":
                        alert("Извините, на сервере возникла ошибка!\n\nПожалуйста, напишите нам в тех-поддержку support@transfer-engineering.com.ua"), window.dbgMode && (console.log(t), console.log(i))
                }
                frm.find("input.ui_btn, input.btn-submit").button("def")
            }
        },
        files = frm.find("input[type=file]"),
        canSendRequest = !0;

    if (files.length > 0) {
        if (!window.FormData) return alert("Ошибка № 2876 Ваш браузер не поддерживает объект FormData, попробуйте воспользоваться современной версией браузера"), !1;
        canSendRequest = checkRequiredFieldsContainFiles(frm, files);
        var frmData = new FormData(this);
        files.length > 1 && canSplitData && canSendRequest && splitRequestByFile(frm, files, frmData, fileList), ajax_cfg.data = frmData, ajax_cfg.processData = !1, ajax_cfg.contentType = !1
    } else {
        ajax_cfg.dataType = "json", ajax_cfg.data = $(this).serialize();
    }
    return 6 == data_mes_url && lockScreen("Сейчас произойдет переход к оплате", {
        show_animation: !0
    }), canSendRequest ? $.ajax(ajax_cfg).then(function() {
        id = null
    }) : toggleBtnLocker(btnSubmit), !1
}), window.showSiteDemoWarning = function() {
    var t = '<h2 class="fs22">Отправить заявку в режиме демонстрации невозможно</h2>';
    t += '<div class="mt2 fs16">Прием заявок и оплат доступен только на опубликованном сайте.</div>', jAlert(t, {
        id: "j_lead_alert",
        showCloseBtn: !0,
        btnCls: "btn",
        okText: "Понятно",
        width: 470,
        btnWidth: "auto",
        hideOnBlackoutClick: !0,
        html: !0,
        alertClass: "site-demo-alert",
        mobileAdapt: !adapterManager.isPC(),
        onOk: function() {
            $("#wind_container").removeClass("j_alert")
        }
    })
}, window.guid = function() {
    return uuid.v4().replace(/-/g, "")
}, window._lpcid_hosts = ["http://transfer-engineering.com.ua", "https://admin.transfer-engineering.com.ua"], window.userHasTag = function(t) {
    return "undefined" != typeof window.__user_tags && "undefined" != typeof window.__user_tags[t]
}, window.userAddTag = function(t, e) {
    "undefined" != typeof window.__user_tags && "undefined" == typeof window.__user_tags[t] && window.$ && $.ajax({
        url: baseUrl + "tests/ajax/do:add_tag",
        data: {
            tag: t
        },
        dataType: "json",
        method: "post",
        _funcParams: {
            callback: e || !1
        },
        success: function(e) {
            var i = !1;
            e.res && 1 == e.res && e.cnt && e.cnt > 0 && (window.__user_tags[t] = 1, i = !0), "function" == typeof this._funcParams.callback && this._funcParams.callback.apply(this, [i, e])
        }
    })
},
    function(t) {
        function e(e) {
            return p = lockScreen("Секундочку...", {
                show_animation: !0
            }), $.get("http://" + t.baseDomain + "/" + window.siteId + "/api/popup", {
                popup_id: e
            }, "JSON")
        }

        function i(t, e) {
            var i = $(t);
            return c.append(i), u[e] = i, i
        }

        function n(t) {
            console.error("Error num: [#4481]. Не удалось получить всплывающую секцию. Сервер вернул: ", t)
        }

        function a(t) {
            var e = u[t],
                i = e.hasClass("blk-section--ms-popup"),
                n = $("#sections_list").find(" .blk_section.is_fixed"),
                a = $("body"),
                o = a.width();
            a.addClass("open_popup"), i && a.addClass("open-popup-ms");
            var r = a.width() - o;
            a.css("margin-right", r), $("body>.navbar>.navbar-inner").css("padding-right", r), "undefined" != typeof window.module_geotarget && window.module_geotarget.city.length && e.find(".geotarget_module").text(window.module_geotarget.city).removeClass("hidden"), n.length && (window.active_fixed_sections = n, $.each(n, function() {
                $(this).css({
                    "z-index": 5
                })
            })), e.addClass("open"), e.hasClass("initSlick") || (e.find(".blk_box_slider_self").each(function() {
                initSlick($(this))
            }), e.addClass("initSlick")), e.hasClass("blk-section--ms-popup") && e.find(".ms-popup-section__close").off("click").one("click", function() {
                hideSectionPopup(t)
            }), FE.run("show_section_popup", {
                section_id: t
            })
        }

        function o(t) {
            try {
                var e = JSON.parse(t)
            } catch (t) {
                return (new $.Deferred).reject(t)
            }
            return e.data ? e.data : (new $.Deferred).reject(t)
        }

        function r(t) {
            t.find(".blk_yandex_map").each(function() {
                var t = $(this).attr("id"),
                    e = "init_ymap_" + t;
                return window[e] ? void window[e]() : void console.error("Функция " + e + " не была найдена в window. [#4502]")
            })
        }

        function s(t) {
            t.find(".is_animated_block").each(function() {
                window.animManager.animated_blocks[$(this).attr("id")] = $(this)
            })
        }

        function l(l) {
            var d = function() {
                t._isEditor || $("#" + l).find(".blk.blk_video .video.autoplay iframe:first").each(function() {
                    t.playVideo($(this))
                })
            };
            isset(u[l]) ? (a(l), d()) : e(l).then(o).then(function(t) {
                var e = i(t, l);
                return r(e), s(e), window.adapterManager.initFotorama(), unlockScreen(p), p = null, sitesMan.initQuiz(e, !0), loadAsyncImages(), l
            }, n).then(a).then(d), FE.run("sectionPopupOpen")
        }

        function d(t) {
            var e = $("#" + t);
            e.length || console.error("Не найдена секция #" + t + ". Ошибка [#4482]"), u[t] = e
        }
        var c = $("#popup_list"),
            u = {},
            p = null;
        t.stopAutoPlayVideo = function(t) {
            t.attr("src", ""), window.speedUpVideoLoadIsEnabled && t.closest(".blk").removeClass("video--play")
        }, t.playVideo = function(e) {
            e.attr("src", e.attr("src-temp")), t.speedUpVideoLoadIsEnabled && e.closest(".blk").addClass("video--play")
        }, c.find(".blk_section").each(function() {
            u[$(this).attr("id")] = $(this)
        }), t.showSectionPopup = l, t.registerPopup = d
    }(window),
    function(t) {
        FE.add("onready", function() {
            t.speedUpVideoLoadIsEnabled && ($(document).on("click", ".video__overlay", function() {
                t._isEditor || t.playVideo($(this).closest(".blk").find("iframe:first"))
            }), $("#sections_list .blk.blk_video:visible .video.autoplay iframe:first").each(function() {
                t._isEditor || t.playVideo($(this))
            }))
        })
    }(window),
    function(t) {
        "use strict";

        function e(e) {
            t(n).each(function() {
                FE.run("hide_custom_dropdown", e, {
                    $btn: t(this),
                    $wrap: i(t(this)).removeClass("open")
                })
            })
        }

        function i(t) {
            return t.parent()
        }
        var n = ".custom-dropdown-btn",
            a = "click.custom-dropdown.data-api",
            o = "keydown.custom-dropdown.data-api",
            r = function(e) {
                var i = t(e).on(a, this.toggle);
                t("html").on(a, function(t) {
                    FE.run("hide_custom_dropdown", t, {
                        $btn: i,
                        $wrap: i.parent().removeClass("open")
                    })
                })
            };
        r.prototype = {
            constructor: r,
            toggle: function(n) {
                var a, o, r = t(this);
                if (!r.is(".disabled, :disabled")) return a = i(r), o = a.hasClass("open"), e(n), o || ("ontouchstart" in document.documentElement, FE.run("show_custom_dropdown", n, {
                    $btn: r,
                    $wrap: a.toggleClass("open")
                })), r.focus(), !1
            },
            keydown: function(e) {
                var a, o, r;
                if (/(38|40|27)/.test(e.keyCode) && (a = t(this), e.preventDefault(), e.stopPropagation(), !a.is(".disabled, :disabled"))) return o = i(a), r = o.hasClass("open"), !r || r && 27 == e.keyCode ? (27 == e.which && o.find(n).focus(), a.click()) : void 0
            }
        };
        var s = t.fn.customDropdown;
        t.fn.customDropdown = function(e) {
            return this.each(function() {
                var i = t(this),
                    n = i.data("customDropdown");
                n || i.data("customDropdown", n = new r(this)), "string" == typeof e && n[e].call(i)
            })
        }, t.fn.customDropdown.Constructor = r, t.fn.customDropdown.noConflict = function() {
            return t.fn.customDropdown = s, this
        }, t(document).on(a, e).on(a, ".custom-dropdown-menu", function(t) {
            t.stopPropagation()
        }).on(a, n, r.prototype.toggle).on(o, n, r.prototype.keydown)
    }(window.jQuery), $("#popup_list").on("click", function(t) {
    var e = $("body"),
        i = $(t.target);
    if (e.hasClass("popup_choose")) return !0;
    if (e.hasClass("open-popup-ms")) {
        var n = i.closest(".blk-section--ms-popup"),
            a = 0 !== n.length;
        if (!a) {
            var o = $(".blk-section--ms-popup.open");
            if (o.length) return hideSectionPopup(o.attr("id")), !1
        }
    }
    return i.hasClass("section_popup") ? (hideSectionPopup(i.attr("id")), !1) : void 0
}),
    function() {
        var t = function() {
            var t = $("#gift-for-user img");
            if (t.length > 0) {
                var e = t.attr("classes-animate");
                t.addClass(e);
                var i = function() {
                    t.removeClass(e)
                };
                setTimeout(i, 1e3)
            }
        };
        $("#gift-for-user").length > 0 && setInterval(t, 3e3)
    }(), window.sliderEditorExtend = function(t) {
    t.prototype.reinitFotorama = function(t) {
        var e = t.closest(".blk_section").hasClass("is_absolute"),
            i = {};
        return e && (i.height = t.closest(".blk.blk_slider").height()), setTimeout(function() {
            var e = t.data("fotorama");
            null != e && null != e.activeIndex && e.resize(i).show(e.activeIndex)
        }), t
    }
}, Math.radians = function(t) {
    return t * Math.PI / 180
}, Math.degrees = function(t) {
    return 180 * t / Math.PI
},
    function() {
        var t = $(".widgets__all-sites");
        t.length && t.on("click", function() {
            window.sessionStorage.clear("widgets/siteId")
        })
    }(),
    function(t) {
        function e(e, i, n) {
            var a = new $.Deferred;
            return FE.add("__lpmExtensions/" + i + "/included", function() {
                consoleDbg("Step:4 scripts is included, include html"), t.__lpmExtensions.appendHtml(e.res.html), consoleDbg("Step:5 __lpmExtensions.run by " + i + " for " + n), $.when(t.__lpmExtensions.run(i, n)).then(function(t) {
                    consoleDbg("Step:15 extension is ready"), consoleDbg(t), a.resolve(t)
                })
            }), consoleDbg("Step:3 include scripts"), includeFiles(e.res), a
        }
        t.__lpmExtensions = {
            isInited: !1,
            get: function(i, n) {
                consoleDbg("Step:1 load scripts & html for extension modal by " + i);
                var a = 1,
                    o = n ? n : t.siteId;
                t.dbgMode && (a = (new Date).getTime());
                var r = lockScreen("Секундочку...", {
                    show_animation: !0
                });
                return $.get(window.baseUrl + o + "/settings/ajax/frm:get_extension", {
                    v: a,
                    exName: i,
                    includeMain: intval(0 == intval(isset(t.__lpmExtensions) && t.__lpmExtensions.isInited))
                }).then(function(t) {
                    return unlockScreen(r), consoleDbg("Step:2 scripts for extension modal is loaded"), e(JSON.parse(t), i, o)
                })
            }
        }
    }(window), window.preloadSvgIconPack = function() {
    if (userHasTag("toolbar")) {
        var t = new Image;
        t.src = window.mottorUiSvgSpritePath
    }
}, window.isVueDataObject = function(t) {
    return null != t && t.hasOwnProperty("__ob__") && "Observer" === t.__ob__.constructor.name
}, window.getEnvironment = function() {
    return window.process && process.env && process.env.NODE_ENV ? process.env.NODE_ENV : ""
}, window.hideServiceNotification = function(t, e) {
    userAddTag(t), $(e).closest(".service-notification").remove()
},
    function() {
        "use strict";

        function t(t) {
            var e = $('<div class="svg_wrap"><div class="svg_container"></div></div>');
            return e.find(".svg_container").append(t), e
        }

        function e(e) {
            if (c = {
                w: $(this).get(0).naturalWidth,
                h: $(this).get(0).naturalHeight
            }, l = f ? t(e.firstElementChild) : $(this), s = o.width(), a.show(), $("html").addClass("wind_opened"), o.css("margin-right", o.width() - s), u = {
                w: a.width() - 2 * i,
                h: a.height() - 2 * i
            }, p = {
                w: 0,
                h: 0,
                x: 0,
                y: 0
            }, c.w > u.w && c.h > u.h && (c.h = u.w * c.h / c.w, c.w = u.w), c.w <= u.w && c.h <= u.h ? (p.w = c.w, p.h = c.h, p.x = Math.floor((u.w - c.w) / 2) + i, p.y = Math.floor((u.h - c.h) / 2) + i) : c.w > u.w && c.h <= u.h ? (p.w = u.w, p.h = Math.floor(p.w * c.h / c.w), p.x = i, p.y = Math.floor((u.h - p.h) / 2) + i) : c.w <= u.w && c.h > u.h && (p.h = u.h, p.w = Math.floor(p.h * c.w / c.h), p.x = Math.floor((u.w - p.w) / 2) + i, p.y = i), f) {
                var r = Math.min(u.w, u.h);
                p.w = r, p.h = r, p.x = Math.floor((u.w - r) / 2) + i, p.y = Math.floor((u.h - r) / 2) + i
            }
            l.appendTo(a).css({
                position: "absolute",
                display: "block",
                top: d.y,
                left: d.x,
                width: d.w,
                height: d.h
            }).animate({
                left: p.x,
                top: p.y,
                width: p.w,
                height: p.h
            }, n)
        }
        var i = 20,
            n = 300,
            a = !1,
            o = !1,
            r = !1,
            s = 0,
            l = null,
            d = null,
            c = null,
            u = null,
            p = null,
            f = !1,
            h = function(t) {
                if (t.length) {
                    var i = t.attr("src").split(".").pop();
                    f = "svg" === i, o || (o = $("body")), r || (r = $(window)), a || (a = $('<div id="image-enlarge-cont"></div>'), a.appendTo(o), a.click(function() {
                        l && l.animate({
                            top: d.y,
                            left: d.x,
                            width: d.w,
                            height: d.h
                        }, n, function() {
                            a.hide(), $("html").removeClass("wind_opened"), o.css("margin-right", 0), l.remove(), l = !1, a.empty()
                        })
                    }));
                    var s = t.offset();
                    if (d = {
                        w: t.width(),
                        h: t.height(),
                        x: s.left,
                        y: s.top - scrollTop()
                    }, f) {
                        var c = "undefined" != typeof t.attr("original-src") ? t.attr("original-src") : t.attr("src");
                        $.get(c, e)
                    } else {
                        var u = $(new Image);
                        u.unbind("load").bind("load", e), u.attr("src", "undefined" != typeof t.attr("original-src") ? t.attr("original-src") : t.attr("src"))
                    }
                }
            },
            m = function(t) {
                var e = t.find("img.has_enlarger:first, .svg_wrap.has_enlarger:first");
                h(e)
            },
            _ = function() {
                $(".blk_image .img-container--enlarge").click(function() {
                    return m($(this)), !1
                })
            },
            g = function() {
                adapterManager.isPC() && !isIos() ? $(".blk_image_ext .img-ext-magnifier").click(function() {
                    return m($(this).closest(".img_container")), !1
                }) : $(".blk_image_ext .img-container--enlarge").click(function() {
                    return m($(this)), !1
                })
            },
            w = function() {
                g(), _()
            };
        FE.add("onload", w)
    }(),
    function() {
        "use strict";

        function t() {
            if (browser.android) {
                var t = window.buildScriptsUrl + "web/user/fonts/",
                    e = t + "liberation_serif/LiberationSerif",
                    i = {
                        Regular: {
                            style: "normal",
                            weight: 400
                        },
                        Italic: {
                            style: "italic",
                            weight: 400
                        },
                        Bold: {
                            style: "normal",
                            weight: 700
                        },
                        BoldItalic: {
                            style: "italic",
                            weight: 700
                        }
                    };
                for (var n in i) {
                    var a = new FontFace("Times New Roman", "url(" + e + "-" + n + ".ttf)", i[n]);
                    document.fonts.add(a)
                }
            }
        }
        t()
    }(),
    function() {
        "use strict";
        var t = "async_img",
            e = 0,
            i = 1,
            n = function() {
                var n, a = this,
                    o = e;
                if (null != a && null != a.tagName) {
                    "img" == a.tagName.toLowerCase() ? n = a : (n = geByTag1("img", a), hasClass(a, "blk_image_data_wrap") && (o = i));
                    var r = $(n),
                        s = r.attr("data-src");
                    s && r.one("load", function() {
                        var e = $(a);
                        e.removeClass(t);
                        var n = r.next("noscript");
                        1 === n.length && n.remove(), o == i && e.removeAttr("style").children(".img_container:first").removeAttr("style")
                    }).attr("src", s).removeAttr("data-src")
                }
            };
        window.loadAsyncImages = function() {
            $("." + t).each(n)
        }, window._isEditor || FE.add("onload", loadAsyncImages)
    }(),
    function(t) {
        var e, i = $("body"),
            n = $("#formPopover"),
            a = function() {
                function t() {
                    this.setMobileView = function() {
                        i = e.attr("content"), e.attr("content", n)
                    }, this.rollbackView = function() {
                        e.attr("content", i)
                    }
                }
                var e = $('head meta[name="viewport"]'),
                    i = "",
                    n = "width=device-width, initial-scale=1, maximum-scale=1.0, user-scalable=0";
                return t
            }(),
            o = new a,
            r = function() {
                function t() {
                    a = o.css("width"), o.css("width", "100%")
                }

                function e() {
                    o.css("width", a)
                }

                function i(i) {
                    o = i, r = o.is(".wind") ? o : o.closest(".wind"), this.resetFormMinWidth = function() {
                        n = o.css("minWidth"), o.css("minWidth", 0)
                    }, this.rollbackFormMinWidth = function() {
                        o.css("minWidth", n)
                    }, this.getElement$ = function() {
                        return i
                    }, this.adaptWind = function() {
                        t(), o.addClass(s)
                    }, this.rollbackWind = function() {
                        e(), o.removeClass(s)
                    }, this.adaptInPreview = function() {
                        r.addClass(l)
                    }, this.rollbackInPreview = function() {
                        r.removeClass(l)
                    }
                }
                var n, a, o, r, s = "mobile-view",
                    l = "preview-adapt";
                return i
            }(),
            s = function() {
                function t(t) {
                    var i, n = t.step;
                    a = n.find(".error_wrapper"), i = a.find(".ui_error"), n.hasClass("fname") || n.hasClass("fselect") || n.hasClass("femail") || n.hasClass("fphone") || (r = !0, o = !1, "none" == i.css("display") && i.css("display", "flex"), quizMobileView.isMobile() ? a.css("bottom", e.getElement$().find(".wind-footer").outerHeight()) : (a.css("top", u.getVisiblePart()), o = 1), a.addClass("floated-error").fadeIn(400, function() {
                        setTimeout(function() {
                            a.fadeOut(400, function() {
                                a.removeClass("floated-error"), r = !1
                            })
                        }, 3500)
                    }))
                }

                function i() {
                    this.subscribeOnEvent = function() {
                        FE.add(n, t)
                    }, this.changePosition = function(t) {
                        o && r && a.css("top", t)
                    }, this.unsubscribe = function() {
                        FE.clr(n)
                    }
                }
                var n = "quiz-validate-error",
                    a = $(),
                    o = !1,
                    r = !1;
                return i
            }(),
            l = new s,
            d = function() {
                function t() {
                    quizMobileView.isMobile() && (i.removeClass("quiz-mobile-view"), o.rollbackView(), e.rollbackFormMinWidth()), quizMobileView.isMobileInPreview() && e.rollbackInPreview(), l.unsubscribe()
                }

                function a() {
                    quizMobileView.isMobile() && (i.removeClass("quiz-mobile-view"), o.rollbackView(), e.rollbackWind())
                }

                function s(t, e) {
                    c.indexOf(t.attr("id")) === -1 && (t.wind("setAfterCloseFunc", e), c.push(t.attr("id")))
                }

                function d() {
                    this.toQuizView = function(a) {
                        e = new r(a), this.isMobile() && (o.setMobileView(), i.addClass("quiz-mobile-view"), e.resetFormMinWidth(), this.isMobileInPreview() && e.adaptInPreview()), l.subscribeOnEvent(), u.initialize(), s(n, t)
                    }, this.adaptWind = function(t) {
                        this.isMobile() && (e = new r(t), e.adaptWind(), o.setMobileView(), i.addClass("quiz-mobile-view"), s(t, a))
                    }, this.isMobile = function() {
                        return browser.mobile || this.isMobileInPreview()
                    }, this.isMobileInPreview = function() {
                        return adapterManager.isPreview() && !adapterManager.isPC()
                    }, this.getSmartHeader = function() {
                        return u
                    }
                }
                var c = [];
                return d
            }(),
            c = function() {
                function t() {
                    s = $(this).scrollTop(), s > r ? i() : n(), l.changePosition(u.getVisiblePart()), r = s
                }

                function i() {
                    d > 0 ? (d -= s - r, o.css({
                        top: -(p - d)
                    })) : d = 0, c = s
                }

                function n() {
                    d += r - s, d > p && (d = p), o.css({
                        top: d <= p ? -(p - d) : 0
                    }), 0 == s ? (c = 0, o.removeClass("shadow")) : c > p && o.addClass("shadow")
                }

                function a() {
                    this.initialize = function() {
                        var i = e.getElement$(),
                            n = i.attr("id");
                        h.indexOf(n) === -1 && (o = i.find(".wind-header"), d = p = o.outerHeight() + f, i.find(".wind-body").on("scroll", t), h.push(n))
                    }, this.getVisiblePart = function() {
                        return d
                    }, this.recalcHeaderHeight = function() {
                        d = p = o.outerHeight() + f
                    }
                }
                var o, r = 0,
                    s = 0,
                    d = 0,
                    c = 0,
                    p = 0,
                    f = 4,
                    h = [];
                return a
            }(),
            u = new c;
        t.quizMobileView = new d
    }(window), window._wind_cnt = 0, F_wind.prototype.toggle = function() {
    return this[this.isShown ? "hide" : "show"]()
}, F_wind.prototype.show = function() {
    if (this.ops.showFunc(this)) {
        window._wind_cnt <= 0 && ($("#wind_container").show(), window._wind_cnt < 0 && (window._wind_cnt = 0));
        var t = this.$el.attr("id");
        this.$el.parent().hasClass("wind-wrap") ? this.$wrap || (this.$wrap = this.$el.closest(".wind-wrap")) : (this.$el.wrap('<div class="wind-wrap hidden' + (this.whiteBg ? " wind-wrap-white" : "") + (t ? " wrap-for-" + t : "") + '"></div>'), this.$el.removeClass("hidden"), this.$wrap = this.$el.parent()), this.$wrap.css({
            "z-index": window._wind_cnt + 1
        }), this.$wrap.removeClass("hidden"), this.isShown = !0, this.$el.trigger("show");
        var e = $("body").width(),
            i = null;
        if ($("html").addClass("wind_opened"), i = $("body").width() - e, $("body").css("margin-right", i), $("body>.navbar>.navbar-inner").css("padding-right", i), this.ops.afterShowFunc(this), window.lpm_hints) {
            var n = window.lpm_hints.getHintsManager();
            if (n && n.currentDisplayedHint) {
                var a = n.currentDisplayedHint;
                a && a.settings && a.settings.name && setTimeout(function() {
                    n.offHint(n.currentDisplayedHint)
                }, 500)
            }
        }
        this.$el.hasClass("wind--close-outside") && (this.$wrap.on("click", this.clickOutside), this.closeOutside = !0), e = i = null, window._wind_cnt++
    }
}, F_wind.prototype.hide = function() {
    window._wind_cnt > 0 ? window._wind_cnt-- : window._wind_cnt = 0, this.$wrap && this.$wrap.addClass("hidden"), 0 == $("#wind_container > div:visible").length && $("#wind_container").hide(), this.isShown = !1, this.$el.trigger("hide"), $("body").css("margin-right", 0), $("body>.navbar>.navbar-inner").css("padding-right", 0), $("html").removeClass("wind_opened"), this.closeOutside && this.$wrap.off("click", this.clickOutside), this.ops.afterCloseFunc(this)
}, F_wind.prototype.setHidePrevWnd = function(t) {
    this.hidePrevWnd = !!t
}, F_wind.prototype.setWhiteBg = function(t) {
    this.whiteBg = !!t
}, F_wind.prototype.setApplyFunc = function(t) {
    "function" == typeof t && (this.ops.applyFunc = t)
}, F_wind.prototype.setCancelFunc = function(t) {
    "function" == typeof t && (this.ops.cancelFunc = t)
}, F_wind.prototype.setCloseFunc = function(t) {
    "function" == typeof t ? this.ops.closeFunc = t : this.ops.closeFunc = null
}, F_wind.prototype.setAfterCloseFunc = function(t) {
    "function" == typeof t && (this.ops.afterCloseFunc = t)
}, F_wind.prototype.setShowFunc = function(t) {
    "function" == typeof t && (this.ops.showFunc = t)
}, F_wind.prototype.setAfterShowFunc = function(t) {
    "function" == typeof t && (this.ops.afterShowFunc = t)
}, F_wind.prototype.setParams = function(t) {
    this.params = t
}, F_wind.prototype.clickBtnApply = function() {
    !1 !== this.ops.applyFunc(this) && this.hide()
}, F_wind.prototype.clickBtnClose = function() {
    "function" == typeof this.ops.closeFunc ? !1 !== this.ops.closeFunc(this) && this.hide() : this.clickBtnCancel()
}, F_wind.prototype.clickOutside = function(t) {
    return 0 !== $(t.target).closest(".wind").length || void $(this).children(".wind").wind("clickBtnClose")
}, F_wind.prototype.clickBtnCancel = function() {
    !1 !== this.ops.cancelFunc(this) && this.hide()
}, jQuery.fn.wind = function(t) {
    var e = $(this),
        i = $.extend({}, $.fn.wind.defaults, "object" == typeof t && t),
        n = e.data("wind");
    return n || e.data("wind", n = new F_wind(this, i)), "string" == typeof t ? arguments[1] ? n[t](arguments[1]) : n[t]() : i.show && n.show(), e = n = i = null, this
}, jQuery.fn.wind.defaults = {
    show: !1,
    container: $("body > #wind_container"),
    applyFunc: function() {
        return !0
    },
    cancelFunc: function() {
        return !0
    },
    closeFunc: null,
    showFunc: function() {
        return !0
    },
    afterCloseFunc: function() {},
    afterShowFunc: function() {}
}, window.fotoramaVersion = "4.6.4",
    function(t, e, i, n, a) {
        "use strict";

        function o(t) {
            var e = "bez_" + n.makeArray(arguments).join("_").replace(".", "p");
            if ("function" != typeof n.easing[e]) {
                var i = function(t, e) {
                    var i = [null, null],
                        n = [null, null],
                        a = [null, null],
                        o = function(o, r) {
                            return a[r] = 3 * t[r], n[r] = 3 * (e[r] - t[r]) - a[r], i[r] = 1 - a[r] - n[r], o * (a[r] + o * (n[r] + o * i[r]))
                        },
                        r = function(t) {
                            return a[0] + t * (2 * n[0] + 3 * i[0] * t)
                        },
                        s = function(t) {
                            for (var e, i = t, n = 0; ++n < 14 && (e = o(i, 0) - t, !(Math.abs(e) < .001));) i -= e / r(i);
                            return i
                        };
                    return function(t) {
                        return o(s(t), 1)
                    }
                };
                n.easing[e] = function(e, n, a, o, r) {
                    return o * i([t[0], t[1]], [t[2], t[3]])(n / r) + a
                }
            }
            return e
        }

        function r() {}

        function s(t, e, i) {
            return Math.max(isNaN(e) ? -1 / 0 : e, Math.min(isNaN(i) ? 1 / 0 : i, t))
        }

        function l(t) {
            return t.match(/ma/) && t.match(/-?\d+(?!d)/g)[t.match(/3d/) ? 12 : 4]
        }

        function d(t) {
            return Fe ? +l(t.css("transform")) : +t.css("left").replace("px", "")
        }

        function c(t) {
            var e = {};
            return Fe ? e.transform = "translate3d(" + t + "px,0,0)" : e.left = t, e
        }

        function u(t) {
            return {
                "transition-duration": t + "ms"
            }
        }

        function p(t, e) {
            return isNaN(t) ? e : t
        }

        function f(t, e) {
            return p(+String(t).replace(e || "px", ""))
        }

        function h(t) {
            return /%$/.test(t) ? f(t, "%") : a
        }

        function m(t, e) {
            return p(h(t) / 100 * e, f(t))
        }

        function _(t) {
            return (!isNaN(f(t)) || !isNaN(f(t, "%"))) && t
        }

        function g(t, e, i, n) {
            return (t - (n || 0)) * (e + (i || 0))
        }

        function w(t, e, i, n) {
            return -Math.round(t / (e + (i || 0)) - (n || 0))
        }

        function v(t) {
            var e = t.data();
            if (!e.tEnd) {
                var i = t[0],
                    n = {
                        WebkitTransition: "webkitTransitionEnd",
                        MozTransition: "transitionend",
                        OTransition: "oTransitionEnd otransitionend",
                        msTransition: "MSTransitionEnd",
                        transition: "transitionend"
                    };
                V(i, n[be.prefixed("transition")], function(t) {
                    e.tProp && t.propertyName.match(e.tProp) && e.onEndFn()
                }), e.tEnd = !0
            }
        }

        function b(t, e, i, n) {
            var a, o = t.data();
            o && (o.onEndFn = function() {
                a || (a = !0, clearTimeout(o.tT), i())
            }, o.tProp = e, clearTimeout(o.tT), o.tT = setTimeout(function() {
                o.onEndFn()
            }, 1.5 * n), v(t))
        }

        function y(t, e) {
            if (t.length) {
                var i = t.data();
                Fe ? (t.css(u(0)), i.onEndFn = r, clearTimeout(i.tT)) : t.stop();
                var n = k(e, function() {
                    return d(t)
                });
                return t.css(c(n)), n
            }
        }

        function k() {
            for (var t, e = 0, i = arguments.length; i > e && (t = e ? arguments[e]() : arguments[e], "number" != typeof t); e++);
            return t
        }

        function C(t, e) {
            return Math.round(t + (e - t) / 1.5)
        }

        function M() {
            return M.p = M.p || ("https:" === i.protocol ? "https://" : "http://"), M.p
        }

        function x(t) {
            var i = e.createElement("a");
            return i.href = t, i
        }

        function $(t, e) {
            if ("string" != typeof t) return t;
            t = x(t);
            var i, n;
            if (t.host.match(/youtube\.com/) && t.search) {
                if (i = t.search.split("v=")[1]) {
                    var a = i.indexOf("&"); - 1 !== a && (i = i.substring(0, a)), n = "youtube"
                }
            } else t.host.match(/youtube\.com|youtu\.be/) ? (i = t.pathname.replace(/^\/(embed\/|v\/)?/, "").replace(/\/.*/, ""), n = "youtube") : t.host.match(/vimeo\.com/) && (n = "vimeo", i = t.pathname.replace(/^\/(video\/)?/, "").replace(/\/.*/, ""));
            return i && n || !e || (i = t.href, n = "custom"), !!i && {
                id: i,
                type: n,
                s: t.search.replace(/^\?/, ""),
                p: M()
            }
        }

        function S(t, e, i) {
            var a, o, r = t.video;
            return "youtube" === r.type ? (o = M() + "img.youtube.com/vi/" + r.id + "/default.jpg", a = o.replace(/\/default.jpg$/, "/hqdefault.jpg"), t.thumbsReady = !0) : "vimeo" === r.type ? n.ajax({
                url: M() + "vimeo.com/api/v2/video/" + r.id + ".json",
                dataType: "jsonp",
                success: function(n) {
                    t.thumbsReady = !0, T(e, {
                        img: n[0].thumbnail_large,
                        thumb: n[0].thumbnail_small
                    }, t.i, i)
                }
            }) : t.thumbsReady = !0, {
                img: a,
                thumb: o
            }
        }

        function T(t, e, i, a) {
            for (var o = 0, r = t.length; r > o; o++) {
                var s = t[o];
                if (s.i === i && s.thumbsReady) {
                    var l = {
                        videoReady: !0
                    };
                    l[Je] = l[Ke] = l[Ge] = !1, a.splice(o, 1, n.extend({}, s, l, e));
                    break
                }
            }
        }

        function E(t) {
            function e(t, e, a) {
                var o = t.children("img").eq(0),
                    r = t.attr("href"),
                    s = t.attr("src"),
                    l = o.attr("src"),
                    d = e.video,
                    c = !!a && $(r, d === !0);
                c ? r = !1 : c = d, i(t, o, n.extend(e, {
                    video: c,
                    img: e.img || r || s || l,
                    thumb: e.thumb || l || s || r
                }))
            }

            function i(t, e, i) {
                var a = i.thumb && i.img !== i.thumb,
                    o = f(i.width || t.attr("width")),
                    r = f(i.height || t.attr("height"));
                n.extend(i, {
                    width: o,
                    height: r,
                    thumbratio: q(i.thumbratio || f(i.thumbwidth || e && e.attr("width") || a || o) / f(i.thumbheight || e && e.attr("height") || a || r))
                })
            }
            var a = [];
            return t.children().each(function() {
                var t = n(this),
                    o = H(n.extend(t.data(), {
                        id: t.attr("id")
                    }));
                if (t.is("a, img")) e(t, o, !0);
                else {
                    if (t.is(":empty")) return;
                    i(t, null, n.extend(o, {
                        html: this,
                        _html: t.html()
                    }))
                }
                a.push(o)
            }), a
        }

        function I(t) {
            return 0 === t.offsetWidth && 0 === t.offsetHeight
        }

        function P(t) {
            return !n.contains(e.documentElement, t)
        }

        function A(t, e, i, n) {
            return A.i || (A.i = 1, A.ii = [!0]), n = n || A.i, "undefined" == typeof A.ii[n] && (A.ii[n] = !0), t() ? e() : A.ii[n] && setTimeout(function() {
                A.ii[n] && A(t, e, i, n)
            }, i || 100), A.i++
        }

        function D(t) {
            i.replace(i.protocol + "//" + i.host + i.pathname.replace(/^\/?/, "/") + i.search + "#" + t)
        }

        function F(t, e, i, n) {
            var a = t.data(),
                o = a.measures;
            if (o && (!a.l || a.l.W !== o.width || a.l.H !== o.height || a.l.r !== o.ratio || a.l.w !== e.w || a.l.h !== e.h || a.l.m !== i || a.l.p !== n)) {
                var r = o.width,
                    l = o.height,
                    d = e.w / e.h,
                    c = o.ratio >= d,
                    u = "scaledown" === i,
                    p = "contain" === i,
                    f = "cover" === i,
                    h = Z(n);
                c && (u || p) || !c && f ? (r = s(e.w, 0, u ? r : 1 / 0), l = r / o.ratio) : (c && f || !c && (u || p)) && (l = s(e.h, 0, u ? l : 1 / 0), r = l * o.ratio), t.css({
                    width: r,
                    height: l,
                    left: m(h.x, e.w - r),
                    top: m(h.y, e.h - l)
                }), a.l = {
                    W: o.width,
                    H: o.height,
                    r: o.ratio,
                    w: e.w,
                    h: e.h,
                    m: i,
                    p: n
                }
            }
            return !0
        }

        function O(t, e) {
            var i = t[0];
            i.styleSheet ? i.styleSheet.cssText = e : t.html(e)
        }

        function L(t, e, i) {
            return e !== i && (e >= t ? "left" : t >= i ? "right" : "left right")
        }

        function B(t, e, i, n) {
            if (!i) return !1;
            if (!isNaN(t)) return t - (n ? 0 : 1);
            for (var a, o = 0, r = e.length; r > o; o++) {
                var s = e[o];
                if (s.id === t) {
                    a = o;
                    break
                }
            }
            return a
        }

        function j(t, e, i) {
            i = i || {}, t.each(function() {
                var t, a = n(this),
                    o = a.data();
                o.clickOn || (o.clickOn = !0, n.extend(it(a, {
                    onStart: function(e) {
                        t = e, (i.onStart || r).call(this, e)
                    },
                    onMove: i.onMove || r,
                    onTouchEnd: i.onTouchEnd || r,
                    onEnd: function(i) {
                        i.moved || e.call(this, t)
                    }
                }), {
                    noMove: !0
                }))
            })
        }

        function N(t, e) {
            return '<div class="' + t + '">' + (e || "") + "</div>"
        }

        function z(t) {
            for (var e = t.length; e;) {
                var i = Math.floor(Math.random() * e--),
                    n = t[e];
                t[e] = t[i], t[i] = n
            }
            return t
        }

        function R(t) {
            return "[object Array]" == Object.prototype.toString.call(t) && n.map(t, function(t) {
                return n.extend({}, t)
            })
        }

        function U(t, e, i) {
            t.scrollLeft(e || 0).scrollTop(i || 0)
        }

        function H(t) {
            if (t) {
                var e = {};
                return n.each(t, function(t, i) {
                    e[t.toLowerCase()] = i
                }), e
            }
        }

        function q(t) {
            if (t) {
                var e = +t;
                return isNaN(e) ? (e = t.split("/"), +e[0] / +e[1] || a) : e
            }
        }

        function V(t, e, i, n) {
            e && (t.addEventListener ? t.addEventListener(e, i, !!n) : t.attachEvent("on" + e, i))
        }

        function W(t) {
            return !!t.getAttribute("disabled")
        }

        function Y(t) {
            return {
                tabindex: -1 * t + "",
                disabled: t
            }
        }

        function Q(t, e) {
            V(t, "keyup", function(i) {
                W(t) || 13 == i.keyCode && e.call(t, i)
            })
        }

        function J(t, e) {
            V(t, "focus", t.onfocusin = function(i) {
                e.call(t, i)
            }, !0)
        }

        function G(t, e) {
            t.preventDefault ? t.preventDefault() : t.returnValue = !1, e && t.stopPropagation && t.stopPropagation()
        }

        function K(t) {
            return t ? ">" : "<"
        }

        function Z(t) {
            return t = (t + "").split(/\s+/), {
                x: _(t[0]) || ei,
                y: _(t[1]) || ei
            }
        }

        function X(t, e) {
            var i = t.data(),
                a = Math.round(e.pos),
                o = function() {
                    i.sliding = !1, (e.onEnd || r)()
                };
            "undefined" != typeof e.overPos && e.overPos !== e.pos && (a = e.overPos, o = function() {
                X(t, n.extend({}, e, {
                    overPos: e.pos,
                    time: Math.max(Ue, e.time / 2)
                }))
            });
            var s = n.extend(c(a), e.width && {
                width: e.width
            });
            i.sliding = !0, Fe ? (t.css(n.extend(u(e.time), s)), e.time > 10 ? b(t, "transform", o, e.time) : o()) : t.stop().animate(s, e.time, Xe, o)
        }

        function tt(t, e, i, a, o, s) {
            var l = "undefined" != typeof s;
            if (l || (o.push(arguments), Array.prototype.push.call(arguments, o.length), !(o.length > 1))) {
                t = t || n(t), e = e || n(e);
                var d = t[0],
                    c = e[0],
                    u = "crossfade" === a.method,
                    p = function() {
                        if (!p.done) {
                            p.done = !0;
                            var t = (l || o.shift()) && o.shift();
                            t && tt.apply(this, t), (a.onEnd || r)(!!t)
                        }
                    },
                    f = a.time / (s || 1);
                i.removeClass(Ht + " " + Ut), t.stop().addClass(Ht), e.stop().addClass(Ut), u && c && t.fadeTo(0, 0), t.fadeTo(u ? f : 0, 1, u && p), e.fadeTo(f, 0, p), d && u || c || p()
            }
        }

        function et(t) {
            var e = (t.touches || [])[0] || t;
            t._x = e.pageX, t._y = e.clientY, t._now = n.now()
        }

        function it(t, i) {
            function a(t) {
                return p = n(t.target), b.checked = m = _ = w = !1, c || b.flow || t.touches && t.touches.length > 1 || t.which > 1 || ai && ai.type !== t.type && ri || (m = i.select && p.is(i.select, v)) ? m : (h = "touchstart" === t.type, _ = p.is("a, a *", v), f = b.control, g = b.noMove || b.noSwipe || f ? 16 : b.snap ? 0 : 4, et(t), u = ai = t, oi = t.type.replace(/down|start/, "move").replace(/Down/, "Move"), (i.onStart || r).call(v, t, {
                    control: f,
                    $target: p
                }), c = b.flow = !0, void((!h || b.go) && G(t)))
            }

            function o(t) {
                if (t.touches && t.touches.length > 1 || Ne && !t.isPrimary || oi !== t.type || !c) return c && s(), void(i.onTouchEnd || r)();
                et(t);
                var e = Math.abs(t._x - u._x),
                    n = Math.abs(t._y - u._y),
                    a = e - n,
                    o = (b.go || b.x || a >= 0) && !b.noSwipe,
                    l = 0 > a;
                h && !b.checked ? (c = o) && G(t) : (G(t), (i.onMove || r).call(v, t, {
                    touch: h
                })), !w && Math.sqrt(Math.pow(e, 2) + Math.pow(n, 2)) > g && (w = !0), b.checked = b.checked || o || l
            }

            function s(t) {
                (i.onTouchEnd || r)();
                var e = c;
                b.control = c = !1, e && (b.flow = !1), !e || _ && !b.checked || (t && G(t), ri = !0, clearTimeout(si), si = setTimeout(function() {
                    ri = !1
                }, 1e3), (i.onEnd || r).call(v, {
                    moved: w,
                    $target: p,
                    control: f,
                    touch: h,
                    startEvent: u,
                    aborted: !t || "MSPointerCancel" === t.type
                }))
            }

            function l() {
                b.flow || setTimeout(function() {
                    b.flow = !0
                }, 10)
            }

            function d() {
                b.flow && setTimeout(function() {
                    b.flow = !1
                }, Re)
            }
            var c, u, p, f, h, m, _, g, w, v = t[0],
                b = {};
            return Ne ? (V(v, "MSPointerDown", a), V(e, "MSPointerMove", o), V(e, "MSPointerCancel", s), V(e, "MSPointerUp", s)) : (V(v, "touchstart", a), V(v, "touchmove", o), V(v, "touchend", s), V(e, "touchstart", l), V(e, "touchend", d), V(e, "touchcancel", d), Ie.on("scroll", d), t.on("mousedown", a), Pe.on("mousemove", o).on("mouseup", s)), t.on("click", "a", function(t) {
                b.checked && G(t)
            }), b
        }

        function nt(t, e) {
            function i(i, n) {
                $ = !0, d = u = i._x, _ = i._now, m = [
                    [_, d]
                ], p = f = E.noMove || n ? 0 : y(t, (e.getPos || r)()), (e.onStart || r).call(S, i)
            }

            function a(t, e) {
                w = E.min, v = E.max, b = E.snap, k = t.altKey, $ = x = !1, M = e.control, M || T.sliding || i(t)
            }

            function o(n, a) {
                E.noSwipe || ($ || i(n), u = n._x, m.push([n._now, u]), f = p - (d - u), h = L(f, w, v), w >= f ? f = C(f, w) : f >= v && (f = C(f, v)), E.noMove || (t.css(c(f)), x || (x = !0, a.touch || Ne || t.addClass(ae)), (e.onMove || r).call(S, n, {
                    pos: f,
                    edge: h
                })))
            }

            function l(a) {
                if (!E.noSwipe || !a.moved) {
                    $ || i(a.startEvent, !0), a.touch || Ne || t.removeClass(ae), g = n.now();
                    for (var o, l, d, c, h, _, y, C, M, x = g - Re, T = null, I = Ue, P = e.friction, A = m.length - 1; A >= 0; A--) {
                        if (o = m[A][0], l = Math.abs(o - x), null === T || d > l) T = o, c = m[A][1];
                        else if (T === x || l > d) break;
                        d = l
                    }
                    y = s(f, w, v);
                    var D = c - u,
                        F = D >= 0,
                        O = g - T,
                        L = O > Re,
                        B = !L && f !== p && y === f;
                    b && (y = s(Math[B ? F ? "floor" : "ceil" : "round"](f / b) * b, w, v), w = v = y), B && (b || y === f) && (M = -(D / O), I *= s(Math.abs(M), e.timeLow, e.timeHigh), h = Math.round(f + M * I / P), b || (y = h), (!F && h > v || F && w > h) && (_ = F ? w : v, C = h - _, b || (y = _), C = s(y + .03 * C, _ - 50, _ + 50), I = Math.abs((f - C) / (M / P)))), I *= k ? 10 : 1, (e.onEnd || r).call(S, n.extend(a, {
                        moved: a.moved || L && b,
                        pos: f,
                        newPos: y,
                        overPos: C,
                        time: I
                    }))
                }
            }
            var d, u, p, f, h, m, _, g, w, v, b, k, M, x, $, S = t[0],
                T = t.data(),
                E = {};
            return E = n.extend(it(e.$wrap, n.extend({}, e, {
                onStart: a,
                onMove: o,
                onEnd: l
            })), E)
        }

        function at(t, e) {
            var i, a, o, s = t[0],
                l = {
                    prevent: {}
                };
            return V(s, ze, function(t) {
                var s = t.wheelDeltaY || -1 * t.deltaY || 0,
                    d = t.wheelDeltaX || -1 * t.deltaX || 0,
                    c = Math.abs(d) && !Math.abs(s),
                    u = K(0 > d),
                    p = a === u,
                    f = n.now(),
                    h = Re > f - o;
                a = u, o = f, c && l.ok && (!l.prevent[u] || i) && (G(t, !0), i && p && h || (e.shift && (i = !0, clearTimeout(l.t), l.t = setTimeout(function() {
                    i = !1
                }, He)), (e.onEnd || r)(t, e.shift ? u : d)))
            }), l
        }

        function ot() {
            n.each(n.Fotorama.instances, function(t, e) {
                e.index = t
            })
        }

        function rt(t) {
            n.Fotorama.instances.push(t), ot()
        }

        function st(t) {
            n.Fotorama.instances.splice(t.index, 1), ot()
        }
        var lt = "fotorama",
            dt = "fullscreen",
            ct = lt + "__wrap",
            ut = ct + "--css2",
            pt = ct + "--css3",
            ft = ct + "--video",
            ht = ct + "--fade",
            mt = ct + "--slide",
            _t = ct + "--no-controls",
            gt = ct + "--no-shadows",
            wt = ct + "--pan-y",
            vt = ct + "--rtl",
            bt = ct + "--only-active",
            yt = ct + "--no-captions",
            kt = ct + "--toggle-arrows",
            Ct = lt + "__stage",
            Mt = Ct + "__frame",
            xt = Mt + "--video",
            $t = Ct + "__shaft",
            St = lt + "__grab",
            Tt = lt + "__pointer",
            Et = lt + "__arr",
            It = Et + "--disabled",
            Pt = Et + "--prev",
            At = Et + "--next",
            Dt = lt + "__nav",
            Ft = Dt + "-wrap",
            Ot = Dt + "__shaft",
            Lt = Dt + "--dots",
            Bt = Dt + "--thumbs",
            jt = Dt + "__frame",
            Nt = jt + "--dot",
            zt = jt + "--thumb",
            Rt = lt + "__fade",
            Ut = Rt + "-front",
            Ht = Rt + "-rear",
            qt = lt + "__shadow",
            Vt = qt + "s",
            Wt = Vt + "--left",
            Yt = Vt + "--right",
            Qt = lt + "__active",
            Jt = lt + "__select",
            Gt = lt + "--hidden",
            Kt = lt + "--fullscreen",
            Zt = lt + "__fullscreen-icon",
            Xt = lt + "__error",
            te = lt + "__loading",
            ee = lt + "__loaded",
            ie = ee + "--full",
            ne = ee + "--img",
            ae = lt + "__grabbing",
            oe = lt + "__img",
            re = oe + "--full",
            se = lt + "__dot",
            le = lt + "__thumb",
            de = le + "-border",
            ce = lt + "__html",
            ue = lt + "__video",
            pe = ue + "-play",
            fe = ue + "-close",
            he = lt + "__caption",
            me = lt + "__caption__wrap",
            _e = lt + "__spinner",
            ge = '" tabindex="0" role="button',
            we = n && n.fn.jquery.split(".");
        if (!we || we[0] < 1 || 1 == we[0] && we[1] < 8) throw "Fotorama requires jQuery 1.8 or later and will not run without it.";
        var ve = {},
            be = function(t, e, i) {
                function n(t) {
                    g.cssText = t
                }

                function a(t, e) {
                    return typeof t === e
                }

                function o(t, e) {
                    return !!~("" + t).indexOf(e)
                }

                function r(t, e) {
                    for (var n in t) {
                        var a = t[n];
                        if (!o(a, "-") && g[a] !== i) return "pfx" != e || a
                    }
                    return !1
                }

                function s(t, e, n) {
                    for (var o in t) {
                        var r = e[t[o]];
                        if (r !== i) return n === !1 ? t[o] : a(r, "function") ? r.bind(n || e) : r
                    }
                    return !1
                }

                function l(t, e, i) {
                    var n = t.charAt(0).toUpperCase() + t.slice(1),
                        o = (t + " " + b.join(n + " ") + n).split(" ");
                    return a(e, "string") || a(e, "undefined") ? r(o, e) : (o = (t + " " + y.join(n + " ") + n).split(" "), s(o, e, i))
                }
                var d, c, u, p = "2.6.2",
                    f = {},
                    h = e.documentElement,
                    m = "modernizr",
                    _ = e.createElement(m),
                    g = _.style,
                    w = ({}.toString, " -webkit- -moz- -o- -ms- ".split(" ")),
                    v = "Webkit Moz O ms",
                    b = v.split(" "),
                    y = v.toLowerCase().split(" "),
                    k = {},
                    C = [],
                    M = C.slice,
                    x = function(t, i, n, a) {
                        var o, r, s, l, d = e.createElement("div"),
                            c = e.body,
                            u = c || e.createElement("body");
                        if (parseInt(n, 10))
                            for (; n--;) s = e.createElement("div"), s.id = a ? a[n] : m + (n + 1), d.appendChild(s);
                        return o = ["&#173;", '<style id="s', m, '">', t, "</style>"].join(""), d.id = m, (c ? d : u).innerHTML += o, u.appendChild(d), c || (u.style.background = "", u.style.overflow = "hidden", l = h.style.overflow, h.style.overflow = "hidden", h.appendChild(u)), r = i(d, t), c ? d.parentNode.removeChild(d) : (u.parentNode.removeChild(u), h.style.overflow = l), !!r
                    },
                    $ = {}.hasOwnProperty;
                u = a($, "undefined") || a($.call, "undefined") ? function(t, e) {
                    return e in t && a(t.constructor.prototype[e], "undefined")
                } : function(t, e) {
                    return $.call(t, e)
                }, Function.prototype.bind || (Function.prototype.bind = function(t) {
                    var e = this;
                    if ("function" != typeof e) throw new TypeError;
                    var i = M.call(arguments, 1),
                        n = function() {
                            if (this instanceof n) {
                                var a = function() {};
                                a.prototype = e.prototype;
                                var o = new a,
                                    r = e.apply(o, i.concat(M.call(arguments)));
                                return Object(r) === r ? r : o
                            }
                            return e.apply(t, i.concat(M.call(arguments)))
                        };
                    return n
                }), k.csstransforms3d = function() {
                    var t = !!l("perspective");
                    return t
                };
                for (var S in k) u(k, S) && (c = S.toLowerCase(), f[c] = k[S](), C.push((f[c] ? "" : "no-") + c));
                return f.addTest = function(t, e) {
                    if ("object" == typeof t)
                        for (var n in t) u(t, n) && f.addTest(n, t[n]);
                    else {
                        if (t = t.toLowerCase(), f[t] !== i) return f;
                        e = "function" == typeof e ? e() : e, "undefined" != typeof enableClasses && enableClasses && (h.className += " " + (e ? "" : "no-") + t), f[t] = e
                    }
                    return f
                }, n(""), _ = d = null, f._version = p, f._prefixes = w, f._domPrefixes = y, f._cssomPrefixes = b, f.testProp = function(t) {
                    return r([t])
                }, f.testAllProps = l, f.testStyles = x, f.prefixed = function(t, e, i) {
                    return e ? l(t, e, i) : l(t, "pfx")
                }, f
            }(t, e),
            ye = {
                ok: !1,
                is: function() {
                    return !1
                },
                request: function() {},
                cancel: function() {},
                event: "",
                prefix: ""
            },
            ke = "webkit moz o ms khtml".split(" ");
        if ("undefined" != typeof e.cancelFullScreen) ye.ok = !0;
        else
            for (var Ce = 0, Me = ke.length; Me > Ce; Ce++)
                if (ye.prefix = ke[Ce], "undefined" != typeof e[ye.prefix + "CancelFullScreen"]) {
                    ye.ok = !0;
                    break
                } ye.ok && (ye.event = ye.prefix + "fullscreenchange", ye.is = function() {
            switch (this.prefix) {
                case "":
                    return e.fullScreen;
                case "webkit":
                    return e.webkitIsFullScreen;
                default:
                    return e[this.prefix + "FullScreen"];
            }
        }, ye.request = function(t) {
            return "" === this.prefix ? t.requestFullScreen() : t[this.prefix + "RequestFullScreen"]()
        }, ye.cancel = function() {
            return "" === this.prefix ? e.cancelFullScreen() : e[this.prefix + "CancelFullScreen"]()
        });
        var xe, $e = {
                lines: 12,
                length: 5,
                width: 2,
                radius: 7,
                corners: 1,
                rotate: 15,
                color: "rgba(128, 128, 128, .75)",
                hwaccel: !0
            },
            Se = {
                top: "auto",
                left: "auto",
                className: ""
            };
        ! function(t, e) {
            xe = e()
        }(this, function() {
            function t(t, i) {
                var n, a = e.createElement(t || "div");
                for (n in i) a[n] = i[n];
                return a
            }

            function i(t) {
                for (var e = 1, i = arguments.length; i > e; e++) t.appendChild(arguments[e]);
                return t
            }

            function n(t, e, i, n) {
                var a = ["opacity", e, ~~(100 * t), i, n].join("-"),
                    o = .01 + i / n * 100,
                    r = Math.max(1 - (1 - t) / e * (100 - o), t),
                    s = p.substring(0, p.indexOf("Animation")).toLowerCase(),
                    l = s && "-" + s + "-" || "";
                return h[a] || (m.insertRule("@" + l + "keyframes " + a + "{0%{opacity:" + r + "}" + o + "%{opacity:" + t + "}" + (o + .01) + "%{opacity:1}" + (o + e) % 100 + "%{opacity:" + t + "}100%{opacity:" + r + "}}", m.cssRules.length), h[a] = 1), a
            }

            function o(t, e) {
                var i, n, o = t.style;
                for (e = e.charAt(0).toUpperCase() + e.slice(1), n = 0; n < f.length; n++)
                    if (i = f[n] + e, o[i] !== a) return i;
                return o[e] !== a ? e : void 0
            }

            function r(t, e) {
                for (var i in e) t.style[o(t, i) || i] = e[i];
                return t
            }

            function s(t) {
                for (var e = 1; e < arguments.length; e++) {
                    var i = arguments[e];
                    for (var n in i) t[n] === a && (t[n] = i[n])
                }
                return t
            }

            function l(t) {
                for (var e = {
                    x: t.offsetLeft,
                    y: t.offsetTop
                }; t = t.offsetParent;) e.x += t.offsetLeft, e.y += t.offsetTop;
                return e
            }

            function d(t, e) {
                return "string" == typeof t ? t : t[e % t.length]
            }

            function c(t) {
                return "undefined" == typeof this ? new c(t) : void(this.opts = s(t || {}, c.defaults, _))
            }

            function u() {
                function e(e, i) {
                    return t("<" + e + ' xmlns="urn:schemas-microsoft.com:vml" class="spin-vml">', i)
                }
                m.addRule(".spin-vml", "behavior:url(#default#VML)"), c.prototype.lines = function(t, n) {
                    function a() {
                        return r(e("group", {
                            coordsize: c + " " + c,
                            coordorigin: -l + " " + -l
                        }), {
                            width: c,
                            height: c
                        })
                    }

                    function o(t, o, s) {
                        i(p, i(r(a(), {
                            rotation: 360 / n.lines * t + "deg",
                            left: ~~o
                        }), i(r(e("roundrect", {
                            arcsize: n.corners
                        }), {
                            width: l,
                            height: n.width,
                            left: n.radius,
                            top: -n.width >> 1,
                            filter: s
                        }), e("fill", {
                            color: d(n.color, t),
                            opacity: n.opacity
                        }), e("stroke", {
                            opacity: 0
                        }))))
                    }
                    var s, l = n.length + n.width,
                        c = 2 * l,
                        u = 2 * -(n.width + n.length) + "px",
                        p = r(a(), {
                            position: "absolute",
                            top: u,
                            left: u
                        });
                    if (n.shadow)
                        for (s = 1; s <= n.lines; s++) o(s, -2, "progid:DXImageTransform.Microsoft.Blur(pixelradius=2,makeshadow=1,shadowopacity=.3)");
                    for (s = 1; s <= n.lines; s++) o(s);
                    return i(t, p)
                }, c.prototype.opacity = function(t, e, i, n) {
                    var a = t.firstChild;
                    n = n.shadow && n.lines || 0, a && e + n < a.childNodes.length && (a = a.childNodes[e + n], a = a && a.firstChild, a = a && a.firstChild, a && (a.opacity = i))
                }
            }
            var p, f = ["webkit", "Moz", "ms", "O"],
                h = {},
                m = function() {
                    var n = t("style", {
                        type: "text/css"
                    });
                    return i(e.getElementsByTagName("head")[0], n), n.sheet || n.styleSheet
                }(),
                _ = {
                    lines: 12,
                    length: 7,
                    width: 5,
                    radius: 10,
                    rotate: 0,
                    corners: 1,
                    color: "#000",
                    direction: 1,
                    speed: 1,
                    trail: 100,
                    opacity: .25,
                    fps: 20,
                    zIndex: 2e9,
                    className: "spinner",
                    top: "auto",
                    left: "auto",
                    position: "relative"
                };
            c.defaults = {}, s(c.prototype, {
                spin: function(e) {
                    this.stop();
                    var i, n, a = this,
                        o = a.opts,
                        s = a.el = r(t(0, {
                            className: o.className
                        }), {
                            position: o.position,
                            width: 0,
                            zIndex: o.zIndex
                        }),
                        d = o.radius + o.length + o.width;
                    if (e && (e.insertBefore(s, e.firstChild || null), n = l(e), i = l(s), r(s, {
                        left: ("auto" == o.left ? n.x - i.x + (e.offsetWidth >> 1) : parseInt(o.left, 10) + d) + "px",
                        top: ("auto" == o.top ? n.y - i.y + (e.offsetHeight >> 1) : parseInt(o.top, 10) + d) + "px"
                    })), s.setAttribute("role", "progressbar"), a.lines(s, a.opts), !p) {
                        var c, u = 0,
                            f = (o.lines - 1) * (1 - o.direction) / 2,
                            h = o.fps,
                            m = h / o.speed,
                            _ = (1 - o.opacity) / (m * o.trail / 100),
                            g = m / o.lines;
                        ! function t() {
                            u++;
                            for (var e = 0; e < o.lines; e++) c = Math.max(1 - (u + (o.lines - e) * g) % m * _, o.opacity), a.opacity(s, e * o.direction + f, c, o);
                            a.timeout = a.el && setTimeout(t, ~~(1e3 / h))
                        }()
                    }
                    return a
                },
                stop: function() {
                    var t = this.el;
                    return t && (clearTimeout(this.timeout), t.parentNode && t.parentNode.removeChild(t), this.el = a), this
                },
                lines: function(e, a) {
                    function o(e, i) {
                        return r(t(), {
                            position: "absolute",
                            width: a.length + a.width + "px",
                            height: a.width + "px",
                            background: e,
                            boxShadow: i,
                            transformOrigin: "left",
                            transform: "rotate(" + ~~(360 / a.lines * l + a.rotate) + "deg) translate(" + a.radius + "px,0)",
                            borderRadius: (a.corners * a.width >> 1) + "px"
                        })
                    }
                    for (var s, l = 0, c = (a.lines - 1) * (1 - a.direction) / 2; l < a.lines; l++) s = r(t(), {
                        position: "absolute",
                        top: 1 + ~(a.width / 2) + "px",
                        transform: a.hwaccel ? "translate3d(0,0,0)" : "",
                        opacity: a.opacity,
                        animation: p && n(a.opacity, a.trail, c + l * a.direction, a.lines) + " " + 1 / a.speed + "s linear infinite"
                    }), a.shadow && i(s, r(o("#000", "0 0 4px #000"), {
                        top: "2px"
                    })), i(e, i(s, o(d(a.color, l), "0 0 1px rgba(0,0,0,.1)")));
                    return e
                },
                opacity: function(t, e, i) {
                    e < t.childNodes.length && (t.childNodes[e].style.opacity = i)
                }
            });
            var g = r(t("group"), {
                behavior: "url(#default#VML)"
            });
            return !o(g, "transform") && g.adj ? u() : p = o(g, "animation"), c
        });
        var Te, Ee, Ie = n(t),
            Pe = n(e),
            Ae = "quirks" === i.hash.replace("#", ""),
            De = be.csstransforms3d,
            Fe = De && !Ae,
            Oe = De || "CSS1Compat" === e.compatMode,
            Le = ye.ok,
            Be = navigator.userAgent.match(/Android|webOS|iPhone|iPad|iPod|BlackBerry|Windows Phone/i),
            je = !Fe || Be,
            Ne = navigator.msPointerEnabled,
            ze = "onwheel" in e.createElement("div") ? "wheel" : e.onmousewheel !== a ? "mousewheel" : "DOMMouseScroll",
            Re = 250,
            Ue = 300,
            He = 1400,
            qe = 5e3,
            Ve = 2,
            We = 64,
            Ye = 500,
            Qe = 333,
            Je = "$stageFrame",
            Ge = "$navDotFrame",
            Ke = "$navThumbFrame",
            Ze = "auto",
            Xe = o([.1, 0, .25, 1]),
            ti = 99999,
            ei = "50%",
            ii = {
                width: null,
                minwidth: null,
                maxwidth: "100%",
                height: null,
                minheight: null,
                maxheight: null,
                ratio: null,
                margin: Ve,
                glimpse: 0,
                fit: "contain",
                position: ei,
                thumbposition: ei,
                nav: "dots",
                navposition: "bottom",
                navwidth: null,
                thumbwidth: We,
                thumbheight: We,
                thumbmargin: Ve,
                thumbborderwidth: Ve,
                thumbfit: "cover",
                allowfullscreen: !1,
                transition: "slide",
                clicktransition: null,
                transitionduration: Ue,
                captions: !0,
                hash: !1,
                startindex: 0,
                loop: !1,
                autoplay: !1,
                stopautoplayontouch: !0,
                keyboard: !1,
                arrows: !0,
                click: !0,
                swipe: !0,
                trackpad: !1,
                enableifsingleframe: !1,
                controlsonstart: !0,
                shuffle: !1,
                direction: "ltr",
                shadows: !0,
                spinner: null
            },
            ni = {
                left: !0,
                right: !0,
                down: !1,
                up: !1,
                space: !1,
                home: !1,
                end: !1
            };
        A.stop = function(t) {
            A.ii[t] = !1
        };
        var ai, oi, ri, si;
        jQuery.Fotorama = function(t, a) {
            function o() {
                n.each(Mi, function(t, e) {
                    if (!e.i) {
                        e.i = fn++;
                        var i = $(e.video, !0);
                        if (i) {
                            var n = {};
                            e.video = i, e.img || e.thumb ? e.thumbsReady = !0 : n = S(e, Mi, dn), T(Mi, {
                                img: n.img,
                                thumb: n.thumb
                            }, e.i, dn)
                        }
                    }
                })
            }

            function r(t) {
                return Ki[t] || dn.fullScreen
            }

            function l(t) {
                var e = "keydown." + lt,
                    i = lt + cn,
                    n = "keydown." + i,
                    o = "resize." + i + " orientationchange." + i;
                t ? (Pe.on(n, function(t) {
                    var e, i;
                    Ti && 27 === t.keyCode ? (e = !0, pi(Ti, !0, !0)) : (dn.fullScreen || a.keyboard && !dn.index) && (27 === t.keyCode ? (e = !0, dn.cancelFullScreen()) : t.shiftKey && 32 === t.keyCode && r("space") || 37 === t.keyCode && r("left") || 38 === t.keyCode && r("up") ? i = "<" : 32 === t.keyCode && r("space") || 39 === t.keyCode && r("right") || 40 === t.keyCode && r("down") ? i = ">" : 36 === t.keyCode && r("home") ? i = "<<" : 35 === t.keyCode && r("end") && (i = ">>")), (e || i) && G(t), i && dn.show({
                        index: i,
                        slow: t.altKey,
                        user: !0
                    })
                }), dn.index || Pe.off(e).on(e, "textarea, input, select", function(t) {
                    !Ee.hasClass(dt) && t.stopPropagation()
                }), Ie.on(o, dn.resize)) : (Pe.off(n), Ie.off(o))
            }

            function d(e) {
                e !== d.f && (e ? (t.html("").addClass(lt + " " + un).append(gn).before(mn).before(_n), rt(dn)) : (gn.detach(), mn.detach(), _n.detach(), t.html(hn.urtext).removeClass(un), st(dn)), l(e), d.f = e)
            }

            function p() {
                Mi = dn.data = Mi || R(a.data) || E(t), xi = dn.size = Mi.length, !Ci.ok && a.shuffle && z(Mi), o(), Ln = M(Ln), xi && d(!0)
            }

            function h() {
                var t = 2 > xi && !a.enableifsingleframe || Ti;
                Nn.noMove = t || qi, Nn.noSwipe = t || !a.swipe, !Qi && vn.toggleClass(St, !a.click && !Nn.noMove && !Nn.noSwipe), Ne && gn.toggleClass(wt, !Nn.noSwipe)
            }

            function v(t) {
                t === !0 && (t = ""), a.autoplay = Math.max(+t || qe, 1.5 * Yi)
            }

            function b() {
                function t(t, i) {
                    e[t ? "add" : "remove"].push(i)
                }
                dn.options = a = H(a), qi = "crossfade" === a.transition || "dissolve" === a.transition, ji = a.loop && (xi > 2 || qi && (!Qi || "slide" !== Qi)), Yi = +a.transitionduration || Ue, Gi = "rtl" === a.direction, Ki = n.extend({}, a.keyboard && ni, a.keyboard);
                var e = {
                    add: [],
                    remove: []
                };
                xi > 1 || a.enableifsingleframe ? (Ni = a.nav, Ri = "top" === a.navposition, e.remove.push(Jt), Cn.toggle(!!a.arrows)) : (Ni = !1, Cn.hide()), Ht(), Si = new xe(n.extend($e, a.spinner, Se, {
                    direction: Gi ? -1 : 1
                })), Ae(), De(), a.autoplay && v(a.autoplay), Vi = f(a.thumbwidth) || We, Wi = f(a.thumbheight) || We, zn.ok = Un.ok = a.trackpad && !je, h(), ai(a, [jn]), zi = "thumbs" === Ni, zi ? (ue(xi, "navThumb"), $i = Tn, ln = Ke, O(mn, n.Fotorama.jst.style({
                    w: Vi,
                    h: Wi,
                    b: a.thumbborderwidth,
                    m: a.thumbmargin,
                    s: cn,
                    q: !Oe
                })), xn.addClass(Bt).removeClass(Lt)) : "dots" === Ni ? (ue(xi, "navDot"), $i = Sn, ln = Ge, xn.addClass(Lt).removeClass(Bt)) : (Ni = !1, xn.removeClass(Bt + " " + Lt)), Ni && (Ri ? Mn.insertBefore(wn) : Mn.insertAfter(wn), ke.nav = !1, ke($i, $n, "nav")), Ui = a.allowfullscreen, Ui ? (In.prependTo(wn), Hi = Le && "native" === Ui) : (In.detach(), Hi = !1), t(qi, ht), t(!qi, mt), t(!a.captions, yt), t(Gi, vt), t("always" !== a.arrows, kt), Ji = a.shadows && !je, t(!Ji, gt), gn.addClass(e.add.join(" ")).removeClass(e.remove.join(" ")), Bn = n.extend({}, a)
            }

            function C(t) {
                return 0 > t ? (xi + t % xi) % xi : t >= xi ? t % xi : t
            }

            function M(t) {
                return s(t, 0, xi - 1)
            }

            function x(t) {
                return ji ? C(t) : M(t)
            }

            function I(t) {
                return !!(t > 0 || ji) && t - 1
            }

            function W(t) {
                return !!(xi - 1 > t || ji) && t + 1
            }

            function Z() {
                Nn.min = ji ? -1 / 0 : -g(xi - 1, jn.w, a.margin, Pi), Nn.max = ji ? 1 / 0 : -g(0, jn.w, a.margin, Pi), Nn.snap = jn.w + a.margin
            }

            function et() {
                Rn.min = Math.min(0, jn.nw - $n.width()), Rn.max = 0, $n.toggleClass(St, !(Rn.noMove = Rn.min === Rn.max))
            }

            function it(t, e, i) {
                if ("number" == typeof t) {
                    t = new Array(t);
                    var a = !0
                }
                return n.each(t, function(t, n) {
                    if (a && (n = t), "number" == typeof n) {
                        var o = Mi[C(n)];
                        if (o) {
                            var r = "$" + e + "Frame",
                                s = o[r];
                            i.call(this, t, n, o, s, r, s && s.data())
                        }
                    }
                })
            }

            function ot(t, e, i, n) {
                (!Zi || "*" === Zi && n === Bi) && (t = _(a.width) || _(t) || Ye, e = _(a.height) || _(e) || Qe, dn.resize({
                    width: t,
                    ratio: a.ratio || i || t / e
                }, 0, n !== Bi && "*"))
            }

            function Rt(t, e, i, o, r, s) {
                it(t, e, function(t, l, d, c, u, p) {
                    function f(t) {
                        var e = C(l);
                        oi(t, {
                            index: e,
                            src: k,
                            frame: Mi[e]
                        })
                    }

                    function h() {
                        v.remove(), n.Fotorama.cache[k] = "error", d.html && "stage" === e || !M || M === k ? (!k || d.html || g ? "stage" === e && (c.trigger("f:load").removeClass(te + " " + Xt).addClass(ee), f("load"), ot()) : (c.trigger("f:error").removeClass(te).addClass(Xt), f("error")), p.state = "error", !(xi > 1 && Mi[l] === d) || d.html || d.deleted || d.video || g || (d.deleted = !0, dn.splice(l, 1))) : (d[y] = k = M, Rt([l], e, i, o, r, !0))
                    }

                    function m() {
                        n.Fotorama.measures[k] = b.measures = n.Fotorama.measures[k] || {
                            width: w.width,
                            height: w.height,
                            ratio: w.width / w.height
                        }, ot(b.measures.width, b.measures.height, b.measures.ratio, l), v.off("load error").addClass(oe + (g ? " " + re : "")).prependTo(c), F(v, (n.isFunction(i) ? i() : i) || jn, o || d.fit || a.fit, r || d.position || a.position), n.Fotorama.cache[k] = p.state = "loaded", setTimeout(function() {
                            c.trigger("f:load").removeClass(te + " " + Xt).addClass(ee + " " + (g ? ie : ne)), "stage" === e ? f("load") : (d.thumbratio === Ze || !d.thumbratio && a.thumbratio === Ze) && (d.thumbratio = b.measures.ratio, yi())
                        }, 0)
                    }

                    function _() {
                        var t = 10;
                        A(function() {
                            return !rn || !t-- && !je
                        }, function() {
                            m()
                        })
                    }
                    if (c) {
                        var g = dn.fullScreen && d.full && d.full !== d.img && !p.$full && "stage" === e;
                        if (!p.$img || s || g) {
                            var w = new Image,
                                v = n(w),
                                b = v.data();
                            p[g ? "$full" : "$img"] = v;
                            var y = "stage" === e ? g ? "full" : "img" : "thumb",
                                k = d[y],
                                M = g ? null : d["stage" === e ? "thumb" : "img"];
                            if ("navThumb" === e && (c = p.$wrap), !k) return void h();
                            n.Fotorama.cache[k] ? ! function t() {
                                "error" === n.Fotorama.cache[k] ? h() : "loaded" === n.Fotorama.cache[k] ? setTimeout(_, 0) : setTimeout(t, 100)
                            }() : (n.Fotorama.cache[k] = "*", v.on("load", _).on("error", h)), p.state = "", w.src = k
                        }
                    }
                })
            }

            function Ut(t) {
                On.append(Si.spin().el).appendTo(t)
            }

            function Ht() {
                On.detach(), Si && Si.stop()
            }

            function qt() {
                var t = Ei[Je];
                t && !t.data().state && (Ut(t), t.on("f:load f:error", function() {
                    t.off("f:load f:error"), Ht()
                }))
            }

            function ae(t) {
                Q(t, wi), J(t, function() {
                    setTimeout(function() {
                        U(xn)
                    }, 0), He({
                        time: Yi,
                        guessIndex: n(this).data().eq,
                        minMax: Rn
                    })
                })
            }

            function ue(t, e) {
                it(t, e, function(t, i, a, o, r, s) {
                    if (!o) {
                        o = a[r] = gn[r].clone(), s = o.data(), s.data = a;
                        var l = o[0];
                        "stage" === e ? (a.html && n('<div class="' + ce + '"></div>').append(a._html ? n(a.html).removeAttr("id").html(a._html) : a.html).appendTo(o), a.caption && n(N(he, N(me, a.caption))).appendTo(o), a.video && o.addClass(xt).append(An.clone()), J(l, function() {
                            setTimeout(function() {
                                U(wn)
                            }, 0), mi({
                                index: s.eq,
                                user: !0
                            })
                        }), bn = bn.add(o)) : "navDot" === e ? (ae(l), Sn = Sn.add(o)) : "navThumb" === e && (ae(l), s.$wrap = o.children(":first"), Tn = Tn.add(o), a.video && s.$wrap.append(An.clone()))
                    }
                })
            }

            function we(t, e, i, n) {
                return t && t.length && F(t, e, i, n)
            }

            function ve(t) {
                it(t, "stage", function(t, e, i, o, r, s) {
                    if (o) {
                        var l = C(e),
                            d = i.fit || a.fit,
                            c = i.position || a.position;
                        s.eq = l, qn[Je][l] = o.css(n.extend({
                            left: qi ? 0 : g(e, jn.w, a.margin, Pi)
                        }, qi && u(0))), P(o[0]) && (o.appendTo(vn), pi(i.$video)), we(s.$img, jn, d, c), we(s.$full, jn, d, c)
                    }
                })
            }

            function be(t, e) {
                if ("thumbs" === Ni && !isNaN(t)) {
                    var i = -t,
                        o = -t + jn.nw;
                    Tn.each(function() {
                        var t = n(this),
                            r = t.data(),
                            s = r.eq,
                            l = function() {
                                return {
                                    h: Wi,
                                    w: r.w
                                }
                            },
                            d = l(),
                            c = Mi[s] || {},
                            u = c.thumbfit || a.thumbfit,
                            p = c.thumbposition || a.thumbposition;
                        d.w = r.w, r.l + r.w < i || r.l > o || we(r.$img, d, u, p) || e && Rt([s], "navThumb", l, u, p)
                    })
                }
            }

            function ke(t, e, i) {
                if (!ke[i]) {
                    var o = "nav" === i && zi,
                        r = 0;
                    e.append(t.filter(function() {
                        for (var t, e = n(this), i = e.data(), a = 0, o = Mi.length; o > a; a++)
                            if (i.data === Mi[a]) {
                                t = !0, i.eq = a;
                                break
                            } return t || e.remove() && !1
                    }).sort(function(t, e) {
                        return n(t).data().eq - n(e).data().eq
                    }).each(function() {
                        if (o) {
                            var t = n(this),
                                e = t.data(),
                                i = Math.round(Wi * e.data.thumbratio) || Vi;
                            e.l = r, e.w = i, t.css({
                                width: i
                            }), r += i + a.thumbmargin
                        }
                    })), ke[i] = !0
                }
            }

            function Ce(t) {
                return t - Vn > jn.w / 3
            }

            function Me(t) {
                return !(ji || Ln + t && Ln - xi + t || Ti)
            }

            function Ae() {
                var t = Me(0),
                    e = Me(1);
                yn.toggleClass(It, t).attr(Y(t)), kn.toggleClass(It, e).attr(Y(e))
            }

            function De() {
                zn.ok && (zn.prevent = {
                    "<": Me(0),
                    ">": Me(1)
                })
            }

            function Be(t) {
                var e, i, n = t.data();
                return zi ? (e = n.l, i = n.w) : (e = t.position().left, i = t.width()), {
                    c: e + i / 2,
                    min: -e + 10 * a.thumbmargin,
                    max: -e + jn.w - i - 10 * a.thumbmargin
                }
            }

            function ze(t) {
                var e = Ei[ln].data();
                X(En, {
                    time: 1.2 * t,
                    pos: e.l,
                    width: e.w - 2 * a.thumbborderwidth
                })
            }

            function He(t) {
                var e = Mi[t.guessIndex][ln];
                if (e) {
                    var i = Rn.min !== Rn.max,
                        n = t.minMax || i && Be(Ei[ln]),
                        a = i && (t.keep && He.l ? He.l : s((t.coo || jn.nw / 2) - Be(e).c, n.min, n.max)),
                        o = i && s(a, Rn.min, Rn.max),
                        r = 1.1 * t.time;
                    X($n, {
                        time: r,
                        pos: o || 0,
                        onEnd: function() {
                            be(o, !0)
                        }
                    }), ui(xn, L(o, Rn.min, Rn.max)), He.l = a
                }
            }

            function Ve() {
                Xe(ln), Hn[ln].push(Ei[ln].addClass(Qt))
            }

            function Xe(t) {
                for (var e = Hn[t]; e.length;) e.shift().removeClass(Qt)
            }

            function ei(t) {
                var e = qn[t];
                n.each(Ii, function(t, i) {
                    delete e[C(i)]
                }), n.each(e, function(t, i) {
                    delete e[t], i.detach()
                })
            }

            function ii(t) {
                Pi = Ai = Ln;
                var e = Ei[Je];
                e && (Xe(Je), Hn[Je].push(e.addClass(Qt)), t || dn.show.onEnd(!0), y(vn, 0, !0), ei(Je), ve(Ii), Z(), et())
            }

            function ai(t, e) {
                t && n.each(e, function(e, i) {
                    i && n.extend(i, {
                        width: t.width || i.width,
                        height: t.height,
                        minwidth: t.minwidth,
                        maxwidth: t.maxwidth,
                        minheight: t.minheight,
                        maxheight: t.maxheight,
                        ratio: q(t.ratio)
                    })
                })
            }

            function oi(e, i) {
                t.trigger(lt + ":" + e, [dn, i])
            }

            function ri() {
                clearTimeout(si.t), rn = 1, a.stopautoplayontouch ? dn.stopAutoplay() : nn = !0
            }

            function si() {
                rn && (a.stopautoplayontouch || (li(), di()), si.t = setTimeout(function() {
                    rn = 0
                }, Ue + Re))
            }

            function li() {
                nn = !(!Ti && !an)
            }

            function di() {
                if (clearTimeout(di.t), A.stop(di.w), !a.autoplay || nn) return void(dn.autoplay && (dn.autoplay = !1, oi("stopautoplay")));
                dn.autoplay || (dn.autoplay = !0, oi("startautoplay"));
                var t = Ln,
                    e = Ei[Je].data();
                di.w = A(function() {
                    return e.state || t !== Ln
                }, function() {
                    di.t = setTimeout(function() {
                        if (!nn && t === Ln) {
                            var e = Li,
                                i = Mi[e][Je].data();
                            di.w = A(function() {
                                return i.state || e !== Li
                            }, function() {
                                nn || e !== Li || dn.show(ji ? K(!Gi) : Li)
                            })
                        }
                    }, a.autoplay)
                })
            }

            function ci() {
                dn.fullScreen && (dn.fullScreen = !1, Le && ye.cancel(pn), Ee.removeClass(dt), Te.removeClass(dt), t.removeClass(Kt).insertAfter(_n), jn = n.extend({}, on), pi(Ti, !0, !0), gi("x", !1), dn.resize(), Rt(Ii, "stage"), U(Ie, tn, Xi), oi("fullscreenexit"))
            }

            function ui(t, e) {
                Ji && (t.removeClass(Wt + " " + Yt), e && !Ti && t.addClass(e.replace(/^|\s/g, " " + Vt + "--")))
            }

            function pi(t, e, i) {
                e && (gn.removeClass(ft), Ti = !1, h()), t && t !== Ti && (t.remove(), oi("unloadvideo")), i && (li(), di())
            }

            function fi(t) {
                gn.toggleClass(_t, t)
            }

            function hi(t) {
                if (!Nn.flow) {
                    var e = t ? t.pageX : hi.x,
                        i = e && !Me(Ce(e)) && a.click;
                    hi.p !== i && wn.toggleClass(Tt, i) && (hi.p = i, hi.x = e)
                }
            }

            function mi(t) {
                clearTimeout(mi.t), a.clicktransition && a.clicktransition !== a.transition ? setTimeout(function() {
                    var e = a.transition;
                    dn.setOptions({
                        transition: a.clicktransition
                    }), Qi = e, mi.t = setTimeout(function() {
                        dn.show(t)
                    }, 10)
                }, 0) : dn.show(t)
            }

            function _i(t, e) {
                var i = t.target,
                    o = n(i);
                o.hasClass(pe) ? dn.playVideo() : i === Pn ? dn.toggleFullScreen() : Ti ? i === Fn && pi(Ti, !0, !0) : e ? fi() : a.click && mi({
                    index: t.shiftKey || K(Ce(t._x)),
                    slow: t.altKey,
                    user: !0
                })
            }

            function gi(t, e) {
                Nn[t] = Rn[t] = e
            }

            function wi(t) {
                var e = n(this).data().eq;
                mi({
                    index: e,
                    slow: t.altKey,
                    user: !0,
                    coo: t._x - xn.offset().left
                })
            }

            function vi(t) {
                mi({
                    index: Cn.index(this) ? ">" : "<",
                    slow: t.altKey,
                    user: !0
                })
            }

            function bi(t) {
                J(t, function() {
                    setTimeout(function() {
                        U(wn)
                    }, 0), fi(!1)
                })
            }

            function yi() {
                if (p(), b(), !yi.i) {
                    yi.i = !0;
                    var t = a.startindex;
                    (t || a.hash && i.hash) && (Bi = B(t || i.hash.replace(/^#/, ""), Mi, 0 === dn.index || t, t)), Ln = Pi = Ai = Di = Bi = x(Bi) || 0
                }
                if (xi) {
                    if (ki()) return;
                    Ti && pi(Ti, !0), Ii = [], ei(Je), yi.ok = !0, dn.show({
                        index: Ln,
                        time: 0
                    }), dn.resize()
                } else dn.destroy()
            }

            function ki() {
                return !ki.f === Gi ? (ki.f = Gi, Ln = xi - 1 - Ln, dn.reverse(), !0) : void 0
            }

            function Ci() {
                Ci.ok || (Ci.ok = !0, oi("ready"))
            }
            Te = n("html"), Ee = n("body");
            var Mi, xi, $i, Si, Ti, Ei, Ii, Pi, Ai, Di, Fi, Oi, Li, Bi, ji, Ni, zi, Ri, Ui, Hi, qi, Vi, Wi, Yi, Qi, Ji, Gi, Ki, Zi, Xi, tn, en, nn, an, on, rn, sn, ln, dn = this,
                cn = n.now(),
                un = lt + cn,
                pn = t[0],
                fn = 1,
                hn = t.data(),
                mn = n("<style></style>"),
                _n = n(N(Gt)),
                gn = n(N(ct)),
                wn = n(N(Ct)).appendTo(gn),
                vn = (wn[0], n(N($t)).appendTo(wn)),
                bn = n(),
                yn = n(N(Et + " " + Pt + ge)),
                kn = n(N(Et + " " + At + ge)),
                Cn = yn.add(kn).appendTo(wn),
                Mn = n(N(Ft)),
                xn = n(N(Dt)).appendTo(Mn),
                $n = n(N(Ot)).appendTo(xn),
                Sn = n(),
                Tn = n(),
                En = (vn.data(), $n.data(), n(N(de)).appendTo($n)),
                In = n(N(Zt + ge)),
                Pn = In[0],
                An = n(N(pe)),
                Dn = n(N(fe)).appendTo(wn),
                Fn = Dn[0],
                On = n(N(_e)),
                Ln = !1,
                Bn = {},
                jn = {},
                Nn = {},
                zn = {},
                Rn = {},
                Un = {},
                Hn = {},
                qn = {},
                Vn = 0,
                Wn = [];
            gn[Je] = n(N(Mt)), gn[Ke] = n(N(jt + " " + zt + ge, N(le))), gn[Ge] = n(N(jt + " " + Nt + ge, N(se))), Hn[Je] = [], Hn[Ke] = [], Hn[Ge] = [], qn[Je] = {}, gn.addClass(Fe ? pt : ut).toggleClass(_t, !a.controlsonstart), hn.fotorama = this, dn.startAutoplay = function(t) {
                return dn.autoplay ? this : (nn = an = !1, v(t || a.autoplay), di(), this)
            }, dn.stopAutoplay = function() {
                return dn.autoplay && (nn = an = !0, di()), this
            }, dn.show = function(t) {
                var e;
                "object" != typeof t ? (e = t, t = {}) : e = t.index, e = ">" === e ? Ai + 1 : "<" === e ? Ai - 1 : "<<" === e ? 0 : ">>" === e ? xi - 1 : e, e = isNaN(e) ? B(e, Mi, !0) : e, e = "undefined" == typeof e ? Ln || 0 : e, dn.activeIndex = Ln = x(e), Fi = I(Ln), Oi = W(Ln), Li = C(Ln + (Gi ? -1 : 1)), Ii = [Ln, Fi, Oi], Ai = ji ? e : Ln;
                var i = Math.abs(Di - Ai),
                    n = k(t.time, function() {
                        return Math.min(Yi * (1 + (i - 1) / 12), 2 * Yi)
                    }),
                    o = t.overPos;
                t.slow && (n *= 10);
                var r = Ei;
                dn.activeFrame = Ei = Mi[Ln];
                var l = r === Ei && !t.user;
                pi(Ti, Ei.i !== Mi[C(Pi)].i), ue(Ii, "stage"), ve(je ? [Ai] : [Ai, I(Ai), W(Ai)]), gi("go", !0), l || oi("show", {
                    user: t.user,
                    time: n
                }), nn = !0;
                var d = dn.show.onEnd = function(e) {
                    if (!d.ok) {
                        if (d.ok = !0, e || ii(!0), l || oi("showend", {
                            user: t.user
                        }), !e && Qi && Qi !== a.transition) return dn.setOptions({
                            transition: Qi
                        }), void(Qi = !1);
                        qt(), Rt(Ii, "stage"), gi("go", !1), De(), hi(), li(), di()
                    }
                };
                if (qi) {
                    var c = Ei[Je],
                        u = Ln !== Di ? Mi[Di][Je] : null;
                    tt(c, u, bn, {
                        time: n,
                        method: a.transition,
                        onEnd: d
                    }, Wn)
                } else X(vn, {
                    pos: -g(Ai, jn.w, a.margin, Pi),
                    overPos: o,
                    time: n,
                    onEnd: d
                });
                if (Ae(), Ni) {
                    Ve();
                    var p = M(Ln + s(Ai - Di, -1, 1));
                    He({
                        time: n,
                        coo: p !== Ln && t.coo,
                        guessIndex: "undefined" != typeof t.coo ? p : Ln,
                        keep: l
                    }), zi && ze(n)
                }
                return en = "undefined" != typeof Di && Di !== Ln, Di = Ln, a.hash && en && !dn.eq && D(Ei.id || Ln + 1), this
            }, dn.requestFullScreen = function() {
                return Ui && !dn.fullScreen && (Xi = Ie.scrollTop(), tn = Ie.scrollLeft(), U(Ie), gi("x", !0), on = n.extend({}, jn), t.addClass(Kt).appendTo(Ee.addClass(dt)), Te.addClass(dt), pi(Ti, !0, !0), dn.fullScreen = !0, Hi && ye.request(pn), dn.resize(), Rt(Ii, "stage"), qt(), oi("fullscreenenter")), this
            }, dn.cancelFullScreen = function() {
                return Hi && ye.is() ? ye.cancel(e) : ci(), this
            }, dn.toggleFullScreen = function() {
                return dn[(dn.fullScreen ? "cancel" : "request") + "FullScreen"]()
            }, V(e, ye.event, function() {
                !Mi || ye.is() || Ti || ci()
            }), dn.resize = function(t) {
                if (!Mi) return this;
                var e = arguments[1] || 0,
                    i = arguments[2];
                ai(dn.fullScreen ? {
                    width: "100%",
                    maxwidth: null,
                    minwidth: null,
                    height: "100%",
                    maxheight: null,
                    minheight: null
                } : H(t), [jn, i || dn.fullScreen || a]);
                var n = jn.width,
                    o = jn.height,
                    r = jn.ratio,
                    l = Ie.height() - (Ni ? xn.height() : 0);
                return _(n) && (gn.addClass(bt).css({
                    width: n,
                    minWidth: jn.minwidth || 0,
                    maxWidth: jn.maxwidth || ti
                }), n = jn.W = jn.w = gn.width(), jn.nw = Ni && m(a.navwidth, n) || n, a.glimpse && (jn.w -= Math.round(2 * (m(a.glimpse, n) || 0))), vn.css({
                    width: jn.w,
                    marginLeft: (jn.W - jn.w) / 2
                }), o = m(o, l), o = o || r && n / r, o && (n = Math.round(n), o = jn.h = Math.round(s(o, m(jn.minheight, l), m(jn.maxheight, l))), wn.stop().animate({
                    width: n,
                    height: o
                }, e, function() {
                    gn.removeClass(bt)
                }), ii(), Ni && (xn.stop().animate({
                    width: jn.nw
                }, e), He({
                    guessIndex: Ln,
                    time: e,
                    keep: !0
                }), zi && ke.nav && ze(e)), Zi = i || !0, Ci())), Vn = wn.offset().left, this
            }, dn.setOptions = function(t) {
                return n.extend(a, t), yi(), this
            }, dn.shuffle = function() {
                return Mi && z(Mi) && yi(), this
            }, dn.destroy = function() {
                return dn.cancelFullScreen(), dn.stopAutoplay(), Mi = dn.data = null, d(), Ii = [], ei(Je), yi.ok = !1, this
            }, dn.playVideo = function() {
                var t = Ei,
                    e = t.video,
                    i = Ln;
                return "object" == typeof e && t.videoReady && (Hi && dn.fullScreen && dn.cancelFullScreen(), A(function() {
                    return !ye.is() || i !== Ln
                }, function() {
                    i === Ln && (t.$video = t.$video || n(n.Fotorama.jst.video(e)), t.$video.appendTo(t[Je]), gn.addClass(ft), Ti = t.$video, h(), Cn.blur(), In.blur(), oi("loadvideo"))
                })), this
            }, dn.stopVideo = function() {
                return pi(Ti, !0, !0), this
            }, wn.on("mousemove", hi), Nn = nt(vn, {
                onStart: ri,
                onMove: function(t, e) {
                    ui(wn, e.edge)
                },
                onTouchEnd: si,
                onEnd: function(t) {
                    ui(wn);
                    var e = (Ne && !sn || t.touch) && a.arrows && "always" !== a.arrows;
                    if (t.moved || e && t.pos !== t.newPos && !t.control) {
                        var i = w(t.newPos, jn.w, a.margin, Pi);
                        dn.show({
                            index: i,
                            time: qi ? Yi : t.time,
                            overPos: t.overPos,
                            user: !0
                        })
                    } else t.aborted || t.control || _i(t.startEvent, e)
                },
                timeLow: 1,
                timeHigh: 1,
                friction: 2,
                select: "." + Jt + ", ." + Jt + " *",
                $wrap: wn
            }), Rn = nt($n, {
                onStart: ri,
                onMove: function(t, e) {
                    ui(xn, e.edge)
                },
                onTouchEnd: si,
                onEnd: function(t) {
                    function e() {
                        He.l = t.newPos, li(), di(), be(t.newPos, !0)
                    }
                    if (t.moved) t.pos !== t.newPos ? (nn = !0, X($n, {
                        time: t.time,
                        pos: t.newPos,
                        overPos: t.overPos,
                        onEnd: e
                    }), be(t.newPos), Ji && ui(xn, L(t.newPos, Rn.min, Rn.max))) : e();
                    else {
                        var i = t.$target.closest("." + jt, $n)[0];
                        i && wi.call(i, t.startEvent)
                    }
                },
                timeLow: .5,
                timeHigh: 2,
                friction: 5,
                $wrap: xn
            }), zn = at(wn, {
                shift: !0,
                onEnd: function(t, e) {
                    ri(), si(), dn.show({
                        index: e,
                        slow: t.altKey
                    })
                }
            }), Un = at(xn, {
                onEnd: function(t, e) {
                    ri(), si();
                    var i = y($n) + .25 * e;
                    $n.css(c(s(i, Rn.min, Rn.max))), Ji && ui(xn, L(i, Rn.min, Rn.max)), Un.prevent = {
                        "<": i >= Rn.max,
                        ">": i <= Rn.min
                    }, clearTimeout(Un.t), Un.t = setTimeout(function() {
                        He.l = i, be(i, !0)
                    }, Re), be(i)
                }
            }), gn.hover(function() {
                setTimeout(function() {
                    rn || fi(!(sn = !0))
                }, 0)
            }, function() {
                sn && fi(!(sn = !1))
            }), j(Cn, function(t) {
                G(t), vi.call(this, t)
            }, {
                onStart: function() {
                    ri(), Nn.control = !0
                },
                onTouchEnd: si
            }), Cn.each(function() {
                Q(this, function(t) {
                    vi.call(this, t)
                }), bi(this)
            }), Q(Pn, dn.toggleFullScreen), bi(Pn), n.each("load push pop shift unshift reverse sort splice".split(" "), function(t, e) {
                dn[e] = function() {
                    return Mi = Mi || [], "load" !== e ? Array.prototype[e].apply(Mi, arguments) : arguments[0] && "object" == typeof arguments[0] && arguments[0].length && (Mi = R(arguments[0])), yi(), dn
                }
            }), yi()
        }, n.fn.fotorama = function(e) {
            return this.each(function() {
                var i = this,
                    a = n(this),
                    o = a.data(),
                    r = o.fotorama;
                r ? r.setOptions(e, !0) : A(function() {
                    return !I(i)
                }, function() {
                    o.urtext = a.html(), new n.Fotorama(a, n.extend({}, ii, t.fotoramaDefaults, e, o))
                })
            })
        }, n.Fotorama.instances = [], n.Fotorama.cache = {}, n.Fotorama.measures = {}, n = n || {}, n.Fotorama = n.Fotorama || {}, n.Fotorama.jst = n.Fotorama.jst || {}, n.Fotorama.jst.style = function(t) {
            var e, i = "";
            return ve.escape, i += ".fotorama" + (null == (e = t.s) ? "" : e) + " .fotorama__nav--thumbs .fotorama__nav__frame{\npadding:" + (null == (e = t.m) ? "" : e) + "px;\nheight:" + (null == (e = t.h) ? "" : e) + "px}\n.fotorama" + (null == (e = t.s) ? "" : e) + " .fotorama__thumb-border{\nheight:" + (null == (e = t.h - t.b * (t.q ? 0 : 2)) ? "" : e) + "px;\nborder-width:" + (null == (e = t.b) ? "" : e) + "px;\nmargin-top:" + (null == (e = t.m) ? "" : e) + "px}"
        }, n.Fotorama.jst.video = function(t) {
            function e() {
                i += n.call(arguments, "")
            }
            var i = "",
                n = (ve.escape, Array.prototype.join);
            return i += '<div class="fotorama__video"><iframe src="', e(("youtube" == t.type ? t.p + "youtube.com/embed/" + t.id + "?autoplay=1" : "vimeo" == t.type ? t.p + "player.vimeo.com/video/" + t.id + "?autoplay=1&badge=0" : t.id) + (t.s && "custom" != t.type ? "&" + t.s : "")), i += '" frameborder="0" allowfullscreen></iframe></div>\n'
        }, n(function() {
            n("." + lt + ':not([data-auto="false"])').fotorama()
        })
    }(window, document, location, "undefined" != typeof jQuery && jQuery),
    function() {
        function t() {
            this.location = "", this.sitesAjax = null, this._used_domains = [], this.hasTariff2020 = !1, this.tarifMaxSites = 0, this.tarifMaxPages = 0, this.tarifMaxDomains = 0, this.countDomains = 0, this.tarifCurSites = 0, this.sitePrice = 0, this.userSiteCount = 0, this.draggingSiteData = {}, this.hasTariffDaily = !1, this.urlToTariffs = "profile/tarifs", this.in_preview = !1, this.httpsIsRequired = !1, this.max_file_fields = null, this.siteIsEnabled = null, this.is_ready = !1, this.isEditor = i.hasClass("body_pages_edit")
        }

        function e() {
            this.ajaxHandlers = {}, this.flagIsReady = !1, this.isReady = function() {
                return this.flagIsReady
            };
            var t = this;
            this.init = function(e) {
                t.id = e.form_id, t.el = document.getElementById(t.id), t.$el = $(t.el), t.initial_screen_id = $(".initial-screen").attr("id"), t.current_screen_id = t.initial_screen_id, t.previous_screen_id = t.initial_screen_id, t.$tpl_field = t.$el.find("#" + t.id + "__tpl"), t.$tpl_preview_field = t.$el.find("#tpl-id-in-preview"), t.$empty_tpl_field = t.$el.find("#" + t.id + "__empty_tpl"), t.$phone_field = t.$el.find("#" + t.id + "__phone"), t.$phone_output_error = t.$el.find("#sp6_create_site_output_phone_error"), t.$phone_continue_btn = t.$el.find(".create-phone-next-btn"), t.$name_field = t.$el.find("#" + t.id + "__name"), t.$phone_field.on("change", function() {
                    t.$phone_output_error.empty(), t.validatePhone()
                }), t.$el.on("submit", function(e) {
                    if (!t._is_allow_submit) return e.preventDefault(), !1
                }), t.$el.on("click", ".sp6-go-to-step", function() {
                    return t.nextStepClick(this), !1
                }), this.flagIsReady = !0, FE.runAndClr("create_page_form/ready")
            }, this.nextStepClick = function(e) {
                var i, n = $(e),
                    a = n.attr("data-actions").toString().split(",");
                for (i = 0; i < a.length; i++) switch (a[i]) {
                    case "ajax":
                        var o = n.attr("data-ajax-handler");
                        t.runAjaxHandler(o);
                        break;
                    case "showPreviousScreen":
                        t.previous_screen_id != t.current_screen_id && t.showScreen(t.previous_screen_id);
                        break;
                    case "showScreen":
                        var r = n.attr("data-carrot-event");
                        if (r && r.length > 0 && analyticSendEvent(r), !1 === t.showScreen(n.attr("data-screen-id"))) return !1;
                        break;
                    case "setCategoryFilter":
                        if (0 == t.setCategoryFilter(n)) return !1;
                        break;
                    case "setTpl":
                        var s = n.attr("data-site");
                        if (0 == t.setTpl(s)) return !1;
                        tracerSendEvent("chose site template", {
                            "template id": s,
                            first: 0 == sitesMan.userSiteCount
                        });
                        break;
                    case "setEmptyTpl":
                        "sp6_create_site_generator" !== n.attr("data-screen-id") && tracerSendEvent("creating site screen", {
                            type: "empty"
                        }), t.$empty_tpl_field.val(0);
                        break;
                    case "setNeedTpl":
                        t.$empty_tpl_field.val(1);
                        break;
                    case "back":
                        t.fixBack();
                        break;
                    case "backAfterCreateOnlyEmptySiteAfterSignUp":
                        1 == $.cookie("is_after_signup") && ($.removeCookie("is_after_signup", {
                            path: "/"
                        }), t.previous_screen_id = "sp6_create_site_choose_tpl_category", t.current_screen_id = "sp6_create_site_input_phone"), t.previous_screen_id != t.current_screen_id && t.showScreen(t.previous_screen_id);
                        break;
                    case "clearPhone":
                        t.$phone_field.val("");
                        break;
                    case "submit":
                        switch (t.current_screen_id) {
                            case "sp6_create_site_input_phone":
                                tracerSendEvent("creating site: typed phone", {
                                    first: 0 == sitesMan.userSiteCount,
                                    typed: $("#frm2__phone").val().trim().length > 10 ? 1 : 0
                                })
                        }
                        if ("sp6_create_site_generator" == t.current_screen_id) GenSiteTpl.redirectToCreateSite();
                        else if ("sp6_create_site_generator" == t.previous_screen_id) {
                            if (!t.validatePhone()) return !1;
                            GenSiteTpl.redirectToCreateSite()
                        } else t.submit(n);
                        return n = null, !1;
                    case "loadTpls":
                        t.loadVisibleTpls(n);
                        break;
                    case "loadGenerator":
                        var l = $("#generator-content");
                        "0" == l.attr("data-ready") && $.ajax({
                            url: window.baseUrl + "sites/generator/action:get_html",
                            type: "POST",
                            cache: !1,
                            dataType: "json",
                            timeout: 4e4,
                            success: function(t) {
                                t.res && 1 == t.res && (l.html(t.html).attr("data-ready", "1"), l = null)
                            }
                        })
                }
                n = null
            }, this.fixBack = function() {
                switch (!0) {
                    case "block" == $("#sp6_create_site_input_phone").css("display"):
                        t.submit($("#sp6_create_site_input_phone .btn-1.sp6-go-to-step"))
                }
            }, this.setTpl = function(e) {
                return !!e && (t.$tpl_field.val(e), t.$empty_tpl_field.val(1), !0)
            }, this.validateName = function() {
                return !0
            }, this.validatePhone = function() {
                var e = phoneHelper.formatPhoneToNumeric(t.$phone_field.val());
                if (0 === e.length) return !0;
                var i = phoneHelper.validatePhone(e);
                return !(i.length > 0) || (t.$phone_output_error.html('<div class="ui_error">' + i + "</div>"), !1)
            }, this.submit = function(e) {
                return !e.hasClass("disabled") && (!!t.validateName() && (!!t.validatePhone() && (e.addClass("disabled"), t.$tpl_preview_field.remove(), t._is_allow_submit = !0, lockScreen("Создание сайта...", {
                    show_animation: !0,
                    v3: !0
                }), "1" == t.$empty_tpl_field.val() && (userHasTag("stop-73") || !userHasTag("LPDEV-73-b") && !userHasTag("LPDEV-73-c") || sitesMan.createSiteInHybrid() && $(t.el).attr("target", "converting-iframe")), t.el.submit(), !1)))
            }, this.setCategoryFilter = function(e) {
                var n = e.attr("data-class"),
                    a = n.match(/[\d]*$/),
                    o = sitesMan.$tplsList.find(".not-loaded." + n);
                t.$el.find(".btn-category.selected").removeClass("selected"), sitesMan.$tplsList.removeClass(), sitesMan.$tplsList.addClass("clearfix show_" + n), e.addClass("selected");
                for (var r = 9, s = 0; s < r && o[s]; s++) sitesMan.loadSiteTplImage(o[s]);
                return a.length && a[0].length && tracerSendEvent("chose site templates category", {
                    "category id": a[0],
                    first: 0 == sitesMan.userSiteCount
                }), i.scrollTop(0), !0
            }, this.showScreen = function(e) {
                if (!e) return !1;
                var i = !1;
                switch (e) {
                    case "sp6_create_site_input_phone":
                        window.phoneMask && (i = !0)
                }
                return t.$el.find("#" + t.current_screen_id).fadeOut(100, function() {
                    t.$el.find("#" + e).fadeIn(100, function() {
                        switch (t.previous_screen_id = t.current_screen_id, t.current_screen_id = e, e) {
                            case "sp6_create_site_generator":
                                tracerSendEvent("creating site screen", {
                                    type: "generator"
                                });
                                break;
                            case "sp6_create_site_input_phone":
                                if (i) {
                                    window.phoneMask.init();
                                    var n = window.phoneMask.getPhoneCountry();
                                    n ? window.phoneMask.applyMask(n) : window.phoneMask.applyMask("rus")
                                } else t.$phone_field.focus();
                                tracerSendEvent("creating site: phone screen");
                                break;
                            case "sp6_create_site_choose_tpl2":
                                if ("sp6_create_site_choose_tpl_category" === t.previous_screen_id) switch (window.defaultTplCategory) {
                                    case "cat_8":
                                        tracerSendEvent("creating site screen", {
                                            type: "templates",
                                            choice: "market"
                                        });
                                        break;
                                    case "cat_24":
                                        tracerSendEvent("creating site screen", {
                                            type: "templates",
                                            choice: "quiz"
                                        });
                                        break;
                                    default:
                                        tracerSendEvent("creating site screen", {
                                            type: "templates",
                                            choice: "landing"
                                        })
                                } else tracerSendEvent("creating site screen", {
                                    type: "templates",
                                    version: 1
                                });
                                window.initNewTemplatesApp()
                        }
                    })
                }), !0
            }, this.loadVisibleTpls = function(t) {
                var e = $(".tpls-list-to-load"),
                    i = t.attr("data-cat-id");
                e.attr("class", e.attr("class").replace(/show_cat_(all|[0-9]+)/g, "").replace(/\s+/g, " ")), e.addClass("show_cat_" + i);
                var n = e.find(".site-preview-template.not-loaded.cat_" + i);
                n.length > 0 && ImgListLoader.create(n, {
                    onload_callback: function() {
                        var t = $(this);
                        t.closest(".site-preview-template").removeClass("not-loaded")
                    }
                }).run()
            }, this.setAjaxHandler = function(t, e) {
                this.ajaxHandlers[t] = e
            }, this.runAjaxHandler = function(t) {
                if (!this.ajaxHandlers[t]) throw new Error("Не существующее имя обработчика [#3557]");
                this.ajaxHandlers[t]()
            }
        }
        var i = $("body");
        t.prototype.setUrlToTariffs = function(t) {
            this.urlToTariffs = t.replace(window.baseUrl, "")
        }, t.prototype.ready = function() {
            consoleDbg("INIT: sites man"), this.initEditSiteName(), this.initQuiz(null, !0), this.enableQuizNav(), this.initIphone(), this.initSiteCreationTypeImg(), this.is_ready = !0, FE.runAndClr("sitesMan/ready")
        }, t.prototype.isReady = function() {
            return this.is_ready
        }, t.prototype.initStatChart = function(t, e, i) {
            $("#" + t).highcharts({
                chart: {
                    type: "column",
                    renderTo: "container",
                    showAxes: !0,
                    style: {
                        fontSize: "16"
                    },
                    spacingTop: 0,
                    spacingRight: 0,
                    spacingBottom: 10,
                    spacingLeft: 0,
                    height: "250",
                    width: "668"
                },
                title: {
                    text: "Посещаемость сайта"
                },
                credits: {
                    enabled: !1
                },
                xAxis: {
                    categories: e,
                    gridLineWidth: 1,
                    gridLineColor: "#EDEDED",
                    tickmarkPlacement: "on",
                    min: 0,
                    max: 30,
                    labels: {
                        step: 2
                    }
                },
                scrollbar: {
                    enabled: !0
                },
                yAxis: {
                    title: {
                        text: "Посетители",
                        style: {
                            fontFamily: "Verdana",
                            color: "#CCC",
                            fontWeight: "normal"
                        }
                    },
                    labels: {
                        step: 1
                    },
                    gridLineColor: "#EDEDED"
                },
                series: [{
                    name: "Посетителей",
                    data: i
                }],
                tooltip: {
                    headerFormat: '<span style="font-size: 14px">{point.key}</span><br/>',
                    pointFormat: '<span style="font-size: 14px">{series.name} <b>{point.y}</b></span>',
                    useHTML: !0
                },
                plotOptions: {
                    column: {
                        animation: !1
                    }
                },
                legend: {
                    enabled: !1
                },
                colors: ["#C3B0FA"]
            })
        }, t.prototype.initDatePiker = function(t) {
            "string" == typeof t && (t = $(t)), t.datepicker({
                showAnim: "show",
                prevText: "Предыдущий месяц",
                nextText: "Следующий месяц",
                monthNames: ["Январь", "Февраль", "Март", "Апрель", "Май", "Июнь", "Июль", "Август", "Сентябрь", "Октябрь", "Ноябрь", "Декабрь"],
                dayNamesMin: ["Вс", "Пн", "Вт", "Ср", "Чт", "Пт", "Сб"],
                dateFormat: "dd.mm.yy",
                firstDay: 1,
                showButtonPanel: !0,
                currentText: "Сегодня",
                closeText: "Закрыть",
                constrainInput: !0,
                beforeShow: function(t, e) {
                    $(t).attr("disabled", "disabled").blur()
                },
                onClose: function(t, e) {
                    $(this).removeAttr("disabled")
                }
            })
        }, t.prototype.sendDeclarationForm = function(t) {
            var e = $(t),
                i = e.closest("form"),
                n = i.attr("id"),
                a = {},
                o = {};
            a.sum = i.find('input[name="' + n + '[sum]"]'), a.d_start = i.find('input[name="' + n + '[date_start]"]'), a.d_end = i.find('input[name="' + n + '[date_end]"]'), a.check = i.find('input[name="' + n + '[avg_check]"]'), a.conv = i.find('input[name="' + n + '[conversion]"]');
            for (var r in a)
                if ("d_start" == r || "d_end" == r) {
                    var s = a[r].val().match(/^(\d{2})\.(\d{2})\.(\d{4})$/);
                    if (!s) return alert("Необходимо ввести правильную дату"), void a[r].focus();
                    o[r] = parseInt(s[3] + s[2] + s[1])
                } else if (o[r] = a[r].val(), !a[r].val().match(/^\d+$/)) return alert("Необходимо ввести правильное число"), void a[r].focus();
            return o.d_start > o.d_end ? void alert("Дата начала должна быть раньше даты окончания") : void $.ajax({
                url: window.baseUrl + "sites/ajax/frm:frmdeclaration/id:" + n,
                type: "POST",
                cache: !1,
                dataType: "json",
                data: i.serialize(),
                timeout: 4e4
            })
        }, t.prototype.changeDeclaration = function(t) {
            var e = $(t).closest(".declaration_view");
            e.hide(), e.prev(".declaration_edit_form").show()
        }, t.prototype.cancelDeclarationEditting = function(t) {
            var e = $(t).closest(".declaration_edit_form");
            e.hide(), e.next(".declaration_view").show()
        }, t.prototype.createSiteChooseTpl = function(t) {
            var e = $(t);
            e.closest("#tpls_list").children(".active").removeClass("active"), e.closest(".one_tpl").addClass("active"), e = null
        }, t.prototype.createInit = function() {
            $("#frmonesite__empty_tpl input[type=radio]").click(function() {
                var t = $("#tpls_list"),
                    e = $("#sites_create_blk"),
                    i = $("#td_before_btn"),
                    n = t.find(".one_tpl");
                e.is(":animated") || (1 == parseInt($(this).val()) ? 803 > e.width() && !t.is(":visible") && (n.hide(), t.show(), e.animate({
                    width: 803
                }, 600, function() {
                    $("#tpls_list .one_tpl").show()
                }), i.animate({
                    width: 0
                }, 600)) : t.is(":visible") && (n.hide(), t.hide(), e.animate({
                    width: 700
                }, 600), i.animate({
                    width: 60
                }, 600))), t = e = i = n = null
            }), helpSlider("#tplslide_helper")
        }, t.prototype.createSiteCheckboxEmptyClick = function() {
            var t = $("#frmonesite__empty_tpl input[type=radio]:checked"),
                e = $("#sites_create_blk"),
                i = $("#td_before_btn");
            1 == t.val() ? (t.show(), e.animate({
                width: 803
            }, 600), i.animate({
                width: 0
            }, 600)) : (t.hide(), e.animate({
                width: 700
            }, 600), i.animate({
                width: 60
            }, 600)), t = e = i = null
        }, t.prototype.initNewList = function() {
            sitesMan.initSiteListSortable(), sitesMan.initSitesWithAccess(), sitesMan.initSiteListOld()
        }, t.prototype.initSiteListSortable = function() {
            $(".tbody_sites").length > 0 && $(".tbody_sites").sortable({
                connectWith: ".tbody_sites",
                handle: ".site_lbl",
                placeholder: "sort_ph",
                opacity: 1,
                cursor: "move",
                tolerance: "pointer",
                dropOnEmpty: !0,
                start: function(t, e) {
                    $(this).sortable("refreshPositions"), e.placeholder.addClass("tr_site fnt2").html('<td colspan="6"><div>ПОМЕСТИТЬ САЙТ ЗДЕСЬ</div></td>'), e.helper.css({
                        width: "auto",
                        height: "auto"
                    }), sitesMan.draggingSiteData[e.item.attr("id-site")] = {
                        parent: e.item.parent(),
                        prev: e.item.prev(),
                        item: e.item
                    }, sitesMan._used_domains = sitesMan.getUsedDomains(), projectManager.startDragSite()
                },
                stop: function(t, e) {
                    if (projectManager.stopDragSite(), null !== sitesMan.sitesAjax) return jAlert("Подождите, когда завершится предыдущая команда перемещения."), void sitesMan.moveSiteBack(e.item.attr("id-site"));
                    var i = e.item.closest(".iblk").attr("id");
                    if (sitesMan.hasTariff2020 && sitesMan.tarifMaxSites > 0 && "iblk-monthly" == i && -1 == $.inArray(e.item.attr("data-root_domain"), sitesMan._used_domains) && 0 > $(e.item).find(".lnk_site").text().indexOf("/") && sitesMan.getMonthlySitesCount() > sitesMan.tarifMaxSites) sitesMan.moveSiteBack(e.item.attr("id-site")), sitesMan.alertSitesLimitIsFull(sitesMan.tarifMaxSites);
                    else if (sitesMan.tarifMaxPages > 0 && "iblk-monthly" == i && sitesMan.getMonthlyPagesCount() > sitesMan.tarifMaxPages) sitesMan.moveSiteBack(e.item.attr("id-site")), sitesMan.alertTarifIsFull(sitesMan.tarifMaxPages);
                    else if (sitesMan.tarifMaxDomains > 0 && e.item.attr("data-root_domain") && -1 == $.inArray(e.item.attr("data-root_domain"), sitesMan._used_domains) && "iblk-monthly" == i && sitesMan.getActiveDomainsCount() > sitesMan.tarifMaxDomains) sitesMan.moveSiteBack(e.item.attr("id-site")), sitesMan.alertDomainsLimitIsFull(sitesMan.tarifMaxDomains);
                    else if ("iblk-daily" == i) {
                        var n = parseInt(e.item.attr("last-pay"));
                        isNaN(n) || n < sitesMan.curCronDate ? sitesMan.alertDailySiteNeedPayment(function() {
                            sitesMan.updateSiteSwitch(e.item, i), sitesMan.recountSitesPos()
                        }, function() {
                            sitesMan.moveSiteBack(e.item.attr("id-site"))
                        }) : (sitesMan.updateSiteSwitch(e.item, i), sitesMan.recountSitesPos())
                    } else sitesMan.updateSiteSwitch(e.item, i), sitesMan.recountSitesPos();
                    i = null
                },
                over: function(t, e) {
                    sitesMan.showHideEmptyBlocks(), sitesMan.recountDailyExpense()
                }
            })
        }, t.prototype.initSitesWithAccess = function() {
            var t = $(".tbody_sites_draggable");
            t.length && t.sortable({
                connectWith: ".user-projects__droppable",
                handle: ".site_lbl",
                placeholder: "sort_ph",
                opacity: 1,
                cursor: "move",
                tolerance: "pointer",
                dropOnEmpty: !0,
                start: function(t, e) {
                    e.placeholder.addClass("tr_site fnt2").html('<td colspan="5"><div>ПОМЕСТИТЬ САЙТ ЗДЕСЬ</div></td>'), e.helper.css({
                        width: "auto",
                        height: "auto"
                    }), projectManager.startDragSite()
                },
                stop: function(t, e) {
                    projectManager.stopDragSite()
                },
                over: function(t, e) {
                    sitesMan.showHideEmptyBlocks()
                }
            }), "undefined" != typeof access && (access.onAddAccess = function() {
                var t = access.accessData.site_id,
                    e = $(".access-site[site_id=" + t + "]");
                if (e.hasClass("hidden")) e.removeClass("hidden").prev().addClass("hidden"), e.children(".count-access").html("1");
                else {
                    var i = parseInt(e.children(".count-access").html());
                    e.children(".count-access").html(i + 1)
                }
            }, access.onRemoveAccess = function(t) {
                var e = $(".access-site[site_id=" + t + "]");
                if (e.hasClass("hidden"));
                else {
                    var i = parseInt(e.children(".count-access").text().trim());
                    isNaN(i) || i - 1 <= 0 ? (e.addClass("hidden").prev().removeClass("hidden"), e.children(".count-access").text(" ")) : e.children(".count-access").text(i - 1)
                }
            }), $(document).on("click", ".info-new-access", function(t) {
                t.preventDefault(), t.stopPropagation();
                var e = $(this),
                    i = e.children(".popup_info"),
                    n = function(t) {
                        $(".popup_info").hide(), $(document).unbind("click", n)
                    };
                "block" == i.css("display") ? $(document).unbind("click", n) : ($(".popup_info").hide(), i.show(), $(document).bind("click", n))
            }), $(document).on("click", ".add-new-access", function() {
                access.data.site_id = $(this).attr("site_id"), access.addEmailAccess()
            }), $(document).on("click", ".access-site", function() {
                access.data.site_id = $(this).attr("site_id"), access.showAccessList()
            }), access.bindAccessUserItemClickForSpa()
        }, t.prototype.initSiteListOld = function() {
            $(document).on("click", ".vl-item", function(t) {
                var e = 0;
                $("input.vl-item").each(function() {
                    $(this).prop("checked") && e++
                }), e > 1 ? $("#vl-btn-start").removeClass("disabled") : $("#vl-btn-start").addClass("disabled")
            }), $("#vl-btn-start").unbind("click").bind("click", function() {
                var t = [];
                $("input.vl-item").each(function() {
                    $(this).prop("checked") && t.push($(this).attr("id-site"))
                }), t.length > 1 && (lockScreen(), $.ajax({
                    url: window.baseUrl + window.siteId + "/sites/abtest",
                    method: "post",
                    data: {
                        list: t,
                        do: "set_list"
                    },
                    success: function(t) {
                        if (1 == t) {
                            unlockScreen(), $("#Start_test").modal("hide");
                            var e = $("#ABTestIsStarted");
                            e.off("hidden.bs.modal").on("hidden.bs.modal", function() {
                                lockScreen("Перезагружаем раздел", {
                                    show_animation: !0
                                }), location.reload()
                            }), e.modal("show")
                        } else console.log(t)
                    }
                }))
            }), $("#vl-btn-stop").unbind("click").bind("click", function() {
                lockScreen(), $.ajax({
                    url: window.baseUrl + window.siteId + "/sites/abtest",
                    method: "post",
                    data: {
                        do: "stop"
                    },
                    success: function(t) {
                        1 == t ? location.reload() : console.log(t)
                    }
                })
            }), $(".disable-variant").unbind("click").bind("click", function() {
                lockScreen(), $.ajax({
                    url: window.baseUrl + window.siteId + "/sites/abtest",
                    method: "post",
                    data: {
                        variant_id: $(this).closest(".abtest_item").attr("variant-id"),
                        do: "disable_variant"
                    },
                    success: function(t) {
                        1 == t ? location.reload() : console.log(t)
                    }
                })
            }), $(".enable-variant").unbind("click").bind("click", function() {
                lockScreen(), $.ajax({
                    url: window.baseUrl + window.siteId + "/sites/abtest",
                    method: "post",
                    data: {
                        variant_id: $(this).closest(".abtest_item").attr("variant-id"),
                        do: "enable_variant"
                    },
                    success: function(t) {
                        1 == t ? location.reload() : console.log(t)
                    }
                })
            }), $(".delete-variant").unbind("click").bind("click", function() {
                $("#vl-btn-delete").attr("variant-id", $(this).closest(".abtest_item").attr("variant-id")), $("#delete_variant").modal("show")
            }), $("#vl-btn-delete").unbind("click").bind("click", function() {
                lockScreen();
                var t = $(this).attr("variant-id");
                return $.ajax({
                    url: window.baseUrl + window.siteId + "/sites/abtest",
                    method: "post",
                    data: {
                        variant_id: t,
                        do: "delete_variant"
                    },
                    success: function(e) {
                        1 == e ? sitesMan.afterVariantDelete(t) : console.log(e)
                    }
                }), !1
            }), $(".set-base-variant").unbind("click").bind("click", function() {
                lockScreen(), $.ajax({
                    url: window.baseUrl + window.siteId + "/sites/abtest",
                    method: "post",
                    data: {
                        variant_id: $(this).closest(".abtest_item").attr("variant-id"),
                        do: "set_base_variant"
                    },
                    success: function(t) {
                        1 == t ? location.reload() : console.log(t)
                    }
                })
            }), this.curCronDate = null, this.dailyExpenseBlock = $("#daily_expense"), this.dailySitesList = $("#iblk-daily .tbody_sites:first"), this.monthlySitesList = $("#iblk-monthly .tbody_sites:first")
        }, t.prototype.createEmptyVariant = function(t) {
            return lockScreen("Создаем пустой вариант", {
                show_animation: !0,
                show_btn_close: !1
            }), window.location.href = window.baseUrl + siteId + "/sites/create_empty_variant/variant_for:" + t, !1
        }, t.prototype.cloneVariant = function(t) {
            return lockScreen("Копируем вариант", {
                show_animation: !0,
                show_btn_close: !1
            }), window.location.href = window.baseUrl + t + "/sites/clone_site/variant_for:" + siteId + "/redirect_to:tab_abtest", !1
        }, t.prototype.cloneSiteFromVariant = function(t) {
            return lockScreen("Копируем сайт", {
                show_animation: !0,
                show_btn_close: !1
            }), window.location.href = window.baseUrl + t + "/sites/clone_site/variant_for:" + siteId + "/redirect_to:tab_abtest/set_variant_for:" + siteId, !1
        }, t.prototype.initEditSiteName = function() {
            $(document).on("click", ".tr_site .site_name .site_name_h div.edit_name, .abtest_item .abtest_name .site_name_h div.edit_name", function(t) {
                t.preventDefault(), t.stopPropagation();
                var e = $(this).closest(".site_name"),
                    i = e.find(".site_name_edit .site_name_inp");
                window.siteList || i.val($(this).closest(".site_name_h").children("span").text().trim()), e.addClass("edit-mode"), i.focus(), e = i = null
            }), $(document).on("click", ".tr_site .site_name .site_name_save", function(t) {
                var e = $(this).closest(".site_name"),
                    i = e.find(".site_name_edit .site_name_inp"),
                    n = i.val().trim();
                i.val(n), n.length <= 200 && n.length > 0 ? (ajaxLoad({
                    url: i.attr("site_id") + "/sites/ajax/frm:frmsitename",
                    data: {
                        frmsitename: {
                            name: n
                        },
                        from_list: 1
                    }
                }), window.siteList || e.find(".site_name_h span").text(n), e.removeClass("edit-mode")) : alert("Рабочее имя сайта не должно превышать 200 символов и обязательно к заполнению")
            }), $(document).on("click", ".abtest_item .abtest_name .site_name_save", function(t) {
                var e = $(this).closest(".site_name"),
                    i = e.find(".site_name_edit .site_name_inp"),
                    n = $(this).closest(".abtest_item").attr("variant-id"),
                    a = i.val().trim();
                i.val(a), a.length <= 200 && a.length > 0 ? (ajaxLoad({
                    url: i.attr("site_id") + "/sites/ajax/frm:frmvariantname",
                    data: {
                        frmvariantname: {
                            name: a,
                            variant_id: n
                        },
                        from_list: 1
                    }
                }), e.find(".site_name_h span").text(a), e.removeClass("edit-mode")) : alert("Рабочее имя сайта не должно превышать 200 символов и обязательно к заполнению")
            }), $(document).on("click", ".tr_site .site_name .site_name_rollback, .abtest_item .abtest_name .site_name_rollback", function(t) {
                $(this).closest(".site_name").removeClass("edit-mode")
            })
        }, t.prototype.alertDailySiteNeedPayment = function(t, e) {
            jAlert('<div class="title_for_message">Этот сайт еще не публиковался сегодня</div><div class="text_for_message">За него сразу будет списана оплата за 1 день</div>', {
                width: 600,
                btnCls: "btn-success",
                btnWidth: 160,
                okText: "Продолжить",
                onOk: t || function() {},
                onCancel: e || function() {}
            })
        }, t.prototype.alertOnlySiteOwner = function(t) {
            var e = "Это действие может совершить только владелец сайта!";
            switch (t) {
                case "on_site_publish":
                    e = "Опубликовать сайт может только владелец!";
                    break;
                case "off_site_publish":
                    e = "Отключить сайт может только владелец!"
            }
            jAlert('<div class="title_for_message">' + e + "</div>", {
                width: 600,
                btnCls: "btn-success",
                btnWidth: 160,
                okText: "Хорошо",
                onOk: function() {},
                onCancel: function() {}
            })
        }, t.prototype.alertSitesLimitIsFull = function(t) {
            var e = '<div class="img_for_message img_off"></div><div class="title_for_message">На текущем тарифе можно запустить <br/><strong>максимум ' + t + " сайт" + plural(t, "", "а", "ов") + '</strong></div><hr class="mv3"/><div class="text_for_message">Выключите один из сайтов или</br>перейдите на более высокий тариф.</div>';
            jAlert(e, {
                width: 500,
                btnWidth: 200,
                btnCls: "btn btn-success",
                okText: "Перейти к тарифам",
                headerText: "",
                onOk: function() {
                    return setTimeout("goTo('" + sitesMan.urlToTariffs + "');", 200), !1
                }
            })
        }, t.prototype.alertDomainsLimitIsFull = function(t) {
            var e = '<div class="img_for_message img_off"></div><div class="title_for_message">На текущем тарифе можно запустить <br/><strong>максимум ' + t + " домен" + plural(t, "", "а", "ов") + '</strong></div><hr class="mv3"/><div class="text_for_message">Запустите сайт на поддомене или<br/>прикрепите к другому сайту как страницу.</br/>Также вы можете перейти на более "мощный" тариф.</div>';
            jAlert(e, {
                width: 500,
                btnWidth: 200,
                btnCls: "btn btn-success",
                okText: "Перейти к тарифам",
                headerText: "",
                onOk: function() {
                    return setTimeout("goTo('" + sitesMan.urlToTariffs + "');", 200), !1
                }
            })
        }, t.prototype.alertTarifIsFull = function(t) {
            var e = '<div class="img_for_message img_off"></div><div class="title_for_message">На текущем тарифе можно запустить<br/><strong>максимум ' + t + " страниц" + plural(t, "у", "ы", "") + '</strong></div><hr class="mv3"/><div class="text_for_message">Выключите одну из страниц или</br>перейдите на более высокий тариф.</div>';
            jAlert(e, {
                width: 500,
                btnWidth: 200,
                btnCls: "btn btn-success",
                okText: "Перейти к тарифам",
                headerText: "",
                alertClass: "alert-max-sites-constraint",
                onOk: function() {
                    return setTimeout("goTo('" + sitesMan.urlToTariffs + "');", 200), !1
                }
            })
        }, t.prototype.alertTarifIsFullInTest = function(t) {
            jAlert('<div class="img_for_message img_off"></div><p class="title_for_message">На текущем тарифе вы можете запустить<br/><strong>максимум ' + t + " страниц" + plural(t, "у", "ы", "") + '</strong></p><hr/><div class="text_for_message"><a href="' + baseUrl + 'sites/list">Выключите</a> одну из страниц </br> или </br>Перейдите на более "мощный" тариф  в разделе Баланс.</div>', {
                width: 700,
                btnWidth: 200,
                btnCls: "btn btn-success",
                okText: "Перейти в Баланс",
                headerText: "",
                onOk: function() {
                    return setTimeout("goTo('profile/balance');", 200), !1
                }
            })
        }, t.prototype.moveSiteBack = function(t, e) {
            if (this.draggingSiteData[t] && (this.draggingSiteData[t].prev.length ? this.draggingSiteData[t].item.insertAfter(this.draggingSiteData[t].prev) : this.draggingSiteData[t].item.prependTo(this.draggingSiteData[t].parent), this.draggingSiteData[t].item.attr("cur-grp", this.draggingSiteData[t].item.closest(".iblk").attr("id"))), this.showHideEmptyBlocks(), this.recountDailyExpense(), "undefined" != typeof e) {
                for (var i in e) $(".tr_site[id-site=" + i + "]").attr("pos", e[i]);
                i = null
            }
        }, t.prototype.getMonthlySitesCount = function() {
            var t = 0,
                e = [],
                i = this.monthlySitesList;
            return "undefined" == typeof i && (i = $("#iblk-monthly")), i.find("tr.tr_site:not(.ui-sortable-helper):not(.sort_ph)").each(function() {
                var i = $(this).attr("data-root_domain");
                0 > $(this).find(".lnk_site").text().indexOf("/") && -1 == $.inArray(i, e) && t++, "undefined" != typeof i && e.push(i)
            }), t++
        }, t.prototype.getMonthlyPagesCount = function() {
            return isset(window.siteList) ? siteList.getSitesList(window.SITES_LIST_PUBLISHED_BY_MONTHLY_TARIFF).length : this.monthlySitesList.children("tr.tr_site:not(.ui-sortable-helper):not(.sort_ph)").length
        }, t.prototype.getUsedDomains = function() {
            if (isset(window.siteList)) return siteList.getUsedDomains();
            var t = [];
            return this.monthlySitesList.children("tr[data-root_domain]:not(.ui-sortable-helper):not(.sort_ph)").each(function() {
                var e = $(this).attr("data-root_domain"); - 1 == $.inArray(e, t) && t.push(e)
            }), t
        }, t.prototype.getActiveDomainsCount = function() {
            return this.getUsedDomains().length
        }, t.prototype.showHideEmptyBlocks = function() {
            var t = $(".tbody_sites .tr_empty, .tbody_sites_draggable .tr_empty");
            t.each(function() {
                var t = $(this);
                if ("projects" == projectManager.getProjectsViewState()) {
                    var e = projectManager.currentProject.id,
                        i = t.parent(),
                        n = i.find(".tr_site[data-project-id=" + e + "]:not(.ui-sortable-helper)"),
                        a = i.find(".sort_ph:not(.hidden)");
                    n.length || a.length ? t.hide() : t.show()
                } else t.parent().children("tr.tr_site:not(.ui-sortable-helper)").length > 0 ? t.hide() : t.show();
                t = null
            })
        }, t.prototype.recountDailyExpense = function() {
            this.dailyExpenseBlock && this.dailyExpenseBlock.length && this.dailyExpenseBlock.text(this.dailySitesList.find(".tr_site:not(.ui-sortable-helper)").length * this.sitePrice)
        }, t.prototype.recountSitesPos = function() {
            var t = null,
                e = {},
                i = 0,
                n = null,
                a = null,
                o = null,
                r = null;
            $("#sites_list").children(".iblk").each(function() {
                a = $(this).attr("id"), $(this).find(".tbody_sites .tr_site").each(function(r) {
                    ++r, t = parseInt($(this).attr("pos")), o = $(this).attr("cur-grp"), (isNaN(t) || t != r || a != o) && (n = parseInt($(this).attr("id-site")), isNaN(n) || (i++, e[n] = {
                        pos: r,
                        oldPos: isNaN(t) ? "" : t,
                        newParent: a
                    }, $(this).attr({
                        pos: r,
                        "cur-grp": a
                    })))
                })
            }), i > 0 && this.saveSitesPositions(e), t = e = i = n = a = o = r = null
        }, t.prototype.saveSitesPositions = function(t, e, i) {
            isset(i) || (i = {
                list: t,
                from: this.location
            });
            var n = window.location.href.match(/user:(\d+)/);
            this.sitesAjax = ajaxLoad({
                url: "sites/ajax/frm:frmsitespos" + (null !== n ? "/user:" + n[1] : ""),
                data: i,
                onBeforeSuccess: function(t) {
                    return "undefined" != typeof t.err ? (t.error = t.err, t.res = 0) : 0 != t.res || t.script || (t.error = "Возникла ошибка [#4777]!"), !0
                },
                onSuccess: function(t, i) {
                    window.tracerSendEvent("site list: site position changed", {
                        status_changed: parseInt(t.statusChanged)
                    }), 1 == t.res && t.siteUrl && t.siteUrlDecoded && (trialTariff.showModal(t), isset(window.siteList) && t.trialDays > 0 && isset(t.tariff) && siteList.$emit("sites-list--tariff-attached", t.tariff)), e && "function" == typeof e && e(t)
                }
            })
        }, t.prototype.showNotEnoughMoneyForDailySite = function(t) {
            jConfirm("<p>На вашем балансе недостаточно средств.</p><p>Для запуска сайта за <strong>" + t.substr(4, 2) + "." + t.substr(2, 2) + ".20" + t.substr(0, 2) + "</strong> нужно, чтобы на балансе было минимум <strong>" + number_format(this.sitePrice, 0) + " руб</strong>.</p><p>Пополните баланс и повторите операцию.</p>", {
                okText: "Пополнить",
                btnWidth: 110,
                onOk: function() {
                    setTimeout("goTo('profile/balance');", 200)
                }
            })
        }, t.prototype.errTplPublish = function() {
            jAlert("<p>Данный сайт является шаблоном, его нельзя опубликовать.</p><p>Вы можете нажать на шестеренку, выбрать пункт &laquo;Клонировать&raquo; и уже клонированный сайт сможете опубликовать.</p>")
        }, t.prototype.errNeedTariffAttach = function() {
            jAlert('<div class="img_for_message img_off mb2"></div><div class="title_for_message">Для запуска сайта вам нужно перейти в раздел &laquo;Баланс&raquo; и подключить тариф.</div>', {
                width: 600,
                btnWidth: 200,
                btnCls: "btn-success btn-alert-need-tarif",
                okText: "Перейти в Баланс",
                headerText: "Запуск сайта",
                alertClass: "alert-need-tarif",
                onOk: function() {
                    setTimeout("goTo('" + sitesMan.urlToTariffs + "');", 200)
                }
            })
        }, t.prototype.onFaviconUpload = function(t, e) {
            if (console.log(t.target.files[0]), !t.target.files[0].type.match(/^image\/(png|ico|x-icon|icon|vnd.microsoft.icon)/)) return alert("Нужно выбрать картинку с расширением ICO или PNG."), !1;
            if (t.target.files[0].size > 12e4) return void alert("Максимальный размер файла - 120 Кб.");
            0 == $("#upload_target").length && $("body").append('<iframe id="upload_target" name="upload_target" style="width:1px;height:1px;border:0;position:absolute;left:-9999px;visibility:hidden;"></iframe>');
            var i = $(e).closest("form");
            i.submit(), i = null
        }, t.prototype.faviconUploadOk = function(t) {
            $("img#favicon_img").attr("src", t.url), $(".favicon_edit").removeClass("empty")
        }, t.prototype.goToSites = function() {
            location.href = window.baseUrl + "sites/list"
        }, t.prototype.onSiteDelete = function(t, e, i) {
            var n = "Удалить этот " + ("variant" == i ? "вариант" : "сайт") + "?";
            jConfirm(n, {
                site: t,
                width: 330,
                okClass: "btn-danger",
                okText: "Да, удалить",
                btnWidth: 114,
                onOk: function() {
                    var i = lockScreen("Удаление...", {
                        show_animation: !0
                    });
                    ajaxLoad({
                        url: "sites/ajax/frm:delete_site/id:" + t,
                        onSuccess: function(t) {
                            i && unlockScreen(i), "function" == typeof e && e(t)
                        }
                    })
                }
            })
        }, t.prototype.afterSiteDelete = function(t) {
            if (showDoneBox("Сайт удален", {
                width: 200,
                cls: "c_text",
                showTime: 1e3
            }), !isset(window.siteList)) {
                var e = $("#sites_list .tr_site[id-site=" + t + "]");
                e.animate({
                    opacity: 0
                }, 1e3, function() {
                    var t = e.siblings(".tr_site"),
                        i = e.siblings(".tr_empty"),
                        n = e.closest("#iblk-archive").length > 0;
                    $(this).remove(), t.length < 1 && (n ? $("#iblk-archive").remove() : i.show()), e = null, t = null, i = null
                })
            }
        }, t.prototype.afterVariantDelete = function(t) {
            location.reload()
        }, t.prototype.siteTransfer = function(t, e, i) {
            $("#transver_site_name h5").text(i), $("#transver_site_name a").attr("href", "http://" + e).text(e), $("#frmtransfer__site").val(t), $("#wndTransfer .ui_error").hide(), $("#wndTransfer").wind("show"), $("#frmtransfer__mail").val("").focus()
        }, t.prototype.confirmSiteTransfer = function() {
            jConfirm("Переносим сайт?", {
                width: 330,
                btnWidth: 109,
                okClass: "btn-danger",
                okText: "Да, переносим",
                onOk: function() {
                    ajaxLoad({
                        url: "sites/ajax/frm:frmtransfer/ok:1" + (location.href.indexOf("/sites/view") >= 0 ? "/goto:sites" : ""),
                        data: $("#frmtransfer").serializeArray()
                    })
                }
            })
        }, t.prototype.siteTransferDone = function(t, e, i, n) {
            isset(window.sitesModule) ? window.sitesModule.fireEventSiteTransferred({
                site_id: t
            }) : isset(window.siteList) ? siteList.$emit("sites-list-item--transferred", t, i) : ($("#sites_list .tr_site[id-site=" + t + "]").remove(), alert('Сайт "' + e + '" успешно перенесен пользователю ' + i + "!")), $(".wind#wndTransfer").wind("hide"), "function" == typeof n && n()
        }, t.prototype.updateSiteSwitch = function(t, e) {
            t.find(".site_publish .switch")["iblk-disabled" == e ? "removeClass" : "addClass"]("on")["iblk-disabled" == e ? "addClass" : "removeClass"]("off"), t.stop().css("background-color", "#FFF7C2").animate({
                backgroundColor: "#fff"
            }, 5e3)
        }, t.prototype.onClickBtnLaunchSiteInDashboard = function(t, e) {
            return sitesMan.setPublished(t, e), tracerSendEvent("editor: launch site button click", {
                source: "dashboard"
            }), !1
        }, t.prototype.onClickBtnLaunchSiteInEditor = function(t, e, i) {
            return sitesMan.setPublished(t, e, i), tracerSendEvent("editor: launch site button click", {
                source: "editor"
            }), !1
        }, t.prototype.onClickBtnPublishServicePage = function(t, e, i) {
            return sitesMan.publishServicePage(t), tracerSendEvent("editor: publish service page button click", {
                source: "editor"
            }), !1
        }, t.prototype.onClickBtnLaunchSiteInPreview = function(t, e) {
            return e ? sitesMan.setPublished(t, e) : sitesMan.errNeedTariffAttach(), tracerSendEvent("editor: launch site button click", {
                source: "sitepreview"
            }), !1
        }, t.prototype.publishServicePage = function(t) {
            var e = getUserIdFromUrl(),
                i = e > 0 ? "/user:" + e : "";
            jConfirm("Вы уверены, что хотите опубликовать изменения сервисной страницы?", {
                width: 330,
                btnWidth: 109,
                okClass: "btn-danger",
                okText: "Да",
                onOk: function() {
                    ajaxLoad({
                        url: trueSiteId + "/sites/publish_service_page" + i,
                        data: {
                            page_id: t
                        },
                        onBeforeSuccess: function(t) {
                            return "undefined" != typeof t.err ? (t.error = t.err, t.res = 0) : 0 === t.res && (t.error = "Возникла ошибка [#6879]!"), !0
                        },
                        onSuccess: function(t) {
                            1 === t.res && showDoneBox("Сервисная страница обновлена", {
                                width: 200,
                                cls: "c_text",
                                showTime: 1e3
                            })
                        }
                    })
                }
            })
        }, t.prototype.setPublished = function(t, e, i) {
            var n, a = $(e),
                o = window.location.href.match(/user:(\d+)/),
                r = a.attr("data-entry-point");
            0 == i ? n = !0 : void 0 != i && (n = !1), a.hasClass("on") ? jConfirm("Вы уверены, что хотите выключить сайт?", {
                width: 330,
                btnWidth: 109,
                okClass: "btn-danger",
                okText: "Да, выключить",
                onOk: function() {
                    isset(window.siteList) && siteList.$emit("sites-list-item--before-move-in-other-list", t, window.SITES_LIST_DRAFTS), ajaxLoad({
                        url: "sites/ajax/frm:frmpublish2" + (null !== o ? "/user:" + o[1] : ""),
                        data: {
                            id: t,
                            action: "off"
                        },
                        onBeforeSuccess: function(t) {
                            return "undefined" != typeof t.err ? (t.error = t.err, t.res = 0) : 0 == t.res && (t.error = "Возникла ошибка [#4778]!"), !0
                        },
                        onSuccess: function(t) {
                            if (1 == t.res) switch (t.mes) {
                                case "ok_site_off":
                                    if (showDoneBox("Сайт выключен", {
                                        width: 200,
                                        cls: "c_text",
                                        showTime: 1e3
                                    }), isset(window.siteList)) return void siteList.$emit("sites-list-item--successful-move-in-other-list", t.id, t.pos);
                                    var e = $(".tr_site[id-site=" + t.id + "]");
                                    e.attr("cur-grp", "iblk-disabled"), e.appendTo($("#iblk-disabled .tbody_sites")), sitesMan.updateSiteSwitch(e, e.closest(".iblk").attr("id")), e.attr("pos", t.pos), sitesMan.showHideEmptyBlocks(), sitesMan.recountDailyExpense(), e = null
                            }
                            isset(window.siteList) && siteList.$emit("sites-list-item--failure-move-in-other-list")
                        }
                    })
                }
            }) : sitesMan.hasTariffDaily ? jConfirm("Выберите месячный или дневной тариф для запуска сайта", {
                width: 400,
                btnWidth: 155,
                okText: "Тариф по месяцам",
                cancelText: "По дням",
                headerText: "Запуск сайта",
                onOk: function() {
                    sitesMan.setPublishedOn(t, {
                        entry_point: r,
                        run_type: "monthly",
                        is_homepage_or_site: n
                    })
                },
                onCancel: function() {
                    sitesMan.setPublishedOn(t, {
                        entry_point: r,
                        run_type: "daily",
                        is_homepage_or_site: n
                    })
                },
                onClose: function() {
                    return !0
                }
            }) : this.setPublishedOn(t, {
                entry_point: r,
                run_type: "monthly",
                is_homepage_or_site: n
            }), o = a = null
        }, t.prototype.setPublishedInTest = function(t) {
            window.location.href.match(/user:(\d+)/);
            sitesMan.hasTariffDaily ? jConfirm("Выберите месячный или дневной тариф для запуска сайта", {
                width: 400,
                btnWidth: 155,
                okText: "Тариф по месяцам",
                cancelText: "По дням",
                headerText: "Запуск сайта",
                onOk: function() {
                    sitesMan.setPublishedOnInTest(t)
                },
                onCancel: function() {
                    sitesMan.setPublishedOnInTest(t, "daily")
                },
                onClose: function() {
                    return !0
                }
            }) : this.setPublishedOnInTest(t)
        }, t.prototype.setPublishedOn = function(t, e) {
            e || (e = {}), e.run_type || (e.run_type = "monthly"), "undefined" == typeof e.forced && (e.forced = 0);
            var i = window.location.href.match(/user:(\d+)/);
            isset(window.siteList) && siteList.$emit("sites-list-item--before-move-in-other-list", t, e.run_type);
            var n = {
                    id: t,
                    action: "on",
                    type: e.run_type,
                    force: e.forced
                },
                a = window.baseUrl;
            sitesMan.in_preview && sitesMan.httpsIsRequired && (a = window.baseUrl.replace("http://", "https://")), a += "sites/ajax/frm:frmpublish2" + (null !== i ? "/user:" + i[1] : ""), ajaxLoad({
                fullUrl: a,
                data: n,
                withCredentials: !0,
                onSuccess: function(i) {
                    if (1 == i.res) switch (i.mes) {
                        case "ok_site_on":
                            if (i.siteUrl && i.siteUrlDecoded) {
                                var n = "undefined" != typeof window.MODULE_ACTION && "sites/list" == window.MODULE_ACTION && 0 == $("#iblk-" + i.type + " .tbody_sites").length;
                                if (isset(window.siteList) && (n = !1, i.trialDays > 0 && isset(i.tariff) && siteList.$emit("sites-list--tariff-attached", i.tariff)), (isset(window.dashboardModule) || isset(window.sitesModule)) && e.callback && e.callback(), userHasTag("allow-true-site") && 0 == e.is_homepage_or_site || trialTariff.showModal(i, n), n) return
                            }
                            switch (e.entry_point) {
                                case "editor":
                                    $(".btn[data-entry-point=editor]").remove();
                                    break;
                                case "preview":
                                    i.siteUrl && i.siteUrlDecoded && ($(".site__status--unpublished").remove(), $(".site__published-link").attr("href", i.siteUrl).text(i.siteUrlDecoded), $(".site__status--published").removeClass("hidden"));
                                    break;
                                default:
                                    var a = "Сайт запущен" + ("undefined" != typeof i.is_paid && 1 == i.is_paid ? " и оплачен" : "") + "!";
                                    if (userHasTag("allow-true-site") && !e.is_homepage_or_site && (a = "Страница включена"), showDoneBox(a, {
                                        width: 200,
                                        cls: "c_text",
                                        showTime: 1e3
                                    }), isset(window.siteList)) return void siteList.$emit("sites-list-item--successful-move-in-other-list", i.id, i.pos);
                                    var o = $(".tr_site[id-site=" + i.id + "]");
                                    o.length && (o.attr("cur-grp", "iblk-" + e.run_type), o.appendTo($("#iblk-" + i.type + " .tbody_sites")), "daily" == i.type && sitesMan.recountDailyExpense(), sitesMan.updateSiteSwitch(o, o.closest(".iblk").attr("id")), o.attr("pos", i.pos), sitesMan.showHideEmptyBlocks()), o = null, sitesMan.in_preview && (window.location.href = window.location.href)
                            }
                            break;
                        case "sites_limit_is_full":
                            sitesMan.alertSitesLimitIsFull(i.max_sites);
                            break;
                        case "tarif_is_full":
                            sitesMan.alertTarifIsFull(i.max_sites);
                            break;
                        case "domains_limit_is_full":
                            sitesMan.alertDomainsLimitIsFull(i.max_domains);
                            break;
                        case "only_site_owner":
                            sitesMan.alertOnlySiteOwner(i.action);
                            break;
                        case "need_tarif_activate":
                            isset(window.sitesModule) ? sitesModule.$emit("event-on-failure-publish-need-tarif-activate") : isset(window.dashboardModule) ? dashboardModule.$emit("event-on-failure-publish-need-tarif-activate") : sitesMan.errNeedTariffAttach();
                            break;
                        case "daily_tarif_is_off":
                            jConfirm('<p>Чтобы запустить сайт <strong>по дням</strong>, вам нужно активировать режим для PRO.</p><p>Для этого перейдите в раздел Баланс и в блоке с названием "ДЛЯ PRO" нажмите кнопку "Подключить".</p>', {
                                width: 450,
                                btnWidth: 120,
                                okClass: "btn-success",
                                okText: "Перейти в Баланс",
                                onOk: function() {
                                    setTimeout("goTo('profile/balance');", 200)
                                }
                            });
                            break;
                        case "daily_site_need_payment":
                            if (sitesMan.alertDailySiteNeedPayment(function() {
                                e.forced = 1, sitesMan.setPublishedOn(t, e)
                            }, function() {
                                isset(window.siteList) && siteList.$emit("sites-list-item--failure-move-in-other-list")
                            }), isset(window.siteList)) return;
                            break;
                        case "need_balance":
                            sitesMan.showNotEnoughMoneyForDailySite(i.curCronDate)
                    }
                    isset(window.siteList) && siteList.$emit("sites-list-item--failure-move-in-other-list")
                }
            }), i = null
        }, t.prototype.setPublishedOnInTest = function(t, e, i) {
            var n = window.location.href.match(/user:(\d+)/);
            ajaxLoad({
                url: "sites/ajax/frm:frmpublish2" + (null !== n ? "/user:" + n[1] : ""),
                data: {
                    id: t,
                    action: "on",
                    type: e || "monthly",
                    force: i || 0
                },
                withCredentials: !0,
                onSuccess: function(i) {
                    if (1 == i.res) {
                        switch (i.mes) {
                            case "ok_site_on":
                                $("#btn-start-test").attr("href", "#Start_test"), i.siteUrl && i.siteUrlDecoded, showDoneBox("Сайт запущен" + ("undefined" != typeof i.is_paid && 1 == i.is_paid ? " и оплачен" : "") + "!", {
                                    width: 200,
                                    cls: "c_text",
                                    showTime: 1e3
                                });
                                break;
                            case "sites_limit_is_full":
                                sitesMan.alertSitesLimitIsFull(i.max_sites);
                                break;
                            case "tarif_is_full":
                                sitesMan.alertTarifIsFullInTest(i.max_sites);
                                break;
                            case "domains_limit_is_full":
                                sitesMan.alertDomainsLimitIsFull(i.max_domains);
                                break;
                            case "only_site_owner":
                                sitesMan.alertOnlySiteOwner(i.action);
                                break;
                            case "need_tarif_activate":
                                sitesMan.errNeedTariffAttach();
                                break;
                            case "daily_tarif_is_off":
                                jAlert('<div class="img_for_message img_pro"></div><div class="title_for_message">Чтобы запустить сайт <strong>по дням</strong>, вам нужно активировать режим для PRO</div><div class="text_for_message">Для этого перейдите в раздел Баланс и в блоке с названием "ДЛЯ PRO" нажмите кнопку "Подключить"</div>', {
                                    width: 600,
                                    btnWidth: 160,
                                    btnCls: "btn-success",
                                    okText: "Перейти в Баланс",
                                    onOk: function() {
                                        setTimeout("goTo('profile/balance');", 200)
                                    }
                                });
                                break;
                            case "daily_site_need_payment":
                                sitesMan.alertDailySiteNeedPayment(function() {
                                    sitesMan.setPublishedOn(t, {
                                        forced: 1,
                                        run_type: e
                                    })
                                });
                                break;
                            case "need_balance":
                                sitesMan.showNotEnoughMoneyForDailySite(i.curCronDate)
                        }
                        $("#Start_test3").find("button.close:first").click()
                    }
                }
            }), n = null
        }, t.prototype.createSiteInHybrid = function() {
            if (!userHasTag("LPDEV-73-b") && !userHasTag("LPDEV-73-c")) return !1;
            var t = $('<iframe name="converting-iframe" class="converting-iframe"/>'),
                e = !1;
            return $("body").append(t), t.load(function() {
                var t = this,
                    i = "startup-mist--visible";
                return !e && (e = !0, void FE.runOnReady(function() {
                    var e = t.contentWindow,
                        n = e.$,
                        a = n("." + i);
                    a.length && a.removeClass(i), e.hybridConverter.convertSiteToAbsolute(function(t) {
                        t.redirect_to ? window.location.href = t.redirect_to : window.location.href = "/"
                    })
                }))
            }), !0
        }, t.prototype.loadSiteTplImage = function(t) {
            var e = $(t),
                i = e.find(".tpl-img");
            i.attr("src", i.attr("data-src")), i.removeAttr("data-src"), e.removeClass("not-loaded")
        }, t.prototype.onSuccessSubmitFrmNeedSiteTpl = function() {
            $("#frmneedsitetpl__iwant").val("").closest(".modal").modal("hide"), alert("Спасибо!\n\nСкоро с вами свяжемся :)")
        }, t.prototype.initCreatePage = function(t) {
            this.$tplsList = $("#tpls-list"), t = t || {}, this.create_page_form = new e, this.create_page_form.init(t);
            for (var i = 9, n = this.$tplsList.find(".tpl-container.not-loaded"), a = 0; a < i && n[a]; a++) this.loadSiteTplImage(n[a]);
            $(window).scroll(), userHasTag("test-new-reg-screen-templates") && $(".after-reg-popup__wrap").length && ($(document).on("click", ".after-reg-popup__wrap", function() {
                return sitesMan.closeAfterRegPopup(), !1
            }), $(document).on("click", ".after-reg-popup", function() {
                return !1
            }), $(document).on("click", ".after-reg-popup__btn", function() {
                return sitesMan.closeAfterRegPopup(), !1
            }));
            var o = $(".initial-screen");
            if (o.length) {
                var r = o.attr("id");
                if (r) switch (r) {
                    case "sp6_create_site_init_HADI1":
                        tracerSendEvent("creating site screen", {
                            type: "three options",
                            "new screen": !1
                        });
                        break;
                    case "sp6_create_site_choose_tpl_category":
                        tracerSendEvent("creating site screen", {
                            type: "three options",
                            "new screen": !0
                        });
                        break;
                    case "sp6_create_site_choose_tpl2":
                        this.create_page_form.showScreen(r)
                }
            }
        }, t.prototype.closeAfterRegPopup = function() {
            tracerSendEvent("new site: reg popup closed"), userAddTag("new-reg-screen-watched"), $(".after-reg-popup__wrap").remove()
        }, t.prototype.opengraphUploadOk = function(t) {
            if (isset(t.ops)) {
                var e = $(".og_preview_image");
                return e.length ? void e.find("#og_image").attr({
                    src: t.url,
                    "data-orig-w": t.extra.w,
                    "data-orig-h": t.extra.h
                }) : (e = null, void consoleDbg("Картинка загружена, но не найден ее блок"))
            }
        }, t.prototype.tryPublishSite = function(t) {
            $.post(window.baseUrl + window.siteId + "/sites/ajax/frm:tryPublishSite", {
                id: window.siteId,
                action: "on",
                type: "monthly",
                force: 0
            }, function(e) {
                if (e.res && 1 == e.res) switch (e.mes) {
                    case "ok_site_on":
                        $("#success_publish").modal("show"), t.onOk();
                        break;
                    default:
                        jAlert("<br>Ошибка при публикации сайта [#2821]")
                } else if (e.mes) switch (e.mes) {
                    case "no_tarif":
                    case "need_tarif_activate":
                        $("#no_tarif_modal").modal("show");
                        break;
                    case "tarif_is_full":
                        sitesMan.alertTarifIsFull2(e.max_sites);
                        break;
                    default:
                        jAlert("<br>Необработанный ответ от сервера[#2831]")
                } else e.err && jAlert("<br>" + e.err)
            }, "JSON")
        }, t.prototype.countMessageLength = function(t, e) {
            var i = e - t.length;
            return i
        }, t.prototype.alertTarifIsFull2 = function(t) {
            jAlert("<p>На текущем тарифе вы можете запустить максимум<br/><strong>" + t + " сайт" + plural(t, "", "а", "ов") + '</strong>.</p><hr/><p class="fw_bold pt1" style="color: #f58f36;">Что теперь делать?</p><table class="mb2"><tr><td style="width:42%">Выключите один из сайтов, нажав на переключатель <span id="switch_example"></span> в <a href="' + window.baseUrl + '">главном меню </a>.</td><td class="vam c_text fw_bold" style="width:16%;">ИЛИ</td><td style="width:42%">Перейдите на более "мощный" тариф в разделе <a href="' + window.baseUrl + 'profile/balance">Баланс </a>.</td></tr></table>', {
                width: 550,
                btnWidth: 200,
                okClass: "ibtn-green",
                okText: "Не сейчас",
                headerText: "Количество запущенных сайтов превышено"
            })
        }, t.prototype.updateVariantLabels = function(t, e) {
            $("label[for=ab_st_item_" + t + "]").find(".abtest_name_var:first").text(e), $("#variant-list-1[name=variant-list-1]").children("option[value=" + t + "]").text(e)
        }, t.prototype.confirmCloneSite = function(t, e) {
            var i = $("#abtest__modal_copy"),
                n = i.find(".wrap_abtest_clone:first"),
                a = i.find(".wrap_integrations_clone:first"),
                o = i.find("#clone_integrations:first");
            o.prop("checked", !1), n.hide(), a.hide(), i.attr("site-id", t).wind("show"), e.has_abtest && 1 === parseInt(e.has_abtest) && n.show(), e.has_int && 1 === parseInt(e.has_int) && a.show()
        }, t.prototype.loadDataBeforeDisplayConfirmCloneSite = function(t) {
            var e = lockScreen("Запрос данных...", {
                show_animation: !0
            });
            return runRequestToAjaxAction({
                type: "GET",
                url: t + "/sites/data_for_copy_site",
                cache: !1,
                onSuccess: function(e) {
                    var i = !1;
                    e.has_abtest && 1 === parseInt(e.has_abtest) ? i = !0 : e.has_int && 1 === parseInt(e.has_int) && (i = !0), i ? sitesMan.confirmCloneSite(t, e) : sitesMan.sendRequestForCloningSite(t, !1)
                },
                onAlways: function() {
                    unlockScreen(e)
                }
            }), !0
        }, t.prototype.initCheckCopySiteStatus = function() {
            $(".tr-site--is-will-be-copied").each(function() {
                var t = $(this).attr("id-site");
                sitesMan.startProgressCopyForSite(t)
            })
        }, t.prototype.startProgressCopyForSite = function(t) {
            var e = $(".tr_site[id-site=" + t + "] .tr-site__copy-progress .bar"),
                i = 0,
                n = 75,
                a = 1e4,
                o = 200,
                r = a / o,
                s = n / r,
                l = setInterval(function() {
                    return i += s, i > n ? (clearInterval(l), void sitesMan.sendRequestGetCopySiteStatus(t)) : void e.css("width", i + "%")
                }, o)
        }, t.prototype.sendRequestGetCopySiteStatus = function(t) {
            runRequestToAjaxAction({
                type: "GET",
                url: t + "/sites/copy_site_status",
                cache: !1,
                onSuccess: function(e) {
                    return isset(e.is_copied) ? 1 !== parseInt(e.is_copied) ? void(isset(e.repeat_is_enabled) && 1 === parseInt(e.repeat_is_enabled) && isset(e.repeat_through) && e.repeat_through > 0 && setTimeout(function() {
                        sitesMan.sendRequestGetCopySiteStatus(t)
                    }, 1e3 * e.repeat_through)) : isset(window.siteList) ? void siteList.$emit("sites-list-item--copied", t) : ($(".tr_site[id-site=" + t + "]").removeClass("tr-site--is-will-be-copied"), void window.sites_graphics.checkAndDrawSitesVisitsGraphics()) : (console.log(e), void alert("Expected parameter is undefined #5852. Watch info in console"))
                }
            })
        }, t.prototype.sendRequestForCloningSite = function(t, e) {
            var i = lockScreen("Копирование...", {
                    show_animation: !0
                }),
                n = isset(window.siteList) ? 1 : 0,
                a = {
                    need_obj: n,
                    copy_int: e ? 1 : 0
                };
            return runRequestToAjaxAction({
                type: "POST",
                url: t + "/sites/copy_site_deferred",
                data: a,
                onSuccess: function(t) {
                    if (1 === n && t.siteListItem) return void siteList.$emit("sites-list-item--created", t.siteListItem);
                    if (!t.newSiteId) return console.log(t), void alert("Wrong response from server #5851. Watch info in console");
                    var e = t.isReady && 1 == t.isReady;
                    e ? window.location.href = window.baseUrl + t.newSiteId + "/pages/edit" : window.location.href = window.baseUrl + "sites/list"
                },
                onAlways: function() {
                    unlockScreen(i)
                }
            }), !0
        }, t.prototype.onClickBtnCloneSite = function(t) {
            if (!userHasTag("new-cloning")) {
                var e = !0;
                if ("site_list_spa" == sitesMan.location) {
                    var i = {};
                    i.check_int = e ? 1 : 0, i.from = sitesMan.location, sitesMan.doCloneSiteSpa(t, t + "/sites/clone_site", i)
                } else sitesMan.cloneSite(t, e);
                return !1
            }
            return sitesMan.loadDataBeforeDisplayConfirmCloneSite(t), !1
        }, t.prototype.onClickBtnConfirmCloningSite = function() {
            if (!userHasTag("new-cloning")) return sitesMan.doCloneSite();
            var t = $("#abtest__modal_copy"),
                e = t.find("#clone_integrations:first"),
                i = e.prop("checked"),
                n = t.attr("site-id");
            return sitesMan.sendRequestForCloningSite(n, i) && t.wind("hide"), !1
        }, t.prototype.cloneSite = function(t, e) {
            var i = {};
            i.type = "ajax", "undefined" != typeof e && e && (i.check_int = 1), ajaxLoad({
                url: t + "/sites/clone_site",
                data: i,
                withCredentials: !0,
                onSuccess: function(e) {
                    if (1 == e.res)
                        if ("undefined" != typeof e.check_data) sitesMan.confirmCloneSite(t, e.check_data);
                        else switch (e.mes) {
                            case "go_to":
                                window.location.href = e.redirect_to
                        }
                }
            })
        }, t.prototype.doCloneSiteSpa = function(t, e, i, n) {
            var a = lockScreen("Клонирование...", {
                show_animation: !0
            });
            i.type = "ajax", ajaxLoad({
                url: e,
                data: i,
                withCredentials: !0,
                onSuccess: function(e) {
                    if (a && unlockScreen(a), 1 == e.res) {
                        if ("undefined" != typeof e.check_data) return void sitesMan.confirmCloneSite(t, e.check_data);
                        if (isset(window.siteList) && e.site_list_item) return void siteList.$emit("sites-list-item--created", e.site_list_item);
                        if ("function" == typeof n) return e.old_site_id = t, void n(e)
                    }
                    console.log(e), alert("Wrong response from server #4825. Watch info in console")
                }
            })
        }, t.prototype.doCloneSite = function() {
            var t = $("#abtest__modal_copy"),
                e = t.find("#clone_integrations:first"),
                i = e.prop("checked"),
                n = t.attr("site-id"),
                a = n + "/sites/clone_site";
            if (i && (a += "/copy_int:true"), "site_list_spa" == sitesMan.location) {
                var o = {};
                return o.from = sitesMan.location, sitesMan.doCloneSiteSpa(n, a, o), t.wind("hide"), !1
            }
            return window.location.href = window.baseUrl + a, !1
        }, t.prototype.initQuiz = function(t, e) {
            var i = $(".quiz-form");
            t && (i = t.find(".quiz-form"));
            var n = function() {
                var t = $(this);
                if (t.find(".user_form_fields_list .field:last").attr("pos") !== t.find(".field.active").attr("pos")) return t.find(".quiz__nav_next").trigger("click"), !1
            };
            e && i.each(function() {
                sitesMan.initQuizForm($(this))
            }), i.find(".user_form").on("submit", n), this.enableQuizNav()
        }, t.prototype.initQuizForm = function(t) {
            var e = sitesMan.quizForm(t);
            0 !== e.totalSteps && e.totalSteps < 2 ? (e.$btn.next.addClass("quiz__disabled"), e.$btn.submit.removeClass("quiz__disabled")) : (e.$btn.next.removeClass("quiz__disabled"), e.$btn.submit.addClass("quiz__disabled")), sitesMan.toQuizStep(e, 0)
        }, t.prototype.quizForm = function(t) {
            var e = t.find(".quiz"),
                i = t.find(".quiz.active"),
                n = t.find(".quiz__progress_container");
            return {
                $form: t,
                $steps: e,
                totalSteps: e.length,
                $activeStep: i,
                activeIndex: e.index(i),
                $progressContainer: n,
                $pSteps: {
                    all: n.find(".quiz__progress_dot"),
                    inactive: n.find(".quiz__progress_dot:not(.active)"),
                    active: n.find(".quiz__progress_dot.active")
                },
                $indicator: {
                    current: t.find("#steps_bar"),
                    all: t.find("#all_steps")
                },
                $btn: {
                    prev: t.find(".quiz__nav_prev"),
                    next: t.find(".quiz__nav_next"),
                    submit: t.find(".btn-new.ie_css3.btn-submit")
                },
                $regulation: t.find(".user_form_regulation")
            }
        };
        var n = function(t) {
            var e = t.hasClass("is_required"),
                i = t.data("type"),
                n = ["input[type=text]", "input[type=tel]", "input[type=radio]:checked", "input[type=checkbox]:checked", "option:not([hidden]):selected", "textarea"],
                a = t.find(n.join(", ")),
                o = t.find(".ui_error"),
                r = {
                    required: "Это поле нужно заполнить",
                    phone: "Телефон содержит неверные символы",
                    email: "Введите корректный адрес электронной почты"
                },
                s = function(t) {
                    if (-1 !== ["fcheckbox", "fradio", "fselect"].indexOf(i)) return 0 === t.length;
                    var e = t.val().trim();
                    return 0 === e.length || !e
                },
                l = function(t) {
                    var e = t.val().trim(),
                        i = /^\+?[1-9]{1}[\d\s()-]*$/i;
                    return !(e.length > 0) || e.length > 5 && i.test(e)
                },
                d = function(t) {
                    var e = t.val().trim(),
                        i = /^[a-z0-9!#$%&'*+\/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+\/=?^_`{|}~-]+)*@(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?$/i;
                    return i.test(e)
                },
                c = function(e) {
                    FE.run("quiz-validate-error", {
                        step: t
                    }), o.text(e)
                };
            if (o.addClass("hidden"), e && s(a)) return o.removeClass("hidden"), c(r.required), !1;
            if ("ftextbox" === i && !s(a)) {
                var u = a.closest(".field"),
                    p = u.data("cls");
                if ("femail" === p && !d(a)) return o.removeClass("hidden"), c(r.email), !1;
                if ("fphone" === p && !l(a)) return o.removeClass("hidden"), c(r.phone), !1
            }
            return !0
        };
        t.prototype.nextQuiz = function(t) {
            var e = this.quizForm(t),
                i = e.activeIndex + 1;
            return !(!sitesMan.isEditor && !0 !== n(e.$activeStep)) && void sitesMan.toQuizStep(e, i)
        }, t.prototype.prevQuiz = function(t) {
            var e = this.quizForm(t),
                i = e.activeIndex - 1;
            i < 0 && (i = 0), sitesMan.toQuizStep(e, i)
        }, t.prototype.adaptQuizContent = function(t) {
            var e = t.$form.find(".wind-body .body_content"),
                i = t.$form.find(".wind-footer"),
                n = parseInt(i.outerHeight(!0));
            e.css("padding-bottom", n)
        }, t.prototype.toQuizStep = function(t, e) {
            var i = t.$form.find(".wind-body"),
                n = 0 === e,
                a = t.totalSteps - 1 === e,
                o = 1 === t.$form.data("is-regulation-enabled");
            t.$steps.removeClass("active"), t.$steps.eq(e).addClass("active"), n ? t.$btn.prev.addClass("quiz__disabled") : t.$btn.prev.removeClass("quiz__disabled"), a ? (t.$btn.submit.removeClass("quiz__disabled"), t.$btn.next.addClass("quiz__disabled"), o && t.$regulation.removeClass("hidden")) : (t.$btn.submit.addClass("quiz__disabled"), t.$btn.next.removeClass("quiz__disabled"), t.$regulation.addClass("hidden"));
            var r = t.$progressContainer.attr("data-progress-color") || "aaa";
            t.$pSteps.active.removeClass("active"), t.$pSteps.all.removeAttr("style"), t.$pSteps.all.eq(e).addClass("active").css("background-color", "#" + r), t.$indicator.all.text(t.totalSteps), t.$indicator.current.text(e + 1);
            var s = t.$steps.eq(e).find("input[type=text]:visible, textarea");
            t.activeIndex !== -1 && s.length && s.trigger("focus"), a || ($(".wrap-for-formPopover").animate({
                scrollTop: 0
            }, 300), i.animate({
                scrollTop: 0
            }, 300)), this.adaptQuizContent(t)
        }, t.prototype.enableQuizNav = function(t) {
            var e = $(".quiz__nav_next"),
                i = $(".quiz__nav_prev");
            "undefined" != typeof t && t.length && (e = t.find(".quiz__nav_next"), i = t.find(".quiz__nav_prev")), e.off("click").on("click", function() {
                var t = $(this).closest(".user_form");
                sitesMan.nextQuiz(t)
            }), i.off("click").on("click", function() {
                var t = $(this).closest(".user_form");
                sitesMan.prevQuiz(t)
            })
        }, t.prototype.initSiteCreationTypeImg = function() {
            var t = $(".site-creation-type__landing"),
                e = t.children(".site-creation-type__img-wrap"),
                i = e.children(".site-creation-type__img");
            t.hover(function() {
                i.addClass("is_active_img")
            }, function() {
                i.removeClass("is_active_img")
            });
            var n = $(".site-creation-type__shop"),
                a = n.children(".site-creation-type__img-wrap"),
                o = a.children(".site-creation-type__img");
            n.hover(function() {
                o.addClass("is_active_img")
            }, function() {
                o.removeClass("is_active_img")
            });
            var r = $(".site-creation-type__quiz"),
                s = r.children(".site-creation-type__img-wrap"),
                l = s.children(".site-creation-type__img");
            r.hover(function() {
                l.addClass("is_active_img")
            }, function() {
                l.removeClass("is_active_img")
            })
        }, t.prototype.initIphone = function() {
            var t = {
                    w: $(window).width(),
                    h: screen.height,
                    wC: $(window).width() / 2,
                    hC: screen.height / 2
                },
                e = $("#sections_list"),
                i = e.find("> .is_iphone"),
                n = {
                    x: 0,
                    y: 0
                };
            return 0 != i.length && (i.find(".section-image").css({
                backgroundSize: "cover"
            }), void i.on("mousemove", function(e) {
                var i, a, o = $(this).find(".section-image:first");
                document.documentElement && document.documentElement.scrollTop ? (i = document.documentElement.scrollTop, a = document.documentElement.scrollLeft) : (i = document.body.scrollTop, a = document.body.scrollLeft), n.x = (e.pageX - a - t.w + t.wC) / (t.wC / 10), n.y = (e.pageY - i - t.h + t.hC) / (t.hC / 10), o.css("transform", "translate(" + n.x * -.75 + "px, " + n.y * -.75 + "px)")
            }))
        }, t.prototype.disableIphone = function(t) {
            t.off("mousemove"), t.find(".section-image:first").css({
                "background-size": "",
                transform: ""
            })
        }, FE.runOnReady(function() {
            window.sitesMan = new t, window.sitesMan.ready(), FE.add("file_uploaded_favicon", function(t) {
                sitesMan.faviconUploadOk(t)
            }), FE.add("file_uploaded_opengraph_image", function(t) {
                sitesMan.opengraphUploadOk(t)
            })
        })
    }(),
    function() {
        "use strict";

        function t(t, e, i) {
            this.complete = !1, this.ptr = t, this.killTimer = null, !e.shift && e.selector && (e = e.toArray()), this.list = e, this.ops = i || {}, "undefined" == typeof this.ops.max_loading && (this.ops.max_loading = 3), "undefined" == typeof this.ops.onload_callback && (this.ops.onload_callback = !1), n && console.log("[ LOADER ] init", this)
        }
        var e = 0,
            i = {},
            n = !1;
        t.prototype.loadCycle = function() {
            if (0 != this.list.length) {
                var t = this.list.shift(),
                    e = $(t).find("img[data-src]");
                1 == e.length ? (e.load(function() {
                    var t = ImgListLoader.get($(this).attr("loader-ptr")),
                        e = ImgListLoader.isDebug();
                    return t ? (e && console.log("[ LOADER ] image loaded", this), t.ops.onload_callback && t.ops.onload_callback.apply(this), t.list.length > 0 ? setTimeout("var L=ImgListLoader.get(" + t.ptr + "); if (null!==L){L.loadCycle();}", 1) : t.complete || (t.complete = !0, e && console.log("Loader #" + t.ptr + " completed")), void(t = null)) : void console.log("[ LOADER ] not found #" + $(this).attr("loader-ptr"))
                }), e.attr("src", e.attr("data-src")), e.attr("loader-ptr", this.ptr), e.removeAttr("data-src")) : ImgListLoader.isDebug() && console.log("[ LOADER ] not 1 image found. ", e)
            }
        }, t.prototype.run = function() {
            for (var t = 0, e = Math.min(this.list.length, this.ops.max_loading); t < e; t++) this.loadCycle();
            this.killTimer = setInterval("var loader = ImgListLoader.get(" + this.ptr + "); if (null!==loader && loader.complete){ ImgListLoader.kill(" + this.ptr + ") }", 5e3)
        }, t.prototype.removeTimer = function() {
            clearInterval(this.killTimer), this.killTimer = null
        }, window.ImgListLoader = {
            create: function(n, a) {
                return i[++e] = new t(e, n, a), i[e]
            },
            get: function(t) {
                return "undefined" != typeof i[t] ? i[t] : null
            },
            getAll: function() {
                return i
            },
            setDebug: function(t) {
                n = t
            },
            isDebug: function() {
                return n
            },
            kill: function(t) {
                "undefined" != typeof i[t] && (n && console.log("[ LOADER ] kill #" + t), i[t].removeTimer(), delete i[t])
            }
        }
    }(), window.animManager = new FanimManager, window.animManager.ready(),
    function() {
        var t = {},
            e = ge("bs_cont_wrap");
        t.setBlockData = function(e) {
            if (null == e || null == e.id) return !1;
            var i = {},
                n = $(ge(e.id));
            if (0 === n.length) return !1;
            var a = t.getRelatedBlockData(n, !0);
            if (a.blk_height == e.blk_height && a.blk_width == e.blk_width && a.pos_left == e.pos_left && a.pos_top == e.pos_top && a.rotate == e.rotate && a.parent_id == e.parent_id) return !0;
            null != e.blk_height && (i.height = e.blk_height), null != e.blk_width && (i.width = e.blk_width), null != e.pos_left && (i.left = e.pos_left), null != e.pos_top && (i.top = e.pos_top), null != e.rotate && (i.transform = 0 == e.rotate ? "" : "rotate(" + e.rotate + "deg) perspective(0)");
            var o = 0,
                r = ge(e.section_cell_id),
                s = hasClass(domPN(domPN(r)), "is_absolute");
            a.section_cell_id != e.section_cell_id && (null == e.parent_id && $(r).append(n), o = e.section_cell_id);
            var l = e.parent_id;
            if (a.parent_id != e.parent_id) {
                var d = null == e.parent_id ? e.section_cell_id : e.parent_id,
                    c = ge(d),
                    u = $(c);
                null != e.parent_id && hasClass(c, "slide") && hasClass(c, "hidden-slide") && pages_editor.setSlide(u.closest(".blk_box_slider"), d), u.append(n), l = e.parent_id
            }
            switch (n.attr("blk_class")) {
                case "blk_text":
                case "blk_image":
                    null != i.height && delete i.height;
                    break;
                case "blk_form":
                    var p = n.find(".blk_form_wrap form:visible");
                    p.length && (i.height = p.first().get(0).offsetHeight)
            }
            n.css(i), FE.run("section/resized"), FE.run("hybrid/resized"), hybridBlockResizer.processingBlockAfterResize(n);
            var f = !1;
            if (null != e.parent_id) {
                var h = n.parents(".slide.hidden-slide");
                0 !== h.length && (f = !0, h.removeClass("hidden-slide"))
            }
            return hybridManager.saveBlockData(n, o, l, a.section_cell_id), s || dndHelper.clearBlockStyles(n, !1, $(ge(e.section_cell_id)), !0), f && h.addClass("hidden-slide"), hybridManager.updateBlockPcData(e), !0
        }, t.getBlockData = function(e) {
            var i = {
                id: e.attr("id"),
                block_name: e.attr("blk_class"),
                rotate: 0
            };
            switch ("section" !== i.block_name && (i.rotate = t.getRotateAngle(e)), i.block_name) {
                case "blk_yandex_map":
                    e = e.find(".yandex_map:first");
                    break;
                case "blk_button_popup":
                    e = e.find(".blk_button_data_wrap:first a:first");
                    break;
                case "blk_html":
                    e = e.find(".blk-data:first");
                    break;
                case "blk_video":
                    e = e.find(".blk_video_data_wrap:first"), e.hasClass("empty") || (e = e.find("iframe:first"));
                    break;
                case "blk_divider":
                    e = e.find(".blk_divider_self:first");
                    break;
                case "blk_text":
                    e = e.find(".blk-data:first");
                    break;
                case "blk_form":
                    var n = e.find(".blk_form_wrap:first a.btn-form-popover:first");
                    e = n.length > 0 ? n : e.find(".blk_form_wrap:first form:first");
                    break;
                case "blk_button":
                    e = e.find(".blk_button_data_wrap:first a:first");
                    break;
                case "blk_box_slider":
                    e = e.find(".blk_box_slider_self:first");
                    break;
                case "blk_image":
                case "blk_image_ext":
                    e = e.find(".blk_image_data_wrap"), e.hasClass("empty") || (e = e.find("div.img_container:first"))
            }
            if ("section" == i.block_name) i.blk_height = Math.round(e.outerHeight());
            else {
                var a = this.getPosition(e);
                i.pos_top = a.top, i.pos_left = a.left, i.blk_height = Math.round(e.outerHeight()), i.blk_width = Math.round(e.outerWidth())
            }
            return i
        }, t.getRelatedBlockData = function(e, i) {
            var n = t.getBlockData(e),
                a = e.parent();
            if (a.hasClass("slide cell")) {
                var o = t.getRelatedBlockData(a);
                null != n.pos_left && (n.pos_left -= o.pos_left, n.pos_top -= o.pos_top)
            }
            return n.parent_id = null, n.section_cell_id = null, i && (a.hasClass("section-cell") ? n.section_cell_id = a.attr("id") : (n.parent_id = a.attr("id"), n.section_cell_id = a.closest(".section-cell").attr("id"))), n
        }, t.getPosition = function(t) {
            var e = t,
                i = 0,
                n = 0,
                a = !0;
            null == t.nodeType && (e = t.get(0));
            var o = hasClass(e, "is_hidden");
            if (o) {
                var r = e;
                removeClass(e, "is_hidden")
            }
            for (; null != e && !hasClass(e, "blk_section_inner") && !hasClass(e, "blk_section");)(a || "static" !== getComputedStyle(e).getPropertyValue("position")) && (i += e.offsetTop, n += e.offsetLeft, a = !1), e = domPN(e);
            return o && addClass(r, "is_hidden"), {
                top: Math.round(i),
                left: Math.round(n)
            }
        }, t.getRotateAngle = function(t) {
            null == t.nodeType && (t = t.get(0));
            var e = t.style.transform;
            return null == e || "" == e ? e = 0 : (e = /rotate\s?\((-?\d*)deg\)/.exec(e), null == e || e.length < 2 ? e = 0 : (e = parseInt(e[1]), isNaN(e) && (e = 0))), e
        }, t.getRotatedPosition = function(t, e, i) {
            var n = 0,
                a = 0;
            if (0 != i) {
                var o = Math.sqrt(Math.pow(t, 2) + Math.pow(e, 2));
                if (0 != o) {
                    var r = i - Math.atan2(e, t);
                    n = o * Math.cos(r), a = -o * Math.sin(r)
                }
            } else n = t, a = e;
            return {
                x: n,
                y: a
            }
        }, t.getRealOffset = function(t) {
            for (var e = 0, i = 0, n = t, a = 0; n && "body" !== n.nodeName.toLowerCase() && ++a <= 100;) e += n.offsetTop - n.scrollTop, i += n.offsetLeft - n.scrollLeft, n = n.offsetParent;
            return {
                top: e,
                left: i
            }
        }, t.isPointInPolygon = function(t, e, i) {
            for (var n = !1, a = t.length, o = a - 1, r = 0; r < a; o = r++) t[r][1] > i != t[o][1] > i && e < (t[o][0] - t[r][0]) * (i - t[r][1]) / (t[o][1] - t[r][1]) + t[r][0] && (n = !n);
            return n
        };
        var i = function(t, e, i, n, a, o, r, s) {
            var l = (s - o) * (i - t) - (r - a) * (n - e);
            if (0 == l) return !1;
            var d = ((r - a) * (e - o) - (s - o) * (t - a)) / l,
                c = ((i - t) * (e - o) - (n - e) * (t - a)) / l;
            return d >= 0 && d <= 1 && c >= 0 && c <= 1
        };
        t.isIntersectPolygons = function(e, n) {
            for (var a = n.length, o = 0; o < a; o++)
                if (t.isPointInPolygon(e, n[o][0], n[o][1])) return !0;
            var r = e.length;
            for (o = 0; o < r; o++)
                if (t.isPointInPolygon(n, e[o][0], e[o][1])) return !0;
            for (o = 0; o < r; o++) {
                var s = o + 1;
                s >= r && (s = 0);
                for (var l = 0; l < a; l++) {
                    var d = l + 1;
                    if (d >= a && (d = 0), i(e[o][0], e[o][1], e[s][0], e[s][1], n[l][0], n[l][1], n[d][0], n[d][1])) return !0
                }
            }
            return !1
        }, t.getBlockRelatedAngle = function(e) {
            null == e.nodeType && (e = e.get(0));
            for (var i = 0; null != e;) i += t.getRotateAngle(e), e = closest(domPN(e), "blk_box_slider");
            return i
        }, t.isRotatedBlock = function(e) {
            for (; null != e;) {
                var i = t.getRotateAngle(e);
                if (0 !== i) return !0;
                e = closest(domPN(e), "blk_box_slider")
            }
            return !1
        }, t.getBlockPolygon = function(i, n) {
            var a = i.getBoundingClientRect(),
                o = t.getBlockRelatedAngle(i);
            if (0 === o) return [
                [a.x, a.y],
                [a.x + a.width, a.y],
                [a.x + a.width, a.y + a.height],
                [a.x, a.y + a.height]
            ];
            null == n && (n = !1);
            var r = 0,
                s = 0;
            n && (r = e.scrollTop, s = e.scrollLeft);
            var l = i.offsetWidth,
                d = i.offsetHeight,
                c = l / 2,
                u = d / 2,
                p = Math.PI * o / 180,
                f = {
                    x: a.x + a.width / 2,
                    y: a.y + a.height / 2
                },
                h = t.getRotatedPosition(-c, u, p),
                m = t.getRotatedPosition(c, u, p),
                _ = t.getRotatedPosition(c, -u, p),
                g = t.getRotatedPosition(-c, -u, p);
            return [
                [f.x + h.x + s, f.y - h.y + r],
                [f.x + m.x + s, f.y - m.y + r],
                [f.x + _.x + s, f.y - _.y + r],
                [f.x + g.x + s, f.y - g.y + r]
            ]
        }, t.getPolygonFromRotatedRect = function(e, i, n, a, o) {
            var r = e / 2,
                s = i / 2,
                l = Math.PI * n / 180,
                d = {
                    x: a + r,
                    y: o + s
                },
                c = t.getRotatedPosition(-r, s, l),
                u = t.getRotatedPosition(r, s, l),
                p = t.getRotatedPosition(r, -s, l),
                f = t.getRotatedPosition(-r, -s, l);
            return [
                [d.x + c.x, d.y - c.y],
                [d.x + u.x, d.y - u.y],
                [d.x + p.x, d.y - p.y],
                [d.x + f.x, d.y - f.y]
            ]
        }, t.getBoundingClientRotatedRect = function(e, i, n, a, o) {
            for (var r = t.getPolygonFromRotatedRect(e, i, n, a, o), s = r.length, l = null, d = null, c = null, u = null, p = 0; p < s; p++) {
                var f = r[p];
                (null === l || l > f[1]) && (l = f[1]), (null === c || c < f[1]) && (c = f[1]), (null === d || d > f[0]) && (d = f[0]), (null === u || u < f[0]) && (u = f[0])
            }
            return {
                top: l,
                left: d,
                width: u - d,
                height: c - l
            }
        }, FE.runOnReady(function() {
            window.hybridData = t
        })
    }(),
    function() {
        "use strict";
        var t = {
            mapsData: [],
            mapInstances: {}
        };
        t.init = function() {
            return null != window.ymaps ? (t.mapScriptLoaded(), !1) :

                void setTimeout(function() {
                    var e = ce("script", {
                        src: "https://api-maps.yandex.ru/" + window.YANDEX_MAPS_API_VERSION + "/?lang=ru_RU&apikey=" + window.YANDEX_MAPS_API_KEY,
                        type: "text/javascript"
                    });
                    geByTag1("head").appendChild(e), e.onload = t.mapScriptLoaded
                }, 0)
        }, t.loadMapsData = function() {
            for (var e = 0; e < t.mapsData.length; e++) {
                var i = t.mapsData[e];
                if (null != ge(i.blockId)) {
                    var n = t.mapInstances[i.blockId] = new ymaps.Map("map_" + i.blockId, {
                        center: [i.lat, i.lon],
                        zoom: 17,
                        behaviors: ["default"],
                        controls: ["zoomControl"]
                    });
                    n.behaviors.isEnabled("scrollZoom") && n.behaviors.disable("scrollZoom");
                    var a = new ymaps.Placemark([i.lat, i.lon]);
                    n.geoObjects.add(a)
                }
            }
        }, t.mapScriptLoaded = function() {
            if (null == window.ymaps) throw new Error("#5410 Yandex Map not inited");
            ymaps.ready(t.loadMapsData)
        }, t.reInitMap = function(e, i, n) {
            if (null != e && null != window.ymaps && ymaps.Map) {
                var a = t.mapInstances,
                    o = $("#map_" + e),
                    r = o.hasClass("map-bg"),
                    s = o.closest(".blk_section");
                if (a[e] && (a[e].destroy(), delete a[e], r && s.addClass("empty_map")), o.empty(), ymaps && n && i) {
                    try {
                        a[e] = new ymaps.Map("map_" + e, {
                            center: [i, n],
                            zoom: 17,
                            controls: ["zoomControl"]
                        }), a[e].geoObjects.add(new ymaps.Placemark([i, n]))
                    } catch (t) {
                        consoleDbg(t)
                    }
                    r && s.removeClass("empty_map")
                }
            }
        }, t.addMap = function(e, i, n) {
            t.mapsData.push({
                blockId: e,
                lat: i,
                lon: n
            })
        }, window.yandexMaps = t
    }(), FE.add("onready", function() {
    var t = $("#aaa111"),
        e = $(".menu-bar:first"),
        i = $(),
        n = function() {
            return 0 == i.length && (i = $(".section_menu").filter(function() {
                return "none" != $(this).css("display")
            }).first()), i
        },
        a = $("#popup_list:first"),
        o = function() {
            t.hide(), e.addClass("menu-bar--full"), n().addClass("section_menu--visible")
        },
        r = function() {
            t.show(), e.removeClass("menu-bar--full"), n().removeClass("section_menu--visible")
        },
        s = function() {
            $(".wrap-for-shopCartModal:first:visible") && $("#shopCartModal").wind("hide"), $(".wrap-for-formPopover:first:visible") && $("#formPopover").wind("hide"), $(".wrap-for-btnPopupWnd:first:visible") && $("#btnPopupWnd").wind("hide"), a.children(".blk_section.section_popup:visible").each(function() {
                hideSectionPopup($(this).attr("id"))
            }), e.hasClass("menu-bar--full") ? r() : o()
        };
    $(".js-menu-bar__button").click(s), $(".blk_button .btn-new[act=anchor], .blk_button .btn-new[act=link]").click(function() {
        e.hasClass("menu-bar--full") && s()
    });
    var l = function(t) {
        adapterManager.ADAPTABILITY_TYPE_PC == t.type ? n().unScrollable() : n().scrollable()
    };
    FE.add(["popoverFormOpen", "sectionPopupOpen", "popupWndOpen", "shopCartOpen"], r), FE.add(["adapter_manager/set_version"], l)
}),
    function() {
        function t() {
            this.ADAPTABILITY_TYPE_PC = "pc", this.ADAPTABILITY_TYPE_TABLET = "tablet", this.ADAPTABILITY_TYPE_MOBILE = "mobile370", this.view_port = "editor", this.site_width = 960, this.DEVICE_TABLET_CONTENT_MIN_WIDTH = 800, this.DEVICE_TABLET_POPUP_MIN_WIDTH = 400, this.DEVICE_MOBILE_CONTENT_MIN_WIDTH = 370, this.DEVICE_MOBILE_POPUP_MIN_WIDTH = 300, this.DEVICE_MOBILE_MAX_WIDTH = 500, this.DEVICE_TABLET_MAX_WIDTH = 800, this.MARGIN_VERSION_OLD = 1, this.MARGIN_VERSION_NEW = 2, this.processResizing = 0, this.allowMediaQuery = 0, this.own_slider_editor = new e, this.typeIcons = {}, this.typeIcons[this.ADAPTABILITY_TYPE_PC] = "fa-desktop", this.typeIcons[this.ADAPTABILITY_TYPE_TABLET] = "fa-tablet", this.typeIcons[this.ADAPTABILITY_TYPE_MOBILE] = "fa-mobile", this.typeIconsList = [], this.types = [], this.nonPcClass = "non-pc", this.data_empty = {}, this.states = {}, this.data = {}, this.hybridData = {}, this.$sections = [], this.$blocks = [], this.type = this.ADAPTABILITY_TYPE_PC, this.prev_type = this.ADAPTABILITY_TYPE_PC, this.blockTextPcContents = {}, this.resize_timer = !1, this.selectors = {
                $desktop: $(".responsive_menu .responsive_menu_item[version=pc]")
            }, this.$defaultScopeRoot = null, this.$scopeRoot = null, this.$scopeBlocks = null, this.is_ready = !1, this.ready = function() {
                this.is_ready = !0, FE.runAndClr("adapterManager/ready")
            }, this.isReady = function() {
                return this.is_ready
            }, this.isEditor = function() {
                return "editor" == adapterManager.view_port
            }, this.isPreview = function() {
                return "preview" == this.view_port
            }, this.isView = function() {
                return "view" == adapterManager.view_port
            }, this.isPC = function() {
                return adapterManager.ADAPTABILITY_TYPE_PC == adapterManager.type
            }, this.getDefaultScopeRoot = function() {
                return this.$defaultScopeRoot || (this.$defaultScopeRoot = $("#site_wrapper1")), this.$defaultScopeRoot
            }, this.getScopeRoot = function() {
                return this.$scopeRoot || this.getDefaultScopeRoot()
            }, this.setScopeRoot = function(t) {
                this.$scopeRoot = t
            }, this.getDefaultScopeBlocks = function() {
                return this.getScopeRoot()
            }, this.getScopeBlocks = function() {
                return this.$scopeBlocks || this.getDefaultScopeBlocks()
            }, this.setScopeBlocks = function(t) {
                this.$scopeBlocks = t
            }, this.setVersion = function(t, e) {
                if ("undefined" == typeof e && (e = {}), "undefined" == typeof e.isEnableLockScreen ? e.isEnableLockScreen = !0 : e.isEnableLockScreen = !!e.isEnableLockScreen, e.isDisableCloseEditor = !!e.isDisableCloseEditor, e.skipProcessingItems = !!e.skipProcessingItems, "undefined" == typeof e.$scopeRoot && (e.$scopeRoot = adapterManager.getDefaultScopeRoot()), adapterManager.setScopeRoot(e.$scopeRoot), "undefined" == typeof e.$scopeBlocks && (e.$scopeBlocks = adapterManager.getDefaultScopeBlocks()), adapterManager.setScopeBlocks(e.$scopeBlocks), adapterManager.isEditor() && null !== pages_editor.activeSmartObject && !e.isDisableCloseEditor && pages_editor.closeEditor(!0), adapterManager.prev_type = adapterManager.type, adapterManager.type = t, $.isEmptyObject(adapterManager.data) && (adapterManager.data = adapterManager.data_empty), $.isEmptyObject(adapterManager.data[adapterManager.type]) && (adapterManager.data[adapterManager.type] = {}), $.isEmptyObject(adapterManager.data[adapterManager.prev_type]) && (adapterManager.data[adapterManager.prev_type] = {}), e.skipProcessingItems) return void adapterManager.setAdaptiveBodyClasses();
                if (e.isEnableLockScreen && adapterManager.isEditor()) {
                    var i;
                    switch (t) {
                        case adapterManager.ADAPTABILITY_TYPE_MOBILE:
                            i = "Переход в мобильный редактор";
                            break;
                        case adapterManager.ADAPTABILITY_TYPE_TABLET:
                            i = "Переход в редактор для планшета";
                            break;
                        case adapterManager.ADAPTABILITY_TYPE_PC:
                        default:
                            i = "Переход в редактор для ПК"
                    }
                    var n = lockScreen(i, {
                        css_class: "locker-white",
                        show_animation: !0
                    });
                    $("body").addClass("editor-hidden"), setTimeout(function() {
                        adapterManager.processingItems(), $("body").removeClass("editor-hidden"), FE.run("adapter_manager/set_version/editor", {
                            type: t
                        }), unlockScreen(n)
                    }, 50)
                } else adapterManager.processingItems();
                FE.run("adapter_manager/set_version", {
                    type: t
                })
            }, this.setAdaptiveBodyClasses = function() {
                var t = $("body");
                t.removeClass(adapterManager.types.join(" ")).removeClass(adapterManager.nonPcClass).addClass(adapterManager.type), adapterManager.type !== adapterManager.ADAPTABILITY_TYPE_PC && t.addClass(adapterManager.nonPcClass)
            }, this.initProcessingBlocks = function(t) {
                "undefined" != typeof t ? t == adapterManager.ADAPTABILITY_TYPE_PC ? (adapterManager.$sections = adapterManager.getScopeRoot().find(".blk_section:visible[adapter_type=" + t + "], .blk_section:visible:not([adapter_type])"), adapterManager.$blocks = adapterManager.getScopeBlocks().find(".blk:visible[adapter_type=" + t + "], .blk:visible:not([adapter_type])"), adapterManager.$containers = adapterManager.getScopeBlocks().find(".blk_container:visible[adapter_type=" + t + "], .blk_container:visible:not([adapter_type])")) : (adapterManager.$sections = adapterManager.getScopeRoot().find(".blk_section:visible[adapter_type=" + t + "]"), adapterManager.$blocks = adapterManager.getScopeBlocks().find(".blk:visible[adapter_type=" + t + "]"), adapterManager.$containers = adapterManager.getScopeBlocks().find(".blk_container:visible[adapter_type=" + t + "]")) : (adapterManager.$sections = adapterManager.getScopeRoot().find(".blk_section:visible:not([adapter_type=" + adapterManager.type + "])"), adapterManager.$blocks = adapterManager.getScopeBlocks().find(".blk:visible:not([adapter_type=" + adapterManager.type + "])"), adapterManager.$containers = adapterManager.getScopeBlocks().find(".blk_container:visible:not([adapter_type=" + adapterManager.type + "])"))
            }, this.savePC = function() {
                adapterManager.initProcessingBlocks(adapterManager.ADAPTABILITY_TYPE_PC), adapterManager.processingBlocksBeforeResize(), adapterManager.processingContainersBeforeResize(), adapterManager.processingSectionBeforeResize()
            }, this.setHiddenItemsVisibility = function(t) {
                const e = ".hidden-slide, .hidden-ms-item";
                adapterManager.getScopeBlocks().find(e).toggleClass("vis", t)
            }, this.processingItems = function() {
                this.processResizing = 1;
                var t = adapterManager.getSettings(adapterManager.type);
                adapterManager.setHiddenItemsVisibility(!0), adapterManager.showHideSections(), adapterManager.savePC(), adapterManager.setAdaptiveBodyClasses();
                var e = $("#site_wrapper1 .blk_section.is_absolute").length > 0;
                if (e && null != adapterManager.hybridData[adapterManager.type]) {
                    var i = adapterManager.hybridData[adapterManager.type];
                    1 !== adapterManager.allowMediaQuery && (adapterManager.processingHybridSections(i, e), adapterManager.processingHybridBlocks(i, e))
                }
                adapterManager.initProcessingBlocks(), adapterManager.resizeContent(t), adapterManager.resizeWindowPopup(t), adapterManager.processingSectionAfterResize(t), adapterManager.processingContainersAfterResize(t), adapterManager.processingBlocksAfterResize(), adapterManager.processingMapSectionsAfterResize(), adapterManager.hasOwnProperty("slickOpt") && adapterManager.reinitializeSlick(), adapterManager.isEditor() && adaptiveSettingsEditor.initContainersCells(t), adapterManager.fixFakeSections(), adapterManager.setHiddenItemsVisibility(!1), this.processResizing = 0
            }, this.processingHybridSections = function(t, e) {
                $("#site_wrapper1 .blk_section").each(function() {
                    var i = $(this),
                        n = i.attr("id"),
                        a = t[n],
                        o = {};
                    null == a || 0 === a.length ? (a = adapterManager.hybridData[adapterManager.ADAPTABILITY_TYPE_PC][n], o = null == a ? {} : a) : o = a;
                    var r = i.hasClass("blk-section--html") || i.hasClass("blk-section--ms");
                    return !!r || (!(!e || i.hasClass("is_absolute")) || void(null != o && 0 !== o.length && null != o.blk_height && i.css("height", o.blk_height)))
                })
            }, this.processingHybridBlocks = function(t, e) {
                $("#site_wrapper1 .blk").each(function() {
                    var i = $(this),
                        n = i.attr("id"),
                        a = {},
                        o = i.closest(".blk_section");
                    if (e && (!o.hasClass("is_absolute") || o.hasClass("hybrid-block-converting"))) return !0;
                    if (null != t[n] && 0 !== t[n].length) {
                        null != t[n].blk_height && (a.height = t[n].blk_height), null != t[n].blk_width && (a.width = t[n].blk_width), null != t[n].pos_left && (a.left = t[n].pos_left), null != t[n].pos_top && (a.top = t[n].pos_top);
                        var r = t[n].rotate;
                        null != r && (a.transform = 0 == r ? "" : "rotate(" + r + "deg)"), i.css(a)
                    } else {
                        var s = adapterManager.hybridData[adapterManager.ADAPTABILITY_TYPE_PC][n];
                        null == s && (s = window.hybridData.getBlockData(i));
                        var l = s.pos_left,
                            d = s.pos_top,
                            c = s.blk_width,
                            u = s.blk_height,
                            p = s.rotate,
                            f = adapterManager.getSettings(adapterManager.type),
                            h = f.width;
                        if (null != p && i.css("transform", 0 == p ? "" : "rotate(" + p + "deg)"), null != l) {
                            var m = l;
                            h < l + c && (m = h - c, m < 0 && (m = 0)), i.css("left", m);
                        }
                        if (null != d) {
                            var _ = d,
                                g = i.parent().closest(".blk_box_slider:visible");
                            if (g.length > 0) var w = g;
                            else w = o;
                            var v = w.height();
                            0 != v && v < d + u && (_ = v - u, _ < 0 && (_ = 0)), i.css("top", _)
                        }
                        if (null != c) {
                            var b = c;
                            if (c > h) {
                                b = h;
                                var y = blockManager.getBlock(n, !0);
                                "image_ext" == y.blockName && 2 == y.data.shape_type && (u = b)
                            }
                            i.css("width", b)
                        }
                        null != u && i.css("height", u)
                    }
                    switch (i.attr("blk_class")) {
                        case "blk_text":
                        case "blk_image":
                            "" != i.css("height") && i.css("height", "");
                            break;
                        case "blk_form":
                            var k = i.find(".blk_form_wrap form:visible");
                            k.length && i.css("height", k.first().get(0).offsetHeight)
                    }
                })
            }, this.addHybridDataItem = function(t, e, i) {
                var n = {};
                null == adapterManager.hybridData[t] && (adapterManager.hybridData[t] = {}), null != i.blk_height && (n.blk_height = parseInt(i.blk_height)), null != i.blk_width && (n.blk_width = parseInt(i.blk_width)), null != i.pos_left && (n.pos_left = parseInt(i.pos_left)), null != i.pos_top && (n.pos_top = parseInt(i.pos_top)), null != i.rotate && (n.rotate = parseInt(i.rotate)), adapterManager.hybridData[t][e] = n
            }, this.setAdaptiveHybridDataFromObject = function(t) {
                $.each(t, function(t, e) {
                    adapterManager.addHybridDataItem(t, e.id, e)
                })
            }, this.addHybridData = function(t) {
                for (var e in t)
                    if (t.hasOwnProperty(e))
                        for (var i in t[e]) t[e].hasOwnProperty(i) && adapterManager.addHybridDataItem(e, i, t[e][i])
            }, this.removeHybridData = function(t, e) {
                null == e && (e = []);
                for (var i in this.hybridData) e.indexOf(i) === -1 && null !== this.hybridData[i][t] && delete this.hybridData[i][t]
            }, this.fixFakeSections = function() {
                adapterManager.isEditor() || $("#sections_list").children(".blk_section.fixed_fake").each(function() {
                    var t = $(this).attr("id").substr(0, 32),
                        e = $("#" + t);
                    $(this).css({
                        height: e.css("height"),
                        padding: e.css("padding")
                    })
                })
            }, this.showHideSections = function() {
                if (adapterManager.isEditor()) {
                    var t = adapterManager.getScopeRoot().find(".blk_section");
                    t.each(function() {
                        var t = $(this),
                            e = t.attr("adapter_type"),
                            i = t.hasClass("fixed_fake") ? t.attr("id").substr(0, 32) : t.attr("id"),
                            n = "undefined" == typeof adapterManager.data[adapterManager.type][i] ? {} : adapterManager.data[adapterManager.type][i],
                            a = !1;
                        if (("undefined" == typeof e || adapterManager.ADAPTABILITY_TYPE_PC == e) && adapterManager.isEditor()) {
                            var o = "undefined" == typeof adapterManager.data[adapterManager.ADAPTABILITY_TYPE_PC][i] ? {} : adapterManager.data[adapterManager.ADAPTABILITY_TYPE_PC][i];
                            o.is_hidden = t.hasClass("is_hidden_on_pc") ? 1 : 0, adapterManager.data[adapterManager.ADAPTABILITY_TYPE_PC][i] = o
                        }
                        "undefined" != typeof n.is_hidden && 1 == n.is_hidden && (a = !0), a ? t.addClass("is_hidden") : t.removeClass("is_hidden")
                    })
                }
            }, this.resizeContent = function(t) {
                if (1 !== adapterManager.allowMediaQuery) {
                    var e = "#site_wrapper1";
                    adapterManager.isView() && (e += ",body"), $(e).css("min-width", t.min_width);
                    var i = t.popup_section_inner !== !1 && t.popup_section_inner,
                        n = $();
                    adapterManager.$sections.each(function() {
                        n = $(this), n.hasClass("section_popup") && i !== !1 ? n.find(".blk_section_inner:first").css({
                            width: i
                        }) : n.find(".blk_section_inner:first").css({
                            width: t.width
                        })
                    })
                }
            }, this.resizeWindowPopup = function(t) {
                $("#btnPopupWnd").css("width", t.window_popover_width), $("#j_lead_confirm").css("width", t.window_popover_width)
            }, this.processingContainersBeforeResize = function() {
                adapterManager.$containers.each(function() {
                    var t = $(this),
                        e = t.attr("adapter_type");
                    "undefined" == typeof e && (e = adapterManager.ADAPTABILITY_TYPE_PC);
                    var i = t.hasClass("v3"),
                        n = i ? ".td_container_cell" : ".cell.container_cell",
                        a = t.find(".blk_container_cells:first>" + n),
                        o = t.find(".blk_container_cells:first").outerWidth(),
                        r = e == adapterManager.ADAPTABILITY_TYPE_PC || "undefined" == typeof t.attr("count-cell-in-row") ? a.length : t.attr("count-cell-in-row"),
                        s = 0;
                    a.each(function() {
                        var t = $(this),
                            n = t.attr(i ? "cell_id" : "id"),
                            a = t.css("padding"),
                            r = "undefined" != typeof InstallTrigger;
                        r && (a = t.css("padding-top") + " " + t.css("padding-left")), s = number_format((100 * t.outerWidth() / o).toFixed(3), 3, "."), adapterManager.data[e][n] = {}, 1 !== adapterManager.allowMediaQuery && (adapterManager.data[e][n] = {
                            width: s,
                            padding: a,
                            margin_left: parseInt(t.css("margin-left"))
                        })
                    });
                    var l = t.find(".blk_container_cells:first " + n + ":not(:first):first");
                    adapterManager.data[e][t.attr("id")] = {
                        cell_margin_horizontal: parseFloat(l.css("margin-left")),
                        w_container_cells: o,
                        count_cell_in_row: r
                    }
                })
            }, this.processingContainersAfterResize = function(t) {
                adapterManager.$containers.each(function() {
                    var e = $(this);
                    e.attr("adapter_type", adapterManager.type);
                    var i = "undefined" != typeof adapterManager.data[adapterManager.type][e.attr("id")] && adapterManager.data[adapterManager.type][e.attr("id")],
                        n = parseInt(0 == i || "undefined" == typeof i.count_cell_in_row ? t.default_count_cell_in_row : i.count_cell_in_row),
                        a = e.hasClass("v3");
                    if (adapterManager.isPC()) {
                        if (1 !== adapterManager.allowMediaQuery && a && e.find(".blk_container_cells:first").css({
                            display: "table"
                        }), (1 !== adapterManager.allowMediaQuery || !a) && (adapterManager.processingCellsInBlockOnPC(e), adapterManager.isEditor())) {
                            var o = a ? ".td_container_cell" : ".cell.container_cell",
                                r = e.find(".blk_container_cells:first>" + o);
                            adapterManager.setResizerPosition(r)
                        }
                    } else 1 === adapterManager.allowMediaQuery && a || (a && e.find(".blk_container_cells:first").css({
                        display: "flex",
                        "flex-flow": "row wrap"
                    }), adapterManager.setCountColumn(e, n))
                }), adapterManager.hasOwnProperty("slickOpt") && adapterManager.reinitializeSlick()
            }, this.removeSlickClasses = function(t) {
                t.length && t.removeClass("initSlick")
            }, this.rebuildSlick = function(t) {
                t.length && t.each(function() {
                    var t = $(this),
                        e = t.closest(".blk_box_slider"),
                        i = t.children(".slider:first");
                    null != i.get(0).slick && (i.slick("unslick"), i.slick(adapterManager.slickOpt[e.attr("id")]))
                })
            }, this.reinitializeSlick = function() {
                var t = this.getScopeRoot();
                this.getScopeRoot().is("#popup_list") ? this.removeSlickClasses(t.find(".initSlick")) : this.removeSlickClasses(t.find("#popup_list .initSlick")), this.rebuildSlick(t.find(".blk_box_slider_self"))
            }, this.processingCellsInBlockOnPC = function(t) {
                var e = t.hasClass("v3");
                if (1 !== adapterManager.allowMediaQuery || !e) {
                    var i = e ? ".td_container_cell" : ".cell.container_cell",
                        n = t.find(".blk_container_cells:first>" + i);
                    t.find(".row-splitter").remove(), 1 !== adapterManager.allowMediaQuery && n.each(function() {
                        var t = $(this),
                            i = t.attr(e ? "cell_id" : "id"),
                            n = adapterManager.data[adapterManager.ADAPTABILITY_TYPE_PC][i];
                        t.css({
                            width: n.width + "%",
                            padding: n.padding,
                            "margin-left": n.margin_left
                        })
                    })
                }
                processingBlockInCells(n)
            }, this.processingSectionBeforeResize = function() {
                adapterManager.$sections.each(function() {
                    var t = $(this),
                        e = t.attr("adapter_type");
                    "undefined" == typeof e && (e = adapterManager.ADAPTABILITY_TYPE_PC);
                    var i = t.find(".blk_section_inner:first"),
                        n = "undefined" == typeof adapterManager.data[e][t.attr("id")] ? {} : adapterManager.data[e][t.attr("id")];
                    n.pad_top = t.css("padding-top"), n.pad_bottom = t.css("padding-bottom"), n.width = i.css("width"), n["max-width"] = i.css("max-width"), adapterManager.data[e][t.attr("id")] = n
                })
            }, this.processingMapSectionsAfterResize = function() {
                adapterManager.$sections.each(function() {
                    var t = $(this);
                    (t.hasClass("bg_type_map") || "map" == t.attr("bg_type")) && yandexMaps.reInitMap(t.attr("id"), t.attr("data-map-latitude"), t.attr("data-map-longitude"))
                })
            }, this.processingSectionAfterResize = function() {
                adapterManager.$sections.each(function() {
                    var t = $(this);
                    if (t.attr("adapter_type", adapterManager.type), 1 === adapterManager.allowMediaQuery) return !0;
                    var e = t.attr("id"),
                        i = "undefined" == typeof adapterManager.data[adapterManager.type][e] ? {} : adapterManager.data[adapterManager.type][e],
                        n = t.hasClass("blk-section--html") || t.hasClass("blk-section--ms");
                    if (!n) {
                        var a = {};
                        "undefined" != typeof i.pad_top && (a["padding-top"] = i.pad_top), "undefined" != typeof i.pad_bottom && (a["padding-bottom"] = i.pad_bottom), t.css(a)
                    }
                    var o = {};
                    "undefined" != typeof i.width && (o.width = i.width), "undefined" != typeof i["max-width"] && (o["max-width"] = i["max-width"]), t.find(".blk_section_inner:first").css(o)
                })
            }, this.processingBlocksBeforeResize = function() {
                adapterManager.$blocks.each(function() {
                    var t = $(this);
                    if (t.closest(".slick-cloned").length > 0) return !0;
                    var e = t.attr("blk_class"),
                        i = t.attr("adapter_type"),
                        n = t.attr("id");
                    if ("undefined" == typeof i && (i = adapterManager.ADAPTABILITY_TYPE_PC), "blk_image_ext" === e && adapterManager.isEditor()) {
                        var a = t.find(".img-crop:first"),
                            o = a.find("img:first, .svg_container"),
                            r = t.find(".blk_image_data_wrap:first");
                        pages_editor.img_ext_list_w[n] = {
                            crop_start_w: a.width(),
                            crop_start_h: a.height(),
                            prod_start_w: o.width(),
                            wrap_start_w: r.width(),
                            img_position_start: o.length > 0 ? o.position() : {
                                top: 0,
                                left: 0
                            },
                            real_w: o.attr("real_w"),
                            real_h: o.attr("real_h")
                        }
                    }
                    adapterManager.data[i][n] = adapterManager.getAdaptiveDataOfBlock(t)
                })
            }, this.processingBlocksAfterResize = function() {
                adapterManager.$blocks.each(function() {
                    $(this).attr("adapter_type", adapterManager.type), adapterManager.processingBlockAfterResize($(this))
                })
            }, this.getSrcImageMod = function(t, e, i) {
                var n = t.split(".").pop(),
                    a = t.substring(0, t.indexOf("/-/"));
                if ("gif" == n) return t;
                var o = i ? "/-/scale/x2" : "";
                if ("undefined" != typeof e.offset_top && "undefined" !== e.offset_left && "undefined" !== e.crop_w && "undefined" !== e.crop_h && "undefined" !== e.real_w && "undefined" !== e.real_h && "undefined" !== e.prod_w && "undefined" !== e.prod_h) {
                    var r = e.prod_h / e.real_h,
                        s = e.prod_w / e.real_w,
                        l = Math.ceil(Math.abs(e.offset_left || 0) / s),
                        d = Math.ceil(Math.abs(e.offset_top || 0) / r),
                        c = Math.ceil((e.crop_w || 0) / s),
                        u = Math.ceil((e.crop_h || 0) / r);
                    o += "/-/crop/" + l + "x" + d + "x" + c + "x" + u
                }
                return e.crop_w && (o += "/-/resize/" + e.crop_w), e.quality && (o += "/-/quality/" + e.quality), o += "/file." + n, o = a + o
            }, this.processingBlockAfterResize = function(t) {
                var e = t.attr("id"),
                    i = adapterManager.data[adapterManager.type][e],
                    n = {},
                    a = adapterManager.isPC();
                null == i ? (i = adapterManager.data[adapterManager.ADAPTABILITY_TYPE_PC][e], null != i && (n = i, a = !0)) : n = i, adapterManager.setBlockData(t, n, a)
            }, this.setBlockData = function(t, e, i) {
                var n, a = t.attr("blk_class");
                switch (i = !!i, adapterManager.isEditor() || "blk_image_ext" != a || (a = "blk_image"), a) {
                    case "blk_image":
                        var o = t.find(".img_container img:first:not(.magnify-icon), .svg_wrap"),
                            r = o.attr("src"),
                            s = !1;
                        if ((t.has(".blk_image_data_wrap.empty").length || null == r || "" == r) && (r = o.attr("data-src"), s = !0, null == r || "" == r)) break;
                        if ("undefined" != typeof e.align) {
                            var l = t.find(".blk_image_data_wrap:first");
                            l.removeClass("l_text").removeClass("c_text").removeClass("r_text").addClass(e.align)
                        }
                        if (n = r.split(".").pop(), "undefined" != typeof e.prod_w && 1 !== adapterManager.allowMediaQuery && (o.css("width", e.prod_w).attr("prod_w", e.prod_w), o.css("height", "auto")), !adapterManager.isEditor() && (1 !== adapterManager.allowMediaQuery && ("undefined" != typeof e.crop_w && o.css("width", e.crop_w), this.isPC() ? o.css("width", o.attr("medium-style-w")) : o.css("height", "auto")), null != r && "svg" != n)) {
                            var d = r;
                            if (adapterManager.isPC()) d = o.attr("pc-adapt");
                            else if (1 == e.has_crop_image) {
                                e.quality = o.attr("data-quality");
                                var c = !1;
                                o.attr("pc-adapt") && (c = o.attr("pc-adapt").toString().indexOf("/scale/x2/") != -1), d = this.getSrcImageMod(d, e, c)
                            }
                            o.attr(s ? "data-src" : "src", d)
                        }
                        break;
                    case "blk_slider":
                        var u = t.find(".fotorama:first");
                        (u.hasClass("fotorama--is-ready") || t.closest(".blk_section").hasClass("section_popup")) && adapterManager.own_slider_editor.reinitFotorama(u);
                        break;
                    case "blk_form":
                        if ("undefined" != typeof e.width && 1 !== adapterManager.allowMediaQuery && t.find(".blk_form_wrap:not(.is_popover) form").css("width", e.width), "undefined" != typeof e.align) {
                            var p = t.find(".blk_form_wrap:first");
                            p.removeClass("l_text").removeClass("c_text").removeClass("r_text").addClass(e.align)
                        }
                        break;
                    case "blk_video":
                        if (adapterManager.isEditor()) {
                            blockManager.getBlock(t.attr("id"), !0).applyToHtmlAdaptiveData(e);
                            break
                        }
                        var f = t.find("iframe:first");
                        if (f.length && null != e.width && null != e.height) {
                            var h = {
                                height: e.height,
                                width: e.width
                            };
                            1 !== adapterManager.allowMediaQuery && (f.css(h), f.attr("data-width", h.width))
                        }
                        break;
                    case "blk_image_ext":
                        var m = t.find(".img-crop:first"),
                            _ = m.find("img:first, .svg_container"),
                            g = _.length > 0 ? _.position() : {
                                top: 0,
                                left: 0
                            },
                            w = {
                                crop_w: 0,
                                crop_h: 0,
                                offset_top: 0,
                                offset_left: 0,
                                prod_w: 0,
                                prod_h: 0
                            };
                        n = "", _.attr("src") && (n = _.attr("src").split(".").pop()), adapterManager.isEditor() && pages_editor.setZoomImgExt(t.attr("id"), _), "undefined" != typeof e.crop_w ? w.crop_w = e.crop_w : w.crop_w = m.width(), "undefined" != typeof e.crop_h ? w.crop_h = e.crop_h : w.crop_h = m.height(), "undefined" != typeof e.offset_top ? w.offset_top = e.offset_top : w.offset_top = g.top, "undefined" != typeof e.offset_left ? w.offset_left = e.offset_left : w.offset_left = g.left, "undefined" != typeof e.prod_w ? w.prod_w = e.prod_w : w.prod_w = _.width(), "undefined" != typeof e.prod_h ? w.prod_h = e.prod_h : w.prod_h = _.height(), m.attr("crop_w", w.crop_w).attr("crop_h", w.crop_h).css({
                            width: w.crop_w,
                            height: w.crop_h
                        }), _.attr("prod_w", w.prod_w).attr("prod_h", w.prod_h), _.attr("offset_top", w.offset_top).attr("offset_left", w.offset_left), "svg" === n ? _.css({
                            width: "100%"
                        }) : _.css({
                            width: w.prod_w,
                            top: w.offset_top,
                            left: w.offset_left
                        }), "undefined" != typeof e.align && (l = t.find(".blk_image_data_wrap:first"), l.removeClass("l_text").removeClass("c_text").removeClass("r_text").addClass(e.align));
                        break;
                    case "blk_yandex_map":
                        var v = t.find(".yandex_map_wrap:first"),
                            b = t.find(".blk_yandex_map_data_wrap:first"),
                            y = {};
                        "undefined" != typeof e.width && (y.width = e.width, b.attr("data-width", e.width)), "undefined" != typeof e.height && (y.height = e.height, b.attr("data-height", e.height)), 1 !== adapterManager.allowMediaQuery && v.css(y);
                        var k = t.attr("id"),
                            C = b.attr("data-map-latitude"),
                            M = b.attr("data-map-longitude");
                        yandexMaps.reInitMap(k, C, M);
                        break;
                    case "blk_text":
                        if (!adapterManager.isEditor() && 1 === adapterManager.allowMediaQuery) break;
                        var x = t.children(".blk-data");
                        x.length > 1 && (x = x.filter("." + adapterManager.type + "--blk-data:first"));
                        var $ = {},
                            S = "",
                            T = "";
                        if (isset(e.body) && adapterManager.isEditor() && x.html(e.body), adapterManager.isPC() || (S = parseInt(x.css("font-size")), T = x.css("text-align")), 1 === adapterManager.allowMediaQuery) break;
                        var E = hybridManager.isAbsoluteBlock(t);
                        E || (isset(e.padding_top) && ($["padding-top"] = e.padding_top), isset(e.padding_bottom) && ($["padding-bottom"] = e.padding_bottom)), $["text-align"] = T, isset(e.text_align) && ($["text-align"] = e.text_align), $["font-size"] = S, isset(e.font_size) && ($["font-size"] = e.font_size);
                        var I = "normal";
                        if (i) {
                            var P = blockManager.getBlock(t.attr("id"), !0),
                                A = parseInt(P.data.line_height);
                            isNaN(A) || (I = A + "%")
                        }
                        $["line-height"] = I, x.css($);
                        break;
                    case "blk_divider":
                        "undefined" != typeof e.blc_height && 1 !== adapterManager.allowMediaQuery && t.find(".blk_divider_self:first").css("height", e.blc_height);
                        break;
                    case "blk_button":
                    case "blk_button_popup":
                        if ("undefined" != typeof e.align) {
                            var D = t.find(".blk_button_data_wrap:first");
                            D.removeClass("l_text").removeClass("c_text").removeClass("r_text").addClass(e.align)
                        }
                }
            }, this.updateCells = function(t, e) {
                var i = "";
                "undefined" != typeof e && (i = "[row=" + e + "]");
                var n = t.hasClass("v3") ? 3 : 2,
                    a = 3 == n ? ".td_container_cell" : ".cell.container_cell";
                if (0 != t.length) {
                    var o = t.find(".blk_container_cells:first>" + a + i),
                        r = 0,
                        s = $(),
                        l = $();
                    o.each(function() {
                        s = $(this), r = parseInt(s.attr("row"))
                    }), o.each(function() {
                        s = $(this);
                        var t = s.attr(3 == n ? "cell_id" : "id");
                        if (l = $("#cell-resizer-" + t), 0 != l.length) {
                            var e = l.attr("margin_horizontal");
                            l.css({
                                height: 40,
                                left: s.position().left + parseInt(s.css("width")) + Math.floor(e / 2) + parseInt(e)
                            })
                        }
                    })
                }
            }, this.getSettings = function(t) {
                var e = {};
                switch (t) {
                    case adapterManager.ADAPTABILITY_TYPE_PC:
                        e = {
                            min_width: adapterManager.site_width,
                            width: adapterManager.site_width,
                            popup_section_inner: !1,
                            form_popover_width: 400,
                            window_popover_width: 500,
                            cell_margin_horizontal: !1,
                            default_count_cell_in_row: 1
                        };
                        break;
                    case adapterManager.ADAPTABILITY_TYPE_TABLET:
                        e = {
                            min_width: adapterManager.DEVICE_TABLET_CONTENT_MIN_WIDTH,
                            width: adapterManager.DEVICE_TABLET_CONTENT_MIN_WIDTH,
                            popup_section_inner: adapterManager.DEVICE_TABLET_POPUP_MIN_WIDTH,
                            form_popover_width: adapterManager.DEVICE_TABLET_POPUP_MIN_WIDTH,
                            window_popover_width: 450,
                            cell_margin_horizontal: 3,
                            default_count_cell_in_row: 2
                        };
                        break;
                    case adapterManager.ADAPTABILITY_TYPE_MOBILE:
                        e = {
                            min_width: adapterManager.DEVICE_MOBILE_CONTENT_MIN_WIDTH,
                            width: adapterManager.DEVICE_MOBILE_CONTENT_MIN_WIDTH,
                            popup_section_inner: adapterManager.DEVICE_MOBILE_POPUP_MIN_WIDTH,
                            form_popover_width: adapterManager.DEVICE_MOBILE_POPUP_MIN_WIDTH,
                            window_popover_width: 340,
                            cell_margin_horizontal: 3,
                            default_count_cell_in_row: 2,
                            new_default_count_cell_in_row: 1
                        };
                        break;
                    case "":
                }
                return e
            }, this.setCountColumn = function(t, e, i) {
                if (t.closest(".slick-cloned").length > 0) return !0;
                t.attr("count-cell-in-row", e);
                var n = t.attr("id"),
                    a = adapterManager.data[adapterManager.ADAPTABILITY_TYPE_PC][n];
                if (adapterManager.isEditor()) {
                    var o = blockManager.getBlock(n);
                    o.data.countCellInRow = e
                }
                if ("undefined" != typeof a) {
                    var r = adapterManager.data[adapterManager.type][n],
                        s = adapterManager.getSettings(adapterManager.type),
                        l = !1,
                        d = {},
                        c = t.hasClass("v3"),
                        u = c ? ".td_container_cell" : ".cell.container_cell",
                        p = t.find(".blk_container_cells:first>" + u),
                        f = t.width(),
                        h = a.w_container_cells,
                        m = "undefined" == typeof r || "undefined" == typeof r.cell_margin_horizontal ? s.cell_margin_horizontal : r.cell_margin_horizontal;
                    adapterManager.MARGIN_VERSION_NEW === window.marginVersion && (m = 0);
                    var _ = 0,
                        g = 0,
                        w = [],
                        v = 0,
                        b = !1,
                        y = 1,
                        k = 0,
                        C = t.closest(".slide").length > 0,
                        M = 100 / f,
                        x = (100 / h).toFixed(3),
                        S = 0,
                        T = C && !i ? 2.8 : 0;
                    t.find(".row-splitter").remove(), p.each(function() {
                        1 !== adapterManager.allowMediaQuery && $(this).css({
                            "padding-left": 0,
                            "padding-right": 0
                        });
                        var i = $(this).attr(c ? "cell_id" : "id");
                        if (++_, d = adapterManager.data[adapterManager.ADAPTABILITY_TYPE_PC][i], g += parseFloat(d.width), w.push(i), _ % e == 0 || _ == p.length) {
                            v = f - m * (w.length + 1);
                            var n = Math.floor(g / x),
                                a = "";
                            if (!adapterManager.isPC()) {
                                var o = $('<div class="row-splitter clearfix" style="height: ' + S + 'px"></div>');
                                o.attr("owner-row", y), b = c ? $("div[cell_id=" + w[0] + "]") : $("#" + w[0]), c && o.css("display", "table-row"), b.before(o)
                            }
                            for (var r in w) {
                                b = c ? $("div[cell_id=" + w[r] + "]") : $("#" + w[r]);
                                var s = 0;
                                l = "undefined" != typeof adapterManager.data[adapterManager.type][w[r]] && adapterManager.data[adapterManager.type][w[r]];
                                var u = 0 != l && "undefined" != typeof l.width && l.width;
                                d = adapterManager.data[adapterManager.ADAPTABILITY_TYPE_PC][w[r]];
                                var h = 0;
                                if (0 == u) {
                                    var C = Math.floor(d.width / x);
                                    h = 100 * C / n, s = Math.round((h - T) / (100 / v).toFixed(3)), a = number_format((M * s).toFixed(3), 3, ".")
                                } else a = u;
                                1 !== adapterManager.allowMediaQuery && (b.css({
                                    width: a + "%",
                                    "margin-left": m
                                }), adapterManager.MARGIN_VERSION_NEW === window.marginVersion && b.css({
                                    padding: "0px 10px"
                                })), adapterManager.resetSizeImageExt(b), processingBlockInCells(b), b.attr("row", y)
                            }
                            adapterManager.updateCells(t, y), w = [], g = 0, k = 0, ++y, S = 11, adapterManager.MARGIN_VERSION_NEW === window.marginVersion && (S = 20)
                        }
                    }), adapterManager.setResizerPosition(p, m)
                }
            }, this.setResizerPosition = function(t, e) {
                e = e || 0;
                var i = t.find(".blk-container__resize-inner").removeAttr("style");
                if (!adapterManager.isPC()) {
                    var n = parseInt(i.css("left"), 10);
                    i.css("left", n - (e / 2).toFixed(0))
                }
            }, this.resetSizeImageExt = function(t) {
                var e = t.hasClass("blk_image_ext") ? t : t.find(".blk.blk_image_ext");
                "undefined" != typeof adapterManager.data[adapterManager.ADAPTABILITY_TYPE_PC] && e.each(function() {
                    var t = $(this),
                        e = t.attr("id"),
                        i = "undefined" == typeof adapterManager.data[adapterManager.ADAPTABILITY_TYPE_PC][e] ? {} : adapterManager.data[adapterManager.ADAPTABILITY_TYPE_PC][e];
                    adapterManager.setBlockData(t, i)
                })
            }, this.initView = function() {
                adapterManager.initFotorama()
            }, this.initResize = function(t) {
                var e = function(e) {
                    var i = $(window).width(),
                        n = adapterManager.ADAPTABILITY_TYPE_PC;
                    for (var a in t) {
                        var o = t[a];
                        i >= o.min && i <= o.max && (n = o.name)
                    }
                    e || (e = {}), adapterManager.type != n && adapterManager.setVersion(n, e)
                };
                $(window).resize(function() {
                    clearTimeout(adapterManager.resize_timer), adapterManager.resize_timer = setTimeout(e, 100)
                }), FE.add("show_section_popup", function(t) {
                    var i = {};
                    isset(t.section_id) && (i.$scopeBlocks = $("#" + t.section_id), i.$scopeRoot = $("#popup_list")), e(i), adapterManager.setScopeRoot(adapterManager.getDefaultScopeRoot()), adapterManager.setScopeBlocks(adapterManager.getDefaultScopeBlocks())
                }), e()
            }, this.getAdaptiveDataOfBlock = function(t) {
                if (adapterManager.isEditor()) return blockManager.getBlock(t.attr("id"), !0).getAdaptiveDataFromHtml();
                var e = {},
                    i = t.attr("blk_class");
                switch (adapterManager.isEditor() || "blk_image_ext" !== i || (i = "blk_image"), i) {
                    case "blk_text":
                        var n = t.find(".blk-data:first");
                        e.body = n.html(), e.text_align = n.css("text-align"), e.font_size = parseInt(n.css("font-size")), e.padding_top = parseInt(n.css("padding-top")), e.padding_bottom = parseInt(n.css("padding-bottom")), e.padding_left = parseInt(n.css("padding-left")), e.padding_right = parseInt(n.css("padding-right")), e.is_padding_split = 1, e.padding_top === e.padding_bottom && e.padding_top === e.padding_left && e.padding_left === e.padding_right && (e.is_padding_split = 0);
                        break;
                    case "blk_image":
                        e.prod_w = t.find(".img_container img").css("width"), e.prod_h = t.find(".img_container img").css("height");
                        var a = t.find(".blk_image_data_wrap:first");
                        a.hasClass("l_text") ? e.align = "l_text" : a.hasClass("r_text") ? e.align = "r_text" : a.hasClass("c_text") && (e.align = "c_text");
                        break;
                    case "blk_image_ext":
                        var o = t.find(".img-crop:first"),
                            r = o.find("img:first, .svg_container"),
                            s = r.length > 0 ? r.position() : {
                                top: 0,
                                left: 0
                            },
                            l = t.find(".blk_image_data_wrap:first");
                        e = {
                            crop_w: o.width(),
                            crop_h: o.height(),
                            offset_top: s.top,
                            offset_left: s.left,
                            prod_w: r.width(),
                            prod_h: r.height()
                        }, l.hasClass("l_text") ? e.align = "l_text" : l.hasClass("r_text") ? e.align = "r_text" : l.hasClass("c_text") && (e.align = "c_text");
                        break;
                    case "blk_button":
                    case "blk_button_popup":
                        var d = t.find(".blk_button_data_wrap:first");
                        d.hasClass("l_text") ? e.align = "l_text" : d.hasClass("r_text") ? e.align = "r_text" : d.hasClass("c_text") && (e.align = "c_text");
                        break;
                    case "blk_form":
                        var c = t.find(".blk_form_wrap:first");
                        c.hasClass("l_text") ? e.align = "l_text" : c.hasClass("r_text") ? e.align = "r_text" : c.hasClass("c_text") && (e.align = "c_text");
                        var u = c.children("form:first").css("width");
                        e.width = "100%" === u ? null : parseInt(u);
                        break;
                    case "blk_video":
                        var p = t.find("iframe:first");
                        e.width = p.width(), e.height = p.height();
                        break;
                    case "blk_yandex_map":
                        var f = t.find(".yandex_map_wrap:first");
                        e.width = f.width(), e.height = f.height();
                        break;
                    case "blk_divider":
                        e.blc_height = t.find(".blk_divider_self:first").height()
                }
                return e
            }, this.initFotorama = function() {
                var t = function(t) {
                    t.on("fotorama:load", function() {
                        $(this).addClass("fotorama--is-ready")
                    }).fotorama()
                };
                adapterManager.getScopeBlocks().find(".blk_slider_data_wrap > .fotorama, .blk-data > .fotorama").each(function() {
                    var e = $(this);
                    if (0 == e.find(".fotorama__wrap").length) {
                        var i = e.closest(".blk_section"),
                            n = i.index(),
                            a = i.hasClass("section_popup"),
                            o = i.hasClass("is_absolute");
                        if (o) {
                            var r = e.closest(".blk.blk_slider").height();
                            e.attr("data-height", r)
                        }
                        var s = !0;
                        (a || n >= 2) && "complete" !== document.readyState && !adapterManager.isEditor() && (s = !1), s ? t(e) : FE.add("onload", function() {
                            t(e)
                        })
                    } else e.addClass("fotorama--is-ready")
                })
            }, this.initInPreview = function() {
                adapterManager.initFotorama(), FE.add("show_section_popup", function(t) {
                    var e = {};
                    t.section_id && (e.$scopeBlocks = $("#" + t.section_id), e.$scopeRoot = $("#popup_list")), adapterManager.setVersion(adapterManager.type, e)
                })
            }, this.initStates = function(t) {
                for (var e in t) t.hasOwnProperty(e) && (adapterManager.states[e] = t[e] ? 1 : 0, adapterManager.types.push(e), adapterManager.typeIconsList.push(adapterManager.typeIcons[e]), adapterManager.data_empty[e] = {})
            }
        }

        function e() {
            this.$btn_slider_settings = null, this.$wnd_slider_empty = null, this.$wnd_slider = null, this.$wnd_slider_images = null, this.$block_fotorama = null, this.$block_data_encoded = null, this.$block_wrap = null, this.$block_loading = null, this.smart_block = null
        }
        sliderEditorExtend(e), FE.runOnReady(function() {
            window.adapterManager = new t, window.adapterManager.ready()
        })
    }(),
    function() {
        function t() {
            this.integration_id = "yandex_money", this.form_root = $(), this.submitFormSettings = function() {
                var t = {},
                    e = !0;
                ymis_manager.form_root.find("input").each(function() {
                    "checkbox" === $(this).attr("type") || "radio" === $(this).attr("type") ? t[$(this).attr("name")] = $(this).prop("checked") ? 1 : 0 : t[$(this).attr("name")] = $(this).val().trim()
                });
                var i = ymis_manager.validateFormSettings(t);
                for (var n in i) ymis_manager.form_root.find("div[parent-name=" + n + "]:first").html(i[n].join("<br/>")), i[n].length > 0 && (e = !1, "successURL" == n && ymis_manager.form_root.find(".js_yamoney_settings_extra").addClass("in").css({
                    height: "auto"
                }));
                if (e) {
                    var a = {
                        settings: t
                    };
                    a.form_id = pages_editor.activeSmartObject.id, a.integration_id = ymis_manager.integration_id, saveMan.add("save_ymis_settings", a)
                }
                return e
            }, this.onSaveSettings = function(t) {
                formEditor.setPaymentSettings(ymis_manager.integration_id, t.settings, t.form_id)
            }, this.clearFormSettings = function(t) {
                sitesIntMan.isIntegrationEnabledForSite(ymis_manager.integration_id) ? ymis_manager.form_root.find(".lock-ind-settings:first").hide() : ymis_manager.form_root.find(".lock-ind-settings:first").show(), t.find("input").each(function() {
                    ymis_manager.form_root.find("div[parent-name=" + $(this).attr("name") + "]:first").html(""), "checkbox" === $(this).attr("type") || "radio" === $(this).attr("type") ? $(this).prop("checked", !1) : $(this).val("")
                })
            }, this.getDefaultSettings = function() {
                return {
                    wallet_number: "",
                    targets: "",
                    amount: "",
                    formcomment: "",
                    after_pay_action: "back",
                    successURL: ""
                }
            }, this.validateFormSettings = function(t) {
                var e = {};
                for (var i in t) switch (e[i] = [], $.inArray(i, ["wallet_number", "targets", "amount"]) >= 0 && 0 == t[i].length && e[i].push("Поле обязательно для заполнения"), i) {
                    case "wallet_number":
                        /[^[0-9]/.test(t[i]) && e[i].push("Неверный формат. Допустимы только цифры");
                        break;
                    case "amount":
                        t[i] = t[i].split(",").join("."), /^\.|\d+\..*\.|[^\d\.{1}]/.test(t[i]) && e[i].push("Неверный формат. Допустимы только цифры"), "" !== t[i] && t[i].split(".")[0] < 2 && e[i].push("Сумма должна быть не менее 2 рублей");
                        break;
                    case "successURL":
                        t[i].length > 0 && !checkProtocolInUrl(t[i]) && e[i].push("Неверный формат URL");
                        break;
                    case "targets":
                        t[i].length > 150 && e[i].push("максимальное значение поля 150 символов");
                        break;
                    case "formcomment":
                        t[i].length > 50 && e[i].push("максимальное значение поля 50 символов")
                }
                return e
            }, this.loadFormSettings = function(t) {
                var e = $(),
                    i = ymis_manager.form_root;
                if (0 != i.length && (ymis_manager.clearFormSettings(i), "undefined" != typeof t && "undefined" != typeof t.settings))
                    for (var n in t.settings) e = i.find("input[name=" + n + "]"), "checkbox" === e.attr("type") || "radio" === e.attr("type") ? e.prop("checked", 1 == t.settings[n]) : e.val(t.settings[n])
            }, this.submitLeadForm = function(t, e, i, n) {
                var a = LpmBase64.encode(JSON.stringify({
                        lead_id: e,
                        key: i
                    })),
                    o = $("#ymis_" + t);
                ("undefined" === t || $.isNumeric(t)) && slackDebug("Error 6556, y_money invalid lead id: " + e);
                var r = o.find("input[name=successURL]"),
                    s = r.data("url");
                r.val(s + e), o.find("input[name=paymentType]").val(n), o.find("input[name=label]").val(a), o.submit()
            }, this.enabledModule = function() {
                var t = lockScreen("Подключаем интеграцию!", {
                    show_animation: !0
                });
                saveMan.add("enabled_ymis_module", {
                    integration_id: ymis_manager.integration_id,
                    lock_id: t
                })
            }, this.afterEnabledModule = function(t) {
                ymis_manager.form_root.find("#ymis-enabled-text:first").hide(), ymis_manager.form_root.find("#ymis-msg:first").show(), setTimeout(function() {
                    ymis_manager.form_root.find(".lock-ind-settings:first").hide()
                }, 2e3), sitesIntMan.onIntegrationEnabledForSite(ymis_manager.integration_id), unlockScreen(t)
            }, this.getAfterPaymentUrlInput = function() {
                return ymis_manager.form_root.find("input[name=successURL]")
            }, this.getAfterPaymentActionInput = function() {
                return ymis_manager.form_root.find(".after-pay-action__input-radio")
            }
        }
        FE.runOnReady(function() {
            window.ymis_manager = new t, ymis_manager.form_root = $("#yandex-money-ind-settings"), ymis_manager.getAfterPaymentUrlInput().on("keyup change", function() {
                formEditor.onChangePaymentUrl(this, window.ymis_manager)
            }), ymis_manager.getAfterPaymentActionInput().on("click", function() {
                formEditor.onSelectAfterPaymentAction(this, window.ymis_manager)
            }), FE.add("formEditor/loaded", function() {
                ymis_manager.getAfterPaymentUrlInput().trigger("change")
            })
        })
    }(),
    function() {
        function t(t) {
            var e = t;
            return "undefined" != typeof t && null !== t && (e = t.replace(/^\s+/, "").replace(/\s+$/, "").replace(/^url\s*\(\s*/, "").replace(/\s*\)\s*/, "").replace(/^[\s'"]+/g, "").replace(/[\s'"]+$/g, "").replace(/\?\d+$/g, "")), e
        }

        function e(t) {
            var e = t.offset().top,
                i = e + parseInt(t.css("height")),
                n = window.scrollTop(),
                a = n + window.innerHeight;
            return n - l < i && i < a + 100 || n < e && i < a || a + l > e && i > a
        }

        function i(t) {
            if (0 !== s.length && !adapterManager.processResizing)
                for (var i = 0; i < s.length; i++) {
                    var a = s[i];
                    t && !e(a) || (n(a), s.splice(i, 1), i--)
                }
        }

        function n(t) {
            setTimeout(function() {
                o(t)
            }, 1)
        }

        function a(t) {
            return t.replace(/(.*\/\w\/\w\/\w\/\w{32}).*(\.(png|jpg|jpeg))/, "$1$2")
        }

        function o(e) {
            var i = e.css("background-image"),
                n = a(t(i));
            if ("none" !== n) {
                var o = e.prop("attributes"),
                    r = "slow";
                e.wrap("<div class='ms__wrapper_abs'></div>"), $("<img />").attr("src", n).one("load", function() {
                    var t = $("<div></div>");
                    $.each(o, function() {
                        t.attr(this.name, this.value)
                    }), t.hide(), t.css("background-image", 'url("' + n + '")'), t.insertAfter(e), t.fadeIn(r, function() {
                        t.unwrap(), e.remove()
                    })
                })
            }
        }
        var r = {},
            s = [],
            l = 100;
        r.init = function() {
            $(".blk_section.bg_type_image > .section_image_container > .section-image").each(function() {
                var t = this.style.backgroundImage;
                return null == t || "" == t || "none" == t || (t.indexOf(".svg") !== -1 || void s.push($(this)))
            }), 0 !== s.length && (i(!0), i())
        }, window.bgMediumStyle = r
    }(), ModuleButtonUp.prototype.drawButton = function() {
    this.$btn_wrap.addClass(this.settings_arr.join(" "))
}, ModuleButtonUp.prototype.bindEvent = function() {
    var t = this;
    $(window).scroll(function() {
        $(this).scrollTop() > 100 ? t.$btn_wrap.fadeIn() : t.$btn_wrap.fadeOut()
    }), this.$btn_wrap.click(function() {
        return $("html, body").animate({
            scrollTop: 0
        }, 600), !1
    })
},
    function() {
        "use strict";
        isIos() && FE.add("onload", function() {
            $(".btn-new").on("touchstart", function() {})
        })
    }(), window.MsBaseJsObject = {
    $isDeleted: !1,
    $isReady: !1,
    $ready: null,
    $load: null,
    $beforeUpdate: null,
    $afterUpdate: null,
    $afterDataUpdate: null
};
var MsJsObject = function(t) {
    return this.jsObject = clone(window.MsBaseJsObject), this.objectData = {
        data: {},
        methods: {}
    }, this.initObjectsData(t), this.initSystemEvents(), this.initData(), this.initMethods(), this.jsObject
};
MsJsObject.prototype.initObjectsData = function(t) {
    for (var e = 0; e < t.length; e++) {
        var i = t[e];
        if ("object" == typeof i)
            for (var n in i) "data" === n || "methods" === n ? "object" == typeof i[n] && extend(this.objectData[n], i[n]) : this.objectData[n] = i[n]
    }
}, MsJsObject.prototype.initSystemEvents = function() {
    for (var t = ["ready", "load", "beforeUpdate", "afterUpdate", "afterDataUpdate"], e = 0; e < t.length; e++) {
        var i = t[e];
        isset(this.objectData[i]) && "function" == typeof this.objectData[i] && (this.jsObject["$" + i] = this.getMethod(this.objectData[i]))
    }
}, MsJsObject.prototype.initData = function() {
    var t = this.objectData.data;
    if ("object" == typeof t)
        for (var e in t) isset(this.jsObject[e]) || (this.jsObject[e] = t[e])
}, MsJsObject.prototype.initMethods = function() {
    var t = this.objectData.methods;
    if ("object" == typeof t)
        for (var e in t) isset(this.jsObject[e]) || "function" != typeof t[e] || (this.jsObject[e] = this.getMethod(t[e]))
}, MsJsObject.prototype.getMethod = function(t) {
    var e = this.jsObject;
    return function() {
        return e.$isDeleted === !0 ? null : t.apply(e, arguments)
    }
}, window.MsJsObject = MsJsObject, window.MsJsPublishedManager = {
    storage: {},
    jsData: {}
}, MsJsPublishedManager.initMsJsScripts = function(t) {
    for (var e = 0; e < t.length; e++)
        if (!(t[e].length < 2)) {
            for (var i = t[e].pop(), n = t[e], a = [], o = 0; o < n.length; o++) {
                var r = this.getObjectDataFromHash(n[o]);
                null != r && a.push(r)
            }
            if (0 !== a.length) {
                a.unshift(this.getLocalVarsObject(i)), a.unshift(this.getGlobalVarsObject(i));
                var s = new MsJsObject(a);
                this.initMsJsObject(i, s)
            }
        }
}, MsJsPublishedManager.getObjectDataFromHash = function(t) {
    var e = "ms" + t;
    if (!isset(window[e])) return null;
    if ("function" != typeof window[e]) return null;
    try {
        var i = window[e]()
    } catch (t) {
        return "test" !== getEnvironment() && console.error(t), null
    }
    return i && "object" == typeof i ? clone(i) : null
}, MsJsPublishedManager.initMsJsObject = function(t, e) {
    null !== e.$ready && FE.runOnReady(function() {
        e.$ready(), e.$isReady = !0
    }), null !== e.$load && FE.runOnLoad(e.$load), this.storage[t] = e
}, MsJsPublishedManager.getGlobalVarsObject = function(t) {
    return {
        data: {
            itemId: t,
            pageId: window.siteId,
            isEditor: !1,
            pcSiteWidth: window.siteWidth
        }
    }
}, MsJsPublishedManager.getLocalVarsObject = function(t) {
    return isset(this.jsData[t]) ? {
        data: this.jsData[t]
    } : {}
}, window.msJsWrapper = function(t, e, i) {
    var n = MsJsPublishedManager.storage[e];
    return n || (n = {}), msEventsEval(n, t, i)
}, window.setMsJsData = function(t, e, i) {
    var n = MsJsPublishedManager.storage[t];
    n && (n[e] = i, null != n.$afterDataUpdate && n.$afterDataUpdate())
}, eval.call(window, "window.msEval=function(data,exp){with(data)return eval(exp)}"), window.msEventsEval = function(t, e, i) {
    e = e || window.event;
    var n;
    return n = isset(t[i]) && "function" == typeof t[i] ? "(" + i + ").call(data,arguments[2])" : "(function(){" + i + "})()",
        msEval(t, n, e)
},
    function() {
        "use strict";
        var t = "hidden-ms-item",
            e = function(t) {
                var e = t instanceof jQuery;
                return e ? t : $(t)
            },
            i = function(i) {
                var n = e(i);
                n.removeClass(t), o(n)
            },
            n = function(i) {
                e(i).addClass(t)
            },
            a = function(a) {
                var o = e(a);
                o.hasClass(t) ? i(o) : n(o)
            },
            o = function(t) {
                var i = e(t);
                i.find(".slick-initialized").each(function() {
                    var t = $(this).slick("getSlick");
                    t.checkResponsive(), t.unslicked || t.setPosition()
                })
            };
        window.slotHelper = {
            initHiddenSlot: o,
            showSlot: i,
            hideSlot: n,
            toggleSlot: a
        }
    }(window);