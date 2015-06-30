 /*!File[thirdpart/jweixin-1.0.0.js]*/ ! function(t, e) {
     "function" == typeof define && (define.amd || define.cmd) ? define(function() {
         return e(t)
     }) : e(t, !0)
 }(this, function(t, e) {
     function n(e, n, i) {
         t.WeixinJSBridge ? WeixinJSBridge.invoke(e, o(n), function(t) {
             a(e, t, i)
         }) : l(e, i)
     }

     function i(e, n, i) {
         t.WeixinJSBridge ? WeixinJSBridge.on(e, function(t) {
             i && i.trigger && i.trigger(t), a(e, t, n)
         }) : i ? l(e, i) : l(e, n)
     }

     function o(t) {
         return t = t || {}, t.appId = E.appId, t.verifyAppId = E.appId, t.verifySignType = "sha1", t.verifyTimestamp = E.timestamp + "", t.verifyNonceStr = E.nonceStr, t.verifySignature = E.signature, t
     }

     function r(t, e) {
         return {
             scope: e,
             signType: "sha1",
             timeStamp: t.timestamp + "",
             nonceStr: t.nonceStr,
             addrSign: t.addrSign
         }
     }

     function s(t) {
         return {
             timeStamp: t.timestamp + "",
             nonceStr: t.nonceStr,
             "package": t.package,
             paySign: t.paySign,
             signType: t.signType || "SHA1"
         }
     }

     function a(t, e, n) {
         var i, o, r;
         switch (delete e.err_code, delete e.err_desc, delete e.err_detail, i = e.errMsg, i || (i = e.err_msg, delete e.err_msg, i = c(t, i, n), e.errMsg = i), n = n || {}, n._complete && (n._complete(e), delete n._complete), i = e.errMsg || "", E.debug && !n.isInnerInvoke && alert(JSON.stringify(e)), o = i.indexOf(":"), r = i.substring(o + 1)) {
             case "ok":
                 n.success && n.success(e);
                 break;
             case "cancel":
                 n.cancel && n.cancel(e);
                 break;
             default:
                 n.fail && n.fail(e)
         }
         n.complete && n.complete(e)
     }

     function c(t, e) {
         var n, i, o, r;
         if (e) {
             switch (n = e.indexOf(":"), t) {
                 case m.config:
                     i = "config";
                     break;
                 case m.openProductSpecificView:
                     i = "openProductSpecificView";
                     break;
                 default:
                     i = e.substring(0, n), i = i.replace(/_/g, " "), i = i.replace(/\b\w+\b/g, function(t) {
                         return t.substring(0, 1).toUpperCase() + t.substring(1)
                     }), i = i.substring(0, 1).toLowerCase() + i.substring(1), i = i.replace(/ /g, ""), -1 != i.indexOf("Wcpay") && (i = i.replace("Wcpay", "WCPay")), o = g[i], o && (i = o)
             }
             r = e.substring(n + 1), "confirm" == r && (r = "ok"), -1 != r.indexOf("failed_") && (r = r.substring(7)), -1 != r.indexOf("fail_") && (r = r.substring(5)), r = r.replace(/_/g, " "), r = r.toLowerCase(), ("access denied" == r || "no permission to execute" == r) && (r = "permission denied"), "config" == i && "function not exist" == r && (r = "ok"), e = i + ":" + r
         }
         return e
     }

     function u(t) {
         var e, n, i, o;
         if (t) {
             for (e = 0, n = t.length; n > e; ++e)
                 i = t[e], o = m[i], o && (t[e] = o);
             return t
         }
     }

     function l(t, e) {
         if (E.debug && !e.isInnerInvoke) {
             var n = g[t];
             n && (t = n), e && e._complete && delete e._complete, console.log('"' + t + '",', e || "")
         }
     }

     function d() {
         if (!("6.0.2" > x || k.systemType < 0)) {
             var t = new Image;
             k.appId = E.appId, k.initTime = T.initEndTime - T.initStartTime, k.preVerifyTime = T.preVerifyEndTime - T.preVerifyStartTime, O.getNetworkType({
                 isInnerInvoke: !0,
                 success: function(e) {
                     k.networkType = e.networkType;
                     var n = "https://open.weixin.qq.com/sdk/report?v=" + k.version + "&o=" + k.isPreVerifyOk + "&s=" + k.systemType + "&c=" + k.clientVersion + "&a=" + k.appId + "&n=" + k.networkType + "&i=" + k.initTime + "&p=" + k.preVerifyTime + "&u=" + k.url;
                     t.src = n
                 }
             })
         }
     }

     function f() {
         return (new Date).getTime()
     }

     function p(e) {
         b && (t.WeixinJSBridge ? e() : v.addEventListener && v.addEventListener("WeixinJSBridgeReady", e, !1))
     }

     function h() {
         O.invoke || (O.invoke = function(e, n, i) {
             t.WeixinJSBridge && WeixinJSBridge.invoke(e, o(n), i)
         }, O.on = function(e, n) {
             t.WeixinJSBridge && WeixinJSBridge.on(e, n)
         })
     }
     var m, g, v, y, w, b, S, _, x, T, k, E, C, j, O;
     return t.jWeixin ? void 0 : (m = {
         config: "preVerifyJSAPI",
         onMenuShareTimeline: "menu:share:timeline",
         onMenuShareAppMessage: "menu:share:appmessage",
         onMenuShareQQ: "menu:share:qq",
         onMenuShareWeibo: "menu:share:weiboApp",
         previewImage: "imagePreview",
         getLocation: "geoLocation",
         openProductSpecificView: "openProductViewWithPid",
         addCard: "batchAddCard",
         openCard: "batchViewCard",
         chooseWXPay: "getBrandWCPayRequest"
     }, g = function() {
         var t, e = {};
         for (t in m)
             e[m[t]] = t;
         return e
     }(), v = t.document, y = v.title, w = navigator.userAgent.toLowerCase(), b = -1 != w.indexOf("micromessenger"), S = -1 != w.indexOf("android"), _ = -1 != w.indexOf("iphone") || -1 != w.indexOf("ipad"), x = function() {
         var t = w.match(/micromessenger\/(\d+\.\d+\.\d+)/) || w.match(/micromessenger\/(\d+\.\d+)/);
         return t ? t[1] : ""
     }(), T = {
         initStartTime: f(),
         initEndTime: 0,
         preVerifyStartTime: 0,
         preVerifyEndTime: 0
     }, k = {
         version: 1,
         appId: "",
         initTime: 0,
         preVerifyTime: 0,
         networkType: "",
         isPreVerifyOk: 1,
         systemType: _ ? 1 : S ? 2 : -1,
         clientVersion: x,
         url: encodeURIComponent(location.href)
     }, E = {}, C = {
         _completes: []
     }, j = {
         state: 0,
         res: {}
     }, p(function() {
         T.initEndTime = f()
     }), O = {
         config: function(t) {
             E = t, l("config", t), p(function() {
                 n(m.config, {
                     verifyJsApiList: u(E.jsApiList)
                 }, function() {
                     C._complete = function(t) {
                         T.preVerifyEndTime = f(), j.state = 1, j.res = t
                     }, C.success = function() {
                         k.isPreVerifyOk = 0
                     }, C.fail = function(t) {
                         C._fail ? C._fail(t) : j.state = -1
                     };
                     var t = C._completes;
                     return t.push(function() {
                         E.debug || d()
                     }), C.complete = function(e) {
                         for (var n = 0, i = t.length; i > n; ++n)
                             t[n](e);
                         C._completes = []
                     }, C
                 }()), T.preVerifyStartTime = f()
             }), E.beta && h()
         },
         ready: function(t) {
             0 != j.state ? t() : (C._completes.push(t), !b && E.debug && t())
         },
         error: function(t) {
             "6.0.2" > x || (-1 == j.state ? t(j.res) : C._fail = t)
         },
         checkJsApi: function(t) {
             var e = function(t) {
                 var e, n, i = t.checkResult;
                 for (e in i)
                     n = g[e], n && (i[n] = i[e], delete i[e]);
                 return t
             };
             n("checkJsApi", {
                 jsApiList: u(t.jsApiList)
             }, function() {
                 return t._complete = function(t) {
                     if (S) {
                         var n = t.checkResult;
                         n && (t.checkResult = JSON.parse(n))
                     }
                     t = e(t)
                 }, t
             }())
         },
         onMenuShareTimeline: function(t) {
             i(m.onMenuShareTimeline, {
                 complete: function() {
                     n("shareTimeline", {
                         title: t.title || y,
                         desc: t.title || y,
                         img_url: t.imgUrl,
                         link: t.link || location.href
                     }, t)
                 }
             }, t)
         },
         onMenuShareAppMessage: function(t) {
             i(m.onMenuShareAppMessage, {
                 complete: function() {
                     n("sendAppMessage", {
                         title: t.title || y,
                         desc: t.desc || "",
                         link: t.link || location.href,
                         img_url: t.imgUrl,
                         type: t.type || "link",
                         data_url: t.dataUrl || ""
                     }, t)
                 }
             }, t)
         },
         onMenuShareQQ: function(t) {
             i(m.onMenuShareQQ, {
                 complete: function() {
                     n("shareQQ", {
                         title: t.title || y,
                         desc: t.desc || "",
                         img_url: t.imgUrl,
                         link: t.link || location.href
                     }, t)
                 }
             }, t)
         },
         onMenuShareWeibo: function(t) {
             i(m.onMenuShareWeibo, {
                 complete: function() {
                     n("shareWeiboApp", {
                         title: t.title || y,
                         desc: t.desc || "",
                         img_url: t.imgUrl,
                         link: t.link || location.href
                     }, t)
                 }
             }, t)
         },
         startRecord: function(t) {
             n("startRecord", {}, t)
         },
         stopRecord: function(t) {
             n("stopRecord", {}, t)
         },
         onVoiceRecordEnd: function(t) {
             i("onVoiceRecordEnd", t)
         },
         playVoice: function(t) {
             n("playVoice", {
                 localId: t.localId
             }, t)
         },
         pauseVoice: function(t) {
             n("pauseVoice", {
                 localId: t.localId
             }, t)
         },
         stopVoice: function(t) {
             n("stopVoice", {
                 localId: t.localId
             }, t)
         },
         onVoicePlayEnd: function(t) {
             i("onVoicePlayEnd", t)
         },
         uploadVoice: function(t) {
             n("uploadVoice", {
                 localId: t.localId,
                 isShowProgressTips: 0 == t.isShowProgressTips ? 0 : 1
             }, t)
         },
         downloadVoice: function(t) {
             n("downloadVoice", {
                 serverId: t.serverId,
                 isShowProgressTips: 0 == t.isShowProgressTips ? 0 : 1
             }, t)
         },
         translateVoice: function(t) {
             n("translateVoice", {
                 localId: t.localId,
                 isShowProgressTips: 0 == t.isShowProgressTips ? 0 : 1
             }, t)
         },
         chooseImage: function(t) {
             n("chooseImage", {
                 scene: "1|2"
             }, function() {
                 return t._complete = function(t) {
                     if (S) {
                         var e = t.localIds;
                         e && (t.localIds = JSON.parse(e))
                     }
                 }, t
             }())
         },
         previewImage: function(t) {
             n(m.previewImage, {
                 current: t.current,
                 urls: t.urls
             }, t)
         },
         uploadImage: function(t) {
             n("uploadImage", {
                 localId: t.localId,
                 isShowProgressTips: 0 == t.isShowProgressTips ? 0 : 1
             }, t)
         },
         downloadImage: function(t) {
             n("downloadImage", {
                 serverId: t.serverId,
                 isShowProgressTips: 0 == t.isShowProgressTips ? 0 : 1
             }, t)
         },
         getNetworkType: function(t) {
             var e = function(t) {
                 var e, n, i, o = t.errMsg;
                 if (t.errMsg = "getNetworkType:ok", e = t.subtype, delete t.subtype, e)
                     t.networkType = e;
                 else
                     switch (n = o.indexOf(":"), i = o.substring(n + 1)) {
                         case "wifi":
                         case "edge":
                         case "wwan":
                             t.networkType = i;
                             break;
                         default:
                             t.errMsg = "getNetworkType:fail"
                     }
                 return t
             };
             n("getNetworkType", {}, function() {
                 return t._complete = function(t) {
                     t = e(t)
                 }, t
             }())
         },
         openLocation: function(t) {
             n("openLocation", {
                 latitude: t.latitude,
                 longitude: t.longitude,
                 name: t.name || "",
                 address: t.address || "",
                 scale: t.scale || 28,
                 infoUrl: t.infoUrl || ""
             }, t)
         },
         getLocation: function(t) {
             n(m.getLocation, function() {
                 var e = r(t, "jsapi_location");
                 return e.type = "wgs84", e
             }(), function() {
                 return t._complete = function(t) {
                     delete t.type
                 }, t
             }())
         },
         hideOptionMenu: function(t) {
             n("hideOptionMenu", {}, t)
         },
         showOptionMenu: function(t) {
             n("showOptionMenu", {}, t)
         },
         closeWindow: function(t) {
             n("closeWindow", {
                 immediate_close: t && t.immediateClose || 0
             }, t)
         },
         hideMenuItems: function(t) {
             n("hideMenuItems", {
                 menuList: t.menuList
             }, t)
         },
         showMenuItems: function(t) {
             n("showMenuItems", {
                 menuList: t.menuList
             }, t)
         },
         hideAllNonBaseMenuItem: function(t) {
             n("hideAllNonBaseMenuItem", {}, t)
         },
         showAllNonBaseMenuItem: function(t) {
             n("showAllNonBaseMenuItem", {}, t)
         },
         scanQRCode: function(t) {
             n("scanQRCode", {
                 desc: t.desc,
                 needResult: t.needResult || 0,
                 scanType: t.scanType || ["qrCode", "barCode"]
             }, t)
         },
         openProductSpecificView: function(t) {
             n(m.openProductSpecificView, {
                 pid: t.productId,
                 view_type: t.viewType || 0
             }, t)
         },
         addCard: function(t) {
             var e, i, o, r, s = t.cardList,
                 a = [];
             for (e = 0, i = s.length; i > e; ++e)
                 o = s[e], r = {
                     card_id: o.cardId,
                     card_ext: o.cardExt
                 }, a.push(r);
             n(m.addCard, {
                 card_list: a
             }, function() {
                 return t._complete = function(t) {
                     var e, n, i, o = t.card_list;
                     if (o) {
                         for (o = JSON.parse(o), e = 0, n = o.length; n > e; ++e)
                             i = o[e], i.cardId = i.card_id, i.cardExt = i.card_ext, i.isSuccess = i.is_succ ? !0 : !1, delete i.card_id, delete i.card_ext, delete i.is_succ;
                         t.cardList = o, delete t.card_list
                     }
                 }, t
             }())
         },
         chooseCard: function(t) {
             n("chooseCard", {
                 app_id: E.appId,
                 location_id: t.shopId || "",
                 sign_type: t.signType || "SHA1",
                 card_id: t.cardId || "",
                 card_type: t.cardType || "",
                 card_sign: t.cardSign,
                 time_stamp: t.timestamp + "",
                 nonce_str: t.nonceStr
             }, function() {
                 return t._complete = function(t) {
                     t.cardList = t.choose_card_info, delete t.choose_card_info
                 }, t
             }())
         },
         openCard: function(t) {
             var e, i, o, r, s = t.cardList,
                 a = [];
             for (e = 0, i = s.length; i > e; ++e)
                 o = s[e], r = {
                     card_id: o.cardId,
                     code: o.code
                 }, a.push(r);
             n(m.openCard, {
                 card_list: a
             }, t)
         },
         chooseWXPay: function(t) {
             n(m.chooseWXPay, s(t), t)
         }
     }, e && (t.wx = t.jWeixin = O), O)
 }), /*!File[thirdpart/iscroll/iscroll-lite.js]*/
 function() {
     var t = Math,
         e = function(t) {
             return t >> 0
         },
         n = /webkit/i.test(navigator.appVersion) ? "webkit" : /firefox/i.test(navigator.userAgent) ? "Moz" : "opera" in window ? "O" : "",
         i = (/android/gi.test(navigator.appVersion), /iphone|ipad/gi.test(navigator.appVersion)),
         o = /playbook/gi.test(navigator.appVersion),
         r = /hp-tablet/gi.test(navigator.appVersion),
         s = "WebKitCSSMatrix" in window && "m11" in new WebKitCSSMatrix,
         a = "ontouchstart" in window && !r,
         c = n + "Transform" in document.documentElement.style,
         u = i || o,
         l = function() {
             return window.requestAnimationFrame || window.webkitRequestAnimationFrame || window.mozRequestAnimationFrame || window.oRequestAnimationFrame || window.msRequestAnimationFrame || function(t) {
                 return setTimeout(t, 17)
             }
         }(),
         d = function() {
             return window.cancelRequestAnimationFrame || window.webkitCancelAnimationFrame || window.webkitCancelRequestAnimationFrame || window.mozCancelRequestAnimationFrame || window.oCancelRequestAnimationFrame || window.msCancelRequestAnimationFrame || clearTimeout
         }(),
         f = "onorientationchange" in window ? "orientationchange" : "resize",
         p = a ? "touchstart" : "mousedown",
         h = a ? "touchmove" : "mousemove",
         m = a ? "touchend" : "mouseup",
         g = a ? "touchcancel" : "mouseup",
         v = "translate" + (s ? "3d(" : "("),
         y = s ? ",0)" : ")",
         w = function(t, e) {
             var i, o = this,
                 r = document;
             o.wrapper = "object" == typeof t ? t : r.getElementById(t), o.scroller = o.wrapper.children[0], o.options = {
                 hScroll: !0,
                 vScroll: !0,
                 x: 0,
                 y: 0,
                 bounce: !0,
                 bounceLock: !1,
                 momentum: !0,
                 lockDirection: !0,
                 useTransform: !0,
                 useTransition: !1,
                 onRefresh: null,
                 onBeforeScrollStart: function(t) {
                     for (var e = t.target; 1 != e.nodeType;)
                         e = e.parentNode;
                     "SELECT" != e.tagName && "INPUT" != e.tagName && "TEXTAREA" != e.tagName && t.preventDefault()
                 },
                 onScrollStart: null,
                 onBeforeScrollMove: null,
                 onScrollMove: null,
                 onBeforeScrollEnd: null,
                 onScrollEnd: null,
                 onTouchEnd: null,
                 onDestroy: null,
                 onAnimate: null
             };
             for (i in e)
                 o.options[i] = e[i];
             o.x = o.options.x, o.y = o.options.y, o.options.useTransform = c ? o.options.useTransform : !1, o.options.hScrollbar = o.options.hScroll && o.options.hScrollbar, o.options.vScrollbar = o.options.vScroll && o.options.vScrollbar, o.options.useTransition = u && o.options.useTransition, o.scroller.style[n + "TransitionProperty"] = o.options.useTransform ? "-" + n.toLowerCase() + "-transform" : "top left", o.scroller.style[n + "TransitionDuration"] = "0", o.scroller.style[n + "TransformOrigin"] = "0 0", o.options.hScroll && (o.wrapper.style.overflowX = "hidden"), o.options.vScroll && (o.wrapper.style.overflowY = "hidden"), o.options.useTransition && (o.scroller.style[n + "TransitionTimingFunction"] = "cubic-bezier(0.33,0.66,0.66,1)"), o.options.useTransform ? o.scroller.style[n + "Transform"] = v + o.x + "px," + o.y + "px" + y : o.scroller.style.cssText += ";position:absolute;top:" + o.y + "px;left:" + o.x + "px", o.refresh(), o._bind(f, window), o._bind(p), a || o._bind("mouseout", o.wrapper)
         };
     w.prototype = {
         enabled: !0,
         x: 0,
         y: 0,
         steps: [],
         scale: 1,
         handleEvent: function(t) {
             var e = this;
             switch (t.type) {
                 case p:
                     if (!a && 0 !== t.button)
                         return;
                     e._start(t);
                     break;
                 case h:
                     e._move(t);
                     break;
                 case m:
                 case g:
                     e._end(t);
                     break;
                 case f:
                     e._resize();
                     break;
                 case "mouseout":
                     e._mouseout(t);
                     break;
                 case "webkitTransitionEnd":
                     e._transitionEnd(t)
             }
         },
         _resize: function() {
             this.refresh()
         },
         _pos: function(t, i) {
             t = this.hScroll ? t : 0, i = this.vScroll ? i : 0, this.options.useTransform ? this.scroller.style[n + "Transform"] = v + t + "px," + i + "px" + y + " scale(" + this.scale + ")" : (t = e(t), i = e(i), this.scroller.style.left = t + "px", this.scroller.style.top = i + "px"), this.x = t, this.y = i
         },
         _start: function(t) {
             var e, i, o, r = this,
                 s = a ? t.touches[0] : t;
             r.enabled && (r.options.onBeforeScrollStart && r.options.onBeforeScrollStart.call(r, t), r.options.useTransition && r._transitionTime(0), r.moved = !1, r.animating = !1, r.zoomed = !1, r.distX = 0, r.distY = 0, r.absDistX = 0, r.absDistY = 0, r.dirX = 0, r.dirY = 0, r.options.momentum && (r.options.useTransform ? (e = getComputedStyle(r.scroller, null)[n + "Transform"].replace(/[^0-9-.,]/g, "").split(","), i = 1 * e[4], o = 1 * e[5]) : (i = 1 * getComputedStyle(r.scroller, null).left.replace(/[^0-9-]/g, ""), o = 1 * getComputedStyle(r.scroller, null).top.replace(/[^0-9-]/g, "")), (i != r.x || o != r.y) && (r.options.useTransition ? r._unbind("webkitTransitionEnd") : d(r.aniTime), r.steps = [], r._pos(i, o))), r.startX = r.x, r.startY = r.y, r.pointX = s.pageX, r.pointY = s.pageY, r.startTime = t.timeStamp || Date.now(), r.options.onScrollStart && r.options.onScrollStart.call(r, t), r._bind(h), r._bind(m), r._bind(g))
         },
         _move: function(e) {
             var n = this,
                 i = a ? e.touches[0] : e,
                 o = i.pageX - n.pointX,
                 r = i.pageY - n.pointY,
                 s = n.x + o,
                 c = n.y + r,
                 u = e.timeStamp || Date.now();
             n.options.onBeforeScrollMove && n.options.onBeforeScrollMove.call(n, e), n.pointX = i.pageX, n.pointY = i.pageY, (s > 0 || s < n.maxScrollX) && (s = n.options.bounce ? n.x + o / 2 : s >= 0 || n.maxScrollX >= 0 ? 0 : n.maxScrollX), (c > 0 || c < n.maxScrollY) && (c = n.options.bounce ? n.y + r / 2 : c >= 0 || n.maxScrollY >= 0 ? 0 : n.maxScrollY), n.distX += o, n.distY += r, n.absDistX = t.abs(n.distX), n.absDistY = t.abs(n.distY), n.absDistX < 6 && n.absDistY < 6 || (n.options.lockDirection && (n.absDistX > n.absDistY + 5 ? (c = n.y, r = 0) : n.absDistY > n.absDistX + 5 && (s = n.x, o = 0)), n.moved = !0, n._pos(s, c), n.dirX = o > 0 ? -1 : 0 > o ? 1 : 0, n.dirY = r > 0 ? -1 : 0 > r ? 1 : 0, u - n.startTime > 300 && (n.startTime = u, n.startX = n.x, n.startY = n.y), n.options.onScrollMove && n.options.onScrollMove.call(n, e))
         },
         _end: function(n) {
             if (!a || 0 == n.touches.length) {
                 var i, o, r, s = this,
                     c = a ? n.changedTouches[0] : n,
                     u = {
                         dist: 0,
                         time: 0
                     },
                     l = {
                         dist: 0,
                         time: 0
                     },
                     d = (n.timeStamp || Date.now()) - s.startTime,
                     f = s.x,
                     p = s.y;
                 if (s._unbind(h), s._unbind(m), s._unbind(g), s.options.onBeforeScrollEnd && s.options.onBeforeScrollEnd.call(s, n), !s.moved) {
                     if (a) {
                         for (i = c.target; 1 != i.nodeType;)
                             i = i.parentNode;
                         "SELECT" != i.tagName && "INPUT" != i.tagName && "TEXTAREA" != i.tagName && (o = document.createEvent("MouseEvents"), o.initMouseEvent("click", !0, !0, n.view, 1, c.screenX, c.screenY, c.clientX, c.clientY, n.ctrlKey, n.altKey, n.shiftKey, n.metaKey, 0, null), o._fake = !0, i.dispatchEvent(o))
                     }
                     return s._resetPos(200), s.options.onTouchEnd && s.options.onTouchEnd.call(s, n), void 0
                 }
                 if (300 > d && s.options.momentum && (u = f ? s._momentum(f - s.startX, d, -s.x, s.scrollerW - s.wrapperW + s.x, s.options.bounce ? s.wrapperW : 0) : u, l = p ? s._momentum(p - s.startY, d, -s.y, s.maxScrollY < 0 ? s.scrollerH - s.wrapperH + s.y : 0, s.options.bounce ? s.wrapperH : 0) : l, f = s.x + u.dist, p = s.y + l.dist, (s.x > 0 && f > 0 || s.x < s.maxScrollX && f < s.maxScrollX) && (u = {
                         dist: 0,
                         time: 0
                     }), (s.y > 0 && p > 0 || s.y < s.maxScrollY && p < s.maxScrollY) && (l = {
                         dist: 0,
                         time: 0
                     })), u.dist || l.dist)
                     return r = t.max(t.max(u.time, l.time), 10), s.scrollTo(e(f), e(p), r), s.options.onTouchEnd && s.options.onTouchEnd.call(s, n), void 0;
                 s._resetPos(200), s.options.onTouchEnd && s.options.onTouchEnd.call(s, n)
             }
         },
         _resetPos: function(t) {
             var e = this,
                 n = e.x >= 0 ? 0 : e.x < e.maxScrollX ? e.maxScrollX : e.x,
                 i = e.y >= 0 || e.maxScrollY > 0 ? 0 : e.y < e.maxScrollY ? e.maxScrollY : e.y;
             return n == e.x && i == e.y ? (e.moved && (e.options.onScrollEnd && e.options.onScrollEnd.call(e), e.moved = !1), void 0) : (e.scrollTo(n, i, t || 0), void 0)
         },
         _mouseout: function(t) {
             var e = t.relatedTarget;
             if (!e)
                 return this._end(t), void 0;
             for (; e = e.parentNode;)
                 if (e == this.wrapper)
                     return;
             this._end(t)
         },
         _transitionEnd: function(t) {
             var e = this;
             t.target == e.scroller && (e._unbind("webkitTransitionEnd"), e._startAni())
         },
         _startAni: function() {
             var e, n, i, o = this,
                 r = o.x,
                 s = o.y,
                 a = Date.now();
             if (!o.animating) {
                 if (!o.steps.length)
                     return o._resetPos(400), void 0;
                 if (e = o.steps.shift(), e.x == r && e.y == s && (e.time = 0), o.animating = !0, o.moved = !0, o.options.useTransition)
                     return o._transitionTime(e.time), o._pos(e.x, e.y), o.animating = !1, e.time ? o._bind("webkitTransitionEnd") : o._resetPos(0), void 0;
                 i = function() {
                     var c, u, d = Date.now();
                     return d >= a + e.time ? (o._pos(e.x, e.y), o.animating = !1, o.options.onAnimationEnd && o.options.onAnimationEnd.call(o), o._startAni(), void 0) : (d = (d - a) / e.time - 1, n = t.sqrt(1 - d * d), c = (e.x - r) * n + r, u = (e.y - s) * n + s, o._pos(c, u), o.animating && (o.aniTime = l(i)), o.options.onAnimate && o.options.onAnimate.call(o), void 0)
                 }, i()
             }
         },
         _transitionTime: function(t) {
             this.scroller.style[n + "TransitionDuration"] = t + "ms"
         },
         _momentum: function(n, i, o, r, s) {
             var a = 6e-4,
                 c = t.abs(n) / i,
                 u = c * c / (2 * a),
                 l = 0,
                 d = 0;
             return n > 0 && u > o ? (d = s / (6 / (u / c * a)), o += d, c = c * o / u, u = o) : 0 > n && u > r && (d = s / (6 / (u / c * a)), r += d, c = c * r / u, u = r), u *= 0 > n ? -1 : 1, l = c / a, {
                 dist: u,
                 time: e(l)
             }
         },
         _offset: function(t) {
             for (var e = -t.offsetLeft, n = -t.offsetTop; t = t.offsetParent;)
                 e -= t.offsetLeft, n -= t.offsetTop;
             return {
                 left: e,
                 top: n
             }
         },
         _bind: function(t, e, n) {
             (e || this.scroller).addEventListener(t, this, !!n)
         },
         _unbind: function(t, e, n) {
             (e || this.scroller).removeEventListener(t, this, !!n)
         },
         destroy: function() {
             var t = this;
             t.scroller.style[n + "Transform"] = "", t._unbind(f, window), t._unbind(p), t._unbind(h), t._unbind(m), t._unbind(g), t._unbind("mouseout", t.wrapper), t.options.useTransition && t._unbind("webkitTransitionEnd"), t.options.onDestroy && t.options.onDestroy.call(t)
         },
         refresh: function() {
             var t, e = this;
             e.wrapperW = e.wrapper.clientWidth, e.wrapperH = e.wrapper.clientHeight, e.scrollerW = e.scroller.offsetWidth, e.scrollerH = e.scroller.offsetHeight, e.maxScrollX = e.wrapperW - e.scrollerW, e.maxScrollY = e.wrapperH - e.scrollerH, e.dirX = 0, e.dirY = 0, e.hScroll = e.options.hScroll && e.maxScrollX < 0, e.vScroll = e.options.vScroll && (!e.options.bounceLock && !e.hScroll || e.scrollerH > e.wrapperH), t = e._offset(e.wrapper), e.wrapperOffsetLeft = -t.left, e.wrapperOffsetTop = -t.top, e.scroller.style[n + "TransitionDuration"] = "0", e._resetPos(200)
         },
         scrollTo: function(t, e, n, i) {
             var o, r, s = this,
                 a = t;
             for (s.stop(), a.length || (a = [{
                     x: t,
                     y: e,
                     time: n,
                     relative: i
                 }]), o = 0, r = a.length; r > o; o++)
                 a[o].relative && (a[o].x = s.x - a[o].x, a[o].y = s.y - a[o].y), s.steps.push({
                     x: a[o].x,
                     y: a[o].y,
                     time: a[o].time || 0
                 });
             s._startAni()
         },
         scrollToElement: function(e, n) {
             var i, o = this;
             e = e.nodeType ? e : o.scroller.querySelector(e), e && (i = o._offset(e), i.left += o.wrapperOffsetLeft, i.top += o.wrapperOffsetTop, i.left = i.left > 0 ? 0 : i.left < o.maxScrollX ? o.maxScrollX : i.left, i.top = i.top > 0 ? 0 : i.top < o.maxScrollY ? o.maxScrollY : i.top, n = void 0 === n ? t.max(2 * t.abs(i.left), 2 * t.abs(i.top)) : n, o.scrollTo(i.left, i.top, n))
         },
         disable: function() {
             this.stop(), this._resetPos(0), this.enabled = !1, this._unbind(h), this._unbind(m), this._unbind(g)
         },
         enable: function() {
             this.enabled = !0
         },
         stop: function() {
             d(this.aniTime), this.steps = [], this.moved = !1, this.animating = !1
         }
     }, "undefined" != typeof exports ? exports.iScroll = w : window.iScroll = w
 }(); /*!File[thirdpart/zepto/zepto.js]*/
 var Zepto = function() {
     function t(t) {
         return null == t ? String(t) : q[J.call(t)] || "object"
     }

     function e(e) {
         return "function" == t(e)
     }

     function n(t) {
         return null != t && t == t.window
     }

     function i(t) {
         return null != t && t.nodeType == t.DOCUMENT_NODE
     }

     function o(e) {
         return "object" == t(e)
     }

     function r(t) {
         return o(t) && !n(t) && Object.getPrototypeOf(t) == Object.prototype
     }

     function s(t) {
         return "number" == typeof t.length
     }

     function a(t) {
         return O.call(t, function(t) {
             return null != t
         })
     }

     function c(t) {
         return t.length > 0 ? x.fn.concat.apply([], t) : t
     }

     function u(t) {
         return t.replace(/::/g, "/").replace(/([A-Z]+)([A-Z][a-z])/g, "$1_$2").replace(/([a-z\d])([A-Z])/g, "$1_$2").replace(/_/g, "-").toLowerCase()
     }

     function l(t) {
         return t in I ? I[t] : I[t] = new RegExp("(^|\\s)" + t + "(\\s|$)")
     }

     function d(t, e) {
         return "number" != typeof e || N[u(t)] ? e : e + "px"
     }

     function f(t) {
         var e, n;
         return P[t] || (e = M.createElement(t), M.body.appendChild(e), n = getComputedStyle(e, "").getPropertyValue("display"), e.parentNode.removeChild(e), "none" == n && (n = "block"), P[t] = n), P[t]
     }

     function p(t) {
         return "children" in t ? j.call(t.children) : x.map(t.childNodes, function(t) {
             return 1 == t.nodeType ? t : void 0
         })
     }

     function h(t, e, n) {
         for (_ in e)
             n && (r(e[_]) || U(e[_])) ? (r(e[_]) && !r(t[_]) && (t[_] = {}), U(e[_]) && !U(t[_]) && (t[_] = []), h(t[_], e[_], n)) : e[_] !== S && (t[_] = e[_])
     }

     function m(t, e) {
         return null == e ? x(t) : x(t).filter(e)
     }

     function g(t, n, i, o) {
         return e(n) ? n.call(t, i, o) : n
     }

     function v(t, e, n) {
         null == n ? t.removeAttribute(e) : t.setAttribute(e, n)
     }

     function y(t, e) {
         var n = t.className || "",
             i = n && n.baseVal !== S;
         return e === S ? i ? n.baseVal : n : (i ? n.baseVal = e : t.className = e, void 0)
     }

     function w(t) {
         var e;
         try {
             return t ? "true" == t || ("false" == t ? !1 : "null" == t ? null : /^0/.test(t) || isNaN(e = Number(t)) ? /^[\[\{]/.test(t) ? x.parseJSON(t) : t : e) : t
         } catch (n) {
             return t
         }
     }

     function b(t, e) {
         e(t);
         for (var n = 0, i = t.childNodes.length; i > n; n++)
             b(t.childNodes[n], e)
     }
     var S, _, x, T, k, E, C = [],
         j = C.slice,
         O = C.filter,
         M = window.document,
         P = {},
         I = {},
         N = {
             "column-count": 1,
             columns: 1,
             "font-weight": 1,
             "line-height": 1,
             opacity: 1,
             "z-index": 1,
             zoom: 1
         },
         A = /^\s*<(\w+|!)[^>]*>/,
         $ = /^<(\w+)\s*\/?>(?:<\/\1>|)$/,
         L = /<(?!area|br|col|embed|hr|img|input|link|meta|param)(([\w:]+)[^>]*)\/>/gi,
         D = /^(?:body|html)$/i,
         F = /([A-Z])/g,
         W = ["val", "css", "html", "text", "data", "width", "height", "offset"],
         R = ["after", "prepend", "before", "append"],
         Y = M.createElement("table"),
         B = M.createElement("tr"),
         V = {
             tr: M.createElement("tbody"),
             tbody: Y,
             thead: Y,
             tfoot: Y,
             td: B,
             th: B,
             "*": M.createElement("div")
         },
         X = /complete|loaded|interactive/,
         H = /^[\w-]*$/,
         q = {},
         J = q.toString,
         Z = {},
         z = M.createElement("div"),
         G = {
             tabindex: "tabIndex",
             readonly: "readOnly",
             "for": "htmlFor",
             "class": "className",
             maxlength: "maxLength",
             cellspacing: "cellSpacing",
             cellpadding: "cellPadding",
             rowspan: "rowSpan",
             colspan: "colSpan",
             usemap: "useMap",
             frameborder: "frameBorder",
             contenteditable: "contentEditable"
         },
         U = Array.isArray || function(t) {
             return t instanceof Array
         };
     return Z.matches = function(t, e) {
         if (!e || !t || 1 !== t.nodeType)
             return !1;
         var n = t.webkitMatchesSelector || t.mozMatchesSelector || t.oMatchesSelector || t.matchesSelector;
         if (n)
             return n.call(t, e);
         var i, o = t.parentNode,
             r = !o;
         return r && (o = z).appendChild(t), i = ~Z.qsa(o, e).indexOf(t), r && z.removeChild(t), i
     }, k = function(t) {
         return t.replace(/-+(.)?/g, function(t, e) {
             return e ? e.toUpperCase() : ""
         })
     }, E = function(t) {
         return O.call(t, function(e, n) {
             return t.indexOf(e) == n
         })
     }, Z.fragment = function(t, e, n) {
         var i, o, s;
         return $.test(t) && (i = x(M.createElement(RegExp.$1))), i || (t.replace && (t = t.replace(L, "<$1></$2>")), e === S && (e = A.test(t) && RegExp.$1), e in V || (e = "*"), s = V[e], s.innerHTML = "" + t, i = x.each(j.call(s.childNodes), function() {
             s.removeChild(this)
         })), r(n) && (o = x(i), x.each(n, function(t, e) {
             W.indexOf(t) > -1 ? o[t](e) : o.attr(t, e)
         })), i
     }, Z.Z = function(t, e) {
         return t = t || [], t.__proto__ = x.fn, t.selector = e || "", t
     }, Z.isZ = function(t) {
         return t instanceof Z.Z
     }, Z.init = function(t, n) {
         var i;
         if (!t)
             return Z.Z();
         if ("string" == typeof t)
             if (t = t.trim(), "<" == t[0] && A.test(t))
                 i = Z.fragment(t, RegExp.$1, n), t = null;
             else {
                 if (n !== S)
                     return x(n).find(t);
                 i = Z.qsa(M, t)
             } else {
             if (e(t))
                 return x(M).ready(t);
             if (Z.isZ(t))
                 return t;
             if (U(t))
                 i = a(t);
             else if (o(t))
                 i = [t], t = null;
             else if (A.test(t))
                 i = Z.fragment(t.trim(), RegExp.$1, n), t = null;
             else {
                 if (n !== S)
                     return x(n).find(t);
                 i = Z.qsa(M, t)
             }
         }
         return Z.Z(i, t)
     }, x = function(t, e) {
         return Z.init(t, e)
     }, x.extend = function(t) {
         var e, n = j.call(arguments, 1);
         return "boolean" == typeof t && (e = t, t = n.shift()), n.forEach(function(n) {
             h(t, n, e)
         }), t
     }, Z.qsa = function(t, e) {
         var n, o = "#" == e[0],
             r = !o && "." == e[0],
             s = o || r ? e.slice(1) : e,
             a = H.test(s);
         return i(t) && a && o ? (n = t.getElementById(s)) ? [n] : [] : 1 !== t.nodeType && 9 !== t.nodeType ? [] : j.call(a && !o ? r ? t.getElementsByClassName(s) : t.getElementsByTagName(e) : t.querySelectorAll(e))
     }, x.contains = M.documentElement.contains ? function(t, e) {
         return t !== e && t.contains(e)
     } : function(t, e) {
         for (; e && (e = e.parentNode);)
             if (e === t)
                 return !0;
         return !1
     }, x.type = t, x.isFunction = e, x.isWindow = n, x.isArray = U, x.isPlainObject = r, x.isEmptyObject = function(t) {
         var e;
         for (e in t)
             return !1;
         return !0
     }, x.inArray = function(t, e, n) {
         return C.indexOf.call(e, t, n)
     }, x.camelCase = k, x.trim = function(t) {
         return null == t ? "" : String.prototype.trim.call(t)
     }, x.uuid = 0, x.support = {}, x.expr = {}, x.map = function(t, e) {
         var n, i, o, r = [];
         if (s(t))
             for (i = 0; i < t.length; i++)
                 n = e(t[i], i), null != n && r.push(n);
         else
             for (o in t)
                 n = e(t[o], o), null != n && r.push(n);
         return c(r)
     }, x.each = function(t, e) {
         var n, i;
         if (s(t)) {
             for (n = 0; n < t.length; n++)
                 if (e.call(t[n], n, t[n]) === !1)
                     return t
         } else
             for (i in t)
                 if (e.call(t[i], i, t[i]) === !1)
                     return t;
         return t
     }, x.grep = function(t, e) {
         return O.call(t, e)
     }, window.JSON && (x.parseJSON = JSON.parse), x.each("Boolean Number String Function Array Date RegExp Object Error".split(" "), function(t, e) {
         q["[object " + e + "]"] = e.toLowerCase()
     }), x.fn = {
         forEach: C.forEach,
         reduce: C.reduce,
         push: C.push,
         sort: C.sort,
         indexOf: C.indexOf,
         concat: C.concat,
         map: function(t) {
             return x(x.map(this, function(e, n) {
                 return t.call(e, n, e)
             }))
         },
         slice: function() {
             return x(j.apply(this, arguments))
         },
         ready: function(t) {
             return X.test(M.readyState) && M.body ? t(x) : M.addEventListener("DOMContentLoaded", function() {
                 t(x)
             }, !1), this
         },
         get: function(t) {
             return t === S ? j.call(this) : this[t >= 0 ? t : t + this.length]
         },
         toArray: function() {
             return this.get()
         },
         size: function() {
             return this.length
         },
         remove: function() {
             return this.each(function() {
                 null != this.parentNode && this.parentNode.removeChild(this)
             })
         },
         each: function(t) {
             return C.every.call(this, function(e, n) {
                 return t.call(e, n, e) !== !1
             }), this
         },
         filter: function(t) {
             return e(t) ? this.not(this.not(t)) : x(O.call(this, function(e) {
                 return Z.matches(e, t)
             }))
         },
         add: function(t, e) {
             return x(E(this.concat(x(t, e))))
         },
         is: function(t) {
             return this.length > 0 && Z.matches(this[0], t)
         },
         not: function(t) {
             var n = [];
             if (e(t) && t.call !== S)
                 this.each(function(e) {
                     t.call(this, e) || n.push(this)
                 });
             else {
                 var i = "string" == typeof t ? this.filter(t) : s(t) && e(t.item) ? j.call(t) : x(t);
                 this.forEach(function(t) {
                     i.indexOf(t) < 0 && n.push(t)
                 })
             }
             return x(n)
         },
         has: function(t) {
             return this.filter(function() {
                 return o(t) ? x.contains(this, t) : x(this).find(t).size()
             })
         },
         eq: function(t) {
             return -1 === t ? this.slice(t) : this.slice(t, +t + 1)
         },
         first: function() {
             var t = this[0];
             return t && !o(t) ? t : x(t)
         },
         last: function() {
             var t = this[this.length - 1];
             return t && !o(t) ? t : x(t)
         },
         find: function(t) {
             var e, n = this;
             return e = t ? "object" == typeof t ? x(t).filter(function() {
                 var t = this;
                 return C.some.call(n, function(e) {
                     return x.contains(e, t)
                 })
             }) : 1 == this.length ? x(Z.qsa(this[0], t)) : this.map(function() {
                 return Z.qsa(this, t)
             }) : []
         },
         closest: function(t, e) {
             var n = this[0],
                 o = !1;
             for ("object" == typeof t && (o = x(t)); n && !(o ? o.indexOf(n) >= 0 : Z.matches(n, t));)
                 n = n !== e && !i(n) && n.parentNode;
             return x(n)
         },
         parents: function(t) {
             for (var e = [], n = this; n.length > 0;)
                 n = x.map(n, function(t) {
                     return (t = t.parentNode) && !i(t) && e.indexOf(t) < 0 ? (e.push(t), t) : void 0
                 });
             return m(e, t)
         },
         parent: function(t) {
             return m(E(this.pluck("parentNode")), t)
         },
         children: function(t) {
             return m(this.map(function() {
                 return p(this)
             }), t)
         },
         contents: function() {
             return this.map(function() {
                 return j.call(this.childNodes)
             })
         },
         siblings: function(t) {
             return m(this.map(function(t, e) {
                 return O.call(p(e.parentNode), function(t) {
                     return t !== e
                 })
             }), t)
         },
         empty: function() {
             return this.each(function() {
                 this.innerHTML = ""
             })
         },
         pluck: function(t) {
             return x.map(this, function(e) {
                 return e[t]
             })
         },
         show: function() {
             return this.each(function() {
                 "none" == this.style.display && (this.style.display = ""), "none" == getComputedStyle(this, "").getPropertyValue("display") && (this.style.display = f(this.nodeName))
             })
         },
         replaceWith: function(t) {
             return this.before(t).remove()
         },
         wrap: function(t) {
             var n = e(t);
             if (this[0] && !n)
                 var i = x(t).get(0),
                     o = i.parentNode || this.length > 1;
             return this.each(function(e) {
                 x(this).wrapAll(n ? t.call(this, e) : o ? i.cloneNode(!0) : i)
             })
         },
         wrapAll: function(t) {
             if (this[0]) {
                 x(this[0]).before(t = x(t));
                 for (var e;
                     (e = t.children()).length;)
                     t = e.first();
                 x(t).append(this)
             }
             return this
         },
         wrapInner: function(t) {
             var n = e(t);
             return this.each(function(e) {
                 var i = x(this),
                     o = i.contents(),
                     r = n ? t.call(this, e) : t;
                 o.length ? o.wrapAll(r) : i.append(r)
             })
         },
         unwrap: function() {
             return this.parent().each(function() {
                 x(this).replaceWith(x(this).children())
             }), this
         },
         clone: function() {
             return this.map(function() {
                 return this.cloneNode(!0)
             })
         },
         hide: function() {
             return this.css("display", "none")
         },
         toggle: function(t) {
             return this.each(function() {
                 var e = x(this);
                 (t === S ? "none" == e.css("display") : t) ? e.show(): e.hide()
             })
         },
         prev: function(t) {
             return x(this.pluck("previousElementSibling")).filter(t || "*")
         },
         next: function(t) {
             return x(this.pluck("nextElementSibling")).filter(t || "*")
         },
         html: function(t) {
             return 0 in arguments ? this.each(function(e) {
                 var n = this.innerHTML;
                 x(this).empty().append(g(this, t, e, n))
             }) : 0 in this ? this[0].innerHTML : null
         },
         text: function(t) {
             return 0 in arguments ? this.each(function(e) {
                 var n = g(this, t, e, this.textContent);
                 this.textContent = null == n ? "" : "" + n
             }) : 0 in this ? this[0].textContent : null
         },
         attr: function(t, e) {
             var n;
             return "string" != typeof t || 1 in arguments ? this.each(function(n) {
                 if (1 === this.nodeType)
                     if (o(t))
                         for (_ in t)
                             v(this, _, t[_]);
                     else
                         v(this, t, g(this, e, n, this.getAttribute(t)))
             }) : this.length && 1 === this[0].nodeType ? !(n = this[0].getAttribute(t)) && t in this[0] ? this[0][t] : n : S
         },
         removeAttr: function(t) {
             return this.each(function() {
                 1 === this.nodeType && v(this, t)
             })
         },
         prop: function(t, e) {
             return t = G[t] || t, 1 in arguments ? this.each(function(n) {
                 this[t] = g(this, e, n, this[t])
             }) : this[0] && this[0][t]
         },
         data: function(t, e) {
             var n = "data-" + t.replace(F, "-$1").toLowerCase(),
                 i = 1 in arguments ? this.attr(n, e) : this.attr(n);
             return null !== i ? w(i) : S
         },
         val: function(t) {
             return 0 in arguments ? this.each(function(e) {
                 this.value = g(this, t, e, this.value)
             }) : this[0] && (this[0].multiple ? x(this[0]).find("option").filter(function() {
                 return this.selected
             }).pluck("value") : this[0].value)
         },
         offset: function(t) {
             if (t)
                 return this.each(function(e) {
                     var n = x(this),
                         i = g(this, t, e, n.offset()),
                         o = n.offsetParent().offset(),
                         r = {
                             top: i.top - o.top,
                             left: i.left - o.left
                         };
                     "static" == n.css("position") && (r.position = "relative"), n.css(r)
                 });
             if (!this.length)
                 return null;
             var e = this[0].getBoundingClientRect();
             return {
                 left: e.left + window.pageXOffset,
                 top: e.top + window.pageYOffset,
                 width: Math.round(e.width),
                 height: Math.round(e.height)
             }
         },
         css: function(e, n) {
             if (arguments.length < 2) {
                 var i = this[0],
                     o = getComputedStyle(i, "");
                 if (!i)
                     return;
                 if ("string" == typeof e)
                     return i.style[k(e)] || o.getPropertyValue(e);
                 if (U(e)) {
                     var r = {};
                     return x.each(e, function(t, e) {
                         r[e] = i.style[k(e)] || o.getPropertyValue(e)
                     }), r
                 }
             }
             var s = "";
             if ("string" == t(e))
                 n || 0 === n ? s = u(e) + ":" + d(e, n) : this.each(function() {
                     this.style.removeProperty(u(e))
                 });
             else
                 for (_ in e)
                     e[_] || 0 === e[_] ? s += u(_) + ":" + d(_, e[_]) + ";" : this.each(function() {
                         this.style.removeProperty(u(_))
                     });
             return this.each(function() {
                 this.style.cssText += ";" + s
             })
         },
         index: function(t) {
             return t ? this.indexOf(x(t)[0]) : this.parent().children().indexOf(this[0])
         },
         hasClass: function(t) {
             return t ? C.some.call(this, function(t) {
                 return this.test(y(t))
             }, l(t)) : !1
         },
         addClass: function(t) {
             return t ? this.each(function(e) {
                 if ("className" in this) {
                     T = [];
                     var n = y(this),
                         i = g(this, t, e, n);
                     i.split(/\s+/g).forEach(function(t) {
                         x(this).hasClass(t) || T.push(t)
                     }, this), T.length && y(this, n + (n ? " " : "") + T.join(" "))
                 }
             }) : this
         },
         removeClass: function(t) {
             return this.each(function(e) {
                 if ("className" in this) {
                     if (t === S)
                         return y(this, "");
                     T = y(this), g(this, t, e, T).split(/\s+/g).forEach(function(t) {
                         T = T.replace(l(t), " ")
                     }), y(this, T.trim())
                 }
             })
         },
         toggleClass: function(t, e) {
             return t ? this.each(function(n) {
                 var i = x(this),
                     o = g(this, t, n, y(this));
                 o.split(/\s+/g).forEach(function(t) {
                     (e === S ? !i.hasClass(t) : e) ? i.addClass(t): i.removeClass(t)
                 })
             }) : this
         },
         scrollTop: function(t) {
             if (this.length) {
                 var e = "scrollTop" in this[0];
                 return t === S ? e ? this[0].scrollTop : this[0].pageYOffset : this.each(e ? function() {
                     this.scrollTop = t
                 } : function() {
                     this.scrollTo(this.scrollX, t)
                 })
             }
         },
         scrollLeft: function(t) {
             if (this.length) {
                 var e = "scrollLeft" in this[0];
                 return t === S ? e ? this[0].scrollLeft : this[0].pageXOffset : this.each(e ? function() {
                     this.scrollLeft = t
                 } : function() {
                     this.scrollTo(t, this.scrollY)
                 })
             }
         },
         position: function() {
             if (this.length) {
                 var t = this[0],
                     e = this.offsetParent(),
                     n = this.offset(),
                     i = D.test(e[0].nodeName) ? {
                         top: 0,
                         left: 0
                     } : e.offset();
                 return n.top -= parseFloat(x(t).css("margin-top")) || 0, n.left -= parseFloat(x(t).css("margin-left")) || 0, i.top += parseFloat(x(e[0]).css("border-top-width")) || 0, i.left += parseFloat(x(e[0]).css("border-left-width")) || 0, {
                     top: n.top - i.top,
                     left: n.left - i.left
                 }
             }
         },
         offsetParent: function() {
             return this.map(function() {
                 for (var t = this.offsetParent || M.body; t && !D.test(t.nodeName) && "static" == x(t).css("position");)
                     t = t.offsetParent;
                 return t
             })
         }
     }, x.fn.detach = x.fn.remove, ["width", "height"].forEach(function(t) {
         var e = t.replace(/./, function(t) {
             return t[0].toUpperCase()
         });
         x.fn[t] = function(o) {
             var r, s = this[0];
             return o === S ? n(s) ? s["inner" + e] : i(s) ? s.documentElement["scroll" + e] : (r = this.offset()) && r[t] : this.each(function(e) {
                 s = x(this), s.css(t, g(this, o, e, s[t]()))
             })
         }
     }), R.forEach(function(e, n) {
         var i = n % 2;
         x.fn[e] = function() {
             var e, o, r = x.map(arguments, function(n) {
                     return e = t(n), "object" == e || "array" == e || null == n ? n : Z.fragment(n)
                 }),
                 s = this.length > 1;
             return r.length < 1 ? this : this.each(function(t, e) {
                 o = i ? e : e.parentNode, e = 0 == n ? e.nextSibling : 1 == n ? e.firstChild : 2 == n ? e : null;
                 var a = x.contains(M.documentElement, o);
                 r.forEach(function(t) {
                     if (s)
                         t = t.cloneNode(!0);
                     else if (!o)
                         return x(t).remove();
                     o.insertBefore(t, e), a && b(t, function(t) {
                         null == t.nodeName || "SCRIPT" !== t.nodeName.toUpperCase() || t.type && "text/javascript" !== t.type || t.src || window.eval.call(window, t.innerHTML)
                     })
                 })
             })
         }, x.fn[i ? e + "To" : "insert" + (n ? "Before" : "After")] = function(t) {
             return x(t)[e](this), this
         }
     }), Z.Z.prototype = x.fn, Z.uniq = E, Z.deserializeValue = w, x.zepto = Z, x
 }();
 window.Zepto = Zepto, void 0 === window.$ && (window.$ = Zepto),
     function(t) {
         function e(t) {
             return t._zid || (t._zid = f++)
         }

         function n(t, n, r, s) {
             if (n = i(n), n.ns)
                 var a = o(n.ns);
             return (g[e(t)] || []).filter(function(t) {
                 return !(!t || n.e && t.e != n.e || n.ns && !a.test(t.ns) || r && e(t.fn) !== e(r) || s && t.sel != s)
             })
         }

         function i(t) {
             var e = ("" + t).split(".");
             return {
                 e: e[0],
                 ns: e.slice(1).sort().join(" ")
             }
         }

         function o(t) {
             return new RegExp("(?:^| )" + t.replace(" ", " .* ?") + "(?: |$)")
         }

         function r(t, e) {
             return t.del && !y && t.e in w || !!e
         }

         function s(t) {
             return b[t] || y && w[t] || t
         }

         function a(n, o, a, c, l, f, p) {
             var h = e(n),
                 m = g[h] || (g[h] = []);
             o.split(/\s/).forEach(function(e) {
                 if ("ready" == e)
                     return t(document).ready(a);
                 var o = i(e);
                 o.fn = a, o.sel = l, o.e in b && (a = function(e) {
                     var n = e.relatedTarget;
                     return !n || n !== this && !t.contains(this, n) ? o.fn.apply(this, arguments) : void 0
                 }), o.del = f;
                 var h = f || a;
                 o.proxy = function(t) {
                     if (t = u(t), !t.isImmediatePropagationStopped()) {
                         t.data = c;
                         var e = h.apply(n, t._args == d ? [t] : [t].concat(t._args));
                         return e === !1 && (t.preventDefault(), t.stopPropagation()), e
                     }
                 }, o.i = m.length, m.push(o), "addEventListener" in n && n.addEventListener(s(o.e), o.proxy, r(o, p))
             })
         }

         function c(t, i, o, a, c) {
             var u = e(t);
             (i || "").split(/\s/).forEach(function(e) {
                 n(t, e, o, a).forEach(function(e) {
                     delete g[u][e.i], "removeEventListener" in t && t.removeEventListener(s(e.e), e.proxy, r(e, c))
                 })
             })
         }

         function u(e, n) {
             return (n || !e.isDefaultPrevented) && (n || (n = e), t.each(T, function(t, i) {
                 var o = n[t];
                 e[t] = function() {
                     return this[i] = S, o && o.apply(n, arguments)
                 }, e[i] = _
             }), (n.defaultPrevented !== d ? n.defaultPrevented : "returnValue" in n ? n.returnValue === !1 : n.getPreventDefault && n.getPreventDefault()) && (e.isDefaultPrevented = S)), e
         }

         function l(t) {
             var e, n = {
                 originalEvent: t
             };
             for (e in t)
                 x.test(e) || t[e] === d || (n[e] = t[e]);
             return u(n, t)
         }
         var d, f = 1,
             p = Array.prototype.slice,
             h = t.isFunction,
             m = function(t) {
                 return "string" == typeof t
             },
             g = {},
             v = {},
             y = "onfocusin" in window,
             w = {
                 focus: "focusin",
                 blur: "focusout"
             },
             b = {
                 mouseenter: "mouseover",
                 mouseleave: "mouseout"
             };
         v.click = v.mousedown = v.mouseup = v.mousemove = "MouseEvents", t.event = {
             add: a,
             remove: c
         }, t.proxy = function(n, i) {
             var o = 2 in arguments && p.call(arguments, 2);
             if (h(n)) {
                 var r = function() {
                     return n.apply(i, o ? o.concat(p.call(arguments)) : arguments)
                 };
                 return r._zid = e(n), r
             }
             if (m(i))
                 return o ? (o.unshift(n[i], n), t.proxy.apply(null, o)) : t.proxy(n[i], n);
             throw new TypeError("expected function")
         }, t.fn.bind = function(t, e, n) {
             return this.on(t, e, n)
         }, t.fn.unbind = function(t, e) {
             return this.off(t, e)
         }, t.fn.one = function(t, e, n, i) {
             return this.on(t, e, n, i, 1)
         };
         var S = function() {
                 return !0
             },
             _ = function() {
                 return !1
             },
             x = /^([A-Z]|returnValue$|layer[XY]$)/,
             T = {
                 preventDefault: "isDefaultPrevented",
                 stopImmediatePropagation: "isImmediatePropagationStopped",
                 stopPropagation: "isPropagationStopped"
             };
         t.fn.delegate = function(t, e, n) {
             return this.on(e, t, n)
         }, t.fn.undelegate = function(t, e, n) {
             return this.off(e, t, n)
         }, t.fn.live = function(e, n) {
             return t(document.body).delegate(this.selector, e, n), this
         }, t.fn.die = function(e, n) {
             return t(document.body).undelegate(this.selector, e, n), this
         }, t.fn.on = function(e, n, i, o, r) {
             var s, u, f = this;
             return e && !m(e) ? (t.each(e, function(t, e) {
                 f.on(t, n, i, e, r)
             }), f) : (m(n) || h(o) || o === !1 || (o = i, i = n, n = d), (h(i) || i === !1) && (o = i, i = d), o === !1 && (o = _), f.each(function(d, f) {
                 r && (s = function(t) {
                     return c(f, t.type, o), o.apply(this, arguments)
                 }), n && (u = function(e) {
                     var i, r = t(e.target).closest(n, f).get(0);
                     return r && r !== f ? (i = t.extend(l(e), {
                         currentTarget: r,
                         liveFired: f
                     }), (s || o).apply(r, [i].concat(p.call(arguments, 1)))) : void 0
                 }), a(f, e, o, i, n, u || s)
             }))
         }, t.fn.off = function(e, n, i) {
             var o = this;
             return e && !m(e) ? (t.each(e, function(t, e) {
                 o.off(t, n, e)
             }), o) : (m(n) || h(i) || i === !1 || (i = n, n = d), i === !1 && (i = _), o.each(function() {
                 c(this, e, i, n)
             }))
         }, t.fn.trigger = function(e, n) {
             return e = m(e) || t.isPlainObject(e) ? t.Event(e) : u(e), e._args = n, this.each(function() {
                 "dispatchEvent" in this ? this.dispatchEvent(e) : t(this).triggerHandler(e, n)
             })
         }, t.fn.triggerHandler = function(e, i) {
             var o, r;
             return this.each(function(s, a) {
                 o = l(m(e) ? t.Event(e) : e), o._args = i, o.target = a, t.each(n(a, e.type || e), function(t, e) {
                     return r = e.proxy(o), o.isImmediatePropagationStopped() ? !1 : void 0
                 })
             }), r
         }, "focusin focusout load resize scroll unload click dblclick mousedown mouseup mousemove mouseover mouseout mouseenter mouseleave change select keydown keypress keyup error".split(" ").forEach(function(e) {
             t.fn[e] = function(t) {
                 return t ? this.bind(e, t) : this.trigger(e)
             }
         }), ["focus", "blur"].forEach(function(e) {
             t.fn[e] = function(t) {
                 return t ? this.bind(e, t) : this.each(function() {
                     try {
                         this[e]()
                     } catch (t) {}
                 }), this
             }
         }), t.Event = function(t, e) {
             m(t) || (e = t, t = e.type);
             var n = document.createEvent(v[t] || "Events"),
                 i = !0;
             if (e)
                 for (var o in e)
                     "bubbles" == o ? i = !!e[o] : n[o] = e[o];
             return n.initEvent(t, i, !0), u(n)
         }
     }(Zepto),
     function(t) {
         function e(e, n, i) {
             var o = t.Event(n);
             return t(e).trigger(o, i), !o.isDefaultPrevented()
         }

         function n(t, n, i, o) {
             return t.global ? e(n || y, i, o) : void 0
         }

         function i(e) {
             e.global && 0 === t.active++ && n(e, null, "ajaxStart")
         }

         function o(e) {
             e.global && !--t.active && n(e, null, "ajaxStop")
         }

         function r(t, e) {
             var i = e.context;
             return e.beforeSend.call(i, t, e) === !1 || n(e, i, "ajaxBeforeSend", [t, e]) === !1 ? !1 : (n(e, i, "ajaxSend", [t, e]), void 0)
         }

         function s(t, e, i, o) {
             var r = i.context,
                 s = "success";
             i.success.call(r, t, s, e), o && o.resolveWith(r, [t, s, e]), n(i, r, "ajaxSuccess", [e, i, t]), c(s, e, i)
         }

         function a(t, e, i, o, r) {
             var s = o.context;
             o.error.call(s, i, e, t), r && r.rejectWith(s, [i, e, t]), n(o, s, "ajaxError", [i, o, t || e]), c(e, i, o)
         }

         function c(t, e, i) {
             var r = i.context;
             i.complete.call(r, e, t), n(i, r, "ajaxComplete", [e, i]), o(i)
         }

         function u() {}

         function l(t) {
             return t && (t = t.split(";", 2)[0]), t && (t == x ? "html" : t == _ ? "json" : b.test(t) ? "script" : S.test(t) && "xml") || "text"
         }

         function d(t, e) {
             return "" == e ? t : (t + "&" + e).replace(/[&?]{1,2}/, "?")
         }

         function f(e) {
             e.processData && e.data && "string" != t.type(e.data) && (e.data = t.param(e.data, e.traditional)), !e.data || e.type && "GET" != e.type.toUpperCase() || (e.url = d(e.url, e.data), e.data = void 0)
         }

         function p(e, n, i, o) {
             return t.isFunction(n) && (o = i, i = n, n = void 0), t.isFunction(i) || (o = i, i = void 0), {
                 url: e,
                 data: n,
                 success: i,
                 dataType: o
             }
         }

         function h(e, n, i, o) {
             var r, s = t.isArray(n),
                 a = t.isPlainObject(n);
             t.each(n, function(n, c) {
                 r = t.type(c), o && (n = i ? o : o + "[" + (a || "object" == r || "array" == r ? n : "") + "]"), !o && s ? e.add(c.name, c.value) : "array" == r || !i && "object" == r ? h(e, c, i, n) : e.add(n, c)
             })
         }
         var m, g, v = 0,
             y = window.document,
             w = /<script\b[^<]*(?:(?!<\/script>)<[^<]*)*<\/script>/gi,
             b = /^(?:text|application)\/javascript/i,
             S = /^(?:text|application)\/xml/i,
             _ = "application/json",
             x = "text/html",
             T = /^\s*$/;
         t.active = 0, t.ajaxJSONP = function(e, n) {
             if (!("type" in e))
                 return t.ajax(e);
             var i, o, c = e.jsonpCallback,
                 u = (t.isFunction(c) ? c() : c) || "jsonp" + ++v,
                 l = y.createElement("script"),
                 d = window[u],
                 f = function(e) {
                     t(l).triggerHandler("error", e || "abort")
                 },
                 p = {
                     abort: f
                 };
             return n && n.promise(p), t(l).on("load error", function(r, c) {
                 clearTimeout(o), t(l).off().remove(), "error" != r.type && i ? s(i[0], p, e, n) : a(null, c || "error", p, e, n), window[u] = d, i && t.isFunction(d) && d(i[0]), d = i = void 0
             }), r(p, e) === !1 ? (f("abort"), p) : (window[u] = function() {
                 i = arguments
             }, l.src = e.url.replace(/\?(.+)=\?/, "?$1=" + u), y.head.appendChild(l), e.timeout > 0 && (o = setTimeout(function() {
                 f("timeout")
             }, e.timeout)), p)
         }, t.ajaxSettings = {
             type: "GET",
             beforeSend: u,
             success: u,
             error: u,
             complete: u,
             context: null,
             global: !0,
             xhr: function() {
                 return new window.XMLHttpRequest
             },
             accepts: {
                 script: "text/javascript, application/javascript, application/x-javascript",
                 json: _,
                 xml: "application/xml, text/xml",
                 html: x,
                 text: "text/plain"
             },
             crossDomain: !1,
             timeout: 0,
             processData: !0,
             cache: !0
         }, t.ajax = function(e) {
             var n = t.extend({}, e || {}),
                 o = t.Deferred && t.Deferred();
             for (m in t.ajaxSettings)
                 void 0 === n[m] && (n[m] = t.ajaxSettings[m]);
             i(n), n.crossDomain || (n.crossDomain = /^([\w-]+:)?\/\/([^\/]+)/.test(n.url) && RegExp.$2 != window.location.host), n.url || (n.url = window.location.toString()), f(n);
             var c = n.dataType,
                 p = /\?.+=\?/.test(n.url);
             if (p && (c = "jsonp"), n.cache !== !1 && (e && e.cache === !0 || "script" != c && "jsonp" != c) || (n.url = d(n.url, "_=" + Date.now())), "jsonp" == c)
                 return p || (n.url = d(n.url, n.jsonp ? n.jsonp + "=?" : n.jsonp === !1 ? "" : "callback=?")), t.ajaxJSONP(n, o);
             var h, v = n.accepts[c],
                 y = {},
                 w = function(t, e) {
                     y[t.toLowerCase()] = [t, e]
                 },
                 b = /^([\w-]+:)\/\//.test(n.url) ? RegExp.$1 : window.location.protocol,
                 S = n.xhr(),
                 _ = S.setRequestHeader;
             if (o && o.promise(S), n.crossDomain || w("X-Requested-With", "XMLHttpRequest"), w("Accept", v || "*/*"), (v = n.mimeType || v) && (v.indexOf(",") > -1 && (v = v.split(",", 2)[0]), S.overrideMimeType && S.overrideMimeType(v)), (n.contentType || n.contentType !== !1 && n.data && "GET" != n.type.toUpperCase()) && w("Content-Type", n.contentType || "application/x-www-form-urlencoded"), n.headers)
                 for (g in n.headers)
                     w(g, n.headers[g]);
             if (S.setRequestHeader = w, S.onreadystatechange = function() {
                     if (4 == S.readyState) {
                         S.onreadystatechange = u, clearTimeout(h);
                         var e, i = !1;
                         if (S.status >= 200 && S.status < 300 || 304 == S.status || 0 == S.status && "file:" == b) {
                             c = c || l(n.mimeType || S.getResponseHeader("content-type")), e = S.responseText;
                             try {
                                 "script" == c ? (1, eval)(e) : "xml" == c ? e = S.responseXML : "json" == c && (e = T.test(e) ? null : t.parseJSON(e))
                             } catch (r) {
                                 i = r
                             }
                             i ? a(i, "parsererror", S, n, o) : s(e, S, n, o)
                         } else
                             a(S.statusText || null, S.status ? "error" : "abort", S, n, o)
                     }
                 }, r(S, n) === !1)
                 return S.abort(), a(null, "abort", S, n, o), S;
             if (n.xhrFields)
                 for (g in n.xhrFields)
                     S[g] = n.xhrFields[g];
             var x = "async" in n ? n.async : !0;
             S.open(n.type, n.url, x, n.username, n.password);
             for (g in y)
                 _.apply(S, y[g]);
             return n.timeout > 0 && (h = setTimeout(function() {
                 S.onreadystatechange = u, S.abort(), a(null, "timeout", S, n, o)
             }, n.timeout)), S.send(n.data ? n.data : null), S
         }, t.get = function() {
             return t.ajax(p.apply(null, arguments))
         }, t.post = function() {
             var e = p.apply(null, arguments);
             return e.type = "POST", t.ajax(e)
         }, t.getJSON = function() {
             var e = p.apply(null, arguments);
             return e.dataType = "json", t.ajax(e)
         }, t.fn.load = function(e, n, i) {
             if (!this.length)
                 return this;
             var o, r = this,
                 s = e.split(/\s/),
                 a = p(e, n, i),
                 c = a.success;
             return s.length > 1 && (a.url = s[0], o = s[1]), a.success = function(e) {
                 r.html(o ? t("<div>").html(e.replace(w, "")).find(o) : e), c && c.apply(r, arguments)
             }, t.ajax(a), this
         };
         var k = encodeURIComponent;
         t.param = function(t, e) {
             var n = [];
             return n.add = function(t, e) {
                 this.push(k(t) + "=" + k(e))
             }, h(n, t, e), n.join("&").replace(/%20/g, "+")
         }
     }(Zepto),
     function(t) {
         "__proto__" in {} || t.extend(t.zepto, {
             Z: function(e, n) {
                 return e = e || [], t.extend(e, t.fn), e.selector = n || "", e.__Z = !0, e
             },
             isZ: function(e) {
                 return "array" === t.type(e) && "__Z" in e
             }
         });
         try {
             getComputedStyle(void 0)
         } catch (e) {
             var n = getComputedStyle;
             window.getComputedStyle = function(t) {
                 try {
                     return n(t)
                 } catch (e) {
                     return null
                 }
             }
         }
     }(Zepto),
     function(t) {
         function e(t) {
             var e = this.os = {},
                 n = this.browser = {},
                 i = t.match(/Web[kK]it[\/]{0,1}([\d.]+)/),
                 o = t.match(/(Android);?[\s\/]+([\d.]+)?/) || t.indexOf(" MI ") > -1,
                 r = !!t.match(/\(Macintosh\; Intel /),
                 s = t.match(/(iPad).*OS\s([\d_]+)/),
                 a = t.match(/(iPod)(.*OS\s([\d_]+))?/),
                 c = !s && t.match(/(iPhone\sOS)\s([\d_]+)/),
                 u = t.match(/(webOS|hpwOS)[\s\/]([\d.]+)/),
                 l = t.match(/Windows Phone ([\d.]+)/),
                 d = u && t.match(/TouchPad/),
                 f = t.match(/Kindle\/([\d.]+)/),
                 p = t.match(/Silk\/([\d._]+)/),
                 h = t.match(/(BlackBerry).*Version\/([\d.]+)/),
                 m = t.match(/(BB10).*Version\/([\d.]+)/),
                 g = t.match(/(RIM\sTablet\sOS)\s([\d.]+)/),
                 v = t.match(/PlayBook/),
                 y = t.match(/Chrome\/([\d.]+)/) || t.match(/CriOS\/([\d.]+)/),
                 w = t.match(/Firefox\/([\d.]+)/),
                 b = t.match(/MSIE\s([\d.]+)/) || t.match(/Trident\/[\d](?=[^\?]+).*rv:([0-9.].)/),
                 S = !y && t.match(/(iPhone|iPod|iPad).*AppleWebKit(?!.*Safari)/),
                 _ = S || t.match(/Version\/([\d.]+)([^S](Safari)|[^M]*(Mobile)[^S]*(Safari))/);
             (n.webkit = !!i) && (n.version = i[1]), o && (e.android = !0, e.version = o[2]), c && !a && (e.ios = e.iphone = !0, e.version = c[2].replace(/_/g, ".")), s && (e.ios = e.ipad = !0, e.version = s[2].replace(/_/g, ".")), a && (e.ios = e.ipod = !0, e.version = a[3] ? a[3].replace(/_/g, ".") : null), l && (e.wp = !0, e.version = l[1]), u && (e.webos = !0, e.version = u[2]), d && (e.touchpad = !0), h && (e.blackberry = !0, e.version = h[2]), m && (e.bb10 = !0, e.version = m[2]), g && (e.rimtabletos = !0, e.version = g[2]), v && (n.playbook = !0), f && (e.kindle = !0, e.version = f[1]), p && (n.silk = !0, n.version = p[1]), !p && e.android && t.match(/Kindle Fire/) && (n.silk = !0), y && (n.chrome = !0, n.version = y[1]), w && (n.firefox = !0, n.version = w[1]), b && (n.ie = !0, n.version = b[1]), _ && (r || e.ios) && (n.safari = !0, r && (n.version = _[1])), S && (n.webview = !0), e.tablet = !!(s || v || o && !t.match(/Mobile/) || w && t.match(/Tablet/) || b && !t.match(/Phone/) && t.match(/Touch/)), e.phone = !(e.tablet || e.ipod || !(o || c || u || h || m || y && t.match(/Android/) || y && t.match(/CriOS\/([\d.]+)/) || w && t.match(/Mobile/) || b && t.match(/Touch/)))
         }
         e.call(t, navigator.userAgent), t.__detect = e
     }(Zepto),
     function(t, e) {
         function n(t) {
             return t.replace(/([a-z])([A-Z])/, "$1-$2").toLowerCase()
         }

         function i(t) {
             return o ? o + t : t.toLowerCase()
         }
         var o, r, s, a, c, u, l, d, f, p, h = "",
             m = {
                 Webkit: "webkit",
                 Moz: "",
                 O: "o"
             },
             g = window.document,
             v = g.createElement("div"),
             y = /^((translate|rotate|scale)(X|Y|Z|3d)?|matrix(3d)?|perspective|skew(X|Y)?)$/i,
             w = {};
         t.each(m, function(t, n) {
             return v.style[t + "TransitionProperty"] !== e ? (h = "-" + t.toLowerCase() + "-", o = n, !1) : void 0
         }), r = h + "transform", w[s = h + "transition-property"] = w[a = h + "transition-duration"] = w[u = h + "transition-delay"] = w[c = h + "transition-timing-function"] = w[l = h + "animation-name"] = w[d = h + "animation-duration"] = w[p = h + "animation-delay"] = w[f = h + "animation-timing-function"] = "", t.fx = {
             off: o === e && v.style.transitionProperty === e,
             speeds: {
                 _default: 400,
                 fast: 200,
                 slow: 600
             },
             cssPrefix: h,
             transitionEnd: i("TransitionEnd"),
             animationEnd: i("AnimationEnd")
         }, t.fn.animate = function(n, i, o, r, s) {
             return t.isFunction(i) && (r = i, o = e, i = e), t.isFunction(o) && (r = o, o = e), t.isPlainObject(i) && (o = i.easing, r = i.complete, s = i.delay, i = i.duration), i && (i = ("number" == typeof i ? i : t.fx.speeds[i] || t.fx.speeds._default) / 1e3), s && (s = parseFloat(s) / 1e3), this.anim(n, i, o, r, s)
         }, t.fn.anim = function(i, o, h, m, g) {
             var v, b, S, _ = {},
                 x = "",
                 T = this,
                 k = t.fx.transitionEnd,
                 E = !1;
             if (o === e && (o = t.fx.speeds._default / 1e3), g === e && (g = 0), t.fx.off && (o = 0), "string" == typeof i)
                 _[l] = i, _[d] = o + "s", _[p] = g + "s", _[f] = h || "linear", k = t.fx.animationEnd;
             else {
                 b = [];
                 for (v in i)
                     y.test(v) ? x += v + "(" + i[v] + ") " : (_[v] = i[v], b.push(n(v)));
                 x && (_[r] = x, b.push(r)), o > 0 && "object" == typeof i && (_[s] = b.join(", "), _[a] = o + "s", _[u] = g + "s", _[c] = h || "linear")
             }
             return S = function(e) {
                 if ("undefined" != typeof e) {
                     if (e.target !== e.currentTarget)
                         return;
                     t(e.target).unbind(k, S)
                 } else
                     t(this).unbind(k, S);
                 E = !0, t(this).css(w), m && m.call(this)
             }, o > 0 && (this.bind(k, S), setTimeout(function() {
                 E || S.call(T)
             }, 1e3 * o + 25)), this.size() && this.get(0).clientLeft, this.css(_), 0 >= o && setTimeout(function() {
                 T.each(function() {
                     S.call(this)
                 })
             }, 0), this
         }, v = null
     }(Zepto),
     function(t, e) {
         function n(n, i, o, r, s) {
             "function" != typeof i || s || (s = i, i = e);
             var a = {
                 opacity: o
             };
             return r && (a.scale = r, n.css(t.fx.cssPrefix + "transform-origin", "0 0")), n.animate(a, i, null, s)
         }

         function i(e, i, o, r) {
             return n(e, i, 0, o, function() {
                 s.call(t(this)), r && r.call(this)
             })
         }
         var o = window.document,
             r = (o.documentElement, t.fn.show),
             s = t.fn.hide,
             a = t.fn.toggle;
         t.fn.show = function(t, i) {
             return r.call(this), t === e ? t = 0 : this.css("opacity", 0), n(this, t, 1, "1,1", i)
         }, t.fn.hide = function(t, n) {
             return t === e ? s.call(this) : i(this, t, "0,0", n)
         }, t.fn.toggle = function(n, i) {
             return n === e || "boolean" == typeof n ? a.call(this, n) : this.each(function() {
                 var e = t(this);
                 e["none" == e.css("display") ? "show" : "hide"](n, i)
             })
         }, t.fn.fadeTo = function(t, e, i) {
             return n(this, t, e, null, i)
         }, t.fn.fadeIn = function(t, e) {
             var n = this.css("opacity");
             return n > 0 ? this.css("opacity", 0) : n = 1, r.call(this).fadeTo(t, n, e)
         }, t.fn.fadeOut = function(t, e) {
             return i(this, t, null, e)
         }, t.fn.fadeToggle = function(e, n) {
             return this.each(function() {
                 var i = t(this);
                 i[0 == i.css("opacity") || "none" == i.css("display") ? "fadeIn" : "fadeOut"](e, n)
             })
         }
     }(Zepto),
     function(t) {
         function e(t, e, n, i) {
             return Math.abs(t - e) >= Math.abs(n - i) ? t - e > 0 ? "Left" : "Right" : n - i > 0 ? "Up" : "Down"
         }

         function n() {
             l = null, f.last && (f.el.trigger("longTap"), f = {})
         }

         function i() {
             l && clearTimeout(l), l = null
         }

         function o() {
             a && clearTimeout(a), c && clearTimeout(c), u && clearTimeout(u), l && clearTimeout(l), a = c = u = l = null, f = {}
         }

         function r(t) {
             return ("touch" == t.pointerType || t.pointerType == t.MSPOINTER_TYPE_TOUCH) && t.isPrimary
         }

         function s(t, e) {
             return t.type == "pointer" + e || t.type.toLowerCase() == "mspointer" + e
         }
         var a, c, u, l, d, f = {},
             p = 750;
         t(document).ready(function() {
             var h, m, g, v, y = 0,
                 w = 0;
             "MSGesture" in window && (d = new MSGesture, d.target = document.body), t(document).bind("MSGestureEnd", function(t) {
                 var e = t.velocityX > 1 ? "Right" : t.velocityX < -1 ? "Left" : t.velocityY > 1 ? "Down" : t.velocityY < -1 ? "Up" : null;
                 e && (f.el.trigger("swipe"), f.el.trigger("swipe" + e))
             }).on("touchstart MSPointerDown pointerdown", function(e) {
                 (!(v = s(e, "down")) || r(e)) && (g = v ? e : e.touches[0], e.touches && 1 === e.touches.length && f.x2 && (f.x2 = void 0, f.y2 = void 0), h = Date.now(), m = h - (f.last || h), f.el = t("tagName" in g.target ? g.target : g.target.parentNode), a && clearTimeout(a), f.x1 = g.pageX, f.y1 = g.pageY, m > 0 && 250 >= m && (f.isDoubleTap = !0), f.last = h, l = setTimeout(n, p), d && v && d.addPointer(e.pointerId))
             }).on("touchmove MSPointerMove pointermove", function(t) {
                 (!(v = s(t, "move")) || r(t)) && (g = v ? t : t.touches[0], i(), f.x2 = g.pageX, f.y2 = g.pageY, y += Math.abs(f.x1 - f.x2), w += Math.abs(f.y1 - f.y2))
             }).on("touchend MSPointerUp pointerup", function(n) {
                 (!(v = s(n, "up")) || r(n)) && (i(), f.x2 && Math.abs(f.x1 - f.x2) > 30 || f.y2 && Math.abs(f.y1 - f.y2) > 30 ? u = setTimeout(function() {
                     f.el.trigger("swipe"), f.el.trigger("swipe" + e(f.x1, f.x2, f.y1, f.y2)), f = {}
                 }, 0) : "last" in f && (30 > y && 30 > w ? c = setTimeout(function() {
                     var e = t.Event("tap");
                     e.cancelTouch = o, f.el.trigger(e), f.isDoubleTap ? (f.el && f.el.trigger("doubleTap"), f = {}) : a = setTimeout(function() {
                         a = null, f.el && f.el.trigger("singleTap"), f = {}
                     }, 250)
                 }, 0) : f = {}), y = w = 0)
             }).on("touchcancel MSPointerCancel pointercancel", o), t(window).on("scroll", o)
         }), ["swipe", "swipeLeft", "swipeRight", "swipeUp", "swipeDown", "doubleTap", "tap", "singleTap", "longTap"].forEach(function(e) {
             t.fn[e] = function(t) {
                 return this.on(e, t)
             }
         })
     }(Zepto),
     function(t) {
         function e(t) {
             return "tagName" in t ? t : t.parentNode
         }
         if (t.os.ios) {
             var n, i = {};
             t(document).bind("gesturestart", function(t) {
                 {
                     var o = Date.now();
                     o - (i.last || o)
                 }
                 i.target = e(t.target), n && clearTimeout(n), i.e1 = t.scale, i.last = o
             }).bind("gesturechange", function(t) {
                 i.e2 = t.scale
             }).bind("gestureend", function() {
                 i.e2 > 0 ? (0 != Math.abs(i.e1 - i.e2) && t(i.target).trigger("pinch") && t(i.target).trigger("pinch" + (i.e1 - i.e2 > 0 ? "In" : "Out")), i.e1 = i.e2 = i.last = 0) : "last" in i && (i = {})
             }), ["pinch", "pinchIn", "pinchOut"].forEach(function(e) {
                 t.fn[e] = function(t) {
                     return this.bind(e, t)
                 }
             })
         }
     }(Zepto), /*!File[thirdpart/plugins/throttle.js]*/
     function(t) {
         t.extend(t, {
             throttle: function(e, n, i) {
                 function o() {
                     function t() {
                         s = Date.now(), n.apply(a, u)
                     }

                     function o() {
                         r = void 0
                     }
                     var a = this,
                         c = Date.now() - s,
                         u = arguments;
                     i && !r && t(), r && clearTimeout(r), void 0 === i && c > e ? t() : r = setTimeout(i ? o : t, void 0 === i ? e - c : e)
                 }
                 var r, s = 0;
                 return "function" != typeof n && (i = n, n = e, e = 250), o._zid = n._zid = n._zid || t.proxy(n)._zid, o
             },
             debounce: function(e, n, i) {
                 return void 0 === n ? t.throttle(250, e, !1) : t.throttle(e, n, void 0 === i ? !1 : i !== !1)
             }
         })
     }(Zepto), /*!File[thirdpart/plugins/matchMedia.js]*/
     function(t) {
         t.matchMedia = function() {
             var e = 0,
                 n = "gmu-media-detect",
                 i = t.fx.transitionEnd,
                 o = t.fx.cssPrefix,
                 r = t("<style></style>").append("." + n + "{" + o + "transition: width 0.001ms; width: 0; position: absolute; clip: rect(1px, 1px, 1px, 1px);}\n").appendTo("head");
             return function(o) {
                 var s, a, c = n + e++,
                     u = [];
                 return r.append("@media " + o + " { #" + c + " { width: 1px; } }\n"), s = t('<div class="' + n + '" id="' + c + '"></div>').appendTo("body").on(i, function() {
                     a.matches = 1 === s.width(), t.each(u, function(e, n) {
                         t.isFunction(n) && n.call(a, a)
                     })
                 }), a = {
                     matches: 1 === s.width(),
                     media: o,
                     addListener: function(t) {
                         return u.push(t), this
                     },
                     removeListener: function(t) {
                         var e = u.indexOf(t);
                         return ~e && u.splice(e, 1), this
                     }
                 }
             }
         }()
     }(Zepto), /*!File[thirdpart/plugins/event.ortchange.js]*/
     $(function() {
         $.mediaQuery = {
             ortchange: "screen and (width: " + window.innerWidth + "px)"
         }, $.matchMedia($.mediaQuery.ortchange).addListener(function() {
             $(window).trigger("ortchange")
         })
     }), /*!File[lib/plugins/utils.js]*/
     function(t) {
         var e = Object.prototype.toString,
             n = function(t) {
                 return function(n) {
                     return e.call(n) == t
                 }
             };
         t.isString = n("[object String]"), t.isNumber = n("[object Number]"), t.isBoolean = n("[object Boolean]"), t.isObject = n("[object Object]"), t.isArray = n("[object Array]"), t.isDate = n("[object Date]"), t.isRegExp = n("[object RegExp]"), t.isFunction = n("[object Function]"), t.isWindow = function(t) {
             return null != t && t == t.window
         }, t.isMobile = window.SYS_CONF.isMobile, t.tapClick = t.isMobile ? "tap" : "click", t.isInArray = function(t, e) {
             if (!t || !t.length)
                 return !1;
             for (var n = 0, i = t.length; i > n; n++)
                 if (e == t[n])
                     return !0;
             return !1
         }, t.noop = function() {}, t.hereDoc = function(e) {
             for (var n = e.toString().split("\n").slice(1, -1), i = [], o = 0, r = n.length; r > o; o++)
                 i.push(t.trim(n[o]));
             return i.join("\n")
         }, t.getParam = function() {
             for (var t = {}, e = (location.search || "").replace(/^\?/, ""), n = e.split("&"), i = 0, o = n.length; o > i; i++) {
                 var r = n[i],
                     s = r.split("=");
                 t[s[0]] = s[1]
             }
             return function(e, n) {
                 return t[e] || n
             }
         }(), t.formatString = function(t) {
             t = String(t);
             var e = arguments,
                 n = Object.prototype.toString;
             return t.replace(/#\{(.+?)\}/g, function(t, i) {
                 for (var o = null, r = 1, s = e.length; s > r; r++) {
                     var a = e[r];
                     if (a && "object" == typeof a && i in a) {
                         o = a;
                         break
                     }
                 }
                 if (o) {
                     var c = o[i];
                     return "[object Function]" == n.call(c) ? c.call(o) : String(void 0 === c ? "" : c)
                 }
                 return ""
             })
         };
         var i = function(t) {
             var e;
             return Object.create ? Object.create(t) : (e = function() {}, e.prototype = t, new e)
         };
         t.inherits = function(e, n, o) {
             var r;
             return "function" == typeof n ? (r = n, n = null) : r = n && n.hasOwnProperty("constructor") ? n.constructor : function() {
                 return e.apply(this, arguments)
             }, t.extend(r, e, o || {}), r.__super__ = e.prototype, r.prototype = i(e.prototype), r.prototype._super = e, n && t.extend(!0, r.prototype, n), r
         }, t.abstractFunc = function(t) {
             return function() {
                 throw new Error('"' + t + '" is an abstract function')
             }
         };
         var o = !1;
         t.stopPageScroll = function() {
             o || (t(document).on("touchmove", function(t) {
                 t.preventDefault()
             }), o = !0)
         }, t.wbr = function(t) {
             return t.replace(/(?:<[^>]+>)|(?:&#?[0-9a-z]{2,6};)|(.{1})/gi, "$&<wbr>").replace(/><wbr>/g, ">")
         }
     }(window.Zepto || window.jQuery || window.$), /*!File[lib/plugins/dom.js]*/
     function(t) {
         t.fn.serializeForm = function() {
             var e, n, i = {};
             return t([].slice.call(this.get(0).elements)).each(function() {
                 e = t(this), n = e.attr("type"), this.name && "fieldset" != this.nodeName.toLowerCase() && !this.disabled && "submit" != n && "reset" != n && "button" != n && ("radio" != n && "checkbox" != n || this.checked) && (i[e.attr("name")] = t.trim(e.val()))
             }), i
         }
     }(window.Zepto || window.jQuery || window.$), /*!File[lib/plugins/cookie.js]*/
     function(t) {
         var e = function(t) {
                 return new RegExp('^[^\\x00-\\x20\\x7f\\(\\)<>@,;:\\\\\\"\\[\\]\\?=\\{\\}\\/\\u0080-\\uffff]+$').test(t)
             },
             n = function(t, n, i) {
                 if (e(t)) {
                     i = i || {};
                     var o = i.expires;
                     "number" == typeof i.expires && (o = new Date, o.setTime(o.getTime() + i.expires));
                     var r = t + "=" + n + (i.path ? "; path=" + i.path : "") + (o ? "; expires=" + o.toGMTString() : "") + (i.domain ? "; domain=" + i.domain : "") + (i.secure ? "; secure" : "");
                     document.cookie = r
                 }
             },
             i = function(t) {
                 if (e(t)) {
                     var n = new RegExp("(^| )" + t + "=([^;]*)(;|$)"),
                         i = n.exec(document.cookie);
                     if (i)
                         return i[2] || null
                 }
                 return null
             },
             o = function(t) {
                 var e = i(t);
                 return "string" == typeof e ? e = decodeURIComponent(e) : null
             },
             r = function(t, e, i) {
                 n(t, encodeURIComponent(e), i)
             },
             s = function(t, e) {
                 e = e || {}, e.expires = new Date(0), n(t, "", e)
             };
         t.setRawCookie = n, t.getRawCookie = i, t.setCookie = r, t.getCookie = o, t.remove = s, t.delCookie = s
     }(window.jQuery || window.Zepto || window.$), /*!File[lib/plugins/platform.js]*/
     function(t) {
         for (var e = ["Android", "Ipad", "Iphone", "Weibo", "Weixin", "Mac", "Windows", "App", "Apple"], n = 0, i = e.length; i > n; n++) {
             var o = e[n];
             t["is" + o] = window.SYS_CONF.platform[o.toLowerCase()]
         }
     }(window.Zepto || window.jQuery || window.$), /*!File[lib/s_require.js]*/
     window.Bee = function() {
         var t = function() {
                 var t = {},
                     e = Object.prototype.toString,
                     n = function(t) {
                         return function(n) {
                             return e.call(n) == t
                         }
                     };
                 return t.isString = n("[object String]"), t.isObject = n("[object Object]"), t.isNumber = n("[object Number]"), t.isArray = n("[object Array]"), t.isFunction = n("[object Function]"), t.isMobile = window.SYS_CONF.isMobile, t.tapClick = t.isMobile ? "tap" : "click", t
             }(),
             e = {},
             n = {},
             i = function(t, o) {
                 if (!e[t]) {
                     if (o)
                         return !1;
                     throw new Error(t + " is not defined")
                 }
                 if (!n[t]) {
                     var r = e[t],
                         s = [];
                     if (r.requireMods)
                         for (var a = 0, c = r.requireMods.length; c > a; a++)
                             s.push(i(r.requireMods[a]));
                     n[t] = r.modObj || r.defineFn.apply(null, s)
                 }
                 return n[t]
             },
             o = function() {
                 var n;
                 defConf = {};
                 for (var i = 0, o = arguments.length; o > i; i++) {
                     var r = arguments[i];
                     t.isString(r) ? (n = r, defConf.modName = r) : t.isObject(r) ? defConf.modObj = r : t.isArray(r) ? defConf.requireMods = r : t.isFunction(r) && (defConf.defineFn = r)
                 }
                 e[n] = defConf
             },
             r = function(e, n) {
                 var o = [];
                 if (t.isArray(e))
                     for (var r = 0, s = e.length; s > r; r++)
                         o.push(i(e[r]));
                 else
                     n = e;
                 n.apply(null, o)
             };
         return window.define = o, {
             define: o,
             boot: r,
             getMod: i
         }
     }(), /*!File[lib/base.js]*/
     define("lib/base", function() {
         var t = !1,
             e = "online" == SYS_CONF.environ ? !1 : t,
             n = {};
         window.base = n, n.var_dump = function(t) {
             e ? console.log(t) : alert(n.jsonEncode(t))
         }, n.clickLog = function(t, e) {
             if (t) {
                 var i = {
                     g_platform: $.isWeixin ? "weixin" : $.isWeibo ? "weibo" : $.isApp ? $.isIpad ? "ios" : $.isIphone ? "ios" : $.isAndroid ? "android" : "" : $.isMobile ? "mobile" : "pc",
                     g_geologid: SYS_CONF.geologid,
                     g_logid: SYS_CONF.logid,
                     g_product: "bee",
                     g_uniqid: SYS_CONF.userInfo.logUid,
                     g_action: t,
                     g_tn: SYS_CONF.tn,
                     g_tg: SYS_CONF.tg,
                     _r: Math.random()
                 };
                 if ($.isObject(e))
                     for (var o in e)
                         e.hasOwnProperty(o) && (i[o] = e[o]);
                 var r = SYS_CONF.domain.clicklog + "/click.gif?" + $.param(i);
                 n.imgRequest(r)
             }
         }, n.imgRequest = window._bee_imgRequest, n.sendError = function(t, e, i) {
             window._bee_sendError(n.jsonEncode(t), e, i || "base.sendError")
         }, n.onceExecMulitCallFn = function(t) {
             var e = [],
                 n = null,
                 i = !1,
                 o = !1,
                 r = {
                     done: function() {
                         o = !0, n = arguments;
                         for (var t = 0, i = e.length; i > t; t++) {
                             var r = e[t];
                             r && $.isFunction(r) && r.apply(null, n)
                         }
                         e = null
                     },
                     reset: function() {
                         o = !1, i = !1, n = null, e = []
                     }
                 },
                 s = function() {
                     i || (t.apply(r, arguments), i = !0);
                     var s = arguments[arguments.length - 1] || $.noop;
                     o ? $.isFunction(s) && s.apply(null, n) : e.push(s)
                 };
             return s
         }, n.isSupportLocation = function() {
             return e ? !0 : window.WeiboJSBridge || navigator.geolocation ? !0 : $.isWindows || $.isMac ? !1 : !0
         }, n.getGPSPosition = function(t) {
             if (e)
                 return setTimeout(function() {
                     t({
                         success: !0,
                         longitude: 116.441901,
                         latitude: 39.946048
                     })
                 }, 2e3), void 0;
             var i = (new Date).getTime(),
                 o = function(e) {
                     var o = (new Date).getTime() - i;
                     e.escape = o, t(e);
                     var r = ["geolog_" + (e.success ? "success" : "fail")];
                     for (var s in e)
                         r.push(s + "_" + e[s]);
                     n.sendError(r.join("~"))
                 };
             if (!n.isSupportLocation())
                 return setTimeout(function() {
                     o({
                         success: !1,
                         error: "unsupport",
                         errcode: "sysunsupport"
                     })
                 }, 10), void 0;
             var r = {
                     enableHighAccuracy: !0,
                     maximumAge: 0,
                     timeout: 3e3
                 },
                 s = !1;
             setTimeout(function() {
                 s || (s = !0, o({
                     success: !1,
                     error: "unavailable",
                     errcode: "systimeout"
                 }))
             }, 1e4);
             var a = function(t, e) {
                 t = t || "", navigator.geolocation.getCurrentPosition(function(n) {
                     if (!s) {
                         s = !0;
                         var i = n.coords.latitude,
                             r = n.coords.longitude,
                             a = n.coords.accuracy || !1;
                         o({
                             success: !0,
                             latitude: i,
                             longitude: r,
                             accuracy: a,
                             source: t + "h5",
                             errorCodeFrom: e || ""
                         })
                     }
                 }, function(n) {
                     if (!s) {
                         s = !0;
                         var i = null;
                         switch (n.code) {
                             case n.TIMEOUT:
                             case n.POSITION_UNAVAILABLE:
                                 i = "unavailable";
                                 break;
                             case n.PERMISSION_DENIED:
                                 i = "denied";
                                 break;
                             default:
                                 i = "unavailable"
                         }
                         o({
                             success: !1,
                             error: i,
                             source: t + "h5",
                             errcode: n.code,
                             errorCodeFrom: e || ""
                         })
                     }
                 }, r)
             };
             if ($.isWeibo) {
                 var c = function(t, e, n) {
                     if (e) {
                         if (s)
                             return;
                         s = !0, o({
                             success: !0,
                             latitude: t.lat,
                             longitude: t.long,
                             accuracy: -1,
                             source: "wb"
                         })
                     } else
                         a("wb", n)
                 };
                 window.WeiboJSBridge ? WeiboJSBridge.invoke("getLocation", {}, c) : $(document).on("WeiboJSBridgeReady", function() {
                     WeiboJSBridge.invoke("getLocation", {}, c)
                 })
             } else if ($.isWeixin && SYS_CONF.sns && SYS_CONF.sns.signedParam) {
                 var u = function() {
                     WeixinJSBridge.invoke("geoLocation", window.SYS_CONF.sns.signedParam, function(t) {
                         if ("geo_location:ok" == t.err_msg) {
                             if (s)
                                 return;
                             s = !0, o({
                                 success: !0,
                                 latitude: t.latitude,
                                 longitude: t.longitude,
                                 accuracy: t.accuracy,
                                 source: "wx"
                             })
                         } else
                             a("wx", t.err_msg)
                     })
                 };
                 window.WeixinJSBridge ? u() : $(document).on("WeixinJSBridgeReady", function() {
                     u()
                 })
             } else
                 a()
         }, n.getAddressInfoByPoint = function(t, e, i) {
             $.ajax({
                 url: "http://api.map.baidu.com/geocoder/v2/",
                 data: {
                     ak: "epx2GlGrgjgEizwW8iYsHwQZ",
                     location: t + "," + e,
                     output: "json",
                     poi: 0
                 },
                 dataType: "jsonp",
                 success: function(t) {
                     0 == t.status ? i && i(t.result.addressComponent) : (n.sendError("baidu geocoder error:" + t.status), i && i(!1))
                 },
                 error: function() {
                     n.sendError("baidu geocoder error:error"), i && i(!1)
                 }
             })
         }, n.getPointByAddress = function(t, e, i) {
             $.ajax({
                 url: "http://api.map.baidu.com/geocoder/v2/",
                 data: {
                     ak: "epx2GlGrgjgEizwW8iYsHwQZ",
                     city: t,
                     address: e,
                     output: "json"
                 },
                 dataType: "jsonp",
                 success: function(t) {
                     0 == t.status ? i && i(t.result.location) : (n.sendError("baidu geocoder error:" + t.status), i && i(!1))
                 },
                 error: function() {
                     n.sendError("baidu geocoder error:error"), i && i(!1)
                 }
             })
         }, n.getPlaceAddress = function(t, e, i) {
             $.ajax({
                 url: "http://api.map.baidu.com/place/v2/search",
                 data: {
                     ak: "epx2GlGrgjgEizwW8iYsHwQZ",
                     region: t,
                     q: t + e,
                     output: "json",
                     page_size: 20
                 },
                 timeout: 5e3,
                 dataType: "jsonp",
                 success: function(t) {
                     0 == t.status ? i && i(t.results) : (n.sendError("baidu place error:" + t.status), i && i(!1))
                 },
                 error: function() {
                     n.sendError("baidu place error:error"), i && i(!1)
                 }
             })
         }, n.getBaiduConv = function(t, e, i) {
             $.ajax({
                 url: "http://api.map.baidu.com/geoconv/v1/?",
                 data: {
                     ak: "epx2GlGrgjgEizwW8iYsHwQZ",
                     coords: t,
                     from: e,
                     output: "json",
                     page_size: 20
                 },
                 timeout: 5e3,
                 dataType: "jsonp",
                 success: function(t) {
                     0 == t.status ? i && i(t.result) : (n.sendError("baidu geo conv error:" + t.status), i && i(!1))
                 },
                 error: function() {
                     n.sendError("baidu geo conv error:error"), i && i(!1)
                 }
             })
         }, n.getGeoLogid = function() {
             var t = new Date,
                 e = function(t) {
                     return 10 > t ? "0" + t : t
                 },
                 n = function() {
                     var t = Math.random() + "";
                     return t.replace("0.", "")
                 },
                 i = [$.isWeixin ? "wexn" : $.isWeibo ? "webo" : $.isMobile ? "h5mb" : "wwpc", "" + t.getFullYear() + e(t.getMonth() + 1) + e(t.getDate()) + e(t.getHours()) + e(t.getMinutes()) + e(t.getSeconds()), ("L" + SYS_CONF.logid + "X" + n() + n() + n()).substr(0, 32), $.isWeixin || $.isWeibo ? "I" + SYS_CONF.userInfo.logUid : ""],
                 o = i.join("");
             return $.setCookie("geologid", o, {
                 path: "/",
                 expires: 31104e7
             }), o
         }, n.getAsId = function() {
             var t = "bee_AS_ASID",
                 e = "";
             if (window.localStorage)
                 try {
                     e = localStorage.getItem(t), e || (e = SYS_CONF.logid, localStorage.setItem(t, e))
                 } catch (n) {}
             return e || SYS_CONF.logid
         }, n.ajaxGet = function(t, e, i, o) {
             return e = $.extend({
                 asid: n.getAsId(),
                 _r: Math.random(),
                 tg: n.safeGetProp(window.SYS_CONF, "tg") || "",
                 reflogid: n.safeGetProp(window.SYS_CONF, "logid") || ""
             }, e), $.ajax({
                 url: t,
                 type: "GET",
                 data: e,
                 dataType: "json",
                 success: i || $.fn,
                 error: o || $.fn
             })
         }, n.ajaxPost = function(t, e, i, o) {
             return e = $.extend({
                 asid: n.getAsId(),
                 tg: n.safeGetProp(window.SYS_CONF, "tg") || "",
                 reflogid: n.safeGetProp(window.SYS_CONF, "logid") || ""
             }, e), $.ajax({
                 url: t,
                 type: "POST",
                 data: e,
                 dataType: "json",
                 success: i,
                 error: o
             })
         }, n.ajaxLoad = function(t, e, i, o, r) {
             i = $.extend({
                 asid: n.getAsId(),
                 tg: n.safeGetProp(window.SYS_CONF, "tg") || "",
                 reflogid: n.safeGetProp(window.SYS_CONF, "logid") || ""
             }, i), $.ajax({
                 url: e,
                 type: "get",
                 data: i,
                 dataType: "text",
                 success: function(e) {
                     $(t).html(e), o && o()
                 },
                 error: r
             })
         }, n.escape = function() {
             var t = {
                     html: {
                         regexp: /[&<>'"]/gm,
                         "&": "&amp;",
                         "<": "&lt;",
                         ">": "&gt;",
                         '"': "&quto;",
                         "'": "&#39;"
                     },
                     js: {
                         regexp: /[\\'"\/\n\r]/gm,
                         "\\": "\\\\",
                         "'": "\\x27",
                         '"': "\\x22",
                         "/": "\\/",
                         "\n": "\\n",
                         "\r": "\\r"
                     }
                 },
                 e = function(t) {
                     return function(e) {
                         return e.replace(t.regexp, function(e) {
                             return t[e] || e
                         })
                     }
                 };
             return {
                 js: e(t.js),
                 html: e(t.html)
             }
         }(), n.jsonEncode = function() {
             var t = {
                     "\b": "\\b",
                     "  ": "\\t",
                     "\n": "\\n",
                     "\f": "\\f",
                     "\r": "\\r",
                     '"': '\\"',
                     "\\": "\\\\"
                 },
                 e = function(e) {
                     return /["\\\x00-\x1f]/.test(e) && (e = e.replace(/["\\\x00-\x1f]/g, function(e) {
                         var n = t[e];
                         return n ? n : (n = e.charCodeAt(), "\\u00" + Math.floor(n / 16).toString(16) + (n % 16).toString(16))
                     })), '"' + e + '"'
                 },
                 n = function(t) {
                     var e, n, o, r = ["["],
                         s = t.length;
                     for (n = 0; s > n; n++)
                         switch (o = t[n], typeof o) {
                             case "undefined":
                             case "function":
                             case "unknown":
                                 break;
                             default:
                                 e && r.push(","), r.push(i(o)), e = 1
                         }
                     return r.push("]"), r.join("")
                 },
                 i = function(t) {
                     switch (typeof t) {
                         case "undefined":
                             return "undefined";
                         case "number":
                             return isFinite(t) ? String(t) : "null";
                         case "boolean":
                             return String(t);
                         case "string":
                             return e(t);
                         default:
                             if (null === t)
                                 return "null";
                             if ($.isArray(t))
                                 return n(t);
                             if ($.isDate(t))
                                 return t.toString();
                             var o, r, s = ["{"];
                             for (var a in t)
                                 if (Object.prototype.hasOwnProperty.call(t, a))
                                     switch (r = t[a], typeof r) {
                                         case "undefined":
                                         case "unknown":
                                         case "function":
                                             break;
                                         default:
                                             o && s.push(","), o = 1, s.push(e(a) + ":" + i(r))
                                     }
                             return s.push("}"), s.join("")
                     }
                 };
             return i
         }(), n.jsonDecode = function(t) {
             return new Function("return (" + t + ");")()
         }, n.createStyleSheet = function(t) {
             t = t || "base-default-style";
             var e = document.getElementById(t);
             return e ? e : (document.createStyleSheet ? e = document.createStyleSheet() : (e = document.createElement("style"), document.getElementsByTagName("head")[0].appendChild(e)), e.setAttribute("id", t), e)
         }, n.setStyleText = function(t, e) {
             var i = document.getElementById(e) || n.createStyleSheet(e);
             document.createStyleSheet ? i.cssText = t : i.innerHTML = t
         }, n.setInterval = function(t, e) {
             var n = function() {
                 var i = t();
                 i !== !1 && setTimeout(n, e)
             };
             n()
         }, n.urlAddParams = function(t, e) {
             var n = t.split("#");
             return n[0] = n[0] + (-1 == n[0].indexOf("?") ? "?" : "&") + ($.isString(e) ? e : $.param(e)), n.join("#")
         }, n.safeGetProp = function(t, e) {
             for (var n = e.split("."), i = 0, o = n.length; o > i; i++) {
                 var r = n[i];
                 if (!t || !t[r])
                     return void 0;
                 t = t[r]
             }
             return t
         };
         var i = null,
             o = null,
             r = !0;
         return $(document).on("tap", function(t) {
             o = t.srcElement, r = !1, clearTimeout(i), i = setTimeout(function() {
                 o = r = !1
             }, 600)
         }), $(document).delegate("input,a,textarea", "click", function(t) {
             return o && !r && t.srcElement != o ? (t.stopPropagation(), t.preventDefault(), !1) : void 0
         }), n
     }), /*!File[lib/EventObj.js]*/
     define("lib/EventObj", function() {
         var t = function(t, e) {
             this._b_evtName = t, this._b_preventDefault = !1, this._b_thenDoFn = null, $.extend(this, e)
         };
         t.prototype = {
             preventDefault: function() {
                 this._b_preventDefault = !0
             },
             getEventName: function() {
                 return this._b_evtName
             },
             then: function(t) {
                 this._b_thenDoFn = t
             },
             done: function() {
                 this._b_preventDefault || this._b_thenDoFn && this._b_thenDoFn()
             }
         };
         var e = 0,
             n = function() {
                 this.id = ++e, this._evtHandlers = {}
             };
         return n.prototype = {
             fire: function(e, n) {
                 var i = new t(e, n);
                 if (this._evtHandlers[e])
                     for (var o = 0, r = this._evtHandlers[e], s = r.length; s > o; o++) {
                         var a = r[o];
                         a.call(this, i)
                     }
                 i.done()
             },
             _addEventListener: function(t, e) {
                 (this._evtHandlers[t] || (this._evtHandlers[t] = [])).push(e)
             },
             on: function(t, e) {
                 {
                     var n = Object.prototype.toString.call(t);
                     Object.prototype.toString.call(e)
                 }
                 if ("[object String]" == n)
                     this._addEventListener(t, e);
                 else if ("[object Array]" == n)
                     for (var i = 0, o = t.length; o > i; i++)
                         this._addEventListener(t[i], e);
                 else {
                     if ("[object Object]" != n)
                         throw new Error("arguments error");
                     for (var r in t)
                         this._addEventListener(r, t[r])
                 }
                 return this
             },
             un: function(t, e) {
                 if (this._evtHandlers[t]) {
                     for (var n = this._evtHandlers[t], i = [], o = 0, r = n.length; r > o; o++) {
                         var s = n[o];
                         s != e && i.push(s)
                     }
                     return this._evtHandlers[t] = i, i.length != n
                 }
                 return !1
             }
         }, n
     }), /*!File[lib/Storage.js]*/
     define("lib/Storage", ["lib/base", "lib/EventObj"], function(t, e) {
         var n = "bee_",
             i = function() {
                 var e = window.name.match(/^NS_(.+)/);
                 if (e)
                     try {
                         this.storage = t.jsonDecode(e[1])
                     } catch (n) {
                         this.storage = {}
                     } else
                     this.storage = {}
             };
         i.prototype = {
             getItem: function(t) {
                 return this.storage[t] || null
             },
             setItem: function(e, n) {
                 this.storage[e] = n, window.name = "NS_" + t.jsonEncode(this.storage)
             }
         };
         var o = $.inherits(e, {
             constructor: function(t) {
                 e.call(this), this.customKey = t, this.localStorage = window.localStorage || new i, this._hadSendError = !1
             },
             set: function(e, n) {
                 var i, o = this._getKey(e),
                     r = $.isString(n) || $.isNumber(n) ? n : t.jsonEncode(n);
                 try {
                     i = this.localStorage.setItem(o, r)
                 } catch (s) {
                     t.sendError("Storage set error:" + String(s), "Storage.js")
                 }
                 return i
             },
             get: function(e) {
                 var n, i = this._getKey(e);
                 try {
                     n = this.localStorage.getItem(i)
                 } catch (o) {
                     t.sendError("Storage get error" + String(o), "Storage.js")
                 }
                 return !n || 0 !== n.indexOf("{") && 0 != n.indexOf("[") ? n : t.jsonDecode(n)
             },
             _getKey: function(t) {
                 return n + this.customKey + "_" + t
             }
         });
         return o.NameStorage = i, o
     }), /*!File[lib/Loading.js]*/
     define("lib/Loading", ["lib/base"], function(t) {
         var e = '<div id="mod-loading" class="mod-loading ui-hide">\n<div class="loading-content">\n<img class="loading-img" data-src="/static/bee/img/loading-ddc9e0d7.gif" width="60" heigt="20"/>\n<p><span class="loading-text"></span><span class="loading-status"></span></p>\n</div>\n</div>',
             n = ".mod-loading {\nposition:absolute;\ntop:0;\nleft:0;\nwidth:100%;\nheight:100%;\nz-index:500;\n}\n.mod-loading .loading-content{\nposition:absolute;\ntop:50%;\nleft:50%;\nwidth:200px;\nheight:60px;\nmargin:-50px 0 0 -100px;\ntext-align:center;\nline-height:30px;\nfont-weight:bold;\nbackground-color:#ccc;\nborder-radius:15px;\n}\n.mod-loading .loading-text{\nmargin-left:12px;\n}",
             i = 0,
             o = !1,
             r = !1,
             s = ['<span class="ui-hidden">...</span>', '.<span class="ui-hidden">..</span>', '..<span class="ui-hidden">.</span>', "..."],
             a = function() {
                 $("#mod-loading .loading-status").html(s[i++ % 4]), o && setTimeout(a, 300)
             },
             c = function() {
                 r || (r = !0, t.setStyleText(n, "mod-loading-stylesheet"), $("#mod-container").append(e))
             };
         return {
             show: function(t) {
                 c();
                 var e = $("#mod-loading .loading-img"),
                     n = e.data("src");
                 n && setTimeout(function() {
                     e.attr("src", n).data("src", null)
                 }, 100), o = !0, i = 0, a(), $("#mod-loading").removeClass("ui-hide").find(".loading-text").html(t)
             },
             hide: function() {
                 $("#mod-loading").addClass("ui-hide"), o = !1
             }
         }
     }), /*!File[lib/Timer.js]*/
     define("lib/Timer", ["lib/EventObj"], function(t) {
         var e = $.inherits(t, {
             constructor: function(n) {
                 t.call(this), this.tickerMs = n, this.prevTime = e.now(), this.timestamp = SYS_CONF.now + this.prevTime - SYS_CONF.jsNow;
                 var i = this,
                     o = function() {
                         var t = e.now(),
                             n = t - i.prevTime;
                         i.prevTime = t, i.timestamp += n, i.fire("tick", {
                             delta: n,
                             timestamp: i.timestamp,
                             tickerMs: i.tickerMs
                         }), setTimeout(o, i.tickerMs)
                     };
                 setTimeout(o, n)
             },
             getAccessTimestamp: function() {
                 return SYS_CONF.now
             },
             getTimestamp: function() {
                 return this.timestamp
             }
         });
         return e.now = function() {
             return (new Date).getTime()
         }, e
     }), /*!File[lib/GeoLocation.js]*/
     define("lib/GeoLocation", ["lib/base", "common/weixinUtils"], function(t) {
         var e = function(t, e) {
                 document.addEventListener ? document.addEventListener(t, e, !1) : document.attachEvent && (document.attachEvent(t, e), document.attachEvent("on" + t, e))
             },
             n = {
                 errTask: "{id:#{id},mark:#{_mark},code:#{errCode},msg:#{errMsg}}",
                 runningTask: "{id:#{id},mark:#{_mark},status:#{_status}}",
                 successTask: "{id:#{id},mark:#{_mark},expend:#{expend},accuracy:#{accuracy}}"
             },
             i = {
                 TASK_TIME: 2e3,
                 TRY_TIMES: 4,
                 ALL_TIMEOUT: 4e3
             },
             o = function() {
                 return window.WeiboJSBridge || navigator.geolocation ? !0 : $.isWindows || $.isMac ? !1 : !0
             },
             r = function(t, e) {
                 this.id = t, this._mark = e, this.geoMgr = null, this.geoResult = null, this._isFinish = !1, this._status = "standby"
             };
         r.prototype = {
             _success: function(t) {
                 this._finish(t, !0, !0)
             },
             _error: function(t, e, n) {
                 var i = {
                     errCode: t,
                     errMsg: e
                 };
                 this._finish(i, !1, n)
             },
             _finish: function(t, e, n) {
                 this._isFinish || (this._isFinish = !0, this._status = "finish", t.mark = this._mark, t.success = e, t.expend = (new Date).getTime() - this.taskStartTimestamp, this.geoResult = t, this.geoMgr.onTaskFinish(this.id, t, n))
             },
             run: function() {
                 this.taskStartTimestamp = (new Date).getTime(), this.__run()
             },
             isFinished: function() {
                 return this._isFinish
             },
             toString: function() {
                 return this.geoResult ? $.formatString(n[this.geoResult.success ? "successTask" : "errTask"], this, this.geoResult) : $.formatString(n.runningTask, this)
             }
         };
         var s = $.inherits(r, {
                 constructor: function(t) {
                     r.call(this, t, "wb")
                 },
                 __run: function() {
                     var t = this;
                     this._status = "waitReady", window.WeiboJSBridge ? this._doGeo() : e("WeiboJSBridgeReady", function() {
                         t._doGeo()
                     })
                 },
                 _doGeo: function() {
                     this._status = "doing";
                     var t = this;
                     WeiboJSBridge.invoke("getLocation", {}, function(e, n, i) {
                         n ? t._success({
                             latitude: e.lat,
                             longitude: e.long,
                             accuracy: -1
                         }) : t._error(i)
                     })
                 }
             }),
             a = $.inherits(r, {
                 constructor: function(t) {
                     r.call(this, t, "wx")
                 },
                 __run: function() {
                     var t = this;
                     this._status = "waitReady", window.WeixinJSBridge ? this._doGeo() : e("WeixinJSBridgeReady", function() {
                         t._doGeo()
                     })
                 },
                 _doGeo: function() {
                     this._status = "doing";
                     var t = this;
                     WeixinJSBridge.invoke("geoLocation", $.extend({
                         scope: "jsapi_location",
                         type: "wgs84"
                     }, window.SYS_CONF.sns.signedParam), function(e) {
                         "geo_location:ok" == e.err_msg ? t._success({
                             latitude: e.latitude,
                             longitude: e.longitude,
                             accuracy: e.accuracy
                         }) : t._error(-1, e.err_msg)
                     })
                 }
             }),
             c = $.inherits(r, {
                 constructor: function(t) {
                     r.call(this, t, "h5")
                 },
                 __run: function() {
                     var t, e, n = this;
                     return n._status = "doing", (t = $.getParam("lat")) && (e = $.getParam("lng")) ? (n._success({
                         latitude: parseFloat(t),
                         longitude: parseFloat(e),
                         accuracy: -1
                     }), void 0) : (navigator.geolocation.getCurrentPosition(function(t) {
                         var e = t.coords;
                         n._success({
                             latitude: e.latitude,
                             longitude: e.longitude,
                             accuracy: e.accuracy
                         })
                     }, function(t) {
                         n._error(t.code, t.message, t.code == t.PERMISSION_DENIED)
                     }, {
                         enableHighAccuracy: !0,
                         maximumAge: 0,
                         timeout: i.TASK_TIME
                     }), void 0)
                 }
             }),
             u = function(t) {
                 this._callback = t, this._taskArr = [], this._taskCount = 0, this._hadFinish = !1, this._taskTicker = null, this._successTaskId = null, this._startTimestamp = (new Date).getTime(), this._hadMakeReport = !1, this.expend = 0
             };
         u.prototype = {
             run: function() {
                 var t = this;
                 setTimeout(function() {
                     t._hadFinish || (t._hadFinish = !0, t._callback({
                         success: !1,
                         error: "unavailable"
                     })), t._makeReport()
                 }, i.TRY_TIMES * i.TASK_TIME + i.ALL_TIMEOUT);
                 var e = function() {
                     var n = t._taskCount++;
                     t._createTask(n, !(n % 2)), t._taskCount < 6 && (t._taskTicker = setTimeout(e, i.TASK_TIME))
                 };
                 e()
             },
             onTaskFinish: function(e, n, i) {
                 if (n.success && !this._hadFinish) {
                     this._successTaskId = e, this._hadFinish = !0;
                     var o = this;
                     if ("baidu" != $.getParam("postype", !1)) {
                         var r = n.longitude + "," + n.latitude;
                         t.getBaiduConv(r, 1, function(t) {
                             t && t.length > 0 && (n.longitude = t[0].x, n.latitude = t[0].y), o._callback(n)
                         })
                     } else
                         o._callback(n)
                 }
                 i && (clearTimeout(this._taskTicker), this._makeReport())
             },
             _addTask: function(t) {
                 t.geoMgr = this, this._taskArr[t.id] = t, t.run()
             },
             _createTask: function(t, e) {
                 e && $.isWeibo ? this._addTask(new s(t)) : e && $.isWeixin && SYS_CONF.sns && SYS_CONF.sns.signedParam ? this._addTask(new a(t)) : this._addTask(new c(t))
             },
             _makeReport: function() {
                 if (!this._hadMakeReport) {
                     this._hadMakeReport = !0, this.expend = (new Date).getTime() - this._startTimestamp;
                     var e, n = this;
                     e = void 0 == this._successTaskId ? {
                         success: !1
                     } : {
                         success: !0,
                         taskId: n._successTaskId,
                         taskCount: n._taskCount,
                         accuracy: n._taskArr[n._successTaskId].geoResult.accuracy
                     }, e.expend = this.expend, e.tasks = this._taskArr.join(","), t.clickLog("sys_geolocation", e)
                 }
             }
         };
         var l = function(t) {
             if (!o())
                 return setTimeout(function() {
                     t({
                         success: !1,
                         error: "unsupport"
                     })
                 }, 10), void 0;
             var e = new u(t);
             e.run()
         };
         return {
             isSupportLocation: o,
             getGPSPosition: l
         }
     }), /*!File[common/Dialog.js]*/
     define("common/Dialog", function() {
         var t = $.isMobile ? Bee.getMod("common/Dialog_phone") : Bee.getMod("common/Dialog_www"),
             e = {
                 show: function(e) {
                     return t.show(e)
                 },
                 hide: function() {
                     return t.hide()
                 },
                 alert: function(e, n) {
                     return t.alert(e, n)
                 },
                 confirm: function(e, n, i) {
                     return t.confirm(e, n, i)
                 },
                 tip: function(e) {
                     return t.tip(e)
                 },
                 popSelect: function(e) {
                     return t.popSelect(e)
                 }
             };
         return e
     }), /*!File[common/Dialog_phone.js]*/
     define("common/Dialog_phone", ["lib/EventObj"], function(t) {
         var e = null,
             n = null,
             i = {
                 wrap: '<div id="mod-dialog-wrap" class="mod-dialog dialog-closed">\n<div class="dialog-mask"></div>\n<div class="dialog-vertical">\n</div>\n</div>',
                 main: '<div class="dialog-main #{customClass}">\n<div class="dialog-title" style="display:#{titleDisplay}">#{title}</div>\n<table width="100%"><tr><td class="dialog-content" style="height:#{contentHeight};">#{content}</td></tr></table>\n<div class="dialog-buttons" style="display:#{buttonsDisplay}">#{buttonHtml}</div>\n</div>',
                 button: '<div class="dialog-action dialog-btn #{isLastClass} dialog-btn-#{btnKey}" style="width:#{btnWidth}%" data-action="button" data-action-arg="#{btnKey}">#{btnText}</div>'
             },
             o = function() {
                 var t = $(this),
                     n = "action_" + t.data("action"),
                     i = t.data("action-arg") || void 0;
                 e && e[n] && e[n](i)
             },
             r = $.inherits(t, {
                 constructor: function(n) {
                     t.call(this), this.option = $.extend({
                         title: !1,
                         customClass: "",
                         content: "",
                         contentHeight: 100,
                         buttons: []
                     }, n), this._show(), e = this
                 },
                 _show: function() {
                     var t = this;
                     n || ($(i.wrap).appendTo("body"), n = $("#mod-dialog-wrap").on("touchend", function(t) {
                         t.preventDefault()
                     }), n.find(".dialog-vertical").delegate(".dialog-action", $.tapClick, o).delegate(".dialog-cmd", $.tapClick, function(e) {
                         e.stopPropagation(), e.preventDefault();
                         var n = $(this).data("cmd");
                         switch (n) {
                             case "close":
                                 t.close()
                         }
                     }));
                     var e = this.option,
                         r = (e.title ? 60 : 0) + e.contentHeight + (e.buttons.length ? 60 : 0),
                         s = {
                             title: e.title,
                             titleDisplay: e.title ? "block" : "none",
                             customClass: e.customClass,
                             content: e.content,
                             contentHeight: e.contentHeight + "px",
                             buttonsDisplay: e.buttons.length ? "block" : "none",
                             buttonHtml: function() {
                                 for (var t = [], n = 0, o = e.buttons.length; o > n; n++) {
                                     var r = e.buttons[n];
                                     t.push($.formatString(i.button, {
                                         isLastClass: n === o - 1 ? "dialog-btn-last" : "",
                                         btnKey: r.key,
                                         btnText: r.text,
                                         btnWidth: parseInt(100 / o) - 1
                                     }))
                                 }
                                 return t.join("")
                             }
                         };
                     return n.css("display", "block"), setTimeout(function() {
                         n.removeClass("dialog-closed").find(".dialog-vertical").css("margin-top", -r / 2 + "px").html($.formatString(i.main, s))
                     }, 30), this
                 },
                 action_button: function(t) {
                     for (var e = 0, n = this.option.buttons, i = n.length; i > e; e++) {
                         var o = n[e];
                         if (o.key == t) {
                             o.onClick && o.onClick.call(this), o.autoClose && this.close();
                             break
                         }
                     }
                 },
                 close: function() {
                     n.addClass("dialog-closed"), setTimeout(function() {
                         n.css("display", "none")
                     }, 100), e = null
                 }
             });
         return r.alert = function(t, e) {
             new r({
                 title: !1,
                 content: t,
                 buttons: [{
                     key: "ok",
                     text: "确定",
                     autoClose: !0,
                     onClick: e
                 }]
             })
         }, r.confirm = function(t, e, n) {
             new r({
                 title: !1,
                 content: t,
                 buttons: [{
                     key: "ok",
                     text: "确定",
                     autoClose: !0,
                     onClick: e
                 }, {
                     key: "cancel",
                     text: "取消",
                     autoClose: !0,
                     onClick: n
                 }]
             })
         }, r.tip = function(t) {
             var e = new r({
                 title: !1,
                 content: t
             });
             setTimeout(function() {
                 e.close()
             }, 1e3)
         }, r.show = function(t) {
             new r(t)
         }, r
     });
