(function(e) {
  function t(t) {
    for (
      var n, o, c = t[0], i = t[1], l = t[2], s = 0, f = [];
      s < c.length;
      s++
    )
      (o = c[s]),
        Object.prototype.hasOwnProperty.call(a, o) && a[o] && f.push(a[o][0]),
        (a[o] = 0);
    for (n in i) Object.prototype.hasOwnProperty.call(i, n) && (e[n] = i[n]);
    p && p(t);
    while (f.length) f.shift()();
    return u.push.apply(u, l || []), r();
  }
  function r() {
    for (var e, t = 0; t < u.length; t++) {
      for (var r = u[t], n = !0, o = 1; o < r.length; o++) {
        var c = r[o];
        0 !== a[c] && (n = !1);
      }
      n && (u.splice(t--, 1), (e = i((i.s = r[0]))));
    }
    return e;
  }
  var n = {},
    o = { app: 0 },
    a = { app: 0 },
    u = [];
  function c(e) {
    return (
      i.p +
      "js/" +
      ({ about: "about" }[e] || e) +
      "." +
      { about: "1a9021b4" }[e] +
      ".js"
    );
  }
  function i(t) {
    if (n[t]) return n[t].exports;
    var r = (n[t] = { i: t, l: !1, exports: {} });
    return e[t].call(r.exports, r, r.exports, i), (r.l = !0), r.exports;
  }
  (i.e = function(e) {
    var t = [],
      r = { about: 1 };
    o[e]
      ? t.push(o[e])
      : 0 !== o[e] &&
        r[e] &&
        t.push(
          (o[e] = new Promise(function(t, r) {
            for (
              var n =
                  "css/" +
                  ({ about: "about" }[e] || e) +
                  "." +
                  { about: "0f96d5b5" }[e] +
                  ".css",
                a = i.p + n,
                u = document.getElementsByTagName("link"),
                c = 0;
              c < u.length;
              c++
            ) {
              var l = u[c],
                s = l.getAttribute("data-href") || l.getAttribute("href");
              if ("stylesheet" === l.rel && (s === n || s === a)) return t();
            }
            var f = document.getElementsByTagName("style");
            for (c = 0; c < f.length; c++) {
              (l = f[c]), (s = l.getAttribute("data-href"));
              if (s === n || s === a) return t();
            }
            var p = document.createElement("link");
            (p.rel = "stylesheet"),
              (p.type = "text/css"),
              (p.onload = t),
              (p.onerror = function(t) {
                var n = (t && t.target && t.target.src) || a,
                  u = new Error(
                    "Loading CSS chunk " + e + " failed.\n(" + n + ")"
                  );
                (u.code = "CSS_CHUNK_LOAD_FAILED"),
                  (u.request = n),
                  delete o[e],
                  p.parentNode.removeChild(p),
                  r(u);
              }),
              (p.href = a);
            var d = document.getElementsByTagName("head")[0];
            d.appendChild(p);
          }).then(function() {
            o[e] = 0;
          }))
        );
    var n = a[e];
    if (0 !== n)
      if (n) t.push(n[2]);
      else {
        var u = new Promise(function(t, r) {
          n = a[e] = [t, r];
        });
        t.push((n[2] = u));
        var l,
          s = document.createElement("script");
        (s.charset = "utf-8"),
          (s.timeout = 120),
          i.nc && s.setAttribute("nonce", i.nc),
          (s.src = c(e));
        var f = new Error();
        l = function(t) {
          (s.onerror = s.onload = null), clearTimeout(p);
          var r = a[e];
          if (0 !== r) {
            if (r) {
              var n = t && ("load" === t.type ? "missing" : t.type),
                o = t && t.target && t.target.src;
              (f.message =
                "Loading chunk " + e + " failed.\n(" + n + ": " + o + ")"),
                (f.name = "ChunkLoadError"),
                (f.type = n),
                (f.request = o),
                r[1](f);
            }
            a[e] = void 0;
          }
        };
        var p = setTimeout(function() {
          l({ type: "timeout", target: s });
        }, 12e4);
        (s.onerror = s.onload = l), document.head.appendChild(s);
      }
    return Promise.all(t);
  }),
    (i.m = e),
    (i.c = n),
    (i.d = function(e, t, r) {
      i.o(e, t) || Object.defineProperty(e, t, { enumerable: !0, get: r });
    }),
    (i.r = function(e) {
      "undefined" !== typeof Symbol &&
        Symbol.toStringTag &&
        Object.defineProperty(e, Symbol.toStringTag, { value: "Module" }),
        Object.defineProperty(e, "__esModule", { value: !0 });
    }),
    (i.t = function(e, t) {
      if ((1 & t && (e = i(e)), 8 & t)) return e;
      if (4 & t && "object" === typeof e && e && e.__esModule) return e;
      var r = Object.create(null);
      if (
        (i.r(r),
        Object.defineProperty(r, "default", { enumerable: !0, value: e }),
        2 & t && "string" != typeof e)
      )
        for (var n in e)
          i.d(
            r,
            n,
            function(t) {
              return e[t];
            }.bind(null, n)
          );
      return r;
    }),
    (i.n = function(e) {
      var t =
        e && e.__esModule
          ? function() {
              return e["default"];
            }
          : function() {
              return e;
            };
      return i.d(t, "a", t), t;
    }),
    (i.o = function(e, t) {
      return Object.prototype.hasOwnProperty.call(e, t);
    }),
    (i.p = "/"),
    (i.oe = function(e) {
      throw (console.error(e), e);
    });
  var l = (window["webpackJsonp"] = window["webpackJsonp"] || []),
    s = l.push.bind(l);
  (l.push = t), (l = l.slice());
  for (var f = 0; f < l.length; f++) t(l[f]);
  var p = s;
  u.push([0, "chunk-vendors"]), r();
})({
  0: function(e, t, r) {
    e.exports = r("56d7");
  },
  "3cb6": function(e, t, r) {
    "use strict";
    r("f308");
  },
  "47e2": function(e, t, r) {},
  "56d7": function(e, t, r) {
    "use strict";
    r.r(t),
      r.d(t, "store", function() {
        return x;
      });
    r("e260"), r("e6cf"), r("cca6"), r("a79d"), r("4de4"), r("159b");
    var n = r("2b0e"),
      o = function() {
        var e = this,
          t = e.$createElement,
          r = e._self._c || t;
        return r("div", { attrs: { id: "app" } }, [r("router-view")], 1);
      },
      a = [],
      u = (r("5c0b"), r("2877")),
      c = {},
      i = Object(u["a"])(c, o, a, !1, null, null, null),
      l = i.exports,
      s = (r("d3b7"), r("3ca3"), r("ddb0"), r("8c4f")),
      f = function() {
        var e = this,
          t = e.$createElement,
          r = e._self._c || t;
        return r(
          "div",
          { staticClass: "home" },
          [
            r("HelloWorld", { attrs: { msg: "Welcome to Your Vue.js App" } }),
            r("h1", [e._v("Jeoparody")]),
            r(
              "div",
              { staticClass: "buttons" },
              [
                r("router-link", { attrs: { to: "/play" } }, [
                  r("button", { staticClass: "play" }, [e._v("Play")])
                ]),
                r("router-link", { attrs: { to: "/create" } }, [
                  r("button", [e._v("Create a Jeoparody")])
                ])
              ],
              1
            )
          ],
          1
        );
      },
      p = [],
      d = function() {
        var e = this,
          t = e.$createElement,
          r = e._self._c || t;
        return r("div", { staticClass: "hello" }, [
          r("h1", [e._v(e._s(e.msg))])
        ]);
      },
      y = [],
      m = { name: "HelloWorld", props: { msg: String } },
      h = m,
      g = (r("3cb6"), Object(u["a"])(h, d, y, !1, null, "6f386918", null)),
      b = g.exports,
      v = { name: "Home", components: { HelloWorld: b } },
      P = v,
      j = (r("d40d"), Object(u["a"])(P, f, p, !1, null, null, null)),
      w = j.exports;
    n["a"].use(s["a"]);
    var _ = [
        { path: "/", name: "Home", component: w },
        {
          path: "/play",
          name: "Play",
          component: function() {
            return r.e("about").then(r.bind(null, "13ce"));
          }
        },
        {
          path: "/create",
          name: "Create",
          component: function() {
            return r.e("about").then(r.bind(null, "68ef"));
          }
        },
        {
          path: "/about",
          name: "About",
          component: function() {
            return r.e("about").then(r.bind(null, "f820"));
          }
        }
      ],
      O = new s["a"]({ routes: _ }),
      C = O,
      E = r("2f62"),
      S = r("0e44");
    n["a"].use(E["a"]);
    var x = new E["a"].Store({
      state: {
        jeoparody: {},
        options: { turnEndsOnWrongAnswer: !1 },
        currentPlayer: 0,
        players: [],
        started: !1,
        grid: []
      },
      plugins: [Object(S["a"])()],
      mutations: {
        setJeoparody: function(e, t) {
          e.jeoparody = t;
        },
        setOption: function(e, t) {
          e.options = t;
        },
        setCurrentPlayer: function(e, t) {
          e.currentPlayer = t;
        },
        addPlayer: function(e, t) {
          e.players.push({ name: t, money: 0 });
        },
        removePlayer: function(e, t) {
          e.players = e.players.filter(function(e) {
            return e !== t;
          });
        },
        nextPlayer: function(e) {
          (e.currentPlayer = e.currentPlayer + 1),
            e.currentPlayer >= e.players.length && (e.currentPlayer = 0),
            console.log(e.currentPlayer);
        },
        addMoney: function(e, t) {
          e.players[e.currentPlayer].money += t;
        },
        setGameState: function(e, t) {
          e.started = t;
        },
        setGrid: function(e, t) {
          e.grid = t;
        },
        reset: function(e) {
          e.players.forEach(function(e) {
            e.money = 0;
          }),
            (e.started = !1);
          for (var t = 0; t < e.grid.length; ++t)
            for (var r = 0; r < e.grid[t].length; ++r) e.grid[t][r] = !1;
          e.jeoparody = {};
        }
      },
      actions: {},
      modules: {},
      getters: {
        getJeoparody: function(e) {
          return e.jeoparody;
        },
        getOptions: function(e) {
          return e.options;
        },
        getCurrentPlayer: function(e) {
          return e.currentPlayer;
        },
        getPlayers: function(e) {
          return e.players;
        },
        getGameState: function(e) {
          return e.started;
        },
        getGrid: function(e) {
          return e.grid;
        }
      }
    });
    (n["a"].config.productionTip = !1),
      new n["a"]({
        router: C,
        store: x,
        render: function(e) {
          return e(l);
        }
      }).$mount("#app");
  },
  "5c0b": function(e, t, r) {
    "use strict";
    r("9c0c");
  },
  "9c0c": function(e, t, r) {},
  d40d: function(e, t, r) {
    "use strict";
    r("47e2");
  },
  f308: function(e, t, r) {}
});
//# sourceMappingURL=app.54fc7534.js.map
