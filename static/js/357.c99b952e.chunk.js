"use strict";(self.webpackChunkreact_homework_template=self.webpackChunkreact_homework_template||[]).push([[357],{886:function(r,t,n){n.d(t,{dS:function(){return l},sL:function(){return p},Mv:function(){return v},Vb:function(){return f},Id:function(){return o}});var e=n(861),u=n(687),a=n.n(u),c=n(912),s=function(r){return Promise.reject(new Error("".concat(r," \u041f\u043e\u043f\u0440\u043e\u0431\u0443\u0439\u0442\u0435 \u043f\u0435\u0440\u0435\u0437\u0430\u0433\u0440\u0443\u0437\u0438\u0442\u044c \u0441\u0442\u0440\u0430\u043d\u0438\u0446\u0443")))},i=n(128);c.Z.defaults.baseURL="https://api.themoviedb.org/3",c.Z.defaults.params={api_key:i.$,language:"en-US"};var o=function(){var r=(0,e.Z)(a().mark((function r(){var t;return a().wrap((function(r){for(;;)switch(r.prev=r.next){case 0:return r.prev=0,r.next=3,c.Z.get("/trending/all/day");case 3:return t=r.sent,r.abrupt("return",t.data.results);case 7:return r.prev=7,r.t0=r.catch(0),r.abrupt("return",s("\u041d\u0435 \u0443\u0434\u0430\u043b\u043e\u0441\u044c \u0437\u0430\u0433\u0440\u0443\u0437\u0438\u0442\u044c \u0442\u0440\u0435\u043d\u0434\u044b."));case 10:case"end":return r.stop()}}),r,null,[[0,7]])})));return function(){return r.apply(this,arguments)}}(),p=function(){var r=(0,e.Z)(a().mark((function r(t){var n;return a().wrap((function(r){for(;;)switch(r.prev=r.next){case 0:return r.prev=0,r.next=3,c.Z.get("/movie/".concat(t));case 3:return n=r.sent,r.abrupt("return",n.data);case 7:return r.prev=7,r.t0=r.catch(0),r.abrupt("return",s("\u041d\u0435 \u0443\u0434\u0430\u043b\u043e\u0441\u044c \u0437\u0430\u0433\u0440\u0443\u0437\u0438\u0442\u044c \u0434\u0435\u0442\u0430\u043b\u0438 \u0444\u0438\u043b\u044c\u043c\u0430."));case 10:case"end":return r.stop()}}),r,null,[[0,7]])})));return function(t){return r.apply(this,arguments)}}(),f=function(){var r=(0,e.Z)(a().mark((function r(t){var n;return a().wrap((function(r){for(;;)switch(r.prev=r.next){case 0:return r.prev=0,r.next=3,c.Z.get("/search/movie",{params:{query:t}});case 3:return n=r.sent,r.abrupt("return",n.data.results);case 7:return r.prev=7,r.t0=r.catch(0),r.abrupt("return",s("\u041d\u0435 \u0443\u0434\u0430\u043b\u043e\u0441\u044c \u0437\u0430\u0433\u0440\u0443\u0437\u0438\u0442\u044c \u0444\u0438\u043b\u044c\u043c\u044b."));case 10:case"end":return r.stop()}}),r,null,[[0,7]])})));return function(t){return r.apply(this,arguments)}}(),l=function(){var r=(0,e.Z)(a().mark((function r(t){var n;return a().wrap((function(r){for(;;)switch(r.prev=r.next){case 0:return r.prev=0,r.next=3,c.Z.get("/movie/".concat(t,"/credits"));case 3:return n=r.sent,r.abrupt("return",n.data.cast);case 7:return r.prev=7,r.t0=r.catch(0),r.abrupt("return",s("\u041d\u0435 \u0443\u0434\u0430\u043b\u043e\u0441\u044c \u0437\u0430\u0433\u0440\u0443\u0437\u0438\u0442\u044c \u0430\u043a\u0442\u0435\u0440\u0441\u043a\u0438\u0439 \u0441\u043e\u0441\u0442\u0430\u0432."));case 10:case"end":return r.stop()}}),r,null,[[0,7]])})));return function(t){return r.apply(this,arguments)}}(),v=function(){var r=(0,e.Z)(a().mark((function r(t){var n;return a().wrap((function(r){for(;;)switch(r.prev=r.next){case 0:return r.prev=0,r.next=3,c.Z.get("/movie/".concat(t,"/reviews"));case 3:return n=r.sent,r.abrupt("return",n.data.results);case 7:return r.prev=7,r.t0=r.catch(0),r.abrupt("return",s("\u041d\u0435 \u0443\u0434\u0430\u043b\u043e\u0441\u044c \u0437\u0430\u0433\u0440\u0443\u0437\u0438\u0442\u044c \u043e\u0442\u0437\u044b\u0432\u044b."));case 10:case"end":return r.stop()}}),r,null,[[0,7]])})));return function(t){return r.apply(this,arguments)}}()},777:function(r,t,n){n.d(t,{j:function(){return s}});var e,u=n(168),a=n(934).Z.h2(e||(e=(0,u.Z)(["\n  color: red;\n  text-align: center;\n"]))),c=n(184),s=function(r){var t=r.children;return(0,c.jsx)(a,{children:t})}},357:function(r,t,n){n.r(t);var e=n(439),u=n(886),a=n(791),c=n(689),s=n(777),i=n(184);t.default=function(){var r=(0,c.UO)().movieId,t=(0,a.useState)(null),n=(0,e.Z)(t,2),o=n[0],p=n[1],f=(0,a.useState)(null),l=(0,e.Z)(f,2),v=l[0],h=l[1];return(0,a.useEffect)((function(){h(null),p(null),(0,u.Mv)(r).then((function(r){return p(r)})).catch((function(r){return h(r)}))}),[r]),(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)("ul",{children:o&&o.map((function(r,t){var n=r.author,e=r.content;return(0,i.jsxs)("li",{children:[(0,i.jsxs)("h3",{children:["Author: ",n]}),(0,i.jsx)("p",{children:e})]},t)}))}),o&&0===o.length&&(0,i.jsx)("p",{children:"We don't have any reviews for this movie."}),v&&(0,i.jsx)(s.j,{children:v.message})]})}},128:function(r,t,n){n.d(t,{$:function(){return u},a:function(){return e}});var e="https://image.tmdb.org/t/p/w500",u="13311e11047b48cfd8c9963a1d63772d"}}]);
//# sourceMappingURL=357.c99b952e.chunk.js.map