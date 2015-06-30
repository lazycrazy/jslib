/*!File[thirdpart/jquery-1.10.1.min.js]*/
/*! jQuery v1.10.1 | (c) 2005, 2013 jQuery Foundation, Inc. | jquery.org/license
//@ sourceMappingURL=jquery-1.10.1.min.map
*/
!function(e, t) {
    function n(e) {
        var t = e.length
          , n = lt.type(e);
        return lt.isWindow(e) ? !1 : 1 === e.nodeType && t ? !0 : "array" === n || "function" !== n && (0 === t || "number" == typeof t && t > 0 && t - 1 in e)
    }
    function i(e) {
        var t = kt[e] = {};
        return lt.each(e.match(pt) || [], function(e, n) {
            t[n] = !0
        }
        ),
        t
    }
    function r(e, n, i, r) {
        if (lt.acceptData(e)) {
            var o, a, s = lt.expando, c = e.nodeType, u = c ? lt.cache : e, l = c ? e[s] : e[s] && s;
            if (l && u[l] && (r || u[l].data) || i !== t || "string" != typeof n)
                return l || (l = c ? e[s] = tt.pop() || lt.guid++ : s),
                u[l] || (u[l] = c ? {} : {
                    toJSON: lt.noop
                }),
                ("object" == typeof n || "function" == typeof n) && (r ? u[l] = lt.extend(u[l], n) : u[l].data = lt.extend(u[l].data, n)),
                a = u[l],
                r || (a.data || (a.data = {}),
                a = a.data),
                i !== t && (a[lt.camelCase(n)] = i),
                "string" == typeof n ? (o = a[n],
                null  == o && (o = a[lt.camelCase(n)])) : o = a,
                o
        }
    }
    function o(e, t, n) {
        if (lt.acceptData(e)) {
            var i, r, o = e.nodeType, a = o ? lt.cache : e, c = o ? e[lt.expando] : lt.expando;
            if (a[c]) {
                if (t && (i = n ? a[c] : a[c].data)) {
                    lt.isArray(t) ? t = t.concat(lt.map(t, lt.camelCase)) : t in i ? t = [t] : (t = lt.camelCase(t),
                    t = t in i ? [t] : t.split(" ")),
                    r = t.length;
                    for (; r--; )
                        delete i[t[r]];
                    if (n ? !s(i) : !lt.isEmptyObject(i))
                        return
                }
                (n || (delete a[c].data,
                s(a[c]))) && (o ? lt.cleanData([e], !0) : lt.support.deleteExpando || a != a.window ? delete a[c] : a[c] = null )
            }
        }
    }
    function a(e, n, i) {
        if (i === t && 1 === e.nodeType) {
            var r = "data-" + n.replace(Tt, "-$1").toLowerCase();
            if (i = e.getAttribute(r),
            "string" == typeof i) {
                try {
                    i = "true" === i ? !0 : "false" === i ? !1 : "null" === i ? null  : +i + "" === i ? +i : St.test(i) ? lt.parseJSON(i) : i
                } catch (o) {}
                lt.data(e, n, i)
            } else
                i = t
        }
        return i
    }
    function s(e) {
        var t;
        for (t in e)
            if (("data" !== t || !lt.isEmptyObject(e[t])) && "toJSON" !== t)
                return !1;
        return !0
    }
    function c() {
        return !0
    }
    function u() {
        return !1
    }
    function l() {
        try {
            return J.activeElement
        } catch (e) {}
    }
    function d(e, t) {
        do
            e = e[t];
        while (e && 1 !== e.nodeType);return e
    }
    function p(e, t, n) {
        if (lt.isFunction(t))
            return lt.grep(e, function(e, i) {
                return !!t.call(e, i, e) !== n
            }
            );
        if (t.nodeType)
            return lt.grep(e, function(e) {
                return e === t !== n
            }
            );
        if ("string" == typeof t) {
            if (Wt.test(t))
                return lt.filter(t, e, n);
            t = lt.filter(t, e)
        }
        return lt.grep(e, function(e) {
            return lt.inArray(e, t) >= 0 !== n
        }
        )
    }
    function f(e) {
        var t = Gt.split("|")
          , n = e.createDocumentFragment();
        if (n.createElement)
            for (; t.length; )
                n.createElement(t.pop());
        return n
    }
    function h(e, t) {
        return lt.nodeName(e, "table") && lt.nodeName(1 === t.nodeType ? t : t.firstChild, "tr") ? e.getElementsByTagName("tbody")[0] || e.appendChild(e.ownerDocument.createElement("tbody")) : e
    }
    function g(e) {
        return e.type = (null  !== lt.find.attr(e, "type")) + "/" + e.type,
        e
    }
    function m(e) {
        var t = on.exec(e.type);
        return t ? e.type = t[1] : e.removeAttribute("type"),
        e
    }
    function v(e, t) {
        for (var n, i = 0; null  != (n = e[i]); i++)
            lt._data(n, "globalEval", !t || lt._data(t[i], "globalEval"))
    }
    function y(e, t) {
        if (1 === t.nodeType && lt.hasData(e)) {
            var n, i, r, o = lt._data(e), a = lt._data(t, o), s = o.events;
            if (s) {
                delete a.handle,
                a.events = {};
                for (n in s)
                    for (i = 0,
                    r = s[n].length; r > i; i++)
                        lt.event.add(t, n, s[n][i])
            }
            a.data && (a.data = lt.extend({}, a.data))
        }
    }
    function b(e, t) {
        var n, i, r;
        if (1 === t.nodeType) {
            if (n = t.nodeName.toLowerCase(),
            !lt.support.noCloneEvent && t[lt.expando]) {
                r = lt._data(t);
                for (i in r.events)
                    lt.removeEvent(t, i, r.handle);
                t.removeAttribute(lt.expando)
            }
            "script" === n && t.text !== e.text ? (g(t).text = e.text,
            m(t)) : "object" === n ? (t.parentNode && (t.outerHTML = e.outerHTML),
            lt.support.html5Clone && e.innerHTML && !lt.trim(t.innerHTML) && (t.innerHTML = e.innerHTML)) : "input" === n && tn.test(e.type) ? (t.defaultChecked = t.checked = e.checked,
            t.value !== e.value && (t.value = e.value)) : "option" === n ? t.defaultSelected = t.selected = e.defaultSelected : ("input" === n || "textarea" === n) && (t.defaultValue = e.defaultValue)
        }
    }
    function x(e, n) {
        var i, r, o = 0, a = typeof e.getElementsByTagName !== U ? e.getElementsByTagName(n || "*") : typeof e.querySelectorAll !== U ? e.querySelectorAll(n || "*") : t;
        if (!a)
            for (a = [],
            i = e.childNodes || e; null  != (r = i[o]); o++)
                !n || lt.nodeName(r, n) ? a.push(r) : lt.merge(a, x(r, n));
        return n === t || n && lt.nodeName(e, n) ? lt.merge([e], a) : a
    }
    function _(e) {
        tn.test(e.type) && (e.defaultChecked = e.checked)
    }
    function w(e, t) {
        if (t in e)
            return t;
        for (var n = t.charAt(0).toUpperCase() + t.slice(1), i = t, r = kn.length; r--; )
            if (t = kn[r] + n,
            t in e)
                return t;
        return i
    }
    function C(e, t) {
        return e = t || e,
        "none" === lt.css(e, "display") || !lt.contains(e.ownerDocument, e)
    }
    function $(e, t) {
        for (var n, i, r, o = [], a = 0, s = e.length; s > a; a++)
            i = e[a],
            i.style && (o[a] = lt._data(i, "olddisplay"),
            n = i.style.display,
            t ? (o[a] || "none" !== n || (i.style.display = ""),
            "" === i.style.display && C(i) && (o[a] = lt._data(i, "olddisplay", N(i.nodeName)))) : o[a] || (r = C(i),
            (n && "none" !== n || !r) && lt._data(i, "olddisplay", r ? n : lt.css(i, "display"))));
        for (a = 0; s > a; a++)
            i = e[a],
            i.style && (t && "none" !== i.style.display && "" !== i.style.display || (i.style.display = t ? o[a] || "" : "none"));
        return e
    }
    function k(e, t, n) {
        var i = yn.exec(t);
        return i ? Math.max(0, i[1] - (n || 0)) + (i[2] || "px") : t
    }
    function S(e, t, n, i, r) {
        for (var o = n === (i ? "border" : "content") ? 4 : "width" === t ? 1 : 0, a = 0; 4 > o; o += 2)
            "margin" === n && (a += lt.css(e, n + $n[o], !0, r)),
            i ? ("content" === n && (a -= lt.css(e, "padding" + $n[o], !0, r)),
            "margin" !== n && (a -= lt.css(e, "border" + $n[o] + "Width", !0, r))) : (a += lt.css(e, "padding" + $n[o], !0, r),
            "padding" !== n && (a += lt.css(e, "border" + $n[o] + "Width", !0, r)));
        return a
    }
    function T(e, t, n) {
        var i = !0
          , r = "width" === t ? e.offsetWidth : e.offsetHeight
          , o = dn(e)
          , a = lt.support.boxSizing && "border-box" === lt.css(e, "boxSizing", !1, o);
        if (0 >= r || null  == r) {
            if (r = pn(e, t, o),
            (0 > r || null  == r) && (r = e.style[t]),
            bn.test(r))
                return r;
            i = a && (lt.support.boxSizingReliable || r === e.style[t]),
            r = parseFloat(r) || 0
        }
        return r + S(e, t, n || (a ? "border" : "content"), i, o) + "px"
    }
    function N(e) {
        var t = J
          , n = _n[e];
        return n || (n = j(e, t),
        "none" !== n && n || (ln = (ln || lt("<iframe frameborder='0' width='0' height='0'/>").css("cssText", "display:block !important")).appendTo(t.documentElement),
        t = (ln[0].contentWindow || ln[0].contentDocument).document,
        t.write("<!doctype html><html><body>"),
        t.close(),
        n = j(e, t),
        ln.detach()),
        _n[e] = n),
        n
    }
    function j(e, t) {
        var n = lt(t.createElement(e)).appendTo(t.body)
          , i = lt.css(n[0], "display");
        return n.remove(),
        i
    }
    function E(e, t, n, i) {
        var r;
        if (lt.isArray(t))
            lt.each(t, function(t, r) {
                n || Tn.test(e) ? i(e, r) : E(e + "[" + ("object" == typeof r ? t : "") + "]", r, n, i)
            }
            );
        else if (n || "object" !== lt.type(t))
            i(e, t);
        else
            for (r in t)
                E(e + "[" + r + "]", t[r], n, i)
    }
    function A(e) {
        return function(t, n) {
            "string" != typeof t && (n = t,
            t = "*");
            var i, r = 0, o = t.toLowerCase().match(pt) || [];
            if (lt.isFunction(n))
                for (; i = o[r++]; )
                    "+" === i[0] ? (i = i.slice(1) || "*",
                    (e[i] = e[i] || []).unshift(n)) : (e[i] = e[i] || []).push(n)
        }
    }
    function I(e, n, i, r) {
        function o(c) {
            var u;
            return a[c] = !0,
            lt.each(e[c] || [], function(e, c) {
                var l = c(n, i, r);
                return "string" != typeof l || s || a[l] ? s ? !(u = l) : t : (n.dataTypes.unshift(l),
                o(l),
                !1)
            }
            ),
            u
        }
        var a = {}
          , s = e === zn;
        return o(n.dataTypes[0]) || !a["*"] && o("*")
    }
    function L(e, n) {
        var i, r, o = lt.ajaxSettings.flatOptions || {};
        for (r in n)
            n[r] !== t && ((o[r] ? e : i || (i = {}))[r] = n[r]);
        return i && lt.extend(!0, e, i),
        e
    }
    function O(e, n, i) {
        for (var r, o, a, s, c = e.contents, u = e.dataTypes; "*" === u[0]; )
            u.shift(),
            o === t && (o = e.mimeType || n.getResponseHeader("Content-Type"));
        if (o)
            for (s in c)
                if (c[s] && c[s].test(o)) {
                    u.unshift(s);
                    break
                }
        if (u[0] in i)
            a = u[0];
        else {
            for (s in i) {
                if (!u[0] || e.converters[s + " " + u[0]]) {
                    a = s;
                    break
                }
                r || (r = s)
            }
            a = a || r
        }
        return a ? (a !== u[0] && u.unshift(a),
        i[a]) : t
    }
    function D(e, t, n, i) {
        var r, o, a, s, c, u = {}, l = e.dataTypes.slice();
        if (l[1])
            for (a in e.converters)
                u[a.toLowerCase()] = e.converters[a];
        for (o = l.shift(); o; )
            if (e.responseFields[o] && (n[e.responseFields[o]] = t),
            !c && i && e.dataFilter && (t = e.dataFilter(t, e.dataType)),
            c = o,
            o = l.shift())
                if ("*" === o)
                    o = c;
                else if ("*" !== c && c !== o) {
                    if (a = u[c + " " + o] || u["* " + o],
                    !a)
                        for (r in u)
                            if (s = r.split(" "),
                            s[1] === o && (a = u[c + " " + s[0]] || u["* " + s[0]])) {
                                a === !0 ? a = u[r] : u[r] !== !0 && (o = s[0],
                                l.unshift(s[1]));
                                break
                            }
                    if (a !== !0)
                        if (a && e["throws"])
                            t = a(t);
                        else
                            try {
                                t = a(t)
                            } catch (d) {
                                return {
                                    state: "parsererror",
                                    error: a ? d : "No conversion from " + c + " to " + o
                                }
                            }
                }
        return {
            state: "success",
            data: t
        }
    }
    function M() {
        try {
            return new e.XMLHttpRequest
        } catch (t) {}
    }
    function P() {
        try {
            return new e.ActiveXObject("Microsoft.XMLHTTP")
        } catch (t) {}
    }
    function H() {
        return setTimeout(function() {
            Zn = t
        }
        ),
        Zn = lt.now()
    }
    function F(e, t, n) {
        for (var i, r = (oi[t] || []).concat(oi["*"]), o = 0, a = r.length; a > o; o++)
            if (i = r[o].call(n, t, e))
                return i
    }
    function B(e, t, n) {
        var i, r, o = 0, a = ri.length, s = lt.Deferred().always(function() {
            delete c.elem
        }
        ), c = function() {
            if (r)
                return !1;
            for (var t = Zn || H(), n = Math.max(0, u.startTime + u.duration - t), i = n / u.duration || 0, o = 1 - i, a = 0, c = u.tweens.length; c > a; a++)
                u.tweens[a].run(o);
            return s.notifyWith(e, [u, o, n]),
            1 > o && c ? n : (s.resolveWith(e, [u]),
            !1)
        }
        , u = s.promise({
            elem: e,
            props: lt.extend({}, t),
            opts: lt.extend(!0, {
                specialEasing: {}
            }, n),
            originalProperties: t,
            originalOptions: n,
            startTime: Zn || H(),
            duration: n.duration,
            tweens: [],
            createTween: function(t, n) {
                var i = lt.Tween(e, u.opts, t, n, u.opts.specialEasing[t] || u.opts.easing);
                return u.tweens.push(i),
                i
            },
            stop: function(t) {
                var n = 0
                  , i = t ? u.tweens.length : 0;
                if (r)
                    return this;
                for (r = !0; i > n; n++)
                    u.tweens[n].run(1);
                return t ? s.resolveWith(e, [u, t]) : s.rejectWith(e, [u, t]),
                this
            }
        }), l = u.props;
        for (q(l, u.opts.specialEasing); a > o; o++)
            if (i = ri[o].call(u, e, l, u.opts))
                return i;
        return lt.map(l, F, u),
        lt.isFunction(u.opts.start) && u.opts.start.call(e, u),
        lt.fx.timer(lt.extend(c, {
            elem: e,
            anim: u,
            queue: u.opts.queue
        })),
        u.progress(u.opts.progress).done(u.opts.done, u.opts.complete).fail(u.opts.fail).always(u.opts.always)
    }
    function q(e, t) {
        var n, i, r, o, a;
        for (n in e)
            if (i = lt.camelCase(n),
            r = t[i],
            o = e[n],
            lt.isArray(o) && (r = o[1],
            o = e[n] = o[0]),
            n !== i && (e[i] = o,
            delete e[n]),
            a = lt.cssHooks[i],
            a && "expand" in a) {
                o = a.expand(o),
                delete e[i];
                for (n in o)
                    n in e || (e[n] = o[n],
                    t[n] = r)
            } else
                t[i] = r
    }
    function W(e, t, n) {
        var i, r, o, a, s, c, u = this, l = {}, d = e.style, p = e.nodeType && C(e), f = lt._data(e, "fxshow");
        n.queue || (s = lt._queueHooks(e, "fx"),
        null  == s.unqueued && (s.unqueued = 0,
        c = s.empty.fire,
        s.empty.fire = function() {
            s.unqueued || c()
        }
        ),
        s.unqueued++,
        u.always(function() {
            u.always(function() {
                s.unqueued--,
                lt.queue(e, "fx").length || s.empty.fire()
            }
            )
        }
        )),
        1 === e.nodeType && ("height" in t || "width" in t) && (n.overflow = [d.overflow, d.overflowX, d.overflowY],
        "inline" === lt.css(e, "display") && "none" === lt.css(e, "float") && (lt.support.inlineBlockNeedsLayout && "inline" !== N(e.nodeName) ? d.zoom = 1 : d.display = "inline-block")),
        n.overflow && (d.overflow = "hidden",
        lt.support.shrinkWrapBlocks || u.always(function() {
            d.overflow = n.overflow[0],
            d.overflowX = n.overflow[1],
            d.overflowY = n.overflow[2]
        }
        ));
        for (i in t)
            if (r = t[i],
            ti.exec(r)) {
                if (delete t[i],
                o = o || "toggle" === r,
                r === (p ? "hide" : "show"))
                    continue;l[i] = f && f[i] || lt.style(e, i)
            }
        if (!lt.isEmptyObject(l)) {
            f ? "hidden" in f && (p = f.hidden) : f = lt._data(e, "fxshow", {}),
            o && (f.hidden = !p),
            p ? lt(e).show() : u.done(function() {
                lt(e).hide()
            }
            ),
            u.done(function() {
                var t;
                lt._removeData(e, "fxshow");
                for (t in l)
                    lt.style(e, t, l[t])
            }
            );
            for (i in l)
                a = F(p ? f[i] : 0, i, u),
                i in f || (f[i] = a.start,
                p && (a.end = a.start,
                a.start = "width" === i || "height" === i ? 1 : 0))
        }
    }
    function R(e, t, n, i, r) {
        return new R.prototype.init(e,t,n,i,r)
    }
    function z(e, t) {
        var n, i = {
            height: e
        }, r = 0;
        for (t = t ? 1 : 0; 4 > r; r += 2 - t)
            n = $n[r],
            i["margin" + n] = i["padding" + n] = e;
        return t && (i.opacity = i.width = e),
        i
    }
    function Y(e) {
        return lt.isWindow(e) ? e : 9 === e.nodeType ? e.defaultView || e.parentWindow : !1
    }
    var G, X, U = typeof t, V = e.location, J = e.document, Q = J.documentElement, K = e.jQuery, Z = e.$, et = {}, tt = [], nt = "1.10.1", it = tt.concat, rt = tt.push, ot = tt.slice, at = tt.indexOf, st = et.toString, ct = et.hasOwnProperty, ut = nt.trim, lt = function(e, t) {
        return new lt.fn.init(e,t,X)
    }
    , dt = /[+-]?(?:\d*\.|)\d+(?:[eE][+-]?\d+|)/.source, pt = /\S+/g, ft = /^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g, ht = /^(?:\s*(<[\w\W]+>)[^>]*|#([\w-]*))$/, gt = /^<(\w+)\s*\/?>(?:<\/\1>|)$/, mt = /^[\],:{}\s]*$/, vt = /(?:^|:|,)(?:\s*\[)+/g, yt = /\\(?:["\\\/bfnrt]|u[\da-fA-F]{4})/g, bt = /"[^"\\\r\n]*"|true|false|null|-?(?:\d+\.|)\d+(?:[eE][+-]?\d+|)/g, xt = /^-ms-/, _t = /-([\da-z])/gi, wt = function(e, t) {
        return t.toUpperCase()
    }
    , Ct = function(e) {
        (J.addEventListener || "load" === e.type || "complete" === J.readyState) && ($t(),
        lt.ready())
    }
    , $t = function() {
        J.addEventListener ? (J.removeEventListener("DOMContentLoaded", Ct, !1),
        e.removeEventListener("load", Ct, !1)) : (J.detachEvent("onreadystatechange", Ct),
        e.detachEvent("onload", Ct))
    }
    ;
    lt.fn = lt.prototype = {
        jquery: nt,
        constructor: lt,
        init: function(e, n, i) {
            var r, o;
            if (!e)
                return this;
            if ("string" == typeof e) {
                if (r = "<" === e.charAt(0) && ">" === e.charAt(e.length - 1) && e.length >= 3 ? [null , e, null ] : ht.exec(e),
                !r || !r[1] && n)
                    return !n || n.jquery ? (n || i).find(e) : this.constructor(n).find(e);
                if (r[1]) {
                    if (n = n instanceof lt ? n[0] : n,
                    lt.merge(this, lt.parseHTML(r[1], n && n.nodeType ? n.ownerDocument || n : J, !0)),
                    gt.test(r[1]) && lt.isPlainObject(n))
                        for (r in n)
                            lt.isFunction(this[r]) ? this[r](n[r]) : this.attr(r, n[r]);
                    return this
                }
                if (o = J.getElementById(r[2]),
                o && o.parentNode) {
                    if (o.id !== r[2])
                        return i.find(e);
                    this.length = 1,
                    this[0] = o
                }
                return this.context = J,
                this.selector = e,
                this
            }
            return e.nodeType ? (this.context = this[0] = e,
            this.length = 1,
            this) : lt.isFunction(e) ? i.ready(e) : (e.selector !== t && (this.selector = e.selector,
            this.context = e.context),
            lt.makeArray(e, this))
        },
        selector: "",
        length: 0,
        toArray: function() {
            return ot.call(this)
        },
        get: function(e) {
            return null  == e ? this.toArray() : 0 > e ? this[this.length + e] : this[e]
        },
        pushStack: function(e) {
            var t = lt.merge(this.constructor(), e);
            return t.prevObject = this,
            t.context = this.context,
            t
        },
        each: function(e, t) {
            return lt.each(this, e, t)
        },
        ready: function(e) {
            return lt.ready.promise().done(e),
            this
        },
        slice: function() {
            return this.pushStack(ot.apply(this, arguments))
        },
        first: function() {
            return this.eq(0)
        },
        last: function() {
            return this.eq(-1)
        },
        eq: function(e) {
            var t = this.length
              , n = +e + (0 > e ? t : 0);
            return this.pushStack(n >= 0 && t > n ? [this[n]] : [])
        },
        map: function(e) {
            return this.pushStack(lt.map(this, function(t, n) {
                return e.call(t, n, t)
            }
            ))
        },
        end: function() {
            return this.prevObject || this.constructor(null )
        },
        push: rt,
        sort: [].sort,
        splice: [].splice
    },
    lt.fn.init.prototype = lt.fn,
    lt.extend = lt.fn.extend = function() {
        var e, n, i, r, o, a, s = arguments[0] || {}, c = 1, u = arguments.length, l = !1;
        for ("boolean" == typeof s && (l = s,
        s = arguments[1] || {},
        c = 2),
        "object" == typeof s || lt.isFunction(s) || (s = {}),
        u === c && (s = this,
        --c); u > c; c++)
            if (null  != (o = arguments[c]))
                for (r in o)
                    e = s[r],
                    i = o[r],
                    s !== i && (l && i && (lt.isPlainObject(i) || (n = lt.isArray(i))) ? (n ? (n = !1,
                    a = e && lt.isArray(e) ? e : []) : a = e && lt.isPlainObject(e) ? e : {},
                    s[r] = lt.extend(l, a, i)) : i !== t && (s[r] = i));
        return s
    }
    ,
    lt.extend({
        expando: "jQuery" + (nt + Math.random()).replace(/\D/g, ""),
        noConflict: function(t) {
            return e.$ === lt && (e.$ = Z),
            t && e.jQuery === lt && (e.jQuery = K),
            lt
        },
        isReady: !1,
        readyWait: 1,
        holdReady: function(e) {
            e ? lt.readyWait++ : lt.ready(!0)
        },
        ready: function(e) {
            if (e === !0 ? !--lt.readyWait : !lt.isReady) {
                if (!J.body)
                    return setTimeout(lt.ready);
                lt.isReady = !0,
                e !== !0 && --lt.readyWait > 0 || (G.resolveWith(J, [lt]),
                lt.fn.trigger && lt(J).trigger("ready").off("ready"))
            }
        },
        isFunction: function(e) {
            return "function" === lt.type(e)
        },
        isArray: Array.isArray || function(e) {
            return "array" === lt.type(e)
        }
        ,
        isWindow: function(e) {
            return null  != e && e == e.window
        },
        isNumeric: function(e) {
            return !isNaN(parseFloat(e)) && isFinite(e)
        },
        type: function(e) {
            return null  == e ? e + "" : "object" == typeof e || "function" == typeof e ? et[st.call(e)] || "object" : typeof e
        },
        isPlainObject: function(e) {
            var n;
            if (!e || "object" !== lt.type(e) || e.nodeType || lt.isWindow(e))
                return !1;
            try {
                if (e.constructor && !ct.call(e, "constructor") && !ct.call(e.constructor.prototype, "isPrototypeOf"))
                    return !1
            } catch (i) {
                return !1
            }
            if (lt.support.ownLast)
                for (n in e)
                    return ct.call(e, n);
            for (n in e)
                ;
            return n === t || ct.call(e, n)
        },
        isEmptyObject: function(e) {
            var t;
            for (t in e)
                return !1;
            return !0
        },
        error: function(e) {
            throw Error(e)
        },
        parseHTML: function(e, t, n) {
            if (!e || "string" != typeof e)
                return null ;
            "boolean" == typeof t && (n = t,
            t = !1),
            t = t || J;
            var i = gt.exec(e)
              , r = !n && [];
            return i ? [t.createElement(i[1])] : (i = lt.buildFragment([e], t, r),
            r && lt(r).remove(),
            lt.merge([], i.childNodes))
        },
        parseJSON: function(n) {
            return e.JSON && e.JSON.parse ? e.JSON.parse(n) : null  === n ? n : "string" == typeof n && (n = lt.trim(n),
            n && mt.test(n.replace(yt, "@").replace(bt, "]").replace(vt, ""))) ? Function("return " + n)() : (lt.error("Invalid JSON: " + n),
            t)
        },
        parseXML: function(n) {
            var i, r;
            if (!n || "string" != typeof n)
                return null ;
            try {
                e.DOMParser ? (r = new DOMParser,
                i = r.parseFromString(n, "text/xml")) : (i = new ActiveXObject("Microsoft.XMLDOM"),
                i.async = "false",
                i.loadXML(n))
            } catch (o) {
                i = t
            }
            return i && i.documentElement && !i.getElementsByTagName("parsererror").length || lt.error("Invalid XML: " + n),
            i
        },
        noop: function() {},
        globalEval: function(t) {
            t && lt.trim(t) && (e.execScript || function(t) {
                e.eval.call(e, t)
            }
            )(t)
        },
        camelCase: function(e) {
            return e.replace(xt, "ms-").replace(_t, wt)
        },
        nodeName: function(e, t) {
            return e.nodeName && e.nodeName.toLowerCase() === t.toLowerCase()
        },
        each: function(e, t, i) {
            var r, o = 0, a = e.length, s = n(e);
            if (i) {
                if (s)
                    for (; a > o && (r = t.apply(e[o], i),
                    r !== !1); o++)
                        ;
                else
                    for (o in e)
                        if (r = t.apply(e[o], i),
                        r === !1)
                            break
            } else if (s)
                for (; a > o && (r = t.call(e[o], o, e[o]),
                r !== !1); o++)
                    ;
            else
                for (o in e)
                    if (r = t.call(e[o], o, e[o]),
                    r === !1)
                        break;
            return e
        },
        trim: ut && !ut.call("﻿ ") ? function(e) {
            return null  == e ? "" : ut.call(e)
        }
         : function(e) {
            return null  == e ? "" : (e + "").replace(ft, "")
        }
        ,
        makeArray: function(e, t) {
            var i = t || [];
            return null  != e && (n(Object(e)) ? lt.merge(i, "string" == typeof e ? [e] : e) : rt.call(i, e)),
            i
        },
        inArray: function(e, t, n) {
            var i;
            if (t) {
                if (at)
                    return at.call(t, e, n);
                for (i = t.length,
                n = n ? 0 > n ? Math.max(0, i + n) : n : 0; i > n; n++)
                    if (n in t && t[n] === e)
                        return n
            }
            return -1
        },
        merge: function(e, n) {
            var i = n.length
              , r = e.length
              , o = 0;
            if ("number" == typeof i)
                for (; i > o; o++)
                    e[r++] = n[o];
            else
                for (; n[o] !== t; )
                    e[r++] = n[o++];
            return e.length = r,
            e
        },
        grep: function(e, t, n) {
            var i, r = [], o = 0, a = e.length;
            for (n = !!n; a > o; o++)
                i = !!t(e[o], o),
                n !== i && r.push(e[o]);
            return r
        },
        map: function(e, t, i) {
            var r, o = 0, a = e.length, s = n(e), c = [];
            if (s)
                for (; a > o; o++)
                    r = t(e[o], o, i),
                    null  != r && (c[c.length] = r);
            else
                for (o in e)
                    r = t(e[o], o, i),
                    null  != r && (c[c.length] = r);
            return it.apply([], c)
        },
        guid: 1,
        proxy: function(e, n) {
            var i, r, o;
            return "string" == typeof n && (o = e[n],
            n = e,
            e = o),
            lt.isFunction(e) ? (i = ot.call(arguments, 2),
            r = function() {
                return e.apply(n || this, i.concat(ot.call(arguments)))
            }
            ,
            r.guid = e.guid = e.guid || lt.guid++,
            r) : t
        },
        access: function(e, n, i, r, o, a, s) {
            var c = 0
              , u = e.length
              , l = null  == i;
            if ("object" === lt.type(i)) {
                o = !0;
                for (c in i)
                    lt.access(e, n, c, i[c], !0, a, s)
            } else if (r !== t && (o = !0,
            lt.isFunction(r) || (s = !0),
            l && (s ? (n.call(e, r),
            n = null ) : (l = n,
            n = function(e, t, n) {
                return l.call(lt(e), n)
            }
            )),
            n))
                for (; u > c; c++)
                    n(e[c], i, s ? r : r.call(e[c], c, n(e[c], i)));
            return o ? e : l ? n.call(e) : u ? n(e[0], i) : a
        },
        now: function() {
            return (new Date).getTime()
        },
        swap: function(e, t, n, i) {
            var r, o, a = {};
            for (o in t)
                a[o] = e.style[o],
                e.style[o] = t[o];
            r = n.apply(e, i || []);
            for (o in t)
                e.style[o] = a[o];
            return r
        }
    }),
    lt.ready.promise = function(t) {
        if (!G)
            if (G = lt.Deferred(),
            "complete" === J.readyState)
                setTimeout(lt.ready);
            else if (J.addEventListener)
                J.addEventListener("DOMContentLoaded", Ct, !1),
                e.addEventListener("load", Ct, !1);
            else {
                J.attachEvent("onreadystatechange", Ct),
                e.attachEvent("onload", Ct);
                var n = !1;
                try {
                    n = null  == e.frameElement && J.documentElement
                } catch (i) {}
                n && n.doScroll && function r() {
                    if (!lt.isReady) {
                        try {
                            n.doScroll("left")
                        } catch (e) {
                            return setTimeout(r, 50)
                        }
                        $t(),
                        lt.ready()
                    }
                }
                ()
            }
        return G.promise(t)
    }
    ,
    lt.each("Boolean Number String Function Array Date RegExp Object Error".split(" "), function(e, t) {
        et["[object " + t + "]"] = t.toLowerCase()
    }
    ),
    X = lt(J),
    function(e, t) {
        function n(e, t, n, i) {
            var r, o, a, s, c, u, l, d, p, f;
            if ((t ? t.ownerDocument || t : z) !== M && D(t),
            t = t || M,
            n = n || [],
            !e || "string" != typeof e)
                return n;
            if (1 !== (s = t.nodeType) && 9 !== s)
                return [];
            if (H && !i) {
                if (r = Ct.exec(e))
                    if (a = r[1]) {
                        if (9 === s) {
                            if (o = t.getElementById(a),
                            !o || !o.parentNode)
                                return n;
                            if (o.id === a)
                                return n.push(o),
                                n
                        } else if (t.ownerDocument && (o = t.ownerDocument.getElementById(a)) && W(t, o) && o.id === a)
                            return n.push(o),
                            n
                    } else {
                        if (r[2])
                            return rt.apply(n, t.getElementsByTagName(e)),
                            n;
                        if ((a = r[3]) && T.getElementsByClassName && t.getElementsByClassName)
                            return rt.apply(n, t.getElementsByClassName(a)),
                            n
                    }
                if (T.qsa && (!F || !F.test(e))) {
                    if (d = l = R,
                    p = t,
                    f = 9 === s && e,
                    1 === s && "object" !== t.nodeName.toLowerCase()) {
                        for (u = g(e),
                        (l = t.getAttribute("id")) ? d = l.replace(St, "\\$&") : t.setAttribute("id", d),
                        d = "[id='" + d + "'] ",
                        c = u.length; c--; )
                            u[c] = d + m(u[c]);
                        p = vt.test(e) && t.parentNode || t,
                        f = u.join(",")
                    }
                    if (f)
                        try {
                            return rt.apply(n, p.querySelectorAll(f)),
                            n
                        } catch (h) {} finally {
                            l || t.removeAttribute("id")
                        }
                }
            }
            return $(e.replace(ht, "$1"), t, n, i)
        }
        function i(e) {
            return wt.test(e + "")
        }
        function r() {
            function e(n, i) {
                return t.push(n += " ") > j.cacheLength && delete e[t.shift()],
                e[n] = i
            }
            var t = [];
            return e
        }
        function o(e) {
            return e[R] = !0,
            e
        }
        function a(e) {
            var t = M.createElement("div");
            try {
                return !!e(t)
            } catch (n) {
                return !1
            } finally {
                t.parentNode && t.parentNode.removeChild(t),
                t = null 
            }
        }
        function s(e, t, n) {
            e = e.split("|");
            for (var i, r = e.length, o = n ? null  : t; r--; )
                (i = j.attrHandle[e[r]]) && i !== t || (j.attrHandle[e[r]] = o)
        }
        function c(e, t) {
            var n = e.getAttributeNode(t);
            return n && n.specified ? n.value : e[t] === !0 ? t.toLowerCase() : null 
        }
        function u(e, t) {
            return e.getAttribute(t, "type" === t.toLowerCase() ? 1 : 2)
        }
        function l(e) {
            return "input" === e.nodeName.toLowerCase() ? e.defaultValue : t
        }
        function d(e, t) {
            var n = t && e
              , i = n && 1 === e.nodeType && 1 === t.nodeType && (~t.sourceIndex || Z) - (~e.sourceIndex || Z);
            if (i)
                return i;
            if (n)
                for (; n = n.nextSibling; )
                    if (n === t)
                        return -1;
            return e ? 1 : -1
        }
        function p(e) {
            return function(t) {
                var n = t.nodeName.toLowerCase();
                return "input" === n && t.type === e
            }
        }
        function f(e) {
            return function(t) {
                var n = t.nodeName.toLowerCase();
                return ("input" === n || "button" === n) && t.type === e
            }
        }
        function h(e) {
            return o(function(t) {
                return t = +t,
                o(function(n, i) {
                    for (var r, o = e([], n.length, t), a = o.length; a--; )
                        n[r = o[a]] && (n[r] = !(i[r] = n[r]))
                }
                )
            }
            )
        }
        function g(e, t) {
            var i, r, o, a, s, c, u, l = U[e + " "];
            if (l)
                return t ? 0 : l.slice(0);
            for (s = e,
            c = [],
            u = j.preFilter; s; ) {
                (!i || (r = gt.exec(s))) && (r && (s = s.slice(r[0].length) || s),
                c.push(o = [])),
                i = !1,
                (r = mt.exec(s)) && (i = r.shift(),
                o.push({
                    value: i,
                    type: r[0].replace(ht, " ")
                }),
                s = s.slice(i.length));
                for (a in j.filter)
                    !(r = _t[a].exec(s)) || u[a] && !(r = u[a](r)) || (i = r.shift(),
                    o.push({
                        value: i,
                        type: a,
                        matches: r
                    }),
                    s = s.slice(i.length));
                if (!i)
                    break
            }
            return t ? s.length : s ? n.error(e) : U(e, c).slice(0)
        }
        function m(e) {
            for (var t = 0, n = e.length, i = ""; n > t; t++)
                i += e[t].value;
            return i
        }
        function v(e, t, n) {
            var i = t.dir
              , r = n && "parentNode" === i
              , o = G++;
            return t.first ? function(t, n, o) {
                for (; t = t[i]; )
                    if (1 === t.nodeType || r)
                        return e(t, n, o)
            }
             : function(t, n, a) {
                var s, c, u, l = Y + " " + o;
                if (a) {
                    for (; t = t[i]; )
                        if ((1 === t.nodeType || r) && e(t, n, a))
                            return !0
                } else
                    for (; t = t[i]; )
                        if (1 === t.nodeType || r)
                            if (u = t[R] || (t[R] = {}),
                            (c = u[i]) && c[0] === l) {
                                if ((s = c[1]) === !0 || s === N)
                                    return s === !0
                            } else if (c = u[i] = [l],
                            c[1] = e(t, n, a) || N,
                            c[1] === !0)
                                return !0
            }
        }
        function y(e) {
            return e.length > 1 ? function(t, n, i) {
                for (var r = e.length; r--; )
                    if (!e[r](t, n, i))
                        return !1;
                return !0
            }
             : e[0]
        }
        function b(e, t, n, i, r) {
            for (var o, a = [], s = 0, c = e.length, u = null  != t; c > s; s++)
                (o = e[s]) && (!n || n(o, i, r)) && (a.push(o),
                u && t.push(s));
            return a
        }
        function x(e, t, n, i, r, a) {
            return i && !i[R] && (i = x(i)),
            r && !r[R] && (r = x(r, a)),
            o(function(o, a, s, c) {
                var u, l, d, p = [], f = [], h = a.length, g = o || C(t || "*", s.nodeType ? [s] : s, []), m = !e || !o && t ? g : b(g, p, e, s, c), v = n ? r || (o ? e : h || i) ? [] : a : m;
                if (n && n(m, v, s, c),
                i)
                    for (u = b(v, f),
                    i(u, [], s, c),
                    l = u.length; l--; )
                        (d = u[l]) && (v[f[l]] = !(m[f[l]] = d));
                if (o) {
                    if (r || e) {
                        if (r) {
                            for (u = [],
                            l = v.length; l--; )
                                (d = v[l]) && u.push(m[l] = d);
                            r(null , v = [], u, c)
                        }
                        for (l = v.length; l--; )
                            (d = v[l]) && (u = r ? at.call(o, d) : p[l]) > -1 && (o[u] = !(a[u] = d))
                    }
                } else
                    v = b(v === a ? v.splice(h, v.length) : v),
                    r ? r(null , a, v, c) : rt.apply(a, v)
            }
            )
        }
        function _(e) {
            for (var t, n, i, r = e.length, o = j.relative[e[0].type], a = o || j.relative[" "], s = o ? 1 : 0, c = v(function(e) {
                return e === t
            }
            , a, !0), u = v(function(e) {
                return at.call(t, e) > -1
            }
            , a, !0), l = [function(e, n, i) {
                return !o && (i || n !== L) || ((t = n).nodeType ? c(e, n, i) : u(e, n, i))
            }
            ]; r > s; s++)
                if (n = j.relative[e[s].type])
                    l = [v(y(l), n)];
                else {
                    if (n = j.filter[e[s].type].apply(null , e[s].matches),
                    n[R]) {
                        for (i = ++s; r > i && !j.relative[e[i].type]; i++)
                            ;
                        return x(s > 1 && y(l), s > 1 && m(e.slice(0, s - 1).concat({
                            value: " " === e[s - 2].type ? "*" : ""
                        })).replace(ht, "$1"), n, i > s && _(e.slice(s, i)), r > i && _(e = e.slice(i)), r > i && m(e))
                    }
                    l.push(n)
                }
            return y(l)
        }
        function w(e, t) {
            var i = 0
              , r = t.length > 0
              , a = e.length > 0
              , s = function(o, s, c, u, l) {
                var d, p, f, h = [], g = 0, m = "0", v = o && [], y = null  != l, x = L, _ = o || a && j.find.TAG("*", l && s.parentNode || s), w = Y += null  == x ? 1 : Math.random() || .1;
                for (y && (L = s !== M && s,
                N = i); null  != (d = _[m]); m++) {
                    if (a && d) {
                        for (p = 0; f = e[p++]; )
                            if (f(d, s, c)) {
                                u.push(d);
                                break
                            }
                        y && (Y = w,
                        N = ++i)
                    }
                    r && ((d = !f && d) && g--,
                    o && v.push(d))
                }
                if (g += m,
                r && m !== g) {
                    for (p = 0; f = t[p++]; )
                        f(v, h, s, c);
                    if (o) {
                        if (g > 0)
                            for (; m--; )
                                v[m] || h[m] || (h[m] = nt.call(u));
                        h = b(h)
                    }
                    rt.apply(u, h),
                    y && !o && h.length > 0 && g + t.length > 1 && n.uniqueSort(u)
                }
                return y && (Y = w,
                L = x),
                v
            }
            ;
            return r ? o(s) : s
        }
        function C(e, t, i) {
            for (var r = 0, o = t.length; o > r; r++)
                n(e, t[r], i);
            return i
        }
        function $(e, t, n, i) {
            var r, o, a, s, c, u = g(e);
            if (!i && 1 === u.length) {
                if (o = u[0] = u[0].slice(0),
                o.length > 2 && "ID" === (a = o[0]).type && T.getById && 9 === t.nodeType && H && j.relative[o[1].type]) {
                    if (t = (j.find.ID(a.matches[0].replace(Tt, Nt), t) || [])[0],
                    !t)
                        return n;
                    e = e.slice(o.shift().value.length)
                }
                for (r = _t.needsContext.test(e) ? 0 : o.length; r-- && (a = o[r],
                !j.relative[s = a.type]); )
                    if ((c = j.find[s]) && (i = c(a.matches[0].replace(Tt, Nt), vt.test(o[0].type) && t.parentNode || t))) {
                        if (o.splice(r, 1),
                        e = i.length && m(o),
                        !e)
                            return rt.apply(n, i),
                            n;
                        break
                    }
            }
            return I(e, u)(i, t, !H, n, vt.test(e)),
            n
        }
        function k() {}
        var S, T, N, j, E, A, I, L, O, D, M, P, H, F, B, q, W, R = "sizzle" + -new Date, z = e.document, Y = 0, G = 0, X = r(), U = r(), V = r(), J = !1, Q = function() {
            return 0
        }
        , K = typeof t, Z = 1 << 31, et = {}.hasOwnProperty, tt = [], nt = tt.pop, it = tt.push, rt = tt.push, ot = tt.slice, at = tt.indexOf || function(e) {
            for (var t = 0, n = this.length; n > t; t++)
                if (this[t] === e)
                    return t;
            return -1
        }
        , st = "checked|selected|async|autofocus|autoplay|controls|defer|disabled|hidden|ismap|loop|multiple|open|readonly|required|scoped", ct = "[\\x20\\t\\r\\n\\f]", ut = "(?:\\\\.|[\\w-]|[^\\x00-\\xa0])+", dt = ut.replace("w", "w#"), pt = "\\[" + ct + "*(" + ut + ")" + ct + "*(?:([*^$|!~]?=)" + ct + "*(?:(['\"])((?:\\\\.|[^\\\\])*?)\\3|(" + dt + ")|)|)" + ct + "*\\]", ft = ":(" + ut + ")(?:\\(((['\"])((?:\\\\.|[^\\\\])*?)\\3|((?:\\\\.|[^\\\\()[\\]]|" + pt.replace(3, 8) + ")*)|.*)\\)|)", ht = RegExp("^" + ct + "+|((?:^|[^\\\\])(?:\\\\.)*)" + ct + "+$", "g"), gt = RegExp("^" + ct + "*," + ct + "*"), mt = RegExp("^" + ct + "*([>+~]|" + ct + ")" + ct + "*"), vt = RegExp(ct + "*[+~]"), yt = RegExp("=" + ct + "*([^\\]'\"]*)" + ct + "*\\]", "g"), bt = RegExp(ft), xt = RegExp("^" + dt + "$"), _t = {
            ID: RegExp("^#(" + ut + ")"),
            CLASS: RegExp("^\\.(" + ut + ")"),
            TAG: RegExp("^(" + ut.replace("w", "w*") + ")"),
            ATTR: RegExp("^" + pt),
            PSEUDO: RegExp("^" + ft),
            CHILD: RegExp("^:(only|first|last|nth|nth-last)-(child|of-type)(?:\\(" + ct + "*(even|odd|(([+-]|)(\\d*)n|)" + ct + "*(?:([+-]|)" + ct + "*(\\d+)|))" + ct + "*\\)|)", "i"),
            bool: RegExp("^(?:" + st + ")$", "i"),
            needsContext: RegExp("^" + ct + "*[>+~]|:(even|odd|eq|gt|lt|nth|first|last)(?:\\(" + ct + "*((?:-\\d)?\\d*)" + ct + "*\\)|)(?=[^-]|$)", "i")
        }, wt = /^[^{]+\{\s*\[native \w/, Ct = /^(?:#([\w-]+)|(\w+)|\.([\w-]+))$/, $t = /^(?:input|select|textarea|button)$/i, kt = /^h\d$/i, St = /'|\\/g, Tt = RegExp("\\\\([\\da-f]{1,6}" + ct + "?|(" + ct + ")|.)", "ig"), Nt = function(e, t, n) {
            var i = "0x" + t - 65536;
            return i !== i || n ? t : 0 > i ? String.fromCharCode(i + 65536) : String.fromCharCode(55296 | i >> 10, 56320 | 1023 & i)
        }
        ;
        try {
            rt.apply(tt = ot.call(z.childNodes), z.childNodes),
            tt[z.childNodes.length].nodeType
        } catch (jt) {
            rt = {
                apply: tt.length ? function(e, t) {
                    it.apply(e, ot.call(t))
                }
                 : function(e, t) {
                    for (var n = e.length, i = 0; e[n++] = t[i++]; )
                        ;
                    e.length = n - 1
                }
            }
        }
        A = n.isXML = function(e) {
            var t = e && (e.ownerDocument || e).documentElement;
            return t ? "HTML" !== t.nodeName : !1
        }
        ,
        T = n.support = {},
        D = n.setDocument = function(e) {
            var n = e ? e.ownerDocument || e : z
              , r = n.parentWindow;
            return n !== M && 9 === n.nodeType && n.documentElement ? (M = n,
            P = n.documentElement,
            H = !A(n),
            r && r.frameElement && r.attachEvent("onbeforeunload", function() {
                D()
            }
            ),
            T.attributes = a(function(e) {
                return e.innerHTML = "<a href='#'></a>",
                s("type|href|height|width", u, "#" === e.firstChild.getAttribute("href")),
                s(st, c, null  == e.getAttribute("disabled")),
                e.className = "i",
                !e.getAttribute("className")
            }
            ),
            T.input = a(function(e) {
                return e.innerHTML = "<input>",
                e.firstChild.setAttribute("value", ""),
                "" === e.firstChild.getAttribute("value")
            }
            ),
            s("value", l, T.attributes && T.input),
            T.getElementsByTagName = a(function(e) {
                return e.appendChild(n.createComment("")),
                !e.getElementsByTagName("*").length
            }
            ),
            T.getElementsByClassName = a(function(e) {
                return e.innerHTML = "<div class='a'></div><div class='a i'></div>",
                e.firstChild.className = "i",
                2 === e.getElementsByClassName("i").length
            }
            ),
            T.getById = a(function(e) {
                return P.appendChild(e).id = R,
                !n.getElementsByName || !n.getElementsByName(R).length
            }
            ),
            T.getById ? (j.find.ID = function(e, t) {
                if (typeof t.getElementById !== K && H) {
                    var n = t.getElementById(e);
                    return n && n.parentNode ? [n] : []
                }
            }
            ,
            j.filter.ID = function(e) {
                var t = e.replace(Tt, Nt);
                return function(e) {
                    return e.getAttribute("id") === t
                }
            }
            ) : (delete j.find.ID,
            j.filter.ID = function(e) {
                var t = e.replace(Tt, Nt);
                return function(e) {
                    var n = typeof e.getAttributeNode !== K && e.getAttributeNode("id");
                    return n && n.value === t
                }
            }
            ),
            j.find.TAG = T.getElementsByTagName ? function(e, n) {
                return typeof n.getElementsByTagName !== K ? n.getElementsByTagName(e) : t
            }
             : function(e, t) {
                var n, i = [], r = 0, o = t.getElementsByTagName(e);
                if ("*" === e) {
                    for (; n = o[r++]; )
                        1 === n.nodeType && i.push(n);
                    return i
                }
                return o
            }
            ,
            j.find.CLASS = T.getElementsByClassName && function(e, n) {
                return typeof n.getElementsByClassName !== K && H ? n.getElementsByClassName(e) : t
            }
            ,
            B = [],
            F = [],
            (T.qsa = i(n.querySelectorAll)) && (a(function(e) {
                e.innerHTML = "<select><option selected=''></option></select>",
                e.querySelectorAll("[selected]").length || F.push("\\[" + ct + "*(?:value|" + st + ")"),
                e.querySelectorAll(":checked").length || F.push(":checked")
            }
            ),
            a(function(e) {
                var t = n.createElement("input");
                t.setAttribute("type", "hidden"),
                e.appendChild(t).setAttribute("t", ""),
                e.querySelectorAll("[t^='']").length && F.push("[*^$]=" + ct + "*(?:''|\"\")"),
                e.querySelectorAll(":enabled").length || F.push(":enabled", ":disabled"),
                e.querySelectorAll("*,:x"),
                F.push(",.*:")
            }
            )),
            (T.matchesSelector = i(q = P.webkitMatchesSelector || P.mozMatchesSelector || P.oMatchesSelector || P.msMatchesSelector)) && a(function(e) {
                T.disconnectedMatch = q.call(e, "div"),
                q.call(e, "[s!='']:x"),
                B.push("!=", ft)
            }
            ),
            F = F.length && RegExp(F.join("|")),
            B = B.length && RegExp(B.join("|")),
            W = i(P.contains) || P.compareDocumentPosition ? function(e, t) {
                var n = 9 === e.nodeType ? e.documentElement : e
                  , i = t && t.parentNode;
                return e === i || !(!i || 1 !== i.nodeType || !(n.contains ? n.contains(i) : e.compareDocumentPosition && 16 & e.compareDocumentPosition(i)))
            }
             : function(e, t) {
                if (t)
                    for (; t = t.parentNode; )
                        if (t === e)
                            return !0;
                return !1
            }
            ,
            T.sortDetached = a(function(e) {
                return 1 & e.compareDocumentPosition(n.createElement("div"))
            }
            ),
            Q = P.compareDocumentPosition ? function(e, t) {
                if (e === t)
                    return J = !0,
                    0;
                var i = t.compareDocumentPosition && e.compareDocumentPosition && e.compareDocumentPosition(t);
                return i ? 1 & i || !T.sortDetached && t.compareDocumentPosition(e) === i ? e === n || W(z, e) ? -1 : t === n || W(z, t) ? 1 : O ? at.call(O, e) - at.call(O, t) : 0 : 4 & i ? -1 : 1 : e.compareDocumentPosition ? -1 : 1
            }
             : function(e, t) {
                var i, r = 0, o = e.parentNode, a = t.parentNode, s = [e], c = [t];
                if (e === t)
                    return J = !0,
                    0;
                if (!o || !a)
                    return e === n ? -1 : t === n ? 1 : o ? -1 : a ? 1 : O ? at.call(O, e) - at.call(O, t) : 0;
                if (o === a)
                    return d(e, t);
                for (i = e; i = i.parentNode; )
                    s.unshift(i);
                for (i = t; i = i.parentNode; )
                    c.unshift(i);
                for (; s[r] === c[r]; )
                    r++;
                return r ? d(s[r], c[r]) : s[r] === z ? -1 : c[r] === z ? 1 : 0
            }
            ,
            n) : M
        }
        ,
        n.matches = function(e, t) {
            return n(e, null , null , t)
        }
        ,
        n.matchesSelector = function(e, t) {
            if ((e.ownerDocument || e) !== M && D(e),
            t = t.replace(yt, "='$1']"),
            !(!T.matchesSelector || !H || B && B.test(t) || F && F.test(t)))
                try {
                    var i = q.call(e, t);
                    if (i || T.disconnectedMatch || e.document && 11 !== e.document.nodeType)
                        return i
                } catch (r) {}
            return n(t, M, null , [e]).length > 0
        }
        ,
        n.contains = function(e, t) {
            return (e.ownerDocument || e) !== M && D(e),
            W(e, t)
        }
        ,
        n.attr = function(e, n) {
            (e.ownerDocument || e) !== M && D(e);
            var i = j.attrHandle[n.toLowerCase()]
              , r = i && et.call(j.attrHandle, n.toLowerCase()) ? i(e, n, !H) : t;
            return r === t ? T.attributes || !H ? e.getAttribute(n) : (r = e.getAttributeNode(n)) && r.specified ? r.value : null  : r
        }
        ,
        n.error = function(e) {
            throw Error("Syntax error, unrecognized expression: " + e)
        }
        ,
        n.uniqueSort = function(e) {
            var t, n = [], i = 0, r = 0;
            if (J = !T.detectDuplicates,
            O = !T.sortStable && e.slice(0),
            e.sort(Q),
            J) {
                for (; t = e[r++]; )
                    t === e[r] && (i = n.push(r));
                for (; i--; )
                    e.splice(n[i], 1)
            }
            return e
        }
        ,
        E = n.getText = function(e) {
            var t, n = "", i = 0, r = e.nodeType;
            if (r) {
                if (1 === r || 9 === r || 11 === r) {
                    if ("string" == typeof e.textContent)
                        return e.textContent;
                    for (e = e.firstChild; e; e = e.nextSibling)
                        n += E(e)
                } else if (3 === r || 4 === r)
                    return e.nodeValue
            } else
                for (; t = e[i]; i++)
                    n += E(t);
            return n
        }
        ,
        j = n.selectors = {
            cacheLength: 50,
            createPseudo: o,
            match: _t,
            attrHandle: {},
            find: {},
            relative: {
                ">": {
                    dir: "parentNode",
                    first: !0
                },
                " ": {
                    dir: "parentNode"
                },
                "+": {
                    dir: "previousSibling",
                    first: !0
                },
                "~": {
                    dir: "previousSibling"
                }
            },
            preFilter: {
                ATTR: function(e) {
                    return e[1] = e[1].replace(Tt, Nt),
                    e[3] = (e[4] || e[5] || "").replace(Tt, Nt),
                    "~=" === e[2] && (e[3] = " " + e[3] + " "),
                    e.slice(0, 4)
                },
                CHILD: function(e) {
                    return e[1] = e[1].toLowerCase(),
                    "nth" === e[1].slice(0, 3) ? (e[3] || n.error(e[0]),
                    e[4] = +(e[4] ? e[5] + (e[6] || 1) : 2 * ("even" === e[3] || "odd" === e[3])),
                    e[5] = +(e[7] + e[8] || "odd" === e[3])) : e[3] && n.error(e[0]),
                    e
                },
                PSEUDO: function(e) {
                    var n, i = !e[5] && e[2];
                    return _t.CHILD.test(e[0]) ? null  : (e[3] && e[4] !== t ? e[2] = e[4] : i && bt.test(i) && (n = g(i, !0)) && (n = i.indexOf(")", i.length - n) - i.length) && (e[0] = e[0].slice(0, n),
                    e[2] = i.slice(0, n)),
                    e.slice(0, 3))
                }
            },
            filter: {
                TAG: function(e) {
                    var t = e.replace(Tt, Nt).toLowerCase();
                    return "*" === e ? function() {
                        return !0
                    }
                     : function(e) {
                        return e.nodeName && e.nodeName.toLowerCase() === t
                    }
                },
                CLASS: function(e) {
                    var t = X[e + " "];
                    return t || (t = RegExp("(^|" + ct + ")" + e + "(" + ct + "|$)")) && X(e, function(e) {
                        return t.test("string" == typeof e.className && e.className || typeof e.getAttribute !== K && e.getAttribute("class") || "")
                    }
                    )
                },
                ATTR: function(e, t, i) {
                    return function(r) {
                        var o = n.attr(r, e);
                        return null  == o ? "!=" === t : t ? (o += "",
                        "=" === t ? o === i : "!=" === t ? o !== i : "^=" === t ? i && 0 === o.indexOf(i) : "*=" === t ? i && o.indexOf(i) > -1 : "$=" === t ? i && o.slice(-i.length) === i : "~=" === t ? (" " + o + " ").indexOf(i) > -1 : "|=" === t ? o === i || o.slice(0, i.length + 1) === i + "-" : !1) : !0
                    }
                },
                CHILD: function(e, t, n, i, r) {
                    var o = "nth" !== e.slice(0, 3)
                      , a = "last" !== e.slice(-4)
                      , s = "of-type" === t;
                    return 1 === i && 0 === r ? function(e) {
                        return !!e.parentNode
                    }
                     : function(t, n, c) {
                        var u, l, d, p, f, h, g = o !== a ? "nextSibling" : "previousSibling", m = t.parentNode, v = s && t.nodeName.toLowerCase(), y = !c && !s;
                        if (m) {
                            if (o) {
                                for (; g; ) {
                                    for (d = t; d = d[g]; )
                                        if (s ? d.nodeName.toLowerCase() === v : 1 === d.nodeType)
                                            return !1;
                                    h = g = "only" === e && !h && "nextSibling"
                                }
                                return !0
                            }
                            if (h = [a ? m.firstChild : m.lastChild],
                            a && y) {
                                for (l = m[R] || (m[R] = {}),
                                u = l[e] || [],
                                f = u[0] === Y && u[1],
                                p = u[0] === Y && u[2],
                                d = f && m.childNodes[f]; d = ++f && d && d[g] || (p = f = 0) || h.pop(); )
                                    if (1 === d.nodeType && ++p && d === t) {
                                        l[e] = [Y, f, p];
                                        break
                                    }
                            } else if (y && (u = (t[R] || (t[R] = {}))[e]) && u[0] === Y)
                                p = u[1];
                            else
                                for (; (d = ++f && d && d[g] || (p = f = 0) || h.pop()) && ((s ? d.nodeName.toLowerCase() !== v : 1 !== d.nodeType) || !++p || (y && ((d[R] || (d[R] = {}))[e] = [Y, p]),
                                d !== t)); )
                                    ;
                            return p -= r,
                            p === i || 0 === p % i && p / i >= 0
                        }
                    }
                },
                PSEUDO: function(e, t) {
                    var i, r = j.pseudos[e] || j.setFilters[e.toLowerCase()] || n.error("unsupported pseudo: " + e);
                    return r[R] ? r(t) : r.length > 1 ? (i = [e, e, "", t],
                    j.setFilters.hasOwnProperty(e.toLowerCase()) ? o(function(e, n) {
                        for (var i, o = r(e, t), a = o.length; a--; )
                            i = at.call(e, o[a]),
                            e[i] = !(n[i] = o[a])
                    }
                    ) : function(e) {
                        return r(e, 0, i)
                    }
                    ) : r
                }
            },
            pseudos: {
                not: o(function(e) {
                    var t = []
                      , n = []
                      , i = I(e.replace(ht, "$1"));
                    return i[R] ? o(function(e, t, n, r) {
                        for (var o, a = i(e, null , r, []), s = e.length; s--; )
                            (o = a[s]) && (e[s] = !(t[s] = o))
                    }
                    ) : function(e, r, o) {
                        return t[0] = e,
                        i(t, null , o, n),
                        !n.pop()
                    }
                }
                ),
                has: o(function(e) {
                    return function(t) {
                        return n(e, t).length > 0
                    }
                }
                ),
                contains: o(function(e) {
                    return function(t) {
                        return (t.textContent || t.innerText || E(t)).indexOf(e) > -1
                    }
                }
                ),
                lang: o(function(e) {
                    return xt.test(e || "") || n.error("unsupported lang: " + e),
                    e = e.replace(Tt, Nt).toLowerCase(),
                    function(t) {
                        var n;
                        do
                            if (n = H ? t.lang : t.getAttribute("xml:lang") || t.getAttribute("lang"))
                                return n = n.toLowerCase(),
                                n === e || 0 === n.indexOf(e + "-");
                        while ((t = t.parentNode) && 1 === t.nodeType);return !1
                    }
                }
                ),
                target: function(t) {
                    var n = e.location && e.location.hash;
                    return n && n.slice(1) === t.id
                },
                root: function(e) {
                    return e === P
                },
                focus: function(e) {
                    return e === M.activeElement && (!M.hasFocus || M.hasFocus()) && !!(e.type || e.href || ~e.tabIndex)
                },
                enabled: function(e) {
                    return e.disabled === !1
                },
                disabled: function(e) {
                    return e.disabled === !0
                },
                checked: function(e) {
                    var t = e.nodeName.toLowerCase();
                    return "input" === t && !!e.checked || "option" === t && !!e.selected
                },
                selected: function(e) {
                    return e.parentNode && e.parentNode.selectedIndex,
                    e.selected === !0
                },
                empty: function(e) {
                    for (e = e.firstChild; e; e = e.nextSibling)
                        if (e.nodeName > "@" || 3 === e.nodeType || 4 === e.nodeType)
                            return !1;
                    return !0
                },
                parent: function(e) {
                    return !j.pseudos.empty(e)
                },
                header: function(e) {
                    return kt.test(e.nodeName)
                },
                input: function(e) {
                    return $t.test(e.nodeName)
                },
                button: function(e) {
                    var t = e.nodeName.toLowerCase();
                    return "input" === t && "button" === e.type || "button" === t
                },
                text: function(e) {
                    var t;
                    return "input" === e.nodeName.toLowerCase() && "text" === e.type && (null  == (t = e.getAttribute("type")) || t.toLowerCase() === e.type)
                },
                first: h(function() {
                    return [0]
                }
                ),
                last: h(function(e, t) {
                    return [t - 1]
                }
                ),
                eq: h(function(e, t, n) {
                    return [0 > n ? n + t : n]
                }
                ),
                even: h(function(e, t) {
                    for (var n = 0; t > n; n += 2)
                        e.push(n);
                    return e
                }
                ),
                odd: h(function(e, t) {
                    for (var n = 1; t > n; n += 2)
                        e.push(n);
                    return e
                }
                ),
                lt: h(function(e, t, n) {
                    for (var i = 0 > n ? n + t : n; --i >= 0; )
                        e.push(i);
                    return e
                }
                ),
                gt: h(function(e, t, n) {
                    for (var i = 0 > n ? n + t : n; t > ++i; )
                        e.push(i);
                    return e
                }
                )
            }
        };
        for (S in {
            radio: !0,
            checkbox: !0,
            file: !0,
            password: !0,
            image: !0
        })
            j.pseudos[S] = p(S);
        for (S in {
            submit: !0,
            reset: !0
        })
            j.pseudos[S] = f(S);
        I = n.compile = function(e, t) {
            var n, i = [], r = [], o = V[e + " "];
            if (!o) {
                for (t || (t = g(e)),
                n = t.length; n--; )
                    o = _(t[n]),
                    o[R] ? i.push(o) : r.push(o);
                o = V(e, w(r, i))
            }
            return o
        }
        ,
        j.pseudos.nth = j.pseudos.eq,
        k.prototype = j.filters = j.pseudos,
        j.setFilters = new k,
        T.sortStable = R.split("").sort(Q).join("") === R,
        D(),
        [0, 0].sort(Q),
        T.detectDuplicates = J,
        lt.find = n,
        lt.expr = n.selectors,
        lt.expr[":"] = lt.expr.pseudos,
        lt.unique = n.uniqueSort,
        lt.text = n.getText,
        lt.isXMLDoc = n.isXML,
        lt.contains = n.contains
    }
    (e);
    var kt = {};
    lt.Callbacks = function(e) {
        e = "string" == typeof e ? kt[e] || i(e) : lt.extend({}, e);
        var n, r, o, a, s, c, u = [], l = !e.once && [], d = function(t) {
            for (r = e.memory && t,
            o = !0,
            s = c || 0,
            c = 0,
            a = u.length,
            n = !0; u && a > s; s++)
                if (u[s].apply(t[0], t[1]) === !1 && e.stopOnFalse) {
                    r = !1;
                    break
                }
            n = !1,
            u && (l ? l.length && d(l.shift()) : r ? u = [] : p.disable())
        }
        , p = {
            add: function() {
                if (u) {
                    var t = u.length;
                    !function i(t) {
                        lt.each(t, function(t, n) {
                            var r = lt.type(n);
                            "function" === r ? e.unique && p.has(n) || u.push(n) : n && n.length && "string" !== r && i(n)
                        }
                        )
                    }
                    (arguments),
                    n ? a = u.length : r && (c = t,
                    d(r))
                }
                return this
            },
            remove: function() {
                return u && lt.each(arguments, function(e, t) {
                    for (var i; (i = lt.inArray(t, u, i)) > -1; )
                        u.splice(i, 1),
                        n && (a >= i && a--,
                        s >= i && s--)
                }
                ),
                this
            },
            has: function(e) {
                return e ? lt.inArray(e, u) > -1 : !(!u || !u.length)
            },
            empty: function() {
                return u = [],
                a = 0,
                this
            },
            disable: function() {
                return u = l = r = t,
                this
            },
            disabled: function() {
                return !u
            },
            lock: function() {
                return l = t,
                r || p.disable(),
                this
            },
            locked: function() {
                return !l
            },
            fireWith: function(e, t) {
                return t = t || [],
                t = [e, t.slice ? t.slice() : t],
                !u || o && !l || (n ? l.push(t) : d(t)),
                this
            },
            fire: function() {
                return p.fireWith(this, arguments),
                this
            },
            fired: function() {
                return !!o
            }
        };
        return p
    }
    ,
    lt.extend({
        Deferred: function(e) {
            var t = [["resolve", "done", lt.Callbacks("once memory"), "resolved"], ["reject", "fail", lt.Callbacks("once memory"), "rejected"], ["notify", "progress", lt.Callbacks("memory")]]
              , n = "pending"
              , i = {
                state: function() {
                    return n
                },
                always: function() {
                    return r.done(arguments).fail(arguments),
                    this
                },
                then: function() {
                    var e = arguments;
                    return lt.Deferred(function(n) {
                        lt.each(t, function(t, o) {
                            var a = o[0]
                              , s = lt.isFunction(e[t]) && e[t];
                            r[o[1]](function() {
                                var e = s && s.apply(this, arguments);
                                e && lt.isFunction(e.promise) ? e.promise().done(n.resolve).fail(n.reject).progress(n.notify) : n[a + "With"](this === i ? n.promise() : this, s ? [e] : arguments)
                            }
                            )
                        }
                        ),
                        e = null 
                    }
                    ).promise()
                },
                promise: function(e) {
                    return null  != e ? lt.extend(e, i) : i
                }
            }
              , r = {};
            return i.pipe = i.then,
            lt.each(t, function(e, o) {
                var a = o[2]
                  , s = o[3];
                i[o[1]] = a.add,
                s && a.add(function() {
                    n = s
                }
                , t[1 ^ e][2].disable, t[2][2].lock),
                r[o[0]] = function() {
                    return r[o[0] + "With"](this === r ? i : this, arguments),
                    this
                }
                ,
                r[o[0] + "With"] = a.fireWith
            }
            ),
            i.promise(r),
            e && e.call(r, r),
            r
        },
        when: function(e) {
            var t, n, i, r = 0, o = ot.call(arguments), a = o.length, s = 1 !== a || e && lt.isFunction(e.promise) ? a : 0, c = 1 === s ? e : lt.Deferred(), u = function(e, n, i) {
                return function(r) {
                    n[e] = this,
                    i[e] = arguments.length > 1 ? ot.call(arguments) : r,
                    i === t ? c.notifyWith(n, i) : --s || c.resolveWith(n, i)
                }
            }
            ;
            if (a > 1)
                for (t = Array(a),
                n = Array(a),
                i = Array(a); a > r; r++)
                    o[r] && lt.isFunction(o[r].promise) ? o[r].promise().done(u(r, i, o)).fail(c.reject).progress(u(r, n, t)) : --s;
            return s || c.resolveWith(i, o),
            c.promise()
        }
    }),
    lt.support = function(t) {
        var n, i, r, o, a, s, c, u, l, d = J.createElement("div");
        if (d.setAttribute("className", "t"),
        d.innerHTML = "  <link/><table></table><a href='/a'>a</a><input type='checkbox'/>",
        n = d.getElementsByTagName("*") || [],
        i = d.getElementsByTagName("a")[0],
        !i || !i.style || !n.length)
            return t;
        o = J.createElement("select"),
        s = o.appendChild(J.createElement("option")),
        r = d.getElementsByTagName("input")[0],
        i.style.cssText = "top:1px;float:left;opacity:.5",
        t.getSetAttribute = "t" !== d.className,
        t.leadingWhitespace = 3 === d.firstChild.nodeType,
        t.tbody = !d.getElementsByTagName("tbody").length,
        t.htmlSerialize = !!d.getElementsByTagName("link").length,
        t.style = /top/.test(i.getAttribute("style")),
        t.hrefNormalized = "/a" === i.getAttribute("href"),
        t.opacity = /^0.5/.test(i.style.opacity),
        t.cssFloat = !!i.style.cssFloat,
        t.checkOn = !!r.value,
        t.optSelected = s.selected,
        t.enctype = !!J.createElement("form").enctype,
        t.html5Clone = "<:nav></:nav>" !== J.createElement("nav").cloneNode(!0).outerHTML,
        t.inlineBlockNeedsLayout = !1,
        t.shrinkWrapBlocks = !1,
        t.pixelPosition = !1,
        t.deleteExpando = !0,
        t.noCloneEvent = !0,
        t.reliableMarginRight = !0,
        t.boxSizingReliable = !0,
        r.checked = !0,
        t.noCloneChecked = r.cloneNode(!0).checked,
        o.disabled = !0,
        t.optDisabled = !s.disabled;
        try {
            delete d.test
        } catch (p) {
            t.deleteExpando = !1
        }
        r = J.createElement("input"),
        r.setAttribute("value", ""),
        t.input = "" === r.getAttribute("value"),
        r.value = "t",
        r.setAttribute("type", "radio"),
        t.radioValue = "t" === r.value,
        r.setAttribute("checked", "t"),
        r.setAttribute("name", "t"),
        a = J.createDocumentFragment(),
        a.appendChild(r),
        t.appendChecked = r.checked,
        t.checkClone = a.cloneNode(!0).cloneNode(!0).lastChild.checked,
        d.attachEvent && (d.attachEvent("onclick", function() {
            t.noCloneEvent = !1
        }
        ),
        d.cloneNode(!0).click());
        for (l in {
            submit: !0,
            change: !0,
            focusin: !0
        })
            d.setAttribute(c = "on" + l, "t"),
            t[l + "Bubbles"] = c in e || d.attributes[c].expando === !1;
        d.style.backgroundClip = "content-box",
        d.cloneNode(!0).style.backgroundClip = "",
        t.clearCloneStyle = "content-box" === d.style.backgroundClip;
        for (l in lt(t))
            break;
        return t.ownLast = "0" !== l,
        lt(function() {
            var n, i, r, o = "padding:0;margin:0;border:0;display:block;box-sizing:content-box;-moz-box-sizing:content-box;-webkit-box-sizing:content-box;", a = J.getElementsByTagName("body")[0];
            a && (n = J.createElement("div"),
            n.style.cssText = "border:0;width:0;height:0;position:absolute;top:0;left:-9999px;margin-top:1px",
            a.appendChild(n).appendChild(d),
            d.innerHTML = "<table><tr><td></td><td>t</td></tr></table>",
            r = d.getElementsByTagName("td"),
            r[0].style.cssText = "padding:0;margin:0;border:0;display:none",
            u = 0 === r[0].offsetHeight,
            r[0].style.display = "",
            r[1].style.display = "none",
            t.reliableHiddenOffsets = u && 0 === r[0].offsetHeight,
            d.innerHTML = "",
            d.style.cssText = "box-sizing:border-box;-moz-box-sizing:border-box;-webkit-box-sizing:border-box;padding:1px;border:1px;display:block;width:4px;margin-top:1%;position:absolute;top:1%;",
            lt.swap(a, null  != a.style.zoom ? {
                zoom: 1
            } : {}, function() {
                t.boxSizing = 4 === d.offsetWidth
            }
            ),
            e.getComputedStyle && (t.pixelPosition = "1%" !== (e.getComputedStyle(d, null ) || {}).top,
            t.boxSizingReliable = "4px" === (e.getComputedStyle(d, null ) || {
                width: "4px"
            }).width,
            i = d.appendChild(J.createElement("div")),
            i.style.cssText = d.style.cssText = o,
            i.style.marginRight = i.style.width = "0",
            d.style.width = "1px",
            t.reliableMarginRight = !parseFloat((e.getComputedStyle(i, null ) || {}).marginRight)),
            typeof d.style.zoom !== U && (d.innerHTML = "",
            d.style.cssText = o + "width:1px;padding:1px;display:inline;zoom:1",
            t.inlineBlockNeedsLayout = 3 === d.offsetWidth,
            d.style.display = "block",
            d.innerHTML = "<div></div>",
            d.firstChild.style.width = "5px",
            t.shrinkWrapBlocks = 3 !== d.offsetWidth,
            t.inlineBlockNeedsLayout && (a.style.zoom = 1)),
            a.removeChild(n),
            n = d = r = i = null )
        }
        ),
        n = o = a = s = i = r = null ,
        t
    }
    ({});
    var St = /(?:\{[\s\S]*\}|\[[\s\S]*\])$/
      , Tt = /([A-Z])/g;
    lt.extend({
        cache: {},
        noData: {
            applet: !0,
            embed: !0,
            object: "clsid:D27CDB6E-AE6D-11cf-96B8-444553540000"
        },
        hasData: function(e) {
            return e = e.nodeType ? lt.cache[e[lt.expando]] : e[lt.expando],
            !!e && !s(e)
        },
        data: function(e, t, n) {
            return r(e, t, n)
        },
        removeData: function(e, t) {
            return o(e, t)
        },
        _data: function(e, t, n) {
            return r(e, t, n, !0)
        },
        _removeData: function(e, t) {
            return o(e, t, !0)
        },
        acceptData: function(e) {
            if (e.nodeType && 1 !== e.nodeType && 9 !== e.nodeType)
                return !1;
            var t = e.nodeName && lt.noData[e.nodeName.toLowerCase()];
            return !t || t !== !0 && e.getAttribute("classid") === t
        }
    }),
    lt.fn.extend({
        data: function(e, n) {
            var i, r, o = null , s = 0, c = this[0];
            if (e === t) {
                if (this.length && (o = lt.data(c),
                1 === c.nodeType && !lt._data(c, "parsedAttrs"))) {
                    for (i = c.attributes; i.length > s; s++)
                        r = i[s].name,
                        0 === r.indexOf("data-") && (r = lt.camelCase(r.slice(5)),
                        a(c, r, o[r]));
                    lt._data(c, "parsedAttrs", !0)
                }
                return o
            }
            return "object" == typeof e ? this.each(function() {
                lt.data(this, e)
            }
            ) : arguments.length > 1 ? this.each(function() {
                lt.data(this, e, n)
            }
            ) : c ? a(c, e, lt.data(c, e)) : null 
        },
        removeData: function(e) {
            return this.each(function() {
                lt.removeData(this, e)
            }
            )
        }
    }),
    lt.extend({
        queue: function(e, n, i) {
            var r;
            return e ? (n = (n || "fx") + "queue",
            r = lt._data(e, n),
            i && (!r || lt.isArray(i) ? r = lt._data(e, n, lt.makeArray(i)) : r.push(i)),
            r || []) : t
        },
        dequeue: function(e, t) {
            t = t || "fx";
            var n = lt.queue(e, t)
              , i = n.length
              , r = n.shift()
              , o = lt._queueHooks(e, t)
              , a = function() {
                lt.dequeue(e, t)
            }
            ;
            "inprogress" === r && (r = n.shift(),
            i--),
            r && ("fx" === t && n.unshift("inprogress"),
            delete o.stop,
            r.call(e, a, o)),
            !i && o && o.empty.fire()
        },
        _queueHooks: function(e, t) {
            var n = t + "queueHooks";
            return lt._data(e, n) || lt._data(e, n, {
                empty: lt.Callbacks("once memory").add(function() {
                    lt._removeData(e, t + "queue"),
                    lt._removeData(e, n)
                }
                )
            })
        }
    }),
    lt.fn.extend({
        queue: function(e, n) {
            var i = 2;
            return "string" != typeof e && (n = e,
            e = "fx",
            i--),
            i > arguments.length ? lt.queue(this[0], e) : n === t ? this : this.each(function() {
                var t = lt.queue(this, e, n);
                lt._queueHooks(this, e),
                "fx" === e && "inprogress" !== t[0] && lt.dequeue(this, e)
            }
            )
        },
        dequeue: function(e) {
            return this.each(function() {
                lt.dequeue(this, e)
            }
            )
        },
        delay: function(e, t) {
            return e = lt.fx ? lt.fx.speeds[e] || e : e,
            t = t || "fx",
            this.queue(t, function(t, n) {
                var i = setTimeout(t, e);
                n.stop = function() {
                    clearTimeout(i)
                }
            }
            )
        },
        clearQueue: function(e) {
            return this.queue(e || "fx", [])
        },
        promise: function(e, n) {
            var i, r = 1, o = lt.Deferred(), a = this, s = this.length, c = function() {
                --r || o.resolveWith(a, [a])
            }
            ;
            for ("string" != typeof e && (n = e,
            e = t),
            e = e || "fx"; s--; )
                i = lt._data(a[s], e + "queueHooks"),
                i && i.empty && (r++,
                i.empty.add(c));
            return c(),
            o.promise(n)
        }
    });
    var Nt, jt, Et = /[\t\r\n\f]/g, At = /\r/g, It = /^(?:input|select|textarea|button|object)$/i, Lt = /^(?:a|area)$/i, Ot = /^(?:checked|selected)$/i, Dt = lt.support.getSetAttribute, Mt = lt.support.input;
    lt.fn.extend({
        attr: function(e, t) {
            return lt.access(this, lt.attr, e, t, arguments.length > 1)
        },
        removeAttr: function(e) {
            return this.each(function() {
                lt.removeAttr(this, e)
            }
            )
        },
        prop: function(e, t) {
            return lt.access(this, lt.prop, e, t, arguments.length > 1)
        },
        removeProp: function(e) {
            return e = lt.propFix[e] || e,
            this.each(function() {
                try {
                    this[e] = t,
                    delete this[e]
                } catch (n) {}
            }
            )
        },
        addClass: function(e) {
            var t, n, i, r, o, a = 0, s = this.length, c = "string" == typeof e && e;
            if (lt.isFunction(e))
                return this.each(function(t) {
                    lt(this).addClass(e.call(this, t, this.className))
                }
                );
            if (c)
                for (t = (e || "").match(pt) || []; s > a; a++)
                    if (n = this[a],
                    i = 1 === n.nodeType && (n.className ? (" " + n.className + " ").replace(Et, " ") : " ")) {
                        for (o = 0; r = t[o++]; )
                            0 > i.indexOf(" " + r + " ") && (i += r + " ");
                        n.className = lt.trim(i)
                    }
            return this
        },
        removeClass: function(e) {
            var t, n, i, r, o, a = 0, s = this.length, c = 0 === arguments.length || "string" == typeof e && e;
            if (lt.isFunction(e))
                return this.each(function(t) {
                    lt(this).removeClass(e.call(this, t, this.className))
                }
                );
            if (c)
                for (t = (e || "").match(pt) || []; s > a; a++)
                    if (n = this[a],
                    i = 1 === n.nodeType && (n.className ? (" " + n.className + " ").replace(Et, " ") : "")) {
                        for (o = 0; r = t[o++]; )
                            for (; i.indexOf(" " + r + " ") >= 0; )
                                i = i.replace(" " + r + " ", " ");
                        n.className = e ? lt.trim(i) : ""
                    }
            return this
        },
        toggleClass: function(e, t) {
            var n = typeof e
              , i = "boolean" == typeof t;
            return this.each(lt.isFunction(e) ? function(n) {
                lt(this).toggleClass(e.call(this, n, this.className, t), t)
            }
             : function() {
                if ("string" === n)
                    for (var r, o = 0, a = lt(this), s = t, c = e.match(pt) || []; r = c[o++]; )
                        s = i ? s : !a.hasClass(r),
                        a[s ? "addClass" : "removeClass"](r);
                else
                    (n === U || "boolean" === n) && (this.className && lt._data(this, "__className__", this.className),
                    this.className = this.className || e === !1 ? "" : lt._data(this, "__className__") || "")
            }
            )
        },
        hasClass: function(e) {
            for (var t = " " + e + " ", n = 0, i = this.length; i > n; n++)
                if (1 === this[n].nodeType && (" " + this[n].className + " ").replace(Et, " ").indexOf(t) >= 0)
                    return !0;
            return !1
        },
        val: function(e) {
            var n, i, r, o = this[0];
            return arguments.length ? (r = lt.isFunction(e),
            this.each(function(n) {
                var o;
                1 === this.nodeType && (o = r ? e.call(this, n, lt(this).val()) : e,
                null  == o ? o = "" : "number" == typeof o ? o += "" : lt.isArray(o) && (o = lt.map(o, function(e) {
                    return null  == e ? "" : e + ""
                }
                )),
                i = lt.valHooks[this.type] || lt.valHooks[this.nodeName.toLowerCase()],
                i && "set" in i && i.set(this, o, "value") !== t || (this.value = o))
            }
            )) : o ? (i = lt.valHooks[o.type] || lt.valHooks[o.nodeName.toLowerCase()],
            i && "get" in i && (n = i.get(o, "value")) !== t ? n : (n = o.value,
            "string" == typeof n ? n.replace(At, "") : null  == n ? "" : n)) : void 0
        }
    }),
    lt.extend({
        valHooks: {
            option: {
                get: function(e) {
                    var t = lt.find.attr(e, "value");
                    return null  != t ? t : e.text
                }
            },
            select: {
                get: function(e) {
                    for (var t, n, i = e.options, r = e.selectedIndex, o = "select-one" === e.type || 0 > r, a = o ? null  : [], s = o ? r + 1 : i.length, c = 0 > r ? s : o ? r : 0; s > c; c++)
                        if (n = i[c],
                        !(!n.selected && c !== r || (lt.support.optDisabled ? n.disabled : null  !== n.getAttribute("disabled")) || n.parentNode.disabled && lt.nodeName(n.parentNode, "optgroup"))) {
                            if (t = lt(n).val(),
                            o)
                                return t;
                            a.push(t)
                        }
                    return a
                },
                set: function(e, t) {
                    for (var n, i, r = e.options, o = lt.makeArray(t), a = r.length; a--; )
                        i = r[a],
                        (i.selected = lt.inArray(lt(i).val(), o) >= 0) && (n = !0);
                    return n || (e.selectedIndex = -1),
                    o
                }
            }
        },
        attr: function(e, n, i) {
            var r, o, a = e.nodeType;
            return e && 3 !== a && 8 !== a && 2 !== a ? typeof e.getAttribute === U ? lt.prop(e, n, i) : (1 === a && lt.isXMLDoc(e) || (n = n.toLowerCase(),
            r = lt.attrHooks[n] || (lt.expr.match.bool.test(n) ? jt : Nt)),
            i === t ? r && "get" in r && null  !== (o = r.get(e, n)) ? o : (o = lt.find.attr(e, n),
            null  == o ? t : o) : null  !== i ? r && "set" in r && (o = r.set(e, i, n)) !== t ? o : (e.setAttribute(n, i + ""),
            i) : (lt.removeAttr(e, n),
            t)) : void 0
        },
        removeAttr: function(e, t) {
            var n, i, r = 0, o = t && t.match(pt);
            if (o && 1 === e.nodeType)
                for (; n = o[r++]; )
                    i = lt.propFix[n] || n,
                    lt.expr.match.bool.test(n) ? Mt && Dt || !Ot.test(n) ? e[i] = !1 : e[lt.camelCase("default-" + n)] = e[i] = !1 : lt.attr(e, n, ""),
                    e.removeAttribute(Dt ? n : i)
        },
        attrHooks: {
            type: {
                set: function(e, t) {
                    if (!lt.support.radioValue && "radio" === t && lt.nodeName(e, "input")) {
                        var n = e.value;
                        return e.setAttribute("type", t),
                        n && (e.value = n),
                        t
                    }
                }
            }
        },
        propFix: {
            "for": "htmlFor",
            "class": "className"
        },
        prop: function(e, n, i) {
            var r, o, a, s = e.nodeType;
            return e && 3 !== s && 8 !== s && 2 !== s ? (a = 1 !== s || !lt.isXMLDoc(e),
            a && (n = lt.propFix[n] || n,
            o = lt.propHooks[n]),
            i !== t ? o && "set" in o && (r = o.set(e, i, n)) !== t ? r : e[n] = i : o && "get" in o && null  !== (r = o.get(e, n)) ? r : e[n]) : void 0
        },
        propHooks: {
            tabIndex: {
                get: function(e) {
                    var t = lt.find.attr(e, "tabindex");
                    return t ? parseInt(t, 10) : It.test(e.nodeName) || Lt.test(e.nodeName) && e.href ? 0 : -1
                }
            }
        }
    }),
    jt = {
        set: function(e, t, n) {
            return t === !1 ? lt.removeAttr(e, n) : Mt && Dt || !Ot.test(n) ? e.setAttribute(!Dt && lt.propFix[n] || n, n) : e[lt.camelCase("default-" + n)] = e[n] = !0,
            n
        }
    },
    lt.each(lt.expr.match.bool.source.match(/\w+/g), function(e, n) {
        var i = lt.expr.attrHandle[n] || lt.find.attr;
        lt.expr.attrHandle[n] = Mt && Dt || !Ot.test(n) ? function(e, n, r) {
            var o = lt.expr.attrHandle[n]
              , a = r ? t : (lt.expr.attrHandle[n] = t) != i(e, n, r) ? n.toLowerCase() : null ;
            return lt.expr.attrHandle[n] = o,
            a
        }
         : function(e, n, i) {
            return i ? t : e[lt.camelCase("default-" + n)] ? n.toLowerCase() : null 
        }
    }
    ),
    Mt && Dt || (lt.attrHooks.value = {
        set: function(e, n, i) {
            return lt.nodeName(e, "input") ? (e.defaultValue = n,
            t) : Nt && Nt.set(e, n, i)
        }
    }),
    Dt || (Nt = {
        set: function(e, n, i) {
            var r = e.getAttributeNode(i);
            return r || e.setAttributeNode(r = e.ownerDocument.createAttribute(i)),
            r.value = n += "",
            "value" === i || n === e.getAttribute(i) ? n : t
        }
    },
    lt.expr.attrHandle.id = lt.expr.attrHandle.name = lt.expr.attrHandle.coords = function(e, n, i) {
        var r;
        return i ? t : (r = e.getAttributeNode(n)) && "" !== r.value ? r.value : null 
    }
    ,
    lt.valHooks.button = {
        get: function(e, n) {
            var i = e.getAttributeNode(n);
            return i && i.specified ? i.value : t
        },
        set: Nt.set
    },
    lt.attrHooks.contenteditable = {
        set: function(e, t, n) {
            Nt.set(e, "" === t ? !1 : t, n)
        }
    },
    lt.each(["width", "height"], function(e, n) {
        lt.attrHooks[n] = {
            set: function(e, i) {
                return "" === i ? (e.setAttribute(n, "auto"),
                i) : t
            }
        }
    }
    )),
    lt.support.hrefNormalized || lt.each(["href", "src"], function(e, t) {
        lt.propHooks[t] = {
            get: function(e) {
                return e.getAttribute(t, 4)
            }
        }
    }
    ),
    lt.support.style || (lt.attrHooks.style = {
        get: function(e) {
            return e.style.cssText || t
        },
        set: function(e, t) {
            return e.style.cssText = t + ""
        }
    }),
    lt.support.optSelected || (lt.propHooks.selected = {
        get: function(e) {
            var t = e.parentNode;
            return t && (t.selectedIndex,
            t.parentNode && t.parentNode.selectedIndex),
            null 
        }
    }),
    lt.each(["tabIndex", "readOnly", "maxLength", "cellSpacing", "cellPadding", "rowSpan", "colSpan", "useMap", "frameBorder", "contentEditable"], function() {
        lt.propFix[this.toLowerCase()] = this
    }
    ),
    lt.support.enctype || (lt.propFix.enctype = "encoding"),
    lt.each(["radio", "checkbox"], function() {
        lt.valHooks[this] = {
            set: function(e, n) {
                return lt.isArray(n) ? e.checked = lt.inArray(lt(e).val(), n) >= 0 : t
            }
        },
        lt.support.checkOn || (lt.valHooks[this].get = function(e) {
            return null  === e.getAttribute("value") ? "on" : e.value
        }
        )
    }
    );
    var Pt = /^(?:input|select|textarea)$/i
      , Ht = /^key/
      , Ft = /^(?:mouse|contextmenu)|click/
      , Bt = /^(?:focusinfocus|focusoutblur)$/
      , qt = /^([^.]*)(?:\.(.+)|)$/;
    lt.event = {
        global: {},
        add: function(e, n, i, r, o) {
            var a, s, c, u, l, d, p, f, h, g, m, v = lt._data(e);
            if (v) {
                for (i.handler && (u = i,
                i = u.handler,
                o = u.selector),
                i.guid || (i.guid = lt.guid++),
                (s = v.events) || (s = v.events = {}),
                (d = v.handle) || (d = v.handle = function(e) {
                    return typeof lt === U || e && lt.event.triggered === e.type ? t : lt.event.dispatch.apply(d.elem, arguments)
                }
                ,
                d.elem = e),
                n = (n || "").match(pt) || [""],
                c = n.length; c--; )
                    a = qt.exec(n[c]) || [],
                    h = m = a[1],
                    g = (a[2] || "").split(".").sort(),
                    h && (l = lt.event.special[h] || {},
                    h = (o ? l.delegateType : l.bindType) || h,
                    l = lt.event.special[h] || {},
                    p = lt.extend({
                        type: h,
                        origType: m,
                        data: r,
                        handler: i,
                        guid: i.guid,
                        selector: o,
                        needsContext: o && lt.expr.match.needsContext.test(o),
                        namespace: g.join(".")
                    }, u),
                    (f = s[h]) || (f = s[h] = [],
                    f.delegateCount = 0,
                    l.setup && l.setup.call(e, r, g, d) !== !1 || (e.addEventListener ? e.addEventListener(h, d, !1) : e.attachEvent && e.attachEvent("on" + h, d))),
                    l.add && (l.add.call(e, p),
                    p.handler.guid || (p.handler.guid = i.guid)),
                    o ? f.splice(f.delegateCount++, 0, p) : f.push(p),
                    lt.event.global[h] = !0);
                e = null 
            }
        },
        remove: function(e, t, n, i, r) {
            var o, a, s, c, u, l, d, p, f, h, g, m = lt.hasData(e) && lt._data(e);
            if (m && (l = m.events)) {
                for (t = (t || "").match(pt) || [""],
                u = t.length; u--; )
                    if (s = qt.exec(t[u]) || [],
                    f = g = s[1],
                    h = (s[2] || "").split(".").sort(),
                    f) {
                        for (d = lt.event.special[f] || {},
                        f = (i ? d.delegateType : d.bindType) || f,
                        p = l[f] || [],
                        s = s[2] && RegExp("(^|\\.)" + h.join("\\.(?:.*\\.|)") + "(\\.|$)"),
                        c = o = p.length; o--; )
                            a = p[o],
                            !r && g !== a.origType || n && n.guid !== a.guid || s && !s.test(a.namespace) || i && i !== a.selector && ("**" !== i || !a.selector) || (p.splice(o, 1),
                            a.selector && p.delegateCount--,
                            d.remove && d.remove.call(e, a));
                        c && !p.length && (d.teardown && d.teardown.call(e, h, m.handle) !== !1 || lt.removeEvent(e, f, m.handle),
                        delete l[f])
                    } else
                        for (f in l)
                            lt.event.remove(e, f + t[u], n, i, !0);
                lt.isEmptyObject(l) && (delete m.handle,
                lt._removeData(e, "events"))
            }
        },
        trigger: function(n, i, r, o) {
            var a, s, c, u, l, d, p, f = [r || J], h = ct.call(n, "type") ? n.type : n, g = ct.call(n, "namespace") ? n.namespace.split(".") : [];
            if (c = d = r = r || J,
            3 !== r.nodeType && 8 !== r.nodeType && !Bt.test(h + lt.event.triggered) && (h.indexOf(".") >= 0 && (g = h.split("."),
            h = g.shift(),
            g.sort()),
            s = 0 > h.indexOf(":") && "on" + h,
            n = n[lt.expando] ? n : new lt.Event(h,"object" == typeof n && n),
            n.isTrigger = o ? 2 : 3,
            n.namespace = g.join("."),
            n.namespace_re = n.namespace ? RegExp("(^|\\.)" + g.join("\\.(?:.*\\.|)") + "(\\.|$)") : null ,
            n.result = t,
            n.target || (n.target = r),
            i = null  == i ? [n] : lt.makeArray(i, [n]),
            l = lt.event.special[h] || {},
            o || !l.trigger || l.trigger.apply(r, i) !== !1)) {
                if (!o && !l.noBubble && !lt.isWindow(r)) {
                    for (u = l.delegateType || h,
                    Bt.test(u + h) || (c = c.parentNode); c; c = c.parentNode)
                        f.push(c),
                        d = c;
                    d === (r.ownerDocument || J) && f.push(d.defaultView || d.parentWindow || e)
                }
                for (p = 0; (c = f[p++]) && !n.isPropagationStopped(); )
                    n.type = p > 1 ? u : l.bindType || h,
                    a = (lt._data(c, "events") || {})[n.type] && lt._data(c, "handle"),
                    a && a.apply(c, i),
                    a = s && c[s],
                    a && lt.acceptData(c) && a.apply && a.apply(c, i) === !1 && n.preventDefault();
                if (n.type = h,
                !o && !n.isDefaultPrevented() && (!l._default || l._default.apply(f.pop(), i) === !1) && lt.acceptData(r) && s && r[h] && !lt.isWindow(r)) {
                    d = r[s],
                    d && (r[s] = null ),
                    lt.event.triggered = h;
                    try {
                        r[h]()
                    } catch (m) {}
                    lt.event.triggered = t,
                    d && (r[s] = d)
                }
                return n.result
            }
        },
        dispatch: function(e) {
            e = lt.event.fix(e);
            var n, i, r, o, a, s = [], c = ot.call(arguments), u = (lt._data(this, "events") || {})[e.type] || [], l = lt.event.special[e.type] || {};
            if (c[0] = e,
            e.delegateTarget = this,
            !l.preDispatch || l.preDispatch.call(this, e) !== !1) {
                for (s = lt.event.handlers.call(this, e, u),
                n = 0; (o = s[n++]) && !e.isPropagationStopped(); )
                    for (e.currentTarget = o.elem,
                    a = 0; (r = o.handlers[a++]) && !e.isImmediatePropagationStopped(); )
                        (!e.namespace_re || e.namespace_re.test(r.namespace)) && (e.handleObj = r,
                        e.data = r.data,
                        i = ((lt.event.special[r.origType] || {}).handle || r.handler).apply(o.elem, c),
                        i !== t && (e.result = i) === !1 && (e.preventDefault(),
                        e.stopPropagation()));
                return l.postDispatch && l.postDispatch.call(this, e),
                e.result
            }
        },
        handlers: function(e, n) {
            var i, r, o, a, s = [], c = n.delegateCount, u = e.target;
            if (c && u.nodeType && (!e.button || "click" !== e.type))
                for (; u != this; u = u.parentNode || this)
                    if (1 === u.nodeType && (u.disabled !== !0 || "click" !== e.type)) {
                        for (o = [],
                        a = 0; c > a; a++)
                            r = n[a],
                            i = r.selector + " ",
                            o[i] === t && (o[i] = r.needsContext ? lt(i, this).index(u) >= 0 : lt.find(i, this, null , [u]).length),
                            o[i] && o.push(r);
                        o.length && s.push({
                            elem: u,
                            handlers: o
                        })
                    }
            return n.length > c && s.push({
                elem: this,
                handlers: n.slice(c)
            }),
            s
        },
        fix: function(e) {
            if (e[lt.expando])
                return e;
            var t, n, i, r = e.type, o = e, a = this.fixHooks[r];
            for (a || (this.fixHooks[r] = a = Ft.test(r) ? this.mouseHooks : Ht.test(r) ? this.keyHooks : {}),
            i = a.props ? this.props.concat(a.props) : this.props,
            e = new lt.Event(o),
            t = i.length; t--; )
                n = i[t],
                e[n] = o[n];
            return e.target || (e.target = o.srcElement || J),
            3 === e.target.nodeType && (e.target = e.target.parentNode),
            e.metaKey = !!e.metaKey,
            a.filter ? a.filter(e, o) : e
        },
        props: "altKey bubbles cancelable ctrlKey currentTarget eventPhase metaKey relatedTarget shiftKey target timeStamp view which".split(" "),
        fixHooks: {},
        keyHooks: {
            props: "char charCode key keyCode".split(" "),
            filter: function(e, t) {
                return null  == e.which && (e.which = null  != t.charCode ? t.charCode : t.keyCode),
                e
            }
        },
        mouseHooks: {
            props: "button buttons clientX clientY fromElement offsetX offsetY pageX pageY screenX screenY toElement".split(" "),
            filter: function(e, n) {
                var i, r, o, a = n.button, s = n.fromElement;
                return null  == e.pageX && null  != n.clientX && (r = e.target.ownerDocument || J,
                o = r.documentElement,
                i = r.body,
                e.pageX = n.clientX + (o && o.scrollLeft || i && i.scrollLeft || 0) - (o && o.clientLeft || i && i.clientLeft || 0),
                e.pageY = n.clientY + (o && o.scrollTop || i && i.scrollTop || 0) - (o && o.clientTop || i && i.clientTop || 0)),
                !e.relatedTarget && s && (e.relatedTarget = s === e.target ? n.toElement : s),
                e.which || a === t || (e.which = 1 & a ? 1 : 2 & a ? 3 : 4 & a ? 2 : 0),
                e
            }
        },
        special: {
            load: {
                noBubble: !0
            },
            focus: {
                trigger: function() {
                    if (this !== l() && this.focus)
                        try {
                            return this.focus(),
                            !1
                        } catch (e) {}
                },
                delegateType: "focusin"
            },
            blur: {
                trigger: function() {
                    return this === l() && this.blur ? (this.blur(),
                    !1) : t
                },
                delegateType: "focusout"
            },
            click: {
                trigger: function() {
                    return lt.nodeName(this, "input") && "checkbox" === this.type && this.click ? (this.click(),
                    !1) : t
                },
                _default: function(e) {
                    return lt.nodeName(e.target, "a")
                }
            },
            beforeunload: {
                postDispatch: function(e) {
                    e.result !== t && (e.originalEvent.returnValue = e.result)
                }
            }
        },
        simulate: function(e, t, n, i) {
            var r = lt.extend(new lt.Event, n, {
                type: e,
                isSimulated: !0,
                originalEvent: {}
            });
            i ? lt.event.trigger(r, null , t) : lt.event.dispatch.call(t, r),
            r.isDefaultPrevented() && n.preventDefault()
        }
    },
    lt.removeEvent = J.removeEventListener ? function(e, t, n) {
        e.removeEventListener && e.removeEventListener(t, n, !1)
    }
     : function(e, t, n) {
        var i = "on" + t;
        e.detachEvent && (typeof e[i] === U && (e[i] = null ),
        e.detachEvent(i, n))
    }
    ,
    lt.Event = function(e, n) {
        return this instanceof lt.Event ? (e && e.type ? (this.originalEvent = e,
        this.type = e.type,
        this.isDefaultPrevented = e.defaultPrevented || e.returnValue === !1 || e.getPreventDefault && e.getPreventDefault() ? c : u) : this.type = e,
        n && lt.extend(this, n),
        this.timeStamp = e && e.timeStamp || lt.now(),
        this[lt.expando] = !0,
        t) : new lt.Event(e,n)
    }
    ,
    lt.Event.prototype = {
        isDefaultPrevented: u,
        isPropagationStopped: u,
        isImmediatePropagationStopped: u,
        preventDefault: function() {
            var e = this.originalEvent;
            this.isDefaultPrevented = c,
            e && (e.preventDefault ? e.preventDefault() : e.returnValue = !1)
        },
        stopPropagation: function() {
            var e = this.originalEvent;
            this.isPropagationStopped = c,
            e && (e.stopPropagation && e.stopPropagation(),
            e.cancelBubble = !0)
        },
        stopImmediatePropagation: function() {
            this.isImmediatePropagationStopped = c,
            this.stopPropagation()
        }
    },
    lt.each({
        mouseenter: "mouseover",
        mouseleave: "mouseout"
    }, function(e, t) {
        lt.event.special[e] = {
            delegateType: t,
            bindType: t,
            handle: function(e) {
                var n, i = this, r = e.relatedTarget, o = e.handleObj;
                return (!r || r !== i && !lt.contains(i, r)) && (e.type = o.origType,
                n = o.handler.apply(this, arguments),
                e.type = t),
                n
            }
        }
    }
    ),
    lt.support.submitBubbles || (lt.event.special.submit = {
        setup: function() {
            return lt.nodeName(this, "form") ? !1 : (lt.event.add(this, "click._submit keypress._submit", function(e) {
                var n = e.target
                  , i = lt.nodeName(n, "input") || lt.nodeName(n, "button") ? n.form : t;
                i && !lt._data(i, "submitBubbles") && (lt.event.add(i, "submit._submit", function(e) {
                    e._submit_bubble = !0
                }
                ),
                lt._data(i, "submitBubbles", !0))
            }
            ),
            t)
        },
        postDispatch: function(e) {
            e._submit_bubble && (delete e._submit_bubble,
            this.parentNode && !e.isTrigger && lt.event.simulate("submit", this.parentNode, e, !0))
        },
        teardown: function() {
            return lt.nodeName(this, "form") ? !1 : (lt.event.remove(this, "._submit"),
            t)
        }
    }),
    lt.support.changeBubbles || (lt.event.special.change = {
        setup: function() {
            return Pt.test(this.nodeName) ? (("checkbox" === this.type || "radio" === this.type) && (lt.event.add(this, "propertychange._change", function(e) {
                "checked" === e.originalEvent.propertyName && (this._just_changed = !0)
            }
            ),
            lt.event.add(this, "click._change", function(e) {
                this._just_changed && !e.isTrigger && (this._just_changed = !1),
                lt.event.simulate("change", this, e, !0)
            }
            )),
            !1) : (lt.event.add(this, "beforeactivate._change", function(e) {
                var t = e.target;
                Pt.test(t.nodeName) && !lt._data(t, "changeBubbles") && (lt.event.add(t, "change._change", function(e) {
                    !this.parentNode || e.isSimulated || e.isTrigger || lt.event.simulate("change", this.parentNode, e, !0)
                }
                ),
                lt._data(t, "changeBubbles", !0))
            }
            ),
            t)
        },
        handle: function(e) {
            var n = e.target;
            return this !== n || e.isSimulated || e.isTrigger || "radio" !== n.type && "checkbox" !== n.type ? e.handleObj.handler.apply(this, arguments) : t
        },
        teardown: function() {
            return lt.event.remove(this, "._change"),
            !Pt.test(this.nodeName)
        }
    }),
    lt.support.focusinBubbles || lt.each({
        focus: "focusin",
        blur: "focusout"
    }, function(e, t) {
        var n = 0
          , i = function(e) {
            lt.event.simulate(t, e.target, lt.event.fix(e), !0)
        }
        ;
        lt.event.special[t] = {
            setup: function() {
                0 === n++ && J.addEventListener(e, i, !0)
            },
            teardown: function() {
                0 === --n && J.removeEventListener(e, i, !0)
            }
        }
    }
    ),
    lt.fn.extend({
        on: function(e, n, i, r, o) {
            var a, s;
            if ("object" == typeof e) {
                "string" != typeof n && (i = i || n,
                n = t);
                for (a in e)
                    this.on(a, n, i, e[a], o);
                return this
            }
            if (null  == i && null  == r ? (r = n,
            i = n = t) : null  == r && ("string" == typeof n ? (r = i,
            i = t) : (r = i,
            i = n,
            n = t)),
            r === !1)
                r = u;
            else if (!r)
                return this;
            return 1 === o && (s = r,
            r = function(e) {
                return lt().off(e),
                s.apply(this, arguments)
            }
            ,
            r.guid = s.guid || (s.guid = lt.guid++)),
            this.each(function() {
                lt.event.add(this, e, r, i, n)
            }
            )
        },
        one: function(e, t, n, i) {
            return this.on(e, t, n, i, 1)
        },
        off: function(e, n, i) {
            var r, o;
            if (e && e.preventDefault && e.handleObj)
                return r = e.handleObj,
                lt(e.delegateTarget).off(r.namespace ? r.origType + "." + r.namespace : r.origType, r.selector, r.handler),
                this;
            if ("object" == typeof e) {
                for (o in e)
                    this.off(o, n, e[o]);
                return this
            }
            return (n === !1 || "function" == typeof n) && (i = n,
            n = t),
            i === !1 && (i = u),
            this.each(function() {
                lt.event.remove(this, e, i, n)
            }
            )
        },
        trigger: function(e, t) {
            return this.each(function() {
                lt.event.trigger(e, t, this)
            }
            )
        },
        triggerHandler: function(e, n) {
            var i = this[0];
            return i ? lt.event.trigger(e, n, i, !0) : t
        }
    });
    var Wt = /^.[^:#\[\.,]*$/
      , Rt = /^(?:parents|prev(?:Until|All))/
      , zt = lt.expr.match.needsContext
      , Yt = {
        children: !0,
        contents: !0,
        next: !0,
        prev: !0
    };
    lt.fn.extend({
        find: function(e) {
            var t, n = [], i = this, r = i.length;
            if ("string" != typeof e)
                return this.pushStack(lt(e).filter(function() {
                    for (t = 0; r > t; t++)
                        if (lt.contains(i[t], this))
                            return !0
                }
                ));
            for (t = 0; r > t; t++)
                lt.find(e, i[t], n);
            return n = this.pushStack(r > 1 ? lt.unique(n) : n),
            n.selector = this.selector ? this.selector + " " + e : e,
            n
        },
        has: function(e) {
            var t, n = lt(e, this), i = n.length;
            return this.filter(function() {
                for (t = 0; i > t; t++)
                    if (lt.contains(this, n[t]))
                        return !0
            }
            )
        },
        not: function(e) {
            return this.pushStack(p(this, e || [], !0))
        },
        filter: function(e) {
            return this.pushStack(p(this, e || [], !1))
        },
        is: function(e) {
            return !!p(this, "string" == typeof e && zt.test(e) ? lt(e) : e || [], !1).length
        },
        closest: function(e, t) {
            for (var n, i = 0, r = this.length, o = [], a = zt.test(e) || "string" != typeof e ? lt(e, t || this.context) : 0; r > i; i++)
                for (n = this[i]; n && n !== t; n = n.parentNode)
                    if (11 > n.nodeType && (a ? a.index(n) > -1 : 1 === n.nodeType && lt.find.matchesSelector(n, e))) {
                        n = o.push(n);
                        break
                    }
            return this.pushStack(o.length > 1 ? lt.unique(o) : o)
        },
        index: function(e) {
            return e ? "string" == typeof e ? lt.inArray(this[0], lt(e)) : lt.inArray(e.jquery ? e[0] : e, this) : this[0] && this[0].parentNode ? this.first().prevAll().length : -1
        },
        add: function(e, t) {
            var n = "string" == typeof e ? lt(e, t) : lt.makeArray(e && e.nodeType ? [e] : e)
              , i = lt.merge(this.get(), n);
            return this.pushStack(lt.unique(i))
        },
        addBack: function(e) {
            return this.add(null  == e ? this.prevObject : this.prevObject.filter(e))
        }
    }),
    lt.each({
        parent: function(e) {
            var t = e.parentNode;
            return t && 11 !== t.nodeType ? t : null 
        },
        parents: function(e) {
            return lt.dir(e, "parentNode")
        },
        parentsUntil: function(e, t, n) {
            return lt.dir(e, "parentNode", n)
        },
        next: function(e) {
            return d(e, "nextSibling")
        },
        prev: function(e) {
            return d(e, "previousSibling")
        },
        nextAll: function(e) {
            return lt.dir(e, "nextSibling")
        },
        prevAll: function(e) {
            return lt.dir(e, "previousSibling")
        },
        nextUntil: function(e, t, n) {
            return lt.dir(e, "nextSibling", n)
        },
        prevUntil: function(e, t, n) {
            return lt.dir(e, "previousSibling", n)
        },
        siblings: function(e) {
            return lt.sibling((e.parentNode || {}).firstChild, e)
        },
        children: function(e) {
            return lt.sibling(e.firstChild)
        },
        contents: function(e) {
            return lt.nodeName(e, "iframe") ? e.contentDocument || e.contentWindow.document : lt.merge([], e.childNodes)
        }
    }, function(e, t) {
        lt.fn[e] = function(n, i) {
            var r = lt.map(this, t, n);
            return "Until" !== e.slice(-5) && (i = n),
            i && "string" == typeof i && (r = lt.filter(i, r)),
            this.length > 1 && (Yt[e] || (r = lt.unique(r)),
            Rt.test(e) && (r = r.reverse())),
            this.pushStack(r)
        }
    }
    ),
    lt.extend({
        filter: function(e, t, n) {
            var i = t[0];
            return n && (e = ":not(" + e + ")"),
            1 === t.length && 1 === i.nodeType ? lt.find.matchesSelector(i, e) ? [i] : [] : lt.find.matches(e, lt.grep(t, function(e) {
                return 1 === e.nodeType
            }
            ))
        },
        dir: function(e, n, i) {
            for (var r = [], o = e[n]; o && 9 !== o.nodeType && (i === t || 1 !== o.nodeType || !lt(o).is(i)); )
                1 === o.nodeType && r.push(o),
                o = o[n];
            return r
        },
        sibling: function(e, t) {
            for (var n = []; e; e = e.nextSibling)
                1 === e.nodeType && e !== t && n.push(e);
            return n
        }
    });
    var Gt = "abbr|article|aside|audio|bdi|canvas|data|datalist|details|figcaption|figure|footer|header|hgroup|mark|meter|nav|output|progress|section|summary|time|video"
      , Xt = / jQuery\d+="(?:null|\d+)"/g
      , Ut = RegExp("<(?:" + Gt + ")[\\s/>]", "i")
      , Vt = /^\s+/
      , Jt = /<(?!area|br|col|embed|hr|img|input|link|meta|param)(([\w:]+)[^>]*)\/>/gi
      , Qt = /<([\w:]+)/
      , Kt = /<tbody/i
      , Zt = /<|&#?\w+;/
      , en = /<(?:script|style|link)/i
      , tn = /^(?:checkbox|radio)$/i
      , nn = /checked\s*(?:[^=]|=\s*.checked.)/i
      , rn = /^$|\/(?:java|ecma)script/i
      , on = /^true\/(.*)/
      , an = /^\s*<!(?:\[CDATA\[|--)|(?:\]\]|--)>\s*$/g
      , sn = {
        option: [1, "<select multiple='multiple'>", "</select>"],
        legend: [1, "<fieldset>", "</fieldset>"],
        area: [1, "<map>", "</map>"],
        param: [1, "<object>", "</object>"],
        thead: [1, "<table>", "</table>"],
        tr: [2, "<table><tbody>", "</tbody></table>"],
        col: [2, "<table><tbody></tbody><colgroup>", "</colgroup></table>"],
        td: [3, "<table><tbody><tr>", "</tr></tbody></table>"],
        _default: lt.support.htmlSerialize ? [0, "", ""] : [1, "X<div>", "</div>"]
    }
      , cn = f(J)
      , un = cn.appendChild(J.createElement("div"));
    sn.optgroup = sn.option,
    sn.tbody = sn.tfoot = sn.colgroup = sn.caption = sn.thead,
    sn.th = sn.td,
    lt.fn.extend({
        text: function(e) {
            return lt.access(this, function(e) {
                return e === t ? lt.text(this) : this.empty().append((this[0] && this[0].ownerDocument || J).createTextNode(e))
            }
            , null , e, arguments.length)
        },
        append: function() {
            return this.domManip(arguments, function(e) {
                if (1 === this.nodeType || 11 === this.nodeType || 9 === this.nodeType) {
                    var t = h(this, e);
                    t.appendChild(e)
                }
            }
            )
        },
        prepend: function() {
            return this.domManip(arguments, function(e) {
                if (1 === this.nodeType || 11 === this.nodeType || 9 === this.nodeType) {
                    var t = h(this, e);
                    t.insertBefore(e, t.firstChild)
                }
            }
            )
        },
        before: function() {
            return this.domManip(arguments, function(e) {
                this.parentNode && this.parentNode.insertBefore(e, this)
            }
            )
        },
        after: function() {
            return this.domManip(arguments, function(e) {
                this.parentNode && this.parentNode.insertBefore(e, this.nextSibling)
            }
            )
        },
        remove: function(e, t) {
            for (var n, i = e ? lt.filter(e, this) : this, r = 0; null  != (n = i[r]); r++)
                t || 1 !== n.nodeType || lt.cleanData(x(n)),
                n.parentNode && (t && lt.contains(n.ownerDocument, n) && v(x(n, "script")),
                n.parentNode.removeChild(n));
            return this
        },
        empty: function() {
            for (var e, t = 0; null  != (e = this[t]); t++) {
                for (1 === e.nodeType && lt.cleanData(x(e, !1)); e.firstChild; )
                    e.removeChild(e.firstChild);
                e.options && lt.nodeName(e, "select") && (e.options.length = 0)
            }
            return this
        },
        clone: function(e, t) {
            return e = null  == e ? !1 : e,
            t = null  == t ? e : t,
            this.map(function() {
                return lt.clone(this, e, t)
            }
            )
        },
        html: function(e) {
            return lt.access(this, function(e) {
                var n = this[0] || {}
                  , i = 0
                  , r = this.length;
                if (e === t)
                    return 1 === n.nodeType ? n.innerHTML.replace(Xt, "") : t;
                if (!("string" != typeof e || en.test(e) || !lt.support.htmlSerialize && Ut.test(e) || !lt.support.leadingWhitespace && Vt.test(e) || sn[(Qt.exec(e) || ["", ""])[1].toLowerCase()])) {
                    e = e.replace(Jt, "<$1></$2>");
                    try {
                        for (; r > i; i++)
                            n = this[i] || {},
                            1 === n.nodeType && (lt.cleanData(x(n, !1)),
                            n.innerHTML = e);
                        n = 0
                    } catch (o) {}
                }
                n && this.empty().append(e)
            }
            , null , e, arguments.length)
        },
        replaceWith: function() {
            var e = lt.map(this, function(e) {
                return [e.nextSibling, e.parentNode]
            }
            )
              , t = 0;
            return this.domManip(arguments, function(n) {
                var i = e[t++]
                  , r = e[t++];
                r && (i && i.parentNode !== r && (i = this.nextSibling),
                lt(this).remove(),
                r.insertBefore(n, i))
            }
            , !0),
            t ? this : this.remove()
        },
        detach: function(e) {
            return this.remove(e, !0)
        },
        domManip: function(e, t, n) {
            e = it.apply([], e);
            var i, r, o, a, s, c, u = 0, l = this.length, d = this, p = l - 1, f = e[0], h = lt.isFunction(f);
            if (h || !(1 >= l || "string" != typeof f || lt.support.checkClone) && nn.test(f))
                return this.each(function(i) {
                    var r = d.eq(i);
                    h && (e[0] = f.call(this, i, r.html())),
                    r.domManip(e, t, n)
                }
                );
            if (l && (c = lt.buildFragment(e, this[0].ownerDocument, !1, !n && this),
            i = c.firstChild,
            1 === c.childNodes.length && (c = i),
            i)) {
                for (a = lt.map(x(c, "script"), g),
                o = a.length; l > u; u++)
                    r = c,
                    u !== p && (r = lt.clone(r, !0, !0),
                    o && lt.merge(a, x(r, "script"))),
                    t.call(this[u], r, u);
                if (o)
                    for (s = a[a.length - 1].ownerDocument,
                    lt.map(a, m),
                    u = 0; o > u; u++)
                        r = a[u],
                        rn.test(r.type || "") && !lt._data(r, "globalEval") && lt.contains(s, r) && (r.src ? lt._evalUrl(r.src) : lt.globalEval((r.text || r.textContent || r.innerHTML || "").replace(an, "")));
                c = i = null 
            }
            return this
        }
    }),
    lt.each({
        appendTo: "append",
        prependTo: "prepend",
        insertBefore: "before",
        insertAfter: "after",
        replaceAll: "replaceWith"
    }, function(e, t) {
        lt.fn[e] = function(e) {
            for (var n, i = 0, r = [], o = lt(e), a = o.length - 1; a >= i; i++)
                n = i === a ? this : this.clone(!0),
                lt(o[i])[t](n),
                rt.apply(r, n.get());
            return this.pushStack(r)
        }
    }
    ),
    lt.extend({
        clone: function(e, t, n) {
            var i, r, o, a, s, c = lt.contains(e.ownerDocument, e);
            if (lt.support.html5Clone || lt.isXMLDoc(e) || !Ut.test("<" + e.nodeName + ">") ? o = e.cloneNode(!0) : (un.innerHTML = e.outerHTML,
            un.removeChild(o = un.firstChild)),
            !(lt.support.noCloneEvent && lt.support.noCloneChecked || 1 !== e.nodeType && 11 !== e.nodeType || lt.isXMLDoc(e)))
                for (i = x(o),
                s = x(e),
                a = 0; null  != (r = s[a]); ++a)
                    i[a] && b(r, i[a]);
            if (t)
                if (n)
                    for (s = s || x(e),
                    i = i || x(o),
                    a = 0; null  != (r = s[a]); a++)
                        y(r, i[a]);
                else
                    y(e, o);
            return i = x(o, "script"),
            i.length > 0 && v(i, !c && x(e, "script")),
            i = s = r = null ,
            o
        },
        buildFragment: function(e, t, n, i) {
            for (var r, o, a, s, c, u, l, d = e.length, p = f(t), h = [], g = 0; d > g; g++)
                if (o = e[g],
                o || 0 === o)
                    if ("object" === lt.type(o))
                        lt.merge(h, o.nodeType ? [o] : o);
                    else if (Zt.test(o)) {
                        for (s = s || p.appendChild(t.createElement("div")),
                        c = (Qt.exec(o) || ["", ""])[1].toLowerCase(),
                        l = sn[c] || sn._default,
                        s.innerHTML = l[1] + o.replace(Jt, "<$1></$2>") + l[2],
                        r = l[0]; r--; )
                            s = s.lastChild;
                        if (!lt.support.leadingWhitespace && Vt.test(o) && h.push(t.createTextNode(Vt.exec(o)[0])),
                        !lt.support.tbody)
                            for (o = "table" !== c || Kt.test(o) ? "<table>" !== l[1] || Kt.test(o) ? 0 : s : s.firstChild,
                            r = o && o.childNodes.length; r--; )
                                lt.nodeName(u = o.childNodes[r], "tbody") && !u.childNodes.length && o.removeChild(u);
                        for (lt.merge(h, s.childNodes),
                        s.textContent = ""; s.firstChild; )
                            s.removeChild(s.firstChild);
                        s = p.lastChild
                    } else
                        h.push(t.createTextNode(o));
            for (s && p.removeChild(s),
            lt.support.appendChecked || lt.grep(x(h, "input"), _),
            g = 0; o = h[g++]; )
                if ((!i || -1 === lt.inArray(o, i)) && (a = lt.contains(o.ownerDocument, o),
                s = x(p.appendChild(o), "script"),
                a && v(s),
                n))
                    for (r = 0; o = s[r++]; )
                        rn.test(o.type || "") && n.push(o);
            return s = null ,
            p
        },
        cleanData: function(e, t) {
            for (var n, i, r, o, a = 0, s = lt.expando, c = lt.cache, u = lt.support.deleteExpando, l = lt.event.special; null  != (n = e[a]); a++)
                if ((t || lt.acceptData(n)) && (r = n[s],
                o = r && c[r])) {
                    if (o.events)
                        for (i in o.events)
                            l[i] ? lt.event.remove(n, i) : lt.removeEvent(n, i, o.handle);
                    c[r] && (delete c[r],
                    u ? delete n[s] : typeof n.removeAttribute !== U ? n.removeAttribute(s) : n[s] = null ,
                    tt.push(r))
                }
        },
        _evalUrl: function(e) {
            return lt.ajax({
                url: e,
                type: "GET",
                dataType: "script",
                async: !1,
                global: !1,
                "throws": !0
            })
        }
    }),
    lt.fn.extend({
        wrapAll: function(e) {
            if (lt.isFunction(e))
                return this.each(function(t) {
                    lt(this).wrapAll(e.call(this, t))
                }
                );
            if (this[0]) {
                var t = lt(e, this[0].ownerDocument).eq(0).clone(!0);
                this[0].parentNode && t.insertBefore(this[0]),
                t.map(function() {
                    for (var e = this; e.firstChild && 1 === e.firstChild.nodeType; )
                        e = e.firstChild;
                    return e
                }
                ).append(this)
            }
            return this
        },
        wrapInner: function(e) {
            return this.each(lt.isFunction(e) ? function(t) {
                lt(this).wrapInner(e.call(this, t))
            }
             : function() {
                var t = lt(this)
                  , n = t.contents();
                n.length ? n.wrapAll(e) : t.append(e)
            }
            )
        },
        wrap: function(e) {
            var t = lt.isFunction(e);
            return this.each(function(n) {
                lt(this).wrapAll(t ? e.call(this, n) : e)
            }
            )
        },
        unwrap: function() {
            return this.parent().each(function() {
                lt.nodeName(this, "body") || lt(this).replaceWith(this.childNodes)
            }
            ).end()
        }
    });
    var ln, dn, pn, fn = /alpha\([^)]*\)/i, hn = /opacity\s*=\s*([^)]*)/, gn = /^(top|right|bottom|left)$/, mn = /^(none|table(?!-c[ea]).+)/, vn = /^margin/, yn = RegExp("^(" + dt + ")(.*)$", "i"), bn = RegExp("^(" + dt + ")(?!px)[a-z%]+$", "i"), xn = RegExp("^([+-])=(" + dt + ")", "i"), _n = {
        BODY: "block"
    }, wn = {
        position: "absolute",
        visibility: "hidden",
        display: "block"
    }, Cn = {
        letterSpacing: 0,
        fontWeight: 400
    }, $n = ["Top", "Right", "Bottom", "Left"], kn = ["Webkit", "O", "Moz", "ms"];
    lt.fn.extend({
        css: function(e, n) {
            return lt.access(this, function(e, n, i) {
                var r, o, a = {}, s = 0;
                if (lt.isArray(n)) {
                    for (o = dn(e),
                    r = n.length; r > s; s++)
                        a[n[s]] = lt.css(e, n[s], !1, o);
                    return a
                }
                return i !== t ? lt.style(e, n, i) : lt.css(e, n)
            }
            , e, n, arguments.length > 1)
        },
        show: function() {
            return $(this, !0)
        },
        hide: function() {
            return $(this)
        },
        toggle: function(e) {
            var t = "boolean" == typeof e;
            return this.each(function() {
                (t ? e : C(this)) ? lt(this).show() : lt(this).hide()
            }
            )
        }
    }),
    lt.extend({
        cssHooks: {
            opacity: {
                get: function(e, t) {
                    if (t) {
                        var n = pn(e, "opacity");
                        return "" === n ? "1" : n
                    }
                }
            }
        },
        cssNumber: {
            columnCount: !0,
            fillOpacity: !0,
            fontWeight: !0,
            lineHeight: !0,
            opacity: !0,
            orphans: !0,
            widows: !0,
            zIndex: !0,
            zoom: !0
        },
        cssProps: {
            "float": lt.support.cssFloat ? "cssFloat" : "styleFloat"
        },
        style: function(e, n, i, r) {
            if (e && 3 !== e.nodeType && 8 !== e.nodeType && e.style) {
                var o, a, s, c = lt.camelCase(n), u = e.style;
                if (n = lt.cssProps[c] || (lt.cssProps[c] = w(u, c)),
                s = lt.cssHooks[n] || lt.cssHooks[c],
                i === t)
                    return s && "get" in s && (o = s.get(e, !1, r)) !== t ? o : u[n];
                if (a = typeof i,
                "string" === a && (o = xn.exec(i)) && (i = (o[1] + 1) * o[2] + parseFloat(lt.css(e, n)),
                a = "number"),
                !(null  == i || "number" === a && isNaN(i) || ("number" !== a || lt.cssNumber[c] || (i += "px"),
                lt.support.clearCloneStyle || "" !== i || 0 !== n.indexOf("background") || (u[n] = "inherit"),
                s && "set" in s && (i = s.set(e, i, r)) === t)))
                    try {
                        u[n] = i
                    } catch (l) {}
            }
        },
        css: function(e, n, i, r) {
            var o, a, s, c = lt.camelCase(n);
            return n = lt.cssProps[c] || (lt.cssProps[c] = w(e.style, c)),
            s = lt.cssHooks[n] || lt.cssHooks[c],
            s && "get" in s && (a = s.get(e, !0, i)),
            a === t && (a = pn(e, n, r)),
            "normal" === a && n in Cn && (a = Cn[n]),
            "" === i || i ? (o = parseFloat(a),
            i === !0 || lt.isNumeric(o) ? o || 0 : a) : a
        }
    }),
    e.getComputedStyle ? (dn = function(t) {
        return e.getComputedStyle(t, null )
    }
    ,
    pn = function(e, n, i) {
        var r, o, a, s = i || dn(e), c = s ? s.getPropertyValue(n) || s[n] : t, u = e.style;
        return s && ("" !== c || lt.contains(e.ownerDocument, e) || (c = lt.style(e, n)),
        bn.test(c) && vn.test(n) && (r = u.width,
        o = u.minWidth,
        a = u.maxWidth,
        u.minWidth = u.maxWidth = u.width = c,
        c = s.width,
        u.width = r,
        u.minWidth = o,
        u.maxWidth = a)),
        c
    }
    ) : J.documentElement.currentStyle && (dn = function(e) {
        return e.currentStyle
    }
    ,
    pn = function(e, n, i) {
        var r, o, a, s = i || dn(e), c = s ? s[n] : t, u = e.style;
        return null  == c && u && u[n] && (c = u[n]),
        bn.test(c) && !gn.test(n) && (r = u.left,
        o = e.runtimeStyle,
        a = o && o.left,
        a && (o.left = e.currentStyle.left),
        u.left = "fontSize" === n ? "1em" : c,
        c = u.pixelLeft + "px",
        u.left = r,
        a && (o.left = a)),
        "" === c ? "auto" : c
    }
    ),
    lt.each(["height", "width"], function(e, n) {
        lt.cssHooks[n] = {
            get: function(e, i, r) {
                return i ? 0 === e.offsetWidth && mn.test(lt.css(e, "display")) ? lt.swap(e, wn, function() {
                    return T(e, n, r)
                }
                ) : T(e, n, r) : t
            },
            set: function(e, t, i) {
                var r = i && dn(e);
                return k(e, t, i ? S(e, n, i, lt.support.boxSizing && "border-box" === lt.css(e, "boxSizing", !1, r), r) : 0)
            }
        }
    }
    ),
    lt.support.opacity || (lt.cssHooks.opacity = {
        get: function(e, t) {
            return hn.test((t && e.currentStyle ? e.currentStyle.filter : e.style.filter) || "") ? .01 * parseFloat(RegExp.$1) + "" : t ? "1" : ""
        },
        set: function(e, t) {
            var n = e.style
              , i = e.currentStyle
              , r = lt.isNumeric(t) ? "alpha(opacity=" + 100 * t + ")" : ""
              , o = i && i.filter || n.filter || "";
            n.zoom = 1,
            (t >= 1 || "" === t) && "" === lt.trim(o.replace(fn, "")) && n.removeAttribute && (n.removeAttribute("filter"),
            "" === t || i && !i.filter) || (n.filter = fn.test(o) ? o.replace(fn, r) : o + " " + r)
        }
    }),
    lt(function() {
        lt.support.reliableMarginRight || (lt.cssHooks.marginRight = {
            get: function(e, n) {
                return n ? lt.swap(e, {
                    display: "inline-block"
                }, pn, [e, "marginRight"]) : t
            }
        }),
        !lt.support.pixelPosition && lt.fn.position && lt.each(["top", "left"], function(e, n) {
            lt.cssHooks[n] = {
                get: function(e, i) {
                    return i ? (i = pn(e, n),
                    bn.test(i) ? lt(e).position()[n] + "px" : i) : t
                }
            }
        }
        )
    }
    ),
    lt.expr && lt.expr.filters && (lt.expr.filters.hidden = function(e) {
        return 0 >= e.offsetWidth && 0 >= e.offsetHeight || !lt.support.reliableHiddenOffsets && "none" === (e.style && e.style.display || lt.css(e, "display"))
    }
    ,
    lt.expr.filters.visible = function(e) {
        return !lt.expr.filters.hidden(e)
    }
    ),
    lt.each({
        margin: "",
        padding: "",
        border: "Width"
    }, function(e, t) {
        lt.cssHooks[e + t] = {
            expand: function(n) {
                for (var i = 0, r = {}, o = "string" == typeof n ? n.split(" ") : [n]; 4 > i; i++)
                    r[e + $n[i] + t] = o[i] || o[i - 2] || o[0];
                return r
            }
        },
        vn.test(e) || (lt.cssHooks[e + t].set = k)
    }
    );
    var Sn = /%20/g
      , Tn = /\[\]$/
      , Nn = /\r?\n/g
      , jn = /^(?:submit|button|image|reset|file)$/i
      , En = /^(?:input|select|textarea|keygen)/i;
    lt.fn.extend({
        serialize: function() {
            return lt.param(this.serializeArray())
        },
        serializeArray: function() {
            return this.map(function() {
                var e = lt.prop(this, "elements");
                return e ? lt.makeArray(e) : this
            }
            ).filter(function() {
                var e = this.type;
                return this.name && !lt(this).is(":disabled") && En.test(this.nodeName) && !jn.test(e) && (this.checked || !tn.test(e))
            }
            ).map(function(e, t) {
                var n = lt(this).val();
                return null  == n ? null  : lt.isArray(n) ? lt.map(n, function(e) {
                    return {
                        name: t.name,
                        value: e.replace(Nn, "\r\n")
                    }
                }
                ) : {
                    name: t.name,
                    value: n.replace(Nn, "\r\n")
                }
            }
            ).get()
        }
    }),
    lt.param = function(e, n) {
        var i, r = [], o = function(e, t) {
            t = lt.isFunction(t) ? t() : null  == t ? "" : t,
            r[r.length] = encodeURIComponent(e) + "=" + encodeURIComponent(t)
        }
        ;
        if (n === t && (n = lt.ajaxSettings && lt.ajaxSettings.traditional),
        lt.isArray(e) || e.jquery && !lt.isPlainObject(e))
            lt.each(e, function() {
                o(this.name, this.value)
            }
            );
        else
            for (i in e)
                E(i, e[i], n, o);
        return r.join("&").replace(Sn, "+")
    }
    ,
    lt.each("blur focus focusin focusout load resize scroll unload click dblclick mousedown mouseup mousemove mouseover mouseout mouseenter mouseleave change select submit keydown keypress keyup error contextmenu".split(" "), function(e, t) {
        lt.fn[t] = function(e, n) {
            return arguments.length > 0 ? this.on(t, null , e, n) : this.trigger(t)
        }
    }
    ),
    lt.fn.extend({
        hover: function(e, t) {
            return this.mouseenter(e).mouseleave(t || e)
        },
        bind: function(e, t, n) {
            return this.on(e, null , t, n)
        },
        unbind: function(e, t) {
            return this.off(e, null , t)
        },
        delegate: function(e, t, n, i) {
            return this.on(t, e, n, i)
        },
        undelegate: function(e, t, n) {
            return 1 === arguments.length ? this.off(e, "**") : this.off(t, e || "**", n)
        }
    });
    var An, In, Ln = lt.now(), On = /\?/, Dn = /#.*$/, Mn = /([?&])_=[^&]*/, Pn = /^(.*?):[ \t]*([^\r\n]*)\r?$/gm, Hn = /^(?:about|app|app-storage|.+-extension|file|res|widget):$/, Fn = /^(?:GET|HEAD)$/, Bn = /^\/\//, qn = /^([\w.+-]+:)(?:\/\/([^\/?#:]*)(?::(\d+)|)|)/, Wn = lt.fn.load, Rn = {}, zn = {}, Yn = "*/".concat("*");
    try {
        In = V.href
    } catch (Gn) {
        In = J.createElement("a"),
        In.href = "",
        In = In.href
    }
    An = qn.exec(In.toLowerCase()) || [],
    lt.fn.load = function(e, n, i) {
        if ("string" != typeof e && Wn)
            return Wn.apply(this, arguments);
        var r, o, a, s = this, c = e.indexOf(" ");
        return c >= 0 && (r = e.slice(c, e.length),
        e = e.slice(0, c)),
        lt.isFunction(n) ? (i = n,
        n = t) : n && "object" == typeof n && (a = "POST"),
        s.length > 0 && lt.ajax({
            url: e,
            type: a,
            dataType: "html",
            data: n
        }).done(function(e) {
            o = arguments,
            s.html(r ? lt("<div>").append(lt.parseHTML(e)).find(r) : e)
        }
        ).complete(i && function(e, t) {
            s.each(i, o || [e.responseText, t, e])
        }
        ),
        this
    }
    ,
    lt.each(["ajaxStart", "ajaxStop", "ajaxComplete", "ajaxError", "ajaxSuccess", "ajaxSend"], function(e, t) {
        lt.fn[t] = function(e) {
            return this.on(t, e)
        }
    }
    ),
    lt.extend({
        active: 0,
        lastModified: {},
        etag: {},
        ajaxSettings: {
            url: In,
            type: "GET",
            isLocal: Hn.test(An[1]),
            global: !0,
            processData: !0,
            async: !0,
            contentType: "application/x-www-form-urlencoded; charset=UTF-8",
            accepts: {
                "*": Yn,
                text: "text/plain",
                html: "text/html",
                xml: "application/xml, text/xml",
                json: "application/json, text/javascript"
            },
            contents: {
                xml: /xml/,
                html: /html/,
                json: /json/
            },
            responseFields: {
                xml: "responseXML",
                text: "responseText",
                json: "responseJSON"
            },
            converters: {
                "* text": String,
                "text html": !0,
                "text json": lt.parseJSON,
                "text xml": lt.parseXML
            },
            flatOptions: {
                url: !0,
                context: !0
            }
        },
        ajaxSetup: function(e, t) {
            return t ? L(L(e, lt.ajaxSettings), t) : L(lt.ajaxSettings, e)
        },
        ajaxPrefilter: A(Rn),
        ajaxTransport: A(zn),
        ajax: function(e, n) {
            function i(e, n, i, r) {
                var o, d, y, b, _, C = n;
                2 !== x && (x = 2,
                c && clearTimeout(c),
                l = t,
                s = r || "",
                w.readyState = e > 0 ? 4 : 0,
                o = e >= 200 && 300 > e || 304 === e,
                i && (b = O(p, w, i)),
                b = D(p, b, w, o),
                o ? (p.ifModified && (_ = w.getResponseHeader("Last-Modified"),
                _ && (lt.lastModified[a] = _),
                _ = w.getResponseHeader("etag"),
                _ && (lt.etag[a] = _)),
                204 === e || "HEAD" === p.type ? C = "nocontent" : 304 === e ? C = "notmodified" : (C = b.state,
                d = b.data,
                y = b.error,
                o = !y)) : (y = C,
                (e || !C) && (C = "error",
                0 > e && (e = 0))),
                w.status = e,
                w.statusText = (n || C) + "",
                o ? g.resolveWith(f, [d, C, w]) : g.rejectWith(f, [w, C, y]),
                w.statusCode(v),
                v = t,
                u && h.trigger(o ? "ajaxSuccess" : "ajaxError", [w, p, o ? d : y]),
                m.fireWith(f, [w, C]),
                u && (h.trigger("ajaxComplete", [w, p]),
                --lt.active || lt.event.trigger("ajaxStop")))
            }
            "object" == typeof e && (n = e,
            e = t),
            n = n || {};
            var r, o, a, s, c, u, l, d, p = lt.ajaxSetup({}, n), f = p.context || p, h = p.context && (f.nodeType || f.jquery) ? lt(f) : lt.event, g = lt.Deferred(), m = lt.Callbacks("once memory"), v = p.statusCode || {}, y = {}, b = {}, x = 0, _ = "canceled", w = {
                readyState: 0,
                getResponseHeader: function(e) {
                    var t;
                    if (2 === x) {
                        if (!d)
                            for (d = {}; t = Pn.exec(s); )
                                d[t[1].toLowerCase()] = t[2];
                        t = d[e.toLowerCase()]
                    }
                    return null  == t ? null  : t
                },
                getAllResponseHeaders: function() {
                    return 2 === x ? s : null 
                },
                setRequestHeader: function(e, t) {
                    var n = e.toLowerCase();
                    return x || (e = b[n] = b[n] || e,
                    y[e] = t),
                    this
                },
                overrideMimeType: function(e) {
                    return x || (p.mimeType = e),
                    this
                },
                statusCode: function(e) {
                    var t;
                    if (e)
                        if (2 > x)
                            for (t in e)
                                v[t] = [v[t], e[t]];
                        else
                            w.always(e[w.status]);
                    return this
                },
                abort: function(e) {
                    var t = e || _;
                    return l && l.abort(t),
                    i(0, t),
                    this
                }
            };
            if (g.promise(w).complete = m.add,
            w.success = w.done,
            w.error = w.fail,
            p.url = ((e || p.url || In) + "").replace(Dn, "").replace(Bn, An[1] + "//"),
            p.type = n.method || n.type || p.method || p.type,
            p.dataTypes = lt.trim(p.dataType || "*").toLowerCase().match(pt) || [""],
            null  == p.crossDomain && (r = qn.exec(p.url.toLowerCase()),
            p.crossDomain = !(!r || r[1] === An[1] && r[2] === An[2] && (r[3] || ("http:" === r[1] ? "80" : "443")) === (An[3] || ("http:" === An[1] ? "80" : "443")))),
            p.data && p.processData && "string" != typeof p.data && (p.data = lt.param(p.data, p.traditional)),
            I(Rn, p, n, w),
            2 === x)
                return w;
            u = p.global,
            u && 0 === lt.active++ && lt.event.trigger("ajaxStart"),
            p.type = p.type.toUpperCase(),
            p.hasContent = !Fn.test(p.type),
            a = p.url,
            p.hasContent || (p.data && (a = p.url += (On.test(a) ? "&" : "?") + p.data,
            delete p.data),
            p.cache === !1 && (p.url = Mn.test(a) ? a.replace(Mn, "$1_=" + Ln++) : a + (On.test(a) ? "&" : "?") + "_=" + Ln++)),
            p.ifModified && (lt.lastModified[a] && w.setRequestHeader("If-Modified-Since", lt.lastModified[a]),
            lt.etag[a] && w.setRequestHeader("If-None-Match", lt.etag[a])),
            (p.data && p.hasContent && p.contentType !== !1 || n.contentType) && w.setRequestHeader("Content-Type", p.contentType),
            w.setRequestHeader("Accept", p.dataTypes[0] && p.accepts[p.dataTypes[0]] ? p.accepts[p.dataTypes[0]] + ("*" !== p.dataTypes[0] ? ", " + Yn + "; q=0.01" : "") : p.accepts["*"]);
            for (o in p.headers)
                w.setRequestHeader(o, p.headers[o]);
            if (p.beforeSend && (p.beforeSend.call(f, w, p) === !1 || 2 === x))
                return w.abort();
            _ = "abort";
            for (o in {
                success: 1,
                error: 1,
                complete: 1
            })
                w[o](p[o]);
            if (l = I(zn, p, n, w)) {
                w.readyState = 1,
                u && h.trigger("ajaxSend", [w, p]),
                p.async && p.timeout > 0 && (c = setTimeout(function() {
                    w.abort("timeout")
                }
                , p.timeout));
                try {
                    x = 1,
                    l.send(y, i)
                } catch (C) {
                    if (!(2 > x))
                        throw C;
                    i(-1, C)
                }
            } else
                i(-1, "No Transport");
            return w
        },
        getJSON: function(e, t, n) {
            return lt.get(e, t, n, "json")
        },
        getScript: function(e, n) {
            return lt.get(e, t, n, "script")
        }
    }),
    lt.each(["get", "post"], function(e, n) {
        lt[n] = function(e, i, r, o) {
            return lt.isFunction(i) && (o = o || r,
            r = i,
            i = t),
            lt.ajax({
                url: e,
                type: n,
                dataType: o,
                data: i,
                success: r
            })
        }
    }
    ),
    lt.ajaxSetup({
        accepts: {
            script: "text/javascript, application/javascript, application/ecmascript, application/x-ecmascript"
        },
        contents: {
            script: /(?:java|ecma)script/
        },
        converters: {
            "text script": function(e) {
                return lt.globalEval(e),
                e
            }
        }
    }),
    lt.ajaxPrefilter("script", function(e) {
        e.cache === t && (e.cache = !1),
        e.crossDomain && (e.type = "GET",
        e.global = !1)
    }
    ),
    lt.ajaxTransport("script", function(e) {
        if (e.crossDomain) {
            var n, i = J.head || lt("head")[0] || J.documentElement;
            return {
                send: function(t, r) {
                    n = J.createElement("script"),
                    n.async = !0,
                    e.scriptCharset && (n.charset = e.scriptCharset),
                    n.src = e.url,
                    n.onload = n.onreadystatechange = function(e, t) {
                        (t || !n.readyState || /loaded|complete/.test(n.readyState)) && (n.onload = n.onreadystatechange = null ,
                        n.parentNode && n.parentNode.removeChild(n),
                        n = null ,
                        t || r(200, "success"))
                    }
                    ,
                    i.insertBefore(n, i.firstChild)
                },
                abort: function() {
                    n && n.onload(t, !0)
                }
            }
        }
    }
    );
    var Xn = []
      , Un = /(=)\?(?=&|$)|\?\?/;
    lt.ajaxSetup({
        jsonp: "callback",
        jsonpCallback: function() {
            var e = Xn.pop() || lt.expando + "_" + Ln++;
            return this[e] = !0,
            e
        }
    }),
    lt.ajaxPrefilter("json jsonp", function(n, i, r) {
        var o, a, s, c = n.jsonp !== !1 && (Un.test(n.url) ? "url" : "string" == typeof n.data && !(n.contentType || "").indexOf("application/x-www-form-urlencoded") && Un.test(n.data) && "data");
        return c || "jsonp" === n.dataTypes[0] ? (o = n.jsonpCallback = lt.isFunction(n.jsonpCallback) ? n.jsonpCallback() : n.jsonpCallback,
        c ? n[c] = n[c].replace(Un, "$1" + o) : n.jsonp !== !1 && (n.url += (On.test(n.url) ? "&" : "?") + n.jsonp + "=" + o),
        n.converters["script json"] = function() {
            return s || lt.error(o + " was not called"),
            s[0]
        }
        ,
        n.dataTypes[0] = "json",
        a = e[o],
        e[o] = function() {
            s = arguments
        }
        ,
        r.always(function() {
            e[o] = a,
            n[o] && (n.jsonpCallback = i.jsonpCallback,
            Xn.push(o)),
            s && lt.isFunction(a) && a(s[0]),
            s = a = t
        }
        ),
        "script") : t
    }
    );
    var Vn, Jn, Qn = 0, Kn = e.ActiveXObject && function() {
        var e;
        for (e in Vn)
            Vn[e](t, !0)
    }
    ;
    lt.ajaxSettings.xhr = e.ActiveXObject ? function() {
        return !this.isLocal && M() || P()
    }
     : M,
    Jn = lt.ajaxSettings.xhr(),
    lt.support.cors = !!Jn && "withCredentials" in Jn,
    Jn = lt.support.ajax = !!Jn,
    Jn && lt.ajaxTransport(function(n) {
        if (!n.crossDomain || lt.support.cors) {
            var i;
            return {
                send: function(r, o) {
                    var a, s, c = n.xhr();
                    if (n.username ? c.open(n.type, n.url, n.async, n.username, n.password) : c.open(n.type, n.url, n.async),
                    n.xhrFields)
                        for (s in n.xhrFields)
                            c[s] = n.xhrFields[s];
                    n.mimeType && c.overrideMimeType && c.overrideMimeType(n.mimeType),
                    n.crossDomain || r["X-Requested-With"] || (r["X-Requested-With"] = "XMLHttpRequest");
                    try {
                        for (s in r)
                            c.setRequestHeader(s, r[s])
                    } catch (u) {}
                    c.send(n.hasContent && n.data || null ),
                    i = function(e, r) {
                        var s, u, l, d;
                        try {
                            if (i && (r || 4 === c.readyState))
                                if (i = t,
                                a && (c.onreadystatechange = lt.noop,
                                Kn && delete Vn[a]),
                                r)
                                    4 !== c.readyState && c.abort();
                                else {
                                    d = {},
                                    s = c.status,
                                    u = c.getAllResponseHeaders(),
                                    "string" == typeof c.responseText && (d.text = c.responseText);
                                    try {
                                        l = c.statusText
                                    } catch (p) {
                                        l = ""
                                    }
                                    s || !n.isLocal || n.crossDomain ? 1223 === s && (s = 204) : s = d.text ? 200 : 404
                                }
                        } catch (f) {
                            r || o(-1, f)
                        }
                        d && o(s, l, d, u)
                    }
                    ,
                    n.async ? 4 === c.readyState ? setTimeout(i) : (a = ++Qn,
                    Kn && (Vn || (Vn = {},
                    lt(e).unload(Kn)),
                    Vn[a] = i),
                    c.onreadystatechange = i) : i()
                },
                abort: function() {
                    i && i(t, !0)
                }
            }
        }
    }
    );
    var Zn, ei, ti = /^(?:toggle|show|hide)$/, ni = RegExp("^(?:([+-])=|)(" + dt + ")([a-z%]*)$", "i"), ii = /queueHooks$/, ri = [W], oi = {
        "*": [function(e, t) {
            var n = this.createTween(e, t)
              , i = n.cur()
              , r = ni.exec(t)
              , o = r && r[3] || (lt.cssNumber[e] ? "" : "px")
              , a = (lt.cssNumber[e] || "px" !== o && +i) && ni.exec(lt.css(n.elem, e))
              , s = 1
              , c = 20;
            if (a && a[3] !== o) {
                o = o || a[3],
                r = r || [],
                a = +i || 1;
                do
                    s = s || ".5",
                    a /= s,
                    lt.style(n.elem, e, a + o);
                while (s !== (s = n.cur() / i) && 1 !== s && --c)
            }
            return r && (a = n.start = +a || +i || 0,
            n.unit = o,
            n.end = r[1] ? a + (r[1] + 1) * r[2] : +r[2]),
            n
        }
        ]
    };
    lt.Animation = lt.extend(B, {
        tweener: function(e, t) {
            lt.isFunction(e) ? (t = e,
            e = ["*"]) : e = e.split(" ");
            for (var n, i = 0, r = e.length; r > i; i++)
                n = e[i],
                oi[n] = oi[n] || [],
                oi[n].unshift(t)
        },
        prefilter: function(e, t) {
            t ? ri.unshift(e) : ri.push(e)
        }
    }),
    lt.Tween = R,
    R.prototype = {
        constructor: R,
        init: function(e, t, n, i, r, o) {
            this.elem = e,
            this.prop = n,
            this.easing = r || "swing",
            this.options = t,
            this.start = this.now = this.cur(),
            this.end = i,
            this.unit = o || (lt.cssNumber[n] ? "" : "px")
        },
        cur: function() {
            var e = R.propHooks[this.prop];
            return e && e.get ? e.get(this) : R.propHooks._default.get(this)
        },
        run: function(e) {
            var t, n = R.propHooks[this.prop];
            return this.pos = t = this.options.duration ? lt.easing[this.easing](e, this.options.duration * e, 0, 1, this.options.duration) : e,
            this.now = (this.end - this.start) * t + this.start,
            this.options.step && this.options.step.call(this.elem, this.now, this),
            n && n.set ? n.set(this) : R.propHooks._default.set(this),
            this
        }
    },
    R.prototype.init.prototype = R.prototype,
    R.propHooks = {
        _default: {
            get: function(e) {
                var t;
                return null  == e.elem[e.prop] || e.elem.style && null  != e.elem.style[e.prop] ? (t = lt.css(e.elem, e.prop, ""),
                t && "auto" !== t ? t : 0) : e.elem[e.prop]
            },
            set: function(e) {
                lt.fx.step[e.prop] ? lt.fx.step[e.prop](e) : e.elem.style && (null  != e.elem.style[lt.cssProps[e.prop]] || lt.cssHooks[e.prop]) ? lt.style(e.elem, e.prop, e.now + e.unit) : e.elem[e.prop] = e.now
            }
        }
    },
    R.propHooks.scrollTop = R.propHooks.scrollLeft = {
        set: function(e) {
            e.elem.nodeType && e.elem.parentNode && (e.elem[e.prop] = e.now)
        }
    },
    lt.each(["toggle", "show", "hide"], function(e, t) {
        var n = lt.fn[t];
        lt.fn[t] = function(e, i, r) {
            return null  == e || "boolean" == typeof e ? n.apply(this, arguments) : this.animate(z(t, !0), e, i, r)
        }
    }
    ),
    lt.fn.extend({
        fadeTo: function(e, t, n, i) {
            return this.filter(C).css("opacity", 0).show().end().animate({
                opacity: t
            }, e, n, i)
        },
        animate: function(e, t, n, i) {
            var r = lt.isEmptyObject(e)
              , o = lt.speed(t, n, i)
              , a = function() {
                var t = B(this, lt.extend({}, e), o);
                (r || lt._data(this, "finish")) && t.stop(!0)
            }
            ;
            return a.finish = a,
            r || o.queue === !1 ? this.each(a) : this.queue(o.queue, a)
        },
        stop: function(e, n, i) {
            var r = function(e) {
                var t = e.stop;
                delete e.stop,
                t(i)
            }
            ;
            return "string" != typeof e && (i = n,
            n = e,
            e = t),
            n && e !== !1 && this.queue(e || "fx", []),
            this.each(function() {
                var t = !0
                  , n = null  != e && e + "queueHooks"
                  , o = lt.timers
                  , a = lt._data(this);
                if (n)
                    a[n] && a[n].stop && r(a[n]);
                else
                    for (n in a)
                        a[n] && a[n].stop && ii.test(n) && r(a[n]);
                for (n = o.length; n--; )
                    o[n].elem !== this || null  != e && o[n].queue !== e || (o[n].anim.stop(i),
                    t = !1,
                    o.splice(n, 1));
                (t || !i) && lt.dequeue(this, e)
            }
            )
        },
        finish: function(e) {
            return e !== !1 && (e = e || "fx"),
            this.each(function() {
                var t, n = lt._data(this), i = n[e + "queue"], r = n[e + "queueHooks"], o = lt.timers, a = i ? i.length : 0;
                for (n.finish = !0,
                lt.queue(this, e, []),
                r && r.stop && r.stop.call(this, !0),
                t = o.length; t--; )
                    o[t].elem === this && o[t].queue === e && (o[t].anim.stop(!0),
                    o.splice(t, 1));
                for (t = 0; a > t; t++)
                    i[t] && i[t].finish && i[t].finish.call(this);
                delete n.finish
            }
            )
        }
    }),
    lt.each({
        slideDown: z("show"),
        slideUp: z("hide"),
        slideToggle: z("toggle"),
        fadeIn: {
            opacity: "show"
        },
        fadeOut: {
            opacity: "hide"
        },
        fadeToggle: {
            opacity: "toggle"
        }
    }, function(e, t) {
        lt.fn[e] = function(e, n, i) {
            return this.animate(t, e, n, i)
        }
    }
    ),
    lt.speed = function(e, t, n) {
        var i = e && "object" == typeof e ? lt.extend({}, e) : {
            complete: n || !n && t || lt.isFunction(e) && e,
            duration: e,
            easing: n && t || t && !lt.isFunction(t) && t
        };
        return i.duration = lt.fx.off ? 0 : "number" == typeof i.duration ? i.duration : i.duration in lt.fx.speeds ? lt.fx.speeds[i.duration] : lt.fx.speeds._default,
        (null  == i.queue || i.queue === !0) && (i.queue = "fx"),
        i.old = i.complete,
        i.complete = function() {
            lt.isFunction(i.old) && i.old.call(this),
            i.queue && lt.dequeue(this, i.queue)
        }
        ,
        i
    }
    ,
    lt.easing = {
        linear: function(e) {
            return e
        },
        swing: function(e) {
            return .5 - Math.cos(e * Math.PI) / 2
        }
    },
    lt.timers = [],
    lt.fx = R.prototype.init,
    lt.fx.tick = function() {
        var e, n = lt.timers, i = 0;
        for (Zn = lt.now(); n.length > i; i++)
            e = n[i],
            e() || n[i] !== e || n.splice(i--, 1);
        n.length || lt.fx.stop(),
        Zn = t
    }
    ,
    lt.fx.timer = function(e) {
        e() && lt.timers.push(e) && lt.fx.start()
    }
    ,
    lt.fx.interval = 13,
    lt.fx.start = function() {
        ei || (ei = setInterval(lt.fx.tick, lt.fx.interval))
    }
    ,
    lt.fx.stop = function() {
        clearInterval(ei),
        ei = null 
    }
    ,
    lt.fx.speeds = {
        slow: 600,
        fast: 200,
        _default: 400
    },
    lt.fx.step = {},
    lt.expr && lt.expr.filters && (lt.expr.filters.animated = function(e) {
        return lt.grep(lt.timers, function(t) {
            return e === t.elem
        }
        ).length
    }
    ),
    lt.fn.offset = function(e) {
        if (arguments.length)
            return e === t ? this : this.each(function(t) {
                lt.offset.setOffset(this, e, t)
            }
            );
        var n, i, r = {
            top: 0,
            left: 0
        }, o = this[0], a = o && o.ownerDocument;
        return a ? (n = a.documentElement,
        lt.contains(n, o) ? (typeof o.getBoundingClientRect !== U && (r = o.getBoundingClientRect()),
        i = Y(a),
        {
            top: r.top + (i.pageYOffset || n.scrollTop) - (n.clientTop || 0),
            left: r.left + (i.pageXOffset || n.scrollLeft) - (n.clientLeft || 0)
        }) : r) : void 0
    }
    ,
    lt.offset = {
        setOffset: function(e, t, n) {
            var i = lt.css(e, "position");
            "static" === i && (e.style.position = "relative");
            var r, o, a = lt(e), s = a.offset(), c = lt.css(e, "top"), u = lt.css(e, "left"), l = ("absolute" === i || "fixed" === i) && lt.inArray("auto", [c, u]) > -1, d = {}, p = {};
            l ? (p = a.position(),
            r = p.top,
            o = p.left) : (r = parseFloat(c) || 0,
            o = parseFloat(u) || 0),
            lt.isFunction(t) && (t = t.call(e, n, s)),
            null  != t.top && (d.top = t.top - s.top + r),
            null  != t.left && (d.left = t.left - s.left + o),
            "using" in t ? t.using.call(e, d) : a.css(d)
        }
    },
    lt.fn.extend({
        position: function() {
            if (this[0]) {
                var e, t, n = {
                    top: 0,
                    left: 0
                }, i = this[0];
                return "fixed" === lt.css(i, "position") ? t = i.getBoundingClientRect() : (e = this.offsetParent(),
                t = this.offset(),
                lt.nodeName(e[0], "html") || (n = e.offset()),
                n.top += lt.css(e[0], "borderTopWidth", !0),
                n.left += lt.css(e[0], "borderLeftWidth", !0)),
                {
                    top: t.top - n.top - lt.css(i, "marginTop", !0),
                    left: t.left - n.left - lt.css(i, "marginLeft", !0)
                }
            }
        },
        offsetParent: function() {
            return this.map(function() {
                for (var e = this.offsetParent || Q; e && !lt.nodeName(e, "html") && "static" === lt.css(e, "position"); )
                    e = e.offsetParent;
                return e || Q
            }
            )
        }
    }),
    lt.each({
        scrollLeft: "pageXOffset",
        scrollTop: "pageYOffset"
    }, function(e, n) {
        var i = /Y/.test(n);
        lt.fn[e] = function(r) {
            return lt.access(this, function(e, r, o) {
                var a = Y(e);
                return o === t ? a ? n in a ? a[n] : a.document.documentElement[r] : e[r] : (a ? a.scrollTo(i ? lt(a).scrollLeft() : o, i ? o : lt(a).scrollTop()) : e[r] = o,
                t)
            }
            , e, r, arguments.length, null )
        }
    }
    ),
    lt.each({
        Height: "height",
        Width: "width"
    }, function(e, n) {
        lt.each({
            padding: "inner" + e,
            content: n,
            "": "outer" + e
        }, function(i, r) {
            lt.fn[r] = function(r, o) {
                var a = arguments.length && (i || "boolean" != typeof r)
                  , s = i || (r === !0 || o === !0 ? "margin" : "border");
                return lt.access(this, function(n, i, r) {
                    var o;
                    return lt.isWindow(n) ? n.document.documentElement["client" + e] : 9 === n.nodeType ? (o = n.documentElement,
                    Math.max(n.body["scroll" + e], o["scroll" + e], n.body["offset" + e], o["offset" + e], o["client" + e])) : r === t ? lt.css(n, i, s) : lt.style(n, i, r, s)
                }
                , n, a ? r : t, a, null )
            }
        }
        )
    }
    ),
    lt.fn.size = function() {
        return this.length
    }
    ,
    lt.fn.andSelf = lt.fn.addBack,
    "object" == typeof module && module && "object" == typeof module.exports ? module.exports = lt : (e.jQuery = e.$ = lt,
    "function" == typeof define && define.amd && define("jquery", [], function() {
        return lt
    }
    ))
}
(window),
/*!File[thirdpart/dialog-min.js]*/
/*! artDialog v6.0.2 | https://github.com/aui/artDialog */
!function() {
    function e(t) {
        var i = n[t]
          , r = "exports";
        return "object" == typeof i ? i : (i[r] || (i[r] = {},
        i[r] = i.call(i[r], e, i[r], i) || i[r]),
        i[r])
    }
    function t(e, t) {
        n[e] = t
    }
    var n = {};
    t("jquery", function() {
        return jQuery
    }
    ),
    t("popup", function(e) {
        function t() {
            this.destroyed = !1,
            this.__popup = n("<div />").attr({
                tabindex: "-1"
            }).css({
                display: "none",
                position: "absolute",
                outline: 0
            }).html(this.innerHTML).appendTo("body"),
            this.__backdrop = n("<div />"),
            this.node = this.__popup[0],
            this.backdrop = this.__backdrop[0],
            i++
        }
        var n = e("jquery")
          , i = 0
          , r = !("minWidth" in n("html")[0].style)
          , o = !r;
        return n.extend(t.prototype, {
            node: null ,
            backdrop: null ,
            fixed: !1,
            destroyed: !0,
            open: !1,
            returnValue: "",
            autofocus: !0,
            align: "bottom left",
            backdropBackground: "#000",
            backdropOpacity: .7,
            innerHTML: "",
            className: "ui-popup",
            show: function(e) {
                if (this.destroyed)
                    return this;
                var t = this
                  , i = this.__popup;
                return this.__activeElement = this.__getActive(),
                this.open = !0,
                this.follow = e || this.follow,
                this.__ready || (i.addClass(this.className),
                this.modal && this.__lock(),
                i.html() || i.html(this.innerHTML),
                r || n(window).on("resize", this.__onresize = function() {
                    t.reset()
                }
                ),
                this.__ready = !0),
                i.addClass(this.className + "-show").attr("role", this.modal ? "alertdialog" : "dialog").css("position", this.fixed ? "fixed" : "absolute").show(),
                this.__backdrop.show(),
                this.reset().focus(),
                this.__dispatchEvent("show"),
                this
            },
            showModal: function() {
                return this.modal = !0,
                this.show.apply(this, arguments)
            },
            close: function(e) {
                return !this.destroyed && this.open && (void 0 !== e && (this.returnValue = e),
                this.__popup.hide().removeClass(this.className + "-show"),
                this.__backdrop.hide(),
                this.open = !1,
                this.blur(),
                this.__dispatchEvent("close")),
                this
            },
            remove: function() {
                if (this.destroyed)
                    return this;
                this.__dispatchEvent("beforeremove"),
                t.current === this && (t.current = null ),
                this.__unlock(),
                this.__popup.remove(),
                this.__backdrop.remove(),
                r || n(window).off("resize", this.__onresize),
                this.__dispatchEvent("remove");
                for (var e in this)
                    delete this[e];
                return this
            },
            reset: function() {
                var e = this.follow;
                return e ? this.__follow(e) : this.__center(),
                this.__dispatchEvent("reset"),
                this
            },
            focus: function() {
                var e = this.node
                  , i = t.current;
                if (i && i !== this && i.blur(!1),
                !n.contains(e, this.__getActive())) {
                    var r = this.__popup.find("[autofocus]")[0];
                    !this._autofocus && r ? this._autofocus = !0 : r = e,
                    this.__focus(r)
                }
                return t.current = this,
                this.__popup.addClass(this.className + "-focus"),
                this.__zIndex(),
                this.__dispatchEvent("focus"),
                this
            },
            blur: function() {
                var e = this.__activeElement
                  , t = arguments[0];
                return t !== !1 && this.__focus(e),
                this._autofocus = !1,
                this.__popup.removeClass(this.className + "-focus"),
                this.__dispatchEvent("blur"),
                this
            },
            addEventListener: function(e, t) {
                return this.__getEventListener(e).push(t),
                this
            },
            removeEventListener: function(e, t) {
                for (var n = this.__getEventListener(e), i = 0; i < n.length; i++)
                    t === n[i] && n.splice(i--, 1);
                return this
            },
            __getEventListener: function(e) {
                var t = this.__listener;
                return t || (t = this.__listener = {}),
                t[e] || (t[e] = []),
                t[e]
            },
            __dispatchEvent: function(e) {
                var t = this.__getEventListener(e);
                this["on" + e] && this["on" + e]();
                for (var n = 0; n < t.length; n++)
                    t[n].call(this)
            },
            __focus: function(e) {
                try {
                    this.autofocus && !/^iframe$/i.test(e.nodeName) && e.focus()
                } catch (t) {}
            },
            __getActive: function() {
                try {
                    var e = document.activeElement
                      , t = e.contentDocument
                      , n = t && t.activeElement || e;
                    return n
                } catch (i) {}
            },
            __zIndex: function() {
                var e = t.zIndex++;
                this.__popup.css("zIndex", e),
                this.__backdrop.css("zIndex", e - 1),
                this.zIndex = e
            },
            __center: function() {
                var e = this.__popup
                  , t = n(window)
                  , i = n(document)
                  , r = this.fixed
                  , o = r ? 0 : i.scrollLeft()
                  , a = r ? 0 : i.scrollTop()
                  , s = t.width()
                  , c = t.height()
                  , u = e.width()
                  , l = e.height()
                  , d = (s - u) / 2 + o
                  , p = 382 * (c - l) / 1e3 + a
                  , f = e[0].style;
                f.left = Math.max(parseInt(d), o) + "px",
                f.top = Math.max(parseInt(p), a) + "px"
            },
            __follow: function(e) {
                var t = e.parentNode && n(e)
                  , i = this.__popup;
                if (this.__followSkin && i.removeClass(this.__followSkin),
                t) {
                    var r = t.offset();
                    if (r.left * r.top < 0)
                        return this.__center()
                }
                var o = this
                  , a = this.fixed
                  , s = n(window)
                  , c = n(document)
                  , u = s.width()
                  , l = s.height()
                  , d = c.scrollLeft()
                  , p = c.scrollTop()
                  , f = i.width()
                  , h = i.height()
                  , g = t ? t.outerWidth() : 0
                  , m = t ? t.outerHeight() : 0
                  , v = this.__offset(e)
                  , y = v.left
                  , b = v.top
                  , x = a ? y - d : y
                  , _ = a ? b - p : b
                  , w = a ? 0 : d
                  , C = a ? 0 : p
                  , $ = w + u - f
                  , k = C + l - h
                  , S = {}
                  , T = this.align.split(" ")
                  , N = this.className + "-"
                  , j = {
                    top: "bottom",
                    bottom: "top",
                    left: "right",
                    right: "left"
                }
                  , E = {
                    top: "top",
                    bottom: "top",
                    left: "left",
                    right: "left"
                }
                  , A = [{
                    top: _ - h,
                    bottom: _ + m,
                    left: x - f,
                    right: x + g
                }, {
                    top: _,
                    bottom: _ - h + m,
                    left: x,
                    right: x - f + g
                }]
                  , I = {
                    left: x + g / 2 - f / 2,
                    top: _ + m / 2 - h / 2
                }
                  , L = {
                    left: [w, $],
                    top: [C, k]
                };
                n.each(T, function(e, t) {
                    A[e][t] > L[E[t]][1] && (t = T[e] = j[t]),
                    A[e][t] < L[E[t]][0] && (T[e] = j[t])
                }
                ),
                T[1] || (E[T[1]] = "left" === E[T[0]] ? "top" : "left",
                A[1][T[1]] = I[E[T[1]]]),
                N += T.join("-") + " " + this.className + "-follow",
                o.__followSkin = N,
                t && i.addClass(N),
                S[E[T[0]]] = parseInt(A[0][T[0]]),
                S[E[T[1]]] = parseInt(A[1][T[1]]),
                i.css(S)
            },
            __offset: function(e) {
                var t = e.parentNode
                  , i = t ? n(e).offset() : {
                    left: e.pageX,
                    top: e.pageY
                };
                e = t ? e : e.target;
                var r = e.ownerDocument
                  , o = r.defaultView || r.parentWindow;
                if (o == window)
                    return i;
                var a = o.frameElement
                  , s = n(r)
                  , c = s.scrollLeft()
                  , u = s.scrollTop()
                  , l = n(a).offset()
                  , d = l.left
                  , p = l.top;
                return {
                    left: i.left + d - c,
                    top: i.top + p - u
                }
            },
            __lock: function() {
                var e = this
                  , i = this.__popup
                  , r = this.__backdrop
                  , a = {
                    position: "fixed",
                    left: 0,
                    top: 0,
                    width: "100%",
                    height: "100%",
                    overflow: "hidden",
                    userSelect: "none",
                    opacity: 0,
                    background: this.backdropBackground
                };
                i.addClass(this.className + "-modal"),
                t.zIndex = t.zIndex + 2,
                this.__zIndex(),
                o || n.extend(a, {
                    position: "absolute",
                    width: n(window).width() + "px",
                    height: n(document).height() + "px"
                }),
                r.css(a).animate({
                    opacity: this.backdropOpacity
                }, 150).insertAfter(i).attr({
                    tabindex: "0"
                }).on("focus", function() {
                    e.focus()
                }
                )
            },
            __unlock: function() {
                this.modal && (this.__popup.removeClass(this.className + "-modal"),
                this.__backdrop.remove(),
                delete this.modal)
            }
        }),
        t.zIndex = 1024,
        t.current = null ,
        t
    }
    ),
    t("dialog-config", {
        content: '<span class="ui-dialog-loading">Loading..</span>',
        title: "",
        statusbar: "",
        button: null ,
        ok: null ,
        cancel: null ,
        okValue: "ok",
        cancelValue: "cancel",
        cancelDisplay: !0,
        width: "",
        height: "",
        padding: "",
        skin: "",
        quickClose: !1,
        cssUri: "../css/ui-dialog.css",
        innerHTML: '<div i="dialog" class="ui-dialog"><div class="ui-dialog-arrow-a"></div><div class="ui-dialog-arrow-b"></div><table class="ui-dialog-grid"><tr><td i="header" class="ui-dialog-header"><button i="close" class="ui-dialog-close">&#215;</button><div i="title" class="ui-dialog-title"></div></td></tr><tr><td i="body" class="ui-dialog-body"><div i="content" class="ui-dialog-content"></div></td></tr><tr><td i="footer" class="ui-dialog-footer"><div i="statusbar" class="ui-dialog-statusbar"></div><div i="button" class="ui-dialog-button"></div></td></tr></table></div>'
    }),
    t("dialog", function(e) {
        var t = e("jquery")
          , n = e("popup")
          , i = e("dialog-config")
          , r = i.cssUri;
        if (r) {
            var o = e[e.toUrl ? "toUrl" : "resolve"];
            o && (r = o(r),
            r = '<link rel="stylesheet" href="' + r + '" />',
            t("base")[0] ? t("base").before(r) : t("head").append(r))
        }
        var a = 0
          , s = new Date - 0
          , c = !("minWidth" in t("html")[0].style)
          , u = "createTouch" in document && !("onmousemove" in document) || /(iPhone|iPad|iPod)/i.test(navigator.userAgent)
          , l = !c && !u
          , d = function(e, n, i) {
            var r = e = e || {};
            ("string" == typeof e || 1 === e.nodeType) && (e = {
                content: e,
                fixed: !u
            }),
            e = t.extend(!0, {}, d.defaults, e),
            e._ = r;
            var o = e.id = e.id || s + a
              , c = d.get(o);
            return c ? c.focus() : (l || (e.fixed = !1),
            e.quickClose && (e.modal = !0,
            r.backdropOpacity || (e.backdropOpacity = 0)),
            t.isArray(e.button) || (e.button = []),
            void 0 !== i && (e.cancel = i),
            e.cancel && e.button.push({
                id: "cancel",
                value: e.cancelValue,
                callback: e.cancel,
                display: e.cancelDisplay
            }),
            void 0 !== n && (e.ok = n),
            e.ok && e.button.push({
                id: "ok",
                value: e.okValue,
                callback: e.ok,
                autofocus: !0
            }),
            d.list[o] = new d.create(e))
        }
          , p = function() {}
        ;
        p.prototype = n.prototype;
        var f = d.prototype = new p;
        return d.create = function(e) {
            var i = this;
            t.extend(this, new n);
            var r = t(this.node).html(e.innerHTML);
            return this.options = e,
            this._popup = r,
            t.each(e, function(e, t) {
                "function" == typeof i[e] ? i[e](t) : i[e] = t
            }
            ),
            e.zIndex && (n.zIndex = e.zIndex),
            r.attr({
                "aria-labelledby": this._$("title").attr("id", "title:" + this.id).attr("id"),
                "aria-describedby": this._$("content").attr("id", "content:" + this.id).attr("id")
            }),
            this._$("close").css("display", this.cancel === !1 ? "none" : "").attr("title", this.cancelValue).on("click", function(e) {
                i._trigger("cancel"),
                e.preventDefault()
            }
            ),
            this._$("dialog").addClass(this.skin),
            this._$("body").css("padding", this.padding),
            e.quickClose && t(this.backdrop).on("onmousedown" in document ? "mousedown" : "click", function() {
                return i._trigger("cancel"),
                !1
            }
            ),
            this._esc = function(e) {
                var t = e.target
                  , r = t.nodeName
                  , o = /^input|textarea$/i
                  , a = n.current === i
                  , s = e.keyCode;
                !a || o.test(r) && "button" !== t.type || 27 === s && i._trigger("cancel")
            }
            ,
            t(document).on("keydown", this._esc),
            this.addEventListener("remove", function() {
                t(document).off("keydown", this._esc),
                delete d.list[this.id]
            }
            ),
            a++,
            d.oncreate(this),
            this
        }
        ,
        d.create.prototype = f,
        t.extend(f, {
            content: function(e) {
                return this._$("content").empty("")["object" == typeof e ? "append" : "html"](e),
                this.reset()
            },
            title: function(e) {
                return this._$("title").text(e),
                this._$("header")[e ? "show" : "hide"](),
                this
            },
            width: function(e) {
                return this._$("content").css("width", e),
                this.reset()
            },
            height: function(e) {
                return this._$("content").css("height", e),
                this.reset()
            },
            button: function(e) {
                e = e || [];
                var n = this
                  , i = ""
                  , r = 0;
                return this.callbacks = {},
                "string" == typeof e ? (i = e,
                r++) : t.each(e, function(e, t) {
                    t.id = t.id || t.value,
                    n.callbacks[t.id] = t.callback;
                    var o = "";
                    t.display === !1 ? o = ' style="display:none"' : r++,
                    i += '<button type="button" data-id="' + t.id + '"' + o + (t.disabled ? " disabled" : "") + (t.autofocus ? ' autofocus class="ui-dialog-autofocus"' : "") + ">" + t.value + "</button>"
                }
                ),
                this._$("footer")[r ? "show" : "hide"](),
                this._$("button").html(i).on("click", "[data-id]", function(e) {
                    var i = t(this);
                    i.attr("disabled") || n._trigger(i.data("id")),
                    e.preventDefault()
                }
                ),
                this
            },
            statusbar: function(e) {
                return this._$("statusbar").html(e)[e ? "show" : "hide"](),
                this
            },
            _$: function(e) {
                return this._popup.find("[i=" + e + "]")
            },
            _trigger: function(e) {
                var t = this.callbacks[e];
                return "function" != typeof t || t.call(this) !== !1 ? this.close().remove() : this
            }
        }),
        d.oncreate = t.noop,
        d.getCurrent = function() {
            return n.current
        }
        ,
        d.get = function(e) {
            return void 0 === e ? d.list : d.list[e]
        }
        ,
        d.list = {},
        d.defaults = i,
        d
    }
    ),
    window.dialog = e("dialog")
}
(),
/*!File[lib/plugins/utils.js]*/
function(e) {
    var t = Object.prototype.toString
      , n = function(e) {
        return function(n) {
            return t.call(n) == e
        }
    }
    ;
    e.isString = n("[object String]"),
    e.isNumber = n("[object Number]"),
    e.isBoolean = n("[object Boolean]"),
    e.isObject = n("[object Object]"),
    e.isArray = n("[object Array]"),
    e.isDate = n("[object Date]"),
    e.isRegExp = n("[object RegExp]"),
    e.isFunction = n("[object Function]"),
    e.isWindow = function(e) {
        return null  != e && e == e.window
    }
    ,
    e.isMobile = window.SYS_CONF.isMobile,
    e.tapClick = e.isMobile ? "tap" : "click",
    e.isInArray = function(e, t) {
        if (!e || !e.length)
            return !1;
        for (var n = 0, i = e.length; i > n; n++)
            if (t == e[n])
                return !0;
        return !1
    }
    ,
    e.noop = function() {}
    ,
    e.hereDoc = function(t) {
        for (var n = t.toString().split("\n").slice(1, -1), i = [], r = 0, o = n.length; o > r; r++)
            i.push(e.trim(n[r]));
        return i.join("\n")
    }
    ,
    e.getParam = function() {
        for (var e = {}, t = (location.search || "").replace(/^\?/, ""), n = t.split("&"), i = 0, r = n.length; r > i; i++) {
            var o = n[i]
              , a = o.split("=");
            e[a[0]] = a[1]
        }
        return function(t, n) {
            return e[t] || n
        }
    }
    (),
    e.searchParamsToObj = function(e) {
        var t, n, i, r = {}, o = e.split("&");
        for (t = 0,
        n = o.length; n > t; t++)
            i = o[t].split("="),
            r[i[0]] = decodeURIComponent(i[1]);
        return r
    }
    ,
    e.formatString = function(e) {
        e = String(e);
        var t = arguments
          , n = Object.prototype.toString;
        return e.replace(/#\{(.+?)\}/g, function(e, i) {
            for (var r = null , o = 1, a = t.length; a > o; o++) {
                var s = t[o];
                if (s && "object" == typeof s && i in s) {
                    r = s;
                    break
                }
            }
            if (r) {
                var c = r[i];
                return "[object Function]" == n.call(c) ? c.call(r) : String(void 0 === c ? "" : c)
            }
            return ""
        }
        )
    }
    ;
    var i = function(e) {
        var t;
        return Object.create ? Object.create(e) : (t = function() {}
        ,
        t.prototype = e,
        new t)
    }
    ;
    e.inherits = function(t, n, r) {
        var o;
        return "function" == typeof n ? (o = n,
        n = null ) : o = n && n.hasOwnProperty("constructor") ? n.constructor : function() {
            return t.apply(this, arguments)
        }
        ,
        e.extend(o, t, r || {}),
        o.__super__ = t.prototype,
        o.prototype = i(t.prototype),
        o.prototype._super = t,
        n && e.extend(!0, o.prototype, n),
        o
    }
    ,
    e.abstractFunc = function(e) {
        return function() {
            throw new Error('"' + e + '" is an abstract function')
        }
    }
    ;
    var r = !1;
    e.stopPageScroll = function() {
        r || (e(document).on("touchmove", function(e) {
            e.preventDefault()
        }
        ),
        r = !0)
    }
    ,
    e.wbr = function(e) {
        return e.replace(/(?:<[^>]+>)|(?:&#?[0-9a-z]{2,6};)|(.{1})/gi, "$&<wbr>").replace(/><wbr>/g, ">")
    }
}
(window.Zepto || window.jQuery || window.$),
/*!File[lib/plugins/cookie.js]*/
function(e) {
    var t = function(e) {
        return new RegExp('^[^\\x00-\\x20\\x7f\\(\\)<>@,;:\\\\\\"\\[\\]\\?=\\{\\}\\/\\u0080-\\uffff]+$').test(e)
    }
      , n = function(e, n, i) {
        if (t(e)) {
            i = i || {};
            var r = i.expires;
            "number" == typeof i.expires && (r = new Date,
            r.setTime(r.getTime() + i.expires));
            var o = e + "=" + n + (i.path ? "; path=" + i.path : "") + (r ? "; expires=" + r.toGMTString() : "") + (i.domain ? "; domain=" + i.domain : "") + (i.secure ? "; secure" : "");
            document.cookie = o
        }
    }
      , i = function(e) {
        if (t(e)) {
            var n = new RegExp("(^| )" + e + "=([^;]*)(;|$)")
              , i = n.exec(document.cookie);
            if (i)
                return i[2] || null 
        }
        return null 
    }
      , r = function(e) {
        var t = i(e);
        return "string" == typeof t ? t = decodeURIComponent(t) : null 
    }
      , o = function(e, t, i) {
        n(e, encodeURIComponent(t), i)
    }
      , a = function(e, t) {
        t = t || {},
        t.expires = new Date(0),
        n(e, "", t)
    }
    ;
    e.setRawCookie = n,
    e.getRawCookie = i,
    e.setCookie = o,
    e.getCookie = r,
    e.remove = a,
    e.delCookie = a
}
(window.jQuery || window.Zepto || window.$),
/*!File[lib/s_require.js]*/
window.Bee = function() {
    var e = function() {
        var e = {}
          , t = Object.prototype.toString
          , n = function(e) {
            return function(n) {
                return t.call(n) == e
            }
        }
        ;
        return e.isString = n("[object String]"),
        e.isObject = n("[object Object]"),
        e.isNumber = n("[object Number]"),
        e.isArray = n("[object Array]"),
        e.isFunction = n("[object Function]"),
        e.isMobile = window.SYS_CONF.isMobile,
        e.tapClick = e.isMobile ? "tap" : "click",
        e
    }
    ()
      , t = {}
      , n = {}
      , i = function(e, r) {
        if (!t[e]) {
            if (r)
                return !1;
            throw new Error(e + " is not defined")
        }
        if (!n[e]) {
            var o = t[e]
              , a = [];
            if (o.requireMods)
                for (var s = 0, c = o.requireMods.length; c > s; s++)
                    a.push(i(o.requireMods[s]));
            n[e] = o.modObj || o.defineFn.apply(null , a)
        }
        return n[e]
    }
      , r = function() {
        var n;
        defConf = {};
        for (var i = 0, r = arguments.length; r > i; i++) {
            var o = arguments[i];
            e.isString(o) ? (n = o,
            defConf.modName = o) : e.isObject(o) ? defConf.modObj = o : e.isArray(o) ? defConf.requireMods = o : e.isFunction(o) && (defConf.defineFn = o)
        }
        t[n] = defConf
    }
      , o = function(t, n) {
        var r = [];
        if (e.isArray(t))
            for (var o = 0, a = t.length; a > o; o++)
                r.push(i(t[o]));
        else
            n = t;
        n.apply(null , r)
    }
    ;
    return window.define = r,
    {
        define: r,
        boot: o,
        getMod: i
    }
}
(),
/*!File[lib/base.js]*/
define("lib/base", function() {
    var e = !1
      , t = "online" == SYS_CONF.environ ? !1 : e
      , n = {};
    window.base = n,
    n.var_dump = function(e) {
        t ? console.log(e) : alert(n.jsonEncode(e))
    }
    ,
    n.clickLog = function(e, t) {
        if (e) {
            var i = {
                g_platform: $.isWeixin ? "weixin" : $.isWeibo ? "weibo" : $.isApp ? $.isIpad ? "ios" : $.isIphone ? "ios" : $.isAndroid ? "android" : "" : $.isMobile ? "mobile" : "pc",
                g_geologid: SYS_CONF.geologid,
                g_logid: SYS_CONF.logid,
                g_product: "bee",
                g_uniqid: SYS_CONF.userInfo.logUid,
                g_action: e,
                g_tn: SYS_CONF.tn,
                g_tg: SYS_CONF.tg,
                _r: Math.random()
            };
            if ($.isObject(t))
                for (var r in t)
                    t.hasOwnProperty(r) && (i[r] = t[r]);
            var o = SYS_CONF.domain.clicklog + "/click.gif?" + $.param(i);
            n.imgRequest(o)
        }
    }
    ,
    n.imgRequest = window._bee_imgRequest,
    n.sendError = function(e, t, i) {
        window._bee_sendError(n.jsonEncode(e), t, i || "base.sendError")
    }
    ,
    n.onceExecMulitCallFn = function(e) {
        var t = []
          , n = null 
          , i = !1
          , r = !1
          , o = {
            done: function() {
                r = !0,
                n = arguments;
                for (var e = 0, i = t.length; i > e; e++) {
                    var o = t[e];
                    o && $.isFunction(o) && o.apply(null , n)
                }
                t = null 
            },
            reset: function() {
                r = !1,
                i = !1,
                n = null ,
                t = []
            }
        }
          , a = function() {
            i || (e.apply(o, arguments),
            i = !0);
            var a = arguments[arguments.length - 1] || $.noop;
            r ? $.isFunction(a) && a.apply(null , n) : t.push(a)
        }
        ;
        return a
    }
    ,
    n.isSupportLocation = function() {
        return t ? !0 : window.WeiboJSBridge || navigator.geolocation ? !0 : $.isWindows || $.isMac ? !1 : !0
    }
    ,
    n.getGPSPosition = function(e) {
        if (t)
            return void setTimeout(function() {
                e({
                    success: !0,
                    longitude: 116.441901,
                    latitude: 39.946048
                })
            }
            , 2e3);
        var i = (new Date).getTime()
          , r = function(t) {
            var r = (new Date).getTime() - i;
            t.escape = r,
            e(t);
            var o = ["geolog_" + (t.success ? "success" : "fail")];
            for (var a in t)
                o.push(a + "_" + t[a]);
            n.sendError(o.join("~"))
        }
        ;
        if (!n.isSupportLocation())
            return void setTimeout(function() {
                r({
                    success: !1,
                    error: "unsupport",
                    errcode: "sysunsupport"
                })
            }
            , 10);
        var o = {
            enableHighAccuracy: !0,
            maximumAge: 0,
            timeout: 3e3
        }
          , a = !1;
        setTimeout(function() {
            a || (a = !0,
            r({
                success: !1,
                error: "unavailable",
                errcode: "systimeout"
            }))
        }
        , 1e4);
        var s = function(e, t) {
            e = e || "",
            navigator.geolocation.getCurrentPosition(function(n) {
                if (!a) {
                    a = !0;
                    var i = n.coords.latitude
                      , o = n.coords.longitude
                      , s = n.coords.accuracy || !1;
                    r({
                        success: !0,
                        latitude: i,
                        longitude: o,
                        accuracy: s,
                        source: e + "h5",
                        errorCodeFrom: t || ""
                    })
                }
            }
            , function(n) {
                if (!a) {
                    a = !0;
                    var i = null ;
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
                    r({
                        success: !1,
                        error: i,
                        source: e + "h5",
                        errcode: n.code,
                        errorCodeFrom: t || ""
                    })
                }
            }
            , o)
        }
        ;
        if ($.isWeibo) {
            var c = function(e, t, n) {
                if (t) {
                    if (a)
                        return;
                    a = !0,
                    r({
                        success: !0,
                        latitude: e.lat,
                        longitude: e["long"],
                        accuracy: -1,
                        source: "wb"
                    })
                } else
                    s("wb", n)
            }
            ;
            window.WeiboJSBridge ? WeiboJSBridge.invoke("getLocation", {}, c) : $(document).on("WeiboJSBridgeReady", function() {
                WeiboJSBridge.invoke("getLocation", {}, c)
            }
            )
        } else if ($.isWeixin && SYS_CONF.sns && SYS_CONF.sns.signedParam) {
            var u = function() {
                WeixinJSBridge.invoke("geoLocation", window.SYS_CONF.sns.signedParam, function(e) {
                    if ("geo_location:ok" == e.err_msg) {
                        if (a)
                            return;
                        a = !0,
                        r({
                            success: !0,
                            latitude: e.latitude,
                            longitude: e.longitude,
                            accuracy: e.accuracy,
                            source: "wx"
                        })
                    } else
                        s("wx", e.err_msg)
                }
                )
            }
            ;
            window.WeixinJSBridge ? u() : $(document).on("WeixinJSBridgeReady", function() {
                u()
            }
            )
        } else
            s()
    }
    ,
    n.getAddressInfoByPoint = function(e, t, i) {
        $.ajax({
            url: "http://api.map.baidu.com/geocoder/v2/",
            data: {
                ak: "epx2GlGrgjgEizwW8iYsHwQZ",
                location: e + "," + t,
                output: "json",
                poi: 0
            },
            dataType: "jsonp",
            success: function(e) {
                0 == e.status ? i && i(e.result.addressComponent) : (n.sendError("baidu geocoder error:" + e.status),
                i && i(!1))
            },
            error: function() {
                n.sendError("baidu geocoder error:error"),
                i && i(!1)
            }
        })
    }
    ,
    n.getPointByAddress = function(e, t, i) {
        $.ajax({
            url: "http://api.map.baidu.com/geocoder/v2/",
            data: {
                ak: "epx2GlGrgjgEizwW8iYsHwQZ",
                city: e,
                address: t,
                output: "json"
            },
            dataType: "jsonp",
            success: function(e) {
                0 == e.status ? i && i(e.result.location) : (n.sendError("baidu geocoder error:" + e.status),
                i && i(!1))
            },
            error: function() {
                n.sendError("baidu geocoder error:error"),
                i && i(!1)
            }
        })
    }
    ,
    n.getPlaceAddress = function(e, t, i) {
        $.ajax({
            url: "http://api.map.baidu.com/place/v2/search",
            data: {
                ak: "epx2GlGrgjgEizwW8iYsHwQZ",
                region: e,
                q: e + t,
                output: "json",
                page_size: 20
            },
            timeout: 5e3,
            dataType: "jsonp",
            success: function(e) {
                0 == e.status ? i && i(e.results) : (n.sendError("baidu place error:" + e.status),
                i && i(!1))
            },
            error: function() {
                n.sendError("baidu place error:error"),
                i && i(!1)
            }
        })
    }
    ,
    n.getBaiduConv = function(e, t, i) {
        $.ajax({
            url: "http://api.map.baidu.com/geoconv/v1/?",
            data: {
                ak: "epx2GlGrgjgEizwW8iYsHwQZ",
                coords: e,
                from: t,
                output: "json",
                page_size: 20
            },
            timeout: 5e3,
            dataType: "jsonp",
            success: function(e) {
                0 == e.status ? i && i(e.result) : (n.sendError("baidu geo conv error:" + e.status),
                i && i(!1))
            },
            error: function() {
                n.sendError("baidu geo conv error:error"),
                i && i(!1)
            }
        })
    }
    ,
    n.getGeoLogid = function() {
        var e = new Date
          , t = function(e) {
            return 10 > e ? "0" + e : e
        }
          , n = function() {
            var e = Math.random() + "";
            return e.replace("0.", "")
        }
          , i = [$.isWeixin ? "wexn" : $.isWeibo ? "webo" : $.isMobile ? "h5mb" : "wwpc", "" + e.getFullYear() + t(e.getMonth() + 1) + t(e.getDate()) + t(e.getHours()) + t(e.getMinutes()) + t(e.getSeconds()), ("L" + SYS_CONF.logid + "X" + n() + n() + n()).substr(0, 32), $.isWeixin || $.isWeibo ? "I" + SYS_CONF.userInfo.logUid : ""]
          , r = i.join("");
        return $.setCookie("geologid", r, {
            path: "/",
            expires: 31104e7
        }),
        r
    }
    ,
    n.getAsId = function() {
        var e = "bee_AS_ASID"
          , t = "";
        if (window.localStorage)
            try {
                t = localStorage.getItem(e),
                t || (t = SYS_CONF.logid,
                localStorage.setItem(e, t))
            } catch (n) {}
        return t || SYS_CONF.logid
    }
    ,
    n.getAjaxPublicParams = function() {
        return {
            asid: n.getAsId(),
            _r: Math.random(),
            tg: n.safeGetProp(window.SYS_CONF, "tg") || "",
            reflogid: n.safeGetProp(window.SYS_CONF, "logid") || ""
        }
    }
    ,
    n.ajaxGet = function(e, t, i, r) {
        return t = $.extend(n.getAjaxPublicParams(), t),
        i = i || $.noop,
        r = r || function(e, t, n) {
            i({
                errno: -1,
                errmsg: t + ":" + n
            }, e)
        }
        ,
        $.ajax({
            url: e,
            type: "GET",
            data: t,
            dataType: "text",
            success: function(e, t) {
                try {
                    var o = n.jsonDecode(e);
                    i(o, t)
                } catch (a) {
                    r(t, "parseerror", String(a))
                }
            },
            error: r
        })
    }
    ,
    n.ajaxPost = function(e, t, i, r) {
        return t = $.extend(n.getAjaxPublicParams(), t),
        i = i || $.noop,
        r = r || function(e, t, n) {
            i({
                errno: -1,
                errmsg: t + ":" + n
            }, e)
        }
        ,
        $.ajax({
            url: e,
            type: "POST",
            data: t,
            dataType: "text",
            success: function(e, t) {
                try {
                    var o = n.jsonDecode(e);
                    i(o, t)
                } catch (a) {
                    r(t, "parseerror", String(a))
                }
            },
            error: r
        })
    }
    ,
    n.ajaxLoad = function(e, t, i, r, o) {
        i = $.extend(n.getAjaxPublicParams(), i),
        $.ajax({
            url: t,
            type: "get",
            data: i,
            dataType: "text",
            success: function(t) {
                $(e).html(t),
                r && r()
            },
            error: o
        })
    }
    ,
    n.escape = function() {
        var e = {
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
        }
          , t = function(e) {
            return function(t) {
                return t.replace(e.regexp, function(t) {
                    return e[t] || t
                }
                )
            }
        }
        ;
        return {
            js: t(e.js),
            html: t(e.html)
        }
    }
    (),
    n.jsonEncode = function() {
        var e = {
            "\b": "\\b",
            "	": "\\t",
            "\n": "\\n",
            "\f": "\\f",
            "\r": "\\r",
            '"': '\\"',
            "\\": "\\\\"
        }
          , t = function(t) {
            return /["\\\x00-\x1f]/.test(t) && (t = t.replace(/["\\\x00-\x1f]/g, function(t) {
                var n = e[t];
                return n ? n : (n = t.charCodeAt(),
                "\\u00" + Math.floor(n / 16).toString(16) + (n % 16).toString(16))
            }
            )),
            '"' + t + '"'
        }
          , n = function(e) {
            var t, n, r, o = ["["], a = e.length;
            for (n = 0; a > n; n++)
                switch (r = e[n],
                typeof r) {
                case "undefined":
                case "function":
                case "unknown":
                    break;
                default:
                    t && o.push(","),
                    o.push(i(r)),
                    t = 1
                }
            return o.push("]"),
            o.join("")
        }
          , i = function(e) {
            switch (typeof e) {
            case "undefined":
                return "undefined";
            case "number":
                return isFinite(e) ? String(e) : "null";
            case "boolean":
                return String(e);
            case "string":
                return t(e);
            default:
                if (null  === e)
                    return "null";
                if ($.isArray(e))
                    return n(e);
                if ($.isDate(e))
                    return e.toString();
                var r, o, a = ["{"];
                for (var s in e)
                    if (Object.prototype.hasOwnProperty.call(e, s))
                        switch (o = e[s],
                        typeof o) {
                        case "undefined":
                        case "unknown":
                        case "function":
                            break;
                        default:
                            r && a.push(","),
                            r = 1,
                            a.push(t(s) + ":" + i(o))
                        }
                return a.push("}"),
                a.join("")
            }
        }
        ;
        return i
    }
    (),
    n.jsonDecode = function(e) {
        return new Function("return (" + e + ")")()
    }
    ,
    n.createStyleSheet = function(e) {
        e = e || "base-default-style";
        var t = document.getElementById(e);
        return t ? t : (document.createStyleSheet ? t = document.createStyleSheet() : (t = document.createElement("style"),
        document.getElementsByTagName("head")[0].appendChild(t)),
        t.setAttribute("id", e),
        t)
    }
    ,
    n.setStyleText = function(e, t) {
        var i = document.getElementById(t) || n.createStyleSheet(t);
        document.createStyleSheet ? i.cssText = e : i.innerHTML = e
    }
    ,
    n.setInterval = function(e, t) {
        var n = function() {
            var i = e();
            i !== !1 && setTimeout(n, t)
        }
        ;
        n()
    }
    ,
    n.urlAddParams = function(e, t) {
        var n = e.split("#");
        return n[0] = n[0] + (-1 == n[0].indexOf("?") ? "?" : "&") + ($.isString(t) ? t : $.param(t)),
        n.join("#")
    }
    ,
    n.safeGetProp = function(e, t) {
        for (var n = t.split("."), i = 0, r = n.length; r > i; i++) {
            var o = n[i];
            if (!e || !e[o])
                return void 0;
            e = e[o]
        }
        return e
    }
    ,
    n.loadJs = function(e) {
        var t = e.src
          , n = e.onload || $.noop
          , i = e.onerror || $.noop
          , r = e.timeout || !1
          , o = e.charset || "utf-8"
          , a = $(e.parentNode || "head")
          , s = document.createElement("script")
          , c = !1;
        a.append(s),
        s.onload = s.onerror = s.onreadystatechange = function() {
            var e = s.readyState;
            if ("loaded" == e || "complete" == e || void 0 === e) {
                if (s.onload = s.onerror = s.onreadystatechange = null ,
                s.parentNode && s.parentNode.removeChild(s),
                s = null ,
                c)
                    return;
                c = !0,
                n()
            }
        }
        ,
        s.charset = o,
        r && setTimeout(function() {
            c || (c = !0,
            i())
        }
        , r),
        s.src = t
    }
    ,
    n.loadCss = function(e) {
        var t = e.src
          , n = e.onload || $.noop
          , i = e.id || !1
          , r = e.onerror || $.noop
          , o = e.timeout || !1
          , a = $(e.parentNode || "head")
          , s = document.createElement("link")
          , c = !1;
        if (a.append(s),
        s.rel = "stylesheet",
        i && (s.id = i),
        o && setTimeout(function() {
            c || (c = !0,
            r())
        }
        , o),
        s.attachEvent)
            s.attachEvent("onload", function() {
                c || (c = !0,
                n())
            }
            );
        else {
            var u = function() {
                if (!c) {
                    var e = navigator.userAgent
                      , t = e.indexOf("AppleWebKit") > -1
                      , i = e.indexOf("Opera") > -1;
                    if (t || i)
                        s.sheet && (c = !0,
                        n());
                    else if (s.sheet)
                        try {
                            s.sheet.cssRules && (c = !0,
                            n())
                        } catch (r) {
                            ("SecurityError" === ex.name || "NS_ERROR_DOM_SECURITY_ERR" === ex.name) && (c = !0,
                            n())
                        }
                    c || setTimeout(u, 10)
                }
            }
            ;
            setTimeout(u, 10)
        }
        s.href = t
    }
    ;
    var i = null 
      , r = null 
      , o = !0;
    return $(document).on("tap", function(e) {
        r = e.srcElement,
        o = !1,
        clearTimeout(i),
        i = setTimeout(function() {
            r = o = !1
        }
        , 600)
    }
    ),
    $(document).delegate("input,a,textarea", "click", function(e) {
        return r && !o && e.srcElement != r ? (e.stopPropagation(),
        e.preventDefault(),
        !1) : void 0
    }
    ),
    n
}
),
/*!File[common/AreaInfo.js]*/
define("common/AreaInfo", function() {
    var e = [{
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
    }]
      , t = [{
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
    }]
      , n = [{
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
    }]
      , i = [{
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
        districts: e,
        provinceName: "北京",
        provinceId: 1,
        lng: 116.403874,
        lat: 39.914889
    }, {
        id: 22,
        name: "上海市",
        districts: t,
        provinceName: "上海",
        provinceId: 21,
        lng: 121.487899,
        lat: 31.249162
    }, {
        id: 424,
        name: "广州市",
        districts: n,
        provinceName: "广东",
        provinceId: 423,
        lng: 113.30765,
        lat: 23.120049
    }, {
        id: 524,
        name: "深圳市",
        districts: i,
        provinceName: "广东",
        provinceId: 423,
        lng: 114.025974,
        lat: 22.546054
    }, {
        id: 442,
        name: "佛山市",
        districts: [],
        provinceName: "广东",
        provinceId: 423,
        lng: 113.134026,
        lat: 23.035095
    }, {
        id: 3134,
        name: "杭州市",
        districts: [],
        provinceName: "浙江",
        provinceId: 3133,
        lng: 120.161693,
        lat: 30.280059
    }, {
        id: 1692,
        name: "苏州市",
        districts: [],
        provinceName: "江苏",
        provinceId: 1643,
        lng: 120.589613,
        lat: 31.304566
    }]
}
),
/*!File[lib/EventObj.js]*/
define("lib/EventObj", function() {
    var e = function(e, t) {
        this._b_evtName = e,
        this._b_preventDefault = !1,
        this._b_thenDoFn = null ,
        $.extend(this, t)
    }
    ;
    e.prototype = {
        preventDefault: function() {
            this._b_preventDefault = !0
        },
        getEventName: function() {
            return this._b_evtName
        },
        then: function(e) {
            this._b_thenDoFn = e
        },
        done: function(e) {
            this._b_preventDefault || this._b_thenDoFn && this._b_thenDoFn.call(e)
        }
    };
    var t = 0
      , n = function() {
        this.id = ++t,
        this._evtHandlers = {}
    }
    ;
    return n.prototype = {
        fire: function(t, n, i) {
            var r = new e(t,n);
            if (i && r.then(i),
            this._evtHandlers[t])
                for (var o = 0, a = this._evtHandlers[t], s = a.length; s > o; o++) {
                    var c = a[o];
                    c.call(this, r)
                }
            r.done(this)
        },
        _addEventListener: function(e, t) {
            (this._evtHandlers[e] || (this._evtHandlers[e] = [])).push(t)
        },
        on: function(e, t) {
            {
                var n = Object.prototype.toString.call(e);
                Object.prototype.toString.call(t)
            }
            if ("[object String]" == n)
                this._addEventListener(e, t);
            else if ("[object Array]" == n)
                for (var i = 0, r = e.length; r > i; i++)
                    this._addEventListener(e[i], t);
            else {
                if ("[object Object]" != n)
                    throw new Error("arguments error");
                for (var o in e)
                    this._addEventListener(o, e[o])
            }
            return this
        },
        un: function(e, t) {
            if (this._evtHandlers[e]) {
                for (var n = this._evtHandlers[e], i = [], r = 0, o = n.length; o > r; r++) {
                    var a = n[r];
                    a != t && i.push(a)
                }
                return this._evtHandlers[e] = i,
                i.length != n
            }
            return !1
        }
    },
    n
}
),
/*!File[lib/Storage.js]*/
define("lib/Storage", ["lib/base", "lib/EventObj"], function(e, t) {
    var n = "bee_"
      , i = function() {
        var t = window.name.match(/^NS_(.+)/);
        if (t)
            try {
                this.storage = e.jsonDecode(t[1])
            } catch (n) {
                this.storage = {}
            }
        else
            this.storage = {}
    }
    ;
    i.prototype = {
        getItem: function(e) {
            return this.storage[e] || null 
        },
        setItem: function(t, n) {
            this.storage[t] = n,
            window.name = "NS_" + e.jsonEncode(this.storage)
        }
    };
    var r = $.inherits(t, {
        constructor: function(e) {
            t.call(this),
            this.customKey = e,
            this.localStorage = window.localStorage || new i,
            this._hadSendError = !1
        },
        set: function(t, n) {
            var i, r = this._getKey(t), o = $.isString(n) || $.isNumber(n) ? n : e.jsonEncode(n);
            try {
                i = this.localStorage.setItem(r, o)
            } catch (a) {
                e.sendError("Storage set error:" + String(a), "Storage.js")
            }
            return i
        },
        get: function(t) {
            var n, i = this._getKey(t);
            try {
                n = this.localStorage.getItem(i)
            } catch (r) {
                e.sendError("Storage get error" + String(r), "Storage.js")
            }
            return !n || 0 !== n.indexOf("{") && 0 != n.indexOf("[") ? n : e.jsonDecode(n)
        },
        _getKey: function(e) {
            return n + this.customKey + "_" + e
        }
    });
    return r.NameStorage = i,
    r
}
),
/*!File[common/Promotion.js]*/
define("common/Promotion", ["lib/base", "common/Dialog"], function(e, t) {
    var n = function(t) {
        this.shoppingCart = t,
        this.promotion = SYS_CONF.promotion,
        this.checkMethodList = "exclusive,productExclusion,countLimit,brandExclusion,number,productAppGuide".split(","),
        this.defaultMinPrice = parseInt(e.safeGetProp(SYS_CONF, "promotion.shoppingCart.minPrice") || 30),
        this.defaultPropText = this.propText = "闪电送，免运费"
    }
    ;
    return n.prototype = {
        setShopData: function() {
            this.propText = this.defaultPropText
        },
        _getExclusive: function() {
            var t = e.safeGetProp(SYS_CONF, "promotion.exclusive");
            if (t) {
                var n, i, r = {};
                for (n in t)
                    i = parseInt(t[n]),
                    r[n] = {
                        checkNumber: i
                    };
                return r
            }
            return !1
        },
        getPropText: function(e) {
            return 1 == e ? "满30可预订，全城免运费" : e > 1e4 ? "新鲜美食，闪电送达" : this.propText
        },
        checkShoppingCartError: function(e) {
            return this._doCheck(this.checkMethodList, e)
        },
        getIsStart: function(e) {
            return this.promotion.timestart && this.promotion.timestart[e] ? this.promotion.timestart[e].isStart : !1
        },
        getStartConf: function(e) {
            return this.promotion.timestart && this.promotion.timestart[e] ? this.promotion.timestart[e] : null 
        },
        getMinPrice: function(e) {
            e = e || 0;
            var t, n, i = this.defaultMinPrice, r = this.shoppingCart.getShoppingMap(!0, e), o = SYS_CONF.promotion.minPrice;
            if (n = this._getExclusive())
                for (var a in n)
                    if (r[a])
                        return 0;
            for (var s in r) {
                var c = r[s]
                  , u = c.cid || c.category_id;
                if (156 == u || 155 == u)
                    return 0;
                o && o.hasOwnProperty(s) && (t = parseInt(o[s]),
                i = Math.min(i, t))
            }
            return i
        },
        _doCheck: function(e, t) {
            for (var n, i = this.shoppingCart.getShoppingMap(!0, t.cart_group_id), r = 0, o = e.length; o > r; r++) {
                n = e[r];
                var a = this["_check_" + n](t, i);
                if (a)
                    return a
            }
            return !1
        },
        _check_exclusive: function(e, t) {
            var n, i, r, o = !1, a = e.cid || e.category_id, s = !1;
            for (n in t) {
                var c = t[n];
                if (o = !0,
                156 == (c.category_id || c.cid)) {
                    s = c.name;
                    break
                }
            }
            if (i = this._getExclusive())
                for (r in i) {
                    if (t[r])
                        return e.id == r ? e.name + "只能购买一个哦" : t[r].name + "\n无法同其他商品同时购买哦";
                    if (e.id == r && o)
                        return e.name + "只能单独下单哦"
                }
            if (156 == a) {
                if (s)
                    return e.name + "只能购买一个哦";
                if (o)
                    return e.name + "只能单独下单哦"
            } else if (s)
                return s + "\n无法同其他商品同时购买哦"
        },
        _check_productExclusion: function(t, n) {
            var i = e.safeGetProp(this.promotion, "exclusion.id");
            if ($.isArray(i))
                for (var r = 0, o = i.length; o > r; r++) {
                    for (var a, s = i[r].split(","), c = 0, u = s.length; u > c && (s[c] == t.id || !(a = n[s[c]])); c++)
                        ;
                    if (a && $.isInArray(s, t.id))
                        return a.name + " 和\n" + t.name + "\n不能同时购买哦~"
                }
        },
        _check_brandExclusion: function(t, n) {
            var i = e.safeGetProp(this.promotion, "exclusion.brand");
            if ($.isArray(i)) {
                var r = {};
                for (var o in n) {
                    var a = n[o];
                    r[a.brand_id] = a.brand_name
                }
                for (var s = 0, c = i.length; c > s; s++) {
                    var u = i[s].split(",");
                    if (!$.isInArray(u, t.brand_id))
                        return !1;
                    for (var l = 0, d = u.length; d > l; l++) {
                        var p = u[l];
                        if (p != t.brand_id && !(t.cart_group_id > 1e5 & t.cart_group_id < 15e4) && r[p])
                            return t.brand_name + " 和 " + r[p] + "\n需要在两个订单中购买哦~"
                    }
                }
            }
        },
        _check_countLimit: function(e, t) {
            var n, i, r = this.promotion.countLimit, o = e.id;
            if (r)
                return (n = parseInt(r[o])) && (i = t[o] ? t[o].shoppingCount : 0,
                i >= n) ? e.name + "\n最多只能购买" + n + "个哦~" : void 0
        },
        _check_number: function(e, t) {
            var n;
            if (!(n = this._getExclusive()) || !n[e.id] || n[e.id].checkNumber) {
                if (parseInt(e.number) < 1 && !parseInt(e.hot_degree))
                    return e.name + " 补货中..\n过段时间再来看看吧~";
                var i = t[e.id] ? t[e.id].shoppingCount : 0;
                return e.number <= i ? e.name + " 库存不足了\n先买这么多，过段时间再来看看吧~" : void 0
            }
        },
        _check_productAppGuide: function(e) {
            var n;
            if ($.isMobile && !$.isApp && (n = Bee.getMod("common/UserStatus", !0)) && 2581 == e.id) {
                var i = "longxiaAppGuide";
                if (!n.isFirst(i))
                    return;
                t.show({
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
                            window.location.href = "http://m.beequick.cn/show/appDownload?tn=" + i
                        }
                    }]
                })
            }
        }
    },
    n
}
),
/*!File[common/ShoppingCart.js]*/
define("common/ShoppingCart", ["lib/EventObj", "lib/Storage", "common/Promotion"], function(e, t, n) {
    var i = ["10420", "10528", "10425", "10421", "10422", "10423", "10424", "10798", "10799", "10803", "10800", "10801", "10802"]
      , r = function(e) {
        return parseFloat(Math.round(100 * e) / 100)
    }
      , o = function(e, t) {
        if ($.isObject(e) && $.isObject(t))
            for (var n in t)
                "shoppingCount" != n && "disabled" != n && (e[n] = t[n])
    }
      , a = (window.SYS_CONF.promotion.shoppingCart || {},
    $.inherits(e, {
        constructor: function() {
            e.call(this),
            this.storage = new t("shoppingcart"),
            this.shoppingList = this.storage.get("shoppingList") || {},
            this.promotion = new n(this),
            this.productMap = {},
            this.cartInfoObj = {},
            this._calcCartInfo();
            var i = $.isApp ? !1 : Bee.getMod("common/Dialog", !0);
            this.alert = i ? function(e) {
                i.alert(e.replace(/\n/g, "<br/>"))
            }
             : $.noop,
            this._lastOpInfo = {
                opSuccess: !0,
                opErrorMsg: "",
                noticeMsg: ""
            }
        },
        addProduct: function(e) {
            var t, n;
            if ($.isString(e) || $.isNumber(e)) {
                if (t = e,
                null  == this.productMap && !this.shoppingList[e])
                    return void this._error("need setData before");
                if (!this.shoppingList[e] && !this.productMap[t])
                    return void this._error("id " + t + " 不存在")
            }
            $.isObject(e) && (t = e.id,
            this.productMap[t] || (this.productMap[t] = e),
            e != n && (o(this.productMap[t], e),
            o(this.shoppingList[t], e))),
            n = this.productMap[t] || this.shoppingList[t];
            var i = this.promotion.checkShoppingCartError(n);
            return i ? (this._error(i),
            !1) : (n.disabled = !1,
            this.shoppingList[t] || (this.shoppingList[t] = n,
            n.shoppingCount = 0),
            this.shoppingList[t].shoppingCount++,
            this._fireChange("add"),
            n)
        },
        deleteProduct: function(e, t) {
            var n;
            if ($.isString(e) || $.isNumber(e)) {
                if (n = e,
                null  == this.productMap && !this.shoppingList[n])
                    return this._error("need setData before"),
                    !1
            } else
                n = e.id;
            return this.shoppingList[n] || this.productMap[n] ? (t ? this.shoppingList[n].shoppingCount = 0 : this.shoppingList[n].shoppingCount--,
            this.shoppingList[n].shoppingCount < 1 && delete this.shoppingList[n],
            this._fireChange("del"),
            !0) : !1
        },
        addProductDataList: function(e) {
            var t = this
              , n = function(e) {
                $.each(e, function(e, n) {
                    n.price = parseFloat(n.price) || 0,
                    t.productMap[n.id] = n
                }
                )
            }
            ;
            $.isArray(e) ? n(e) : $.each(e, function(e, t) {
                parseInt(e) <= 0 || n(t)
            }
            )
        },
        setProductList: function(e) {
            var t = this
              , n = {}
              , i = [];
            return this.productMap = {},
            this.promotion.propText = "闪电送，免运费",
            $.each(e, function(e, n) {
                parseInt(e) <= 0 || $.each(n, function(e, n) {
                    524 == n.cityid && (t.promotion.propText = "闪电送，免运费"),
                    n.price = parseFloat(n.price) || 0,
                    t.productMap[n.id] = n
                }
                )
            }
            ),
            $.each(this.shoppingList, function(e, r) {
                var o = null ;
                if (o = t.productMap[e]) {
                    if (!parseInt(o.number) && !parseInt(o.hot_degree))
                        return void i.push(o);
                    n[e] = o,
                    o.shoppingCount = r.shoppingCount
                } else
                    i.push(r)
            }
            ),
            this.shoppingList = n,
            this._fireChange("data"),
            i.length && this.fire("unableAutoRemoved", {
                unableList: i
            }),
            this
        },
        setDisableProducts: function(e) {
            $.isString(e) && (e = e.split(","));
            for (var t = 0, n = e.length; n > t; t++) {
                var i = e[t];
                this.shoppingList[i] && (this.shoppingList[i].disabled = !0)
            }
            this._fireChange("data")
        },
        setShopData: function(e, t) {
            if (e && this.promotion.setShopData(e),
            t) {
                var n, r, o, a, s = {};
                for (this.productMap = {},
                o = 0,
                a = t.length; a > o; o++)
                    r = t[o],
                    1 != r.is_gift && (n = r.id,
                    this.shoppingList[n] && (s[n] = r,
                    this.productMap[n] = r,
                    r.shoppingCount = this.shoppingList[n].shoppingCount,
                    parseInt(r.number) < 1 && (r.disabled = !0),
                    delete this.shoppingList[n]));
                for (n in this.shoppingList)
                    r = this.shoppingList[n],
                    r.disabled = !0,
                    s[n] = r,
                    $.inArray(n, i) >= 0 && this._notice("亲，有点小遗憾，您所在区域的此商品已抢光了！");
                this.shoppingList = s
            }
            this._fireChange("data")
        },
        updateProduct: function(e) {
            if ($.isArray(e))
                for (var t = 0, n = e.length; n > t; t++) {
                    var i = e[t];
                    $.isObject(i) && this._updateProduct(i.id, i)
                }
            else if ($.isObject(e))
                if (e.id)
                    this._updateProduct(e.id, e);
                else
                    for (var r in e) {
                        var i = e[r];
                        $.isObject(i) && this._updateProduct(r, i)
                    }
            this._fireChange("data")
        },
        _updateProduct: function(e, t) {
            return e && t && $.isObject(t) && parseInt(e) == e && this.shoppingList[e] ? ($.extend(this.shoppingList[e], t),
            !0) : !1
        },
        removeDisabledProduct: function() {
            var e = this;
            $.each(this.shoppingList, function(t, n) {
                n.disabled && (delete n.disabled,
                delete e.shoppingList[t],
                e.productMap && e.productMap[t] && e.productMap[t].disabled && delete e.productMap[t].disabled)
            }
            ),
            this._fireChange("data")
        },
        getShoppingList: function(e, t) {
            t = t || 0;
            var n, i, r = [];
            for (i in this.shoppingList)
                n = this.shoppingList[i],
                e && n || (n.cart_group_id || 0) == t && r.push(n);
            return r
        },
        getShoppingMap: function(e, t) {
            t = t || 0;
            var n, i, r = {};
            for (i in this.shoppingList)
                n = this.shoppingList[i],
                e && n.disabled || (n.cart_group_id || 0) == t && (r[i] = n);
            return r
        },
        getProductById: function(e) {
            return this.shoppingList[e] || null 
        },
        getProductObjById: function(e) {
            return this.productMap[e]
        },
        getGroupCountBy: function(e) {
            var t = {};
            return $.each(this.shoppingList, function(n, i) {
                if (!i.disabled) {
                    var r = i[e];
                    t[r] = t[r] || 0,
                    t[r] += i.shoppingCount
                }
            }
            ),
            t
        },
        getIdformat: function(e) {
            var t = [];
            for (var n in this.shoppingList)
                e && this.shoppingList[n] && this.shoppingList[n].disabled || t.push(n + ":" + this.shoppingList[n].shoppingCount);
            return t.join(",")
        },
        getCount: function() {
            return this.cartInfoObj.count
        },
        getDisabledCount: function() {
            var e = 0;
            for (var t in this.shoppingList)
                this.shoppingList[t] && this.shoppingList[t].disabled && e++;
            return e
        },
        getTotalPrice: function() {
            return this.cartInfoObj.price
        },
        reset: function(e) {
            if (void 0 === e)
                this.shoppingList = {};
            else {
                var t = {};
                $.each(this.shoppingList, function(n, i) {
                    var r = i.cart_group_id || 0;
                    e != r && (t[n] = i)
                }
                ),
                this.shoppingList = t
            }
            return this._fireChange("reset"),
            this
        },
        delegateOperate: function(e, t) {
            var n = this;
            return $(e).delegate(".shopping-action", $.tapClick, function(e) {
                e.stopPropagation();
                var i = $(this).data("action");
                if (i) {
                    var r = i.split(":")
                      , o = r[0]
                      , a = r[1];
                    "+" == a ? (addProduct = n.addProduct(o)) && t && t(addProduct) : "-" == a && n.deleteProduct(o)
                }
            }
            ),
            $(e).delegate(".shopping-item", "swipeLeft", function() {
                var e = $(this)
                  , t = e.data("id")
                  , i = e.data("anime");
                if (t) {
                    var r = function() {
                        n.deleteProduct(t, !0)
                    }
                    ;
                    i ? e.animate({
                        translateX: "-100%",
                        scale: ".3"
                    }, 200, "ease-out", r) : r()
                }
            }
            ),
            this
        },
        bindBarUi: function(e, t) {
            var n = this;
            return t = t || "选好了",
            this.on("shoppingListChange", function() {
                n._updateUi(e, t)
            }
            ),
            this._updateUi(e, t),
            this
        },
        getCartInfo: function() {
            return this.cartInfoObj
        },
        _calcCartInfo: function() {
            var e = {}
              , t = [];
            this.cartInfoObj = this._calcCartGroupInfo(),
            $.each(this.shoppingList, function(t, n) {
                n.cart_group_id && 0 != n.cart_group_id && (e[n.cart_group_id || 0] = !0)
            }
            );
            var n = this;
            $.each(e, function(e) {
                var i = "group" + e;
                t.push(i),
                n.cartInfoObj[i] = n._calcCartGroupInfo(e)
            }
            ),
            this.cartInfoObj.groups = t,
            this.cartInfoObj.group1 || (this.cartInfoObj.group1 = this._calcCartGroupInfo(1))
        },
        _calcCartGroupInfo: function(e) {
            e = e || 0;
            var t = 0
              , n = 0
              , i = !1
              , o = ""
              , a = (this.shoppingList,
            this.promotion.getMinPrice(e));
            $.each(this.getShoppingMap(!0, e), function(e, i) {
                t += i.shoppingCount || 0,
                n += (parseFloat(i.price) || 0) * i.shoppingCount
            }
            ),
            n = r(n),
            i = n >= a,
            o = i ? "选好了" : 0 == n ? "满￥" + a + "起送" : "差￥" + r(a - n) + "起送";
            var s = this
              , c = {
                cart_group_id: e,
                isOk: i,
                payType: 2,
                price: n,
                count: t,
                minPrice: a,
                priceText: "共￥" + n,
                btnText: o,
                propText: s.promotion.getPropText(e),
                emptyText: "购物车是空的",
                shoppingList: s.getShoppingList(!1, e)
            };
            return c
        },
        _updateUi: function(e, t) {
            var n = this.getCartInfo()
              , i = n.count
              , r = n.isOk;
            e[i ? "removeClass" : "addClass"]("shopping-empty"),
            e.find(".shopping-count").html(i).css("visibility", i ? "visible" : "hidden").addClass("erect"),
            setTimeout(function() {
                e.find(".shopping-count").removeClass("erect")
            }
            , 150),
            e.find(".shopping-total").html(i ? n.priceText : n.emptyText),
            e.find(".shopping-words").html(n.propText),
            e.find(".shopping-submit-text").html(r ? t : n.btnText),
            e.find(".shopping-submit").attr("disabled", !r)[r ? "addClass" : "removeClass"]("shopping-enable")
        },
        _fireChange: function(e) {
            this._calcCartInfo(),
            this.fire("shoppingListChange", $.extend({
                reason: e
            }, this.cartInfoObj)),
            this.storage.set("shoppingList", this.shoppingList)
        },
        _notice: function(e) {
            this.alert(e),
            $.isApple && (this._lastOpInfo.noticeMsg = e)
        },
        _error: function(e) {
            this._lastOpInfo.opSuccess = !1,
            this._lastOpInfo.opErrorMsg = e,
            this.alert(e)
        },
        getLastError: function() {
            var e = this._lastOpInfo;
            return this._lastOpInfo = {
                opSuccess: !0,
                opErrorMsg: "",
                noticeMsg: ""
            },
            e
        }
    }));
    return new a
}
),
/*!File[common/BaseAddrManager.js]*/
define("common/BaseAddrManager", ["lib/base", "lib/EventObj", "common/AreaInfo", "lib/Storage"], function(e, t, n) {
    var i = function(e) {
        e.id && (this.id = e.id),
        this._setProp(e)
    }
    ;
    return i.prototype = {
        _setProp: function(e) {
            this.phone = e.telphone || e.phone || this.phone || "",
            this.name = e.accept_name || e.name || this.name || "",
            this.address = e.address || this.address || "",
            this.cityId = e.cityId || e.city_id || this.cityId || "",
            this.districtId = e.districtId || e.district_id || this.districtId || 0,
            this.provinceId = e.provinceId || e.province_id || this.provinceId || this.getProvinceId(),
            this.longitude = e.lng || !1,
            this.latitude = e.lat || !1
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
        getProvinceId: function() {
            return BaseAddrManager.getProvinceIdByCityId(this.cityId)
        },
        getFullAddress: function() {
            return this.getCityName() + this.getDistrictName() + this.address
        },
        update: function(e) {
            this._setProp(e)
        },
        toObject: function() {
            var e = {};
            for (var t in this)
                this.hasOwnProperty(t) && (e[t] = this[t]);
            return e
        }
    },
    BaseAddrManager = $.inherits(t, {
        constructor: function() {
            t.call(this),
            this.addrObjs = {},
            this._likelyAddrIdMap = {},
            this._inited = !1,
            this.lastAddrId = !1,
            window.SYS_CONF && window.SYS_CONF.addrList && this._init(window.SYS_CONF.addrList)
        },
        init: function(t) {
            if (this._inited)
                return void (t && t());
            var n = this;
            e.ajaxPost("/submit/getAddrList", {}, function(e) {
                0 == e.errno ? (n._init(e.data, !0),
                t && t(),
                n.fire("addrListAsyncInitd")) : n.fire("addrError", {
                    errmsg: e.errmsg
                })
            }
            )
        },
        _init: function(e) {
            var t = this;
            $.each(e, function(e, n) {
                t.addrObjs[n.id] = new i(n)
            }
            ),
            this._inited = !0,
            this.fire("addrListChange")
        },
        isInited: function() {
            return this._inited
        },
        addNewAddr: function(t, n) {
            var r = this
              , o = new i(t);
            e.ajaxPost("/submit/updateAddr", o.toObject(), function(e) {
                if (0 == e.errno) {
                    var t = e.data.id;
                    o.id = t,
                    r.addrObjs[t] = o,
                    r.fire("addrListChange"),
                    n && n(o)
                } else
                    r.fire("addrError", {
                        errno: e.errorno,
                        errmsg: "添加失败:" + e.errmsg
                    })
            }
            )
        },
        updateAddr: function(t, n, i) {
            var r = this
              , o = r.addrObjs[t];
            if (!o)
                return void r.fire("addrError", {
                    errmsg: "更新失败:id不存在"
                });
            var a = $.extend(o.toObject(), n);
            e.ajaxPost("/submit/updateAddr", a, function(e) {
                0 == e.errno ? (o.update(n),
                r.fire("addrListChange"),
                i && i(o)) : r.fire("addrError", {
                    errno: e.errno,
                    errmsg: "更新失败:" + e.errmsg
                })
            }
            )
        },
        delAddr: function(t, n) {
            var i = this
              , r = i.addrObjs[t];
            r || this.fire("addrError", {
                errmsg: "删除失败:id不存在"
            }),
            e.ajaxPost("/submit/deleteAddr", {
                id: t
            }, function(e) {
                0 == e.errno ? (delete i.addrObjs[t],
                i.fire("addrListChange"),
                n && n(r)) : (n && n(!1),
                this.fire("addrError", {
                    errno: reslt.errno,
                    errmsg: "删除失败:" + e.errmsg
                }))
            }
            )
        },
        getAddrByConfig: function(e) {
            var t = 0;
            for (var n in this.addrObjs) {
                var i = this.addrObjs[n];
                i.cityId == e.cityId && i.districtId == e.districtId && $.trim(i.address) == $.trim(e.address) && t < parseInt(n) && (t = parseInt(n))
            }
            return 0 == t ? !1 : this.addrObjs[t]
        },
        setLastAddrId: function(e) {
            if (this.addrObjs[e]) {
                var t = this;
                this.lastAddrId = e,
                this.fire("lastAddrChange", {
                    addrId: e,
                    addrObj: t.addrObjs[e]
                })
            }
        },
        getLastAddr: function() {
            var e = null ;
            return this.lastAddrId && (e = this.addrObjs[this.lastAddrId]) ? e : !1
        },
        getAddrById: function(e) {
            return this.addrObjs[e] || !1
        },
        getAddrList: function() {
            var e = [];
            for (var t in this.addrObjs)
                e.push(this.addrObjs[t]);
            return e
        },
        getAddrCount: function() {
            var e = 0;
            for (var t in this.addrObjs)
                e++;
            return e
        }
    }),
    BaseAddrManager.getCityNameById = function(e) {
        var t = "";
        return $.each(n, function(n, i) {
            return i.id == e ? (t = i.name,
            !1) : void 0
        }
        ),
        t
    }
    ,
    BaseAddrManager.getCityIdByName = function(e) {
        var t = "";
        return $.each(n, function(n, i) {
            return i.name == e ? (t = i.id,
            !1) : void 0
        }
        ),
        t
    }
    ,
    BaseAddrManager.getDistrictNameById = function(e, t) {
        for (var i = 0, r = n.length; r > i; i++) {
            var o = n[i];
            if (o.id == e)
                for (var a = 0, s = o.districts.length; s > a; a++) {
                    var c = o.districts[a];
                    if (c.id == t)
                        return c.name
                }
        }
        return ""
    }
    ,
    BaseAddrManager.getDistrictIdByName = function(e, t) {
        for (var i = 0, r = n.length; r > i; i++) {
            var o = n[i];
            if (o.name == e)
                for (var a = 0, s = o.districts.length; s > a; a++) {
                    var c = o.districts[a];
                    if (c.name == t)
                        return c.id
                }
        }
        return ""
    }
    ,
    BaseAddrManager.getProvinceIdByCityId = function(e) {
        for (var t = 0, i = n.length; i > t; t++) {
            var r = n[t];
            if (r.id == e)
                return r.provinceId
        }
        return ""
    }
    ,
    BaseAddrManager.AddrObj = i,
    BaseAddrManager
}
),
/*!File[common/Dialog.js]*/
define("common/Dialog", function() {
    var e = Bee.getMod($.isMobile ? "common/Dialog_phone" : "common/Dialog_www")
      , t = {
        show: function(t) {
            return e.show(t)
        },
        hide: function() {
            return e.hide()
        },
        alert: function(t, n) {
            return e.alert(t, n)
        },
        confirm: function(t, n, i) {
            return e.confirm(t, n, i)
        },
        tip: function(t) {
            return e.tip(t)
        },
        popSelect: function(t) {
            return e.popSelect(t)
        }
    };
    return t
}
),
/*!File[common/Dialog_www.js]*/
define("common/Dialog_www", function() {
    var e = {
        show: function() {},
        hide: function() {},
        alert: function(e, t) {
            var n = dialog({
                content: e,
                fixed: !0,
                width: arguments[3] || 250,
                okValue: arguments[2] || "确定",
                ok: function() {
                    return t && t(),
                    !0
                }
            });
            return n.showModal(),
            n
        },
        showMutiButton: function(e) {
            var t = dialog({
                content: e.contentHTML,
                fixed: !0,
                width: e.width || 250,
                button: e.buttons
            });
            return t.showModal(),
            t
        }
    };
    return e
}
),
/*!File[common/DeliveryTime.js]*/
define("common/DeliveryTime", ["lib/base", "lib/EventObj"], function(e, t) {
    var n;
    return DeliveryTime = $.inherits(t, {
        constructor: function() {
            t.call(this)
        },
        get: function(t, i) {
            e.ajaxGet("/data/getShopTime", {
                shopId: t
            }, function(e) {
                0 == e.errno ? (n = e.data,
                i && i(e.data)) : console.log(e.errmsg + ":" + e.errmsg)
            }
            )
        },
        getOption: function(e, t) {
            for (var i in n.str)
                if (i == e)
                    return void (t && t(n.date[i]))
        }
    }),
    new DeliveryTime
}
),
/*!File[www/address.js]*/
define("www/address", ["lib/base", "common/AreaInfo", "common/Dialog_www", "common/BaseAddrManager", "common/ShoppingCart"], function(e, t, n, i) {
    var r, o = new i, a = function(e, t) {
        for (var n in t)
            if (t[n] == e)
                return n;
        return !1
    }
    , s = function(e) {
        if (e)
            for (var n in t)
                if (t[n].id == e)
                    return t[n]
    }
    , c = function(e, n) {
        if (e)
            for (var i in t)
                if (t[i].id == e)
                    for (var r in t[i].districts)
                        if (t[i].districts[r].id == n)
                            return t[i].districts[r]
    }
    , u = function(e) {
        e.stopPropagation ? e.stopPropagation() : e.cancelBubble = !0
    }
    , l = function() {
        var e = $.getCookie("cityId") || 2
          , t = $.getCookie("districtId") || 3
          , n = $.getCookie("address") || "";
        return {
            cityId: e,
            districtId: t,
            city: s(e).name,
            area: c(e, t) ? c(e, t).name : "",
            address: n
        }
    }
    , d = function(e) {
        $.setCookie("cityId", e.cityId, {
            path: "/",
            expires: 31536e6
        }),
        $.setCookie("districtId", e.districtId, {
            path: "/",
            expires: 31536e6
        }),
        $.setCookie("address", e.address, {
            path: "/",
            expires: 31536e6
        })
    }
    , p = function() {
        $.delCookie("cityId", {
            path: "/"
        }),
        $.delCookie("districtId", {
            path: "/"
        }),
        $.delCookie("address", {
            path: "/"
        })
    }
    , f = function() {
        return o.getAddrList()
    }
    , h = function() {
        var e = !1;
        return 0 != o.getAddrList().length && (e = o.getAddrList()[0]),
        e
    }
    , g = function(e) {
        return 0 != e ? o.addrObjs[e] : !1
    }
    , m = function(e) {
        return o.getAddrByConfig(e)
    }
    , v = function(e, t) {
        for (var n = -1, i = 0; i < t.length; i++) {
            var r = t[i];
            if (r.cityId == e.cityId && r.districtId == e.districtId && $.trim(r.address) == $.trim(e.address))
                return n = i
        }
        return n
    }
    , y = function(e, t) {
        0 == e.id ? (delete e.id,
        o.addNewAddr(e, function(e) {
            e.id && (addrid = e,
            t && t(addrid))
        }
        )) : t && t(e)
    }
    , b = function(e, t) {
        e = e.toObject ? e.toObject() : e,
        0 != e.id ? o.updateAddr(e.id, e, function() {
            t && t()
        }
        ) : y(e, t)
    }
    , x = function(e, t) {
        o.delAddr(e, t)
    }
    , _ = function() {
        $(document).bind("click", function() {
            $("#cities").hide(),
            $("#areas").hide(),
            $("#addrs").hide()
        }
        ),
        $("#city_select_p").bind("click", function(e) {
            if ("none" == $("#cities").css("display")) {
                var t = $("#city_select").offset().top
                  , n = $("#city_select").offset().left;
                $("#cities").css({
                    top: t + 44,
                    left: n - 99
                }).show(),
                $("#areas").hide(),
                $("#cities span").bind("click", function() {
                    var e = $(this).attr("data-name")
                      , t = $(this).attr("data-id");
                    $("#user_city_id").val(t),
                    $("#cities").hide(),
                    $(".city").find(".s1").html(e),
                    S(!0)
                }
                )
            } else
                $("#cities").hide();
            u(e)
        }
        ),
        $("#area_select_p").bind("click", function(e) {
            if ("none" == $("#areas").css("display")) {
                var t = $("#area_select").offset().top
                  , n = $("#area_select").offset().left;
                $("#areas").css({
                    top: t + 44,
                    left: n - 99
                }).show(),
                $("#cities").hide(),
                $("#areas span").bind("click", function() {
                    var e = $(this).attr("data-name")
                      , t = $(this).attr("data-id");
                    $("#user_area_id").val(t),
                    $("#areas").hide(),
                    $(".area").find(".s1").html(e),
                    T(!0)
                }
                )
            } else
                $("#areas").hide();
            u(e)
        }
        ),
        $("#submitAddr").bind("click", function() {
            w()
        }
        ),
        $("#modifyAddr").bind("click", function() {
            $(".address_in2").hide(),
            $(".address_in1").show(),
            T(),
            $("#addrtxt").show().val($("#addrspan").html()).focus(),
            $("#addrtxt").bind("click", function(e) {
                $("#areas").css("display", "block");
                var t = $("#addrtxt").offset().top
                  , n = $("#addrtxt").offset().left;
                $("#addrs").css({
                    top: t + 44,
                    left: n
                }).show(),
                $("#cities").hide(),
                $("#areas").hide(),
                e.stopPropagation()
            }
            )
        }
        )
    }
    , w = function(t) {
        var n = $("#addrtxt").val();
        if ("" == n || n == $("#addrtxt").attr("placeholder"))
            return void $("#addrtxt").blur();
        if (n.length < 5)
            return N("要输入详细地址鲜蜂侠才能快速找到您"),
            void $("#addrtxt").focus();
        var i = $("#city_select_p .s1").html()
          , r = $("#area_select_p .s1").html();
        e.ajaxGet("/data/getCategoryListByLbs", {
            address: i + r + n,
            childmode: 1
        }, function(e) {
            if (0 == e.errno) {
                var i = e.data.shop;
                $.setCookie("shopId", i.zchtid, {
                    path: "/",
                    expires: 31536e6
                });
                var r = $("#user_city_id").val()
                  , o = $("#user_area_id").val();
                d({
                    cityId: r,
                    districtId: o,
                    address: n
                }),
                $(".address_in1").hide(),
                $(".address_in2").show(),
                $("#user_address").val(n),
                $("#addrspan").html(n),
                t && t()
            } else
                6001 == e.errno || 6e3 == e.errno || 5010 == e.errno ? (N(e.errmsg),
                $("#addrtxt").focus()) : (N("服务异常，请刷新页面稍重试."),
                $("#addrtxt").focus())
        }
        )
    }
    , C = function() {
        var e = l();
        e.cityId ? ($("#user_city_id").val(e.cityId),
        $(".city").find(".s1").html(e.city)) : ($("#user_city_id").val(t[0].id),
        $(".city").find(".s1").html(t[0].name)),
        e.districtId ? ($("#user_area_id").val(e.districtId),
        $(".area").find(".s1").html(e.area)) : ($("#user_area_id").val(t[0].districts[0].id),
        $(".area").find(".s1").html(t[0].districts[0].name)),
        e.address ? ($("#addrtxt").val(e.address),
        $("#addrspan").html(e.address),
        $("#user_address").val(e.address),
        $(".address_in1").hide(),
        $(".address_in2").show()) : ($("#addrtxt").val("").blur(),
        $("#addrspan").html(""),
        $("#user_address").val(""),
        $(".address_in2").hide(),
        $(".address_in1").show(),
        T()),
        k(),
        S()
    }
    , k = function() {
        var e = "";
        for (var n in t)
            e += '<span data-id="' + t[n].id + '" data-name="' + t[n].name + '">' + t[n].name + "</span>";
        $("#cities").html(e)
    }
    , S = function(e) {
        var n = $("#user_city_id").val();
        for (var i in t)
            if (n == t[i].id) {
                var r = "";
                for (var o in t[i].districts) {
                    var a = t[i].districts[o];
                    r += '<span data-id="' + a.id + '" data-name="' + a.name + '">' + a.name + "</span>"
                }
                $("#areas").html(r),
                e && ($("#user_area_id").val(t[i].districts[0].id),
                $(".area").find(".s1").html(t[i].districts[0].name))
            }
    }
    , T = function() {
        for (var e = $("#city_select_p .s1").html(), t = $("#area_select_p .s1").html(), n = "", i = f(), r = i.length - 1; r >= 0; r--) {
            i[r].city = s(i[r].cityId).name,
            i[r].area = c(i[r].cityId, i[r].districtId) ? c(i[r].cityId, i[r].districtId).name : "";
            var o = i[r].city
              , a = i[r].area;
            e == o && t == a && (n += '<span data-id="' + i[r].id + '">' + i[r].address + "</span>")
        }
        $("#addrs").html(n),
        $("#addrs span").bind("click", function() {
            var e = $(this).text();
            $("#addrtxt").val(e),
            $("#addrs").hide()
        }
        )
    }
    , N = function(e, t) {
        clearTimeout(r),
        $("#errtips .s1").html(e),
        $("#errtips").show(),
        r = setTimeout(function() {
            $("#errtips").hide()
        }
        , 1e4),
        "addrchange" == t && ($.delCookie("address", {
            path: "/"
        }),
        $(".address_in2").hide(),
        $(".address_in1").show(),
        $("#addrtxt").val("").focus())
    }
    , j = function() {
        for (var e = "", t = f(), n = t.length - 1; n >= 0; n--) {
            t[n].city = s(t[n].cityId).name,
            t[n].area = c(t[n].cityId, t[n].districtId) ? c(t[n].cityId, t[n].districtId).name : "";
            var i = '<tr  data-id="#{id}">\n<td width="660" height="60">\n<ul>\n<li ><span class="receipt">收货人：</span><span class="name">#{name}</span></li>\n<li ><span class="receipt">手机号：</span><span class="phone">#{phone}</span></li>\n<li class="detail_address"><span class="receipt">收货地址：</span>\n<span class="city" data-id="#{cityId}">#{city}</span>\n<span class="area" data-id="#{districtId}">#{area}</span>\n<span class="address">#{address}</span>\n</li>\n</ul>\n</td>\n<td width="280"></td>\n<td width="108"><div class="button04"><a href="##" class="edit_a">编辑</a></div></td>\n<td width="108">\n<div class="button04"><a href="##"  class="dele_a" >删除</a></div>\n</td>\n</tr>';
            e += $.formatString(i, t[n])
        }
        $("#addlist tbody").html(e)
    }
    , E = function() {
        $(".edit_a").click(function() {
            var e = $(this).parents("tr");
            if (e.find(".edit_a").hasClass("save"))
                A(e, "change");
            else {
                var e = $(this).parents("tr")
                  , t = e.find(".name").html()
                  , n = e.find(".phone").html();
                e.find(".name").html('<input name="" type="text"  class="input_box in_name"  value="' + t + '" placeholder="收货人" autocomplete="off"  />'),
                e.find(".phone").html('<input name="" type="text"  class="input_box in_phone"  placeholder="手机号" autocomplete="off" value="' + n + '"   />'),
                I(e, e.find(".city").attr("data-id"), e.find(".area").attr("data-id"), e.find(".address").html()),
                e.find(".edit_a").text("保存").addClass("save")
            }
        }
        ),
        $(".addAddress").click(function() {
            $("#addAddress").show(),
            el = $("#addlist thead"),
            I(el, 2, 7, "")
        }
        ),
        $(".addedit_a").click(function() {
            var e = $(this).parents("tr");
            A(e, "new")
        }
        ),
        $(".dele_a").click(function() {
            var e = $(this).parents("tr")
              , t = e.attr("data-id");
            x(t, function() {
                e.remove()
            }
            )
        }
        )
    }
    , A = function(t) {
        var n = {
            name: t.find(".in_name").val(),
            phone: t.find(".in_phone").val(),
            city: t.find(".city_sel option:selected").text(),
            cityId: t.find(".city_sel").val(),
            area: t.find(".area_sel option:selected").text(),
            districtId: t.find(".area_sel").val(),
            address: t.find(".address_sel").val(),
            id: t.attr("data-id")
        }
          , i = []
          , r = /^1[345678]\d{9}$/;
        return "" == n.name || n.name == $("#name").attr("placeholder") ? (t.find("in_name").focus(),
        void t.find("#name_tips").html("您的姓名不能为空").show()) : r.test(n.phone) ? "" == n.address || n.address == $(".address_sel").attr("placeholder") ? (t.find("#address_tips").html("请填写您的收货地址").show(),
        isAjaxing = !1,
        !1) : n.address.length < 5 ? (t.find("#address_tips").html("要输入详细地址鲜蜂侠才能快速找到您").show(),
        isAjaxing = !1,
        !1) : -1 != v(n, i) ? (t.find("#address_tips").html("该地址存在！").show(),
        isAjaxing = !1,
        !1) : void e.ajaxGet("/data/getCategoryListByLbs", {
            address: n.city + n.area + n.address,
            childmode: 1
        }, function(e) {
            if (0 != e.errno)
                return 6001 == e.errno || 6e3 == e.errno || 5010 == e.errno ? (t.find("#address_tips").html(e.errmsg).show(),
                isAjaxing = !1,
                !1) : (t.find("#address_tips").html("服务异常，请刷新页面稍重试").show(),
                isAjaxing = !1,
                !1);
            var i = e.data.shop;
            $.setCookie("shopId", i.zchtid, {
                path: "/",
                expires: 31536e6
            }),
            0 != n.id ? b(n, function() {
                O(t, n)
            }
            ) : y(n, function() {
                j(),
                t.find("input").val(""),
                $("#addAddress").hide()
            }
            )
        }
        ) : (t.find(".mobile_tips").html("请正确填写手机号码").show(),
        void t.find("in_phone").focus())
    }
    , I = function(e, n, i, r) {
        var o = '<select class="city_sel">';
        for (var a in t) {
            var s = n == t[a].id ? 'selected="selected"' : "";
            o += '<option value="' + t[a].id + '" ' + s + ' data-name="' + t[a].name + '">' + t[a].name + "</option>"
        }
        o += "</select>";
        var c = '<select class="area_sel">';
        for (var a in t)
            if (n == t[a].id) {
                for (var u in t[a].districts) {
                    var l = t[a].districts[u]
                      , s = i == l.id ? 'selected="selected"' : "";
                    c += '<option value="' + l.id + '" ' + s + ' data-name="' + l.name + '">' + l.name + "</option>"
                }
                c += "</select>"
            }
        var d = '<input class="address_sel" class="input_add02" autocomplete="off" placeholder="请输入您的详细地址" value="' + r + '"/>';
        e.find(".detail_address").html('<span class="receipt">收货地址：</span>' + o + c + d),
        e.find(".city_sel").bind("change", function() {
            L($(this))
        }
        )
    }
    , L = function(e) {
        var n = e.val()
          , i = "";
        for (var r in t)
            if (n == t[r].id) {
                for (var o in t[r].districts) {
                    var a = t[r].districts[o];
                    i += '<option value="' + a.id + '" data-name="' + a.name + '">' + a.name + "</option>"
                }
                e.next().html(i)
            }
    }
    , O = function(e, t) {
        e.find(".name").html(t.name),
        e.find(".phone").html(t.phone),
        e.find(".detail_address").html('<span class="receipt">收货地址：</span><span class="city" data-id="' + t.cityId + '">' + t.city + '</span><span class="area" data-id="' + t.districtId + '">' + t.area + '</span><span class="address">' + t.address + "</span>"),
        e.find(".edit_a").text("编辑").removeClass("save")
    }
    , D = function() {
        C(),
        _()
    }
    ;
    return {
        inArray: a,
        getAreaById: c,
        getCityById: s,
        init: D,
        getCookieInfo: l,
        setCookieInfo: d,
        delCookieInfo: p,
        addresslist: f,
        addresslast: h,
        getaddressbyId: g,
        addressfun: m,
        addressCompare: v,
        addNewAddr: y,
        updateAddr: b,
        deleteAddr: x,
        showAddrError: N,
        initShow: C,
        checkAddress: w,
        showAddressList: j,
        AddrbindEvent: E
    }
}
),
/*!File[www/base.js]*/
define("www/base", ["lib/base", "common/AreaInfo", "common/BaseAddrManager", "common/Dialog_www", "common/ShoppingCart", "www/address"], function(e, t, n, i, r, o) {
    var a, s = function() {
        var e = arguments[0]
          , t = arguments[1];
        if (e) {
            var i = /(\d{3})\d{4}(\d{4})/
              , t = arguments[1].replace(i, "$1****$2");
            return $("#unlogin").hide(),
            $("#logined").show().find("a").html(t),
            void c()
        }
        if ($.getCookie("zchtauth") && SYS_CONF.userInfo.phone) {
            $("#unlogin").hide(),
            $("#logined").show().find("a").html(SYS_CONF.userInfo.phone);
            var r = new n;
            r.init(),
            c(),
            u()
        } else
            $(".togglebox").hide(),
            $("#logined").hide().find("a").html(""),
            $("#unlogin").show(),
            $.delCookie("zchtauth", {
                path: "/"
            }),
            $("#unlogin a").unbind("click").bind("click", function() {
                l()
            }
            )
    }
    , c = function() {
        $("#logined").hover(function() {
            $("#togglebox").show()
        }
        , function() {
            a = setTimeout(function() {
                $("#togglebox").hide()
            }
            , 500)
        }
        ),
        $("#togglebox").hover(function() {
            clearTimeout(a),
            $(this).show()
        }
        , function() {
            $(this).hide()
        }
        ),
        $("#togglebox a#quit").click(function() {
            e.ajaxPost("/submit/logout", {}, function(e) {
                0 == e.errno ? ($.delCookie("dateid", {
                    path: "/w"
                }),
                $.delCookie("datestr", {
                    path: "/w"
                }),
                $.delCookie("username", {
                    path: "/w"
                }),
                $.delCookie("mobile", {
                    path: "/"
                }),
                o.delCookieInfo(),
                $.delCookie("zchtauth", {
                    path: "/"
                }),
                r.reset(),
                s(!1),
                location.href.indexOf("cart") > -1 || location.href.indexOf("check") > -1 || location.href.indexOf("result") > -1 ? location.href = "/w/flash" : location.reload()) : i.alert(e.errmsg)
            }
            )
        }
        )
    }
    , u = function() {
        if (null  == $.getCookie("address")) {
            var e = o.addresslast();
            0 != e ? (cityId = e.cityId,
            districtId = e.districtId,
            address = e.address) : (cityId = 2,
            districtId = 3,
            address = ""),
            o.setCookieInfo({
                cityId: cityId,
                districtId: districtId,
                address: address
            })
        }
    }
    , l = function() {
        var t, i = (arguments[0] || "",
        /^1[345678]\d{9}$/), o = /^\d{4,6}$/, a = (arguments[0] || "",
        arguments[1] || ""), s = !1, c = '<div class="login_box"><i title="关闭"></i><p>为方便您及时查询订单信息，鲜蜂侠需要验证您的手机作为查询帐号</p><ul><li class="clr"><span><input type="text" class="input_tel input_bg" value="' + a + '" id="pop_mobile" placeholder="请输入您的手机号码"><em id="pop_mobile_tips"></em></span><span class="dx_code"><a href="javascript:;" id="pop_tips">免费获取短信验证码</a><a href="javascript:;" id="pop_tips2" style="display:none;"><b id="sec">60</b>秒后重新发送</a></span></li><li class="clr"><span><input type="text"  class="input_code input_bg" placeholder="请输入短信中的验证码" id="pop_code"><em id="pop_code_tips"></em></span></li></ul></div>', u = dialog({
            content: c,
            okValue: "确  定",
            ok: function() {
                var a = $.trim($("#pop_mobile").val())
                  , c = $.trim($("#pop_code").val());
                if (i.test(a)) {
                    if (o.test(c)) {
                        if (s)
                            return;
                        return s = !0,
                        e.ajaxPost("/submit/verify", {
                            phone: a,
                            code: c
                        }, function(e) {
                            return 0 != e.errno ? ($("#pop_code_tips").html(e.errmsg).show(),
                            !1) : ($.setCookie("mobile", a, {
                                path: "/",
                                expires: 31536e6
                            }),
                            void setTimeout(function() {
                                var e = new n;
                                e.init(function() {
                                    u.close().remove(),
                                    s = !1,
                                    clearInterval(t),
                                    (location.href.indexOf("flash") > -1 || location.href.indexOf("recommend") > -1) && 0 != r.getCount() && "" != $.getCookie("address") ? location.href = "/w/cart" : location.reload()
                                }
                                )
                            }
                            , 500))
                        }
                        ),
                        !1
                    }
                    return $("#pop_code_tips").html("请正确填写短信验证码").show(),
                    $("#pop_code").focus(),
                    !1
                }
                return $("#pop_mobile_tips").html("请正确填写手机号码").show(),
                $("#pop_mobile").focus(),
                !1
            }
        }).showModal();
        $(".login_box i").bind("click", function() {
            u.close().remove(),
            clearInterval(t)
        }
        ),
        $(".input_tel").bind("input propertychange", function() {
            $("#pop_mobile_tips").hide()
        }
        ),
        $(".input_code").bind("input propertychange", function() {
            $("#pop_code_tips").hide()
        }
        ),
        p(),
        $("#pop_tips").unbind("click").click(function() {
            var n = $("#pop_mobile").val();
            return i.test(n) ? void e.ajaxPost("/submit/sendVerifySMS", {
                phone: n
            }, function(e) {
                if (0 == e.errno) {
                    $("#pop_tips").hide(),
                    $("#pop_tips2").show().css("cursor", "default");
                    var n = 59;
                    t = setInterval(function() {
                        $("#sec").html(n),
                        0 > n && (clearInterval(t),
                        n = 59,
                        $("#pop_tips2").hide(),
                        $("#pop_tips").show(),
                        $("#sec").html(n + 1)),
                        n--
                    }
                    , 1e3)
                } else
                    $("#pop_code_tips").html(e.errmsg).show()
            }
            ) : ($("#pop_mobile_tips").html("请正确填写手机号码").show(),
            $("#pop_mobile").focus(),
            !1)
        }
        )
    }
    , d = function() {
        return "placeholder" in document.createElement("input")
    }
    , p = function() {
        d() || $("[placeholder]").focus(function() {
            var e = $(this);
            e.val() == e.attr("placeholder") && (e.val(""),
            e.removeClass("placeholder"))
        }
        ).blur(function() {
            var e = $(this);
            ("" == e.val() || e.val() == e.attr("placeholder")) && (e.addClass("placeholder"),
            e.val(e.attr("placeholder")))
        }
        ).blur()
    }
    ;
    return {
        listenLoginStatus: s,
        checkVerifyMobile: l,
        fixPlaceholder: p
    }
}
),
/*!File[www/view_common.js]*/
$(function() {
    Bee.boot(["www/base"], function(e) {
        e.listenLoginStatus(),
        e.fixPlaceholder()
    }
    )
}
);
