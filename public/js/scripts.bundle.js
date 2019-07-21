"use strict";
var KTApp = function() {
    var t = {},
        e = function(t) {
            var e = t.data("skin") ? "tooltip-" + t.data("skin") : "",
                a = "auto" == t.data("width") ? "tooltop-auto-width" : "",
                n = t.data("trigger") ? t.data("trigger") : "hover";
            t.data("placement") && t.data("placement");
            t.tooltip({
                trigger: n,
                template: '<div class="tooltip ' + e + " " + a + '" role="tooltip">                <div class="arrow"></div>                <div class="tooltip-inner"></div>            </div>'
            })
        },
        a = function() {
            $('[data-toggle="kt-tooltip"]').each(function() {
                e($(this))
            })
        },
        n = function(t) {
            var e = t.data("skin") ? "popover-" + t.data("skin") : "",
                a = t.data("trigger") ? t.data("trigger") : "hover";
            t.popover({
                trigger: a,
                template: '            <div class="popover ' + e + '" role="tooltip">                <div class="arrow"></div>                <h3 class="popover-header"></h3>                <div class="popover-body"></div>            </div>'
            })
        },
        i = function() {
            $('[data-toggle="kt-popover"]').each(function() {
                n($(this))
            })
        },
        o = function(t, e) {
            t = $(t), new KTPortlet(t[0], e)
        },
        l = function() {
            $('[data-ktportlet="true"]').each(function() {
                var t = $(this);
                !0 !== t.data("data-ktportlet-initialized") && (o(t, {}), t.data("data-ktportlet-initialized", !0))
            })
        },
        r = function() {
            new Sticky('[data-sticky="true"]')
        };
    return {
        init: function(e) {
            e && e.colors && (t = e.colors), KTApp.initComponents()
        },
        initComponents: function() {
            $('[data-scroll="true"]').each(function() {
                var t = $(this);
                KTUtil.scrollInit(this, {
                    mobileNativeScroll: !0,
                    handleWindowResize: !0,
                    rememberPosition: "true" == t.data("remember-position"),
                    height: function() {
                        return KTUtil.isInResponsiveRange("tablet-and-mobile") && t.data("mobile-height") ? t.data("mobile-height") : t.data("height")
                    }
                })
            }), a(), i(), $("body").on("click", "[data-close=alert]", function() {
                $(this).closest(".alert").hide()
            }), l(), $(".custom-file-input").on("change", function() {
                var t = $(this).val();
                $(this).next(".custom-file-label").addClass("selected").html(t)
            }), r(), $("body").on("show.bs.dropdown", function(t) {
                if (0 !== $(t.target).find("[data-attach='body']").length) {
                    var e = $(t.target).find(".dropdown-menu");
                    $("body").append(e.detach()), e.css("display", "block"), e.position({
                        my: "right top",
                        at: "right bottom",
                        of: $(t.relatedTarget)
                    })
                }
            }), $("body").on("hide.bs.dropdown", function(t) {
                if (0 !== $(t.target).find("[data-attach='body']").length) {
                    var e = $(t.target).find(".dropdown-menu");
                    $(t.target).append(e.detach()), e.hide()
                }
            })
        },
        initTooltips: function() {
            a()
        },
        initTooltip: function(t) {
            e(t)
        },
        initPopovers: function() {
            i()
        },
        initPopover: function(t) {
            n(t)
        },
        initPortlet: function(t, e) {
            o(t, e)
        },
        initPortlets: function() {
            l()
        },
        initSticky: function() {
            r()
        },
        initAbsoluteDropdown: function(t) {
            ! function(t) {
                var e;
                t && $("body").on("show.bs.dropdown", t, function(t) {
                    e = $(t.target).find(".dropdown-menu"), $("body").append(e.detach()), e.css("display", "block"), e.position({
                        my: "right top",
                        at: "right bottom",
                        of: $(t.relatedTarget)
                    })
                }).on("hide.bs.dropdown", t, function(t) {
                    $(t.target).append(e.detach()), e.hide()
                })
            }(t)
        },
        block: function(t, e) {
            var a, n = $(t),
                i = '<div class="kt-spinner ' + ((e = $.extend(!0, {
                    opacity: .05,
                    overlayColor: "#000000",
                    type: "",
                    size: "",
                    state: "brand",
                    centerX: !0,
                    centerY: !0,
                    message: "",
                    shadow: !0,
                    width: "auto"
                }, e)).type ? "kt-spinner--" + e.type : "") + " " + (e.state ? "kt-spinner--" + e.state : "") + " " + (e.size ? "kt-spinner--" + e.size : "") + '"></div';
            if (e.message && e.message.length > 0) {
                var o = "blockui " + (!1 === e.shadow ? "blockui" : "");
                a = '<div class="' + o + '"><span>' + e.message + "</span><span>" + i + "</span></div>";
                n = document.createElement("div");
                KTUtil.get("body").prepend(n), KTUtil.addClass(n, o), n.innerHTML = "<span>" + e.message + "</span><span>" + i + "</span>", e.width = KTUtil.actualWidth(n) + 10, KTUtil.remove(n), "body" == t && (a = '<div class="' + o + '" style="margin-left:-' + e.width / 2 + 'px;"><span>' + e.message + "</span><span>" + i + "</span></div>")
            } else a = i;
            var l = {
                message: a,
                centerY: e.centerY,
                centerX: e.centerX,
                css: {
                    top: "30%",
                    left: "50%",
                    border: "0",
                    padding: "0",
                    backgroundColor: "none",
                    width: e.width
                },
                overlayCSS: {
                    backgroundColor: e.overlayColor,
                    opacity: e.opacity,
                    cursor: "wait",
                    zIndex: "10"
                },
                onUnblock: function() {
                    n && n[0] && (KTUtil.css(n[0], "position", ""), KTUtil.css(n[0], "zoom", ""))
                }
            };
            "body" == t ? (l.css.top = "50%", $.blockUI(l)) : (n = $(t)).block(l)
        },
        unblock: function(t) {
            t && "body" != t ? $(t).unblock() : $.unblockUI()
        },
        blockPage: function(t) {
            return KTApp.block("body", t)
        },
        unblockPage: function() {
            return KTApp.unblock("body")
        },
        progress: function(t, e) {
            var a = "kt-spinner kt-spinner--" + (e && e.skin ? e.skin : "light") + " kt-spinner--" + (e && e.alignment ? e.alignment : "right") + " kt-spinner--" + (e && e.size ? "kt-spinner--" + e.size : "");
            KTApp.unprogress(t), $(t).addClass(a), $(t).data("progress-classes", a)
        },
        unprogress: function(t) {
            $(t).removeClass($(t).data("progress-classes"))
        },
        getStateColor: function(e) {
            return t.state[e]
        },
        getBaseColor: function(e, a) {
            return t.base[e][a - 1]
        }
    }
}();
$(document).ready(function() {
        KTApp.init(KTAppOptions)
    }), this.Element && function(t) {
        t.matches = t.matches || t.matchesSelector || t.webkitMatchesSelector || t.msMatchesSelector || function(t) {
            for (var e = (this.parentNode || this.document).querySelectorAll(t), a = -1; e[++a] && e[a] != this;);
            return !!e[a]
        }
    }(Element.prototype), this.Element && function(t) {
        t.closest = t.closest || function(t) {
            for (var e = this; e.matches && !e.matches(t);) e = e.parentNode;
            return e.matches ? e : null
        }
    }(Element.prototype), "remove" in Element.prototype || (Element.prototype.remove = function() {
        this.parentNode && this.parentNode.removeChild(this)
    }), this.Element && function(t) {
        t.matches = t.matches || t.matchesSelector || t.webkitMatchesSelector || t.msMatchesSelector || function(t) {
            for (var e = (this.parentNode || this.document).querySelectorAll(t), a = -1; e[++a] && e[a] != this;);
            return !!e[a]
        }
    }(Element.prototype),
    function() {
        for (var t = 0, e = ["webkit", "moz"], a = 0; a < e.length && !window.requestAnimationFrame; ++a) window.requestAnimationFrame = window[e[a] + "RequestAnimationFrame"], window.cancelAnimationFrame = window[e[a] + "CancelAnimationFrame"] || window[e[a] + "CancelRequestAnimationFrame"];
        window.requestAnimationFrame || (window.requestAnimationFrame = function(e) {
            var a = (new Date).getTime(),
                n = Math.max(0, 16 - (a - t)),
                i = window.setTimeout(function() {
                    e(a + n)
                }, n);
            return t = a + n, i
        }), window.cancelAnimationFrame || (window.cancelAnimationFrame = function(t) {
            clearTimeout(t)
        })
    }(), [Element.prototype, Document.prototype, DocumentFragment.prototype].forEach(function(t) {
        t.hasOwnProperty("prepend") || Object.defineProperty(t, "prepend", {
            configurable: !0,
            enumerable: !0,
            writable: !0,
            value: function() {
                var t = Array.prototype.slice.call(arguments),
                    e = document.createDocumentFragment();
                t.forEach(function(t) {
                    var a = t instanceof Node;
                    e.appendChild(a ? t : document.createTextNode(String(t)))
                }), this.insertBefore(e, this.firstChild)
            }
        })
    }), window.KTUtilElementDataStore = {}, window.KTUtilElementDataStoreID = 0, window.KTUtilDelegatedEventHandlers = {};
