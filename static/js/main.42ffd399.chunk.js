(this["webpackJsonpreview-rota"]=this["webpackJsonpreview-rota"]||[]).push([[0],{17:function(e,t,a){e.exports=a(29)},22:function(e,t,a){},23:function(e,t,a){},29:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),l=a(11),o=a.n(l),c=(a(22),a(23),a(8)),i=a(16),u=a(6),m=a(5),s=a(15),E=a(12),v=a(14);function p(e){for(var t={},a=e.sort((function(){return Math.random()-.5})),n=a.length,r=0;r<n;r++)t[a[r]]=[a[(r-1+n)%n],a[(r+1+n)%n]];return console.log(t),t}function d(e){return r.a.createElement(E.a,{striped:!0,bordered:!0,hover:!0},r.a.createElement("thead",null,r.a.createElement(h,{rota:e.rota})),r.a.createElement("tbody",null,Object.keys(e.rota).sort().map((function(t){return r.a.createElement(f,{key:t,name:t,reviewers:e.rota[t]})}))))}function h(e){return Object.keys(e.rota).length>0?r.a.createElement("tr",null,r.a.createElement("th",null,"Name"),r.a.createElement("th",{colSpan:"2"},"Reviewers")):r.a.createElement(r.a.Fragment,null)}function f(e){return r.a.createElement("tr",null,r.a.createElement("td",null,e.name),r.a.createElement("td",null,e.reviewers[0]),r.a.createElement("td",null,e.reviewers[1]))}function w(e){var t=Object(n.useState)(""),a=Object(c.a)(t,2),l=a[0],o=a[1],E=Object(n.useState)({}),h=Object(c.a)(E,2),f=h[0],w=h[1];return r.a.createElement(v.a,{className:"p-3"},r.a.createElement(u.a,null,r.a.createElement(u.a.Group,{as:s.a,controlId:"reviewersInput"},r.a.createElement(m.a,{sm:"2"},r.a.createElement(u.a.Label,null,"Reviewers: ")),r.a.createElement(m.a,{sm:"6"},r.a.createElement(u.a.Control,{type:"text",placeholder:"comma seperated list of reviewers, eg. Daniele, Ioan, Cyrus, Zacharo, Neil, Johanna",onChange:function(e){return o(e.target.value)}})),r.a.createElement(m.a,{sm:"4"},r.a.createElement(i.a,{variant:"primary",onClick:function(e){e.preventDefault(),console.log("reviewers: ".concat(l));var t=l.split(",").map((function(e){return e.trim()}));w(p(t))}},"Get Rota!")))),r.a.createElement(d,{rota:f}))}var g=function(){return r.a.createElement(r.a.Fragment,null,r.a.createElement("div",{className:"App"},r.a.createElement(w,null)))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));a(28);o.a.render(r.a.createElement(g,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()}))}},[[17,1,2]]]);
//# sourceMappingURL=main.42ffd399.chunk.js.map