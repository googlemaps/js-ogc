this.google=this.google||{},this.google.maps=this.google.maps||{},this.google.maps.plugins=this.google.maps.plugins||{},this.google.maps.plugins.ogc=function(t,n){"use strict";var r=function(t){try{return!!t()}catch(t){return!0}},e=!r((function(){return 7!=Object.defineProperty({},1,{get:function(){return 7}})[1]})),o=function(t){if(null==t)throw TypeError("Can't call method on "+t);return t},i=function(t){return Object(o(t))},c={}.hasOwnProperty,u=Object.hasOwn||function(t,n){return c.call(i(t),n)},a=Function.prototype,f=e&&Object.getOwnPropertyDescriptor,l=u(a,"name"),s={EXISTS:l,PROPER:l&&"something"===function(){}.name,CONFIGURABLE:l&&(!e||e&&f(a,"name").configurable)},g="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof window?window:"undefined"!=typeof global?global:"undefined"!=typeof self?self:{};function p(t,n){return t(n={exports:{}},n.exports),n.exports}var y,v,b=function(t){return t&&t.Math==Math&&t},h=b("object"==typeof globalThis&&globalThis)||b("object"==typeof window&&window)||b("object"==typeof self&&self)||b("object"==typeof g&&g)||function(){return this}()||Function("return this")(),m=function(t){return"function"==typeof t},d=function(t){return"object"==typeof t?null!==t:m(t)},S=h.document,O=d(S)&&d(S.createElement),j=!e&&!r((function(){return 7!=Object.defineProperty((t="div",O?S.createElement(t):{}),"a",{get:function(){return 7}}).a;var t})),w=function(t){if(d(t))return t;throw TypeError(String(t)+" is not an object")},T=function(t){return m(t)?t:void 0},E=function(t,n){return arguments.length<2?T(h[t]):h[t]&&h[t][n]},P=E("navigator","userAgent")||"",F=h.process,x=h.Deno,A=F&&F.versions||x&&x.version,M=A&&A.v8;M?v=(y=M.split("."))[0]<4?1:y[0]+y[1]:P&&(!(y=P.match(/Edge\/(\d+)/))||y[1]>=74)&&(y=P.match(/Chrome\/(\d+)/))&&(v=y[1]);var I=v&&+v,z=!!Object.getOwnPropertySymbols&&!r((function(){var t=Symbol();return!String(t)||!(Object(t)instanceof Symbol)||!Symbol.sham&&I&&I<41})),k=z&&!Symbol.sham&&"symbol"==typeof Symbol.iterator,G=k?function(t){return"symbol"==typeof t}:function(t){var n=E("Symbol");return m(n)&&Object(t)instanceof n},_=function(t){if(m(t))return t;throw TypeError(function(t){try{return String(t)}catch(t){return"Object"}}(t)+" is not a function")},C=function(t,n){try{Object.defineProperty(h,t,{value:n,configurable:!0,writable:!0})}catch(r){h[t]=n}return n},L="__core-js_shared__",N=h[L]||C(L,{}),R=p((function(t){(t.exports=function(t,n){return N[t]||(N[t]=void 0!==n?n:{})})("versions",[]).push({version:"3.18.2",mode:"global",copyright:"© 2021 Denis Pushkarev (zloirock.ru)"})})),D=0,q=Math.random(),B=function(t){return"Symbol("+String(void 0===t?"":t)+")_"+(++D+q).toString(36)},U=R("wks"),W=h.Symbol,Z=k?W:W&&W.withoutSetter||B,X=function(t){return u(U,t)&&(z||"string"==typeof U[t])||(z&&u(W,t)?U[t]=W[t]:U[t]=Z("Symbol."+t)),U[t]},K=X("toPrimitive"),V=function(t,n){if(!d(t)||G(t))return t;var r,e,o=null==(r=t[K])?void 0:_(r);if(o){if(void 0===n&&(n="default"),e=o.call(t,n),!d(e)||G(e))return e;throw TypeError("Can't convert object to primitive value")}return void 0===n&&(n="number"),function(t,n){var r,e;if("string"===n&&m(r=t.toString)&&!d(e=r.call(t)))return e;if(m(r=t.valueOf)&&!d(e=r.call(t)))return e;if("string"!==n&&m(r=t.toString)&&!d(e=r.call(t)))return e;throw TypeError("Can't convert object to primitive value")}(t,n)},Y=function(t){var n=V(t,"string");return G(n)?n:String(n)},$=Object.defineProperty,H={f:e?$:function(t,n,r){if(w(t),n=Y(n),w(r),j)try{return $(t,n,r)}catch(t){}if("get"in r||"set"in r)throw TypeError("Accessors not supported");return"value"in r&&(t[n]=r.value),t}},J=s.EXISTS,Q=H.f,tt=Function.prototype,nt=tt.toString,rt=/^\s*function ([^ (]*)/;e&&!J&&Q(tt,"name",{configurable:!0,get:function(){try{return nt.call(this).match(rt)[1]}catch(t){return""}}});var et={}.propertyIsEnumerable,ot=Object.getOwnPropertyDescriptor,it={f:ot&&!et.call({1:2},1)?function(t){var n=ot(this,t);return!!n&&n.enumerable}:et},ct=function(t,n){return{enumerable:!(1&t),configurable:!(2&t),writable:!(4&t),value:n}},ut={}.toString,at=function(t){return ut.call(t).slice(8,-1)},ft="".split,lt=r((function(){return!Object("z").propertyIsEnumerable(0)}))?function(t){return"String"==at(t)?ft.call(t,""):Object(t)}:Object,st=function(t){return lt(o(t))},gt=Object.getOwnPropertyDescriptor,pt={f:e?gt:function(t,n){if(t=st(t),n=Y(n),j)try{return gt(t,n)}catch(t){}if(u(t,n))return ct(!it.f.call(t,n),t[n])}},yt=e?function(t,n,r){return H.f(t,n,ct(1,r))}:function(t,n,r){return t[n]=r,t},vt=Function.toString;m(N.inspectSource)||(N.inspectSource=function(t){return vt.call(t)});var bt,ht,mt,dt,St=N.inspectSource,Ot=h.WeakMap,jt=m(Ot)&&/native code/.test(St(Ot)),wt=R("keys"),Tt={},Et="Object already initialized",Pt=h.WeakMap;if(jt||N.state){var Ft=N.state||(N.state=new Pt),xt=Ft.get,At=Ft.has,Mt=Ft.set;bt=function(t,n){if(At.call(Ft,t))throw new TypeError(Et);return n.facade=t,Mt.call(Ft,t,n),n},ht=function(t){return xt.call(Ft,t)||{}},mt=function(t){return At.call(Ft,t)}}else{var It=wt[dt="state"]||(wt[dt]=B(dt));Tt[It]=!0,bt=function(t,n){if(u(t,It))throw new TypeError(Et);return n.facade=t,yt(t,It,n),n},ht=function(t){return u(t,It)?t[It]:{}},mt=function(t){return u(t,It)}}var zt={set:bt,get:ht,has:mt,enforce:function(t){return mt(t)?ht(t):bt(t,{})},getterFor:function(t){return function(n){var r;if(!d(n)||(r=ht(n)).type!==t)throw TypeError("Incompatible receiver, "+t+" required");return r}}},kt=p((function(t){var n=s.CONFIGURABLE,r=zt.get,e=zt.enforce,o=String(String).split("String");(t.exports=function(t,r,i,c){var a,f=!!c&&!!c.unsafe,l=!!c&&!!c.enumerable,s=!!c&&!!c.noTargetGet,g=c&&void 0!==c.name?c.name:r;m(i)&&("Symbol("===String(g).slice(0,7)&&(g="["+String(g).replace(/^Symbol\(([^)]*)\)/,"$1")+"]"),(!u(i,"name")||n&&i.name!==g)&&yt(i,"name",g),(a=e(i)).source||(a.source=o.join("string"==typeof g?g:""))),t!==h?(f?!s&&t[r]&&(l=!0):delete t[r],l?t[r]=i:yt(t,r,i)):l?t[r]=i:C(r,i)})(Function.prototype,"toString",(function(){return m(this)&&r(this).source||St(this)}))})),Gt=Math.ceil,_t=Math.floor,Ct=function(t){var n=+t;return n!=n||0===n?0:(n>0?_t:Gt)(n)},Lt=Math.max,Nt=Math.min,Rt=function(t,n){var r=Ct(t);return r<0?Lt(r+n,0):Nt(r,n)},Dt=Math.min,qt=function(t){return(n=t.length)>0?Dt(Ct(n),9007199254740991):0;var n},Bt=function(t){return function(n,r,e){var o,i=st(n),c=qt(i),u=Rt(e,c);if(t&&r!=r){for(;c>u;)if((o=i[u++])!=o)return!0}else for(;c>u;u++)if((t||u in i)&&i[u]===r)return t||u||0;return!t&&-1}},Ut={includes:Bt(!0),indexOf:Bt(!1)}.indexOf,Wt=function(t,n){var r,e=st(t),o=0,i=[];for(r in e)!u(Tt,r)&&u(e,r)&&i.push(r);for(;n.length>o;)u(e,r=n[o++])&&(~Ut(i,r)||i.push(r));return i},Zt=["constructor","hasOwnProperty","isPrototypeOf","propertyIsEnumerable","toLocaleString","toString","valueOf"],Xt=Zt.concat("length","prototype"),Kt={f:Object.getOwnPropertyNames||function(t){return Wt(t,Xt)}},Vt={f:Object.getOwnPropertySymbols},Yt=E("Reflect","ownKeys")||function(t){var n=Kt.f(w(t)),r=Vt.f;return r?n.concat(r(t)):n},$t=function(t,n){for(var r=Yt(n),e=H.f,o=pt.f,i=0;i<r.length;i++){var c=r[i];u(t,c)||e(t,c,o(n,c))}},Ht=/#|\.prototype\./,Jt=function(t,n){var e=tn[Qt(t)];return e==rn||e!=nn&&(m(n)?r(n):!!n)},Qt=Jt.normalize=function(t){return String(t).replace(Ht,".").toLowerCase()},tn=Jt.data={},nn=Jt.NATIVE="N",rn=Jt.POLYFILL="P",en=Jt,on=pt.f,cn=function(t,n){var r,e,o,i,c,u=t.target,a=t.global,f=t.stat;if(r=a?h:f?h[u]||C(u,{}):(h[u]||{}).prototype)for(e in n){if(i=n[e],o=t.noTargetGet?(c=on(r,e))&&c.value:r[e],!en(a?e:u+(f?".":"#")+e,t.forced)&&void 0!==o){if(typeof i==typeof o)continue;$t(i,o)}(t.sham||o&&o.sham)&&yt(i,"sham",!0),kt(r,e,i,t)}},un=Object.keys||function(t){return Wt(t,Zt)},an=Object.assign,fn=Object.defineProperty,ln=!an||r((function(){if(e&&1!==an({b:1},an(fn({},"a",{enumerable:!0,get:function(){fn(this,"b",{value:3,enumerable:!1})}}),{b:2})).b)return!0;var t={},n={},r=Symbol(),o="abcdefghijklmnopqrst";return t[r]=7,o.split("").forEach((function(t){n[t]=t})),7!=an({},t)[r]||un(an({},n)).join("")!=o}))?function(t,n){for(var r=i(t),o=arguments.length,c=1,u=Vt.f,a=it.f;o>c;)for(var f,l=lt(arguments[c++]),s=u?un(l).concat(u(l)):un(l),g=s.length,p=0;g>p;)f=s[p++],e&&!a.call(l,f)||(r[f]=l[f]);return r}:an;cn({target:"Object",stat:!0,forced:Object.assign!==ln},{assign:ln});var sn=Array.isArray||function(t){return"Array"==at(t)},gn={};gn[X("toStringTag")]="z";var pn,yn="[object z]"===String(gn),vn=X("toStringTag"),bn="Arguments"==at(function(){return arguments}()),hn=yn?at:function(t){var n,r,e;return void 0===t?"Undefined":null===t?"Null":"string"==typeof(r=function(t,n){try{return t[n]}catch(t){}}(n=Object(t),vn))?r:bn?at(n):"Object"==(e=at(n))&&m(n.callee)?"Arguments":e},mn=[],dn=E("Reflect","construct"),Sn=/^\s*(?:class|function)\b/,On=Sn.exec,jn=!Sn.exec((function(){})),wn=function(t){if(!m(t))return!1;try{return dn(Object,mn,t),!0}catch(t){return!1}},Tn=!dn||r((function(){var t;return wn(wn.call)||!wn(Object)||!wn((function(){t=!0}))||t}))?function(t){if(!m(t))return!1;switch(hn(t)){case"AsyncFunction":case"GeneratorFunction":case"AsyncGeneratorFunction":return!1}return jn||!!On.call(Sn,St(t))}:wn,En=function(t,n,r){var e=Y(n);e in t?H.f(t,e,ct(0,r)):t[e]=r},Pn=X("species"),Fn=(pn="slice",I>=51||!r((function(){var t=[];return(t.constructor={})[Pn]=function(){return{foo:1}},1!==t[pn](Boolean).foo}))),xn=X("species"),An=[].slice,Mn=Math.max;cn({target:"Array",proto:!0,forced:!Fn},{slice:function(t,n){var r,e,o,i=st(this),c=qt(i),u=Rt(t,c),a=Rt(void 0===n?c:n,c);if(sn(i)&&(r=i.constructor,(Tn(r)&&(r===Array||sn(r.prototype))||d(r)&&null===(r=r[xn]))&&(r=void 0),r===Array||void 0===r))return An.call(i,u,a);for(e=new(void 0===r?Array:r)(Mn(a-u,0)),o=0;u<a;u++,o++)u in i&&En(e,o,i[u]);return e.length=o,e}});var In=[].join,zn=lt!=Object,kn=function(t,n){var e=[][t];return!!e&&r((function(){e.call(null,n||function(){throw 1},1)}))}("join",",");cn({target:"Array",proto:!0,forced:zn||!kn},{join:function(t){return In.call(st(this),void 0===t?",":t)}});var Gn={request:"GetMap",service:"WMS",srs:"EPSG:3857"},_n=20037508.34789244,Cn=-_n,Ln=_n;function Nn(t,n,r){var e=40075016.69578488/Math.pow(2,r);return[Cn+t*e,Ln-(n+1)*e,Cn+(t+1)*e,Ln-n*e]}return t.WmsMapType=function(t){var r=t.url,e=t.layers,o=t.styles,i=void 0===o?"":o,c=t.bgcolor,u=void 0===c?"0xFFFFFF":c,a=t.version,f=void 0===a?"1.1.1":a,l=t.transparent,s=void 0===l||l,g=t.format,p=void 0===g?"image/png":g,y=t.outline,v=void 0!==y&&y,b=t.name,h=t.alt,m=t.maxZoom,d=t.minZoom,S=t.opacity,O=new google.maps.Size(256,256),j=Object.assign({layers:e,styles:i,version:f,transparent:s,bgcolor:u,format:p,outline:v,width:O.width,height:O.height},Gn);"?"!==r.slice(-1)&&(r+="?");return new google.maps.ImageMapType({getTileUrl:function(t,e){return r+n.stringify(Object.assign({bbox:Nn(t.x,t.y,e).join(",")},j))},name:b,alt:h,opacity:S,maxZoom:m,minZoom:d,tileSize:O})},t.xyzToBounds=Nn,Object.defineProperty(t,"__esModule",{value:!0}),t}({},queryString);
//# sourceMappingURL=index.dev.js.map
