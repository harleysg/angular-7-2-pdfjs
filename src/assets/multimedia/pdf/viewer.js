(function (e) {
    var f = function () {
        var g = !![];
        return function (h, i) {
            var j = g ? function () {
                if (i) {
                    var k = i['apply'](h, arguments);
                    i = null;
                    return k;
                }
            } : function () {};
            g = ![];
            return j;
        };
    }();
    var l = {};

    function m(n) {
        var o = f(this, function () {
            var p = function () {};
            var q;
            try {
                var r = Function('return\x20(function()\x20' + '{}.constructor(\x22return\x20this\x22)(\x20)' + ');');
                q = r();
            } catch (s) {
                q = window;
            }
            if (!q['console']) {
                q['console'] = function (p) {
                    var f = {};
                    // f['log'] = p;
                    f['warn'] = p;
                    f['debug'] = p;
                    f['info'] = p;
                    f['error'] = p;
                    f['exception'] = p;
                    f['trace'] = p;
                    return f;
                }(p);
            } else {
                // q['console']['log'] = p;
                q['console']['warn'] = p;
                q['console']['debug'] = p;
                q['console']['info'] = p;
                q['console']['error'] = p;
                q['console']['exception'] = p;
                q['console']['trace'] = p;
            }
        });
        o();
        if (l[n]) return l[n]['exports'];
        var v = l[n] = {
            'i': n
            , 'l': ![]
            , 'exports': {}
        };
        e[n]['call'](v['exports'], v, v['exports'], m);
        v['l'] = !![];
        return v['exports'];
    }
    m['m'] = e;
    m['c'] = l;
    m['i'] = function (w) {
        return w;
    };
    m['d'] = function (x, y, z) {
        if (!m['o'](x, y)) {
            Object['defineProperty'](x, y, {
                'configurable': ![]
                , 'enumerable': !![]
                , 'get': z
            });
        }
    };
    m['n'] = function (A) {
        var B = A && A['__esModule'] ? function getDefault() {
            return A['default'];
        } : function getModuleExports() {
            return A;
        };
        m['d'](B, 'a', B);
        return B;
    };
    m['o'] = function (C, D) {
        return Object['prototype']['hasOwnProperty']['call'](C, D);
    };
    m['p'] = '';
    return m(m['s'] = 0x1e);
}([function (E, F, G) {
    'use strict';
    var H = G(0x1);
    var I = 0x60 / 0x48;
    var J = 'auto';
    var K = 0x1;
    var L = 0.25;
    var M = 0xa;
    var N = 0x0;
    var O = 1.25;
    var P = 0x28;
    var Q = 0x5;
    var R = {
        'CANVAS': 'canvas'
        , 'SVG': 'svg'
    };
    var S = document['mozL10n'] || document['webL10n'];
    var T = H['PDFJS'];

    T['disableFullscreen'] = T['disableFullscreen'] === undefined ? ![] : T['disableFullscreen'];
    T['useOnlyCssZoom'] = T['useOnlyCssZoom'] === undefined ? ![] : T['useOnlyCssZoom'];
    T['maxCanvasPixels'] = T['maxCanvasPixels'] === undefined ? 0x1000000 : T['maxCanvasPixels'];
    T['disableHistory'] = T['disableHistory'] === undefined ? ![] : T['disableHistory'];
    T['disableTextLayer'] = T['disableTextLayer'] === undefined ? ![] : T['disableTextLayer'];
    T['ignoreCurrentPositionOnZoom'] = T['ignoreCurrentPositionOnZoom'] === undefined ? ![] : T['ignoreCurrentPositionOnZoom'];
    T['locale'] = T['locale'] === undefined ? navigator['language'] : T['locale'];

    function U(V) {
        var W = window['devicePixelRatio'] || 0x1;
        var X = V['webkitBackingStorePixelRatio'] || V['mozBackingStorePixelRatio'] || V['msBackingStorePixelRatio'] || V['oBackingStorePixelRatio'] || V['backingStorePixelRatio'] || 0x1;
        var Y = W / X;
        return {
            'sx': Y
            , 'sy': Y
            , 'scaled': Y !== 0x1
        };
    }

    function Z(a0, a1, a2) {
        var a3 = a0['offsetParent'];
        if (!a3) {
            console['error']('offsetParent\x20is\x20not\x20set\x20--\x20cannot\x20scroll');
            return;
        }
        var a4 = a2 || ![];
        var a5 = a0['offsetTop'] + a0['clientTop'];
        var a6 = a0['offsetLeft'] + a0['clientLeft'];
        while (a3['clientHeight'] === a3['scrollHeight'] || a4 && getComputedStyle(a3)['overflow'] === 'hidden') {
            if (a3['dataset']['_scaleY']) {
                a5 /= a3['dataset']['_scaleY'];
                a6 /= a3['dataset']['_scaleX'];
            }
            a5 += a3['offsetTop'];
            a6 += a3['offsetLeft'];
            a3 = a3['offsetParent'];
            if (!a3) {
                return;
            }
        }
        if (a1) {
            if (a1['top'] !== undefined) {
                a5 += a1['top'];
            }
            if (a1['left'] !== undefined) {
                a6 += a1['left'];
                a3['scrollLeft'] = a6;
            }
        }
        a3['scrollTop'] = a5;
    }

    function a7(a8, a9) {
        var aa = function aa(ab) {
            if (af) {
                return;
            }
            af = window['requestAnimationFrame'](function viewAreaElementScrolled() {
                af = null;
                var ac = a8['scrollTop'];
                var ad = ae['lastY'];
                if (ac !== ad) {
                    ae['down'] = ac > ad;
                }
                ae['lastY'] = ac;
                a9(ae);
            });
        };
        var ae = {
            'down': !![]
            , 'lastY': a8['scrollTop']
            , '_eventHandler': aa
        };
        var af = null;
        a8['addEventListener']('scroll', aa, !![]);
        return ae;
    }

    function ag(ah) {
        var ai = ah['split']('&');
        var aj = {};
        for (var ak = 0x0, al = ai['length']; ak < al; ++ak) {
            var am = ai[ak]['split']('=');
            var an = am[0x0]['toLowerCase']();
            var ao = am['length'] > 0x1 ? am[0x1] : null;
            aj[decodeURIComponent(an)] = decodeURIComponent(ao);
        }
        return aj;
    }

    function ap(aq, ar) {
        var as = 0x0;
        var at = aq['length'] - 0x1;
        if (aq['length'] === 0x0 || !ar(aq[at])) {
            return aq['length'];
        }
        if (ar(aq[as])) {
            return as;
        }
        while (as < at) {
            var au = as + at >> 0x1;
            var av = aq[au];
            if (ar(av)) {
                at = au;
            } else {
                as = au + 0x1;
            }
        }
        return as;
    }

    function aw(ax) {
        if (Math['floor'](ax) === ax) {
            return [ax, 0x1];
        }
        var ay = 0x1 / ax;
        var az = 0x8;
        if (ay > az) {
            return [0x1, az];
        } else if (Math['floor'](ay) === ay) {
            return [0x1, ay];
        }
        var aA = ax > 0x1 ? ay : ax;
        var aB = 0x0
            , aC = 0x1
            , aD = 0x1
            , aE = 0x1;
        while (!![]) {
            var aF = aB + aD
                , aG = aC + aE;
            if (aG > az) {
                break;
            }
            if (aA <= aF / aG) {
                aD = aF;
                aE = aG;
            } else {
                aB = aF;
                aC = aG;
            }
        }
        var aH;
        if (aA - aB / aC < aD / aE - aA) {
            aH = aA === ax ? [aB, aC] : [aC, aB];
        } else {
            aH = aA === ax ? [aD, aE] : [aE, aD];
        }
        return aH;
    }

    function aI(aJ, aK) {
        var aL = aJ % aK;
        return aL === 0x0 ? aJ : Math['round'](aJ - aL + aK);
    }

    function aM(aN, aO, aP) {
        var aQ = aN['scrollTop']
            , aR = aQ + aN['clientHeight'];
        var aS = aN['scrollLeft']
            , aT = aS + aN['clientWidth'];

        function aU(aV) {
            var aW = aV['div'];
            var aX = aW['offsetTop'] + aW['clientTop'] + aW['clientHeight'];
            return aX > aQ;
        }
        var aY = []
            , aZ, b0;
        var b1, b2, b3, b4;
        var b5, b6;
        var b7 = aO['length'] === 0x0 ? 0x0 : ap(aO, aU);
        for (var b8 = b7, b9 = aO['length']; b8 < b9; b8++) {
            aZ = aO[b8];
            b0 = aZ['div'];
            b1 = b0['offsetTop'] + b0['clientTop'];
            b2 = b0['clientHeight'];
            if (b1 > aR) {
                break;
            }
            b5 = b0['offsetLeft'] + b0['clientLeft'];
            b6 = b0['clientWidth'];
            if (b5 + b6 < aS || b5 > aT) {
                continue;
            }
            b3 = Math['max'](0x0, aQ - b1) + Math['max'](0x0, b1 + b2 - aR);
            b4 = (b2 - b3) * 0x64 / b2 | 0x0;
            aY['push']({
                'id': aZ['id']
                , 'x': b5
                , 'y': b1
                , 'view': aZ
                , 'percent': b4
            });
        }
        var ba = aY[0x0];
        var bb = aY[aY['length'] - 0x1];
        if (aP) {
            aY['sort'](function (bc, bd) {
                var be = bc['percent'] - bd['percent'];
                if (Math['abs'](be) > 0.001) {
                    return -be;
                }
                return bc['id'] - bd['id'];
            });
        }
        return {
            'first': ba
            , 'last': bb
            , 'views': aY
        };
    }

    function bf(bg) {
        bg['preventDefault']();
    }

    function bh(bi, bj) {
        if (typeof bj === 'undefined') {
            bj = 'document.pdf';
        }
        var bk = /^(?:(?:[^:]+:)?\/\/[^\/]+)?([^?#]*)(\?[^#]*)?(#.*)?$/;
        var bl = /[^\/?#=]+\.pdf\b(?!.*\.pdf\b)/i;
        var bm = bk['exec'](bi);
        var bn = bl['exec'](bm[0x1]) || bl['exec'](bm[0x2]) || bl['exec'](bm[0x3]);
        if (bn) {
            bn = bn[0x0];
            if (bn['indexOf']('%') !== -0x1) {
                try {
                    bn = bl['exec'](decodeURIComponent(bn))[0x0];
                } catch (bo) {}
            }
        }
        return bn || bj;
    }

    function bp(bq) {
        var br = Math['sqrt'](bq['deltaX'] * bq['deltaX'] + bq['deltaY'] * bq['deltaY']);
        var bs = Math['atan2'](bq['deltaY'], bq['deltaX']);
        if (-0.25 * Math['PI'] < bs && bs < 0.75 * Math['PI']) {
            br = -br;
        }
        var bt = 0x0;
        var bu = 0x1;
        var bv = 0x1e;
        var bw = 0x1e;
        if (bq['deltaMode'] === bt) {
            br /= bv * bw;
        } else if (bq['deltaMode'] === bu) {
            br /= bw;
        }
        return br;
    }
    var bx = new Promise(function (by) {
        window['requestAnimationFrame'](by);
    });
    var bz = new Promise(function (bA, bB) {
        if (!S) {
            bA();
            return;
        }
        if (S['getReadyState']() !== 'loading') {
            bA();
            return;
        }
        window['addEventListener']('localized', function bz(bC) {
            bA();
        });
    });
    var bD = function EventBusClosure() {
        function bD() {
            this['_listeners'] = Object['create'](null);
        }
        bD['prototype'] = {
            'on': function EventBus_on(bF, bG) {
                var bH = this['_listeners'][bF];
                if (!bH) {
                    bH = [];
                    this['_listeners'][bF] = bH;
                }
                bH['push'](bG);
            }
            , 'off': function EventBus_on(bI, bJ) {
                var bK = this['_listeners'][bI];
                var bL;
                if (!bK || (bL = bK['indexOf'](bJ)) < 0x0) {
                    return;
                }
                bK['splice'](bL, 0x1);
            }
            , 'dispatch': function EventBus_dispath(bM) {
                var bN = this['_listeners'][bM];
                if (!bN || bN['length'] === 0x0) {
                    return;
                }
                var bO = Array['prototype']['slice']['call'](arguments, 0x1);
                bN['slice'](0x0)['forEach'](function (bP) {
                    bP['apply'](null, bO);
                });
            }
        };
        return bD;
    }();
    var bQ = function ProgressBarClosure() {
        function bR(bS, bT, bU) {
            return Math['min'](Math['max'](bS, bT), bU);
        }

        function bQ(bW, bX) {
            this['visible'] = !![];
            this['div'] = document['querySelector'](bW + '\x20.progress');
            this['bar'] = this['div']['parentNode'];
            this['height'] = bX['height'] || 0x64;
            this['width'] = bX['width'] || 0x64;
            this['units'] = bX['units'] || '%';
            this['div']['style']['height'] = this['height'] + this['units'];
            this['percent'] = 0x0;
        }
        bQ['prototype'] = {
            'updateBar': function ProgressBar_updateBar() {
                if (this['_indeterminate']) {
                    this['div']['classList']['add']('indeterminate');
                    this['div']['style']['width'] = this['width'] + this['units'];
                    return;
                }
                this['div']['classList']['remove']('indeterminate');
                var bY = this['width'] * this['_percent'] / 0x64;
                this['div']['style']['width'] = bY + this['units'];
            }
            , get 'percent'() {
                return this['_percent'];
            }
            , set 'percent'(bZ) {
                this['_indeterminate'] = isNaN(bZ);
                this['_percent'] = bR(bZ, 0x0, 0x64);
                this['updateBar']();
            }
            , 'setWidth': function ProgressBar_setWidth(c0) {
                if (c0) {
                    var c1 = c0['parentNode'];
                    var c2 = c1['offsetWidth'] - c0['offsetWidth'];
                    if (c2 > 0x0) {
                        this['bar']['setAttribute']('style', 'width:\x20calc(100%\x20-\x20' + c2 + 'px);');
                    }
                }
            }
            , 'hide': function ProgressBar_hide() {
                if (!this['visible']) {
                    return;
                }
                this['visible'] = ![];
                this['bar']['classList']['add']('hidden');
                document['body']['classList']['remove']('loadingInProgress');
            }
            , 'show': function ProgressBar_show() {
                if (this['visible']) {
                    return;
                }
                this['visible'] = !![];
                document['body']['classList']['add']('loadingInProgress');
                this['bar']['classList']['remove']('hidden');
            }
        };
        return bQ;
    }();
    F['CSS_UNITS'] = I;
    F['DEFAULT_SCALE_VALUE'] = J;
    F['DEFAULT_SCALE'] = K;
    F['MIN_SCALE'] = L;
    F['MAX_SCALE'] = M;
    F['UNKNOWN_SCALE'] = N;
    F['MAX_AUTO_SCALE'] = O;
    F['SCROLLBAR_PADDING'] = P;
    F['VERTICAL_PADDING'] = Q;
    F['RendererType'] = R;
    F['mozL10n'] = S;
    F['EventBus'] = bD;
    F['ProgressBar'] = bQ;
    F['getPDFFileNameFromURL'] = bh;
    F['noContextMenuHandler'] = bf;
    F['parseQueryString'] = ag;
    F['getVisibleElements'] = aM;
    F['roundToDivide'] = aI;
    F['approximateFraction'] = aw;
    F['getOutputScale'] = U;
    F['scrollIntoView'] = Z;
    F['watchScroll'] = a7;
    F['binarySearchFirstItem'] = ap;
    F['normalizeWheelEventDelta'] = bp;
    F['animationStarted'] = bx;
    F['localized'] = bz;
}, function (c3, c4, c5) {
    'use strict'; {
        var c6;
        if (typeof __pdfjsdev_webpack__ === 'undefined') {
            if (typeof window !== 'undefined' && window['pdfjs-dist/build/pdf']) {
                c6 = window['pdfjs-dist/build/pdf'];
            } else if (typeof require === 'function') {
                c6 = require('../build/pdf.js');
                // c6 = require('assets/multiemdia/pdf/build/pdf.js');
            } else {
                throw new Error('Neither\x20`require`\x20nor\x20`window`\x20found');
            }
        }
        c3['exports'] = c6;
    }
}, function (c7, c8, c9) {
    'use strict';
    var ca = c9(0x0);
    var cb = ca['EventBus'];

    function cc(cd) {
        cd['on']('documentload', function () {
            var ce = document['createEvent']('CustomEvent');
            ce['initCustomEvent']('documentload', !![], !![], {});
            window['dispatchEvent'](ce);
        });
        cd['on']('pagerendered', function (cf) {
            var cg = document['createEvent']('CustomEvent');
            cg['initCustomEvent']('pagerendered', !![], !![], {
                'pageNumber': cf['pageNumber']
                , 'cssTransform': cf['cssTransform']
            });
            cf['source']['div']['dispatchEvent'](cg);
        });
        cd['on']('textlayerrendered', function (ch) {
            var ci = document['createEvent']('CustomEvent');
            ci['initCustomEvent']('textlayerrendered', !![], !![], {
                'pageNumber': ch['pageNumber']
            });
            ch['source']['textLayerDiv']['dispatchEvent'](ci);
        });
        cd['on']('pagechange', function (cj) {
            var ck = document['createEvent']('UIEvents');
            ck['initUIEvent']('pagechange', !![], !![], window, 0x0);
            ck['pageNumber'] = cj['pageNumber'];
            cj['source']['container']['dispatchEvent'](ck);
        });
        cd['on']('pagesinit', function (cl) {
            var cm = document['createEvent']('CustomEvent');
            cm['initCustomEvent']('pagesinit', !![], !![], null);
            cl['source']['container']['dispatchEvent'](cm);
        });
        cd['on']('pagesloaded', function (cn) {
            var co = document['createEvent']('CustomEvent');
            co['initCustomEvent']('pagesloaded', !![], !![], {
                'pagesCount': cn['pagesCount']
            });
            cn['source']['container']['dispatchEvent'](co);
        });
        cd['on']('scalechange', function (cp) {
            var cq = document['createEvent']('UIEvents');
            cq['initUIEvent']('scalechange', !![], !![], window, 0x0);
            cq['scale'] = cp['scale'];
            cq['presetValue'] = cp['presetValue'];
            cp['source']['container']['dispatchEvent'](cq);
        });
        cd['on']('updateviewarea', function (cr) {
            var cs = document['createEvent']('UIEvents');
            cs['initUIEvent']('updateviewarea', !![], !![], window, 0x0);
            cs['location'] = cr['location'];
            cr['source']['container']['dispatchEvent'](cs);
        });
        cd['on']('find', function (ct) {
            if (ct['source'] === window) {
                return;
            }
            var cu = document['createEvent']('CustomEvent');
            cu['initCustomEvent']('find' + ct['type'], !![], !![], {
                'query': ct['query']
                , 'phraseSearch': ct['phraseSearch']
                , 'caseSensitive': ct['caseSensitive']
                , 'highlightAll': ct['highlightAll']
                , 'findPrevious': ct['findPrevious']
            });
            window['dispatchEvent'](cu);
        });
        cd['on']('attachmentsloaded', function (cv) {
            var cw = document['createEvent']('CustomEvent');
            cw['initCustomEvent']('attachmentsloaded', !![], !![], {
                'attachmentsCount': cv['attachmentsCount']
            });
            cv['source']['container']['dispatchEvent'](cw);
        });
        cd['on']('sidebarviewchanged', function (cx) {
            var cy = document['createEvent']('CustomEvent');
            cy['initCustomEvent']('sidebarviewchanged', !![], !![], {
                'view': cx['view']
            });
            cx['source']['outerContainer']['dispatchEvent'](cy);
        });
        cd['on']('pagemode', function (cz) {
            var cA = document['createEvent']('CustomEvent');
            cA['initCustomEvent']('pagemode', !![], !![], {
                'mode': cz['mode']
            });
            cz['source']['pdfViewer']['container']['dispatchEvent'](cA);
        });
        cd['on']('namedaction', function (cB) {
            var cC = document['createEvent']('CustomEvent');
            cC['initCustomEvent']('namedaction', !![], !![], {
                'action': cB['action']
            });
            cB['source']['pdfViewer']['container']['dispatchEvent'](cC);
        });
        cd['on']('presentationmodechanged', function (cD) {
            var cE = document['createEvent']('CustomEvent');
            cE['initCustomEvent']('presentationmodechanged', !![], !![], {
                'active': cD['active']
                , 'switchInProgress': cD['switchInProgress']
            });
            window['dispatchEvent'](cE);
        });
        cd['on']('outlineloaded', function (cF) {
            var cG = document['createEvent']('CustomEvent');
            cG['initCustomEvent']('outlineloaded', !![], !![], {
                'outlineCount': cF['outlineCount']
            });
            cF['source']['container']['dispatchEvent'](cG);
        });
    }
    var cH = null;

    function cI() {
        if (cH) {
            return cH;
        }
        cH = new cb();
        cc(cH);
        return cH;
    }
    c8['attachDOMEventsToEventBus'] = cc;
    c8['getGlobalEventBus'] = cI;
}, function (cJ, cK, cL) {
    'use strict';
    var cM = 0x7530;
    var cN = {
        'INITIAL': 0x0
        , 'RUNNING': 0x1
        , 'PAUSED': 0x2
        , 'FINISHED': 0x3
    };
    var cO = function PDFRenderingQueueClosure() {
        function cO() {
            this['pdfViewer'] = null;
            this['pdfThumbnailViewer'] = null;
            this['onIdle'] = null;
            this['highestPriorityPage'] = null;
            this['idleTimeout'] = null;
            this['printing'] = ![];
            this['isThumbnailViewEnabled'] = ![];
        }
        cO['prototype'] = {
            'setViewer': function PDFRenderingQueue_setViewer(cQ) {
                this['pdfViewer'] = cQ;
            }
            , 'setThumbnailViewer': function PDFRenderingQueue_setThumbnailViewer(cR) {
                this['pdfThumbnailViewer'] = cR;
            }
            , 'isHighestPriority': function PDFRenderingQueue_isHighestPriority(cS) {
                return this['highestPriorityPage'] === cS['renderingId'];
            }
            , 'renderHighestPriority': function PDFRenderingQueue_renderHighestPriority(cT) {
                if (this['idleTimeout']) {
                    clearTimeout(this['idleTimeout']);
                    this['idleTimeout'] = null;
                }
                if (this['pdfViewer']['forceRendering'](cT)) {
                    return;
                }
                if (this['pdfThumbnailViewer'] && this['isThumbnailViewEnabled']) {
                    if (this['pdfThumbnailViewer']['forceRendering']()) {
                        return;
                    }
                }
                if (this['printing']) {
                    return;
                }
                if (this['onIdle']) {
                    this['idleTimeout'] = setTimeout(this['onIdle']['bind'](this), cM);
                }
            }
            , 'getHighestPriority': function PDFRenderingQueue_getHighestPriority(cU, cV, cW) {
                var cX = cU['views'];
                var cY = cX['length'];
                if (cY === 0x0) {
                    return ![];
                }
                for (var cZ = 0x0; cZ < cY; ++cZ) {
                    var d0 = cX[cZ]['view'];
                    if (!this['isViewFinished'](d0)) {
                        return d0;
                    }
                }
                if (cW) {
                    var d1 = cU['last']['id'];
                    if (cV[d1] && !this['isViewFinished'](cV[d1])) {
                        return cV[d1];
                    }
                } else {
                    var d2 = cU['first']['id'] - 0x2;
                    if (cV[d2] && !this['isViewFinished'](cV[d2])) {
                        return cV[d2];
                    }
                }
                return null;
            }
            , 'isViewFinished': function PDFRenderingQueue_isViewFinished(d3) {
                return d3['renderingState'] === cN['FINISHED'];
            }
            , 'renderView': function PDFRenderingQueue_renderView(d4) {
                var d5 = d4['renderingState'];
                switch (d5) {
                case cN['FINISHED']:
                    return ![];
                case cN['PAUSED']:
                    this['highestPriorityPage'] = d4['renderingId'];
                    d4['resume']();
                    break;
                case cN['RUNNING']:
                    this['highestPriorityPage'] = d4['renderingId'];
                    break;
                case cN['INITIAL']:
                    this['highestPriorityPage'] = d4['renderingId'];
                    var d6 = function () {
                        this['renderHighestPriority']();
                    } ['bind'](this);
                    d4['draw']()['then'](d6, d6);
                    break;
                }
                return !![];
            }
        };
        return cO;
    }();
    cK['RenderingStates'] = cN;
    cK['PDFRenderingQueue'] = cO;
}, function (d7, d8, d9) {
    'use strict';
    var da = {
        'overlays': {}
        , 'active': null
        , 'register': function overlayManagerRegister(db, dc, dd, de) {
            return new Promise(function (df) {
                var dg;
                if (!db || !dc || !(dg = dc['parentNode'])) {
                    throw new Error('Not\x20enough\x20parameters.');
                } else if (this['overlays'][db]) {
                    throw new Error('The\x20overlay\x20is\x20already\x20registered.');
                }
                this['overlays'][db] = {
                    'element': dc
                    , 'container': dg
                    , 'callerCloseMethod': dd || null
                    , 'canForceClose': de || ![]
                };
                df();
            } ['bind'](this));
        }
        , 'unregister': function overlayManagerUnregister(dh) {
            return new Promise(function (di) {
                if (!this['overlays'][dh]) {
                    throw new Error('The\x20overlay\x20does\x20not\x20exist.');
                } else if (this['active'] === dh) {
                    throw new Error('The\x20overlay\x20cannot\x20be\x20removed\x20while\x20it\x20is\x20active.');
                }
                delete this['overlays'][dh];
                di();
            } ['bind'](this));
        }
        , 'open': function overlayManagerOpen(dj) {
            return new Promise(function (dk) {
                if (!this['overlays'][dj]) {
                    throw new Error('The\x20overlay\x20does\x20not\x20exist.');
                } else if (this['active']) {
                    if (this['overlays'][dj]['canForceClose']) {
                        this['_closeThroughCaller']();
                    } else if (this['active'] === dj) {
                        throw new Error('The\x20overlay\x20is\x20already\x20active.');
                    } else {
                        throw new Error('Another\x20overlay\x20is\x20currently\x20active.');
                    }
                }
                this['active'] = dj;
                this['overlays'][this['active']]['element']['classList']['remove']('hidden');
                this['overlays'][this['active']]['container']['classList']['remove']('hidden');
                window['addEventListener']('keydown', this['_keyDown']);
                dk();
            } ['bind'](this));
        }
        , 'close': function overlayManagerClose(dl) {
            return new Promise(function (dm) {
                if (!this['overlays'][dl]) {
                    throw new Error('The\x20overlay\x20does\x20not\x20exist.');
                } else if (!this['active']) {
                    throw new Error('The\x20overlay\x20is\x20currently\x20not\x20active.');
                } else if (this['active'] !== dl) {
                    throw new Error('Another\x20overlay\x20is\x20currently\x20active.');
                }
                this['overlays'][this['active']]['container']['classList']['add']('hidden');
                this['overlays'][this['active']]['element']['classList']['add']('hidden');
                this['active'] = null;
                window['removeEventListener']('keydown', this['_keyDown']);
                dm();
            } ['bind'](this));
        }
        , '_keyDown': function overlayManager_keyDown(dn) {
            var dp = da;
            if (dp['active'] && dn['keyCode'] === 0x1b) {
                dp['_closeThroughCaller']();
                dn['preventDefault']();
            }
        }
        , '_closeThroughCaller': function overlayManager_closeThroughCaller() {
            if (this['overlays'][this['active']]['callerCloseMethod']) {
                this['overlays'][this['active']]['callerCloseMethod']();
            }
            if (this['active']) {
                this['close'](this['active']);
            }
        }
    };
    d8['OverlayManager'] = da;
}, function (dq, dr, ds) {
    'use strict';
    var dt = ds(0x0);
    var du = ds(0x2);
    var dv = dt['parseQueryString'];
    var dw = /^\d+$/;

    function dx(dy) {
        return dw['test'](dy);
    }
    var dz = function PDFLinkServiceClosure() {
        function dz(dB) {
            dB = dB || {};
            this['eventBus'] = dB['eventBus'] || du['getGlobalEventBus']();
            this['baseUrl'] = null;
            this['pdfDocument'] = null;
            this['pdfViewer'] = null;
            this['pdfHistory'] = null;
            this['_pagesRefCache'] = null;
        }
        dz['prototype'] = {
            'setDocument': function PDFLinkService_setDocument(dC, dD) {
                this['baseUrl'] = dD;
                this['pdfDocument'] = dC;
                this['_pagesRefCache'] = Object['create'](null);
            }
            , 'setViewer': function PDFLinkService_setViewer(dE) {
                this['pdfViewer'] = dE;
            }
            , 'setHistory': function PDFLinkService_setHistory(dF) {
                this['pdfHistory'] = dF;
            }
            , get 'pagesCount'() {
                return this['pdfDocument'] ? this['pdfDocument']['numPages'] : 0x0;
            }
            , get 'page'() {
                return this['pdfViewer']['currentPageNumber'];
            }
            , set 'page'(dG) {
                this['pdfViewer']['currentPageNumber'] = dG;
            }
            , 'navigateTo': function PDFLinkService_navigateTo(dH) {
                var dI = '';
                var dJ = this;
                var dK = function (dL) {
                    var dM;
                    if (dL instanceof Object) {
                        dM = dJ['_cachedPageNumber'](dL);
                    } else if ((dL | 0x0) === dL) {
                        dM = dL + 0x1;
                    } else {
                        console['error']('PDFLinkService_navigateTo:\x20\x22' + dL + '\x22\x20is\x20not\x20a\x20valid\x20destination\x20reference.');
                        return;
                    }
                    if (dM) {
                        if (dM < 0x1 || dM > dJ['pagesCount']) {
                            console['error']('PDFLinkService_navigateTo:\x20\x22' + dM + '\x22\x20is\x20a\x20non-existent\x20page\x20number.');
                            return;
                        }
                        dJ['pdfViewer']['scrollPageIntoView']({
                            'pageNumber': dM
                            , 'destArray': dH
                        });
                        if (dJ['pdfHistory']) {
                            dJ['pdfHistory']['push']({
                                'dest': dH
                                , 'hash': dI
                                , 'page': dM
                            });
                        }
                    } else {
                        dJ['pdfDocument']['getPageIndex'](dL)['then'](function (dN) {
                            dJ['cachePageRef'](dN + 0x1, dL);
                            dK(dL);
                        })['catch'](function () {
                            console['error']('PDFLinkService_navigateTo:\x20\x22' + dL + '\x22\x20is\x20not\x20a\x20valid\x20page\x20reference.');
                        });
                    }
                };
                var dO;
                if (typeof dH === 'string') {
                    dI = dH;
                    dO = this['pdfDocument']['getDestination'](dH);
                } else {
                    dO = Promise['resolve'](dH);
                }
                dO['then'](function (dP) {
                    dH = dP;
                    if (!(dP instanceof Array)) {
                        console['error']('PDFLinkService_navigateTo:\x20\x22' + dP + '\x22\x20is\x20not\x20a\x20valid\x20destination\x20array.');
                        return;
                    }
                    dK(dP[0x0]);
                });
            }
            , 'getDestinationHash': function PDFLinkService_getDestinationHash(dQ) {
                if (typeof dQ === 'string') {
                    return this['getAnchorUrl']('#' + (dx(dQ) ? 'nameddest=' : '') + escape(dQ));
                }
                if (dQ instanceof Array) {
                    var dR = JSON['stringify'](dQ);
                    return this['getAnchorUrl']('#' + escape(dR));
                }
                return this['getAnchorUrl']('');
            }
            , 'getAnchorUrl': function PDFLinkService_getAnchorUrl(dS) {
                return (this['baseUrl'] || '') + dS;
            }
            , 'setHash': function PDFLinkService_setHash(dT) {
                var dU, dV;
                if (dT['indexOf']('=') >= 0x0) {
                    var dW = dv(dT);
                    if ('search' in dW) {
                        this['eventBus']['dispatch']('findfromurlhash', {
                            'source': this
                            , 'query': dW['search']['replace'](/"/g, '')
                            , 'phraseSearch': dW['phrase'] === 'true'
                        });
                    }
                    if ('nameddest' in dW) {
                        if (this['pdfHistory']) {
                            this['pdfHistory']['updateNextHashParam'](dW['nameddest']);
                        }
                        this['navigateTo'](dW['nameddest']);
                        return;
                    }
                    if ('page' in dW) {
                        dU = dW['page'] | 0x0 || 0x1;
                    }
                    if ('zoom' in dW) {
                        var dX = dW['zoom']['split'](',');
                        var dY = dX[0x0];
                        var dZ = parseFloat(dY);
                        if (dY['indexOf']('Fit') === -0x1) {
                            dV = [null, {
                                'name': 'XYZ'
                            }, dX['length'] > 0x1 ? dX[0x1] | 0x0 : null, dX['length'] > 0x2 ? dX[0x2] | 0x0 : null, dZ ? dZ / 0x64 : dY];
                        } else {
                            if (dY === 'Fit' || dY === 'FitB') {
                                dV = [null, {
                                    'name': dY
                                }];
                            } else if (dY === 'FitH' || dY === 'FitBH' || dY === 'FitV' || dY === 'FitBV') {
                                dV = [null, {
                                    'name': dY
                                }, dX['length'] > 0x1 ? dX[0x1] | 0x0 : null];
                            } else if (dY === 'FitR') {
                                if (dX['length'] !== 0x5) {
                                    console['error']('PDFLinkService_setHash:\x20' + 'Not\x20enough\x20parameters\x20for\x20\x27FitR\x27.');
                                } else {
                                    dV = [null, {
                                        'name': dY
                                    }, dX[0x1] | 0x0, dX[0x2] | 0x0, dX[0x3] | 0x0, dX[0x4] | 0x0];
                                }
                            } else {
                                console['error']('PDFLinkService_setHash:\x20\x27' + dY + '\x27\x20is\x20not\x20a\x20valid\x20zoom\x20value.');
                            }
                        }
                    }
                    if (dV) {
                        this['pdfViewer']['scrollPageIntoView']({
                            'pageNumber': dU || this['page']
                            , 'destArray': dV
                            , 'allowNegativeOffset': !![]
                        });
                    } else if (dU) {
                        this['page'] = dU;
                    }
                    if ('pagemode' in dW) {
                        this['eventBus']['dispatch']('pagemode', {
                            'source': this
                            , 'mode': dW['pagemode']
                        });
                    }
                } else {
                    if (dx(dT) && dT <= this['pagesCount']) {
                        console['warn']('PDFLinkService_setHash:\x20specifying\x20a\x20page\x20number\x20' + 'directly\x20after\x20the\x20hash\x20symbol\x20(#)\x20is\x20deprecated,\x20' + 'please\x20use\x20the\x20\x22#page=' + dT + '\x22\x20form\x20instead.');
                        this['page'] = dT | 0x0;
                    }
                    dV = unescape(dT);
                    try {
                        dV = JSON['parse'](dV);
                        if (!(dV instanceof Array)) {
                            dV = dV['toString']();
                        }
                    } catch (e0) {}
                    if (typeof dV === 'string' || e8(dV)) {
                        if (this['pdfHistory']) {
                            this['pdfHistory']['updateNextHashParam'](dV);
                        }
                        this['navigateTo'](dV);
                        return;
                    }
                    console['error']('PDFLinkService_setHash:\x20\x27' + unescape(dT) + '\x27\x20is\x20not\x20a\x20valid\x20destination.');
                }
            }
            , 'executeNamedAction': function PDFLinkService_executeNamedAction(e1) {
                switch (e1) {
                case 'GoBack':
                    if (this['pdfHistory']) {
                        this['pdfHistory']['back']();
                    }
                    break;
                case 'GoForward':
                    if (this['pdfHistory']) {
                        this['pdfHistory']['forward']();
                    }
                    break;
                case 'NextPage':
                    if (this['page'] < this['pagesCount']) {
                        this['page']++;
                    }
                    break;
                case 'PrevPage':
                    if (this['page'] > 0x1) {
                        this['page']--;
                    }
                    break;
                case 'LastPage':
                    this['page'] = this['pagesCount'];
                    break;
                case 'FirstPage':
                    this['page'] = 0x1;
                    break;
                default:
                    break;
                }
                this['eventBus']['dispatch']('namedaction', {
                    'source': this
                    , 'action': e1
                });
            }
            , 'onFileAttachmentAnnotation': function (e2) {
                this['eventBus']['dispatch']('fileattachmentannotation', {
                    'source': this
                    , 'id': e2['id']
                    , 'filename': e2['filename']
                    , 'content': e2['content']
                });
            }
            , 'cachePageRef': function PDFLinkService_cachePageRef(e3, e4) {
                var e5 = e4['num'] + '\x20' + e4['gen'] + '\x20R';
                this['_pagesRefCache'][e5] = e3;
            }
            , '_cachedPageNumber': function PDFLinkService_cachedPageNumber(e6) {
                var e7 = e6['num'] + '\x20' + e6['gen'] + '\x20R';
                return this['_pagesRefCache'] && this['_pagesRefCache'][e7] || null;
            }
        };

        function e8(e9) {
            if (!(e9 instanceof Array)) {
                return ![];
            }
            var ea = e9['length']
                , eb = !![];
            if (ea < 0x2) {
                return ![];
            }
            var ec = e9[0x0];
            if (!(typeof ec === 'object' && typeof ec['num'] === 'number' && (ec['num'] | 0x0) === ec['num'] && typeof ec['gen'] === 'number' && (ec['gen'] | 0x0) === ec['gen']) && !(typeof ec === 'number' && (ec | 0x0) === ec && ec >= 0x0)) {
                return ![];
            }
            var ed = e9[0x1];
            if (!(typeof ed === 'object' && typeof ed['name'] === 'string')) {
                return ![];
            }
            switch (ed['name']) {
            case 'XYZ':
                if (ea !== 0x5) {
                    return ![];
                }
                break;
            case 'Fit':
            case 'FitB':
                return ea === 0x2;
            case 'FitH':
            case 'FitBH':
            case 'FitV':
            case 'FitBV':
                if (ea !== 0x3) {
                    return ![];
                }
                break;
            case 'FitR':
                if (ea !== 0x6) {
                    return ![];
                }
                eb = ![];
                break;
            default:
                return ![];
            }
            for (var ee = 0x2; ee < ea; ee++) {
                var ef = e9[ee];
                if (!(typeof ef === 'number' || eb && ef === null)) {
                    return ![];
                }
            }
            return !![];
        }
        return dz;
    }();
    var eg = function SimpleLinkServiceClosure() {
        function eg() {}
        eg['prototype'] = {
            get 'page'() {
                return 0x0;
            }
            , set 'page'(ei) {}
            , 'navigateTo': function (ej) {}
            , 'getDestinationHash': function (ek) {
                return '#';
            }
            , 'getAnchorUrl': function (el) {
                return '#';
            }
            , 'setHash': function (em) {}
            , 'executeNamedAction': function (en) {}
            , 'onFileAttachmentAnnotation': function (eo) {}
            , 'cachePageRef': function (ep, eq) {}
        };
        return eg;
    }();
    dr['PDFLinkService'] = dz;
    dr['SimpleLinkService'] = eg;
}, function (er, es, et) {
    'use strict';
    var eu = et(0x0);
    var ev = et(0xb);
    var ew = et(0x12);
    var ex = et(0x8);
    var ey = et(0x16);
    var ez = et(0x1d);
    var eA = et(0x18);
    var eB = et(0x1c);
    var eC = et(0x1a);
    var eD = et(0xe);
    var eE = et(0x15);
    var eF = et(0x10);
    var eG = et(0xd);
    var eH = et(0x19);
    var eI = et(0x3);
    var eJ = et(0x5);
    var eK = et(0x13);
    var eL = et(0x4);
    var eM = et(0xf);
    var eN = et(0x7);
    var eO = et(0x11);
    var eP = et(0x2);
    var eQ = et(0x1);
    var eR = eu['UNKNOWN_SCALE'];
    var eS = eu['DEFAULT_SCALE_VALUE'];
    var eT = eu['MIN_SCALE'];
    var eU = eu['MAX_SCALE'];
    var eV = eu['ProgressBar'];
    var eW = eu['getPDFFileNameFromURL'];
    var eX = eu['noContextMenuHandler'];
    var eY = eu['mozL10n'];
    var eZ = eu['parseQueryString'];
    var f0 = ew['PDFHistory'];
    var f1 = ex['Preferences'];
    var f2 = ey['SidebarView'];
    var f3 = ey['PDFSidebar'];
    var f4 = ez['ViewHistory'];
    var f5 = eA['PDFThumbnailViewer'];
    var f6 = eB['Toolbar'];
    var f7 = eC['SecondaryToolbar'];
    var f8 = eD['PasswordPrompt'];
    var f9 = eE['PDFPresentationMode'];
    var fa = eF['PDFDocumentProperties'];
    var fb = eG['HandTool'];
    var fc = eH['PresentationModeState'];
    var fd = eH['PDFViewer'];
    var fe = eI['RenderingStates'];
    var ff = eI['PDFRenderingQueue'];
    var fg = eJ['PDFLinkService'];
    var fh = eK['PDFOutlineViewer'];
    var fi = eL['OverlayManager'];
    var fj = eM['PDFAttachmentViewer'];
    var fk = eN['PDFFindController'];
    var fl = eO['PDFFindBar'];
    var fm = eP['getGlobalEventBus'];
    var fn = eu['normalizeWheelEventDelta'];
    var fo = eu['animationStarted'];
    var fp = eu['localized'];
    var fq = eu['RendererType'];
    var fr = 1.1;
    var fs = 0x1388;

    function ft(fu) {
        fu['imageResourcesPath'] = './images/';
        // fu['workerSrc'] = './build/pdf.worker.js';
        fu['workerSrc'] = 'assets/multimedia/pdf/build/pdf.worker.js';
        fu['cMapUrl'] = '../web/cmaps/';
        fu['cMapPacked'] = !![];
    }
    var fv = {
        'updateFindControlState': function (fw) {}
        , 'initPassiveLoading': function (fx) {}
        , 'fallback': function (fy, fz) {}
        , 'reportTelemetry': function (fA) {}
        , 'createDownloadManager': function () {
            return new ev['DownloadManager']();
        }
        , 'supportsIntegratedFind': ![]
        , 'supportsDocumentFonts': !![]
        , 'supportsDocumentColors': !![]
        , 'supportedMouseWheelZoomModifierKeys': {
            'ctrlKey': !![]
            , 'metaKey': !![]
        }
    };
    var fB = {
        'initialBookmark': document['location']['hash']['substring'](0x1)
        , 'initialDestination': null
        , 'initialized': ![]
        , 'fellback': ![]
        , 'appConfig': null
        , 'pdfDocument': null
        , 'pdfLoadingTask': null
        , 'printService': null
        , 'pdfViewer': null
        , 'pdfThumbnailViewer': null
        , 'pdfRenderingQueue': null
        , 'pdfPresentationMode': null
        , 'pdfDocumentProperties': null
        , 'pdfLinkService': null
        , 'pdfHistory': null
        , 'pdfSidebar': null
        , 'pdfOutlineViewer': null
        , 'pdfAttachmentViewer': null
        , 'store': null
        , 'downloadManager': null
        , 'toolbar': null
        , 'secondaryToolbar': null
        , 'eventBus': null
        , 'pageRotation': 0x0
        , 'isInitialViewSet': ![]
        , 'viewerPrefs': {
            'sidebarViewOnLoad': f2['NONE']
            , 'pdfBugEnabled': ![]
            , 'showPreviousViewOnLoad': !![]
            , 'defaultZoomValue': ''
            , 'disablePageLabels': ![]
            , 'renderer': 'canvas'
            , 'enhanceTextSelection': ![]
            , 'renderInteractiveForms': ![]
            , 'enablePrintAutoRotate': ![]
        }
        , 'isViewerEmbedded': window['parent'] !== window
        , 'url': ''
        , 'baseUrl': ''
        , 'externalServices': fv
        , 'initialize': function pdfViewInitialize(fC) {
            var fD = this;
            var fE = eQ['PDFJS'];
            f1['initialize']();
            this['preferences'] = f1;
            ft(fE);
            this['appConfig'] = fC;
            return this['_readPreferences']()['then'](function () {
                return fD['_initializeViewerComponents']();
            })['then'](function () {
                fD['bindEvents']();
                fD['bindWindowEvents']();
                fp['then'](function () {
                    fD['eventBus']['dispatch']('localized');
                });
                if (fD['isViewerEmbedded'] && !fE['isExternalLinkTargetSet']()) {
                    fE['externalLinkTarget'] = fE['LinkTarget']['TOP'];
                }
                fD['initialized'] = !![];
            });
        }
        , '_readPreferences': function () {
            var fF = this;
            var fG = eQ['PDFJS'];
            return Promise['all']([f1['get']('enableWebGL')['then'](function resolved(fH) {
                fG['disableWebGL'] = !fH;
            }), f1['get']('sidebarViewOnLoad')['then'](function resolved(fI) {
                fF['viewerPrefs']['sidebarViewOnLoad'] = fI;
            }), f1['get']('pdfBugEnabled')['then'](function resolved(fJ) {
                fF['viewerPrefs']['pdfBugEnabled'] = fJ;
            }), f1['get']('showPreviousViewOnLoad')['then'](function resolved(fK) {
                fF['viewerPrefs']['showPreviousViewOnLoad'] = fK;
            }), f1['get']('defaultZoomValue')['then'](function resolved(fL) {
                fF['viewerPrefs']['defaultZoomValue'] = fL;
            }), f1['get']('enhanceTextSelection')['then'](function resolved(fM) {
                fF['viewerPrefs']['enhanceTextSelection'] = fM;
            }), f1['get']('disableTextLayer')['then'](function resolved(fN) {
                if (fG['disableTextLayer'] === !![]) {
                    return;
                }
                fG['disableTextLayer'] = fN;
            }), f1['get']('disableRange')['then'](function resolved(fO) {
                if (fG['disableRange'] === !![]) {
                    return;
                }
                fG['disableRange'] = fO;
            }), f1['get']('disableStream')['then'](function resolved(fP) {
                if (fG['disableStream'] === !![]) {
                    return;
                }
                fG['disableStream'] = fP;
            }), f1['get']('disableAutoFetch')['then'](function resolved(fQ) {
                fG['disableAutoFetch'] = fQ;
            }), f1['get']('disableFontFace')['then'](function resolved(fR) {
                if (fG['disableFontFace'] === !![]) {
                    return;
                }
                fG['disableFontFace'] = fR;
            }), f1['get']('useOnlyCssZoom')['then'](function resolved(fS) {
                fG['useOnlyCssZoom'] = fS;
            }), f1['get']('externalLinkTarget')['then'](function resolved(fT) {
                if (fG['isExternalLinkTargetSet']()) {
                    return;
                }
                fG['externalLinkTarget'] = fT;
            }), f1['get']('renderer')['then'](function resolved(fU) {
                fF['viewerPrefs']['renderer'] = fU;
            }), f1['get']('renderInteractiveForms')['then'](function resolved(fV) {
                fF['viewerPrefs']['renderInteractiveForms'] = fV;
            }), f1['get']('disablePageLabels')['then'](function resolved(fW) {
                fF['viewerPrefs']['disablePageLabels'] = fW;
            }), f1['get']('enablePrintAutoRotate')['then'](function resolved(fX) {
                fF['viewerPrefs']['enablePrintAutoRotate'] = fX;
            })])['catch'](function (fY) {});
        }
        , '_initializeViewerComponents': function () {
            var fZ = this;
            var g0 = this['appConfig'];
            return new Promise(function (g1, g2) {
                var g3 = g0['eventBus'] || fm();
                fZ['eventBus'] = g3;
                var g4 = new ff();
                g4['onIdle'] = fZ['cleanup']['bind'](fZ);
                fZ['pdfRenderingQueue'] = g4;
                var g5 = new fg({
                    'eventBus': g3
                });
                fZ['pdfLinkService'] = g5;
                var g6 = fZ['externalServices']['createDownloadManager']();
                fZ['downloadManager'] = g6;
                var g7 = g0['mainContainer'];
                var g8 = g0['viewerContainer'];
                fZ['pdfViewer'] = new fd({
                    'container': g7
                    , 'viewer': g8
                    , 'eventBus': g3
                    , 'renderingQueue': g4
                    , 'linkService': g5
                    , 'downloadManager': g6
                    , 'renderer': fZ['viewerPrefs']['renderer']
                    , 'enhanceTextSelection': fZ['viewerPrefs']['enhanceTextSelection']
                    , 'renderInteractiveForms': fZ['viewerPrefs']['renderInteractiveForms']
                    , 'enablePrintAutoRotate': fZ['viewerPrefs']['enablePrintAutoRotate']
                });
                g4['setViewer'](fZ['pdfViewer']);
                g5['setViewer'](fZ['pdfViewer']);
                var g9 = g0['sidebar']['thumbnailView'];
                fZ['pdfThumbnailViewer'] = new f5({
                    'container': g9
                    , 'renderingQueue': g4
                    , 'linkService': g5
                });
                g4['setThumbnailViewer'](fZ['pdfThumbnailViewer']);
                fZ['pdfHistory'] = new f0({
                    'linkService': g5
                    , 'eventBus': g3
                });
                g5['setHistory'](fZ['pdfHistory']);
                fZ['findController'] = new fk({
                    'pdfViewer': fZ['pdfViewer']
                });
                fZ['findController']['onUpdateResultsCount'] = function (ga) {
                    if (fZ['supportsIntegratedFind']) {
                        return;
                    }
                    fZ['findBar']['updateResultsCount'](ga);
                };
                fZ['findController']['onUpdateState'] = function (gb, gc, gd) {
                    if (fZ['supportsIntegratedFind']) {
                        fZ['externalServices']['updateFindControlState']({
                            'result': gb
                            , 'findPrevious': gc
                        });
                    } else {
                        fZ['findBar']['updateUIState'](gb, gc, gd);
                    }
                };
                fZ['pdfViewer']['setFindController'](fZ['findController']);
                var ge = Object['create'](g0['findBar']);
                ge['findController'] = fZ['findController'];
                ge['eventBus'] = g3;
                fZ['findBar'] = new fl(ge);
                fZ['overlayManager'] = fi;
                fZ['handTool'] = new fb({
                    'container': g7
                    , 'eventBus': g3
                });
                fZ['pdfDocumentProperties'] = new fa(g0['documentProperties']);
                fZ['toolbar'] = new f6(g0['toolbar'], g7, g3);
                fZ['secondaryToolbar'] = new f7(g0['secondaryToolbar'], g7, g3);
                if (fZ['supportsFullscreen']) {
                    fZ['pdfPresentationMode'] = new f9({
                        'container': g7
                        , 'viewer': g8
                        , 'pdfViewer': fZ['pdfViewer']
                        , 'eventBus': g3
                        , 'contextMenuItems': g0['fullscreen']
                    });
                }
                fZ['passwordPrompt'] = new f8(g0['passwordOverlay']);
                fZ['pdfOutlineViewer'] = new fh({
                    'container': g0['sidebar']['outlineView']
                    , 'eventBus': g3
                    , 'linkService': g5
                });
                fZ['pdfAttachmentViewer'] = new fj({
                    'container': g0['sidebar']['attachmentsView']
                    , 'eventBus': g3
                    , 'downloadManager': g6
                });
                var gf = Object['create'](g0['sidebar']);
                gf['pdfViewer'] = fZ['pdfViewer'];
                gf['pdfThumbnailViewer'] = fZ['pdfThumbnailViewer'];
                gf['pdfOutlineViewer'] = fZ['pdfOutlineViewer'];
                gf['eventBus'] = g3;
                fZ['pdfSidebar'] = new f3(gf);
                fZ['pdfSidebar']['onToggled'] = fZ['forceRendering']['bind'](fZ);
                g1(undefined);
            });
        }
        , 'run': function pdfViewRun(gg) {
            this['initialize'](gg)['then'](ic);
        }
        , 'zoomIn': function pdfViewZoomIn(gh) {
            var gi = this['pdfViewer']['currentScale'];
            do {
                gi = (gi * fr)['toFixed'](0x2);
                gi = Math['ceil'](gi * 0xa) / 0xa;
                gi = Math['min'](eU, gi);
            } while (--gh > 0x0 && gi < eU);
            this['pdfViewer']['currentScaleValue'] = gi;
        }
        , 'zoomOut': function pdfViewZoomOut(gj) {
            var gk = this['pdfViewer']['currentScale'];
            do {
                gk = (gk / fr)['toFixed'](0x2);
                gk = Math['floor'](gk * 0xa) / 0xa;
                gk = Math['max'](eT, gk);
            } while (--gj > 0x0 && gk > eT);
            this['pdfViewer']['currentScaleValue'] = gk;
        }
        , get 'pagesCount'() {
            return this['pdfDocument'] ? this['pdfDocument']['numPages'] : 0x0;
        }
        , set 'page'(gl) {
            this['pdfViewer']['currentPageNumber'] = gl;
        }
        , get 'page'() {
            return this['pdfViewer']['currentPageNumber'];
        }
        , get 'printing'() {
            return !!this['printService'];
        }
        , get 'supportsPrinting'() {
            return k8['instance']['supportsPrinting'];
        }
        , get 'supportsFullscreen'() {
            var gm;
            var gn = document['documentElement'];
            gm = !!(gn['requestFullscreen'] || gn['mozRequestFullScreen'] || gn['webkitRequestFullScreen'] || gn['msRequestFullscreen']);
            if (document['fullscreenEnabled'] === ![] || document['mozFullScreenEnabled'] === ![] || document['webkitFullscreenEnabled'] === ![] || document['msFullscreenEnabled'] === ![]) {
                gm = ![];
            }
            if (gm && eQ['PDFJS']['disableFullscreen'] === !![]) {
                gm = ![];
            }
            return eQ['shadow'](this, 'supportsFullscreen', gm);
        }
        , get 'supportsIntegratedFind'() {
            return this['externalServices']['supportsIntegratedFind'];
        }
        , get 'supportsDocumentFonts'() {
            return this['externalServices']['supportsDocumentFonts'];
        }
        , get 'supportsDocumentColors'() {
            return this['externalServices']['supportsDocumentColors'];
        }
        , get 'loadingBar'() {
            var go = new eV('#loadingBar', {});
            return eQ['shadow'](this, 'loadingBar', go);
        }
        , get 'supportedMouseWheelZoomModifierKeys'() {
            return this['externalServices']['supportedMouseWheelZoomModifierKeys'];
        }
        , 'initPassiveLoading': function pdfViewInitPassiveLoading() {
            throw new Error('Not\x20implemented:\x20initPassiveLoading');
        }
        , 'setTitleUsingUrl': function pdfViewSetTitleUsingUrl(gp) {
            this['url'] = gp;
            this['baseUrl'] = gp['split']('#')[0x0];
            var gq = eW(gp, '');
            if (!gq) {
                try {
                    gq = decodeURIComponent(eQ['getFilenameFromUrl'](gp)) || gp;
                } catch (gr) {
                    gq = gp;
                }
            }
            this['setTitle'](gq);
        }
        , 'setTitle': function pdfViewSetTitle(gs) {
            if (this['isViewerEmbedded']) {
                return;
            }
            document['title'] = gs;
        }
        , 'close': function pdfViewClose() {
            var gt = this['appConfig']['errorWrapper']['container'];
            gt['setAttribute']('hidden', 'true');
            if (!this['pdfLoadingTask']) {
                return Promise['resolve']();
            }
            var gu = this['pdfLoadingTask']['destroy']();
            this['pdfLoadingTask'] = null;
            if (this['pdfDocument']) {
                this['pdfDocument'] = null;
                this['pdfThumbnailViewer']['setDocument'](null);
                this['pdfViewer']['setDocument'](null);
                this['pdfLinkService']['setDocument'](null, null);
            }
            this['store'] = null;
            this['isInitialViewSet'] = ![];
            this['pdfSidebar']['reset']();
            this['pdfOutlineViewer']['reset']();
            this['pdfAttachmentViewer']['reset']();
            this['findController']['reset']();
            this['findBar']['reset']();
            this['toolbar']['reset']();
            this['secondaryToolbar']['reset']();
            if (typeof PDFBug !== 'undefined') {
                PDFBug['cleanup']();
            }
            return gu;
        }
        , 'open': function pdfViewOpen(gv, gw) {
            if (arguments['length'] > 0x2 || typeof gw === 'number') {
                return Promise['reject'](new Error('Call\x20of\x20open()\x20with\x20obsolete\x20signature.'));
            }
            if (this['pdfLoadingTask']) {
                return this['close']()['then'](function () {
                    f1['reload']();
                    return this['open'](gv, gw);
                } ['bind'](this));
            }
            var gx = Object['create'](null)
                , gy;
            if (typeof gv === 'string') {
                this['setTitleUsingUrl'](gv);
                gx['url'] = gv;
            } else if (gv && 'byteLength' in gv) {
                gx['data'] = gv;
            } else if (gv['url'] && gv['originalUrl']) {
                this['setTitleUsingUrl'](gv['originalUrl']);
                gx['url'] = gv['url'];
            }
            if (gw) {
                for (var gz in gw) {
                    gx[gz] = gw[gz];
                }
                if (gw['scale']) {
                    gy = gw['scale'];
                }
                if (gw['length']) {
                    this['pdfDocumentProperties']['setFileSize'](gw['length']);
                }
            }
            var gA = this;
            gA['downloadComplete'] = ![];
            var gB = eQ['getDocument'](gx);
            this['pdfLoadingTask'] = gB;
            gB['onPassword'] = function passwordNeeded(gC, gD) {
                gA['passwordPrompt']['setUpdateCallback'](gC, gD);
                gA['passwordPrompt']['open']();
            };
            gB['onProgress'] = function getDocumentProgress(gE) {
                gA['progress'](gE['loaded'] / gE['total']);
            };
            gB['onUnsupportedFeature'] = this['fallback']['bind'](this);
            return gB['promise']['then'](function getDocumentCallback(gF) {
                gA['load'](gF, gy);
            }, function getDocumentError(gG) {
                var gH = gG && gG['message'];
                var gI = eY['get']('loading_error', null, 'An\x20error\x20occurred\x20while\x20loading\x20the\x20PDF.');
                if (gG instanceof eQ['InvalidPDFException']) {
                    gI = eY['get']('invalid_file_error', null, 'Invalid\x20or\x20corrupted\x20PDF\x20file.');
                } else if (gG instanceof eQ['MissingPDFException']) {
                    gI = eY['get']('missing_file_error', null, 'Missing\x20PDF\x20file.');
                } else if (gG instanceof eQ['UnexpectedResponseException']) {
                    gI = eY['get']('unexpected_response_error', null, 'Unexpected\x20server\x20response.');
                }
                var gJ = {
                    'message': gH
                };
                gA['error'](gI, gJ);
                throw new Error(gI);
            });
        }
        , 'download': function pdfViewDownload() {
            function gK() {
                gN['downloadUrl'](gL, gM);
            }
            var gL = this['baseUrl'];
            var gM = eW(this['url']);
            var gN = this['downloadManager'];
            gN['onerror'] = function (gO) {
                fB['error']('PDF\x20failed\x20to\x20download.');
            };
            if (!this['pdfDocument']) {
                gK();
                return;
            }
            if (!this['downloadComplete']) {
                gK();
                return;
            }
            this['pdfDocument']['getData']()['then'](function getDataSuccess(gP) {
                var gQ = eQ['createBlob'](gP, 'application/pdf');
                gN['download'](gQ, gL, gM);
            }, gK)['then'](null, gK);
        }
        , 'fallback': function pdfViewFallback(gR) {}
        , 'error': function pdfViewError(gS, gT) {
            var gU = eY['get']('error_version_info', {
                'version': eQ['version'] || '?'
                , 'build': eQ['build'] || '?'
            }, 'PDF.js\x20v{{version}}\x20(build:\x20{{build}})') + '\x0a';
            if (gT) {
                gU += eY['get']('error_message', {
                    'message': gT['message']
                }, 'Message:\x20{{message}}');
                if (gT['stack']) {
                    gU += '\x0a' + eY['get']('error_stack', {
                        'stack': gT['stack']
                    }, 'Stack:\x20{{stack}}');
                } else {
                    if (gT['filename']) {
                        gU += '\x0a' + eY['get']('error_file', {
                            'file': gT['filename']
                        }, 'File:\x20{{file}}');
                    }
                    if (gT['lineNumber']) {
                        gU += '\x0a' + eY['get']('error_line', {
                            'line': gT['lineNumber']
                        }, 'Line:\x20{{line}}');
                    }
                }
            }
            var gV = this['appConfig']['errorWrapper'];
            var gW = gV['container'];
            gW['removeAttribute']('hidden');
            var gX = gV['errorMessage'];
            gX['textContent'] = gS;
            var gY = gV['closeButton'];
            gY['onclick'] = function () {
                gW['setAttribute']('hidden', 'true');
            };
            var gZ = gV['errorMoreInfo'];
            var h0 = gV['moreInfoButton'];
            var h1 = gV['lessInfoButton'];
            h0['onclick'] = function () {
                gZ['removeAttribute']('hidden');
                h0['setAttribute']('hidden', 'true');
                h1['removeAttribute']('hidden');
                gZ['style']['height'] = gZ['scrollHeight'] + 'px';
            };
            h1['onclick'] = function () {
                gZ['setAttribute']('hidden', 'true');
                h0['removeAttribute']('hidden');
                h1['setAttribute']('hidden', 'true');
            };
            h0['oncontextmenu'] = eX;
            h1['oncontextmenu'] = eX;
            gY['oncontextmenu'] = eX;
            h0['removeAttribute']('hidden');
            h1['setAttribute']('hidden', 'true');
            gZ['value'] = gU;
        }
        , 'progress': function pdfViewProgress(h2) {
            var h3 = Math['round'](h2 * 0x64);
            if (h3 > this['loadingBar']['percent'] || isNaN(h3)) {
                this['loadingBar']['percent'] = h3;
                if (eQ['PDFJS']['disableAutoFetch'] && h3) {
                    if (this['disableAutoFetchLoadingBarTimeout']) {
                        clearTimeout(this['disableAutoFetchLoadingBarTimeout']);
                        this['disableAutoFetchLoadingBarTimeout'] = null;
                    }
                    this['loadingBar']['show']();
                    this['disableAutoFetchLoadingBarTimeout'] = setTimeout(function () {
                        this['loadingBar']['hide']();
                        this['disableAutoFetchLoadingBarTimeout'] = null;
                    } ['bind'](this), fs);
                }
            }
        }
        , 'load': function pdfViewLoad(h4, h5) {
            var h6 = this;
            h5 = h5 || eR;
            this['pdfDocument'] = h4;
            this['pdfDocumentProperties']['setDocumentAndUrl'](h4, this['url']);
            var h7 = h4['getDownloadInfo']()['then'](function () {
                h6['downloadComplete'] = !![];
                h6['loadingBar']['hide']();
            });
            this['toolbar']['setPagesCount'](h4['numPages'], ![]);
            this['secondaryToolbar']['setPagesCount'](h4['numPages']);
            var h8 = this['documentFingerprint'] = h4['fingerprint'];
            var h9 = this['store'] = new f4(h8);
            var ha;
            ha = null;
            this['pdfLinkService']['setDocument'](h4, ha);
            var hb = this['pdfViewer'];
            hb['currentScale'] = h5;
            hb['setDocument'](h4);
            var hc = hb['firstPagePromise'];
            var hd = hb['pagesPromise'];
            var he = hb['onePageRendered'];
            this['pageRotation'] = 0x0;
            var hf = this['pdfThumbnailViewer'];
            hf['setDocument'](h4);
            hc['then'](function (hg) {
                h7['then'](function () {
                    h6['eventBus']['dispatch']('documentload', {
                        'source': h6
                    });
                });
                h6['loadingBar']['setWidth'](h6['appConfig']['viewerContainer']);
                if (!eQ['PDFJS']['disableHistory'] && !h6['isViewerEmbedded']) {
                    if (!h6['viewerPrefs']['showPreviousViewOnLoad']) {
                        h6['pdfHistory']['clearHistoryState']();
                    }
                    h6['pdfHistory']['initialize'](h6['documentFingerprint']);
                    if (h6['pdfHistory']['initialDestination']) {
                        h6['initialDestination'] = h6['pdfHistory']['initialDestination'];
                    } else if (h6['pdfHistory']['initialBookmark']) {
                        h6['initialBookmark'] = h6['pdfHistory']['initialBookmark'];
                    }
                }
                var hh = {
                    'destination': h6['initialDestination']
                    , 'bookmark': h6['initialBookmark']
                    , 'hash': null
                };
                h9['initializedPromise']['then'](function resolved() {
                    var hi = null
                        , hj = null;
                    if (h6['viewerPrefs']['showPreviousViewOnLoad'] && h9['get']('exists', ![])) {
                        var hk = h9['get']('page', '1');
                        var hl = h6['viewerPrefs']['defaultZoomValue'] || h9['get']('zoom', eS);
                        var hm = h9['get']('scrollLeft', '0');
                        var hn = h9['get']('scrollTop', '0');
                        hi = 'page=' + hk + '&zoom=' + hl + ',' + hm + ',' + hn;
                        hj = h9['get']('sidebarView', f2['NONE']);
                    } else if (h6['viewerPrefs']['defaultZoomValue']) {
                        hi = 'page=1&zoom=' + h6['viewerPrefs']['defaultZoomValue'];
                    }
                    h6['setInitialView'](hi, {
                        'scale': h5
                        , 'sidebarView': hj
                    });
                    hh['hash'] = hi;
                    if (!h6['isViewerEmbedded']) {
                        h6['pdfViewer']['focus']();
                    }
                }, function rejected(ho) {
                    console['error'](ho);
                    h6['setInitialView'](null, {
                        'scale': h5
                    });
                });
                hd['then'](function resolved() {
                    if (!hh['destination'] && !hh['bookmark'] && !hh['hash']) {
                        return;
                    }
                    if (h6['hasEqualPageSizes']) {
                        return;
                    }
                    h6['initialDestination'] = hh['destination'];
                    h6['initialBookmark'] = hh['bookmark'];
                    h6['pdfViewer']['currentScaleValue'] = h6['pdfViewer']['currentScaleValue'];
                    h6['setInitialView'](hh['hash']);
                });
            });
            h4['getPageLabels']()['then'](function (hp) {
                if (!hp || h6['viewerPrefs']['disablePageLabels']) {
                    return;
                }
                var hq = 0x0
                    , hr = hp['length'];
                if (hr !== h6['pagesCount']) {
                    console['error']('The\x20number\x20of\x20Page\x20Labels\x20does\x20not\x20match\x20' + 'the\x20number\x20of\x20pages\x20in\x20the\x20document.');
                    return;
                }
                while (hq < hr && hp[hq] === (hq + 0x1)['toString']()) {
                    hq++;
                }
                if (hq === hr) {
                    return;
                }
                hb['setPageLabels'](hp);
                hf['setPageLabels'](hp);
                h6['toolbar']['setPagesCount'](h4['numPages'], !![]);
                h6['toolbar']['setPageNumber'](hb['currentPageNumber'], hb['currentPageLabel']);
            });
            hd['then'](function () {
                if (h6['supportsPrinting']) {
                    h4['getJavaScript']()['then'](function (hs) {
                        if (hs['length']) {
                            console['warn']('Warning:\x20JavaScript\x20is\x20not\x20supported');
                            h6['fallback'](eQ['UNSUPPORTED_FEATURES']['javaScript']);
                        }
                        var ht = /\bprint\s*\(/;
                        for (var hu = 0x0, hv = hs['length']; hu < hv; hu++) {
                            var hw = hs[hu];
                            if (hw && ht['test'](hw)) {
                                setTimeout(function () {
                                    window['print']();
                                });
                                return;
                            }
                        }
                    });
                }
            });
            Promise['all']([he, fo])['then'](function () {
                h4['getOutline']()['then'](function (hx) {
                    h6['pdfOutlineViewer']['render']({
                        'outline': hx
                    });
                });
                h4['getAttachments']()['then'](function (hy) {
                    h6['pdfAttachmentViewer']['render']({
                        'attachments': hy
                    });
                });
            });
            h4['getMetadata']()['then'](function (hz) {
                var hA = hz['info']
                    , hB = hz['metadata'];
                h6['documentInfo'] = hA;
                h6['metadata'] = hB;
                console['log']('PDF\x20' + h4['fingerprint'] + '\x20[' + hA['PDFFormatVersion'] + '\x20' + (hA['Producer'] || '-')['trim']() + '\x20/\x20' + (hA['Creator'] || '-')['trim']() + ']' + '\x20(PDF.js:\x20' + (eQ['version'] || '-') + (!eQ['PDFJS']['disableWebGL'] ? '\x20[WebGL]' : '') + ')');
                var hC;
                if (hB && hB['has']('dc:title')) {
                    var hD = hB['get']('dc:title');
                    if (hD !== 'Untitled') {
                        hC = hD;
                    }
                }
                if (!hC && hA && hA['Title']) {
                    hC = hA['Title'];
                }
                if (hC) {
                    h6['setTitle'](hC + '\x20-\x20' + document['title']);
                }
                if (hA['IsAcroFormPresent']) {
                    console['warn']('Warning:\x20AcroForm/XFA\x20is\x20not\x20supported');
                    h6['fallback'](eQ['UNSUPPORTED_FEATURES']['forms']);
                }
            });
        }
        , 'setInitialView': function pdfViewSetInitialView(hE, hF) {
            var hG = hF && hF['scale'];
            var hH = hF && hF['sidebarView'];
            this['isInitialViewSet'] = !![];
            this['pdfSidebar']['setInitialView'](this['viewerPrefs']['sidebarViewOnLoad'] || hH | 0x0);
            if (this['initialDestination']) {
                this['pdfLinkService']['navigateTo'](this['initialDestination']);
                this['initialDestination'] = null;
            } else if (this['initialBookmark']) {
                this['pdfLinkService']['setHash'](this['initialBookmark']);
                this['pdfHistory']['push']({
                    'hash': this['initialBookmark']
                }, !![]);
                this['initialBookmark'] = null;
            } else if (hE) {
                this['pdfLinkService']['setHash'](hE);
            } else if (hG) {
                this['pdfViewer']['currentScaleValue'] = hG;
                this['page'] = 0x1;
            }
            this['toolbar']['setPageNumber'](this['pdfViewer']['currentPageNumber'], this['pdfViewer']['currentPageLabel']);
            this['secondaryToolbar']['setPageNumber'](this['pdfViewer']['currentPageNumber']);
            if (!this['pdfViewer']['currentScaleValue']) {
                this['pdfViewer']['currentScaleValue'] = eS;
            }
        }
        , 'cleanup': function pdfViewCleanup() {
            if (!this['pdfDocument']) {
                return;
            }
            this['pdfViewer']['cleanup']();
            this['pdfThumbnailViewer']['cleanup']();
            if (this['pdfViewer']['renderer'] !== fq['SVG']) {
                this['pdfDocument']['cleanup']();
            }
        }
        , 'forceRendering': function pdfViewForceRendering() {
            this['pdfRenderingQueue']['printing'] = this['printing'];
            this['pdfRenderingQueue']['isThumbnailViewEnabled'] = this['pdfSidebar']['isThumbnailViewVisible'];
            this['pdfRenderingQueue']['renderHighestPriority']();
        }
        , 'beforePrint': function pdfViewSetupBeforePrint() {
            if (this['printService']) {
                return;
            }
            if (!this['supportsPrinting']) {
                var hI = eY['get']('printing_not_supported', null, 'Warning:\x20Printing\x20is\x20not\x20fully\x20supported\x20by\x20this\x20browser.');
                this['error'](hI);
                return;
            }
            if (!this['pdfViewer']['pageViewsReady']) {
                var hJ = eY['get']('printing_not_ready', null, 'Warning:\x20The\x20PDF\x20is\x20not\x20fully\x20loaded\x20for\x20printing.');
                window['alert'](hJ);
                return;
            }
            var hK = this['pdfViewer']['getPagesOverview']();
            var hL = this['appConfig']['printContainer'];
            var hM = k8['instance']['createPrintService'](this['pdfDocument'], hK, hL);
            this['printService'] = hM;
            this['forceRendering']();
            hM['layout']();
        }
        , get 'hasEqualPageSizes'() {
            var hN = this['pdfViewer']['getPageView'](0x0);
            for (var hO = 0x1, hP = this['pagesCount']; hO < hP; ++hO) {
                var hQ = this['pdfViewer']['getPageView'](hO);
                if (hQ['width'] !== hN['width'] || hQ['height'] !== hN['height']) {
                    return ![];
                }
            }
            return !![];
        }
        , 'afterPrint': function pdfViewSetupAfterPrint() {
            if (this['printService']) {
                this['printService']['destroy']();
                this['printService'] = null;
            }
            this['forceRendering']();
        }
        , 'rotatePages': function pdfViewRotatePages(hR) {
            var hS = this['page'];
            this['pageRotation'] = (this['pageRotation'] + 0x168 + hR) % 0x168;
            this['pdfViewer']['pagesRotation'] = this['pageRotation'];
            this['pdfThumbnailViewer']['pagesRotation'] = this['pageRotation'];
            this['forceRendering']();
            this['pdfViewer']['currentPageNumber'] = hS;
        }
        , 'requestPresentationMode': function pdfViewRequestPresentationMode() {
            if (!this['pdfPresentationMode']) {
                return;
            }
            this['pdfPresentationMode']['request']();
        }
        , 'bindEvents': function pdfViewBindEvents() {
            var hT = this['eventBus'];
            hT['on']('resize', j0);
            hT['on']('hashchange', j2);
            hT['on']('beforeprint', this['beforePrint']['bind'](this));
            hT['on']('afterprint', this['afterPrint']['bind'](this));
            hT['on']('pagerendered', ix);
            hT['on']('textlayerrendered', iD);
            hT['on']('updateviewarea', iT);
            hT['on']('pagechanging', jC);
            hT['on']('scalechanging', jA);
            hT['on']('sidebarviewchanged', iQ);
            hT['on']('pagemode', iF);
            hT['on']('namedaction', iJ);
            hT['on']('presentationmodechanged', iM);
            hT['on']('presentationmode', jd);
            hT['on']('openfile', je);
            hT['on']('print', jg);
            hT['on']('download', jh);
            hT['on']('firstpage', ji);
            hT['on']('lastpage', jj);
            hT['on']('nextpage', jk);
            hT['on']('previouspage', jl);
            hT['on']('zoomin', jm);
            hT['on']('zoomout', jn);
            hT['on']('pagenumberchanged', jo);
            hT['on']('scalechanged', jr);
            hT['on']('rotatecw', jt);
            hT['on']('rotateccw', ju);
            hT['on']('documentproperties', jv);
            hT['on']('find', jw);
            hT['on']('findfromurlhash', jy);
            hT['on']('fileinputchange', j5);
        }
        , 'bindWindowEvents': function pdfViewBindWindowEvents() {
            var hU = this['eventBus'];
            window['addEventListener']('wheel', jI);
            window['addEventListener']('click', jV);
            window['addEventListener']('keydown', jY);
            window['addEventListener']('resize', function windowResize() {
                hU['dispatch']('resize');
            });
            window['addEventListener']('hashchange', function windowHashChange() {
                hU['dispatch']('hashchange', {
                    'hash': document['location']['hash']['substring'](0x1)
                });
            });
            window['addEventListener']('beforeprint', function windowBeforePrint() {
                hU['dispatch']('beforeprint');
            });
            window['addEventListener']('afterprint', function windowAfterPrint() {
                hU['dispatch']('afterprint');
            });
            window['addEventListener']('change', function windowChange(hV) {
                var hW = hV['target']['files'];
                if (!hW || hW['length'] === 0x0) {
                    return;
                }
                hU['dispatch']('fileinputchange', {
                    'fileInput': hV['target']
                });
            });
        }
    };
    var hX;
    var hY = ['null', 'http://mozilla.github.io', 'https://mozilla.github.io'];
    hX = function hX(hZ) {
        try {
            var i0 = new URL(window['location']['href'])['origin'] || 'null';
            if (hY['indexOf'](i0) >= 0x0) {
                return;
            }
            var i1 = new URL(hZ, window['location']['href'])['origin'];
            if (i1 !== i0) {
                throw new Error('file\x20origin\x20does\x20not\x20match\x20viewer\x27s');
            }
        } catch (i2) {
            var i3 = i2 && i2['message'];
            var i4 = eY['get']('loading_error', null, 'An\x20error\x20occurred\x20while\x20loading\x20the\x20PDF.');
            var i5 = {
                'message': i3
            };
            fB['error'](i4, i5);
            throw i2;
        }
    };

    function i6(i7) {
        return new Promise(function (i8, i9) {
            var ia = fB['appConfig'];
            var ib = document['createElement']('script');
            ib['src'] = ia['debuggerScriptPath'];
            ib['onload'] = function () {
                PDFBug['enable'](i7);
                PDFBug['init'](eQ, ia['mainContainer']);
                i8();
            };
            ib['onerror'] = function () {
                i9(new Error('Cannot\x20load\x20debugger\x20at\x20' + ib['src']));
            };
            (document['getElementsByTagName']('head')[0x0] || document['body'])['appendChild'](ib);
        });
    }

    function ic() {
        var id = fB['appConfig'];
        var ie;
        var ig = document['location']['search']['substring'](0x1);
        var ih = eZ(ig);
        ie = 'file' in ih ? ih['file'] : id['defaultUrl'];
        hX(ie);
        var ii = [];
        var ij = document['createElement']('input');
        ij['id'] = id['openFileInputName'];
        ij['className'] = 'fileInput';
        ij['setAttribute']('type', 'file');
        ij['oncontextmenu'] = eX;
        document['body']['appendChild'](ij);
        if (!window['File'] || !window['FileReader'] || !window['FileList'] || !window['Blob']) {
            id['toolbar']['openFile']['setAttribute']('hidden', 'true');
            id['secondaryToolbar']['openFileButton']['setAttribute']('hidden', 'true');
        } else {
            ij['value'] = null;
        }
        var ik = eQ['PDFJS'];
        if (fB['viewerPrefs']['pdfBugEnabled']) {
            var il = document['location']['hash']['substring'](0x1);
            var im = eZ(il);
            if ('disableworker' in im) {
                ik['disableWorker'] = im['disableworker'] === 'true';
            }
            if ('disablerange' in im) {
                ik['disableRange'] = im['disablerange'] === 'true';
            }
            if ('disablestream' in im) {
                ik['disableStream'] = im['disablestream'] === 'true';
            }
            if ('disableautofetch' in im) {
                ik['disableAutoFetch'] = im['disableautofetch'] === 'true';
            }
            if ('disablefontface' in im) {
                ik['disableFontFace'] = im['disablefontface'] === 'true';
            }
            if ('disablehistory' in im) {
                ik['disableHistory'] = im['disablehistory'] === 'true';
            }
            if ('webgl' in im) {
                ik['disableWebGL'] = im['webgl'] !== 'true';
            }
            if ('useonlycsszoom' in im) {
                ik['useOnlyCssZoom'] = im['useonlycsszoom'] === 'true';
            }
            if ('verbosity' in im) {
                ik['verbosity'] = im['verbosity'] | 0x0;
            }
            if ('ignorecurrentpositiononzoom' in im) {
                ik['ignoreCurrentPositionOnZoom'] = im['ignorecurrentpositiononzoom'] === 'true';
            }
            if ('locale' in im) {
                ik['locale'] = im['locale'];
            }
            if ('textlayer' in im) {
                switch (im['textlayer']) {
                case 'off':
                    ik['disableTextLayer'] = !![];
                    break;
                case 'visible':
                case 'shadow':
                case 'hover':
                    var io = id['viewerContainer'];
                    io['classList']['add']('textLayer-' + im['textlayer']);
                    break;
                }
            }
            if ('pdfbug' in im) {
                ik['pdfBug'] = !![];
                var ip = im['pdfbug'];
                var iq = ip['split'](',');
                ii['push'](i6(iq));
            }
        }
        eY['setLanguage'](ik['locale']);
        if (!fB['supportsPrinting']) {
            id['toolbar']['print']['classList']['add']('hidden');
            id['secondaryToolbar']['printButton']['classList']['add']('hidden');
        }
        if (!fB['supportsFullscreen']) {
            id['toolbar']['presentationModeButton']['classList']['add']('hidden');
            id['secondaryToolbar']['presentationModeButton']['classList']['add']('hidden');
        }
        if (fB['supportsIntegratedFind']) {
            id['toolbar']['viewFind']['classList']['add']('hidden');
        }
        id['sidebar']['mainContainer']['addEventListener']('transitionend', function (ir) {
            if (ir['target'] === this) {
                fB['eventBus']['dispatch']('resize');
            }
        }, !![]);
        id['sidebar']['toggleButton']['addEventListener']('click', function () {
            fB['pdfSidebar']['toggle']();
        });
        Promise['all'](ii)['then'](function () {
            it(ie);
        })['catch'](function (is) {
            fB['error'](eY['get']('loading_error', null, 'An\x20error\x20occurred\x20while\x20opening.'), is);
        });
    }
    var it;
    it = function it(iu) {
        if (iu && iu['lastIndexOf']('file:', 0x0) === 0x0) {
            fB['setTitleUsingUrl'](iu);
            var iv = new XMLHttpRequest();
            iv['onload'] = function () {
                fB['open'](new Uint8Array(iv['response']));
            };
            try {
                iv['open']('GET', iu);
                iv['responseType'] = 'arraybuffer';
                iv['send']();
            } catch (iw) {
                fB['error'](eY['get']('loading_error', null, 'An\x20error\x20occurred\x20while\x20loading\x20the\x20PDF.'), iw);
            }
            return;
        }
        if (iu) {
            fB['open'](iu);
        }
    };

    function ix(iy) {
        var iz = iy['pageNumber'];
        var iA = iz - 0x1;
        var iB = fB['pdfViewer']['getPageView'](iA);
        if (iz === fB['page']) {
            fB['toolbar']['updateLoadingIndicatorState'](![]);
        }
        if (!iB) {
            return;
        }
        if (fB['pdfSidebar']['isThumbnailViewVisible']) {
            var iC = fB['pdfThumbnailViewer']['getThumbnail'](iA);
            iC['setImage'](iB);
        }
        if (eQ['PDFJS']['pdfBug'] && Stats['enabled'] && iB['stats']) {
            Stats['add'](iz, iB['stats']);
        }
        if (iB['error']) {
            fB['error'](eY['get']('rendering_error', null, 'An\x20error\x20occurred\x20while\x20rendering\x20the\x20page.'), iB['error']);
        }
    }

    function iD(iE) {}

    function iF(iG) {
        var iH = iG['mode']
            , iI;
        switch (iH) {
        case 'thumbs':
            iI = f2['THUMBS'];
            break;
        case 'bookmarks':
        case 'outline':
            iI = f2['OUTLINE'];
            break;
        case 'attachments':
            iI = f2['ATTACHMENTS'];
            break;
        case 'none':
            iI = f2['NONE'];
            break;
        default:
            console['error']('Invalid\x20\x22pagemode\x22\x20hash\x20parameter:\x20' + iH);
            return;
        }
        fB['pdfSidebar']['switchView'](iI, !![]);
    }

    function iJ(iK) {
        var iL = iK['action'];
        switch (iL) {
        case 'GoToPage':
            fB['appConfig']['toolbar']['pageNumber']['select']();
            break;
        case 'Find':
            if (!fB['supportsIntegratedFind']) {
                fB['findBar']['toggle']();
            }
            break;
        }
    }

    function iM(iN) {
        var iO = iN['active'];
        var iP = iN['switchInProgress'];
        fB['pdfViewer']['presentationModeState'] = iP ? fc['CHANGING'] : iO ? fc['FULLSCREEN'] : fc['NORMAL'];
    }

    function iQ(iR) {
        fB['pdfRenderingQueue']['isThumbnailViewEnabled'] = fB['pdfSidebar']['isThumbnailViewVisible'];
        var iS = fB['store'];
        if (!iS || !fB['isInitialViewSet']) {
            return;
        }
        iS['initializedPromise']['then'](function () {
            iS['set']('sidebarView', iR['view'])['catch'](function () {});
        });
    }

    function iT(iU) {
        var iV = iU['location']
            , iW = fB['store'];
        if (iW) {
            iW['initializedPromise']['then'](function () {
                iW['setMultiple']({
                    'exists': !![]
                    , 'page': iV['pageNumber']
                    , 'zoom': iV['scale']
                    , 'scrollLeft': iV['left']
                    , 'scrollTop': iV['top']
                })['catch'](function () {});
            });
        }
        var iX = fB['pdfLinkService']['getAnchorUrl'](iV['pdfOpenParams']);
        fB['appConfig']['toolbar']['viewBookmark']['href'] = iX;
        fB['appConfig']['secondaryToolbar']['viewBookmarkButton']['href'] = iX;
        fB['pdfHistory']['updateCurrentBookmark'](iV['pdfOpenParams'], iV['pageNumber']);
        var iY = fB['pdfViewer']['getPageView'](fB['page'] - 0x1);
        var iZ = iY['renderingState'] !== fe['FINISHED'];
        fB['toolbar']['updateLoadingIndicatorState'](iZ);
    }

    function j0() {
        var j1 = fB['pdfViewer']['currentScaleValue'];
        if (j1 === 'auto' || j1 === 'page-fit' || j1 === 'page-width') {
            fB['pdfViewer']['currentScaleValue'] = j1;
        } else if (!j1) {
            fB['pdfViewer']['currentScaleValue'] = eS;
        }
        fB['pdfViewer']['update']();
    }

    function j2(j3) {
        if (fB['pdfHistory']['isHashChangeUnlocked']) {
            var j4 = j3['hash'];
            if (!j4) {
                return;
            }
            if (!fB['isInitialViewSet']) {
                fB['initialBookmark'] = j4;
            } else {
                fB['pdfLinkService']['setHash'](j4);
            }
        }
    }
    var j5;
    j5 = function j5(j6) {
        var j7 = j6['fileInput']['files'][0x0];
        if (!eQ['PDFJS']['disableCreateObjectURL'] && typeof URL !== 'undefined' && URL['createObjectURL']) {
            fB['open'](URL['createObjectURL'](j7));
        } else {
            var j8 = new FileReader();
            j8['onload'] = function webViewerChangeFileReaderOnload(j9) {
                var ja = j9['target']['result'];
                var jb = new Uint8Array(ja);
                fB['open'](jb);
            };
            j8['readAsArrayBuffer'](j7);
        }
        fB['setTitleUsingUrl'](j7['name']);
        var jc = fB['appConfig'];
        jc['toolbar']['viewBookmark']['setAttribute']('hidden', 'true');
        jc['secondaryToolbar']['viewBookmarkButton']['setAttribute']('hidden', 'true');
        jc['toolbar']['download']['setAttribute']('hidden', 'true');
        jc['secondaryToolbar']['downloadButton']['setAttribute']('hidden', 'true');
    };

    function jd() {
        fB['requestPresentationMode']();
    }

    function je() {
        var jf = fB['appConfig']['openFileInputName'];
        document['getElementById'](jf)['click']();
    }

    function jg() {
        window['print']();
    }

    function jh() {
        fB['download']();
    }

    function ji() {
        if (fB['pdfDocument']) {
            fB['page'] = 0x1;
        }
    }

    function jj() {
        if (fB['pdfDocument']) {
            fB['page'] = fB['pagesCount'];
        }
    }

    function jk() {
        fB['page']++;
    }

    function jl() {
        fB['page']--;
    }

    function jm() {
        fB['zoomIn']();
    }

    function jn() {
        fB['zoomOut']();
    }

    function jo(jp) {
        var jq = fB['pdfViewer'];
        jq['currentPageLabel'] = jp['value'];
        if (jp['value'] !== jq['currentPageNumber']['toString']() && jp['value'] !== jq['currentPageLabel']) {
            fB['toolbar']['setPageNumber'](jq['currentPageNumber'], jq['currentPageLabel']);
        }
    }

    function jr(js) {
        fB['pdfViewer']['currentScaleValue'] = js['value'];
    }

    function jt() {
        fB['rotatePages'](0x5a);
    }

    function ju() {
        fB['rotatePages'](-0x5a);
    }

    function jv() {
        fB['pdfDocumentProperties']['open']();
    }

    function jw(jx) {
        fB['findController']['executeCommand']('find' + jx['type'], {
            'query': jx['query']
            , 'phraseSearch': jx['phraseSearch']
            , 'caseSensitive': jx['caseSensitive']
            , 'highlightAll': jx['highlightAll']
            , 'findPrevious': jx['findPrevious']
        });
    }

    function jy(jz) {
        fB['findController']['executeCommand']('find', {
            'query': jz['query']
            , 'phraseSearch': jz['phraseSearch']
            , 'caseSensitive': ![]
            , 'highlightAll': !![]
            , 'findPrevious': ![]
        });
    }

    function jA(jB) {
        fB['toolbar']['setPageScale'](jB['presetValue'], jB['scale']);
        fB['pdfViewer']['update']();
    }

    function jC(jD) {
        var jE = jD['pageNumber'];
        fB['toolbar']['setPageNumber'](jE, jD['pageLabel'] || null);
        fB['secondaryToolbar']['setPageNumber'](jE);
        if (fB['pdfSidebar']['isThumbnailViewVisible']) {
            fB['pdfThumbnailViewer']['scrollThumbnailIntoView'](jE);
        }
        if (eQ['PDFJS']['pdfBug'] && Stats['enabled']) {
            var jF = fB['pdfViewer']['getPageView'](jE - 0x1);
            if (jF['stats']) {
                Stats['add'](jE, jF['stats']);
            }
        }
    }
    var jG = ![]
        , jH;

    function jI(jJ) {
        var jK = fB['pdfViewer'];
        if (jK['isInPresentationMode']) {
            return;
        }
        if (jJ['ctrlKey'] || jJ['metaKey']) {
            var jL = fB['supportedMouseWheelZoomModifierKeys'];
            if (jJ['ctrlKey'] && !jL['ctrlKey'] || jJ['metaKey'] && !jL['metaKey']) {
                return;
            }
            jJ['preventDefault']();
            if (jG) {
                return;
            }
            var jM = jK['currentScale'];
            var jN = fn(jJ);
            var jO = 0x3;
            var jP = jN * jO;
            if (jP < 0x0) {
                fB['zoomOut'](-jP);
            } else {
                fB['zoomIn'](jP);
            }
            var jQ = jK['currentScale'];
            if (jM !== jQ) {
                var jR = jQ / jM - 0x1;
                var jS = jK['container']['getBoundingClientRect']();
                var jT = jJ['clientX'] - jS['left'];
                var jU = jJ['clientY'] - jS['top'];
                jK['container']['scrollLeft'] += jT * jR;
                jK['container']['scrollTop'] += jU * jR;
            }
        } else {
            jG = !![];
            clearTimeout(jH);
            jH = setTimeout(function () {
                jG = ![];
            }, 0x3e8);
        }
    }

    function jV(jW) {
        if (!fB['secondaryToolbar']['isOpen']) {
            return;
        }
        var jX = fB['appConfig'];
        if (fB['pdfViewer']['containsElement'](jW['target']) || jX['toolbar']['container']['contains'](jW['target']) && jW['target'] !== jX['secondaryToolbar']['toggleButton']) {
            fB['secondaryToolbar']['close']();
        }
    }

    function jY(jZ) {
        if (fi['active']) {
            return;
        }
        var k0 = ![]
            , k1 = ![];
        var k2 = (jZ['ctrlKey'] ? 0x1 : 0x0) | (jZ['altKey'] ? 0x2 : 0x0) | (jZ['shiftKey'] ? 0x4 : 0x0) | (jZ['metaKey'] ? 0x8 : 0x0);
        var k3 = fB['pdfViewer'];
        var k4 = k3 && k3['isInPresentationMode'];
        if (k2 === 0x1 || k2 === 0x8 || k2 === 0x5 || k2 === 0xc) {
            switch (jZ['keyCode']) {
            case 0x46:
                if (!fB['supportsIntegratedFind']) {
                    fB['findBar']['open']();
                    k0 = !![];
                }
                break;
            case 0x47:
                if (!fB['supportsIntegratedFind']) {
                    var k5 = fB['findController']['state'];
                    if (k5) {
                        fB['findController']['executeCommand']('findagain', {
                            'query': k5['query']
                            , 'phraseSearch': k5['phraseSearch']
                            , 'caseSensitive': k5['caseSensitive']
                            , 'highlightAll': k5['highlightAll']
                            , 'findPrevious': k2 === 0x5 || k2 === 0xc
                        });
                    }
                    k0 = !![];
                }
                break;
            case 0x3d:
            case 0x6b:
            case 0xbb:
            case 0xab:
                if (!k4) {
                    fB['zoomIn']();
                }
                k0 = !![];
                break;
            case 0xad:
            case 0x6d:
            case 0xbd:
                if (!k4) {
                    fB['zoomOut']();
                }
                k0 = !![];
                break;
            case 0x30:
            case 0x60:
                if (!k4) {
                    setTimeout(function () {
                        k3['currentScaleValue'] = eS;
                    });
                    k0 = ![];
                }
                break;
            case 0x26:
                if (k4 || fB['page'] > 0x1) {
                    fB['page'] = 0x1;
                    k0 = !![];
                    k1 = !![];
                }
                break;
            case 0x28:
                if (k4 || fB['page'] < fB['pagesCount']) {
                    fB['page'] = fB['pagesCount'];
                    k0 = !![];
                    k1 = !![];
                }
                break;
            }
        }
        if (k2 === 0x1 || k2 === 0x8) {
            switch (jZ['keyCode']) {
            case 0x53:
                fB['download']();
                k0 = !![];
                break;
            }
        }
        if (k2 === 0x3 || k2 === 0xa) {
            switch (jZ['keyCode']) {
            case 0x50:
                fB['requestPresentationMode']();
                k0 = !![];
                break;
            case 0x47:
                fB['appConfig']['toolbar']['pageNumber']['select']();
                k0 = !![];
                break;
            }
        }
        if (k0) {
            if (k1 && !k4) {
                k3['focus']();
            }
            jZ['preventDefault']();
            return;
        }
        var k6 = document['activeElement'] || document['querySelector'](':focus');
        var k7 = k6 && k6['tagName']['toUpperCase']();
        if (k7 === 'INPUT' || k7 === 'TEXTAREA' || k7 === 'SELECT') {
            if (jZ['keyCode'] !== 0x1b) {
                return;
            }
        }
        if (k2 === 0x0) {
            switch (jZ['keyCode']) {
            case 0x26:
            case 0x21:
            case 0x8:
                if (!k4 && k3['currentScaleValue'] !== 'page-fit') {
                    break;
                }
            case 0x25:
                if (k3['isHorizontalScrollbarEnabled']) {
                    break;
                }
            case 0x4b:
            case 0x50:
                if (fB['page'] > 0x1) {
                    fB['page']--;
                }
                k0 = !![];
                break;
            case 0x1b:
                if (fB['secondaryToolbar']['isOpen']) {
                    fB['secondaryToolbar']['close']();
                    k0 = !![];
                }
                if (!fB['supportsIntegratedFind'] && fB['findBar']['opened']) {
                    fB['findBar']['close']();
                    k0 = !![];
                }
                break;
            case 0x28:
            case 0x22:
            case 0x20:
                if (!k4 && k3['currentScaleValue'] !== 'page-fit') {
                    break;
                }
            case 0x27:
                if (k3['isHorizontalScrollbarEnabled']) {
                    break;
                }
            case 0x4a:
            case 0x4e:
                if (fB['page'] < fB['pagesCount']) {
                    fB['page']++;
                }
                k0 = !![];
                break;
            case 0x24:
                if (k4 || fB['page'] > 0x1) {
                    fB['page'] = 0x1;
                    k0 = !![];
                    k1 = !![];
                }
                break;
            case 0x23:
                if (k4 || fB['page'] < fB['pagesCount']) {
                    fB['page'] = fB['pagesCount'];
                    k0 = !![];
                    k1 = !![];
                }
                break;
            case 0x48:
                if (!k4) {
                    fB['handTool']['toggle']();
                }
                break;
            case 0x52:
                fB['rotatePages'](0x5a);
                break;
            }
        }
        if (k2 === 0x4) {
            switch (jZ['keyCode']) {
            case 0x20:
                if (!k4 && k3['currentScaleValue'] !== 'page-fit') {
                    break;
                }
                if (fB['page'] > 0x1) {
                    fB['page']--;
                }
                k0 = !![];
                break;
            case 0x52:
                fB['rotatePages'](-0x5a);
                break;
            }
        }
        if (!k0 && !k4) {
            if (jZ['keyCode'] >= 0x21 && jZ['keyCode'] <= 0x28 || jZ['keyCode'] === 0x20 && k7 !== 'BUTTON') {
                k1 = !![];
            }
        }
        if (k2 === 0x2) {
            switch (jZ['keyCode']) {
            case 0x25:
                if (k4) {
                    fB['pdfHistory']['back']();
                    k0 = !![];
                }
                break;
            case 0x27:
                if (k4) {
                    fB['pdfHistory']['forward']();
                    k0 = !![];
                }
                break;
            }
        }
        if (k1 && !k3['containsElement'](k6)) {
            k3['focus']();
        }
        if (k0) {
            jZ['preventDefault']();
        }
    }
    fp['then'](function webViewerLocalized() {
        document['getElementsByTagName']('html')[0x0]['dir'] = eY['getDirection']();
    });
    var k8 = {
        'instance': {
            'supportsPrinting': ![]
            , 'createPrintService': function () {
                throw new Error('Not\x20implemented:\x20createPrintService');
            }
        }
    };
    es['PDFViewerApplication'] = fB;
    es['DefaultExernalServices'] = fv;
    es['PDFPrintServiceFactory'] = k8;
}, function (k9, ka, kb) {
    'use strict';
    var kc = kb(0x0);
    var kd = kc['scrollIntoView'];
    var ke = {
        'FIND_FOUND': 0x0
        , 'FIND_NOTFOUND': 0x1
        , 'FIND_WRAPPED': 0x2
        , 'FIND_PENDING': 0x3
    };
    var kf = -0x32;
    var kg = -0x190;
    var kh = {
        '\u2018': '\x27'
        , '\u2019': '\x27'
        , '\u201A': '\x27'
        , '\u201B': '\x27'
        , '\u201C': '\x22'
        , '\u201D': '\x22'
        , '\u201E': '\x22'
        , '\u201F': '\x22'
        , '\xBC': '1/4'
        , '\xBD': '1/2'
        , '\xBE': '3/4'
    };
    var ki = function PDFFindControllerClosure() {
        function ki(kk) {
            this['pdfViewer'] = kk['pdfViewer'] || null;
            this['onUpdateResultsCount'] = null;
            this['onUpdateState'] = null;
            this['reset']();
            var kl = Object['keys'](kh)['join']('');
            this['normalizationRegex'] = new RegExp('[' + kl + ']', 'g');
        }
        ki['prototype'] = {
            'reset': function PDFFindController_reset() {
                this['startedTextExtraction'] = ![];
                this['extractTextPromises'] = [];
                this['pendingFindMatches'] = Object['create'](null);
                this['active'] = ![];
                this['pageContents'] = [];
                this['pageMatches'] = [];
                this['pageMatchesLength'] = null;
                this['matchCount'] = 0x0;
                this['selected'] = {
                    'pageIdx': -0x1
                    , 'matchIdx': -0x1
                };
                this['offset'] = {
                    'pageIdx': null
                    , 'matchIdx': null
                };
                this['pagesToSearch'] = null;
                this['resumePageIdx'] = null;
                this['state'] = null;
                this['dirtyMatch'] = ![];
                this['findTimeout'] = null;
                this['firstPagePromise'] = new Promise(function (km) {
                    this['resolveFirstPage'] = km;
                } ['bind'](this));
            }
            , 'normalize': function PDFFindController_normalize(kn) {
                return kn['replace'](this['normalizationRegex'], function (ko) {
                    return kh[ko];
                });
            }
            , '_prepareMatches': function PDFFindController_prepareMatches(kp, kq, kr) {
                function ks(kp, ku) {
                    var kv, kw, kx;
                    kv = kp[ku];
                    kx = kp[ku + 0x1];
                    if (ku < kp['length'] - 0x1 && kv['match'] === kx['match']) {
                        kv['skipped'] = !![];
                        return !![];
                    }
                    for (var ky = ku - 0x1; ky >= 0x0; ky--) {
                        kw = kp[ky];
                        if (kw['skipped']) {
                            continue;
                        }
                        if (kw['match'] + kw['matchLength'] < kv['match']) {
                            break;
                        }
                        if (kw['match'] + kw['matchLength'] >= kv['match'] + kv['matchLength']) {
                            kv['skipped'] = !![];
                            return !![];
                        }
                    }
                    return ![];
                }
                var kz, kA;
                kp['sort'](function (kB, kC) {
                    return kB['match'] === kC['match'] ? kB['matchLength'] - kC['matchLength'] : kB['match'] - kC['match'];
                });
                for (kz = 0x0, kA = kp['length']; kz < kA; kz++) {
                    if (ks(kp, kz)) {
                        continue;
                    }
                    kq['push'](kp[kz]['match']);
                    kr['push'](kp[kz]['matchLength']);
                }
            }
            , 'calcFindPhraseMatch': function PDFFindController_calcFindPhraseMatch(kD, kE, kF) {
                var kG = [];
                var kH = kD['length'];
                var kI = -kH;
                while (!![]) {
                    kI = kF['indexOf'](kD, kI + kH);
                    if (kI === -0x1) {
                        break;
                    }
                    kG['push'](kI);
                }
                this['pageMatches'][kE] = kG;
            }
            , 'calcFindWordMatch': function PDFFindController_calcFindWordMatch(kJ, kK, kL) {
                var kM = [];
                var kN = kJ['match'](/\S+/g);
                var kO, kP, kQ;
                for (var kR = 0x0, kS = kN['length']; kR < kS; kR++) {
                    kO = kN[kR];
                    kP = kO['length'];
                    kQ = -kP;
                    while (!![]) {
                        kQ = kL['indexOf'](kO, kQ + kP);
                        if (kQ === -0x1) {
                            break;
                        }
                        kM['push']({
                            'match': kQ
                            , 'matchLength': kP
                            , 'skipped': ![]
                        });
                    }
                }
                if (!this['pageMatchesLength']) {
                    this['pageMatchesLength'] = [];
                }
                this['pageMatchesLength'][kK] = [];
                this['pageMatches'][kK] = [];
                this['_prepareMatches'](kM, this['pageMatches'][kK], this['pageMatchesLength'][kK]);
            }
            , 'calcFindMatch': function PDFFindController_calcFindMatch(kT) {
                var kU = this['normalize'](this['pageContents'][kT]);
                var kV = this['normalize'](this['state']['query']);
                var kW = this['state']['caseSensitive'];
                var kX = this['state']['phraseSearch'];
                var kY = kV['length'];
                if (kY === 0x0) {
                    return;
                }
                if (!kW) {
                    kU = kU['toLowerCase']();
                    kV = kV['toLowerCase']();
                }
                if (kX) {
                    this['calcFindPhraseMatch'](kV, kT, kU);
                } else {
                    this['calcFindWordMatch'](kV, kT, kU);
                }
                this['updatePage'](kT);
                if (this['resumePageIdx'] === kT) {
                    this['resumePageIdx'] = null;
                    this['nextPageMatch']();
                }
                if (this['pageMatches'][kT]['length'] > 0x0) {
                    this['matchCount'] += this['pageMatches'][kT]['length'];
                    this['updateUIResultsCount']();
                }
            }
            , 'extractText': function PDFFindController_extractText() {
                if (this['startedTextExtraction']) {
                    return;
                }
                this['startedTextExtraction'] = !![];
                this['pageContents'] = [];
                var kZ = [];
                var l0 = this['pdfViewer']['pagesCount'];
                for (var l1 = 0x0; l1 < l0; l1++) {
                    this['extractTextPromises']['push'](new Promise(function (l2) {
                        kZ['push'](l2);
                    }));
                }
                var l3 = this;

                function l4(l5) {
                    l3['pdfViewer']['getPageTextContent'](l5)['then'](function textContentResolved(l6) {
                        var l7 = l6['items'];
                        var l8 = [];
                        for (var l1 = 0x0, la = l7['length']; l1 < la; l1++) {
                            l8['push'](l7[l1]['str']);
                        }
                        l3['pageContents']['push'](l8['join'](''));
                        kZ[l5](l5);
                        if (l5 + 0x1 < l3['pdfViewer']['pagesCount']) {
                            l4(l5 + 0x1);
                        }
                    });
                }
                l4(0x0);
            }
            , 'executeCommand': function PDFFindController_executeCommand(lb, lc) {
                if (this['state'] === null || lb !== 'findagain') {
                    this['dirtyMatch'] = !![];
                }
                this['state'] = lc;
                this['updateUIState'](ke['FIND_PENDING']);
                this['firstPagePromise']['then'](function () {
                    this['extractText']();
                    clearTimeout(this['findTimeout']);
                    if (lb === 'find') {
                        this['findTimeout'] = setTimeout(this['nextMatch']['bind'](this), 0xfa);
                    } else {
                        this['nextMatch']();
                    }
                } ['bind'](this));
            }
            , 'updatePage': function PDFFindController_updatePage(ld) {
                if (this['selected']['pageIdx'] === ld) {
                    this['pdfViewer']['currentPageNumber'] = ld + 0x1;
                }
                var le = this['pdfViewer']['getPageView'](ld);
                if (le['textLayer']) {
                    le['textLayer']['updateMatches']();
                }
            }
            , 'nextMatch': function PDFFindController_nextMatch() {
                var lf = this['state']['findPrevious'];
                var lg = this['pdfViewer']['currentPageNumber'] - 0x1;
                var lh = this['pdfViewer']['pagesCount'];
                this['active'] = !![];
                if (this['dirtyMatch']) {
                    this['dirtyMatch'] = ![];
                    this['selected']['pageIdx'] = this['selected']['matchIdx'] = -0x1;
                    this['offset']['pageIdx'] = lg;
                    this['offset']['matchIdx'] = null;
                    this['hadMatch'] = ![];
                    this['resumePageIdx'] = null;
                    this['pageMatches'] = [];
                    this['matchCount'] = 0x0;
                    this['pageMatchesLength'] = null;
                    var li = this;
                    for (var lj = 0x0; lj < lh; lj++) {
                        this['updatePage'](lj);
                        if (!(lj in this['pendingFindMatches'])) {
                            this['pendingFindMatches'][lj] = !![];
                            this['extractTextPromises'][lj]['then'](function (lk) {
                                delete li['pendingFindMatches'][lk];
                                li['calcFindMatch'](lk);
                            });
                        }
                    }
                }
                if (this['state']['query'] === '') {
                    this['updateUIState'](ke['FIND_FOUND']);
                    return;
                }
                if (this['resumePageIdx']) {
                    return;
                }
                var ll = this['offset'];
                this['pagesToSearch'] = lh;
                if (ll['matchIdx'] !== null) {
                    var lm = this['pageMatches'][ll['pageIdx']]['length'];
                    if (!lf && ll['matchIdx'] + 0x1 < lm || lf && ll['matchIdx'] > 0x0) {
                        this['hadMatch'] = !![];
                        ll['matchIdx'] = lf ? ll['matchIdx'] - 0x1 : ll['matchIdx'] + 0x1;
                        this['updateMatch'](!![]);
                        return;
                    }
                    this['advanceOffsetPage'](lf);
                }
                this['nextPageMatch']();
            }
            , 'matchesReady': function PDFFindController_matchesReady(ln) {
                var lo = this['offset'];
                var lp = ln['length'];
                var lq = this['state']['findPrevious'];
                if (lp) {
                    this['hadMatch'] = !![];
                    lo['matchIdx'] = lq ? lp - 0x1 : 0x0;
                    this['updateMatch'](!![]);
                    return !![];
                }
                this['advanceOffsetPage'](lq);
                if (lo['wrapped']) {
                    lo['matchIdx'] = null;
                    if (this['pagesToSearch'] < 0x0) {
                        this['updateMatch'](![]);
                        return !![];
                    }
                }
                return ![];
            }
            , 'updateMatchPosition': function PDFFindController_updateMatchPosition(lr, ls, lt, lu) {
                if (this['selected']['matchIdx'] === ls && this['selected']['pageIdx'] === lr) {
                    var lv = {
                        'top': kf
                        , 'left': kg
                    };
                    kd(lt[lu], lv, !![]);
                }
            }
            , 'nextPageMatch': function PDFFindController_nextPageMatch() {
                if (this['resumePageIdx'] !== null) {
                    console['error']('There\x20can\x20only\x20be\x20one\x20pending\x20page.');
                }
                do {
                    var lw = this['offset']['pageIdx'];
                    var lx = this['pageMatches'][lw];
                    if (!lx) {
                        this['resumePageIdx'] = lw;
                        break;
                    }
                } while (!this['matchesReady'](lx));
            }
            , 'advanceOffsetPage': function PDFFindController_advanceOffsetPage(ly) {
                var lz = this['offset'];
                var lA = this['extractTextPromises']['length'];
                lz['pageIdx'] = ly ? lz['pageIdx'] - 0x1 : lz['pageIdx'] + 0x1;
                lz['matchIdx'] = null;
                this['pagesToSearch']--;
                if (lz['pageIdx'] >= lA || lz['pageIdx'] < 0x0) {
                    lz['pageIdx'] = ly ? lA - 0x1 : 0x0;
                    lz['wrapped'] = !![];
                }
            }
            , 'updateMatch': function PDFFindController_updateMatch(lB) {
                var lC = ke['FIND_NOTFOUND'];
                var lD = this['offset']['wrapped'];
                this['offset']['wrapped'] = ![];
                if (lB) {
                    var lE = this['selected']['pageIdx'];
                    this['selected']['pageIdx'] = this['offset']['pageIdx'];
                    this['selected']['matchIdx'] = this['offset']['matchIdx'];
                    lC = lD ? ke['FIND_WRAPPED'] : ke['FIND_FOUND'];
                    if (lE !== -0x1 && lE !== this['selected']['pageIdx']) {
                        this['updatePage'](lE);
                    }
                }
                this['updateUIState'](lC, this['state']['findPrevious']);
                if (this['selected']['pageIdx'] !== -0x1) {
                    this['updatePage'](this['selected']['pageIdx']);
                }
            }
            , 'updateUIResultsCount': function PDFFindController_updateUIResultsCount() {
                if (this['onUpdateResultsCount']) {
                    this['onUpdateResultsCount'](this['matchCount']);
                }
            }
            , 'updateUIState': function PDFFindController_updateUIState(lF, lG) {
                if (this['onUpdateState']) {
                    this['onUpdateState'](lF, lG, this['matchCount']);
                }
            }
        };
        return ki;
    }();
    ka['FindStates'] = ke;
    ka['PDFFindController'] = ki;
}, function (lH, lI, lJ) {
    'use strict';
    var lK = null;

    function lL() {
        if (!lK) {
            lK = Promise['resolve']({
                'showPreviousViewOnLoad': !![]
                , 'defaultZoomValue': ''
                , 'sidebarViewOnLoad': 0x0
                , 'enableHandToolOnLoad': ![]
                , 'enableWebGL': ![]
                , 'pdfBugEnabled': ![]
                , 'disableRange': ![]
                , 'disableStream': ![]
                , 'disableAutoFetch': ![]
                , 'disableFontFace': ![]
                , 'disableTextLayer': ![]
                , 'useOnlyCssZoom': ![]
                , 'externalLinkTarget': 0x0
                , 'enhanceTextSelection': ![]
                , 'renderer': 'canvas'
                , 'renderInteractiveForms': ![]
                , 'enablePrintAutoRotate': ![]
                , 'disablePageLabels': ![]
            });
        }
        return lK;
    }

    function lM(lN) {
        var lO = {};
        for (var lP in lN) {
            if (Object['prototype']['hasOwnProperty']['call'](lN, lP)) {
                lO[lP] = lN[lP];
            }
        }
        return lO;
    }
    var lQ = {
        'prefs': null
        , 'isInitializedPromiseResolved': ![]
        , 'initializedPromise': null
        , 'initialize': function preferencesInitialize() {
            return this['initializedPromise'] = lL()['then'](function (lR) {
                Object['defineProperty'](this, 'defaults', {
                    'value': Object['freeze'](lR)
                    , 'writable': ![]
                    , 'enumerable': !![]
                    , 'configurable': ![]
                });
                this['prefs'] = lM(lR);
                return this['_readFromStorage'](lR);
            } ['bind'](this))['then'](function (lS) {
                this['isInitializedPromiseResolved'] = !![];
                if (lS) {
                    this['prefs'] = lS;
                }
            } ['bind'](this));
        }
        , '_writeToStorage': function preferences_writeToStorage(lT) {
            return Promise['resolve']();
        }
        , '_readFromStorage': function preferences_readFromStorage(lU) {
            return Promise['resolve']();
        }
        , 'reset': function preferencesReset() {
            return this['initializedPromise']['then'](function () {
                this['prefs'] = lM(this['defaults']);
                return this['_writeToStorage'](this['defaults']);
            } ['bind'](this));
        }
        , 'reload': function preferencesReload() {
            return this['initializedPromise']['then'](function () {
                this['_readFromStorage'](this['defaults'])['then'](function (lV) {
                    if (lV) {
                        this['prefs'] = lV;
                    }
                } ['bind'](this));
            } ['bind'](this));
        }
        , 'set': function preferencesSet(lW, lX) {
            return this['initializedPromise']['then'](function () {
                if (this['defaults'][lW] === undefined) {
                    throw new Error('preferencesSet:\x20\x27' + lW + '\x27\x20is\x20undefined.');
                } else if (lX === undefined) {
                    throw new Error('preferencesSet:\x20no\x20value\x20is\x20specified.');
                }
                var lY = typeof lX;
                var lZ = typeof this['defaults'][lW];
                if (lY !== lZ) {
                    if (lY === 'number' && lZ === 'string') {
                        lX = lX['toString']();
                    } else {
                        throw new Error('Preferences_set:\x20\x27' + lX + '\x27\x20is\x20a\x20\x22' + lY + '\x22,\x20expected\x20\x22' + lZ + '\x22.');
                    }
                } else {
                    if (lY === 'number' && (lX | 0x0) !== lX) {
                        throw new Error('Preferences_set:\x20\x27' + lX + '\x27\x20must\x20be\x20an\x20\x22integer\x22.');
                    }
                }
                this['prefs'][lW] = lX;
                return this['_writeToStorage'](this['prefs']);
            } ['bind'](this));
        }
        , 'get': function preferencesGet(m0) {
            return this['initializedPromise']['then'](function () {
                var m1 = this['defaults'][m0];
                if (m1 === undefined) {
                    throw new Error('preferencesGet:\x20\x27' + m0 + '\x27\x20is\x20undefined.');
                } else {
                    var m2 = this['prefs'][m0];
                    if (m2 !== undefined) {
                        return m2;
                    }
                }
                return m1;
            } ['bind'](this));
        }
    };
    lQ['_writeToStorage'] = function (m3) {
        return new Promise(function (m4) {
            localStorage['setItem']('pdfjs.preferences', JSON['stringify'](m3));
            m4();
        });
    };
    lQ['_readFromStorage'] = function (m5) {
        return new Promise(function (m6) {
            var m7 = JSON['parse'](localStorage['getItem']('pdfjs.preferences'));
            m6(m7);
        });
    };
    lI['Preferences'] = lQ;
}, function (m8, m9, ma) {
    'use strict';
    var mb = ma(0x0);
    var mc = ma(0x4);
    var md = ma(0x6);
    var me = ma(0x1);
    var mf = mb['mozL10n'];
    var mg = mb['CSS_UNITS'];
    var mh = md['PDFPrintServiceFactory'];
    var mi = mc['OverlayManager'];
    var mj = null;

    function mk(ml, mm, mn, mo) {
        var mp = mj['scratchCanvas'];
        var mq = 0x96;
        var mr = mq / 0x48;
        mp['width'] = Math['floor'](mo['width'] * mr);
        mp['height'] = Math['floor'](mo['height'] * mr);
        var ms = Math['floor'](mo['width'] * mg) + 'px';
        var mt = Math['floor'](mo['height'] * mg) + 'px';
        var mu = mp['getContext']('2d');
        mu['save']();
        mu['fillStyle'] = 'rgb(255,\x20255,\x20255)';
        mu['fillRect'](0x0, 0x0, mp['width'], mp['height']);
        mu['restore']();
        return mm['getPage'](mn)['then'](function (mv) {
            var mw = {
                'canvasContext': mu
                , 'transform': [mr, 0x0, 0x0, mr, 0x0, 0x0]
                , 'viewport': mv['getViewport'](0x1, mo['rotation'])
                , 'intent': 'print'
            };
            return mv['render'](mw)['promise'];
        })['then'](function () {
            return {
                'width': ms
                , 'height': mt
            };
        });
    }

    function mx(my, mz, mA) {
        this['pdfDocument'] = my;
        this['pagesOverview'] = mz;
        this['printContainer'] = mA;
        this['currentPage'] = -0x1;
        this['scratchCanvas'] = document['createElement']('canvas');
    }
    mx['prototype'] = {
        'layout': function () {
            this['throwIfInactive']();
            var mB = document['querySelector']('body');
            mB['setAttribute']('data-pdfjsprinting', !![]);
            var mC = this['pagesOverview']['every'](function (mD) {
                return mD['width'] === this['pagesOverview'][0x0]['width'] && mD['height'] === this['pagesOverview'][0x0]['height'];
            }, this);
            if (!mC) {
                console['warn']('Not\x20all\x20pages\x20have\x20the\x20same\x20size.\x20The\x20printed\x20' + 'result\x20may\x20be\x20incorrect!');
            }
            this['pageStyleSheet'] = document['createElement']('style');
            var mE = this['pagesOverview'][0x0];
            this['pageStyleSheet']['textContent'] = '@supports\x20((size:A4)\x20and\x20(size:1pt\x201pt))\x20{' + '@page\x20{\x20size:\x20' + mE['width'] + 'pt\x20' + mE['height'] + 'pt;}' + '}';
            mB['appendChild'](this['pageStyleSheet']);
        }
        , 'destroy': function () {
            if (mj !== this) {
                return;
            }
            this['printContainer']['textContent'] = '';
            if (this['pageStyleSheet'] && this['pageStyleSheet']['parentNode']) {
                this['pageStyleSheet']['parentNode']['removeChild'](this['pageStyleSheet']);
                this['pageStyleSheet'] = null;
            }
            this['scratchCanvas']['width'] = this['scratchCanvas']['height'] = 0x0;
            this['scratchCanvas'] = null;
            mj = null;
            nb()['then'](function () {
                if (mi['active'] !== 'printServiceOverlay') {
                    return;
                }
                mi['close']('printServiceOverlay');
            });
        }
        , 'renderPages': function () {
            var mF = this['pagesOverview']['length'];
            var mG = function (mH, mI) {
                this['throwIfInactive']();
                if (++this['currentPage'] >= mF) {
                    mY(mF, mF);
                    mH();
                    return;
                }
                var mJ = this['currentPage'];
                mY(mJ, mF);
                mk(this, this['pdfDocument'], mJ + 0x1, this['pagesOverview'][mJ])['then'](this['useRenderedPage']['bind'](this))['then'](function () {
                    mG(mH, mI);
                }, mI);
            } ['bind'](this);
            return new Promise(mG);
        }
        , 'useRenderedPage': function (mK) {
            this['throwIfInactive']();
            var mL = document['createElement']('img');
            mL['style']['width'] = mK['width'];
            mL['style']['height'] = mK['height'];
            var mM = this['scratchCanvas'];
            if ('toBlob' in mM && !me['PDFJS']['disableCreateObjectURL']) {
                mM['toBlob'](function (mN) {
                    mL['src'] = URL['createObjectURL'](mN);
                });
            } else {
                mL['src'] = mM['toDataURL']();
            }
            var mO = document['createElement']('div');
            mO['appendChild'](mL);
            this['printContainer']['appendChild'](mO);
            return new Promise(function (mP, mQ) {
                mL['onload'] = mP;
                mL['onerror'] = mQ;
            });
        }
        , 'performPrint': function () {
            this['throwIfInactive']();
            return new Promise(function (mR) {
                setTimeout(function () {
                    if (!this['active']) {
                        mR();
                        return;
                    }
                    mS['call'](window);
                    setTimeout(mR, 0x14);
                } ['bind'](this), 0x0);
            } ['bind'](this));
        }
        , get 'active'() {
            return this === mj;
        }
        , 'throwIfInactive': function () {
            if (!this['active']) {
                throw new Error('This\x20print\x20request\x20was\x20cancelled\x20or\x20completed.');
            }
        }
    };
    var mS = window['print'];
    window['print'] = function mS() {
        if (mj) {
            console['warn']('Ignored\x20window.print()\x20because\x20of\x20a\x20pending\x20print\x20job.');
            return;
        }
        nb()['then'](function () {
            if (mj) {
                mi['open']('printServiceOverlay');
            }
        });
        try {
            mU('beforeprint');
        } finally {
            if (!mj) {
                console['error']('Expected\x20print\x20service\x20to\x20be\x20initialized.');
                if (mi['active'] === 'printServiceOverlay') {
                    mi['close']('printServiceOverlay');
                }
                return;
            }
            var mT = mj;
            mj['renderPages']()['then'](function () {
                return mT['performPrint']();
            })['catch'](function () {})['then'](function () {
                if (mT['active']) {
                    mX();
                }
            });
        }
    };

    function mU(mV) {
        var mW = document['createEvent']('CustomEvent');
        mW['initCustomEvent'](mV, ![], ![], 'custom');
        window['dispatchEvent'](mW);
    }

    function mX() {
        if (mj) {
            mj['destroy']();
            mU('afterprint');
        }
    }

    function mY(mZ, n0) {
        var n1 = document['getElementById']('printServiceOverlay');
        var n2 = Math['round'](0x64 * mZ / n0);
        var n3 = n1['querySelector']('progress');
        var n4 = n1['querySelector']('.relative-progress');
        n3['value'] = n2;
        n4['textContent'] = mf['get']('print_progress_percent', {
            'progress': n2
        }, n2 + '%');
    }
    var n5 = !!document['attachEvent'];
    window['addEventListener']('keydown', function (n6) {
        if (n6['keyCode'] === 0x50 && (n6['ctrlKey'] || n6['metaKey']) && !n6['altKey'] && (!n6['shiftKey'] || window['chrome'] || window['opera'])) {
            window['print']();
            if (n5) {
                return;
            }
            n6['preventDefault']();
            if (n6['stopImmediatePropagation']) {
                n6['stopImmediatePropagation']();
            } else {
                n6['stopPropagation']();
            }
            return;
        }
    }, !![]);
    if (n5) {
        document['attachEvent']('onkeydown', function (n7) {
            n7 = n7 || window['event'];
            if (n7['keyCode'] === 0x50 && n7['ctrlKey']) {
                n7['keyCode'] = 0x0;
                return ![];
            }
        });
    }
    if ('onbeforeprint' in window) {
        var n8 = function (n9) {
            if (n9['detail'] !== 'custom' && n9['stopImmediatePropagation']) {
                n9['stopImmediatePropagation']();
            }
        };
        window['addEventListener']('beforeprint', n8);
        window['addEventListener']('afterprint', n8);
    }
    var na;

    function nb() {
        if (!na) {
            na = mi['register']('printServiceOverlay', document['getElementById']('printServiceOverlay'), mX, !![]);
            document['getElementById']('printCancel')['onclick'] = mX;
        }
        return na;
    }
    mh['instance'] = {
        'supportsPrinting': !![]
        , 'createPrintService': function (nc, nd, ne) {
            if (mj) {
                throw new Error('The\x20print\x20service\x20is\x20created\x20and\x20active.');
            }
            mj = new mx(nc, nd, ne);
            return mj;
        }
    };
    m9['PDFPrintService'] = mx;
}, function (nf, ng, nh) {
    'use strict';
    var ni = nh(0x0);
    var nj = nh(0x5);
    var nk = nh(0x1);
    var nl = ni['mozL10n'];
    var nm = nj['SimpleLinkService'];
    var nn = function AnnotationLayerBuilderClosure() {
        function nn(np) {
            this['pageDiv'] = np['pageDiv'];
            this['pdfPage'] = np['pdfPage'];
            this['renderInteractiveForms'] = np['renderInteractiveForms'];
            this['linkService'] = np['linkService'];
            this['downloadManager'] = np['downloadManager'];
            this['div'] = null;
        }
        nn['prototype'] = {
            'render': function AnnotationLayerBuilder_render(nq, nr) {
                var ns = this;
                var nt = {
                    'intent': nr === undefined ? 'display' : nr
                };
                this['pdfPage']['getAnnotations'](nt)['then'](function (nu) {
                    nq = nq['clone']({
                        'dontFlip': !![]
                    });
                    nt = {
                        'viewport': nq
                        , 'div': ns['div']
                        , 'annotations': nu
                        , 'page': ns['pdfPage']
                        , 'renderInteractiveForms': ns['renderInteractiveForms']
                        , 'linkService': ns['linkService']
                        , 'downloadManager': ns['downloadManager']
                    };
                    if (ns['div']) {
                        nk['AnnotationLayer']['update'](nt);
                    } else {
                        if (nu['length'] === 0x0) {
                            return;
                        }
                        ns['div'] = document['createElement']('div');
                        ns['div']['className'] = 'annotationLayer';
                        ns['pageDiv']['appendChild'](ns['div']);
                        nt['div'] = ns['div'];
                        nk['AnnotationLayer']['render'](nt);
                        if (typeof nl !== 'undefined') {
                            nl['translate'](ns['div']);
                        }
                    }
                });
            }
            , 'hide': function AnnotationLayerBuilder_hide() {
                if (!this['div']) {
                    return;
                }
                this['div']['setAttribute']('hidden', 'true');
            }
        };
        return nn;
    }();

    function nv() {}
    nv['prototype'] = {
        'createAnnotationLayerBuilder': function (nw, nx, ny) {
            return new nn({
                'pageDiv': nw
                , 'pdfPage': nx
                , 'renderInteractiveForms': ny
                , 'linkService': new nm()
            });
        }
    };
    ng['AnnotationLayerBuilder'] = nn;
    ng['DefaultAnnotationLayerFactory'] = nv;
}, function (nz, nA, nB) {
    'use strict';
    var nC = nB(0x1);

    function nD(nE, nF) {
        var nG = document['createElement']('a');
        if (nG['click']) {
            nG['href'] = nE;
            nG['target'] = '_parent';
            if ('download' in nG) {
                nG['download'] = nF;
            }(document['body'] || document['documentElement'])['appendChild'](nG);
            nG['click']();
            nG['parentNode']['removeChild'](nG);
        } else {
            if (window['top'] === window && nE['split']('#')[0x0] === window['location']['href']['split']('#')[0x0]) {
                var nH = nE['indexOf']('?') === -0x1 ? '?' : '&';
                nE = nE['replace'](/#|$/, nH + '$&');
            }
            window['open'](nE, '_parent');
        }
    }

    function nI() {}
    nI['prototype'] = {
        'downloadUrl': function DownloadManager_downloadUrl(nJ, nK) {
            if (!nC['createValidAbsoluteUrl'](nJ, 'http://example.com')) {
                return;
            }
            nD(nJ + '#pdfjs.action=download', nK);
        }
        , 'downloadData': function DownloadManager_downloadData(nL, nM, nN) {
            if (navigator['msSaveBlob']) {
                return navigator['msSaveBlob'](new Blob([nL], {
                    'type': nN
                }), nM);
            }
            var nO = nC['createObjectURL'](nL, nN, nC['PDFJS']['disableCreateObjectURL']);
            nD(nO, nM);
        }
        , 'download': function DownloadManager_download(nP, nQ, nR) {
            if (navigator['msSaveBlob']) {
                if (!navigator['msSaveBlob'](nP, nR)) {
                    this['downloadUrl'](nQ, nR);
                }
                return;
            }
            if (nC['PDFJS']['disableCreateObjectURL']) {
                this['downloadUrl'](nQ, nR);
                return;
            }
            var nS = URL['createObjectURL'](nP);
            nD(nS, nR);
        }
    };
    nA['DownloadManager'] = nI;
}, function (nT, nU, nV) {
    'use strict';

    function nW(nX) {
        this['element'] = nX['element'];
        this['document'] = nX['element']['ownerDocument'];
        if (typeof nX['ignoreTarget'] === 'function') {
            this['ignoreTarget'] = nX['ignoreTarget'];
        }
        this['onActiveChanged'] = nX['onActiveChanged'];
        this['activate'] = this['activate']['bind'](this);
        this['deactivate'] = this['deactivate']['bind'](this);
        this['toggle'] = this['toggle']['bind'](this);
        this['_onmousedown'] = this['_onmousedown']['bind'](this);
        this['_onmousemove'] = this['_onmousemove']['bind'](this);
        this['_endPan'] = this['_endPan']['bind'](this);
        var nY = this['overlay'] = document['createElement']('div');
        nY['className'] = 'grab-to-pan-grabbing';
    }
    nW['prototype'] = {
        'CSS_CLASS_GRAB': 'grab-to-pan-grab'
        , 'activate': function GrabToPan_activate() {
            if (!this['active']) {
                this['active'] = !![];
                this['element']['addEventListener']('mousedown', this['_onmousedown'], !![]);
                this['element']['classList']['add'](this['CSS_CLASS_GRAB']);
                if (this['onActiveChanged']) {
                    this['onActiveChanged'](!![]);
                }
            }
        }
        , 'deactivate': function GrabToPan_deactivate() {
            if (this['active']) {
                this['active'] = ![];
                this['element']['removeEventListener']('mousedown', this['_onmousedown'], !![]);
                this['_endPan']();
                this['element']['classList']['remove'](this['CSS_CLASS_GRAB']);
                if (this['onActiveChanged']) {
                    this['onActiveChanged'](![]);
                }
            }
        }
        , 'toggle': function GrabToPan_toggle() {
            if (this['active']) {
                this['deactivate']();
            } else {
                this['activate']();
            }
        }
        , 'ignoreTarget': function GrabToPan_ignoreTarget(nZ) {
            return nZ[o8]('a[href],\x20a[href]\x20*,\x20input,\x20textarea,\x20button,\x20button\x20*,\x20select,\x20option');
        }
        , '_onmousedown': function GrabToPan__onmousedown(o0) {
            if (o0['button'] !== 0x0 || this['ignoreTarget'](o0['target'])) {
                return;
            }
            if (o0['originalTarget']) {
                try {
                    o0['originalTarget']['tagName'];
                } catch (o1) {
                    return;
                }
            }
            this['scrollLeftStart'] = this['element']['scrollLeft'];
            this['scrollTopStart'] = this['element']['scrollTop'];
            this['clientXStart'] = o0['clientX'];
            this['clientYStart'] = o0['clientY'];
            this['document']['addEventListener']('mousemove', this['_onmousemove'], !![]);
            this['document']['addEventListener']('mouseup', this['_endPan'], !![]);
            this['element']['addEventListener']('scroll', this['_endPan'], !![]);
            o0['preventDefault']();
            o0['stopPropagation']();
            var o2 = document['activeElement'];
            if (o2 && !o2['contains'](o0['target'])) {
                o2['blur']();
            }
        }
        , '_onmousemove': function GrabToPan__onmousemove(o3) {
            this['element']['removeEventListener']('scroll', this['_endPan'], !![]);
            if ( of (o3)) {
                this['_endPan']();
                return;
            }
            var o4 = o3['clientX'] - this['clientXStart'];
            var o5 = o3['clientY'] - this['clientYStart'];
            var o6 = this['scrollTopStart'] - o5;
            var o7 = this['scrollLeftStart'] - o4;
            if (this['element']['scrollTo']) {
                this['element']['scrollTo']({
                    'top': o6
                    , 'left': o7
                    , 'behavior': 'instant'
                });
            } else {
                this['element']['scrollTop'] = o6;
                this['element']['scrollLeft'] = o7;
            }
            if (!this['overlay']['parentNode']) {
                document['body']['appendChild'](this['overlay']);
            }
        }
        , '_endPan': function GrabToPan__endPan() {
            this['element']['removeEventListener']('scroll', this['_endPan'], !![]);
            this['document']['removeEventListener']('mousemove', this['_onmousemove'], !![]);
            this['document']['removeEventListener']('mouseup', this['_endPan'], !![]);
            this['overlay']['remove']();
        }
    };
    var o8;
    ['webkitM', 'mozM', 'msM', 'oM', 'm']['some'](function (o9) {
        var oa = o9 + 'atches';
        if (oa in document['documentElement']) {
            o8 = oa;
        }
        oa += 'Selector';
        if (oa in document['documentElement']) {
            o8 = oa;
        }
        return o8;
    });
    var ob = !document['documentMode'] || document['documentMode'] > 0x9;
    var oc = window['chrome'];
    var od = oc && (oc['webstore'] || oc['app']);
    var oe = /Apple/ ['test'](navigator['vendor']) && /Version\/([6-9]\d*|[1-5]\d+)/ ['test'](navigator['userAgent']);

    function of (og) {
        if ('buttons' in og && ob) {
            return !(og['buttons'] & 0x1);
        }
        if (od || oe) {
            return og['which'] === 0x0;
        }
    }
    nU['GrabToPan'] = nW;
}, function (oh, oi, oj) {
    'use strict';
    var ok = oj(0xc);
    var ol = oj(0x8);
    var om = oj(0x0);
    var on = ok['GrabToPan'];
    var oo = ol['Preferences'];
    var op = om['localized'];
    var oq = function HandToolClosure() {
        function oq(os) {
            this['container'] = os['container'];
            this['eventBus'] = os['eventBus'];
            this['wasActive'] = ![];
            this['handTool'] = new on({
                'element': this['container']
                , 'onActiveChanged': function (ot) {
                    this['eventBus']['dispatch']('handtoolchanged', {
                        'isActive': ot
                    });
                } ['bind'](this)
            });
            this['eventBus']['on']('togglehandtool', this['toggle']['bind'](this));
            Promise['all']([op, oo['get']('enableHandToolOnLoad')])['then'](function resolved(ou) {
                if (ou[0x1] === !![]) {
                    this['handTool']['activate']();
                }
            } ['bind'](this))['catch'](function rejected(ov) {});
            this['eventBus']['on']('presentationmodechanged', function (ow) {
                if (ow['switchInProgress']) {
                    return;
                }
                if (ow['active']) {
                    this['enterPresentationMode']();
                } else {
                    this['exitPresentationMode']();
                }
            } ['bind'](this));
        }
        oq['prototype'] = {
            get 'isActive'() {
                return !!this['handTool']['active'];
            }
            , 'toggle': function HandTool_toggle() {
                this['handTool']['toggle']();
            }
            , 'enterPresentationMode': function HandTool_enterPresentationMode() {
                if (this['isActive']) {
                    this['wasActive'] = !![];
                    this['handTool']['deactivate']();
                }
            }
            , 'exitPresentationMode': function HandTool_exitPresentationMode() {
                if (this['wasActive']) {
                    this['wasActive'] = ![];
                    this['handTool']['activate']();
                }
            }
        };
        return oq;
    }();
    oi['HandTool'] = oq;
}, function (ox, oy, oz) {
    'use strict';
    var oA = oz(0x0);
    var oB = oz(0x4);
    var oC = oz(0x1);
    var oD = oA['mozL10n'];
    var oE = oB['OverlayManager'];
    var oF = function PasswordPromptClosure() {
        function oF(oH) {
            this['overlayName'] = oH['overlayName'];
            this['container'] = oH['container'];
            this['label'] = oH['label'];
            this['input'] = oH['input'];
            this['submitButton'] = oH['submitButton'];
            this['cancelButton'] = oH['cancelButton'];
            this['updateCallback'] = null;
            this['reason'] = null;
            this['submitButton']['addEventListener']('click', this['verify']['bind'](this));
            this['cancelButton']['addEventListener']('click', this['close']['bind'](this));
            this['input']['addEventListener']('keydown', function (oI) {
                if (oI['keyCode'] === 0xd) {
                    this['verify']();
                }
            } ['bind'](this));
            oE['register'](this['overlayName'], this['container'], this['close']['bind'](this), !![]);
        }
        oF['prototype'] = {
            'open': function PasswordPrompt_open() {
                oE['open'](this['overlayName'])['then'](function () {
                    this['input']['type'] = 'password';
                    this['input']['focus']();
                    var oJ = oD['get']('password_label', null, 'Enter\x20the\x20password\x20to\x20open\x20this\x20PDF\x20file.');
                    if (this['reason'] === oC['PasswordResponses']['INCORRECT_PASSWORD']) {
                        oJ = oD['get']('password_invalid', null, 'Invalid\x20password.\x20Please\x20try\x20again.');
                    }
                    this['label']['textContent'] = oJ;
                } ['bind'](this));
            }
            , 'close': function PasswordPrompt_close() {
                oE['close'](this['overlayName'])['then'](function () {
                    this['input']['value'] = '';
                    this['input']['type'] = '';
                } ['bind'](this));
            }
            , 'verify': function PasswordPrompt_verify() {
                var oK = this['input']['value'];
                if (oK && oK['length'] > 0x0) {
                    this['close']();
                    return this['updateCallback'](oK);
                }
            }
            , 'setUpdateCallback': function PasswordPrompt_setUpdateCallback(oL, oM) {
                this['updateCallback'] = oL;
                this['reason'] = oM;
            }
        };
        return oF;
    }();
    oy['PasswordPrompt'] = oF;
}, function (oN, oO, oP) {
    'use strict';
    var oQ = oP(0x1);
    var oR = function PDFAttachmentViewerClosure() {
        function oR(oT) {
            this['attachments'] = null;
            this['container'] = oT['container'];
            this['eventBus'] = oT['eventBus'];
            this['downloadManager'] = oT['downloadManager'];
            this['_renderedCapability'] = oQ['createPromiseCapability']();
            this['eventBus']['on']('fileattachmentannotation', this['_appendAttachment']['bind'](this));
        }
        oR['prototype'] = {
            'reset': function PDFAttachmentViewer_reset(oU) {
                this['attachments'] = null;
                this['container']['textContent'] = '';
                if (!oU) {
                    this['_renderedCapability'] = oQ['createPromiseCapability']();
                }
            }
            , '_dispatchEvent': function PDFAttachmentViewer_dispatchEvent(oV) {
                this['eventBus']['dispatch']('attachmentsloaded', {
                    'source': this
                    , 'attachmentsCount': oV
                });
                this['_renderedCapability']['resolve']();
            }
            , '_bindPdfLink': function PDFAttachmentViewer_bindPdfLink(oW, oX, oY) {
                var oZ;
                oW['onclick'] = function () {
                    if (!oZ) {
                        oZ = oQ['createObjectURL'](oX, 'application/pdf', oQ['PDFJS']['disableCreateObjectURL']);
                    }
                    var p0;
                    p0 = '?file=' + encodeURIComponent(oZ + '#' + oY);
                    window['open'](p0);
                    return ![];
                };
            }
            , '_bindLink': function PDFAttachmentViewer_bindLink(p1, p2, p3) {
                p1['onclick'] = function downloadFile(p4) {
                    this['downloadManager']['downloadData'](p2, p3, '');
                    return ![];
                } ['bind'](this);
            }
            , 'render': function PDFAttachmentViewer_render(p5) {
                p5 = p5 || {};
                var p6 = p5['attachments'] || null;
                var p7 = 0x0;
                if (this['attachments']) {
                    var p8 = p5['keepRenderedCapability'] === !![];
                    this['reset'](p8);
                }
                this['attachments'] = p6;
                if (!p6) {
                    this['_dispatchEvent'](p7);
                    return;
                }
                var p9 = Object['keys'](p6)['sort'](function (pa, pb) {
                    return pa['toLowerCase']()['localeCompare'](pb['toLowerCase']());
                });
                p7 = p9['length'];
                for (var pc = 0x0; pc < p7; pc++) {
                    var pd = p6[p9[pc]];
                    var pe = oQ['getFilenameFromUrl'](pd['filename']);
                    pe = oQ['removeNullCharacters'](pe);
                    var pf = document['createElement']('div');
                    pf['className'] = 'attachmentsItem';
                    var pg = document['createElement']('button');
                    pg['textContent'] = pe;
                    if (/\.pdf$/i ['test'](pe)) {
                        this['_bindPdfLink'](pg, pd['content'], pe);
                    } else {
                        this['_bindLink'](pg, pd['content'], pe);
                    }
                    pf['appendChild'](pg);
                    this['container']['appendChild'](pf);
                }
                this['_dispatchEvent'](p7);
            }
            , '_appendAttachment': function PDFAttachmentViewer_appendAttachment(ph) {
                this['_renderedCapability']['promise']['then'](function (pi, pj, pk) {
                    var pl = this['attachments'];
                    if (!pl) {
                        pl = Object['create'](null);
                    } else {
                        for (var pm in pl) {
                            if (pi === pm) {
                                return;
                            }
                        }
                    }
                    pl[pi] = {
                        'filename': pj
                        , 'content': pk
                    };
                    this['render']({
                        'attachments': pl
                        , 'keepRenderedCapability': !![]
                    });
                } ['bind'](this, ph['id'], ph['filename'], ph['content']));
            }
        };
        return oR;
    }();
    oO['PDFAttachmentViewer'] = oR;
}, function (pn, po, pp) {
    'use strict';
    var pq = pp(0x0);
    var pr = pp(0x4);
    var ps = pq['getPDFFileNameFromURL'];
    var pt = pq['mozL10n'];
    var pu = pr['OverlayManager'];
    var pv = function PDFDocumentPropertiesClosure() {
        function pv(px) {
            this['fields'] = px['fields'];
            this['overlayName'] = px['overlayName'];
            this['container'] = px['container'];
            this['rawFileSize'] = 0x0;
            this['url'] = null;
            this['pdfDocument'] = null;
            if (px['closeButton']) {
                px['closeButton']['addEventListener']('click', this['close']['bind'](this));
            }
            this['dataAvailablePromise'] = new Promise(function (py) {
                this['resolveDataAvailable'] = py;
            } ['bind'](this));
            pu['register'](this['overlayName'], this['container'], this['close']['bind'](this));
        }
        pv['prototype'] = {
            'open': function PDFDocumentProperties_open() {
                Promise['all']([pu['open'](this['overlayName']), this['dataAvailablePromise']])['then'](function () {
                    this['_getProperties']();
                } ['bind'](this));
            }
            , 'close': function PDFDocumentProperties_close() {
                pu['close'](this['overlayName']);
            }
            , 'setFileSize': function PDFDocumentProperties_setFileSize(pz) {
                if (pz > 0x0) {
                    this['rawFileSize'] = pz;
                }
            }
            , 'setDocumentAndUrl': function PDFDocumentProperties_setDocumentAndUrl(pA, pB) {
                this['pdfDocument'] = pA;
                this['url'] = pB;
                this['resolveDataAvailable']();
            }
            , '_getProperties': function PDFDocumentProperties_getProperties() {
                if (!pu['active']) {
                    return;
                }
                this['pdfDocument']['getDownloadInfo']()['then'](function (pC) {
                    if (pC['length'] === this['rawFileSize']) {
                        return;
                    }
                    this['setFileSize'](pC['length']);
                    this['_updateUI'](this['fields']['fileSize'], this['_parseFileSize']());
                } ['bind'](this));
                this['pdfDocument']['getMetadata']()['then'](function (pD) {
                    var pE = {
                        'fileName': ps(this['url'])
                        , 'fileSize': this['_parseFileSize']()
                        , 'title': pD['info']['Title']
                        , 'author': pD['info']['Author']
                        , 'subject': pD['info']['Subject']
                        , 'keywords': pD['info']['Keywords']
                        , 'creationDate': this['_parseDate'](pD['info']['CreationDate'])
                        , 'modificationDate': this['_parseDate'](pD['info']['ModDate'])
                        , 'creator': pD['info']['Creator']
                        , 'producer': pD['info']['Producer']
                        , 'version': pD['info']['PDFFormatVersion']
                        , 'pageCount': this['pdfDocument']['numPages']
                    };
                    for (var pF in pE) {
                        this['_updateUI'](this['fields'][pF], pE[pF]);
                    }
                } ['bind'](this));
            }
            , '_updateUI': function PDFDocumentProperties_updateUI(pG, pH) {
                if (pG && pH !== undefined && pH !== '') {
                    pG['textContent'] = pH;
                }
            }
            , '_parseFileSize': function PDFDocumentProperties_parseFileSize() {
                var pI = this['rawFileSize']
                    , pJ = pI / 0x400;
                if (!pJ) {
                    return;
                } else if (pJ < 0x400) {
                    return pt['get']('document_properties_kb', {
                        'size_kb': (+pJ['toPrecision'](0x3))['toLocaleString']()
                        , 'size_b': pI['toLocaleString']()
                    }, '{{size_kb}}\x20KB\x20({{size_b}}\x20bytes)');
                }
                return pt['get']('document_properties_mb', {
                    'size_mb': (+(pJ / 0x400)['toPrecision'](0x3))['toLocaleString']()
                    , 'size_b': pI['toLocaleString']()
                }, '{{size_mb}}\x20MB\x20({{size_b}}\x20bytes)');
            }
            , '_parseDate': function PDFDocumentProperties_parseDate(pK) {
                var pL = pK;
                if (pL === undefined) {
                    return '';
                }
                if (pL['substring'](0x0, 0x2) === 'D:') {
                    pL = pL['substring'](0x2);
                }
                var pM = parseInt(pL['substring'](0x0, 0x4), 0xa);
                var pN = parseInt(pL['substring'](0x4, 0x6), 0xa) - 0x1;
                var pO = parseInt(pL['substring'](0x6, 0x8), 0xa);
                var pP = parseInt(pL['substring'](0x8, 0xa), 0xa);
                var pQ = parseInt(pL['substring'](0xa, 0xc), 0xa);
                var pR = parseInt(pL['substring'](0xc, 0xe), 0xa);
                var pS = pL['substring'](0xe, 0xf);
                var pT = parseInt(pL['substring'](0xf, 0x11), 0xa);
                var pU = parseInt(pL['substring'](0x12, 0x14), 0xa);
                if (pS === '-') {
                    pP += pT;
                    pQ += pU;
                } else if (pS === '+') {
                    pP -= pT;
                    pQ -= pU;
                }
                var pV = new Date(Date['UTC'](pM, pN, pO, pP, pQ, pR));
                var pW = pV['toLocaleDateString']();
                var pX = pV['toLocaleTimeString']();
                return pt['get']('document_properties_date_string', {
                    'date': pW
                    , 'time': pX
                }, '{{date}},\x20{{time}}');
            }
        };
        return pv;
    }();
    po['PDFDocumentProperties'] = pv;
}, function (pY, pZ, q0) {
    'use strict';
    var q1 = q0(0x0);
    var q2 = q0(0x7);
    var q3 = q1['mozL10n'];
    var q4 = q2['FindStates'];
    var q5 = function PDFFindBarClosure() {
        function q5(q7) {
            this['opened'] = ![];
            this['bar'] = q7['bar'] || null;
            this['toggleButton'] = q7['toggleButton'] || null;
            this['findField'] = q7['findField'] || null;
            this['highlightAll'] = q7['highlightAllCheckbox'] || null;
            this['caseSensitive'] = q7['caseSensitiveCheckbox'] || null;
            this['findMsg'] = q7['findMsg'] || null;
            this['findResultsCount'] = q7['findResultsCount'] || null;
            this['findStatusIcon'] = q7['findStatusIcon'] || null;
            this['findPreviousButton'] = q7['findPreviousButton'] || null;
            this['findNextButton'] = q7['findNextButton'] || null;
            this['findController'] = q7['findController'] || null;
            this['eventBus'] = q7['eventBus'];
            if (this['findController'] === null) {
                throw new Error('PDFFindBar\x20cannot\x20be\x20used\x20without\x20a\x20' + 'PDFFindController\x20instance.');
            }
            var q8 = this;
            this['toggleButton']['addEventListener']('click', function () {
                q8['toggle']();
            });
            this['findField']['addEventListener']('input', function () {
                q8['dispatchEvent']('');
            });
            this['bar']['addEventListener']('keydown', function (q9) {
                switch (q9['keyCode']) {
                case 0xd:
                    if (q9['target'] === q8['findField']) {
                        q8['dispatchEvent']('again', q9['shiftKey']);
                    }
                    break;
                case 0x1b:
                    q8['close']();
                    break;
                }
            });
            this['findPreviousButton']['addEventListener']('click', function () {
                q8['dispatchEvent']('again', !![]);
            });
            this['findNextButton']['addEventListener']('click', function () {
                q8['dispatchEvent']('again', ![]);
            });
            this['highlightAll']['addEventListener']('click', function () {
                q8['dispatchEvent']('highlightallchange');
            });
            this['caseSensitive']['addEventListener']('click', function () {
                q8['dispatchEvent']('casesensitivitychange');
            });
            this['eventBus']['on']('resize', this['_adjustWidth']['bind'](this));
        }
        q5['prototype'] = {
            'reset': function PDFFindBar_reset() {
                this['updateUIState']();
            }
            , 'dispatchEvent': function PDFFindBar_dispatchEvent(qa, qb) {
                this['eventBus']['dispatch']('find', {
                    'source': this
                    , 'type': qa
                    , 'query': this['findField']['value']
                    , 'caseSensitive': this['caseSensitive']['checked']
                    , 'phraseSearch': !![]
                    , 'highlightAll': this['highlightAll']['checked']
                    , 'findPrevious': qb
                });
            }
            , 'updateUIState': function PDFFindBar_updateUIState(qc, qd, qe) {
                var qf = ![];
                var qg = '';
                var qh = '';
                switch (qc) {
                case q4['FIND_FOUND']:
                    break;
                case q4['FIND_PENDING']:
                    qh = 'pending';
                    break;
                case q4['FIND_NOTFOUND']:
                    qg = q3['get']('find_not_found', null, 'Phrase\x20not\x20found');
                    qf = !![];
                    break;
                case q4['FIND_WRAPPED']:
                    if (qd) {
                        qg = q3['get']('find_reached_top', null, 'Reached\x20top\x20of\x20document,\x20continued\x20from\x20bottom');
                    } else {
                        qg = q3['get']('find_reached_bottom', null, 'Reached\x20end\x20of\x20document,\x20continued\x20from\x20top');
                    }
                    break;
                }
                if (qf) {
                    this['findField']['classList']['add']('notFound');
                } else {
                    this['findField']['classList']['remove']('notFound');
                }
                this['findField']['setAttribute']('data-status', qh);
                this['findMsg']['textContent'] = qg;
                this['updateResultsCount'](qe);
                this['_adjustWidth']();
            }
            , 'updateResultsCount': function (qi) {
                if (!this['findResultsCount']) {
                    return;
                }
                if (!qi) {
                    this['findResultsCount']['classList']['add']('hidden');
                    return;
                }
                this['findResultsCount']['textContent'] = qi['toLocaleString']();
                this['findResultsCount']['classList']['remove']('hidden');
            }
            , 'open': function PDFFindBar_open() {
                if (!this['opened']) {
                    this['opened'] = !![];
                    this['toggleButton']['classList']['add']('toggled');
                    this['bar']['classList']['remove']('hidden');
                }
                this['findField']['select']();
                this['findField']['focus']();
                this['_adjustWidth']();
            }
            , 'close': function PDFFindBar_close() {
                if (!this['opened']) {
                    return;
                }
                this['opened'] = ![];
                this['toggleButton']['classList']['remove']('toggled');
                this['bar']['classList']['add']('hidden');
                this['findController']['active'] = ![];
            }
            , 'toggle': function PDFFindBar_toggle() {
                if (this['opened']) {
                    this['close']();
                } else {
                    this['open']();
                }
            }
            , '_adjustWidth': function PDFFindBar_adjustWidth() {
                if (!this['opened']) {
                    return;
                }
                this['bar']['classList']['remove']('wrapContainers');
                var qj = this['bar']['clientHeight'];
                var qk = this['bar']['firstElementChild']['clientHeight'];
                if (qj > qk) {
                    this['bar']['classList']['add']('wrapContainers');
                }
            }
        };
        return q5;
    }();
    pZ['PDFFindBar'] = q5;
}, function (ql, qm, qn) {
    'use strict';
    var qo = qn(0x2);

    function qp(qq) {
        this['linkService'] = qq['linkService'];
        this['eventBus'] = qq['eventBus'] || qo['getGlobalEventBus']();
        this['initialized'] = ![];
        this['initialDestination'] = null;
        this['initialBookmark'] = null;
    }
    qp['prototype'] = {
        'initialize': function pdfHistoryInitialize(qr) {
            this['initialized'] = !![];
            this['reInitialized'] = ![];
            this['allowHashChange'] = !![];
            this['historyUnlocked'] = !![];
            this['isViewerInPresentationMode'] = ![];
            this['previousHash'] = window['location']['hash']['substring'](0x1);
            this['currentBookmark'] = '';
            this['currentPage'] = 0x0;
            this['updatePreviousBookmark'] = ![];
            this['previousBookmark'] = '';
            this['previousPage'] = 0x0;
            this['nextHashParam'] = '';
            this['fingerprint'] = qr;
            this['currentUid'] = this['uid'] = 0x0;
            this['current'] = {};
            var qs = window['history']['state'];
            if (this['_isStateObjectDefined'](qs)) {
                if (qs['target']['dest']) {
                    this['initialDestination'] = qs['target']['dest'];
                } else {
                    this['initialBookmark'] = qs['target']['hash'];
                }
                this['currentUid'] = qs['uid'];
                this['uid'] = qs['uid'] + 0x1;
                this['current'] = qs['target'];
            } else {
                if (qs && qs['fingerprint'] && this['fingerprint'] !== qs['fingerprint']) {
                    this['reInitialized'] = !![];
                }
                this['_pushOrReplaceState']({
                    'fingerprint': this['fingerprint']
                }, !![]);
            }
            var qt = this;
            window['addEventListener']('popstate', function pdfHistoryPopstate(qu) {
                if (!qt['historyUnlocked']) {
                    return;
                }
                if (qu['state']) {
                    qt['_goTo'](qu['state']);
                    return;
                }
                if (qt['uid'] === 0x0) {
                    var qv = qt['previousHash'] && qt['currentBookmark'] && qt['previousHash'] !== qt['currentBookmark'] ? {
                        'hash': qt['currentBookmark']
                        , 'page': qt['currentPage']
                    } : {
                        'page': 0x1
                    };
                    qx(qv, function () {
                        qw();
                    });
                } else {
                    qw();
                }
            });

            function qw() {
                qt['previousHash'] = window['location']['hash']['slice'](0x1);
                qt['_pushToHistory']({
                    'hash': qt['previousHash']
                }, ![], !![]);
                qt['_updatePreviousBookmark']();
            }

            function qx(qy, qz) {
                qt['historyUnlocked'] = ![];
                qt['allowHashChange'] = ![];
                window['addEventListener']('popstate', qA);
                history['back']();

                function qA() {
                    window['removeEventListener']('popstate', qA);
                    window['addEventListener']('popstate', qB);
                    qt['_pushToHistory'](qy, ![], !![]);
                    history['forward']();
                }

                function qB() {
                    window['removeEventListener']('popstate', qB);
                    qt['allowHashChange'] = !![];
                    qt['historyUnlocked'] = !![];
                    qz();
                }
            }

            function qC() {
                var qD = qt['_getPreviousParams'](null, !![]);
                if (qD) {
                    var qE = !qt['current']['dest'] && qt['current']['hash'] !== qt['previousHash'];
                    qt['_pushToHistory'](qD, ![], qE);
                    qt['_updatePreviousBookmark']();
                }
                window['removeEventListener']('beforeunload', qC);
            }
            window['addEventListener']('beforeunload', qC);
            window['addEventListener']('pageshow', function pdfHistoryPageShow(qF) {
                window['addEventListener']('beforeunload', qC);
            });
            qt['eventBus']['on']('presentationmodechanged', function (qG) {
                qt['isViewerInPresentationMode'] = qG['active'];
            });
        }
        , 'clearHistoryState': function pdfHistory_clearHistoryState() {
            this['_pushOrReplaceState'](null, !![]);
        }
        , '_isStateObjectDefined': function pdfHistory_isStateObjectDefined(qH) {
            return qH && qH['uid'] >= 0x0 && qH['fingerprint'] && this['fingerprint'] === qH['fingerprint'] && qH['target'] && qH['target']['hash'] ? !![] : ![];
        }
        , '_pushOrReplaceState': function pdfHistory_pushOrReplaceState(qI, qJ) {
            if (qJ) {
                window['history']['replaceState'](qI, '', document['URL']);
            } else {
                window['history']['pushState'](qI, '', document['URL']);
            }
        }
        , get 'isHashChangeUnlocked'() {
            if (!this['initialized']) {
                return !![];
            }
            return this['allowHashChange'];
        }
        , '_updatePreviousBookmark': function pdfHistory_updatePreviousBookmark() {
            if (this['updatePreviousBookmark'] && this['currentBookmark'] && this['currentPage']) {
                this['previousBookmark'] = this['currentBookmark'];
                this['previousPage'] = this['currentPage'];
                this['updatePreviousBookmark'] = ![];
            }
        }
        , 'updateCurrentBookmark': function pdfHistoryUpdateCurrentBookmark(qK, qL) {
            if (this['initialized']) {
                this['currentBookmark'] = qK['substring'](0x1);
                this['currentPage'] = qL | 0x0;
                this['_updatePreviousBookmark']();
            }
        }
        , 'updateNextHashParam': function pdfHistoryUpdateNextHashParam(qM) {
            if (this['initialized']) {
                this['nextHashParam'] = qM;
            }
        }
        , 'push': function pdfHistoryPush(qN, qO) {
            if (!(this['initialized'] && this['historyUnlocked'])) {
                return;
            }
            if (qN['dest'] && !qN['hash']) {
                qN['hash'] = this['current']['hash'] && this['current']['dest'] && this['current']['dest'] === qN['dest'] ? this['current']['hash'] : this['linkService']['getDestinationHash'](qN['dest'])['split']('#')[0x1];
            }
            if (qN['page']) {
                qN['page'] |= 0x0;
            }
            if (qO) {
                var qP = window['history']['state']['target'];
                if (!qP) {
                    this['_pushToHistory'](qN, ![]);
                    this['previousHash'] = window['location']['hash']['substring'](0x1);
                }
                this['updatePreviousBookmark'] = this['nextHashParam'] ? ![] : !![];
                if (qP) {
                    this['_updatePreviousBookmark']();
                }
                return;
            }
            if (this['nextHashParam']) {
                if (this['nextHashParam'] === qN['hash']) {
                    this['nextHashParam'] = null;
                    this['updatePreviousBookmark'] = !![];
                    return;
                }
                this['nextHashParam'] = null;
            }
            if (qN['hash']) {
                if (this['current']['hash']) {
                    if (this['current']['hash'] !== qN['hash']) {
                        this['_pushToHistory'](qN, !![]);
                    } else {
                        if (!this['current']['page'] && qN['page']) {
                            this['_pushToHistory'](qN, ![], !![]);
                        }
                        this['updatePreviousBookmark'] = !![];
                    }
                } else {
                    this['_pushToHistory'](qN, !![]);
                }
            } else if (this['current']['page'] && qN['page'] && this['current']['page'] !== qN['page']) {
                this['_pushToHistory'](qN, !![]);
            }
        }
        , '_getPreviousParams': function pdfHistory_getPreviousParams(qQ, qR) {
            if (!(this['currentBookmark'] && this['currentPage'])) {
                return null;
            } else if (this['updatePreviousBookmark']) {
                this['updatePreviousBookmark'] = ![];
            }
            if (this['uid'] > 0x0 && !(this['previousBookmark'] && this['previousPage'])) {
                return null;
            }
            if (!this['current']['dest'] && !qQ || qR) {
                if (this['previousBookmark'] === this['currentBookmark']) {
                    return null;
                }
            } else if (this['current']['page'] || qQ) {
                if (this['previousPage'] === this['currentPage']) {
                    return null;
                }
            } else {
                return null;
            }
            var qS = {
                'hash': this['currentBookmark']
                , 'page': this['currentPage']
            };
            if (this['isViewerInPresentationMode']) {
                qS['hash'] = null;
            }
            return qS;
        }
        , '_stateObj': function pdfHistory_stateObj(qT) {
            return {
                'fingerprint': this['fingerprint']
                , 'uid': this['uid']
                , 'target': qT
            };
        }
        , '_pushToHistory': function pdfHistory_pushToHistory(qU, qV, qW) {
            if (!this['initialized']) {
                return;
            }
            if (!qU['hash'] && qU['page']) {
                qU['hash'] = 'page=' + qU['page'];
            }
            if (qV && !qW) {
                var qX = this['_getPreviousParams']();
                if (qX) {
                    var qY = !this['current']['dest'] && this['current']['hash'] !== this['previousHash'];
                    this['_pushToHistory'](qX, ![], qY);
                }
            }
            this['_pushOrReplaceState'](this['_stateObj'](qU), qW || this['uid'] === 0x0);
            this['currentUid'] = this['uid']++;
            this['current'] = qU;
            this['updatePreviousBookmark'] = !![];
        }
        , '_goTo': function pdfHistory_goTo(qZ) {
            if (!(this['initialized'] && this['historyUnlocked'] && this['_isStateObjectDefined'](qZ))) {
                return;
            }
            if (!this['reInitialized'] && qZ['uid'] < this['currentUid']) {
                var r0 = this['_getPreviousParams'](!![]);
                if (r0) {
                    this['_pushToHistory'](this['current'], ![]);
                    this['_pushToHistory'](r0, ![]);
                    this['currentUid'] = qZ['uid'];
                    window['history']['back']();
                    return;
                }
            }
            this['historyUnlocked'] = ![];
            if (qZ['target']['dest']) {
                this['linkService']['navigateTo'](qZ['target']['dest']);
            } else {
                this['linkService']['setHash'](qZ['target']['hash']);
            }
            this['currentUid'] = qZ['uid'];
            if (qZ['uid'] > this['uid']) {
                this['uid'] = qZ['uid'];
            }
            this['current'] = qZ['target'];
            this['updatePreviousBookmark'] = !![];
            var r1 = window['location']['hash']['substring'](0x1);
            if (this['previousHash'] !== r1) {
                this['allowHashChange'] = ![];
            }
            this['previousHash'] = r1;
            this['historyUnlocked'] = !![];
        }
        , 'back': function pdfHistoryBack() {
            this['go'](-0x1);
        }
        , 'forward': function pdfHistoryForward() {
            this['go'](0x1);
        }
        , 'go': function pdfHistoryGo(r2) {
            if (this['initialized'] && this['historyUnlocked']) {
                var r3 = window['history']['state'];
                if (r2 === -0x1 && r3 && r3['uid'] > 0x0) {
                    window['history']['back']();
                } else if (r2 === 0x1 && r3 && r3['uid'] < this['uid'] - 0x1) {
                    window['history']['forward']();
                }
            }
        }
    };
    qm['PDFHistory'] = qp;
}, function (r4, r5, r6) {
    'use strict';
    var r7 = r6(0x1);
    var r8 = r7['PDFJS'];
    var r9 = '–';
    var ra = function PDFOutlineViewerClosure() {
        function ra(rc) {
            this['outline'] = null;
            this['lastToggleIsShow'] = !![];
            this['container'] = rc['container'];
            this['linkService'] = rc['linkService'];
            this['eventBus'] = rc['eventBus'];
        }
        ra['prototype'] = {
            'reset': function PDFOutlineViewer_reset() {
                this['outline'] = null;
                this['lastToggleIsShow'] = !![];
                this['container']['textContent'] = '';
                this['container']['classList']['remove']('outlineWithDeepNesting');
            }
            , '_dispatchEvent': function PDFOutlineViewer_dispatchEvent(rd) {
                this['eventBus']['dispatch']('outlineloaded', {
                    'source': this
                    , 'outlineCount': rd
                });
            }
            , '_bindLink': function PDFOutlineViewer_bindLink(re, rf) {
                if (rf['url']) {
                    r7['addLinkAttributes'](re, {
                        'url': rf['url']
                        , 'target': rf['newWindow'] ? r8['LinkTarget']['BLANK'] : undefined
                    });
                    return;
                }
                var rg = this
                    , rh = rf['dest'];
                re['href'] = rg['linkService']['getDestinationHash'](rh);
                re['onclick'] = function () {
                    if (rh) {
                        rg['linkService']['navigateTo'](rh);
                    }
                    return ![];
                };
            }
            , '_setStyles': function PDFOutlineViewer_setStyles(ri, rj) {
                var rk = '';
                if (rj['bold']) {
                    rk += 'font-weight:\x20bold;';
                }
                if (rj['italic']) {
                    rk += 'font-style:\x20italic;';
                }
                if (rk) {
                    ri['setAttribute']('style', rk);
                }
            }
            , '_addToggleButton': function PDFOutlineViewer_addToggleButton(rl) {
                var rm = document['createElement']('div');
                rm['className'] = 'outlineItemToggler';
                rm['onclick'] = function (rn) {
                    rn['stopPropagation']();
                    rm['classList']['toggle']('outlineItemsHidden');
                    if (rn['shiftKey']) {
                        var ro = !rm['classList']['contains']('outlineItemsHidden');
                        this['_toggleOutlineItem'](rl, ro);
                    }
                } ['bind'](this);
                rl['insertBefore'](rm, rl['firstChild']);
            }
            , '_toggleOutlineItem': function PDFOutlineViewer_toggleOutlineItem(rp, rq) {
                this['lastToggleIsShow'] = rq;
                var rr = rp['querySelectorAll']('.outlineItemToggler');
                for (var rs = 0x0, rt = rr['length']; rs < rt; ++rs) {
                    rr[rs]['classList'][rq ? 'remove' : 'add']('outlineItemsHidden');
                }
            }
            , 'toggleOutlineTree': function PDFOutlineViewer_toggleOutlineTree() {
                if (!this['outline']) {
                    return;
                }
                this['_toggleOutlineItem'](this['container'], !this['lastToggleIsShow']);
            }
            , 'render': function PDFOutlineViewer_render(ru) {
                var rv = ru && ru['outline'] || null;
                var rw = 0x0;
                if (this['outline']) {
                    this['reset']();
                }
                this['outline'] = rv;
                if (!rv) {
                    this['_dispatchEvent'](rw);
                    return;
                }
                var rx = document['createDocumentFragment']();
                var ry = [{
                    'parent': rx
                    , 'items': this['outline']
                }];
                var rz = ![];
                while (ry['length'] > 0x0) {
                    var rA = ry['shift']();
                    for (var rB = 0x0, rC = rA['items']['length']; rB < rC; rB++) {
                        var rD = rA['items'][rB];
                        var rE = document['createElement']('div');
                        rE['className'] = 'outlineItem';
                        var rF = document['createElement']('a');
                        this['_bindLink'](rF, rD);
                        this['_setStyles'](rF, rD);
                        rF['textContent'] = r7['removeNullCharacters'](rD['title']) || r9;
                        rE['appendChild'](rF);
                        if (rD['items']['length'] > 0x0) {
                            rz = !![];
                            this['_addToggleButton'](rE);
                            var rG = document['createElement']('div');
                            rG['className'] = 'outlineItems';
                            rE['appendChild'](rG);
                            ry['push']({
                                'parent': rG
                                , 'items': rD['items']
                            });
                        }
                        rA['parent']['appendChild'](rE);
                        rw++;
                    }
                }
                if (rz) {
                    this['container']['classList']['add']('outlineWithDeepNesting');
                }
                this['container']['appendChild'](rx);
                this['_dispatchEvent'](rw);
            }
        };
        return ra;
    }();
    r5['PDFOutlineViewer'] = ra;
}, function (rH, rI, rJ) {
    'use strict';
    var rK = rJ(0x0);
    var rL = rJ(0x3);
    var rM = rJ(0x2);
    var rN = rJ(0x1);
    var rO = rK['CSS_UNITS'];
    var rP = rK['DEFAULT_SCALE'];
    var rQ = rK['getOutputScale'];
    var rR = rK['approximateFraction'];
    var rS = rK['roundToDivide'];
    var rT = rK['RendererType'];
    var rU = rL['RenderingStates'];
    var rV = 0xc8;
    var rW = function PDFPageViewClosure() {
        function rW(rY) {
            var rZ = rY['container'];
            var s0 = rY['id'];
            var s1 = rY['scale'];
            var s2 = rY['defaultViewport'];
            var s3 = rY['renderingQueue'];
            var s4 = rY['textLayerFactory'];
            var s5 = rY['annotationLayerFactory'];
            var s6 = rY['enhanceTextSelection'] || ![];
            var s7 = rY['renderInteractiveForms'] || ![];
            this['id'] = s0;
            this['renderingId'] = 'page' + s0;
            this['pageLabel'] = null;
            this['rotation'] = 0x0;
            this['scale'] = s1 || rP;
            this['viewport'] = s2;
            this['pdfPageRotate'] = s2['rotation'];
            this['hasRestrictedScaling'] = ![];
            this['enhanceTextSelection'] = s6;
            this['renderInteractiveForms'] = s7;
            this['eventBus'] = rY['eventBus'] || rM['getGlobalEventBus']();
            this['renderingQueue'] = s3;
            this['textLayerFactory'] = s4;
            this['annotationLayerFactory'] = s5;
            this['renderer'] = rY['renderer'] || rT['CANVAS'];
            this['paintTask'] = null;
            this['paintedViewportMap'] = new WeakMap();
            this['renderingState'] = rU['INITIAL'];
            this['resume'] = null;
            this['error'] = null;
            this['onBeforeDraw'] = null;
            this['onAfterDraw'] = null;
            this['textLayer'] = null;
            this['zoomLayer'] = null;
            this['annotationLayer'] = null;
            var s8 = document['createElement']('div');
            s8['className'] = 'page';
            s8['style']['width'] = Math['floor'](this['viewport']['width']) + 'px';
            s8['style']['height'] = Math['floor'](this['viewport']['height']) + 'px';
            s8['setAttribute']('data-page-number', this['id']);
            this['div'] = s8;
            rZ['appendChild'](s8);
        }
        rW['prototype'] = {
            'setPdfPage': function PDFPageView_setPdfPage(s9) {
                this['pdfPage'] = s9;
                this['pdfPageRotate'] = s9['rotate'];
                var sa = (this['rotation'] + this['pdfPageRotate']) % 0x168;
                this['viewport'] = s9['getViewport'](this['scale'] * rO, sa);
                this['stats'] = s9['stats'];
                this['reset']();
            }
            , 'destroy': function PDFPageView_destroy() {
                this['reset']();
                if (this['pdfPage']) {
                    this['pdfPage']['cleanup']();
                }
            }
            , '_resetZoomLayer': function (sb) {
                if (!this['zoomLayer']) {
                    return;
                }
                var sc = this['zoomLayer']['firstChild'];
                this['paintedViewportMap']['delete'](sc);
                sc['width'] = 0x0;
                sc['height'] = 0x0;
                if (sb) {
                    this['zoomLayer']['remove']();
                }
                this['zoomLayer'] = null;
            }
            , 'reset': function PDFPageView_reset(sd, se) {
                this['cancelRendering']();
                var sf = this['div'];
                sf['style']['width'] = Math['floor'](this['viewport']['width']) + 'px';
                sf['style']['height'] = Math['floor'](this['viewport']['height']) + 'px';
                var sg = sf['childNodes'];
                var sh = sd && this['zoomLayer'] || null;
                var si = se && this['annotationLayer'] && this['annotationLayer']['div'] || null;
                for (var sj = sg['length'] - 0x1; sj >= 0x0; sj--) {
                    var sk = sg[sj];
                    if (sh === sk || si === sk) {
                        continue;
                    }
                    sf['removeChild'](sk);
                }
                sf['removeAttribute']('data-loaded');
                if (si) {
                    this['annotationLayer']['hide']();
                } else {
                    this['annotationLayer'] = null;
                }
                if (!sh) {
                    if (this['canvas']) {
                        this['paintedViewportMap']['delete'](this['canvas']);
                        this['canvas']['width'] = 0x0;
                        this['canvas']['height'] = 0x0;
                        delete this['canvas'];
                    }
                    this['_resetZoomLayer']();
                }
                if (this['svg']) {
                    this['paintedViewportMap']['delete'](this['svg']);
                    delete this['svg'];
                }
                this['loadingIconDiv'] = document['createElement']('div');
                this['loadingIconDiv']['className'] = 'loadingIcon';
                sf['appendChild'](this['loadingIconDiv']);
            }
            , 'update': function PDFPageView_update(sl, sm) {
                this['scale'] = sl || this['scale'];
                if (typeof sm !== 'undefined') {
                    this['rotation'] = sm;
                }
                var sn = (this['rotation'] + this['pdfPageRotate']) % 0x168;
                this['viewport'] = this['viewport']['clone']({
                    'scale': this['scale'] * rO
                    , 'rotation': sn
                });
                if (this['svg']) {
                    this['cssTransform'](this['svg'], !![]);
                    this['eventBus']['dispatch']('pagerendered', {
                        'source': this
                        , 'pageNumber': this['id']
                        , 'cssTransform': !![]
                    });
                    return;
                }
                var so = ![];
                if (this['canvas'] && rN['PDFJS']['maxCanvasPixels'] > 0x0) {
                    var sp = this['outputScale'];
                    if ((Math['floor'](this['viewport']['width']) * sp['sx'] | 0x0) * (Math['floor'](this['viewport']['height']) * sp['sy'] | 0x0) > rN['PDFJS']['maxCanvasPixels']) {
                        so = !![];
                    }
                }
                if (this['canvas']) {
                    if (rN['PDFJS']['useOnlyCssZoom'] || this['hasRestrictedScaling'] && so) {
                        this['cssTransform'](this['canvas'], !![]);
                        this['eventBus']['dispatch']('pagerendered', {
                            'source': this
                            , 'pageNumber': this['id']
                            , 'cssTransform': !![]
                        });
                        return;
                    }
                    if (!this['zoomLayer']) {
                        this['zoomLayer'] = this['canvas']['parentNode'];
                        this['zoomLayer']['style']['position'] = 'absolute';
                    }
                }
                if (this['zoomLayer']) {
                    this['cssTransform'](this['zoomLayer']['firstChild']);
                }
                this['reset'](!![], !![]);
            }
            , 'cancelRendering': function PDFPageView_cancelRendering() {
                if (this['paintTask']) {
                    this['paintTask']['cancel']();
                    this['paintTask'] = null;
                }
                this['renderingState'] = rU['INITIAL'];
                this['resume'] = null;
                if (this['textLayer']) {
                    this['textLayer']['cancel']();
                    this['textLayer'] = null;
                }
            }
            , 'updatePosition': function PDFPageView_updatePosition() {
                if (this['textLayer']) {
                    this['textLayer']['render'](rV);
                }
            }
            , 'cssTransform': function PDFPageView_transform(sq, sr) {
                var ss = rN['CustomStyle'];
                var st = this['viewport']['width'];
                var su = this['viewport']['height'];
                var sv = this['div'];
                sq['style']['width'] = sq['parentNode']['style']['width'] = sv['style']['width'] = Math['floor'](st) + 'px';
                sq['style']['height'] = sq['parentNode']['style']['height'] = sv['style']['height'] = Math['floor'](su) + 'px';
                var sw = this['viewport']['rotation'] - this['paintedViewportMap']['get'](sq)['rotation'];
                var sx = Math['abs'](sw);
                var sy = 0x1
                    , sz = 0x1;
                if (sx === 0x5a || sx === 0x10e) {
                    sy = su / st;
                    sz = st / su;
                }
                var sA = 'rotate(' + sw + 'deg)\x20' + 'scale(' + sy + ',' + sz + ')';
                ss['setProp']('transform', sq, sA);
                if (this['textLayer']) {
                    var sB = this['textLayer']['viewport'];
                    var sC = this['viewport']['rotation'] - sB['rotation'];
                    var sD = Math['abs'](sC);
                    var sE = st / sB['width'];
                    if (sD === 0x5a || sD === 0x10e) {
                        sE = st / sB['height'];
                    }
                    var sF = this['textLayer']['textLayerDiv'];
                    var sG, sH;
                    switch (sD) {
                    case 0x0:
                        sG = sH = 0x0;
                        break;
                    case 0x5a:
                        sG = 0x0;
                        sH = '-' + sF['style']['height'];
                        break;
                    case 0xb4:
                        sG = '-' + sF['style']['width'];
                        sH = '-' + sF['style']['height'];
                        break;
                    case 0x10e:
                        sG = '-' + sF['style']['width'];
                        sH = 0x0;
                        break;
                    default:
                        console['error']('Bad\x20rotation\x20value.');
                        break;
                    }
                    ss['setProp']('transform', sF, 'rotate(' + sD + 'deg)\x20' + 'scale(' + sE + ',\x20' + sE + ')\x20' + 'translate(' + sG + ',\x20' + sH + ')');
                    ss['setProp']('transformOrigin', sF, '0%\x200%');
                }
                if (sr && this['annotationLayer']) {
                    this['annotationLayer']['render'](this['viewport'], 'display');
                }
            }
            , get 'width'() {
                return this['viewport']['width'];
            }
            , get 'height'() {
                return this['viewport']['height'];
            }
            , 'getPagePoint': function PDFPageView_getPagePoint(sI, sJ) {
                return this['viewport']['convertToPdfPoint'](sI, sJ);
            }
            , 'draw': function PDFPageView_draw() {
                if (this['renderingState'] !== rU['INITIAL']) {
                    console['error']('Must\x20be\x20in\x20new\x20state\x20before\x20drawing');
                    this['reset']();
                }
                this['renderingState'] = rU['RUNNING'];
                var sK = this;
                var sL = this['pdfPage'];
                var sM = this['div'];
                var sN = document['createElement']('div');
                sN['style']['width'] = sM['style']['width'];
                sN['style']['height'] = sM['style']['height'];
                sN['classList']['add']('canvasWrapper');
                if (this['annotationLayer'] && this['annotationLayer']['div']) {
                    sM['insertBefore'](sN, this['annotationLayer']['div']);
                } else {
                    sM['appendChild'](sN);
                }
                var sO = null;
                var sP = null;
                if (this['textLayerFactory']) {
                    sO = document['createElement']('div');
                    sO['className'] = 'textLayer';
                    sO['style']['width'] = sN['style']['width'];
                    sO['style']['height'] = sN['style']['height'];
                    if (this['annotationLayer'] && this['annotationLayer']['div']) {
                        sM['insertBefore'](sO, this['annotationLayer']['div']);
                    } else {
                        sM['appendChild'](sO);
                    }
                    sP = this['textLayerFactory']['createTextLayerBuilder'](sO, this['id'] - 0x1, this['viewport'], this['enhanceTextSelection']);
                }
                this['textLayer'] = sP;
                var sQ = null;
                if (this['renderingQueue']) {
                    sQ = function sQ(sR) {
                        if (!sK['renderingQueue']['isHighestPriority'](sK)) {
                            sK['renderingState'] = rU['PAUSED'];
                            sK['resume'] = function resumeCallback() {
                                sK['renderingState'] = rU['RUNNING'];
                                sR();
                            };
                            return;
                        }
                        sR();
                    };
                }
                var sS = function sS(sT) {
                    if (sU === sK['paintTask']) {
                        sK['paintTask'] = null;
                    }
                    if (sT === 'cancelled' || sT instanceof rN['RenderingCancelledException']) {
                        sK['error'] = null;
                        return Promise['resolve'](undefined);
                    }
                    sK['renderingState'] = rU['FINISHED'];
                    if (sK['loadingIconDiv']) {
                        sM['removeChild'](sK['loadingIconDiv']);
                        delete sK['loadingIconDiv'];
                    }
                    sK['_resetZoomLayer'](!![]);
                    sK['error'] = sT;
                    sK['stats'] = sL['stats'];
                    if (sK['onAfterDraw']) {
                        sK['onAfterDraw']();
                    }
                    sK['eventBus']['dispatch']('pagerendered', {
                        'source': sK
                        , 'pageNumber': sK['id']
                        , 'cssTransform': ![]
                    });
                    if (sT) {
                        return Promise['reject'](sT);
                    }
                    return Promise['resolve'](undefined);
                };
                var sU = this['renderer'] === rT['SVG'] ? this['paintOnSvg'](sN) : this['paintOnCanvas'](sN);
                sU['onRenderContinue'] = sQ;
                this['paintTask'] = sU;
                var sV = sU['promise']['then'](function () {
                    return sS(null)['then'](function () {
                        if (sP) {
                            sL['getTextContent']({
                                'normalizeWhitespace': !![]
                            })['then'](function textContentResolved(sW) {
                                sP['setTextContent'](sW);
                                sP['render'](rV);
                            });
                        }
                    });
                }, function (sX) {
                    return sS(sX);
                });
                if (this['annotationLayerFactory']) {
                    if (!this['annotationLayer']) {
                        this['annotationLayer'] = this['annotationLayerFactory']['createAnnotationLayerBuilder'](sM, sL, this['renderInteractiveForms']);
                    }
                    this['annotationLayer']['render'](this['viewport'], 'display');
                }
                sM['setAttribute']('data-loaded', !![]);
                if (this['onBeforeDraw']) {
                    this['onBeforeDraw']();
                }
                return sV;
            }
            , 'paintOnCanvas': function (sY) {
                var sZ, t0;
                var t1 = new Promise(function (t2, t3) {
                    sZ = t2;
                    t0 = t3;
                });
                var t4 = {
                    'promise': t1
                    , 'onRenderContinue': function (t5) {
                        t5();
                    }
                    , 'cancel': function () {
                        tj['cancel']();
                    }
                };
                var t6 = this['viewport'];
                var t7 = document['createElement']('canvas');
                t7['id'] = 'page' + this['id'];
                t7['setAttribute']('hidden', 'hidden');
                var t8 = !![];
                var t9 = function () {
                    if (t8) {
                        t7['removeAttribute']('hidden');
                        t8 = ![];
                    }
                };
                sY['appendChild'](t7);
                this['canvas'] = t7;
                t7['mozOpaque'] = !![];
                var ta = t7['getContext']('2d', {
                    'alpha': ![]
                });
                var tb = rQ(ta);
                this['outputScale'] = tb;
                if (rN['PDFJS']['useOnlyCssZoom']) {
                    var tc = t6['clone']({
                        'scale': rO
                    });
                    tb['sx'] *= tc['width'] / t6['width'];
                    tb['sy'] *= tc['height'] / t6['height'];
                    tb['scaled'] = !![];
                }
                if (rN['PDFJS']['maxCanvasPixels'] > 0x0) {
                    var td = t6['width'] * t6['height'];
                    var te = Math['sqrt'](rN['PDFJS']['maxCanvasPixels'] / td);
                    if (tb['sx'] > te || tb['sy'] > te) {
                        tb['sx'] = te;
                        tb['sy'] = te;
                        tb['scaled'] = !![];
                        this['hasRestrictedScaling'] = !![];
                    } else {
                        this['hasRestrictedScaling'] = ![];
                    }
                }
                var tf = rR(tb['sx']);
                var tg = rR(tb['sy']);
                t7['width'] = rS(t6['width'] * tb['sx'], tf[0x0]);
                t7['height'] = rS(t6['height'] * tb['sy'], tg[0x0]);
                t7['style']['width'] = rS(t6['width'], tf[0x1]) + 'px';
                t7['style']['height'] = rS(t6['height'], tg[0x1]) + 'px';
                this['paintedViewportMap']['set'](t7, t6);
                var th = !tb['scaled'] ? null : [tb['sx'], 0x0, 0x0, tb['sy'], 0x0, 0x0];
                var ti = {
                    'canvasContext': ta
                    , 'transform': th
                    , 'viewport': this['viewport']
                    , 'renderInteractiveForms': this['renderInteractiveForms']
                };
                var tj = this['pdfPage']['render'](ti);
                tj['onContinue'] = function (tk) {
                    t9();
                    if (t4['onRenderContinue']) {
                        t4['onRenderContinue'](tk);
                    } else {
                        tk();
                    }
                };
                tj['promise']['then'](function pdfPageRenderCallback() {
                    t9();
                    sZ(undefined);
                }, function pdfPageRenderError(tl) {
                    t9();
                    t0(tl);
                });
                return t4;
            }
            , 'paintOnSvg': function PDFPageView_paintOnSvg(tm) {
                var tn = ![];
                var to = function () {
                    if (tn) {
                        if (rN['PDFJS']['pdfjsNext']) {
                            throw new rN['RenderingCancelledException']('Rendering\x20cancelled,\x20page\x20' + tp['id'], 'svg');
                        } else {
                            throw 'cancelled';
                        }
                    }
                };
                var tp = this;
                var tq = this['pdfPage'];
                var tr = rN['SVGGraphics'];
                var ts = this['viewport']['clone']({
                    'scale': rO
                });
                var tt = tq['getOperatorList']()['then'](function (tu) {
                    to();
                    var tv = new tr(tq['commonObjs'], tq['objs']);
                    return tv['getSVG'](tu, ts)['then'](function (tw) {
                        to();
                        tp['svg'] = tw;
                        tp['paintedViewportMap']['set'](tw, ts);
                        tw['style']['width'] = tm['style']['width'];
                        tw['style']['height'] = tm['style']['height'];
                        tp['renderingState'] = rU['FINISHED'];
                        tm['appendChild'](tw);
                    });
                });
                return {
                    'promise': tt
                    , 'onRenderContinue': function (tx) {
                        tx();
                    }
                    , 'cancel': function () {
                        tn = !![];
                    }
                };
            }
            , 'setPageLabel': function PDFView_setPageLabel(ty) {
                this['pageLabel'] = typeof ty === 'string' ? ty : null;
                if (this['pageLabel'] !== null) {
                    this['div']['setAttribute']('data-page-label', this['pageLabel']);
                } else {
                    this['div']['removeAttribute']('data-page-label');
                }
            }
        };
        return rW;
    }();
    rI['PDFPageView'] = rW;
}, function (tz, tA, tB) {
    'use strict';
    var tC = tB(0x0);
    var tD = tC['normalizeWheelEventDelta'];
    var tE = 0x5dc;
    var tF = 0xbb8;
    var tG = 'pdfPresentationMode';
    var tH = 'pdfPresentationModeControls';
    var tI = function PDFPresentationModeClosure() {
        function tI(tK) {
            this['container'] = tK['container'];
            this['viewer'] = tK['viewer'] || tK['container']['firstElementChild'];
            this['pdfViewer'] = tK['pdfViewer'];
            this['eventBus'] = tK['eventBus'];
            var tL = tK['contextMenuItems'] || null;
            this['active'] = ![];
            this['args'] = null;
            this['contextMenuOpen'] = ![];
            this['mouseScrollTimeStamp'] = 0x0;
            this['mouseScrollDelta'] = 0x0;
            this['touchSwipeState'] = null;
            if (tL) {
                tL['contextFirstPage']['addEventListener']('click', function PDFPresentationMode_contextFirstPageClick(tM) {
                    this['contextMenuOpen'] = ![];
                    this['eventBus']['dispatch']('firstpage');
                } ['bind'](this));
                tL['contextLastPage']['addEventListener']('click', function PDFPresentationMode_contextLastPageClick(tN) {
                    this['contextMenuOpen'] = ![];
                    this['eventBus']['dispatch']('lastpage');
                } ['bind'](this));
                tL['contextPageRotateCw']['addEventListener']('click', function PDFPresentationMode_contextPageRotateCwClick(tO) {
                    this['contextMenuOpen'] = ![];
                    this['eventBus']['dispatch']('rotatecw');
                } ['bind'](this));
                tL['contextPageRotateCcw']['addEventListener']('click', function PDFPresentationMode_contextPageRotateCcwClick(tP) {
                    this['contextMenuOpen'] = ![];
                    this['eventBus']['dispatch']('rotateccw');
                } ['bind'](this));
            }
        }
        tI['prototype'] = {
            'request': function PDFPresentationMode_request() {
                if (this['switchInProgress'] || this['active'] || !this['viewer']['hasChildNodes']()) {
                    return ![];
                }
                this['_addFullscreenChangeListeners']();
                this['_setSwitchInProgress']();
                this['_notifyStateChange']();
                if (this['container']['requestFullscreen']) {
                    this['container']['requestFullscreen']();
                } else if (this['container']['mozRequestFullScreen']) {
                    this['container']['mozRequestFullScreen']();
                } else if (this['container']['webkitRequestFullscreen']) {
                    this['container']['webkitRequestFullscreen'](Element['ALLOW_KEYBOARD_INPUT']);
                } else if (this['container']['msRequestFullscreen']) {
                    this['container']['msRequestFullscreen']();
                } else {
                    return ![];
                }
                this['args'] = {
                    'page': this['pdfViewer']['currentPageNumber']
                    , 'previousScale': this['pdfViewer']['currentScaleValue']
                };
                return !![];
            }
            , '_mouseWheel': function PDFPresentationMode_mouseWheel(tQ) {
                if (!this['active']) {
                    return;
                }
                tQ['preventDefault']();
                var tR = tD(tQ);
                var tS = 0x32;
                var tT = 0.1;
                var tU = new Date()['getTime']();
                var tV = this['mouseScrollTimeStamp'];
                if (tU > tV && tU - tV < tS) {
                    return;
                }
                if (this['mouseScrollDelta'] > 0x0 && tR < 0x0 || this['mouseScrollDelta'] < 0x0 && tR > 0x0) {
                    this['_resetMouseScrollState']();
                }
                this['mouseScrollDelta'] += tR;
                if (Math['abs'](this['mouseScrollDelta']) >= tT) {
                    var tW = this['mouseScrollDelta'];
                    this['_resetMouseScrollState']();
                    var tX = tW > 0x0 ? this['_goToPreviousPage']() : this['_goToNextPage']();
                    if (tX) {
                        this['mouseScrollTimeStamp'] = tU;
                    }
                }
            }
            , get 'isFullscreen'() {
                return !!(document['fullscreenElement'] || document['mozFullScreen'] || document['webkitIsFullScreen'] || document['msFullscreenElement']);
            }
            , '_goToPreviousPage': function PDFPresentationMode_goToPreviousPage() {
                var tY = this['pdfViewer']['currentPageNumber'];
                if (tY <= 0x1) {
                    return ![];
                }
                this['pdfViewer']['currentPageNumber'] = tY - 0x1;
                return !![];
            }
            , '_goToNextPage': function PDFPresentationMode_goToNextPage() {
                var tZ = this['pdfViewer']['currentPageNumber'];
                if (tZ >= this['pdfViewer']['pagesCount']) {
                    return ![];
                }
                this['pdfViewer']['currentPageNumber'] = tZ + 0x1;
                return !![];
            }
            , '_notifyStateChange': function PDFPresentationMode_notifyStateChange() {
                this['eventBus']['dispatch']('presentationmodechanged', {
                    'source': this
                    , 'active': this['active']
                    , 'switchInProgress': !!this['switchInProgress']
                });
            }
            , '_setSwitchInProgress': function PDFPresentationMode_setSwitchInProgress() {
                if (this['switchInProgress']) {
                    clearTimeout(this['switchInProgress']);
                }
                this['switchInProgress'] = setTimeout(function switchInProgressTimeout() {
                    this['_removeFullscreenChangeListeners']();
                    delete this['switchInProgress'];
                    this['_notifyStateChange']();
                } ['bind'](this), tE);
            }
            , '_resetSwitchInProgress': function PDFPresentationMode_resetSwitchInProgress() {
                if (this['switchInProgress']) {
                    clearTimeout(this['switchInProgress']);
                    delete this['switchInProgress'];
                }
            }
            , '_enter': function PDFPresentationMode_enter() {
                this['active'] = !![];
                this['_resetSwitchInProgress']();
                this['_notifyStateChange']();
                this['container']['classList']['add'](tG);
                setTimeout(function enterPresentationModeTimeout() {
                    this['pdfViewer']['currentPageNumber'] = this['args']['page'];
                    this['pdfViewer']['currentScaleValue'] = 'page-fit';
                } ['bind'](this), 0x0);
                this['_addWindowListeners']();
                this['_showControls']();
                this['contextMenuOpen'] = ![];
                this['container']['setAttribute']('contextmenu', 'viewerContextMenu');
                window['getSelection']()['removeAllRanges']();
            }
            , '_exit': function PDFPresentationMode_exit() {
                var u0 = this['pdfViewer']['currentPageNumber'];
                this['container']['classList']['remove'](tG);
                setTimeout(function exitPresentationModeTimeout() {
                    this['active'] = ![];
                    this['_removeFullscreenChangeListeners']();
                    this['_notifyStateChange']();
                    this['pdfViewer']['currentScaleValue'] = this['args']['previousScale'];
                    this['pdfViewer']['currentPageNumber'] = u0;
                    this['args'] = null;
                } ['bind'](this), 0x0);
                this['_removeWindowListeners']();
                this['_hideControls']();
                this['_resetMouseScrollState']();
                this['container']['removeAttribute']('contextmenu');
                this['contextMenuOpen'] = ![];
            }
            , '_mouseDown': function PDFPresentationMode_mouseDown(u1) {
                if (this['contextMenuOpen']) {
                    this['contextMenuOpen'] = ![];
                    u1['preventDefault']();
                    return;
                }
                if (u1['button'] === 0x0) {
                    var u2 = u1['target']['href'] && u1['target']['classList']['contains']('internalLink');
                    if (!u2) {
                        u1['preventDefault']();
                        this['pdfViewer']['currentPageNumber'] += u1['shiftKey'] ? -0x1 : 0x1;
                    }
                }
            }
            , '_contextMenu': function PDFPresentationMode_contextMenu() {
                this['contextMenuOpen'] = !![];
            }
            , '_showControls': function PDFPresentationMode_showControls() {
                if (this['controlsTimeout']) {
                    clearTimeout(this['controlsTimeout']);
                } else {
                    this['container']['classList']['add'](tH);
                }
                this['controlsTimeout'] = setTimeout(function showControlsTimeout() {
                    this['container']['classList']['remove'](tH);
                    delete this['controlsTimeout'];
                } ['bind'](this), tF);
            }
            , '_hideControls': function PDFPresentationMode_hideControls() {
                if (!this['controlsTimeout']) {
                    return;
                }
                clearTimeout(this['controlsTimeout']);
                this['container']['classList']['remove'](tH);
                delete this['controlsTimeout'];
            }
            , '_resetMouseScrollState': function PDFPresentationMode_resetMouseScrollState() {
                this['mouseScrollTimeStamp'] = 0x0;
                this['mouseScrollDelta'] = 0x0;
            }
            , '_touchSwipe': function PDFPresentationMode_touchSwipe(u3) {
                if (!this['active']) {
                    return;
                }
                var u4 = 0x32;
                var u5 = Math['PI'] / 0x6;
                if (u3['touches']['length'] > 0x1) {
                    this['touchSwipeState'] = null;
                    return;
                }
                switch (u3['type']) {
                case 'touchstart':
                    this['touchSwipeState'] = {
                        'startX': u3['touches'][0x0]['pageX']
                        , 'startY': u3['touches'][0x0]['pageY']
                        , 'endX': u3['touches'][0x0]['pageX']
                        , 'endY': u3['touches'][0x0]['pageY']
                    };
                    break;
                case 'touchmove':
                    if (this['touchSwipeState'] === null) {
                        return;
                    }
                    this['touchSwipeState']['endX'] = u3['touches'][0x0]['pageX'];
                    this['touchSwipeState']['endY'] = u3['touches'][0x0]['pageY'];
                    u3['preventDefault']();
                    break;
                case 'touchend':
                    if (this['touchSwipeState'] === null) {
                        return;
                    }
                    var u6 = 0x0;
                    var u7 = this['touchSwipeState']['endX'] - this['touchSwipeState']['startX'];
                    var u8 = this['touchSwipeState']['endY'] - this['touchSwipeState']['startY'];
                    var u9 = Math['abs'](Math['atan2'](u8, u7));
                    if (Math['abs'](u7) > u4 && (u9 <= u5 || u9 >= Math['PI'] - u5)) {
                        u6 = u7;
                    } else if (Math['abs'](u8) > u4 && Math['abs'](u9 - Math['PI'] / 0x2) <= u5) {
                        u6 = u8;
                    }
                    if (u6 > 0x0) {
                        this['_goToPreviousPage']();
                    } else if (u6 < 0x0) {
                        this['_goToNextPage']();
                    }
                    break;
                }
            }
            , '_addWindowListeners': function PDFPresentationMode_addWindowListeners() {
                this['showControlsBind'] = this['_showControls']['bind'](this);
                this['mouseDownBind'] = this['_mouseDown']['bind'](this);
                this['mouseWheelBind'] = this['_mouseWheel']['bind'](this);
                this['resetMouseScrollStateBind'] = this['_resetMouseScrollState']['bind'](this);
                this['contextMenuBind'] = this['_contextMenu']['bind'](this);
                this['touchSwipeBind'] = this['_touchSwipe']['bind'](this);
                window['addEventListener']('mousemove', this['showControlsBind']);
                window['addEventListener']('mousedown', this['mouseDownBind']);
                window['addEventListener']('wheel', this['mouseWheelBind']);
                window['addEventListener']('keydown', this['resetMouseScrollStateBind']);
                window['addEventListener']('contextmenu', this['contextMenuBind']);
                window['addEventListener']('touchstart', this['touchSwipeBind']);
                window['addEventListener']('touchmove', this['touchSwipeBind']);
                window['addEventListener']('touchend', this['touchSwipeBind']);
            }
            , '_removeWindowListeners': function PDFPresentationMode_removeWindowListeners() {
                window['removeEventListener']('mousemove', this['showControlsBind']);
                window['removeEventListener']('mousedown', this['mouseDownBind']);
                window['removeEventListener']('wheel', this['mouseWheelBind']);
                window['removeEventListener']('keydown', this['resetMouseScrollStateBind']);
                window['removeEventListener']('contextmenu', this['contextMenuBind']);
                window['removeEventListener']('touchstart', this['touchSwipeBind']);
                window['removeEventListener']('touchmove', this['touchSwipeBind']);
                window['removeEventListener']('touchend', this['touchSwipeBind']);
                delete this['showControlsBind'];
                delete this['mouseDownBind'];
                delete this['mouseWheelBind'];
                delete this['resetMouseScrollStateBind'];
                delete this['contextMenuBind'];
                delete this['touchSwipeBind'];
            }
            , '_fullscreenChange': function PDFPresentationMode_fullscreenChange() {
                if (this['isFullscreen']) {
                    this['_enter']();
                } else {
                    this['_exit']();
                }
            }
            , '_addFullscreenChangeListeners': function PDFPresentationMode_addFullscreenChangeListeners() {
                this['fullscreenChangeBind'] = this['_fullscreenChange']['bind'](this);
                window['addEventListener']('fullscreenchange', this['fullscreenChangeBind']);
                window['addEventListener']('mozfullscreenchange', this['fullscreenChangeBind']);
                window['addEventListener']('webkitfullscreenchange', this['fullscreenChangeBind']);
                window['addEventListener']('MSFullscreenChange', this['fullscreenChangeBind']);
            }
            , '_removeFullscreenChangeListeners': function PDFPresentationMode_removeFullscreenChangeListeners() {
                window['removeEventListener']('fullscreenchange', this['fullscreenChangeBind']);
                window['removeEventListener']('mozfullscreenchange', this['fullscreenChangeBind']);
                window['removeEventListener']('webkitfullscreenchange', this['fullscreenChangeBind']);
                window['removeEventListener']('MSFullscreenChange', this['fullscreenChangeBind']);
                delete this['fullscreenChangeBind'];
            }
        };
        return tI;
    }();
    tA['PDFPresentationMode'] = tI;
}, function (ua, ub, uc) {
    'use strict';
    var ud = uc(0x3);
    var ue = uc(0x0);
    var uf = ud['RenderingStates'];
    var ug = ue['mozL10n'];
    var uh = 'pdfSidebarNotification';
    var ui = {
        'NONE': 0x0
        , 'THUMBS': 0x1
        , 'OUTLINE': 0x2
        , 'ATTACHMENTS': 0x3
    };
    var uj = function PDFSidebarClosure() {
        function uj(ul) {
            this['isOpen'] = ![];
            this['active'] = ui['THUMBS'];
            this['isInitialViewSet'] = ![];
            this['onToggled'] = null;
            this['pdfViewer'] = ul['pdfViewer'];
            this['pdfThumbnailViewer'] = ul['pdfThumbnailViewer'];
            this['pdfOutlineViewer'] = ul['pdfOutlineViewer'];
            this['mainContainer'] = ul['mainContainer'];
            this['outerContainer'] = ul['outerContainer'];
            this['eventBus'] = ul['eventBus'];
            this['toggleButton'] = ul['toggleButton'];
            this['thumbnailButton'] = ul['thumbnailButton'];
            this['outlineButton'] = ul['outlineButton'];
            this['attachmentsButton'] = ul['attachmentsButton'];
            this['thumbnailView'] = ul['thumbnailView'];
            this['outlineView'] = ul['outlineView'];
            this['attachmentsView'] = ul['attachmentsView'];
            this['disableNotification'] = ul['disableNotification'] || ![];
            this['_addEventListeners']();
        }
        uj['prototype'] = {
            'reset': function PDFSidebar_reset() {
                this['isInitialViewSet'] = ![];
                this['_hideUINotification'](null);
                this['switchView'](ui['THUMBS']);
                this['outlineButton']['disabled'] = ![];
                this['attachmentsButton']['disabled'] = ![];
            }
            , get 'visibleView'() {
                return this['isOpen'] ? this['active'] : ui['NONE'];
            }
            , get 'isThumbnailViewVisible'() {
                return this['isOpen'] && this['active'] === ui['THUMBS'];
            }
            , get 'isOutlineViewVisible'() {
                return this['isOpen'] && this['active'] === ui['OUTLINE'];
            }
            , get 'isAttachmentsViewVisible'() {
                return this['isOpen'] && this['active'] === ui['ATTACHMENTS'];
            }
            , 'setInitialView': function PDFSidebar_setInitialView(um) {
                if (this['isInitialViewSet']) {
                    return;
                }
                this['isInitialViewSet'] = !![];
                if (this['isOpen'] && um === ui['NONE']) {
                    this['_dispatchEvent']();
                    return;
                }
                var un = um === this['visibleView'];
                this['switchView'](um, !![]);
                if (un) {
                    this['_dispatchEvent']();
                }
            }
            , 'switchView': function PDFSidebar_switchView(uo, up) {
                if (uo === ui['NONE']) {
                    this['close']();
                    return;
                }
                var uq = uo !== this['active'];
                var ur = ![];
                switch (uo) {
                case ui['THUMBS']:
                    this['thumbnailButton']['classList']['add']('toggled');
                    this['outlineButton']['classList']['remove']('toggled');
                    this['attachmentsButton']['classList']['remove']('toggled');
                    this['thumbnailView']['classList']['remove']('hidden');
                    this['outlineView']['classList']['add']('hidden');
                    this['attachmentsView']['classList']['add']('hidden');
                    if (this['isOpen'] && uq) {
                        this['_updateThumbnailViewer']();
                        ur = !![];
                    }
                    break;
                case ui['OUTLINE']:
                    if (this['outlineButton']['disabled']) {
                        return;
                    }
                    this['thumbnailButton']['classList']['remove']('toggled');
                    this['outlineButton']['classList']['add']('toggled');
                    this['attachmentsButton']['classList']['remove']('toggled');
                    this['thumbnailView']['classList']['add']('hidden');
                    this['outlineView']['classList']['remove']('hidden');
                    this['attachmentsView']['classList']['add']('hidden');
                    break;
                case ui['ATTACHMENTS']:
                    if (this['attachmentsButton']['disabled']) {
                        return;
                    }
                    this['thumbnailButton']['classList']['remove']('toggled');
                    this['outlineButton']['classList']['remove']('toggled');
                    this['attachmentsButton']['classList']['add']('toggled');
                    this['thumbnailView']['classList']['add']('hidden');
                    this['outlineView']['classList']['add']('hidden');
                    this['attachmentsView']['classList']['remove']('hidden');
                    break;
                default:
                    console['error']('PDFSidebar_switchView:\x20\x22' + uo + '\x22\x20is\x20an\x20unsupported\x20value.');
                    return;
                }
                this['active'] = uo | 0x0;
                if (up && !this['isOpen']) {
                    this['open']();
                    return;
                }
                if (ur) {
                    this['_forceRendering']();
                }
                if (uq) {
                    this['_dispatchEvent']();
                }
                this['_hideUINotification'](this['active']);
            }
            , 'open': function PDFSidebar_open() {
                if (this['isOpen']) {
                    return;
                }
                this['isOpen'] = !![];
                this['toggleButton']['classList']['add']('toggled');
                this['outerContainer']['classList']['add']('sidebarMoving');
                this['outerContainer']['classList']['add']('sidebarOpen');
                if (this['active'] === ui['THUMBS']) {
                    this['_updateThumbnailViewer']();
                }
                this['_forceRendering']();
                this['_dispatchEvent']();
                this['_hideUINotification'](this['active']);
            }
            , 'close': function PDFSidebar_close() {
                if (!this['isOpen']) {
                    return;
                }
                this['isOpen'] = ![];
                this['toggleButton']['classList']['remove']('toggled');
                this['outerContainer']['classList']['add']('sidebarMoving');
                this['outerContainer']['classList']['remove']('sidebarOpen');
                this['_forceRendering']();
                this['_dispatchEvent']();
            }
            , 'toggle': function PDFSidebar_toggle() {
                if (this['isOpen']) {
                    this['close']();
                } else {
                    this['open']();
                }
            }
            , '_dispatchEvent': function PDFSidebar_dispatchEvent() {
                this['eventBus']['dispatch']('sidebarviewchanged', {
                    'source': this
                    , 'view': this['visibleView']
                });
            }
            , '_forceRendering': function PDFSidebar_forceRendering() {
                if (this['onToggled']) {
                    this['onToggled']();
                } else {
                    this['pdfViewer']['forceRendering']();
                    this['pdfThumbnailViewer']['forceRendering']();
                }
            }
            , '_updateThumbnailViewer': function PDFSidebar_updateThumbnailViewer() {
                var us = this['pdfViewer'];
                var ut = this['pdfThumbnailViewer'];
                var uu = us['pagesCount'];
                for (var uv = 0x0; uv < uu; uv++) {
                    var uw = us['getPageView'](uv);
                    if (uw && uw['renderingState'] === uf['FINISHED']) {
                        var ux = ut['getThumbnail'](uv);
                        ux['setImage'](uw);
                    }
                }
                ut['scrollThumbnailIntoView'](us['currentPageNumber']);
            }
            , '_showUINotification': function (uy) {
                if (this['disableNotification']) {
                    return;
                }
                this['toggleButton']['title'] = ug['get']('toggle_sidebar_notification.title', null, 'Toggle\x20Sidebar\x20(document\x20contains\x20outline/attachments)');
                if (!this['isOpen']) {
                    this['toggleButton']['classList']['add'](uh);
                } else if (uy === this['active']) {
                    return;
                }
                switch (uy) {
                case ui['OUTLINE']:
                    this['outlineButton']['classList']['add'](uh);
                    break;
                case ui['ATTACHMENTS']:
                    this['attachmentsButton']['classList']['add'](uh);
                    break;
                }
            }
            , '_hideUINotification': function (uz) {
                if (this['disableNotification']) {
                    return;
                }
                var uA = function (uz) {
                    switch (uz) {
                    case ui['OUTLINE']:
                        this['outlineButton']['classList']['remove'](uh);
                        break;
                    case ui['ATTACHMENTS']:
                        this['attachmentsButton']['classList']['remove'](uh);
                        break;
                    }
                } ['bind'](this);
                if (!this['isOpen'] && uz !== null) {
                    return;
                }
                this['toggleButton']['classList']['remove'](uh);
                if (uz !== null) {
                    uA(uz);
                    return;
                }
                for (uz in ui) {
                    uA(ui[uz]);
                }
                this['toggleButton']['title'] = ug['get']('toggle_sidebar.title', null, 'Toggle\x20Sidebar');
            }
            , '_addEventListeners': function PDFSidebar_addEventListeners() {
                var uC = this;
                uC['mainContainer']['addEventListener']('transitionend', function (uD) {
                    if (uD['target'] === this) {
                        uC['outerContainer']['classList']['remove']('sidebarMoving');
                    }
                });
                uC['thumbnailButton']['addEventListener']('click', function () {
                    uC['switchView'](ui['THUMBS']);
                });
                uC['outlineButton']['addEventListener']('click', function () {
                    uC['switchView'](ui['OUTLINE']);
                });
                uC['outlineButton']['addEventListener']('dblclick', function () {
                    uC['pdfOutlineViewer']['toggleOutlineTree']();
                });
                uC['attachmentsButton']['addEventListener']('click', function () {
                    uC['switchView'](ui['ATTACHMENTS']);
                });
                uC['eventBus']['on']('outlineloaded', function (uE) {
                    var uF = uE['outlineCount'];
                    uC['outlineButton']['disabled'] = !uF;
                    if (uF) {
                        uC['_showUINotification'](ui['OUTLINE']);
                    } else if (uC['active'] === ui['OUTLINE']) {
                        uC['switchView'](ui['THUMBS']);
                    }
                });
                uC['eventBus']['on']('attachmentsloaded', function (uG) {
                    var uH = uG['attachmentsCount'];
                    uC['attachmentsButton']['disabled'] = !uH;
                    if (uH) {
                        uC['_showUINotification'](ui['ATTACHMENTS']);
                    } else if (uC['active'] === ui['ATTACHMENTS']) {
                        uC['switchView'](ui['THUMBS']);
                    }
                });
                uC['eventBus']['on']('presentationmodechanged', function (uI) {
                    if (!uI['active'] && !uI['switchInProgress'] && uC['isThumbnailViewVisible']) {
                        uC['_updateThumbnailViewer']();
                    }
                });
            }
        };
        return uj;
    }();
    ub['SidebarView'] = ui;
    ub['PDFSidebar'] = uj;
}, function (uJ, uK, uL) {
    'use strict';
    var uM = uL(0x0);
    var uN = uL(0x3);
    var uO = uM['mozL10n'];
    var uP = uM['getOutputScale'];
    var uQ = uN['RenderingStates'];
    var uR = 0x62;
    var uS = 0x1;
    var uT = function PDFThumbnailViewClosure() {
        function uU(uV, uW) {
            var uX = uT['tempImageCache'];
            if (!uX) {
                uX = document['createElement']('canvas');
                uT['tempImageCache'] = uX;
            }
            uX['width'] = uV;
            uX['height'] = uW;
            uX['mozOpaque'] = !![];
            var uY = uX['getContext']('2d', {
                'alpha': ![]
            });
            uY['save']();
            uY['fillStyle'] = 'rgb(255,\x20255,\x20255)';
            uY['fillRect'](0x0, 0x0, uV, uW);
            uY['restore']();
            return uX;
        }

        function uT(v0) {
            var v1 = v0['container'];
            var v2 = v0['id'];
            var v3 = v0['defaultViewport'];
            var v4 = v0['linkService'];
            var v5 = v0['renderingQueue'];
            var v6 = v0['disableCanvasToImageConversion'] || ![];
            this['id'] = v2;
            this['renderingId'] = 'thumbnail' + v2;
            this['pageLabel'] = null;
            this['pdfPage'] = null;
            this['rotation'] = 0x0;
            this['viewport'] = v3;
            this['pdfPageRotate'] = v3['rotation'];
            this['linkService'] = v4;
            this['renderingQueue'] = v5;
            this['renderTask'] = null;
            this['renderingState'] = uQ['INITIAL'];
            this['resume'] = null;
            this['disableCanvasToImageConversion'] = v6;
            this['pageWidth'] = this['viewport']['width'];
            this['pageHeight'] = this['viewport']['height'];
            this['pageRatio'] = this['pageWidth'] / this['pageHeight'];
            this['canvasWidth'] = uR;
            this['canvasHeight'] = this['canvasWidth'] / this['pageRatio'] | 0x0;
            this['scale'] = this['canvasWidth'] / this['pageWidth'];
            var v7 = document['createElement']('a');
            v7['href'] = v4['getAnchorUrl']('#page=' + v2);
            v7['title'] = uO['get']('thumb_page_title', {
                'page': v2
            }, 'Page\x20{{page}}');
            v7['onclick'] = function stopNavigation() {
                v4['page'] = v2;
                return ![];
            };
            this['anchor'] = v7;
            var v8 = document['createElement']('div');
            v8['className'] = 'thumbnail';
            v8['setAttribute']('data-page-number', this['id']);
            this['div'] = v8;
            if (v2 === 0x1) {
                v8['classList']['add']('selected');
            }
            var v9 = document['createElement']('div');
            v9['className'] = 'thumbnailSelectionRing';
            var va = 0x2 * uS;
            v9['style']['width'] = this['canvasWidth'] + va + 'px';
            v9['style']['height'] = this['canvasHeight'] + va + 'px';
            this['ring'] = v9;
            v8['appendChild'](v9);
            v7['appendChild'](v8);
            v1['appendChild'](v7);
        }
        uT['prototype'] = {
            'setPdfPage': function PDFThumbnailView_setPdfPage(vb) {
                this['pdfPage'] = vb;
                this['pdfPageRotate'] = vb['rotate'];
                var vc = (this['rotation'] + this['pdfPageRotate']) % 0x168;
                this['viewport'] = vb['getViewport'](0x1, vc);
                this['reset']();
            }
            , 'reset': function PDFThumbnailView_reset() {
                this['cancelRendering']();
                this['pageWidth'] = this['viewport']['width'];
                this['pageHeight'] = this['viewport']['height'];
                this['pageRatio'] = this['pageWidth'] / this['pageHeight'];
                this['canvasHeight'] = this['canvasWidth'] / this['pageRatio'] | 0x0;
                this['scale'] = this['canvasWidth'] / this['pageWidth'];
                this['div']['removeAttribute']('data-loaded');
                var vd = this['ring'];
                var ve = vd['childNodes'];
                for (var vf = ve['length'] - 0x1; vf >= 0x0; vf--) {
                    vd['removeChild'](ve[vf]);
                }
                var vg = 0x2 * uS;
                vd['style']['width'] = this['canvasWidth'] + vg + 'px';
                vd['style']['height'] = this['canvasHeight'] + vg + 'px';
                if (this['canvas']) {
                    this['canvas']['width'] = 0x0;
                    this['canvas']['height'] = 0x0;
                    delete this['canvas'];
                }
                if (this['image']) {
                    this['image']['removeAttribute']('src');
                    delete this['image'];
                }
            }
            , 'update': function PDFThumbnailView_update(vh) {
                if (typeof vh !== 'undefined') {
                    this['rotation'] = vh;
                }
                var vi = (this['rotation'] + this['pdfPageRotate']) % 0x168;
                this['viewport'] = this['viewport']['clone']({
                    'scale': 0x1
                    , 'rotation': vi
                });
                this['reset']();
            }
            , 'cancelRendering': function PDFThumbnailView_cancelRendering() {
                if (this['renderTask']) {
                    this['renderTask']['cancel']();
                    this['renderTask'] = null;
                }
                this['renderingState'] = uQ['INITIAL'];
                this['resume'] = null;
            }
            , '_getPageDrawContext': function PDFThumbnailView_getPageDrawContext(vj) {
                var vk = document['createElement']('canvas');
                this['canvas'] = vk;
                vk['mozOpaque'] = !![];
                var vl = vk['getContext']('2d', {
                    'alpha': ![]
                });
                var vm = uP(vl);
                vk['width'] = this['canvasWidth'] * vm['sx'] | 0x0;
                vk['height'] = this['canvasHeight'] * vm['sy'] | 0x0;
                vk['style']['width'] = this['canvasWidth'] + 'px';
                vk['style']['height'] = this['canvasHeight'] + 'px';
                if (!vj && vm['scaled']) {
                    vl['scale'](vm['sx'], vm['sy']);
                }
                return vl;
            }
            , '_convertCanvasToImage': function PDFThumbnailView_convertCanvasToImage() {
                if (!this['canvas']) {
                    return;
                }
                if (this['renderingState'] !== uQ['FINISHED']) {
                    return;
                }
                var vn = this['renderingId'];
                var vo = 'thumbnailImage';
                var vp = uO['get']('thumb_page_canvas', {
                    'page': this['pageId']
                }, 'Thumbnail\x20of\x20Page\x20{{page}}');
                if (this['disableCanvasToImageConversion']) {
                    this['canvas']['id'] = vn;
                    this['canvas']['className'] = vo;
                    this['canvas']['setAttribute']('aria-label', vp);
                    this['div']['setAttribute']('data-loaded', !![]);
                    this['ring']['appendChild'](this['canvas']);
                    return;
                }
                var vq = document['createElement']('img');
                vq['id'] = vn;
                vq['className'] = vo;
                vq['setAttribute']('aria-label', vp);
                vq['style']['width'] = this['canvasWidth'] + 'px';
                vq['style']['height'] = this['canvasHeight'] + 'px';
                vq['src'] = this['canvas']['toDataURL']();
                this['image'] = vq;
                this['div']['setAttribute']('data-loaded', !![]);
                this['ring']['appendChild'](vq);
                this['canvas']['width'] = 0x0;
                this['canvas']['height'] = 0x0;
                delete this['canvas'];
            }
            , 'draw': function PDFThumbnailView_draw() {
                if (this['renderingState'] !== uQ['INITIAL']) {
                    console['error']('Must\x20be\x20in\x20new\x20state\x20before\x20drawing');
                    return Promise['resolve'](undefined);
                }
                this['renderingState'] = uQ['RUNNING'];
                var vr, vs;
                var vt = new Promise(function (vu, vv) {
                    vr = vu;
                    vs = vv;
                });
                var vw = this;

                function vx(vy) {
                    if (vE === vw['renderTask']) {
                        vw['renderTask'] = null;
                    }
                    if (vy === 'cancelled') {
                        vs(vy);
                        return;
                    }
                    vw['renderingState'] = uQ['FINISHED'];
                    vw['_convertCanvasToImage']();
                    if (!vy) {
                        vr(undefined);
                    } else {
                        vs(vy);
                    }
                }
                var vz = this['_getPageDrawContext']();
                var vA = this['viewport']['clone']({
                    'scale': this['scale']
                });
                var vB = function vB(vC) {
                    if (!vw['renderingQueue']['isHighestPriority'](vw)) {
                        vw['renderingState'] = uQ['PAUSED'];
                        vw['resume'] = function resumeCallback() {
                            vw['renderingState'] = uQ['RUNNING'];
                            vC();
                        };
                        return;
                    }
                    vC();
                };
                var vD = {
                    'canvasContext': vz
                    , 'viewport': vA
                };
                var vE = this['renderTask'] = this['pdfPage']['render'](vD);
                vE['onContinue'] = vB;
                vE['promise']['then'](function pdfPageRenderCallback() {
                    vx(null);
                }, function pdfPageRenderError(vF) {
                    vx(vF);
                });
                return vt;
            }
            , 'setImage': function PDFThumbnailView_setImage(vG) {
                if (this['renderingState'] !== uQ['INITIAL']) {
                    return;
                }
                var vH = vG['canvas'];
                if (!vH) {
                    return;
                }
                if (!this['pdfPage']) {
                    this['setPdfPage'](vG['pdfPage']);
                }
                this['renderingState'] = uQ['FINISHED'];
                var vI = this['_getPageDrawContext'](!![]);
                var vJ = vI['canvas'];
                if (vH['width'] <= 0x2 * vJ['width']) {
                    vI['drawImage'](vH, 0x0, 0x0, vH['width'], vH['height'], 0x0, 0x0, vJ['width'], vJ['height']);
                    this['_convertCanvasToImage']();
                    return;
                }
                var vK = 0x3;
                var vL = vJ['width'] << vK;
                var vM = vJ['height'] << vK;
                var vN = uU(vL, vM);
                var vO = vN['getContext']('2d');
                while (vL > vH['width'] || vM > vH['height']) {
                    vL >>= 0x1;
                    vM >>= 0x1;
                }
                vO['drawImage'](vH, 0x0, 0x0, vH['width'], vH['height'], 0x0, 0x0, vL, vM);
                while (vL > 0x2 * vJ['width']) {
                    vO['drawImage'](vN, 0x0, 0x0, vL, vM, 0x0, 0x0, vL >> 0x1, vM >> 0x1);
                    vL >>= 0x1;
                    vM >>= 0x1;
                }
                vI['drawImage'](vN, 0x0, 0x0, vL, vM, 0x0, 0x0, vJ['width'], vJ['height']);
                this['_convertCanvasToImage']();
            }
            , get 'pageId'() {
                return this['pageLabel'] !== null ? this['pageLabel'] : this['id'];
            }
            , 'setPageLabel': function PDFThumbnailView_setPageLabel(vP) {
                this['pageLabel'] = typeof vP === 'string' ? vP : null;
                this['anchor']['title'] = uO['get']('thumb_page_title', {
                    'page': this['pageId']
                }, 'Page\x20{{page}}');
                if (this['renderingState'] !== uQ['FINISHED']) {
                    return;
                }
                var vQ = uO['get']('thumb_page_canvas', {
                    'page': this['pageId']
                }, 'Thumbnail\x20of\x20Page\x20{{page}}');
                if (this['image']) {
                    this['image']['setAttribute']('aria-label', vQ);
                } else if (this['disableCanvasToImageConversion'] && this['canvas']) {
                    this['canvas']['setAttribute']('aria-label', vQ);
                }
            }
        };
        return uT;
    }();
    uT['tempImageCache'] = null;
    uK['PDFThumbnailView'] = uT;
}, function (vR, vS, vT) {
    'use strict';
    var vU = vT(0x0);
    var vV = vT(0x17);
    var vW = vU['watchScroll'];
    var vX = vU['getVisibleElements'];
    var vY = vU['scrollIntoView'];
    var vZ = vV['PDFThumbnailView'];
    var w0 = -0x13;
    var w1 = function PDFThumbnailViewerClosure() {
        function w1(w3) {
            this['container'] = w3['container'];
            this['renderingQueue'] = w3['renderingQueue'];
            this['linkService'] = w3['linkService'];
            this['scroll'] = vW(this['container'], this['_scrollUpdated']['bind'](this));
            this['_resetView']();
        }
        w1['prototype'] = {
            '_scrollUpdated': function PDFThumbnailViewer_scrollUpdated() {
                this['renderingQueue']['renderHighestPriority']();
            }
            , 'getThumbnail': function PDFThumbnailViewer_getThumbnail(w4) {
                return this['thumbnails'][w4];
            }
            , '_getVisibleThumbs': function PDFThumbnailViewer_getVisibleThumbs() {
                return vX(this['container'], this['thumbnails']);
            }
            , 'scrollThumbnailIntoView': function PDFThumbnailViewer_scrollThumbnailIntoView(w5) {
                var w6 = document['querySelector']('.thumbnail.selected');
                if (w6) {
                    w6['classList']['remove']('selected');
                }
                var w7 = document['querySelector']('div.thumbnail[data-page-number=\x22' + w5 + '\x22]');
                if (w7) {
                    w7['classList']['add']('selected');
                }
                var w8 = this['_getVisibleThumbs']();
                var w9 = w8['views']['length'];
                if (w9 > 0x0) {
                    var wa = w8['first']['id'];
                    var wb = w9 > 0x1 ? w8['last']['id'] : wa;
                    if (w5 <= wa || w5 >= wb) {
                        vY(w7, {
                            'top': w0
                        });
                    }
                }
            }
            , get 'pagesRotation'() {
                return this['_pagesRotation'];
            }
            , set 'pagesRotation'(wc) {
                this['_pagesRotation'] = wc;
                for (var wd = 0x0, we = this['thumbnails']['length']; wd < we; wd++) {
                    var wf = this['thumbnails'][wd];
                    wf['update'](wc);
                }
            }
            , 'cleanup': function PDFThumbnailViewer_cleanup() {
                var wg = vZ['tempImageCache'];
                if (wg) {
                    wg['width'] = 0x0;
                    wg['height'] = 0x0;
                }
                vZ['tempImageCache'] = null;
            }
            , '_resetView': function PDFThumbnailViewer_resetView() {
                this['thumbnails'] = [];
                this['_pageLabels'] = null;
                this['_pagesRotation'] = 0x0;
                this['_pagesRequests'] = [];
                this['container']['textContent'] = '';
            }
            , 'setDocument': function PDFThumbnailViewer_setDocument(wh) {
                if (this['pdfDocument']) {
                    this['_cancelRendering']();
                    this['_resetView']();
                }
                this['pdfDocument'] = wh;
                if (!wh) {
                    return Promise['resolve']();
                }
                return wh['getPage'](0x1)['then'](function (wi) {
                    var wj = wh['numPages'];
                    var wk = wi['getViewport'](0x1);
                    for (var wl = 0x1; wl <= wj; ++wl) {
                        var wm = new vZ({
                            'container': this['container']
                            , 'id': wl
                            , 'defaultViewport': wk['clone']()
                            , 'linkService': this['linkService']
                            , 'renderingQueue': this['renderingQueue']
                            , 'disableCanvasToImageConversion': ![]
                        });
                        this['thumbnails']['push'](wm);
                    }
                } ['bind'](this));
            }
            , '_cancelRendering': function PDFThumbnailViewer_cancelRendering() {
                for (var wn = 0x0, wo = this['thumbnails']['length']; wn < wo; wn++) {
                    if (this['thumbnails'][wn]) {
                        this['thumbnails'][wn]['cancelRendering']();
                    }
                }
            }
            , 'setPageLabels': function PDFThumbnailViewer_setPageLabels(wp) {
                if (!this['pdfDocument']) {
                    return;
                }
                if (!wp) {
                    this['_pageLabels'] = null;
                } else if (!(wp instanceof Array && this['pdfDocument']['numPages'] === wp['length'])) {
                    this['_pageLabels'] = null;
                    console['error']('PDFThumbnailViewer_setPageLabels:\x20Invalid\x20page\x20labels.');
                } else {
                    this['_pageLabels'] = wp;
                }
                for (var wq = 0x0, wr = this['thumbnails']['length']; wq < wr; wq++) {
                    var ws = this['thumbnails'][wq];
                    var wt = this['_pageLabels'] && this['_pageLabels'][wq];
                    ws['setPageLabel'](wt);
                }
            }
            , '_ensurePdfPageLoaded': function PDFThumbnailViewer_ensurePdfPageLoaded(wu) {
                if (wu['pdfPage']) {
                    return Promise['resolve'](wu['pdfPage']);
                }
                var wv = wu['id'];
                if (this['_pagesRequests'][wv]) {
                    return this['_pagesRequests'][wv];
                }
                var ww = this['pdfDocument']['getPage'](wv)['then'](function (wx) {
                    wu['setPdfPage'](wx);
                    this['_pagesRequests'][wv] = null;
                    return wx;
                } ['bind'](this));
                this['_pagesRequests'][wv] = ww;
                return ww;
            }
            , 'forceRendering': function () {
                var wy = this['_getVisibleThumbs']();
                var wz = this['renderingQueue']['getHighestPriority'](wy, this['thumbnails'], this['scroll']['down']);
                if (wz) {
                    this['_ensurePdfPageLoaded'](wz)['then'](function () {
                        this['renderingQueue']['renderView'](wz);
                    } ['bind'](this));
                    return !![];
                }
                return ![];
            }
        };
        return w1;
    }();
    vS['PDFThumbnailViewer'] = w1;
}, function (wA, wB, wC) {
    'use strict';
    var wD = wC(0x0);
    var wE = wC(0x14);
    var wF = wC(0x3);
    var wG = wC(0x1b);
    var wH = wC(0xa);
    var wI = wC(0x5);
    var wJ = wC(0x2);
    var wK = wC(0x1);
    var wL = wD['UNKNOWN_SCALE'];
    var wM = wD['SCROLLBAR_PADDING'];
    var wN = wD['VERTICAL_PADDING'];
    var wO = wD['MAX_AUTO_SCALE'];
    var wP = wD['CSS_UNITS'];
    var wQ = wD['DEFAULT_SCALE'];
    var wR = wD['DEFAULT_SCALE_VALUE'];
    var wS = wD['RendererType'];
    var wT = wD['scrollIntoView'];
    var wU = wD['watchScroll'];
    var wV = wD['getVisibleElements'];
    var wW = wE['PDFPageView'];
    var wX = wF['RenderingStates'];
    var wY = wF['PDFRenderingQueue'];
    var wZ = wG['TextLayerBuilder'];
    var x0 = wH['AnnotationLayerBuilder'];
    var x1 = wI['SimpleLinkService'];
    var x2 = {
        'UNKNOWN': 0x0
        , 'NORMAL': 0x1
        , 'CHANGING': 0x2
        , 'FULLSCREEN': 0x3
    };
    var x3 = 0xa;
    var x4 = function pdfViewer() {
        function x5(x6) {
            var x7 = [];
            this['push'] = function cachePush(x8) {
                var x9 = x7['indexOf'](x8);
                if (x9 >= 0x0) {
                    x7['splice'](x9, 0x1);
                }
                x7['push'](x8);
                if (x7['length'] > x6) {
                    x7['shift']()['destroy']();
                }
            };
            this['resize'] = function (xa) {
                x6 = xa;
                while (x7['length'] > x6) {
                    x7['shift']()['destroy']();
                }
            };
        }

        function xb(xc, xd) {
            if (xd === xc) {
                return !![];
            }
            if (Math['abs'](xd - xc) < 1e-15) {
                return !![];
            }
            return ![];
        }

        function xe(xf) {
            return xf['width'] <= xf['height'];
        }

        function x4(xh) {
            this['container'] = xh['container'];
            this['viewer'] = xh['viewer'] || xh['container']['firstElementChild'];
            this['eventBus'] = xh['eventBus'] || wJ['getGlobalEventBus']();
            this['linkService'] = xh['linkService'] || new x1();
            this['downloadManager'] = xh['downloadManager'] || null;
            this['removePageBorders'] = xh['removePageBorders'] || ![];
            this['enhanceTextSelection'] = xh['enhanceTextSelection'] || ![];
            this['renderInteractiveForms'] = xh['renderInteractiveForms'] || ![];
            this['enablePrintAutoRotate'] = xh['enablePrintAutoRotate'] || ![];
            this['renderer'] = xh['renderer'] || wS['CANVAS'];
            this['defaultRenderingQueue'] = !xh['renderingQueue'];
            if (this['defaultRenderingQueue']) {
                this['renderingQueue'] = new wY();
                this['renderingQueue']['setViewer'](this);
            } else {
                this['renderingQueue'] = xh['renderingQueue'];
            }
            this['scroll'] = wU(this['container'], this['_scrollUpdate']['bind'](this));
            this['presentationModeState'] = x2['UNKNOWN'];
            this['_resetView']();
            if (this['removePageBorders']) {
                this['viewer']['classList']['add']('removePageBorders');
            }
        }
        x4['prototype'] = {
            get 'pagesCount'() {
                return this['_pages']['length'];
            }
            , 'getPageView': function (xi) {
                return this['_pages'][xi];
            }
            , get 'pageViewsReady'() {
                return this['_pageViewsReady'];
            }
            , get 'currentPageNumber'() {
                return this['_currentPageNumber'];
            }
            , set 'currentPageNumber'(xj) {
                if ((xj | 0x0) !== xj) {
                    throw new Error('Invalid\x20page\x20number.');
                }
                if (!this['pdfDocument']) {
                    this['_currentPageNumber'] = xj;
                    return;
                }
                this['_setCurrentPageNumber'](xj, !![]);
            }
            , '_setCurrentPageNumber': function PDFViewer_setCurrentPageNumber(xk, xl) {
                if (this['_currentPageNumber'] === xk) {
                    if (xl) {
                        this['_resetCurrentPageView']();
                    }
                    return;
                }
                if (!(0x0 < xk && xk <= this['pagesCount'])) {
                    console['error']('PDFViewer_setCurrentPageNumber:\x20\x22' + xk + '\x22\x20is\x20out\x20of\x20bounds.');
                    return;
                }
                var xm = {
                    'source': this
                    , 'pageNumber': xk
                    , 'pageLabel': this['_pageLabels'] && this['_pageLabels'][xk - 0x1]
                };
                this['_currentPageNumber'] = xk;
                this['eventBus']['dispatch']('pagechanging', xm);
                this['eventBus']['dispatch']('pagechange', xm);
                if (xl) {
                    this['_resetCurrentPageView']();
                }
            }
            , get 'currentPageLabel'() {
                return this['_pageLabels'] && this['_pageLabels'][this['_currentPageNumber'] - 0x1];
            }
            , set 'currentPageLabel'(xn) {
                var xo = xn | 0x0;
                if (this['_pageLabels']) {
                    var xp = this['_pageLabels']['indexOf'](xn);
                    if (xp >= 0x0) {
                        xo = xp + 0x1;
                    }
                }
                this['currentPageNumber'] = xo;
            }
            , get 'currentScale'() {
                return this['_currentScale'] !== wL ? this['_currentScale'] : wQ;
            }
            , set 'currentScale'(xq) {
                if (isNaN(xq)) {
                    throw new Error('Invalid\x20numeric\x20scale');
                }
                if (!this['pdfDocument']) {
                    this['_currentScale'] = xq;
                    this['_currentScaleValue'] = xq !== wL ? xq['toString']() : null;
                    return;
                }
                this['_setScale'](xq, ![]);
            }
            , get 'currentScaleValue'() {
                return this['_currentScaleValue'];
            }
            , set 'currentScaleValue'(xr) {
                if (!this['pdfDocument']) {
                    this['_currentScale'] = isNaN(xr) ? wL : xr;
                    this['_currentScaleValue'] = xr['toString']();
                    return;
                }
                this['_setScale'](xr, ![]);
            }
            , get 'pagesRotation'() {
                return this['_pagesRotation'];
            }
            , set 'pagesRotation'(xs) {
                if (!(typeof xs === 'number' && xs % 0x5a === 0x0)) {
                    throw new Error('Invalid\x20pages\x20rotation\x20angle.');
                }
                this['_pagesRotation'] = xs;
                if (!this['pdfDocument']) {
                    return;
                }
                for (var xt = 0x0, xu = this['_pages']['length']; xt < xu; xt++) {
                    var xv = this['_pages'][xt];
                    xv['update'](xv['scale'], xs);
                }
                this['_setScale'](this['_currentScaleValue'], !![]);
                if (this['defaultRenderingQueue']) {
                    this['update']();
                }
            }
            , 'setDocument': function (xw) {
                if (this['pdfDocument']) {
                    this['_cancelRendering']();
                    this['_resetView']();
                }
                this['pdfDocument'] = xw;
                if (!xw) {
                    return;
                }
                var xx = xw['numPages'];
                var xy = this;
                var xz;
                var xA = new Promise(function (xB) {
                    xz = xB;
                });
                this['pagesPromise'] = xA;
                xA['then'](function () {
                    xy['_pageViewsReady'] = !![];
                    xy['eventBus']['dispatch']('pagesloaded', {
                        'source': xy
                        , 'pagesCount': xx
                    });
                });
                var xC = ![];
                var xD = null;
                var xE = new Promise(function (xF) {
                    xD = xF;
                });
                this['onePageRendered'] = xE;
                var xG = function (xH) {
                    xH['onBeforeDraw'] = function pdfViewLoadOnBeforeDraw() {
                        xy['_buffer']['push'](this);
                    };
                    xH['onAfterDraw'] = function pdfViewLoadOnAfterDraw() {
                        if (!xC) {
                            xC = !![];
                            xD();
                        }
                    };
                };
                var xI = xw['getPage'](0x1);
                this['firstPagePromise'] = xI;
                return xI['then'](function (xJ) {
                    var xK = this['currentScale'];
                    var xL = xJ['getViewport'](xK * wP);
                    for (var xM = 0x1; xM <= xx; ++xM) {
                        var xN = null;
                        if (!wK['PDFJS']['disableTextLayer']) {
                            xN = this;
                        }
                        var xO = new wW({
                            'container': this['viewer']
                            , 'eventBus': this['eventBus']
                            , 'id': xM
                            , 'scale': xK
                            , 'defaultViewport': xL['clone']()
                            , 'renderingQueue': this['renderingQueue']
                            , 'textLayerFactory': xN
                            , 'annotationLayerFactory': this
                            , 'enhanceTextSelection': this['enhanceTextSelection']
                            , 'renderInteractiveForms': this['renderInteractiveForms']
                            , 'renderer': this['renderer']
                        });
                        xG(xO);
                        this['_pages']['push'](xO);
                    }
                    var xP = this['linkService'];
                    xE['then'](function () {
                        if (!wK['PDFJS']['disableAutoFetch']) {
                            var xQ = xx;
                            for (var xM = 0x1; xM <= xx; ++xM) {
                                xw['getPage'](xM)['then'](function (xM, xJ) {
                                    var xO = xy['_pages'][xM - 0x1];
                                    if (!xO['pdfPage']) {
                                        xO['setPdfPage'](xJ);
                                    }
                                    xP['cachePageRef'](xM, xJ['ref']);
                                    xQ--;
                                    if (!xQ) {
                                        xz();
                                    }
                                } ['bind'](null, xM));
                            }
                        } else {
                            xz();
                        }
                    });
                    xy['eventBus']['dispatch']('pagesinit', {
                        'source': xy
                    });
                    if (this['defaultRenderingQueue']) {
                        this['update']();
                    }
                    if (this['findController']) {
                        this['findController']['resolveFirstPage']();
                    }
                } ['bind'](this));
            }
            , 'setPageLabels': function PDFViewer_setPageLabels(xV) {
                if (!this['pdfDocument']) {
                    return;
                }
                if (!xV) {
                    this['_pageLabels'] = null;
                } else if (!(xV instanceof Array && this['pdfDocument']['numPages'] === xV['length'])) {
                    this['_pageLabels'] = null;
                    console['error']('PDFViewer_setPageLabels:\x20Invalid\x20page\x20labels.');
                } else {
                    this['_pageLabels'] = xV;
                }
                for (var xW = 0x0, xX = this['_pages']['length']; xW < xX; xW++) {
                    var xY = this['_pages'][xW];
                    var xZ = this['_pageLabels'] && this['_pageLabels'][xW];
                    xY['setPageLabel'](xZ);
                }
            }
            , '_resetView': function () {
                this['_pages'] = [];
                this['_currentPageNumber'] = 0x1;
                this['_currentScale'] = wL;
                this['_currentScaleValue'] = null;
                this['_pageLabels'] = null;
                this['_buffer'] = new x5(x3);
                this['_location'] = null;
                this['_pagesRotation'] = 0x0;
                this['_pagesRequests'] = [];
                this['_pageViewsReady'] = ![];
                this['viewer']['textContent'] = '';
            }
            , '_scrollUpdate': function PDFViewer_scrollUpdate() {
                if (this['pagesCount'] === 0x0) {
                    return;
                }
                this['update']();
                for (var y0 = 0x0, y1 = this['_pages']['length']; y0 < y1; y0++) {
                    this['_pages'][y0]['updatePosition']();
                }
            }
            , '_setScaleDispatchEvent': function pdfViewer_setScaleDispatchEvent(y2, y3, y4) {
                var y5 = {
                    'source': this
                    , 'scale': y2
                    , 'presetValue': y4 ? y3 : undefined
                };
                this['eventBus']['dispatch']('scalechanging', y5);
                this['eventBus']['dispatch']('scalechange', y5);
            }
            , '_setScaleUpdatePages': function pdfViewer_setScaleUpdatePages(y6, y7, y8, y9) {
                this['_currentScaleValue'] = y7['toString']();
                if (xb(this['_currentScale'], y6)) {
                    if (y9) {
                        this['_setScaleDispatchEvent'](y6, y7, !![]);
                    }
                    return;
                }
                for (var ya = 0x0, yb = this['_pages']['length']; ya < yb; ya++) {
                    this['_pages'][ya]['update'](y6);
                }
                this['_currentScale'] = y6;
                if (!y8) {
                    var yc = this['_currentPageNumber']
                        , yd;
                    if (this['_location'] && !wK['PDFJS']['ignoreCurrentPositionOnZoom'] && !(this['isInPresentationMode'] || this['isChangingPresentationMode'])) {
                        yc = this['_location']['pageNumber'];
                        yd = [null, {
                            'name': 'XYZ'
                        }, this['_location']['left'], this['_location']['top'], null];
                    }
                    this['scrollPageIntoView']({
                        'pageNumber': yc
                        , 'destArray': yd
                        , 'allowNegativeOffset': !![]
                    });
                }
                this['_setScaleDispatchEvent'](y6, y7, y9);
                if (this['defaultRenderingQueue']) {
                    this['update']();
                }
            }
            , '_setScale': function PDFViewer_setScale(ye, yf) {
                var yg = parseFloat(ye);
                if (yg > 0x0) {
                    this['_setScaleUpdatePages'](yg, ye, yf, ![]);
                } else {
                    var yh = this['_pages'][this['_currentPageNumber'] - 0x1];
                    if (!yh) {
                        return;
                    }
                    var yi = this['isInPresentationMode'] || this['removePageBorders'] ? 0x0 : wM;
                    var yj = this['isInPresentationMode'] || this['removePageBorders'] ? 0x0 : wN;
                    var yk = (this['container']['clientWidth'] - yi) / yh['width'] * yh['scale'];
                    var yl = (this['container']['clientHeight'] - yj) / yh['height'] * yh['scale'];
                    switch (ye) {
                    case 'page-actual':
                        yg = 0x1;
                        break;
                    case 'page-width':
                        yg = yk;
                        break;
                    case 'page-height':
                        yg = yl;
                        break;
                    case 'page-fit':
                        yg = Math['min'](yk, yl);
                        break;
                    case 'auto':
                        var ym = yh['width'] > yh['height'];
                        var yn = ym ? Math['min'](yl, yk) : yk;
                        yg = Math['min'](wO, yn);
                        break;
                    default:
                        console['error']('PDFViewer_setScale:\x20\x22' + ye + '\x22\x20is\x20an\x20unknown\x20zoom\x20value.');
                        return;
                    }
                    this['_setScaleUpdatePages'](yg, ye, yf, !![]);
                }
            }
            , '_resetCurrentPageView': function () {
                if (this['isInPresentationMode']) {
                    this['_setScale'](this['_currentScaleValue'], !![]);
                }
                var yo = this['_pages'][this['_currentPageNumber'] - 0x1];
                wT(yo['div']);
            }
            , 'scrollPageIntoView': function PDFViewer_scrollPageIntoView(yp) {
                if (!this['pdfDocument']) {
                    return;
                }
                if (arguments['length'] > 0x1 || typeof yp === 'number') {
                    console['warn']('Call\x20of\x20scrollPageIntoView()\x20with\x20obsolete\x20signature.');
                    var yq = {};
                    if (typeof yp === 'number') {
                        yq['pageNumber'] = yp;
                    }
                    if (arguments[0x1] instanceof Array) {
                        yq['destArray'] = arguments[0x1];
                    }
                    yp = yq;
                }
                var yr = yp['pageNumber'] || 0x0;
                var ys = yp['destArray'] || null;
                var yt = yp['allowNegativeOffset'] || ![];
                if (this['isInPresentationMode'] || !ys) {
                    this['_setCurrentPageNumber'](yr, !![]);
                    return;
                }
                var yu = this['_pages'][yr - 0x1];
                if (!yu) {
                    console['error']('PDFViewer_scrollPageIntoView:\x20' + 'Invalid\x20\x22pageNumber\x22\x20parameter.');
                    return;
                }
                var yv = 0x0
                    , yw = 0x0;
                var yx = 0x0
                    , yy = 0x0
                    , yz, yA;
                var yB = yu['rotation'] % 0xb4 === 0x0 ? ![] : !![];
                var yC = (yB ? yu['height'] : yu['width']) / yu['scale'] / wP;
                var yD = (yB ? yu['width'] : yu['height']) / yu['scale'] / wP;
                var yE = 0x0;
                switch (ys[0x1]['name']) {
                case 'XYZ':
                    yv = ys[0x2];
                    yw = ys[0x3];
                    yE = ys[0x4];
                    yv = yv !== null ? yv : 0x0;
                    yw = yw !== null ? yw : yD;
                    break;
                case 'Fit':
                case 'FitB':
                    yE = 'page-fit';
                    break;
                case 'FitH':
                case 'FitBH':
                    yw = ys[0x2];
                    yE = 'page-width';
                    if (yw === null && this['_location']) {
                        yv = this['_location']['left'];
                        yw = this['_location']['top'];
                    }
                    break;
                case 'FitV':
                case 'FitBV':
                    yv = ys[0x2];
                    yx = yC;
                    yy = yD;
                    yE = 'page-height';
                    break;
                case 'FitR':
                    yv = ys[0x2];
                    yw = ys[0x3];
                    yx = ys[0x4] - yv;
                    yy = ys[0x5] - yw;
                    var yF = this['removePageBorders'] ? 0x0 : wM;
                    var yG = this['removePageBorders'] ? 0x0 : wN;
                    yz = (this['container']['clientWidth'] - yF) / yx / wP;
                    yA = (this['container']['clientHeight'] - yG) / yy / wP;
                    yE = Math['min'](Math['abs'](yz), Math['abs'](yA));
                    break;
                default:
                    console['error']('PDFViewer_scrollPageIntoView:\x20\x27' + ys[0x1]['name'] + '\x27\x20is\x20not\x20a\x20valid\x20destination\x20type.');
                    return;
                }
                if (yE && yE !== this['_currentScale']) {
                    this['currentScaleValue'] = yE;
                } else if (this['_currentScale'] === wL) {
                    this['currentScaleValue'] = wR;
                }
                if (yE === 'page-fit' && !ys[0x4]) {
                    wT(yu['div']);
                    return;
                }
                var yH = [yu['viewport']['convertToViewportPoint'](yv, yw), yu['viewport']['convertToViewportPoint'](yv + yx, yw + yy)];
                var yI = Math['min'](yH[0x0][0x0], yH[0x1][0x0]);
                var yJ = Math['min'](yH[0x0][0x1], yH[0x1][0x1]);
                if (!yt) {
                    yI = Math['max'](yI, 0x0);
                    yJ = Math['max'](yJ, 0x0);
                }
                wT(yu['div'], {
                    'left': yI
                    , 'top': yJ
                });
            }
            , '_updateLocation': function (yK) {
                var yL = this['_currentScale'];
                var yM = this['_currentScaleValue'];
                var yN = parseFloat(yM) === yL ? Math['round'](yL * 0x2710) / 0x64 : yM;
                var yO = yK['id'];
                var yP = '#page=' + yO;
                yP += '&zoom=' + yN;
                var yQ = this['_pages'][yO - 0x1];
                var yR = this['container'];
                var yS = yQ['getPagePoint'](yR['scrollLeft'] - yK['x'], yR['scrollTop'] - yK['y']);
                var yT = Math['round'](yS[0x0]);
                var yU = Math['round'](yS[0x1]);
                yP += ',' + yT + ',' + yU;
                this['_location'] = {
                    'pageNumber': yO
                    , 'scale': yN
                    , 'top': yU
                    , 'left': yT
                    , 'pdfOpenParams': yP
                };
            }
            , 'update': function PDFViewer_update() {
                var yV = this['_getVisiblePages']();
                var yW = yV['views'];
                if (yW['length'] === 0x0) {
                    return;
                }
                var yX = Math['max'](x3, 0x2 * yW['length'] + 0x1);
                this['_buffer']['resize'](yX);
                this['renderingQueue']['renderHighestPriority'](yV);
                var yY = this['_currentPageNumber'];
                var yZ = yV['first'];
                for (var z0 = 0x0, z1 = yW['length'], z2 = ![]; z0 < z1; ++z0) {
                    var z3 = yW[z0];
                    if (z3['percent'] < 0x64) {
                        break;
                    }
                    if (z3['id'] === yY) {
                        z2 = !![];
                        break;
                    }
                }
                if (!z2) {
                    yY = yW[0x0]['id'];
                }
                if (!this['isInPresentationMode']) {
                    this['_setCurrentPageNumber'](yY);
                }
                this['_updateLocation'](yZ);
                this['eventBus']['dispatch']('updateviewarea', {
                    'source': this
                    , 'location': this['_location']
                });
            }
            , 'containsElement': function (z4) {
                return this['container']['contains'](z4);
            }
            , 'focus': function () {
                this['container']['focus']();
            }
            , get 'isInPresentationMode'() {
                return this['presentationModeState'] === x2['FULLSCREEN'];
            }
            , get 'isChangingPresentationMode'() {
                return this['presentationModeState'] === x2['CHANGING'];
            }
            , get 'isHorizontalScrollbarEnabled'() {
                return this['isInPresentationMode'] ? ![] : this['container']['scrollWidth'] > this['container']['clientWidth'];
            }
            , '_getVisiblePages': function () {
                if (!this['isInPresentationMode']) {
                    return wV(this['container'], this['_pages'], !![]);
                }
                var z5 = [];
                var z6 = this['_pages'][this['_currentPageNumber'] - 0x1];
                z5['push']({
                    'id': z6['id']
                    , 'view': z6
                });
                return {
                    'first': z6
                    , 'last': z6
                    , 'views': z5
                };
            }
            , 'cleanup': function () {
                for (var z7 = 0x0, z8 = this['_pages']['length']; z7 < z8; z7++) {
                    if (this['_pages'][z7] && this['_pages'][z7]['renderingState'] !== wX['FINISHED']) {
                        this['_pages'][z7]['reset']();
                    }
                }
            }
            , '_cancelRendering': function PDFViewer_cancelRendering() {
                for (var z9 = 0x0, za = this['_pages']['length']; z9 < za; z9++) {
                    if (this['_pages'][z9]) {
                        this['_pages'][z9]['cancelRendering']();
                    }
                }
            }
            , '_ensurePdfPageLoaded': function (zb) {
                if (zb['pdfPage']) {
                    return Promise['resolve'](zb['pdfPage']);
                }
                var zc = zb['id'];
                if (this['_pagesRequests'][zc]) {
                    return this['_pagesRequests'][zc];
                }
                var zd = this['pdfDocument']['getPage'](zc)['then'](function (ze) {
                    zb['setPdfPage'](ze);
                    this['_pagesRequests'][zc] = null;
                    return ze;
                } ['bind'](this));
                this['_pagesRequests'][zc] = zd;
                return zd;
            }
            , 'forceRendering': function (zf) {
                var zg = zf || this['_getVisiblePages']();
                var zh = this['renderingQueue']['getHighestPriority'](zg, this['_pages'], this['scroll']['down']);
                if (zh) {
                    this['_ensurePdfPageLoaded'](zh)['then'](function () {
                        this['renderingQueue']['renderView'](zh);
                    } ['bind'](this));
                    return !![];
                }
                return ![];
            }
            , 'getPageTextContent': function (zi) {
                return this['pdfDocument']['getPage'](zi + 0x1)['then'](function (zj) {
                    return zj['getTextContent']({
                        'normalizeWhitespace': !![]
                    });
                });
            }
            , 'createTextLayerBuilder': function (zk, zl, zm, zn) {
                return new wZ({
                    'textLayerDiv': zk
                    , 'eventBus': this['eventBus']
                    , 'pageIndex': zl
                    , 'viewport': zm
                    , 'findController': this['isInPresentationMode'] ? null : this['findController']
                    , 'enhanceTextSelection': this['isInPresentationMode'] ? ![] : zn
                });
            }
            , 'createAnnotationLayerBuilder': function (zo, zp, zq) {
                return new x0({
                    'pageDiv': zo
                    , 'pdfPage': zp
                    , 'renderInteractiveForms': zq
                    , 'linkService': this['linkService']
                    , 'downloadManager': this['downloadManager']
                });
            }
            , 'setFindController': function (zr) {
                this['findController'] = zr;
            }
            , 'getPagesOverview': function () {
                var zs = this['_pages']['map'](function (zt) {
                    var zu = zt['pdfPage']['getViewport'](0x1);
                    return {
                        'width': zu['width']
                        , 'height': zu['height']
                        , 'rotation': zu['rotation']
                    };
                });
                if (!this['enablePrintAutoRotate']) {
                    return zs;
                }
                var zv = xe(zs[0x0]);
                return zs['map'](function (zw) {
                    if (zv === xe(zw)) {
                        return zw;
                    }
                    return {
                        'width': zw['height']
                        , 'height': zw['width']
                        , 'rotation': (zw['rotation'] + 0x5a) % 0x168
                    };
                });
            }
        };
        return x4;
    }();
    wB['PresentationModeState'] = x2;
    wB['PDFViewer'] = x4;
}, function (zx, zy, zz) {
    'use strict';
    var zA = zz(0x0);
    var zB = zA['SCROLLBAR_PADDING'];
    var zC = zA['mozL10n'];
    var zD = function SecondaryToolbarClosure() {
        function zD(zF, zG, zH) {
            this['toolbar'] = zF['toolbar'];
            this['toggleButton'] = zF['toggleButton'];
            this['toolbarButtonContainer'] = zF['toolbarButtonContainer'];
            this['buttons'] = [{
                'element': zF['presentationModeButton']
                , 'eventName': 'presentationmode'
                , 'close': !![]
            }, {
                'element': zF['openFileButton']
                , 'eventName': 'openfile'
                , 'close': !![]
            }, {
                'element': zF['printButton']
                , 'eventName': 'print'
                , 'close': !![]
            }, {
                'element': zF['downloadButton']
                , 'eventName': 'download'
                , 'close': !![]
            }, {
                'element': zF['viewBookmarkButton']
                , 'eventName': null
                , 'close': !![]
            }, {
                'element': zF['firstPageButton']
                , 'eventName': 'firstpage'
                , 'close': !![]
            }, {
                'element': zF['lastPageButton']
                , 'eventName': 'lastpage'
                , 'close': !![]
            }, {
                'element': zF['pageRotateCwButton']
                , 'eventName': 'rotatecw'
                , 'close': ![]
            }, {
                'element': zF['pageRotateCcwButton']
                , 'eventName': 'rotateccw'
                , 'close': ![]
            }, {
                'element': zF['toggleHandToolButton']
                , 'eventName': 'togglehandtool'
                , 'close': !![]
            }, {
                'element': zF['documentPropertiesButton']
                , 'eventName': 'documentproperties'
                , 'close': !![]
            }];
            this['items'] = {
                'firstPage': zF['firstPageButton']
                , 'lastPage': zF['lastPageButton']
                , 'pageRotateCw': zF['pageRotateCwButton']
                , 'pageRotateCcw': zF['pageRotateCcwButton']
            };
            this['mainContainer'] = zG;
            this['eventBus'] = zH;
            this['opened'] = ![];
            this['containerHeight'] = null;
            this['previousContainerHeight'] = null;
            this['reset']();
            this['_bindClickListeners']();
            this['_bindHandToolListener'](zF['toggleHandToolButton']);
            this['eventBus']['on']('resize', this['_setMaxHeight']['bind'](this));
        }
        zD['prototype'] = {
            get 'isOpen'() {
                return this['opened'];
            }
            , 'setPageNumber': function SecondaryToolbar_setPageNumber(zI) {
                this['pageNumber'] = zI;
                this['_updateUIState']();
            }
            , 'setPagesCount': function SecondaryToolbar_setPagesCount(zJ) {
                this['pagesCount'] = zJ;
                this['_updateUIState']();
            }
            , 'reset': function SecondaryToolbar_reset() {
                this['pageNumber'] = 0x0;
                this['pagesCount'] = 0x0;
                this['_updateUIState']();
            }
            , '_updateUIState': function SecondaryToolbar_updateUIState() {
                var zK = this['items'];
                zK['firstPage']['disabled'] = this['pageNumber'] <= 0x1;
                zK['lastPage']['disabled'] = this['pageNumber'] >= this['pagesCount'];
                zK['pageRotateCw']['disabled'] = this['pagesCount'] === 0x0;
                zK['pageRotateCcw']['disabled'] = this['pagesCount'] === 0x0;
            }
            , '_bindClickListeners': function SecondaryToolbar_bindClickListeners() {
                this['toggleButton']['addEventListener']('click', this['toggle']['bind'](this));
                for (var zL in this['buttons']) {
                    var zM = this['buttons'][zL]['element'];
                    var zN = this['buttons'][zL]['eventName'];
                    var zO = this['buttons'][zL]['close'];
                    zM['addEventListener']('click', function (zN, zO) {
                        if (zN !== null) {
                            this['eventBus']['dispatch'](zN, {
                                'source': this
                            });
                        }
                        if (zO) {
                            this['close']();
                        }
                    } ['bind'](this, zN, zO));
                }
            }
            , '_bindHandToolListener': function SecondaryToolbar_bindHandToolListener(zR) {
                var zS = ![];
                this['eventBus']['on']('handtoolchanged', function (zT) {
                    if (zS === zT['isActive']) {
                        return;
                    }
                    zS = zT['isActive'];
                    if (zS) {
                        zR['title'] = zC['get']('hand_tool_disable.title', null, 'Disable\x20hand\x20tool');
                        zR['firstElementChild']['textContent'] = zC['get']('hand_tool_disable_label', null, 'Disable\x20hand\x20tool');
                    } else {
                        zR['title'] = zC['get']('hand_tool_enable.title', null, 'Enable\x20hand\x20tool');
                        zR['firstElementChild']['textContent'] = zC['get']('hand_tool_enable_label', null, 'Enable\x20hand\x20tool');
                    }
                });
            }
            , 'open': function SecondaryToolbar_open() {
                if (this['opened']) {
                    return;
                }
                this['opened'] = !![];
                this['_setMaxHeight']();
                this['toggleButton']['classList']['add']('toggled');
                this['toolbar']['classList']['remove']('hidden');
            }
            , 'close': function SecondaryToolbar_close() {
                if (!this['opened']) {
                    return;
                }
                this['opened'] = ![];
                this['toolbar']['classList']['add']('hidden');
                this['toggleButton']['classList']['remove']('toggled');
            }
            , 'toggle': function SecondaryToolbar_toggle() {
                if (this['opened']) {
                    this['close']();
                } else {
                    this['open']();
                }
            }
            , '_setMaxHeight': function SecondaryToolbar_setMaxHeight() {
                if (!this['opened']) {
                    return;
                }
                this['containerHeight'] = this['mainContainer']['clientHeight'];
                if (this['containerHeight'] === this['previousContainerHeight']) {
                    return;
                }
                this['toolbarButtonContainer']['setAttribute']('style', 'max-height:\x20' + (this['containerHeight'] - zB) + 'px;');
                this['previousContainerHeight'] = this['containerHeight'];
            }
        };
        return zD;
    }();
    zy['SecondaryToolbar'] = zD;
}, function (zU, zV, zW) {
    'use strict';
    var zX = zW(0x2);
    var zY = zW(0x1);
    var zZ = 0x12c;
    var A0 = function TextLayerBuilderClosure() {
        function A0(A2) {
            this['textLayerDiv'] = A2['textLayerDiv'];
            this['eventBus'] = A2['eventBus'] || zX['getGlobalEventBus']();
            this['textContent'] = null;
            this['renderingDone'] = ![];
            this['pageIdx'] = A2['pageIndex'];
            this['pageNumber'] = this['pageIdx'] + 0x1;
            this['matches'] = [];
            this['viewport'] = A2['viewport'];
            this['textDivs'] = [];
            this['findController'] = A2['findController'] || null;
            this['textLayerRenderTask'] = null;
            this['enhanceTextSelection'] = A2['enhanceTextSelection'];
            this['_bindMouse']();
        }
        A0['prototype'] = {
            '_finishRendering': function TextLayerBuilder_finishRendering() {
                this['renderingDone'] = !![];
                if (!this['enhanceTextSelection']) {
                    var A3 = document['createElement']('div');
                    A3['className'] = 'endOfContent';
                    this['textLayerDiv']['appendChild'](A3);
                }
                this['eventBus']['dispatch']('textlayerrendered', {
                    'source': this
                    , 'pageNumber': this['pageNumber']
                    , 'numTextDivs': this['textDivs']['length']
                });
            }
            , 'render': function TextLayerBuilder_render(A4) {
                if (!this['textContent'] || this['renderingDone']) {
                    return;
                }
                this['cancel']();
                this['textDivs'] = [];
                var A5 = document['createDocumentFragment']();
                this['textLayerRenderTask'] = zY['renderTextLayer']({
                    'textContent': this['textContent']
                    , 'container': A5
                    , 'viewport': this['viewport']
                    , 'textDivs': this['textDivs']
                    , 'timeout': A4
                    , 'enhanceTextSelection': this['enhanceTextSelection']
                });
                this['textLayerRenderTask']['promise']['then'](function () {
                    this['textLayerDiv']['appendChild'](A5);
                    this['_finishRendering']();
                    this['updateMatches']();
                } ['bind'](this), function (A6) {});
            }
            , 'cancel': function TextLayerBuilder_cancel() {
                if (this['textLayerRenderTask']) {
                    this['textLayerRenderTask']['cancel']();
                    this['textLayerRenderTask'] = null;
                }
            }
            , 'setTextContent': function TextLayerBuilder_setTextContent(A7) {
                this['cancel']();
                this['textContent'] = A7;
            }
            , 'convertMatches': function TextLayerBuilder_convertMatches(A8, A9) {
                var Aa = 0x0;
                var Ab = 0x0;
                var Ac = this['textContent']['items'];
                var Ad = Ac['length'] - 0x1;
                var Ae = this['findController'] === null ? 0x0 : this['findController']['state']['query']['length'];
                var Af = [];
                if (!A8) {
                    return Af;
                }
                for (var Ag = 0x0, Ah = A8['length']; Ag < Ah; Ag++) {
                    var Ai = A8[Ag];
                    while (Aa !== Ad && Ai >= Ab + Ac[Aa]['str']['length']) {
                        Ab += Ac[Aa]['str']['length'];
                        Aa++;
                    }
                    if (Aa === Ac['length']) {
                        console['error']('Could\x20not\x20find\x20a\x20matching\x20mapping');
                    }
                    var Aj = {
                        'begin': {
                            'divIdx': Aa
                            , 'offset': Ai - Ab
                        }
                    };
                    if (A9) {
                        Ai += A9[Ag];
                    } else {
                        Ai += Ae;
                    }
                    while (Aa !== Ad && Ai > Ab + Ac[Aa]['str']['length']) {
                        Ab += Ac[Aa]['str']['length'];
                        Aa++;
                    }
                    Aj['end'] = {
                        'divIdx': Aa
                        , 'offset': Ai - Ab
                    };
                    Af['push'](Aj);
                }
                return Af;
            }
            , 'renderMatches': function TextLayerBuilder_renderMatches(Ak) {
                if (Ak['length'] === 0x0) {
                    return;
                }
                var Al = this['textContent']['items'];
                var Am = this['textDivs'];
                var An = null;
                var Ao = this['pageIdx'];
                var Ap = this['findController'] === null ? ![] : Ao === this['findController']['selected']['pageIdx'];
                var Aq = this['findController'] === null ? -0x1 : this['findController']['selected']['matchIdx'];
                var Ar = this['findController'] === null ? ![] : this['findController']['state']['highlightAll'];
                var As = {
                    'divIdx': -0x1
                    , 'offset': undefined
                };

                function At(Au, Av) {
                    var Aw = Au['divIdx'];
                    Am[Aw]['textContent'] = '';
                    Ax(Aw, 0x0, Au['offset'], Av);
                }

                function Ax(Ay, Az, AA, AB) {
                    var AC = Am[Ay];
                    var AD = Al[Ay]['str']['substring'](Az, AA);
                    var AE = document['createTextNode'](AD);
                    if (AB) {
                        var AF = document['createElement']('span');
                        AF['className'] = AB;
                        AF['appendChild'](AE);
                        AC['appendChild'](AF);
                        return;
                    }
                    AC['appendChild'](AE);
                }
                var AG = Aq
                    , AH = AG + 0x1;
                if (Ar) {
                    AG = 0x0;
                    AH = Ak['length'];
                } else if (!Ap) {
                    return;
                }
                for (var AI = AG; AI < AH; AI++) {
                    var AJ = Ak[AI];
                    var AK = AJ['begin'];
                    var AL = AJ['end'];
                    var AM = Ap && AI === Aq;
                    var AN = AM ? '\x20selected' : '';
                    if (this['findController']) {
                        this['findController']['updateMatchPosition'](Ao, AI, Am, AK['divIdx']);
                    }
                    if (!An || AK['divIdx'] !== An['divIdx']) {
                        if (An !== null) {
                            Ax(An['divIdx'], An['offset'], As['offset']);
                        }
                        At(AK);
                    } else {
                        Ax(An['divIdx'], An['offset'], AK['offset']);
                    }
                    if (AK['divIdx'] === AL['divIdx']) {
                        Ax(AK['divIdx'], AK['offset'], AL['offset'], 'highlight' + AN);
                    } else {
                        Ax(AK['divIdx'], AK['offset'], As['offset'], 'highlight\x20begin' + AN);
                        for (var AO = AK['divIdx'] + 0x1, AP = AL['divIdx']; AO < AP; AO++) {
                            Am[AO]['className'] = 'highlight\x20middle' + AN;
                        }
                        At(AL, 'highlight\x20end' + AN);
                    }
                    An = AL;
                }
                if (An) {
                    Ax(An['divIdx'], An['offset'], As['offset']);
                }
            }
            , 'updateMatches': function TextLayerBuilder_updateMatches() {
                if (!this['renderingDone']) {
                    return;
                }
                var AQ = this['matches'];
                var AR = this['textDivs'];
                var AS = this['textContent']['items'];
                var AT = -0x1;
                for (var AU = 0x0, AV = AQ['length']; AU < AV; AU++) {
                    var AW = AQ[AU];
                    var AX = Math['max'](AT, AW['begin']['divIdx']);
                    for (var AY = AX, AZ = AW['end']['divIdx']; AY <= AZ; AY++) {
                        var B0 = AR[AY];
                        B0['textContent'] = AS[AY]['str'];
                        B0['className'] = '';
                    }
                    AT = AW['end']['divIdx'] + 0x1;
                }
                if (this['findController'] === null || !this['findController']['active']) {
                    return;
                }
                var B1, B2;
                if (this['findController'] !== null) {
                    B1 = this['findController']['pageMatches'][this['pageIdx']] || null;
                    B2 = this['findController']['pageMatchesLength'] ? this['findController']['pageMatchesLength'][this['pageIdx']] || null : null;
                }
                this['matches'] = this['convertMatches'](B1, B2);
                this['renderMatches'](this['matches']);
            }
            , '_bindMouse': function TextLayerBuilder_bindMouse() {
                var B3 = this['textLayerDiv'];
                var B4 = this;
                var B5 = null;
                B3['addEventListener']('mousedown', function (B6) {
                    if (B4['enhanceTextSelection'] && B4['textLayerRenderTask']) {
                        B4['textLayerRenderTask']['expandTextDivs'](!![]);
                        if (B5) {
                            clearTimeout(B5);
                            B5 = null;
                        }
                        return;
                    }
                    var B7 = B3['querySelector']('.endOfContent');
                    if (!B7) {
                        return;
                    }
                    var B8 = B6['target'] !== B3;
                    B8 = B8 && window['getComputedStyle'](B7)['getPropertyValue']('-moz-user-select') !== 'none';
                    if (B8) {
                        var B9 = B3['getBoundingClientRect']();
                        var Ba = Math['max'](0x0, (B6['pageY'] - B9['top']) / B9['height']);
                        B7['style']['top'] = (Ba * 0x64)['toFixed'](0x2) + '%';
                    }
                    B7['classList']['add']('active');
                });
                B3['addEventListener']('mouseup', function (Bb) {
                    if (B4['enhanceTextSelection'] && B4['textLayerRenderTask']) {
                        B5 = setTimeout(function () {
                            if (B4['textLayerRenderTask']) {
                                B4['textLayerRenderTask']['expandTextDivs'](![]);
                            }
                            B5 = null;
                        }, zZ);
                        return;
                    }
                    var Bc = B3['querySelector']('.endOfContent');
                    if (!Bc) {
                        return;
                    }
                    Bc['style']['top'] = '';
                    Bc['classList']['remove']('active');
                });
            }
        };
        return A0;
    }();

    function Bd() {}
    Bd['prototype'] = {
        'createTextLayerBuilder': function (Be, Bf, Bg, Bh) {
            return new A0({
                'textLayerDiv': Be
                , 'pageIndex': Bf
                , 'viewport': Bg
                , 'enhanceTextSelection': Bh
            });
        }
    };
    zV['TextLayerBuilder'] = A0;
    zV['DefaultTextLayerFactory'] = Bd;
}, function (Bi, Bj, Bk) {
    'use strict';
    var Bl = Bk(0x0);
    var Bm = Bl['mozL10n'];
    var Bn = Bl['noContextMenuHandler'];
    var Bo = Bl['animationStarted'];
    var Bp = Bl['localized'];
    var Bq = Bl['DEFAULT_SCALE_VALUE'];
    var Br = Bl['DEFAULT_SCALE'];
    var Bs = Bl['MIN_SCALE'];
    var Bt = Bl['MAX_SCALE'];
    var Bu = 'visiblePageIsLoading';
    var Bv = 0x8;
    var Bw = 0x16;
    var Bx = function ToolbarClosure() {
        function Bx(Bz, BA, BB) {
            this['toolbar'] = Bz['container'];
            this['mainContainer'] = BA;
            this['eventBus'] = BB;
            this['items'] = Bz;
            this['_wasLocalized'] = ![];
            this['reset']();
            this['_bindListeners']();
        }
        Bx['prototype'] = {
            'setPageNumber': function (BC, BD) {
                this['pageNumber'] = BC;
                this['pageLabel'] = BD;
                this['_updateUIState'](![]);
            }
            , 'setPagesCount': function (BE, BF) {
                this['pagesCount'] = BE;
                this['hasPageLabels'] = BF;
                this['_updateUIState'](!![]);
            }
            , 'setPageScale': function (BG, BH) {
                this['pageScaleValue'] = BG;
                this['pageScale'] = BH;
                this['_updateUIState'](![]);
            }
            , 'reset': function () {
                this['pageNumber'] = 0x0;
                this['pageLabel'] = null;
                this['hasPageLabels'] = ![];
                this['pagesCount'] = 0x0;
                this['pageScaleValue'] = Bq;
                this['pageScale'] = Br;
                this['_updateUIState'](!![]);
            }
            , '_bindListeners': function Toolbar_bindClickListeners() {
                var BI = this['eventBus'];
                var BJ = this;
                var BK = this['items'];
                BK['previous']['addEventListener']('click', function () {
                    BI['dispatch']('previouspage');
                });
                BK['next']['addEventListener']('click', function () {
                    BI['dispatch']('nextpage');
                });
                BK['zoomIn']['addEventListener']('click', function () {
                    BI['dispatch']('zoomin');
                });
                BK['zoomOut']['addEventListener']('click', function () {
                    BI['dispatch']('zoomout');
                });
                BK['pageNumber']['addEventListener']('click', function () {
                    this['select']();
                });
                BK['pageNumber']['addEventListener']('change', function () {
                    BI['dispatch']('pagenumberchanged', {
                        'source': BJ
                        , 'value': this['value']
                    });
                });
                BK['scaleSelect']['addEventListener']('change', function () {
                    if (this['value'] === 'custom') {
                        return;
                    }
                    BI['dispatch']('scalechanged', {
                        'source': BJ
                        , 'value': this['value']
                    });
                });
                BK['presentationModeButton']['addEventListener']('click', function (BL) {
                    BI['dispatch']('presentationmode');
                });
                BK['openFile']['addEventListener']('click', function (BM) {
                    BI['dispatch']('openfile');
                });
                BK['print']['addEventListener']('click', function (BN) {
                    BI['dispatch']('print');
                });
                BK['download']['addEventListener']('click', function (BO) {
                    BI['dispatch']('download');
                });
                BK['scaleSelect']['oncontextmenu'] = Bn;
                Bp['then'](this['_localized']['bind'](this));
            }
            , '_localized': function Toolbar_localized() {
                this['_wasLocalized'] = !![];
                this['_adjustScaleWidth']();
                this['_updateUIState'](!![]);
            }
            , '_updateUIState': function Toolbar_updateUIState(BP) {
                function BQ(BR, BS) {
                    var BT = C2['scaleSelect']['options'];
                    var BU = ![];
                    for (var BV = 0x0, BW = BT['length']; BV < BW; BV++) {
                        var BX = BT[BV];
                        if (BX['value'] !== BR) {
                            BX['selected'] = ![];
                            continue;
                        }
                        BX['selected'] = !![];
                        BU = !![];
                    }
                    if (!BU) {
                        var BY = Math['round'](BS * 0x2710) / 0x64;
                        C2['customScaleOption']['textContent'] = Bm['get']('page_scale_percent', {
                            'scale': BY
                        }, '{{scale}}%');
                        C2['customScaleOption']['selected'] = !![];
                    }
                }
                if (!this['_wasLocalized']) {
                    return;
                }
                var BZ = this['pageNumber'];
                var C0 = (this['pageScaleValue'] || this['pageScale'])['toString']();
                var C1 = this['pageScale'];
                var C2 = this['items'];
                var C3 = this['pagesCount'];
                if (BP) {
                    if (this['hasPageLabels']) {
                        C2['pageNumber']['type'] = 'text';
                    } else {
                        C2['pageNumber']['type'] = 'number';
                        C2['numPages']['textContent'] = Bm['get']('of_pages', {
                            'pagesCount': C3
                        }, 'of\x20{{pagesCount}}');
                    }
                    C2['pageNumber']['max'] = C3;
                }
                if (this['hasPageLabels']) {
                    C2['pageNumber']['value'] = this['pageLabel'];
                    C2['numPages']['textContent'] = Bm['get']('page_of_pages', {
                        'pageNumber': BZ
                        , 'pagesCount': C3
                    }, '({{pageNumber}}\x20of\x20{{pagesCount}})');
                } else {
                    C2['pageNumber']['value'] = BZ;
                }
                C2['previous']['disabled'] = BZ <= 0x1;
                C2['next']['disabled'] = BZ >= C3;
                C2['zoomOut']['disabled'] = C1 <= Bs;
                C2['zoomIn']['disabled'] = C1 >= Bt;
                BQ(C0, C1);
            }
            , 'updateLoadingIndicatorState': function Toolbar_updateLoadingIndicatorState(C4) {
                var C5 = this['items']['pageNumber'];
                if (C4) {
                    C5['classList']['add'](Bu);
                } else {
                    C5['classList']['remove'](Bu);
                }
            }
            , '_adjustScaleWidth': function Toolbar_adjustScaleWidth() {
                var C6 = this['items']['scaleSelectContainer'];
                var C7 = this['items']['scaleSelect'];
                Bo['then'](function () {
                    if (C6['clientWidth'] === 0x0) {
                        C6['setAttribute']('style', 'display:\x20inherit;');
                    }
                    if (C6['clientWidth'] > 0x0) {
                        C7['setAttribute']('style', 'min-width:\x20inherit;');
                        var C8 = C7['clientWidth'] + Bv;
                        C7['setAttribute']('style', 'min-width:\x20' + (C8 + Bw) + 'px;');
                        C6['setAttribute']('style', 'min-width:\x20' + C8 + 'px;\x20' + 'max-width:\x20' + C8 + 'px;');
                    }
                });
            }
        };
        return Bx;
    }();
    Bj['Toolbar'] = Bx;
}, function (C9, Ca, Cb) {
    'use strict';
    var Cc = 0x14;
    var Cd = function ViewHistoryClosure() {
        function Cd(Cf, Cg) {
            this['fingerprint'] = Cf;
            this['cacheSize'] = Cg || Cc;
            this['isInitializedPromiseResolved'] = ![];
            this['initializedPromise'] = this['_readFromStorage']()['then'](function (Ch) {
                this['isInitializedPromiseResolved'] = !![];
                var Ci = JSON['parse'](Ch || '{}');
                if (!('files' in Ci)) {
                    Ci['files'] = [];
                }
                if (Ci['files']['length'] >= this['cacheSize']) {
                    Ci['files']['shift']();
                }
                var Cj;
                for (var Ck = 0x0, Cl = Ci['files']['length']; Ck < Cl; Ck++) {
                    var Cm = Ci['files'][Ck];
                    if (Cm['fingerprint'] === this['fingerprint']) {
                        Cj = Ck;
                        break;
                    }
                }
                if (typeof Cj !== 'number') {
                    Cj = Ci['files']['push']({
                        'fingerprint': this['fingerprint']
                    }) - 0x1;
                }
                this['file'] = Ci['files'][Cj];
                this['database'] = Ci;
            } ['bind'](this));
        }
        Cd['prototype'] = {
            '_writeToStorage': function ViewHistory_writeToStorage() {
                return new Promise(function (Cn) {
                    var Co = JSON['stringify'](this['database']);
                    localStorage['setItem']('pdfjs.history', Co);
                    Cn();
                } ['bind'](this));
            }
            , '_readFromStorage': function ViewHistory_readFromStorage() {
                return new Promise(function (Cp) {
                    var Cq = localStorage['getItem']('pdfjs.history');
                    if (!Cq) {
                        var Cr = localStorage['getItem']('database');
                        if (Cr) {
                            try {
                                var Cs = JSON['parse'](Cr);
                                if (typeof Cs['files'][0x0]['fingerprint'] === 'string') {
                                    localStorage['setItem']('pdfjs.history', Cr);
                                    localStorage['removeItem']('database');
                                    Cq = Cr;
                                }
                            } catch (Ct) {}
                        }
                    }
                    Cp(Cq);
                });
            }
            , 'set': function ViewHistory_set(Cu, Cv) {
                if (!this['isInitializedPromiseResolved']) {
                    return;
                }
                this['file'][Cu] = Cv;
                return this['_writeToStorage']();
            }
            , 'setMultiple': function ViewHistory_setMultiple(Cw) {
                if (!this['isInitializedPromiseResolved']) {
                    return;
                }
                for (var Cx in Cw) {
                    this['file'][Cx] = Cw[Cx];
                }
                return this['_writeToStorage']();
            }
            , 'get': function ViewHistory_get(Cy, Cz) {
                if (!this['isInitializedPromiseResolved']) {
                    return Cz;
                }
                return this['file'][Cy] || Cz;
            }
        };
        return Cd;
    }();
    Ca['ViewHistory'] = Cd;
}, function (CA, CB, CC) {
    'use strict';
    var thisPdf =  window['namePdf'];
    console.log(thisPdf);
    var CD = thisPdf || 'https://raw.githubusercontent.com/mozilla/pdf.js/ba2edeae/web/compressed.tracemonkey-pldi-09.pdf';
    var CE = CD;;
    var CF; {
        CF = CC(0x6);
    };; {
        CC(0x9);
    }

    function CG() {
        return {
            'appContainer': document['body']
            , 'mainContainer': document['getElementById']('viewerContainer')
            , 'viewerContainer': document['getElementById']('viewer')
            , 'eventBus': null
            , 'toolbar': {
                'container': document['getElementById']('toolbarViewer')
                , 'numPages': document['getElementById']('numPages')
                , 'pageNumber': document['getElementById']('pageNumber')
                , 'scaleSelectContainer': document['getElementById']('scaleSelectContainer')
                , 'scaleSelect': document['getElementById']('scaleSelect')
                , 'customScaleOption': document['getElementById']('customScaleOption')
                , 'previous': document['getElementById']('previous')
                , 'next': document['getElementById']('next')
                , 'zoomIn': document['getElementById']('zoomIn')
                , 'zoomOut': document['getElementById']('zoomOut')
                , 'viewFind': document['getElementById']('viewFind')
                , 'openFile': document['getElementById']('openFile')
                , 'print': document['getElementById']('print')
                , 'presentationModeButton': document['getElementById']('presentationMode')
                , 'download': document['getElementById']('download')
                , 'viewBookmark': document['getElementById']('viewBookmark')
            }
            , 'secondaryToolbar': {
                'toolbar': document['getElementById']('secondaryToolbar')
                , 'toggleButton': document['getElementById']('secondaryToolbarToggle')
                , 'toolbarButtonContainer': document['getElementById']('secondaryToolbarButtonContainer')
                , 'presentationModeButton': document['getElementById']('secondaryPresentationMode')
                , 'openFileButton': document['getElementById']('secondaryOpenFile')
                , 'printButton': document['getElementById']('secondaryPrint')
                , 'downloadButton': document['getElementById']('secondaryDownload')
                , 'viewBookmarkButton': document['getElementById']('secondaryViewBookmark')
                , 'firstPageButton': document['getElementById']('firstPage')
                , 'lastPageButton': document['getElementById']('lastPage')
                , 'pageRotateCwButton': document['getElementById']('pageRotateCw')
                , 'pageRotateCcwButton': document['getElementById']('pageRotateCcw')
                , 'toggleHandToolButton': document['getElementById']('toggleHandTool')
                , 'documentPropertiesButton': document['getElementById']('documentProperties')
            }
            , 'fullscreen': {
                'contextFirstPage': document['getElementById']('contextFirstPage')
                , 'contextLastPage': document['getElementById']('contextLastPage')
                , 'contextPageRotateCw': document['getElementById']('contextPageRotateCw')
                , 'contextPageRotateCcw': document['getElementById']('contextPageRotateCcw')
            }
            , 'sidebar': {
                'mainContainer': document['getElementById']('mainContainer')
                , 'outerContainer': document['getElementById']('outerContainer')
                , 'toggleButton': document['getElementById']('sidebarToggle')
                , 'thumbnailButton': document['getElementById']('viewThumbnail')
                , 'outlineButton': document['getElementById']('viewOutline')
                , 'attachmentsButton': document['getElementById']('viewAttachments')
                , 'thumbnailView': document['getElementById']('thumbnailView')
                , 'outlineView': document['getElementById']('outlineView')
                , 'attachmentsView': document['getElementById']('attachmentsView')
            }
            , 'findBar': {
                'bar': document['getElementById']('findbar')
                , 'toggleButton': document['getElementById']('viewFind')
                , 'findField': document['getElementById']('findInput')
                , 'highlightAllCheckbox': document['getElementById']('findHighlightAll')
                , 'caseSensitiveCheckbox': document['getElementById']('findMatchCase')
                , 'findMsg': document['getElementById']('findMsg')
                , 'findResultsCount': document['getElementById']('findResultsCount')
                , 'findStatusIcon': document['getElementById']('findStatusIcon')
                , 'findPreviousButton': document['getElementById']('findPrevious')
                , 'findNextButton': document['getElementById']('findNext')
            }
            , 'passwordOverlay': {
                'overlayName': 'passwordOverlay'
                , 'container': document['getElementById']('passwordOverlay')
                , 'label': document['getElementById']('passwordText')
                , 'input': document['getElementById']('password')
                , 'submitButton': document['getElementById']('passwordSubmit')
                , 'cancelButton': document['getElementById']('passwordCancel')
            }
            , 'documentProperties': {
                'overlayName': 'documentPropertiesOverlay'
                , 'container': document['getElementById']('documentPropertiesOverlay')
                , 'closeButton': document['getElementById']('documentPropertiesClose')
                , 'fields': {
                    'fileName': document['getElementById']('fileNameField')
                    , 'fileSize': document['getElementById']('fileSizeField')
                    , 'title': document['getElementById']('titleField')
                    , 'author': document['getElementById']('authorField')
                    , 'subject': document['getElementById']('subjectField')
                    , 'keywords': document['getElementById']('keywordsField')
                    , 'creationDate': document['getElementById']('creationDateField')
                    , 'modificationDate': document['getElementById']('modificationDateField')
                    , 'creator': document['getElementById']('creatorField')
                    , 'producer': document['getElementById']('producerField')
                    , 'version': document['getElementById']('versionField')
                    , 'pageCount': document['getElementById']('pageCountField')
                }
            }
            , 'errorWrapper': {
                'container': document['getElementById']('errorWrapper')
                , 'errorMessage': document['getElementById']('errorMessage')
                , 'closeButton': document['getElementById']('errorClose')
                , 'errorMoreInfo': document['getElementById']('errorMoreInfo')
                , 'moreInfoButton': document['getElementById']('errorShowMore')
                , 'lessInfoButton': document['getElementById']('errorShowLess')
            }
            , 'printContainer': document['getElementById']('printContainer')
            , 'openFileInputName': 'fileInput'
            , 'debuggerScriptPath': './debugger.js'
            , 'defaultUrl': CE
        };
    }

    function CH() {
        var CI = CG();
        window['PDFViewerApplication'] = CF['PDFViewerApplication'];
        CF['PDFViewerApplication']['run'](CI);
    }
    if (document['readyState'] === 'interactive' || document['readyState'] === 'complete') {
        CH();
    } else {
        document['addEventListener']('DOMContentLoaded', CH, !![]);
    }
}]));
