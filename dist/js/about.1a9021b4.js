(window["webpackJsonp"] = window["webpackJsonp"] || []).push([
  ["about"],
  {
    "057f": function(t, e, r) {
      var n = r("fc6a"),
        i = r("241c").f,
        o = {}.toString,
        a =
          "object" == typeof window && window && Object.getOwnPropertyNames
            ? Object.getOwnPropertyNames(window)
            : [],
        s = function(t) {
          try {
            return i(t);
          } catch (e) {
            return a.slice();
          }
        };
      t.exports.f = function(t) {
        return a && "[object Window]" == o.call(t) ? s(t) : i(n(t));
      };
    },
    "07b8": function(t, e, r) {},
    1276: function(t, e, r) {
      "use strict";
      var n = r("d784"),
        i = r("44e7"),
        o = r("825a"),
        a = r("1d80"),
        s = r("4840"),
        c = r("8aa5"),
        u = r("50c4"),
        l = r("14c3"),
        d = r("9263"),
        f = r("d039"),
        p = [].push,
        h = Math.min,
        v = 4294967295,
        g = !f(function() {
          return !RegExp(v, "y");
        });
      n(
        "split",
        2,
        function(t, e, r) {
          var n;
          return (
            (n =
              "c" == "abbc".split(/(b)*/)[1] ||
              4 != "test".split(/(?:)/, -1).length ||
              2 != "ab".split(/(?:ab)*/).length ||
              4 != ".".split(/(.?)(.?)/).length ||
              ".".split(/()()/).length > 1 ||
              "".split(/.?/).length
                ? function(t, r) {
                    var n = String(a(this)),
                      o = void 0 === r ? v : r >>> 0;
                    if (0 === o) return [];
                    if (void 0 === t) return [n];
                    if (!i(t)) return e.call(n, t, o);
                    var s,
                      c,
                      u,
                      l = [],
                      f =
                        (t.ignoreCase ? "i" : "") +
                        (t.multiline ? "m" : "") +
                        (t.unicode ? "u" : "") +
                        (t.sticky ? "y" : ""),
                      h = 0,
                      g = new RegExp(t.source, f + "g");
                    while ((s = d.call(g, n))) {
                      if (
                        ((c = g.lastIndex),
                        c > h &&
                          (l.push(n.slice(h, s.index)),
                          s.length > 1 &&
                            s.index < n.length &&
                            p.apply(l, s.slice(1)),
                          (u = s[0].length),
                          (h = c),
                          l.length >= o))
                      )
                        break;
                      g.lastIndex === s.index && g.lastIndex++;
                    }
                    return (
                      h === n.length
                        ? (!u && g.test("")) || l.push("")
                        : l.push(n.slice(h)),
                      l.length > o ? l.slice(0, o) : l
                    );
                  }
                : "0".split(void 0, 0).length
                ? function(t, r) {
                    return void 0 === t && 0 === r ? [] : e.call(this, t, r);
                  }
                : e),
            [
              function(e, r) {
                var i = a(this),
                  o = void 0 == e ? void 0 : e[t];
                return void 0 !== o ? o.call(e, i, r) : n.call(String(i), e, r);
              },
              function(t, i) {
                var a = r(n, t, this, i, n !== e);
                if (a.done) return a.value;
                var d = o(t),
                  f = String(this),
                  p = s(d, RegExp),
                  y = d.unicode,
                  A =
                    (d.ignoreCase ? "i" : "") +
                    (d.multiline ? "m" : "") +
                    (d.unicode ? "u" : "") +
                    (g ? "y" : "g"),
                  m = new p(g ? d : "^(?:" + d.source + ")", A),
                  b = void 0 === i ? v : i >>> 0;
                if (0 === b) return [];
                if (0 === f.length) return null === l(m, f) ? [f] : [];
                var w = 0,
                  C = 0,
                  P = [];
                while (C < f.length) {
                  m.lastIndex = g ? C : 0;
                  var x,
                    E = l(m, g ? f : f.slice(C));
                  if (
                    null === E ||
                    (x = h(u(m.lastIndex + (g ? 0 : C)), f.length)) === w
                  )
                    C = c(f, C, y);
                  else {
                    if ((P.push(f.slice(w, C)), P.length === b)) return P;
                    for (var I = 1; I <= E.length - 1; I++)
                      if ((P.push(E[I]), P.length === b)) return P;
                    C = w = x;
                  }
                }
                return P.push(f.slice(w)), P;
              }
            ]
          );
        },
        !g
      );
    },
    "13ce": function(t, e, r) {
      "use strict";
      r.r(e);
      var n = function() {
          var t = this,
            e = t.$createElement,
            n = t._self._c || e;
          return n("div", { attrs: { id: "play" } }, [
            t.started
              ? t._e()
              : n("div", { staticClass: "lobby" }, [
                  n("h1", [t._v("Create Game")]),
                  n("div", { staticClass: "config" }, [
                    n("div", { staticClass: "players" }, [
                      n("h2", [t._v("Players")]),
                      n(
                        "div",
                        { staticClass: "player-list" },
                        t._l(t.players, function(e, i) {
                          return n("p", { key: e + i, staticClass: "player" }, [
                            t._v(" " + t._s(e.name) + " "),
                            n(
                              "button",
                              {
                                on: {
                                  click: function(e) {
                                    return t.removePlayer(i);
                                  }
                                }
                              },
                              [n("img", { attrs: { src: r("471b") } })]
                            )
                          ]);
                        }),
                        0
                      ),
                      t.addPlayerActive
                        ? n("div", { staticClass: "add-player" }, [
                            n("input", {
                              directives: [
                                {
                                  name: "model",
                                  rawName: "v-model",
                                  value: t.addPlayerInput,
                                  expression: "addPlayerInput"
                                }
                              ],
                              ref: "playerInput",
                              attrs: { type: "text" },
                              domProps: { value: t.addPlayerInput },
                              on: {
                                keyup: function(e) {
                                  return !e.type.indexOf("key") &&
                                    t._k(e.keyCode, "enter", 13, e.key, "Enter")
                                    ? null
                                    : t.addPlayer();
                                },
                                input: function(e) {
                                  e.target.composing ||
                                    (t.addPlayerInput = e.target.value);
                                }
                              }
                            }),
                            n(
                              "button",
                              {
                                on: {
                                  click: function(e) {
                                    return t.addPlayer();
                                  }
                                }
                              },
                              [n("img", { attrs: { src: r("f0c8") } })]
                            )
                          ])
                        : t._e(),
                      t.addPlayerActive
                        ? t._e()
                        : n(
                            "button",
                            {
                              staticClass: "add-player-button",
                              on: {
                                click: function(e) {
                                  return t.activatePlayerInput();
                                }
                              }
                            },
                            [t._v(" Add a player ")]
                          )
                    ]),
                    n("div", { staticClass: "settings" }, [
                      n("h2", [t._v("Settings")]),
                      n(
                        "label",
                        { staticClass: "file-label", attrs: { for: "file" } },
                        [
                          0 !== Object.keys(t.json).length
                            ? n("span", [
                                t._v('"' + t._s(t.json.title) + '" uploaded')
                              ])
                            : t._e(),
                          0 === Object.keys(t.json).length
                            ? n("span", [t._v("Upload your jeoparody file")])
                            : t._e()
                        ]
                      ),
                      n("input", {
                        ref: "fileInput",
                        staticClass: "file-picker",
                        attrs: { type: "file", name: "file", id: "file" },
                        on: {
                          change: function(e) {
                            return t.previewFiles();
                          }
                        }
                      }),
                      n("div", { staticClass: "options" }, [
                        n("p", [
                          t._v(" Turn only ends after wrong answer"),
                          t.options.turnEndsOnWrongAnswer
                            ? n("img", {
                                attrs: { src: r("f0c8") },
                                on: {
                                  click: function(e) {
                                    return t.changeOption(
                                      "turnEndsOnWrongAnswer"
                                    );
                                  }
                                }
                              })
                            : n("img", {
                                attrs: { src: r("471b") },
                                on: {
                                  click: function(e) {
                                    return t.changeOption(
                                      "turnEndsOnWrongAnswer"
                                    );
                                  }
                                }
                              })
                        ]),
                        t._m(0)
                      ]),
                      n(
                        "button",
                        {
                          staticClass: "start-button",
                          attrs: { disabled: 0 === Object.keys(t.json).length },
                          on: {
                            click: function(e) {
                              return t.start();
                            }
                          }
                        },
                        [t._v("START")]
                      )
                    ])
                  ])
                ]),
            t.started
              ? n(
                  "div",
                  { staticClass: "board" },
                  [
                    n(
                      "table",
                      [
                        n(
                          "tr",
                          t._l(t.json.categories, function(e, r) {
                            return n("th", { key: e + r }, [
                              t._v(" " + t._s(e.name) + " ")
                            ]);
                          }),
                          0
                        ),
                        t._l(t.json.prizes, function(e, r) {
                          return n(
                            "tr",
                            { key: e + r },
                            t._l(t.json.categories, function(i, o) {
                              return n(
                                "td",
                                {
                                  key: i + o,
                                  class: { completed: t.getGrid[o][r] },
                                  on: {
                                    click: function(n) {
                                      return t.$refs.modalName.openModal(
                                        i,
                                        o,
                                        r,
                                        e
                                      );
                                    }
                                  }
                                },
                                [t._v(" $" + t._s(e) + " ")]
                              );
                            }),
                            0
                          );
                        })
                      ],
                      2
                    ),
                    n(
                      "div",
                      { staticClass: "player-box" },
                      t._l(t.players, function(e, r) {
                        return n(
                          "div",
                          {
                            key: e.name,
                            class: [
                              t.getCurrentPlayer == r ? "active" : "",
                              "player"
                            ],
                            on: {
                              click: function(e) {
                                return t.changePlayer(r);
                              }
                            }
                          },
                          [
                            n("h1", [t._v(t._s(e.name))]),
                            n(
                              "button",
                              {
                                staticClass: "add",
                                on: {
                                  click: function(t) {
                                    e.money += 100;
                                  }
                                }
                              },
                              [t._v("+")]
                            ),
                            n("input", {
                              directives: [
                                {
                                  name: "model",
                                  rawName: "v-model.number",
                                  value: e.money,
                                  expression: "player.money",
                                  modifiers: { number: !0 }
                                }
                              ],
                              attrs: { type: "number" },
                              domProps: { value: e.money },
                              on: {
                                input: function(r) {
                                  r.target.composing ||
                                    t.$set(e, "money", t._n(r.target.value));
                                },
                                blur: function(e) {
                                  return t.$forceUpdate();
                                }
                              }
                            }),
                            n(
                              "button",
                              {
                                staticClass: "subtract",
                                on: {
                                  click: function(t) {
                                    e.money -= 100;
                                  }
                                }
                              },
                              [t._v(" - ")]
                            )
                          ]
                        );
                      }),
                      0
                    ),
                    n(
                      "button",
                      {
                        staticClass: "quit",
                        on: {
                          click: function(e) {
                            return t.quit();
                          }
                        }
                      },
                      [t._v("Quit")]
                    ),
                    n("modal", {
                      ref: "modalName",
                      scopedSlots: t._u(
                        [
                          {
                            key: "footer",
                            fn: function() {
                              return [n("div")];
                            },
                            proxy: !0
                          }
                        ],
                        null,
                        !1,
                        3545152822
                      )
                    })
                  ],
                  1
                )
              : t._e()
          ]);
        },
        i = [
          function() {
            var t = this,
              e = t.$createElement,
              n = t._self._c || e;
            return n("p", { staticClass: "wip" }, [
              t._v("Daily Double"),
              n("img", { attrs: { src: r("f0c8") } })
            ]);
          }
        ],
        o =
          (r("caad"),
          r("2532"),
          function() {
            var t = this,
              e = t.$createElement,
              n = t._self._c || e;
            return n("transition", { attrs: { name: "fade" } }, [
              t.show
                ? n("div", { staticClass: "modal" }, [
                    n("div", {
                      staticClass: "modal__backdrop",
                      on: {
                        click: function(e) {
                          return t.closeModal();
                        }
                      }
                    }),
                    n("div", { staticClass: "modal__dialog" }, [
                      n("div", { staticClass: "modal__header" }, [
                        n("h1", [
                          t._v(t._s(t.data.name) + " - $" + t._s(t.prize))
                        ]),
                        n(
                          "button",
                          {
                            staticClass: "modal__close",
                            attrs: { type: "button" },
                            on: {
                              click: function(e) {
                                return t.closeModal();
                              }
                            }
                          },
                          [
                            n(
                              "svg",
                              {
                                attrs: {
                                  xmlns: "http://www.w3.org/2000/svg",
                                  viewBox: "0 0 352 512"
                                }
                              },
                              [
                                n("path", {
                                  attrs: {
                                    fill: "#ffffff",
                                    d:
                                      "M242.72 256l100.07-100.07c12.28-12.28 12.28-32.19 0-44.48l-22.24-22.24c-12.28-12.28-32.19-12.28-44.48 0L176 189.28 75.93 89.21c-12.28-12.28-32.19-12.28-44.48 0L9.21 111.45c-12.28 12.28-12.28 32.19 0 44.48L109.28 256 9.21 356.07c-12.28 12.28-12.28 32.19 0 44.48l22.24 22.24c12.28 12.28 32.2 12.28 44.48 0L176 322.72l100.07 100.07c12.28 12.28 32.2 12.28 44.48 0l22.24-22.24c12.28-12.28 12.28-32.19 0-44.48L242.72 256z"
                                  }
                                })
                              ]
                            )
                          ]
                        )
                      ]),
                      n(
                        "div",
                        { staticClass: "modal__body" },
                        [
                          t._t("body"),
                          n("p", {
                            domProps: {
                              innerHTML: t._s(t.data.questions[t.row].question)
                            }
                          }),
                          t.revealed
                            ? t._e()
                            : n(
                                "button",
                                {
                                  staticClass: "reveal",
                                  on: {
                                    click: function(e) {
                                      t.revealed = !0;
                                    }
                                  }
                                },
                                [t._v(" Reveal Answer ")]
                              ),
                          t.revealed
                            ? n("p", { staticClass: "answer" }, [
                                t._v(t._s(t.data.questions[t.row].answer))
                              ])
                            : t._e()
                        ],
                        2
                      ),
                      n(
                        "div",
                        { staticClass: "modal__footer" },
                        [
                          t.revealed
                            ? n("div", { staticClass: "result" }, [
                                n("p", [t._v("Was the answer correct?")]),
                                n(
                                  "button",
                                  {
                                    staticClass: "right",
                                    on: {
                                      click: function(e) {
                                        return t.rightAnswer();
                                      }
                                    }
                                  },
                                  [n("img", { attrs: { src: r("f0c8") } })]
                                ),
                                n(
                                  "button",
                                  {
                                    staticClass: "wrong",
                                    on: {
                                      click: function(e) {
                                        return t.wrongAnswer();
                                      }
                                    }
                                  },
                                  [n("img", { attrs: { src: r("471b") } })]
                                )
                              ])
                            : t._e(),
                          t._t("footer")
                        ],
                        2
                      )
                    ])
                  ])
                : t._e()
            ]);
          }),
        a = [],
        s = {
          name: "Modal",
          data: function() {
            return {
              show: !1,
              data: {},
              index: 0,
              row: 0,
              prize: 0,
              revealed: !1
            };
          },
          methods: {
            closeModal: function() {
              (this.show = !1),
                (this.revealed = !1),
                document
                  .querySelector("body")
                  .classList.remove("overflow-hidden");
            },
            rightAnswer: function() {
              this.$store.commit("addMoney", this.prize),
                (this.show = !1),
                (this.revealed = !1);
              var t = this.$store.getters.getGrid;
              (t[this.index][this.row] = !0),
                this.$store.commit("setGrid", t),
                document
                  .querySelector("body")
                  .classList.remove("overflow-hidden");
            },
            wrongAnswer: function() {
              this.$store.commit("nextPlayer"),
                (this.show = !1),
                (this.revealed = !1);
              var t = this.$store.getters.getGrid;
              (t[this.index][this.row] = !0),
                this.$store.commit("setGrid", t),
                document
                  .querySelector("body")
                  .classList.remove("overflow-hidden");
            },
            openModal: function(t, e, r, n) {
              (this.data = t),
                (this.index = e),
                (this.row = r),
                (this.prize = n),
                (this.show = !0),
                document.querySelector("body").classList.add("overflow-hidden");
            }
          }
        },
        c = s,
        u = (r("7cb6"), r("2877")),
        l = Object(u["a"])(c, o, a, !1, null, "073b2464", null),
        d = l.exports,
        f = {
          name: "Play",
          components: { Modal: d },
          data: function() {
            return {
              img: { check: "@/assets/check.png", wrong: "@/assets/wrong.png" },
              json: {},
              players: [
                { name: "Julain", money: 0 },
                { name: "Mias", money: 0 },
                { name: "Joël", money: 0 },
                { name: "Miro", money: 0 }
              ],
              currentPlayer: 0,
              addPlayerActive: !1,
              addPlayerInput: "",
              started: !1,
              grid: [],
              options: {}
            };
          },
          mounted: function() {
            (this.json = this.$store.getters.getJeoparody),
              (this.options = this.$store.getters.getOptions),
              (this.currentPlayer = this.$store.getters.getCurrentPlayer),
              (this.players = this.$store.getters.getPlayers),
              (this.started = this.$store.getters.getGameState),
              (this.grid = this.$store.getters.getGrid);
          },
          computed: {
            getGrid: function() {
              return this.$store.getters.getGrid;
            },
            getCurrentPlayer: function() {
              return this.$store.getters.getCurrentPlayer;
            }
          },
          methods: {
            activatePlayerInput: function() {
              var t = this;
              (this.addPlayerActive = !0),
                this.$nextTick(function() {
                  return t.$refs.playerInput.focus();
                });
            },
            previewFiles: function() {
              var t = this,
                e = this.$refs.fileInput.files[0],
                r = new FileReader();
              r.readAsText(e, "JSON"),
                (r.onload = function(e) {
                  t.$store.commit("setJeoparody", JSON.parse(e.target.result));
                }),
                (r.onerror = function(t) {
                  console.error(t);
                }),
                (this.json = this.$store.getters.getJeoparody),
                console.log(this.json),
                this.$router.go();
            },
            addPlayer: function() {
              this.$store.getters.getPlayers.includes(this.addPlayerInput) ||
                this.$store.commit("addPlayer", this.addPlayerInput),
                (this.addPlayerActive = !1),
                (this.addPlayerInput = ""),
                (this.players = this.$store.getters.getPlayers),
                console.log(this.players);
            },
            removePlayer: function(t) {
              this.$store.commit("removePlayer", this.players[t]),
                (this.players = this.$store.getters.getPlayers);
            },
            start: function() {
              console.log(this.json),
                this.shufflePlayers(),
                this.$store.commit("setCurrentPlayer", 0),
                (this.currentPlayer = this.$store.getters.getCurrentPlayer),
                (this.started = !0),
                this.$store.commit("setGameState", !0);
              for (var t = this.json.categories.length - 1; t >= 0; t--) {
                for (var e = [], r = this.json.prizes.length - 1; r >= 0; r--)
                  e.push(!1);
                this.grid.push(e);
              }
              this.$store.commit("setGrid", this.grid), console.log(this.json);
            },
            shufflePlayers: function() {
              for (var t = this.players.length - 1; t > 0; t--) {
                var e = Math.floor(Math.random() * (t + 1)),
                  r = this.players[t];
                (this.players[t] = this.players[e]), (this.players[e] = r);
              }
            },
            changePlayer: function(t) {
              this.$store.commit("setCurrentPlayer", t),
                (this.currentPlayer = this.$store.getters.getCurrentPlayer);
            },
            changeOption: function(t) {
              switch (t) {
                case "turnEndsOnWrongAnswer":
                  this.options.turnEndsOnWrongAnswer = !this.options
                    .turnEndsOnWrongAnswer;
                  break;
              }
              this.$store.commit("setOption", this.options);
            },
            quit: function() {
              this.$store.commit("reset"),
                (this.started = this.$store.getters.getGameState),
                this.$router.go();
            }
          }
        },
        p = f,
        h = (r("c1aa"), Object(u["a"])(p, n, i, !1, null, null, null));
      e["default"] = h.exports;
    },
    "14c3": function(t, e, r) {
      var n = r("c6b6"),
        i = r("9263");
      t.exports = function(t, e) {
        var r = t.exec;
        if ("function" === typeof r) {
          var o = r.call(t, e);
          if ("object" !== typeof o)
            throw TypeError(
              "RegExp exec method returned something other than an Object or null"
            );
          return o;
        }
        if ("RegExp" !== n(t))
          throw TypeError("RegExp#exec called on incompatible receiver");
        return i.call(t, e);
      };
    },
    2532: function(t, e, r) {
      "use strict";
      var n = r("23e7"),
        i = r("5a34"),
        o = r("1d80"),
        a = r("ab13");
      n(
        { target: "String", proto: !0, forced: !a("includes") },
        {
          includes: function(t) {
            return !!~String(o(this)).indexOf(
              i(t),
              arguments.length > 1 ? arguments[1] : void 0
            );
          }
        }
      );
    },
    "421a": function(t, e, r) {},
    "44e7": function(t, e, r) {
      var n = r("861d"),
        i = r("c6b6"),
        o = r("b622"),
        a = o("match");
      t.exports = function(t) {
        var e;
        return n(t) && (void 0 !== (e = t[a]) ? !!e : "RegExp" == i(t));
      };
    },
    "471b": function(t, e) {
      t.exports =
        "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAIAAAACACAQAAABpN6lAAAAABGdBTUEAALGPC/xhBQAAACBjSFJNAAB6JgAAgIQAAPoAAACA6AAAdTAAAOpgAAA6mAAAF3CculE8AAAAAmJLR0QAAKqNIzIAAAAJcEhZcwAADsQAAA7EAZUrDhsAAAAHdElNRQflAwgWKjq5hbj2AAAE1klEQVR42u2dTW9UZRTH//fuyrCiTWg0upMUSvgQjRvSIQ00fAHakoALEOQ7iMrKRIMmfAeFEhaWBSmDLoAWImFDVBqSGsUUMy2bdv4uhqEdO2/33vN2jWfdc+79/Z7zzE1m7umTYFdwDz7EJI7gHezHOlaxggXMJ09QquA4JjGB9zCKCn7HCzzCPBaSjX5pI7zCdXaKJR7zhhoYforLHRnW+TlHuqelvMS/2StqPOQN1xd+nPd6MrziRSadEvdynv1jndPeiD3xT3JjAIobrOzGrw2QSJKbnPXG7Io/y60BKWptCpgOtPqt2IqpIAM+SV7fsRH4SYbEoAoy4pPkx63UEb7KmEo2eNYbuQ3/VGZ8co3DzeQrmVODKciFT5KXAbDS5bnfP4JshBzN34o6h8CpnMlBuiD36jdjErxaIN29CwqsfjO+An8qVMC1CwquPknWwN8KlnBTIIBP/gK+LlzEZSMUbv5mbIAvBcqYd4HI6pPkH+DPIoVMFYjhk49SrAjdVYIvbTYCZ/EtUqFiKykWxO4sxTf6XcBTuCqGD/wAHhJqJpONINj8zTgAgEuiJbc4p4Y/J4x/v1n2mGhRtS4QX33yaKv0XeHCCl0gvvrkne3iH/T5MjR7CHcBZ8Tx6xzbeYFpbgpfQLALFFZ/k8f1HQspUMDf4kynC8l/yAhsBIWFafBMt4uFU2CKH0+BOX4sBS74cRS44cdQ4Irvr8Ad31dBCHw/BWHwfRSEwrdXEA7fVkFIfDsFYfFtFITG11cQHl9XQSnw9RSUBh8Q+0Gy/WYbwhV1f6hV6AJpoVqrXwoF+vihFdjgh1Vghx9SgS1+OAX2+KEU+OCHUeCHH0KBL767An98VwUx8N0UBHhR21NBLHxzBfHwTRXExDdTEBffREFsfHUF8fFVFZQDX02BEr7ce9c7IyleosSh8EV3mbaAGn45FKjix1egjh9bgQl+XAVm+DEVmOLHU2COH0uBC34cBW74MRS44vsrcMf3VRAC309BGHwfBaHw7RWEw7dVEBLfTkFYfBsF7j+H+ypQGWINOrBrs/oNnvGfUHPFV6ssrUAPvxQKdPHDK9DHD63ABj+sAjv8kAps8cMpsMcPpcAHP4wCP/wQCnzx3RX447sqiIHvpiAOvouCWPjmCuLhmypQGIsVGmI1uTOejIqvpGCz7awUjuf+F/vdQniaQ2Ej1Hlwu/y94vXaQmGCW6ELFlulp4QLK83yKHTBZLPwcvFKO0Jxfl+8Cx4A4GHRksqTXOJdMJaiKnl/+Cj5WlNAcg1zaAgWrIK3xGwanTIguhFugk+EShmOMQpuhMfgX2XDF1Xw5/9HbPDXwkWcZnhFuuAZ+GM58YUULKZYKnQPDZzWffD1iuQaThd8KC4XO10gwAB7wS44Cu4p/WFr+d9aqnMIAL8o6+q/VZC3Cz5tpg/nOnAxDH5uBWvc10q/kDE1SPO3Kci+Ec5tJ6e8Xm78HAq+azt9mJX/xLG7MwMfFFLbffJwZaAuqPOEN2ZPBdOsD0Dx/S58AGDCC1zrmbjYdjJLyOBBLvZkWON5dh/u5jA/6+Lw4Ztv0EoQrPJhl/69/PaT/010cMEhTKCKI3gXo6hjFc9xGzeSp95YGSWMoYoJvI9R7MUqXmAZ87idvP733/0DV+41KpIxpSEAAAAldEVYdGRhdGU6Y3JlYXRlADIwMjEtMDMtMDhUMjI6NDI6NTgrMDA6MDCF4ImOAAAAJXRFWHRkYXRlOm1vZGlmeQAyMDIxLTAzLTA4VDIyOjQyOjU4KzAwOjAw9L0xMgAAABl0RVh0U29mdHdhcmUAd3d3Lmlua3NjYXBlLm9yZ5vuPBoAAAAASUVORK5CYII=";
    },
    "4df4": function(t, e, r) {
      "use strict";
      var n = r("0366"),
        i = r("7b0b"),
        o = r("9bdd"),
        a = r("e95a"),
        s = r("50c4"),
        c = r("8418"),
        u = r("35a1");
      t.exports = function(t) {
        var e,
          r,
          l,
          d,
          f,
          p,
          h = i(t),
          v = "function" == typeof this ? this : Array,
          g = arguments.length,
          y = g > 1 ? arguments[1] : void 0,
          A = void 0 !== y,
          m = u(h),
          b = 0;
        if (
          (A && (y = n(y, g > 2 ? arguments[2] : void 0, 2)),
          void 0 == m || (v == Array && a(m)))
        )
          for (e = s(h.length), r = new v(e); e > b; b++)
            (p = A ? y(h[b], b) : h[b]), c(r, b, p);
        else
          for (
            d = m.call(h), f = d.next, r = new v();
            !(l = f.call(d)).done;
            b++
          )
            (p = A ? o(d, y, [l.value, b], !0) : l.value), c(r, b, p);
        return (r.length = b), r;
      };
    },
    "4fad": function(t, e, r) {
      var n = r("23e7"),
        i = r("6f53").entries;
      n(
        { target: "Object", stat: !0 },
        {
          entries: function(t) {
            return i(t);
          }
        }
      );
    },
    "5a34": function(t, e, r) {
      var n = r("44e7");
      t.exports = function(t) {
        if (n(t))
          throw TypeError("The method doesn't accept regular expressions");
        return t;
      };
    },
    "68ef": function(t, e, r) {
      "use strict";
      r.r(e);
      var n = function() {
          var t = this,
            e = t.$createElement,
            n = t._self._c || e;
          return n(
            "div",
            { ref: "form", staticClass: "form" },
            [
              n("h1", [t._v("Create a Jeoparody")]),
              n("span", [t._v("Give your Jeoparody a title")]),
              n("br"),
              n("input", {
                directives: [
                  {
                    name: "model",
                    rawName: "v-model",
                    value: t.jeoparody.title,
                    expression: "jeoparody.title"
                  }
                ],
                attrs: { type: "text" },
                domProps: { value: t.jeoparody.title },
                on: {
                  input: function(e) {
                    e.target.composing ||
                      t.$set(t.jeoparody, "title", e.target.value);
                  }
                }
              }),
              n("h2", [t._v("Categoriez and Prizepool")]),
              n("div", { staticClass: "config" }, [
                n("div", { staticClass: "categories" }, [
                  n("h2", [t._v("Categories")]),
                  n(
                    "div",
                    { staticClass: "list" },
                    t._l(t.categories, function(e, i) {
                      return n("p", { key: e + i, staticClass: "element" }, [
                        t._v(" " + t._s(e)),
                        n(
                          "button",
                          {
                            on: {
                              click: function(e) {
                                return t.removeCategory(i);
                              }
                            }
                          },
                          [n("img", { attrs: { src: r("471b") } })]
                        )
                      ]);
                    }),
                    0
                  ),
                  t.addCategoryActive
                    ? n("div", { staticClass: "add" }, [
                        n("input", {
                          directives: [
                            {
                              name: "model",
                              rawName: "v-model",
                              value: t.addCategoryInput,
                              expression: "addCategoryInput"
                            }
                          ],
                          ref: "categoryInput",
                          attrs: { type: "text" },
                          domProps: { value: t.addCategoryInput },
                          on: {
                            keyup: function(e) {
                              return !e.type.indexOf("key") &&
                                t._k(e.keyCode, "enter", 13, e.key, "Enter")
                                ? null
                                : t.addCategory();
                            },
                            input: function(e) {
                              e.target.composing ||
                                (t.addCategoryInput = e.target.value);
                            }
                          }
                        }),
                        n(
                          "button",
                          {
                            on: {
                              click: function(e) {
                                return t.addCategory();
                              }
                            }
                          },
                          [n("img", { attrs: { src: r("f0c8") } })]
                        )
                      ])
                    : t._e(),
                  t.addCategoryActive
                    ? t._e()
                    : n(
                        "button",
                        {
                          staticClass: "add-button",
                          on: {
                            click: function(e) {
                              return t.activateCategoryInput();
                            }
                          }
                        },
                        [t._v("Add a category")]
                      )
                ]),
                n("div", { staticClass: "prizes" }, [
                  n("h2", [t._v("Prizes")]),
                  n(
                    "div",
                    { staticClass: "list" },
                    t._l(t.prizes, function(e, i) {
                      return n("p", { key: e + i, staticClass: "element" }, [
                        t._v(" $" + t._s(e)),
                        n(
                          "button",
                          {
                            on: {
                              click: function(e) {
                                return t.removePrize(i);
                              }
                            }
                          },
                          [n("img", { attrs: { src: r("471b") } })]
                        )
                      ]);
                    }),
                    0
                  ),
                  t.addPrizeActive
                    ? n("div", { staticClass: "add" }, [
                        n("input", {
                          directives: [
                            {
                              name: "model",
                              rawName: "v-model",
                              value: t.addPrizeInput,
                              expression: "addPrizeInput"
                            }
                          ],
                          ref: "prizeInput",
                          attrs: { type: "number" },
                          domProps: { value: t.addPrizeInput },
                          on: {
                            keyup: function(e) {
                              return !e.type.indexOf("key") &&
                                t._k(e.keyCode, "enter", 13, e.key, "Enter")
                                ? null
                                : t.addPrize();
                            },
                            input: function(e) {
                              e.target.composing ||
                                (t.addPrizeInput = e.target.value);
                            }
                          }
                        }),
                        n(
                          "button",
                          {
                            on: {
                              click: function(e) {
                                return t.addPrize();
                              }
                            }
                          },
                          [n("img", { attrs: { src: r("f0c8") } })]
                        )
                      ])
                    : t._e(),
                  t.addPrizeActive
                    ? t._e()
                    : n(
                        "button",
                        {
                          staticClass: "add-button",
                          on: {
                            click: function(e) {
                              return t.activatePrizeInput();
                            }
                          }
                        },
                        [t._v("Add a prize")]
                      )
                ])
              ]),
              t._l(t.categories, function(e, r) {
                return n(
                  "div",
                  { key: e },
                  [
                    n("h2", [t._v(t._s(e))]),
                    t._l(t.prizes, function(e, i) {
                      return n("div", { key: e }, [
                        n("h3", [t._v("$" + t._s(e) + " Question")]),
                        n("span", [t._v("Question")]),
                        n("br"),
                        n("input", {
                          attrs: { type: "text", name: "q/" + r + "/" + i }
                        }),
                        n("br"),
                        n("span", [t._v("Answer")]),
                        n("br"),
                        n("input", {
                          attrs: { type: "text", name: "a/" + r + "/" + i }
                        })
                      ]);
                    })
                  ],
                  2
                );
              }),
              n(
                "button",
                {
                  on: {
                    click: function(e) {
                      return t.saveFile();
                    }
                  }
                },
                [t._v("Save")]
              ),
              n("button", { attrs: { type: "submit" } }, [t._v("Submit")])
            ],
            2
          );
        },
        i = [];
      r("a4d3"),
        r("e01a"),
        r("d3b7"),
        r("d28b"),
        r("3ca3"),
        r("ddb0"),
        r("fb6a"),
        r("b0c0"),
        r("a630");
      function o(t, e) {
        (null == e || e > t.length) && (e = t.length);
        for (var r = 0, n = new Array(e); r < e; r++) n[r] = t[r];
        return n;
      }
      function a(t, e) {
        if (t) {
          if ("string" === typeof t) return o(t, e);
          var r = Object.prototype.toString.call(t).slice(8, -1);
          return (
            "Object" === r && t.constructor && (r = t.constructor.name),
            "Map" === r || "Set" === r
              ? Array.from(t)
              : "Arguments" === r ||
                /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r)
              ? o(t, e)
              : void 0
          );
        }
      }
      function s(t, e) {
        var r;
        if ("undefined" === typeof Symbol || null == t[Symbol.iterator]) {
          if (
            Array.isArray(t) ||
            (r = a(t)) ||
            (e && t && "number" === typeof t.length)
          ) {
            r && (t = r);
            var n = 0,
              i = function() {};
            return {
              s: i,
              n: function() {
                return n >= t.length
                  ? { done: !0 }
                  : { done: !1, value: t[n++] };
              },
              e: function(t) {
                throw t;
              },
              f: i
            };
          }
          throw new TypeError(
            "Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."
          );
        }
        var o,
          s = !0,
          c = !1;
        return {
          s: function() {
            r = t[Symbol.iterator]();
          },
          n: function() {
            var t = r.next();
            return (s = t.done), t;
          },
          e: function(t) {
            (c = !0), (o = t);
          },
          f: function() {
            try {
              s || null == r["return"] || r["return"]();
            } finally {
              if (c) throw o;
            }
          }
        };
      }
      function c(t) {
        if (Array.isArray(t)) return t;
      }
      function u(t, e) {
        if ("undefined" !== typeof Symbol && Symbol.iterator in Object(t)) {
          var r = [],
            n = !0,
            i = !1,
            o = void 0;
          try {
            for (
              var a, s = t[Symbol.iterator]();
              !(n = (a = s.next()).done);
              n = !0
            )
              if ((r.push(a.value), e && r.length === e)) break;
          } catch (c) {
            (i = !0), (o = c);
          } finally {
            try {
              n || null == s["return"] || s["return"]();
            } finally {
              if (i) throw o;
            }
          }
          return r;
        }
      }
      function l() {
        throw new TypeError(
          "Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."
        );
      }
      function d(t, e) {
        return c(t) || u(t, e) || a(t, e) || l();
      }
      r("caad"), r("2532"), r("4de4"), r("4fad"), r("1276"), r("ac1f");
      var f = {
          name: "Create",
          components: {},
          data: function() {
            return {
              categories: ["Test", "Test2"],
              addCategoryActive: !1,
              addCategoryInput: "",
              prizes: [100, 200, 300, 400, 500],
              addPrizeActive: !1,
              addPrizeInput: 0,
              jeoparody: { title: "", categories: [], prizes: {} }
            };
          },
          methods: {
            activateCategoryInput: function() {
              var t = this;
              (this.addCategoryActive = !0),
                this.$nextTick(function() {
                  return t.$refs.categoryInput.focus();
                });
            },
            activatePrizeInput: function() {
              var t = this;
              (this.addPrizeActive = !0),
                this.$nextTick(function() {
                  return t.$refs.prizeInput.focus();
                });
            },
            addCategory: function() {
              this.categories.includes(this.addCategoryInput) ||
                this.categories.push(this.addCategoryInput),
                (this.addCategoryActive = !1),
                (this.addCategoryInput = "");
            },
            removeCategory: function(t) {
              console.log(1);
              var e = this.categories[t];
              this.categories = this.categories.filter(function(t) {
                return t !== e;
              });
            },
            addPrize: function() {
              this.prizes.includes(this.addPrizeInput) ||
                this.prizes.push(this.addPrizeInput),
                (this.addPrizeActive = !1),
                (this.addPrizeInput = 0);
            },
            removePrize: function(t) {
              var e = this.prizes[t];
              this.prizes = this.prizes.filter(function(t) {
                return t !== e;
              });
            },
            saveFile: function(t) {
              for (var e = 0; e < this.categories.length; e++) {
                var r = { name: this.categories[e] };
                this.jeoparody.categories.push(r),
                  (this.jeoparody.categories[e].questions = []);
                for (var n = 0; n < this.prizes.length; n++) {
                  var i = { question: "why", answer: "because" };
                  this.jeoparody.categories[e].questions.push(i);
                }
              }
              this.jeoparody.prizes = this.prizes;
              for (
                var o = [], a = 0, s = Object.entries(t);
                a < s.length;
                a++
              ) {
                var c = d(s[a], 2),
                  u = c[0],
                  l = c[1];
                (o = u.split("/")),
                  "q" == o[0] &&
                    (this.jeoparody.categories[o[1]].questions[
                      o[2]
                    ].question = l),
                  "a" == o[0] &&
                    (this.jeoparody.categories[o[1]].questions[
                      o[2]
                    ].answer = l);
              }
              console.log(3, this.jeoparody);
              var f = JSON.stringify(this.jeoparody);
              this.download(this.jeoparody.title + ".json", f);
            },
            download: function(t, e) {
              var r = document.createElement("a");
              r.setAttribute(
                "href",
                "data:text/plain;charset=utf-8," + encodeURIComponent(e)
              ),
                r.setAttribute("download", t),
                (r.style.display = "none"),
                document.body.appendChild(r),
                r.click(),
                document.body.removeChild(r);
            },
            form_m: function() {
              var t,
                e = this,
                r = new FormData(e.$refs.form),
                n = {},
                i = s(r.entries());
              try {
                for (i.s(); !(t = i.n()).done; ) {
                  var o = d(t.value, 2),
                    a = o[0],
                    c = o[1];
                  n[a] = c;
                }
              } catch (u) {
                i.e(u);
              } finally {
                i.f();
              }
              console.log(n), this.saveFile(n);
            }
          }
        },
        p = f,
        h = (r("bd1e"), r("2877")),
        v = Object(h["a"])(p, n, i, !1, null, null, null);
      e["default"] = v.exports;
    },
    "6f53": function(t, e, r) {
      var n = r("83ab"),
        i = r("df75"),
        o = r("fc6a"),
        a = r("d1e7").f,
        s = function(t) {
          return function(e) {
            var r,
              s = o(e),
              c = i(s),
              u = c.length,
              l = 0,
              d = [];
            while (u > l)
              (r = c[l++]),
                (n && !a.call(s, r)) || d.push(t ? [r, s[r]] : s[r]);
            return d;
          };
        };
      t.exports = { entries: s(!0), values: s(!1) };
    },
    "746f": function(t, e, r) {
      var n = r("428f"),
        i = r("5135"),
        o = r("e538"),
        a = r("9bf2").f;
      t.exports = function(t) {
        var e = n.Symbol || (n.Symbol = {});
        i(e, t) || a(e, t, { value: o.f(t) });
      };
    },
    7719: function(t, e, r) {},
    "7cb6": function(t, e, r) {
      "use strict";
      r("07b8");
    },
    8418: function(t, e, r) {
      "use strict";
      var n = r("c04e"),
        i = r("9bf2"),
        o = r("5c6c");
      t.exports = function(t, e, r) {
        var a = n(e);
        a in t ? i.f(t, a, o(0, r)) : (t[a] = r);
      };
    },
    "8aa5": function(t, e, r) {
      "use strict";
      var n = r("6547").charAt;
      t.exports = function(t, e, r) {
        return e + (r ? n(t, e).length : 1);
      };
    },
    9263: function(t, e, r) {
      "use strict";
      var n = r("ad6d"),
        i = r("9f7f"),
        o = RegExp.prototype.exec,
        a = String.prototype.replace,
        s = o,
        c = (function() {
          var t = /a/,
            e = /b*/g;
          return (
            o.call(t, "a"),
            o.call(e, "a"),
            0 !== t.lastIndex || 0 !== e.lastIndex
          );
        })(),
        u = i.UNSUPPORTED_Y || i.BROKEN_CARET,
        l = void 0 !== /()??/.exec("")[1],
        d = c || l || u;
      d &&
        (s = function(t) {
          var e,
            r,
            i,
            s,
            d = this,
            f = u && d.sticky,
            p = n.call(d),
            h = d.source,
            v = 0,
            g = t;
          return (
            f &&
              ((p = p.replace("y", "")),
              -1 === p.indexOf("g") && (p += "g"),
              (g = String(t).slice(d.lastIndex)),
              d.lastIndex > 0 &&
                (!d.multiline ||
                  (d.multiline && "\n" !== t[d.lastIndex - 1])) &&
                ((h = "(?: " + h + ")"), (g = " " + g), v++),
              (r = new RegExp("^(?:" + h + ")", p))),
            l && (r = new RegExp("^" + h + "$(?!\\s)", p)),
            c && (e = d.lastIndex),
            (i = o.call(f ? r : d, g)),
            f
              ? i
                ? ((i.input = i.input.slice(v)),
                  (i[0] = i[0].slice(v)),
                  (i.index = d.lastIndex),
                  (d.lastIndex += i[0].length))
                : (d.lastIndex = 0)
              : c && i && (d.lastIndex = d.global ? i.index + i[0].length : e),
            l &&
              i &&
              i.length > 1 &&
              a.call(i[0], r, function() {
                for (s = 1; s < arguments.length - 2; s++)
                  void 0 === arguments[s] && (i[s] = void 0);
              }),
            i
          );
        }),
        (t.exports = s);
    },
    "9bdd": function(t, e, r) {
      var n = r("825a"),
        i = r("2a62");
      t.exports = function(t, e, r, o) {
        try {
          return o ? e(n(r)[0], r[1]) : e(r);
        } catch (a) {
          throw (i(t), a);
        }
      };
    },
    "9f7f": function(t, e, r) {
      "use strict";
      var n = r("d039");
      function i(t, e) {
        return RegExp(t, e);
      }
      (e.UNSUPPORTED_Y = n(function() {
        var t = i("a", "y");
        return (t.lastIndex = 2), null != t.exec("abcd");
      })),
        (e.BROKEN_CARET = n(function() {
          var t = i("^r", "gy");
          return (t.lastIndex = 2), null != t.exec("str");
        }));
    },
    a4d3: function(t, e, r) {
      "use strict";
      var n = r("23e7"),
        i = r("da84"),
        o = r("d066"),
        a = r("c430"),
        s = r("83ab"),
        c = r("4930"),
        u = r("fdbf"),
        l = r("d039"),
        d = r("5135"),
        f = r("e8b5"),
        p = r("861d"),
        h = r("825a"),
        v = r("7b0b"),
        g = r("fc6a"),
        y = r("c04e"),
        A = r("5c6c"),
        m = r("7c73"),
        b = r("df75"),
        w = r("241c"),
        C = r("057f"),
        P = r("7418"),
        x = r("06cf"),
        E = r("9bf2"),
        I = r("d1e7"),
        j = r("9112"),
        _ = r("6eeb"),
        S = r("5692"),
        O = r("f772"),
        k = r("d012"),
        R = r("90e3"),
        B = r("b622"),
        z = r("e538"),
        M = r("746f"),
        F = r("d44e"),
        U = r("69f3"),
        D = r("b727").forEach,
        T = O("hidden"),
        Q = "Symbol",
        G = "prototype",
        q = B("toPrimitive"),
        J = U.set,
        K = U.getterFor(Q),
        $ = Object[G],
        H = i.Symbol,
        N = o("JSON", "stringify"),
        V = x.f,
        L = E.f,
        W = C.f,
        X = I.f,
        Z = S("symbols"),
        Y = S("op-symbols"),
        tt = S("string-to-symbol-registry"),
        et = S("symbol-to-string-registry"),
        rt = S("wks"),
        nt = i.QObject,
        it = !nt || !nt[G] || !nt[G].findChild,
        ot =
          s &&
          l(function() {
            return (
              7 !=
              m(
                L({}, "a", {
                  get: function() {
                    return L(this, "a", { value: 7 }).a;
                  }
                })
              ).a
            );
          })
            ? function(t, e, r) {
                var n = V($, e);
                n && delete $[e], L(t, e, r), n && t !== $ && L($, e, n);
              }
            : L,
        at = function(t, e) {
          var r = (Z[t] = m(H[G]));
          return (
            J(r, { type: Q, tag: t, description: e }),
            s || (r.description = e),
            r
          );
        },
        st = u
          ? function(t) {
              return "symbol" == typeof t;
            }
          : function(t) {
              return Object(t) instanceof H;
            },
        ct = function(t, e, r) {
          t === $ && ct(Y, e, r), h(t);
          var n = y(e, !0);
          return (
            h(r),
            d(Z, n)
              ? (r.enumerable
                  ? (d(t, T) && t[T][n] && (t[T][n] = !1),
                    (r = m(r, { enumerable: A(0, !1) })))
                  : (d(t, T) || L(t, T, A(1, {})), (t[T][n] = !0)),
                ot(t, n, r))
              : L(t, n, r)
          );
        },
        ut = function(t, e) {
          h(t);
          var r = g(e),
            n = b(r).concat(ht(r));
          return (
            D(n, function(e) {
              (s && !dt.call(r, e)) || ct(t, e, r[e]);
            }),
            t
          );
        },
        lt = function(t, e) {
          return void 0 === e ? m(t) : ut(m(t), e);
        },
        dt = function(t) {
          var e = y(t, !0),
            r = X.call(this, e);
          return (
            !(this === $ && d(Z, e) && !d(Y, e)) &&
            (!(r || !d(this, e) || !d(Z, e) || (d(this, T) && this[T][e])) || r)
          );
        },
        ft = function(t, e) {
          var r = g(t),
            n = y(e, !0);
          if (r !== $ || !d(Z, n) || d(Y, n)) {
            var i = V(r, n);
            return (
              !i || !d(Z, n) || (d(r, T) && r[T][n]) || (i.enumerable = !0), i
            );
          }
        },
        pt = function(t) {
          var e = W(g(t)),
            r = [];
          return (
            D(e, function(t) {
              d(Z, t) || d(k, t) || r.push(t);
            }),
            r
          );
        },
        ht = function(t) {
          var e = t === $,
            r = W(e ? Y : g(t)),
            n = [];
          return (
            D(r, function(t) {
              !d(Z, t) || (e && !d($, t)) || n.push(Z[t]);
            }),
            n
          );
        };
      if (
        (c ||
          ((H = function() {
            if (this instanceof H)
              throw TypeError("Symbol is not a constructor");
            var t =
                arguments.length && void 0 !== arguments[0]
                  ? String(arguments[0])
                  : void 0,
              e = R(t),
              r = function(t) {
                this === $ && r.call(Y, t),
                  d(this, T) && d(this[T], e) && (this[T][e] = !1),
                  ot(this, e, A(1, t));
              };
            return s && it && ot($, e, { configurable: !0, set: r }), at(e, t);
          }),
          _(H[G], "toString", function() {
            return K(this).tag;
          }),
          _(H, "withoutSetter", function(t) {
            return at(R(t), t);
          }),
          (I.f = dt),
          (E.f = ct),
          (x.f = ft),
          (w.f = C.f = pt),
          (P.f = ht),
          (z.f = function(t) {
            return at(B(t), t);
          }),
          s &&
            (L(H[G], "description", {
              configurable: !0,
              get: function() {
                return K(this).description;
              }
            }),
            a || _($, "propertyIsEnumerable", dt, { unsafe: !0 }))),
        n({ global: !0, wrap: !0, forced: !c, sham: !c }, { Symbol: H }),
        D(b(rt), function(t) {
          M(t);
        }),
        n(
          { target: Q, stat: !0, forced: !c },
          {
            for: function(t) {
              var e = String(t);
              if (d(tt, e)) return tt[e];
              var r = H(e);
              return (tt[e] = r), (et[r] = e), r;
            },
            keyFor: function(t) {
              if (!st(t)) throw TypeError(t + " is not a symbol");
              if (d(et, t)) return et[t];
            },
            useSetter: function() {
              it = !0;
            },
            useSimple: function() {
              it = !1;
            }
          }
        ),
        n(
          { target: "Object", stat: !0, forced: !c, sham: !s },
          {
            create: lt,
            defineProperty: ct,
            defineProperties: ut,
            getOwnPropertyDescriptor: ft
          }
        ),
        n(
          { target: "Object", stat: !0, forced: !c },
          { getOwnPropertyNames: pt, getOwnPropertySymbols: ht }
        ),
        n(
          {
            target: "Object",
            stat: !0,
            forced: l(function() {
              P.f(1);
            })
          },
          {
            getOwnPropertySymbols: function(t) {
              return P.f(v(t));
            }
          }
        ),
        N)
      ) {
        var vt =
          !c ||
          l(function() {
            var t = H();
            return (
              "[null]" != N([t]) || "{}" != N({ a: t }) || "{}" != N(Object(t))
            );
          });
        n(
          { target: "JSON", stat: !0, forced: vt },
          {
            stringify: function(t, e, r) {
              var n,
                i = [t],
                o = 1;
              while (arguments.length > o) i.push(arguments[o++]);
              if (((n = e), (p(e) || void 0 !== t) && !st(t)))
                return (
                  f(e) ||
                    (e = function(t, e) {
                      if (
                        ("function" == typeof n && (e = n.call(this, t, e)),
                        !st(e))
                      )
                        return e;
                    }),
                  (i[1] = e),
                  N.apply(null, i)
                );
            }
          }
        );
      }
      H[G][q] || j(H[G], q, H[G].valueOf), F(H, Q), (k[T] = !0);
    },
    a630: function(t, e, r) {
      var n = r("23e7"),
        i = r("4df4"),
        o = r("1c7e"),
        a = !o(function(t) {
          Array.from(t);
        });
      n({ target: "Array", stat: !0, forced: a }, { from: i });
    },
    ab13: function(t, e, r) {
      var n = r("b622"),
        i = n("match");
      t.exports = function(t) {
        var e = /./;
        try {
          "/./"[t](e);
        } catch (r) {
          try {
            return (e[i] = !1), "/./"[t](e);
          } catch (n) {}
        }
        return !1;
      };
    },
    ac1f: function(t, e, r) {
      "use strict";
      var n = r("23e7"),
        i = r("9263");
      n({ target: "RegExp", proto: !0, forced: /./.exec !== i }, { exec: i });
    },
    ad6d: function(t, e, r) {
      "use strict";
      var n = r("825a");
      t.exports = function() {
        var t = n(this),
          e = "";
        return (
          t.global && (e += "g"),
          t.ignoreCase && (e += "i"),
          t.multiline && (e += "m"),
          t.dotAll && (e += "s"),
          t.unicode && (e += "u"),
          t.sticky && (e += "y"),
          e
        );
      };
    },
    b0c0: function(t, e, r) {
      var n = r("83ab"),
        i = r("9bf2").f,
        o = Function.prototype,
        a = o.toString,
        s = /^\s*function ([^ (]*)/,
        c = "name";
      n &&
        !(c in o) &&
        i(o, c, {
          configurable: !0,
          get: function() {
            try {
              return a.call(this).match(s)[1];
            } catch (t) {
              return "";
            }
          }
        });
    },
    bd1e: function(t, e, r) {
      "use strict";
      r("7719");
    },
    c1aa: function(t, e, r) {
      "use strict";
      r("421a");
    },
    caad: function(t, e, r) {
      "use strict";
      var n = r("23e7"),
        i = r("4d64").includes,
        o = r("44d2");
      n(
        { target: "Array", proto: !0 },
        {
          includes: function(t) {
            return i(this, t, arguments.length > 1 ? arguments[1] : void 0);
          }
        }
      ),
        o("includes");
    },
    d28b: function(t, e, r) {
      var n = r("746f");
      n("iterator");
    },
    d784: function(t, e, r) {
      "use strict";
      r("ac1f");
      var n = r("6eeb"),
        i = r("d039"),
        o = r("b622"),
        a = r("9263"),
        s = r("9112"),
        c = o("species"),
        u = !i(function() {
          var t = /./;
          return (
            (t.exec = function() {
              var t = [];
              return (t.groups = { a: "7" }), t;
            }),
            "7" !== "".replace(t, "$<a>")
          );
        }),
        l = (function() {
          return "$0" === "a".replace(/./, "$0");
        })(),
        d = o("replace"),
        f = (function() {
          return !!/./[d] && "" === /./[d]("a", "$0");
        })(),
        p = !i(function() {
          var t = /(?:)/,
            e = t.exec;
          t.exec = function() {
            return e.apply(this, arguments);
          };
          var r = "ab".split(t);
          return 2 !== r.length || "a" !== r[0] || "b" !== r[1];
        });
      t.exports = function(t, e, r, d) {
        var h = o(t),
          v = !i(function() {
            var e = {};
            return (
              (e[h] = function() {
                return 7;
              }),
              7 != ""[t](e)
            );
          }),
          g =
            v &&
            !i(function() {
              var e = !1,
                r = /a/;
              return (
                "split" === t &&
                  ((r = {}),
                  (r.constructor = {}),
                  (r.constructor[c] = function() {
                    return r;
                  }),
                  (r.flags = ""),
                  (r[h] = /./[h])),
                (r.exec = function() {
                  return (e = !0), null;
                }),
                r[h](""),
                !e
              );
            });
        if (
          !v ||
          !g ||
          ("replace" === t && (!u || !l || f)) ||
          ("split" === t && !p)
        ) {
          var y = /./[h],
            A = r(
              h,
              ""[t],
              function(t, e, r, n, i) {
                return e.exec === a
                  ? v && !i
                    ? { done: !0, value: y.call(e, r, n) }
                    : { done: !0, value: t.call(r, e, n) }
                  : { done: !1 };
              },
              {
                REPLACE_KEEPS_$0: l,
                REGEXP_REPLACE_SUBSTITUTES_UNDEFINED_CAPTURE: f
              }
            ),
            m = A[0],
            b = A[1];
          n(String.prototype, t, m),
            n(
              RegExp.prototype,
              h,
              2 == e
                ? function(t, e) {
                    return b.call(t, this, e);
                  }
                : function(t) {
                    return b.call(t, this);
                  }
            );
        }
        d && s(RegExp.prototype[h], "sham", !0);
      };
    },
    e01a: function(t, e, r) {
      "use strict";
      var n = r("23e7"),
        i = r("83ab"),
        o = r("da84"),
        a = r("5135"),
        s = r("861d"),
        c = r("9bf2").f,
        u = r("e893"),
        l = o.Symbol;
      if (
        i &&
        "function" == typeof l &&
        (!("description" in l.prototype) || void 0 !== l().description)
      ) {
        var d = {},
          f = function() {
            var t =
                arguments.length < 1 || void 0 === arguments[0]
                  ? void 0
                  : String(arguments[0]),
              e = this instanceof f ? new l(t) : void 0 === t ? l() : l(t);
            return "" === t && (d[e] = !0), e;
          };
        u(f, l);
        var p = (f.prototype = l.prototype);
        p.constructor = f;
        var h = p.toString,
          v = "Symbol(test)" == String(l("test")),
          g = /^Symbol\((.*)\)[^)]+$/;
        c(p, "description", {
          configurable: !0,
          get: function() {
            var t = s(this) ? this.valueOf() : this,
              e = h.call(t);
            if (a(d, t)) return "";
            var r = v ? e.slice(7, -1) : e.replace(g, "$1");
            return "" === r ? void 0 : r;
          }
        }),
          n({ global: !0, forced: !0 }, { Symbol: f });
      }
    },
    e538: function(t, e, r) {
      var n = r("b622");
      e.f = n;
    },
    f0c8: function(t, e) {
      t.exports =
        "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAIAAAACACAQAAABpN6lAAAAABGdBTUEAALGPC/xhBQAAACBjSFJNAAB6JgAAgIQAAPoAAACA6AAAdTAAAOpgAAA6mAAAF3CculE8AAAAAmJLR0QAAKqNIzIAAAAJcEhZcwAADsQAAA7EAZUrDhsAAAAHdElNRQflAwgWJg2tjVL1AAADeUlEQVR42u2cv2tTURiG3xgSKigKRUo7SAZ/IYKukix1E/0DdPIfcBBEnBxcpODgooMugoOKiyJiXKQdxUEQlRYHXWoowUVtkEqa1yGplpj03nvuOec75/o9e8/5nvf77r25yaGAoiiKoiiKoiiKoijKf0ZJugC3sIo6DmEKE1hBCwultnRFPuWP8iG/cTPrfMVzLEtX5kN+kve5ztF84Kx0fa71D3KJW9HlZekaXeo3+J3JXJWu05V+PZU+2eMZ6Vpd6Df4I5U+Sa5yWrpe2/ppu7/BTemK7epn6X6fNU4V5pnIOprYmfGPylgsSABs4EVmfQDoFiIAo+4PKEAAefQL4G9w69vMT+n68+pnffAN83mbtEIufdNb319aEQfAOp5jR85F5qUtcujnHP4+x6U9TPXz3fo2eMs4rwBL3SdPS5uY6dvpPvlU2sRM31b3l7hL2sVE31b3v3CftIuJvq3ur/CwtIvqq77qq77qq77qq764/j8HJFjDKZzADGbQQRuLaOJlqSOg30Az99cdANDCbOlj2k2P8NGIBFc5x92e9f0PPyu8xd7Yhb7ypEd9e688B9JuOcmFhMW6vFRc/Uqifp/rHvQl7vy8k3rZa471/XcfYCPT0g6nQOi5z/mMyzuKQEr/mMEWDi4EkeEHAF4x2sbyFAh+6M18ATiYArHuAwA/GW9naQqEX3nYybGlhSkQ7T4ADB0n9jwFAbzwJpyqdRpBAPoAn+Xe3vBCEB/+QRnnLZRgMAVBdB8AWBt7rj4LGacgkO4PinlgpZQMUxBM9wfl7OcvK+WknIKguj8o6YKVglJNQWDd/1PWXUsRJExBgN0fFFbhY0sRbDEFgXbfVwRB67uPIHh9txFEoe8ugmj03UQQlb79CKLTBwBW+cRSBPcCfe57nAIbSPy+H1AEUscbAolA8nRHABFIH24RjkBaXziCEPQFIwhFXyiCkPQFIghN33MEIep7jCBUfU8RhKzvIYLQ9R1HEIO+wwhi0XcUQUz6DiKITd9yBDHqW4wgVn1LEcSsbyGC2PVzRlAE/RwRFEXfMIIi6RtEUDT9jBEUUR8AWE0VwbLnH7m8RlDmXIL+G+6VrtJ1CGe5PEZ+jTc4IV2fjwi28yLfDcm3eZs16cpG4eyfq7OGOqaxBx208B6vSz1pVUVRFEVRFEVRFEVRFAUA8Bunrr8jOW9KagAAACV0RVh0ZGF0ZTpjcmVhdGUAMjAyMS0wMy0wOFQyMjozODoxMyswMDowMD20VsQAAAAldEVYdGRhdGU6bW9kaWZ5ADIwMjEtMDMtMDhUMjI6Mzg6MTMrMDA6MDBM6e54AAAAGXRFWHRTb2Z0d2FyZQB3d3cuaW5rc2NhcGUub3Jnm+48GgAAAABJRU5ErkJggg==";
    },
    f820: function(t, e, r) {
      "use strict";
      r.r(e);
      var n = function() {
          var t = this,
            e = t.$createElement;
          t._self._c;
          return t._m(0);
        },
        i = [
          function() {
            var t = this,
              e = t.$createElement,
              r = t._self._c || e;
            return r("div", { staticClass: "about" }, [
              r("h1", [t._v("This is an about page")])
            ]);
          }
        ],
        o = r("2877"),
        a = {},
        s = Object(o["a"])(a, n, i, !1, null, null, null);
      e["default"] = s.exports;
    },
    fb6a: function(t, e, r) {
      "use strict";
      var n = r("23e7"),
        i = r("861d"),
        o = r("e8b5"),
        a = r("23cb"),
        s = r("50c4"),
        c = r("fc6a"),
        u = r("8418"),
        l = r("b622"),
        d = r("1dde"),
        f = d("slice"),
        p = l("species"),
        h = [].slice,
        v = Math.max;
      n(
        { target: "Array", proto: !0, forced: !f },
        {
          slice: function(t, e) {
            var r,
              n,
              l,
              d = c(this),
              f = s(d.length),
              g = a(t, f),
              y = a(void 0 === e ? f : e, f);
            if (
              o(d) &&
              ((r = d.constructor),
              "function" != typeof r || (r !== Array && !o(r.prototype))
                ? i(r) && ((r = r[p]), null === r && (r = void 0))
                : (r = void 0),
              r === Array || void 0 === r)
            )
              return h.call(d, g, y);
            for (
              n = new (void 0 === r ? Array : r)(v(y - g, 0)), l = 0;
              g < y;
              g++, l++
            )
              g in d && u(n, l, d[g]);
            return (n.length = l), n;
          }
        }
      );
    }
  }
]);
//# sourceMappingURL=about.1a9021b4.js.map