var KTUtil = function() {
    var t = [],
        e = {
            sm: 544,
            md: 768,
            lg: 1024,
            xl: 1200
        },
        a = function() {
            var e = !1;
            window.addEventListener("resize", function() {
                clearTimeout(e), e = setTimeout(function() {
                    ! function() {
                        for (var e = 0; e < t.length; e++) t[e].call()
                    }()
                }, 250)
            })
        };
    return {
        init: function(t) {
            t && t.breakpoints && (e = t.breakpoints), a()
        },
        addResizeHandler: function(e) {
            t.push(e)
        },
        removeResizeHandler: function(e) {
            for (var a = 0; a < t.length; a++) e === t[a] && delete t[a]
        },
        runResizeHandlers: function() {
            _runResizeHandlers()
        },
        resize: function() {
            if ("function" == typeof Event) window.dispatchEvent(new Event("resize"));
            else {
                var t = window.document.createEvent("UIEvents");
                t.initUIEvent("resize", !0, !1, window, 0), window.dispatchEvent(t)
            }
        },
        getURLParam: function(t) {
            var e, a, n = window.location.search.substring(1).split("&");
            for (e = 0; e < n.length; e++)
                if ((a = n[e].split("="))[0] == t) return unescape(a[1]);
            return null
        },
        isMobileDevice: function() {
            return this.getViewPort().width < this.getBreakpoint("lg")
        },
        isDesktopDevice: function() {
            return !KTUtil.isMobileDevice()
        },
        getViewPort: function() {
            var t = window,
                e = "inner";
            return "innerWidth" in window || (e = "client", t = document.documentElement || document.body), {
                width: t[e + "Width"],
                height: t[e + "Height"]
            }
        },
        isInResponsiveRange: function(t) {
            var e = this.getViewPort().width;
            return "general" == t || ("desktop" == t && e >= this.getBreakpoint("lg") + 1 || ("tablet" == t && e >= this.getBreakpoint("md") + 1 && e < this.getBreakpoint("lg") || ("mobile" == t && e <= this.getBreakpoint("md") || ("desktop-and-tablet" == t && e >= this.getBreakpoint("md") + 1 || ("tablet-and-mobile" == t && e <= this.getBreakpoint("lg") || "minimal-desktop-and-below" == t && e <= this.getBreakpoint("xl"))))))
        },
        getUniqueID: function(t) {
            return t + Math.floor(Math.random() * (new Date).getTime())
        },
        getBreakpoint: function(t) {
            return e[t]
        },
        isset: function(t, e) {
            var a;
            if (-1 !== (e = e || "").indexOf("[")) throw new Error("Unsupported object path notation.");
            e = e.split(".");
            do {
                if (void 0 === t) return !1;
                if (a = e.shift(), !t.hasOwnProperty(a)) return !1;
                t = t[a]
            } while (e.length);
            return !0
        },
        getHighestZindex: function(t) {
            for (var e, a, n = KTUtil.get(t); n && n !== document;) {
                if (("absolute" === (e = KTUtil.css(n, "position")) || "relative" === e || "fixed" === e) && (a = parseInt(KTUtil.css(n, "z-index")), !isNaN(a) && 0 !== a)) return a;
                n = n.parentNode
            }
            return null
        },
        hasFixedPositionedParent: function(t) {
            for (; t && t !== document;) {
                if (position = KTUtil.css(t, "position"), "fixed" === position) return !0;
                t = t.parentNode
            }
            return !1
        },
        sleep: function(t) {
            for (var e = (new Date).getTime(), a = 0; a < 1e7 && !((new Date).getTime() - e > t); a++);
        },
        getRandomInt: function(t, e) {
            return Math.floor(Math.random() * (e - t + 1)) + t
        },
        isAngularVersion: function() {
            return void 0 !== window.Zone
        },
        deepExtend: function(t) {
            t = t || {};
            for (var e = 1; e < arguments.length; e++) {
                var a = arguments[e];
                if (a)
                    for (var n in a) a.hasOwnProperty(n) && ("object" == typeof a[n] ? t[n] = KTUtil.deepExtend(t[n], a[n]) : t[n] = a[n])
            }
            return t
        },
        extend: function(t) {
            t = t || {};
            for (var e = 1; e < arguments.length; e++)
                if (arguments[e])
                    for (var a in arguments[e]) arguments[e].hasOwnProperty(a) && (t[a] = arguments[e][a]);
            return t
        },
        get: function(t) {
            var e;
            return t === document ? document : t && 1 === t.nodeType ? t : (e = document.getElementById(t)) ? e : (e = document.getElementsByTagName(t)) ? e[0] : (e = document.getElementsByClassName(t)) ? e[0] : null
        },
        getByID: function(t) {
            return t && 1 === t.nodeType ? t : document.getElementById(t)
        },
        getByTag: function(t) {
            var e;
            return (e = document.getElementsByTagName(t)) ? e[0] : null
        },
        getByClass: function(t) {
            var e;
            return (e = document.getElementsByClassName(t)) ? e[0] : null
        },
        hasClasses: function(t, e) {
            if (t) {
                for (var a = e.split(" "), n = 0; n < a.length; n++)
                    if (0 == KTUtil.hasClass(t, KTUtil.trim(a[n]))) return !1;
                return !0
            }
        },
        hasClass: function(t, e) {
            if (t) return t.classList ? t.classList.contains(e) : new RegExp("\\b" + e + "\\b").test(t.className)
        },
        addClass: function(t, e) {
            if (t && void 0 !== e) {
                var a = e.split(" ");
                if (t.classList)
                    for (var n = 0; n < a.length; n++) a[n] && a[n].length > 0 && t.classList.add(KTUtil.trim(a[n]));
                else if (!KTUtil.hasClass(t, e))
                    for (n = 0; n < a.length; n++) t.className += " " + KTUtil.trim(a[n])
            }
        },
        removeClass: function(t, e) {
            if (t && void 0 !== e) {
                var a = e.split(" ");
                if (t.classList)
                    for (var n = 0; n < a.length; n++) t.classList.remove(KTUtil.trim(a[n]));
                else if (KTUtil.hasClass(t, e))
                    for (n = 0; n < a.length; n++) t.className = t.className.replace(new RegExp("\\b" + KTUtil.trim(a[n]) + "\\b", "g"), "")
            }
        },
        triggerCustomEvent: function(t, e, a) {
            if (window.CustomEvent) var n = new CustomEvent(e, {
                detail: a
            });
            else(n = document.createEvent("CustomEvent")).initCustomEvent(e, !0, !0, a);
            t.dispatchEvent(n)
        },
        triggerEvent: function(t, e) {
            var a;
            if (t.ownerDocument) a = t.ownerDocument;
            else {
                if (9 != t.nodeType) throw new Error("Invalid node passed to fireEvent: " + t.id);
                a = t
            }
            if (t.dispatchEvent) {
                var n = "";
                switch (e) {
                    case "click":
                    case "mouseenter":
                    case "mouseleave":
                    case "mousedown":
                    case "mouseup":
                        n = "MouseEvents";
                        break;
                    case "focus":
                    case "change":
                    case "blur":
                    case "select":
                        n = "HTMLEvents";
                        break;
                    default:
                        throw "fireEvent: Couldn't find an event class for event '" + e + "'."
                }
                var i = "change" != e;
                (o = a.createEvent(n)).initEvent(e, i, !0), o.synthetic = !0, t.dispatchEvent(o, !0)
            } else if (t.fireEvent) {
                var o;
                (o = a.createEventObject()).synthetic = !0, t.fireEvent("on" + e, o)
            }
        },
        index: function(t) {
            for (var e = (t = KTUtil.get(t)).parentNode.children, a = 0; a < e.length; a++)
                if (e[a] == t) return a
        },
        trim: function(t) {
            return t.trim()
        },
        eventTriggered: function(t) {
            return !!t.currentTarget.dataset.triggered || (t.currentTarget.dataset.triggered = !0, !1)
        },
        remove: function(t) {
            t && t.parentNode && t.parentNode.removeChild(t)
        },
        find: function(t, e) {
            if (t = KTUtil.get(t)) return t.querySelector(e)
        },
        findAll: function(t, e) {
            if (t = KTUtil.get(t)) return t.querySelectorAll(e)
        },
        insertAfter: function(t, e) {
            return e.parentNode.insertBefore(t, e.nextSibling)
        },
        parents: function(t, e) {
            Element.prototype.matches || (Element.prototype.matches = Element.prototype.matchesSelector || Element.prototype.mozMatchesSelector || Element.prototype.msMatchesSelector || Element.prototype.oMatchesSelector || Element.prototype.webkitMatchesSelector || function(t) {
                for (var e = (this.document || this.ownerDocument).querySelectorAll(t), a = e.length; --a >= 0 && e.item(a) !== this;);
                return a > -1
            });
            for (var a = []; t && t !== document; t = t.parentNode) e ? t.matches(e) && a.push(t) : a.push(t);
            return a
        },
        children: function(t, e, a) {
            if (t && t.childNodes) {
                for (var n = [], i = 0, o = t.childNodes.length; i < o; ++i) 1 == t.childNodes[i].nodeType && KTUtil.matches(t.childNodes[i], e, a) && n.push(t.childNodes[i]);
                return n
            }
        },
        child: function(t, e, a) {
            var n = KTUtil.children(t, e, a);
            return n ? n[0] : null
        },
        matches: function(t, e, a) {
            var n = Element.prototype,
                i = n.matches || n.webkitMatchesSelector || n.mozMatchesSelector || n.msMatchesSelector || function(t) {
                    return -1 !== [].indexOf.call(document.querySelectorAll(t), this)
                };
            return !(!t || !t.tagName) && i.call(t, e)
        },
        data: function(t) {
            return t = KTUtil.get(t), {
                set: function(e, a) {
                    void 0 !== t && (void 0 === t.customDataTag && (KTUtilElementDataStoreID++, t.customDataTag = KTUtilElementDataStoreID), void 0 === KTUtilElementDataStore[t.customDataTag] && (KTUtilElementDataStore[t.customDataTag] = {}), KTUtilElementDataStore[t.customDataTag][e] = a)
                },
                get: function(e) {
                    if (void 0 !== t) return void 0 === t.customDataTag ? null : this.has(e) ? KTUtilElementDataStore[t.customDataTag][e] : null
                },
                has: function(e) {
                    return void 0 !== t && (void 0 !== t.customDataTag && !(!KTUtilElementDataStore[t.customDataTag] || !KTUtilElementDataStore[t.customDataTag][e]))
                },
                remove: function(e) {
                    t && this.has(e) && delete KTUtilElementDataStore[t.customDataTag][e]
                }
            }
        },
        outerWidth: function(t, e) {
            if (!0 === e) {
                var a = parseFloat(t.offsetWidth);
                return a += parseFloat(KTUtil.css(t, "margin-left")) + parseFloat(KTUtil.css(t, "margin-right")), parseFloat(a)
            }
            return a = parseFloat(t.offsetWidth)
        },
        offset: function(t) {
            var e, a;
            if (t = KTUtil.get(t)) return t.getClientRects().length ? (e = t.getBoundingClientRect(), a = t.ownerDocument.defaultView, {
                top: e.top + a.pageYOffset,
                left: e.left + a.pageXOffset
            }) : {
                top: 0,
                left: 0
            }
        },
        height: function(t) {
            return KTUtil.css(t, "height")
        },
        visible: function(t) {
            return !(0 === t.offsetWidth && 0 === t.offsetHeight)
        },
        attr: function(t, e, a) {
            if (null != (t = KTUtil.get(t))) return void 0 === a ? t.getAttribute(e) : void t.setAttribute(e, a)
        },
        hasAttr: function(t, e) {
            if (null != (t = KTUtil.get(t))) return !!t.getAttribute(e)
        },
        removeAttr: function(t, e) {
            null != (t = KTUtil.get(t)) && t.removeAttribute(e)
        },
        animate: function(t, e, a, n, i, o) {
            var l = {};
            if (l.linear = function(t, e, a, n) {
                    return a * t / n + e
                }, i = l.linear, "number" == typeof t && "number" == typeof e && "number" == typeof a && "function" == typeof n) {
                "function" != typeof o && (o = function() {});
                var r = window.requestAnimationFrame || function(t) {
                        window.setTimeout(t, 20)
                    },
                    s = e - t;
                n(t);
                var d = window.performance && window.performance.now ? window.performance.now() : +new Date;
                r(function l(c) {
                    var u = (c || +new Date) - d;
                    u >= 0 && n(i(u, t, s, a)), u >= 0 && u >= a ? (n(e), o()) : r(l)
                })
            }
        },
        actualCss: function(t, e, a) {
            var n, i = "";
            if ((t = KTUtil.get(t)) instanceof HTMLElement != !1) return t.getAttribute("kt-hidden-" + e) && !1 !== a ? parseFloat(t.getAttribute("kt-hidden-" + e)) : (i = t.style.cssText, t.style.cssText = "position: absolute; visibility: hidden; display: block;", "width" == e ? n = t.offsetWidth : "height" == e && (n = t.offsetHeight), t.style.cssText = i, t.setAttribute("kt-hidden-" + e, n), parseFloat(n))
        },
        actualHeight: function(t, e) {
            return KTUtil.actualCss(t, "height", e)
        },
        actualWidth: function(t, e) {
            return KTUtil.actualCss(t, "width", e)
        },
        getScroll: function(t, e) {
            return e = "scroll" + e, t == window || t == document ? self["scrollTop" == e ? "pageYOffset" : "pageXOffset"] || browserSupportsBoxModel && document.documentElement[e] || document.body[e] : t[e]
        },
        css: function(t, e, a) {
            if (t = KTUtil.get(t))
                if (void 0 !== a) t.style[e] = a;
                else {
                    var n = (t.ownerDocument || document).defaultView;
                    if (n && n.getComputedStyle) return e = e.replace(/([A-Z])/g, "-$1").toLowerCase(), n.getComputedStyle(t, null).getPropertyValue(e);
                    if (t.currentStyle) return e = e.replace(/\-(\w)/g, function(t, e) {
                        return e.toUpperCase()
                    }), a = t.currentStyle[e], /^\d+(em|pt|%|ex)?$/i.test(a) ? function(e) {
                        var a = t.style.left,
                            n = t.runtimeStyle.left;
                        return t.runtimeStyle.left = t.currentStyle.left, t.style.left = e || 0, e = t.style.pixelLeft + "px", t.style.left = a, t.runtimeStyle.left = n, e
                    }(a) : a
                }
        },
        slide: function(t, e, a, n, i) {
            if (!(!t || "up" == e && !1 === KTUtil.visible(t) || "down" == e && !0 === KTUtil.visible(t))) {
                a = a || 600;
                var o = KTUtil.actualHeight(t),
                    l = !1,
                    r = !1;
                KTUtil.css(t, "padding-top") && !0 !== KTUtil.data(t).has("slide-padding-top") && KTUtil.data(t).set("slide-padding-top", KTUtil.css(t, "padding-top")), KTUtil.css(t, "padding-bottom") && !0 !== KTUtil.data(t).has("slide-padding-bottom") && KTUtil.data(t).set("slide-padding-bottom", KTUtil.css(t, "padding-bottom")), KTUtil.data(t).has("slide-padding-top") && (l = parseInt(KTUtil.data(t).get("slide-padding-top"))), KTUtil.data(t).has("slide-padding-bottom") && (r = parseInt(KTUtil.data(t).get("slide-padding-bottom"))), "up" == e ? (t.style.cssText = "display: block; overflow: hidden;", l && KTUtil.animate(0, l, a, function(e) {
                    t.style.paddingTop = l - e + "px"
                }, "linear"), r && KTUtil.animate(0, r, a, function(e) {
                    t.style.paddingBottom = r - e + "px"
                }, "linear"), KTUtil.animate(0, o, a, function(e) {
                    t.style.height = o - e + "px"
                }, "linear", function() {
                    n(), t.style.height = "", t.style.display = "none"
                })) : "down" == e && (t.style.cssText = "display: block; overflow: hidden;", l && KTUtil.animate(0, l, a, function(e) {
                    t.style.paddingTop = e + "px"
                }, "linear", function() {
                    t.style.paddingTop = ""
                }), r && KTUtil.animate(0, r, a, function(e) {
                    t.style.paddingBottom = e + "px"
                }, "linear", function() {
                    t.style.paddingBottom = ""
                }), KTUtil.animate(0, o, a, function(e) {
                    t.style.height = e + "px"
                }, "linear", function() {
                    n(), t.style.height = "", t.style.display = "", t.style.overflow = ""
                }))
            }
        },
        slideUp: function(t, e, a) {
            KTUtil.slide(t, "up", e, a)
        },
        slideDown: function(t, e, a) {
            KTUtil.slide(t, "down", e, a)
        },
        show: function(t, e) {
            void 0 !== t && (t.style.display = e || "block")
        },
        hide: function(t) {
            void 0 !== t && (t.style.display = "none")
        },
        addEvent: function(t, e, a, n) {
            void 0 !== (t = KTUtil.get(t)) && t.addEventListener(e, a)
        },
        removeEvent: function(t, e, a) {
            (t = KTUtil.get(t)).removeEventListener(e, a)
        },
        on: function(t, e, a, n) {
            if (e) {
                var i = KTUtil.getUniqueID("event");
                return KTUtilDelegatedEventHandlers[i] = function(a) {
                    for (var i = t.querySelectorAll(e), o = a.target; o && o !== t;) {
                        for (var l = 0, r = i.length; l < r; l++) o === i[l] && n.call(o, a);
                        o = o.parentNode
                    }
                }, KTUtil.addEvent(t, a, KTUtilDelegatedEventHandlers[i]), i
            }
        },
        off: function(t, e, a) {
            t && KTUtilDelegatedEventHandlers[a] && (KTUtil.removeEvent(t, e, KTUtilDelegatedEventHandlers[a]), delete KTUtilDelegatedEventHandlers[a])
        },
        one: function(t, e, a) {
            (t = KTUtil.get(t)).addEventListener(e, function t(e) {
                return e.target && e.target.removeEventListener && e.target.removeEventListener(e.type, t), a(e)
            })
        },
        hash: function(t) {
            var e, a = 0;
            if (0 === t.length) return a;
            for (e = 0; e < t.length; e++) a = (a << 5) - a + t.charCodeAt(e), a |= 0;
            return a
        },
        animateClass: function(t, e, a) {
            var n, i = {
                animation: "animationend",
                OAnimation: "oAnimationEnd",
                MozAnimation: "mozAnimationEnd",
                WebkitAnimation: "webkitAnimationEnd",
                msAnimation: "msAnimationEnd"
            };
            for (var o in i) void 0 !== t.style[o] && (n = i[o]);
            KTUtil.addClass(t, "animated " + e), KTUtil.one(t, n, function() {
                KTUtil.removeClass(t, "animated " + e)
            }), a && KTUtil.one(t, n, a)
        },
        transitionEnd: function(t, e) {
            var a, n = {
                transition: "transitionend",
                OTransition: "oTransitionEnd",
                MozTransition: "mozTransitionEnd",
                WebkitTransition: "webkitTransitionEnd",
                msTransition: "msTransitionEnd"
            };
            for (var i in n) void 0 !== t.style[i] && (a = n[i]);
            KTUtil.one(t, a, e)
        },
        animationEnd: function(t, e) {
            var a, n = {
                animation: "animationend",
                OAnimation: "oAnimationEnd",
                MozAnimation: "mozAnimationEnd",
                WebkitAnimation: "webkitAnimationEnd",
                msAnimation: "msAnimationEnd"
            };
            for (var i in n) void 0 !== t.style[i] && (a = n[i]);
            KTUtil.one(t, a, e)
        },
        animateDelay: function(t, e) {
            for (var a = ["webkit-", "moz-", "ms-", "o-", ""], n = 0; n < a.length; n++) KTUtil.css(t, a[n] + "animation-delay", e)
        },
        animateDuration: function(t, e) {
            for (var a = ["webkit-", "moz-", "ms-", "o-", ""], n = 0; n < a.length; n++) KTUtil.css(t, a[n] + "animation-duration", e)
        },
        scrollTo: function(t, e, a) {
            a = a || 500;
            var n, i, o = (t = KTUtil.get(t)) ? KTUtil.offset(t).top : 0,
                l = window.pageYOffset || document.documentElement.scrollTop || document.body.scrollTop || 0;
            o > l ? (n = o, i = l) : (n = l, i = o), e && (i += e), KTUtil.animate(n, i, a, function(t) {
                document.documentElement.scrollTop = t, document.body.parentNode.scrollTop = t, document.body.scrollTop = t
            })
        },
        scrollTop: function(t, e) {
            KTUtil.scrollTo(null, t, e)
        },
        isArray: function(t) {
            return t && Array.isArray(t)
        },
        ready: function(t) {
            (document.attachEvent ? "complete" === document.readyState : "loading" !== document.readyState) ? t(): document.addEventListener("DOMContentLoaded", t)
        },
        isEmpty: function(t) {
            for (var e in t)
                if (t.hasOwnProperty(e)) return !1;
            return !0
        },
        numberString: function(t) {
            for (var e = (t += "").split("."), a = e[0], n = e.length > 1 ? "." + e[1] : "", i = /(\d+)(\d{3})/; i.test(a);) a = a.replace(i, "$1,$2");
            return a + n
        },
        detectIE: function() {
            var t = window.navigator.userAgent,
                e = t.indexOf("MSIE ");
            if (e > 0) return parseInt(t.substring(e + 5, t.indexOf(".", e)), 10);
            if (t.indexOf("Trident/") > 0) {
                var a = t.indexOf("rv:");
                return parseInt(t.substring(a + 3, t.indexOf(".", a)), 10)
            }
            var n = t.indexOf("Edge/");
            return n > 0 && parseInt(t.substring(n + 5, t.indexOf(".", n)), 10)
        },
        isRTL: function() {
            return "rtl" == KTUtil.attr(KTUtil.get("html"), "direction")
        },
        scrollInit: function(t, e) {
            function a() {
                var a, n;
                if (n = e.height instanceof Function ? parseInt(e.height.call()) : parseInt(e.height), (e.mobileNativeScroll || e.disableForMobile) && KTUtil.isInResponsiveRange("tablet-and-mobile"))(a = KTUtil.data(t).get("ps")) ? (e.resetHeightOnDestroy ? KTUtil.css(t, "height", "auto") : (KTUtil.css(t, "overflow", "auto"), n > 0 && KTUtil.css(t, "height", n + "px")), a.destroy(), a = KTUtil.data(t).remove("ps")) : n > 0 && (KTUtil.css(t, "overflow", "auto"), KTUtil.css(t, "height", n + "px"));
                else if (n > 0 && KTUtil.css(t, "height", n + "px"), e.desktopNativeScroll) KTUtil.css(t, "overflow", "auto");
                else {
                    KTUtil.css(t, "overflow", "hidden"), (a = KTUtil.data(t).get("ps")) ? a.update() : (KTUtil.addClass(t, "kt-scroll"), a = new PerfectScrollbar(t, {
                        wheelSpeed: .5,
                        swipeEasing: !0,
                        wheelPropagation: !1 !== e.windowScroll,
                        minScrollbarLength: 40,
                        maxScrollbarLength: 300,
                        suppressScrollX: "true" != KTUtil.attr(t, "data-scroll-x")
                    }), KTUtil.data(t).set("ps", a));
                    var i = KTUtil.attr(t, "id");
                    if (!0 === e.rememberPosition && Cookies && i) {
                        if (Cookies.get(i)) {
                            var o = parseInt(Cookies.get(i));
                            o > 0 && (t.scrollTop = o)
                        }
                        t.addEventListener("ps-scroll-y", function() {
                            Cookies.set(i, t.scrollTop)
                        })
                    }
                }
            }
            t && (a(), e.handleWindowResize && KTUtil.addResizeHandler(function() {
                a()
            }))
        },
        scrollUpdate: function(t) {
            var e;
            (e = KTUtil.data(t).get("ps")) && e.update()
        },
        scrollUpdateAll: function(t) {
            for (var e = KTUtil.findAll(t, ".ps"), a = 0, n = e.length; a < n; a++) KTUtil.scrollerUpdate(e[a])
        },
        scrollDestroy: function(t) {
            var e;
            (e = KTUtil.data(t).get("ps")) && (e.destroy(), e = KTUtil.data(t).remove("ps"))
        },
        setHTML: function(t, e) {
            KTUtil.get(t) && (KTUtil.get(t).innerHTML = e)
        },
        getHTML: function(t) {
            if (KTUtil.get(t)) return KTUtil.get(t).innerHTML
        }
    }
}();
KTUtil.ready(function() {
        KTUtil.init()
    }), window.onload = function() {
        KTUtil.removeClass(KTUtil.get("body"), "kt-page--loading")
    },
    function(t) {
        var e = "KTDatatable",
            a = KTUtil,
            n = KTApp;
        if (void 0 === a) throw new Error("Util class is required and must be included before KTDatatable");
        t.fn.KTDatatable = function(i) {
            if (0 !== t(this).length) {
                var o = this;
                o.debug = !1, o.API = {
                    record: null,
                    value: null,
                    params: null
                };
                var l = {
                    isInit: !1,
                    cellOffset: 110,
                    iconOffset: 15,
                    stateId: "meta",
                    ajaxParams: {},
                    pagingObject: {},
                    init: function(e) {
                        var a, n = !1;
                        null === e.data.source && (l.extractTable(), n = !0), l.setupBaseDOM.call(), l.setupDOM(o.table), l.setDataSourceQuery(l.getOption("data.source.read.params.query")), t(o).on("kt-datatable--on-layout-updated", l.afterRender), o.debug && l.stateRemove(l.stateId), t.each(l.getOption("extensions"), function(e, a) {
                            "function" == typeof t.fn.KTDatatable[e] && new t.fn.KTDatatable[e](o, a)
                        }), l.spinnerCallback(!0), "remote" !== e.data.type && "local" !== e.data.type || ((!1 === e.data.saveState || !1 === e.data.saveState.cookie && !1 === e.data.saveState.webstorage) && l.stateRemove(l.stateId), "local" === e.data.type && "object" == typeof e.data.source && (o.dataSet = o.originalDataSet = l.dataMapCallback(e.data.source)), l.dataRender()), n && (t(o.tableHead).find("tr").remove(), t(o.tableFoot).find("tr").remove()), l.setHeadTitle(), l.getOption("layout.footer") && l.setHeadTitle(o.tableFoot), void 0 !== e.layout.header && !1 === e.layout.header && t(o.table).find("thead").remove(), void 0 !== e.layout.footer && !1 === e.layout.footer && t(o.table).find("tfoot").remove(), null !== e.data.type && "local" !== e.data.type || (l.setupCellField.call(), l.setupTemplateCell.call(), l.setupSubDatatable.call(), l.setupSystemColumn.call(), l.redraw());
                        var i = !1;
                        return t(window).resize(function() {
                            i || (a = t(this).width(), i = !0), t(this).width() !== a && (a = t(this).width(), l.fullRender())
                        }), t(o).height(""), t(l.getOption("search.input")).on("keyup", function(e) {
                            l.getOption("search.onEnter") && 13 !== e.which || l.search(t(this).val())
                        }), o
                    },
                    extractTable: function() {
                        var e = [],
                            n = t(o).find("tr:first-child th").get().map(function(a, n) {
                                var o = t(a).data("field");
                                void 0 === o && (o = t(a).text().trim());
                                var l = {
                                    field: o,
                                    title: o
                                };
                                for (var r in i.columns) i.columns[r].field === o && (l = t.extend(!0, {}, i.columns[r], l));
                                return e.push(l), o
                            });
                        i.columns = e;
                        var l = [],
                            r = [];
                        t(o).find("tr").each(function() {
                            t(this).find("td").length && l.push(t(this).prop("attributes"));
                            var e = {};
                            t(this).find("td").each(function(t, a) {
                                e[n[t]] = a.innerHTML.trim()
                            }), a.isEmpty(e) || r.push(e)
                        }), i.data.attr.rowProps = l, i.data.source = r
                    },
                    layoutUpdate: function() {
                        l.setupSubDatatable.call(), l.setupSystemColumn.call(), l.setupHover.call(), void 0 === i.detail && 1 === l.getDepth() && l.lockTable.call(), l.resetScroll(), l.isLocked() || (l.redraw.call(), l.isSubtable() || !0 !== l.getOption("rows.autoHide") || l.autoHide(), t(o.table).find(".kt-datatable__row").css("height", "")), l.columnHide.call(), l.rowEvenOdd.call(), l.sorting.call(), l.scrollbar.call(), l.isInit || (l.dropdownFix(), t(o).trigger("kt-datatable--on-init", {
                            table: t(o.wrap).attr("id"),
                            options: i
                        }), l.isInit = !0), t(o).trigger("kt-datatable--on-layout-updated", {
                            table: t(o.wrap).attr("id")
                        })
                    },
                    dropdownFix: function() {
                        var e;
                        t("body").on("show.bs.dropdown", ".kt-datatable .kt-datatable__body", function(a) {
                            e = t(a.target).find(".dropdown-menu"), t("body").append(e.detach()), e.css("display", "block"), e.position({
                                my: "right top",
                                at: "right bottom",
                                of: t(a.relatedTarget)
                            }), o.closest(".modal").length && e.css("z-index", "2000")
                        }).on("hide.bs.dropdown", ".kt-datatable .kt-datatable__body", function(a) {
                            t(a.target).append(e.detach()), e.hide()
                        })
                    },
                    lockTable: function() {
                        var e = {
                            lockEnabled: !1,
                            init: function() {
                                e.lockEnabled = l.lockEnabledColumns(), 0 === e.lockEnabled.left.length && 0 === e.lockEnabled.right.length || e.enable()
                            },
                            enable: function() {
                                t(o.table).find("thead,tbody,tfoot").each(function() {
                                    var a = this;
                                    0 === t(this).find(".kt-datatable__lock").length && t(this).ready(function() {
                                        ! function(a) {
                                            if (t(a).find(".kt-datatable__lock").length > 0) l.log("Locked container already exist in: ", a);
                                            else if (0 !== t(a).find(".kt-datatable__row").length) {
                                                var n = t("<div/>").addClass("kt-datatable__lock kt-datatable__lock--left"),
                                                    i = t("<div/>").addClass("kt-datatable__lock kt-datatable__lock--scroll"),
                                                    r = t("<div/>").addClass("kt-datatable__lock kt-datatable__lock--right");
                                                t(a).find(".kt-datatable__row").each(function() {
                                                    var e = t("<tr/>").addClass("kt-datatable__row").data("obj", t(this).data("obj")).appendTo(n),
                                                        a = t("<tr/>").addClass("kt-datatable__row").data("obj", t(this).data("obj")).appendTo(i),
                                                        o = t("<tr/>").addClass("kt-datatable__row").data("obj", t(this).data("obj")).appendTo(r);
                                                    t(this).find(".kt-datatable__cell").each(function() {
                                                        var n = t(this).data("locked");
                                                        void 0 !== n ? (void 0 === n.left && !0 !== n || t(this).appendTo(e), void 0 !== n.right && t(this).appendTo(o)) : t(this).appendTo(a)
                                                    }), t(this).remove()
                                                }), e.lockEnabled.left.length > 0 && (t(o.wrap).addClass("kt-datatable--lock"), t(n).appendTo(a)), (e.lockEnabled.left.length > 0 || e.lockEnabled.right.length > 0) && t(i).appendTo(a), e.lockEnabled.right.length > 0 && (t(o.wrap).addClass("kt-datatable--lock"), t(r).appendTo(a))
                                            } else l.log("No row exist in: ", a)
                                        }(a)
                                    })
                                })
                            }
                        };
                        return e.init(), e
                    },
                    fullRender: function() {
                        t(o.tableHead).empty(), l.setHeadTitle(), l.getOption("layout.footer") && (t(o.tableFoot).empty(), l.setHeadTitle(o.tableFoot)), l.spinnerCallback(!0), t(o.wrap).removeClass("kt-datatable--loaded"), l.insertData()
                    },
                    lockEnabledColumns: function() {
                        var e = t(window).width(),
                            n = i.columns,
                            o = {
                                left: [],
                                right: []
                            };
                        return t.each(n, function(t, n) {
                            void 0 !== n.locked && (void 0 !== n.locked.left && a.getBreakpoint(n.locked.left) <= e && o.left.push(n.locked.left), void 0 !== n.locked.right && a.getBreakpoint(n.locked.right) <= e && o.right.push(n.locked.right))
                        }), o
                    },
                    afterRender: function(e, a) {
                        t(o).ready(function() {
                            l.isLocked() && l.redraw(), t(o.tableBody).css("visibility", ""), t(o.wrap).addClass("kt-datatable--loaded"), l.spinnerCallback(!1)
                        })
                    },
                    hoverTimer: 0,
                    isScrolling: !1,
                    setupHover: function() {
                        t(window).scroll(function(t) {
                            clearTimeout(l.hoverTimer), l.isScrolling = !0
                        }), t(o.tableBody).find(".kt-datatable__cell").off("mouseenter", "mouseleave").on("mouseenter", function() {
                            if (l.hoverTimer = setTimeout(function() {
                                    l.isScrolling = !1
                                }, 200), !l.isScrolling) {
                                var e = t(this).closest(".kt-datatable__row").addClass("kt-datatable__row--hover"),
                                    a = t(e).index() + 1;
                                t(e).closest(".kt-datatable__lock").parent().find(".kt-datatable__row:nth-child(" + a + ")").addClass("kt-datatable__row--hover")
                            }
                        }).on("mouseleave", function() {
                            var e = t(this).closest(".kt-datatable__row").removeClass("kt-datatable__row--hover"),
                                a = t(e).index() + 1;
                            t(e).closest(".kt-datatable__lock").parent().find(".kt-datatable__row:nth-child(" + a + ")").removeClass("kt-datatable__row--hover")
                        })
                    },
                    adjustLockContainer: function() {
                        if (!l.isLocked()) return 0;
                        var e = t(o.tableHead).width(),
                            a = t(o.tableHead).find(".kt-datatable__lock--left").width(),
                            n = t(o.tableHead).find(".kt-datatable__lock--right").width();
                        void 0 === a && (a = 0), void 0 === n && (n = 0);
                        var i = Math.floor(e - a - n);
                        return t(o.table).find(".kt-datatable__lock--scroll").css("width", i), i
                    },
                    dragResize: function() {
                        var e, a, n = !1,
                            i = void 0;
                        t(o.tableHead).find(".kt-datatable__cell").mousedown(function(o) {
                            i = t(this), n = !0, e = o.pageX, a = t(this).width(), t(i).addClass("kt-datatable__cell--resizing")
                        }).mousemove(function(l) {
                            if (n) {
                                var r = t(i).index(),
                                    s = t(o.tableBody),
                                    d = t(i).closest(".kt-datatable__lock");
                                if (d) {
                                    var c = t(d).index();
                                    s = t(o.tableBody).find(".kt-datatable__lock").eq(c)
                                }
                                t(s).find(".kt-datatable__row").each(function(n, i) {
                                    t(i).find(".kt-datatable__cell").eq(r).width(a + (l.pageX - e)).children().width(a + (l.pageX - e))
                                }), t(i).children().css("width", a + (l.pageX - e))
                            }
                        }).mouseup(function() {
                            t(i).removeClass("kt-datatable__cell--resizing"), n = !1
                        }), t(document).mouseup(function() {
                            t(i).removeClass("kt-datatable__cell--resizing"), n = !1
                        })
                    },
                    initHeight: function() {
                        if (i.layout.height && i.layout.scroll) {
                            var e = t(o.tableHead).find(".kt-datatable__row").outerHeight(),
                                a = t(o.tableFoot).find(".kt-datatable__row").outerHeight(),
                                n = i.layout.height;
                            e > 0 && (n -= e), a > 0 && (n -= a), n -= 2, t(o.tableBody).css("max-height", n), t(o.tableBody).find(".kt-datatable__lock--scroll").css("height", n)
                        }
                    },
                    setupBaseDOM: function() {
                        o.initialDatatable = t(o).clone(), "TABLE" === t(o).prop("tagName") ? (o.table = t(o).removeClass("kt-datatable").addClass("kt-datatable__table"), 0 === t(o.table).parents(".kt-datatable").length && (o.table.wrap(t("<div/>").addClass("kt-datatable").addClass("kt-datatable--" + i.layout.theme)), o.wrap = t(o.table).parent())) : (o.wrap = t(o).addClass("kt-datatable").addClass("kt-datatable--" + i.layout.theme), o.table = t("<table/>").addClass("kt-datatable__table").appendTo(o)), void 0 !== i.layout.class && t(o.wrap).addClass(i.layout.class), t(o.table).removeClass("kt-datatable--destroyed").css("display", "block"), void 0 === t(o).attr("id") && (l.setOption("data.saveState", !1), t(o.table).attr("id", a.getUniqueID("kt-datatable--"))), l.getOption("layout.minHeight") && t(o.table).css("min-height", l.getOption("layout.minHeight")), l.getOption("layout.height") && t(o.table).css("max-height", l.getOption("layout.height")), null === i.data.type && t(o.table).css("width", "").css("display", ""), o.tableHead = t(o.table).find("thead"), 0 === t(o.tableHead).length && (o.tableHead = t("<thead/>").prependTo(o.table)), o.tableBody = t(o.table).find("tbody"), 0 === t(o.tableBody).length && (o.tableBody = t("<tbody/>").appendTo(o.table)), void 0 !== i.layout.footer && i.layout.footer && (o.tableFoot = t(o.table).find("tfoot"), 0 === t(o.tableFoot).length && (o.tableFoot = t("<tfoot/>").appendTo(o.table)))
                    },
                    setupCellField: function(e) {
                        void 0 === e && (e = t(o.table).children());
                        var a = i.columns;
                        t.each(e, function(e, n) {
                            t(n).find(".kt-datatable__row").each(function(e, n) {
                                t(n).find(".kt-datatable__cell").each(function(e, n) {
                                    void 0 !== a[e] && t(n).data(a[e])
                                })
                            })
                        })
                    },
                    setupTemplateCell: function(e) {
                        void 0 === e && (e = o.tableBody);
                        var a = i.columns;
                        t(e).find(".kt-datatable__row").each(function(e, n) {
                            var i = t(n).data("obj");
                            if (void 0 !== i) {
                                var r = l.getOption("rows.callback");
                                "function" == typeof r && r(t(n), i, e);
                                var s = l.getOption("rows.beforeTemplate");
                                "function" == typeof s && s(t(n), i, e), void 0 === i && (i = {}, t(n).find(".kt-datatable__cell").each(function(e, n) {
                                    var o = t.grep(a, function(e, a) {
                                        return t(n).data("field") === e.field
                                    })[0];
                                    void 0 !== o && (i[o.field] = t(n).text())
                                })), t(n).find(".kt-datatable__cell").each(function(n, r) {
                                    var s = t.grep(a, function(e, a) {
                                        return t(r).data("field") === e.field
                                    })[0];
                                    if (void 0 !== s && void 0 !== s.template) {
                                        var d = "";
                                        "string" == typeof s.template && (d = l.dataPlaceholder(s.template, i)), "function" == typeof s.template && (d = s.template(i, e, o)), "undefined" != typeof DOMPurify && (d = DOMPurify.sanitize(d));
                                        var c = document.createElement("span");
                                        c.innerHTML = d, t(r).html(c), void 0 !== s.overflow && (t(c).css("overflow", s.overflow), t(c).css("position", "relative"))
                                    }
                                });
                                var d = l.getOption("rows.afterTemplate");
                                "function" == typeof d && d(t(n), i, e)
                            }
                        })
                    },
                    setupSystemColumn: function() {
                        if (o.dataSet = o.dataSet || [], 0 !== o.dataSet.length) {
                            var e = i.columns;
                            t(o.tableBody).find(".kt-datatable__row").each(function(a, n) {
                                t(n).find(".kt-datatable__cell").each(function(a, n) {
                                    var i = t.grep(e, function(e, a) {
                                        return t(n).data("field") === e.field
                                    })[0];
                                    if (void 0 !== i) {
                                        var o = t(n).text();
                                        if (void 0 !== i.selector && !1 !== i.selector) {
                                            if (t(n).find('.kt-checkbox [type="checkbox"]').length > 0) return;
                                            t(n).addClass("kt-datatable__cell--check");
                                            var r = t("<label/>").addClass("kt-checkbox kt-checkbox--single").append(t("<input/>").attr("type", "checkbox").attr("value", o).on("click", function() {
                                                t(this).is(":checked") ? l.setActive(this) : l.setInactive(this)
                                            })).append("&nbsp;<span></span>");
                                            void 0 !== i.selector.class && t(r).addClass(i.selector.class), t(n).children().html(r)
                                        }
                                        if (void 0 !== i.subtable && i.subtable) {
                                            if (t(n).find(".kt-datatable__toggle-subtable").length > 0) return;
                                            t(n).children().html(t("<a/>").addClass("kt-datatable__toggle-subtable").attr("href", "#").attr("data-value", o).append(t("<i/>").addClass(l.getOption("layout.icons.rowDetail.collapse"))))
                                        }
                                    }
                                })
                            });
                            var a = function(a) {
                                var n = t.grep(e, function(t, e) {
                                    return void 0 !== t.selector && !1 !== t.selector
                                })[0];
                                if (void 0 !== n && void 0 !== n.selector && !1 !== n.selector) {
                                    var i = t(a).find('[data-field="' + n.field + '"]');
                                    if (t(i).find('.kt-checkbox [type="checkbox"]').length > 0) return;
                                    t(i).addClass("kt-datatable__cell--check");
                                    var o = t("<label/>").addClass("kt-checkbox kt-checkbox--single kt-checkbox--all").append(t("<input/>").attr("type", "checkbox").on("click", function() {
                                        t(this).is(":checked") ? l.setActiveAll(!0) : l.setActiveAll(!1)
                                    })).append("&nbsp;<span></span>");
                                    void 0 !== n.selector.class && t(o).addClass(n.selector.class), t(i).children().html(o)
                                }
                            };
                            i.layout.header && a(t(o.tableHead).find(".kt-datatable__row").first()), i.layout.footer && a(t(o.tableFoot).find(".kt-datatable__row").first())
                        }
                    },
                    maxWidthList: {},
                    adjustCellsWidth: function() {
                        var e = t(o.tableBody).innerWidth() - l.iconOffset,
                            a = t(o.tableBody).find(".kt-datatable__row:first-child").find(".kt-datatable__cell").not(".kt-datatable__toggle-detail").not(":hidden").length;
                        if (a > 0) {
                            e -= l.iconOffset * a;
                            var n = Math.floor(e / a);
                            n <= l.cellOffset && (n = l.cellOffset), t(o.table).find(".kt-datatable__row").find(".kt-datatable__cell").not(".kt-datatable__toggle-detail").not(":hidden").each(function(e, a) {
                                var i = n,
                                    r = t(a).data("width");
                                if (void 0 !== r)
                                    if ("auto" === r) {
                                        var s = t(a).data("field");
                                        if (l.maxWidthList[s]) i = l.maxWidthList[s];
                                        else {
                                            var d = t(o.table).find('.kt-datatable__cell[data-field="' + s + '"]');
                                            i = l.maxWidthList[s] = Math.max.apply(null, t(d).map(function() {
                                                return t(this).outerWidth()
                                            }).get())
                                        }
                                    } else i = r;
                                t(a).children().css("width", Math.ceil(i))
                            })
                        }
                        return o
                    },
                    adjustCellsHeight: function() {
                        t.each(t(o.table).children(), function(e, a) {
                            for (var n = t(a).find(".kt-datatable__row").first().parent().find(".kt-datatable__row").length, i = 1; i <= n; i++) {
                                var o = t(a).find(".kt-datatable__row:nth-child(" + i + ")");
                                if (t(o).length > 0) {
                                    var l = Math.max.apply(null, t(o).map(function() {
                                        return t(this).outerHeight()
                                    }).get());
                                    t(o).css("height", Math.ceil(l))
                                }
                            }
                        })
                    },
                    setupDOM: function(e) {
                        t(e).find("> thead").addClass("kt-datatable__head"), t(e).find("> tbody").addClass("kt-datatable__body"), t(e).find("> tfoot").addClass("kt-datatable__foot"), t(e).find("tr").addClass("kt-datatable__row"), t(e).find("tr > th, tr > td").addClass("kt-datatable__cell"), t(e).find("tr > th, tr > td").each(function(e, a) {
                            0 === t(a).find("span").length && t(a).wrapInner(t("<span/>").css("width", l.cellOffset))
                        })
                    },
                    scrollbar: function() {
                        var e = {
                            scrollable: null,
                            tableLocked: null,
                            initPosition: null,
                            init: function() {
                                var n = a.getViewPort().width;
                                if (i.layout.scroll) {
                                    t(o.wrap).addClass("kt-datatable--scroll");
                                    var r = t(o.tableBody).find(".kt-datatable__lock--scroll");
                                    t(r).find(".kt-datatable__row").length > 0 && t(r).length > 0 ? (e.scrollHead = t(o.tableHead).find("> .kt-datatable__lock--scroll > .kt-datatable__row"), e.scrollFoot = t(o.tableFoot).find("> .kt-datatable__lock--scroll > .kt-datatable__row"), e.tableLocked = t(o.tableBody).find(".kt-datatable__lock:not(.kt-datatable__lock--scroll)"), l.getOption("layout.customScrollbar") && 10 != a.detectIE() && n > a.getBreakpoint("lg") ? e.initCustomScrollbar(r[0]) : e.initDefaultScrollbar(r)) : t(o.tableBody).find(".kt-datatable__row").length > 0 && (e.scrollHead = t(o.tableHead).find("> .kt-datatable__row"), e.scrollFoot = t(o.tableFoot).find("> .kt-datatable__row"), l.getOption("layout.customScrollbar") && 10 != a.detectIE() && n > a.getBreakpoint("lg") ? e.initCustomScrollbar(o.tableBody) : e.initDefaultScrollbar(o.tableBody))
                                }
                            },
                            initDefaultScrollbar: function(a) {
                                e.initPosition = t(a).scrollLeft(), t(a).css("overflow-y", "auto").off().on("scroll", e.onScrolling), !0 !== l.getOption("rows.autoHide") && t(a).css("overflow-x", "auto")
                            },
                            onScrolling: function(n) {
                                var i = t(this).scrollLeft(),
                                    o = t(this).scrollTop();
                                a.isRTL() && (i -= e.initPosition), t(e.scrollHead).css("left", -i), t(e.scrollFoot).css("left", -i), t(e.tableLocked).each(function(e, a) {
                                    l.isLocked() && (o -= 1), t(a).css("top", -o)
                                })
                            },
                            initCustomScrollbar: function(a) {
                                e.scrollable = a, l.initScrollbar(a), e.initPosition = t(a).scrollLeft(), t(a).off().on("scroll", e.onScrolling)
                            }
                        };
                        return e.init(), e
                    },
                    initScrollbar: function(e, n) {
                        if (e && e.nodeName)
                            if (t(o.tableBody).css("overflow", ""), a.hasClass(e, "ps")) t(e).data("ps").update();
                            else {
                                var i = new PerfectScrollbar(e, Object.assign({}, {
                                    wheelSpeed: .5,
                                    swipeEasing: !0,
                                    minScrollbarLength: 40,
                                    maxScrollbarLength: 300,
                                    suppressScrollX: l.getOption("rows.autoHide") && !l.isLocked()
                                }, n));
                                t(e).data("ps", i), t(window).resize(function() {
                                    i.update()
                                })
                            }
                    },
                    setHeadTitle: function(e) {
                        void 0 === e && (e = o.tableHead), e = t(e)[0];
                        var n = i.columns,
                            r = e.getElementsByTagName("tr")[0],
                            s = e.getElementsByTagName("td");
                        void 0 === r && (r = document.createElement("tr"), e.appendChild(r)), t.each(n, function(e, n) {
                            var i = s[e];
                            if (void 0 === i && (i = document.createElement("th"), r.appendChild(i)), void 0 !== n.title && (i.innerHTML = n.title, i.setAttribute("data-field", n.field), a.addClass(i, n.class), void 0 !== n.autoHide && (!0 !== n.autoHide ? i.setAttribute("data-autohide-disabled", n.autoHide) : i.setAttribute("data-autohide-enabled", n.autoHide)), t(i).data(n)), void 0 !== n.attr && t.each(n.attr, function(t, e) {
                                    i.setAttribute(t, e)
                                }), void 0 !== n.textAlign) {
                                var l = void 0 !== o.textAlign[n.textAlign] ? o.textAlign[n.textAlign] : "";
                                a.addClass(i, l)
                            }
                        }), l.setupDOM(e)
                    },
                    dataRender: function(e) {
                        t(o.table).siblings(".kt-datatable__pager").removeClass("kt-datatable--paging-loaded");
                        var a = function() {
                                o.dataSet = o.dataSet || [], l.localDataUpdate();
                                var e = l.getDataSourceParam("pagination");
                                0 === e.perpage && (e.perpage = i.data.pageSize || 10), e.total = o.dataSet.length;
                                var a = Math.max(e.perpage * (e.page - 1), 0),
                                    n = Math.min(a + e.perpage, e.total);
                                return o.dataSet = t(o.dataSet).slice(a, n), e
                            },
                            n = function(e) {
                                var n = function(e, a) {
                                    t(e.pager).hasClass("kt-datatable--paging-loaded") || (t(e.pager).remove(), e.init(a)), t(e.pager).off().on("kt-datatable--on-goto-page", function(n) {
                                        t(e.pager).remove(), e.init(a)
                                    });
                                    var n = Math.max(a.perpage * (a.page - 1), 0),
                                        i = Math.min(n + a.perpage, a.total);
                                    l.localDataUpdate(), o.dataSet = t(o.dataSet).slice(n, i), l.insertData()
                                };
                                if (t(o.wrap).removeClass("kt-datatable--error"), i.pagination)
                                    if (i.data.serverPaging && "local" !== i.data.type) {
                                        var r = l.getObject("meta", e || null);
                                        l.pagingObject = null !== r ? l.paging(r) : l.paging(a(), n)
                                    } else l.pagingObject = l.paging(a(), n);
                                else l.localDataUpdate();
                                l.insertData()
                            };
                        "local" === i.data.type || !1 === i.data.serverSorting && "sort" === e || !1 === i.data.serverFiltering && "search" === e ? setTimeout(function() {
                            n(), l.setAutoColumns()
                        }) : l.getData().done(n)
                    },
                    insertData: function() {
                        o.dataSet = o.dataSet || [];
                        var e = l.getDataSourceParam(),
                            n = e.pagination,
                            r = (Math.max(n.page, 1) - 1) * n.perpage,
                            s = Math.min(n.page, n.pages) * n.perpage,
                            d = {};
                        void 0 !== i.data.attr.rowProps && i.data.attr.rowProps.length && (d = i.data.attr.rowProps.slice(r, s));
                        var c = document.createElement("tbody");
                        c.style.visibility = "hidden";
                        var u = i.columns.length;
                        if (t.each(o.dataSet, function(n, r) {
                                var s = document.createElement("tr");
                                s.setAttribute("data-row", n), t(s).data("obj", r), void 0 !== d[n] && t.each(d[n], function() {
                                    s.setAttribute(this.name, this.value)
                                });
                                for (var p = 0; p < u; p += 1) {
                                    var f = i.columns[p],
                                        g = [];
                                    if (l.getObject("sort.field", e) === f.field && g.push("kt-datatable__cell--sorted"), void 0 !== f.textAlign) {
                                        var h = void 0 !== o.textAlign[f.textAlign] ? o.textAlign[f.textAlign] : "";
                                        g.push(h)
                                    }
                                    void 0 !== f.class && g.push(f.class);
                                    var m = document.createElement("td");
                                    a.addClass(m, g.join(" ")), m.setAttribute("data-field", f.field), void 0 !== f.autoHide && (!0 !== f.autoHide ? m.setAttribute("data-autohide-disabled", f.autoHide) : m.setAttribute("data-autohide-enabled", f.autoHide)), m.innerHTML = l.getObject(f.field, r), s.appendChild(m)
                                }
                                c.appendChild(s)
                            }), 0 === o.dataSet.length) {
                            var p = document.createElement("span");
                            a.addClass(p, "kt-datatable--error"), p.innerHTML = l.getOption("translate.records.noRecords"), c.appendChild(p), t(o.wrap).addClass("kt-datatable--error kt-datatable--loaded"), l.spinnerCallback(!1)
                        }
                        t(o.tableBody).replaceWith(c), o.tableBody = c, l.setupDOM(o.table), l.setupCellField([o.tableBody]), l.setupTemplateCell(o.tableBody), l.layoutUpdate()
                    },
                    updateTableComponents: function() {
                        o.tableHead = t(o.table).children("thead"), o.tableBody = t(o.table).children("tbody"), o.tableFoot = t(o.table).children("tfoot")
                    },
                    getData: function() {
                        var e = {
                            dataType: "json",
                            method: "POST",
                            data: {},
                            timeout: l.getOption("data.source.read.timeout") || 3e4
                        };
                        if ("local" === i.data.type && (e.url = i.data.source), "remote" === i.data.type) {
                            var a = l.getDataSourceParam();
                            l.getOption("data.serverPaging") || delete a.pagination, l.getOption("data.serverSorting") || delete a.sort, e.data = t.extend({}, e.data, l.getOption("data.source.read.params"), a), "string" != typeof(e = t.extend({}, e, l.getOption("data.source.read"))).url && (e.url = l.getOption("data.source.read")), "string" != typeof e.url && (e.url = l.getOption("data.source"))
                        }
                        return t.ajax(e).done(function(e, a, n) {
                            o.lastResponse = e, o.dataSet = o.originalDataSet = l.dataMapCallback(e), l.setAutoColumns(), t(o).trigger("kt-datatable--on-ajax-done", [o.dataSet])
                        }).fail(function(e, a, n) {
                            t(o).trigger("kt-datatable--on-ajax-fail", [e]), t(o.tableBody).html(t("<span/>").addClass("kt-datatable--error").html(l.getOption("translate.records.noRecords"))), t(o.wrap).addClass("kt-datatable--error kt-datatable--loaded"), l.spinnerCallback(!1)
                        }).always(function() {})
                    },
                    paging: function(e, n) {
                        var i = {
                            meta: null,
                            pager: null,
                            paginateEvent: null,
                            pagerLayout: {
                                pagination: null,
                                info: null
                            },
                            callback: null,
                            init: function(e) {
                                i.meta = e, i.meta.page = parseInt(i.meta.page), i.meta.pages = parseInt(i.meta.pages), i.meta.perpage = parseInt(i.meta.perpage), i.meta.total = parseInt(i.meta.total), i.meta.pages = Math.max(Math.ceil(i.meta.total / i.meta.perpage), 1), i.meta.page > i.meta.pages && (i.meta.page = i.meta.pages), i.paginateEvent = l.getTablePrefix("paging"), i.pager = t(o.table).siblings(".kt-datatable__pager"), t(i.pager).hasClass("kt-datatable--paging-loaded") || (t(i.pager).remove(), 0 !== i.meta.pages && (l.setDataSourceParam("pagination", {
                                    page: i.meta.page,
                                    pages: i.meta.pages,
                                    perpage: i.meta.perpage,
                                    total: i.meta.total
                                }), i.callback = i.serverCallback, "function" == typeof n && (i.callback = n), i.addPaginateEvent(), i.populate(), i.meta.page = Math.max(i.meta.page || 1, i.meta.page), t(o).trigger(i.paginateEvent, i.meta), i.pagingBreakpoint.call(), t(window).resize(i.pagingBreakpoint)))
                            },
                            serverCallback: function(t, e) {
                                l.dataRender()
                            },
                            populate: function() {
                                var e = l.getOption("layout.icons.pagination"),
                                    a = l.getOption("translate.toolbar.pagination.items.default");
                                i.pager = t("<div/>").addClass("kt-datatable__pager kt-datatable--paging-loaded");
                                var n = t("<ul/>").addClass("kt-datatable__pager-nav");
                                i.pagerLayout.pagination = n, t("<li/>").append(t("<a/>").attr("title", a.first).addClass("kt-datatable__pager-link kt-datatable__pager-link--first").append(t("<i/>").addClass(e.first)).on("click", i.gotoMorePage).attr("data-page", 1)).appendTo(n), t("<li/>").append(t("<a/>").attr("title", a.prev).addClass("kt-datatable__pager-link kt-datatable__pager-link--prev").append(t("<i/>").addClass(e.prev)).on("click", i.gotoMorePage)).appendTo(n), t("<li/>").append(t("<a/>").attr("title", a.more).addClass("kt-datatable__pager-link kt-datatable__pager-link--more-prev").html(t("<i/>").addClass(e.more)).on("click", i.gotoMorePage)).appendTo(n), t("<li/>").append(t("<input/>").attr("type", "text").addClass("kt-pager-input form-control").attr("title", a.input).on("keyup", function() {
                                    t(this).attr("data-page", Math.abs(t(this).val()))
                                }).on("keypress", function(t) {
                                    13 === t.which && i.gotoMorePage(t)
                                })).appendTo(n);
                                var r = l.getOption("toolbar.items.pagination.pages.desktop.pagesNumber"),
                                    s = Math.ceil(i.meta.page / r) * r,
                                    d = s - r;
                                s > i.meta.pages && (s = i.meta.pages);
                                for (var c = d; c < s; c++) {
                                    var u = c + 1;
                                    t("<li/>").append(t("<a/>").addClass("kt-datatable__pager-link kt-datatable__pager-link-number").text(u).attr("data-page", u).attr("title", u).on("click", i.gotoPage)).appendTo(n)
                                }
                                t("<li/>").append(t("<a/>").attr("title", a.more).addClass("kt-datatable__pager-link kt-datatable__pager-link--more-next").html(t("<i/>").addClass(e.more)).on("click", i.gotoMorePage)).appendTo(n), t("<li/>").append(t("<a/>").attr("title", a.next).addClass("kt-datatable__pager-link kt-datatable__pager-link--next").append(t("<i/>").addClass(e.next)).on("click", i.gotoMorePage)).appendTo(n), t("<li/>").append(t("<a/>").attr("title", a.last).addClass("kt-datatable__pager-link kt-datatable__pager-link--last").append(t("<i/>").addClass(e.last)).on("click", i.gotoMorePage).attr("data-page", i.meta.pages)).appendTo(n), l.getOption("toolbar.items.info") && (i.pagerLayout.info = t("<div/>").addClass("kt-datatable__pager-info").append(t("<span/>").addClass("kt-datatable__pager-detail"))), t.each(l.getOption("toolbar.layout"), function(e, a) {
                                    t(i.pagerLayout[a]).appendTo(i.pager)
                                });
                                var p = t("<select/>").addClass("selectpicker kt-datatable__pager-size").attr("title", l.getOption("translate.toolbar.pagination.items.default.select")).attr("data-width", "60px").val(i.meta.perpage).on("change", i.updatePerpage).prependTo(i.pagerLayout.info),
                                    f = l.getOption("toolbar.items.pagination.pageSizeSelect");
                                0 == f.length && (f = [10, 20, 30, 50, 100]), t.each(f, function(e, a) {
                                    var n = a; - 1 === a && (n = l.getOption("translate.toolbar.pagination.items.default.all")), t("<option/>").attr("value", a).html(n).appendTo(p)
                                }), t(o).ready(function() {
                                    t(".selectpicker").selectpicker().on("hide.bs.select", function() {
                                        t(this).closest(".bootstrap-select").removeClass("dropup")
                                    }).siblings(".dropdown-toggle").attr("title", l.getOption("translate.toolbar.pagination.items.default.select"))
                                }), i.paste()
                            },
                            paste: function() {
                                t.each(t.unique(l.getOption("toolbar.placement")), function(e, a) {
                                    "bottom" === a && t(i.pager).clone(!0).insertAfter(o.table), "top" === a && t(i.pager).clone(!0).addClass("kt-datatable__pager--top").insertBefore(o.table)
                                })
                            },
                            gotoMorePage: function(e) {
                                if (e.preventDefault(), "disabled" === t(this).attr("disabled")) return !1;
                                var a = t(this).attr("data-page");
                                return void 0 === a && (a = t(e.target).attr("data-page")), i.openPage(parseInt(a)), !1
                            },
                            gotoPage: function(e) {
                                e.preventDefault(), t(this).hasClass("kt-datatable__pager-link--active") || i.openPage(parseInt(t(this).data("page")))
                            },
                            openPage: function(e) {
                                i.meta.page = parseInt(e), t(o).trigger(i.paginateEvent, i.meta), i.callback(i, i.meta), t(i.pager).trigger("kt-datatable--on-goto-page", i.meta)
                            },
                            updatePerpage: function(e) {
                                e.preventDefault(), i.pager = t(o.table).siblings(".kt-datatable__pager").removeClass("kt-datatable--paging-loaded"), e.originalEvent && (i.meta.perpage = parseInt(t(this).val())), t(i.pager).find("select.kt-datatable__pager-size").val(i.meta.perpage).attr("data-selected", i.meta.perpage), l.setDataSourceParam("pagination", {
                                    page: i.meta.page,
                                    pages: i.meta.pages,
                                    perpage: i.meta.perpage,
                                    total: i.meta.total
                                }), t(i.pager).trigger("kt-datatable--on-update-perpage", i.meta), t(o).trigger(i.paginateEvent, i.meta), i.callback(i, i.meta), i.updateInfo.call()
                            },
                            addPaginateEvent: function(e) {
                                t(o).off(i.paginateEvent).on(i.paginateEvent, function(e, a) {
                                    l.spinnerCallback(!0), i.pager = t(o.table).siblings(".kt-datatable__pager");
                                    var n = t(i.pager).find(".kt-datatable__pager-nav");
                                    t(n).find(".kt-datatable__pager-link--active").removeClass("kt-datatable__pager-link--active"), t(n).find('.kt-datatable__pager-link-number[data-page="' + a.page + '"]').addClass("kt-datatable__pager-link--active"), t(n).find(".kt-datatable__pager-link--prev").attr("data-page", Math.max(a.page - 1, 1)), t(n).find(".kt-datatable__pager-link--next").attr("data-page", Math.min(a.page + 1, a.pages)), t(i.pager).each(function() {
                                        t(this).find('.kt-pager-input[type="text"]').prop("value", a.page)
                                    }), t(i.pager).find(".kt-datatable__pager-nav").show(), a.pages <= 1 && t(i.pager).find(".kt-datatable__pager-nav").hide(), l.setDataSourceParam("pagination", {
                                        page: i.meta.page,
                                        pages: i.meta.pages,
                                        perpage: i.meta.perpage,
                                        total: i.meta.total
                                    }), t(i.pager).find("select.kt-datatable__pager-size").val(a.perpage).attr("data-selected", a.perpage), t(o.table).find('.kt-checkbox > [type="checkbox"]').prop("checked", !1), t(o.table).find(".kt-datatable__row--active").removeClass("kt-datatable__row--active"), i.updateInfo.call(), i.pagingBreakpoint.call()
                                })
                            },
                            updateInfo: function() {
                                var e = Math.max(i.meta.perpage * (i.meta.page - 1) + 1, 1),
                                    a = Math.min(e + i.meta.perpage - 1, i.meta.total);
                                t(i.pager).find(".kt-datatable__pager-info").find(".kt-datatable__pager-detail").html(l.dataPlaceholder(l.getOption("translate.toolbar.pagination.items.info"), {
                                    start: e,
                                    end: -1 === i.meta.perpage ? i.meta.total : a,
                                    pageSize: -1 === i.meta.perpage || i.meta.perpage >= i.meta.total ? i.meta.total : i.meta.perpage,
                                    total: i.meta.total
                                }))
                            },
                            pagingBreakpoint: function() {
                                var e = t(o.table).siblings(".kt-datatable__pager").find(".kt-datatable__pager-nav");
                                if (0 !== t(e).length) {
                                    var n = l.getCurrentPage(),
                                        r = t(e).find(".kt-pager-input").closest("li");
                                    t(e).find("li").show(), t.each(l.getOption("toolbar.items.pagination.pages"), function(o, s) {
                                        if (a.isInResponsiveRange(o)) {
                                            switch (o) {
                                                case "desktop":
                                                case "tablet":
                                                    Math.ceil(n / s.pagesNumber), s.pagesNumber, s.pagesNumber;
                                                    t(r).hide(), i.meta = l.getDataSourceParam("pagination"), i.paginationUpdate();
                                                    break;
                                                case "mobile":
                                                    t(r).show(), t(e).find(".kt-datatable__pager-link--more-prev").closest("li").hide(), t(e).find(".kt-datatable__pager-link--more-next").closest("li").hide(), t(e).find(".kt-datatable__pager-link-number").closest("li").hide()
                                            }
                                            return !1
                                        }
                                    })
                                }
                            },
                            paginationUpdate: function() {
                                var e = t(o.table).siblings(".kt-datatable__pager").find(".kt-datatable__pager-nav"),
                                    a = t(e).find(".kt-datatable__pager-link--more-prev"),
                                    n = t(e).find(".kt-datatable__pager-link--more-next"),
                                    r = t(e).find(".kt-datatable__pager-link--first"),
                                    s = t(e).find(".kt-datatable__pager-link--prev"),
                                    d = t(e).find(".kt-datatable__pager-link--next"),
                                    c = t(e).find(".kt-datatable__pager-link--last"),
                                    u = t(e).find(".kt-datatable__pager-link-number"),
                                    p = Math.max(t(u).first().data("page") - 1, 1);
                                t(a).each(function(e, a) {
                                    t(a).attr("data-page", p)
                                }), 1 === p ? t(a).parent().hide() : t(a).parent().show();
                                var f = Math.min(t(u).last().data("page") + 1, i.meta.pages);
                                t(n).each(function(e, a) {
                                    t(n).attr("data-page", f).show()
                                }), f === i.meta.pages && f === t(u).last().data("page") ? t(n).parent().hide() : t(n).parent().show(), 1 === i.meta.page ? (t(r).attr("disabled", !0).addClass("kt-datatable__pager-link--disabled"), t(s).attr("disabled", !0).addClass("kt-datatable__pager-link--disabled")) : (t(r).removeAttr("disabled").removeClass("kt-datatable__pager-link--disabled"), t(s).removeAttr("disabled").removeClass("kt-datatable__pager-link--disabled")), i.meta.page === i.meta.pages ? (t(d).attr("disabled", !0).addClass("kt-datatable__pager-link--disabled"), t(c).attr("disabled", !0).addClass("kt-datatable__pager-link--disabled")) : (t(d).removeAttr("disabled").removeClass("kt-datatable__pager-link--disabled"), t(c).removeAttr("disabled").removeClass("kt-datatable__pager-link--disabled"));
                                var g = l.getOption("toolbar.items.pagination.navigation");
                                g.first || t(r).remove(), g.prev || t(s).remove(), g.next || t(d).remove(), g.last || t(c).remove(), g.more || (t(a).remove(), t(n).remove())
                            }
                        };
                        return i.init(e), i
                    },
                    columnHide: function() {
                        var e = a.getViewPort().width;
                        t.each(i.columns, function(n, i) {
                            if (void 0 !== i.responsive || void 0 !== i.visible) {
                                var r = i.field,
                                    s = t.grep(t(o.table).find(".kt-datatable__cell"), function(e, a) {
                                        return r === t(e).data("field")
                                    });
                                setTimeout(function() {
                                    !1 === l.getObject("visible", i) ? t(s).hide() : (a.getBreakpoint(l.getObject("responsive.hidden", i)) >= e ? t(s).hide() : t(s).show(), a.getBreakpoint(l.getObject("responsive.visible", i)) <= e ? t(s).show() : t(s).hide())
                                })
                            }
                        })
                    },
                    setupSubDatatable: function() {
                        var e = l.getOption("detail.content");
                        if ("function" == typeof e && !(t(o.table).find(".kt-datatable__subtable").length > 0)) {
                            t(o.wrap).addClass("kt-datatable--subtable"), i.columns[0].subtable = !0;
                            var a = function(a) {
                                    a.preventDefault();
                                    var n = t(this).closest(".kt-datatable__row"),
                                        r = t(n).next(".kt-datatable__row-subtable");
                                    0 === t(r).length && (r = t("<tr/>").addClass("kt-datatable__row-subtable kt-datatable__row-loading").hide().append(t("<td/>").addClass("kt-datatable__subtable").attr("colspan", l.getTotalColumns())), t(n).after(r), t(n).hasClass("kt-datatable__row--even") && t(r).addClass("kt-datatable__row-subtable--even")), t(r).toggle();
                                    var s = t(r).find(".kt-datatable__subtable"),
                                        d = t(this).closest("[data-field]:first-child").find(".kt-datatable__toggle-subtable").data("value"),
                                        c = t(this).find("i").removeAttr("class");
                                    t(n).hasClass("kt-datatable__row--subtable-expanded") ? (t(c).addClass(l.getOption("layout.icons.rowDetail.collapse")), t(n).removeClass("kt-datatable__row--subtable-expanded"), t(o).trigger("kt-datatable--on-collapse-subtable", [n])) : (t(c).addClass(l.getOption("layout.icons.rowDetail.expand")), t(n).addClass("kt-datatable__row--subtable-expanded"), t(o).trigger("kt-datatable--on-expand-subtable", [n])), 0 === t(s).find(".kt-datatable").length && (t.map(o.dataSet, function(t, e) {
                                        return d === t[i.columns[0].field] && (a.data = t, !0)
                                    }), a.detailCell = s, a.parentRow = n, a.subTable = s, e(a), t(s).children(".kt-datatable").on("kt-datatable--on-init", function(e) {
                                        t(r).removeClass("kt-datatable__row-loading")
                                    }), "local" === l.getOption("data.type") && t(r).removeClass("kt-datatable__row-loading"))
                                },
                                n = i.columns;
                            t(o.tableBody).find(".kt-datatable__row").each(function(e, i) {
                                t(i).find(".kt-datatable__cell").each(function(e, i) {
                                    var o = t.grep(n, function(e, a) {
                                        return t(i).data("field") === e.field
                                    })[0];
                                    if (void 0 !== o) {
                                        var r = t(i).text();
                                        if (void 0 !== o.subtable && o.subtable) {
                                            if (t(i).find(".kt-datatable__toggle-subtable").length > 0) return;
                                            t(i).html(t("<a/>").addClass("kt-datatable__toggle-subtable").attr("href", "#").attr("data-value", r).attr("title", l.getOption("detail.title")).on("click", a).append(t("<i/>").css("width", t(i).data("width")).addClass(l.getOption("layout.icons.rowDetail.collapse"))))
                                        }
                                    }
                                })
                            })
                        }
                    },
                    dataMapCallback: function(t) {
                        var e = t;
                        return "function" == typeof l.getOption("data.source.read.map") ? l.getOption("data.source.read.map")(t) : (void 0 !== t && void 0 !== t.data && (e = t.data), e)
                    },
                    isSpinning: !1,
                    spinnerCallback: function(t, e) {
                        void 0 === e && (e = o);
                        var a = l.getOption("layout.spinner");
                        void 0 !== a && a && (t ? l.isSpinning || (void 0 !== a.message && !0 === a.message && (a.message = l.getOption("translate.records.processing")), l.isSpinning = !0, void 0 !== n && n.block(e, a)) : (l.isSpinning = !1, void 0 !== n && n.unblock(e)))
                    },
                    sortCallback: function(e, a, n) {
                        var i = n.type || "string",
                            o = n.format || "",
                            l = n.field;
                        return t(e).sort(function(t, e) {
                            var n = t[l],
                                r = e[l];
                            switch (i) {
                                case "date":
                                    if ("undefined" == typeof moment) throw new Error("Moment.js is required.");
                                    var s = moment(n, o).diff(moment(r, o));
                                    return "asc" === a ? s > 0 ? 1 : s < 0 ? -1 : 0 : s < 0 ? 1 : s > 0 ? -1 : 0;
                                case "number":
                                    return isNaN(parseFloat(n)) && null != n && (n = Number(n.replace(/[^0-9\.-]+/g, ""))), isNaN(parseFloat(r)) && null != r && (r = Number(r.replace(/[^0-9\.-]+/g, ""))), n = parseFloat(n), r = parseFloat(r), "asc" === a ? n > r ? 1 : n < r ? -1 : 0 : n < r ? 1 : n > r ? -1 : 0;
                                case "string":
                                default:
                                    return "asc" === a ? n > r ? 1 : n < r ? -1 : 0 : n < r ? 1 : n > r ? -1 : 0
                            }
                        })
                    },
                    log: function(t, e) {
                        void 0 === e && (e = ""), o.debug && console.log(t, e)
                    },
                    autoHide: function() {
                        var e = !1,
                            a = t(o.table).find("[data-autohide-enabled]");
                        a.length && (e = !0, a.hide());
                        var n = function(e) {
                            e.preventDefault();
                            var a = t(this).closest(".kt-datatable__row"),
                                n = t(a).next();
                            if (t(n).hasClass("kt-datatable__row-detail")) t(this).find("i").removeClass(l.getOption("layout.icons.rowDetail.expand")).addClass(l.getOption("layout.icons.rowDetail.collapse")), t(n).remove();
                            else {
                                t(this).find("i").removeClass(l.getOption("layout.icons.rowDetail.collapse")).addClass(l.getOption("layout.icons.rowDetail.expand"));
                                var o = t(a).find(".kt-datatable__cell:hidden").clone().show();
                                n = t("<tr/>").addClass("kt-datatable__row-detail").insertAfter(a);
                                var r = t("<td/>").addClass("kt-datatable__detail").attr("colspan", l.getTotalColumns()).appendTo(n),
                                    s = t("<table/>");
                                t(o).each(function() {
                                    var e = t(this).data("field"),
                                        a = t.grep(i.columns, function(t, a) {
                                            return e === t.field
                                        })[0];
                                    t(s).append(t('<tr class="kt-datatable__row"></tr>').append(t('<td class="kt-datatable__cell"></td>').append(t("<span/>").append(a.title))).append(this))
                                }), t(r).append(s)
                            }
                        };
                        setTimeout(function() {
                            t(o.table).find(".kt-datatable__cell").show(), t(o.tableBody).each(function() {
                                for (var a = 0; t(this)[0].offsetWidth < t(this)[0].scrollWidth && a < i.columns.length;) t(o.table).find(".kt-datatable__row").each(function(a) {
                                    var n = t(this).find(".kt-datatable__cell:not(:hidden):not([data-autohide-disabled])").last();
                                    t(n).hide(), e = !0
                                }), a++
                            }), e && t(o.tableBody).find(".kt-datatable__row").each(function() {
                                0 === t(this).find(".kt-datatable__toggle-detail").length && t(this).prepend(t("<td/>").addClass("kt-datatable__cell kt-datatable__toggle-detail").append(t("<a/>").addClass("kt-datatable__toggle-detail").attr("href", "").on("click", n).append('<i class="' + l.getOption("layout.icons.rowDetail.collapse") + '"></i>'))), 0 === t(o.tableHead).find(".kt-datatable__toggle-detail").length ? (t(o.tableHead).find(".kt-datatable__row").first().prepend('<th class="kt-datatable__cell kt-datatable__toggle-detail"><span></span></th>'), t(o.tableFoot).find(".kt-datatable__row").first().prepend('<th class="kt-datatable__cell kt-datatable__toggle-detail"><span></span></th>')) : t(o.tableHead).find(".kt-datatable__toggle-detail").find("span")
                            })
                        }), l.adjustCellsWidth.call()
                    },
                    setAutoColumns: function() {
                        l.getOption("data.autoColumns") && (t.each(o.dataSet[0], function(e, a) {
                            0 === t.grep(i.columns, function(t, a) {
                                return e === t.field
                            }).length && i.columns.push({
                                field: e,
                                title: e
                            })
                        }), t(o.tableHead).find(".kt-datatable__row").remove(), l.setHeadTitle(), l.getOption("layout.footer") && (t(o.tableFoot).find(".kt-datatable__row").remove(), l.setHeadTitle(o.tableFoot)))
                    },
                    isLocked: function() {
                        var t = l.lockEnabledColumns();
                        return t.left.length > 0 || t.right.length > 0
                    },
                    isSubtable: function() {
                        return a.hasClass(o.wrap[0], "kt-datatable--subtable") || !1
                    },
                    getExtraSpace: function(e) {
                        return parseInt(t(e).css("paddingRight")) + parseInt(t(e).css("paddingLeft")) + (parseInt(t(e).css("marginRight")) + parseInt(t(e).css("marginLeft"))) + Math.ceil(t(e).css("border-right-width").replace("px", ""))
                    },
                    dataPlaceholder: function(e, a) {
                        var n = e;
                        return t.each(a, function(t, e) {
                            n = n.replace("{{" + t + "}}", e)
                        }), n
                    },
                    getTableId: function(e) {
                        void 0 === e && (e = "");
                        var a = t(o).attr("id");
                        return void 0 === a && (a = t(o).attr("class").split(" ")[0]), a + e
                    },
                    getTablePrefix: function(t) {
                        return void 0 !== t && (t = "-" + t), l.getTableId() + "-" + l.getDepth() + t
                    },
                    getDepth: function() {
                        var e = 0,
                            a = o.table;
                        do {
                            a = t(a).parents(".kt-datatable__table"), e++
                        } while (t(a).length > 0);
                        return e
                    },
                    stateKeep: function(t, e) {
                        t = l.getTablePrefix(t), !1 !== l.getOption("data.saveState") && (l.getOption("data.saveState.webstorage") && localStorage && localStorage.setItem(t, JSON.stringify(e)), l.getOption("data.saveState.cookie") && Cookies.set(t, JSON.stringify(e)))
                    },
                    stateGet: function(t, e) {
                        if (t = l.getTablePrefix(t), !1 !== l.getOption("data.saveState")) {
                            var a = null;
                            return null != (a = l.getOption("data.saveState.webstorage") && localStorage ? localStorage.getItem(t) : Cookies.get(t)) ? JSON.parse(a) : void 0
                        }
                    },
                    stateUpdate: function(e, a) {
                        var n = l.stateGet(e);
                        null == n && (n = {}), l.stateKeep(e, t.extend({}, n, a))
                    },
                    stateRemove: function(t) {
                        t = l.getTablePrefix(t), localStorage && localStorage.removeItem(t), Cookies.remove(t)
                    },
                    getTotalColumns: function(e) {
                        return void 0 === e && (e = o.tableBody), t(e).find(".kt-datatable__row").first().find(".kt-datatable__cell").length
                    },
                    getOneRow: function(e, a, n) {
                        void 0 === n && (n = !0);
                        var i = t(e).find(".kt-datatable__row:not(.kt-datatable__row-detail):nth-child(" + a + ")");
                        return n && (i = i.find(".kt-datatable__cell")), i
                    },
                    sortColumn: function(e, a, n) {
                        void 0 === a && (a = "asc"), void 0 === n && (n = !1);
                        var i = t(e).index(),
                            l = t(o.tableBody).find(".kt-datatable__row"),
                            r = t(e).closest(".kt-datatable__lock").index(); - 1 !== r && (l = t(o.tableBody).find(".kt-datatable__lock:nth-child(" + (r + 1) + ")").find(".kt-datatable__row"));
                        var s = t(l).parent();
                        t(l).sort(function(e, o) {
                            var l = t(e).find("td:nth-child(" + i + ")").text(),
                                r = t(o).find("td:nth-child(" + i + ")").text();
                            return n && (l = parseInt(l), r = parseInt(r)), "asc" === a ? l > r ? 1 : l < r ? -1 : 0 : l < r ? 1 : l > r ? -1 : 0
                        }).appendTo(s)
                    },
                    sorting: function() {
                        var e = {
                            init: function() {
                                i.sortable && (t(o.tableHead).find(".kt-datatable__cell:not(.kt-datatable__cell--check)").addClass("kt-datatable__cell--sort").off("click").on("click", e.sortClick), e.setIcon())
                            },
                            setIcon: function() {
                                var e = l.getDataSourceParam("sort");
                                if (!t.isEmptyObject(e)) {
                                    var a = l.getColumnByField(e.field);
                                    if (void 0 === a || void 0 === a.sortable || !1 !== a.sortable) {
                                        var n = t(o.tableHead).find('.kt-datatable__cell[data-field="' + e.field + '"]').attr("data-sort", e.sort),
                                            i = t(n).find("span"),
                                            r = t(i).find("i"),
                                            s = l.getOption("layout.icons.sort");
                                        t(r).length > 0 ? t(r).removeAttr("class").addClass(s[e.sort]) : t(i).append(t("<i/>").addClass(s[e.sort])), t(n).addClass("kt-datatable__cell--sorted")
                                    }
                                }
                            },
                            sortClick: function(n) {
                                var r = l.getDataSourceParam("sort"),
                                    s = t(this).data("field"),
                                    d = l.getColumnByField(s);
                                if ((void 0 === d.sortable || !1 !== d.sortable) && (t(o.tableHead).find("th").removeClass("kt-datatable__cell--sorted"), a.addClass(this, "kt-datatable__cell--sorted"), t(o.tableHead).find(".kt-datatable__cell > span > i").remove(), i.sortable)) {
                                    l.spinnerCallback(!0);
                                    var c = "desc";
                                    l.getObject("field", r) === s && (c = l.getObject("sort", r)), r = {
                                        field: s,
                                        sort: c = void 0 === c || "desc" === c ? "asc" : "desc"
                                    }, l.setDataSourceParam("sort", r), e.setIcon(), setTimeout(function() {
                                        l.dataRender("sort"), t(o).trigger("kt-datatable--on-sort", r)
                                    }, 300)
                                }
                            }
                        };
                        e.init()
                    },
                    localDataUpdate: function() {
                        var e = l.getDataSourceParam();
                        void 0 === o.originalDataSet && (o.originalDataSet = o.dataSet);
                        var a = l.getObject("sort.field", e),
                            n = l.getObject("sort.sort", e),
                            i = l.getColumnByField(a);
                        if (void 0 !== i && !0 !== l.getOption("data.serverSorting") ? "function" == typeof i.sortCallback ? o.dataSet = i.sortCallback(o.originalDataSet, n, i) : o.dataSet = l.sortCallback(o.originalDataSet, n, i) : o.dataSet = o.originalDataSet, "object" == typeof e.query && !l.getOption("data.serverFiltering")) {
                            e.query = e.query || {};
                            var r = function(t) {
                                    for (var e in t)
                                        if (t.hasOwnProperty(e))
                                            if ("string" == typeof t[e]) {
                                                if (t[e].toLowerCase() == s || -1 !== t[e].toLowerCase().indexOf(s)) return !0
                                            } else if ("number" == typeof t[e]) {
                                        if (t[e] === s) return !0
                                    } else if ("object" == typeof t[e] && r(t[e])) return !0;
                                    return !1
                                },
                                s = t(l.getOption("search.input")).val();
                            void 0 !== s && "" !== s && (s = s.toLowerCase(), o.dataSet = t.grep(o.dataSet, r), delete e.query[l.getGeneralSearchKey()]), t.each(e.query, function(t, a) {
                                "" === a && delete e.query[t]
                            }), o.dataSet = l.filterArray(o.dataSet, e.query), o.dataSet = o.dataSet.filter(function() {
                                return !0
                            })
                        }
                        return o.dataSet
                    },
                    filterArray: function(e, a, n) {
                        if ("object" != typeof e) return [];
                        if (void 0 === n && (n = "AND"), "object" != typeof a) return e;
                        if (n = n.toUpperCase(), -1 === t.inArray(n, ["AND", "OR", "NOT"])) return [];
                        var i = Object.keys(a).length,
                            o = [];
                        return t.each(e, function(e, r) {
                            var s = r,
                                d = 0;
                            t.each(a, function(t, e) {
                                e = e instanceof Array ? e : [e];
                                var a = l.getObject(t, s);
                                if (void 0 !== a && a) {
                                    var n = a.toString().toLowerCase();
                                    e.forEach(function(t, e) {
                                        t.toString().toLowerCase() != n && -1 === n.indexOf(t.toString().toLowerCase()) || d++
                                    })
                                }
                            }), ("AND" == n && d == i || "OR" == n && d > 0 || "NOT" == n && 0 == d) && (o[e] = r)
                        }), e = o
                    },
                    resetScroll: function() {
                        void 0 === i.detail && 1 === l.getDepth() && (t(o.table).find(".kt-datatable__row").css("left", 0), t(o.table).find(".kt-datatable__lock").css("top", 0), t(o.tableBody).scrollTop(0))
                    },
                    getColumnByField: function(e) {
                        var a;
                        if (void 0 !== e) return t.each(i.columns, function(t, n) {
                            if (e === n.field) return a = n, !1
                        }), a
                    },
                    getDefaultSortColumn: function() {
                        var e;
                        return t.each(i.columns, function(a, n) {
                            if (void 0 !== n.sortable && -1 !== t.inArray(n.sortable, ["asc", "desc"])) return e = {
                                sort: n.sortable,
                                field: n.field
                            }, !1
                        }), e
                    },
                    getHiddenDimensions: function(e, a) {
                        var n = {
                                position: "absolute",
                                visibility: "hidden",
                                display: "block"
                            },
                            i = {
                                width: 0,
                                height: 0,
                                innerWidth: 0,
                                innerHeight: 0,
                                outerWidth: 0,
                                outerHeight: 0
                            },
                            o = t(e).parents().addBack().not(":visible");
                        a = "boolean" == typeof a && a;
                        var l = [];
                        return o.each(function() {
                            var t = {};
                            for (var e in n) t[e] = this.style[e], this.style[e] = n[e];
                            l.push(t)
                        }), i.width = t(e).width(), i.outerWidth = t(e).outerWidth(a), i.innerWidth = t(e).innerWidth(), i.height = t(e).height(), i.innerHeight = t(e).innerHeight(), i.outerHeight = t(e).outerHeight(a), o.each(function(t) {
                            var e = l[t];
                            for (var a in n) this.style[a] = e[a]
                        }), i
                    },
                    getGeneralSearchKey: function() {
                        var e = t(l.getOption("search.input"));
                        return t(e).prop("name") || t(e).prop("id")
                    },
                    getObject: function(t, e) {
                        return t.split(".").reduce(function(t, e) {
                            return null !== t && void 0 !== t[e] ? t[e] : null
                        }, e)
                    },
                    extendObj: function(t, e, a) {
                        var n = e.split("."),
                            i = 0;
                        return function t(e) {
                            var o = n[i++];
                            void 0 !== e[o] && null !== e[o] ? "object" != typeof e[o] && "function" != typeof e[o] && (e[o] = {}) : e[o] = {}, i === n.length ? e[o] = a : t(e[o])
                        }(t), t
                    },
                    rowEvenOdd: function() {
                        t(o.tableBody).find(".kt-datatable__row").removeClass("kt-datatable__row--even"), t(o.wrap).hasClass("kt-datatable--subtable") ? t(o.tableBody).find(".kt-datatable__row:not(.kt-datatable__row-detail):even").addClass("kt-datatable__row--even") : t(o.tableBody).find(".kt-datatable__row:nth-child(even)").addClass("kt-datatable__row--even")
                    },
                    timer: 0,
                    redraw: function() {
                        return l.adjustCellsWidth.call(), l.isLocked() && (l.scrollbar(), l.resetScroll(), l.adjustCellsHeight.call()), l.adjustLockContainer.call(), l.initHeight.call(), o
                    },
                    load: function() {
                        return l.reload(), o
                    },
                    reload: function() {
                        return function(t, e) {
                            clearTimeout(l.timer), l.timer = setTimeout(t, e)
                        }(function() {
                            i.data.serverFiltering || l.localDataUpdate(), l.dataRender(), t(o).trigger("kt-datatable--on-reloaded")
                        }, l.getOption("search.delay")), o
                    },
                    getRecord: function(e) {
                        return void 0 === o.tableBody && (o.tableBody = t(o.table).children("tbody")), t(o.tableBody).find(".kt-datatable__cell:first-child").each(function(a, n) {
                            if (e == t(n).text()) {
                                var i = t(n).closest(".kt-datatable__row").index() + 1;
                                return o.API.record = o.API.value = l.getOneRow(o.tableBody, i), o
                            }
                        }), o
                    },
                    getColumn: function(e) {
                        return l.setSelectedRecords(), o.API.value = t(o.API.record).find('[data-field="' + e + '"]'), o
                    },
                    destroy: function() {
                        t(o).parent().find(".kt-datatable__pager").remove();
                        var e = t(o.initialDatatable).addClass("kt-datatable--destroyed").show();
                        return t(o).replaceWith(e), t(o = e).trigger("kt-datatable--on-destroy"), l.isInit = !1, e = null
                    },
                    sort: function(e, a) {
                        a = void 0 === a ? "asc" : a, l.spinnerCallback(!0);
                        var n = {
                            field: e,
                            sort: a
                        };
                        return l.setDataSourceParam("sort", n), setTimeout(function() {
                            l.dataRender("sort"), t(o).trigger("kt-datatable--on-sort", n), t(o.tableHead).find(".kt-datatable__cell > span > i").remove()
                        }, 300), o
                    },
                    getValue: function() {
                        return t(o.API.value).text()
                    },
                    setActive: function(e) {
                        "string" == typeof e && (e = t(o.tableBody).find('.kt-checkbox--single > [type="checkbox"][value="' + e + '"]')), t(e).prop("checked", !0);
                        var a = [];
                        t(e).each(function(e, n) {
                            var i = t(n).closest("tr").addClass("kt-datatable__row--active"),
                                o = t(i).index() + 1;
                            t(i).closest("tbody").find("tr:nth-child(" + o + ")").not(".kt-datatable__row-subtable").addClass("kt-datatable__row--active");
                            var l = t(n).attr("value");
                            void 0 !== l && a.push(l)
                        }), t(o).trigger("kt-datatable--on-check", [a])
                    },
                    setInactive: function(e) {
                        "string" == typeof e && (e = t(o.tableBody).find('.kt-checkbox--single > [type="checkbox"][value="' + e + '"]')), t(e).prop("checked", !1);
                        var a = [];
                        t(e).each(function(e, n) {
                            var i = t(n).closest("tr").removeClass("kt-datatable__row--active"),
                                o = t(i).index() + 1;
                            t(i).closest("tbody").find("tr:nth-child(" + o + ")").not(".kt-datatable__row-subtable").removeClass("kt-datatable__row--active");
                            var l = t(n).attr("value");
                            void 0 !== l && a.push(l)
                        }), t(o).trigger("kt-datatable--on-uncheck", [a])
                    },
                    setActiveAll: function(e) {
                        var a = t(o.table).find("> tbody, > thead").find("tr").not(".kt-datatable__row-subtable").find('.kt-datatable__cell--check [type="checkbox"]');
                        e ? l.setActive(a) : l.setInactive(a)
                    },
                    setSelectedRecords: function() {
                        return o.API.record = t(o.tableBody).find(".kt-datatable__row--active"), o
                    },
                    getSelectedRecords: function() {
                        return l.setSelectedRecords(), o.API.record = o.rows(".kt-datatable__row--active").nodes(), o.API.record
                    },
                    getOption: function(t) {
                        return l.getObject(t, i)
                    },
                    setOption: function(t, e) {
                        i = l.extendObj(i, t, e)
                    },
                    search: function(e, a) {
                        void 0 !== a && (a = t.makeArray(a)), n = function() {
                            var n = l.getDataSourceQuery();
                            if (void 0 === a && void 0 !== e) {
                                var o = l.getGeneralSearchKey();
                                n[o] = e
                            }
                            "object" == typeof a && (t.each(a, function(t, a) {
                                n[a] = e
                            }), t.each(n, function(e, a) {
                                ("" === a || t.isEmptyObject(a)) && delete n[e]
                            })), l.setDataSourceQuery(n), i.data.serverFiltering || l.localDataUpdate(), l.dataRender("search")
                        }, o = l.getOption("search.delay"), clearTimeout(l.timer), l.timer = setTimeout(n, o);
                        var n, o
                    },
                    setDataSourceParam: function(e, a) {
                        o.API.params = t.extend({}, {
                            pagination: {
                                page: 1,
                                perpage: l.getOption("data.pageSize")
                            },
                            sort: l.getDefaultSortColumn(),
                            query: {}
                        }, o.API.params, l.stateGet(l.stateId)), o.API.params = l.extendObj(o.API.params, e, a), l.stateKeep(l.stateId, o.API.params)
                    },
                    getDataSourceParam: function(e) {
                        return o.API.params = t.extend({}, {
                            pagination: {
                                page: 1,
                                perpage: l.getOption("data.pageSize")
                            },
                            sort: l.getDefaultSortColumn(),
                            query: {}
                        }, o.API.params, l.stateGet(l.stateId)), "string" == typeof e ? l.getObject(e, o.API.params) : o.API.params
                    },
                    getDataSourceQuery: function() {
                        return l.getDataSourceParam("query") || {}
                    },
                    setDataSourceQuery: function(t) {
                        l.setDataSourceParam("query", t)
                    },
                    getCurrentPage: function() {
                        return t(o.table).siblings(".kt-datatable__pager").last().find(".kt-datatable__pager-nav").find(".kt-datatable__pager-link.kt-datatable__pager-link--active").data("page") || 1
                    },
                    getPageSize: function() {
                        return t(o.table).siblings(".kt-datatable__pager").last().find("select.kt-datatable__pager-size").val() || 10
                    },
                    getTotalRows: function() {
                        return o.API.params.pagination.total
                    },
                    getDataSet: function() {
                        return o.originalDataSet
                    },
                    nodeTr: [],
                    nodeTd: [],
                    nodeCols: [],
                    recentNode: [],
                    table: function() {
                        if (void 0 !== o.table) return o.table
                    },
                    row: function(e) {
                        return l.rows(e), l.nodeTr = l.recentNode = t(l.nodeTr).first(), o
                    },
                    rows: function(e) {
                        return l.isLocked() ? l.nodeTr = l.recentNode = t(o.tableBody).find(e).filter(".kt-datatable__lock--scroll > .kt-datatable__row") : l.nodeTr = l.recentNode = t(o.tableBody).find(e).filter(".kt-datatable__row"), o
                    },
                    column: function(e) {
                        return l.nodeCols = l.recentNode = t(o.tableBody).find(".kt-datatable__cell:nth-child(" + (e + 1) + ")"), o
                    },
                    columns: function(e) {
                        var a = o.table;
                        l.nodeTr === l.recentNode && (a = l.nodeTr);
                        var n = t(a).find('.kt-datatable__cell[data-field="' + e + '"]');
                        return n.length > 0 ? l.nodeCols = l.recentNode = n : l.nodeCols = l.recentNode = t(a).find(e).filter(".kt-datatable__cell"), o
                    },
                    cell: function(e) {
                        return l.cells(e), l.nodeTd = l.recentNode = t(l.nodeTd).first(), o
                    },
                    cells: function(e) {
                        var a = t(o.tableBody).find(".kt-datatable__cell");
                        return void 0 !== e && (a = t(a).filter(e)), l.nodeTd = l.recentNode = a, o
                    },
                    remove: function() {
                        return t(l.nodeTr.length) && l.nodeTr === l.recentNode && t(l.nodeTr).remove(), l.layoutUpdate(), o
                    },
                    visible: function(e) {
                        if (t(l.recentNode.length)) {
                            var a = l.lockEnabledColumns();
                            if (l.recentNode === l.nodeCols) {
                                var n = l.recentNode.index();
                                if (l.isLocked()) {
                                    var o = t(l.recentNode).closest(".kt-datatable__lock--scroll").length;
                                    o ? n += a.left.length + 1 : t(l.recentNode).closest(".kt-datatable__lock--right").length && (n += a.left.length + o + 1)
                                }
                            }
                            e ? (l.recentNode === l.nodeCols && delete i.columns[n].visible, t(l.recentNode).show()) : (l.recentNode === l.nodeCols && l.setOption("columns." + n + ".visible", !1), t(l.recentNode).hide()), l.columnHide(), l.redraw()
                        }
                    },
                    nodes: function() {
                        return l.recentNode
                    },
                    dataset: function() {
                        return o
                    },
                    gotoPage: function(t) {
                        void 0 !== l.pagingObject && (l.isInit = !0, l.pagingObject.openPage(t))
                    }
                };
                if (t.each(l, function(t, e) {
                        o[t] = e
                    }), void 0 !== i)
                    if ("string" == typeof i) {
                        var r = i;
                        void 0 !== (o = t(this).data(e)) && (i = o.options, l[r].apply(this, Array.prototype.slice.call(arguments, 1)))
                    } else o.data(e) || t(this).hasClass("kt-datatable--loaded") || (o.dataSet = null, o.textAlign = {
                        left: "kt-datatable__cell--left",
                        center: "kt-datatable__cell--center",
                        right: "kt-datatable__cell--right"
                    }, i = t.extend(!0, {}, t.fn.KTDatatable.defaults, i), o.options = i, l.init.apply(this, [i]), t(o.wrap).data(e, o));
                else void 0 === (o = t(this).data(e)) && t.error("KTDatatable not initialized"), i = o.options;
                return o
            }
            console.warn("No KTDatatable element exist.")
        }, t.fn.KTDatatable.defaults = {
            data: {
                type: "local",
                source: null,
                pageSize: 10,
                saveState: {
                    cookie: !1,
                    webstorage: !0
                },
                serverPaging: !1,
                serverFiltering: !1,
                serverSorting: !1,
                autoColumns: !1,
                attr: {
                    rowProps: []
                }
            },
            layout: {
                theme: "default",
                class: "kt-datatable--brand",
                scroll: !1,
                height: null,
                minHeight: 500,
                footer: !1,
                header: !0,
                customScrollbar: !0,
                spinner: {
                    overlayColor: "#000000",
                    opacity: 0,
                    type: "loader",
                    state: "brand",
                    message: !0
                },
                icons: {
                    sort: {
                        asc: "flaticon2-arrow-up",
                        desc: "flaticon2-arrow-down"
                    },
                    pagination: {
                        next: "flaticon2-next",
                        prev: "flaticon2-back",
                        first: "flaticon2-fast-back",
                        last: "flaticon2-fast-next",
                        more: "flaticon-more-1"
                    },
                    rowDetail: {
                        expand: "fa fa-caret-down",
                        collapse: "fa fa-caret-right"
                    }
                }
            },
            sortable: !0,
            resizable: !1,
            filterable: !1,
            pagination: !0,
            editable: !1,
            columns: [],
            search: {
                onEnter: !1,
                input: null,
                delay: 400
            },
            rows: {
                callback: function() {},
                beforeTemplate: function() {},
                afterTemplate: function() {},
                autoHide: !0
            },
            toolbar: {
                layout: ["pagination", "info"],
                placement: ["bottom"],
                items: {
                    pagination: {
                        type: "default",
                        pages: {
                            desktop: {
                                layout: "default",
                                pagesNumber: 5
                            },
                            tablet: {
                                layout: "default",
                                pagesNumber: 3
                            },
                            mobile: {
                                layout: "compact"
                            }
                        },
                        navigation: {
                            prev: !0,
                            next: !0,
                            first: !0,
                            last: !0,
                            more: !1
                        },
                        pageSizeSelect: []
                    },
                    info: !0
                }
            },
            translate: {
                records: {
                    processing: "Please wait...",
                    noRecords: "No records found"
                },
                toolbar: {
                    pagination: {
                        items: {
                            default: {
                                first: "First",
                                prev: "Previous",
                                next: "Next",
                                last: "Last",
                                more: "More pages",
                                input: "Page number",
                                select: "Select page size",
                                all: "all"
                            },
                            info: "Showing {{start}} - {{end}} of {{total}}"
                        }
                    }
                }
            },
            extensions: {}
        }
    }(jQuery),
    function(t) {
        t.fn.KTDatatable = t.fn.KTDatatable || {}, t.fn.KTDatatable.checkbox = function(e, a) {
            var n = {
                selectedAllRows: !1,
                selectedRows: [],
                unselectedRows: [],
                init: function() {
                    n.selectorEnabled() && (e.setDataSourceParam(a.vars.selectedAllRows, !1), e.stateRemove("checkbox"), a.vars.requestIds && e.setDataSourceParam(a.vars.requestIds, !0), t(e).on("kt-datatable--on-reloaded", function() {
                        e.stateRemove("checkbox"), e.setDataSourceParam(a.vars.selectedAllRows, !1), n.selectedAllRows = !1, n.selectedRows = [], n.unselectedRows = []
                    }), n.selectedAllRows = e.getDataSourceParam(a.vars.selectedAllRows), t(e).on("kt-datatable--on-layout-updated", function(a, i) {
                        i.table == t(e.wrap).attr("id") && e.ready(function() {
                            n.initVars(), n.initEvent(), n.initSelect()
                        })
                    }), t(e).on("kt-datatable--on-check", function(a, i) {
                        i.forEach(function(t) {
                            n.selectedRows.push(t), n.unselectedRows = n.remove(n.unselectedRows, t)
                        });
                        var o = {};
                        o.selectedRows = t.unique(n.selectedRows), o.unselectedRows = t.unique(n.unselectedRows), e.stateKeep("checkbox", o)
                    }), t(e).on("kt-datatable--on-uncheck", function(a, i) {
                        i.forEach(function(t) {
                            n.unselectedRows.push(t), n.selectedRows = n.remove(n.selectedRows, t)
                        });
                        var o = {};
                        o.selectedRows = t.unique(n.selectedRows), o.unselectedRows = t.unique(n.unselectedRows), e.stateKeep("checkbox", o)
                    }))
                },
                initEvent: function() {
                    t(e.tableHead).find('.kt-checkbox--all > [type="checkbox"]').click(function(i) {
                        if (n.selectedRows = n.unselectedRows = [], e.stateRemove("checkbox"), t(this).is(":checked") ? n.selectedAllRows = !0 : n.selectedAllRows = !1, !a.vars.requestIds) {
                            t(this).is(":checked") && (n.selectedRows = t.makeArray(t(e.tableBody).find('.kt-checkbox--single > [type="checkbox"]').map(function(e, a) {
                                return t(a).val()
                            })));
                            var o = {};
                            o.selectedRows = t.unique(n.selectedRows), e.stateKeep("checkbox", o)
                        }
                        e.setDataSourceParam(a.vars.selectedAllRows, n.selectedAllRows), t(e).trigger("kt-datatable--on-click-checkbox", [t(this)])
                    }), t(e.tableBody).find('.kt-checkbox--single > [type="checkbox"]').click(function(i) {
                        var o = t(this).val();
                        t(this).is(":checked") ? (n.selectedRows.push(o), n.unselectedRows = n.remove(n.unselectedRows, o)) : (n.unselectedRows.push(o), n.selectedRows = n.remove(n.selectedRows, o)), !a.vars.requestIds && n.selectedRows.length < 1 && t(e.tableHead).find('.kt-checkbox--all > [type="checkbox"]').prop("checked", !1);
                        var l = {};
                        l.selectedRows = t.unique(n.selectedRows), l.unselectedRows = t.unique(n.unselectedRows), e.stateKeep("checkbox", l), t(e).trigger("kt-datatable--on-click-checkbox", [t(this)])
                    })
                },
                initSelect: function() {
                    n.selectedAllRows && a.vars.requestIds ? (e.hasClass("kt-datatable--error") || t(e.tableHead).find('.kt-checkbox--all > [type="checkbox"]').prop("checked", !0), e.setActiveAll(!0), n.unselectedRows.forEach(function(t) {
                        e.setInactive(t)
                    })) : (n.selectedRows.forEach(function(t) {
                        e.setActive(t)
                    }), !e.hasClass("kt-datatable--error") && t(e.tableBody).find('.kt-checkbox--single > [type="checkbox"]').not(":checked").length < 1 && t(e.tableHead).find('.kt-checkbox--all > [type="checkbox"]').prop("checked", !0))
                },
                selectorEnabled: function() {
                    return t.grep(e.options.columns, function(t, e) {
                        return t.selector || !1
                    })[0]
                },
                initVars: function() {
                    var t = e.stateGet("checkbox");
                    void 0 !== t && (n.selectedRows = t.selectedRows || [], n.unselectedRows = t.unselectedRows || [])
                },
                getSelectedId: function(t) {
                    if (n.initVars(), n.selectedAllRows && a.vars.requestIds) {
                        void 0 === t && (t = a.vars.rowIds);
                        var i = e.getObject(t, e.lastResponse) || [];
                        return i.length > 0 && n.unselectedRows.forEach(function(t) {
                            i = n.remove(i, parseInt(t))
                        }), i
                    }
                    return n.selectedRows
                },
                remove: function(t, e) {
                    return t.filter(function(t) {
                        return t !== e
                    })
                }
            };
            return e.checkbox = function() {
                return n
            }, "object" == typeof a && (a = t.extend(!0, {}, t.fn.KTDatatable.checkbox.default, a), n.init.apply(this, [a])), e
        }, t.fn.KTDatatable.checkbox.default = {
            vars: {
                selectedAllRows: "selectedAllRows",
                requestIds: "requestIds",
                rowIds: "meta.rowIds"
            }
        }
    }(jQuery);
