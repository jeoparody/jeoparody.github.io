(function(e){function t(t){for(var r,o,s=t[0],i=t[1],c=t[2],l=0,d=[];l<s.length;l++)o=s[l],Object.prototype.hasOwnProperty.call(a,o)&&a[o]&&d.push(a[o][0]),a[o]=0;for(r in i)Object.prototype.hasOwnProperty.call(i,r)&&(e[r]=i[r]);p&&p(t);while(d.length)d.shift()();return u.push.apply(u,c||[]),n()}function n(){for(var e,t=0;t<u.length;t++){for(var n=u[t],r=!0,o=1;o<n.length;o++){var s=n[o];0!==a[s]&&(r=!1)}r&&(u.splice(t--,1),e=i(i.s=n[0]))}return e}var r={},o={app:0},a={app:0},u=[];function s(e){return i.p+"js/"+({about:"about"}[e]||e)+"."+{about:"9637db1e"}[e]+".js"}function i(t){if(r[t])return r[t].exports;var n=r[t]={i:t,l:!1,exports:{}};return e[t].call(n.exports,n,n.exports,i),n.l=!0,n.exports}i.e=function(e){var t=[],n={about:1};o[e]?t.push(o[e]):0!==o[e]&&n[e]&&t.push(o[e]=new Promise((function(t,n){for(var r="css/"+({about:"about"}[e]||e)+"."+{about:"c688b7bd"}[e]+".css",a=i.p+r,u=document.getElementsByTagName("link"),s=0;s<u.length;s++){var c=u[s],l=c.getAttribute("data-href")||c.getAttribute("href");if("stylesheet"===c.rel&&(l===r||l===a))return t()}var d=document.getElementsByTagName("style");for(s=0;s<d.length;s++){c=d[s],l=c.getAttribute("data-href");if(l===r||l===a)return t()}var p=document.createElement("link");p.rel="stylesheet",p.type="text/css",p.onload=t,p.onerror=function(t){var r=t&&t.target&&t.target.src||a,u=new Error("Loading CSS chunk "+e+" failed.\n("+r+")");u.code="CSS_CHUNK_LOAD_FAILED",u.request=r,delete o[e],p.parentNode.removeChild(p),n(u)},p.href=a;var f=document.getElementsByTagName("head")[0];f.appendChild(p)})).then((function(){o[e]=0})));var r=a[e];if(0!==r)if(r)t.push(r[2]);else{var u=new Promise((function(t,n){r=a[e]=[t,n]}));t.push(r[2]=u);var c,l=document.createElement("script");l.charset="utf-8",l.timeout=120,i.nc&&l.setAttribute("nonce",i.nc),l.src=s(e);var d=new Error;c=function(t){l.onerror=l.onload=null,clearTimeout(p);var n=a[e];if(0!==n){if(n){var r=t&&("load"===t.type?"missing":t.type),o=t&&t.target&&t.target.src;d.message="Loading chunk "+e+" failed.\n("+r+": "+o+")",d.name="ChunkLoadError",d.type=r,d.request=o,n[1](d)}a[e]=void 0}};var p=setTimeout((function(){c({type:"timeout",target:l})}),12e4);l.onerror=l.onload=c,document.head.appendChild(l)}return Promise.all(t)},i.m=e,i.c=r,i.d=function(e,t,n){i.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:n})},i.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},i.t=function(e,t){if(1&t&&(e=i(e)),8&t)return e;if(4&t&&"object"===typeof e&&e&&e.__esModule)return e;var n=Object.create(null);if(i.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var r in e)i.d(n,r,function(t){return e[t]}.bind(null,r));return n},i.n=function(e){var t=e&&e.__esModule?function(){return e["default"]}:function(){return e};return i.d(t,"a",t),t},i.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},i.p="/",i.oe=function(e){throw console.error(e),e};var c=window["webpackJsonp"]=window["webpackJsonp"]||[],l=c.push.bind(c);c.push=t,c=c.slice();for(var d=0;d<c.length;d++)t(c[d]);var p=l;u.push([0,"chunk-vendors"]),n()})({0:function(e,t,n){e.exports=n("56d7")},"458f":function(e,t,n){},"56d7":function(e,t,n){"use strict";n.r(t),n.d(t,"store",(function(){return P}));n("e260"),n("e6cf"),n("cca6"),n("a79d"),n("4de4"),n("159b");var r=n("2b0e"),o=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{attrs:{id:"app"}},[n("router-view")],1)},a=[],u=(n("5c0b"),n("2877")),s={},i=Object(u["a"])(s,o,a,!1,null,null,null),c=i.exports,l=(n("d3b7"),n("3ca3"),n("ddb0"),n("8c4f")),d=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",[n("div",{staticClass:"home"},[n("h1",[e._v("Jeoparody")]),n("div",{staticClass:"buttons"},[n("router-link",{attrs:{to:"/play"}},[n("button",{staticClass:"play"},[e._v("Play")])]),n("router-link",{attrs:{to:"/create"}},[n("button",[e._v("Create a Jeoparody")])])],1),n("h2",[e._v("Here's how it works")]),n("p",[e._v(" Creating a Jeoparody will result in a .json file which you should keep somewhere on your computer. Once it's time to play, upload that file in the lobby and share your screen with your friends. ")]),n("p",[e._v(" You shouldnt have to worry about loosing your progress as it is safed on your computer (not somewhere else) and remains even if you reload or close the page (Just be careful when deleting website data in your browser). ")]),n("p",[e._v("You can always download your created Jeoparody and continue editing it later.")]),n("p",[e._v("Have fun!")])]),e._m(0)])},p=[function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"patch"},[n("span",{staticClass:"patch-number"},[e._v("Version 21w11a")]),n("a",{staticClass:"link",attrs:{href:"https://github.com/jeoparody/jeoparody.github.io/blob/development/patchnotes.md",target:"_blank"}},[e._v("Read Patchnotes")])])}],f={name:"Home",components:{}},y=f,h=(n("d40d"),Object(u["a"])(y,d,p,!1,null,null,null)),m=h.exports;r["a"].use(l["a"]);var g=[{path:"/",name:"Home",component:m},{path:"/play",name:"Play",component:function(){return n.e("about").then(n.bind(null,"13ce"))}},{path:"/create",name:"Create",component:function(){return n.e("about").then(n.bind(null,"68ef"))}},{path:"/about",name:"About",component:function(){return n.e("about").then(n.bind(null,"f820"))}}],b=new l["a"]({routes:g}),v=b,w=n("2f62"),C=n("0e44");r["a"].use(w["a"]);var P=new w["a"].Store({state:{jeoparody:{},createJeoparody:{},activeCell:[0,0],options:{everybodyCanAnswer:!1,turnEndsOnWrongAnswer:!1,underdogAdjustment:!0},currentPlayer:0,players:[],started:!1,grid:[]},plugins:[Object(C["a"])()],mutations:{setJeoparody:function(e,t){e.jeoparody=t},setCreateJeoparody:function(e,t){e.createJeoparody=t},setActiveCell:function(e,t){e.activeCell=t},setOptions:function(e,t){switch(t){case"everybodyCanAnswer":e.options.everybodyCanAnswer=!e.options.everybodyCanAnswer;break;case"turnEndsOnWrongAnswer":e.options.turnEndsOnWrongAnswer=!e.options.turnEndsOnWrongAnswer;break;case"underdogAdjustment":e.options.underdogAdjustment=!e.options.underdogAdjustment;break}e.options.everybodyCanAnswer&&(e.options.turnEndsOnWrongAnswer=!1,e.options.underdogAdjustment=!1),e.options.turnEndsOnWrongAnswer&&(e.options.underdogAdjustment=!1)},setCurrentPlayer:function(e,t){e.currentPlayer=t},addPlayer:function(e,t){e.players.push({name:t,money:0,answers:0})},removePlayer:function(e,t){e.players=e.players.filter((function(e){return e!==t}))},nextPlayer:function(e){e.players[e.currentPlayer].answers+=1,e.currentPlayer=e.currentPlayer+1,e.currentPlayer>=e.players.length&&(e.currentPlayer=0),console.log(e.currentPlayer)},addMoney:function(e,t){e.players[e.currentPlayer].money+=t},setGameState:function(e,t){e.started=t},setGrid:function(e,t){e.grid=t},reset:function(e){e.players.forEach((function(e){e.money=0,e.answers=0})),e.started=!1;for(var t=0;t<e.grid.length;++t)for(var n=0;n<e.grid[t].length;++n)e.grid[t][n]=!1;e.jeoparody={}}},actions:{},modules:{},getters:{getJeoparody:function(e){return e.jeoparody},getCreateJeoparody:function(e){return e.createJeoparody},getActiveCell:function(e){return e.activeCell},getOptions:function(e){return e.options},getCurrentPlayer:function(e){return e.currentPlayer},getLeadingPlayer:function(e){var t=e.players[0];return e.players.forEach((function(e){e.money>t.money&&(t=e)})),t},getPlayers:function(e){return e.players},getGameState:function(e){return e.started},getGrid:function(e){return e.grid}}});r["a"].config.productionTip=!1,new r["a"]({router:v,store:P,render:function(e){return e(c)}}).$mount("#app")},"5c0b":function(e,t,n){"use strict";n("458f")},"6d38":function(e,t,n){},d40d:function(e,t,n){"use strict";n("6d38")}});
//# sourceMappingURL=app.387a0e1b.js.map