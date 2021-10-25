!function(t,n){"object"==typeof exports&&"undefined"!=typeof module?n(exports,require("query-string")):"function"==typeof define&&define.amd?define(["exports","query-string"],n):n(((t="undefined"!=typeof globalThis?globalThis:t||self).google=t.google||{},t.google.maps=t.google.maps||{},t.google.maps.plugins=t.google.maps.plugins||{},t.google.maps.plugins.ogc={}),t.queryString)}(this,(function(t,n){"use strict";var e=function(t){try{return!!t()}catch(t){return!0}},r=!e((function(){return 7!=Object.defineProperty({},1,{get:function(){return 7}})[1]})),o=Function.prototype,i=o.bind,u=o.call,c=i&&i.bind(u),a=i?function(t){return t&&c(u,t)}:function(t){return t&&function(){return u.apply(t,arguments)}},f="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof window?window:"undefined"!=typeof global?global:"undefined"!=typeof self?self:{};function s(t,n){return t(n={exports:{}},n.exports),n.exports}var l,p,g=function(t){return t&&t.Math==Math&&t},y=g("object"==typeof globalThis&&globalThis)||g("object"==typeof window&&window)||g("object"==typeof self&&self)||g("object"==typeof f&&f)||function(){return this}()||Function("return this")(),b=y.TypeError,v=function(t){if(null==t)throw b("Can't call method on "+t);return t},m=y.Object,d=function(t){return m(v(t))},h=a({}.hasOwnProperty),S=Object.hasOwn||function(t,n){return h(d(t),n)},O=Function.prototype,j=r&&Object.getOwnPropertyDescriptor,w=S(O,"name"),T={EXISTS:w,PROPER:w&&"something"===function(){}.name,CONFIGURABLE:w&&(!r||r&&j(O,"name").configurable)},P=function(t){return"function"==typeof t},x=function(t){return"object"==typeof t?null!==t:P(t)},E=y.document,F=x(E)&&x(E.createElement),M=!r&&!e((function(){return 7!=Object.defineProperty((t="div",F?E.createElement(t):{}),"a",{get:function(){return 7}}).a;var t})),A=y.String,I=y.TypeError,z=function(t){if(x(t))return t;throw I(A(t)+" is not an object")},k=Function.prototype.call,G=k.bind?k.bind(k):function(){return k.apply(k,arguments)},_=function(t){return P(t)?t:void 0},q=function(t,n){return arguments.length<2?_(y[t]):y[t]&&y[t][n]},C=a({}.isPrototypeOf),L=q("navigator","userAgent")||"",N=y.process,R=y.Deno,D=N&&N.versions||R&&R.version,B=D&&D.v8;B&&(p=(l=B.split("."))[0]>0&&l[0]<4?1:+(l[0]+l[1])),!p&&L&&(!(l=L.match(/Edge\/(\d+)/))||l[1]>=74)&&(l=L.match(/Chrome\/(\d+)/))&&(p=+l[1]);var U=p,W=!!Object.getOwnPropertySymbols&&!e((function(){var t=Symbol();return!String(t)||!(Object(t)instanceof Symbol)||!Symbol.sham&&U&&U<41})),Z=W&&!Symbol.sham&&"symbol"==typeof Symbol.iterator,X=y.Object,K=Z?function(t){return"symbol"==typeof t}:function(t){var n=q("Symbol");return P(n)&&C(n.prototype,X(t))},V=y.String,Y=y.TypeError,$=function(t){if(P(t))return t;throw Y(function(t){try{return V(t)}catch(t){return"Object"}}(t)+" is not a function")},H=y.TypeError,J=Object.defineProperty,Q=function(t,n){try{J(y,t,{value:n,configurable:!0,writable:!0})}catch(e){y[t]=n}return n},tt="__core-js_shared__",nt=y[tt]||Q(tt,{}),et=s((function(t){(t.exports=function(t,n){return nt[t]||(nt[t]=void 0!==n?n:{})})("versions",[]).push({version:"3.19.0",mode:"global",copyright:"© 2021 Denis Pushkarev (zloirock.ru)"})})),rt=0,ot=Math.random(),it=a(1..toString),ut=function(t){return"Symbol("+(void 0===t?"":t)+")_"+it(++rt+ot,36)},ct=et("wks"),at=y.Symbol,ft=at&&at.for,st=Z?at:at&&at.withoutSetter||ut,lt=function(t){if(!S(ct,t)||!W&&"string"!=typeof ct[t]){var n="Symbol."+t;W&&S(at,t)?ct[t]=at[t]:ct[t]=Z&&ft?ft(n):st(n)}return ct[t]},pt=y.TypeError,gt=lt("toPrimitive"),yt=function(t,n){if(!x(t)||K(t))return t;var e,r,o=null==(e=t[gt])?void 0:$(e);if(o){if(void 0===n&&(n="default"),r=G(o,t,n),!x(r)||K(r))return r;throw pt("Can't convert object to primitive value")}return void 0===n&&(n="number"),function(t,n){var e,r;if("string"===n&&P(e=t.toString)&&!x(r=G(e,t)))return r;if(P(e=t.valueOf)&&!x(r=G(e,t)))return r;if("string"!==n&&P(e=t.toString)&&!x(r=G(e,t)))return r;throw H("Can't convert object to primitive value")}(t,n)},bt=function(t){var n=yt(t,"string");return K(n)?n:n+""},vt=y.TypeError,mt=Object.defineProperty,dt={f:r?mt:function(t,n,e){if(z(t),n=bt(n),z(e),M)try{return mt(t,n,e)}catch(t){}if("get"in e||"set"in e)throw vt("Accessors not supported");return"value"in e&&(t[n]=e.value),t}},ht=T.EXISTS,St=dt.f,Ot=Function.prototype,jt=a(Ot.toString),wt=/^\s*function ([^ (]*)/,Tt=a(wt.exec);r&&!ht&&St(Ot,"name",{configurable:!0,get:function(){try{return Tt(wt,jt(this))[1]}catch(t){return""}}});var Pt={}.propertyIsEnumerable,xt=Object.getOwnPropertyDescriptor,Et={f:xt&&!Pt.call({1:2},1)?function(t){var n=xt(this,t);return!!n&&n.enumerable}:Pt},Ft=function(t,n){return{enumerable:!(1&t),configurable:!(2&t),writable:!(4&t),value:n}},Mt=a({}.toString),At=a("".slice),It=function(t){return At(Mt(t),8,-1)},zt=y.Object,kt=a("".split),Gt=e((function(){return!zt("z").propertyIsEnumerable(0)}))?function(t){return"String"==It(t)?kt(t,""):zt(t)}:zt,_t=function(t){return Gt(v(t))},qt=Object.getOwnPropertyDescriptor,Ct={f:r?qt:function(t,n){if(t=_t(t),n=bt(n),M)try{return qt(t,n)}catch(t){}if(S(t,n))return Ft(!G(Et.f,t,n),t[n])}},Lt=r?function(t,n,e){return dt.f(t,n,Ft(1,e))}:function(t,n,e){return t[n]=e,t},Nt=a(Function.toString);P(nt.inspectSource)||(nt.inspectSource=function(t){return Nt(t)});var Rt,Dt,Bt,Ut,Wt=nt.inspectSource,Zt=y.WeakMap,Xt=P(Zt)&&/native code/.test(Wt(Zt)),Kt=et("keys"),Vt={},Yt="Object already initialized",$t=y.TypeError,Ht=y.WeakMap;if(Xt||nt.state){var Jt=nt.state||(nt.state=new Ht),Qt=a(Jt.get),tn=a(Jt.has),nn=a(Jt.set);Rt=function(t,n){if(tn(Jt,t))throw new $t(Yt);return n.facade=t,nn(Jt,t,n),n},Dt=function(t){return Qt(Jt,t)||{}},Bt=function(t){return tn(Jt,t)}}else{var en=Kt[Ut="state"]||(Kt[Ut]=ut(Ut));Vt[en]=!0,Rt=function(t,n){if(S(t,en))throw new $t(Yt);return n.facade=t,Lt(t,en,n),n},Dt=function(t){return S(t,en)?t[en]:{}},Bt=function(t){return S(t,en)}}var rn={set:Rt,get:Dt,has:Bt,enforce:function(t){return Bt(t)?Dt(t):Rt(t,{})},getterFor:function(t){return function(n){var e;if(!x(n)||(e=Dt(n)).type!==t)throw $t("Incompatible receiver, "+t+" required");return e}}},on=s((function(t){var n=T.CONFIGURABLE,e=rn.get,r=rn.enforce,o=String(String).split("String");(t.exports=function(t,e,i,u){var c,a=!!u&&!!u.unsafe,f=!!u&&!!u.enumerable,s=!!u&&!!u.noTargetGet,l=u&&void 0!==u.name?u.name:e;P(i)&&("Symbol("===String(l).slice(0,7)&&(l="["+String(l).replace(/^Symbol\(([^)]*)\)/,"$1")+"]"),(!S(i,"name")||n&&i.name!==l)&&Lt(i,"name",l),(c=r(i)).source||(c.source=o.join("string"==typeof l?l:""))),t!==y?(a?!s&&t[e]&&(f=!0):delete t[e],f?t[e]=i:Lt(t,e,i)):f?t[e]=i:Q(e,i)})(Function.prototype,"toString",(function(){return P(this)&&e(this).source||Wt(this)}))})),un=Math.ceil,cn=Math.floor,an=function(t){var n=+t;return n!=n||0===n?0:(n>0?cn:un)(n)},fn=Math.max,sn=Math.min,ln=function(t,n){var e=an(t);return e<0?fn(e+n,0):sn(e,n)},pn=Math.min,gn=function(t){return(n=t.length)>0?pn(an(n),9007199254740991):0;var n},yn=function(t){return function(n,e,r){var o,i=_t(n),u=gn(i),c=ln(r,u);if(t&&e!=e){for(;u>c;)if((o=i[c++])!=o)return!0}else for(;u>c;c++)if((t||c in i)&&i[c]===e)return t||c||0;return!t&&-1}},bn={includes:yn(!0),indexOf:yn(!1)}.indexOf,vn=a([].push),mn=function(t,n){var e,r=_t(t),o=0,i=[];for(e in r)!S(Vt,e)&&S(r,e)&&vn(i,e);for(;n.length>o;)S(r,e=n[o++])&&(~bn(i,e)||vn(i,e));return i},dn=["constructor","hasOwnProperty","isPrototypeOf","propertyIsEnumerable","toLocaleString","toString","valueOf"],hn=dn.concat("length","prototype"),Sn={f:Object.getOwnPropertyNames||function(t){return mn(t,hn)}},On={f:Object.getOwnPropertySymbols},jn=a([].concat),wn=q("Reflect","ownKeys")||function(t){var n=Sn.f(z(t)),e=On.f;return e?jn(n,e(t)):n},Tn=function(t,n){for(var e=wn(n),r=dt.f,o=Ct.f,i=0;i<e.length;i++){var u=e[i];S(t,u)||r(t,u,o(n,u))}},Pn=/#|\.prototype\./,xn=function(t,n){var r=Fn[En(t)];return r==An||r!=Mn&&(P(n)?e(n):!!n)},En=xn.normalize=function(t){return String(t).replace(Pn,".").toLowerCase()},Fn=xn.data={},Mn=xn.NATIVE="N",An=xn.POLYFILL="P",In=xn,zn=Ct.f,kn=function(t,n){var e,r,o,i,u,c=t.target,a=t.global,f=t.stat;if(e=a?y:f?y[c]||Q(c,{}):(y[c]||{}).prototype)for(r in n){if(i=n[r],o=t.noTargetGet?(u=zn(e,r))&&u.value:e[r],!In(a?r:c+(f?".":"#")+r,t.forced)&&void 0!==o){if(typeof i==typeof o)continue;Tn(i,o)}(t.sham||o&&o.sham)&&Lt(i,"sham",!0),on(e,r,i,t)}},Gn=Object.keys||function(t){return mn(t,dn)},_n=Object.assign,qn=Object.defineProperty,Cn=a([].concat),Ln=!_n||e((function(){if(r&&1!==_n({b:1},_n(qn({},"a",{enumerable:!0,get:function(){qn(this,"b",{value:3,enumerable:!1})}}),{b:2})).b)return!0;var t={},n={},e=Symbol(),o="abcdefghijklmnopqrst";return t[e]=7,o.split("").forEach((function(t){n[t]=t})),7!=_n({},t)[e]||Gn(_n({},n)).join("")!=o}))?function(t,n){for(var e=d(t),o=arguments.length,i=1,u=On.f,c=Et.f;o>i;)for(var a,f=Gt(arguments[i++]),s=u?Cn(Gn(f),u(f)):Gn(f),l=s.length,p=0;l>p;)a=s[p++],r&&!G(c,f,a)||(e[a]=f[a]);return e}:_n;kn({target:"Object",stat:!0,forced:Object.assign!==Ln},{assign:Ln});var Nn=Array.isArray||function(t){return"Array"==It(t)},Rn={};Rn[lt("toStringTag")]="z";var Dn,Bn="[object z]"===String(Rn),Un=lt("toStringTag"),Wn=y.Object,Zn="Arguments"==It(function(){return arguments}()),Xn=Bn?It:function(t){var n,e,r;return void 0===t?"Undefined":null===t?"Null":"string"==typeof(e=function(t,n){try{return t[n]}catch(t){}}(n=Wn(t),Un))?e:Zn?It(n):"Object"==(r=It(n))&&P(n.callee)?"Arguments":r},Kn=function(){},Vn=[],Yn=q("Reflect","construct"),$n=/^\s*(?:class|function)\b/,Hn=a($n.exec),Jn=!$n.exec(Kn),Qn=function(t){if(!P(t))return!1;try{return Yn(Kn,Vn,t),!0}catch(t){return!1}},te=!Yn||e((function(){var t;return Qn(Qn.call)||!Qn(Object)||!Qn((function(){t=!0}))||t}))?function(t){if(!P(t))return!1;switch(Xn(t)){case"AsyncFunction":case"GeneratorFunction":case"AsyncGeneratorFunction":return!1}return Jn||!!Hn($n,Wt(t))}:Qn,ne=function(t,n,e){var r=bt(n);r in t?dt.f(t,r,Ft(0,e)):t[r]=e},ee=lt("species"),re=a([].slice),oe=(Dn="slice",U>=51||!e((function(){var t=[];return(t.constructor={})[ee]=function(){return{foo:1}},1!==t[Dn](Boolean).foo}))),ie=lt("species"),ue=y.Array,ce=Math.max;kn({target:"Array",proto:!0,forced:!oe},{slice:function(t,n){var e,r,o,i=_t(this),u=gn(i),c=ln(t,u),a=ln(void 0===n?u:n,u);if(Nn(i)&&(e=i.constructor,(te(e)&&(e===ue||Nn(e.prototype))||x(e)&&null===(e=e[ie]))&&(e=void 0),e===ue||void 0===e))return re(i,c,a);for(r=new(void 0===e?ue:e)(ce(a-c,0)),o=0;c<a;c++,o++)c in i&&ne(r,o,i[c]);return r.length=o,r}});var ae=a([].join),fe=Gt!=Object,se=function(t,n){var r=[][t];return!!r&&e((function(){r.call(null,n||function(){throw 1},1)}))}("join",",");kn({target:"Array",proto:!0,forced:fe||!se},{join:function(t){return ae(_t(this),void 0===t?",":t)}});var le={request:"GetMap",service:"WMS",srs:"EPSG:3857"},pe=20037508.34789244,ge=-pe,ye=pe;function be(t,n,e){var r=40075016.69578488/Math.pow(2,e);return[ge+t*r,ye-(n+1)*r,ge+(t+1)*r,ye-n*r]}t.WmsMapType=function(t){var e=t.url,r=t.layers,o=t.styles,i=void 0===o?"":o,u=t.bgcolor,c=void 0===u?"0xFFFFFF":u,a=t.version,f=void 0===a?"1.1.1":a,s=t.transparent,l=void 0===s||s,p=t.format,g=void 0===p?"image/png":p,y=t.outline,b=void 0!==y&&y,v=t.name,m=t.alt,d=t.maxZoom,h=t.minZoom,S=t.opacity,O=new google.maps.Size(256,256),j=Object.assign({layers:r,styles:i,version:f,transparent:l,bgcolor:c,format:g,outline:b,width:O.width,height:O.height},le);"?"!==e.slice(-1)&&(e+="?");return new google.maps.ImageMapType({getTileUrl:function(t,r){return e+n.stringify(Object.assign({bbox:be(t.x,t.y,r).join(",")},j))},name:v,alt:m,opacity:S,maxZoom:d,minZoom:h,tileSize:O})},t.xyzToBounds=be,Object.defineProperty(t,"__esModule",{value:!0})}));