var defaults = {
    layout: {
        icons: {
            pagination: {
                next: "flaticon2-next",
                prev: "flaticon2-back",
                first: "flaticon2-fast-back",
                last: "flaticon2-fast-next",
                more: "flaticon-more-1"
            },
            rowDetail: {
                expand: "fa fa-caret-down",
                collapse: "fa fa-caret-right"
            }
        }
    }
};
KTUtil.isRTL() && (defaults = {
    layout: {
        icons: {
            pagination: {
                next: "flaticon2-back",
                prev: "flaticon2-next",
                first: "flaticon2-fast-next",
                last: "flaticon2-fast-back"
            },
            rowDetail: {
                collapse: "fa fa-caret-down",
                expand: "fa fa-caret-right"
            }
        }
    }
}), $.extend(!0, $.fn.KTDatatable.defaults, defaults);
var KTAvatar = function(t, e) {
        var a = this,
            n = KTUtil.get(t);
        KTUtil.get("body");
        if (n) {
            var i = {},
                o = {
                    construct: function(t) {
                        return KTUtil.data(n).has("avatar") ? a = KTUtil.data(n).get("avatar") : (o.init(t), o.build(), KTUtil.data(n).set("avatar", a)), a
                    },
                    init: function(t) {
                        a.element = n, a.events = [], a.input = KTUtil.find(n, 'input[type="file"]'), a.holder = KTUtil.find(n, ".kt-avatar__holder"), a.cancel = KTUtil.find(n, ".kt-avatar__cancel"), a.src = KTUtil.css(a.holder, "backgroundImage"), a.options = KTUtil.deepExtend({}, i, t)
                    },
                    build: function() {
                        KTUtil.addEvent(a.input, "change", function(t) {
                            if (t.preventDefault(), a.input && a.input.files && a.input.files[0]) {
                                var e = new FileReader;
                                e.onload = function(t) {
                                    KTUtil.css(a.holder, "background-image", "url(" + t.target.result + ")")
                                }, e.readAsDataURL(a.input.files[0]), KTUtil.addClass(a.element, "kt-avatar--changed")
                            }
                        }), KTUtil.addEvent(a.cancel, "click", function(t) {
                            t.preventDefault(), KTUtil.removeClass(a.element, "kt-avatar--changed"), KTUtil.css(a.holder, "background-image", a.src), a.input.value = ""
                        })
                    },
                    eventTrigger: function(t) {
                        for (var e = 0; e < a.events.length; e++) {
                            var n = a.events[e];
                            n.name == t && (1 == n.one ? 0 == n.fired && (a.events[e].fired = !0, n.handler.call(this, a)) : n.handler.call(this, a))
                        }
                    },
                    addEvent: function(t, e, n) {
                        return a.events.push({
                            name: t,
                            handler: e,
                            one: n,
                            fired: !1
                        }), a
                    }
                };
            return a.setDefaults = function(t) {
                i = t
            }, a.on = function(t, e) {
                return o.addEvent(t, e)
            }, a.one = function(t, e) {
                return o.addEvent(t, e, !0)
            }, o.construct.apply(a, [e]), a
        }
    },
    KTDialog = function(t) {
        var e, a = this,
            n = KTUtil.get("body"),
            i = {
                placement: "top center",
                type: "loader",
                width: 100,
                state: "default",
                message: "Loading..."
            },
            o = {
                construct: function(t) {
                    return o.init(t), a
                },
                init: function(t) {
                    a.events = [], a.options = KTUtil.deepExtend({}, i, t), a.state = !1
                },
                show: function() {
                    return o.eventTrigger("show"), e = document.createElement("DIV"), KTUtil.setHTML(e, a.options.message), KTUtil.addClass(e, "kt-dialog kt-dialog--shown"), KTUtil.addClass(e, "kt-dialog--" + a.options.state), KTUtil.addClass(e, "kt-dialog--" + a.options.type), "top center" == a.options.placement && KTUtil.addClass(e, "kt-dialog--top-center"), n.appendChild(e), a.state = "shown", o.eventTrigger("shown"), a
                },
                hide: function() {
                    return e && (o.eventTrigger("hide"), e.remove(), a.state = "hidden", o.eventTrigger("hidden")), a
                },
                eventTrigger: function(t) {
                    for (var e = 0; e < a.events.length; e++) {
                        var n = a.events[e];
                        n.name == t && (1 == n.one ? 0 == n.fired && (a.events[e].fired = !0, n.handler.call(this, a)) : n.handler.call(this, a))
                    }
                },
                addEvent: function(t, e, n) {
                    return a.events.push({
                        name: t,
                        handler: e,
                        one: n,
                        fired: !1
                    }), a
                }
            };
        return a.setDefaults = function(t) {
            i = t
        }, a.shown = function() {
            return "shown" == a.state
        }, a.hidden = function() {
            return "hidden" == a.state
        }, a.show = function() {
            return o.show()
        }, a.hide = function() {
            return o.hide()
        }, a.on = function(t, e) {
            return o.addEvent(t, e)
        }, a.one = function(t, e) {
            return o.addEvent(t, e, !0)
        }, o.construct.apply(a, [t]), a
    },
    KTHeader = function(t, e) {
        var a = this,
            n = KTUtil.get(t),
            i = KTUtil.get("body");
        if (void 0 !== n) {
            var o = {
                    classic: !1,
                    offset: {
                        mobile: 150,
                        desktop: 200
                    },
                    minimize: {
                        mobile: !1,
                        desktop: !1
                    }
                },
                l = {
                    construct: function(t) {
                        return KTUtil.data(n).has("header") ? a = KTUtil.data(n).get("header") : (l.init(t), l.build(), KTUtil.data(n).set("header", a)), a
                    },
                    init: function(t) {
                        a.events = [], a.options = KTUtil.deepExtend({}, o, t)
                    },
                    build: function() {
                        var t = 0,
                            e = !0;
                        KTUtil.getViewPort().height;
                        !1 === a.options.minimize.mobile && !1 === a.options.minimize.desktop || window.addEventListener("scroll", function() {
                            var n, o, r, s = 0;
                            KTUtil.isInResponsiveRange("desktop") ? (s = a.options.offset.desktop, n = a.options.minimize.desktop.on, o = a.options.minimize.desktop.off) : KTUtil.isInResponsiveRange("tablet-and-mobile") && (s = a.options.offset.mobile, n = a.options.minimize.mobile.on, o = a.options.minimize.mobile.off), r = window.pageYOffset, KTUtil.isInResponsiveRange("tablet-and-mobile") && a.options.classic && a.options.classic.mobile || KTUtil.isInResponsiveRange("desktop") && a.options.classic && a.options.classic.desktop ? r > s ? (KTUtil.addClass(i, n), KTUtil.removeClass(i, o), e && (l.eventTrigger("minimizeOn", a), e = !1)) : (KTUtil.addClass(i, o), KTUtil.removeClass(i, n), 0 == e && (l.eventTrigger("minimizeOff", a), e = !0)) : (r > s && t < r ? (KTUtil.addClass(i, n), KTUtil.removeClass(i, o), e && (l.eventTrigger("minimizeOn", a), e = !1)) : (KTUtil.addClass(i, o), KTUtil.removeClass(i, n), 0 == e && (l.eventTrigger("minimizeOff", a), e = !0)), t = r)
                        })
                    },
                    eventTrigger: function(t, e) {
                        for (var n = 0; n < a.events.length; n++) {
                            var i = a.events[n];
                            i.name == t && (1 == i.one ? 0 == i.fired && (a.events[n].fired = !0, i.handler.call(this, a, e)) : i.handler.call(this, a, e))
                        }
                    },
                    addEvent: function(t, e, n) {
                        a.events.push({
                            name: t,
                            handler: e,
                            one: n,
                            fired: !1
                        })
                    }
                };
            return a.setDefaults = function(t) {
                o = t
            }, a.on = function(t, e) {
                return l.addEvent(t, e)
            }, l.construct.apply(a, [e]), !0, a
        }
    },
    KTMenu = function(t, e) {
        var a = this,
            n = !1,
            i = KTUtil.get(t),
            o = KTUtil.get("body");
        if (i) {
            var l = {
                    scroll: {
                        rememberPosition: !1
                    },
                    accordion: {
                        slideSpeed: 200,
                        autoScroll: !1,
                        autoScrollSpeed: 1200,
                        expandAll: !0
                    },
                    dropdown: {
                        timeout: 500
                    }
                },
                r = {
                    construct: function(t) {
                        return KTUtil.data(i).has("menu") ? a = KTUtil.data(i).get("menu") : (r.init(t), r.reset(), r.build(), KTUtil.data(i).set("menu", a)), a
                    },
                    init: function(t) {
                        a.events = [], a.eventHandlers = {}, a.options = KTUtil.deepExtend({}, l, t), a.pauseDropdownHoverTime = 0, a.uid = KTUtil.getUniqueID()
                    },
                    update: function(t) {
                        a.options = KTUtil.deepExtend({}, l, t), a.pauseDropdownHoverTime = 0, r.reset(), a.eventHandlers = {}, r.build(), KTUtil.data(i).set("menu", a)
                    },
                    reload: function() {
                        r.reset(), r.build(), r.resetSubmenuProps()
                    },
                    build: function() {
                        a.eventHandlers.event_1 = KTUtil.on(i, ".kt-menu__toggle", "click", r.handleSubmenuAccordion), ("dropdown" === r.getSubmenuMode() || r.isConditionalSubmenuDropdown()) && (a.eventHandlers.event_2 = KTUtil.on(i, '[data-ktmenu-submenu-toggle="hover"]', "mouseover", r.handleSubmenuDrodownHoverEnter), a.eventHandlers.event_3 = KTUtil.on(i, '[data-ktmenu-submenu-toggle="hover"]', "mouseout", r.handleSubmenuDrodownHoverExit), a.eventHandlers.event_4 = KTUtil.on(i, '[data-ktmenu-submenu-toggle="click"] > .kt-menu__toggle, [data-ktmenu-submenu-toggle="click"] > .kt-menu__link .kt-menu__toggle', "click", r.handleSubmenuDropdownClick), a.eventHandlers.event_5 = KTUtil.on(i, '[data-ktmenu-submenu-toggle="tab"] > .kt-menu__toggle, [data-ktmenu-submenu-toggle="tab"] > .kt-menu__link .kt-menu__toggle', "click", r.handleSubmenuDropdownTabClick)), a.eventHandlers.event_6 = KTUtil.on(i, ".kt-menu__item > .kt-menu__link:not(.kt-menu__toggle):not(.kt-menu__link--toggle-skip)", "click", r.handleLinkClick), a.options.scroll && a.options.scroll.height && r.scrollInit()
                    },
                    reset: function() {
                        KTUtil.off(i, "click", a.eventHandlers.event_1), KTUtil.off(i, "mouseover", a.eventHandlers.event_2), KTUtil.off(i, "mouseout", a.eventHandlers.event_3), KTUtil.off(i, "click", a.eventHandlers.event_4), KTUtil.off(i, "click", a.eventHandlers.event_5), KTUtil.off(i, "click", a.eventHandlers.event_6)
                    },
                    scrollInit: function() {
                        a.options.scroll && a.options.scroll.height ? (KTUtil.scrollDestroy(i), KTUtil.scrollInit(i, {
                            mobileNativeScroll: !0,
                            windowScroll: !1,
                            resetHeightOnDestroy: !0,
                            handleWindowResize: !0,
                            height: a.options.scroll.height,
                            rememberPosition: a.options.scroll.rememberPosition
                        })) : KTUtil.scrollDestroy(i)
                    },
                    scrollUpdate: function() {
                        a.options.scroll && a.options.scroll.height && KTUtil.scrollUpdate(i)
                    },
                    scrollTop: function() {
                        a.options.scroll && a.options.scroll.height && KTUtil.scrollTop(i)
                    },
                    getSubmenuMode: function(t) {
                        return KTUtil.isInResponsiveRange("desktop") ? t && KTUtil.hasAttr(t, "data-ktmenu-submenu-toggle") && "hover" == KTUtil.attr(t, "data-ktmenu-submenu-toggle") ? "dropdown" : KTUtil.isset(a.options.submenu, "desktop.state.body") ? KTUtil.hasClasses(o, a.options.submenu.desktop.state.body) ? a.options.submenu.desktop.state.mode : a.options.submenu.desktop.default : KTUtil.isset(a.options.submenu, "desktop") ? a.options.submenu.desktop : void 0 : KTUtil.isInResponsiveRange("tablet") && KTUtil.isset(a.options.submenu, "tablet") ? a.options.submenu.tablet : !(!KTUtil.isInResponsiveRange("mobile") || !KTUtil.isset(a.options.submenu, "mobile")) && a.options.submenu.mobile
                    },
                    isConditionalSubmenuDropdown: function() {
                        return !(!KTUtil.isInResponsiveRange("desktop") || !KTUtil.isset(a.options.submenu, "desktop.state.body"))
                    },
                    resetSubmenuProps: function(t) {
                        var e = KTUtil.findAll(i, ".kt-menu__submenu");
                        if (e)
                            for (var a = 0, n = e.length; a < n; a++) KTUtil.css(e[0], "display", ""), KTUtil.css(e[0], "overflow", "")
                    },
                    handleSubmenuDrodownHoverEnter: function(t) {
                        if ("accordion" !== r.getSubmenuMode(this) && !1 !== a.resumeDropdownHover()) {
                            "1" == this.getAttribute("data-hover") && (this.removeAttribute("data-hover"), clearTimeout(this.getAttribute("data-timeout")), this.removeAttribute("data-timeout")), r.showSubmenuDropdown(this)
                        }
                    },
                    handleSubmenuDrodownHoverExit: function(t) {
                        if (!1 !== a.resumeDropdownHover() && "accordion" !== r.getSubmenuMode(this)) {
                            var e = this,
                                n = a.options.dropdown.timeout,
                                i = setTimeout(function() {
                                    "1" == e.getAttribute("data-hover") && r.hideSubmenuDropdown(e, !0)
                                }, n);
                            e.setAttribute("data-hover", "1"), e.setAttribute("data-timeout", i)
                        }
                    },
                    handleSubmenuDropdownClick: function(t) {
                        if ("accordion" !== r.getSubmenuMode(this)) {
                            var e = this.closest(".kt-menu__item");
                            "accordion" != e.getAttribute("data-ktmenu-submenu-mode") && (!1 === KTUtil.hasClass(e, "kt-menu__item--hover") ? (KTUtil.addClass(e, "kt-menu__item--open-dropdown"), r.showSubmenuDropdown(e)) : (KTUtil.removeClass(e, "kt-menu__item--open-dropdown"), r.hideSubmenuDropdown(e, !0)), t.preventDefault())
                        }
                    },
                    handleSubmenuDropdownTabClick: function(t) {
                        if ("accordion" !== r.getSubmenuMode(this)) {
                            var e = this.closest(".kt-menu__item");
                            "accordion" != e.getAttribute("data-ktmenu-submenu-mode") && (0 == KTUtil.hasClass(e, "kt-menu__item--hover") && (KTUtil.addClass(e, "kt-menu__item--open-dropdown"), r.showSubmenuDropdown(e)), t.preventDefault())
                        }
                    },
                    handleLinkClick: function(t) {
                        var e = this.closest(".kt-menu__item.kt-menu__item--submenu");
                        !1 !== r.eventTrigger("linkClick", this, t) && e && "dropdown" === r.getSubmenuMode(e) && r.hideSubmenuDropdowns()
                    },
                    handleSubmenuDropdownClose: function(t, e) {
                        if ("accordion" !== r.getSubmenuMode(e)) {
                            var a = i.querySelectorAll(".kt-menu__item.kt-menu__item--submenu.kt-menu__item--hover:not(.kt-menu__item--tabs)");
                            if (a.length > 0 && !1 === KTUtil.hasClass(e, "kt-menu__toggle") && 0 === e.querySelectorAll(".kt-menu__toggle").length)
                                for (var n = 0, o = a.length; n < o; n++) r.hideSubmenuDropdown(a[0], !0)
                        }
                    },
                    handleSubmenuAccordion: function(t, e) {
                        var n, i = e || this;
                        if ("dropdown" === r.getSubmenuMode(e) && (n = i.closest(".kt-menu__item")) && "accordion" != n.getAttribute("data-ktmenu-submenu-mode")) t.preventDefault();
                        else {
                            var o = i.closest(".kt-menu__item"),
                                l = KTUtil.child(o, ".kt-menu__submenu, .kt-menu__inner");
                            if (!KTUtil.hasClass(i.closest(".kt-menu__item"), "kt-menu__item--open-always") && o && l) {
                                t.preventDefault();
                                var s = a.options.accordion.slideSpeed;
                                if (!1 === KTUtil.hasClass(o, "kt-menu__item--open")) {
                                    if (!1 === a.options.accordion.expandAll) {
                                        var d = i.closest(".kt-menu__nav, .kt-menu__subnav"),
                                            c = KTUtil.children(d, ".kt-menu__item.kt-menu__item--open.kt-menu__item--submenu:not(.kt-menu__item--here):not(.kt-menu__item--open-always)");
                                        if (d && c)
                                            for (var u = 0, p = c.length; u < p; u++) {
                                                var f = c[0],
                                                    g = KTUtil.child(f, ".kt-menu__submenu");
                                                g && KTUtil.slideUp(g, s, function() {
                                                    r.scrollUpdate(), KTUtil.removeClass(f, "kt-menu__item--open")
                                                })
                                            }
                                    }
                                    KTUtil.slideDown(l, s, function() {
                                        r.scrollToItem(i), r.scrollUpdate(), r.eventTrigger("submenuToggle", l, t)
                                    }), KTUtil.addClass(o, "kt-menu__item--open")
                                } else KTUtil.slideUp(l, s, function() {
                                    r.scrollToItem(i), r.eventTrigger("submenuToggle", l, t)
                                }), KTUtil.removeClass(o, "kt-menu__item--open")
                            }
                        }
                    },
                    scrollToItem: function(t) {
                        KTUtil.isInResponsiveRange("desktop") && a.options.accordion.autoScroll && "1" !== i.getAttribute("data-ktmenu-scroll") && KTUtil.scrollTo(t, a.options.accordion.autoScrollSpeed)
                    },
                    hideSubmenuDropdown: function(t, e) {
                        e && (KTUtil.removeClass(t, "kt-menu__item--hover"), KTUtil.removeClass(t, "kt-menu__item--active-tab")), t.removeAttribute("data-hover"), t.getAttribute("data-ktmenu-dropdown-toggle-class") && KTUtil.removeClass(o, t.getAttribute("data-ktmenu-dropdown-toggle-class"));
                        var a = t.getAttribute("data-timeout");
                        t.removeAttribute("data-timeout"), clearTimeout(a)
                    },
                    hideSubmenuDropdowns: function() {
                        var t;
                        if (t = i.querySelectorAll('.kt-menu__item--submenu.kt-menu__item--hover:not(.kt-menu__item--tabs):not([data-ktmenu-submenu-toggle="tab"])'))
                            for (var e = 0, a = t.length; e < a; e++) r.hideSubmenuDropdown(t[e], !0)
                    },
                    showSubmenuDropdown: function(t) {
                        var e = i.querySelectorAll(".kt-menu__item--submenu.kt-menu__item--hover, .kt-menu__item--submenu.kt-menu__item--active-tab");
                        if (e)
                            for (var a = 0, n = e.length; a < n; a++) {
                                var l = e[a];
                                t !== l && !1 === l.contains(t) && !1 === t.contains(l) && r.hideSubmenuDropdown(l, !0)
                            }
                        KTUtil.addClass(t, "kt-menu__item--hover"), t.getAttribute("data-ktmenu-dropdown-toggle-class") && KTUtil.addClass(o, t.getAttribute("data-ktmenu-dropdown-toggle-class"))
                    },
                    createSubmenuDropdownClickDropoff: function(t) {
                        var e, a = (e = KTUtil.child(t, ".kt-menu__submenu") ? KTUtil.css(e, "z-index") : 0) - 1,
                            n = document.createElement('<div class="kt-menu__dropoff" style="background: transparent; position: fixed; top: 0; bottom: 0; left: 0; right: 0; z-index: ' + a + '"></div>');
                        o.appendChild(n), KTUtil.addEvent(n, "click", function(e) {
                            e.stopPropagation(), e.preventDefault(), KTUtil.remove(this), r.hideSubmenuDropdown(t, !0)
                        })
                    },
                    pauseDropdownHover: function(t) {
                        var e = new Date;
                        a.pauseDropdownHoverTime = e.getTime() + t
                    },
                    resumeDropdownHover: function() {
                        return (new Date).getTime() > a.pauseDropdownHoverTime
                    },
                    resetActiveItem: function(t) {
                        for (var e, n, o = 0, l = (e = i.querySelectorAll(".kt-menu__item--active")).length; o < l; o++) {
                            var r = e[0];
                            KTUtil.removeClass(r, "kt-menu__item--active"), KTUtil.hide(KTUtil.child(r, ".kt-menu__submenu"));
                            for (var s = 0, d = (n = KTUtil.parents(r, ".kt-menu__item--submenu") || []).length; s < d; s++) {
                                var c = n[o];
                                KTUtil.removeClass(c, "kt-menu__item--open"), KTUtil.hide(KTUtil.child(c, ".kt-menu__submenu"))
                            }
                        }
                        if (!1 === a.options.accordion.expandAll && (e = i.querySelectorAll(".kt-menu__item--open")))
                            for (o = 0, l = e.length; o < l; o++) KTUtil.removeClass(n[0], "kt-menu__item--open")
                    },
                    setActiveItem: function(t) {
                        r.resetActiveItem();
                        for (var e = KTUtil.parents(t, ".kt-menu__item--submenu") || [], a = 0, n = e.length; a < n; a++) KTUtil.addClass(KTUtil.get(e[a]), "kt-menu__item--open");
                        KTUtil.addClass(KTUtil.get(t), "kt-menu__item--active")
                    },
                    getBreadcrumbs: function(t) {
                        var e, a = [],
                            n = KTUtil.child(t, ".kt-menu__link");
                        a.push({
                            text: e = KTUtil.child(n, ".kt-menu__link-text") ? e.innerHTML : "",
                            title: n.getAttribute("title"),
                            href: n.getAttribute("href")
                        });
                        for (var i = KTUtil.parents(t, ".kt-menu__item--submenu"), o = 0, l = i.length; o < l; o++) {
                            var r = KTUtil.child(i[o], ".kt-menu__link");
                            a.push({
                                text: e = KTUtil.child(r, ".kt-menu__link-text") ? e.innerHTML : "",
                                title: r.getAttribute("title"),
                                href: r.getAttribute("href")
                            })
                        }
                        return a.reverse()
                    },
                    getPageTitle: function(t) {
                        var e;
                        return KTUtil.child(t, ".kt-menu__link-text") ? e.innerHTML : ""
                    },
                    eventTrigger: function(t, e, n) {
                        for (var i = 0; i < a.events.length; i++) {
                            var o = a.events[i];
                            if (o.name == t) {
                                if (1 != o.one) return o.handler.call(this, e, n);
                                if (0 == o.fired) return a.events[i].fired = !0, o.handler.call(this, e, n)
                            }
                        }
                    },
                    addEvent: function(t, e, n) {
                        a.events.push({
                            name: t,
                            handler: e,
                            one: n,
                            fired: !1
                        })
                    },
                    removeEvent: function(t) {
                        a.events[t] && delete a.events[t]
                    }
                };
            return a.setDefaults = function(t) {
                l = t
            }, a.scrollUpdate = function() {
                return r.scrollUpdate()
            }, a.scrollReInit = function() {
                return r.scrollInit()
            }, a.scrollTop = function() {
                return r.scrollTop()
            }, a.setActiveItem = function(t) {
                return r.setActiveItem(t)
            }, a.reload = function() {
                return r.reload()
            }, a.update = function(t) {
                return r.update(t)
            }, a.getBreadcrumbs = function(t) {
                return r.getBreadcrumbs(t)
            }, a.getPageTitle = function(t) {
                return r.getPageTitle(t)
            }, a.getSubmenuMode = function(t) {
                return r.getSubmenuMode(t)
            }, a.hideDropdown = function(t) {
                r.hideSubmenuDropdown(t, !0)
            }, a.hideDropdowns = function() {
                r.hideSubmenuDropdowns()
            }, a.pauseDropdownHover = function(t) {
                r.pauseDropdownHover(t)
            }, a.resumeDropdownHover = function() {
                return r.resumeDropdownHover()
            }, a.on = function(t, e) {
                return r.addEvent(t, e)
            }, a.off = function(t) {
                return r.removeEvent(t)
            }, a.one = function(t, e) {
                return r.addEvent(t, e, !0)
            }, r.construct.apply(a, [e]), KTUtil.addResizeHandler(function() {
                n && a.reload()
            }), n = !0, a
        }
    };
