(this.webpackJsonppokeapi=this.webpackJsonppokeapi||[]).push([[0],{17:function(e,t,n){},51:function(e,t,n){},53:function(e,t,n){},74:function(e,t,n){"use strict";n.r(t);var c=n(6),a=n(20),r=n(14),s="Add Catch",i="Delete Catch";function u(e){return{type:s,caught:e}}function o(e){return{type:i,dex:e}}var l="Set User",j="Clear User";function h(e){return{type:l,username:e}}function b(){return{type:j}}var d=n(12),p="Set Query";var m="Set Types";var O=[];var x={username:"",role:null,id:null};var f=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:[],t=arguments.length>1?arguments[1]:void 0;switch(t.type){case m:return Object(r.a)(t.search);default:return e}},g=Object(a.b)({query:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:O,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case p:return Object(d.a)({},t.query);default:return e}},user:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:x,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case l:return Object(d.a)(Object(d.a)({},e),{},{username:t.username});case j:return Object(d.a)({},x);default:return e}},caught:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:[],t=arguments.length>1?arguments[1]:void 0;switch(t.type){case s:return[].concat(Object(r.a)(e),[t.caught]);case i:return e.filter((function(e){return e.dex!==t.dex}));default:return e}},types:f}),v=Object(a.c)(g),y=n(0),k=n.n(y),C=n(25),w=n.n(C),N=(n(51),n(7)),S=n.n(N),P=n(16),F=n(3),L=(n(53),n(17),n(1)),U=function(e){var t=e.pkmn,n=e.isCaught,c=e.addCatch,a=e.deleteCatch;return Object(L.jsx)(L.Fragment,{children:Object(L.jsxs)("div",{className:"results-box",children:[Object(L.jsxs)("div",{className:"box",children:[Object(L.jsx)("h3",{children:t.name}),Object(L.jsxs)("div",{className:"pokedex-box",children:["Pokedex No. ",t.dex]}),Object(L.jsx)("img",{src:t.img}),Object(L.jsx)("div",{className:"type-box ",children:t.type})]}),!n&&Object(L.jsx)("button",{onClick:function(){return c(t)},children:" Catch"}),n&&Object(L.jsx)("button",{onClick:function(){return a(t.dex)},children:" Release"})]})})};var I=function(e){var t=e.props;e.types,e.isCaught,e.addCatch,e.deleteCatch,console.log(t);var n=Object(y.useState)(""),c=Object(F.a)(n,2);return c[0],c[1],Object(L.jsx)(L.Fragment,{children:Object(L.jsxs)("div",{children:[Object(L.jsx)("h3",{children:t.pkmn.name}),t.pkmn.typeurl]})})},T={favorites:[],search:[],user:{username:"",id:null,role:""}},A=n(15),B=n.n(A);var E={setQuery:function(e){return{type:p,query:Object(d.a)({},e)}},setTypes:function(e){return{type:m,search:e}},addCatch:u,deleteCatch:o};var M=Object(c.c)((function(e){return{globalState:e,pkmn:e.query,types:e.types,caught:e.caught}}),E)((function(e){var t=Object(y.useState)(""),n=Object(F.a)(t,2),c=n[0],a=n[1],r=Object(y.useState)([]),s=Object(F.a)(r,2),i=s[0],u=s[1],o=Object(y.useState)(""),l=Object(F.a)(o,2),j=l[0],h=l[1],b=Object(y.useState)([]),d=Object(F.a)(b,2),p=(d[0],d[1],Object(y.useMemo)((function(){return e.caught.map((function(e){return e.dex}))}),[e.caught])),m="https://pokeapi.co/api/v2/";function O(){return(O=Object(P.a)(S.a.mark((function t(n){var c,a,r,s;return S.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.prev=0,h(""),c=n.toLowerCase(),t.next=5,fetch("".concat(m,"pokemon/").concat(c));case 5:return a=t.sent,t.next=8,a.json();case 8:r=t.sent,s={dex:r.id,name:r.name,img:r.sprites.front_default,type:r.types[0].type.name},e.setQuery(s),t.next=17;break;case 13:t.prev=13,t.t0=t.catch(0),h("Invalid name"),e.setQuery([]);case 17:case"end":return t.stop()}}),t,null,[[0,13]])})))).apply(this,arguments)}function x(){return(x=Object(P.a)(S.a.mark((function t(n){var c,a,r,s;return S.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.prev=0,h(""),c=n.toLowerCase(),t.next=5,fetch("".concat(m,"type/").concat(c));case 5:return a=t.sent,t.next=8,a.json();case 8:r=t.sent,s=r.pokemon.map((function(e){return{name:e.pokemon.name}})),console.log(s),e.setTypes(s),t.next=18;break;case 14:t.prev=14,t.t0=t.catch(0),h("Invalid type"),e.setTypes([]);case 18:case"end":return t.stop()}}),t,null,[[0,14]])})))).apply(this,arguments)}return Object(L.jsxs)(L.Fragment,{children:[Object(L.jsx)("h1",{children:"Search"}),Object(L.jsxs)("div",{children:[Object(L.jsx)("input",{id:"name",type:"text",onChange:function(e){return a(e.target.value)},placeholder:"Search By Name",value:c}),Object(L.jsx)("button",{className:"button",onClick:function(){return function(e){return O.apply(this,arguments)}(c)},children:"Search Name"}),Object(L.jsx)("p",{className:"text-example",children:"(Example: Pikachu, Jigglypuff, Greninja, etc."})]}),Object(L.jsxs)("div",{children:[Object(L.jsx)("input",{id:"type",type:"text",onChange:function(e){return u(e.target.value)},placeholder:"Search By Type",value:i}),Object(L.jsx)("button",{className:"button",onClick:function(){return function(e){return x.apply(this,arguments)}(i)},children:"Search Type"}),Object(L.jsx)("p",{className:"text-example",children:"(Example: Water, Flying, Psychic, etc.)"})]}),Object(L.jsxs)("div",{children:[j.length>0&&Object(L.jsx)("h1",{children:j}),0===j.length&&e.pkmn.name&&Object(L.jsx)(U,{pkmn:e.pkmn,dex:e.pkmn.dex,img:e.pkmn.img,type:e.pkmn.type,isCaught:p.includes(e.pkmn.id),deleteCatch:e.deleteCatch,addCatch:e.addCatch})]}),Object(L.jsx)("div",{children:e.types.map((function(e){return Object(L.jsx)("div",{children:Object(L.jsx)(I,{pkmn:e})})}))})]})})),R={addCatch:u,deleteCatch:o};var q=Object(c.c)((function(e){return{caught:e.caught}}),R)((function(e){return Object(L.jsxs)(L.Fragment,{children:[Object(L.jsx)("h1",{children:"Box"}),e.caught.map((function(t){return Object(L.jsx)(U,{pkmn:t,isCaught:!0,deleteCatch:e.deleteCatch},t.dex)}))]})}));var Q=function(){var e=Object(y.useState)({}),t=Object(F.a)(e,2),n=t[0],c=t[1];Object(y.useEffect)((function(){a()}),[]);var a=function(){B.a.get("https://pokeapi.co/api/v2/pokemon/"+function(){var e=Math.ceil(1),t=Math.floor(898);return Math.floor(Math.random()*(t-e+1))+e}()).then((function(e){console.log(e.data),c(e.data)}))};return Object(L.jsxs)(L.Fragment,{children:[Object(L.jsx)("h1",{children:"Random Encounter"}),Object(L.jsxs)("div",{className:"random-box",children:[Object(L.jsx)("h3",{children:n.name}),Object(L.jsxs)("h4",{children:["#",n.id]}),Object(L.jsx)("img",{src:"https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/"+n.id+".png"}),Object(L.jsxs)("div",{children:[Object(L.jsx)("img",{src:"https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/"+ +n.id+".png"}),Object(L.jsx)("img",{src:"https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/back/"+ +n.id+".png"})]})]})]})};var J=function(){return Object(L.jsxs)(L.Fragment,{children:[Object(L.jsx)("h1",{children:"Links"}),Object(L.jsx)("li",{children:Object(L.jsx)("a",{href:"http://bulbapedia.bulbagarden.net",children:"Bulbapedia"})}),Object(L.jsx)("li",{children:Object(L.jsx)("a",{href:"http://pokeapi.co/",children:"Poke API"})})]})},D=n(13),G=n(5),W={setUser:h};var _=Object(c.c)((function(e){return{}}),W)((function(e){var t=Object(G.g)(),n=Object(y.useState)(""),c=Object(F.a)(n,2),a=c[0],r=c[1],s=Object(y.useState)(""),i=Object(F.a)(s,2),u=i[0],o=i[1],l=Object(y.useState)(""),j=Object(F.a)(l,2),h=j[0],b=j[1];function d(){return(d=Object(P.a)(S.a.mark((function n(){var c;return S.a.wrap((function(n){for(;;)switch(n.prev=n.next){case 0:if(b(""),console.log(a,u),!(a.length<8||a.length>16||u.length>20||u.length<8)){n.next=5;break}return b("Username must be between 8 and 16 characters. Password must be between 8 and 20 characters."),n.abrupt("return");case 5:try{(c=B.a.post("users/login",{username:a,password:u})).error?b(c.error):(e.setUser(c.data.username),t.push("/search"))}catch(h){b("Something went wrong, please try again later.")}case 6:case"end":return n.stop()}}),n)})))).apply(this,arguments)}return Object(L.jsxs)(L.Fragment,{children:[Object(L.jsx)("h1",{children:"Login"}),Object(L.jsx)("div",{children:Object(L.jsx)("input",{id:"username",type:"text",onChange:function(e){return r(e.target.value)},placeholder:"Username",value:a})}),Object(L.jsx)("div",{children:Object(L.jsx)("input",{id:"password",type:"Password",onChange:function(e){return o(e.target.value)},placeholder:"Password",value:u})}),Object(L.jsx)("button",{onClick:function(){return function(){return d.apply(this,arguments)}()},children:"Submit"}),h.length>0&&Object(L.jsx)("h3",{style:{color:"red"},className:"text-center",children:h}),Object(L.jsxs)("p",{children:["Create an account ",Object(L.jsx)("u",{children:"here"}),"."]})]})})),z={setUser:h};var H=Object(c.c)((function(e){return{}}),z)((function(e){var t=Object(G.g)(),n=Object(y.useState)(""),c=Object(F.a)(n,2),a=c[0],r=c[1],s=Object(y.useState)(""),i=Object(F.a)(s,2),u=i[0],o=i[1],l=Object(y.useState)(""),j=Object(F.a)(l,2),h=j[0],b=j[1];function d(){return(d=Object(P.a)(S.a.mark((function n(){var c;return S.a.wrap((function(n){for(;;)switch(n.prev=n.next){case 0:if(b(""),!(a.length<8||a.length>16||u.length>20||u.length<8)){n.next=4;break}return b("Username must be between 8 and 16 characters and Password must be between 8 and 20 characters"),n.abrupt("return");case 4:return n.prev=4,n.next=7,B.a.post("/users/signup",{username:a,password:u});case 7:c=n.sent,console.log(c),c.data.error?b(c.data.error):(e.setUser(c.data.data.username),t.push("/search")),n.next=15;break;case 12:n.prev=12,n.t0=n.catch(4),b("Something went wrong, please try again later.");case 15:case"end":return n.stop()}}),n,null,[[4,12]])})))).apply(this,arguments)}return Object(L.jsxs)(L.Fragment,{children:[Object(L.jsx)("h1",{className:"text-center",children:"Signup"}),Object(L.jsxs)("div",{className:"form",children:[Object(L.jsxs)("div",{className:"form-container",children:[Object(L.jsx)("label",{className:"label text-center",htmlFor:"username",children:"Username"}),Object(L.jsx)("input",{className:"input",value:a,onChange:function(e){return r(e.target.value)},type:"text",id:"username"})]}),Object(L.jsxs)("div",{className:"form-container",children:[Object(L.jsx)("label",{className:"label text-center",htmlFor:"password",children:"Password"}),Object(L.jsx)("input",{className:"input",value:u,onChange:function(e){return o(e.target.value)},type:"password",id:"password"})]}),Object(L.jsx)("button",{className:"submit",onClick:function(){return function(){return d.apply(this,arguments)}()},children:"Signup"}),h.length>0&&Object(L.jsx)("h3",{style:{color:"red"},className:"text-center",children:h})]})]})})),K=n(32),V=function(e){return e.user.username},X=n(31);var Y=function(e){var t=e.text,n=Object(y.useState)(1),c=Object(F.a)(n,2),a=c[0],r=c[1],s=Object(X.b)({from:{transform:"translate(60%,0)"},to:{transform:"translate(-60%,0)"},config:{duration:5e3},reset:!0,onRest:function(){r(a+1)}});return Object(L.jsx)("div",{className:"scroll-text",children:Object(L.jsx)(X.a.div,{style:s,children:t})},a)};var Z=function(){var e=Object(y.useState)(T),t=Object(F.a)(e,2),n=(t[0],t[1],Object(K.b)(V)),c=(Object(F.a)(n,1)[0],Object(K.a)(b,h)),a=Object(F.a)(c,2),r=(a[0],a[1]);return Object(y.useEffect)(Object(P.a)(S.a.mark((function e(){var t;return S.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,B.a.get("/users/authenticate");case 3:(t=e.sent).data.success&&r(t.data.data.username),e.next=9;break;case 7:e.prev=7,e.t0=e.catch(0);case 9:case"end":return e.stop()}}),e,null,[[0,7]])}))),[]),Object(L.jsx)(D.a,{children:Object(L.jsxs)(L.Fragment,{children:[Object(L.jsxs)("nav",{className:"navbar",children:[Object(L.jsx)(D.b,{className:"link",to:"/Login",children:"Login"}),Object(L.jsx)(D.b,{className:"link",to:"/signup",children:"Create Account"}),Object(L.jsx)(D.b,{className:"link",to:"/Search",children:"Search"}),Object(L.jsx)(D.b,{className:"link",to:"/Catch",children:"Box"}),Object(L.jsx)(D.b,{className:"link",to:"/Random",children:"Random"}),Object(L.jsx)(D.b,{className:"link",to:"/Links",children:"Links"})]}),Object(L.jsx)("main",{children:Object(L.jsx)("div",{className:"App",children:Object(L.jsxs)(G.d,{children:[Object(L.jsx)(G.b,{path:"/login",component:_}),Object(L.jsx)(G.b,{path:"/signup",component:H}),Object(L.jsx)(G.b,{path:"/search",component:M}),Object(L.jsx)(G.b,{path:"/catch",component:q}),Object(L.jsx)(G.b,{path:"/random",component:Q}),Object(L.jsx)(G.b,{path:"/links",component:J}),Object(L.jsx)(G.b,{path:"*",children:Object(L.jsx)(G.a,{to:"/search"})})]})})}),Object(L.jsxs)("footer",{className:"f-text",children:["sara's pokemon api",Object(L.jsx)(Y,{text:"gotta catch 'em all!"})]})]})})},$=function(e){e&&e instanceof Function&&n.e(3).then(n.bind(null,75)).then((function(t){var n=t.getCLS,c=t.getFID,a=t.getFCP,r=t.getLCP,s=t.getTTFB;n(e),c(e),a(e),r(e),s(e)}))};w.a.render(Object(L.jsx)(k.a.StrictMode,{children:Object(L.jsx)(c.a,{store:v,children:Object(L.jsx)(Z,{})})}),document.getElementById("root")),$()}},[[74,1,2]]]);
//# sourceMappingURL=main.356f3cda.chunk.js.map