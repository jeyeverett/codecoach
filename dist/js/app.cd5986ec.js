(function(e){function t(t){for(var r,c,u=t[0],s=t[1],i=t[2],d=0,l=[];d<u.length;d++)c=u[d],Object.prototype.hasOwnProperty.call(o,c)&&o[c]&&l.push(o[c][0]),o[c]=0;for(r in s)Object.prototype.hasOwnProperty.call(s,r)&&(e[r]=s[r]);f&&f(t);while(l.length)l.shift()();return a.push.apply(a,i||[]),n()}function n(){for(var e,t=0;t<a.length;t++){for(var n=a[t],r=!0,c=1;c<n.length;c++){var u=n[c];0!==o[u]&&(r=!1)}r&&(a.splice(t--,1),e=s(s.s=n[0]))}return e}var r={},c={app:0},o={app:0},a=[];function u(e){return s.p+"js/"+({"user-auth":"user-auth"}[e]||e)+"."+{"chunk-404fa498":"f21653a5","chunk-49722d22":"79224f79","chunk-0418deba":"1db1cd4b","chunk-169500f8":"9d9cf283","chunk-5a626e66":"dbb949ca","chunk-69457e3a":"96f9e5fa","chunk-db1023c8":"c900e103","user-auth":"2647eba8"}[e]+".js"}function s(t){if(r[t])return r[t].exports;var n=r[t]={i:t,l:!1,exports:{}};return e[t].call(n.exports,n,n.exports,s),n.l=!0,n.exports}s.e=function(e){var t=[],n={"chunk-404fa498":1,"chunk-49722d22":1,"chunk-0418deba":1,"chunk-169500f8":1,"chunk-5a626e66":1,"chunk-69457e3a":1,"chunk-db1023c8":1,"user-auth":1};c[e]?t.push(c[e]):0!==c[e]&&n[e]&&t.push(c[e]=new Promise((function(t,n){for(var r="css/"+({"user-auth":"user-auth"}[e]||e)+"."+{"chunk-404fa498":"b33d2e01","chunk-49722d22":"921e0f35","chunk-0418deba":"d8638877","chunk-169500f8":"77d73f3f","chunk-5a626e66":"66805fea","chunk-69457e3a":"0b65a6f7","chunk-db1023c8":"60d4431a","user-auth":"c223d399"}[e]+".css",o=s.p+r,a=document.getElementsByTagName("link"),u=0;u<a.length;u++){var i=a[u],d=i.getAttribute("data-href")||i.getAttribute("href");if("stylesheet"===i.rel&&(d===r||d===o))return t()}var l=document.getElementsByTagName("style");for(u=0;u<l.length;u++){i=l[u],d=i.getAttribute("data-href");if(d===r||d===o)return t()}var f=document.createElement("link");f.rel="stylesheet",f.type="text/css",f.onload=t,f.onerror=function(t){var r=t&&t.target&&t.target.src||o,a=new Error("Loading CSS chunk "+e+" failed.\n("+r+")");a.code="CSS_CHUNK_LOAD_FAILED",a.request=r,delete c[e],f.parentNode.removeChild(f),n(a)},f.href=o;var h=document.getElementsByTagName("head")[0];h.appendChild(f)})).then((function(){c[e]=0})));var r=o[e];if(0!==r)if(r)t.push(r[2]);else{var a=new Promise((function(t,n){r=o[e]=[t,n]}));t.push(r[2]=a);var i,d=document.createElement("script");d.charset="utf-8",d.timeout=120,s.nc&&d.setAttribute("nonce",s.nc),d.src=u(e);var l=new Error;i=function(t){d.onerror=d.onload=null,clearTimeout(f);var n=o[e];if(0!==n){if(n){var r=t&&("load"===t.type?"missing":t.type),c=t&&t.target&&t.target.src;l.message="Loading chunk "+e+" failed.\n("+r+": "+c+")",l.name="ChunkLoadError",l.type=r,l.request=c,n[1](l)}o[e]=void 0}};var f=setTimeout((function(){i({type:"timeout",target:d})}),12e4);d.onerror=d.onload=i,document.head.appendChild(d)}return Promise.all(t)},s.m=e,s.c=r,s.d=function(e,t,n){s.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:n})},s.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},s.t=function(e,t){if(1&t&&(e=s(e)),8&t)return e;if(4&t&&"object"===typeof e&&e&&e.__esModule)return e;var n=Object.create(null);if(s.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var r in e)s.d(n,r,function(t){return e[t]}.bind(null,r));return n},s.n=function(e){var t=e&&e.__esModule?function(){return e["default"]}:function(){return e};return s.d(t,"a",t),t},s.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},s.p="/",s.oe=function(e){throw console.error(e),e};var i=window["webpackJsonp"]=window["webpackJsonp"]||[],d=i.push.bind(i);i.push=t,i=i.slice();for(var l=0;l<i.length;l++)t(i[l]);var f=d;a.push([0,"chunk-vendors"]),n()})({0:function(e,t,n){e.exports=n("56d7")},"04e3":function(e,t,n){"use strict";n("2236")},"0a6f":function(e,t,n){},1622:function(e,t,n){"use strict";n("a567")},2236:function(e,t,n){},3701:function(e,t,n){"use strict";n("44a1")},"44a1":function(e,t,n){},"4a54":function(e,t,n){},"56d7":function(e,t,n){"use strict";n.r(t);n("e260"),n("e6cf"),n("cca6"),n("a79d");var r=n("7a23");function c(e,t,n,c,o,a){var u=Object(r["E"])("the-header"),s=Object(r["E"])("router-view");return Object(r["w"])(),Object(r["h"])(r["a"],null,[Object(r["k"])(u),Object(r["i"])("main",null,[Object(r["k"])(s,null,{default:Object(r["L"])((function(e){var t=e.Component;return[Object(r["k"])(r["b"],{name:"route",mode:"out-in"},{default:Object(r["L"])((function(){return[(Object(r["w"])(),Object(r["f"])(Object(r["F"])(t)))]})),_:2},1024)]})),_:1})])],64)}var o=n("5530"),a=(n("ac1f"),n("5319"),function(e){return Object(r["z"])("data-v-1cc5a8fc"),e=e(),Object(r["x"])(),e}),u=a((function(){return Object(r["i"])("span",{class:"logo"},"codecoach",-1)})),s=Object(r["j"])("Coaches"),i={key:0,ref:""},d=Object(r["j"])("Messages"),l={key:1,ref:""},f={key:2},h=Object(r["j"])("Sign In/Up");function b(e,t,n,c,o,a){var b=Object(r["E"])("router-link");return Object(r["w"])(),Object(r["h"])("header",null,[Object(r["i"])("nav",null,[Object(r["k"])(b,{to:"/"},{default:Object(r["L"])((function(){return[u]})),_:1}),Object(r["i"])("ul",null,[Object(r["i"])("li",null,[Object(r["k"])(b,{to:"/coaches"},{default:Object(r["L"])((function(){return[s]})),_:1})]),e.isLoggedIn&&e.isCoach?(Object(r["w"])(),Object(r["h"])("li",i,[Object(r["k"])(b,{to:"/messages"},{default:Object(r["L"])((function(){return[d]})),_:1})],512)):Object(r["g"])("",!0),e.isLoggedIn?(Object(r["w"])(),Object(r["h"])("li",l,[Object(r["i"])("a",{onClick:t[0]||(t[0]=function(){return a.logOut&&a.logOut.apply(a,arguments)})},"Sign-Out")],512)):(Object(r["w"])(),Object(r["h"])("li",f,[Object(r["k"])(b,{to:"/auth"},{default:Object(r["L"])((function(){return[h]})),_:1})]))])])])}var p=n("5502"),m={computed:Object(o["a"])(Object(o["a"])({},Object(p["c"])(["isLoggedIn"])),Object(p["c"])("coaches",["isCoach"])),methods:Object(o["a"])(Object(o["a"])({},Object(p["b"])(["signOut"])),{},{logOut:function(){this.signOut(),this.$router.replace("/coaches")}})},g=(n("1622"),n("6b0d")),O=n.n(g);const j=O()(m,[["render",b],["__scopeId","data-v-1cc5a8fc"]]);var k=j,v={components:{TheHeader:k},computed:Object(o["a"])({},Object(p["c"])(["didAutoSignOut"])),methods:Object(o["a"])({},Object(p["b"])(["loadCoaches","autoLogin"])),created:function(){this.loadCoaches(),this.autoLogin()},watch:{didAutoSignOut:function(e,t){t||t===e||this.$router.replace("/coaches")}}};n("769b");const w=O()(v,[["render",c]]);var y=w;n("9911");function I(e,t,n,c,o,a){var u=Object(r["E"])("router-link");return n.link?(Object(r["w"])(),Object(r["f"])(u,{key:1,to:n.to,class:Object(r["r"])(n.mode)},{default:Object(r["L"])((function(){return[Object(r["D"])(e.$slots,"default",{},void 0,!0)]})),_:3},8,["to","class"])):(Object(r["w"])(),Object(r["h"])("button",{key:0,class:Object(r["r"])(n.mode)},[Object(r["D"])(e.$slots,"default",{},void 0,!0)],2))}var S={props:["link","to","mode"]};n("9be0");const C=O()(S,[["render",I],["__scopeId","data-v-265b9e72"]]);var E=C,x={class:"card"};function _(e,t){return Object(r["w"])(),Object(r["h"])("div",x,[Object(r["D"])(e.$slots,"default",{},void 0,!0)])}n("de02");const L={},T=O()(L,[["render",_],["__scopeId","data-v-3a08eca3"]]);var A=T,N={class:"badge"};function F(e,t){return Object(r["w"])(),Object(r["h"])("span",N,[Object(r["D"])(e.$slots,"default",{},void 0,!0)])}n("04e3");const P={},M=O()(P,[["render",F],["__scopeId","data-v-147bc526"]]);var D=M,R=(n("c96a"),function(e){return Object(r["z"])("data-v-7d05ab77"),e=e(),Object(r["x"])(),e}),B=R((function(){return Object(r["i"])("div",null,null,-1)})),U=R((function(){return Object(r["i"])("div",null,null,-1)})),J=R((function(){return Object(r["i"])("div",null,null,-1)})),$=R((function(){return Object(r["i"])("div",null,null,-1)})),z=R((function(){return Object(r["i"])("div",null,null,-1)})),H=R((function(){return Object(r["i"])("div",null,null,-1)})),G=R((function(){return Object(r["i"])("div",null,null,-1)})),W=R((function(){return Object(r["i"])("div",null,null,-1)})),q=R((function(){return Object(r["i"])("div",null,null,-1)})),K=R((function(){return Object(r["i"])("div",null,null,-1)})),Y=R((function(){return Object(r["i"])("div",null,null,-1)})),V=R((function(){return Object(r["i"])("div",null,null,-1)})),X=[B,U,J,$,z,H,G,W,q,K,Y,V];function Q(e,t,n,c,o,a){return Object(r["w"])(),Object(r["h"])("div",{class:Object(r["r"])(n.small?"lds-spinner-small":"lds-spinner")},X,2)}var Z={props:["small"]};n("aa70");const ee=O()(Z,[["render",Q],["__scopeId","data-v-7d05ab77"]]);var te=ee,ne=(n("d3b7"),n("3ca3"),n("ddb0"),n("6c02")),re=(n("fb6a"),Object(r["j"])("coaches"));function ce(e,t,n,c,o,a){var u=Object(r["E"])("router-link"),s=Object(r["E"])("BaseCard");return Object(r["w"])(),Object(r["h"])("section",null,[Object(r["k"])(s,{style:{margin:"0 auto","flex-direction":"column"}},{default:Object(r["L"])((function(){return[Object(r["i"])("h1",null,Object(r["H"])(n.resource?n.resource[0].toUpperCase()+n.resource.slice(1):"Page")+" Not Found! ",1),Object(r["i"])("p",null,[Object(r["j"])(" Could not find this "+Object(r["H"])(n.resource?n.resource:"page")+" - check out our list of ",1),Object(r["k"])(u,{to:"/coaches"},{default:Object(r["L"])((function(){return[re]})),_:1})])]})),_:1})])}var oe={props:{resource:{type:String,default:""}}};n("3701");const ae=O()(oe,[["render",ce],["__scopeId","data-v-2a91b333"]]);var ue,se=ae,ie=(n("4de4"),{registerCoach:function(e,t){e.coaches.push(t)},updateCoach:function(e,t){e.coaches=e.coaches.filter((function(e){return e.id!=t.id})),e.coaches.unshift(t)},setCoaches:function(e,t){e.coaches=t},setFetchTimestamp:function(e){e.lastFetch=(new Date).getTime()}}),de=(n("7db0"),{getCoaches:function(e){return e.coaches},hasCoaches:function(e){return e.coaches&&e.coaches.length>0},isCoach:function(e,t,n,r){return t.getCoaches.some((function(e){return e.id===r.userId}))},getCoach:function(e,t,n,r){return t.getCoaches.find((function(e){return e.id===r.userId}))},shouldFetchNew:function(e){var t=e.lastFetch;if(!t)return!0;var n=(new Date).getTime();return(n-t)/1e3>60},getTags:function(e){return e.tags}}),le=n("1da1"),fe=(n("96cf"),n("99af"),{fetchCoaches:function(e,t){return Object(le["a"])(regeneratorRuntime.mark((function n(){var r,c,a,u,s;return regeneratorRuntime.wrap((function(n){while(1)switch(n.prev=n.next){case 0:if(!t||t.refresh||e.getters.shouldFetchNew){n.next=2;break}return n.abrupt("return");case 2:return n.next=4,fetch("https://coachu-71b4b-default-rtdb.firebaseio.com/coaches.json");case 4:return r=n.sent,n.next=7,r.json();case 7:if(c=n.sent,r.ok){n.next=11;break}throw a=new Error("Failed to fetch data!"),a;case 11:for(s in u=[],c)u.push(Object(o["a"])(Object(o["a"])({},c[s]),{},{id:s}));e.commit("setCoaches",u),e.commit("setFetchTimestamp"),e.dispatch("loadingFinish",null,{root:!0});case 16:case"end":return n.stop()}}),n)})))()},registerCoach:function(e,t){return Object(le["a"])(regeneratorRuntime.mark((function n(){var r,c,a,u;return regeneratorRuntime.wrap((function(n){while(1)switch(n.prev=n.next){case 0:return r=e.rootGetters,c=r.userId,a=r.token,n.next=3,fetch("https://coachu-71b4b-default-rtdb.firebaseio.com/coaches/".concat(c,".json?auth=").concat(a),{method:"PUT",body:JSON.stringify(Object(o["a"])(Object(o["a"])({},t.coach),{},{createdAt:Date.now(),updatedAt:Date.now()}))});case 3:if(u=n.sent,u.ok){n.next=6;break}throw new Error("Failed to save to database!");case 6:e.commit("registerCoach",Object(o["a"])(Object(o["a"])({},t.coach),{},{id:c}));case 7:case"end":return n.stop()}}),n)})))()},updateCoach:function(e,t){return Object(le["a"])(regeneratorRuntime.mark((function n(){var r,c,a,u;return regeneratorRuntime.wrap((function(n){while(1)switch(n.prev=n.next){case 0:return r=e.rootGetters,c=r.userId,a=r.token,n.next=3,fetch("https://coachu-71b4b-default-rtdb.firebaseio.com/coaches/".concat(c,".json?auth=").concat(a),{method:"PATCH",body:JSON.stringify(Object(o["a"])(Object(o["a"])({},t.coach),{},{updatedAt:Date.now()}))});case 3:if(u=n.sent,u.ok){n.next=6;break}throw new Error("Failed to update coach!");case 6:e.commit("updateCoach",Object(o["a"])(Object(o["a"])({},t.coach),{},{id:c}));case 7:case"end":return n.stop()}}),n)})))()}}),he=n("dc02"),be={namespaced:!0,state:function(){return{tags:he.tags,coaches:[],lastFetch:null}},mutations:ie,getters:de,actions:fe},pe={addMessage:function(e,t){e.messages.push(t)},setMessages:function(e,t){e.messages=t}},me={getMessages:function(e){return e.messages},hasMessages:function(e){return e.messages.length>0}},ge=(n("b0c0"),{sendMessage:function(e,t){return Object(le["a"])(regeneratorRuntime.mark((function n(){var r,c,a,u,s,i,d;return regeneratorRuntime.wrap((function(n){while(1)switch(n.prev=n.next){case 0:return r=t.email,c=t.message,a=t.coachId,u={email:r,message:c},n.next=4,fetch("https://coachu-71b4b-default-rtdb.firebaseio.com/messages/".concat(a,".json"),{method:"POST",body:JSON.stringify(u)});case 4:if(s=n.sent,s.ok){n.next=8;break}throw i=new Error("Network error - Failed to send message."),i;case 8:d=s.json(),e.commit("addMessage",Object(o["a"])(Object(o["a"])({},u),{},{coachId:a,id:d.name}));case 10:case"end":return n.stop()}}),n)})))()},fetchMessages:function(e){return Object(le["a"])(regeneratorRuntime.mark((function t(){var n,r,c,a,u,s,i,d;return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:return n=e.rootGetters,r=n.userId,c=n.token,t.next=3,fetch("https://coachu-71b4b-default-rtdb.firebaseio.com/messages/".concat(r,".json?auth=").concat(c));case 3:return a=t.sent,t.next=6,a.json();case 6:if(u=t.sent,a.ok){t.next=10;break}throw s=new Error(a.message||"Network error - Failed to retrieve messages."),s;case 10:for(d in i=[],u)i.push(Object(o["a"])(Object(o["a"])({},u[d]),{},{id:d}));e.commit("setMessages",i);case 13:case"end":return t.stop()}}),t)})))()}}),Oe={namespaced:!0,state:function(){return{messages:[]}},mutations:pe,getters:me,actions:ge},je={setCurrentUser:function(e,t){var n=t.token,r=t.userId;e.didAutoSignOut=!1,e.token=n,e.userId=r},setAutoSignOut:function(e){e.didAutoSignOut=!0}},ke={userId:function(e){return e.userId},token:function(e){return e.token},isLoggedIn:function(e){return!!e.token},didAutoSignOut:function(e){return e.didAutoSignOut}},ve=(n("a9e3"),{authenticate:function(e,t){return Object(le["a"])(regeneratorRuntime.mark((function n(){var r,c,o,a,u,s,i,d,l,f,h;return regeneratorRuntime.wrap((function(n){while(1)switch(n.prev=n.next){case 0:return r=t.user,c=r.email,o=r.password,a=t.id,u="signin"===a?"signInWithPassword":"signUp",n.next=4,fetch("https://identitytoolkit.googleapis.com/v1/accounts:".concat(u,"?key=AIzaSyBe-zJavtAE1fxWUjnzMb6umRkrbKjtCuA"),{method:"POST",body:JSON.stringify({email:c,password:o,returnSecureToken:!0})});case 4:return s=n.sent,n.next=7,s.json();case 7:if(i=n.sent,s.ok){n.next=25;break}if(d="",!i.error||!i.error.message){n.next=23;break}n.t0=i.error.message,n.next="EMAIL_NOT_FOUND"===n.t0?14:"INVALID_PASSWORD"===n.t0?16:"EMAIL_EXISTS"===n.t0?18:"TOO_MANY_ATTEMPTS_TRY_LATER"===n.t0?20:22;break;case 14:return d="Email address not found - please sign up to create an account.",n.abrupt("break",23);case 16:return d="Invalid username or password.",n.abrupt("break",23);case 18:return d="This email has already been registered.",n.abrupt("break",23);case 20:return d="Too many attempts - service temporarily disabled - please try again later.",n.abrupt("break",23);case 22:return n.abrupt("break",23);case 23:throw l=new Error(d||"Network error - failed to sign user in."),l;case 25:f=1e3*i.expiresIn+Date.now(),localStorage.setItem("userId",i.localId),localStorage.setItem("token",i.idToken),localStorage.setItem("tokenExpiry",f),ue=setTimeout((function(){e.dispatch("autoSignOut")}),f-Date.now()),h={token:i.idToken,userId:i.localId},e.commit("setCurrentUser",h);case 32:case"end":return n.stop()}}),n)})))()},autoLogin:function(e){var t=localStorage.getItem("userId"),n=localStorage.getItem("token"),r=localStorage.getItem("tokenExpiry"),c=Number(r)-Date.now();c<0||n&&t&&(ue=setTimeout((function(){return e.dispatch("autoSignOut")}),c),e.commit("setCurrentUser",{userId:t,token:n}))},signOut:function(e){clearTimeout(ue),localStorage.removeItem("userId"),localStorage.removeItem("token"),localStorage.removeItem("tokenExpiry"),e.commit("setCurrentUser",{token:null,userId:null})},autoSignOut:function(e){e.dispatch("signOut"),e.commit("setAutoSignOut")}}),we={state:function(){return{token:null,userId:null,didAutoSignOut:!1}},mutations:je,getters:ke,actions:ve},ye=Object(p["a"])({modules:{coaches:be,messages:Oe,auth:we},state:function(){return{isLoading:!0,error:null}},getters:{isLoading:function(e){return e.isLoading},isError:function(e){return e.error}},mutations:{setLoading:function(e,t){e.isLoading=t},setError:function(e,t){e.error=t}},actions:{loadingStart:function(e){e.commit("setLoading",!0)},loadingFinish:function(e){e.commit("setLoading",!1)},loadingError:function(e,t){e.commit("setError",t)},loadCoaches:function(e,t){e.dispatch("loadingStart"),e.dispatch("loadingError",null),this.dispatch("coaches/fetchCoaches",t).catch((function(){e.dispatch("loadingFinish"),e.dispatch("loadingError","Network Error - please try again later.")}))}}}),Ie=ye,Se=function(){return n.e("chunk-404fa498").then(n.bind(null,"203c"))},Ce=function(){return n.e("chunk-db1023c8").then(n.bind(null,"f922"))},Ee=function(){return n.e("chunk-69457e3a").then(n.bind(null,"2ad0"))},xe=function(){return Promise.all([n.e("chunk-49722d22"),n.e("chunk-0418deba")]).then(n.bind(null,"997c"))},_e=function(){return Promise.all([n.e("chunk-49722d22"),n.e("chunk-169500f8")]).then(n.bind(null,"8e07"))},Le=function(){return n.e("chunk-5a626e66").then(n.bind(null,"ab16"))},Te=function(){return n.e("user-auth").then(n.bind(null,"212c"))},Ae=Object(ne["a"])({routes:[{path:"/",redirect:"/coaches"},{path:"/coaches",component:Se,children:[{name:"coach",path:":coachId",component:Ce,props:!0,children:[{name:"contact",path:"contact",component:Ee,props:!0}]}]},{path:"/register",component:xe,meta:{auth:!0}},{path:"/edit",component:_e,meta:{auth:!0}},{path:"/auth",component:Te,meta:{noAuth:!0}},{path:"/messages",component:Le,meta:{auth:!0}},{path:"/:notFound(.*)",component:se},{path:"/404/:resource",name:"404ResourceNotFound",props:!0,component:se}],history:Object(ne["b"])(),scrollBehavior:function(e,t,n){}});Ae.beforeEach((function(e,t,n){e.meta.auth&&!Ie.getters.isLoggedIn?n("/auth"):e.meta.noAuth&&Ie.getters.isLoggedIn?n("/coaches"):n()})),Ae.afterEach((function(){Ie.dispatch("loadingError",null)}));var Ne=Ae,Fe=Object(r["e"])(y);Fe.component("BaseButton",E),Fe.component("BaseCard",A),Fe.component("BaseBadge",D),Fe.component("BaseSpinner",te),Fe.use(Ne),Fe.use(Ie),Fe.mount("#app")},"769b":function(e,t,n){"use strict";n("4a54")},"9be0":function(e,t,n){"use strict";n("9f71")},"9f71":function(e,t,n){},a567:function(e,t,n){},aa70:function(e,t,n){"use strict";n("cdf0")},cdf0:function(e,t,n){},dc02:function(e){e.exports=JSON.parse('{"tags":["vue","react","angular","css","html","cloud","frontend","backend","career"]}')},de02:function(e,t,n){"use strict";n("0a6f")}});
//# sourceMappingURL=app.cd5986ec.js.map