document.addEventListener("click", function(t) {
    var e;
    if (e = KTUtil.get("body").querySelectorAll('.kt-menu__nav .kt-menu__item.kt-menu__item--submenu.kt-menu__item--hover:not(.kt-menu__item--tabs)[data-ktmenu-submenu-toggle="click"]'))
        for (var a = 0, n = e.length; a < n; a++) {
            var i = e[a].closest(".kt-menu__nav").parentNode;
            if (i) {
                var o = KTUtil.data(i).get("menu");
                if (!o) break;
                if (!o || "dropdown" !== o.getSubmenuMode()) break;
                t.target !== i && !1 === i.contains(t.target) && o.hideDropdowns()
            }
        }
});
var KTOffcanvas = function(t, e) {
        var a = this,
            n = KTUtil.get(t),
            i = KTUtil.get("body");
        if (n) {
            var o = {},
                l = {
                    construct: function(t) {
                        return KTUtil.data(n).has("offcanvas") ? a = KTUtil.data(n).get("offcanvas") : (l.init(t), l.build(), KTUtil.data(n).set("offcanvas", a)), a
                    },
                    init: function(t) {
                        a.events = [], a.options = KTUtil.deepExtend({}, o, t), a.overlay, a.classBase = a.options.baseClass, a.classShown = a.classBase + "--on", a.classOverlay = a.classBase + "-overlay", a.state = KTUtil.hasClass(n, a.classShown) ? "shown" : "hidden"
                    },
                    build: function() {
                        if (a.options.toggleBy)
                            if ("string" == typeof a.options.toggleBy) KTUtil.addEvent(a.options.toggleBy, "click", function(t) {
                                t.preventDefault(), l.toggle()
                            });
                            else if (a.options.toggleBy && a.options.toggleBy[0])
                            if (a.options.toggleBy[0].target)
                                for (var t in a.options.toggleBy) KTUtil.addEvent(a.options.toggleBy[t].target, "click", function(t) {
                                    t.preventDefault(), l.toggle()
                                });
                            else
                                for (var t in a.options.toggleBy) KTUtil.addEvent(a.options.toggleBy[t], "click", function(t) {
                                    t.preventDefault(), l.toggle()
                                });
                        else a.options.toggleBy && a.options.toggleBy.target && KTUtil.addEvent(a.options.toggleBy.target, "click", function(t) {
                            t.preventDefault(), l.toggle()
                        });
                        var e = KTUtil.get(a.options.closeBy);
                        e && KTUtil.addEvent(e, "click", function(t) {
                            t.preventDefault(), l.hide()
                        }), KTUtil.addResizeHandler(function() {
                            (parseInt(KTUtil.css(n, "left")) >= 0 || parseInt(KTUtil.css(n, "right") >= 0) || "fixed" != KTUtil.css(n, "position")) && KTUtil.css(n, "opacity", "1")
                        })
                    },
                    isShown: function(t) {
                        return "shown" == a.state
                    },
                    toggle: function() {
                        l.eventTrigger("toggle"), "shown" == a.state ? l.hide(this) : l.show(this)
                    },
                    show: function(t) {
                        "shown" != a.state && (l.eventTrigger("beforeShow"), l.togglerClass(t, "show"), KTUtil.addClass(i, a.classShown), KTUtil.addClass(n, a.classShown), KTUtil.css(n, "opacity", "1"), a.state = "shown", a.options.overlay && (a.overlay = KTUtil.insertAfter(document.createElement("DIV"), n), KTUtil.addClass(a.overlay, a.classOverlay), KTUtil.addEvent(a.overlay, "click", function(e) {
                            e.stopPropagation(), e.preventDefault(), l.hide(t)
                        })), l.eventTrigger("afterShow"))
                    },
                    hide: function(t) {
                        "hidden" != a.state && (l.eventTrigger("beforeHide"), l.togglerClass(t, "hide"), KTUtil.removeClass(i, a.classShown), KTUtil.removeClass(n, a.classShown), a.state = "hidden", a.options.overlay && a.overlay && KTUtil.remove(a.overlay), KTUtil.transitionEnd(n, function() {
                            KTUtil.css(n, "opacity", "0")
                        }), l.eventTrigger("afterHide"))
                    },
                    togglerClass: function(t, e) {
                        var n, i = KTUtil.attr(t, "id");
                        if (a.options.toggleBy && a.options.toggleBy[0] && a.options.toggleBy[0].target)
                            for (var o in a.options.toggleBy) a.options.toggleBy[o].target === i && (n = a.options.toggleBy[o]);
                        else a.options.toggleBy && a.options.toggleBy.target && (n = a.options.toggleBy);
                        if (n) {
                            var l = KTUtil.get(n.target);
                            "show" === e && KTUtil.addClass(l, n.state), "hide" === e && KTUtil.removeClass(l, n.state)
                        }
                    },
                    eventTrigger: function(t, e) {
                        for (var n = 0; n < a.events.length; n++) {
                            var i = a.events[n];
                            i.name == t && (1 == i.one ? 0 == i.fired && (a.events[n].fired = !0, i.handler.call(this, a, e)) : i.handler.call(this, a, e))
                        }
                    },
                    addEvent: function(t, e, n) {
                        a.events.push({
                            name: t,
                            handler: e,
                            one: n,
                            fired: !1
                        })
                    }
                };
            return a.setDefaults = function(t) {
                o = t
            }, a.isShown = function() {
                return l.isShown()
            }, a.hide = function() {
                return l.hide()
            }, a.show = function() {
                return l.show()
            }, a.on = function(t, e) {
                return l.addEvent(t, e)
            }, a.one = function(t, e) {
                return l.addEvent(t, e, !0)
            }, l.construct.apply(a, [e]), !0, a
        }
    },
    KTPortlet = function(t, e) {
        var a = this,
            n = KTUtil.get(t),
            i = KTUtil.get("body");
        if (n) {
            var o = {
                    bodyToggleSpeed: 400,
                    tooltips: !0,
                    tools: {
                        toggle: {
                            collapse: "Collapse",
                            expand: "Expand"
                        },
                        reload: "Reload",
                        remove: "Remove",
                        fullscreen: {
                            on: "Fullscreen",
                            off: "Exit Fullscreen"
                        }
                    },
                    sticky: {
                        offset: 300,
                        zIndex: 101
                    }
                },
                l = {
                    construct: function(t) {
                        return KTUtil.data(n).has("portlet") ? a = KTUtil.data(n).get("portlet") : (l.init(t), l.build(), KTUtil.data(n).set("portlet", a)), a
                    },
                    init: function(t) {
                        a.element = n, a.events = [], a.options = KTUtil.deepExtend({}, o, t), a.head = KTUtil.child(n, ".kt-portlet__head"), a.foot = KTUtil.child(n, ".kt-portlet__foot"), KTUtil.child(n, ".kt-portlet__body") ? a.body = KTUtil.child(n, ".kt-portlet__body") : KTUtil.child(n, ".kt-form") && (a.body = KTUtil.child(n, ".kt-form"))
                    },
                    build: function() {
                        var t = KTUtil.find(a.head, "[data-ktportlet-tool=remove]");
                        t && KTUtil.addEvent(t, "click", function(t) {
                            t.preventDefault(), l.remove()
                        });
                        var e = KTUtil.find(a.head, "[data-ktportlet-tool=reload]");
                        e && KTUtil.addEvent(e, "click", function(t) {
                            t.preventDefault(), l.reload()
                        });
                        var n = KTUtil.find(a.head, "[data-ktportlet-tool=toggle]");
                        n && KTUtil.addEvent(n, "click", function(t) {
                            t.preventDefault(), l.toggle()
                        });
                        var i = KTUtil.find(a.head, "[data-ktportlet-tool=fullscreen]");
                        i && KTUtil.addEvent(i, "click", function(t) {
                            t.preventDefault(), l.fullscreen()
                        }), l.setupTooltips()
                    },
                    initSticky: function() {
                        a.options.sticky.offset;
                        a.head && window.addEventListener("scroll", l.onScrollSticky)
                    },
                    onScrollSticky: function(t) {
                        var e = a.options.sticky.offset;
                        if (!isNaN(e)) {
                            var o = document.documentElement.scrollTop;
                            o >= e && !1 === KTUtil.hasClass(i, "kt-portlet--sticky") ? (l.eventTrigger("stickyOn"), KTUtil.addClass(i, "kt-portlet--sticky"), KTUtil.addClass(n, "kt-portlet--sticky"), l.updateSticky()) : 1.5 * o <= e && KTUtil.hasClass(i, "kt-portlet--sticky") && (l.eventTrigger("stickyOff"), KTUtil.removeClass(i, "kt-portlet--sticky"), KTUtil.removeClass(n, "kt-portlet--sticky"), l.resetSticky())
                        }
                    },
                    updateSticky: function() {
                        var t, e, n;
                        a.head && (KTUtil.hasClass(i, "kt-portlet--sticky") && (t = a.options.sticky.position.top instanceof Function ? parseInt(a.options.sticky.position.top.call(this, a)) : parseInt(a.options.sticky.position.top), e = a.options.sticky.position.left instanceof Function ? parseInt(a.options.sticky.position.left.call(this, a)) : parseInt(a.options.sticky.position.left), n = a.options.sticky.position.right instanceof Function ? parseInt(a.options.sticky.position.right.call(this, a)) : parseInt(a.options.sticky.position.right), KTUtil.css(a.head, "z-index", a.options.sticky.zIndex), KTUtil.css(a.head, "top", t + "px"), KTUtil.css(a.head, "left", e + "px"), KTUtil.css(a.head, "right", n + "px")))
                    },
                    resetSticky: function() {
                        a.head && !1 === KTUtil.hasClass(i, "kt-portlet--sticky") && (KTUtil.css(a.head, "z-index", ""), KTUtil.css(a.head, "top", ""), KTUtil.css(a.head, "left", ""), KTUtil.css(a.head, "right", ""))
                    },
                    remove: function() {
                        !1 !== l.eventTrigger("beforeRemove") && (KTUtil.hasClass(i, "kt-portlet--fullscreen") && KTUtil.hasClass(n, "kt-portlet--fullscreen") && l.fullscreen("off"), l.removeTooltips(), KTUtil.remove(n), l.eventTrigger("afterRemove"))
                    },
                    setContent: function(t) {
                        t && (a.body.innerHTML = t)
                    },
                    getBody: function() {
                        return a.body
                    },
                    getSelf: function() {
                        return n
                    },
                    setupTooltips: function() {
                        if (a.options.tooltips) {
                            var t = KTUtil.hasClass(n, "kt-portlet--collapse") || KTUtil.hasClass(n, "kt-portlet--collapsed"),
                                e = KTUtil.hasClass(i, "kt-portlet--fullscreen") && KTUtil.hasClass(n, "kt-portlet--fullscreen"),
                                o = KTUtil.find(a.head, "[data-ktportlet-tool=remove]");
                            if (o) {
                                var l = e ? "bottom" : "top",
                                    r = new Tooltip(o, {
                                        title: a.options.tools.remove,
                                        placement: l,
                                        offset: e ? "0,10px,0,0" : "0,5px",
                                        trigger: "hover",
                                        template: '<div class="tooltip tooltip-portlet tooltip bs-tooltip-' + l + '" role="tooltip">                            <div class="tooltip-arrow arrow"></div>                            <div class="tooltip-inner"></div>                        </div>'
                                    });
                                KTUtil.data(o).set("tooltip", r)
                            }
                            var s = KTUtil.find(a.head, "[data-ktportlet-tool=reload]");
                            if (s) {
                                l = e ? "bottom" : "top", r = new Tooltip(s, {
                                    title: a.options.tools.reload,
                                    placement: l,
                                    offset: e ? "0,10px,0,0" : "0,5px",
                                    trigger: "hover",
                                    template: '<div class="tooltip tooltip-portlet tooltip bs-tooltip-' + l + '" role="tooltip">                            <div class="tooltip-arrow arrow"></div>                            <div class="tooltip-inner"></div>                        </div>'
                                });
                                KTUtil.data(s).set("tooltip", r)
                            }
                            var d = KTUtil.find(a.head, "[data-ktportlet-tool=toggle]");
                            if (d) {
                                l = e ? "bottom" : "top", r = new Tooltip(d, {
                                    title: t ? a.options.tools.toggle.expand : a.options.tools.toggle.collapse,
                                    placement: l,
                                    offset: e ? "0,10px,0,0" : "0,5px",
                                    trigger: "hover",
                                    template: '<div class="tooltip tooltip-portlet tooltip bs-tooltip-' + l + '" role="tooltip">                            <div class="tooltip-arrow arrow"></div>                            <div class="tooltip-inner"></div>                        </div>'
                                });
                                KTUtil.data(d).set("tooltip", r)
                            }
                            var c = KTUtil.find(a.head, "[data-ktportlet-tool=fullscreen]");
                            if (c) {
                                l = e ? "bottom" : "top", r = new Tooltip(c, {
                                    title: e ? a.options.tools.fullscreen.off : a.options.tools.fullscreen.on,
                                    placement: l,
                                    offset: e ? "0,10px,0,0" : "0,5px",
                                    trigger: "hover",
                                    template: '<div class="tooltip tooltip-portlet tooltip bs-tooltip-' + l + '" role="tooltip">                            <div class="tooltip-arrow arrow"></div>                            <div class="tooltip-inner"></div>                        </div>'
                                });
                                KTUtil.data(c).set("tooltip", r)
                            }
                        }
                    },
                    removeTooltips: function() {
                        if (a.options.tooltips) {
                            var t = KTUtil.find(a.head, "[data-ktportlet-tool=remove]");
                            t && KTUtil.data(t).has("tooltip") && KTUtil.data(t).get("tooltip").dispose();
                            var e = KTUtil.find(a.head, "[data-ktportlet-tool=reload]");
                            e && KTUtil.data(e).has("tooltip") && KTUtil.data(e).get("tooltip").dispose();
                            var n = KTUtil.find(a.head, "[data-ktportlet-tool=toggle]");
                            n && KTUtil.data(n).has("tooltip") && KTUtil.data(n).get("tooltip").dispose();
                            var i = KTUtil.find(a.head, "[data-ktportlet-tool=fullscreen]");
                            i && KTUtil.data(i).has("tooltip") && KTUtil.data(i).get("tooltip").dispose()
                        }
                    },
                    reload: function() {
                        l.eventTrigger("reload")
                    },
                    toggle: function() {
                        KTUtil.hasClass(n, "kt-portlet--collapse") || KTUtil.hasClass(n, "kt-portlet--collapsed") ? l.expand() : l.collapse()
                    },
                    collapse: function() {
                        if (!1 !== l.eventTrigger("beforeCollapse")) {
                            KTUtil.slideUp(a.body, a.options.bodyToggleSpeed, function() {
                                l.eventTrigger("afterCollapse")
                            }), KTUtil.addClass(n, "kt-portlet--collapse");
                            var t = KTUtil.find(a.head, "[data-ktportlet-tool=toggle]");
                            t && KTUtil.data(t).has("tooltip") && KTUtil.data(t).get("tooltip").updateTitleContent(a.options.tools.toggle.expand)
                        }
                    },
                    expand: function() {
                        if (!1 !== l.eventTrigger("beforeExpand")) {
                            KTUtil.slideDown(a.body, a.options.bodyToggleSpeed, function() {
                                l.eventTrigger("afterExpand")
                            }), KTUtil.removeClass(n, "kt-portlet--collapse"), KTUtil.removeClass(n, "kt-portlet--collapsed");
                            var t = KTUtil.find(a.head, "[data-ktportlet-tool=toggle]");
                            t && KTUtil.data(t).has("tooltip") && KTUtil.data(t).get("tooltip").updateTitleContent(a.options.tools.toggle.collapse)
                        }
                    },
                    fullscreen: function(t) {
                        if ("off" === t || KTUtil.hasClass(i, "kt-portlet--fullscreen") && KTUtil.hasClass(n, "kt-portlet--fullscreen")) l.eventTrigger("beforeFullscreenOff"), KTUtil.removeClass(i, "kt-portlet--fullscreen"), KTUtil.removeClass(n, "kt-portlet--fullscreen"), l.removeTooltips(), l.setupTooltips(), a.foot && (KTUtil.css(a.body, "margin-bottom", ""), KTUtil.css(a.foot, "margin-top", "")), l.eventTrigger("afterFullscreenOff");
                        else {
                            if (l.eventTrigger("beforeFullscreenOn"), KTUtil.addClass(n, "kt-portlet--fullscreen"), KTUtil.addClass(i, "kt-portlet--fullscreen"), l.removeTooltips(), l.setupTooltips(), a.foot) {
                                var e = parseInt(KTUtil.css(a.foot, "height")),
                                    o = parseInt(KTUtil.css(a.foot, "height")) + parseInt(KTUtil.css(a.head, "height"));
                                KTUtil.css(a.body, "margin-bottom", e + "px"), KTUtil.css(a.foot, "margin-top", "-" + o + "px")
                            }
                            l.eventTrigger("afterFullscreenOn")
                        }
                    },
                    eventTrigger: function(t) {
                        for (var e = 0; e < a.events.length; e++) {
                            var n = a.events[e];
                            n.name == t && (1 == n.one ? 0 == n.fired && (a.events[e].fired = !0, n.handler.call(this, a)) : n.handler.call(this, a))
                        }
                    },
                    addEvent: function(t, e, n) {
                        return a.events.push({
                            name: t,
                            handler: e,
                            one: n,
                            fired: !1
                        }), a
                    }
                };
            return a.setDefaults = function(t) {
                o = t
            }, a.remove = function() {
                return l.remove(html)
            }, a.initSticky = function() {
                return l.initSticky()
            }, a.updateSticky = function() {
                return l.updateSticky()
            }, a.resetSticky = function() {
                return l.resetSticky()
            }, a.destroySticky = function() {
                l.resetSticky(), window.removeEventListener("scroll", l.onScrollSticky)
            }, a.reload = function() {
                return l.reload()
            }, a.setContent = function(t) {
                return l.setContent(t)
            }, a.toggle = function() {
                return l.toggle()
            }, a.collapse = function() {
                return l.collapse()
            }, a.expand = function() {
                return l.expand()
            }, a.fullscreen = function() {
                return l.fullscreen("on")
            }, a.unFullscreen = function() {
                return l.fullscreen("off")
            }, a.getBody = function() {
                return l.getBody()
            }, a.getSelf = function() {
                return l.getSelf()
            }, a.on = function(t, e) {
                return l.addEvent(t, e)
            }, a.one = function(t, e) {
                return l.addEvent(t, e, !0)
            }, l.construct.apply(a, [e]), a
        }
    },
    KTScrolltop = function(t, e) {
        var a = this,
            n = KTUtil.get(t),
            i = KTUtil.get("body");
        if (n) {
            var o = {
                    offset: 300,
                    speed: 600,
                    toggleClass: "kt-scrolltop--on"
                },
                l = {
                    construct: function(t) {
                        return KTUtil.data(n).has("scrolltop") ? a = KTUtil.data(n).get("scrolltop") : (l.init(t), l.build(), KTUtil.data(n).set("scrolltop", a)), a
                    },
                    init: function(t) {
                        a.events = [], a.options = KTUtil.deepExtend({}, o, t)
                    },
                    build: function() {
                        navigator.userAgent.match(/iPhone|iPad|iPod/i) ? (window.addEventListener("touchend", function() {
                            l.handle()
                        }), window.addEventListener("touchcancel", function() {
                            l.handle()
                        }), window.addEventListener("touchleave", function() {
                            l.handle()
                        })) : window.addEventListener("scroll", function() {
                            l.handle()
                        }), KTUtil.addEvent(n, "click", l.scroll)
                    },
                    handle: function() {
                        window.pageYOffset > a.options.offset ? KTUtil.addClass(i, a.options.toggleClass) : KTUtil.removeClass(i, a.options.toggleClass)
                    },
                    scroll: function(t) {
                        t.preventDefault(), KTUtil.scrollTop(0, a.options.speed)
                    },
                    eventTrigger: function(t, e) {
                        for (var n = 0; n < a.events.length; n++) {
                            var i = a.events[n];
                            i.name == t && (1 == i.one ? 0 == i.fired && (a.events[n].fired = !0, i.handler.call(this, a, e)) : i.handler.call(this, a, e))
                        }
                    },
                    addEvent: function(t, e, n) {
                        a.events.push({
                            name: t,
                            handler: e,
                            one: n,
                            fired: !1
                        })
                    }
                };
            return a.setDefaults = function(t) {
                o = t
            }, a.on = function(t, e) {
                return l.addEvent(t, e)
            }, a.one = function(t, e) {
                return l.addEvent(t, e, !0)
            }, l.construct.apply(a, [e]), !0, a
        }
    },
    KTToggle = function(t, e) {
        var a = this,
            n = KTUtil.get(t);
        KTUtil.get("body");
        if (n) {
            var i = {
                    togglerState: "",
                    targetState: ""
                },
                o = {
                    construct: function(t) {
                        return KTUtil.data(n).has("toggle") ? a = KTUtil.data(n).get("toggle") : (o.init(t), o.build(), KTUtil.data(n).set("toggle", a)), a
                    },
                    init: function(t) {
                        a.element = n, a.events = [], a.options = KTUtil.deepExtend({}, i, t), a.target = KTUtil.get(a.options.target), a.targetState = a.options.targetState, a.togglerState = a.options.togglerState, a.state = KTUtil.hasClasses(a.target, a.targetState) ? "on" : "off"
                    },
                    build: function() {
                        KTUtil.addEvent(n, "mouseup", o.toggle)
                    },
                    toggle: function(t) {
                        return o.eventTrigger("beforeToggle"), "off" == a.state ? o.toggleOn() : o.toggleOff(), o.eventTrigger("afterToggle"), t.preventDefault(), a
                    },
                    toggleOn: function() {
                        return o.eventTrigger("beforeOn"), KTUtil.addClass(a.target, a.targetState), a.togglerState && KTUtil.addClass(n, a.togglerState), a.state = "on", o.eventTrigger("afterOn"), o.eventTrigger("toggle"), a
                    },
                    toggleOff: function() {
                        return o.eventTrigger("beforeOff"), KTUtil.removeClass(a.target, a.targetState), a.togglerState && KTUtil.removeClass(n, a.togglerState), a.state = "off", o.eventTrigger("afterOff"), o.eventTrigger("toggle"), a
                    },
                    eventTrigger: function(t) {
                        for (var e = 0; e < a.events.length; e++) {
                            var n = a.events[e];
                            n.name == t && (1 == n.one ? 0 == n.fired && (a.events[e].fired = !0, n.handler.call(this, a)) : n.handler.call(this, a))
                        }
                    },
                    addEvent: function(t, e, n) {
                        return a.events.push({
                            name: t,
                            handler: e,
                            one: n,
                            fired: !1
                        }), a
                    }
                };
            return a.setDefaults = function(t) {
                i = t
            }, a.getState = function() {
                return a.state
            }, a.toggle = function() {
                return o.toggle()
            }, a.toggleOn = function() {
                return o.toggleOn()
            }, a.toggleOff = function() {
                return o.toggleOff()
            }, a.on = function(t, e) {
                return o.addEvent(t, e)
            }, a.one = function(t, e) {
                return o.addEvent(t, e, !0)
            }, o.construct.apply(a, [e]), a
        }
    },
    KTWizard = function(t, e) {
        var a = this,
            n = KTUtil.get(t);
        KTUtil.get("body");
        if (n) {
            var i = {
                    startStep: 1,
                    manualStepForward: !1
                },
                o = {
                    construct: function(t) {
                        return KTUtil.data(n).has("wizard") ? a = KTUtil.data(n).get("wizard") : (o.init(t), o.build(), KTUtil.data(n).set("wizard", a)), a
                    },
                    init: function(t) {
                        a.element = n, a.events = [], a.options = KTUtil.deepExtend({}, i, t), a.steps = KTUtil.findAll(n, '[data-ktwizard-type="step"]'), a.btnSubmit = KTUtil.find(n, '[data-ktwizard-type="action-submit"]'), a.btnNext = KTUtil.find(n, '[data-ktwizard-type="action-next"]'), a.btnPrev = KTUtil.find(n, '[data-ktwizard-type="action-prev"]'), a.btnLast = KTUtil.find(n, '[data-ktwizard-type="action-last"]'), a.btnFirst = KTUtil.find(n, '[data-ktwizard-type="action-first"]'), a.events = [], a.currentStep = 1, a.stopped = !1, a.totalSteps = a.steps.length, a.options.startStep > 1 && o.goTo(a.options.startStep), o.updateUI()
                    },
                    build: function() {
                        KTUtil.addEvent(a.btnNext, "click", function(t) {
                            t.preventDefault(), o.goNext()
                        }), KTUtil.addEvent(a.btnPrev, "click", function(t) {
                            t.preventDefault(), o.goPrev()
                        }), KTUtil.addEvent(a.btnFirst, "click", function(t) {
                            t.preventDefault(), o.goFirst()
                        }), KTUtil.addEvent(a.btnLast, "click", function(t) {
                            t.preventDefault(), o.goLast()
                        }), KTUtil.on(n, 'a[data-ktwizard-type="step"]', "click", function() {
                            var t = KTUtil.index(this) + 1;
                            t !== a.currentStep && o.goTo(t)
                        })
                    },
                    goTo: function(t) {
                        if (!(t === a.currentStep || t > a.totalSteps || t < 0)) {
                            var e;
                            if (e = (t = t ? parseInt(t) : o.getNextStep()) > a.currentStep ? o.eventTrigger("beforeNext") : o.eventTrigger("beforePrev"), !0 !== a.stopped) return !1 !== e && (o.eventTrigger("beforeChange"), a.currentStep = t, o.updateUI(), o.eventTrigger("change")), t > a.startStep ? o.eventTrigger("afterNext") : o.eventTrigger("afterPrev"), a;
                            a.stopped = !1
                        }
                    },
                    stop: function() {
                        a.stopped = !0
                    },
                    start: function() {
                        a.stopped = !1
                    },
                    isLastStep: function() {
                        return a.currentStep === a.totalSteps
                    },
                    isFirstStep: function() {
                        return 1 === a.currentStep
                    },
                    isBetweenStep: function() {
                        return !1 === o.isLastStep() && !1 === o.isFirstStep()
                    },
                    goNext: function() {
                        return o.goTo(o.getNextStep())
                    },
                    goPrev: function() {
                        return o.goTo(o.getPrevStep())
                    },
                    goLast: function() {
                        return o.goTo(a.totalSteps)
                    },
                    goFirst: function() {
                        return o.goTo(1)
                    },
                    updateUI: function() {
                        var t = "",
                            e = a.currentStep - 1;
                        t = o.isLastStep() ? "last" : o.isFirstStep() ? "first" : "between", KTUtil.attr(a.element, "data-ktwizard-state", t);
                        var n = KTUtil.findAll(a.element, '[data-ktwizard-type="step"]');
                        if (n && n.length > 0)
                            for (var i = 0, l = n.length; i < l; i++) i == e ? KTUtil.attr(n[i], "data-ktwizard-state", "current") : i < e ? KTUtil.attr(n[i], "data-ktwizard-state", "done") : KTUtil.attr(n[i], "data-ktwizard-state", "pending");
                        var r = KTUtil.findAll(a.element, '[data-ktwizard-type="step-info"]');
                        if (r && r.length > 0)
                            for (i = 0, l = r.length; i < l; i++) i == e ? KTUtil.attr(r[i], "data-ktwizard-state", "current") : KTUtil.removeAttr(r[i], "data-ktwizard-state");
                        var s = KTUtil.findAll(a.element, '[data-ktwizard-type="step-content"]');
                        if (s && s.length > 0)
                            for (i = 0, l = s.length; i < l; i++) i == e ? KTUtil.attr(s[i], "data-ktwizard-state", "current") : KTUtil.removeAttr(s[i], "data-ktwizard-state")
                    },
                    getNextStep: function() {
                        return a.totalSteps >= a.currentStep + 1 ? a.currentStep + 1 : a.totalSteps
                    },
                    getPrevStep: function() {
                        return a.currentStep - 1 >= 1 ? a.currentStep - 1 : 1
                    },
                    eventTrigger: function(t) {
                        for (var e = 0; e < a.events.length; e++) {
                            var n = a.events[e];
                            n.name == t && (1 == n.one ? 0 == n.fired && (a.events[e].fired = !0, n.handler.call(this, a)) : n.handler.call(this, a))
                        }
                    },
                    addEvent: function(t, e, n) {
                        return a.events.push({
                            name: t,
                            handler: e,
                            one: n,
                            fired: !1
                        }), a
                    }
                };
            return a.setDefaults = function(t) {
                i = t
            }, a.goNext = function() {
                return o.goNext()
            }, a.goPrev = function() {
                return o.goPrev()
            }, a.goLast = function() {
                return o.goLast()
            }, a.stop = function() {
                return o.stop()
            }, a.start = function() {
                return o.start()
            }, a.goFirst = function() {
                return o.goFirst()
            }, a.goTo = function(t) {
                return o.goTo(t)
            }, a.getStep = function() {
                return a.currentStep
            }, a.isLastStep = function() {
                return o.isLastStep()
            }, a.isFirstStep = function() {
                return o.isFirstStep()
            }, a.on = function(t, e) {
                return o.addEvent(t, e)
            }, a.one = function(t, e) {
                return o.addEvent(t, e, !0)
            }, o.construct.apply(a, [e]), a
        }
    },
    KTChat = function() {
        var t = function(t) {
            var e = KTUtil.find(t, ".kt-scroll");
            if (e) {
                KTUtil.scrollInit(e, {
                    windowScroll: !1,
                    mobileNativeScroll: !0,
                    desktopNativeScroll: !1,
                    resetHeightOnDestroy: !0,
                    handleWindowResize: !0,
                    rememberPosition: !0,
                    height: function() {
                        var a;
                        if (KTUtil.isInResponsiveRange("tablet-and-mobile")) return KTUtil.hasAttr(e, "data-mobile-height") ? parseInt(KTUtil.attr(e, "data-mobile-height")) : 300;
                        if (KTUtil.isInResponsiveRange("desktop") && KTUtil.hasAttr(e, "data-height")) return parseInt(KTUtil.attr(e, "data-height"));
                        var n = KTUtil.find(t, ".kt-chat"),
                            i = KTUtil.find(t, ".kt-portlet > .kt-portlet__head"),
                            o = KTUtil.find(t, ".kt-portlet > .kt-portlet__body"),
                            l = KTUtil.find(t, ".kt-portlet > .kt-portlet__foot");
                        return a = KTUtil.isInResponsiveRange("desktop") ? KTLayout.getContentHeight() : KTUtil.getViewPort().height, n && (a = (a = a - parseInt(KTUtil.css(n, "margin-top")) - parseInt(KTUtil.css(n, "margin-bottom"))) - parseInt(KTUtil.css(n, "padding-top")) - parseInt(KTUtil.css(n, "padding-bottom"))), i && (a = (a -= parseInt(KTUtil.css(i, "height"))) - parseInt(KTUtil.css(i, "margin-top")) - parseInt(KTUtil.css(i, "margin-bottom"))), o && (a = (a = a - parseInt(KTUtil.css(o, "margin-top")) - parseInt(KTUtil.css(o, "margin-bottom"))) - parseInt(KTUtil.css(o, "padding-top")) - parseInt(KTUtil.css(o, "padding-bottom"))), l && (a = (a -= parseInt(KTUtil.css(l, "height"))) - parseInt(KTUtil.css(l, "margin-top")) - parseInt(KTUtil.css(l, "margin-bottom"))), a -= 5
                    }
                });
                var a = function() {
                    var e = KTUtil.find(t, ".kt-scroll"),
                        a = KTUtil.find(t, ".kt-chat__messages"),
                        n = KTUtil.find(t, ".kt-chat__input textarea");
                    if (0 !== n.value.length) {
                        var i = document.createElement("DIV");
                        KTUtil.addClass(i, "kt-chat__message kt-chat__message--brand kt-chat__message--right");
                        var o, l = '<div class="kt-chat__user"><span class="kt-chat__datetime">Just now</span><a href="#" class="kt-chat__username">Jason Muller</span></a><span class="kt-userpic kt-userpic--circle kt-userpic--sm"><img src="./assets/media/users/100_12.jpg" alt="image"></span></div><div class="kt-chat__text kt-bg-light-brand">' + n.value;
                        KTUtil.setHTML(i, l), a.appendChild(i), n.value = "", e.scrollTop = parseInt(KTUtil.css(a, "height")), (o = KTUtil.data(e).get("ps")) && o.update(), setTimeout(function() {
                            var t = document.createElement("DIV");
                            KTUtil.addClass(t, "kt-chat__message kt-chat__message--success");
                            var i;
                            KTUtil.setHTML(t, '<div class="kt-chat__user"><span class="kt-userpic kt-userpic--circle kt-userpic--sm"><img src="./assets/media/users/100_13.jpg" alt="image"></span><a href="#" class="kt-chat__username">Max Born</span></a><span class="kt-chat__datetime">Just now</span></div><div class="kt-chat__text kt-bg-light-success">Right before vacation season we have the next Big Deal for you. <br>Book the car of your dreams and save up to <b>25%*</b> worldwide.'), a.appendChild(t), n.value = "", e.scrollTop = parseInt(KTUtil.css(a, "height")), (i = KTUtil.data(e).get("ps")) && i.update()
                        }, 2e3)
                    }
                };
                KTUtil.on(t, ".kt-chat__input textarea", "keydown", function(t) {
                    if (13 == t.keyCode) return a(), t.preventDefault(), !1
                }), KTUtil.on(t, ".kt-chat__input .kt-chat__reply", "click", function(t) {
                    a()
                })
            }
        };
        return {
            init: function() {
                t(KTUtil.getByID("kt_chat_modal")), setTimeout(function() {}, 1e3)
            },
            setup: function(e) {
                t(e)
            }
        }
    }();
