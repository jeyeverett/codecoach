(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-69457e3a"],{"00db":function(e,t,n){},"07ac":function(e,t,n){var a=n("23e7"),i=n("6f53").values;a({target:"Object",stat:!0},{values:function(e){return i(e)}})},2532:function(e,t,n){"use strict";var a=n("23e7"),i=n("5a34"),c=n("1d80"),r=n("577e"),o=n("ab13");a({target:"String",proto:!0,forced:!o("includes")},{includes:function(e){return!!~r(c(this)).indexOf(r(i(e)),arguments.length>1?arguments[1]:void 0)}})},"2ad0":function(e,t,n){"use strict";n.r(t);var a=n("7a23"),i={key:0},c={key:0},r=Object(a["j"])(" Send Message "),o={style:{textAlign:"right",margin:"2rem"}},l=Object(a["j"])("Details");function s(e,t,n,s,u,d){var b=Object(a["E"])("BaseSpinner"),f=Object(a["E"])("FormInput"),v=Object(a["E"])("BaseButton"),h=Object(a["E"])("BaseCard");return e.isLoading?(Object(a["w"])(),Object(a["h"])("div",i,[Object(a["k"])(b)])):d.getCoach?(Object(a["w"])(),Object(a["f"])(h,{key:1,style:{display:"flex","flex-direction":"column"}},{default:Object(a["L"])((function(){return[Object(a["i"])("header",null,[Object(a["i"])("h2",null,"Contact "+Object(a["H"])(d.fullName),1)]),Object(a["k"])(a["b"],null,{default:Object(a["L"])((function(){return[u.sentMessage?(Object(a["w"])(),Object(a["h"])("h3",c,"Message Sent!")):Object(a["g"])("",!0)]})),_:1}),Object(a["i"])("form",{onSubmit:t[2]||(t[2]=Object(a["N"])((function(){return d.sendNewMessage&&d.sendNewMessage.apply(d,arguments)}),["prevent"]))},[Object(a["k"])(f,{type:"text",id:"email",label:"Your Email",modelValue:u.email,"onUpdate:modelValue":t[0]||(t[0]=function(e){return u.email=e}),modelModifiers:{trim:!0},invalid:u.invalid.email,onInput:d.validate},null,8,["modelValue","invalid","onInput"]),Object(a["k"])(f,{type:"text",id:"message",label:"Message",modelValue:u.message,"onUpdate:modelValue":t[1]||(t[1]=function(e){return u.message=e}),modelModifiers:{trim:!0},invalid:u.invalid.message,onInput:d.validate,textarea:!0},null,8,["modelValue","invalid","onInput"]),Object(a["i"])("div",null,[Object(a["k"])(v,{class:"register"},{default:Object(a["L"])((function(){return[r]})),_:1})])],32),Object(a["i"])("section",o,[Object(a["k"])(v,{to:d.detailsLink,link:!0},{default:Object(a["L"])((function(){return[l]})),_:1},8,["to"])])]})),_:1})):Object(a["g"])("",!0)}var u=n("5530"),d=(n("7db0"),n("caad"),n("2532"),n("07ac"),n("5502")),b=n("b34f"),f={components:{FormInput:b["a"]},props:["coachId"],data:function(){return{email:"",message:"",invalid:{email:!0,message:!0},sentMessage:!1}},computed:Object(u["a"])(Object(u["a"])(Object(u["a"])({},Object(d["c"])("coaches",["getCoaches"])),Object(d["c"])(["isLoading","isError"])),{},{getCoach:function(){var e=this,t=this.getCoaches.find((function(t){return t.id===e.coachId}));return t||void 0},fullName:function(){return this.getCoach.firstName+" "+this.getCoach.lastName},detailsLink:function(){return{name:"coach",params:{coachId:this.coachId}}}}),methods:Object(u["a"])(Object(u["a"])({},Object(d["b"])("messages",["sendMessage"])),{},{validate:function(e){var t=e.target,n=t.id,a=t.value;"email"!==n||a.includes("@")&&a.includes(".")?this.invalid[n]=""===a:this.invalid[n]=!0},sendNewMessage:function(){var e=this;Object.values(this.invalid).includes(!0)||(this.sendMessage({coachId:this.coachId,email:this.email,message:this.message}),this.sentMessage=!0,setTimeout((function(){e.email="",e.message="",e.sentMessage=!1,e.invalid.email=!0,e.invalid.message=!0}),2e3))}}),created:function(){var e=this;setTimeout((function(){e.getCoach||e.$router.push({name:"404ResourceNotFound",params:{resource:"coach"}})}),1e3)}},v=(n("6cf9"),n("6b0d")),h=n.n(v);const j=h()(f,[["render",s],["__scopeId","data-v-9c0c0106"]]);t["default"]=j},"2cd3":function(e,t,n){"use strict";n("e20f")},"40be":function(e,t,n){"use strict";var a=n("7a23"),i=function(e){return Object(a["z"])("data-v-62721aaf"),e=e(),Object(a["x"])(),e},c={xmlns:"http://www.w3.org/2000/svg",class:"icon",fill:"none",viewBox:"0 0 24 24",stroke:"currentColor"},r=i((function(){return Object(a["i"])("path",{"stroke-linecap":"round","stroke-linejoin":"round","stroke-width":"2",d:"M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"},null,-1)})),o=[r];function l(e,t){return Object(a["w"])(),Object(a["h"])("svg",c,o)}n("f159");var s=n("6b0d"),u=n.n(s);const d={},b=u()(d,[["render",l],["__scopeId","data-v-62721aaf"]]);t["a"]=b},"44e7":function(e,t,n){var a=n("861d"),i=n("c6b6"),c=n("b622"),r=c("match");e.exports=function(e){var t;return a(e)&&(void 0!==(t=e[r])?!!t:"RegExp"==i(e))}},"561e":function(e,t,n){},"5a34":function(e,t,n){var a=n("44e7");e.exports=function(e){if(a(e))throw TypeError("The method doesn't accept regular expressions");return e}},"6cf9":function(e,t,n){"use strict";n("561e")},"6f53":function(e,t,n){var a=n("83ab"),i=n("df75"),c=n("fc6a"),r=n("d1e7").f,o=function(e){return function(t){var n,o=c(t),l=i(o),s=l.length,u=0,d=[];while(s>u)n=l[u++],a&&!r.call(o,n)||d.push(e?[n,o[n]]:o[n]);return d}};e.exports={entries:o(!0),values:o(!1)}},a190:function(e,t,n){},aab2:function(e,t,n){"use strict";n("a190")},ab13:function(e,t,n){var a=n("b622"),i=a("match");e.exports=function(e){var t=/./;try{"/./"[e](t)}catch(n){try{return t[i]=!1,"/./"[e](t)}catch(a){}}return!1}},b34f:function(e,t,n){"use strict";var a=n("7a23"),i={class:"form-control"},c=["for"],r=["id","placeholder","value","aria-describedby","aria-invalid"],o=["id","placeholder","value","aria-describedby","aria-invalid"];function l(e,t,n,l,s,u){var d=Object(a["E"])("ErrorIcon"),b=Object(a["E"])("CheckIcon");return Object(a["w"])(),Object(a["h"])("div",i,[Object(a["i"])("label",{for:n.id},Object(a["H"])(n.label),9,c),n.textarea?(Object(a["w"])(),Object(a["h"])("textarea",Object(a["p"])({key:1},e.$attrs,{id:n.id,placeholder:n.label,class:{invalid:n.invalid},value:n.modelValue,onInput:t[1]||(t[1]=function(t){return e.$emit("update:modelValue",t.target.value)}),"aria-describedby":n.invalid?"".concat(n.id,"-invalid"):null,"aria-invalid":!!n.invalid||null}),null,16,o)):(Object(a["w"])(),Object(a["h"])("input",Object(a["p"])({key:0},e.$attrs,{id:n.id,placeholder:n.label,class:{invalid:n.invalid},value:n.modelValue,onInput:t[0]||(t[0]=function(t){return e.$emit("update:modelValue",t.target.value)}),"aria-describedby":n.invalid?"".concat(n.id,"-invalid"):null,"aria-invalid":!!n.invalid||null}),null,16,r)),Object(a["k"])(a["b"],{mode:"out-in"},{default:Object(a["L"])((function(){return[n.invalid?(Object(a["w"])(),Object(a["f"])(d,{key:0,id:"".concat(n.id,"-invalid")},null,8,["id"])):(Object(a["w"])(),Object(a["f"])(b,{key:1}))]})),_:1})])}n("a9e3");var s=n("fe85"),u=n("40be"),d={components:{ErrorIcon:s["a"],CheckIcon:u["a"]},props:{label:{type:String,default:""},modelValue:{type:[String,Number],default:""},id:{type:String,required:!0},invalid:{type:Boolean,default:!0},textarea:{type:Boolean,default:!1}}},b=(n("aab2"),n("6b0d")),f=n.n(b);const v=f()(d,[["render",l],["__scopeId","data-v-71337722"]]);t["a"]=v},caad:function(e,t,n){"use strict";var a=n("23e7"),i=n("4d64").includes,c=n("44d2");a({target:"Array",proto:!0},{includes:function(e){return i(this,e,arguments.length>1?arguments[1]:void 0)}}),c("includes")},e20f:function(e,t,n){},f159:function(e,t,n){"use strict";n("00db")},fe85:function(e,t,n){"use strict";var a=n("7a23"),i=function(e){return Object(a["z"])("data-v-d75c7c0a"),e=e(),Object(a["x"])(),e},c={xmlns:"http://www.w3.org/2000/svg",class:"icon",fill:"none",viewBox:"0 0 24 24",stroke:"currentColor"},r=i((function(){return Object(a["i"])("path",{"stroke-linecap":"round","stroke-linejoin":"round","stroke-width":"2",d:"M12 8v4m0 4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"},null,-1)})),o=[r];function l(e,t){return Object(a["w"])(),Object(a["h"])("svg",c,o)}n("2cd3");var s=n("6b0d"),u=n.n(s);const d={},b=u()(d,[["render",l],["__scopeId","data-v-d75c7c0a"]]);t["a"]=b}}]);
//# sourceMappingURL=chunk-69457e3a.96f9e5fa.js.map