(function(ub) {
    function n() {}
    function r(a) {
        this.df = a;
        Error.captureStackTrace && Error.captureStackTrace(this, r)
    }
    function ja(a) {
        this.h = v.Pa(ja.da);
        v.Oa(this.h).get("features").textContent = a.join(", ")
    }
    function ka() {
        this.xj = new cb;
        this.h = v.Pa(ka.da);
        var a = v.Oa(this.h);
        this.xe = a.get("ping");
        a.get("max-ping");
        this.yi = a.get("fps");
        v.Jc(a.get("graph"), this.xj.h)
    }
    function Q(a, b, c) {
        var d = this;
        this.h = v.Pa(Q.da);
        var e = v.Oa(this.h);
        e.get("ok");
        e.get("cancel");
        this.ji = e.get("content");
        for (var f = e.get("title"), e = e.get("buttons"), h = 0, m = 0; m < c.length; ) {
            var l = c[m++]
              , u = window.document.createElement("button");
            u.textContent = l;
            u.onclick = function(a) {
                return function() {
                    A.u(d.ig, a[0])
                }
            }([h++]);
            e.appendChild(u)
        }
        this.ji.textContent = b;
        f.textContent = a
    }
    function R(a) {
        function b(a) {
            var b = window.document.createElement("div");
            b.className = "inputrow";
            var c = window.document.createElement("div");
            c.textContent = a;
            b.appendChild(c);
            for (var c = p.Ci(a), d = 0; d < c.length; ) {
                var e = [c[d]];
                ++d;
                var f = [window.document.createElement("div")]
                  , h = e[0];
                M.startsWith(e[0], "Key") && (h = F.substr(e[0], 3, null));
                f[0].textContent = h;
                b.appendChild(f[0]);
                h = window.document.createElement("i");
                h.className = "icon-cancel";
                h.onclick = function(a, b) {
                    return function() {
                        p.Mj(b[0]);
                        q.P.ze.tb(p);
                        a[0].remove()
                    }
                }(f, e);
                f[0].appendChild(h)
            }
            c = window.document.createElement("i");
            c.className = "icon-plus";
            b.appendChild(c);
            c.onclick = function() {
                n.classList.toggle("show", !0);
                n.focus();
                n.onkeydown = function(b) {
                    n.classList.toggle("show", !1);
                    b.stopPropagation();
                    b = b.code;
                    null == p.la(b) && (p.xa(b, a),
                    q.P.ze.tb(p),
                    t())
                }
            }
            ;
            return b
        }
        function c(a, b, c) {
            a = l.get(a);
            if (null == c)
                a.hidden = !0;
            else {
                a.innerHTML = b + ": <div class='flagico'></div> <span></span>";
                b = a.querySelector(".flagico");
                a = a.querySelector("span");
                try {
                    b.classList.add("f-" + c.rd)
                } catch (zb) {}
                a.textContent = c.rd.toUpperCase()
            }
        }
        function d(a, b, c, d) {
            var e = l.get(a);
            e.selectedIndex = d(b.la());
            e.onchange = function() {
                var a = c(e.selectedIndex);
                b.tb(a)
            }
        }
        function e(a, b, c) {
            function d(a) {
                e.classList.toggle("icon-ok", a);
                e.classList.toggle("icon-cancel", !a)
            }
            a = l.get(a);
            a.classList.add("toggle");
            var e = window.document.createElement("i");
            e.classList.add("icon-ok");
            a.insertBefore(e, a.firstChild);
            a.onclick = function() {
                var a = !b.la();
                b.tb(a);
                d(a);
                null != c && c(a)
            }
            ;
            d(b.la())
        }
        function f(a) {
            var b = {
                ih: l.get(a + "btn"),
                al: l.get(a + "sec")
            };
            u.push(b);
            b.ih.onclick = function() {
                h(b)
            }
        }
        function h(a) {
            for (var b = 0, c = 0; c < u.length; ) {
                var d = u[c];
                ++c;
                var e = d == a;
                e && (R.Mg = b);
                d.al.classList.toggle("selected", e);
                d.ih.classList.toggle("selected", e);
                ++b
            }
        }
        null == a && (a = !1);
        var m = this;
        this.h = v.Pa(R.da);
        var l = v.Oa(this.h);
        this.$h = l.get("close");
        var u = [];
        f("sound");
        f("video");
        f("misc");
        f("input");
        h(u[R.Mg]);
        e("tsound-main", q.P.Ug, function(a) {
            q.ya.Og(a ? 1 : 0)
        });
        e("tsound-chat", q.P.Je);
        e("tsound-highlight", q.P.Tg);
        e("tsound-crowd", q.P.Sg);
        d("viewmode", q.P.lc, function(a) {
            return a - 1
        }, function(a) {
            return a + 1
        });
        d("fps", q.P.Df, function(a) {
            return a
        }, function(a) {
            return a
        });
        var g = [1, .75, .5, .25];
        d("resscale", q.P.ck, function(a) {
            return g[a]
        }, function(a) {
            for (var b = 0, c = g.length - 1; b < c && !(g[b] <= a); )
                ++b;
            return b
        });
        e("tvideo-teamcol", q.P.dh);
        e("tvideo-showindicators", q.P.If);
        e("tvideo-showavatars", q.P.Rg);
        var k = null
          , k = function() {
            var b = q.P.Ff.la();
            c("loc", "Detected location", q.P.ee.la());
            c("loc-ovr", "Location override", b);
            var d = l.get("loc-ovr-btn");
            d.disabled = !a;
            null == b ? (d.textContent = "Override location",
            d.onclick = function() {
                G.u(m.nl)
            }
            ) : (d.textContent = "Remove override",
            d.onclick = function() {
                q.P.Ff.tb(null);
                k()
            }
            )
        };
        k();
        var p = q.P.ze.la(), n = l.get("presskey"), t, r = l.get("inputsec");
        t = function() {
            v.bf(r);
            var a = b("Up");
            r.appendChild(a);
            a = b("Down");
            r.appendChild(a);
            a = b("Left");
            r.appendChild(a);
            a = b("Right");
            r.appendChild(a);
            a = b("Kick");
            r.appendChild(a)
        }
        ;
        t();
        this.$h.onclick = function() {
            G.u(m.Dd)
        }
    }
    function la(a) {
        this.wf = !1;
        this.Vg = new X(p.va);
        this.lf = new X(p.wa);
        this.Bg = new X(p.Y);
        var b = this;
        this.h = v.Pa(la.da);
        var c = v.Oa(this.h);
        this.Fb = c.get("room-name");
        this.Yg = c.get("start-btn");
        this.ah = c.get("stop-btn");
        this.ve = c.get("pause-btn");
        this.Ph = c.get("auto-btn");
        this.Tf = c.get("lock-btn");
        this.Jg = c.get("reset-all-btn");
        this.Hj = c.get("rec-btn");
        var d = c.get("link-btn")
          , e = c.get("leave-btn")
          , f = c.get("rand-btn");
        this.hd = c.get("time-limit-sel");
        this.dd = c.get("score-limit-sel");
        this.Wg = c.get("stadium-name");
        this.Xg = c.get("stadium-pick");
        this.Xg.onclick = function() {
            G.u(b.uj)
        }
        ;
        this.ie(c.get("red-list"), this.Bg, p.Y, a);
        this.ie(c.get("blue-list"), this.lf, p.wa, a);
        this.ie(c.get("spec-list"), this.Vg, p.va, a);
        this.dg(this.hd, this.cg(15));
        this.dg(this.dd, this.cg(15));
        this.hd.onchange = function() {
            A.u(b.yl, b.hd.selectedIndex)
        }
        ;
        this.dd.onchange = function() {
            A.u(b.tl, b.dd.selectedIndex)
        }
        ;
        this.Yg.onclick = function() {
            G.u(b.vl)
        }
        ;
        this.ah.onclick = function() {
            G.u(b.wl)
        }
        ;
        this.ve.onclick = function() {
            G.u(b.ol)
        }
        ;
        this.Ph.onclick = function() {
            G.u(b.ml)
        }
        ;
        this.Tf.onclick = function() {
            A.u(b.xl, !b.me)
        }
        ;
        this.Jg.onclick = function() {
            null != b.Xc && (b.Xc(p.wa),
            b.Xc(p.Y))
        }
        ;
        this.Hj.onclick = function() {
            G.u(b.sl)
        }
        ;
        d.onclick = function() {
            G.u(b.ul)
        }
        ;
        e.onclick = function() {
            G.u(b.Ed)
        }
        ;
        f.onclick = function() {
            G.u(b.rl)
        }
        ;
        this.gf(!1);
        this.hf(!1)
    }
    function ma() {
        var a = this;
        this.h = v.Pa(ma.da);
        var b = v.Oa(this.h).get("file");
        b.onchange = function() {
            var c = b.files;
            if (!(1 > c.length)) {
                var c = c.item(0)
                  , d = new FileReader;
                d.onload = function() {
                    a.pj(d.result)
                }
                ;
                d.readAsArrayBuffer(c)
            }
        }
    }
    function S(a) {
        function b() {
            var b = h[f];
            a.ng = e ? b : 0;
            d.get("spd").textContent = b + "x"
        }
        this.vd = !1;
        var c = this;
        this.h = v.Pa(S.da);
        var d = v.Oa(this.h);
        this.Ee = a;
        d.get("reset").onclick = function() {
            a.Fe();
            c.jg()
        }
        ;
        var e = !0
          , f = 2
          , h = [.5, .75, 1, 2, 3];
        b();
        var m = d.get("playicon");
        m.classList.add("icon-pause");
        d.get("play").onclick = function() {
            e = !e;
            var a = m.classList;
            a.toggle("icon-play", !e);
            a.toggle("icon-pause", e);
            b()
        }
        ;
        d.get("spdup").onclick = function() {
            f += 1;
            var a = h.length - 1;
            f > a && (f = a);
            b()
        }
        ;
        d.get("spddn").onclick = function() {
            --f;
            0 > f && (f = 0);
            b()
        }
        ;
        this.uk = d.get("time");
        var l = d.get("timebar");
        this.Dj = d.get("progbar");
        for (var u = d.get("timetooltip"), g = 0, k = a.eg; g < k.length; ) {
            var p = k[g];
            ++g;
            var n = window.document.createElement("div");
            n.className = "marker";
            n.classList.add("k" + p.kind);
            n.style.left = 100 * p.Zk + "%";
            l.appendChild(n)
        }
        l.onclick = function(b) {
            a.ik((b.pageX - l.offsetLeft) / l.clientWidth * a.Vd * a.ad);
            c.vd || (c.vd = !0,
            c.sj(),
            c.jg())
        }
        ;
        l.onmousemove = function(b) {
            b = (b.pageX - l.offsetLeft) / l.clientWidth;
            u.textContent = S.fg(a.ad * a.Vd * b);
            return u.style.left = "calc(" + 100 * b + "% - 30px)"
        }
        ;
        this.Qf = d.get("leave");
        this.Qf.onclick = function() {
            G.u(c.Ed)
        }
    }
    function X(a) {
        this.ec = new Map;
        var b = this;
        this.h = v.Pa(X.da);
        this.h.className += " " + a.ni;
        var c = v.Oa(this.h);
        this.qb = c.get("list");
        this.ke = c.get("join-btn");
        this.Ge = c.get("reset-btn");
        a == p.va && this.Ge.remove();
        this.ke.textContent = "" + a.C;
        this.h.ondragover = this.h.Al = function(a) {
            -1 != a.dataTransfer.types.indexOf("player") && a.preventDefault()
        }
        ;
        this.h.ondrop = function(c) {
            c.preventDefault();
            c = c.dataTransfer.getData("player");
            null != c && (c = K.parseInt(c),
            null != c && ea.u(b.se, c, a))
        }
        ;
        this.ke.onclick = function() {
            A.u(b.mj, a)
        }
        ;
        this.Ge.onclick = function() {
            A.u(b.Xc, a)
        }
    }
    function na(a) {
        var b = this;
        this.C = a.C;
        this.jb = a.jb;
        this.Ha = a.aa;
        this.h = v.Pa(na.da);
        var c = v.Oa(this.h);
        this.ij = c.get("name");
        this.xe = c.get("ping");
        try {
            c.get("flag").classList.add("f-" + a.Hc)
        } catch (d) {}
        this.ij.textContent = this.C;
        this.xe.textContent = "" + this.jb;
        this.h.ondragstart = function(a) {
            a.dataTransfer.setData("player", K.Lc(b.Ha))
        }
        ;
        this.h.oncontextmenu = function(a) {
            a.preventDefault();
            A.u(b.Fd, b.Ha)
        }
        ;
        this.Ng(a.cb)
    }
    function cb() {
        this.Mi = 64;
        this.gh = 32;
        this.ha = window.document.createElement("canvas");
        this.td = window.document.createElement("canvas");
        this.h = window.document.createElement("div");
        this.td.width = this.ha.width = this.gh;
        this.td.height = this.ha.height = this.Mi;
        this.td.getContext("2d", null);
        this.b = this.ha.getContext("2d", null);
        this.b.fillStyle = "green";
        for (var a = [], b = 0, c = this.gh; b < c; )
            ++b,
            a.push(0);
        this.h.appendChild(this.td);
        this.h.className = "graph"
    }
    function oa() {
        this.Ea = null;
        var a = this;
        this.h = v.Pa(oa.da);
        var b = v.Oa(this.h);
        b.get("cancel").onclick = function() {
            G.u(a.kj)
        }
        ;
        this.we = b.get("pick");
        this.uf = b.get("delete");
        this.Cf = b.get("export");
        var c = b.get("list")
          , d = b.get("file");
        this.Nd();
        this.we.onclick = function() {
            null != a.Ea && a.Ea.ld().then(function(b) {
                A.u(a.ue, b)
            })
        }
        ;
        this.uf.onclick = function() {
            if (null != a.Ea) {
                var b = a.Ea.nh;
                null != b && (a.Ea.Kb.remove(),
                a.Ea = null,
                b(),
                a.Nd())
            }
        }
        ;
        this.Cf.onclick = function() {
            null != a.Ea && a.Ea.ld().then(function(a) {
                Va.fk(a.jd(), a.C + ".hbs")
            })
        }
        ;
        this.Bj(c);
        this.Id = pa.Xf(c);
        window.setTimeout(function() {
            a.Id.update()
        }, 0);
        d.onchange = function() {
            var b = d.files;
            if (!(1 > b.length)) {
                var b = b.item(0)
                  , c = new FileReader;
                c.onload = function() {
                    try {
                        var b = new g;
                        b.Rf(c.result);
                        A.u(a.ue, b)
                    } catch (m) {
                        b = m instanceof r ? m.df : m,
                        b instanceof SyntaxError ? A.u(a.te, "SyntaxError in line: " + K.Lc(b.lineNumber)) : b instanceof Wa ? A.u(a.te, b.fj) : A.u(a.te, "Error loading stadium file.")
                    }
                }
                ;
                c.readAsText(b)
            }
        }
    }
    function qa() {
        var a = this;
        this.h = v.Pa(qa.da);
        var b = v.Oa(this.h);
        b.get("cancel").onclick = function() {
            A.u(a.Dd, !1)
        }
        ;
        b.get("leave").onclick = function() {
            A.u(a.Dd, !0)
        }
    }
    function fa(a) {
        this.Ya = new ra;
        this.Dc = !1;
        this.$g = new ka;
        this.Ga = new Y;
        var b = this;
        this.cd = new la(a);
        this.Ya.qg = a;
        this.h = v.Pa(fa.da);
        a = v.Oa(this.h);
        this.de = a.get("gameplay-section");
        this.Yc = a.get("popups");
        this.Yc.style.display = "none";
        v.Jc(a.get("chatbox"), this.Ga.h);
        v.Jc(a.get("stats"), this.$g.h);
        this.pe = a.get("menu");
        this.pe.onclick = function() {
            b.ed(!b.Dc);
            b.pe.blur()
        }
        ;
        a.get("settings").onclick = function() {
            var a = new R;
            a.Dd = function() {
                b.Hb(null)
            }
            ;
            b.Hb(a.h)
        }
        ;
        this.de.appendChild(this.Ya.h);
        this.cd.Ed = function() {
            var a = new qa;
            a.Dd = function(a) {
                b.Hb(null);
                a && G.u(b.Ed)
            }
            ;
            b.Hb(a.h)
        }
        ;
        this.cd.uj = function() {
            var a = new oa;
            a.kj = function() {
                b.Hb(null)
            }
            ;
            a.ue = function(a) {
                A.u(b.ue, a);
                b.Hb(null)
            }
            ;
            a.te = function(a) {
                a = new Q("Error loading stadium",a,["Ok"]);
                a.ig = function() {
                    b.Hb(null)
                }
                ;
                b.Hb(a.h)
            }
            ;
            b.Hb(a.h)
        }
    }
    function db() {
        this.ma = 0;
        this.xf = this.yf = !1;
        this.Pc = 0;
        this.h = window.document.createElement("div");
        this.h.className = "game-timer-view";
        this.h.appendChild(this.vj = this.tc("OVERTIME!", "overtime"));
        this.h.appendChild(this.hj = this.tc("0", "digit"));
        this.h.appendChild(this.gj = this.tc("0", "digit"));
        this.h.appendChild(this.tc(":", null));
        this.h.appendChild(this.hk = this.tc("0", "digit"));
        this.h.appendChild(this.gk = this.tc("0", "digit"))
    }
    function ra() {
        this.qg = -1;
        this.Ua = new E;
        this.ub = new db;
        this.h = v.Pa(ra.da);
        var a = v.Oa(this.h);
        this.$a = new Xa(a.get("red-score"),0);
        this.Ta = new Xa(a.get("blue-score"),0);
        v.Jc(a.get("timer"), this.ub.h);
        v.Jc(a.get("canvas"), this.Ua.ha)
    }
    function sa(a, b) {
        this.jf = [];
        this.Lj = /[#@][^\s@#]*$/;
        this.Xa = a;
        this.qj = b;
        a.hidden = !0
    }
    function Y() {
        function a() {
            null != b.tj && "" != b.Ia.value && b.tj(b.Ia.value);
            b.Ia.value = "";
            b.Ia.blur()
        }
        var b = this;
        this.h = v.Pa(Y.da);
        var c = v.Oa(this.h);
        this.Bb = c.get("log");
        this.Id = pa.Xf(this.Bb);
        this.Ia = c.get("input");
        this.Ia.maxLength = 140;
        c.get("send").onclick = a;
        this.wb = new sa(c.get("autocompletebox"),function(a, c) {
            b.Ia.value = a;
            b.Ia.setSelectionRange(c, c)
        }
        );
        this.Ia.onkeydown = function(c) {
            switch (c.keyCode) {
            case 9:
                b.wb.Xa.hidden || (b.wb.ti(),
                c.preventDefault());
                break;
            case 13:
                a();
                break;
            case 27:
                b.wb.Xa.hidden ? (b.Ia.value = "",
                b.Ia.blur()) : b.wb.ge();
                break;
            case 38:
                b.wb.pf(-1);
                break;
            case 40:
                b.wb.pf(1)
            }
            c.stopPropagation()
        }
        ;
        this.Ia.onfocus = function() {
            null != b.re && b.re(!0)
        }
        ;
        this.Ia.onblur = function() {
            null != b.re && b.re(!1);
            b.wb.ge()
        }
        ;
        this.Ia.oninput = function() {
            b.wb.Vh(b.Ia.value, b.Ia.selectionStart)
        }
    }
    function Z() {
        this.wd = !1;
        this.C = "";
        this.Yd = 0;
        this.od = "";
        this.Fa = new aa;
        var a = window.document.createElement("canvas");
        a.width = 64;
        a.height = 64;
        this.Ka = a.getContext("2d", null);
        this.kf = this.Ka.createPattern(this.Ka.canvas, "no-repeat");
        this.li()
    }
    function eb() {
        this.ub = 0;
        this.qb = [];
        this.tk = new J(["Time is", "Up!"],16777215);
        this.Jj = new J(["Red is", "Victorious!"],15035990);
        this.Ij = new J(["Red", "Scores!"],15035990);
        this.Rh = new J(["Blue is", "Victorious!"],625603);
        this.Qh = new J(["Blue", "Scores!"],625603);
        this.wj = new J(["Game", "Paused"],16777215)
    }
    function J(a, b) {
        for (var c = [], d = 0; d < a.length; )
            c.push(this.ej(a[d++], b));
        this.Vc = c
    }
    function E() {
        this.Uc = window.performance.now();
        this.Md = new Map;
        this.Vb = new Map;
        this.He = 1;
        this.Pe = 35;
        this.xg = 0;
        this.Be = 1.5;
        this.Ba = new B(0,0);
        this.Lf = !1;
        this.cc = new eb;
        this.ha = window.document.createElement("canvas");
        this.ha.mozOpaque = !0;
        this.b = this.ha.getContext("2d", {
            alpha: !1
        });
        this.Ji = this.b.createPattern(q.Ii, null);
        this.hi = this.b.createPattern(q.gi, null);
        this.fi = this.b.createPattern(q.ei, null)
    }
    function w() {
        this.dc = 0;
        this.j = 32;
        this.g = 63;
        this.i = 1;
        this.a = new B(0,0)
    }
    function z() {
        this.Kd = this.Ld = this.ia = null;
        this.sf = 0;
        this.O = this.K = this.uc = null;
        this.xb = 0;
        this.i = 1;
        this.g = 63;
        this.j = 32;
        this.La = 1 / 0;
        this.Ca = !0;
        this.H = 0
    }
    function D() {
        this.j = 32;
        this.g = 63;
        this.i = 1;
        this.Aa = 0;
        this.ia = new B(0,0)
    }
    function ba() {
        this.lb = -1;
        this.kb = null;
        this.s = []
    }
    function ta() {
        this.H = 0;
        this.Ec = 1 / 0;
        this.Ra = this.ib = 100;
        this.vc = this.wc = 0
    }
    function P() {
        this.lb = -1;
        this.kb = null;
        this.kg = 0;
        this.g = this.j = 63;
        this.mf = 0;
        this.H = 16777215;
        this.ka = .99;
        this.N = 1;
        this.i = .5;
        this.M = 10;
        this.V = new B(0,0);
        this.o = new B(0,0);
        this.a = new B(0,0)
    }
    function ua() {
        this.ja = 0
    }
    function va() {
        this.ja = 0
    }
    function wa() {
        this.ja = 0
    }
    function xa() {
        this.ja = 0
    }
    function ya() {
        this.ja = 0
    }
    function za() {
        this.ja = 0
    }
    function Aa() {
        this.jh = !1;
        this.ja = 0
    }
    function rb() {}
    function Ba() {
        this.ja = 0
    }
    function Ca() {
        this.ja = 0
    }
    function Da() {
        this.ja = 0
    }
    function Ea() {
        this.ja = 0
    }
    function Fa() {
        this.ja = 0
    }
    function Ga() {
        this.ja = 0
    }
    function Ha() {
        this.ja = 0
    }
    function Ia() {
        this.ja = 0
    }
    function Ja() {
        this.ja = 0
    }
    function Ka() {
        this.ja = 0
    }
    function La() {
        this.ja = 0
    }
    function Ma() {
        this.ja = 0
    }
    function Na() {
        this.ja = 0
    }
    function Oa() {
        this.ja = 0
    }
    function Pa() {
        this.ja = 0
    }
    function Qa() {
        this.ja = 0
    }
    function T() {
        this.Nb = -1;
        this.wh = null;
        this.fa = p.va;
        this.w = null;
        this.vb = this.Lb = 0;
        this.eb = !1;
        this.zb = this.aa = 0;
        this.C = "Player";
        this.Qd = this.jb = 0;
        this.Hc = null;
        this.nc = !1;
        this.Jb = this.mc = null;
        this.Sa = 0;
        this.cb = !1
    }
    function ca() {
        this.lb = -1;
        this.I = this.kb = null;
        this.fc = 2;
        this.Sb = 0;
        this.zc = 1;
        this.Da = this.ma = 3;
        this.Ib = !1;
        this.D = null;
        this.L = [];
        this.Fb = "";
        this.I = g.fe()[0];
        this.Fa = [null, new aa, new aa];
        this.Fa[1].Wa.push(p.Y.H);
        this.Fa[2].Wa.push(p.wa.H)
    }
    function p(a, b, c, d, e, f, h, m) {
        this.Gd = null;
        this.Ha = a;
        this.H = b;
        this.$d = c;
        this.Ti = d;
        this.C = e;
        this.ni = f;
        this.j = m;
        this.bh = new aa;
        this.bh.Wa.push(b)
    }
    function aa() {
        this.kc = 16777215;
        this.Wa = []
    }
    function g() {
        this.B = [];
        this.J = [];
        this.W = [];
        this.pb = [];
        this.s = [];
        this.Ja = [];
        this.gc = [];
        this.ac = [];
        this.Ac = new Ya;
        this.Zd = 255;
        this.Oc = this.Wc = 0;
        this.pd = !0;
        this.bd = !1
    }
    function Wa(a) {
        this.fj = a
    }
    function Ya() {
        this.Rc = 0;
        this.M = 15;
        this.j = 0;
        this.V = new B(0,0);
        this.N = this.i = .5;
        this.ka = .96;
        this.Mc = .1;
        this.Sc = .07;
        this.Tc = .96;
        this.Qc = 5
    }
    function Ra() {
        this.Fc = p.va;
        this.O = new B(0,0);
        this.K = new B(0,0)
    }
    function I() {
        this.lb = -1;
        this.kb = null;
        this.$a = this.Ta = this.Cb = this.za = 0;
        this.xc = p.Y;
        this.rb = this.Na = 0;
        this.Z = new ba;
        this.ma = 0;
        this.Da = 5;
        this.I = null
    }
    function U() {
        this.g = this.j = 63;
        this.H = 16777215;
        this.ka = .99;
        this.N = 1;
        this.i = .5;
        this.M = 10;
        this.V = new B(0,0);
        this.o = new B(0,0);
        this.a = new B(0,0)
    }
    function fb(a, b) {
        this.Ud = null;
        this.el = .025;
        this.Ic = this.Td = this.md = 0;
        this.Pd = b.createGain();
        this.Pd.gain.value = 0;
        var c = b.createBufferSource();
        c.buffer = a;
        c.connect(this.Pd);
        c.loop = !0;
        c.start()
    }
    function gb(a) {
        function b(b) {
            return new Promise(function(d, f) {
                var e = a.file(b).asArrayBuffer();
                return c.b.decodeAudioData(e, d, f)
            }
            )
        }
        var c = this;
        this.b = new AudioContext;
        this.yd = this.b.createGain();
        this.Og(q.P.Ug.la() ? 1 : 0);
        this.yd.connect(this.b.destination);
        this.ui = Promise.all([b("sounds/chat.ogg").then(function(a) {
            return c.qf = a
        }), b("sounds/highlight.wav").then(function(a) {
            return c.Hf = a
        }), b("sounds/kick.ogg").then(function(a) {
            return c.Si = a
        }), b("sounds/goal.ogg").then(function(a) {
            return c.Gi = a
        }), b("sounds/join.ogg").then(function(a) {
            return c.Qi = a
        }), b("sounds/leave.ogg").then(function(a) {
            return c.Ui = a
        }), b("sounds/crowd.ogg").then(function(a) {
            c.mi = a;
            c.rf = new fb(c.mi,c.b);
            c.rf.connect(c.yd)
        })])
    }
    function ga() {}
    function C() {}
    function hb(a) {
        this.Uc = window.performance.now();
        this.be = 0;
        var b = this;
        this.oe = a;
        this.T = new fa(a.qe);
        var c = new ib(this.T);
        c.Eg(a.bb);
        window.document.addEventListener("keydown", jb(this, this.nj));
        window.document.addEventListener("keyup", jb(this, this.oj));
        window.requestAnimationFrame(jb(this, this.hg));
        window.setInterval(function() {
            b.T.$g.kk(b.be);
            b.be = 0
        }, 1E3);
        this.Qg(q.P.lc.la());
        this.T.h.classList.add("replayer");
        this.ic = new S(a);
        this.ic.sj = function() {
            c.Bk(a.bb)
        }
        ;
        this.ic.rj = function() {
            b.T.ed(null == a.bb.D);
            c.Eg(a.bb)
        }
        ;
        this.ic.jg = function() {
            b.T.Ya.Ua.ak()
        }
        ;
        this.T.h.appendChild(this.ic.h)
    }
    function x() {}
    function q() {}
    function L() {
        this.Rb = new Map
    }
    function V(a, b, c, d) {
        this.C = a;
        this.Ik = d;
        this.ne = b;
        d = null;
        null != b && (d = b.getItem(a));
        this.fh = c(d)
    }
    function sb() {}
    function kb() {
        function a(a) {
            return new V(a,e,function(a) {
                if (null == a)
                    return null;
                try {
                    return N.ce(a)
                } catch (m) {
                    return null
                }
            }
            ,function(a) {
                if (null == a)
                    return null;
                try {
                    return a.jd()
                } catch (m) {
                    return null
                }
            }
            )
        }
        function b(a) {
            return new V(a,e,function(a) {
                return null != a ? "0" != a : !0
            }
            ,function(a) {
                return a ? "1" : "0"
            }
            )
        }
        function c(a, b) {
            return new V(a,e,function(a) {
                var c = b;
                try {
                    null != a && (c = K.parseInt(a))
                } catch (u) {}
                return c
            }
            ,function(a) {
                return "" + a
            }
            )
        }
        function d(a, b, c) {
            new V(a,e,function(a) {
                return null == a ? b : Za.Ve(a, c)
            }
            ,function(a) {
                return a
            }
            )
        }
        var e = sb.Qk();
        d("player_name", "", 25);
        this.lc = c("view_mode", -1);
        this.Df = c("fps_limit", 0);
        d("avatar", null, 2);
        d("rctoken", null, 1024);
        this.dh = b("team_colors");
        this.If = b("show_indicators");
        this.Ug = b("sound_main");
        this.Je = b("sound_chat");
        this.Tg = b("sound_highlight");
        this.Sg = b("sound_crowd");
        d("player_auth_key", null, 1024);
        c("extrapolation", 0);
        this.ck = function(a, b) {
            return new V(a,e,function(a) {
                var c = b;
                try {
                    null != a && (c = parseFloat(a))
                } catch (u) {}
                return c
            }
            ,function(a) {
                return "" + a
            }
            )
        }("resolution_scale", 1);
        this.Rg = b("show_avatars");
        this.ee = a("geo");
        this.Ff = a("geo_override");
        this.ze = function() {
            return new V("player_keys",e,function(a) {
                if (null == a)
                    return L.tf();
                try {
                    return L.ce(a)
                } catch (h) {
                    return L.tf()
                }
            }
            ,function(a) {
                try {
                    return a.jd()
                } catch (h) {
                    return null
                }
            }
            )
        }()
    }
    function N() {
        this.rd = "";
        this.Pf = this.Wf = 0
    }
    function ib(a, b) {
        this.he = null;
        this.T = a;
        null != b && (this.he = "@" + M.replace(b, " ", "_"))
    }
    function Sa() {}
    function lb() {}
    function ea() {}
    function A() {}
    function G() {}
    function W() {}
    function B(a, b) {
        this.x = a;
        this.y = b
    }
    function $a(a) {
        this.fb = a.slice()
    }
    function ab(a, b, c) {
        this.eg = [];
        this.ng = 5;
        this.jc = -1;
        this.Cd = this.ab = this.le = this.Ef = 0;
        ha.call(this, b);
        a = new O(new DataView(a.buffer),!1);
        if (1212305970 != a.Cc())
            throw new r("");
        b = a.Cc();
        if (c != b)
            throw new r(new mb);
        this.ad = a.Cc();
        c = pako.inflateRaw(a.Jd());
        this.Eb = new O(new DataView(c.buffer,c.byteOffset,c.byteLength));
        this.Gj(this.Eb);
        c = this.Eb.Jd();
        this.Eb = new O(new DataView(c.buffer,c.byteOffset,c.byteLength),!1);
        this.Fe();
        this.le = window.performance.now();
        this.qe = -1
    }
    function mb() {}
    function ha(a) {
        this.qe = 0;
        this.Fh = .06;
        this.Vd = 16.666666666666668;
        Ta.call(this, a)
    }
    function da() {}
    function ia() {}
    function nb() {}
    function Ua() {
        this.ja = 0
    }
    function Ta(a) {
        this.fd = 0;
        this.bb = a
    }
    function k() {
        this.ja = 0
    }
    function ob() {}
    function v() {}
    function Xa(a, b) {
        this.Kb = a;
        this.value = b;
        a.textContent = "" + b
    }
    function Va() {}
    function pa() {}
    function H(a, b) {
        null == b && (b = !1);
        this.A = a;
        this.Qa = b;
        this.a = 0
    }
    function O(a, b) {
        null == b && (b = !1);
        this.A = a;
        this.Qa = b;
        this.a = 0
    }
    function pb() {
        this.hash = 0
    }
    function Za() {}
    function M() {}
    function K() {}
    function qb() {}
    function F() {}
    function y(a, b) {
        var c = Object.create(a), d;
        for (d in b)
            c[d] = b[d];
        b.toString !== Object.prototype.toString && (c.toString = b.toString);
        return c
    }
    function jb(a, b) {
        if (null == b)
            return null;
        null == b.Wd && (b.Wd = vb++);
        var c;
        null == a.We ? a.We = {} : c = a.We[b.Wd];
        null == c && (c = b.bind(a),
        a.We[b.Wd] = c);
        return c
    }
    F.c = !0;
    F.lh = function(a, b) {
        var c = a.charCodeAt(b);
        if (c == c)
            return c
    }
    ;
    F.substr = function(a, b, c) {
        if (null == c)
            c = a.length;
        else if (0 > c)
            if (0 == b)
                c = a.length + c;
            else
                return "";
        return a.substr(b, c)
    }
    ;
    F.remove = function(a, b) {
        var c = a.indexOf(b);
        if (-1 == c)
            return !1;
        a.splice(c, 1);
        return !0
    }
    ;
    Math.c = !0;
    qb.c = !0;
    qb.oh = function(a) {
        var b = [];
        if (null != a) {
            var c = Object.prototype.hasOwnProperty, d;
            for (d in a)
                "__id__" != d && "hx__closures__" != d && c.call(a, d) && b.push(d)
        }
        return b
    }
    ;
    K.c = !0;
    K.Lc = function(a) {
        return n.nd(a, "")
    }
    ;
    K.parseInt = function(a) {
        a = parseInt(a, !a || "0" != a[0] || "x" != a[1] && "X" != a[1] ? 10 : 16);
        return isNaN(a) ? null : a
    }
    ;
    M.c = !0;
    M.startsWith = function(a, b) {
        return a.length >= b.length ? F.substr(a, 0, b.length) == b : !1
    }
    ;
    M.Uk = function(a) {
        var b, c = "";
        for (b = 2 - a.length; c.length < b; )
            c += "0";
        return c + (null == a ? "null" : "" + a)
    }
    ;
    M.replace = function(a, b, c) {
        return a.split(b).join(c)
    }
    ;
    M.ph = function(a, b) {
        for (var c = ""; c = "0123456789ABCDEF".charAt(a & 15) + c,
        a >>>= 4,
        0 < a; )
            ;
        if (null != b)
            for (; c.length < b; )
                c = "0" + c;
        return c
    }
    ;
    Za.c = !0;
    Za.Ve = function(a, b) {
        return a.length <= b ? a : F.substr(a, 0, b)
    }
    ;
    pb.c = !0;
    pb.prototype = {
        Kk: function(a) {
            for (var b = 0, c = a.length; b < c; )
                this.hash += a[b++],
                this.hash += this.hash << 10,
                this.hash ^= this.hash >>> 6
        },
        f: pb
    };
    O.c = !0;
    O.oi = function(a, b) {
        var c = a.getUint8(b), d, e, f, h, m, l = b;
        if (0 == (c & 128))
            ++b;
        else if (192 == (c & 224))
            d = a.getUint8(b + 1),
            c = (c & 31) << 6 | d & 63,
            b += 2;
        else if (224 == (c & 240))
            d = a.getUint8(b + 1),
            e = a.getUint8(b + 2),
            c = (c & 15) << 12 | (d & 63) << 6 | e & 63,
            b += 3;
        else if (240 == (c & 248))
            d = a.getUint8(b + 1),
            e = a.getUint8(b + 2),
            f = a.getUint8(b + 3),
            c = (c & 7) << 18 | (d & 63) << 12 | (e & 63) << 6 | f & 63,
            b += 4;
        else if (248 == (c & 252))
            d = a.getUint8(b + 1),
            e = a.getUint8(b + 2),
            f = a.getUint8(b + 3),
            h = a.getUint8(b + 4),
            c = (c & 3) << 24 | (d & 63) << 18 | (e & 63) << 12 | (f & 63) << 6 | h & 63,
            b += 5;
        else if (252 == (c & 254))
            d = a.getUint8(b + 1),
            e = a.getUint8(b + 2),
            f = a.getUint8(b + 3),
            h = a.getUint8(b + 4),
            m = a.getUint8(b + 5),
            c = (c & 1) << 30 | (d & 63) << 24 | (e & 63) << 18 | (f & 63) << 12 | (h & 63) << 6 | m & 63,
            b += 6;
        else
            throw new r("Cannot decode UTF8 character at offset " + b + ": charCode (" + c + ") is invalid");
        return {
            "char": c,
            length: b - l
        }
    }
    ;
    O.prototype = {
        Jd: function(a) {
            null == a && (a = this.A.byteLength - this.a);
            if (this.a + a > this.A.byteLength)
                throw new r("Read too much");
            var b = new Uint8Array(this.A.buffer,this.A.byteOffset + this.a,a);
            this.a += a;
            return b
        },
        Ej: function(a) {
            var b = this.Jd(a);
            a = new ArrayBuffer(a);
            (new Uint8Array(a)).set(b);
            return a
        },
        Zc: function() {
            return this.A.getInt8(this.a++)
        },
        G: function() {
            return this.A.getUint8(this.a++)
        },
        Ce: function() {
            var a = this.A.getInt16(this.a, this.Qa);
            this.a += 2;
            return a
        },
        $c: function() {
            var a = this.A.getUint16(this.a, this.Qa);
            this.a += 2;
            return a
        },
        F: function() {
            var a = this.A.getInt32(this.a, this.Qa);
            this.a += 4;
            return a
        },
        Cc: function() {
            var a = this.A.getUint32(this.a, this.Qa);
            this.a += 4;
            return a
        },
        Fj: function() {
            var a = this.A.getFloat32(this.a, this.Qa);
            this.a += 4;
            return a
        },
        m: function() {
            var a = this.A.getFloat64(this.a, this.Qa);
            this.a += 8;
            return a
        },
        Wb: function() {
            for (var a = this.a, b = 0, c, d = 0; c = this.A.getUint8(a + b),
            5 > b && (d |= (c & 127) << 7 * b >>> 0),
            ++b,
            0 != (c & 128); )
                ;
            this.a += b;
            return d | 0
        },
        zg: function(a) {
            var b = this.a, c, d = "";
            for (a = b + a; b < a; )
                c = O.oi(this.A, b),
                b += c.length,
                d += String.fromCodePoint(c["char"]);
            if (b != a)
                throw new r("Actual string length differs from the specified: " + (b - a) + " bytes");
            this.a = b;
            return d
        },
        Za: function() {
            var a = this.Wb();
            return 0 >= a ? null : this.zg(a - 1)
        },
        Ag: function() {
            return this.zg(this.Wb())
        },
        f: O
    };
    H.c = !0;
    H.ff = function(a) {
        var b;
        null == b && (b = !1);
        null == a && (a = 16);
        return new H(new DataView(new ArrayBuffer(a)),b)
    }
    ;
    H.wi = function(a, b, c) {
        var d = c;
        if (0 > a)
            throw new r("Cannot encode UTF8 character: charCode (" + a + ") is negative");
        if (128 > a)
            b.setUint8(c, a & 127),
            ++c;
        else if (2048 > a)
            b.setUint8(c, a >> 6 & 31 | 192),
            b.setUint8(c + 1, a & 63 | 128),
            c += 2;
        else if (65536 > a)
            b.setUint8(c, a >> 12 & 15 | 224),
            b.setUint8(c + 1, a >> 6 & 63 | 128),
            b.setUint8(c + 2, a & 63 | 128),
            c += 3;
        else if (2097152 > a)
            b.setUint8(c, a >> 18 & 7 | 240),
            b.setUint8(c + 1, a >> 12 & 63 | 128),
            b.setUint8(c + 2, a >> 6 & 63 | 128),
            b.setUint8(c + 3, a & 63 | 128),
            c += 4;
        else if (67108864 > a)
            b.setUint8(c, a >> 24 & 3 | 248),
            b.setUint8(c + 1, a >> 18 & 63 | 128),
            b.setUint8(c + 2, a >> 12 & 63 | 128),
            b.setUint8(c + 3, a >> 6 & 63 | 128),
            b.setUint8(c + 4, a & 63 | 128),
            c += 5;
        else if (-2147483648 > a)
            b.setUint8(c, a >> 30 & 1 | 252),
            b.setUint8(c + 1, a >> 24 & 63 | 128),
            b.setUint8(c + 2, a >> 18 & 63 | 128),
            b.setUint8(c + 3, a >> 12 & 63 | 128),
            b.setUint8(c + 4, a >> 6 & 63 | 128),
            b.setUint8(c + 5, a & 63 | 128),
            c += 6;
        else
            throw new r("Cannot encode UTF8 character: charCode (" + a + ") is too large (>= 0x80000000)");
        return c - d
    }
    ;
    H.Th = function(a) {
        if (0 > a)
            throw new r("Cannot calculate length of UTF8 character: charCode (" + a + ") is negative");
        if (128 > a)
            return 1;
        if (2048 > a)
            return 2;
        if (65536 > a)
            return 3;
        if (2097152 > a)
            return 4;
        if (67108864 > a)
            return 5;
        if (-2147483648 > a)
            return 6;
        throw new r("Cannot calculate length of UTF8 character: charCode (" + a + ") is too large (>= 0x80000000)");
    }
    ;
    H.nf = function(a) {
        for (var b = 0, c = a.length, d = 0; d < c; )
            b += H.Th(F.lh(a, d++));
        return b
    }
    ;
    H.Uh = function(a) {
        a >>>= 0;
        return 128 > a ? 1 : 16384 > a ? 2 : 2097152 > a ? 3 : 268435456 > a ? 4 : 5
    }
    ;
    H.prototype = {
        zk: function() {
            return new Uint8Array(this.A.buffer,this.A.byteOffset,this.a)
        },
        wk: function() {
            return new DataView(this.A.buffer,this.A.byteOffset,this.a)
        },
        xk: function() {
            return new O(this.wk(),this.Qa)
        },
        Pb: function(a) {
            this.A.byteLength < a && this.bk(2 * this.A.byteLength >= a ? 2 * this.A.byteLength : a)
        },
        bk: function(a) {
            if (1 > a)
                throw new r("Can't resize buffer to a capacity lower than 1");
            if (this.A.byteLength < a) {
                var b = new Uint8Array(this.A.buffer);
                a = new ArrayBuffer(a);
                (new Uint8Array(a)).set(b);
                this.A = new DataView(a)
            }
        },
        R: function(a) {
            var b = this.a++;
            this.Pb(this.a);
            this.A.setUint8(b, a)
        },
        Se: function(a) {
            var b = this.a;
            this.a += 2;
            this.Pb(this.a);
            this.A.setInt16(b, a, this.Qa)
        },
        Gk: function(a) {
            var b = this.a;
            this.a += 2;
            this.Pb(this.a);
            this.A.setUint16(b, a, this.Qa)
        },
        ea: function(a) {
            var b = this.a;
            this.a += 4;
            this.Pb(this.a);
            this.A.setInt32(b, a, this.Qa)
        },
        hh: function(a) {
            var b = this.a;
            this.a += 4;
            this.Pb(this.a);
            this.A.setUint32(b, a, this.Qa)
        },
        l: function(a) {
            var b = this.a;
            this.a += 8;
            this.Pb(this.a);
            this.A.setFloat64(b, a, this.Qa)
        },
        Gc: function(a) {
            null == a ? this.Te(0) : (this.Te(H.nf(a) + 1),
            this.Hk(a))
        },
        Hk: function(a) {
            var b = this.a;
            this.Pb(b + H.nf(a));
            for (var c = a.length, d = 0; d < c; )
                b += H.wi(F.lh(a, d++), this.A, b);
            this.a = b
        },
        Te: function(a) {
            var b = this.a;
            a >>>= 0;
            this.Pb(b + H.Uh(a));
            this.A.setUint8(b, a | 128);
            128 <= a ? (this.A.setUint8(b + 1, a >> 7 | 128),
            16384 <= a ? (this.A.setUint8(b + 2, a >> 14 | 128),
            2097152 <= a ? (this.A.setUint8(b + 3, a >> 21 | 128),
            268435456 <= a ? (this.A.setUint8(b + 4, a >> 28 & 127),
            a = 5) : (this.A.setUint8(b + 3, this.A.getUint8(b + 3) & 127),
            a = 4)) : (this.A.setUint8(b + 2, this.A.getUint8(b + 2) & 127),
            a = 3)) : (this.A.setUint8(b + 1, this.A.getUint8(b + 1) & 127),
            a = 2)) : (this.A.setUint8(b, this.A.getUint8(b) & 127),
            a = 1);
            this.a += a
        },
        f: H
    };
    pa.c = !0;
    pa.Xf = function(a) {
        return new PerfectScrollbar(a,{
            handlers: pa.Li
        })
    }
    ;
    Va.c = !0;
    Va.fk = function(a, b) {
        Va.ek(new Blob([a],{
            type: "text/plain"
        }), b)
    }
    ;
    Va.ek = function(a, b) {
        var c = window.document.createElement("a");
        c.style.display = "display: none";
        window.document.body.appendChild(c);
        var d = URL.createObjectURL(a);
        c.href = d;
        c.download = b;
        c.click();
        URL.revokeObjectURL(d);
        c.remove()
    }
    ;
    Xa.c = !0;
    Xa.prototype = {
        set: function(a) {
            this.value != a && (this.value = a,
            this.Kb.textContent = "" + this.value)
        },
        f: Xa
    };
    v.c = !0;
    v.Oa = function(a) {
        var b = new Map
          , c = 0;
        for (a = a.querySelectorAll("[data-hook]"); c < a.length; ) {
            var d = a[c++];
            b.set(d.getAttribute("data-hook"), d)
        }
        return b
    }
    ;
    v.Pa = function(a) {
        var b;
        null == b && (b = "div");
        b = window.document.createElement(b);
        b.innerHTML = a;
        return b.firstElementChild
    }
    ;
    v.Jc = function(a, b) {
        a.parentElement.replaceChild(b, a)
    }
    ;
    v.bf = function(a) {
        for (var b = a.firstChild; null != b; )
            a.removeChild(b),
            b = a.firstChild
    }
    ;
    ob.c = !0;
    ob.zh = function(a) {
        return new Promise(function(b, c) {
            a.onsuccess = function() {
                b(a.result)
            }
            ;
            a.onerror = c
        }
        )
    }
    ;
    k.c = !0;
    k.oa = function(a) {
        null == a.qa && (a.qa = !0);
        null == a.ra && (a.ra = !0);
        return a
    }
    ;
    k.pa = function(a) {
        a.hl = k.Ue;
        if (null == a.na)
            throw new r("Class doesn't have a config");
        k.qh.set(k.Ue, a);
        k.Ue++
    }
    ;
    k.fl = function(a) {
        var b = a.G()
          , b = Object.create(k.qh.get(b).prototype);
        b.ja = 0;
        b.Bl = 0;
        b.ga(a);
        return b
    }
    ;
    k.prototype = {
        apply: function() {
            throw new r("missing implementation");
        },
        ga: function() {
            throw new r("missing implementation");
        },
        f: k
    };
    Ta.c = !0;
    Ta.prototype = {
        f: Ta
    };
    Ua.c = !0;
    Ua.ba = k;
    Ua.prototype = y(k.prototype, {
        apply: function(a) {
            a.di(this.Lk)
        },
        ga: function(a) {
            this.Lk = a.Ej(a.Wb())
        },
        f: Ua
    });
    nb.c = !0;
    nb.prototype = {
        f: nb
    };
    ia.c = !0;
    da.c = !0;
    ha.c = !0;
    ha.ba = Ta;
    ha.prototype = y(Ta.prototype, {
        Gf: function() {
            throw new r("missing implementation");
        },
        f: ha
    });
    mb.c = !0;
    mb.prototype = {
        f: mb
    };
    ab.c = !0;
    ab.ba = ha;
    ab.prototype = y(ha.prototype, {
        Gj: function(a) {
            for (var b = a.$c(), c = 0, d = 0; d < b; ) {
                ++d;
                var c = c + a.Wb()
                  , e = a.G();
                this.eg.push({
                    Zk: c / this.ad,
                    kind: e
                })
            }
        },
        yg: function() {
            var a = this.Eb;
            0 < a.A.byteLength - a.a ? (a = this.Eb.Wb(),
            this.Cd += a,
            a = this.Eb.$c(),
            this.Bd = k.fl(this.Eb),
            this.Bd.S = a) : this.Bd = null
        },
        Fi: function() {
            return this.fd / this.ad
        },
        Gf: function() {
            this.X();
            da.Nb++;
            var a = this.bb.yb();
            a.X(this.Ef);
            return a
        },
        X: function() {
            var a = window.performance.now()
              , b = a - this.le;
            this.le = a;
            0 < this.jc ? (this.ab += 1E4,
            this.ab > this.jc && (this.ab = this.jc,
            this.jc = -1)) : this.ab += b * this.ng;
            a = this.ad * this.Vd;
            this.ab > a && (this.ab = a);
            b = this.ab * this.Fh;
            a = b | 0;
            for (this.Ef = b - a; this.fd < a; ) {
                for (; null != this.Bd && this.Cd == this.fd; )
                    b = this.Bd,
                    b.apply(this.bb),
                    null != this.jj && this.jj(b),
                    this.yg();
                this.fd++;
                this.bb.X(1)
            }
        },
        ik: function(a) {
            this.jc = a;
            a < this.ab && this.Fe()
        },
        Fe: function() {
            this.Cd = 0;
            this.ab = this.fd = this.Eb.a = 0;
            this.bb.$(this.Eb);
            this.yg()
        },
        f: ab
    });
    $a.c = !0;
    $a.prototype = {
        eval: function(a) {
            var b = this.fb.length - 1;
            if (a <= this.fb[0])
                return this.fb[1];
            if (a >= this.fb[b])
                return this.fb[b - 2];
            for (var c = 0, b = b / 5 | 0; ; ) {
                var d = b + c >>> 1;
                a > this.fb[5 * d] ? c = d + 1 : b = d - 1;
                if (!(c <= b))
                    break
            }
            c = 5 * b;
            b = this.fb[c];
            a = (a - b) / (this.fb[c + 5] - b);
            b = a * a;
            d = b * a;
            return (2 * d - 3 * b + 1) * this.fb[c + 1] + (d - 2 * b + a) * this.fb[c + 2] + (-2 * d + 3 * b) * this.fb[c + 3] + (d - b) * this.fb[c + 4]
        },
        f: $a
    };
    B.c = !0;
    B.prototype = {
        f: B
    };
    W.c = !0;
    W.$j = function(a, b) {
        return new Promise(function(c, d) {
            var e = new XMLHttpRequest;
            e.open("GET", a);
            e.responseType = b;
            e.onload = function() {
                200 <= e.status && 300 > e.status ? null != e.response ? c(e.response) : d(null) : d("status: " + e.status)
            }
            ;
            e.onerror = function(a) {
                d(a)
            }
            ;
            e.send(null)
        }
        )
    }
    ;
    W.la = function(a, b) {
        return W.$j(a, b)
    }
    ;
    W.Bi = function(a) {
        return W.la(a, "json").then(function(a) {
            var b = a.error;
            if (null != b)
                throw new r(b);
            return a.data
        })
    }
    ;
    G.c = !0;
    G.u = function(a) {
        null != a && a()
    }
    ;
    A.c = !0;
    A.u = function(a, b) {
        null != a && a(b)
    }
    ;
    ea.c = !0;
    ea.u = function(a, b, c) {
        null != a && a(b, c)
    }
    ;
    lb.c = !0;
    lb.u = function(a, b, c, d) {
        null != a && a(b, c, d)
    }
    ;
    Sa.c = !0;
    Sa.u = function(a, b, c, d, e) {
        null != a && a(b, c, d, e)
    }
    ;
    ib.c = !0;
    ib.prototype = {
        Qe: function(a) {
            var b = this.T.Ga.wb
              , c = []
              , d = 0;
            for (a = a.L; d < a.length; ) {
                var e = a[d];
                ++d;
                c.push({
                    C: e.C,
                    Ha: e.aa
                })
            }
            b.jf = c
        },
        Eg: function(a) {
            function b(a) {
                return null == a ? "" : " by " + a.C
            }
            var c = this;
            this.Qe(a);
            a.rg = function(b) {
                c.T.Ga.hb("" + b.C + " has joined");
                q.ya.Ub(q.ya.Qi);
                c.Qe(a)
            }
            ;
            a.sg = function(d, e, f, h) {
                A.u(c.ql, d.aa);
                null == e ? d = "" + d.C + " has left" : (Sa.u(c.pl, d.aa, e, null != h ? h.C : null, f),
                d = "" + d.C + " was " + (f ? "banned" : "kicked") + b(h) + ("" != e ? " (" + e + ")" : ""));
                c.T.Ga.hb(d);
                q.ya.Ub(q.ya.Ui);
                c.Qe(a)
            }
            ;
            a.og = function(a, b) {
                var d = null != c.he && -1 != b.indexOf(c.he);
                c.T.Ga.Uf("" + a.C + ": " + b, d ? "highlight" : null);
                q.P.Tg.la() && d ? q.ya.Ub(q.ya.Hf) : q.P.Je.la() && q.ya.Ub(q.ya.qf)
            }
            ;
            a.Kg = function(a, b, f, h) {
                c.T.Ga.bj(a, b, f);
                if (q.P.Je.la())
                    switch (h) {
                    case 1:
                        q.ya.Ub(q.ya.qf);
                        break;
                    case 2:
                        q.ya.Ub(q.ya.Hf)
                    }
            }
            ;
            a.Ae = function() {
                q.ya.Ub(q.ya.Si)
            }
            ;
            a.Me = function(a) {
                q.ya.Ub(q.ya.Gi);
                var b = c.T.Ya.Ua.cc;
                b.xa(a == p.Y ? b.Ij : b.Qh)
            }
            ;
            a.Ne = function(a) {
                var b = c.T.Ya.Ua.cc;
                b.xa(a == p.Y ? b.Jj : b.Rh);
                c.T.Ga.hb("" + a.C + " team won the match")
            }
            ;
            a.mg = function(a, e, f) {
                e && !f && c.T.Ga.hb("Game paused" + b(a))
            }
            ;
            a.Oe = function() {
                var a = c.T.Ya.Ua.cc;
                a.xa(a.tk)
            }
            ;
            a.Le = function(a) {
                c.T.ed(!1);
                c.T.Ya.Ua.cc.Zh();
                c.T.Ga.hb("Game started" + b(a))
            }
            ;
            a.gd = function(a) {
                null != a && c.T.Ga.hb("Game stopped" + b(a))
            }
            ;
            a.Ke = function(a, e) {
                if (!e.je()) {
                    var d = M.ph(e.Yh(), 8);
                    c.T.Ga.hb('Stadium "' + e.C + '" (' + d + ") loaded" + b(a))
                }
            }
            ;
            a.pg = function(a) {
                c.T.Ga.hb("" + a.C + " " + (a.nc ? "has desynchronized" : "is back in sync"))
            }
            ;
            a.vg = function(d, e, f) {
                null != a.D && c.T.Ga.hb("" + e.C + " was moved to " + f.C + b(d))
            }
            ;
            a.ye = function(a, e) {
                var d = e.C;
                c.T.Ga.hb((e.cb ? "" + d + " was given admin rights" : "" + d + "'s admin rights were taken away") + b(a))
            }
            ;
            a.ug = function(a, b) {
                c.T.Ya.Ua.Ki(a, b)
            }
            ;
            a.Of = function(a, e, f, h) {
                c.T.Ga.hb("Kick Rate Limit set to (min: " + e + ", rate: " + f + ", burst: " + h + ")" + b(a))
            }
        },
        Bk: function(a) {
            a.rg = null;
            a.sg = null;
            a.og = null;
            a.Kg = null;
            a.Ae = null;
            a.Me = null;
            a.Ne = null;
            a.mg = null;
            a.Oe = null;
            a.Le = null;
            a.gd = null;
            a.Ke = null;
            a.pg = null;
            a.vg = null;
            a.ye = null;
            a.ug = null;
            a.Of = null
        },
        f: ib
    };
    N.c = !0;
    N.ce = function(a) {
        return N.ud(JSON.parse(a))
    }
    ;
    N.ud = function(a) {
        var b = new N;
        b.Pf = a.lat;
        b.Wf = a.lon;
        b.rd = a.code.toLowerCase();
        return b
    }
    ;
    N.Di = function() {
        return W.Bi(q.Nh + "api/geo").then(function(a) {
            return N.ud(a)
        })
    }
    ;
    N.prototype = {
        jd: function() {
            return JSON.stringify({
                lat: this.Pf,
                lon: this.Wf,
                code: this.rd
            })
        },
        f: N
    };
    kb.c = !0;
    kb.prototype = {
        f: kb
    };
    sb.c = !0;
    sb.Qk = function() {
        try {
            var a = window.localStorage;
            a.getItem("");
            if (0 == a.length) {
                var b = "_hx_" + Math.random();
                a.setItem(b, b);
                a.removeItem(b)
            }
            return a
        } catch (c) {
            return null
        }
    }
    ;
    V.c = !0;
    V.prototype = {
        la: function() {
            return this.fh
        },
        tb: function(a) {
            this.fh = a;
            if (null != this.ne)
                try {
                    var b = this.Ik(a);
                    null == b ? this.ne.removeItem(this.C) : this.ne.setItem(this.C, b)
                } catch (c) {}
        },
        f: V
    };
    L.c = !0;
    L.ud = function(a) {
        for (var b = new L, c = qb.oh(a), d = 0; d < c.length; ) {
            var e = c[d];
            ++d;
            b.Rb.set(e, a[e])
        }
        return b
    }
    ;
    L.ce = function(a) {
        return L.ud(JSON.parse(a))
    }
    ;
    L.tf = function() {
        var a = new L;
        a.xa("ArrowUp", "Up");
        a.xa("KeyW", "Up");
        a.xa("ArrowDown", "Down");
        a.xa("KeyS", "Down");
        a.xa("ArrowLeft", "Left");
        a.xa("KeyA", "Left");
        a.xa("ArrowRight", "Right");
        a.xa("KeyD", "Right");
        a.xa("KeyX", "Kick");
        a.xa("Space", "Kick");
        a.xa("ControlLeft", "Kick");
        a.xa("ControlRight", "Kick");
        a.xa("ShiftLeft", "Kick");
        a.xa("ShiftRight", "Kick");
        a.xa("Numpad0", "Kick");
        return a
    }
    ;
    L.prototype = {
        xa: function(a, b) {
            this.Rb.set(a, b)
        },
        la: function(a) {
            return this.Rb.get(a)
        },
        Mj: function(a) {
            this.Rb["delete"](a)
        },
        Ci: function(a) {
            for (var b = [], c = this.Rb.keys(), d = c.next(); !d.done; ) {
                var e = d.value
                  , d = c.next();
                this.Rb.get(e) == a && b.push(e)
            }
            return b
        },
        jd: function() {
            for (var a = {}, b = this.Rb.keys(), c = b.next(); !c.done; ) {
                var d = c.value
                  , c = b.next();
                a[d] = this.Rb.get(d)
            }
            return JSON.stringify(a)
        },
        f: L
    };
    q.c = !0;
    x.c = !0;
    x.Sk = function() {
        try {
            return window.self != window.top
        } catch (a) {
            return !0
        }
    }
    ;
    x.Rd = function(a) {
        return new Promise(function(b, c) {
            var d = window.document.createElement("img");
            d.onload = function() {
                URL.revokeObjectURL(d.src);
                d.onload = null;
                b(d)
            }
            ;
            d.onerror = function() {
                URL.revokeObjectURL(d.src);
                c(null)
            }
            ;
            return d.src = URL.createObjectURL(new Blob([a],{
                type: "image/png"
            }))
        }
        )
    }
    ;
    x.Xe = function(a) {
        x.Sk() && x.Ok(function() {
            rb.Xe();
            var b;
            null == q.P.ee.la() ? N.Di().then(function(a) {
                q.P.ee.tb(a)
            }, function() {
                return {}
            }) : b = Promise.resolve(null);
            return Promise.all([W.la("res.dat", "arraybuffer").then(function(a) {
                a = new JSZip(a);
                q.ya = new gb(a);
                return Promise.all([q.ya.ui, x.Rd(a.file("images/grass.png").asArrayBuffer()).then(function(a) {
                    return q.Ii = a
                }), x.Rd(a.file("images/concrete.png").asArrayBuffer()).then(function(a) {
                    return q.gi = a
                }), x.Rd(a.file("images/concrete2.png").asArrayBuffer()).then(function(a) {
                    return q.ei = a
                }), x.Rd(a.file("images/typing.png").asArrayBuffer()).then(function(a) {
                    return q.eh = a
                })])
            }), b]).then(function() {
                x.Wk(a)
            })
        })
    }
    ;
    x.Ok = function(a) {
        for (var b = Modernizr, c = "canvas datachannel dataview es6collections peerconnection promises websockets".split(" "), d = [], e = 0; e < c.length; ) {
            var f = c[e];
            ++e;
            b[f] || d.push(f)
        }
        0 != d.length ? (window.document.body.innerHTML = "",
        x.Od = window.document.createElement("div"),
        window.document.body.appendChild(x.Od),
        a = new ja(d),
        x.Kc(a.h)) : a()
    }
    ;
    x.Wk = function(a) {
        window.document.body.innerHTML = "";
        x.Od = window.document.createElement("div");
        window.document.body.appendChild(x.Od);
        var b = null
          , b = function() {
            q.ya.dk();
            window.document.removeEventListener("click", b, !0)
        };
        window.document.addEventListener("click", b, !0);
        a()
    }
    ;
    x.Kc = function(a) {
        null != x.sh && x.sh.remove();
        null != a && (x.Od.appendChild(a),
        x.sh = a)
    }
    ;
    hb.c = !0;
    hb.prototype = {
        hg: function() {
            window.requestAnimationFrame(jb(this, this.hg));
            this.oe.X();
            this.hc()
        },
        hc: function() {
            this.ic.X();
            var a = window.performance.now();
            1 == q.P.Df.la() && 28.333333333333336 > a - this.Uc || (this.Uc = a,
            this.be++,
            this.Qg(q.P.lc.la()),
            0 < this.oe.jc || this.T.X(this.oe))
        },
        nj: function(a) {
            switch (a.keyCode) {
            case 27:
                var b = this.T;
                b.ed(!b.Dc);
                a.preventDefault();
                break;
            case 49:
                q.P.lc.tb(1);
                break;
            case 50:
                q.P.lc.tb(2);
                break;
            case 51:
                q.P.lc.tb(3);
                break;
            case 52:
                q.P.lc.tb(0)
            }
        },
        Qg: function(a) {
            var b = this.T.Ya;
            0 >= a ? (b.Pg(!0),
            b.Ua.Be = 1,
            b.Ua.Pe = 0) : (b.Pg(!1),
            b.Ua.Pe = 35,
            b.Ua.Be = 1 + .25 * (a - 1))
        },
        oj: function() {},
        f: hb
    };
    C.c = !0;
    C.cj = function() {
        window.___init___ = function(a, b) {
            "string" == typeof a ? C.Ig = a : a instanceof ArrayBuffer && (C.Hg = a);
            C.sd = b;
            x.Xe(C.lj)
        }
    }
    ;
    C.lj = function() {
        null != C.Hg ? C.ae(C.Hg) : null != C.Ig ? (x.Kc((new Q("Loading Replay","loading...",[])).h),
        W.la(C.Ig, "arraybuffer").then(function(a) {
            C.ae(a)
        }, function() {
            x.Kc((new Q("Error","Couldn't download replay file",[])).h)
        })) : C.si()
    }
    ;
    C.ae = function(a) {
        try {
            var b = new hb(new ab(new Uint8Array(a),new ca,3));
            b.ic.Ed = C.sd;
            null == C.sd && b.ic.Ni();
            x.Kc(b.T.h)
        } catch (c) {
            a = new Q("Replay error","Couldn't load the file.",null == C.sd ? [] : ["Ok"]),
            a.ig = function() {
                C.sd()
            }
            ,
            x.Kc(a.h)
        }
    }
    ;
    C.si = function() {
        var a = new ma;
        a.pj = function(a) {
            C.ae(a)
        }
        ;
        x.Kc(a.h)
    }
    ;
    ga.c = !0;
    ga["delete"] = function(a) {
        return null == window.indexedDB ? Promise.reject("IndexedDB not supported by browser.") : new Promise(function(b, c) {
            var d = window.indexedDB.open("stadiums", 1);
            d.onblocked = d.onerror = c;
            d.onupgradeneeded = function(a) {
                var b = d.result;
                b.onerror = c;
                1 > a.oldVersion && (b.createObjectStore("files", {
                    autoIncrement: !0
                }),
                b.createObjectStore("meta", {
                    keyPath: "id"
                }))
            }
            ;
            d.onsuccess = function() {
                var e = d.result;
                e.onerror = c;
                var f = e.transaction(["meta", "files"], "readwrite");
                f.onerror = f.onabort = function(a) {
                    c(a);
                    e.close()
                }
                ;
                f.oncomplete = function() {
                    b(0);
                    e.close()
                }
                ;
                f.objectStore("files")["delete"](a);
                f.objectStore("meta")["delete"](a)
            }
        }
        )
    }
    ;
    ga.get = function(a) {
        return null == window.indexedDB ? Promise.reject("IndexedDB not supported by browser.") : new Promise(function(b, c) {
            var d = window.indexedDB.open("stadiums", 1);
            d.onblocked = d.onerror = c;
            d.onupgradeneeded = function(a) {
                var b = d.result;
                b.onerror = c;
                1 > a.oldVersion && (b.createObjectStore("files", {
                    autoIncrement: !0
                }),
                b.createObjectStore("meta", {
                    keyPath: "id"
                }))
            }
            ;
            d.onsuccess = function() {
                var e = d.result;
                e.onerror = c;
                var f = e.transaction(["files"]);
                f.onerror = f.onabort = function(a) {
                    c(a);
                    e.close()
                }
                ;
                f.oncomplete = function() {
                    e.close()
                }
                ;
                ob.zh(f.objectStore("files").get(a)).then(function(a) {
                    try {
                        var d = new g;
                        d.Rf(a);
                        b(d)
                    } catch (l) {
                        c(l instanceof r ? l.df : l)
                    }
                }, c)
            }
        }
        )
    }
    ;
    ga.getAll = function() {
        return null == window.indexedDB ? Promise.reject("IndexedDB not supported by browser.") : new Promise(function(a, b) {
            var c = window.indexedDB.open("stadiums", 1);
            c.onblocked = c.onerror = b;
            c.onupgradeneeded = function(a) {
                var d = c.result;
                d.onerror = b;
                1 > a.oldVersion && (d.createObjectStore("files", {
                    autoIncrement: !0
                }),
                d.createObjectStore("meta", {
                    keyPath: "id"
                }))
            }
            ;
            c.onsuccess = function() {
                var d = c.result;
                d.onerror = b;
                var e = d.transaction(["meta"]);
                e.onerror = e.onabort = function(a) {
                    b(a);
                    d.close()
                }
                ;
                e.oncomplete = function() {
                    d.close()
                }
                ;
                ob.zh(e.objectStore("meta").getAll()).then(a, b)
            }
        }
        )
    }
    ;
    gb.c = !0;
    gb.prototype = {
        dk: function() {
            this.b.resume()
        },
        Ub: function(a) {
            var b = this.b.createBufferSource();
            b.buffer = a;
            b.connect(this.yd);
            b.start()
        },
        Og: function(a) {
            this.yd.gain.value = a
        },
        f: gb
    };
    fb.c = !0;
    fb.prototype = {
        update: function() {
            var a = window.performance.now()
              , b = a - this.rh;
            this.rh = a;
            this.Ic += (this.Td - this.Ic) * this.el;
            this.md -= b;
            0 >= this.md && (this.md = this.Td = 0);
            0 >= this.Td && .05 > this.Ic && (window.clearInterval(this.Ud),
            this.Ud = null,
            this.Ic = 0);
            this.Pd.gain.value = q.P.Sg.la() ? this.Ic : 0
        },
        cf: function(a) {
            var b = this;
            this.Td = a;
            this.md = 166.66666666666666;
            null == this.Ud && (this.Ud = window.setInterval(function() {
                b.update()
            }, 17),
            this.rh = window.performance.now())
        },
        connect: function(a) {
            this.Pd.connect(a)
        },
        gl: function(a) {
            var b = a.D;
            if (null != b)
                if (2 == b.Na)
                    0 >= b.za && this.cf(1);
                else if (1 == b.Na) {
                    var c = b.Z.s[0]
                      , d = null
                      , e = null
                      , f = null
                      , h = 0
                      , m = null
                      , l = null
                      , u = null
                      , g = 0
                      , k = p.Y.$d
                      , n = 0;
                    for (a = a.L; n < a.length; ) {
                        var q = a[n];
                        ++n;
                        if (null != q.w) {
                            var r = q.w.a
                              , v = c.a
                              , t = r.x - v.x
                              , r = r.y - v.y
                              , t = t * t + r * r;
                            if (q.fa == p.Y) {
                                if (null == d || d.a.x * k < q.w.a.x * k)
                                    d = q.w;
                                if (null == e || e.a.x * k > q.w.a.x * k)
                                    e = q.w;
                                if (null == f || t < h)
                                    f = q.w,
                                    h = t
                            } else if (q.fa == p.wa) {
                                if (null == m || m.a.x * k < q.w.a.x * k)
                                    m = q.w;
                                if (null == l || l.a.x * k > q.w.a.x * k)
                                    l = q.w;
                                if (null == u || t < g)
                                    u = q.w,
                                    g = t
                            }
                        }
                    }
                    null != l && null != e && 0 >= b.za && (f.a.x > l.a.x && c.a.x > l.a.x && 20 < c.a.x && this.cf(.3),
                    u.a.x < e.a.x && c.a.x < e.a.x && -20 > c.a.x && this.cf(.3))
                }
        },
        f: fb
    };
    U.c = !0;
    U.prototype = {
        ca: function(a) {
            var b = this.a;
            a.l(b.x);
            a.l(b.y);
            b = this.o;
            a.l(b.x);
            a.l(b.y);
            b = this.V;
            a.l(b.x);
            a.l(b.y);
            a.l(this.M);
            a.l(this.i);
            a.l(this.N);
            a.l(this.ka);
            a.hh(this.H);
            a.ea(this.g);
            a.ea(this.j)
        },
        $: function(a) {
            var b = this.a;
            b.x = a.m();
            b.y = a.m();
            b = this.o;
            b.x = a.m();
            b.y = a.m();
            b = this.V;
            b.x = a.m();
            b.y = a.m();
            this.M = a.m();
            this.i = a.m();
            this.N = a.m();
            this.ka = a.m();
            this.H = a.Cc();
            this.g = a.F();
            this.j = a.F()
        },
        dj: function() {
            var a = new P;
            this.Jf(a);
            return a
        },
        Jf: function(a) {
            var b = a.a
              , c = this.a;
            b.x = c.x;
            b.y = c.y;
            b = a.o;
            c = this.o;
            b.x = c.x;
            b.y = c.y;
            b = a.V;
            c = this.V;
            b.x = c.x;
            b.y = c.y;
            a.M = this.M;
            a.i = this.i;
            a.N = this.N;
            a.ka = this.ka;
            a.H = this.H;
            a.g = this.g;
            a.j = this.j
        },
        f: U
    };
    I.c = !0;
    I.pc = [ia];
    I.bc = function(a, b) {
        a.ta = b.ta.yb();
        a.Da = b.Da;
        a.ma = b.ma;
        a.Z = b.Z.yb();
        a.rb = b.rb;
        a.Na = b.Na;
        a.$a = b.$a;
        a.Ta = b.Ta;
        a.Cb = b.Cb;
        a.za = b.za;
        a.I = b.I;
        a.xc = b.xc
    }
    ;
    I.prototype = {
        Oi: function(a) {
            this.ta = a;
            this.Da = a.Da;
            this.ma = a.ma;
            this.I = a.I;
            this.Z.B = this.I.B;
            this.Z.W = this.I.W;
            this.Z.J = this.I.J;
            this.Z.Ja = this.I.Ja;
            a = 0;
            for (var b = this.I.s; a < b.length; )
                this.Z.s.push(b[a++].dj());
            this.Nf()
        },
        Kf: function(a) {
            if (a.fa == p.va)
                a.w = null;
            else {
                a.zb = 0;
                var b = a.w;
                null == b && (b = new P,
                a.w = b,
                this.Z.s.push(b));
                var c = this.I.Ac;
                b.H = 0;
                b.M = c.M;
                b.N = c.N;
                b.ka = c.ka;
                b.i = c.i;
                b.g = 39;
                b.j = a.fa.j | c.j;
                var d = a.fa == p.Y ? this.I.gc : this.I.ac;
                0 == d.length ? (b.a.x = a.fa.$d * this.I.gb,
                b.a.y = 0) : (a = b.a,
                d = d[d.length - 1],
                a.x = d.x,
                a.y = d.y);
                d = b.o;
                d.x = 0;
                d.y = 0;
                b = b.V;
                c = c.V;
                b.x = c.x;
                b.y = c.y
            }
        },
        X: function(a) {
            if (0 < this.za)
                120 > this.za && this.za--;
            else {
                var b = this.ta.kl;
                null != b && b();
                for (var b = this.ta.L, c = 0; c < b.length; ) {
                    var d = b[c];
                    ++c;
                    if (null != d.w) {
                        0 == (d.zb & 16) && (d.eb = !1);
                        var e = this.I.Ac;
                        0 < d.Lb && d.Lb--;
                        d.vb < this.ta.zc && d.vb++;
                        if (d.eb && 0 >= d.Lb && 0 <= d.vb) {
                            for (var f = !1, h = 0, m = this.Z.s; h < m.length; ) {
                                var l = m[h];
                                ++h;
                                if (0 != (l.j & 64) && l != d.w) {
                                    var u = l.a
                                      , g = d.w.a
                                      , k = u.x - g.x
                                      , u = u.y - g.y
                                      , g = Math.sqrt(k * k + u * u);
                                    if (4 > g - l.M - d.w.M) {
                                        var f = k / g
                                          , k = u / g
                                          , u = e.Qc
                                          , n = g = l.o
                                          , l = l.N;
                                        g.x = n.x + f * u * l;
                                        g.y = n.y + k * u * l;
                                        n = d.w;
                                        l = -e.Rc;
                                        g = u = n.o;
                                        n = n.N;
                                        u.x = g.x + f * l * n;
                                        u.y = g.y + k * l * n;
                                        f = !0
                                    }
                                }
                            }
                            f && (null != this.ta.Ae && this.ta.Ae(d),
                            d.eb = !1,
                            d.Lb = this.ta.fc,
                            d.vb -= this.ta.Sb)
                        }
                        f = d.zb;
                        m = h = 0;
                        0 != (f & 1) && --m;
                        0 != (f & 2) && ++m;
                        0 != (f & 4) && --h;
                        0 != (f & 8) && ++h;
                        0 != h && 0 != m && (f = Math.sqrt(h * h + m * m),
                        h /= f,
                        m /= f);
                        f = d.w.o;
                        l = d.eb ? e.Sc : e.Mc;
                        f.x += h * l;
                        f.y += m * l;
                        d.w.ka = d.eb ? e.Tc : e.ka
                    }
                }
                c = 0;
                d = this.Z.s;
                e = 0;
                for (h = d.length; e < h; )
                    f = e++,
                    m = d[f],
                    0 != (m.j & 128) && (I.vf[c] = f,
                    f = I.gg[c],
                    m = m.a,
                    f.x = m.x,
                    f.y = m.y,
                    ++c);
                this.Z.X(a);
                if (0 == this.Na) {
                    for (a = 0; a < b.length; )
                        c = b[a],
                        ++a,
                        null != c.w && (c.w.g = 39 | this.xc.Ti);
                    b = this.Z.s[0].o;
                    0 < b.x * b.x + b.y * b.y && (this.Na = 1)
                } else if (1 == this.Na) {
                    this.Cb += .016666666666666666;
                    for (a = 0; a < b.length; )
                        d = b[a],
                        ++a,
                        null != d.w && (d.w.g = 39);
                    d = p.va;
                    b = this.Z.s;
                    for (a = 0; a < c && (d = a++,
                    d = this.I.Wh(b[I.vf[d]].a, I.gg[d]),
                    d == p.va); )
                        ;
                    d != p.va ? (this.Na = 2,
                    this.rb = 150,
                    this.xc = d,
                    d == p.Y ? this.Ta++ : this.$a++,
                    null != this.ta.Me && this.ta.Me(d.Gd),
                    null != this.ta.Zj && this.ta.Zj(d.Ha)) : 0 < this.ma && this.Cb >= 60 * this.ma && this.$a != this.Ta && (null != this.ta.Oe && this.ta.Oe(),
                    this.Zg())
                } else if (2 == this.Na)
                    this.rb--,
                    0 >= this.rb && (0 < this.Da && (this.$a >= this.Da || this.Ta >= this.Da) || 0 < this.ma && this.Cb >= 60 * this.ma && this.$a != this.Ta ? this.Zg() : (this.Nf(),
                    null != this.ta.Cj && this.ta.Cj()));
                else if (3 == this.Na && (this.rb--,
                0 >= this.rb && (b = this.ta,
                null != b.D))) {
                    b.D = null;
                    a = 0;
                    for (c = b.L; a < c.length; )
                        d = c[a],
                        ++a,
                        d.w = null,
                        d.Sa = 0;
                    null != b.gd && b.gd(null)
                }
            }
        },
        Zg: function() {
            this.rb = 300;
            this.Na = 3;
            null != this.ta.Ne && this.ta.Ne(this.$a > this.Ta ? p.Y : p.wa)
        },
        Nf: function() {
            var a = this.ta.L;
            this.Na = 0;
            for (var b = this.I.s, c = this.Z.s, d = 0, e = this.I.bd ? b.length : 1; d < e; ) {
                var f = d++;
                b[f].Jf(c[f])
            }
            b = [0, 0, 0];
            for (c = 0; c < a.length; )
                if (d = a[c],
                ++c,
                this.Kf(d),
                e = d.fa,
                e != p.va) {
                    var f = d.w.a
                      , h = this.I
                      , m = b[e.Ha]
                      , l = e == p.Y ? h.gc : h.ac;
                    0 == l.length ? (l = m + 1 >> 1,
                    0 == (m & 1) && (l = -l),
                    h = h.mb * e.$d,
                    m = 55 * l) : (m >= l.length && (m = l.length - 1),
                    m = l[m],
                    h = m.x,
                    m = m.y);
                    f.x = h;
                    f.y = m;
                    b[e.Ha]++;
                    d.Sa = b[e.Ha]
                }
        },
        ca: function(a) {
            this.Z.ca(a);
            a.ea(this.rb);
            a.ea(this.Na);
            a.ea(this.$a);
            a.ea(this.Ta);
            a.l(this.Cb);
            a.ea(this.za);
            a.R(this.xc.Ha)
        },
        $: function(a, b) {
            this.Z.$(a);
            this.rb = a.F();
            this.Na = a.F();
            this.$a = a.F();
            this.Ta = a.F();
            this.Cb = a.m();
            this.za = a.F();
            var c = a.Zc();
            this.xc = 1 == c ? p.Y : 2 == c ? p.wa : p.va;
            this.ta = b;
            this.Da = b.Da;
            this.ma = b.ma;
            this.I = b.I;
            this.Z.B = this.I.B;
            this.Z.J = this.I.J;
            this.Z.W = this.I.W;
            this.Z.Ja = this.I.Ja
        },
        yb: function() {
            var a = da.Nb
              , b = this.kb;
            this.lb != a && (null == b && (this.kb = b = new I),
            this.lb = a,
            I.bc(b, this));
            return b
        },
        f: I
    };
    Ra.c = !0;
    Ra.prototype = {
        ca: function(a) {
            var b = this.K;
            a.l(b.x);
            a.l(b.y);
            b = this.O;
            a.l(b.x);
            a.l(b.y);
            a.R(this.Fc.Ha)
        },
        $: function(a) {
            var b = this.K;
            b.x = a.m();
            b.y = a.m();
            b = this.O;
            b.x = a.m();
            b.y = a.m();
            a = a.Zc();
            this.Fc = 1 == a ? p.Y : 2 == a ? p.wa : p.va
        },
        f: Ra
    };
    Ya.c = !0;
    Ya.prototype = {
        ca: function(a) {
            a.l(this.i);
            a.l(this.N);
            a.l(this.ka);
            a.l(this.Mc);
            a.l(this.Sc);
            a.l(this.Tc);
            a.l(this.Qc);
            var b = this.V;
            a.l(b.x);
            a.l(b.y);
            a.ea(this.j);
            a.l(this.M);
            a.l(this.Rc)
        },
        $: function(a) {
            this.i = a.m();
            this.N = a.m();
            this.ka = a.m();
            this.Mc = a.m();
            this.Sc = a.m();
            this.Tc = a.m();
            this.Qc = a.m();
            var b = this.V;
            b.x = a.m();
            b.y = a.m();
            this.j = a.F();
            this.M = a.m();
            this.Rc = a.m()
        },
        f: Ya
    };
    Wa.c = !0;
    Wa.prototype = {
        f: Wa
    };
    g.c = !0;
    g.$ = function(a) {
        var b = a.G();
        return 255 == b ? (b = new g,
        b.Ak(a),
        b) : g.fe()[b]
    }
    ;
    g.fe = function() {
        if (null == g.Ma) {
            g.Ma = [];
            var a = new g;
            a.Tb("Classic", 420, 200, 370, 170, 64, 75);
            g.Ma.push(a);
            a = new g;
            a.Tb("Easy", 420, 200, 370, 170, 90, 75);
            g.Ma.push(a);
            a = new g;
            a.Tb("Small", 420, 200, 320, 130, 55, 70);
            g.Ma.push(a);
            a = new g;
            a.Tb("Big", 600, 270, 550, 240, 80, 80);
            g.Ma.push(a);
            a = new g;
            a.Tb("Rounded", 420, 200, 370, 170, 64, 75, 75);
            g.Ma.push(a);
            a = new g;
            a.Zf("Hockey", 420, 204, 398, 182, 68, 120, 75, 100);
            g.Ma.push(a);
            a = new g;
            a.Zf("Big Hockey", 600, 270, 550, 240, 90, 160, 75, 150);
            g.Ma.push(a);
            a = new g;
            a.Tb("Big Easy", 600, 270, 550, 240, 95, 80);
            g.Ma.push(a);
            a = new g;
            a.Tb("Big Rounded", 600, 270, 550, 240, 80, 75, 100);
            g.Ma.push(a);
            a = new g;
            a.Tb("Huge", 750, 350, 700, 320, 100, 80);
            g.Ma.push(a);
            for (var a = 0, b = g.Ma.length; a < b; ) {
                var c = a++;
                g.Ma[c].Zd = c
            }
        }
        return g.Ma
    }
    ;
    g.Oh = function(a, b) {
        if (null != a.trait) {
            var c = b[n.v(a.trait, String)];
            if (null != c)
                for (var d = 0, e = qb.oh(c); d < e.length; ) {
                    var f = e[d];
                    ++d;
                    null == a[f] && (a[f] = c[f])
                }
        }
    }
    ;
    g.Sh = function(a) {
        if (63 == a)
            return ["all"];
        var b = [];
        0 != (a & 2) && b.push("red");
        0 != (a & 4) && b.push("blue");
        0 != (a & 1) && b.push("ball");
        0 != (a & 8) && b.push("redKO");
        0 != (a & 16) && b.push("blueKO");
        0 != (a & 32) && b.push("wall");
        0 != (a & 64) && b.push("kick");
        0 != (a & 128) && b.push("score");
        0 != (a & 268435456) && b.push("c0");
        0 != (a & 536870912) && b.push("c1");
        0 != (a & 1073741824) && b.push("c2");
        0 != (a & -2147483648) && b.push("c3");
        return b
    }
    ;
    g.Ab = function(a) {
        a = n.v(a, Array);
        for (var b = 0, c = 0; c < a.length; )
            switch (a[c++]) {
            case "all":
                b |= 63;
                break;
            case "ball":
                b |= 1;
                break;
            case "blue":
                b |= 4;
                break;
            case "blueKO":
                b |= 16;
                break;
            case "c0":
                b |= 268435456;
                break;
            case "c1":
                b |= 536870912;
                break;
            case "c2":
                b |= 1073741824;
                break;
            case "c3":
                b |= -2147483648;
                break;
            case "kick":
                b |= 64;
                break;
            case "red":
                b |= 2;
                break;
            case "redKO":
                b |= 8;
                break;
            case "score":
                b |= 128;
                break;
            case "wall":
                b |= 32
            }
        return b
    }
    ;
    g.Db = function(a, b, c, d) {
        c != d && (a[b] = g.Sh(c))
    }
    ;
    g.Hd = function(a, b, c) {
        b != c && (a.color = g.ci(b))
    }
    ;
    g.ci = function(a) {
        a |= 0;
        return 0 > a ? "transparent" : M.ph(a)
    }
    ;
    g.xd = function(a) {
        if ("transparent" == a)
            return -1;
        if ("string" == typeof a)
            return K.parseInt("0x" + K.Lc(a));
        if (a instanceof Array && null == a.oc)
            return ((a[0] | 0) << 16) + ((a[1] | 0) << 8) + (a[2] | 0);
        throw new r("Bad color");
    }
    ;
    g.Fk = function(a) {
        var b = {
            x: a.a.x,
            y: a.a.y
        };
        g.U(b, "bCoef", a.i, 1);
        g.Db(b, "cMask", a.g, 63);
        g.Db(b, "cGroup", a.j, 32);
        return b
    }
    ;
    g.$i = function(a) {
        var b = new w;
        b.a.x = n.v(a.x, t);
        b.a.y = n.v(a.y, t);
        var c = a.bCoef;
        null != c && (b.i = n.v(c, t));
        c = a.cMask;
        null != c && (b.g = g.Ab(c));
        a = a.cGroup;
        null != a && (b.j = g.Ab(a));
        return b
    }
    ;
    g.jk = function(a, b) {
        var c = {
            v0: a.K.dc,
            v1: a.O.dc
        };
        g.U(c, "bias", a.xb, b.xb);
        g.U(c, "bCoef", a.i, b.i);
        var d = a.Ai();
        g.U(c, "curve", d, 0);
        0 != d && (c.curveF = a.La);
        g.U(c, "vis", a.Ca, b.Ca);
        g.Db(c, "cMask", a.g, b.g);
        g.Db(c, "cGroup", a.j, b.j);
        g.Hd(c, a.H, b.H);
        return c
    }
    ;
    g.Zi = function(a, b) {
        var c = new z
          , d = n.v(a.v1, bb);
        c.K = b[n.v(a.v0, bb)];
        c.O = b[d];
        var d = a.bias
          , e = a.bCoef
          , f = a.curve
          , h = a.curveF
          , m = a.vis
          , l = a.cMask
          , u = a.cGroup
          , k = a.color;
        null != d && (c.xb = n.v(d, t));
        null != e && (c.i = n.v(e, t));
        null != h ? c.La = n.v(h, t) : null != f && c.Gb(n.v(f, t));
        null != m && (c.Ca = n.v(m, tb));
        null != l && (c.g = g.Ab(l));
        null != u && (c.j = g.Ab(u));
        null != k && (c.H = g.xd(k));
        return c
    }
    ;
    g.Ri = function(a) {
        var b = {
            d0: a.vc,
            d1: a.wc,
            length: a.Ra >= a.ib ? a.Ra : [a.Ra, a.ib]
        };
        g.Hd(b, a.H, 0);
        g.U(b, "strength", a.Ec, 1 / 0);
        return b
    }
    ;
    g.Wi = function(a, b) {
        var c = new ta
          , d = n.v(a.d0, bb)
          , e = n.v(a.d1, bb)
          , f = a.color
          , h = a.strength
          , m = a.length;
        if (d >= b.length || 0 > d)
            throw new r(null);
        if (e >= b.length || 0 > e)
            throw new r(null);
        c.vc = d;
        c.wc = e;
        null == m ? (d = b[d],
        m = b[e],
        null == d || null == m ? c.ib = c.Ra = 100 : (e = d.a,
        m = m.a,
        d = e.x - m.x,
        e = e.y - m.y,
        c.ib = c.Ra = Math.sqrt(d * d + e * e))) : m instanceof Array && null == m.oc ? (c.Ra = n.v(m[0], t),
        c.ib = n.v(m[1], t)) : c.ib = c.Ra = n.v(m, t);
        c.Ec = null == h || "rigid" == h ? 1 / 0 : n.v(h, t);
        null != f && (c.H = g.xd(f));
        return c
    }
    ;
    g.yj = function(a) {
        var b = {
            normal: [a.ia.x, a.ia.y],
            dist: a.Aa
        };
        g.U(b, "bCoef", a.i, 1);
        g.Db(b, "cMask", a.g, 63);
        g.Db(b, "cGroup", a.j, 32);
        return b
    }
    ;
    g.Xi = function(a) {
        var b = new D
          , c = n.v(a.normal, Array)
          , d = n.v(c[0], t)
          , c = n.v(c[1], t)
          , e = b.ia
          , f = Math.sqrt(d * d + c * c);
        e.x = d / f;
        e.y = c / f;
        b.Aa = n.v(a.dist, t);
        d = a.bCoef;
        c = a.cMask;
        a = a.cGroup;
        null != d && (b.i = n.v(d, t));
        null != c && (b.g = g.Ab(c));
        null != a && (b.j = g.Ab(a));
        return b
    }
    ;
    g.Hi = function(a) {
        return {
            p0: [a.K.x, a.K.y],
            p1: [a.O.x, a.O.y],
            team: a.Fc == p.Y ? "red" : "blue"
        }
    }
    ;
    g.Vi = function(a) {
        var b = new Ra
          , c = n.v(a.p0, Array)
          , d = n.v(a.p1, Array)
          , e = b.K;
        e.x = c[0];
        e.y = c[1];
        c = b.O;
        c.x = d[0];
        c.y = d[1];
        switch (a.team) {
        case "blue":
            a = p.wa;
            break;
        case "red":
            a = p.Y;
            break;
        default:
            throw new r("Bad team value");
        }
        b.Fc = a;
        return b
    }
    ;
    g.Aj = function(a) {
        var b = {};
        g.U(b, "bCoef", a.i, .5);
        g.U(b, "invMass", a.N, .5);
        g.U(b, "damping", a.ka, .96);
        g.U(b, "acceleration", a.Mc, .1);
        g.U(b, "kickingAcceleration", a.Sc, .07);
        g.U(b, "kickingDamping", a.Tc, .96);
        g.U(b, "kickStrength", a.Qc, 5);
        g.Db(b, "cGroup", a.j, 0);
        if (0 != a.V.x || 0 != a.V.y)
            b.gravity = [a.V.x, a.V.y];
        g.U(b, "radius", a.M, 15);
        g.U(b, "kickback", a.Rc, 0);
        return b
    }
    ;
    g.Yi = function(a) {
        var b = new Ya
          , c = a.bCoef
          , d = a.invMass
          , e = a.damping
          , f = a.acceleration
          , h = a.kickingAcceleration
          , m = a.kickingDamping
          , l = a.kickStrength
          , u = a.gravity
          , k = a.cGroup
          , p = a.radius;
        a = a.kickback;
        null != c && (b.i = n.v(c, t));
        null != d && (b.N = n.v(d, t));
        null != e && (b.ka = n.v(e, t));
        null != f && (b.Mc = n.v(f, t));
        null != h && (b.Sc = n.v(h, t));
        null != m && (b.Tc = n.v(m, t));
        null != l && (b.Qc = n.v(l, t));
        null != u && (c = b.V,
        d = n.v(u[1], t),
        c.x = n.v(u[0], t),
        c.y = d);
        null != k && (b.j = g.Ab(k));
        null != p && (b.M = n.v(p, t));
        null != a && (b.Rc = n.v(a, t));
        return b
    }
    ;
    g.ri = function(a, b) {
        var c = {};
        if (a.a.x != b.a.x || a.a.y != b.a.y)
            c.pos = [a.a.x, a.a.y];
        if (a.o.x != b.o.x || a.o.y != b.o.y)
            c.speed = [a.o.x, a.o.y];
        if (a.V.x != b.V.x || a.V.y != b.V.y)
            c.gravity = [a.V.x, a.V.y];
        g.U(c, "radius", a.M, b.M);
        g.U(c, "bCoef", a.i, b.i);
        g.U(c, "invMass", a.N, b.N);
        g.U(c, "damping", a.ka, b.ka);
        g.Hd(c, a.H, b.H);
        g.Db(c, "cMask", a.g, b.g);
        g.Db(c, "cGroup", a.j, b.j);
        return c
    }
    ;
    g.Sf = function(a, b) {
        var c = a.pos
          , d = a.speed
          , e = a.gravity
          , f = a.radius
          , h = a.bCoef
          , m = a.invMass
          , l = a.damping
          , u = a.color
          , k = a.cMask
          , p = a.cGroup;
        if (null != c) {
            var q = b.a;
            q.x = c[0];
            q.y = c[1]
        }
        null != d && (c = b.o,
        c.x = d[0],
        c.y = d[1]);
        null != e && (d = b.V,
        d.x = e[0],
        d.y = e[1]);
        null != f && (b.M = n.v(f, t));
        null != h && (b.i = n.v(h, t));
        null != m && (b.N = n.v(m, t));
        null != l && (b.ka = n.v(l, t));
        null != u && (b.H = g.xd(u));
        null != k && (b.g = g.Ab(k));
        null != p && (b.j = g.Ab(p));
        return b
    }
    ;
    g.U = function(a, b, c, d) {
        c != d && (a[b] = c)
    }
    ;
    g.prototype = {
        zd: function() {
            var a = new U;
            a.H = 16777215;
            a.g = 63;
            a.j = 193;
            a.M = 10;
            a.ka = .99;
            a.N = 1;
            a.i = .5;
            return a
        },
        ca: function(a) {
            a.R(this.Zd);
            if (!this.je()) {
                a.Gc(this.C);
                a.ea(this.$b);
                a.l(this.sc);
                a.l(this.rc);
                a.l(this.Zb);
                a.l(this.Ob);
                a.l(this.Nc);
                a.ea(this.Yb);
                a.l(this.gb);
                a.l(this.ob);
                a.l(this.mb);
                this.Ac.ca(a);
                a.Gk(this.Wc);
                a.R(this.Oc);
                a.R(this.pd ? 1 : 0);
                a.R(this.bd ? 1 : 0);
                a.R(this.B.length);
                for (var b = 0, c = this.B.length; b < c; ) {
                    var d = b++
                      , e = this.B[d];
                    e.dc = d;
                    e.ca(a)
                }
                a.R(this.J.length);
                b = 0;
                for (c = this.J; b < c.length; )
                    c[b++].ca(a);
                a.R(this.W.length);
                b = 0;
                for (c = this.W; b < c.length; )
                    c[b++].ca(a);
                a.R(this.pb.length);
                b = 0;
                for (c = this.pb; b < c.length; )
                    c[b++].ca(a);
                a.R(this.s.length);
                b = 0;
                for (c = this.s; b < c.length; )
                    c[b++].ca(a);
                a.R(this.Ja.length);
                b = 0;
                for (c = this.Ja; b < c.length; )
                    c[b++].ca(a);
                a.R(this.gc.length);
                b = 0;
                for (c = this.gc; b < c.length; )
                    d = c[b],
                    ++b,
                    a.l(d.x),
                    a.l(d.y);
                a.R(this.ac.length);
                b = 0;
                for (c = this.ac; b < c.length; )
                    d = c[b],
                    ++b,
                    a.l(d.x),
                    a.l(d.y)
            }
        },
        Ak: function(a) {
            function b() {
                for (var b = [], c = a.G(), d = 0; d < c; ) {
                    ++d;
                    var e = new B(0,0);
                    e.x = a.m();
                    e.y = a.m();
                    b.push(e)
                }
                return b
            }
            this.C = a.Za();
            this.$b = a.F();
            this.sc = a.m();
            this.rc = a.m();
            this.Zb = a.m();
            this.Ob = a.m();
            this.Nc = a.m();
            this.Yb = a.F();
            this.gb = a.m();
            this.ob = a.m();
            this.mb = a.m();
            this.Ac.$(a);
            this.Wc = a.$c();
            this.Oc = a.G();
            this.pd = 0 != a.G();
            this.bd = 0 != a.G();
            this.B = [];
            for (var c = a.G(), d = 0; d < c; ) {
                var e = new w;
                e.$(a);
                e.dc = d++;
                this.B.push(e)
            }
            this.J = [];
            c = a.G();
            for (d = 0; d < c; )
                ++d,
                e = new z,
                e.$(a, this.B),
                this.J.push(e);
            this.W = [];
            c = a.G();
            for (d = 0; d < c; )
                ++d,
                e = new D,
                e.$(a),
                this.W.push(e);
            this.pb = [];
            c = a.G();
            for (d = 0; d < c; )
                ++d,
                e = new Ra,
                e.$(a),
                this.pb.push(e);
            this.s = [];
            c = a.G();
            for (d = 0; d < c; )
                ++d,
                e = new U,
                e.$(a),
                this.s.push(e);
            this.Ja = [];
            c = a.G();
            for (d = 0; d < c; )
                ++d,
                e = new ta,
                e.$(a),
                this.Ja.push(e);
            this.gc = b();
            this.ac = b();
            this.Bc()
        },
        Bc: function() {
            for (var a = 0, b = this.J; a < b.length; )
                b[a++].Bc()
        },
        je: function() {
            return 255 != this.Zd
        },
        yc: function(a, b, c) {
            a = a[b];
            return null != a ? n.v(a, t) : c
        },
        aj: function(a, b, c) {
            a = a[b];
            return null != a ? n.v(a, tb) : c
        },
        jd: function() {
            return JSON.stringify(this.yk())
        },
        yk: function() {
            if (!this.pd)
                throw new r(0);
            for (var a = {}, b = 0, c = [], d = 0, e = this.B; d < e.length; ) {
                var f = e[d];
                ++d;
                f.dc = b++;
                c.push(g.Fk(f))
            }
            d = new z;
            b = [];
            e = 0;
            for (f = this.J; e < f.length; )
                b.push(g.jk(f[e++], d));
            d = [];
            e = 0;
            for (f = this.W; e < f.length; )
                d.push(g.yj(f[e++]));
            for (var e = [], f = 0, h = this.pb; f < h.length; )
                e.push(g.Hi(h[f++]));
            for (var f = g.Aj(this.Ac), m = new U, h = [], l = 0, u = this.s; l < u.length; )
                h.push(g.ri(u[l++], m));
            m = [];
            l = 0;
            for (u = this.Ja; l < u.length; )
                m.push(g.Ri(u[l++]));
            for (var l = [], u = 0, k = this.gc; u < k.length; ) {
                var n = k[u];
                ++u;
                l.push([n.x, n.y])
            }
            u = [];
            k = 0;
            for (n = this.ac; k < n.length; ) {
                var p = n[k];
                ++k;
                u.push([p.x, p.y])
            }
            c = {
                name: this.C,
                width: this.gb,
                height: this.ob,
                bg: a,
                vertexes: c,
                segments: b,
                planes: d,
                goals: e,
                discs: h,
                playerPhysics: f,
                ballPhysics: "disc0"
            };
            g.U(c, "maxViewWidth", this.Wc, 0);
            g.U(c, "cameraFollow", 1 == this.Oc ? "player" : "", "");
            g.U(c, "spawnDistance", this.mb, 200);
            0 != m.length && (c.joints = m);
            0 != l.length && (c.redSpawnPoints = l);
            0 != u.length && (c.blueSpawnPoints = u);
            g.U(c, "kickOffReset", this.bd ? "full" : "partial", "partial");
            switch (this.$b) {
            case 1:
                b = "grass";
                break;
            case 2:
                b = "hockey";
                break;
            default:
                b = "none"
            }
            g.U(a, "type", b, "none");
            g.U(a, "width", this.sc, 0);
            g.U(a, "height", this.rc, 0);
            g.U(a, "kickOffRadius", this.Zb, 0);
            g.U(a, "cornerRadius", this.Ob, 0);
            g.Hd(a, this.Yb, 7441498);
            g.U(a, "goalLine", this.Nc, 0);
            return c
        },
        Rf: function(a) {
            function b(a) {
                var b = n.v(a[0], t);
                a = n.v(a[1], t);
                return new B(b,a)
            }
            function c(a, b, c, d) {
                null == d && (d = !1);
                var f = e[b];
                if (!d || null != f)
                    if (d = n.v(f, Array),
                    null != d)
                        for (f = 0; f < d.length; ) {
                            var m = d[f];
                            ++f;
                            try {
                                g.Oh(m, h),
                                a.push(c(m))
                            } catch (Ab) {
                                throw new r(new Wa('Error in "' + b + '" index: ' + a.length));
                            }
                        }
            }
            var d = this
              , e = JSON5.parse(a);
            this.B = [];
            this.J = [];
            this.W = [];
            this.pb = [];
            this.s = [];
            this.Ja = [];
            this.C = n.v(e.name, String);
            this.gb = n.v(e.width, t);
            this.ob = n.v(e.height, t);
            this.Wc = this.yc(e, "maxViewWidth", 0) | 0;
            "player" == e.cameraFollow && (this.Oc = 1);
            this.mb = 200;
            a = e.spawnDistance;
            null != a && (this.mb = n.v(a, t));
            a = e.bg;
            var f;
            switch (a.type) {
            case "grass":
                f = 1;
                break;
            case "hockey":
                f = 2;
                break;
            default:
                f = 0
            }
            this.$b = f;
            this.sc = this.yc(a, "width", 0);
            this.rc = this.yc(a, "height", 0);
            this.Zb = this.yc(a, "kickOffRadius", 0);
            this.Ob = this.yc(a, "cornerRadius", 0);
            this.Yb = 7441498;
            null != a.color && (this.Yb = g.xd(a.color));
            this.Nc = this.yc(a, "goalLine", 0);
            this.pd = this.aj(e, "canBeStored", !0);
            this.bd = "full" == e.kickOffReset;
            var h = e.traits;
            a = e.ballPhysics;
            "disc0" != a && (null != a ? (a = g.Sf(a, this.zd()),
            a.j |= 192,
            this.s.push(a)) : this.s.push(this.zd()));
            c(this.B, "vertexes", g.$i);
            c(this.J, "segments", function(a) {
                return g.Zi(a, d.B)
            });
            c(this.pb, "goals", g.Vi);
            c(this.s, "discs", function(a) {
                return g.Sf(a, new U)
            });
            c(this.W, "planes", g.Xi);
            c(this.Ja, "joints", function(a) {
                return g.Wi(a, d.s)
            }, !0);
            c(this.gc, "redSpawnPoints", b, !0);
            c(this.ac, "blueSpawnPoints", b, !0);
            a = e.playerPhysics;
            null != a && (this.Ac = g.Yi(a));
            if (255 < this.B.length || 255 < this.J.length || 255 < this.W.length || 255 < this.pb.length || 255 < this.s.length)
                throw new r("Error");
            this.Bc()
        },
        Yh: function() {
            var a = g.vk;
            a.a = 0;
            this.ca(a);
            var b = new pb;
            b.Kk(a.zk());
            b.hash = (b.hash += b.hash << 3) ^ b.hash >>> 11;
            b.hash += b.hash << 15;
            return b.hash | 0
        },
        Wh: function(a, b) {
            for (var c = 0, d = this.pb; c < d.length; ) {
                var e = d[c];
                ++c;
                var f = e.K
                  , h = e.O
                  , m = b.x - a.x
                  , l = b.y - a.y;
                0 < -(f.y - a.y) * m + (f.x - a.x) * l == 0 < -(h.y - a.y) * m + (h.x - a.x) * l ? f = !1 : (m = h.x - f.x,
                h = h.y - f.y,
                f = 0 < -(a.y - f.y) * m + (a.x - f.x) * h == 0 < -(b.y - f.y) * m + (b.x - f.x) * h ? !1 : !0);
                if (f)
                    return e.Fc
            }
            return p.va
        },
        Tb: function(a, b, c, d, e, f, h, m) {
            null == m && (m = 0);
            this.C = a;
            this.s.push(this.zd());
            this.gb = b;
            this.ob = c;
            this.$b = 1;
            this.Yb = 7441498;
            this.sc = d;
            this.rc = e;
            this.Zb = h;
            this.Ob = m;
            this.mb = .75 * d;
            400 < this.mb && (this.mb = 400);
            a = new D;
            var l = a.ia;
            l.x = 0;
            l.y = 1;
            a.Aa = -c;
            a.i = 0;
            this.W.push(a);
            a = new D;
            l = a.ia;
            l.x = 0;
            l.y = -1;
            a.Aa = -c;
            a.i = 0;
            this.W.push(a);
            a = new D;
            l = a.ia;
            l.x = 1;
            l.y = 0;
            a.Aa = -b;
            a.i = 0;
            this.W.push(a);
            a = new D;
            l = a.ia;
            l.x = -1;
            l.y = 0;
            a.Aa = -b;
            a.i = 0;
            this.W.push(a);
            this.Ad(d, 1, f, 13421823, p.wa);
            this.Ad(-d, -1, f, 16764108, p.Y);
            this.$f(h, c);
            b = new D;
            c = b.ia;
            c.x = 0;
            c.y = 1;
            b.Aa = -e;
            b.g = 1;
            this.W.push(b);
            b = new D;
            c = b.ia;
            c.x = 0;
            c.y = -1;
            b.Aa = -e;
            b.g = 1;
            this.W.push(b);
            b = new w;
            c = b.a;
            c.x = -d;
            c.y = -e;
            b.g = 0;
            c = new w;
            h = c.a;
            h.x = d;
            h.y = -e;
            c.g = 0;
            h = new w;
            a = h.a;
            a.x = d;
            a.y = -f;
            h.g = 0;
            a = new w;
            l = a.a;
            l.x = d;
            l.y = f;
            a.g = 0;
            var l = new w
              , g = l.a;
            g.x = d;
            g.y = e;
            l.g = 0;
            var g = new w
              , k = g.a;
            k.x = -d;
            k.y = e;
            g.g = 0;
            var k = new w
              , n = k.a;
            n.x = -d;
            n.y = f;
            k.g = 0;
            var n = new w
              , q = n.a;
            q.x = -d;
            q.y = -f;
            n.g = 0;
            f = new z;
            f.K = c;
            f.O = h;
            f.g = 1;
            f.Ca = !1;
            q = new z;
            q.K = a;
            q.O = l;
            q.g = 1;
            q.Ca = !1;
            var t = new z;
            t.K = g;
            t.O = k;
            t.g = 1;
            t.Ca = !1;
            var r = new z;
            r.K = n;
            r.O = b;
            r.g = 1;
            r.Ca = !1;
            this.B.push(b);
            this.B.push(c);
            this.B.push(h);
            this.B.push(a);
            this.B.push(l);
            this.B.push(g);
            this.B.push(k);
            this.B.push(n);
            this.J.push(f);
            this.J.push(q);
            this.J.push(t);
            this.J.push(r);
            this.Yf(d, e, m);
            this.Bc()
        },
        Zf: function(a, b, c, d, e, f, h, m, l) {
            this.C = a;
            this.s.push(this.zd());
            this.gb = b;
            this.ob = c;
            this.$b = 2;
            this.sc = d;
            this.rc = e;
            this.Zb = m;
            this.Ob = l;
            this.Nc = h;
            this.mb = .75 * (d - h);
            400 < this.mb && (this.mb = 400);
            a = new D;
            var g = a.ia;
            g.x = 0;
            g.y = 1;
            a.Aa = -c;
            a.i = 0;
            this.W.push(a);
            a = new D;
            g = a.ia;
            g.x = 0;
            g.y = -1;
            a.Aa = -c;
            a.i = 0;
            this.W.push(a);
            a = new D;
            g = a.ia;
            g.x = 1;
            g.y = 0;
            a.Aa = -b;
            a.i = 0;
            this.W.push(a);
            a = new D;
            g = a.ia;
            g.x = -1;
            g.y = 0;
            a.Aa = -b;
            a.i = 0;
            this.W.push(a);
            this.Ad(d - h, 1, f, 13421823, p.wa, 63);
            this.Ad(-d + h, -1, f, 16764108, p.Y, 63);
            this.$f(m, c);
            b = new D;
            c = b.ia;
            c.x = 0;
            c.y = 1;
            b.Aa = -e;
            b.g = 1;
            this.W.push(b);
            b = new D;
            c = b.ia;
            c.x = 0;
            c.y = -1;
            b.Aa = -e;
            b.g = 1;
            this.W.push(b);
            b = new D;
            c = b.ia;
            c.x = 1;
            c.y = 0;
            b.Aa = -d;
            b.g = 1;
            this.W.push(b);
            b = new D;
            c = b.ia;
            c.x = -1;
            c.y = 0;
            b.Aa = -d;
            b.g = 1;
            this.W.push(b);
            this.Yf(d, e, l);
            this.Bc()
        },
        Ad: function(a, b, c, d, e, f, h) {
            null == h && (h = 32);
            null == f && (f = 1);
            var m = new w
              , l = m.a;
            l.x = a + 8 * b;
            l.y = -c;
            var l = new w
              , g = l.a;
            g.x = a + 8 * b;
            g.y = c;
            var k = new w
              , g = k.a;
            g.x = m.a.x + 22 * b;
            g.y = m.a.y + 22;
            var n = new w
              , g = n.a;
            g.x = l.a.x + 22 * b;
            g.y = l.a.y - 22;
            g = new z;
            g.K = m;
            g.O = k;
            g.Gb(90 * b);
            var p = new z;
            p.K = n;
            p.O = k;
            var q = new z;
            q.K = n;
            q.O = l;
            q.Gb(90 * b);
            b = this.B.length;
            this.B.push(m);
            this.B.push(l);
            this.B.push(k);
            this.B.push(n);
            m = b;
            for (b = this.B.length; m < b; )
                l = m++,
                this.B[l].g = f,
                this.B[l].j = h,
                this.B[l].i = .1;
            b = this.J.length;
            this.J.push(g);
            this.J.push(p);
            this.J.push(q);
            m = b;
            for (b = this.J.length; m < b; )
                l = m++,
                this.J[l].g = f,
                this.J[l].j = h,
                this.J[l].i = .1;
            f = new U;
            h = f.a;
            h.x = a;
            h.y = -c;
            f.N = 0;
            f.M = 8;
            f.H = d;
            this.s.push(f);
            f = new U;
            h = f.a;
            h.x = a;
            h.y = c;
            f.N = 0;
            f.M = 8;
            f.H = d;
            this.s.push(f);
            d = new Ra;
            f = d.K;
            f.x = a;
            f.y = -c;
            f = d.O;
            f.x = a;
            f.y = c;
            d.Fc = e;
            this.pb.push(d)
        },
        $f: function(a, b) {
            var c = new w
              , d = c.a;
            d.x = 0;
            d.y = -b;
            c.i = .1;
            c.j = 24;
            c.g = 6;
            var d = new w
              , e = d.a;
            e.x = 0;
            e.y = -a;
            d.i = .1;
            d.j = 24;
            d.g = 6;
            var e = new w
              , f = e.a;
            f.x = 0;
            f.y = a;
            e.i = .1;
            e.j = 24;
            e.g = 6;
            var f = new w
              , h = f.a;
            h.x = 0;
            h.y = b;
            f.i = .1;
            f.j = 24;
            f.g = 6;
            h = new z;
            h.K = c;
            h.O = d;
            h.j = 24;
            h.g = 6;
            h.Ca = !1;
            h.i = .1;
            var m = new z;
            m.K = e;
            m.O = f;
            m.j = 24;
            m.g = 6;
            m.Ca = !1;
            m.i = .1;
            var l = new z;
            l.K = d;
            l.O = e;
            l.j = 8;
            l.g = 6;
            l.Ca = !1;
            l.Gb(180);
            l.i = .1;
            var g = new z;
            g.K = e;
            g.O = d;
            g.j = 16;
            g.g = 6;
            g.Ca = !1;
            g.Gb(180);
            g.i = .1;
            this.B.push(c);
            this.B.push(d);
            this.B.push(e);
            this.B.push(f);
            this.J.push(h);
            this.J.push(m);
            this.J.push(l);
            this.J.push(g)
        },
        Yf: function(a, b, c) {
            if (!(0 >= c)) {
                var d = new w
                  , e = d.a;
                e.x = -a + c;
                e.y = -b;
                d.g = 0;
                var e = new w
                  , f = e.a;
                f.x = -a;
                f.y = -b + c;
                e.g = 0;
                var f = new w
                  , h = f.a;
                h.x = -a + c;
                h.y = b;
                f.g = 0;
                var h = new w
                  , m = h.a;
                m.x = -a;
                m.y = b - c;
                h.g = 0;
                var m = new w
                  , g = m.a;
                g.x = a - c;
                g.y = b;
                m.g = 0;
                var g = new w
                  , k = g.a;
                k.x = a;
                k.y = b - c;
                g.g = 0;
                var k = new w
                  , n = k.a;
                n.x = a - c;
                n.y = -b;
                k.g = 0;
                var n = new w
                  , p = n.a;
                p.x = a;
                p.y = -b + c;
                n.g = 0;
                a = new z;
                a.K = d;
                a.O = e;
                a.g = 1;
                a.Ca = !1;
                a.i = 1;
                a.Gb(-90);
                b = new z;
                b.K = f;
                b.O = h;
                b.g = 1;
                b.Ca = !1;
                b.i = 1;
                b.Gb(90);
                c = new z;
                c.K = m;
                c.O = g;
                c.g = 1;
                c.Ca = !1;
                c.i = 1;
                c.Gb(-90);
                p = new z;
                p.K = k;
                p.O = n;
                p.g = 1;
                p.Ca = !1;
                p.i = 1;
                p.Gb(90);
                this.B.push(d);
                this.B.push(e);
                this.B.push(f);
                this.B.push(h);
                this.B.push(m);
                this.B.push(g);
                this.B.push(k);
                this.B.push(n);
                this.J.push(a);
                this.J.push(b);
                this.J.push(c);
                this.J.push(p)
            }
        },
        f: g
    };
    aa.c = !0;
    aa.prototype = {
        ca: function(a) {
            a.R(this.qc);
            a.ea(this.kc);
            a.R(this.Wa.length);
            for (var b = 0, c = this.Wa; b < c.length; )
                a.ea(c[b++])
        },
        $: function(a) {
            this.qc = a.G();
            this.kc = a.F();
            var b = a.G();
            if (3 < b)
                throw new r("too many");
            this.Wa = [];
            for (var c = 0; c < b; )
                ++c,
                this.Wa.push(a.F())
        },
        f: aa
    };
    p.c = !0;
    p.prototype = {
        f: p
    };
    ca.c = !0;
    ca.pc = [ia, nb];
    ca.bc = function(a, b) {
        a.Fb = b.Fb;
        if (null == b.L)
            a.L = null;
        else {
            null == a.L && (a.L = []);
            for (var c = a.L, d = b.L, e = d.length; c.length > e; )
                c.pop();
            for (var e = 0, f = d.length; e < f; ) {
                var h = e++;
                c[h] = d[h].Rk()
            }
        }
        a.D = null == b.D ? null : b.D.yb();
        a.Ib = b.Ib;
        a.Da = b.Da;
        a.ma = b.ma;
        a.zc = b.zc;
        a.Sb = b.Sb;
        a.fc = b.fc;
        a.I = b.I;
        a.Fa = b.Fa
    }
    ;
    ca.prototype = {
        sk: function(a) {
            if (null == this.D) {
                this.D = new I;
                for (var b = 0, c = this.L; b < c.length; ) {
                    var d = c[b];
                    ++b;
                    d.w = null;
                    d.Sa = 0
                }
                this.D.Oi(this);
                null != this.Le && this.Le(a)
            }
        },
        qd: function(a, b, c) {
            if (b.fa != c) {
                b.fa = c;
                F.remove(this.L, b);
                this.L.push(b);
                if (null != this.D) {
                    null != b.w && (F.remove(this.D.Z.s, b.w),
                    b.w = null);
                    this.D.Kf(b);
                    for (var d = 0, e = !1; !e; ) {
                        ++d;
                        for (var e = !0, f = 0, h = this.L; f < h.length; ) {
                            var m = h[f];
                            ++f;
                            if (m != b && m.fa == b.fa && m.Sa == d) {
                                e = !1;
                                break
                            }
                        }
                    }
                    b.Sa = d
                }
                lb.u(this.vg, a, b, c)
            }
        },
        sa: function(a) {
            for (var b = 0, c = this.L; b < c.length; ) {
                var d = c[b];
                ++b;
                if (d.aa == a)
                    return d
            }
            return null
        },
        X: function(a) {
            null != this.D && this.D.X(a)
        },
        ca: function(a) {
            a.Gc(this.Fb);
            a.R(this.Ib ? 1 : 0);
            a.ea(this.Da);
            a.ea(this.ma);
            a.Se(this.zc);
            a.R(this.Sb);
            a.R(this.fc);
            this.I.ca(a);
            a.R(null != this.D ? 1 : 0);
            null != this.D && this.D.ca(a);
            a.R(this.L.length);
            for (var b = 0, c = this.L; b < c.length; )
                c[b++].Yk(a);
            this.Fa[1].ca(a);
            this.Fa[2].ca(a)
        },
        $: function(a) {
            this.Fb = a.Za();
            this.Ib = 0 != a.G();
            this.Da = a.F();
            this.ma = a.F();
            this.zc = a.Ce();
            this.Sb = a.G();
            this.fc = a.G();
            this.I = g.$(a);
            var b = 0 != a.G();
            this.D = null;
            b && (this.D = new I,
            this.D.$(a, this));
            for (var b = null == this.D ? null : this.D.Z.s, c = a.G(), d = this.L; d.length > c; )
                d.pop();
            for (d = 0; d < c; ) {
                var e = new T;
                e.ga(a, b);
                this.L[d++] = e
            }
            this.Fa[1].$(a);
            this.Fa[2].$(a)
        },
        Ei: function() {
            var a = 0
              , b = H.ff();
            this.ca(b);
            for (b = b.xk(); 4 <= b.A.byteLength - b.a; )
                a ^= b.F();
            return a
        },
        di: function(a) {
            a = (new O(new DataView(a))).F();
            A.u(this.jl, this.Ei() != a)
        },
        Va: function(a) {
            if (0 == a)
                return !0;
            a = this.sa(a);
            return null != a && a.cb ? !0 : !1
        },
        mk: function(a, b, c, d) {
            this.fc = 0 > b ? 0 : 255 < b ? 255 : b;
            this.Sb = 0 > c ? 0 : 255 < c ? 255 : c;
            d = 0 > d ? 0 : 100 < d ? 100 : d;
            this.zc = this.Sb * d;
            Sa.u(this.Of, a, this.fc, this.Sb, d)
        },
        yb: function() {
            var a = da.Nb
              , b = this.kb;
            this.lb != a && (null == b && (this.kb = b = new ca),
            this.lb = a,
            ca.bc(b, this));
            return b
        },
        f: ca
    };
    T.c = !0;
    T.pc = [ia];
    T.Mk = function(a, b) {
        a.cb = b.cb;
        a.Sa = b.Sa;
        a.Jb = b.Jb;
        a.mc = b.mc;
        a.nc = b.nc;
        a.Hc = b.Hc;
        a.Qd = b.Qd;
        a.jb = b.jb;
        a.C = b.C;
        a.zb = b.zb;
        a.aa = b.aa;
        a.eb = b.eb;
        a.vb = b.vb;
        a.Lb = b.Lb;
        a.w = null == b.w ? null : b.w.yb();
        a.fa = b.fa
    }
    ;
    T.prototype = {
        Yk: function(a) {
            a.R(this.cb ? 1 : 0);
            a.ea(this.Sa);
            a.Gc(this.Jb);
            a.Gc(this.mc);
            a.R(this.nc ? 1 : 0);
            a.Gc(this.Hc);
            a.ea(this.Qd);
            a.Gc(this.C);
            a.ea(this.zb);
            a.Te(this.aa);
            a.R(this.eb ? 1 : 0);
            a.Se(this.vb);
            a.R(this.Lb);
            a.R(this.fa.Ha);
            a.Se(null == this.w ? -1 : this.w.kg)
        },
        ga: function(a, b) {
            this.cb = 0 != a.G();
            this.Sa = a.F();
            this.Jb = a.Za();
            this.mc = a.Za();
            this.nc = 0 != a.G();
            this.Hc = a.Za();
            this.Qd = a.F();
            this.C = a.Za();
            this.zb = a.F();
            this.aa = a.Wb();
            this.eb = 0 != a.G();
            this.vb = a.Ce();
            this.Lb = a.G();
            var c = a.Zc();
            this.fa = 1 == c ? p.Y : 2 == c ? p.wa : p.va;
            c = a.Ce();
            this.w = 0 > c ? null : b[c]
        },
        Rk: function() {
            var a = da.Nb
              , b = this.wh;
            this.Nb != a && (null == b && (this.wh = b = new T),
            this.Nb = a,
            T.Mk(b, this));
            return b
        },
        f: T
    };
    Qa.c = !0;
    Qa.ba = k;
    Qa.prototype = y(k.prototype, {
        apply: function(a) {
            var b = a.sa(this.S);
            null != b && this.uh != b.nc && (b.nc = this.uh,
            A.u(a.pg, b))
        },
        ga: function(a) {
            this.uh = 0 != a.G()
        },
        f: Qa
    });
    Pa.c = !0;
    Pa.ba = k;
    Pa.prototype = y(k.prototype, {
        apply: function(a) {
            0 == this.S && Sa.u(a.Kg, this.kd, this.color, this.style, this.cl)
        },
        ga: function(a) {
            this.kd = a.Ag();
            if (1E3 < this.kd.length)
                throw new r("message too long");
            this.color = a.F();
            this.style = a.G();
            this.cl = a.G()
        },
        f: Pa
    });
    Oa.c = !0;
    Oa.ba = k;
    Oa.prototype = y(k.prototype, {
        apply: function(a) {
            if (a.Va(this.S, 1)) {
                for (var b = a.sa(this.S), c = a.L, d = [], e = 0, f = 0, h = 0; h < c.length; ) {
                    var m = c[h];
                    ++h;
                    m.fa == p.va && d.push(m);
                    m.fa == p.Y ? ++e : m.fa == p.wa && ++f
                }
                c = d.length;
                0 != c && (f == e ? 2 > c || (a.qd(b, d[0], p.Y),
                a.qd(b, d[1], p.wa)) : a.qd(b, d[0], f > e ? p.Y : p.wa))
            }
        },
        ga: function() {},
        f: Oa
    });
    Na.c = !0;
    Na.ba = k;
    Na.prototype = y(k.prototype, {
        apply: function(a) {
            if (a.Va(this.S, 2) && null == a.D)
                switch (this.bl) {
                case 0:
                    var b = this.newValue;
                    a.Da = 0 > b ? 0 : 99 < b ? 99 : b;
                    break;
                case 1:
                    b = this.newValue,
                    a.ma = 0 > b ? 0 : 99 < b ? 99 : b
                }
        },
        ga: function(a) {
            this.bl = a.F();
            this.newValue = a.F()
        },
        f: Na
    });
    Ma.c = !0;
    Ma.ba = k;
    Ma.prototype = y(k.prototype, {
        apply: function(a) {
            if (a.Va(this.S, 4)) {
                var b = a.sa(this.S)
                  , c = a.sa(this.af);
                null != c && 0 != c.aa && c.cb != this.th && (c.cb = this.th,
                null != a.ye && a.ye(b, c))
            }
        },
        ga: function(a) {
            this.af = a.F();
            this.th = 0 != a.G()
        },
        f: Ma
    });
    La.c = !0;
    La.ba = k;
    La.prototype = y(k.prototype, {
        apply: function(a) {
            a = a.sa(this.S);
            null != a && (a.Jb = this.Mb)
        },
        ga: function(a) {
            this.Mb = a.Za();
            null != this.Mb && (this.Mb = Za.Ve(this.Mb, 2))
        },
        f: La
    });
    Ka.c = !0;
    Ka.ba = k;
    Ka.prototype = y(k.prototype, {
        apply: function(a) {
            var b = a.sa(this.af);
            if (null != b) {
                var c = a.sa(this.S)
                  , d = a.Va(this.S, 1);
                (d = d || b == c && !a.Ib && null == a.D) && a.qd(c, b, this.Vk)
            }
        },
        ga: function(a) {
            this.af = a.F();
            a = a.Zc();
            this.Vk = 1 == a ? p.Y : 2 == a ? p.wa : p.va
        },
        f: Ka
    });
    Ja.c = !0;
    Ja.ba = k;
    Ja.prototype = y(k.prototype, {
        apply: function(a) {
            if (a.Va(this.S, 8)) {
                var b = a.sa(this.S);
                null == a.D && (a.I = this.ld,
                null != a.Ke && a.Ke(b, this.ld))
            }
        },
        ga: function(a) {
            a = pako.inflateRaw(a.Jd(a.$c()));
            this.ld = g.$(new O(new DataView(a.buffer,a.byteOffset,a.byteLength)))
        },
        f: Ja
    });
    Ia.c = !0;
    Ia.ba = k;
    Ia.prototype = y(k.prototype, {
        apply: function(a) {
            a.Va(this.S, 2) && this.fa != p.va && (a.Fa[this.fa.Ha] = this.mh)
        },
        ga: function(a) {
            var b = a.Zc();
            this.fa = 1 == b ? p.Y : 2 == b ? p.wa : p.va;
            this.mh = new aa;
            this.mh.$(a)
        },
        f: Ia
    });
    Ha.c = !0;
    Ha.ba = k;
    Ha.prototype = y(k.prototype, {
        apply: function(a) {
            a.Va(this.S, 2) && (a.Ib = this.newValue)
        },
        ga: function(a) {
            this.newValue = 0 != a.G()
        },
        f: Ha
    });
    Ga.c = !0;
    Ga.ba = k;
    Ga.prototype = y(k.prototype, {
        apply: function(a) {
            if (0 == this.S) {
                var b = new T;
                b.aa = this.aa;
                b.C = this.name;
                b.Hc = this.Nk;
                b.Jb = this.Jb;
                a.L.push(b);
                a = a.rg;
                null != a && a(b)
            }
        },
        ga: function(a) {
            this.aa = a.F();
            this.name = a.Za();
            this.Nk = a.Za();
            this.Jb = a.Za()
        },
        f: Ga
    });
    Fa.c = !0;
    Fa.ba = k;
    Fa.prototype = y(k.prototype, {
        apply: function(a) {
            a = a.sa(this.Sd);
            null != a && 0 == this.S && (a.mc = this.Mb)
        },
        ga: function(a) {
            this.Mb = a.Za();
            this.Sd = a.F();
            null != this.Mb && (this.Mb = Za.Ve(this.Mb, 2))
        },
        f: Fa
    });
    Ea.c = !0;
    Ea.ba = k;
    Ea.prototype = y(k.prototype, {
        apply: function(a) {
            var b = a.D;
            if (null != b && a.Va(this.S, 16)) {
                var c = a.sa(this.S)
                  , d = 120 == b.za
                  , e = 0 < b.za;
                this.Ze ? b.za = 120 : 120 == b.za && (b.za = 119);
                d != this.Ze && lb.u(a.mg, c, this.Ze, e)
            }
        },
        ga: function(a) {
            this.Ze = 0 != a.G()
        },
        f: Ea
    });
    Da.c = !0;
    Da.ba = k;
    Da.prototype = y(k.prototype, {
        apply: function(a) {
            var b = a.sa(this.S);
            null != b && ea.u(a.og, b, this.kd)
        },
        ga: function(a) {
            this.kd = a.Ag();
            if (140 < this.kd.length)
                throw new r("message too long");
        },
        f: Da
    });
    Ca.c = !0;
    Ca.ba = k;
    Ca.prototype = y(k.prototype, {
        apply: function(a) {
            var b = a.sa(this.S);
            if (null != b) {
                var c = this.input;
                0 == (b.zb & 16) && 0 != (c & 16) && (b.eb = !0);
                b.zb = c;
                null != a.zj && a.zj(b)
            }
        },
        ga: function(a) {
            this.input = a.Cc()
        },
        f: Ca
    });
    Ba.c = !0;
    Ba.ba = k;
    Ba.prototype = y(k.prototype, {
        apply: function(a) {
            var b = a.sa(this.S);
            null != b && ea.u(a.ug, b, this.dl)
        },
        ga: function(a) {
            this.dl = a.G()
        },
        f: Ba
    });
    rb.c = !0;
    rb.Xe = function() {
        k.pa(Pa);
        k.pa(Ba);
        k.pa(Ua);
        k.pa(Ca);
        k.pa(Da);
        k.pa(Ga);
        k.pa(Aa);
        k.pa(wa);
        k.pa(va);
        k.pa(Ea);
        k.pa(Na);
        k.pa(Ja);
        k.pa(Ka);
        k.pa(Ha);
        k.pa(Ma);
        k.pa(Oa);
        k.pa(Qa);
        k.pa(ua);
        k.pa(La);
        k.pa(Ia);
        k.pa(za);
        k.pa(xa);
        k.pa(Fa);
        k.pa(ya)
    }
    ;
    Aa.c = !0;
    Aa.ba = k;
    Aa.prototype = y(k.prototype, {
        apply: function(a) {
            if (0 != this.aa && a.Va(this.S, 128)) {
                var b = a.sa(this.aa);
                if (null != b) {
                    var c = a.sa(this.S);
                    F.remove(a.L, b);
                    null != a.D && F.remove(a.D.Z.s, b.w);
                    Sa.u(a.sg, b, this.Ye, this.jh, c)
                }
            }
        },
        ga: function(a) {
            this.aa = a.F();
            this.Ye = a.Za();
            this.jh = 0 != a.G();
            if (null != this.Ye && 100 < this.Ye.length)
                throw new r("string too long");
        },
        f: Aa
    });
    za.c = !0;
    za.ba = k;
    za.prototype = y(k.prototype, {
        apply: function(a) {
            if (0 == this.S) {
                for (var b = new Map, c = 0, d = a.L; c < d.length; ) {
                    var e = d[c];
                    ++c;
                    b.set(e.aa, e)
                }
                c = [];
                d = 0;
                for (e = this.vh; d < e.length; ) {
                    var f = e[d];
                    ++d;
                    var h = b.get(f);
                    null != h && (b["delete"](f),
                    c.push(h))
                }
                d = [];
                b = b.values();
                for (e = b.next(); !e.done; )
                    f = e.value,
                    e = b.next(),
                    d.push(f);
                a.L = this.Xk ? c.concat(d) : d.concat(c)
            }
        },
        ga: function(a) {
            this.Xk = 0 != a.G();
            var b = a.G();
            this.vh = [];
            for (var c = 0; c < b; )
                ++c,
                this.vh.push(a.F())
        },
        f: za
    });
    ya.c = !0;
    ya.ba = k;
    ya.prototype = y(k.prototype, {
        apply: function(a) {
            if (0 == this.S) {
                var b = a.D;
                if (null != b) {
                    if (this.Tk) {
                        a = a.sa(this.Sd);
                        if (null == a)
                            return;
                        a = a.w
                    } else
                        a = b.Z.s[this.Sd];
                    null != a && (null != this.ua[0] && (a.a.x = this.ua[0]),
                    null != this.ua[1] && (a.a.y = this.ua[1]),
                    null != this.ua[2] && (a.o.x = this.ua[2]),
                    null != this.ua[3] && (a.o.y = this.ua[3]),
                    null != this.ua[4] && (a.V.x = this.ua[4]),
                    null != this.ua[5] && (a.V.y = this.ua[5]),
                    null != this.ua[6] && (a.M = this.ua[6]),
                    null != this.ua[7] && (a.i = this.ua[7]),
                    null != this.ua[8] && (a.N = this.ua[8]),
                    null != this.ua[9] && (a.ka = this.ua[9]),
                    null != this.Xb[0] && (a.H = this.Xb[0]),
                    null != this.Xb[1] && (a.g = this.Xb[1]),
                    null != this.Xb[2] && (a.j = this.Xb[2]))
                }
            }
        },
        ga: function(a) {
            this.Sd = a.F();
            this.Tk = 0 != a.G();
            var b = a.$c();
            this.ua = [];
            for (var c = 0; 10 > c; ) {
                var d = c++;
                this.ua[d] = null;
                0 != (b & 1) && (this.ua[d] = a.Fj());
                b >>>= 1
            }
            this.Xb = [];
            for (c = 0; 3 > c; )
                d = c++,
                this.Xb[d] = null,
                0 != (b & 1) && (this.Xb[d] = a.F()),
                b >>>= 1
        },
        f: ya
    });
    xa.c = !0;
    xa.ba = k;
    xa.prototype = y(k.prototype, {
        apply: function(a) {
            a.Va(this.S, 2) && a.mk(a.sa(this.S), this.min, this.$k, this.Jk)
        },
        ga: function(a) {
            this.min = a.F();
            this.$k = a.F();
            this.Jk = a.F()
        },
        f: xa
    });
    wa.c = !0;
    wa.ba = k;
    wa.prototype = y(k.prototype, {
        apply: function(a) {
            a.Va(this.S, 32) && a.sk(a.sa(this.S), 0)
        },
        ga: function() {},
        f: wa
    });
    va.c = !0;
    va.ba = k;
    va.prototype = y(k.prototype, {
        apply: function(a) {
            if (a.Va(this.S, 32)) {
                var b = a.sa(this.S);
                if (null != a.D) {
                    a.D = null;
                    for (var c = 0, d = a.L; c < d.length; ) {
                        var e = d[c];
                        ++c;
                        e.w = null;
                        e.Sa = 0
                    }
                    null != a.gd && a.gd(b)
                }
            }
        },
        ga: function() {},
        f: va
    });
    ua.c = !0;
    ua.ba = k;
    ua.prototype = y(k.prototype, {
        apply: function(a) {
            if (0 == this.S) {
                a = a.L;
                for (var b = 0, c = a.length; b < c; ) {
                    var d = b++;
                    if (d >= this.$e.length)
                        break;
                    a[d].jb = this.$e[d]
                }
            }
        },
        ga: function(a) {
            this.$e = [];
            for (var b = a.Wb(), c = 0; c < b; )
                ++c,
                this.$e.push(a.Wb())
        },
        f: ua
    });
    P.c = !0;
    P.pc = [ia];
    P.bc = function(a, b) {
        a.M = b.M;
        a.i = b.i;
        a.N = b.N;
        a.ka = b.ka;
        a.H = b.H;
        a.mf = b.mf;
        a.g = b.g;
        a.j = b.j;
        var c = a.a
          , d = b.a;
        c.x = d.x;
        c.y = d.y;
        c = a.o;
        d = b.o;
        c.x = d.x;
        c.y = d.y;
        c = a.V;
        d = b.V;
        c.x = d.x;
        c.y = d.y
    }
    ;
    P.prototype = {
        ca: function(a) {
            var b = this.a;
            a.l(b.x);
            a.l(b.y);
            b = this.o;
            a.l(b.x);
            a.l(b.y);
            b = this.V;
            a.l(b.x);
            a.l(b.y);
            a.l(this.M);
            a.l(this.i);
            a.l(this.N);
            a.l(this.ka);
            a.hh(this.H);
            a.ea(this.g);
            a.ea(this.j)
        },
        $: function(a) {
            var b = this.a;
            b.x = a.m();
            b.y = a.m();
            b = this.o;
            b.x = a.m();
            b.y = a.m();
            b = this.V;
            b.x = a.m();
            b.y = a.m();
            this.M = a.m();
            this.i = a.m();
            this.N = a.m();
            this.ka = a.m();
            this.H = a.Cc();
            this.g = a.F();
            this.j = a.F()
        },
        ai: function(a) {
            var b = this.a
              , c = a.a
              , d = b.x - c.x
              , b = b.y - c.y
              , e = a.M + this.M
              , f = d * d + b * b;
            if (0 < f && f <= e * e) {
                var f = Math.sqrt(f)
                  , d = d / f
                  , b = b / f
                  , c = this.N / (this.N + a.N)
                  , e = e - f
                  , f = e * c
                  , h = this.a
                  , m = this.a;
                h.x = m.x + d * f;
                h.y = m.y + b * f;
                m = h = a.a;
                e -= f;
                h.x = m.x - d * e;
                h.y = m.y - b * e;
                e = this.o;
                f = a.o;
                e = d * (e.x - f.x) + b * (e.y - f.y);
                0 > e && (e *= this.i * a.i + 1,
                c *= e,
                h = f = this.o,
                f.x = h.x - d * c,
                f.y = h.y - b * c,
                a = f = a.o,
                c = e - c,
                f.x = a.x + d * c,
                f.y = a.y + b * c)
            }
        },
        bi: function(a) {
            var b, c, d;
            if (0 != 0 * a.La) {
                b = a.K.a;
                var e = a.O.a;
                c = e.x - b.x;
                var f = e.y - b.y
                  , h = this.a;
                d = h.x - e.x;
                e = h.y - e.y;
                h = this.a;
                if (0 >= (h.x - b.x) * c + (h.y - b.y) * f || 0 <= d * c + e * f)
                    return;
                c = a.ia;
                b = c.x;
                c = c.y;
                d = b * d + c * e
            } else {
                c = a.uc;
                d = this.a;
                b = d.x - c.x;
                c = d.y - c.y;
                d = a.Kd;
                e = a.Ld;
                if ((0 < d.x * b + d.y * c && 0 < e.x * b + e.y * c) == 0 >= a.La)
                    return;
                e = Math.sqrt(b * b + c * c);
                if (0 == e)
                    return;
                d = e - a.sf;
                b /= e;
                c /= e
            }
            e = a.xb;
            if (0 == e)
                0 > d && (d = -d,
                b = -b,
                c = -c);
            else if (0 > e && (e = -e,
            d = -d,
            b = -b,
            c = -c),
            d < -e)
                return;
            d >= this.M || (d = this.M - d,
            f = e = this.a,
            e.x = f.x + b * d,
            e.y = f.y + c * d,
            d = this.o,
            d = b * d.x + c * d.y,
            0 > d && (d *= this.i * a.i + 1,
            e = a = this.o,
            a.x = e.x - b * d,
            a.y = e.y - c * d))
        },
        yb: function() {
            var a = da.Nb
              , b = this.kb;
            this.lb != a && (null == b && (this.kb = b = new P),
            this.lb = a,
            P.bc(b, this));
            return b
        },
        f: P
    };
    ta.c = !0;
    ta.pc = [ia];
    ta.prototype = {
        ca: function(a) {
            a.R(this.vc);
            a.R(this.wc);
            a.l(this.Ra);
            a.l(this.ib);
            a.l(this.Ec);
            a.ea(this.H)
        },
        $: function(a) {
            this.vc = a.G();
            this.wc = a.G();
            this.Ra = a.m();
            this.ib = a.m();
            this.Ec = a.m();
            this.H = a.F()
        },
        X: function(a) {
            var b = a[this.vc];
            a = a[this.wc];
            if (null != b && null != a) {
                var c = b.a
                  , d = a.a
                  , e = c.x - d.x
                  , c = c.y - d.y
                  , f = Math.sqrt(e * e + c * c);
                if (!(0 >= f)) {
                    e /= f;
                    c /= f;
                    d = b.N / (b.N + a.N);
                    d != d && (d = .5);
                    var h, m;
                    if (this.Ra >= this.ib)
                        h = this.Ra,
                        m = 0;
                    else if (f <= this.Ra)
                        h = this.Ra,
                        m = 1;
                    else if (f >= this.ib)
                        h = this.ib,
                        m = -1;
                    else
                        return;
                    f = h - f;
                    if (0 == 0 * this.Ec)
                        d = this.Ec * f * .5,
                        e *= d,
                        c *= d,
                        m = d = b.o,
                        b = b.N,
                        d.x = m.x + e * b,
                        d.y = m.y + c * b,
                        d = b = a.o,
                        a = a.N,
                        b.x = d.x + -e * a,
                        b.y = d.y + -c * a;
                    else {
                        h = f * d;
                        var g = b.a
                          , k = b.a;
                        g.x = k.x + e * h * .5;
                        g.y = k.y + c * h * .5;
                        k = g = a.a;
                        f -= h;
                        g.x = k.x - e * f * .5;
                        g.y = k.y - c * f * .5;
                        f = b.o;
                        h = a.o;
                        f = e * (f.x - h.x) + c * (f.y - h.y);
                        0 >= f * m && (d *= f,
                        b = m = b.o,
                        m.x = b.x - e * d,
                        m.y = b.y - c * d,
                        a = b = a.o,
                        d = f - d,
                        b.x = a.x + e * d,
                        b.y = a.y + c * d)
                    }
                }
            }
        },
        f: ta
    };
    ba.c = !0;
    ba.pc = [ia];
    ba.bc = function(a, b) {
        if (null == b.s)
            a.s = null;
        else {
            null == a.s && (a.s = []);
            for (var c = a.s, d = b.s, e = d.length; c.length > e; )
                c.pop();
            for (var e = 0, f = d.length; e < f; ) {
                var h = e++;
                c[h] = d[h].yb()
            }
        }
        a.B = b.B;
        a.J = b.J;
        a.W = b.W;
        a.Ja = b.Ja
    }
    ;
    ba.prototype = {
        ca: function(a) {
            a.R(this.s.length);
            for (var b = 0, c = this.s.length; b < c; ) {
                var d = b++
                  , e = this.s[d];
                e.kg = d;
                e.ca(a)
            }
        },
        $: function(a) {
            this.s = [];
            for (var b = a.G(), c = 0; c < b; ) {
                ++c;
                var d = new P;
                d.$(a);
                this.s.push(d)
            }
        },
        X: function(a) {
            for (var b = 0, c = this.s; b < c.length; ) {
                var d = c[b];
                ++b;
                var e = d.a
                  , f = d.a
                  , h = d.o;
                e.x = f.x + h.x * a;
                e.y = f.y + h.y * a;
                f = e = d.o;
                h = d.V;
                d = d.ka;
                e.x = (f.x + h.x) * d;
                e.y = (f.y + h.y) * d
            }
            a = 0;
            for (b = this.s.length; a < b; ) {
                d = a++;
                c = this.s[d];
                d += 1;
                for (e = this.s.length; d < e; )
                    f = this.s[d++],
                    0 != (f.g & c.j) && 0 != (f.j & c.g) && c.ai(f);
                if (0 != c.N) {
                    d = 0;
                    for (e = this.W; d < e.length; )
                        if (f = e[d],
                        ++d,
                        0 != (f.g & c.j) && 0 != (f.j & c.g)) {
                            var h = f.ia
                              , g = c.a
                              , h = f.Aa - (h.x * g.x + h.y * g.y) + c.M;
                            if (0 < h) {
                                var l = g = c.a
                                  , k = f.ia;
                                g.x = l.x + k.x * h;
                                g.y = l.y + k.y * h;
                                h = c.o;
                                g = f.ia;
                                h = h.x * g.x + h.y * g.y;
                                0 > h && (h *= c.i * f.i + 1,
                                l = g = c.o,
                                f = f.ia,
                                g.x = l.x - f.x * h,
                                g.y = l.y - f.y * h)
                            }
                        }
                    d = 0;
                    for (e = this.J; d < e.length; )
                        f = e[d],
                        ++d,
                        0 != (f.g & c.j) && 0 != (f.j & c.g) && c.bi(f);
                    d = 0;
                    for (e = this.B; d < e.length; )
                        if (f = e[d],
                        ++d,
                        0 != (f.g & c.j) && 0 != (f.j & c.g) && (g = c.a,
                        l = f.a,
                        h = g.x - l.x,
                        g = g.y - l.y,
                        l = h * h + g * g,
                        0 < l && l <= c.M * c.M)) {
                            var l = Math.sqrt(l)
                              , h = h / l
                              , g = g / l
                              , l = c.M - l
                              , n = k = c.a;
                            k.x = n.x + h * l;
                            k.y = n.y + g * l;
                            l = c.o;
                            l = h * l.x + g * l.y;
                            0 > l && (l *= c.i * f.i + 1,
                            k = f = c.o,
                            f.x = k.x - h * l,
                            f.y = k.y - g * l)
                        }
                }
            }
            for (a = 0; 2 > a; )
                for (++a,
                b = 0,
                c = this.Ja; b < c.length; )
                    c[b++].X(this.s)
        },
        yb: function() {
            var a = da.Nb
              , b = this.kb;
            this.lb != a && (null == b && (this.kb = b = new ba),
            this.lb = a,
            ba.bc(b, this));
            return b
        },
        f: ba
    };
    D.c = !0;
    D.prototype = {
        ca: function(a) {
            var b = this.ia;
            a.l(b.x);
            a.l(b.y);
            a.l(this.Aa);
            a.l(this.i);
            a.ea(this.g);
            a.ea(this.j)
        },
        $: function(a) {
            var b = this.ia;
            b.x = a.m();
            b.y = a.m();
            this.Aa = a.m();
            this.i = a.m();
            this.g = a.F();
            this.j = a.F()
        },
        f: D
    };
    z.c = !0;
    z.prototype = {
        ca: function(a) {
            var b = 0
              , c = a.a;
            a.R(0);
            a.R(this.K.dc);
            a.R(this.O.dc);
            0 != this.xb && (b = 1,
            a.l(this.xb));
            this.La != 1 / 0 && (b |= 2,
            a.l(this.La));
            0 != this.H && (b |= 4,
            a.ea(this.H));
            this.Ca && (b |= 8);
            a.A.setUint8(c, b);
            a.l(this.i);
            a.ea(this.g);
            a.ea(this.j)
        },
        $: function(a, b) {
            var c = a.G();
            this.K = b[a.G()];
            this.O = b[a.G()];
            this.xb = 0 != (c & 1) ? a.m() : 0;
            this.La = 0 != (c & 2) ? a.m() : 1 / 0;
            this.H = 0 != (c & 4) ? a.F() : 0;
            this.Ca = 0 != (c & 8);
            this.i = a.m();
            this.g = a.F();
            this.j = a.F()
        },
        Gb: function(a) {
            a *= .017453292519943295;
            if (0 > a) {
                a = -a;
                var b = this.K;
                this.K = this.O;
                this.O = b;
                this.xb = -this.xb
            }
            a > z.Eh && a < z.Dh && (this.La = 1 / Math.tan(a / 2))
        },
        Ai: function() {
            return 0 != 0 * this.La ? 0 : 114.59155902616465 * Math.atan(1 / this.La)
        },
        Bc: function() {
            if (0 == 0 * this.La) {
                var a = this.O.a
                  , b = this.K.a
                  , c = .5 * (a.x - b.x)
                  , a = .5 * (a.y - b.y)
                  , b = this.K.a
                  , d = this.La;
                this.uc = new B(b.x + c + -a * d,b.y + a + c * d);
                a = this.K.a;
                b = this.uc;
                c = a.x - b.x;
                a = a.y - b.y;
                this.sf = Math.sqrt(c * c + a * a);
                c = this.K.a;
                a = this.uc;
                this.Kd = new B(-(c.y - a.y),c.x - a.x);
                c = this.uc;
                a = this.O.a;
                this.Ld = new B(-(c.y - a.y),c.x - a.x);
                0 >= this.La && (a = c = this.Kd,
                c.x = -a.x,
                c.y = -a.y,
                a = c = this.Ld,
                c.x = -a.x,
                c.y = -a.y)
            } else
                a = this.K.a,
                b = this.O.a,
                c = a.x - b.x,
                a = -(a.y - b.y),
                b = Math.sqrt(a * a + c * c),
                this.ia = new B(a / b,c / b)
        },
        f: z
    };
    w.c = !0;
    w.prototype = {
        ca: function(a) {
            var b = this.a;
            a.l(b.x);
            a.l(b.y);
            a.l(this.i);
            a.ea(this.g);
            a.ea(this.j)
        },
        $: function(a) {
            var b = this.a;
            b.x = a.m();
            b.y = a.m();
            this.i = a.m();
            this.g = a.F();
            this.j = a.F()
        },
        f: w
    };
    E.c = !0;
    E.nb = function(a) {
        return "rgba(" + [(a & 16711680) >>> 16, (a & 65280) >>> 8, a & 255].join() + ",255)"
    }
    ;
    E.Ie = function(a, b) {
        a.imageSmoothingEnabled = b;
        a.mozImageSmoothingEnabled = b
    }
    ;
    E.prototype = {
        Ki: function(a, b) {
            var c = this.Vb.get(a.aa);
            if (null != c)
                switch (b) {
                case 0:
                    c.wd = !0;
                    break;
                case 1:
                    c.wd = !1
                }
        },
        Ek: function() {
            if (null != this.ha.parentElement) {
                var a = window.devicePixelRatio * this.He
                  , b = this.ha.getBoundingClientRect()
                  , c = Math.round(b.width * a)
                  , a = Math.round(b.height * a);
                if (this.ha.width != c || this.ha.height != a)
                    this.ha.width = c,
                    this.ha.height = a
            }
        },
        hc: function(a, b) {
            var c = window.performance.now()
              , d = (c - this.Uc) / 1E3;
            this.Uc = c;
            this.Md.clear();
            this.Ek();
            E.Ie(this.b, !0);
            this.b.resetTransform();
            if (null != a.D) {
                var c = a.D
                  , e = c.Z
                  , f = a.sa(b)
                  , h = null != f ? f.w : null
                  , g = 0 != this.xg ? this.ha.height / this.xg : this.Be * window.devicePixelRatio * this.He
                  , k = this.Pe * this.He
                  , n = c.I.Wc
                  , p = this.ha.width / g;
                0 < n && p > n && (p = n,
                g = this.ha.width / n);
                n = (this.ha.height - k) / g;
                this.Ck(c, h, p, n, d);
                for (var q = 0, t = a.L; q < t.length; ) {
                    var r = t[q];
                    ++q;
                    if (null != r.w) {
                        var v = this.Vb.get(r.aa);
                        null == v && (v = new Z,
                        this.Vb.set(r.aa, v));
                        v.X(r, a);
                        this.Md.set(r.w, v)
                    }
                }
                this.b.translate(this.ha.width / 2, (this.ha.height + k) / 2);
                this.b.scale(g, g);
                this.b.translate(-this.Ba.x, -this.Ba.y);
                this.b.lineWidth = 3;
                this.Vj(c.I);
                this.Uj(c.I);
                g = e.s;
                k = 0;
                for (q = e.Ja; k < q.length; )
                    this.Pj(q[k++], g);
                this.Oj(a, p, n);
                this.Qj(a, f);
                null != h && this.Sj(h.a);
                this.b.lineWidth = 2;
                f = 0;
                for (h = a.L; f < h.length; )
                    p = h[f],
                    ++f,
                    n = p.w,
                    null != n && this.Fg(n, this.Vb.get(p.aa));
                f = 0;
                for (e = e.s; f < e.length; )
                    h = e[f],
                    ++f,
                    null == this.Md.get(h) && this.Fg(h, null);
                this.b.lineWidth = 3;
                this.b.resetTransform();
                this.b.translate(this.ha.width / 2, this.ha.height / 2);
                this.Rj(c);
                0 >= c.za && (this.cc.X(d),
                this.cc.hc(this.b));
                this.Md.clear();
                this.Nj(a)
            }
        },
        Nj: function(a) {
            var b = new Set
              , c = 0;
            for (a = a.L; c < a.length; )
                b.add(a[c++].aa);
            c = this.Vb.keys();
            for (a = c.next(); !a.done; ) {
                var d = a.value;
                a = c.next();
                if (!b.has(d))
                    this.Vb["delete"](d)
            }
        },
        Ck: function(a, b, c, d, e) {
            var f, h;
            if (null != b && 1 == a.I.Oc)
                h = b.a,
                f = h.x,
                h = h.y;
            else if (h = a.Z.s[0].a,
            f = h.x,
            h = h.y,
            null != b) {
                var g = b.a;
                f = .5 * (f + g.x);
                h = .5 * (h + g.y);
                var k = .5 * c
                  , n = .5 * d;
                b = g.x - k + 50;
                var p = g.y - n + 50
                  , k = g.x + k - 50
                  , g = g.y + n - 50;
                f = f > k ? k : f < b ? b : f;
                h = h > g ? g : h < p ? p : h
            }
            p = 60 * e;
            1 < p && (p = 1);
            b = e = this.Ba;
            p *= .04;
            k = b.x;
            b = b.y;
            e.x = k + (f - k) * p;
            e.y = b + (h - b) * p;
            this.ii(c, d, a.I)
        },
        ii: function(a, b, c) {
            a > 2 * c.gb ? this.Ba.x = 0 : this.Ba.x + .5 * a > c.gb ? this.Ba.x = c.gb - .5 * a : this.Ba.x - .5 * a < -c.gb && (this.Ba.x = -c.gb + .5 * a);
            b > 2 * c.ob ? this.Ba.y = 0 : this.Ba.y + .5 * b > c.ob ? this.Ba.y = c.ob - .5 * b : this.Ba.y - .5 * b < -c.ob && (this.Ba.y = -c.ob + .5 * b)
        },
        Sj: function(a) {
            this.b.beginPath();
            this.b.strokeStyle = "white";
            this.b.globalAlpha = .3;
            this.b.arc(a.x, a.y, 25, 0, 2 * Math.PI, !1);
            this.b.stroke();
            this.b.globalAlpha = 1
        },
        Rj: function(a) {
            var b = 0 < a.za;
            this.lk(b);
            b && (120 != a.za && (a = a.za / 120 * 200,
            this.b.fillStyle = "white",
            this.b.fillRect(.5 * -a, 100, a, 20)),
            this.cc.wj.Wj(this.b))
        },
        lk: function(a) {
            this.Lf != a && (this.ha.style.filter = a ? "grayscale(70%)" : "",
            this.Lf = a)
        },
        Lg: function(a, b, c, d, e, f) {
            d = b + d;
            e = c + e;
            a.beginPath();
            a.moveTo(d - f, c);
            a.arcTo(d, c, d, c + f, f);
            a.lineTo(d, e - f);
            a.arcTo(d, e, d - f, e, f);
            a.lineTo(b + f, e);
            a.arcTo(b, e, b, e - f, f);
            a.lineTo(b, c + f);
            a.arcTo(b, c, b + f, c, f);
            a.closePath()
        },
        Vj: function(a) {
            var b = this;
            E.Ie(this.b, !1);
            var c = a.sc
              , d = a.rc;
            if (1 == a.$b)
                this.b.save(),
                this.b.resetTransform(),
                this.b.fillStyle = E.nb(a.Yb),
                this.b.fillRect(0, 0, this.ha.width, this.ha.height),
                this.b.restore(),
                this.b.strokeStyle = "#C7E6BD",
                this.b.fillStyle = this.Ji,
                this.Lg(this.b, -c, -d, 2 * c, 2 * d, a.Ob),
                this.b.save(),
                this.b.scale(2, 2),
                this.b.fill(),
                this.b.restore(),
                this.b.moveTo(0, -d),
                this.b.lineTo(0, d),
                this.b.stroke(),
                this.b.beginPath(),
                this.b.arc(0, 0, a.Zb, 0, 2 * Math.PI),
                this.b.stroke();
            else if (2 == a.$b) {
                this.b.strokeStyle = "#E9CC6E";
                this.b.save();
                this.b.beginPath();
                this.b.rect(this.Ba.x - 1E4, this.Ba.y - 1E4, 2E4, 2E4);
                this.b.scale(2, 2);
                this.b.fillStyle = this.fi;
                this.b.fill();
                this.b.restore();
                this.b.save();
                this.Lg(this.b, -c, -d, 2 * c, 2 * d, a.Ob);
                this.b.scale(2, 2);
                this.b.fillStyle = this.hi;
                this.b.fill();
                this.b.restore();
                this.b.stroke();
                this.b.beginPath();
                this.b.moveTo(0, -d);
                this.b.setLineDash([15, 15]);
                this.b.lineTo(0, d);
                this.b.stroke();
                this.b.setLineDash([]);
                var e = a.Nc
                  , c = c - e;
                e < a.Ob && (c = 0);
                e = function(c, e, g) {
                    b.b.beginPath();
                    b.b.strokeStyle = c;
                    b.b.arc(0, 0, a.Zb, -1.5707963267948966, 1.5707963267948966, g);
                    0 != e && (b.b.moveTo(e, -d),
                    b.b.lineTo(e, d));
                    b.b.stroke()
                }
                ;
                e("#85ACF3", c, !1);
                e("#E18977", -c, !0)
            } else
                this.b.save(),
                this.b.resetTransform(),
                this.b.fillStyle = E.nb(a.Yb),
                this.b.fillRect(0, 0, this.ha.width, this.ha.height),
                this.b.restore();
            E.Ie(this.b, !0)
        },
        Qj: function(a, b) {
            for (var c = q.P.If.la(), d = 0, e = a.L; d < e.length; ) {
                var f = e[d];
                ++d;
                var h = f.w;
                if (null != h) {
                    var h = h.a
                      , g = this.Vb.get(f.aa);
                    c && g.wd && this.b.drawImage(q.eh, h.x - .5 * q.eh.width, h.y - 35);
                    f != b && g.vi(this.b, h.x, h.y + 50)
                }
            }
        },
        Fg: function(a, b) {
            this.b.beginPath();
            null == b ? (this.b.fillStyle = E.nb(a.H),
            this.b.strokeStyle = "black") : (this.b.fillStyle = b.kf,
            this.b.strokeStyle = b.pi);
            this.b.beginPath();
            this.b.arc(a.a.x, a.a.y, a.M, 0, 2 * Math.PI, !1);
            if (null != b) {
                this.b.save();
                var c = a.M / 32;
                this.b.translate(a.a.x, a.a.y);
                this.b.scale(c, c);
                this.b.translate(-32, -32);
                this.b.fill();
                this.b.restore()
            } else
                -1 != (a.H | 0) && this.b.fill();
            this.b.stroke()
        },
        Uj: function(a) {
            if (null != a) {
                var b = 0;
                for (a = a.J; b < a.length; )
                    this.Tj(a[b++])
            }
        },
        Pj: function(a, b) {
            if (!(0 > a.H)) {
                this.b.beginPath();
                this.b.strokeStyle = E.nb(a.H);
                var c = b[a.vc]
                  , d = b[a.wc];
                null != c && null != d && (c = c.a,
                d = d.a,
                this.b.moveTo(c.x, c.y),
                this.b.lineTo(d.x, d.y),
                this.b.stroke())
            }
        },
        Tj: function(a) {
            if (a.Ca) {
                this.b.beginPath();
                this.b.strokeStyle = E.nb(a.H);
                var b = a.K.a
                  , c = a.O.a;
                if (0 != 0 * a.La)
                    this.b.moveTo(b.x, b.y),
                    this.b.lineTo(c.x, c.y);
                else {
                    a = a.uc;
                    var d = b.x - a.x
                      , b = b.y - a.y;
                    this.b.arc(a.x, a.y, Math.sqrt(d * d + b * b), Math.atan2(b, d), Math.atan2(c.y - a.y, c.x - a.x))
                }
                this.b.stroke()
            }
        },
        Oj: function(a, b, c) {
            var d = a.D;
            if (null != d)
                for (d = d.Z.s[0],
                this.Af(d.a, d.H, b, c),
                d = 0,
                a = a.L; d < a.length; ) {
                    var e = a[d];
                    ++d;
                    null != e.w && this.Af(e.w.a, e.fa.H, b, c)
                }
        },
        Af: function(a, b, c, d) {
            c = .5 * c - 25;
            d = .5 * d - 25;
            var e = this.Ba
              , f = a.x - e.x
              , e = a.y - e.y
              , h = -c
              , g = -d
              , k = this.Ba;
            c = k.x + (f > c ? c : f < h ? h : f);
            d = k.y + (e > d ? d : e < g ? g : e);
            f = a.x - c;
            a = a.y - d;
            900 < f * f + a * a && (this.b.fillStyle = "rgba(0,0,0,0.5)",
            this.Bf(c + 2, d + 2, Math.atan2(a, f)),
            this.b.fillStyle = E.nb(b),
            this.Bf(c - 2, d - 2, Math.atan2(a, f)))
        },
        Bf: function(a, b, c) {
            this.b.save();
            this.b.translate(a, b);
            this.b.rotate(c);
            this.b.beginPath();
            this.b.moveTo(15, 0);
            this.b.lineTo(0, 7);
            this.b.lineTo(0, -7);
            this.b.closePath();
            this.b.fill();
            this.b.restore()
        },
        ak: function() {
            for (var a = this.Vb.values(), b = a.next(); !b.done; ) {
                var c = b.value
                  , b = a.next();
                c.wd = !1
            }
        },
        f: E
    };
    J.c = !0;
    J.prototype = {
        zi: function() {
            return 2.31 + .1155 * (this.Vc.length - 1)
        },
        hc: function(a, b) {
            var c = b / 2.31
              , d = 0;
            a.imageSmoothingEnabled = !0;
            for (var e = 0, f = this.Vc; e < f.length; ) {
                var h = f[e];
                ++e;
                var g = c - .05 * d
                  , k = 180 * J.Ch.eval(g) * (0 != (d & 1) ? -1 : 1);
                a.globalAlpha = J.Bh.eval(g);
                a.drawImage(h, k - .5 * h.width, 35 * -(this.Vc.length - 1) + 70 * d - .5 * h.height);
                a.globalAlpha = 1;
                ++d
            }
            a.imageSmoothingEnabled = !1
        },
        Wj: function(a) {
            var b = 0;
            a.imageSmoothingEnabled = !0;
            for (var c = 0, d = this.Vc; c < d.length; ) {
                var e = d[c];
                ++c;
                a.drawImage(e, .5 * -e.width, 35 * -(this.Vc.length - 1) + 70 * b - .5 * e.height);
                ++b
            }
            a.imageSmoothingEnabled = !1
        },
        nb: function(a) {
            return "rgba(" + [(a & 16711680) >>> 16, (a & 65280) >>> 8, a & 255].join() + ",255)"
        },
        ej: function(a, b) {
            var c = window.document.createElement("canvas")
              , d = c.getContext("2d", null);
            d.font = "900 70px Arial Black,Arial Bold,Gadget,sans-serif";
            c.width = Math.ceil(d.measureText(a).width) + 7;
            c.height = 90;
            d.font = "900 70px Arial Black,Arial Bold,Gadget,sans-serif";
            d.textAlign = "left";
            d.textBaseline = "middle";
            d.fillStyle = "black";
            d.fillText(a, 7, 52);
            d.fillStyle = this.nb(b);
            d.fillText(a, 0, 45);
            return c
        },
        f: J
    };
    eb.c = !0;
    eb.prototype = {
        xa: function(a) {
            this.qb.push(a)
        },
        Zh: function() {
            this.qb = [];
            this.ub = 0
        },
        X: function(a) {
            0 < this.qb.length && (this.ub += a,
            this.ub > this.qb[0].zi() && (this.ub = 0,
            this.qb.shift()))
        },
        hc: function(a) {
            0 < this.qb.length && this.qb[0].hc(a, this.ub)
        },
        f: eb
    };
    Z.c = !0;
    Z.Xh = function(a, b) {
        if (a.qc != b.qc || a.kc != b.kc)
            return !1;
        var c = a.Wa
          , d = b.Wa;
        if (c.length != d.length)
            return !1;
        for (var e = 0, f = c.length; e < f; ) {
            var g = e++;
            if (c[g] != d[g])
                return !1
        }
        return !0
    }
    ;
    Z.ki = function(a, b) {
        a.qc = b.qc;
        a.kc = b.kc;
        a.Wa = b.Wa.slice(0)
    }
    ;
    Z.prototype = {
        li: function() {
            var a = window.document.createElement("canvas");
            a.width = 160;
            a.height = 34;
            this.tg = a.getContext("2d", null)
        },
        Dk: function() {
            var a = this.tg;
            a.resetTransform();
            a.clearRect(0, 0, 160, 34);
            a.font = "26px sans-serif";
            a.fillStyle = "white";
            160 < a.measureText(this.C).width ? (a.textAlign = "left",
            a.translate(2, 29)) : (a.textAlign = "center",
            a.translate(80, 29));
            a.fillText(this.C, 0, 0)
        },
        vi: function(a, b, c) {
            a.drawImage(this.tg.canvas, 0, 0, 160, 34, b - 40, c - 34, 80, 17)
        },
        X: function(a, b) {
            if (null != a.w) {
                var c = q.P.dh.la() ? b.Fa[a.fa.Ha] : a.fa.bh
                  , d = null != a.mc ? a.mc : a.Jb
                  , e = q.P.Rg.la() && null != d;
                if (!Z.Xh(this.Fa, c) || !e && a.Sa != this.Yd || e && this.od != d)
                    Z.ki(this.Fa, c),
                    e ? (this.od = d,
                    this.Yd = -1) : (this.od = "" + a.Sa,
                    this.Yd = a.Sa),
                    this.Kj(this.od)
            }
            this.pi = 0 < b.D.za || !a.eb ? "black" : a.eb && 0 >= a.Lb && 0 <= a.vb ? "white" : "black";
            a.C != this.C && (this.C = a.C,
            this.Dk())
        },
        Kj: function(a) {
            var b = this.Fa.Wa;
            if (!(1 > b.length)) {
                this.Ka.save();
                this.Ka.translate(32, 32);
                this.Ka.rotate(3.141592653589793 * this.Fa.qc / 128);
                for (var c = -32, d = 64 / b.length, e = 0; e < b.length; )
                    this.Ka.fillStyle = E.nb(b[e++]),
                    this.Ka.fillRect(c, -32, d + 4, 64),
                    c += d;
                this.Ka.restore();
                this.Ka.fillStyle = E.nb(this.Fa.kc);
                this.Ka.textAlign = "center";
                this.Ka.textBaseline = "alphabetic";
                this.Ka.font = "900 34px 'Arial Black','Arial Bold',Gadget,sans-serif";
                this.Ka.fillText(a, 32, 44);
                this.kf = this.Ka.createPattern(this.Ka.canvas, "no-repeat")
            }
        },
        f: Z
    };
    Y.c = !0;
    Y.Pi = function(a) {
        return a.parentElement.querySelector(":hover") == a
    }
    ;
    Y.prototype = {
        bj: function(a, b, c) {
            var d = window.document.createElement("p");
            d.className = "announcement";
            d.textContent = a;
            0 <= b && (d.style.color = E.nb(b));
            switch (c) {
            case 1:
            case 4:
                d.style.fontWeight = "bold";
                break;
            case 2:
            case 5:
                d.style.fontStyle = "italic"
            }
            switch (c) {
            case 3:
            case 4:
            case 5:
                d.style.fontSize = "12px"
            }
            this.Vf(d)
        },
        Vf: function(a) {
            var b = this.Bb.clientHeight
              , b = this.Bb.scrollTop + b - this.Bb.scrollHeight >= .5 * -b || !Y.Pi(this.Bb);
            this.Bb.appendChild(a);
            b && (this.Bb.scrollTop = a.offsetTop);
            for (a = b ? 50 : 100; this.Bb.childElementCount > a; )
                this.Bb.firstElementChild.remove();
            this.Id.update()
        },
        Uf: function(a, b) {
            var c = window.document.createElement("p");
            null != b && (c.className = b);
            c.textContent = a;
            this.Vf(c)
        },
        hb: function(a) {
            this.Uf(a, "notice")
        },
        f: Y
    };
    sa.c = !0;
    sa.xi = function(a) {
        return -1 != ".$^{[(|)*+?\\".indexOf(a) ? "\\" + a : a
    }
    ;
    sa.prototype = {
        ge: function() {
            this.Re(null)
        },
        Vh: function(a, b) {
            var c = this.Lj.exec(F.substr(a, 0, b));
            if (null != c) {
                var d = c[0]
                  , e = new RegExp(F.substr(d, 1, null).split("").map(sa.xi).join(".*?"),"i");
                this.Mf = "#" == d.charAt(0);
                this.De = c.index;
                this.Yj = d.length;
                this.Gg = a;
                for (var c = function(a) {
                    a = e.exec(a.C);
                    return null == a ? -1 : a.index + a[0].length
                }, d = [], f = 0, g = this.jf; f < g.length; ) {
                    var k = g[f];
                    ++f;
                    var l = c(k);
                    0 <= l && d.push({
                        yh: l,
                        item: k
                    })
                }
                d.sort(function(a, b) {
                    return a.yh - b.yh
                });
                this.Re(d)
            } else
                this.Re(null)
        },
        zf: function(a) {
            a = this.Mf ? "#" + a.Ha : "@" + M.replace(a.C, " ", "_");
            this.qj(F.substr(this.Gg, 0, this.De) + a + " " + F.substr(this.Gg, this.De + this.Yj, null), this.De + a.length + 1)
        },
        Re: function(a) {
            var b = this
              , c = null != a && 0 != a.length;
            this.Xa.hidden || v.bf(this.Xa);
            this.Qb = null;
            this.Xa.hidden = !c;
            if (c) {
                for (var c = [], d = 0; d < a.length; ) {
                    var e = a[d++]
                      , f = window.document.createElement("div")
                      , e = [e.item]
                      , g = e[0].C;
                    this.Mf && (g = "(" + e[0].Ha + ") " + g);
                    f.textContent = g;
                    this.Xa.appendChild(f);
                    f.onclick = function(a) {
                        return function() {
                            b.zf(a[0])
                        }
                    }(e);
                    c.push({
                        item: e[0],
                        Kb: f
                    })
                }
                this.Qb = c;
                this.Qb[0].Kb.classList.toggle("selected", !0);
                this.sb = 0
            }
        },
        pf: function(a) {
            if (null != this.Qb) {
                var b = this.sb;
                this.sb += a;
                a = this.Qb.length - 1;
                0 > this.sb ? this.sb = a : this.sb > a && (this.sb = 0);
                a = this.Qb[this.sb];
                b != this.sb && (a.Kb.classList.toggle("selected", !0),
                this.Qb[b].Kb.classList.toggle("selected", !1));
                a = a.Kb;
                b = a.offsetTop;
                a = b + a.offsetHeight;
                var c = this.Xa.scrollTop + this.Xa.clientHeight;
                b < this.Xa.scrollTop ? this.Xa.scrollTop = b : a > c && (this.Xa.scrollTop = a - this.Xa.clientHeight)
            }
        },
        ti: function() {
            null != this.Qb && (this.zf(this.Qb[this.sb].item),
            this.ge())
        },
        f: sa
    };
    ra.c = !0;
    ra.prototype = {
        Pg: function(a) {
            this.h.classList.toggle("restricted", a)
        },
        X: function(a) {
            var b = a.D;
            null != b && (this.ub.qk(60 * a.ma),
            this.ub.pk(b.Cb | 0),
            this.Ta.set(b.Ta),
            this.$a.set(b.$a),
            this.Ua.hc(a, this.qg))
        },
        f: ra
    };
    db.c = !0;
    db.prototype = {
        tc: function(a, b) {
            var c = window.document.createElement("span");
            c.textContent = a;
            c.className = b;
            return c
        },
        pk: function(a) {
            if (a != this.Pc) {
                var b = a % 60
                  , c = a / 60 | 0;
                this.gk.textContent = "" + b % 10;
                this.hk.textContent = "" + (b / 10 | 0) % 10;
                this.gj.textContent = "" + c % 10;
                this.hj.textContent = "" + (c / 10 | 0) % 10;
                this.Pc = a
            }
            this.Cg();
            this.Dg()
        },
        qk: function(a) {
            this.ma = a;
            this.Cg();
            this.Dg()
        },
        Cg: function() {
            this.nk(0 != this.ma && this.Pc > this.ma)
        },
        Dg: function() {
            this.rk(this.Pc < this.ma && this.Pc > this.ma - 30)
        },
        nk: function(a) {
            a != this.xf && (this.vj.className = a ? "overtime on" : "overtime",
            this.xf = a)
        },
        rk: function(a) {
            a != this.yf && (this.h.className = a ? "game-timer-view time-warn" : "game-timer-view",
            this.yf = a)
        },
        f: db
    };
    fa.c = !0;
    fa.prototype = {
        X: function(a) {
            null == a.bb.D && this.ed(!0);
            G.u(this.wg);
            this.pe.disabled = null == a.bb.D;
            this.Dc ? this.cd.X(a.bb, a.bb.sa(a.qe)) : (a = a.Gf(),
            this.Ya.X(a),
            q.ya.rf.gl(a))
        },
        ed: function(a) {
            this.Dc != a && ((this.Dc = a) ? (this.de.appendChild(this.cd.h),
            this.Ya.h.remove()) : (this.de.appendChild(this.Ya.h),
            this.cd.h.remove()))
        },
        Hb: function(a, b) {
            v.bf(this.Yc);
            fa.zl = a;
            null != a ? (this.Yc.style.display = "flex",
            this.Yc.appendChild(a),
            this.wg = b) : (this.Yc.style.display = "none",
            this.wg = null)
        },
        f: fa
    };
    qa.c = !0;
    qa.prototype = {
        f: qa
    };
    oa.c = !0;
    oa.prototype = {
        Nd: function() {
            this.we.disabled = null == this.Ea;
            this.uf.disabled = null == this.Ea || null == this.Ea.nh;
            this.Cf.disabled = null == this.Ea
        },
        ag: function(a, b, c) {
            var d = this
              , e = window.document.createElement("div");
            e.textContent = a;
            e.className = "elem";
            null != c && e.classList.add("custom");
            var f = {
                Kb: e,
                ld: b,
                nh: c
            };
            e.onclick = function() {
                null != d.Ea && d.Ea.Kb.classList.remove("selected");
                d.Ea = f;
                e.classList.add("selected");
                d.Nd()
            }
            ;
            e.ondblclick = function() {
                d.Ea = f;
                d.Nd();
                return d.we.onclick()
            }
            ;
            return e
        },
        Bj: function(a) {
            for (var b = this, c = g.fe(), d = 0; d < c.length; ) {
                var e = [c[d]];
                ++d;
                e = this.ag(e[0].C, function(a) {
                    return function() {
                        return Promise.resolve(a[0])
                    }
                }(e), null);
                a.appendChild(e)
            }
            ga.getAll().then(function(c) {
                for (var d = 0; d < c.length; ) {
                    var e = c[d];
                    ++d;
                    var f = [e.id]
                      , e = b.ag(e.name, function(a) {
                        return function() {
                            return ga.get(a[0])
                        }
                    }(f), function(a) {
                        return function() {
                            return ga["delete"](a[0])
                        }
                    }(f));
                    a.appendChild(e)
                }
                b.Id.update()
            })
        },
        f: oa
    };
    cb.c = !0;
    cb.prototype = {
        f: cb
    };
    na.c = !0;
    na.prototype = {
        X: function(a, b) {
            this.h.draggable = b;
            this.jb != a.jb && (this.jb = a.jb,
            this.xe.textContent = "" + this.jb);
            this.Mh != a.cb && this.Ng(a.cb)
        },
        Ng: function(a) {
            this.Mh = a;
            this.h.className = "player-list-item" + (a ? " admin" : "")
        },
        f: na
    };
    X.c = !0;
    X.prototype = {
        X: function(a, b, c, d) {
            var e = this;
            this.ke.disabled = b || c;
            this.Ge.disabled = c;
            b = new Set;
            c = this.ec.keys();
            for (var f = c.next(); !f.done; ) {
                var g = f.value
                  , f = c.next();
                b.add(g)
            }
            for (c = 0; c < a.length; )
                f = a[c],
                ++c,
                g = this.ec.get(f.aa),
                null == g && (g = new na(f),
                g.Fd = function(a) {
                    A.u(e.Fd, a)
                }
                ,
                this.ec.set(f.aa, g),
                this.qb.appendChild(g.h)),
                g.X(f, d),
                b["delete"](f.aa);
            d = b.values();
            for (b = d.next(); !b.done; )
                c = b.value,
                b = d.next(),
                this.ec.get(c).h.remove(),
                this.ec["delete"](c);
            d = 0;
            for (b = a.length - 1; d < b; )
                f = d++,
                c = this.ec.get(a[f].aa).h,
                f = this.ec.get(a[f + 1].aa).h,
                c.nextSibling != f && this.qb.insertBefore(c, f)
        },
        f: X
    };
    S.c = !0;
    S.fg = function(a) {
        a = a / 1E3 | 0;
        return (a / 60 | 0) + ":" + M.Uk(K.Lc(a % 60))
    }
    ;
    S.prototype = {
        Ni: function() {
            this.Qf.hidden = !0
        },
        X: function() {
            this.uk.textContent = S.fg(this.Ee.ab);
            this.Dj.style.width = 100 * this.Ee.Fi() + "%";
            !this.vd || 0 < this.Ee.jc || (this.vd = !1,
            this.rj())
        },
        f: S
    };
    ma.c = !0;
    ma.prototype = {
        f: ma
    };
    la.c = !0;
    la.prototype = {
        ie: function(a, b, c, d) {
            var e = this;
            v.Jc(a, b.h);
            b.se = function(a, b) {
                ea.u(e.se, a, b)
            }
            ;
            b.Xc = function(a) {
                A.u(e.Xc, a)
            }
            ;
            b.mj = function(a) {
                ea.u(e.se, d, a)
            }
            ;
            b.Fd = function(a) {
                A.u(e.Fd, a)
            }
        },
        cg: function(a) {
            for (var b = [], c = 0; c < a; ) {
                var d = c++;
                b.push(null == d ? "null" : "" + d)
            }
            return b
        },
        dg: function(a, b) {
            for (var c = 0; c < b.length; ) {
                var d = b[c++]
                  , e = window.document.createElement("option");
                e.textContent = d;
                a.appendChild(e)
            }
        },
        X: function(a, b) {
            this.Xj != a.Fb && (this.Xj = a.Fb,
            this.Fb.textContent = a.Fb);
            var c = null == b ? !1 : b.cb;
            this.wf != c && (this.h.className = "room-view" + (c ? " admin" : ""),
            this.wf = c);
            var d = !c || null != a.D;
            this.hd.disabled = d;
            this.dd.disabled = d;
            this.Xg.disabled = d;
            d = null != a.D;
            this.Yg.hidden = d;
            this.ah.hidden = !d;
            this.ve.hidden = !d;
            this.hd.selectedIndex = a.ma;
            this.dd.selectedIndex = a.Da;
            this.Wg.textContent = a.I.C;
            this.Wg.classList.toggle("custom", !a.I.je());
            var e = a.Ib;
            this.Bg.X(a.L.filter(function(a) {
                return a.fa == p.Y
            }), e, d, c);
            this.lf.X(a.L.filter(function(a) {
                return a.fa == p.wa
            }), e, d, c);
            this.Vg.X(a.L.filter(function(a) {
                return a.fa == p.va
            }), e, d, c);
            this.Jg.disabled = d;
            this.me != a.Ib && this.gf(a.Ib);
            d && (c = 120 == a.D.za,
            this.lg != c && this.hf(c))
        },
        gf: function(a) {
            this.me = a;
            this.Tf.innerHTML = this.me ? "<i class='icon-lock'></i>Unlock" : "<i class='icon-lock-open'></i>Lock"
        },
        hf: function(a) {
            this.lg = a;
            this.ve.innerHTML = "<i class='icon-pause'></i>" + (this.lg ? "Resume (P)" : "Pause (P)")
        },
        f: la
    };
    R.c = !0;
    R.prototype = {
        f: R
    };
    Q.c = !0;
    Q.prototype = {
        f: Q
    };
    ka.c = !0;
    ka.prototype = {
        kk: function(a) {
            this.yi.textContent = null == a ? "null" : "" + a
        },
        f: ka
    };
    ja.c = !0;
    ja.prototype = {
        f: ja
    };
    r.c = !0;
    r.ba = Error;
    r.prototype = y(Error.prototype, {
        f: r
    });
    n.c = !0;
    n.Pk = function(a) {
        if (a instanceof Array && null == a.oc)
            return Array;
        var b = a.f;
        if (null != b)
            return b;
        a = n.ef(a);
        return null != a ? n.Kh(a) : null
    }
    ;
    n.nd = function(a, b) {
        if (null == a)
            return "null";
        if (5 <= b.length)
            return "<...>";
        var c = typeof a;
        "function" == c && (a.c || a.Gh) && (c = "object");
        switch (c) {
        case "function":
            return "<function>";
        case "object":
            if (a.oc) {
                var d = $hxEnums[a.oc]
                  , c = d.il[a.ll]
                  , e = d[c];
                if (e.Jh) {
                    b += "\t";
                    for (var c = c + "(", d = [], f = 0, e = e.Jh; f < e.length; ) {
                        var g = e[f];
                        ++f;
                        d.push(n.nd(a[g], b))
                    }
                    return c + d.join(",") + ")"
                }
                return c
            }
            if (a instanceof Array) {
                c = a.length;
                d = "[";
                b += "\t";
                for (f = 0; f < c; )
                    e = f++,
                    d += (0 < e ? "," : "") + n.nd(a[e], b);
                return d + "]"
            }
            try {
                d = a.toString
            } catch (m) {
                return "???"
            }
            if (null != d && d != Object.toString && "function" == typeof d && (c = a.toString(),
            "[object Object]" != c))
                return c;
            c = null;
            d = "{\n";
            b += "\t";
            f = null != a.hasOwnProperty;
            for (c in a)
                f && !a.hasOwnProperty(c) || "prototype" == c || "__class__" == c || "__super__" == c || "__interfaces__" == c || "__properties__" == c || (2 != d.length && (d += ", \n"),
                d += b + c + " : " + n.nd(a[c], b));
            b = b.substring(1);
            return d + ("\n" + b + "}");
        case "string":
            return a;
        default:
            return String(a)
        }
    }
    ;
    n.Xd = function(a, b) {
        if (null == a)
            return !1;
        if (a == b)
            return !0;
        var c = a.pc;
        if (null != c)
            for (var d = 0, e = c.length; d < e; ) {
                var f = c[d++];
                if (f == b || n.Xd(f, b))
                    return !0
            }
        return n.Xd(a.ba, b)
    }
    ;
    n.Hh = function(a, b) {
        if (null == b)
            return !1;
        switch (b) {
        case Array:
            return a instanceof Array ? null == a.oc : !1;
        case tb:
            return "boolean" == typeof a;
        case wb:
            return !0;
        case t:
            return "number" == typeof a;
        case bb:
            return "number" == typeof a ? (a | 0) === a : !1;
        case String:
            return "string" == typeof a;
        default:
            if (null != a)
                if ("function" == typeof b) {
                    if (a instanceof b || n.Xd(n.Pk(a), b))
                        return !0
                } else {
                    if ("object" == typeof b && n.Ih(b) && a instanceof b)
                        return !0
                }
            else
                return !1;
            return b == xb && null != a.c || b == yb && null != a.Gh ? !0 : $hxEnums[a.oc] == b
        }
    }
    ;
    n.v = function(a, b) {
        if (n.Hh(a, b))
            return a;
        throw new r("Cannot cast " + K.Lc(a) + " to " + K.Lc(b));
    }
    ;
    n.ef = function(a) {
        a = n.Lh.call(a).slice(8, -1);
        return "Object" == a || "Function" == a || "Math" == a || "JSON" == a ? null : a
    }
    ;
    n.Ih = function(a) {
        return null != n.ef(a)
    }
    ;
    n.Kh = function(a) {
        return ub[a]
    }
    ;
    var vb = 0;
    null == String.fromCodePoint && (String.fromCodePoint = function(a) {
        return 65536 > a ? String.fromCharCode(a) : String.fromCharCode((a >> 10) + 55232) + String.fromCharCode((a & 1023) + 56320)
    }
    );
    String.prototype.f = String;
    String.c = !0;
    Array.c = !0;
    var bb = {}
      , wb = {}
      , t = Number
      , tb = Boolean
      , xb = {}
      , yb = {};
    p.va = new p(0,16777215,0,-1,"Spectators","t-spec",0,0);
    p.Y = new p(1,15035990,-1,8,"Red","t-red",0,2);
    p.wa = new p(2,5671397,1,16,"Blue","t-blue",0,4);
    p.va.Gd = p.va;
    p.Y.Gd = p.wa;
    p.wa.Gd = p.Y;
    Object.defineProperty(r.prototype, "message", {
        get: function() {
            return String(this.df)
        }
    });
    pa.Li = ["click-rail", "drag-thumb", "wheel", "touch"];
    k.qh = new Map;
    k.Ue = 0;
    Ua.na = k.oa({
        ra: !1,
        qa: !1
    });
    da.Nb = 0;
    q.Nh = "https://www.haxball.com/rs/";
    q.P = new kb;
    I.gg = function() {
        for (var a = [], b = 0; 256 > b; )
            ++b,
            a.push(new B(0,0));
        return a
    }(this);
    I.vf = function() {
        for (var a = [], b = 0; 256 > b; )
            ++b,
            a.push(0);
        return a
    }(this);
    g.vk = H.ff(1024);
    Qa.na = k.oa({
        ra: !1,
        qa: !1
    });
    Pa.na = k.oa({
        ra: !1,
        qa: !1,
        xh: {
            kh: 10,
            Ah: 900
        }
    });
    Oa.na = k.oa({
        ra: !1,
        qa: !1
    });
    Na.na = k.oa({
        ra: !1,
        qa: !1
    });
    Ma.na = k.oa({
        ra: !1,
        qa: !1
    });
    La.na = k.oa({
        ra: !1,
        qa: !1
    });
    Ka.na = k.oa({
        ra: !1,
        qa: !1
    });
    Ja.na = k.oa({
        ra: !1,
        qa: !1,
        xh: {
            kh: 10,
            Ah: 2E3
        }
    });
    Ia.na = k.oa({
        ra: !1,
        qa: !1
    });
    Ha.na = k.oa({
        ra: !1,
        qa: !1
    });
    Ga.na = k.oa({
        ra: !1,
        qa: !1
    });
    Fa.na = k.oa({
        ra: !1,
        qa: !1
    });
    Ea.na = k.oa({});
    Da.na = k.oa({
        ra: !1,
        qa: !1,
        xh: {
            kh: 10,
            Ah: 900
        }
    });
    Ca.na = k.oa({});
    Ba.na = k.oa({
        ra: !1,
        qa: !1
    });
    Aa.na = k.oa({
        ra: !1,
        qa: !1
    });
    za.na = k.oa({
        ra: !1,
        qa: !1
    });
    ya.na = k.oa({
        ra: !1,
        qa: !1
    });
    xa.na = k.oa({
        ra: !1,
        qa: !1
    });
    wa.na = k.oa({
        ra: !1,
        qa: !1
    });
    va.na = k.oa({
        ra: !1,
        qa: !1
    });
    ua.na = k.oa({
        ra: !1,
        qa: !1
    });
    z.Eh = .17435839227423353;
    z.Dh = 5.934119456780721;
    J.Bh = new $a([0, 0, 2, 1, 0, .35, 1, 0, 1, 0, .7, 1, 0, 0, 0, 1]);
    J.Ch = new $a([0, -1, 3, 0, 0, .35, 0, 0, 0, 0, .65, 0, 0, 1, 3, 1]);
    Y.da = "<div class='chatbox-view'><div data-hook='log' class='log'><p>Controls:<br/>Move: WASD or Arrows<br/>Kick: X, Space, Ctrl, Shift, Numpad 0<br/>View: Numbers 1 to 4</p></div><div class='autocompletebox' data-hook='autocompletebox'></div><div class='input'><input data-hook='input' type='text' /><button data-hook='send'>Send</button></div></div>";
    ra.da = "<div class='game-state-view'><div class='bar-container'><div class='bar'><div class='scoreboard'><div class='teamicon red'></div><div class='score' data-hook='red-score'>0</div><div>-</div><div class='score' data-hook='blue-score'>0</div><div class='teamicon blue'></div></div><div data-hook='timer'></div></div></div><div class='canvas' data-hook='canvas'></div></div>";
    fa.da = "<div class='game-view' tabindex='-1'><div class='top-section' data-hook='gameplay-section'></div><div class='bottom-section'><div data-hook='stats'></div><div data-hook='chatbox'></div><div class='buttons'><button data-hook='menu'><i class='icon-menu'></i>Menu<span class='tooltip'>Toggle room menu [Escape]</span></button><button data-hook='settings'><i class='icon-cog'></i>Settings</button></div></div><div data-hook='popups'></div></div>";
    qa.da = "<div class='dialog basic-dialog leave-room-view'><h1>Leave room?</h1><p>Are you sure you want to leave the room?</p><div class='buttons'><button data-hook='cancel'>Cancel</button><button data-hook='leave'><i class='icon-logout'></i>Leave</button></div></div>";
    oa.da = "<div class='dialog pick-stadium-view'><h1>Pick a stadium</h1><div class='splitter'><div class='list' data-hook='list'></div><div class='buttons'><button data-hook='pick'>Pick</button><button data-hook='delete'>Delete</button><div class='file-btn'><label for='stadfile'>Load</label><input id='stadfile' type='file' accept='.hbs' data-hook='file'/></div><button data-hook='export'>Export</button><div class='spacer'></div><button data-hook='cancel'>Cancel</button></div></div></div>";
    na.da = "<div class='player-list-item'><div data-hook='flag' class='flagico'></div><div data-hook='name'></div><div data-hook='ping'></div></div>";
    X.da = "<div class='player-list-view'><div class='buttons'><button data-hook='join-btn'>Join</button><button data-hook='reset-btn' class='admin-only'></button></div><div class='list' data-hook='list'></div></div>";
    S.da = "<div class='replay-controls-view'><button data-hook='reset'><i class='icon-to-start'></i></button><button data-hook='play'><i data-hook='playicon'></i></button><div data-hook='spd'>1x</div><button data-hook='spddn'>-</button><button data-hook='spdup'>+</button><div data-hook='time'>00:00</div><div class='timebar' data-hook='timebar'><div class='barbg'><div class='bar' data-hook='progbar'></div></div><div class='timetooltip' data-hook='timetooltip'></div></div><button data-hook='leave'>Leave</button></div>";
    ma.da = "<div class='simple-dialog-view'><div class='dialog'><h1>Select replay file</h1><div class='file-btn'><label for='replayerfile'>Load</label><input id='replayerfile' type='file' accept='.hbr2' data-hook='file'/></div></div></div>";
    la.da = "<div class='room-view'><div class='container'><h1 data-hook='room-name'></h1><div class='header-btns'><button data-hook='rec-btn'><i class='icon-circle'></i>Rec</button><button data-hook='link-btn'><i class='icon-link'></i>Link</button><button data-hook='leave-btn'><i class='icon-logout'></i>Leave</button></div><div class='teams'><div class='tools admin-only'><button data-hook='auto-btn'>Auto</button><button data-hook='rand-btn'>Rand</button><button data-hook='lock-btn'>Lock</button><button data-hook='reset-all-btn'>Reset</button></div><div data-hook='red-list'></div><div data-hook='spec-list'></div><div data-hook='blue-list'></div><div class='spacer admin-only'></div></div><div class='settings'><div><label class='lbl'>Time limit</label><select data-hook='time-limit-sel'></select></div><div><label class='lbl'>Score limit</label><select data-hook='score-limit-sel'></select></div><div><label class='lbl'>Stadium</label><label class='val' data-hook='stadium-name'>testing the stadium name</label><button class='admin-only' data-hook='stadium-pick'>Pick</button></div></div><div class='controls admin-only'><button data-hook='start-btn'><i class='icon-play'></i>Start game</button><button data-hook='stop-btn'><i class='icon-stop'></i>Stop game</button><button data-hook='pause-btn'><i class='icon-pause'></i>Pause</button></div></div></div>";
    R.da = "<div class='dialog settings-view'><h1>Settings</h1><button data-hook='close'>Close</button><div class='tabs'><button data-hook='soundbtn'>Sound</button><button data-hook='videobtn'>Video</button><button data-hook='inputbtn'>Input</button><button data-hook='miscbtn'>Misc</button></div><div data-hook='presskey' tabindex='-1'><div>Press a key</div></div><div class='tabcontents'><div class='section' data-hook='miscsec'><div class='loc' data-hook='loc'></div><div class='loc' data-hook='loc-ovr'></div><button data-hook='loc-ovr-btn'></button></div><div class='section' data-hook='soundsec'><div data-hook=\"tsound-main\">Sounds enabled</div><div data-hook=\"tsound-chat\">Chat sound enabled</div><div data-hook=\"tsound-highlight\">Nick highlight sound enabled</div><div data-hook=\"tsound-crowd\">Crowd sound enabled</div></div><div class='section' data-hook='inputsec'></div><div class='section' data-hook='videosec'><div>Viewport Mode:<select data-hook='viewmode'><option>Dynamic</option><option>Restricted 840x410</option><option>Full 1x Zoom</option><option>Full 1.25x Zoom</option><option>Full 1.5x Zoom</option><option>Full 1.75x Zoom</option><option>Full 2x Zoom</option><option>Full 2.25x Zoom</option><option>Full 2.5x Zoom</option></select></div><div>FPS Limit:<select data-hook='fps'><option>None (Recommended)</option><option>30</option></select></div><div>Resolution Scaling:<select data-hook='resscale'><option>100%</option><option>75%</option><option>50%</option><option>25%</option></select></div><div data-hook=\"tvideo-teamcol\">Custom team colors enabled</div><div data-hook=\"tvideo-showindicators\">Show chat indicators</div><div data-hook=\"tvideo-showavatars\">Show player avatars</div></div></div></div>";
    R.Mg = 0;
    Q.da = "<div class='simple-dialog-view'><div class='dialog basic-dialog'><h1 data-hook='title'></h1><p data-hook='content'></p><div class='buttons' data-hook='buttons'></div></div></div>";
    ka.da = "<div class='stats-view'><p>Ping: <span data-hook='ping'></span></p><p>Max Ping: <span data-hook='max-ping'></span></p><p>Fps: <span data-hook='fps'></span></p><div data-hook='graph'></div></div>";
    ja.da = '<div class=\'unsupported-browser-view\'><div class=\'dialog\'><h1>Unsupported Browser</h1><p>Sorry! Your browser doesn\'t yet implement some features which are required for HaxBall to work.</p><p>The missing features are: <span data-hook=\'features\'></span></p><h2>Recommended browsers:</h2><div><a href="https://www.mozilla.org/firefox/new/"><img src="images/firefox-icon.png"/>Firefox</a></div><div><a href="https://www.google.com/chrome/"><img src="images/chrome-icon.png"/>Chrome</a></div><div><a href="http://www.opera.com/"><img src="images/opera-icon.png"/>Opera</a></div></div></div>';
    n.Lh = {}.toString;
    C.cj()
}
)("undefined" != typeof window ? window : "undefined" != typeof global ? global : "undefined" != typeof self ? self : this);