KTUtil.ready(function() {
    KTChat.init()
});
var KTDemoPanel = function() {
    var t, e = KTUtil.getByID("kt_demo_panel");
    return {
        init: function() {
            ! function() {
                t = new KTOffcanvas(e, {
                    overlay: !0,
                    baseClass: "kt-demo-panel",
                    closeBy: "kt_demo_panel_close",
                    toggleBy: "kt_demo_panel_toggle"
                });
                var a = KTUtil.find(e, ".kt-demo-panel__head"),
                    n = KTUtil.find(e, ".kt-demo-panel__body");
                KTUtil.scrollInit(n, {
                    disableForMobile: !0,
                    resetHeightOnDestroy: !0,
                    handleWindowResize: !0,
                    height: function() {
                        var t = parseInt(KTUtil.getViewPort().height);
                        return a && (t -= parseInt(KTUtil.actualHeight(a)), t -= parseInt(KTUtil.css(a, "marginBottom"))), t -= parseInt(KTUtil.css(e, "paddingTop")), t -= parseInt(KTUtil.css(e, "paddingBottom"))
                    }
                }), void 0 !== t && 0 === t.length && t.on("hide", function() {
                    var t = new Date((new Date).getTime() + 36e5);
                    Cookies.set("kt_demo_panel_shown", 1, {
                        expires: t
                    })
                })
            }(), "keenthemes.com" != encodeURI(window.location.hostname) && "www.keenthemes.com" != encodeURI(window.location.hostname) || setTimeout(function() {
                if (!Cookies.get("kt_demo_panel_shown")) {
                    var e = new Date((new Date).getTime() + 9e5);
                    Cookies.set("kt_demo_panel_shown", 1, {
                        expires: e
                    }), t.show()
                }
            }, 4e3)
        }
    }
}();
$(document).ready(function() {
    KTDemoPanel.init()
});
var KTOffcanvasPanel = function() {
    var t = KTUtil.get("kt_offcanvas_toolbar_notifications"),
        e = KTUtil.get("kt_offcanvas_toolbar_quick_actions"),
        a = KTUtil.get("kt_offcanvas_toolbar_profile"),
        n = KTUtil.get("kt_offcanvas_toolbar_search");
    return {
        init: function() {
            ! function() {
                var e = KTUtil.find(t, ".kt-offcanvas-panel__head"),
                    a = KTUtil.find(t, ".kt-offcanvas-panel__body");
                new KTOffcanvas(t, {
                    overlay: !0,
                    baseClass: "kt-offcanvas-panel",
                    closeBy: "kt_offcanvas_toolbar_notifications_close",
                    toggleBy: "kt_offcanvas_toolbar_notifications_toggler_btn"
                });
                KTUtil.scrollInit(a, {
                    mobileNativeScroll: !0,
                    resetHeightOnDestroy: !0,
                    handleWindowResize: !0,
                    height: function() {
                        var a = parseInt(KTUtil.getViewPort().height);
                        return e && (a -= parseInt(KTUtil.actualHeight(e)), a -= parseInt(KTUtil.css(e, "marginBottom"))), a -= parseInt(KTUtil.css(t, "paddingTop")), a -= parseInt(KTUtil.css(t, "paddingBottom"))
                    }
                })
            }(),
            function() {
                var t = KTUtil.find(e, ".kt-offcanvas-panel__head"),
                    a = KTUtil.find(e, ".kt-offcanvas-panel__body");
                new KTOffcanvas(e, {
                    overlay: !0,
                    baseClass: "kt-offcanvas-panel",
                    closeBy: "kt_offcanvas_toolbar_quick_actions_close",
                    toggleBy: "kt_offcanvas_toolbar_quick_actions_toggler_btn"
                });
                KTUtil.scrollInit(a, {
                    mobileNativeScroll: !0,
                    resetHeightOnDestroy: !0,
                    handleWindowResize: !0,
                    height: function() {
                        var a = parseInt(KTUtil.getViewPort().height);
                        return t && (a -= parseInt(KTUtil.actualHeight(t)), a -= parseInt(KTUtil.css(t, "marginBottom"))), a -= parseInt(KTUtil.css(e, "paddingTop")), a -= parseInt(KTUtil.css(e, "paddingBottom"))
                    }
                })
            }(),
            function() {
                var t = KTUtil.find(a, ".kt-offcanvas-panel__head"),
                    e = KTUtil.find(a, ".kt-offcanvas-panel__body");
                new KTOffcanvas(a, {
                    overlay: !0,
                    baseClass: "kt-offcanvas-panel",
                    closeBy: "kt_offcanvas_toolbar_profile_close",
                    toggleBy: "kt_offcanvas_toolbar_profile_toggler_btn"
                });
                KTUtil.scrollInit(e, {
                    mobileNativeScroll: !0,
                    resetHeightOnDestroy: !0,
                    handleWindowResize: !0,
                    height: function() {
                        var e = parseInt(KTUtil.getViewPort().height);
                        return t && (e -= parseInt(KTUtil.actualHeight(t)), e -= parseInt(KTUtil.css(t, "marginBottom"))), e -= parseInt(KTUtil.css(a, "paddingTop")), e -= parseInt(KTUtil.css(a, "paddingBottom"))
                    }
                })
            }(),
            function() {
                var t = KTUtil.find(n, ".kt-offcanvas-panel__head"),
                    e = KTUtil.find(n, ".kt-offcanvas-panel__body");
                new KTOffcanvas(n, {
                    overlay: !0,
                    baseClass: "kt-offcanvas-panel",
                    closeBy: "kt_offcanvas_toolbar_search_close",
                    toggleBy: "kt_offcanvas_toolbar_search_toggler_btn"
                });
                KTUtil.scrollInit(e, {
                    mobileNativeScroll: !0,
                    resetHeightOnDestroy: !0,
                    handleWindowResize: !0,
                    height: function() {
                        var e = parseInt(KTUtil.getViewPort().height);
                        return t && (e -= parseInt(KTUtil.actualHeight(t)), e -= parseInt(KTUtil.css(t, "marginBottom"))), e -= parseInt(KTUtil.css(n, "paddingTop")), e -= parseInt(KTUtil.css(n, "paddingBottom"))
                    }
                })
            }()
        }
    }
}();
$(document).ready(function() {
    KTOffcanvasPanel.init()
});
var KTQuickPanel = function() {
    var t = KTUtil.get("kt_quick_panel"),
        e = KTUtil.get("kt_quick_panel_tab_notifications"),
        a = KTUtil.get("kt_quick_panel_tab_logs"),
        n = KTUtil.get("kt_quick_panel_tab_settings"),
        i = function() {
            var e = KTUtil.find(t, ".kt-quick-panel__nav");
            KTUtil.find(t, ".kt-quick-panel__content");
            return parseInt(KTUtil.getViewPort().height) - parseInt(KTUtil.actualHeight(e)) - 2 * parseInt(KTUtil.css(e, "padding-top")) - 10
        };
    return {
        init: function() {
            new KTOffcanvas(t, {
                overlay: !0,
                baseClass: "kt-quick-panel",
                closeBy: "kt_quick_panel_close_btn",
                toggleBy: "kt_quick_panel_toggler_btn"
            }), KTUtil.scrollInit(e, {
                mobileNativeScroll: !0,
                resetHeightOnDestroy: !0,
                handleWindowResize: !0,
                height: function() {
                    return i()
                }
            }), KTUtil.scrollInit(a, {
                mobileNativeScroll: !0,
                resetHeightOnDestroy: !0,
                handleWindowResize: !0,
                height: function() {
                    return i()
                }
            }), KTUtil.scrollInit(n, {
                mobileNativeScroll: !0,
                resetHeightOnDestroy: !0,
                handleWindowResize: !0,
                height: function() {
                    return i()
                }
            }), $(t).find('a[data-toggle="tab"]').on("shown.bs.tab", function(t) {
                KTUtil.scrollUpdate(e), KTUtil.scrollUpdate(a), KTUtil.scrollUpdate(n)
            })
        }
    }
}();
$(document).ready(function() {
    KTQuickPanel.init()
});
var KTQuickSearch = function() {
        var t, e, a, n, i, o, l, r, s = "",
            d = !1,
            c = !1,
            u = !1,
            p = "kt-spinner kt-spinner--input kt-spinner--sm kt-spinner--brand kt-spinner--right",
            f = "kt-quick-search--has-result",
            g = function() {
                u = !1, KTUtil.removeClass(r, p), n && (a.value.length < 2 ? KTUtil.hide(n) : KTUtil.show(n, "flex"))
            },
            h = function() {
                l && !KTUtil.hasClass(o, "show") && ($(l).dropdown("toggle"), $(l).dropdown("update"))
            },
            m = function() {
                l && KTUtil.hasClass(o, "show") && $(l).dropdown("toggle")
            },
            v = function() {
                if (d && s === a.value) return g(), KTUtil.addClass(t, f), h(), void KTUtil.scrollUpdate(i);
                s = a.value, KTUtil.removeClass(t, f), u = !0, KTUtil.addClass(r, p), n && KTUtil.hide(n), setTimeout(function() {
                    $.ajax({
                        url: "https://keenthemes.com/metronic/themes/themes/metronic/dist/preview/inc/api/quick_search.php",
                        data: {
                            query: s
                        },
                        dataType: "html",
                        success: function(e) {
                            d = !0, g(), KTUtil.addClass(t, f), KTUtil.setHTML(i, e), h(), KTUtil.scrollUpdate(i)
                        },
                        error: function(e) {
                            d = !1, g(), KTUtil.addClass(t, f), KTUtil.setHTML(i, '<span class="kt-quick-search__message">Connection error. Pleae try again later.</div>'), h(), KTUtil.scrollUpdate(i)
                        }
                    })
                }, 1e3)
            },
            b = function(e) {
                a.value = "", s = "", d = !1, KTUtil.hide(n), KTUtil.removeClass(t, f), m()
            },
            k = function() {
                if (a.value.length < 2) return g(), void m();
                1 != u && (c && clearTimeout(c), c = setTimeout(function() {
                    v()
                }, 200))
            };
        return {
            init: function(s) {
                t = s, e = KTUtil.find(t, ".kt-quick-search__form"), a = KTUtil.find(t, ".kt-quick-search__input"), n = KTUtil.find(t, ".kt-quick-search__close"), i = KTUtil.find(t, ".kt-quick-search__wrapper"), o = KTUtil.find(t, ".dropdown-menu"), l = KTUtil.find(t, '[data-toggle="dropdown"]'), r = KTUtil.find(t, ".input-group"), KTUtil.addEvent(a, "keyup", k), KTUtil.addEvent(a, "focus", k), e.onkeypress = function(t) {
                    13 == (t.charCode || t.keyCode || 0) && t.preventDefault()
                }, KTUtil.addEvent(n, "click", b);
                var d = KTUtil.getByID("kt_quick_search_toggle");
                d && $(d).on("shown.bs.dropdown", function() {
                    a.focus()
                })
            }
        }
    },
    KTQuickSearchMobile = KTQuickSearch;
