/*!File[lib/RelSelect.js]*/
define("lib/RelSelect", ["lib/EventObj"], function(t) {
        var i = {
                option: '<option value="#{value}" #{selected}>#{name}</option>'
            },
            e = function(t, i) {
                return $.isString(t) && $.isString(i) ? {
                    name: i,
                    value: t
                } : $.isNumber(t) && $.isString(i) ? {
                    name: i,
                    value: i
                } : void 0
            },
            n = $.inherits(t, {
                constructor: function(i) {
                    t.call(this), this.containerNode = $(i.containerNode), this.dataParser = i.dataParser || e, this.selectName = i.selectName || "", this.emptyName = i.emptyName || !1, this.selectData = null, this.parent = null;
                    var n = this;
                    this.containerNode.delegate("select", "change", function() {
                        var t = this.value;
                        n._fireValue(t)
                    })
                },
                setData: function(t, e) {
                    this.selectData = {};
                    var n = ['<select name="', this.selectName, '">'],
                        o = this;
                    this.emptyName && n.push($.formatString(i.option, {
                        name: o.emptyName
                    })), $.each(t, function(t, r) {
                        var a = o.dataParser(t, r);
                        o.selectData["v_" + a.value] = a.name, o.selectData["n_" + a.name] = a.value, n.push($.formatString(i.option, a, {
                            selected: void 0 !== e && a.value == e ? "selected" : ""
                        }))
                    }), n.push("</select>"), this.containerNode.html(n.join("")), this._fireValue(o.getValue())
                },
                setValue: function(t) {
                    this.containerNode.find("select").val(t), this._fireValue(t)
                },
                setName: function(t) {
                    var i = this.selectData["n_" + t];
                    i && this.setValue(i)
                },
                setParent: function(t, i) {
                    this.parent = t;
                    var e = this;
                    this.parent.on("valueChange", function(t) {
                        i.call(e, t)
                    })
                },
                getValue: function() {
                    return this.containerNode.find("select").val()
                },
                getName: function() {
                    var t = this.getValue();
                    return this.selectData["v_" + t]
                },
                isDataHasName: function(t) {
                    return this.selectData["n_" + t]
                },
                isDataHasValue: function(t) {
                    return this.selectData["v_" + t]
                },
                _fireValue: function(t) {
                    var i = this.selectData[t],
                        e = this.containerNode.find("select")[0].selectedIndex;
                    this.fire("valueChange", {
                        name: i,
                        value: t,
                        selectedIndex: e
                    })
                }
            });
        return n
    }), /*!File[lib/Performance.js]*/
    define("lib/Performance", ["lib/base"], function(t) {
        var i = {
                logid: SYS_CONF.logid,
                g_uniqid: t.safeGetProp(SYS_CONF, "userInfo.beeId")
            },
            e = window.SYS_PERFORMANCE ? window.SYS_PERFORMANCE.headStart : !1,
            n = !1,
            o = function() {
                return 1 * new Date
            },
            r = function() {
                if (window.performance && $.isFunction(window.performance.getEntries))
                    for (var t = 0, e = window.performance.getEntries(), n = e.length; n > t; t++) {
                        var o, r = e[t],
                            a = r.name,
                            s = Math.round(r.duration),
                            d = 30 > s;
                        if (o = a.match(/beequick\.cn\/static\/.+\/([^\/]+\.(?:js|css))/)) {
                            var c = o[1].replace(/\-[0-9a-f]{8}/, "");
                            i["r_" + c] = d ? 0 : s
                        }
                    }
            },
            a = function(t, n) {
                if (e && window.performance && window.performance.timing) {
                    var o = window.performance.timing,
                        r = o.fetchStart,
                        a = o[t],
                        s = a - e,
                        d = a == r ? 1 : 0;
                    r && a && (i["t_" + t] = n && d ? 0 : s)
                }
            },
            s = function() {
                if (!e) return this;
                var t = window.SYS_PERFORMANCE.pageName,
                    n = t.indexOf(".");
                return i.pageName = -1 == n ? t : t.substring(0, n), i.t_head = window.SYS_PERFORMANCE.bodyStart - e, window.SYS_PERFORMANCE.wxRedirectTime && (i.t_wxRedirectTime = -window.SYS_PERFORMANCE.wxRedirectTime), $(d("ready", !0)), $(window).on("load", d("load", !0)), window.screen && (i.screen = window.screen.width + "x" + window.screen.height), this
            },
            d = function(t, n) {
                var r = function() {
                    var n = "t_" + t,
                        r = o();
                    return i[n] ? this : (i[n] = r - e, void 0)
                };
                return n ? r : (r(), this)
            },
            c = function(t, e) {
                return i[t] ? this : (i[t] = e, this)
            },
            u = function() {
                n || (n = !0, a("navigationStart"), a("domainLookupEnd", !0), a("connectEnd", !0), a("responseEnd"), r(), t.imgRequest(window.SYS_CONF.domain.clicklog + "/performance.gif?" + $.param(i)))
            };
        return {
            init: s,
            makeTime: d,
            addData: c,
            report: u
        }
    }), /*!File[lib/plugins/suggestion.js]*/
    function(t) {
        t.fn.suggestion = function(i) {
            var e = {
                regionBias: null,
                onSelect: function() {},
                onSuggested: function() {},
                minimumCharacters: 1,
                filterResults: null,
                errorHandler: null,
                timeout: 300,
                noResultsText: "无推荐结果",
                noInputText: "无地址信息，请输入",
                hintText: "请继续输入楼层和门牌号",
                ak: []
            };
            i && t.extend(e, i);
            var n, o, r, a, s = t(this),
                d = s,
                c = 0,
                u = !0,
                l = s.attr("id") + "-dropdown",
                p = s.attr("id") + "-dropdown-child";
            return this.changeRegion = function(t) {
                e.regionBias = t
            }, this.fetch = function() {
                s.showEmptyResult(), s && s.fetch(s.val(), !1)
            }, this.keepon = function(t) {
                u = t
            }, d.attr("autocomplete", "off").addClass("search-suggestion"), r = t("#" + l), a = t("." + p), s.show = function() {
                e.onSuggested(), r.show()
            }, s.empty = function() {
                a.empty()
            }, s.showEmptyResult = function() {
                s.empty(), li = s.getNOResultHtml(), li.appendTo(a), t("li", r).css("cursor", "default"), s.show()
            }, s.showHint = function() {
                s.empty(), li = s.getHintHtml(), li.appendTo(a), t("li", r).css("cursor", "default"), s.show()
            }, s.previousSearch = null, s.searchCache = {}, s.fetchBefore = function(i, r) {
                return o && o.abort(), i = t.trim(i), i === s.previousSearch && r !== !0 ? !1 : (s.previousSearch = i, n = i, c || (c = setTimeout(function(t) {
                    clearTimeout(c), c = 0, s.fetch(n, t)
                }, e.timeout, r)), void 0)
            }, s.fetch = function(t, i) {
                var n = t.length,
                    o = {
                        address: t
                    };
                return n < e.minimumCharacters && i !== !0 ? (s.empty(), s.show(), !1) : (e.regionBias && (o.region = e.regionBias), s.suggest(o, s.onSuggest(i)), void 0)
            }, s.suggest = function(i, n) {
                {
                    var o = e.ak,
                        r = o ? e.ak.length : 0,
                        a = r > 0 ? o[Math.floor(Math.random() * r)] : "epx2GlGrgjgEizwW8iYsHwQZ";
                    t.ajax({
                        url: "http://api.map.baidu.com/place/v2/search",
                        data: {
                            ak: a,
                            region: i.region,
                            q: i.address,
                            output: "json",
                            page_size: 20
                        },
                        dataType: "jsonp",
                        success: function(t) {
                            0 == t.status ? n && n(t.results, !1) : n && n({}, !0)
                        },
                        error: function() {
                            n && n({}, !0)
                        }
                    })
                }
            }, s.onSuggest = function() {
                return function(i, n) {
                    if (u) {
                        var o = [],
                            r = 0;
                        if (s.empty(), n && e.errorHandler) return e.errorHandler(i, n), !1;
                        t.extend(!0, o, i), e.filterResults && (o = e.filterResults(o)), r = o.length, 0 === r ? s.showEmptyResult() : (t.each(o, function(i, n) {
                            var o = t("<div>");
                            o.addClass("title").html(n.name);
                            var r = t("<div>");
                            r.addClass("addr").html(n.address);
                            var c = t("<li>");
                            o.appendTo(c), r.appendTo(c), c.on(t.tapClick, function() {
                                d.focus(), e.onSelect(n), s.previousSearch = e.regionBias + n.name, d.val(n.name), s.showHint()
                            }).appendTo(a)
                        }), s.show())
                    }
                }
            }, s.on("input", function() {
                var i, n = t.trim(s.val());
                i = n ? e.regionBias ? e.regionBias + s.val() : s.val() : n, s.fetchBefore(i, !1)
            }), s.getNOResultHtml = function() {
                return li = t("<li>").html(e.noResultsText).css("color", "#FF8A00").click(function() {
                    d.focus()
                })
            }, s.getNOInputHtml = function() {
                return li = t("<li>").html(e.noInputText).css("color", "#FF8A00").click(function() {
                    d.focus()
                })
            }, s.getHintHtml = function() {
                return li = t("<li>").html(e.hintText).css("color", "#FF8A00").click(function() {
                    d.focus()
                })
            }, this
        }
    }(Zepto), /*!File[lib/fx.js]*/
    define("lib/fx", function() {
        var t = {
            parabola: function(t) {
                var i = t.height ? t.startY - t.height : 0,
                    e = t.startX,
                    n = t.startY - i,
                    o = t.endX,
                    r = t.endY - i,
                    a = t.duration,
                    s = t.frameRate,
                    d = (Math.abs(e - o), Math.round(a * s)),
                    c = 1 / s * 1e3,
                    u = 0,
                    l = function() {
                        var a = u / d * (o - e) + e,
                            s = Math.pow((Math.sqrt(n) + Math.sqrt(r)) / (e - o), 2),
                            p = e - Math.sqrt(n / s),
                            h = s * Math.pow(a - p, 2);
                        t.callback(a, h + i, u / d), u++, d >= u && setTimeout(l, c)
                    };
                l()
            },
            swing: function() {
                var t = function(t) {
                    this.deg = 20, this.speed = 0, this.stickHardness = (t.stickHardness || 50) / 5, this.drag = (t.drag || 50) / 200, this.callback = t.callback, this.deviceMotion = t.deviceMotion ? !0 : !1, this.running = !0
                };
                t.prototype = {
                    update: function(t) {
                        var i = this.deg,
                            e = this.speed,
                            n = this.stickHardness,
                            o = this.drag,
                            r = 0;
                        r += (i > 0 ? -1 : 1) * Math.abs(i - 90) / 90 * n, r += -e * o, r = r * t / 1e3, e += r, i += e, i > 90 ? i = 90 : -90 > i && (i = -90), this.deg = i, this.speed = e
                    },
                    execCallback: function() {
                        this.callback(this.deg)
                    }
                };
                var i, e = !1,
                    n = [],
                    o = function() {
                        e || (e = !0, i = Date.now(), window.requestAnimationFrame(r))
                    },
                    r = function() {
                        var t, e, o, a, s = n.length;
                        if (0 != s) {
                            for (a = Date.now(), o = a - i, o > 30 && (o = 30), i = a, t = 0; s > t; t++) e = n[t], e.running && (e.update(o), e.execCallback());
                            window.requestAnimationFrame(r)
                        }
                    };
                return function(i) {
                    var e = new t(i);
                    return n.push(e), o(), e
                }
            }()
        };
        return t
    }), /*!File[common/weixinUtils.js]*/
    define("common/weixinUtils", ["lib/base", "common/Share"], function(t, i) {
        var e = {
                shareMask: '<div id="mod-sharemask" class="mod-sharemask"></div>'
            },
            n = !1,
            o = ($.noop, function(t) {
                n || $(e.shareMask).appendTo("body").on($.tapClick, function() {
                    $(this).css("display", "none")
                }), n = !0, $("#mod-sharemask").css("display", "block").css("background-color", t ? "rgba(0,0,0,.45)" : "transparent")
            }),
            r = function(t) {
                t = t || i.getWeixinDefaultShareObj(), s(function(i) {
                    if (i) {
                        var e = {
                            title: t.title,
                            desc: t.description,
                            link: t.link,
                            imgUrl: t.imgUrl
                        };
                        wx.onMenuShareTimeline(e), wx.onMenuShareAppMessage(e), wx.onMenuShareQQ(e), wx.onMenuShareWeibo(e)
                    }
                })
            },
            a = function(t) {
                return function() {
                    s(function(i) {
                        i && wx[t] && wx[t]()
                    })
                }
            },
            s = t.onceExecMulitCallFn(function() {
                var t = this;
                $.isWeixin && window.wx && window.SYS_CONF && window.SYS_CONF.sns && window.SYS_CONF.sns.weixinJsApiConf ? (wx.config(window.SYS_CONF.sns.weixinJsApiConf), wx.ready(function() {
                    t.done(!0), r()
                }), wx.error(function() {
                    t.done(!1)
                })) : t.done(!1)
            });
        return {
            init: s,
            showToolbar: a("showToolbar"),
            hideToolbar: a("hideToolbar"),
            showOptionMenu: a("showOptionMenu"),
            hideOptionMenu: a("hideOptionMenu"),
            shareTip: o,
            setShare: r
        }
    }), /*!File[common/Share.js]*/
    define("common/Share", function() {
        return {
            getWeixinDefaultShareObj: function() {
                return {
                    title: "馋了吗？找爱鲜蜂！",
                    description: "馋了？忙呢？召唤鲜蜂侠，鲜果咖啡，坚果卤味，各种新鲜，闪电送达！",
                    imgUrl: "http://weixin.beequick.cn/static/bee/img/icon_100-4b4450ac.png",
                    link: "http://m.beequick.cn"
                }
            },
            getProductShareObj: function(t, i) {
                return {
                    title: "爱鲜蜂-各种新鲜闪电送达",
                    description: "#爱鲜蜂# " + t.name,
                    imgUrl: t.app_mimg,
                    link: "http://m.beequick.cn/show/productDetail?id=" + t.id + "&shopId=" + i
                }
            },
            getOrderShareObj: function(t) {
                return {
                    title: "爱鲜蜂-各种新鲜闪电送达",
                    description: "我在爱鲜蜂补充能量ing……这里各种新鲜全都有，你懂的，千万别来找我！",
                    imgUrl: t.order_goods[0].app_mimg,
                    link: "http://m.beequick.cn/show/share?key=" + t.share_key
                }
            },
            getActiveShareObj: function() {}
        }
    }), /*!File[common/User.js]*/
    define("common/User", ["lib/base", "lib/EventObj", "common/Dialog"], function(t, i, <e></e>) {
        var n = function() {
                var t, i = 60,
                    e = function() {
                        i--, i && setTimeout(e, 1e3), t && t(i)
                    },
                    n = function(n) {
                        t = n, i = 60, e()
                    };
                return n
            }(),
            o = $.inherits(i, {
                constructor: function() {
                    i.call(this), this._isLogin = !!SYS_CONF.userInfo.authorized, this.phone = SYS_CONF.userInfo.phone, this.rawPhone = SYS_CONF.userInfo.rawPhone
                },
                isLogin: function() {
                    return this._isLogin
                },
                getPhone: function() {
                    return this.phone
                },
                getRawPhone: function() {
                    return this.rawPhone
                },
                logout: function(i) {
                    var n = this;
                    t.ajaxPost("/submit/logout", {}, function(t) {
                        0 == t.errno ? (n._setLogin(!1), i && i()) : e.alert("退出失败：" + t.errmsg)
                    })
                },
                bindLogin: function(i, o) {
                    if (!i.data("bindLogin")) {
                        i.data("bindLogin", "1");
                        var r = this;
                        ! function(i) {
                            var a = function(t, n) {
                                    i.find(".login-error-" + t).length ? i.find(".login-error-" + t).html(n) : n && e.tip(n)
                                },
                                s = function() {
                                    var t = i.find(".login-input-phone").val(),
                                        e = /^1\d{10}$/.test(t);
                                    return e || a("phone", "请输入正确的手机号"), e ? t : !1
                                },
                                d = function() {
                                    var t = i.find(".login-input-code").val();
                                    return codeOk = /^\d{4,6}$/.test(t), codeOk || a("code", "请输入验证码的数字"), codeOk ? t : !1
                                },
                                c = function(t) {
                                    t ? i.find(".login-send").html(t + "s后重新发送").data("disabled", "1").css("background-color", "gray") : i.find(".login-send").html("获取验证码").data("disabled", "").css("background-color", "")
                                },
                                u = function(e, n) {
                                    t.ajaxPost("/submit/sendVerifySMS", {
                                        phone: e,
                                        voice: n ? 1 : 0
                                    }, function(t) {
                                        t.data && 1 == t.data.isvalid ? (r._setLogin(!0), o && o()) : 0 == t.errno ? (a("phone", n ? "语音验证码已经拨打" : "验证码已经发送"), n && t.data.service && i.find(".login-voice-wrap").html("电话拨打中，请留意来电：" + t.data.service), i.find(".login-input-code")[0].focus()) : a("phone", t.errmsg)
                                    })
                                };
                            i.find(".login-send").on($.tapClick, function() {
                                if (!$(this).data("disabled")) {
                                    var t;
                                    (t = s()) && (n(c), u(t))
                                }
                            }), i.find(".login-submit").on($.tapClick, function() {
                                var i, e;
                                (i = s()) && (e = d()) && t.ajaxPost("/submit/verify", {
                                    phone: i,
                                    code: e
                                }, function(t) {
                                    0 == t.errno || 6201 == t.errno ? (r.rawPhone = i, r.phone = i.replace(/(\d{3})(\d{4})(\d{4})/, "$1***$3"), r._setLogin(!0), o && o()) : a("code", t.errmsg)
                                })
                            }), i.delegate(".login-voice-link", $.tapClick, function() {
                                var t;
                                (t = s()) && u(t, !0)
                            })
                        }($(i))
                    }
                },
                _setLogin: function(t) {
                    this._isLogin = t, this.fire("statusChange")
                }
            }),
            r = null;
        return {
            getInstance: function() {
                return r || (r = new o), r
            }
        }
    }), /*!File[common/UserStatus.js]*/
    define("common/UserStatus", function() {
        var t = {
                longxiaAppGuide: 0,
                geoGuide: 1,
                cartGuide: 2,
                firstOrder: 3,
                addrmapGuide: 4
            },
            i = null,
            e = !1,
            n = function() {
                if (!e) {
                    e = !0, i = [];
                    for (var t = $.getCookie("beeus") || "", n = 0; 10 > n; n++) i[n] = t.charAt(n) || 0
                }
            },
            o = function(e) {
                if (n(), void 0 !== t[e]) {
                    var o = i[t[e]];
                    return parseInt(o) == o ? parseInt(o) : o
                }
                return !1
            },
            r = function(e, o) {
                if (n(), o += "", 0 == o.length) o = "0";
                else if (1 !== o.length) throw new Error("status value error");
                return void 0 !== t[e] && (i[t[e]] = o, $.setCookie("beeus", i.join(""), {
                    path: "/",
                    expires: 31104e6
                })), !1
            },
            a = function(t) {
                var i = o(t);
                return i === !1 ? !1 : 0 == i ? (r(t, 1), !0) : !1
            };
        return {
            isFirst: a
        }
    }), /*!File[common/AreaInfo.js]*/
    define("common/AreaInfo", function() {
        var t = [{
                id: 3,
                name: "东城区"
            }, {
                id: 4,
                name: "西城区"
            }, {
                id: 7,
                name: "朝阳区"
            }, {
                id: 8,
                name: "丰台区"
            }, {
                id: 9,
                name: "石景山区"
            }, {
                id: 10,
                name: "海淀区"
            }, {
                id: 11,
                name: "门头沟区"
            }, {
                id: 12,
                name: "房山区"
            }, {
                id: 13,
                name: "通州区"
            }, {
                id: 14,
                name: "顺义区"
            }, {
                id: 15,
                name: "昌平区"
            }, {
                id: 16,
                name: "大兴区"
            }, {
                id: 17,
                name: "怀柔区"
            }, {
                id: 18,
                name: "平谷区"
            }, {
                id: 19,
                name: "密云区"
            }],
            i = [{
                id: 23,
                name: "黄浦区"
            }, {
                id: 24,
                name: "卢湾区"
            }, {
                id: 25,
                name: "徐汇区"
            }, {
                id: 26,
                name: "长宁区"
            }, {
                id: 27,
                name: "静安区"
            }, {
                id: 28,
                name: "普陀区"
            }, {
                id: 29,
                name: "闸北区"
            }, {
                id: 30,
                name: "虹口区"
            }, {
                id: 31,
                name: "杨浦区"
            }, {
                id: 32,
                name: "闵行区"
            }, {
                id: 33,
                name: "宝山区"
            }, {
                id: 34,
                name: "嘉定区"
            }, {
                id: 35,
                name: "浦东新区"
            }, {
                id: 36,
                name: "金山区"
            }, {
                id: 37,
                name: "松江区"
            }, {
                id: 38,
                name: "青浦区"
            }, {
                id: 39,
                name: "南汇区"
            }, {
                id: 40,
                name: "奉贤区"
            }, {
                id: 41,
                name: "崇明县"
            }],
            e = [{
                id: 425,
                name: "东山区"
            }, {
                id: 426,
                name: "荔湾区"
            }, {
                id: 427,
                name: "越秀区"
            }, {
                id: 428,
                name: "海珠区"
            }, {
                id: 429,
                name: "天河区"
            }, {
                id: 430,
                name: "芳村区"
            }, {
                id: 431,
                name: "白云区"
            }, {
                id: 432,
                name: "黄埔区"
            }, {
                id: 433,
                name: "番禺区"
            }, {
                id: 434,
                name: "花都区"
            }, {
                id: 435,
                name: "增城区"
            }, {
                id: 436,
                name: "从化区"
            }],
            n = [{
                id: 525,
                name: "罗湖区"
            }, {
                id: 526,
                name: "福田区"
            }, {
                id: 527,
                name: "南山区"
            }, {
                id: 528,
                name: "宝安区"
            }, {
                id: 529,
                name: "龙岗区"
            }, {
                id: 530,
                name: "盐田区"
            }];
        return [{
            id: 2,
            name: "北京市",
            districts: t,
            provinceName: "北京",
            provinceId: 1,
            lng: 116.403874,
            lat: 39.914889
        }, {
            id: 22,
            name: "上海市",
            districts: i,
            provinceName: "上海",
            provinceId: 21,
            lng: 121.487899,
            lat: 31.249162
        }, {
            id: 424,
            name: "广州市",
            districts: e,
            provinceName: "广东",
            provinceId: 423,
            lng: 113.30765,
            lat: 23.120049
        }, {
            id: 524,
            name: "深圳市",
            districts: n,
            provinceName: "广东",
            provinceId: 423,
            lng: 114.025974,
            lat: 22.546054
        }]
    }), /*!File[common/Promotion.js]*/
    define("common/Promotion", ["lib/base", "common/Dialog"], function(t, i) {
        var e = function(i) {
            this.shoppingCart = i, this.promotion = SYS_CONF.promotion, this.checkMethodList = "exclusive,productExclusion,countLimit,brandExclusion,number,productAppGuide".split(","), this.defaultMinPrice = parseInt(t.safeGetProp(SYS_CONF, "promotion.shoppingCart.minPrice") || 30), this.defaultPropText = this.propText = "购物满￥100，免配送费"
        };
        return e.prototype = {
            setShopData: function(t) {
                this.propText = this.defaultPropText, (424 == t.cityid || 524 == t.cityid || 22 == t.cityid) && (this.propText = "闪电送，免运费")
            },
            _getExclusive: function() {
                var i = t.safeGetProp(SYS_CONF, "promotion.exclusive");
                if (i) {
                    var e, n, o = {};
                    for (e in i) n = parseInt(i[e]), o[e] = {
                        checkNumber: n
                    };
                    return o
                }
                return !1
            },
            getPropText: function() {
                return this.propText
            },
            checkShoppingCartError: function(t) {
                return this._doCheck(this.checkMethodList, t)
            },
            getIsStart: function(t) {
                return this.promotion.timestart && this.promotion.timestart[t] ? this.promotion.timestart[t].isStart : !1
            },
            getStartConf: function(t) {
                return this.promotion.timestart && this.promotion.timestart[t] ? this.promotion.timestart[t] : null
            },
            getMinPrice: function() {
                var t, i, e = this.defaultMinPrice,
                    n = this.shoppingCart.getShoppingMap(!0),
                    o = SYS_CONF.promotion.minPrice;
                if (i = this._getExclusive())
                    for (var r in i)
                        if (n[r]) return 0;
                if (o)
                    for (var a in n) o.hasOwnProperty(a) && (t = parseInt(o[a]), e = Math.min(e, t));
                return e
            },
            _doCheck: function(t, i) {
                for (var e, n = this.shoppingCart.getShoppingMap(!0), o = 0, r = t.length; r > o; o++) {
                    e = t[o];
                    var a = this["_check_" + e](i, n);
                    if (a) return a
                }
                return !1
            },
            _check_exclusive: function(t, i) {
                var e, n, o, r = !1;
                for (e in i) {
                    r = !0;
                    break
                }
                if (n = this._getExclusive())
                    for (o in n) {
                        if (i[o]) return t.id == o ? t.name + "只能购买一个哦" : i[o].name + "\n无法同其他商品同时购买哦";
                        if (t.id == o && r) return t.name + "只能单独下单哦"
                    }
            },
            _check_productExclusion: function(i, e) {
                var n = t.safeGetProp(this.promotion, "exclusion.id");
                if ($.isArray(n))
                    for (var o = 0, r = n.length; r > o; o++) {
                        for (var a, s = n[o].split(","), d = 0, c = s.length; c > d && (s[d] == i.id || !(a = e[s[d]])); d++);
                        if (a && $.isInArray(s, i.id)) return a.name + " 和\n" + i.name + "\n不能同时购买哦~"
                    }
            },
            _check_brandExclusion: function(i, e) {
                var n = t.safeGetProp(this.promotion, "exclusion.brand");
                if ($.isArray(n)) {
                    var o = {};
                    for (var r in e) {
                        var a = e[r];
                        o[a.brand_id] = a.brand_name
                    }
                    for (var s = 0, d = n.length; d > s; s++) {
                        var c = n[s].split(",");
                        if (!$.isInArray(c, i.brand_id)) return !1;
                        for (var u = 0, l = c.length; l > u; u++) {
                            var p = c[u];
                            if (p != i.brand_id && o[p]) return i.brand_name + " 和 " + o[p] + "\n需要在两个订单中购买哦~"
                        }
                    }
                }
            },
            _check_countLimit: function(t, i) {
                var e, n, o = this.promotion.countLimit,
                    r = t.id;
                if (o) return (e = parseInt(o[r])) && (n = i[r] ? i[r].shoppingCount : 0, n >= e) ? t.name + "\n最多只能购买" + e + "个哦~" : void 0
            },
            _check_number: function(t) {
                var i;
                if (!(i = this._getExclusive()) || !i[t.id] || i[t.id].checkNumber) return parseInt(t.number) < 1 && !parseInt(t.hot_degree) ? t.name + " 补货中..\n过段时间再来看看吧~" : void 0
            },
            _check_productAppGuide: function(t) {
                var e;
                if ($.isMobile && !$.isApp && (e = Bee.getMod("common/UserStatus", !0)) && 2581 == t.id) {
                    var n = "longxiaAppGuide";
                    if (!e.isFirst(n)) return;
                    i.show({
                        content: "App购买龙虾可以享受五折优惠哦~",
                        buttons: [{
                            key: "continue",
                            autoClose: !0,
                            text: "继续购物"
                        }, {
                            key: "goto",
                            text: "下载App",
                            autoClose: !0,
                            onClick: function() {
                                window.location.href = "http://m.beequick.cn/show/appDownload?tn=" + n
                            }
                        }]
                    })
                }
            }
        }, e
    }), /*!File[common/ShoppingCart.js]*/
    define("common/ShoppingCart", ["lib/EventObj", "lib/Storage", "common/Promotion"], function(t, i, e) {
        var n = function(t) {
                return parseFloat(Math.round(100 * t) / 100)
            },
            o = function(t, i) {
                if ($.isObject(t) && $.isObject(i))
                    for (var e in i) "shoppingCount" != e && "disabled" != e && (t[e] = i[e])
            },
            r = window.SYS_CONF.promotion.shoppingCart || {},
            a = $.inherits(t, {
                constructor: function(n) {
                    t.call(this), n = $.extend({
                        minPrice: !1
                    }, n), this.storage = new i("shoppingcart"), this.shoppingList = this.storage.get("shoppingList") || {}, this.promotion = new e(this), this.minPrice = this.promotion.getMinPrice(), this.productMap = {}, this.cartInfoObj = {}, this._calcCartInfo();
                    var o = Bee.getMod("common/Dialog", !0);
                    this.alert = o ? function(t) {
                        o.alert(t.replace(/\n/g, "<br/>"))
                    } : $.noop, this._lastOpInfo = {
                        opSuccess: !0,
                        opErrorMsg: ""
                    }
                },
                addProduct: function(t) {
                    var i, e;
                    if ($.isString(t) || $.isNumber(t)) {
                        if (i = t, null == this.productMap && !this.shoppingList[t]) return this._error("need setData before"), void 0;
                        if (!this.shoppingList[t] && !this.productMap[i]) return this._error("id " + i + " 不存在"), void 0
                    }
                    $.isObject(t) && (i = t.id, this.productMap[i] || (this.productMap[i] = t), t != e && (o(this.productMap[i], t), o(this.shoppingList[i], t))), e = this.productMap[i] || this.shoppingList[i];
                    var n = this.promotion.checkShoppingCartError(e);
                    return n ? (this._error(n), !1) : (this.shoppingList[i] || (this.shoppingList[i] = e, e.shoppingCount = 0), this.shoppingList[i].shoppingCount++, this._fireChange("add"), e)
                },
                deleteProduct: function(t, i) {
                    var e;
                    if ($.isString(t) || $.isNumber(t)) {
                        if (e = t, null == this.productMap && !this.shoppingList[e]) return this._error("need setData before"), !1
                    } else e = t.id;
                    return this.shoppingList[e] || this.productMap[e] ? (i ? this.shoppingList[e].shoppingCount = 0 : this.shoppingList[e].shoppingCount--, this.shoppingList[e].shoppingCount < 1 && delete this.shoppingList[e], this._fireChange("del"), !0) : !1
                },
                addProductDataList: function(t) {
                    var i = this,
                        e = function(t) {
                            $.each(t, function(t, e) {
                                e.price = parseFloat(e.price) || 0, i.productMap[e.id] = e
                            })
                        };
                    $.isArray(t) ? e(t) : $.each(t, function(t, i) {
                        parseInt(t) <= 0 || e(i)
                    })
                },
                setProductList: function(t) {
                    var i = this,
                        e = {},
                        n = [];
                    return this.productMap = {}, this.promotion.propText = "购物满￥100，免配送费", $.each(t, function(t, e) {
                        parseInt(t) <= 0 || $.each(e, function(t, e) {
                            524 == e.cityid && (i.promotion.propText = "闪电送，免运费"), e.price = parseFloat(e.price) || 0, i.productMap[e.id] = e
                        })
                    }), $.each(this.shoppingList, function(t, o) {
                        var r = null;
                        if (r = i.productMap[t]) {
                            if (!parseInt(r.number) && !parseInt(r.hot_degree)) return n.push(r), void 0;
                            e[t] = r, r.shoppingCount = o.shoppingCount
                        } else n.push(o)
                    }), this.shoppingList = e, this._fireChange("data"), n.length && this.fire("unableAutoRemoved", {
                        unableList: n
                    }), this
                },
                setDisableProducts: function(t) {
                    $.isString(t) && (t = t.split(","));
                    for (var i = 0, e = t.length; e > i; i++) {
                        var n = t[i];
                        this.shoppingList[n] && (this.shoppingList[n].disabled = !0)
                    }
                    this._fireChange("data")
                },
                setShopData: function(t, i) {
                    if (this.promotion.setShopData(t), i) {
                        var e, n, o, r, a = {};
                        for (this.productMap = {}, o = 0, r = i.length; r > o; o++) n = i[o], e = n.id, this.shoppingList[e] && (a[e] = n, this.productMap[e] = n, n.shoppingCount = this.shoppingList[e].shoppingCount, parseInt(n.number) < 1 && (n.disabled = !0), delete this.shoppingList[e]);
                        for (e in this.shoppingList) n = this.shoppingList[e], n.disabled = !0, a[e] = n;
                        this.shoppingList = a
                    }
                    this._fireChange("data")
                },
                removeDisabledProduct: function() {
                    var t = this;
                    $.each(this.shoppingList, function(i, e) {
                        e.disabled && (delete e.disabled, delete t.shoppingList[i], t.productMap && t.productMap[i] && t.productMap[i].disabled && delete t.productMap[i].disabled)
                    }), this._fireChange("data")
                },
                getShoppingList: function(t) {
                    var i = [];
                    for (var e in this.shoppingList) t && this.shoppingList[e] || i.push(this.shoppingList[e]);
                    return i
                },
                getShoppingMap: function(t) {
                    if (t) {
                        var i = {};
                        for (var e in this.shoppingList) this.shoppingList[e].disabled || (i[e] = this.shoppingList[e]);
                        return i
                    }
                    return this.shoppingList
                },
                getProductById: function(t) {
                    return this.shoppingList[t] || null
                },
                getProductObjById: function(t) {
                    return this.productMap[t]
                },
                getGroupCountBy: function(t) {
                    var i = {};
                    return $.each(this.shoppingList, function(e, n) {
                        if (!n.disabled) {
                            var o = n[t];
                            i[o] = i[o] || 0, i[o] += n.shoppingCount
                        }
                    }), i
                },
                getIdformat: function() {
                    var t = [];
                    for (var i in this.shoppingList) t.push(i + ":" + this.shoppingList[i].shoppingCount);
                    return t.join(",")
                },
                getCount: function() {
                    return this.cartInfoObj.count
                },
                getTotalPrice: function() {
                    return this.cartInfoObj.price
                },
                check: function() {
                    if ($.isNumber(this.minPrice)) {
                        var t = this.getTotalPrice();
                        return t >= this.minPrice ? !1 : "差￥" + (this.minPrice - t) + "起送"
                    }
                    return !1
                },
                reset: function() {
                    return this.shoppingList = {}, this._fireChange("reset"), this
                },
                delegateOperate: function(t, i) {
                    var e = this;
                    return $(t).delegate(".shopping-action", $.tapClick, function(t) {
                        t.stopPropagation();
                        var n = $(this).data("action");
                        if (n) {
                            var o = n.split(":"),
                                r = o[0],
                                a = o[1];
                            "+" == a ? (addProduct = e.addProduct(r)) && i && i(addProduct) : "-" == a && e.deleteProduct(r)
                        }
                    }), $(t).delegate(".shopping-item", "swipeLeft", function() {
                        var t = $(this),
                            i = t.data("id"),
                            n = t.data("anime");
                        if (i) {
                            var o = function() {
                                e.deleteProduct(i, !0)
                            };
                            n ? t.animate({
                                translateX: "-100%",
                                scale: ".3"
                            }, 200, "ease-out", o) : o()
                        }
                    }), this
                },
                bindBarUi: function(t, i) {
                    var e = this;
                    return i = i || "选好了", this.on("shoppingListChange", function() {
                        e._updateUi(t, i)
                    }), this._updateUi(t, i), this
                },
                getCartInfo: function() {
                    return this.cartInfoObj
                },
                _calcCartInfo: function() {
                    var t = 0,
                        i = 0,
                        e = !1,
                        o = "",
                        r = (this.shoppingList, this.minPrice);
                    $.each(this.shoppingList, function(e, n) {
                        n.disabled || (t += n.shoppingCount || 0, i += (parseFloat(n.price) || 0) * n.shoppingCount)
                    }), i = n(i), e = i >= r, o = e ? "选好了" : 0 == i ? "满￥" + this.minPrice + "起送" : "差￥" + n(this.minPrice - i) + "起送";
                    var a = this;
                    this.cartInfoObj = {
                        isOk: e,
                        payType: 2,
                        price: i,
                        count: t,
                        minPrice: r,
                        priceText: "共￥" + i,
                        btnText: o,
                        propText: a.promotion.getPropText(),
                        emptyText: "购物车是空的",
                        shoppingList: a.getShoppingList()
                    }
                },
                _updateUi: function(t, i) {
                    var e = this.getCartInfo(),
                        n = e.count,
                        o = e.isOk;
                    t[n ? "removeClass" : "addClass"]("shopping-empty"), t.find(".shopping-count").html(n).css("visibility", n ? "visible" : "hidden").addClass("erect"), setTimeout(function() {
                        t.find(".shopping-count").removeClass("erect")
                    }, 150), t.find(".shopping-total").html(n ? e.priceText : e.emptyText), t.find(".shopping-words").html(e.propText), t.find(".shopping-submit-text").html(o ? i : e.btnText), t.find(".shopping-submit").attr("disabled", !o)[o ? "addClass" : "removeClass"]("shopping-enable")
                },
                _fireChange: function(t) {
                    this.minPrice = this.promotion.getMinPrice(), this._calcCartInfo(), this.fire("shoppingListChange", $.extend({
                        reason: t
                    }, this.cartInfoObj)), this.storage.set("shoppingList", this.shoppingList)
                },
                _error: function(t) {
                    this._lastOpInfo = {
                        opSuccess: !1,
                        opErrorMsg: t
                    }, this.alert(t)
                },
                getLastError: function() {
                    var t = this._lastOpInfo;
                    return this._lastOpInfo = {
                        opSuccess: !0,
                        opErrorMsg: ""
                    }, t
                }
            });
        return new a({
            minPrice: parseInt(r.minPrice || 50)
        })
    }), /*!File[common/BaseAddrManager.js]*/
    define("common/BaseAddrManager", ["lib/base", "lib/EventObj", "common/AreaInfo", "lib/Storage"], function(t, i, e) {
        var n = function(t) {
            this.id = t.id || !1, this._setProp(t)
        };
        return n.prototype = {
            _setProp: function(t) {
                this.phone = t.telphone || t.phone || this.phone || "", this.name = t.accept_name || t.name || this.name || "", this.address = t.address || this.address || "", this.cityId = t.cityId || t.city_id || this.cityId || "", this.districtId = t.districtId || t.district_id || this.districtId || "", this.provinceId = t.provinceId || t.province_id || this.provinceId || "", this.longitude = t.lng || !1, this.latitude = t.lat || !1
            },
            getId: function() {
                return this.id
            },
            getName: function() {
                return this.name
            },
            getPhone: function() {
                return this.phone
            },
            getCityName: function() {
                return BaseAddrManager.getCityNameById(this.cityId)
            },
            getDistrictName: function() {
                return BaseAddrManager.getDistrictNameById(this.cityId, this.districtId)
            },
            getFullAddress: function() {
                return this.getCityName() + this.getDistrictName() + this.address
            },
            update: function(t) {
                this._setProp(t)
            },
            toObject: function() {
                var t = {};
                for (var i in this) this.hasOwnProperty(i) && (t[i] = this[i]);
                return t
            }
        }, BaseAddrManager = $.inherits(i, {
            constructor: function() {
                i.call(this), this.addrObjs = {}, this._likelyAddrIdMap = {}, this._inited = !1, this.lastAddrId = !1, window.SYS_CONF && window.SYS_CONF.addrList && this._init(window.SYS_CONF.addrList)
            },
            init: function(i) {
                if (this._inited) return i && i(), void 0;
                var e = this;
                t.ajaxPost("/submit/getAddrList", {}, function(t) {
                    0 == t.errno ? (e._init(t.data, !0), i && i(), e.fire("addrListAsyncInitd")) : e.fire("addrError", {
                        errmsg: t.errmsg
                    })
                })
            },
            _init: function(t) {
                var i = this;
                $.each(t, function(t, e) {
                    i.addrObjs[e.id] = new n(e)
                }), this._inited = !0, this.fire("addrListChange")
            },
            isInited: function() {
                return this._inited
            },
            addNewAddr: function(i, e) {
                var o = this;
                t.ajaxPost("/submit/updateAddr", i, function(t) {
                    if (0 == t.errno) {
                        var r = t.data.id;
                        i.id = r;
                        var a = new n(i);
                        o.addrObjs[r] = a, o.fire("addrListChange"), e && e(a)
                    } else o.fire("addrError", {
                        errno: t.errorno,
                        errmsg: "添加失败:" + t.errmsg
                    })
                })
            },
            updateAddr: function(i, e, n) {
                var o = this,
                    r = o.addrObjs[i];
                if (!r) return o.fire("addrError", {
                    errmsg: "更新失败:id不存在"
                }), void 0;
                var a = $.extend(r.toObject(), e);
                t.ajaxPost("/submit/updateAddr", a, function(t) {
                    0 == t.errno ? (r.update(e), o.fire("addrListChange"), n && n(r)) : o.fire("addrError", {
                        errno: t.errno,
                        errmsg: "更新失败:" + t.errmsg
                    })
                })
            },
            delAddr: function(i, e) {
                var n = this,
                    o = n.addrObjs[i];
                o || this.fire("addrError", {
                    errmsg: "删除失败:id不存在"
                }), t.ajaxPost("/submit/deleteAddr", {
                    id: i
                }, function(t) {
                    0 == t.errno ? (delete n.addrObjs[i], n.fire("addrListChange"), e && e(o)) : (e && e(!1), this.fire("addrError", {
                        errno: reslt.errno,
                        errmsg: "删除失败:" + t.errmsg
                    }))
                })
            },
            getAddrByConfig: function(t) {
                var i = 0;
                for (var e in this.addrObjs) {
                    var n = this.addrObjs[e];
                    n.cityId == t.cityId && n.districtId == t.districtId && $.trim(n.address) == $.trim(t.address) && i < parseInt(e) && (i = parseInt(e))
                }
                return 0 == i ? !1 : this.addrObjs[i]
            },
            setLastAddrId: function(t) {
                if (this.addrObjs[t]) {
                    var i = this;
                    this.lastAddrId = t, this.fire("lastAddrChange", {
                        addrId: t,
                        addrObj: i.addrObjs[t]
                    })
                }
            },
            getLastAddr: function() {
                var t = null;
                return this.lastAddrId && (t = this.addrObjs[this.lastAddrId]) ? t : !1
            },
            getAddrById: function(t) {
                return this.addrObjs[t] || !1
            },
            getAddrList: function() {
                var t = [];
                for (var i in this.addrObjs) t.push(this.addrObjs[i]);
                return t
            },
            getAddrCount: function() {
                var t = 0;
                for (var i in this.addrObjs) t++;
                return t
            }
        }), BaseAddrManager.getCityNameById = function(t) {
            var i = "";
            return $.each(e, function(e, n) {
                return n.id == t ? (i = n.name, !1) : void 0
            }), i
        }, BaseAddrManager.getCityIdByName = function(t) {
            var i = "";
            return $.each(e, function(e, n) {
                return n.name == t ? (i = n.id, !1) : void 0
            }), i
        }, BaseAddrManager.getDistrictNameById = function(t, i) {
            for (var n = 0, o = e.length; o > n; n++) {
                var r = e[n];
                if (r.id == t)
                    for (var a = 0, s = r.districts.length; s > a; a++) {
                        var d = r.districts[a];
                        if (d.id == i) return d.name
                    }
            }
            return ""
        }, BaseAddrManager.getDistrictIdByName = function(t, i) {
            for (var n = 0, o = e.length; o > n; n++) {
                var r = e[n];
                if (r.name == t)
                    for (var a = 0, s = r.districts.length; s > a; a++) {
                        var d = r.districts[a];
                        if (d.name == i) return d.id
                    }
            }
            return ""
        }, BaseAddrManager.AddrObj = n, BaseAddrManager
    }), /*!File[common/AddrManager.js]*/
    define("common/AddrManager", ["lib/base", "lib/GeoLocation", "common/BaseAddrManager", "common/LastOperation"], function(t, i, e, n) {
        var o = !1,
            r = $.inherits(e, {
                constructor: function() {
                    e.call(this), this.shopData = null, this.tempAddr = !1, this._gpsAddrObj = !1, this._loadingAddrObj = !1, this._gpsErr = !1, this._validAddr = !1;
                    var t = this;
                    this.on("lastAddrChange", function(i) {
                        t.loadShopCategory(i.addrObj)
                    }), this.on("addrListAsyncInitd", function() {
                        this._loadingAddrObj && t._fireUserAddrDecided(this._loadingAddrObj)
                    })
                },
                setTempAddr: function(t) {
                    this.tempAddr = new e.AddrObj(t), this.loadShopCategory(this.tempAddr)
                },
                getTempAddr: function() {
                    return this.tempAddr
                },
                initGPS: function(e) {
                    var r = this;
                    this.fire("progressing", {
                        status: "gps",
                        text: "定位中"
                    }), i.getGPSPosition(function(i) {
                        if (i.success) {
                            var a = {
                                type: "gps",
                                longitude: i.longitude,
                                latitude: i.latitude
                            };
                            r._gpsAddrObj = {}, $.extend(!0, r._gpsAddrObj, a), r.fire("gpsSuccess", a), (e || !n.isValid()) && r.loadShopCategory(a), r._parseGpsAddr(a)
                        } else r._gpsErr = !0, r.fire("gpsError", {
                            error: i.error
                        });
                        if (SYS_CONF.sns.userId && !o) {
                            o = !0;
                            var s = {
                                ASID: t.getAsId(),
                                LAT: i.latitude || -1,
                                LNG: i.longitude || -1,
                                OPENID: SYS_CONF.sns.userId,
                                GEOLOGID: $.getCookie("geologid")
                            };
                            t.imgRequest("http://as.beequick.cn/report?" + $.param(s))
                        }
                    })
                },
                _parseGpsAddr: function(i) {
                    this.fire("progressing", {
                        status: "parsing",
                        text: "解析中"
                    });
                    var e = this;
                    t.getAddressInfoByPoint(i.latitude, i.longitude, function(t) {
                        t ? (e._gpsErr = !1, e.fire("gpsParsed", t)) : (e._gpsErr = !0, e.fire("gpsParsedError"))
                    })
                },
                loadShopCategory: function(i) {
                    t.getGeoLogid(), this._loadingAddrObj = i;
                    var e = this;
                    e._gpsErr = !1, e.fire("progressing", {
                        status: "loading",
                        text: "加载中"
                    }), t.ajaxGet("/data/getCategoryListByLbs", "gps" == i.type ? {
                        lat: i.latitude,
                        lng: i.longitude,
                        childmode: 1
                    } : {
                        lat: i.latitude || i.lat,
                        lng: i.longitude || i.lng,
                        address: i.getFullAddress(),
                        childmode: 1
                    }, function(t) {
                        if (0 == t.errno) {
                            var n = t.data;
                            e.shopData = n, e._likelyAddrIdMap = {}, e._validAddr = !0, e.fire("addrChange", {
                                data: t.data,
                                userAddr: i
                            }), e._fireUserAddrDecided(i)
                        } else e._validAddr = !1, e.fire("addrChangeError", t)
                    })
                },
                getShopData: function() {
                    return this.shopData
                },
                getGPSAddr: function() {
                    return this._gpsAddrObj
                },
                isGpsAddr: function() {
                    return this._loadingAddrObj && "gps" == this._loadingAddrObj.type
                },
                isGPSErr: function() {
                    return this._gpsErr
                },
                isValidAddr: function() {
                    return this._validAddr
                },
                _addrListChange: function() {
                    this.storage.set("addrObjs", this.addrObjs), this.fire("addrListChange")
                },
                _fireUserAddrDecided: function(i) {
                    if (0 == this.getAddrCount()) return this.lastAddrId = !1, this.fire("userAddrDecided"), void 0;
                    var e, n = {},
                        o = this;
                    return (e = i.id) ? (this.lastAddrId = this.addrObjs[e] ? e : !1, this.fire("userAddrDecided"), void 0) : ("gps" == i.type ? n.location = i.longitude + "," + i.latitude : n.address = i.getFullAddress(), t.ajaxPost("/submit/getMostLikelyAddr", n, function(t) {
                        if (o.lastAddrId = !1, 0 == t.errno) {
                            var i = t.data.id,
                                e = o.getAddrById(i);
                            e && (o.lastAddrId = i)
                        }
                        o.fire("userAddrDecided")
                    }), void 0)
                }
            });
        return r
    }), /*!File[common/LastOperation.js]*/
    define("common/LastOperation", ["lib/base", "lib/EventObj", "lib/Storage"], function(t, i, e) {
        var n = $.inherits(i, {
            constructor: function() {
                i.call(this), this.storage = new e("lastoperation")
            },
            getGPSInfo: function() {
                return this.storage.get("gpsinfo")
            },
            saveGPSInfo: function(t) {
                if (t) {
                    var i = t.longitude + "," + t.latitude,
                        e = Math.round((new Date).getTime() / 1e3);
                    this.storage.set("gpsinfo", {
                        location: i,
                        location_time: e
                    })
                }
            },
            clearGPSInfo: function() {
                this.storage.set("gpsinfo", "{}")
            },
            getAddr: function() {
                return this.storage.get("addr")
            },
            saveAddr: function(t) {
                if (t) {
                    var i = {};
                    $.extend(i, t), i.lng = i.lng || i.longitude, i.lat = i.lat || i.latitude, this.storage.set("addr", i)
                }
            },
            clearAddr: function() {
                this.storage.set("addr", "{}")
            },
            reset: function() {
                this.clearAddr(), this.clearGPSInfo()
            },
            isValid: function() {
                var t = this.getAddr();
                return t = $.isEmptyObject(t) ? !1 : t, t ? !0 : !1
            }
        });
        return new n
    }), /*!File[common/PagePathMgr.js]*/
    define("common/PagePathMgr", ["lib/EventObj"], function(t) {
        var i = $.inherits(t, {
            constructor: function() {
                t.call(this), this.clear()
            },
            fromTo: function(t) {
                return t ? (this.clear(), this._fromTo = t, void 0) : this._fromTo
            },
            addPath: function() {
                if (!(arguments.length <= 0))
                    for (var t = 0, i = arguments.length; i > t; t++) {
                        var e = arguments[t];
                        e && this._path.push(e)
                    }
            },
            clear: function() {
                this._fromTo = "", this._path = []
            },
            inPath: function(t) {
                for (var i = this.getPath(), e = !1, n = 0, o = i.length; o > n; n++)
                    if (t == i[n]) {
                        e = !0;
                        break
                    }
                return e
            },
            getPath: function() {
                var t = [];
                return t.push(this._fromTo), t = t.concat(this._path), t.push(this._fromTo), t
            }
        });
        return i
    }), /*!File[common/Pay.js]*/
    define("common/Pay", ["lib/base", "lib/EventObj"], function(t, i) {
        var e = $.inherits(i, {
                constructor: function(t, e) {
                    i.call(this), this.key = t, this.name = e.name, this.weight = e.weight, this.onPayFn = e.onPayFn, this.checkSupport = e.checkSupport, this.typeid = e.typeid
                },
                pay: function(t, i, e) {
                    this.onSuccess = i, this.onError = e, this.onPayFn(t)
                },
                getPayType: function() {
                    return "delivery" == this.key ? o.PAYTYPE_DELIVERY : o.PAYTYPE_ONLINE
                },
                _success: function() {
                    this.onSuccess && this.onSuccess()
                },
                _error: function(t) {
                    this.onError && this.onError(t)
                }
            }),
            n = {},
            o = {
                PAYTYPE_DELIVERY: 0,
                PAYTYPE_ONLINE: 1,
                create: function(t, i) {
                    n[t] = new e(t, i)
                },
                get: function(t) {
                    return n[t]
                },
                getSupportPays: function(t) {
                    var i = [];
                    for (var e in n) {
                        var o = n[e];
                        o.checkSupport() && ("number" == typeof t ? t === o.getPayType() && i.push(o) : i.push(o))
                    }
                    return i.sort(function(t, i) {
                        return i.weight - t.weight
                    }), i
                }
            };
        return o.create("delivery", {
            name: "货到付款",
            weight: 100,
            typeid: 0,
            checkSupport: function() {
                return "cmbc" != SYS_CONF.tn
            },
            onPayFn: function() {
                this._success()
            }
        }), o.create("cmbc", {
            name: "民生银行支付",
            weight: 200,
            checkSupport: function() {
                return "cmbc" == SYS_CONF.tn
            },
            onPayFn: function(t) {
                var i = '<form id="mod-pay-cmbcform" action="http://180.150.179.29/cmbc/api/thirdpart" method=\'POST\'>\n<input type="hidden" name="orderMsg" value="#{orderDetail}"/>\n<input type="hidden" name="successPage" value="#{host}/show/payResult" />\n<input type="hidden" name="uid" value="#{uid}" />\n<input type="hidden" name="sign" value="#{sign}" />\n</form>',
                    e = "#{name},#{price},#{shopCount},#{total}",
                    n = [t.order_no, t.create_time, t.order_amount, "beequick.cn", {
                        toString: function() {
                            var i = [];
                            return $.each(t.order_goods, function(t, n) {
                                i.push($.formatString(e, {
                                    name: n.name,
                                    price: parseFloat(n.real_price),
                                    shopCount: n.goods_nums,
                                    total: parseFloat(n.real_price) * n.goods_nums
                                }))
                            }), i.join(";")
                        }
                    }],
                    o = $("#mod-pay-cmbcform");
                o.length || ($($.formatString(i, {
                    orderDetail: n.join("|"),
                    uid: $.getParam("uid") || "",
                    sign: $.getParam("sign") || "",
                    host: SYS_CONF.domain.current
                })).appendTo(document.body), o = $("#mod-pay-cmbcform")), o[0].submit()
            }
        }), o.create("weixin", {
            name: "微信支付",
            weight: 150,
            typeid: 1,
            checkSupport: function() {
                return $.isWeixin && SYS_CONF.domain.current.indexOf("weixin") > 0
            },
            onPayFn: function(i) {
                var e = this,
                    n = function() {
                        t.ajaxPost("/submit/weixinPayinfo", {
                            orderId: i.id || i.order_id,
                            orderNo: i.order_no
                        }, function(t) {
                            if (0 == t.errno) {
                                var i = t.data;
                                WeixinJSBridge.invoke("getBrandWCPayRequest", i, function(t) {
                                    var i = t.err_msg;
                                    "get_brand_wcpay_request:ok" == i ? e._success() : "get_brand_wcpay_request:cancel" == i ? e._error("支付被取消") : e._error(i)
                                })
                            } else e._error("创建支付失败：" + t.errmsg)
                        })
                    };
                window.WeixinJSBridge ? n() : $(document).on("WeixinJSBridgeReady", n)
            }
        }), o.create("weibo", {
            name: "支付宝支付",
            weight: 150,
            typeid: 2,
            checkSupport: function() {
                if (-1 == SYS_CONF.domain.current.indexOf("weibo")) return !1;
                var t = navigator.userAgent.match(/__weibo__([\d\.]+)/im);
                if (t) {
                    var i = parseFloat(t[1]);
                    if (i >= 4.3) return !0
                }
                return !1
            },
            onPayFn: function(i) {
                var e = this;
                t.ajaxPost("/submit/weiboPayinfo", {
                    orderId: i.id || i.order_id,
                    orderNo: i.order_no,
                    showUrl: SYS_CONF.domain.current + "/show/orderlist"
                }, function(t) {
                    if (0 == t.errno) {
                        var i = t.data;
                        window.location.href = "http://weibo.cn/weibobrowser/payment/order?" + $.param(i)
                    } else e._error("创建支付失败：" + t.errmsg)
                })
            }
        }), o
    }), /*!File[activity/bridge.js]*/
    define("activity/bridge", ["lib/base"], function(t) {
        var i, e = {
                setInitHandler: function(t) {
                    i = t
                },
                activityLoaded: function(t, e) {
                    this.curActivityId = t, i && i(t, e)
                },
                _clickLog: function(i) {
                    var e = this.curActivityId;
                    t.clickLog("activity_" + i + "_click", {
                        actid: e
                    })
                },
                share: $.noop,
                addProduct: $.noop,
                isVerify: $.noop,
                verify: $.noop,
                reload: $.noop,
                getEnv: $.noop,
                getLocation: $.noop,
                goBack: $.noop,
                goTo: $.noop,
                pay: $.noop
            },
            n = Bee.getMod("activity/bridge_" + ($.isApp ? "app" : $.isMobile ? "mobile" : "www"));
        return $.extend(e, n)
    }), /*!File[activity/bridge_mobile.js]*/
    define("activity/bridge_mobile", ["common/Dialog", "common/weixinUtils", "common/User", "phone/index/main", "phone/common/PageView"], function(t, i, e, n, o) {
        return {
            share: function() {
                this._clickLog("share"), $.isWeixin ? i.shareTip(!0) : $.isWeibo ? i.shareTip(!0) : $.isMobile && t.alert("移动端暂时不支持分享")
            },
            addProduct: function(t, i) {
                this._clickLog("cart");
                var e = n.getShoppingCart().addProduct(t);
                e && i && i()
            },
            isVerify: function() {
                return e.getInstance().isLogin()
            },
            verify: function(i) {
                this._clickLog("verify");
                var e = this,
                    n = function() {
                        o.changeView("verify", [function() {
                            o.changeView("act", [e.curActivityId])
                        }, "act|" + e.curActivityId])
                    };
                i ? t.alert(i, n) : n()
            },
            reload: function() {
                var t = o.getCurViewObj();
                t && t.load && t.load()
            }
        }
    }), /*!File[phone/common/PageView.js]*/
    define("phone/common/PageView", ["lib/Loading", "phone/common/Overlay", "phone/common/baseCtxPrototype"], function(t, i, e) {
        var n = function(t) {
            this.key = t, this.viewObj = null, this.containerNode = $("#mod-" + this.key), this._iScrollInstances = {}, this.firstEnter = !0, this._hidingTask = []
        };
        n.prototype = {
            g: function(t) {
                return $("#" + this.key + "-" + t)
            },
            isCurrentView: function() {
                return this.key == a
            },
            isFirstEnter: function() {
                return this.firstEnter
            },
            changeView: function(t) {
                for (var i = [], e = 1, n = arguments.length; n > e; e++) i.push(arguments[e]);
                return d(t, i)
            },
            viewBack: function() {
                if (this.viewObj && this.viewObj.back) {
                    var t, i = this.viewObj.back();
                    t = $.isString(i) ? l(i) : i, d(t.pageView || "index", t.args || [])
                }
            },
            showOverlay: function(t) {
                for (var e = [], n = 1, r = arguments.length; r > n; n++) e.push(arguments[n]);
                i.showOverlay(t, this, e, function() {
                    o && o()
                })
            },
            hideOverlay: function() {
                i.hideOverlay(o)
            },
            setTitle: function(t) {
                this.find(".header-content").html(t)
            },
            whenShowingDo: function(t) {
                this.isCurrentView() ? t.call(this) : this._hidingTask.push(t)
            },
            _executeHidingTask: function() {
                var t, i;
                if (i = this._hidingTask.length) {
                    for (t = 0; i > t; t++) this._hidingTask[t].call(this);
                    this._hidingTask = []
                }
            },
            blurInput: function() {
                this.find("input,textarea").each(function(t, i) {
                    i.blur()
                })
            },
            init: function(t) {
                this.viewObj = t, this._initIscroll();
                var i = this;
                this.delegate(".tap-action", $.tapClick, function(t) {
                    var e = $(this).attr("disabled");
                    if ("" !== e && "true" !== e) {
                        var n = $(this).data("tap"),
                            o = n.split("|"),
                            r = o[0],
                            a = o[1] || "";
                        "!back" == r ? i.viewBack() : $.isFunction(i.viewObj[r]) && i.viewObj[r].apply(i.viewObj, a.split(",")), t.stopPropagation()
                    }
                }), $.isFunction(this.viewObj.fixIOS70Input) && $.isApple && navigator.userAgent.match(/7_0(?:_\d)?/) && this.delegate("input", $.tapClick, function() {
                    var t = this;
                    switch (t.type) {
                        case "text":
                        case "number":
                        case "tel":
                            i.viewObj.fixIOS70Input.call(i.viewObj, t), setTimeout(function() {
                                t.focus()
                            }, 800)
                    }
                })
            }
        }, $.extend(n.prototype, e);
        var o, r = {},
            a = null,
            s = function(t, i) {
                var e = new n(t),
                    o = i(e);
                o._ctx = e, r[t] = o, o && o.init && o.init(), e.init(o)
            },
            d = function(t, i) {
                var e = null;
                if (a != t) {
                    e = r[a], e && (e._ctx.blurInput(), e.onleave && e.onleave()), $("#mod-container .pageview").css("display", "none"), $("#mod-" + t).css("display", "block"), a = t, e = r[a], e._ctx._executeHidingTask(), e.onenter && e.onenter.apply(e, i), e._ctx.firstEnter = !1;
                    var n = [];
                    if (i)
                        for (var s = 0, d = i.length; d > s; s++) {
                            var c = i[s];
                            "function" == typeof c ? n.push(null) : n.push(c)
                        }
                    if (history.replaceState) try {
                        history.replaceState({
                            pageView: a,
                            args: n
                        })
                    } catch (u) {}
                    document.body.className = "pv-" + t, window.scrollTo(0, 0), o && o()
                }
            },
            c = function() {
                var t = u() || l() || {};
                d(t.pageView || "index", t.args || []), window.onpopstate = function() {
                    var t = u();
                    t && d(t.pageView, t.args)
                }
            },
            u = function() {
                if (history.state) {
                    var t = history.state;
                    return {
                        pageView: t.pageView,
                        args: t.args
                    }
                }
                return !1
            },
            l = function(t) {
                t = t || $.getParam("pv", "index");
                var i = t.match(/(\w+)(?:\|([,\w]+))?/),
                    e = [];
                return i[2] && $.each(i[2].split(","), function(t, i) {
                    "true" == i ? e.push(!0) : "false" == i ? e.push(!1) : parseFloat(i) == i ? e.push(parseFloat(i)) : e.push(i)
                }), i ? {
                    pageView: i[1],
                    args: e
                } : !1
            };
        return {
            defineView: s,
            changeView: d,
            getCurViewName: function() {
                return a
            },
            getCurViewObj: function() {
                return r[a]
            },
            setViewChangeFn: function(t) {
                o = t
            },
            init: c
        }
    }), /*!File[phone/common/Overlay.js]*/
    define("phone/common/Overlay", ["phone/common/baseCtxPrototype"], function(t) {
        var i = function(t) {
            this.overlayId = t, this.containerNode = $("#mod-overlay-" + t), this._iScrollInstances = {}, this._isShowing = !1, this.viewObj = null
        };
        i.prototype = {
            init: function(t) {
                this.viewObj = t, this._initIscroll(), this.delegate(".tap-action", $.tapClick, function(t) {
                    var i = $(this).attr("disabled");
                    if ("" !== i && "true" !== i) {
                        var e = $(this).data("tap"),
                            o = e.split("|"),
                            r = o[0],
                            a = o[1] || "";
                        $.isFunction(n[r]) && n[r].apply(n, a.split(",")), t.stopPropagation()
                    }
                })
            },
            hideLayer: function() {
                $("#mod-overlay-" + this.overlayId).css("display", "none")
            },
            goBack: function() {
                $("#mod-overlay-mask").css("display", "none"), this.curPageViewCtx.removeClass("overlaied overlaied-" + this.overlayId), this._isShowing = !1
            },
            hide: function() {
                a()
            },
            isShowing: function() {
                return this._isShowing
            }
        }, $.extend(i.prototype, t);
        var e = {},
            n = null,
            o = function(t, n) {
                var o = new i(t),
                    r = n(o);
                o.init(r), r._ctx = o, r.init && r.init(), e[t] = r
            },
            r = function(t, i, o, r) {
                if (!n) {
                    n = e[t], n._ctx.curPageViewCtx = i, i.addClass("overlaied overlaied-" + t), $("#mod-overlay-mask").css("display", "block");
                    var s = function(t) {
                        t.target == this && (a(), $(this).off($.tapClick, arguments.callee))
                    };
                    $("#mod-overlay-" + t).css("display", "block").on($.tapClick, s), setTimeout(function() {
                        n.show && n.show.apply(n, o), n._ctx._isShowing = !0, r && r()
                    }, 30)
                }
            },
            a = function(t) {
                n && n._ctx.isShowing() && (n.hide(), t && t()), n = null
            };
        return {
            defineOverlay: o,
            showOverlay: r,
            hideOverlay: a,
            getCurOverlayObj: function() {
                return n
            }
        }
    }), /*!File[phone/common/baseCtxPrototype.js]*/
    define("phone/common/baseCtxPrototype", ["lib/Loading"], function(t) {
        var i = 0,
            e = function(t) {
                return function() {
                    return this.containerNode[t].apply(this.containerNode, arguments)
                }
            },
            n = {
                onScrollStart: function() {
                    for (var t = this.scroller, i = t.className; t && -1 == i.indexOf("pageview") && -1 == i.indexOf("mod-overlay");) t.scrollTop = 0, t = t.parentElement, i = t.className
                }
            },
            o = {
                find: e("find"),
                addClass: e("addClass"),
                removeClass: e("removeClass"),
                on: e("on"),
                delegate: e("delegate"),
                showLoading: t.show,
                hideLoading: t.hide,
                refreshIscroll: function(t, i) {
                    "boolean" == typeof t && (i = t, t = void 0), $.each(this._iScrollInstances, function(e, n) {
                        t && e != t || ($.isMobile ? (n.refresh(), i && n.scrollTo(0, 0, 0)) : i && (n.scrollTop = 0))
                    })
                },
                getIscrollById: function(t) {
                    return this._iScrollInstances[t]
                },
                scrollToElement: function(t, i, e) {
                    var n = this._iScrollInstances[t];
                    if ($.isMobile) n.scrollToElement(i, e);
                    else {
                        var o = iScroll.prototype,
                            r = o._offset(n),
                            a = o._offset(i),
                            s = r.top - a.top;
                        n.scrollTop = s
                    }
                },
                _initIscroll: function() {
                    var t = this;
                    t.find(".iscroll-container").each(function(e, o) {
                        var r = $(o).data("iscroll-id") || ++i;
                        if ($.isMobile) {
                            var a = {
                                    hScroll: !1
                                },
                                s = $(o),
                                d = "onRefresh,onScrollStart,onScrollMove,onScrollEnd,onTouchEnd,onAnimate".split(",");
                            s.data("iscroll-nobounce") && (a.bounce = !1);
                            for (var c = 0, u = d.length; u > c; c++) {
                                var l = d[c],
                                    p = l.toLowerCase(),
                                    h = s.data(p);
                                h && t.viewObj[h] ? a[l] = function(i, e) {
                                    return function() {
                                        n[e] && n[e].call(this), t.viewObj[i](this)
                                    }
                                }(h, l) : n[l] && (a[l] = n[l])
                            }
                            t._iScrollInstances[r] = new iScroll(o, a)
                        } else $(o).css("overflow", "auto"), t._iScrollInstances[r] = o;
                        $(o).data("iscroll-id", r)
                    })
                }
            };
        return o
    }), /*!File[phone/common/utils.js]*/
    define("phone/common/utils", ["lib/base", "lib/fx"], function(t, i) {
        var e = {};
        return e.shoppingPriceFly = function() {
            var t, e, n, o, r = 0;
            return $('<div id="shopping-fly-height" style="position:fixed;left:0;top:0;bottom:0;width:0;"></div>').appendTo("body"), o = $("#shopping-fly-height").height(), $("#shopping-fly-height").remove(), $(document).on("touchstart", function(i) {
                    i.touches && i.touches.length && (n = i.touches[0], t = n.pageX, e = n.pageY)
                }),
                function(n) {
                    var a, s, d, c, u, l = r++;
                    if ($.isString(n) || $.isNumber(n)) d = t, c = e, u = "￥" + n;
                    else {
                        n = $(n);
                        var p = n.offset();
                        d = p.left, c = p.top, u = n.text()
                    }
                    i.parabola({
                        startX: d,
                        startY: c,
                        endX: 35,
                        endY: o - 30,
                        height: 50,
                        duration: .5,
                        frameRate: 50,
                        callback: function(t, i, e) {
                            if (0 === e) $($.formatString('<span id="shopping-price-fly-#{id}" style="position:fixed;z-index:9999;color:#FF8901;font-size:14px;font-weight:bold;top:#{y}px;left:#{x}px;">#{text}</span>', {
                                id: l,
                                text: u,
                                x: t,
                                y: i
                            })).appendTo("body"), a = t, s = i;
                            else if (1 === e) $("#shopping-price-fly-" + l).remove();
                            else {
                                var n = 1 - e / 2;
                                $("#shopping-price-fly-" + l).css({
                                    "-webkit-transform": $.formatString("scale(#{scale}) translate3d(#{dx}px,#{dy}px,0)", {
                                        scale: n,
                                        dx: (t - a) / n,
                                        dy: (i - s) / n
                                    })
                                })
                            }
                        }
                    })
                }
        }(), e.handleShareLink = function(i) {
            if (!window.SYS_CONF) return i;
            var e = $.getParam("shareseries") || "",
                n = encodeURIComponent(e + (e ? "-" : "") + (SYS_CONF.shareSerie || SYS_CONF.userInfo.beeId));
            return t.urlAddParams(i, {
                shareseries: n
            })
        }, e
    }), /*!File[phone/index/ProductView.js]*/
    define("phone/index/ProductView", ["lib/base", "phone/index/main", "common/Dialog"], function(t, i) {
        var e = {
                productItem: '<li id="#{viewName}-product-#{id}" class="product-item shopping-item" data-id="#{id}">\n<div class="product-imgwrap tap-action  #{productZero} #{productRestock}" data-tap="showDetail|#{id},#{shopId},#{isRestock}">\n<div id="#{viewName}-product-img-#{idx}" class="product-img#{productImgEmpty}" #{productImg} data-idx="#{idx}"></div>\n<span class="product-restock-img"></span>\n<span class="product-maskblock product-count">#{count}</span>\n<span class="product-maskblock product-add shopping-action" data-action="#{id}:+">﹢</span>\n<span class="product-maskblock product-del shopping-action" data-action="#{id}:-">﹣</span>\n</div>\n<h6 class="product-name ui-ellipsis">#{name}</h6>\n<p class="product-detail">\n<span class="product-detail-price">￥#{price}</span>\n<span class="product-detail-marketprice">#{marketPrice}</span>\n&nbsp;\n<span class="product-detail-attribute">#{attributeStr}</span>\n</p>\n</li>',
                tagItem: '<li class="tag-item tap-action" data-tap="#{method}|#{shopId},#{id},#{name},#{img}" style="background-image:url(#{img})"></li>',
                dynaStyleTpl: ".mod-#{viewName} .product-imgwrap { height: #{imgHeight}px; }\n.mod-#{viewName} .product-add { width:#{buttonWidth}px; height:#{buttonHeight}px; line-height:#{buttonHeight}px;}\n.mod-#{viewName} .product-del { top:#{buttonHeight}px;width:#{buttonWidth}px; height:#{buttonHeight}px; line-height:#{buttonHeight}px;}\n.mod-#{viewName} .product-count { right:#{countRight}px; line-height:#{imgHeight}px; width:#{countWidth}px;}\n.mod-#{viewName} .tag-item { height:#{tagHeight}px;}"
            },
            n = i.getShoppingCart(),
            o = function(t, i, e) {
                this.viewName = t, this.shopId = i, this.listContainerNode = e, this.productHeight = 0
            };
        return o.prototype = {
            getProductItemHtml: function(t, o) {
                var r = o.id,
                    a = n.getProductById(r),
                    s = this;
                return $.formatString(e.productItem, o, {
                    productZero: a ? "" : "product-zero",
                    productRestock: i.isProductRestock(o) ? "product-restock" : "",
                    productImg: o.app_img ? 'data-url="' + o.app_img + '"' : "",
                    productImgEmpty: o.app_img ? "" : "product-img-empty",
                    marketPrice: parseFloat(o.market_price) > parseFloat(o.price) ? "￥" + parseFloat(o.market_price) : "",
                    count: a ? a.shoppingCount : 0,
                    shopId: s.shopId,
                    attributeStr: i.getAttrStr(o),
                    isRestock: i.isProductRestock(o) ? 1 : 0,
                    idx: t
                }, this)
            },
            getTagItemHtml: function(t, i) {
                return $.formatString(e.tagItem, i, this, {
                    method: parseInt(i.istags) ? "showTag" : "showActivity"
                })
            },
            calcProductSize: function() {
                var i = this.listContainerNode.width() - 18;
                this.productHeight = parseInt(.5536 * i), t.setStyleText($.formatString(e.dynaStyleTpl, {
                    imgHeight: parseInt(i / 3.2),
                    buttonWidth: parseInt(i / 5),
                    buttonHeight: parseInt(i / 6.4),
                    countRight: parseInt(i / 5) + 1,
                    countWidth: Math.max(32, parseInt(i / 8.4)),
                    tagHeight: parseInt(i / 2.11)
                }, this), this.viewName + "-productView-stylesheet")
            },
            imgLazyload: function(t) {
                for (var i = t.wrapperH, e = Math.abs(t.y), n = e + i, o = this.productHeight, r = parseInt(e / o), a = [], s = 0; 100 > s && !(a.length * o > i);) {
                    var d = r * o,
                        c = r * o + o;
                    (d > e && n > d || c > e && n > c) && a.push(r), r++, s++
                }
                for (var u = 0, l = a.length; l > u; u++) {
                    var p, h = a[u],
                        f = $("#" + this.viewName + "-product-img-" + h);
                    f && (p = f.data("url")) && f.css("background-image", "url(" + p + ")").data("url", "")
                }
            },
            updateListShoppingCart: function() {
                var t = 0;
                this.listContainerNode.find(".product-item").each(function(i, e) {
                    var o, r = $(e),
                        a = r.data("id");
                    (o = n.getProductById(a)) && o.shoppingCount ? (r.find(".product-imgwrap").removeClass("product-zero").find(".product-count").html(o.shoppingCount), t++) : r.find(".product-imgwrap").addClass("product-zero")
                }), 0 == t && setTimeout(function() {
                    $("body").toggleClass("bugfix-ui")
                }, 10)
            }
        }, o
    }), /*!File[phone/index/ShopShow.js]*/
    define("phone/index/ShopShow", ["lib/base", "phone/index/main", "phone/index/ProductView", "common/Dialog"], function(t, i, e, n) {
        var o = {
                categoryItem: '<li id="menu-category-#{id}" class="category-item ui-graybg #{isFolder}" data-id="#{id}">\n<span class="category-item-name" style="background-image:url(#{icon})">\n#{name}\n</span>\n<span class="category-item-expand">▼</span>\n<div class="bottom-line"></div>\n<ul class="subitem-ul">#{subitemList}</ul>\n</li>',
                categorySubItem: '<li id="menu-category-#{id}" class="category-subitem" data-name="#{name}" data-id="#{id}" data-folder-id="#{folderId}" style="background-image:#{backgroundImage}">\n<span class="point">●</span>\n#{name}\n<span class="point">●</span>\n</li>'
            },
            r = function(t) {
                this.id = t ? t.id : !1, this.data = t, this.parent = null, this.childs = [], this.offset = 0, this.destoried = !1
            };
        r.prototype = {
            addChild: function(t) {
                t.parent = this, t.offset = this.childs.length, this.childs.push(t)
            },
            getCategoryModelById: function(t) {
                for (var i = 0, e = this.childs.length; e > i; i++) {
                    var n, o = this.childs[i];
                    if (o.id == t) return o;
                    if ((n = o.getCategoryModelById(t)) && n.id == t) return n
                }
            },
            getNextCategoryModel: function() {
                var t;
                return (t = this.parent.childs[this.offset + 1]) || (t = this.parent.parent.childs[this.parent.offset + 1]), t && t.childs && t.childs.length ? t.childs[0] : t
            }
        };
        var a = function(n, o, a) {
            this._isInited = !1, this.shopInfo = n.shop, this.shopId = this.shopInfo.zchtid, this.ctx = a, this.containerNode = a.find(".main"), this.categoryList = n.category, this.firstCategoryId = this.categoryList[0].id, this.shoppingCart = o, 0 == this.firstCategoryId ? (this.categoryProductMap = {
                0: n.category[0].childs
            }, delete n.category[0].childs) : this.categoryProductMap = {}, this.curCategoryId = null, this.productView = new e("menu", this.shopId, this.ctx.find(".list-product")), this._isExecuteFirstEnter = !1, this._defaultOpenCategory = [], this._categoryModel = new r;
            for (var s = 0, d = this.categoryList.length; d > s; s++) {
                var c = this.categoryList[s],
                    u = new r(c);
                if (this._categoryModel.addChild(u), c.childs && c.childs.length)
                    for (var l = 0, p = c.childs.length; p > l; l++) {
                        var h = new r(c.childs[l]);
                        u.addChild(h)
                    }
            }
            var f = this;
            $.each(n.category, function(e, n) {
                if (n.childs && n.childs.length) {
                    var o = n.id;
                    f["loadFolderCategoryData_" + o] = t.onceExecMulitCallFn(function() {
                        if (!f.destoried) {
                            var e = this;
                            t.ajaxGet("/data/getCategoryProduct", {
                                shopId: f.shopId,
                                categoryId: o
                            }, function(t) {
                                if (!f.destoried) {
                                    if (0 != t.errno) return e.done(!0), e.reset(), void 0;
                                    for (var n in t.data) f.categoryProductMap[n] = t.data[n];
                                    i.getShoppingCart().addProductDataList(t.data), e.done()
                                }
                            })
                        }
                    })
                }
            })
        };
        return a.prototype = {
            init: function() {
                this._renderCategoryList()
            },
            executeOnFirstEnter: function() {
                if (!this._isExecuteFirstEnter) {
                    if (this._isExecuteFirstEnter = !0, i.showMaskGuide("geoGuide"), this._defaultOpenCategory && this._defaultOpenCategory.length)
                        for (var t = 0, e = this._defaultOpenCategory.length; e > t; t++) this.expandFolderCategory(this._defaultOpenCategory[t], !0);
                    parseInt(this.shopInfo.outofservice) && n.alert("鲜蜂侠忙碌了一天补充能量中···<br/>现在下单可预订时间送达哦~")
                }
            },
            _changeCategory: function(t) {
                var i = $("#menu-category-" + t);
                this.curCategoryId = t, this.containerNode.find(".category-item,.category-subitem").removeClass("active").removeClass("active-prev").removeClass("active-next"), i.addClass("active"), i.prev().addClass("active-prev"), i.next().addClass("active-next");
                var e = i.find(".category-item-icon").data("icon");
                e && i.find(".category-item-icon").css("background-image", "url(" + (0 == e.indexOf("http://") ? e : SYS_CONF.domain.static + "/" + e) + ")").data("icon", ""), this._renderProductList(t)
            },
            expandFolderCategory: function(t, i, e) {
                var n = this,
                    o = $("#menu-category-" + t),
                    r = $.throttle(100, function() {
                        n.ctx.refreshIscroll("category"), e && e()
                    }, !0);
                if (o.hasClass("expand")) {
                    if (i) return e && e(), void 0;
                    o.removeClass("expand"), o.find(".category-subitem").animate({
                        height: 0,
                        opacity: 0
                    }, 250, r)
                } else o.addClass("expand"), o.find(".category-subitem").animate({
                    height: "44px",
                    opacity: 1
                }, 250, r);
                this["loadFolderCategoryData_" + t]()
            },
            changeCategory: function(t, i) {
                var e = $("#menu-category-" + t),
                    o = this;
                if (e.hasClass("category-item-folder")) return this.expandFolderCategory(t), i && this.changeCategory(i), void 0;
                if (this.categoryProductMap[t]) return this._changeCategory(t), void 0;
                this.ctx.showLoading("加载中");
                var r = e.data("folder-id");
                this["loadFolderCategoryData_" + r](function(i) {
                    o.ctx.hideLoading(), i ? n.tip("数据加载失败啦~") : o._changeCategory(t)
                })
            },
            getNextCategoryModel: function() {
                var t = this._categoryModel.getCategoryModelById(this.curCategoryId);
                return t.getNextCategoryModel()
            },
            update: function() {
                this.productView.updateListShoppingCart()
            },
            _renderCategoryList: function() {
                var i = [],
                    e = !1,
                    n = !1,
                    r = this;
                $.each(this.categoryList, function(t, a) {
                    if (!(a.id < 0)) {
                        parseInt(a.is_open) && r._defaultOpenCategory.push(a.id);
                        var s = a.childs && a.childs.length ? a.id : "";
                        i.push($.formatString(o.categoryItem, a, {
                            subitemList: function() {
                                if (a.childs && a.childs.length) {
                                    var t = [];
                                    return $.each(a.childs, function(i, e) {
                                        t.push($.formatString(o.categorySubItem, e, {
                                            folderId: s,
                                            backgroundImage: e.flag ? "url(" + e.flag + ")" : "none"
                                        }))
                                    }), t.join("")
                                }
                                return ""
                            },
                            isFolder: s ? "category-item-folder" : ""
                        })), e || (e = a.id, a.childs && a.childs.length && (n = a.childs[0].id))
                    }
                }), this._itemDelegateFn = function(i) {
                    i.stopPropagation();
                    var e = $(this),
                        n = e.data("id");
                    n && (e.hasClass("category-item-folder") ? t.clickLog("menu_category_expand", {
                        expand: !e.hasClass("expand")
                    }) : t.clickLog("menu_category_click", {
                        categoryId: n,
                        name: e.data("name")
                    }), r.changeCategory(n))
                }, this.containerNode.find(".list-category-ul").html(i.join("")).delegate(".category-item,.category-subitem", $.tapClick, this._itemDelegateFn), this.calcProductSize(), this.ctx.refreshIscroll("category", !0), this.changeCategory(e, n)
            },
            _renderProductList: function(t) {
                var i = this.categoryProductMap[t],
                    e = [],
                    n = this,
                    o = 0 == t ? "getTagItemHtml" : -1 == t ? "" : "getProductItemHtml";
                i && $.each(i, function(t, i) {
                    e.push(n.productView[o](t, i))
                }), this.containerNode.find(".list-product-ul").html(e.join("")), this.ctx.refreshIscroll("product", !0)
            },
            calcProductSize: function() {
                this.productView.calcProductSize()
            },
            imgLazyload: function(t) {
                this.productView.imgLazyload(t)
            },
            getShopinfo: function() {
                return $.formatString("配送店：#{number}<br>#{WorkBegin} - #{WorkEnd}，#{range}公里", this.shopInfo)
            },
            destory: function() {
                this.destoried = !0, this.containerNode.find(".list-category-ul").off($.tapClick, ".category-item,.category-subitem", this._itemDelegateFn), this.shopInfo = this.containerNode = this.categoryList = this.categoryProductMap = this.productView = null
            }
        }, a
    }), /*!File[phone/index/CouponMgr.js]*/
    define("phone/index/CouponMgr", ["lib/base", "lib/EventObj", "lib/Loading", "common/Dialog"], function(t, i, e, n) {
        var o = {
                content: '<div class="inputwrap prop-unexpand-hidden">\n<form onsubmit="return false;" class="propcode-form">\n<input class="inputwrap-input input-propcode" name="propcode" type="text" placeholder="请输入优惠码" value="" />\n<input type="submit" class="inputwrap-button input-propcode-submit" value="验证"  />\n</form>\n</div>\n<div class="prop-label prop-unexpand-hidden">#{labelWord}</div>\n<ul class="prop-list">#{couponList}</ul>',
                coupon: '<li class="prop-coupon #{extraClassname}" data-pwd="#{card_pwd}"><div class="coupon-value">#{couponVal}</div>#{name}<br/>优惠码：#{card_pwd}</li>'
            },
            r = $.inherits(i, {
                constructor: function(t) {
                    i.call(this), this.addrId = t.addrId, this.idformat = t.idformat, this.dateid = t.dateid, this.datestr = t.datestr, this.canUse = this.addrId && this.idformat, this._isExpand = !1, this._couponList = null, this._isDestoried = !1, this._usedPropcode = !1, this.contentNode = null
                },
                bindUseUi: function(t, i) {
                    this.contentNode = i, this.expandNode = t;
                    var e = this;
                    t.on($.tapClick, function() {
                        e._isDestoried || e._expandCouponList()
                    }), i.delegate("form", "submit", function() {
                        if (!e._isDestoried) {
                            var t = $(this).serializeForm(),
                                i = t.propcode;
                            e._verifyCoupon(i, !0)
                        }
                    }), i.delegate(".prop-coupon", $.tapClick, function() {
                        if (!e._isDestoried) {
                            var t = $(this),
                                i = t.attr("data-pwd");
                            e._isExpand ? e._verifyCoupon(i) : (e.cancelPropcode(), t.removeClass("selected"), t.addClass("prop-unexpand-hidden"), e.fire("uiChange"))
                        }
                    }), e.on("couponVerified", function(t) {
                        e._isDestoried || t.success && (i.find(".prop-coupon").each(function(i, n) {
                            var o = $(n),
                                r = o.attr("data-pwd");
                            t.propcode == r ? (o.addClass("selected"), o.removeClass("prop-unexpand-hidden")) : (o.removeClass("selected"), o.addClass("prop-unexpand-hidden")), e.fire("uiChange")
                        }), e._expandCouponList())
                    })
                },
                destory: function() {
                    this._isDestoried = !0
                },
                cancelPropcode: function() {
                    this._usedPropcode = !1, this.fire("cancelPropcode")
                },
                getPropcode: function() {
                    return this._usedPropcode
                },
                _renderCouponList: function() {
                    var t = this._couponList,
                        i = this,
                        e = [];
                    for (var n in t) {
                        var r = t[n],
                            a = parseFloat(r.value);
                        e.push($.formatString(o.coupon, r, {
                            extraClassname: i._usedPropcode && i._usedPropcode == r.card_pwd ? "selected" : "prop-unexpand-hidden",
                            couponVal: isNaN(a) ? r.value : "￥" + a
                        }))
                    }
                    this.contentNode.html($.formatString(o.content, {
                        couponList: e.join(""),
                        labelWord: e.length ? "可使用的优惠券" : "没有可使用的优惠券"
                    })), this.fire("uiChange")
                },
                _expandCouponList: function() {
                    var t = this;
                    this._isExpand ? (this._isExpand = !1, this.expandNode.find("span").html("▼"), this.contentNode.addClass("unexpand"), this.fire("uiChange")) : this._getCouponList(function() {
                        t._renderCouponList(), t._isExpand = !0, t.expandNode.find("span").html("▲"), setTimeout(function() {
                            t.contentNode.removeClass("unexpand"), t.fire("uiChange")
                        }, 10)
                    })
                },
                _verifyCoupon: function(i, o) {
                    if (i) {
                        if (i.length < 7) return n.alert("您填写的优惠券号码太短了~"), void 0;
                        var r = this;
                        e.show("验证中"), t.ajaxPost("/submit/couponVerify", {
                            addrId: r.addrId,
                            idformat: r.idformat,
                            dateid: r.dateid,
                            datestr: r.datestr,
                            propcode: i
                        }, function(a) {
                            e.hide();
                            var s = {
                                success: 0 == a.errno,
                                msg: a.errmsg,
                                propcode: i,
                                data: a.data
                            };
                            0 == a.errno ? (r._usedPropcode = i, o && (r._couponList = $.extend(r._couponList, a.data.coupon), r._renderCouponList(), t.ajaxPost("/submit/couponBind", {
                                propcode: i
                            }, $.noop))) : n.alert(a.errmsg), r.fire("couponVerified", s)
                        })
                    }
                },
                _getCouponList: function(i) {
                    if (null !== this._couponList) return i && i(this._couponList), void 0;
                    var n = this;
                    e.show("获取可用优惠券中"), t.ajaxPost("/submit/couponList", {
                        addrId: n.addrId,
                        idformat: n.idformat,
                        dateid: n.dateid,
                        datestr: n.datestr
                    }, function(t) {
                        e.hide(), n._couponList = 0 == t.errno ? t.data : {}, i && i(t.data)
                    })
                }
            });
        return r
    }), /*!File[phone/index/view_index.js]*/
    define("phone/index/view_index", ["lib/base", "common/Dialog", "phone/index/main"], function(t, i, e) {
        return function(t) {
            var i = !1,
                n = !1,
                o = function() {
                    var i = function() {
                        var i = null,
                            e = 1,
                            n = !1,
                            o = function() {
                                e = 1 - e, t.find(".location").css("opacity", e || .1), i = setTimeout(o, 800)
                            };
                        return {
                            start: function() {
                                n || (o(), n = !0)
                            },
                            stop: function() {
                                t.find(".location").css("opacity", 1), clearTimeout(i), n = !1
                            }
                        }
                    }();
                    t.on($.tapClick, function() {
                        t.changeView("menu")
                    }), e.getAddrMgr().on("progressing", function() {
                        i.start()
                    }).on(["addrChange", "addrChangeError", "gpsError"], function() {
                        i.stop(), n = !0, r()
                    })
                },
                r = function() {
                    t.isCurrentView() && i && n && setTimeout(function() {
                        t.changeView("menu")
                    }, 100)
                },
                a = function() {
                    i = !1, n = !1, setTimeout(function() {
                        i = !0, r()
                    }, 2e3)
                },
                s = function() {};
            return {
                init: o,
                onenter: a,
                onleave: s
            }
        }
    }), /*!File[phone/index/view_menu.js]*/
    define("phone/index/view_menu", ["lib/base", "lib/Loading", "lib/Performance", "common/Dialog", "phone/common/utils", "phone/index/main", "phone/index/ShopShow", "common/LastOperation"], function(t, i, e, n, o, r, a, s) {
        return function(d) {
            var c, u, l = null,
                p = null,
                h = function(t) {
                    return t * Math.PI / 180
                },
                f = function(t, i, e, n) {
                    var o = h(i),
                        r = h(n),
                        a = o - r,
                        s = h(t) - h(e),
                        d = 2 * Math.asin(Math.sqrt(Math.pow(Math.sin(a / 2), 2) + Math.cos(o) * Math.cos(r) * Math.pow(Math.sin(s / 2), 2))),
                        c = 6370996.81;
                    return d *= c, d = Math.round(1e4 * d) / 1e4
                },
                g = function() {
                    var t = r.getPathMgr();
                    t.fromTo(d.key), t.addPath("addrlist", "addredit", "addrmap"), d.changeView("addrlist", d.key)
                },
                m = function() {
                    if (d.isCurrentView()) {
                        var t = function() {
                                return !1
                            },
                            i = function() {
                                return r.needVerified(function() {
                                    g()
                                }), !1
                            },
                            e = {
                                title: !1,
                                content: "温馨提示</br>&nbsp;</br>当前收货地址不在您的附近哦~",
                                buttons: [{
                                    key: "cancel",
                                    text: "修改地址",
                                    autoClose: !0,
                                    onClick: i
                                }, {
                                    key: "ok",
                                    text: "继续购物",
                                    autoClose: !0,
                                    onClick: t
                                }]
                            };
                        n.show(e)
                    }
                },
                v = function(t) {
                    if (d.isCurrentView()) {
                        var i = function() {
                                return g(!0), !1
                            },
                            e = {
                                title: !1,
                                content: t,
                                buttons: [{
                                    key: "ok",
                                    text: "确认",
                                    autoClose: !0,
                                    onClick: i
                                }]
                            };
                        n.show(e)
                    }
                },
                b = function() {
                    if (d.isCurrentView()) {
                        var t = function() {
                                return r.needVerified(function() {
                                    g()
                                }), !1
                            },
                            i = {
                                title: !1,
                                content: "GPS定位失败<br/>鲜蜂侠找不到您的位置啦",
                                buttons: [{
                                    key: "ok",
                                    text: "输入收货地址",
                                    autoClose: !0,
                                    onClick: t
                                }]
                            };
                        n.show(i)
                    }
                },
                y = function() {
                    u = !1, l = r.getShoppingCart(), l.delegateOperate(d.find(".list-product-ul"), function(t) {
                        o.shoppingPriceFly($("#menu-product-" + t.id + " .product-detail-price"))
                    }).on("shoppingListChange", function(t) {
                        d.isCurrentView() && (p && p.update(), "add" == t.reason && r.showMaskGuide("cartGuide"))
                    }), l.bindBarUi(d.find(".pub-cart")), r.getAddrMgr().on("addrChange", function(t) {
                        i.hide(), l.setShopData(t.data.shop), d.hideLoading(), p && p.destory(), p = new a(t.data, l, d), p.init(), d.isCurrentView() && setTimeout(function() {
                            p.executeOnFirstEnter()
                        }, 1e3), setTimeout(r.checkWelcomeLogoCache, 3e3), e.makeTime("listShow").addData("cityid", t.data.shop.cityid).report()
                    }).on("progressing", function(t) {
                        (u || !s.isValid()) && (i.show("加载中"), d.setTitle(t.text + "..."))
                    }).on("gpsParsed", function(t) {
                        i.hide();
                        var e = r.getAddrMgr().getGPSAddr();
                        if (s.saveGPSInfo(e), !u && s.isValid()) {
                            var n = s.getAddr(),
                                o = f(n.longitude, n.latitude, e.longitude, e.latitude);
                            return d.isCurrentView() && o > 2e3 && m(), void 0
                        }
                        c = '<span class="icon icon-location"></span>&nbsp;' + t.street + "附近▼", d.setTitle(c)
                    }).on("addrChange", function(t) {
                        i.hide(), d.find(".main-both").removeClass("main-empty"), "gps" != t.userAddr.type && (c = '<span class="icon icon-location"></span>&nbsp;' + t.userAddr.address + "▼", d.setTitle(c))
                    }).on("addrChangeError", function(t) {
                        i.hide();
                        var e = r.getAddrMgr().getLastAddr().address;
                        d.find(".main-both").addClass("main-empty"), d.setTitle(e || "服务异常"), v(t.errmsg)
                    }).on("gpsParsedError", function() {
                        i.hide(), (u || !s.isValid()) && (d.setTitle("解析失败"), b())
                    }).on("gpsError", function() {
                        i.hide(), (u || !s.isValid()) && (d.setTitle("定位失败"), b())
                    }), $(window).on("resize", function() {
                        d.isCurrentView() && p && p.calcProductSize()
                    }), d.find(".header-content").on($.tapClick, function() {
                        r.needVerified(function() {
                            g()
                        })
                    }).on("longTap", function() {
                        var t = [p && p.getShopinfo(), $.wbr("GeoLogid:" + SYS_CONF.geologid), "Logid:" + SYS_CONF.logid, "env:" + SYS_CONF.environ];
                        n.alert(t.join("<br/>"))
                    }), d.find(".pub-cart").delegate(".expand", $.tapClick, function() {
                        l.getCount() && d.showOverlay("cart")
                    }), d.find(".list-product"), e.init()
                },
                w = function() {
                    d.hideOverlay()
                },
                C = function(t, e) {
                    p && (p.calcProductSize(), p.update(), setTimeout(function() {
                        p.executeOnFirstEnter()
                    }, 1e3)), d.isFirstEnter() ? setTimeout(function() {
                        d.find(".main").removeClass("main-empty")
                    }, 30) : (u = "forcegps" == e ? !0 : !1, r.getAddrMgr().isGPSErr() && (u = !0), u && (d.find(".main-both").addClass("main-empty"), d.isCurrentView() && i.show("加载中"), r.getAddrMgr().initGPS(!0))), d.refreshIscroll()
                },
                _ = function() {
                    r.needVerified(function() {
                        d.changeView("cart")
                    })
                },
                x = function() {
                    r.needVerified(function() {
                        d.changeView("mine")
                    })
                },
                S = function(t, i, e) {
                    d.showOverlay("detail", t, i, e)
                },
                k = function() {
                    var t = $.throttle(150, function(t) {
                            p && p.imgLazyload(t)
                        }),
                        i = function(t) {
                            for (var i = [], e = 0; t > e; e++) i.push($.formatString('<div class="next-progress-line" style="-webkit-transform:rotate(#{rotate}deg);opacity:#{opacity}"></div>', {
                                rotate: Math.floor(e / 12 * 360),
                                opacity: e / 24 + .3
                            }));
                            d.find(".scroll-next .next-progress").html(i.join(""))
                        },
                        e = $.throttle(50, function(t) {
                            var e = p ? p.getNextCategoryModel() : !1;
                            if (!e) return d.find(".scroll-next").css("opacity", 0), void 0;
                            var n = Math.max(t.scrollerH, t.wrapperH) - t.wrapperH + t.y;
                            if (d.find(".next-category-name").html(e.data.name), -80 > n) i(12), d.find(".scroll-next").css("opacity", 1), d.find(".next-word").html("松开即可");
                            else if (-5 > n) {
                                var o = Math.abs(n / 80 * 12);
                                i(o), d.find(".scroll-next").css("opacity", 1), d.find(".next-word").html("向上拖动")
                            } else d.find(".scroll-next").css("opacity", 0)
                        });
                    return function(i) {
                        t(i), e(i)
                    }
                }(),
                I = function(i) {
                    var e = Math.max(i.scrollerH, i.wrapperH) - i.wrapperH + i.y;
                    if (-80 > e) {
                        var n = p ? p.getNextCategoryModel() : !1,
                            o = function(t) {
                                d.scrollToElement("category", $("#menu-category-" + t)[0])
                            };
                        n && (n.parent && n.parent.id ? (p.expandFolderCategory(n.parent.id, !0, function() {
                            o(n.id)
                        }), p.changeCategory(n.id)) : (p.changeCategory(n.id), o(n.id)), t.clickLog("scroll_refresh_category"))
                    }
                };
            return {
                init: y,
                onenter: C,
                onleave: w,
                cartOk: _,
                showDetail: S,
                me: x,
                productScroll: $.throttle(150, k),
                productScrollEnd: I,
                showTag: function(t, i, e, n) {
                    d.changeView("tag", t, {
                        id: i,
                        name: e,
                        img: n
                    })
                },
                showActivity: function(t, i, e, n) {
                    d.changeView("act", t, {
                        id: i,
                        name: e,
                        img: n
                    })
                },
                fixCategoryIscroll: function() {
                    d.refreshIscroll("category")
                }
            }
        }
    }), /*!File[phone/index/view_tag.js]*/
    define("phone/index/view_tag", ["lib/base", "phone/index/main", "phone/index/ProductView"], function(t, i, e) {
        return function(n) {
            var o, r = function() {
                    $(window).on("resize", function() {
                        n.isCurrentView() && o && o.calcProductSize()
                    }), i.getShoppingCart().bindBarUi(n.find(".pub-cart")).delegateOperate(n.find(".tag-list")).on("shoppingListChange", function() {
                        n.isCurrentView() && o && o.updateListShoppingCart()
                    }), n.find(".pub-cart").delegate(".expand", $.tapClick, function() {
                        i.getShoppingCart().getCount() && n.showOverlay("cart")
                    })
                },
                a = function(r, a) {
                    if (r) {
                        n.setTitle(a.name);
                        var s = n.find(".tag-list").html("");
                        o = new e("tag", r, s), o.calcProductSize(), s.html(o.getTagItemHtml(0, a)), t.ajaxGet("/data/getTagProduct", {
                            shopId: r,
                            tagId: a.id
                        }, function(t) {
                            if (0 == t.errno) {
                                var e = [o.getTagItemHtml(0, a)];
                                i.getShoppingCart().addProductDataList(t.data), $.each(t.data, function(t, i) {
                                    e.push(o.getProductItemHtml(t, i))
                                }), s.html(e.join("")), n.refreshIscroll(!0)
                            }
                        })
                    }
                },
                s = function(t) {
                    o && o.imgLazyload(t)
                },
                d = function(t, i, e) {
                    n.showOverlay("detail", t, i, e)
                },
                c = function() {
                    i.needVerified(function() {
                        n.changeView("cart")
                    })
                };
            return {
                cartOk: c,
                productScroll: $.throttle(150, s),
                onenter: a,
                init: r,
                back: function() {
                    return "menu"
                },
                showDetail: d
            }
        }
    }), /*!File[phone/index/view_act.js]*/
    define("phone/index/view_act", ["lib/base", "common/weixinUtils", "activity/bridge", "phone/index/main"], function(t, i, e, n) {
        return function(o) {
            var r, a, s, d = {},
                c = function() {
                    n.getShoppingCart().bindBarUi(o.find(".pub-cart")), o.find(".pub-cart").delegate(".expand", $.tapClick, function() {
                        n.getShoppingCart().getCount() && o.showOverlay("cart")
                    }), e.setInitHandler(function(t, e) {
                        var n = Bee.getMod("activity/act_" + t, !0);
                        n && (d = n, n.init && n.init(e), $.isWeixin && n.getShareObj && i.setShare(n.getShareObj()))
                    })
                },
                u = function(t, i) {
                    t && i && (a = t, s = i), o.setTitle(s.name), r = s.id, l()
                },
                l = function() {
                    o.showLoading("加载中"), t.ajaxLoad(o.find(".main").html(""), "/show/active", {
                        shopId: a,
                        id: r
                    }, function() {
                        o.hideLoading()
                    })
                },
                p = function() {
                    d && d.destory && d.destory()
                };
            return {
                init: c,
                onenter: u,
                onleave: p,
                back: function() {
                    return "menu"
                },
                getShareObj: function() {
                    return d && d.getShareObj ? d.getShareObj() : void 0
                },
                cartOk: function() {
                    n.needVerified(function() {
                        o.changeView("cart")
                    })
                },
                load: l
            }
        }
    }), /*!File[phone/index/view_cart.js]*/
    define("phone/index/view_cart", ["lib/base", "lib/RelSelect", "common/Dialog", "phone/index/main"], function(t, i, e, n) {
        var o = {
            addrEmpty: "收货地址：请补充您的收货信息~<br/>&nbsp;",
            addrLoading: "<p>地址加载中。。</p>",
            addr: '#{name} &nbsp; #{phone}<br/>\n<div class="ui-ellipsis"> #{address} </div>'
        };
        return function(r) {
            var a, s, d, c, u, l = function() {
                    var t = a.getShoppingList(),
                        i = [];
                    $.each(t, function(t, e) {
                        i.push(n.formatCartProduct(e))
                    }), r.find(".list-shopping-ul").html(i.join("")), r.refreshIscroll()
                },
                p = function() {
                    var i = s.getShopData().shop.zchtid;
                    t.ajaxGet("/data/getShopTime", {
                        shopId: i
                    }, function(t) {
                        0 == t.errno && (u = t.data, d.setData(u.str))
                    })
                },
                h = function() {
                    var t = n.getAddrMgr(),
                        i = n.getAddrMgr().getLastAddr();
                    addrHtml = t.isGpsAddr() ? o.addrEmpty : i ? $.formatString(o.addr, i) : o.addrEmpty, r.find(".addr").html(addrHtml)
                },
                f = function(i) {
                    if (r.isCurrentView()) {
                        var o = function() {
                                return n.selectAddress("cart"), t.clickLog("cart_selectAddr"), !1
                            },
                            a = {
                                title: !1,
                                content: i,
                                buttons: [{
                                    key: "ok",
                                    text: "确定",
                                    autoClose: !0,
                                    onClick: o
                                }]
                            };
                        e.show(a)
                    }
                },
                g = function() {
                    a = n.getShoppingCart(), s = n.getAddrMgr(), a.on("shoppingListChange", l), a.delegateOperate(r.find(".list-shopping-ul")), a.bindBarUi(r.find(".pub-cart"), "结算"), d = new i({
                        containerNode: r.find(".select-time-day"),
                        selectName: "dateid",
                        dataParser: function(t, i) {
                            return {
                                value: t,
                                name: i
                            }
                        }
                    }), c = new i({
                        containerNode: r.find(".select-time-hour"),
                        selectName: "datestr"
                    }), c.setParent(d, function(t) {
                        var i = u.date[t.value];
                        this.setData(i)
                    }), s.on("addrChange", p), s.on("userAddrDecided", h), s.on("addrChangeError", function(t) {
                        f(t.errmsg)
                    })
                },
                m = function() {
                    n.getPathMgr().fromTo(r.key), l(), h()
                },
                v = function() {},
                b = function() {
                    n.selectAddress("cart"), t.clickLog("cart_selectAddr")
                },
                y = function() {
                    var i = n.getAddrMgr(),
                        o = i.getLastAddr();
                    if (i.isGpsAddr() || !o) return e.alert("请补充您的收货信息~"), void 0;
                    var s = {
                        idformat: a.getIdformat(),
                        addrId: o.id,
                        dateid: d.getValue(),
                        datestr: c.getValue(),
                        dateidName: d.getName(),
                        datestrName: c.getName()
                    };
                    r.showLoading("验证中"), t.ajaxPost("/submit/checkOrder", s, function(t) {
                        if (r.hideLoading(), 0 == t.errno) r.changeView("confirm", t.data, $.extend({
                            dateid: d.getValue(),
                            datestr: c.getValue(),
                            dateidName: d.getName(),
                            datestrName: c.getName()
                        }, s));
                        else if (6005 == t.errno) {
                            var i = t.data.lack_goods || t.data.unexist_ids;
                            if (i && i.length) {
                                for (var n = 0, o = i.length; o > n; n++) a.deleteProduct(i[n], !0);
                                e.alert("购物车中有商品不在此配送区<br/>已帮您搬出购物车~")
                            } else e.alert(t.errmsg)
                        } else e.alert(t.errmsg)
                    })
                };
            return {
                init: g,
                onenter: m,
                onleave: v,
                back: function() {
                    return "menu"
                },
                selectAddr: b,
                cartOk: y
            }
        }
    }), /*!File[phone/index/view_addrlist.js]*/
    define("phone/index/view_addrlist", ["common/Dialog", "lib/Loading", "common/LastOperation", "phone/index/main"], function(t, i, e, n) {
        var o = {
            addr: '<li class="addr-item">\n<div class="addr-info tap-action" data-tap="select|#{id}">\n#{name}<span class="ui-float-right">#{phone}</span>\n<div class="ui-ellipsis">\n#{getDistrictName}#{address}\n</div>\n\n</div>\n<div class="addr-del addr-btn tap-action" data-tap="del|#{id}">删除</div>\n<div class="addr-edit addr-btn tap-action" data-tap="edit|#{id}">编辑</div>\n</li>'
        };
        return function(r) {
            var a, s, d, c, u = !1,
                l = function() {
                    u && (r.find(".addr-item").removeClass("showdel"), u = !1)
                },
                p = function() {
                    s = n.getAddrMgr(), s.on("addrListChange", function() {
                        h()
                    }).on("addrListAsyncInitd", function() {
                        m(), h()
                    }), r.find(".list-addr-content").delegate(".addr-item", "swipeLeft", function() {
                        l(), $(this).addClass("showdel"), u = !0
                    })
                },
                h = function() {
                    s.getAddrList().length > 0 ? r.find(".list-addr-title").show() : r.find(".list-addr-title").hide()
                },
                f = function(t) {
                    var i = e.getAddr();
                    i && i.id == t && e.clearAddr()
                },
                g = function() {
                    if (s.isGpsAddr() || s.isGPSErr()) return d = !1, void 0;
                    var t = s.getLastAddr().id;
                    if (t) {
                        var i = r.find(".addr-info");
                        $.each(i, function() {
                            var i = $(this).attr("data-tap").split("|")[1];
                            return t == i ? (d = i, $(this).addClass("showbg"), !1) : void 0
                        })
                    }
                },
                m = function() {
                    var t = [];
                    $.each(s.getAddrList(), function(i, e) {
                        t.push($.formatString(o.addr, e))
                    }), r.find(".list-addr-content").html(t.join("")), r.refreshIscroll("addrlist", !0), g()
                },
                v = function() {
                    m()
                },
                b = function() {
                    "menu" != n.getPathMgr().fromTo() ? r.find(".gps-addr").hide() : r.find(".gps-addr").show()
                },
                y = function(t) {
                    i.hide(), a = t, b(), m(), h()
                },
                w = function() {
                    r.changeView("menu", r.key, "forcegps")
                },
                C = function(t) {
                    r.changeView("addredit", t, a)
                },
                _ = function(t) {
                    return d = t, u && l(), "mine" == a ? (r.changeView("addredit", t, a), void 0) : (s.setLastAddrId(t), a ? r.changeView(a) : r.viewBack(), void 0)
                },
                x = function(i) {
                    if (i == d) {
                        var e = {
                            title: !1,
                            content: "不能删除当前正在使用的配送地址哦~",
                            buttons: [{
                                key: "ok",
                                text: "确定",
                                autoClose: !0,
                                onClick: n
                            }]
                        };
                        return t.show(e), void 0
                    }
                    var n = function() {
                            return c = i, s.delAddr(i, v), h(), f(i), !1
                        },
                        o = function() {
                            return !1
                        },
                        e = {
                            title: !1,
                            content: "确认删除该地址？",
                            buttons: [{
                                key: "ok",
                                text: "确定",
                                autoClose: !0,
                                onClick: n
                            }, {
                                key: "cancel",
                                text: "取消",
                                autoClose: !0,
                                onClick: o
                            }]
                        };
                    t.show(e)
                };
            return {
                init: p,
                onenter: y,
                back: function() {
                    return d && !s.isValidAddr() && s.setLastAddrId(d), a || "cart"
                },
                gps: w,
                edit: C,
                select: _,
                del: x,
                hideDel: l
            }
        }
    }), /*!File[phone/index/view_addredit.js]*/
    define("phone/index/view_addredit", ["lib/base", "lib/Loading", "lib/RelSelect", "common/Dialog", "common/AreaInfo", "phone/index/main"], function(t, i, e, n, o, r) {
        var a = {
            lis: '<li>联系人<span class="ui-hidden">中</span>：\n<input class="input addr-input-name" name="name" type="text" size="10" maxlength="10" value="#{name}" placeholder="收货人姓名"/>\n<span style="display:#{weixinAddress}" class="addr-weixin-address ui-float-right"></span>\n</li>\n<li>手机号<span class="ui-hidden">中</span>：\n<input id="autocomplete-phone" class="input addr-input-phone" name="phone" required type="tel" maxlength="11" value="#{phone}" placeholder="收货人手机号" autocomplete="on" /><a class="close"></a>\n</li>\n<li class="ui-nowrap addr-city-address">地址<span class="ui-hidden">中中</span>：\n<span class="addr-city">\n</span>\n<br/>\n<span class="addr-address">\n<input class="input addr-input-address" name="address" type="text" value="#{address}" placeholder="详细收货地址"></input>\n<br/>\n<text class="hint"></text>\n</li>\n',
            defaultHint: "地址填写请尽量详细，如**楼**室",
            addrLimitHint: "<span>地址不少于5个字</span>",
            option: '<option value="#{id}" #{selected}>#{name}</option>'
        };
        return function(s) {
            var d, c, u, l, p, h, f, g, m = null,
                v = null,
                b = r.getUser(),
                y = !1,
                w = function() {
                    v = r.getAddrMgr(), v.on("gpsParsed", function(t) {
                        u = t.city
                    }), v.on("addrError", function() {}), s.find("form").on("submit", P), s.find(".header-right").on($.tapClick, function() {
                        var t = m ? m.id : !1;
                        if (t && (v.isGpsAddr() || t != v.getLastAddr().id)) {
                            var i = function() {
                                    return r.getAddrMgr().delAddr(t, function(t) {
                                        t ? n.alert("删除成功", function() {
                                            s.viewBack()
                                        }) : n.alert("删除失败")
                                    }), !1
                                },
                                e = function() {
                                    return !1
                                },
                                o = {
                                    title: !1,
                                    content: "确认删除该地址？",
                                    buttons: [{
                                        key: "ok",
                                        text: "确定",
                                        autoClose: !0,
                                        onClick: i
                                    }, {
                                        key: "cancel",
                                        text: "取消",
                                        autoClose: !0,
                                        onClick: e
                                    }]
                                };
                            n.show(o)
                        } else {
                            var o = {
                                title: !1,
                                content: "不能删除当前正在使用的配送地址哦~",
                                buttons: [{
                                    key: "ok",
                                    text: "确定",
                                    autoClose: !0,
                                    onClick: i
                                }]
                            };
                            n.show(o)
                        }
                    }), s.delegate(".addr-weixin-address", $.tapClick, function() {
                        window.WeixinJSBridge.invoke("editAddress", $.extend({
                            scope: "jsapi_address"
                        }, SYS_CONF.sns.signedParam), function(t) {
                            "edit_address:ok" == t.err_msg ? l.isDataHasName(t.addressCitySecondStageName) ? (n.tip("地址导入成功"), s.find(".addr-input-name").val(t.userName), s.find(".addr-input-phone").val(t.telNumber), s.find(".addr-input-address").val(t.addressDetailInfo), l.setName(t.addressCitySecondStageName), setTimeout(function() {
                                gDistrictSelect.setName(t.addressCountiesThirdStageName)
                            }, 100)) : n.alert("地址导入失败<br/>" + t.addressCitySecondStageName + "暂时不在鲜蜂侠的配送范围哦~") : n.alert("地址导入失败:" + t.err_msg)
                        })
                    })
                },
                C = function() {
                    s.find(".header-right").css("visibility", "visible"), g && g.keepon(!1), s.find(".clear-address").removeClass("clear-address-show"), s.find(".addr-input-address-suggestion").blur();
                    var t = s.find(".addr-input-address-suggestion").val();
                    s.find(".addr-input-address").val(t), s.find(".suggestion").animate({
                        top: $(window).height()
                    }, 200, function() {
                        $(this).css("display", "none"), $(this).css("opacity", "0"), s.refreshIscroll("content", !0)
                    }), M()
                },
                _ = function() {
                    s.find(".header-right").css("visibility", "hidden"), g && g.keepon(!0), s.find(".search-suggestion-dropdown").css("height", $(window).height() - 90), s.find(".suggestion").css("display", "inline"), s.find(".suggestion").animate({
                        top: 40,
                        opacity: 1
                    }, 200, function() {
                        setTimeout(function() {
                            s.find(".addr-input-address-suggestion").focus()
                        }, 500)
                    });
                    var t = s.find(".addr-input-address").val();
                    s.find(".addr-input-address-suggestion").val(t);
                    var i = L(),
                        e = t ? i + t : t;
                    g && g.fetchBefore(e, !1), k()
                },
                x = function() {
                    var t = A(),
                        i = "";
                    return (!t.cityId || t.cityId < 0) && (i = "请选择城市"), i ? (n.alert(i), !1) : (_(), void 0)
                },
                S = function() {
                    s.find(".addr-input-address-suggestion").val(""), s.find(".addr-input-address-suggestion").focus(), g && g.fetchBefore("", !1), k()
                },
                k = function() {
                    s.find(".addr-input-address-suggestion").val().length > 0 ? s.find(".clear-address").addClass("clear-address-show") : s.find(".clear-address").removeClass("clear-address-show")
                },
                I = function(t, e) {
                    i.hide();
                    var o = A();
                    if ($.each(o, function(i, e) {
                            t[i] = e
                        }), e) return s.changeView("addrmap", t, d), !1;
                    var r = function() {
                            s.changeView("addrmap", t, d)
                        },
                        a = function() {
                            return !0
                        },
                        c = {
                            title: !1,
                            content: "无法定位到该地址坐标<br/>请拖动地图定位",
                            buttons: [{
                                key: "cancel",
                                text: "返回修改地址",
                                autoClose: !0,
                                onClick: a
                            }, {
                                key: "ok",
                                text: "确定",
                                autoClose: !0,
                                onClick: r
                            }]
                        };
                    return n.show(c), !1
                },
                P = function() {
                    s.blurInput();
                    var e = $(this).serializeForm(),
                        o = "";
                    if (e.name ? e.phone ? e.phone.match(/^1\d{10}$/) ? !e.cityId || e.cityId < 0 ? o = "请选择城市" : e.address.length < 5 && (o = "请填写详细收货地址，至少5个字") : o = "请正确填写手机号" : o = "请填写手机号" : o = "请填写联系人姓名", o) return n.alert(o), !1;
                    var r = L(),
                        a = 0;
                    e.cityName = r, e.districtId = a, i.show("检查中"), m.cityName = r, m.cityId = e.cityId, m.districtId = a, m.address = e.address, (e.address != p || e.cityId != h) && (y = !0), f && y && (m.lng = !1, m.lat = !1), delete m.backView;
                    var d = {};
                    return e.address == p && e.cityId == h && m.lng ? ($.extend(d, m), I(d, !0), !1) : (m && m.id ? t.getPlaceAddress(r, e.address, function(t) {
                        if (t && t[0] && t[0].location) {
                            var i = t[0];
                            m.lng = i.location.lng, m.lat = i.location.lat, $.extend(d, m), I(d, !0)
                        } else $.extend(d, m), d.lng = !1, d.lat = !1, I(d, !1)
                    }) : t.getPlaceAddress(r, e.address, function(t) {
                        if ($.extend(d, e), d.cityName = r, d.districtId = a, t && t[0] && t[0].location) {
                            var i = t[0];
                            d.lng = i.location.lng, d.lat = i.location.lat, I(d, !0)
                        } else d.lng = !1, d.lat = !1, I(d, !1)
                    }), !1)
                },
                A = function() {
                    return s.find("form").serializeForm()
                },
                L = function() {
                    var t = A(),
                        i = '.addr-city option[value="' + t.cityId + '"]';
                    return s.find(i).text()
                },
                O = function() {
                    return s.find(".addr-input-address").val().length >= 5
                },
                M = function() {
                    O() ? s.find(".hint").html($.formatString(a.defaultHint, "")) : s.find(".hint").html($.formatString(a.addrLimitHint, ""))
                },
                N = function() {
                    $(window).width() <= 320 && (s.find(".ui-hidden").css("margin-left", -20), s.find(".addr-address").css("margin-left", -20), s.find(".hint").css("margin-left", 60))
                },
                T = function() {
                    C()
                },
                j = function(t, i) {
                    "cart" == t || "mine" == t ? d = t : ("cart" == i || "mine" == i) && (d = i), $.isObject(t) ? (m = t, s.find(".edit-ul").html($.formatString(a.lis, m || {}, {
                        weixinAddress: $.isWeixin && !m ? "inline" : "none",
                        phone: b.getRawPhone()
                    }))) : (m = t ? v.getAddrById(t) : v.getTempAddr(), s.find(".edit-ul").html($.formatString(a.lis, m || {}, {
                        weixinAddress: $.isWeixin && !m ? "inline" : "none",
                        phone: b.getRawPhone()
                    }))), m = m ? m.toObject() : m, m.lng = m.lng || m.longitude, m.lat = m.lat || m.latitude, m.longitude = !1, m.latitude = !1, p = m.address, h = m.cityId, f = "addrmap" == m.backView ? !0 : !1, y = f ? y : !1, f || (c = d ? d : i ? i : t), l = new e({
                        selectName: "cityId",
                        containerNode: s.find(".addr-city"),
                        dataParser: function(t, i) {
                            return {
                                name: i.name,
                                value: i.id
                            }
                        }
                    });
                    var n = [];
                    if ($.extend(!0, n, o), !m || !m.cityId) {
                        var r = {
                            id: -1,
                            name: "请选择城市"
                        };
                        n.unshift(r)
                    }
                    l.setData(n, m ? m.cityId : !1), l.on("valueChange", function() {
                        u = L(), g && g.changeRegion(u)
                    }), s.find(".header-right").css("display", m && m.id ? "" : "none"), s.find(".hint").html($.formatString(a.defaultHint, "")), s.find(".close").on($.tapClick, function() {
                        s.find(".addr-input-phone").val("")
                    }), s.find(".addr-input-address").on("focusout", function() {
                        M()
                    }), s.refreshIscroll("content", !0), g = s.find("#search-suggestion").suggestion({
                        regionBias: L(),
                        minimumCharacters: 1,
                        ak: ["s6A5ulX9XdvloY24jnFGMYyX", "mCD71DkphDwBWVf9NyhbUWHA", "apGrBMwX012dHDe4bQYmxMHO", "lAAksgwrRrlRuUFYDKiCBYFG", "aS8SFP43Uk3UE1rEDICAlglI", "h07HxzO0Va36acRr7GbwSoHl", "4ZlE11pRogoGuHVldsFxSYMd"],
                        onSuggested: function() {
                            s.refreshIscroll("address", !0)
                        }
                    }), s.find(".addr-input-address").on($.tapClick, x), s.find(".addr-input-address-suggestion").on("input", k), s.find(".clear-address").on($.tapClick, S), s.find(".return-whole-address").on($.tapClick, C), N()
                };
            return {
                init: w,
                onenter: j,
                onleave: T,
                back: function() {
                    return (r.getAddrMgr().getAddrCount() ? "addrlist" : c) + (c ? "|" + c : "")
                },
                fixIOS70Input: function(t) {
                    "name" != t.name && s.scrollToElement("content", t, 200)
                }
            }
        }
    }), /*!File[phone/index/view_addrmap.js]*/
    define("phone/index/view_addrmap", ["lib/base", "lib/Loading", "common/AreaInfo", "phone/index/main"], function(t, i, e, n) {
        var o = {
            mapHint: "#{addr}",
            myControl: '<div unselectable="on" class="BMap_ZoomCtrl anchorBR"><div class="zoom_btn blue_off zoom_btn_in"><div class="zin"></div></div><div class="zoom_btn blue_off zoom_btn_out"><div class="zout"></div></div></div>',
            lis: '<li class="list-addr-li" lng="#{lng}" lat="#{lat}"><div class="title">#{title}</div><div class="addr">#{addr}</div></li>'
        };
        return function(r) {
            var a, s, d, c, u = null,
                l = null,
                p = 19,
                h = !1,
                f = !1,
                g = !1,
                m = !1,
                v = !1,
                b = null,
                y = function(t) {
                    var i = t.length > 0 && t[0].location;
                    i && A(t)
                },
                w = function() {
                    l = n.getAddrMgr(), l.on("addrError", function() {
                        r.isCurrentView() && i.hide()
                    }), a = n.getPathMgr(), r.find(".submit").on($.tapClick, function() {
                        i.show("确认中"), u.ismove = h ? 1 : 0, u.isclick = f ? 1 : 0;
                        var t = a.inPath(r.key),
                            e = t ? a.fromTo() : s;
                        a.clear(), u && u.id ? l.updateAddr(u.id, u, function() {
                            l.setLastAddrId(u.id), i.hide(), P(e)
                        }) : l.addNewAddr(u, function(t) {
                            l.setLastAddrId(t.id), i.hide(), P(e)
                        }), setTimeout(function() {})
                    })
                },
                C = function(t) {
                    function i() {
                        this.defaultAnchor = BMAP_ANCHOR_BOTTOM_RIGHT, this.defaultOffset = new BMap.Size(20, 40)
                    }
                    var e = "l-map";
                    c = new BMap.Map(e, {
                        enableMapClick: !1,
                        minZoom: 1,
                        maxZoom: p
                    }), c.disablePinchToZoom(), c.disableScrollWheelZoom(), c.disableDoubleClickZoom(), i.prototype = new BMap.Control, i.prototype.initialize = function(t) {
                        var i = $(o.myControl);
                        return i.find(".zoom_btn_in").addClass("blue_disable"), i.find(".zoom_btn_in").on($.tapClick, function() {
                            var i = t.getZoom() + 1;
                            S(i), t.zoomTo(i)
                        }), i.find(".zoom_btn_out").on($.tapClick, function() {
                            var i = t.getZoom() - 1;
                            S(i), t.zoomTo(i)
                        }), t.getContainer().appendChild(i[0]), i[0]
                    };
                    var n = new i;
                    c.addControl(n), c.addEventListener("touchmove", function() {
                        h = !0
                    }), c.addEventListener("moveend", function() {
                        return m || g ? (m = !1, g = !1, void 0) : (v ? v = !1 : (d = c.getCenter(), u.lng = d.lng, u.lat = d.lat), void 0)
                    }), c.addEventListener("zoomend", function() {
                        m = !0, c.panTo(d);
                        var t = c.getCenter(),
                            i = c.pointToPixel(t);
                        M(i)
                    }), c.addEventListener("resize", function() {
                        c.panTo(d);
                        var t = c.getCenter(),
                            i = c.pointToPixel(t);
                        M(i)
                    }), t()
                };
            window.initializeMap = function() {
                C(function() {
                    setTimeout(function() {
                        _(), delete window.initializeMap
                    }, 500)
                })
            };
            var _ = function() {
                    var i = u.cityName,
                        e = u.address;
                    if (r.find("#addrmap-geo-hint .addr").html($.formatString(o.mapHint, {
                            addr: u.address
                        })), u.lng) {
                        var n = new BMap.Point(u.lng, u.lat);
                        L(i, e, n)
                    } else t.getPlaceAddress(i, e, function(n) {
                        var o = n.length > 0 && n[0].location,
                            r = l.getGPSAddr(),
                            a = !1;
                        if (!o) {
                            if (a = !0, r && r.longitude) return o = new BMap.Point(r.longitude, r.latitude), t.getAddressInfoByPoint(r.latitude, r.longitude, function(t) {
                                if (t && t.city) {
                                    var r = t.city;
                                    i == r ? o = o : (o = O(i), o || (o = new BMap.Point(116.404, 39.915)))
                                } else o = O(i), o || (o = new BMap.Point(116.404, 39.915));
                                e = a ? e : n.address, L(i, e, o)
                            }), void 0;
                            o = O(i), o || (o = new BMap.Point(116.404, 39.915))
                        }
                        e = a ? e : n.address, L(i, e, o)
                    })
                },
                x = function() {
                    if (c) _();
                    else {
                        var t = document.createElement("script");
                        t.src = "http://api.map.baidu.com/api?v=2.0&ak=epx2GlGrgjgEizwW8iYsHwQZ&callback=initializeMap", document.body.appendChild(t)
                    }
                },
                S = function(t) {
                    2 >= t ? (r.find(".zoom_btn_out").addClass("blue_disable"), r.find(".zoom_btn_in").removeClass("blue_disable")) : t >= p ? (r.find(".zoom_btn_in").addClass("blue_disable"), r.find(".zoom_btn_out").removeClass("blue_disable")) : (r.find(".zoom_btn_in").removeClass("blue_disable"), r.find(".zoom_btn_out").removeClass("blue_disable"))
                },
                k = function(t) {
                    var i = t.length > 0 && t[0].location;
                    i ? r.find("#l-map").css("height", "70%") : r.find("#l-map").css("height", "100%")
                },
                I = function() {
                    f = !0, v = !0;
                    var t = $(this).attr("lng"),
                        i = $(this).attr("lat");
                    d = new BMap.Point(t, i), u.lng = d.lng, u.lat = d.lat, c.panTo(new BMap.Point(t, i))
                },
                P = function(t, i, e, n) {
                    "mine" == t && (i = t, t = "addrlist"), r.changeView(t, i, e, n)
                },
                A = function(t) {
                    var i = [];
                    $.each(t, function(t, e) {
                        var n = {
                            title: e.name,
                            addr: e.address,
                            lng: e.location.lng,
                            lat: e.location.lat
                        };
                        i.push($.formatString(o.lis, n))
                    }), r.find(".list-addr").html(i.join("")), r.find(".list-addr-li").off($.tapClick, I), r.find(".list-addr-li").on($.tapClick, I), r.refreshIscroll("poilist", !0)
                },
                L = function(i, e, n) {
                    S(p), $.extend(!0, d, n), t.getPlaceAddress(i, e, function(t) {
                        k(t), y(t), g = !0, c.centerAndZoom(n, p)
                    })
                },
                O = function(t) {
                    var i = null,
                        n = !1;
                    return $.each(e, function(e, o) {
                        o.name != t || n || (i = new BMap.Point(o.lng, o.lat), n = !0)
                    }), i
                },
                M = function(t) {
                    if (t.y > 0) {
                        var i = t.y - 149;
                        r.find("#l-map-geo").animate({
                            top: i
                        }, 100)
                    }
                },
                N = function(t, i) {
                    s = i, h = !1, f = !1, d = {}, u = {}, b = {}, $.extend(u, t), $.extend(b, t), x(), n.showMaskGuide("addrmapGuide")
                };
            return {
                init: w,
                onenter: N,
                back: function() {
                    var t = new BaseAddrManager.AddrObj(b);
                    return t.backView = "addrmap", {
                        pageView: "addredit",
                        args: [t]
                    }
                }
            }
        }
    }), /*!File[phone/index/view_confirm.js]*/
    define("phone/index/view_confirm", ["lib/base", "common/Pay", "common/Dialog", "common/LastOperation", "phone/index/main", "phone/index/CouponMgr"], function(t, i, e, n, o, r) {
        var a = {
            frame: '<div class="block block-addr">\n#{name} &nbsp; #{phone}\n<div class="ui-ellipsis">#{address}</div>\n<hr />\n<span class="ui-float-right">#{time}</span>\n收货时间\n</div>\n<ul class="block confirm-product-list"></ul>\n<div class="prop block">\n<p class="prop-use icon-gift">\n使用优惠券\n<span class="ui-float-right">▼</span>\n</p>\n<div class="prop-content"></div>\n</div>\n<div class="block confirm-amount">\n</div>\n<div class="comment block">\n备注：\n<input class="input-postscript inputbox" size="30" type="text" name="postscript" placeholder="让鲜蜂侠带点什么呢？" value="#{postscript}" />\n</div>\n<ul class="pay-list block">\n#{payList}\n</ul>\n<div class="bigbtn bigbtn-one">\n确定下单\n</div>\n<br />\n<br />',
            amount: '商品总计：￥#{payable_amount}<br/>\n优惠金额：<#{promotionsTag}>￥#{promotionsPrice}</#{promotionsTag}><br/>\n<span class="ui-float-right">需支付：<strong>￥#{order_amount}</strong></span>\n运<span class="ui-hidden">中中</span>费：￥#{real_freight}',
            pay: '<li class="pay-item tap-action #{defaultPay} pay-item-#{key}" data-tap="selectPay|#{key}">\n<span class="pay-icon pay-icon-#{key}"></span>\n#{payTitle}\n#{msg}\n</li>'
        };
        return function(s) {
            var d, c, u = !1,
                l = null,
                p = function() {
                    s.delegate(".bigbtn-one", $.tapClick, function() {
                        if (!u) return e.alert("请选择支付方式"), void 0;
                        var r = n.getGPSInfo(),
                            a = o.getAddrMgr(),
                            c = a.getLastAddr(),
                            p = a.getGPSAddr(),
                            h = a.getShopData().shop,
                            f = h && h.timestamp || +new Date;
                        if (c) var g = a.isGpsAddr() ? "" : c.address,
                            m = a.isGpsAddr() ? p.longitude : c.lng || c.longitude,
                            v = a.isGpsAddr() ? p.latitude : c.lat || c.latitude;
                        else var g = a.isGpsAddr() ? "" : "",
                            m = a.isGpsAddr() ? p.longitude : "",
                            v = a.isGpsAddr() ? p.latitude : "";
                        var b = i.get(u),
                            y = {
                                idformat: d.idformat,
                                addrId: d.addrId,
                                propcode: l.getPropcode() || "",
                                postscript: s.find(".input-postscript").val(),
                                paytype: b.getPayType(),
                                display_dealer: h ? h.zchtid : "",
                                display_addr: g,
                                display_gps: m && v ? m + "," + v : "",
                                display_time: f,
                                location: r && r.location ? r.location : "",
                                location_time: r ? r.location_time : ""
                            };
                        $.extend(y, d), s.showLoading("提交订单中"), t.ajaxPost("/submit/makeOrder", y, function(t) {
                            0 == t.errno ? (o.getShoppingCart().reset(), b.getPayType() == i.PAYTYPE_ONLINE && $.setCookie("orderpay", "1", {
                                path: "/"
                            }), location.href = "/show/order?orderId=" + t.data.orderid + "&orderNo=" + t.data.orderno) : (s.hideLoading(), e.alert(t.errmsg))
                        })
                    })
                },
                h = function(t, e) {
                    var p = o.getAddrMgr().getLastAddr();
                    if (p || (p = n.getAddr()), t && e) {
                        d = e, c = t;
                        var h = function(i) {
                                if (t.pay && t.pay.length)
                                    for (var e = 0, n = t.pay.length; n > e; e++) {
                                        var o = t.pay[e];
                                        if (o.msg && o.type == i) return '<span class="pay-msg">' + o.msg + "</span>"
                                    }
                            },
                            g = function(i) {
                                if (t.pay && t.pay.length)
                                    for (var e = 0, n = t.pay.length; n > e; e++) {
                                        var o = t.pay[e];
                                        if (o.title && o.type == i) return o.title
                                    }
                            };
                        s.find(".content").html($.formatString(a.frame, {
                            payList: function() {
                                var t = [];
                                return $.each(i.getSupportPays(), function(i, e) {
                                    0 == i && (u = e.key), t.push($.formatString(a.pay, e, {
                                        idx: i,
                                        defaultPay: 0 == i ? "icon-ok" : "",
                                        msg: h(e.typeid),
                                        payTitle: g(e.typeid) || e.name
                                    }))
                                }), t.join("<hr/>")
                            },
                            time: (0 == d.dateid ? "" : d.dateidName) + "&nbsp;" + d.datestrName
                        }, p)), f(t), l = new r(d), l.bindUseUi(s.find(".prop-use"), s.find(".prop-content")), l.on("couponVerified", function(t) {
                            t.success && f(t.data)
                        }).on("uiChange", function() {
                            setTimeout(function() {
                                s.refreshIscroll()
                            }, 600)
                        }).on("cancelPropcode", function() {
                            f(c)
                        })
                    } else s.viewBack()
                },
                f = function(t) {
                    var i = [];
                    $.each(t.goods, function(t, e) {
                        e.shoppingCount = e.shoppingCount || e.buy_num || 0, i.push(o.formatCartProduct(e, !0))
                    }), s.find(".confirm-product-list").html(i.join("")), s.find(".confirm-amount").html($.formatString(a.amount, t, {
                        promotionsPrice: parseFloat(t.promotions),
                        promotionsTag: parseInt(t.promotions) ? "strong" : "span"
                    })), s.refreshIscroll()
                },
                g = function() {
                    l && l.destory()
                },
                m = function(t) {
                    u = t, s.find(".pay-item").removeClass("icon-ok").filter(".pay-item-" + t).addClass("icon-ok")
                };
            return {
                init: p,
                onenter: h,
                onleave: g,
                back: function() {
                    return "cart"
                },
                selectPay: m,
                fixIOS70Input: function(t) {
                    s.scrollToElement("content", t, 100)
                }
            }
        }
    }), /*!File[phone/index/view_verify.js]*/
    define("phone/index/view_verify", ["phone/index/main"], function(t) {
        return function(i) {
            var e, n, o, r = function() {
                    var n = t.getUser();
                    n.bindLogin(i.find(".main"), function() {
                        e ? e() : i.viewBack()
                    }), i.find(".login-input").on("focus", function() {
                        clearTimeout(o), i.find(".pic").addClass("pic-hide")
                    }).on("blur", function() {
                        o = setTimeout(function() {
                            i.find(".pic").removeClass("pic-hide")
                        }, 2e3)
                    })
                },
                a = function(t, o) {
                    e = t, n = o, i.find(".login-voice-wrap").html('收不到短信？使用<span class="ui-bluelink login-voice-link">语音验证码</span>')
                };
            return {
                init: r,
                onenter: a,
                back: function() {
                    return n
                },
                fixIOS70Input: function() {
                    i.find(".pic").addClass("pic-hide")
                }
            }
        }
    }), /*!File[phone/index/view_mine.js]*/
    define("phone/index/view_mine", ["lib/base", "common/User", "common/Dialog", "phone/index/main"], function(t, i, e, n) {
        return function(t) {
            var o = function() {
                    n.getPathMgr().fromTo(t.key), t.refreshIscroll(), t.find(".me-phone").html(i.getInstance().getRawPhone())
                },
                r = function(n) {
                    "order" == n ? window.location.href = "/show/orderlist?back=mine" : "coupon" == n ? t.changeView("coupon") : "address" == n ? t.changeView("addrlist", "mine") : "logout" == n && e.confirm("您确定要退出登录吗？", function() {
                        i.getInstance().logout(function() {
                            t.changeView("menu")
                        })
                    })
                };
            return {
                back: function() {
                    var t = n.getAddrMgr();
                    if (!t.isValidAddr()) {
                        var i = t.getLastAddr();
                        i && i.id && t.setLastAddrId(i.id)
                    }
                    return "menu"
                },
                onenter: o,
                itemClick: r
            }
        }
    }), /*!File[phone/index/view_coupon.js]*/
    define("phone/index/view_coupon", ["common/Dialog"], function(t) {
        return function(i) {
            var e = {
                    couponItem: '<li class="coupon-item unexpand coupon-item-status-#{status}">\n<div class="coupon-item-value coupon-item-bg">#{valueStr}</div>\n<div class="coupon-item-detail coupon-item-bg">\n#{name}<br/>优惠码：#{card_pwd}<br/>#{description}\n</div>\n<div class="coupon-item-duration coupon-item-bg">\n#{start_time}至#{end_time}有效\n</div>\n<div class="coupon-item-radius coupon-item-radius-top"></div>\n<div class="coupon-item-radius coupon-item-radius-bottom"></div>\n#{statusCircle}\n</li>'
                },
                n = [],
                o = function(t) {
                    return t.status = t.status || "0", $.formatString(e.couponItem, t, {
                        statusCircle: function() {
                            var i;
                            if (1 == t.status) i = "已使用";
                            else {
                                if (2 != t.status) return;
                                i = "已过期"
                            }
                            return '<div class="coupon-item-status">' + i + "</div>"
                        },
                        valueStr: function() {
                            var i = parseFloat(t.value);
                            return isNaN(i) ? t.value : i + "元"
                        }
                    })
                },
                r = function() {
                    i.delegate("form", "submit", function() {
                        var e = i.find(".inputwrap-input").val();
                        if (e) return base.ajaxPost("/submit/couponBind", {
                            propcode: e
                        }, function(e) {
                            if (0 == e.errno) {
                                var n;
                                for (n in e.data) break;
                                i.find(".inputwrap-input").val(""), i.refreshIscroll(!0), i.find(".coupon-list").prepend(o(e.data[n])), s()
                            } else t.alert(e.errmsg)
                        }), !1
                    })
                },
                a = function() {
                    i.find(".coupon-list").html(""), i.showLoading("加载中"), base.ajaxPost("/submit/couponMy", {}, function(t) {
                        if (0 == t.errno) {
                            n = t.data, i.hideLoading();
                            var e = [];
                            for (var r in n) {
                                var a = n[r];
                                e.push(o(a))
                            }
                            i.find(".coupon-list").html(e.join("")), s()
                        }
                    })
                },
                s = function() {
                    setTimeout(function() {
                        i.find(".coupon-item").removeClass("unexpand"), setTimeout(function() {
                            i.refreshIscroll()
                        }, 500)
                    }, 100)
                };
            return {
                init: r,
                back: function() {
                    return "mine"
                },
                onenter: a
            }
        }
    }), /*!File[phone/index/overlay_cart.js]*/
    define("phone/index/overlay_cart", ["lib/base", "phone/common/PageView", "phone/index/main"], function(t, i, e) {
        return function(n) {
            var o = {
                    item: '<li class="shopping-item">\n<div class="product-name product-absolute ui-ellipsis">#{name}</div>\n<div class="product-else product-absolute">\n<div class="product-price">￥#{price}</div>\n<div class="product-del shopping-action" data-action="#{id}:-">-</div>\n<div class="product-count">#{shoppingCount}</div>\n<div class="product-add shopping-action" data-action="#{id}:+">+</div>\n</div>\n</li>'
                },
                r = null,
                a = function() {
                    var t = [],
                        i = r.getShoppingList();
                    $.each(i, function(i, e) {
                        t.push($.formatString(o.item, e))
                    }), n.find(".list-shopping-ul").html(t.join("")), r.bindBarUi(n.find(".pub-cart")), n.refreshIscroll(), n.isShowing() && 0 == r.getCount() && n.hide()
                },
                s = function() {
                    r = e.getShoppingCart().on("shoppingListChange", a).delegateOperate(n.find(".list-shopping-ul")), n.find(".pub-cart").delegate(".expand", $.tapClick, function() {
                        n.hide()
                    })
                },
                d = function() {
                    n.find(".cart-detail").animate({
                        translate3d: "0,0,0"
                    }, 400, "ease-in"), n.find(".icon-cart-inner").animate({
                        translate3d: "0,-290px,0"
                    }, 400, "ease-in"), a(), n.refreshIscroll(), t.clickLog("cart_expand")
                },
                c = function() {
                    n.find(".icon-cart-inner").animate({
                        translate3d: "0,0,0"
                    }, 400, "ease-out"), n.find(".cart-detail").animate({
                        translate3d: "0,100%,0"
                    }, 400, "ease-out", function() {
                        n.hideLayer()
                    }), n.goBack()
                },
                u = function() {
                    n.hide(), e.needVerified(function() {
                        i.changeView("cart")
                    })
                };
            return {
                cartOk: u,
                show: d,
                hide: c,
                init: s
            }
        }
    }), /*!File[phone/index/overlay_detail.js]*/
    define("phone/index/overlay_detail", ["common/weixinUtils", "common/Share", "phone/index/main"], function(t, i, e) {
        return function(n) {
            var o, r, a = function(t, i, e) {
                    o = t, r = i;
                    var a = n.find(".content").animate({
                        translate3d: "0,0,0"
                    }, 400, "ease-in").width();
                    n.find(".detail-content").load($.formatString("/show/productDetail?id=#{id}&shopId=#{shopId}&width=#{width}&disabled=#{disabled}", {
                        id: t,
                        shopId: i,
                        width: a,
                        disabled: e
                    }), s)
                },
                s = function() {
                    n.refreshIscroll(!0), n.find("img").on("load", function() {
                        n.refreshIscroll()
                    }).each(function(t, i) {
                        var e = $(i).data("src");
                        e && (i.src = e)
                    }), c()
                },
                d = function() {
                    n.find(".content").animate({
                        translate3d: "0,100%,0"
                    }, 400, "ease-out", function() {
                        n.hideLayer()
                    }), n.goBack()
                },
                c = function() {
                    var t = e.getShoppingCart().getProductById(o),
                        i = t ? t.shoppingCount : 0;
                    n.find(".product-count").html(i)
                },
                u = function() {
                    n.find(".detail-close").on($.tapClick, function() {
                        n.hide()
                    }), n.delegate(".icon-share", $.tapClick, function() {
                        $.isWeixin && t.shareTip(!1)
                    }), e.getShoppingCart().delegateOperate(n.find(".detail-content")).on("shoppingListChange", function() {
                        n.isShowing() && c()
                    })
                },
                l = function() {
                    var t = e.getShoppingCart().getProductObjById(o);
                    return i.getProductShareObj(t, r)
                },
                p = function(t) {
                    if (!(t.y > 0)) {
                        var i = -t.y / 2;
                        n.find(".imgwrap img").css("-webkit-transform", "translateY(" + i + "px)")
                    }
                };
            return {
                show: a,
                hide: d,
                init: u,
                onScrollMove: p,
                getShareObj: l
            }
        }
    }), /*!File[phone/index/main.js]*/
    define("phone/index/main", ["lib/base", "common/ShoppingCart", "common/AddrManager", "common/Dialog", "common/LastOperation", "common/PagePathMgr", "common/UserStatus", "common/User", "common/weixinUtils", "phone/common/PageView", "phone/common/Overlay"], function(t, i, e, n, o, r, a, s, d, c, u) {
        var l, p = {
                product: '<li class="mod-shopping-item shopping-item #{disabledClass}" data-id="#{id}" data-anime="1">\n<div class="product-imgwrap">\n<img src="#{app_mimg}" alt="#{name}" width="60" height="60" />\n</div>\n<div class="product-info">\n<h6 class="product-name ui-ellipsis">#{name}</h6>\n<br />\n<p class="product-detail">\n<span class="product-price">￥#{price}</span>\n<span class="product-attribute">#{attributeStr}</span>\n</p>\n</div>\n<div class="product-operate">\n<div class="product-del shopping-action" #{opHidden} data-action="#{id}:-">-</div>\n<div class="product-count">#{shoppingCount}</div>\n<div class="product-del shopping-action" #{opHidden} data-action="#{id}:+">+</div>\n</div>\n</li>'
            },
            h = null,
            f = null,
            g = function(t) {
                var i = Bee.getMod("phone/index/view_" + t);
                c.defineView(t, i)
            },
            m = function(t) {
                var i = Bee.getMod("phone/index/overlay_" + t);
                u.defineOverlay(t, i)
            },
            v = !1,
            b = function() {
                if (!v) {
                    v = !0;
                    var i = t.safeGetProp(window.SYS_CONF, "promotion.welcomeLogo") || {},
                        e = "__bee__welcomeLogoImg";
                    i.active && !i.hadCached && (window[e] = new Image, window[e].onload = function() {
                        $.setCookie("welcomeLogoCacheKey", i.cacheKey, {
                            path: "/",
                            expires: 5184e6
                        }), delete window[e]
                    }, window[e].src = i.url)
                }
            },
            y = function() {
                i.reset(), $(window).on("load", function() {
                    setTimeout(scrollTo, 0, 0, 0)
                }), l = new r, h = new e, h.on("addrChange", function() {
                    h.isGpsAddr() || o.saveAddr(h.getLastAddr())
                }), f = s.getInstance(), f.on("statusChange", function() {
                    this.isLogin() ? setTimeout(function() {
                        h.init()
                    }, 500) : (o.clearAddr(), o.clearGPSInfo())
                }), $("#mod-guide-mask").on($.tapClick, function() {
                    $(this).css("display", "none"), t.clickLog("maskguide_hide")
                }), o.isValid() && h.loadShopCategory(new BaseAddrManager.AddrObj(o.getAddr())), g("index"), g("menu"), g("tag"), g("act"), g("cart"), g("addrlist"), g("addredit"), g("addrmap"), g("confirm"), g("verify"), g("mine"), g("coupon"), m("cart"), m("detail"), $.isWeixin && (d.init(), c.setViewChangeFn(function() {
                    var t = u.getCurOverlayObj() || c.getCurViewObj(),
                        i = t.getShareObj ? t.getShareObj() : null;
                    d.setShare(i)
                })), c.init(), h.initGPS(), $("#mod-container").delegate(".view-link", $.tapClick, function() {
                    var t = $(this).data("link"),
                        i = $(this).attr("disabled");
                    "" !== i && "true" !== i && c.changeView(t)
                }), $.stopPageScroll()
            },
            w = function(t, i) {
                return $.formatString(p.product, t, {
                    opHidden: i ? 'style="visibility:hidden"' : "",
                    attributeStr: C(t)
                })
            },
            C = function(t) {
                var i, e;
                if ((i = t.attribute) || (e = t.specifics)) {
                    var n = [];
                    return i && n.push(i), e && n.push(e), "/" + n.join("&nbsp;")
                }
                return ""
            },
            _ = function(i) {
                a.isFirst(i) && ($("#mod-guide-mask").css("display", "block"), $("#mod-guide-img")[0].className = "img-" + i, t.clickLog("maskguide_show", {
                    key: i
                }))
            },
            x = function(t) {
                return f.isLogin() ? (t && t(), void 0) : (c.changeView("verify", [t, c.getCurViewName()]), void 0)
            };
        return {
            init: y,
            needVerified: x,
            getAttrStr: C,
            checkWelcomeLogoCache: b,
            formatCartProduct: w,
            showMaskGuide: _,
            getShoppingCart: function() {
                return i
            },
            getPathMgr: function() {
                return l
            },
            getAddrMgr: function() {
                return h
            },
            getUser: function() {
                return f
            },
            selectAddress: function(t) {
                x(function() {
                    c.changeView(h.getAddrCount() ? "addrlist" : "addredit", [t])
                })
            },
            isProductRestock: function(t) {
                return parseInt(t.number) < 1 && !parseInt(t.hot_degree)
            }
        }
    }), /*!File[phone/index/boot.js]*/
    $(function() {
        Bee.boot(["phone/index/main"], function(t) {
            t.init()
        })
    });
