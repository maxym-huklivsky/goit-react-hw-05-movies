"use strict";(self.webpackChunkreact_homework_template=self.webpackChunkreact_homework_template||[]).push([[910],{657:function(r,t,n){n.d(t,{dS:function(){return l},sL:function(){return h},Mv:function(){return d},Vb:function(){return f},Id:function(){return p}});var e=n(683),a=n(861),u=n(687),c=n.n(u),i=n(912),s=function(){return Promise.reject(new Error("\u041e\u0439! \u0427\u0442\u043e \u0442\u043e \u043f\u043e\u0448\u043b\u043e \u043d\u0435 \u0442\u0430\u043a. \u041f\u043e\u043f\u0440\u043e\u0431\u0443\u0439\u0442\u0435 \u043f\u0435\u0440\u0435\u0437\u0430\u043f\u0443\u0441\u0442\u0438\u0442\u044c \u0441\u0442\u0440\u0430\u043d\u0438\u0446\u0443"))},o={api_key:"13311e11047b48cfd8c9963a1d63772d",language:"en-US"};i.Z.defaults.baseURL="https://api.themoviedb.org/3";var p=function(){var r=(0,a.Z)(c().mark((function r(){var t;return c().wrap((function(r){for(;;)switch(r.prev=r.next){case 0:return r.prev=0,r.next=3,i.Z.get("/trending/all/day",{params:o});case 3:return t=r.sent,r.abrupt("return",t.data.results);case 7:return r.prev=7,r.t0=r.catch(0),r.abrupt("return",s());case 10:case"end":return r.stop()}}),r,null,[[0,7]])})));return function(){return r.apply(this,arguments)}}(),h=function(){var r=(0,a.Z)(c().mark((function r(t){var n;return c().wrap((function(r){for(;;)switch(r.prev=r.next){case 0:return r.prev=0,r.next=3,i.Z.get("/movie/".concat(t),{params:o});case 3:return n=r.sent,r.abrupt("return",n.data);case 7:return r.prev=7,r.t0=r.catch(0),r.abrupt("return",s());case 10:case"end":return r.stop()}}),r,null,[[0,7]])})));return function(t){return r.apply(this,arguments)}}(),f=function(){var r=(0,a.Z)(c().mark((function r(t){var n;return c().wrap((function(r){for(;;)switch(r.prev=r.next){case 0:return r.prev=0,r.next=3,i.Z.get("/search/movie",{params:(0,e.Z)((0,e.Z)({},o),{},{query:t})});case 3:return n=r.sent,r.abrupt("return",n.data.results);case 7:return r.prev=7,r.t0=r.catch(0),r.abrupt("return",s());case 10:case"end":return r.stop()}}),r,null,[[0,7]])})));return function(t){return r.apply(this,arguments)}}(),l=function(){var r=(0,a.Z)(c().mark((function r(t){var n;return c().wrap((function(r){for(;;)switch(r.prev=r.next){case 0:return r.prev=0,r.next=3,i.Z.get("/movie/".concat(t,"/credits"),{params:o});case 3:return n=r.sent,r.abrupt("return",n.data.cast);case 7:return r.prev=7,r.t0=r.catch(0),r.abrupt("return",s());case 10:case"end":return r.stop()}}),r,null,[[0,7]])})));return function(t){return r.apply(this,arguments)}}(),d=function(){var r=(0,a.Z)(c().mark((function r(t){var n;return c().wrap((function(r){for(;;)switch(r.prev=r.next){case 0:return r.prev=0,r.next=3,i.Z.get("/movie/".concat(t,"/reviews"),{params:o});case 3:return n=r.sent,r.abrupt("return",n.data.results);case 7:return r.prev=7,r.t0=r.catch(0),r.abrupt("return",s());case 10:case"end":return r.stop()}}),r,null,[[0,7]])})));return function(t){return r.apply(this,arguments)}}()},910:function(r,t,n){n.r(t);var e=n(439),a=n(657),u=n(128),c=n(791),i=n(689),s=n(777),o=n(226),p=n(184);t.default=function(){var r=(0,i.UO)().movieId,t=(0,c.useState)(null),n=(0,e.Z)(t,2),h=n[0],f=n[1],l=(0,c.useState)(null),d=(0,e.Z)(l,2),v=d[0],m=d[1];return(0,c.useEffect)((function(){(0,a.dS)(r).then((function(r){return f(r)})).catch((function(r){return m(r)}))}),[r]),(0,p.jsxs)(p.Fragment,{children:[(0,p.jsx)("ul",{children:h&&h.map((function(r){var t=r.profile_path,n=r.name,e=r.character,a=r.cast_id;return(0,p.jsxs)("li",{children:[t?(0,p.jsx)("img",{src:"".concat(u.a).concat(t),width:"100",height:"150",alt:"".concat(n)}):(0,p.jsx)(o.g,{width:"100px",height:"150px"}),(0,p.jsx)("h3",{children:n}),(0,p.jsxs)("p",{children:["Character: ",e]})]},a)}))}),h&&0===h.length&&(0,p.jsx)("p",{children:"We don't have any actors for this movie."}),v&&(0,p.jsx)(s.j,{children:v.message})]})}},777:function(r,t,n){n.d(t,{j:function(){return i}});var e,a=n(168),u=n(934).Z.h2(e||(e=(0,a.Z)(["\n  color: red;\n  text-align: center;\n"]))),c=n(184),i=function(r){var t=r.children;return(0,c.jsx)(u,{children:t})}},226:function(r,t,n){n.d(t,{g:function(){return i}});var e,a=n(168),u=n(934).Z.div(e||(e=(0,a.Z)(["\n  width: ",";\n  height: ",";\n  background-color: lightgrey;\n  text-align: center;\n  display: flex;\n  justify-content: center;\n  align-items: center;\n"])),(function(r){return r.width}),(function(r){return r.height})),c=n(184),i=function(r){var t=r.width,n=r.height;return(0,c.jsx)("div",{children:(0,c.jsx)(u,{width:t,height:n,children:"No picture("})})}},128:function(r,t,n){n.d(t,{a:function(){return e}});var e="https://image.tmdb.org/t/p/w500"}}]);
//# sourceMappingURL=910.1d830958.chunk.js.map