"use strict";(self.webpackChunkreact_homework_template=self.webpackChunkreact_homework_template||[]).push([[357],{657:function(r,t,e){e.d(t,{dS:function(){return v},sL:function(){return f},Mv:function(){return h},Vb:function(){return l},Id:function(){return p}});var n=e(683),u=e(861),a=e(687),c=e.n(a),s=e(912),i=function(){return Promise.reject(new Error("\u041e\u0439! \u0427\u0442\u043e \u0442\u043e \u043f\u043e\u0448\u043b\u043e \u043d\u0435 \u0442\u0430\u043a. \u041f\u043e\u043f\u0440\u043e\u0431\u0443\u0439\u0442\u0435 \u043f\u0435\u0440\u0435\u0437\u0430\u043f\u0443\u0441\u0442\u0438\u0442\u044c \u0441\u0442\u0440\u0430\u043d\u0438\u0446\u0443"))},o={api_key:"13311e11047b48cfd8c9963a1d63772d",language:"en-US"};s.Z.defaults.baseURL="https://api.themoviedb.org/3";var p=function(){var r=(0,u.Z)(c().mark((function r(){var t;return c().wrap((function(r){for(;;)switch(r.prev=r.next){case 0:return r.prev=0,r.next=3,s.Z.get("/trending/all/day",{params:o});case 3:return t=r.sent,r.abrupt("return",t.data.results);case 7:return r.prev=7,r.t0=r.catch(0),r.abrupt("return",i());case 10:case"end":return r.stop()}}),r,null,[[0,7]])})));return function(){return r.apply(this,arguments)}}(),f=function(){var r=(0,u.Z)(c().mark((function r(t){var e;return c().wrap((function(r){for(;;)switch(r.prev=r.next){case 0:return r.prev=0,r.next=3,s.Z.get("/movie/".concat(t),{params:o});case 3:return e=r.sent,r.abrupt("return",e.data);case 7:return r.prev=7,r.t0=r.catch(0),r.abrupt("return",i());case 10:case"end":return r.stop()}}),r,null,[[0,7]])})));return function(t){return r.apply(this,arguments)}}(),l=function(){var r=(0,u.Z)(c().mark((function r(t){var e;return c().wrap((function(r){for(;;)switch(r.prev=r.next){case 0:return r.prev=0,r.next=3,s.Z.get("/search/movie",{params:(0,n.Z)((0,n.Z)({},o),{},{query:t})});case 3:return e=r.sent,r.abrupt("return",e.data.results);case 7:return r.prev=7,r.t0=r.catch(0),r.abrupt("return",i());case 10:case"end":return r.stop()}}),r,null,[[0,7]])})));return function(t){return r.apply(this,arguments)}}(),v=function(){var r=(0,u.Z)(c().mark((function r(t){var e;return c().wrap((function(r){for(;;)switch(r.prev=r.next){case 0:return r.prev=0,r.next=3,s.Z.get("/movie/".concat(t,"/credits"),{params:o});case 3:return e=r.sent,r.abrupt("return",e.data.cast);case 7:return r.prev=7,r.t0=r.catch(0),r.abrupt("return",i());case 10:case"end":return r.stop()}}),r,null,[[0,7]])})));return function(t){return r.apply(this,arguments)}}(),h=function(){var r=(0,u.Z)(c().mark((function r(t){var e;return c().wrap((function(r){for(;;)switch(r.prev=r.next){case 0:return r.prev=0,r.next=3,s.Z.get("/movie/".concat(t,"/reviews"),{params:o});case 3:return e=r.sent,r.abrupt("return",e.data.results);case 7:return r.prev=7,r.t0=r.catch(0),r.abrupt("return",i());case 10:case"end":return r.stop()}}),r,null,[[0,7]])})));return function(t){return r.apply(this,arguments)}}()},777:function(r,t,e){e.d(t,{j:function(){return s}});var n,u=e(168),a=e(934).Z.h2(n||(n=(0,u.Z)(["\n  color: red;\n  text-align: center;\n"]))),c=e(184),s=function(r){var t=r.children;return(0,c.jsx)(a,{children:t})}},357:function(r,t,e){e.r(t);var n=e(439),u=e(657),a=e(791),c=e(689),s=e(777),i=e(184);t.default=function(){var r=(0,c.UO)().movieId,t=(0,a.useState)(null),e=(0,n.Z)(t,2),o=e[0],p=e[1],f=(0,a.useState)(null),l=(0,n.Z)(f,2),v=l[0],h=l[1];return(0,a.useEffect)((function(){(0,u.Mv)(r).then((function(r){return p(r)})).catch((function(r){return h(r)}))}),[r]),(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)("ul",{children:o&&o.map((function(r,t){var e=r.author,n=r.content;return(0,i.jsxs)("li",{children:[(0,i.jsxs)("h3",{children:["Author: ",e]}),(0,i.jsx)("p",{children:n})]},t)}))}),o&&0===o.length&&(0,i.jsx)("p",{children:"We don't have any reviews for this movie."}),v&&(0,i.jsx)(s.j,{children:v.message})]})}}}]);
//# sourceMappingURL=357.6df78603.chunk.js.map