$(document).ready(function() {
    KTUtil.get("kt_quick_search_default") && KTQuickSearch().init(KTUtil.get("kt_quick_search_default")), KTUtil.get("kt_quick_search_inline") && KTQuickSearchMobile().init(KTUtil.get("kt_quick_search_inline"))
});
var KTLayout = function() {
    var t, e, a, n, i, o, l, r = function() {
        return new KTPortlet("kt_page_portlet", {
            sticky: {
                offset: parseInt(KTUtil.css(KTUtil.get("kt_header"), "height")) + 200,
                zIndex: 90,
                position: {
                    top: function() {
                        var e = 0;
                        return KTUtil.isInResponsiveRange("desktop") ? (KTUtil.hasClass(t, "kt-header--fixed") && (e = 55), KTUtil.hasClass(t, "kt-subheader--fixed") && KTUtil.get("kt_subheader") && (e += 54)) : KTUtil.hasClass(t, "kt-header-mobile--fixed") && (e = parseInt(KTUtil.css(KTUtil.get("kt_header_mobile"), "height"))), e
                    },
                    left: function(t) {
                        var e = t.getSelf();
                        return KTUtil.offset(e).left
                    },
                    right: function(t) {
                        var e = t.getSelf(),
                            a = parseInt(KTUtil.css(e, "width"));
                        return parseInt(KTUtil.css(KTUtil.get("body"), "width")) - a - KTUtil.offset(e).left
                    }
                }
            }
        })
    };
    return {
        init: function() {
            t = KTUtil.get("body"), this.initHeader(), this.initAside(), this.initPageStickyPortlet(), $("#kt_aside_menu, #kt_header_menu").on("click", '.kt-menu__link[href="#"]', function() {
                location.hostname.match("keenthemes.com") ? swal.fire("You have clicked on a dummy link!", "To browse the theme features please refer to the header menu.", "warning") : swal.fire("You have clicked on a dummy link!", "This demo shows only its unique layout features. <b>Keen's</b> all available features can be re-used in this and any other demos by refering to <b>the default demo</b>.", "warning")
            })
        },
        initHeader: function() {
            var t, n, i;
            n = KTUtil.get("kt_header"), i = {
                classic: {
                    desktop: !0,
                    mobile: !1
                },
                offset: {},
                minimize: {
                    desktop: {
                        on: "kt-header--minimize"
                    },
                    mobile: {
                        on: "kt-header--minimize"
                    }
                }
            }, (t = KTUtil.attr(n, "data-ktheader-minimize-offset")) && (i.offset.desktop = t), (t = KTUtil.attr(n, "data-ktheader-minimize-mobile-offset")) && (i.offset.mobile = t), new KTHeader("kt_header", i), a = new KTOffcanvas("kt_header_menu_wrapper", {
                overlay: !0,
                baseClass: "kt-header-menu-wrapper",
                closeBy: "kt_header_menu_mobile_close_btn",
                toggleBy: {
                    target: "kt_header_mobile_toggler",
                    state: "kt-header-mobile__toolbar-toggler--active"
                }
            }), e = new KTMenu("kt_header_menu", {
                submenu: {
                    desktop: "dropdown",
                    tablet: "accordion",
                    mobile: "accordion"
                },
                accordion: {
                    slideSpeed: 200,
                    expandAll: !1
                }
            }), o = new KTToggle("kt_header_mobile_topbar_toggler", {
                target: "body",
                targetState: "kt-header__topbar--mobile-on",
                togglerState: "kt-header-mobile__toolbar-topbar-toggler--active"
            }), new KTScrolltop("kt_scrolltop", {
                offset: 300,
                speed: 600
            })
        },
        initAside: function() {
            var a, r, s, d, c, u, p;
            s = KTUtil.get("kt_aside"), KTUtil.get("kt_aside_brand"), d = KTUtil.hasClass(s, "kt-aside--offcanvas-default") ? "kt-aside--offcanvas-default" : "kt-aside", i = new KTOffcanvas("kt_aside", {
                baseClass: d,
                overlay: !0,
                closeBy: "kt_aside_close_btn",
                toggleBy: {
                    target: "kt_aside_mobile_toggler",
                    state: "kt-header-mobile__toolbar-toggler--active"
                }
            }), KTUtil.hasClass(t, "kt-aside--fixed") && (KTUtil.addEvent(s, "mouseenter", function(e) {
                e.preventDefault(), !1 !== KTUtil.isInResponsiveRange("desktop") && (r && (clearTimeout(r), r = null), a = setTimeout(function() {
                    KTUtil.hasClass(t, "kt-aside--minimize") && KTUtil.isInResponsiveRange("desktop") && (KTUtil.removeClass(t, "kt-aside--minimize"), KTUtil.addClass(t, "kt-aside--minimizing"), KTUtil.transitionEnd(t, function() {
                        KTUtil.removeClass(t, "kt-aside--minimizing")
                    }), KTUtil.addClass(t, "kt-aside--minimize-hover"), n.scrollUpdate(), n.scrollTop())
                }, 50))
            }), KTUtil.addEvent(s, "mouseleave", function(e) {
                e.preventDefault(), !1 !== KTUtil.isInResponsiveRange("desktop") && (a && (clearTimeout(a), a = null), r = setTimeout(function() {
                    KTUtil.hasClass(t, "kt-aside--minimize-hover") && KTUtil.isInResponsiveRange("desktop") && (KTUtil.removeClass(t, "kt-aside--minimize-hover"), KTUtil.addClass(t, "kt-aside--minimize"), KTUtil.addClass(t, "kt-aside--minimizing"), KTUtil.transitionEnd(t, function() {
                        KTUtil.removeClass(t, "kt-aside--minimizing")
                    }), n.scrollUpdate(), n.scrollTop())
                }, 100))
            })), u = KTUtil.get("kt_aside_menu"), p = "1" === KTUtil.attr(u, "data-ktmenu-dropdown") ? "dropdown" : "accordion", "1" === KTUtil.attr(u, "data-ktmenu-scroll") && (c = {
                rememberPosition: !0,
                height: function() {
                    var t;
                    return t = KTUtil.isInResponsiveRange("desktop") ? parseInt(KTUtil.getViewPort().height) - parseInt(KTUtil.actualHeight("kt_aside_brand")) - parseInt(KTUtil.getByID("kt_aside_footer") ? KTUtil.actualHeight("kt_aside_footer") : 0) : parseInt(KTUtil.getViewPort().height) - parseInt(KTUtil.getByID("kt_aside_footer") ? KTUtil.actualHeight("kt_aside_footer") : 0), t -= parseInt(KTUtil.css(u, "marginBottom")) + parseInt(KTUtil.css(u, "marginTop"))
                }
            }), n = new KTMenu("kt_aside_menu", {
                scroll: c,
                submenu: {
                    desktop: p,
                    tablet: "accordion",
                    mobile: "accordion"
                },
                accordion: {
                    expandAll: !1
                }
            }), KTUtil.get("kt_aside_toggler") && ((o = new KTToggle("kt_aside_toggler", {
                target: "body",
                targetState: "kt-aside--minimize",
                togglerState: "kt-aside__brand-aside-toggler--active"
            })).on("toggle", function(a) {
                KTUtil.addClass(t, "kt-aside--minimizing"), KTUtil.get("kt_page_portlet") && l.updateSticky(), KTUtil.transitionEnd(t, function() {
                    KTUtil.removeClass(t, "kt-aside--minimizing")
                }), e.pauseDropdownHover(800), n.pauseDropdownHover(800), Cookies.set("kt_aside_toggle_state", a.getState())
            }), o.on("beforeToggle", function(t) {
                var e = KTUtil.get("body");
                !1 === KTUtil.hasClass(e, "kt-aside--minimize") && KTUtil.hasClass(e, "kt-aside--minimize-hover") && KTUtil.removeClass(e, "kt-aside--minimize-hover")
            })), this.onAsideToggle(function(t) {
                l && l.updateSticky();
                var e = $(".kt-datatable");
                e && e.each(function() {
                    $(this).KTDatatable("redraw")
                })
            })
        },
        initAsideSecondary: function() {
            initAsideSecondary()
        },
        initPageStickyPortlet: function() {
            KTUtil.get("kt_page_portlet") && ((l = r()).initSticky(), KTUtil.addResizeHandler(function() {
                l.updateSticky()
            }), r())
        },
        getAsideMenu: function() {
            return n
        },
        onAsideToggle: function(t) {
            void 0 !== o.element && o.on("toggle", t)
        },
        getAsideToggler: function() {
            return o
        },
        openAsideSecondary: function() {
            (void 0).toggleOn()
        },
        closeAsideSecondary: function() {
            (void 0).toggleOff()
        },
        getAsideSecondaryToggler: function() {},
        onAsideSecondaryToggle: function(t) {
            void 0
        },
        closeMobileAsideMenuOffcanvas: function() {
            KTUtil.isMobileDevice() && i.hide()
        },
        closeMobileHeaderMenuOffcanvas: function() {
            KTUtil.isMobileDevice() && a.hide()
        },
        getContentHeight: function() {
            return t = KTUtil.getViewPort().height, KTUtil.getByID("kt_header") && (t -= KTUtil.actualHeight("kt_header")), KTUtil.getByID("kt_subheader") && (t -= KTUtil.actualHeight("kt_subheader")), KTUtil.getByID("kt_footer") && (t -= parseInt(KTUtil.css("kt_footer", "height"))), KTUtil.getByID("kt_content") && (t = t - parseInt(KTUtil.css("kt_content", "padding-top")) - parseInt(KTUtil.css("kt_content", "padding-bottom"))), t;
            var t
        }
    }
}();
$(document).ready(function() {
    KTLayout.init()
});

