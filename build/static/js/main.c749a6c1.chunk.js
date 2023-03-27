(this["webpackJsonpreact-complete-guide"]=this["webpackJsonpreact-complete-guide"]||[]).push([[0],{30:function(e,t,c){e.exports={header:"Header_header__2b05g",active:"Header_active__1M76Y"}},43:function(e,t,c){},52:function(e,t,c){},57:function(e,t,c){},81:function(e,t,c){"use strict";c.r(t);var a=c(29),n=c.n(a),r=c(33),s=(c(43),c(4)),i=c(1),o=c(2);var j=function(){return Object(o.jsx)("h1",{children:"Welcome to Movie Search App"})},l=c(10),b=c(30),d=c.n(b),h=function(){return Object(o.jsx)("header",{className:d.a.header,children:Object(o.jsx)("nav",{children:Object(o.jsxs)("ul",{children:[Object(o.jsx)("li",{children:Object(o.jsx)(l.a,{to:"/welcome",children:"Home"})}),Object(o.jsx)("li",{children:Object(o.jsx)(l.a,{to:"/movie",children:"MovieList"})})]})})})},u=c(14),O=c(26),p=c(20),m=c(8),x=c(82),f=(c(52),function(){var e=Object(i.useState)([]),t=Object(m.a)(e,2),c=t[0],a=t[1],n=Object(i.useState)(""),r=Object(m.a)(n,2),s=r[0],j=r[1],b=Object(i.useState)(!0),d=Object(m.a)(b,2),h=d[0],f=d[1],v=Object(i.useState)(null),g=Object(m.a)(v,2),w=g[0],S=g[1],N=Object(i.useState)(1),y=Object(m.a)(N,2),k=y[0],R=y[1],M=Object(i.useState)(!0),_=Object(m.a)(M,2),A=_[0],P=_[1],D=function(){var e=Object(p.a)(Object(u.a)().mark((function e(){var t;return Object(u.a)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return f(!0),e.prev=1,e.next=4,x.a.get("https://www.omdbapi.com/?s=star wars&page=".concat(k,"&apikey=8a7484af"));case 4:t=e.sent,a((function(e){return[].concat(Object(O.a)(e),Object(O.a)(t.data.Search))})),P(t.data.Search.length>0),console.log(t.data.Search),e.next=13;break;case 10:e.prev=10,e.t0=e.catch(1),S(e.t0.message);case 13:f(!1);case 14:case"end":return e.stop()}}),e,null,[[1,10]])})));return function(){return e.apply(this,arguments)}}();Object(i.useEffect)((function(){D()}),[k]);return Object(o.jsxs)("div",{className:"app",children:[Object(o.jsx)("h5",{children:"Movie Search App"}),Object(o.jsxs)("form",{className:"form-inline",onSubmit:function(e){e.preventDefault(),f(!0),x.a.get("http://www.omdbapi.com/?s=".concat(s,"&apikey=8a7484af&page=").concat(k)).then((function(e){console.log(e.data.Search),a(e.data.Search),f(!1)})).catch((function(e){alert(e.message)})),j("")},children:[Object(o.jsx)("input",{className:"form-control mr-sm-2",type:"search",placeholder:"Enter Movie Name","aria-label":"Search",onChange:function(e){j(e.target.value)},value:s}),Object(o.jsx)("button",{type:"submit",className:"btn btn-dark ",children:"Search"})]}),!h&&w&&Object(o.jsx)("p",{children:w}),Object(o.jsxs)("div",{className:"col",children:[h&&Object(o.jsx)("span",{style:{textAlign:"center"},children:"Loading a content...."}),!h&&c&&c.length?c.map((function(e,t){return Object(o.jsx)("div",{children:Object(o.jsxs)("div",{className:"col1",children:[Object(o.jsx)(l.a,{to:"/movie/".concat(e.imdbID),children:Object(o.jsx)("img",{src:"N/A"===e.Poster?"https://cdn.pixabay.com/photo/2017/09/04/09/37/cinema-strip-2713352_960_720.jpg":e.Poster,className:"si",alt:"movie.Title"})}),Object(o.jsxs)("div",{children:[Object(o.jsx)("h4",{children:e.Title}),Object(o.jsx)("span",{children:e.Year})]})]})},t)})):Object(o.jsx)("h5",{style:{textAlign:"centre"},children:"No movies found"})]}),!h&&A&&Object(o.jsx)("button",{onClick:function(){R((function(e){return e+1}))},className:"btn btn-primary",children:"Load More......."})]})});c(57);var v=function(){var e=Object(s.useParams)().id,t=Object(i.useState)({}),c=Object(m.a)(t,2),a=c[0],n=c[1],r=function(){var t=Object(p.a)(Object(u.a)().mark((function t(){var c;return Object(u.a)().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,x.a.get("https://www.omdbapi.com/?i=".concat(e,"&apikey=8a7484af"));case 2:c=t.sent,n(c.data),console.log(c.data);case 5:case"end":return t.stop()}}),t)})));return function(){return t.apply(this,arguments)}}();return Object(i.useEffect)((function(){r()})),Object(o.jsx)("div",{children:Object(o.jsxs)("div",{className:"detail",children:[Object(o.jsx)("h3",{children:a.Title}),Object(o.jsx)("img",{src:a.Poster,alt:"Movie Poster"}),Object(o.jsxs)("p",{children:["Year :",a.Year]}),Object(o.jsxs)("p",{children:["Plot: ",a.Plot]}),Object(o.jsxs)("p",{children:["Actors: ",a.Actors]}),Object(o.jsxs)("p",{children:["Director: ",a.Director]}),Object(o.jsxs)("p",{children:["IMDB Rating: ",a.imdbRating]})]})})};var g=function(){return Object(o.jsxs)("div",{children:[Object(o.jsx)("header",{children:Object(o.jsx)(h,{})}),Object(o.jsx)("main",{children:Object(o.jsxs)(s.Switch,{children:[Object(o.jsx)(s.Route,{path:"/",exact:!0,children:Object(o.jsx)(s.Redirect,{to:"/welcome",component:j})}),Object(o.jsx)(s.Route,{path:"/welcome",component:j}),Object(o.jsx)(s.Route,{exact:!0,path:"/movie",component:f}),Object(o.jsx)(s.Route,{path:"/movie/:id",component:v})]})})]})};c(58),c(59);n.a.createRoot(document.getElementById("root")).render(Object(o.jsx)(r.BrowserRouter,{children:Object(o.jsx)(g,{})}))}},[[81,1,2]]]);
//# sourceMappingURL=main.c749a6c1.chunk.js.map