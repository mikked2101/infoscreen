(this.webpackJsonpinfoscreen=this.webpackJsonpinfoscreen||[]).push([[0],{34:function(e,t,n){},71:function(e,t,n){"use strict";n.r(t);var c=n(3),i=n.n(c),a=n(28),s=n.n(a),r=(n(34),n(10)),o=n(1);var j=function(){var e=Object(c.useState)({}),t=Object(r.a)(e,2),n=t[0],i=t[1];return Object(c.useEffect)((function(){fetch("https://www.reddit.com/r/dadjokes/top.json?t=now&limit=1").then((function(e){return e.json()})).then((function(e){return i(e.data.children[0].data)}))}),[]),Object(c.useEffect)((function(){}),[n]),Object(o.jsxs)("div",{className:"joke",children:[Object(o.jsx)("h2",{children:"Dad Joke"}),Object(o.jsx)("p",{children:n.title}),Object(o.jsx)("p",{children:n.selftext})]})},l=n(29),u=n.n(l)()({clientName:"Mikes_info"});var d=function(){var e=Object(c.useState)([]),t=Object(r.a)(e,2),n=t[0],i=t[1];return Object(c.useEffect)((function(){u.getBikeRentalStationsByPosition({latitude:63.428311,longitude:10.392514},230).then((function(e){return i(e)}))}),[]),Object(o.jsxs)("div",{className:"bike",children:[Object(o.jsx)("h2",{children:"City Bikes"}),n.map((function(e){return Object(o.jsx)(b,{data:e},e.name)}))]})};function b(e){var t=e.data;return Object(o.jsxs)("div",{className:"station",children:[t.name,": ",t.bikesAvailable," - ",t.spacesAvailable]})}var f=n(17);var h=function(){var e=f.DateTime.local().setLocale("nb-NO");return Object(o.jsxs)("div",{className:"clock",children:[Object(o.jsx)("h2",{className:"time",children:e.toLocaleString(f.DateTime.TIME_24_SIMPLE)}),Object(o.jsx)("h2",{className:"date",children:e.toLocaleString({weekday:"long",day:"numeric",month:"long"})})]})};var O=function(){return Object(o.jsxs)("div",{className:"App",children:[Object(o.jsx)(h,{}),Object(o.jsx)(j,{}),Object(o.jsx)(d,{})]})},m=function(e){e&&e instanceof Function&&n.e(3).then(n.bind(null,74)).then((function(t){var n=t.getCLS,c=t.getFID,i=t.getFCP,a=t.getLCP,s=t.getTTFB;n(e),c(e),i(e),a(e),s(e)}))};s.a.render(Object(o.jsx)(i.a.StrictMode,{children:Object(o.jsx)(O,{})}),document.getElementById("root")),m()}},[[71,1,2]]]);
//# sourceMappingURL=main.4125c7f2.chunk.js.map