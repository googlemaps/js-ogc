!function(t,e){"object"==typeof exports&&"undefined"!=typeof module?e(exports):"function"==typeof define&&define.amd?define(["exports"],e):e(((t="undefined"!=typeof globalThis?globalThis:t||self).google=t.google||{},t.google.maps=t.google.maps||{},t.google.maps.plugins=t.google.maps.plugins||{},t.google.maps.plugins.ogc={}))}(this,(function(t){"use strict";var e="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof window?window:"undefined"!=typeof global?global:"undefined"!=typeof self?self:{},r=function(t){return t&&t.Math==Math&&t},n=r("object"==typeof globalThis&&globalThis)||r("object"==typeof window&&window)||r("object"==typeof self&&self)||r("object"==typeof e&&e)||function(){return this}()||Function("return this")(),o={},i=function(t){try{return!!t()}catch(t){return!0}},u=!i((function(){return 7!=Object.defineProperty({},1,{get:function(){return 7}})[1]})),a=!i((function(){var t=function(){}.bind();return"function"!=typeof t||t.hasOwnProperty("prototype")})),c=a,f=Function.prototype.call,s=c?f.bind(f):function(){return f.apply(f,arguments)},l={},p={}.propertyIsEnumerable,y=Object.getOwnPropertyDescriptor,h=y&&!p.call({1:2},1);l.f=h?function(t){var e=y(this,t);return!!e&&e.enumerable}:p;var g,v,d=function(t,e){return{enumerable:!(1&t),configurable:!(2&t),writable:!(4&t),value:e}},b=a,m=Function.prototype,S=m.bind,w=m.call,O=b&&S.bind(w,w),j=b?function(t){return t&&O(t)}:function(t){return t&&function(){return w.apply(t,arguments)}},L=j,P=L({}.toString),T=L("".slice),R=function(t){return T(P(t),8,-1)},E=i,x=R,k=Object,A=j("".split),I=E((function(){return!k("z").propertyIsEnumerable(0)}))?function(t){return"String"==x(t)?A(t,""):k(t)}:k,F=function(t){return null==t},M=F,U=TypeError,C=function(t){if(M(t))throw U("Can't call method on "+t);return t},_=I,G=C,D=function(t){return _(G(t))},z=function(t){return"function"==typeof t},N=z,B="object"==typeof document&&document.all,q=void 0===B&&void 0!==B?function(t){return"object"==typeof t?null!==t:N(t)||t===B}:function(t){return"object"==typeof t?null!==t:N(t)},V=n,W=z,H=function(t){return W(t)?t:void 0},Z=function(t,e){return arguments.length<2?H(V[t]):V[t]&&V[t][e]},Q=j({}.isPrototypeOf),Y=n,X=Z("navigator","userAgent")||"",K=Y.process,$=Y.Deno,J=K&&K.versions||$&&$.version,tt=J&&J.v8;tt&&(v=(g=tt.split("."))[0]>0&&g[0]<4?1:+(g[0]+g[1])),!v&&X&&(!(g=X.match(/Edge\/(\d+)/))||g[1]>=74)&&(g=X.match(/Chrome\/(\d+)/))&&(v=+g[1]);var et=v,rt=et,nt=i,ot=!!Object.getOwnPropertySymbols&&!nt((function(){var t=Symbol();return!String(t)||!(Object(t)instanceof Symbol)||!Symbol.sham&&rt&&rt<41})),it=ot&&!Symbol.sham&&"symbol"==typeof Symbol.iterator,ut=Z,at=z,ct=Q,ft=Object,st=it?function(t){return"symbol"==typeof t}:function(t){var e=ut("Symbol");return at(e)&&ct(e.prototype,ft(t))},lt=String,pt=function(t){try{return lt(t)}catch(t){return"Object"}},yt=z,ht=pt,gt=TypeError,vt=function(t){if(yt(t))return t;throw gt(ht(t)+" is not a function")},dt=vt,bt=F,mt=function(t,e){var r=t[e];return bt(r)?void 0:dt(r)},St=s,wt=z,Ot=q,jt=TypeError,Lt={exports:{}},Pt=n,Tt=Object.defineProperty,Rt=function(t,e){try{Tt(Pt,t,{value:e,configurable:!0,writable:!0})}catch(r){Pt[t]=e}return e},Et=Rt,xt="__core-js_shared__",kt=n[xt]||Et(xt,{}),At=kt;(Lt.exports=function(t,e){return At[t]||(At[t]=void 0!==e?e:{})})("versions",[]).push({version:"3.25.0",mode:"global",copyright:"© 2014-2022 Denis Pushkarev (zloirock.ru)",license:"https://github.com/zloirock/core-js/blob/v3.25.0/LICENSE",source:"https://github.com/zloirock/core-js"});var It=C,Ft=Object,Mt=function(t){return Ft(It(t))},Ut=Mt,Ct=j({}.hasOwnProperty),_t=Object.hasOwn||function(t,e){return Ct(Ut(t),e)},Gt=j,Dt=0,zt=Math.random(),Nt=Gt(1..toString),Bt=function(t){return"Symbol("+(void 0===t?"":t)+")_"+Nt(++Dt+zt,36)},qt=n,Vt=Lt.exports,Wt=_t,Ht=Bt,Zt=ot,Qt=it,Yt=Vt("wks"),Xt=qt.Symbol,Kt=Xt&&Xt.for,$t=Qt?Xt:Xt&&Xt.withoutSetter||Ht,Jt=function(t){if(!Wt(Yt,t)||!Zt&&"string"!=typeof Yt[t]){var e="Symbol."+t;Zt&&Wt(Xt,t)?Yt[t]=Xt[t]:Yt[t]=Qt&&Kt?Kt(e):$t(e)}return Yt[t]},te=s,ee=q,re=st,ne=mt,oe=function(t,e){var r,n;if("string"===e&&wt(r=t.toString)&&!Ot(n=St(r,t)))return n;if(wt(r=t.valueOf)&&!Ot(n=St(r,t)))return n;if("string"!==e&&wt(r=t.toString)&&!Ot(n=St(r,t)))return n;throw jt("Can't convert object to primitive value")},ie=TypeError,ue=Jt("toPrimitive"),ae=function(t,e){if(!ee(t)||re(t))return t;var r,n=ne(t,ue);if(n){if(void 0===e&&(e="default"),r=te(n,t,e),!ee(r)||re(r))return r;throw ie("Can't convert object to primitive value")}return void 0===e&&(e="number"),oe(t,e)},ce=st,fe=function(t){var e=ae(t,"string");return ce(e)?e:e+""},se=q,le=n.document,pe=se(le)&&se(le.createElement),ye=function(t){return pe?le.createElement(t):{}},he=ye,ge=!u&&!i((function(){return 7!=Object.defineProperty(he("div"),"a",{get:function(){return 7}}).a})),ve=u,de=s,be=l,me=d,Se=D,we=fe,Oe=_t,je=ge,Le=Object.getOwnPropertyDescriptor;o.f=ve?Le:function(t,e){if(t=Se(t),e=we(e),je)try{return Le(t,e)}catch(t){}if(Oe(t,e))return me(!de(be.f,t,e),t[e])};var Pe={},Te=u&&i((function(){return 42!=Object.defineProperty((function(){}),"prototype",{value:42,writable:!1}).prototype})),Re=q,Ee=String,xe=TypeError,ke=function(t){if(Re(t))return t;throw xe(Ee(t)+" is not an object")},Ae=u,Ie=ge,Fe=Te,Me=ke,Ue=fe,Ce=TypeError,_e=Object.defineProperty,Ge=Object.getOwnPropertyDescriptor,De="enumerable",ze="configurable",Ne="writable";Pe.f=Ae?Fe?function(t,e,r){if(Me(t),e=Ue(e),Me(r),"function"==typeof t&&"prototype"===e&&"value"in r&&Ne in r&&!r.writable){var n=Ge(t,e);n&&n.writable&&(t[e]=r.value,r={configurable:ze in r?r.configurable:n.configurable,enumerable:De in r?r.enumerable:n.enumerable,writable:!1})}return _e(t,e,r)}:_e:function(t,e,r){if(Me(t),e=Ue(e),Me(r),Ie)try{return _e(t,e,r)}catch(t){}if("get"in r||"set"in r)throw Ce("Accessors not supported");return"value"in r&&(t[e]=r.value),t};var Be=Pe,qe=d,Ve=u?function(t,e,r){return Be.f(t,e,qe(1,r))}:function(t,e,r){return t[e]=r,t},We={exports:{}},He=u,Ze=_t,Qe=Function.prototype,Ye=He&&Object.getOwnPropertyDescriptor,Xe=Ze(Qe,"name"),Ke={EXISTS:Xe,PROPER:Xe&&"something"===function(){}.name,CONFIGURABLE:Xe&&(!He||He&&Ye(Qe,"name").configurable)},$e=z,Je=kt,tr=j(Function.toString);$e(Je.inspectSource)||(Je.inspectSource=function(t){return tr(t)});var er,rr,nr,or=Je.inspectSource,ir=z,ur=n.WeakMap,ar=ir(ur)&&/native code/.test(String(ur)),cr=Lt.exports,fr=Bt,sr=cr("keys"),lr=function(t){return sr[t]||(sr[t]=fr(t))},pr={},yr=ar,hr=n,gr=j,vr=q,dr=Ve,br=_t,mr=kt,Sr=lr,wr=pr,Or="Object already initialized",jr=hr.TypeError,Lr=hr.WeakMap;if(yr||mr.state){var Pr=mr.state||(mr.state=new Lr),Tr=gr(Pr.get),Rr=gr(Pr.has),Er=gr(Pr.set);er=function(t,e){if(Rr(Pr,t))throw jr(Or);return e.facade=t,Er(Pr,t,e),e},rr=function(t){return Tr(Pr,t)||{}},nr=function(t){return Rr(Pr,t)}}else{var xr=Sr("state");wr[xr]=!0,er=function(t,e){if(br(t,xr))throw jr(Or);return e.facade=t,dr(t,xr,e),e},rr=function(t){return br(t,xr)?t[xr]:{}},nr=function(t){return br(t,xr)}}var kr={set:er,get:rr,has:nr,enforce:function(t){return nr(t)?rr(t):er(t,{})},getterFor:function(t){return function(e){var r;if(!vr(e)||(r=rr(e)).type!==t)throw jr("Incompatible receiver, "+t+" required");return r}}},Ar=i,Ir=z,Fr=_t,Mr=u,Ur=Ke.CONFIGURABLE,Cr=or,_r=kr.enforce,Gr=kr.get,Dr=Object.defineProperty,zr=Mr&&!Ar((function(){return 8!==Dr((function(){}),"length",{value:8}).length})),Nr=String(String).split("String"),Br=We.exports=function(t,e,r){"Symbol("===String(e).slice(0,7)&&(e="["+String(e).replace(/^Symbol\(([^)]*)\)/,"$1")+"]"),r&&r.getter&&(e="get "+e),r&&r.setter&&(e="set "+e),(!Fr(t,"name")||Ur&&t.name!==e)&&(Mr?Dr(t,"name",{value:e,configurable:!0}):t.name=e),zr&&r&&Fr(r,"arity")&&t.length!==r.arity&&Dr(t,"length",{value:r.arity});try{r&&Fr(r,"constructor")&&r.constructor?Mr&&Dr(t,"prototype",{writable:!1}):t.prototype&&(t.prototype=void 0)}catch(t){}var n=_r(t);return Fr(n,"source")||(n.source=Nr.join("string"==typeof e?e:"")),t};Function.prototype.toString=Br((function(){return Ir(this)&&Gr(this).source||Cr(this)}),"toString");var qr=z,Vr=Pe,Wr=We.exports,Hr=Rt,Zr=function(t,e,r,n){n||(n={});var o=n.enumerable,i=void 0!==n.name?n.name:e;if(qr(r)&&Wr(r,i,n),n.global)o?t[e]=r:Hr(e,r);else{try{n.unsafe?t[e]&&(o=!0):delete t[e]}catch(t){}o?t[e]=r:Vr.f(t,e,{value:r,enumerable:!1,configurable:!n.nonConfigurable,writable:!n.nonWritable})}return t},Qr={},Yr=Math.ceil,Xr=Math.floor,Kr=Math.trunc||function(t){var e=+t;return(e>0?Xr:Yr)(e)},$r=function(t){var e=+t;return e!=e||0===e?0:Kr(e)},Jr=$r,tn=Math.max,en=Math.min,rn=function(t,e){var r=Jr(t);return r<0?tn(r+e,0):en(r,e)},nn=$r,on=Math.min,un=function(t){return t>0?on(nn(t),9007199254740991):0},an=function(t){return un(t.length)},cn=D,fn=rn,sn=an,ln=function(t){return function(e,r,n){var o,i=cn(e),u=sn(i),a=fn(n,u);if(t&&r!=r){for(;u>a;)if((o=i[a++])!=o)return!0}else for(;u>a;a++)if((t||a in i)&&i[a]===r)return t||a||0;return!t&&-1}},pn={includes:ln(!0),indexOf:ln(!1)},yn=_t,hn=D,gn=pn.indexOf,vn=pr,dn=j([].push),bn=function(t,e){var r,n=hn(t),o=0,i=[];for(r in n)!yn(vn,r)&&yn(n,r)&&dn(i,r);for(;e.length>o;)yn(n,r=e[o++])&&(~gn(i,r)||dn(i,r));return i},mn=["constructor","hasOwnProperty","isPrototypeOf","propertyIsEnumerable","toLocaleString","toString","valueOf"],Sn=bn,wn=mn.concat("length","prototype");Qr.f=Object.getOwnPropertyNames||function(t){return Sn(t,wn)};var On={};On.f=Object.getOwnPropertySymbols;var jn=Z,Ln=Qr,Pn=On,Tn=ke,Rn=j([].concat),En=jn("Reflect","ownKeys")||function(t){var e=Ln.f(Tn(t)),r=Pn.f;return r?Rn(e,r(t)):e},xn=_t,kn=En,An=o,In=Pe,Fn=i,Mn=z,Un=/#|\.prototype\./,Cn=function(t,e){var r=Gn[_n(t)];return r==zn||r!=Dn&&(Mn(e)?Fn(e):!!e)},_n=Cn.normalize=function(t){return String(t).replace(Un,".").toLowerCase()},Gn=Cn.data={},Dn=Cn.NATIVE="N",zn=Cn.POLYFILL="P",Nn=Cn,Bn=n,qn=o.f,Vn=Ve,Wn=Zr,Hn=Rt,Zn=function(t,e,r){for(var n=kn(e),o=In.f,i=An.f,u=0;u<n.length;u++){var a=n[u];xn(t,a)||r&&xn(r,a)||o(t,a,i(e,a))}},Qn=Nn,Yn=function(t,e){var r,n,o,i,u,a=t.target,c=t.global,f=t.stat;if(r=c?Bn:f?Bn[a]||Hn(a,{}):(Bn[a]||{}).prototype)for(n in e){if(i=e[n],o=t.dontCallGetSet?(u=qn(r,n))&&u.value:r[n],!Qn(c?n:a+(f?".":"#")+n,t.forced)&&void 0!==o){if(typeof i==typeof o)continue;Zn(i,o)}(t.sham||o&&o.sham)&&Vn(i,"sham",!0),Wn(r,n,i,t)}},Xn=bn,Kn=mn,$n=Object.keys||function(t){return Xn(t,Kn)},Jn=u,to=j,eo=s,ro=i,no=$n,oo=On,io=l,uo=Mt,ao=I,co=Object.assign,fo=Object.defineProperty,so=to([].concat),lo=!co||ro((function(){if(Jn&&1!==co({b:1},co(fo({},"a",{enumerable:!0,get:function(){fo(this,"b",{value:3,enumerable:!1})}}),{b:2})).b)return!0;var t={},e={},r=Symbol(),n="abcdefghijklmnopqrst";return t[r]=7,n.split("").forEach((function(t){e[t]=t})),7!=co({},t)[r]||no(co({},e)).join("")!=n}))?function(t,e){for(var r=uo(t),n=arguments.length,o=1,i=oo.f,u=io.f;n>o;)for(var a,c=ao(arguments[o++]),f=i?so(no(c),i(c)):no(c),s=f.length,l=0;s>l;)a=f[l++],Jn&&!eo(u,c,a)||(r[a]=c[a]);return r}:co;Yn({target:"Object",stat:!0,arity:2,forced:Object.assign!==lo},{assign:lo});var po=R,yo=Array.isArray||function(t){return"Array"==po(t)},ho={};ho[Jt("toStringTag")]="z";var go="[object z]"===String(ho),vo=go,bo=z,mo=R,So=Jt("toStringTag"),wo=Object,Oo="Arguments"==mo(function(){return arguments}()),jo=vo?mo:function(t){var e,r,n;return void 0===t?"Undefined":null===t?"Null":"string"==typeof(r=function(t,e){try{return t[e]}catch(t){}}(e=wo(t),So))?r:Oo?mo(e):"Object"==(n=mo(e))&&bo(e.callee)?"Arguments":n},Lo=j,Po=i,To=z,Ro=jo,Eo=or,xo=function(){},ko=[],Ao=Z("Reflect","construct"),Io=/^\s*(?:class|function)\b/,Fo=Lo(Io.exec),Mo=!Io.exec(xo),Uo=function(t){if(!To(t))return!1;try{return Ao(xo,ko,t),!0}catch(t){return!1}},Co=function(t){if(!To(t))return!1;switch(Ro(t)){case"AsyncFunction":case"GeneratorFunction":case"AsyncGeneratorFunction":return!1}try{return Mo||!!Fo(Io,Eo(t))}catch(t){return!0}};Co.sham=!0;var _o=!Ao||Po((function(){var t;return Uo(Uo.call)||!Uo(Object)||!Uo((function(){t=!0}))||t}))?Co:Uo,Go=fe,Do=Pe,zo=d,No=function(t,e,r){var n=Go(e);n in t?Do.f(t,n,zo(0,r)):t[n]=r},Bo=i,qo=et,Vo=Jt("species"),Wo=j([].slice),Ho=Yn,Zo=yo,Qo=_o,Yo=q,Xo=rn,Ko=an,$o=D,Jo=No,ti=Jt,ei=Wo,ri=function(t){return qo>=51||!Bo((function(){var e=[];return(e.constructor={})[Vo]=function(){return{foo:1}},1!==e[t](Boolean).foo}))}("slice"),ni=ti("species"),oi=Array,ii=Math.max;Ho({target:"Array",proto:!0,forced:!ri},{slice:function(t,e){var r,n,o,i=$o(this),u=Ko(i),a=Xo(t,u),c=Xo(void 0===e?u:e,u);if(Zo(i)&&(r=i.constructor,(Qo(r)&&(r===oi||Zo(r.prototype))||Yo(r)&&null===(r=r[ni]))&&(r=void 0),r===oi||void 0===r))return ei(i,a,c);for(n=new(void 0===r?oi:r)(ii(c-a,0)),o=0;a<c;a++,o++)a in i&&Jo(n,o,i[a]);return n.length=o,n}});var ui=jo,ai=go?{}.toString:function(){return"[object "+ui(this)+"]"};go||Zr(Object.prototype,"toString",ai,{unsafe:!0});var ci=jo,fi=String,si=function(t){if("Symbol"===ci(t))throw TypeError("Cannot convert a Symbol value to a string");return fi(t)},li=ke,pi=s,yi=_t,hi=Q,gi=function(){var t=li(this),e="";return t.hasIndices&&(e+="d"),t.global&&(e+="g"),t.ignoreCase&&(e+="i"),t.multiline&&(e+="m"),t.dotAll&&(e+="s"),t.unicode&&(e+="u"),t.unicodeSets&&(e+="v"),t.sticky&&(e+="y"),e},vi=RegExp.prototype,di=Ke.PROPER,bi=Zr,mi=ke,Si=si,wi=i,Oi=function(t){var e=t.flags;return void 0!==e||"flags"in vi||yi(t,"flags")||!hi(vi,t)?e:pi(gi,t)},ji="toString",Li=RegExp.prototype.toString,Pi=wi((function(){return"/a/b"!=Li.call({source:"a",flags:"b"})})),Ti=di&&Li.name!=ji;(Pi||Ti)&&bi(RegExp.prototype,ji,(function(){var t=mi(this);return"/"+Si(t.source)+"/"+Si(Oi(t))}),{unsafe:!0});var Ri={},Ei=u,xi=Te,ki=Pe,Ai=ke,Ii=D,Fi=$n;Ri.f=Ei&&!xi?Object.defineProperties:function(t,e){Ai(t);for(var r,n=Ii(e),o=Fi(e),i=o.length,u=0;i>u;)ki.f(t,r=o[u++],n[r]);return t};var Mi,Ui=Z("document","documentElement"),Ci=ke,_i=Ri,Gi=mn,Di=pr,zi=Ui,Ni=ye,Bi=lr("IE_PROTO"),qi=function(){},Vi=function(t){return"<script>"+t+"</"+"script>"},Wi=function(t){t.write(Vi("")),t.close();var e=t.parentWindow.Object;return t=null,e},Hi=function(){try{Mi=new ActiveXObject("htmlfile")}catch(t){}var t,e;Hi="undefined"!=typeof document?document.domain&&Mi?Wi(Mi):((e=Ni("iframe")).style.display="none",zi.appendChild(e),e.src=String("javascript:"),(t=e.contentWindow.document).open(),t.write(Vi("document.F=Object")),t.close(),t.F):Wi(Mi);for(var r=Gi.length;r--;)delete Hi.prototype[Gi[r]];return Hi()};Di[Bi]=!0;var Zi=Object.create||function(t,e){var r;return null!==t?(qi.prototype=Ci(t),r=new qi,qi.prototype=null,r[Bi]=t):r=Hi(),void 0===e?r:_i.f(r,e)},Qi=Jt,Yi=Zi,Xi=Pe.f,Ki=Qi("unscopables"),$i=Array.prototype;null==$i[Ki]&&Xi($i,Ki,{configurable:!0,value:Yi(null)});var Ji,tu,eu,ru={},nu=!i((function(){function t(){}return t.prototype.constructor=null,Object.getPrototypeOf(new t)!==t.prototype})),ou=_t,iu=z,uu=Mt,au=nu,cu=lr("IE_PROTO"),fu=Object,su=fu.prototype,lu=au?fu.getPrototypeOf:function(t){var e=uu(t);if(ou(e,cu))return e[cu];var r=e.constructor;return iu(r)&&e instanceof r?r.prototype:e instanceof fu?su:null},pu=i,yu=z,hu=q,gu=lu,vu=Zr,du=Jt("iterator"),bu=!1;[].keys&&("next"in(eu=[].keys())?(tu=gu(gu(eu)))!==Object.prototype&&(Ji=tu):bu=!0),(!hu(Ji)||pu((function(){var t={};return Ji[du].call(t)!==t})))&&(Ji={}),yu(Ji[du])||vu(Ji,du,(function(){return this}));var mu={IteratorPrototype:Ji,BUGGY_SAFARI_ITERATORS:bu},Su=Pe.f,wu=_t,Ou=Jt("toStringTag"),ju=function(t,e,r){t&&!r&&(t=t.prototype),t&&!wu(t,Ou)&&Su(t,Ou,{configurable:!0,value:e})},Lu=mu.IteratorPrototype,Pu=Zi,Tu=d,Ru=ju,Eu=ru,xu=function(){return this},ku=function(t,e,r,n){var o=e+" Iterator";return t.prototype=Pu(Lu,{next:Tu(+!n,r)}),Ru(t,o,!1),Eu[o]=xu,t},Au=z,Iu=String,Fu=TypeError,Mu=j,Uu=ke,Cu=function(t){if("object"==typeof t||Au(t))return t;throw Fu("Can't set "+Iu(t)+" as a prototype")},_u=Object.setPrototypeOf||("__proto__"in{}?function(){var t,e=!1,r={};try{(t=Mu(Object.getOwnPropertyDescriptor(Object.prototype,"__proto__").set))(r,[]),e=r instanceof Array}catch(t){}return function(r,n){return Uu(r),Cu(n),e?t(r,n):r.__proto__=n,r}}():void 0),Gu=Yn,Du=s,zu=z,Nu=ku,Bu=lu,qu=_u,Vu=ju,Wu=Ve,Hu=Zr,Zu=ru,Qu=Ke.PROPER,Yu=Ke.CONFIGURABLE,Xu=mu.IteratorPrototype,Ku=mu.BUGGY_SAFARI_ITERATORS,$u=Jt("iterator"),Ju="keys",ta="values",ea="entries",ra=function(){return this},na=function(t,e,r,n,o,i,u){Nu(r,e,n);var a,c,f,s=function(t){if(t===o&&g)return g;if(!Ku&&t in y)return y[t];switch(t){case Ju:case ta:case ea:return function(){return new r(this,t)}}return function(){return new r(this)}},l=e+" Iterator",p=!1,y=t.prototype,h=y[$u]||y["@@iterator"]||o&&y[o],g=!Ku&&h||s(o),v="Array"==e&&y.entries||h;if(v&&(a=Bu(v.call(new t)))!==Object.prototype&&a.next&&(Bu(a)!==Xu&&(qu?qu(a,Xu):zu(a[$u])||Hu(a,$u,ra)),Vu(a,l,!0)),Qu&&o==ta&&h&&h.name!==ta&&(Yu?Wu(y,"name",ta):(p=!0,g=function(){return Du(h,this)})),o)if(c={values:s(ta),keys:i?g:s(Ju),entries:s(ea)},u)for(f in c)(Ku||p||!(f in y))&&Hu(y,f,c[f]);else Gu({target:e,proto:!0,forced:Ku||p},c);return y[$u]!==g&&Hu(y,$u,g,{name:o}),Zu[e]=g,c},oa=D,ia=function(t){$i[Ki][t]=!0},ua=ru,aa=kr,ca=Pe.f,fa=na,sa=u,la="Array Iterator",pa=aa.set,ya=aa.getterFor(la),ha=fa(Array,"Array",(function(t,e){pa(this,{type:la,target:oa(t),index:0,kind:e})}),(function(){var t=ya(this),e=t.target,r=t.kind,n=t.index++;return!e||n>=e.length?(t.target=void 0,{value:void 0,done:!0}):"keys"==r?{value:n,done:!1}:"values"==r?{value:e[n],done:!1}:{value:[n,e[n]],done:!1}}),"values"),ga=ua.Arguments=ua.Array;if(ia("keys"),ia("values"),ia("entries"),sa&&"values"!==ga.name)try{ca(ga,"name",{value:"values"})}catch(t){}var va=j,da=$r,ba=si,ma=C,Sa=va("".charAt),wa=va("".charCodeAt),Oa=va("".slice),ja=function(t){return function(e,r){var n,o,i=ba(ma(e)),u=da(r),a=i.length;return u<0||u>=a?t?"":void 0:(n=wa(i,u))<55296||n>56319||u+1===a||(o=wa(i,u+1))<56320||o>57343?t?Sa(i,u):n:t?Oa(i,u,u+2):o-56320+(n-55296<<10)+65536}},La={codeAt:ja(!1),charAt:ja(!0)}.charAt,Pa=si,Ta=kr,Ra=na,Ea="String Iterator",xa=Ta.set,ka=Ta.getterFor(Ea);Ra(String,"String",(function(t){xa(this,{type:Ea,string:Pa(t),index:0})}),(function(){var t,e=ka(this),r=e.string,n=e.index;return n>=r.length?{value:void 0,done:!0}:(t=La(r,n),e.index+=t.length,{value:t,done:!1})}));var Aa=ye("span").classList,Ia=Aa&&Aa.constructor&&Aa.constructor.prototype,Fa=Ia===Object.prototype?void 0:Ia,Ma=n,Ua={CSSRuleList:0,CSSStyleDeclaration:0,CSSValueList:0,ClientRectList:0,DOMRectList:0,DOMStringList:0,DOMTokenList:1,DataTransferItemList:0,FileList:0,HTMLAllCollection:0,HTMLCollection:0,HTMLFormElement:0,HTMLSelectElement:0,MediaList:0,MimeTypeArray:0,NamedNodeMap:0,NodeList:1,PaintRequestList:0,Plugin:0,PluginArray:0,SVGLengthList:0,SVGNumberList:0,SVGPathSegList:0,SVGPointList:0,SVGStringList:0,SVGTransformList:0,SourceBufferList:0,StyleSheetList:0,TextTrackCueList:0,TextTrackList:0,TouchList:0},Ca=Fa,_a=ha,Ga=Ve,Da=Jt,za=Da("iterator"),Na=Da("toStringTag"),Ba=_a.values,qa=function(t,e){if(t){if(t[za]!==Ba)try{Ga(t,za,Ba)}catch(e){t[za]=Ba}if(t[Na]||Ga(t,Na,e),Ua[e])for(var r in _a)if(t[r]!==_a[r])try{Ga(t,r,_a[r])}catch(e){t[r]=_a[r]}}};for(var Va in Ua)qa(Ma[Va]&&Ma[Va].prototype,Va);qa(Ca,"DOMTokenList");var Wa=i,Ha=Jt("iterator"),Za=!Wa((function(){var t=new URL("b?a=1&b=2&c=3","http://a"),e=t.searchParams,r="";return t.pathname="c%20d",e.forEach((function(t,n){e.delete("b"),r+=n+t})),!e.sort||"http://a/c%20d?a=1&c=3"!==t.href||"3"!==e.get("c")||"a=1"!==String(new URLSearchParams("?a=1"))||!e[Ha]||"a"!==new URL("https://a@b").username||"b"!==new URLSearchParams(new URLSearchParams("a=b")).get("a")||"xn--e1aybc"!==new URL("http://тест").host||"#%D0%B1"!==new URL("http://a#б").hash||"a1c3"!==r||"x"!==new URL("http://x",void 0).host})),Qa=Zr,Ya=Q,Xa=TypeError,Ka=vt,$a=a,Ja=j(j.bind),tc=jo,ec=mt,rc=F,nc=ru,oc=Jt("iterator"),ic=function(t){if(!rc(t))return ec(t,oc)||ec(t,"@@iterator")||nc[tc(t)]},uc=s,ac=vt,cc=ke,fc=pt,sc=ic,lc=TypeError,pc=TypeError,yc=rn,hc=an,gc=No,vc=Array,dc=Math.max,bc=function(t,e,r){for(var n=hc(t),o=yc(e,n),i=yc(void 0===r?n:r,n),u=vc(dc(i-o,0)),a=0;o<i;o++,a++)gc(u,a,t[o]);return u.length=a,u},mc=Math.floor,Sc=function(t,e){var r=t.length,n=mc(r/2);return r<8?wc(t,e):Oc(t,Sc(bc(t,0,n),e),Sc(bc(t,n),e),e)},wc=function(t,e){for(var r,n,o=t.length,i=1;i<o;){for(n=i,r=t[i];n&&e(t[n-1],r)>0;)t[n]=t[--n];n!==i++&&(t[n]=r)}return t},Oc=function(t,e,r,n){for(var o=e.length,i=r.length,u=0,a=0;u<o||a<i;)t[u+a]=u<o&&a<i?n(e[u],r[a])<=0?e[u++]:r[a++]:u<o?e[u++]:r[a++];return t},jc=Yn,Lc=n,Pc=s,Tc=j,Rc=u,Ec=Za,xc=Zr,kc=function(t,e,r){for(var n in e)Qa(t,n,e[n],r);return t},Ac=ju,Ic=ku,Fc=kr,Mc=function(t,e){if(Ya(e,t))return t;throw Xa("Incorrect invocation")},Uc=z,Cc=_t,_c=function(t,e){return Ka(t),void 0===e?t:$a?Ja(t,e):function(){return t.apply(e,arguments)}},Gc=jo,Dc=ke,zc=q,Nc=si,Bc=Zi,qc=d,Vc=function(t,e){var r=arguments.length<2?sc(t):e;if(ac(r))return cc(uc(r,t));throw lc(fc(t)+" is not iterable")},Wc=ic,Hc=function(t,e){if(t<e)throw pc("Not enough arguments");return t},Zc=Sc,Qc=Jt("iterator"),Yc="URLSearchParams",Xc="URLSearchParamsIterator",Kc=Fc.set,$c=Fc.getterFor(Yc),Jc=Fc.getterFor(Xc),tf=Object.getOwnPropertyDescriptor,ef=function(t){if(!Rc)return Lc[t];var e=tf(Lc,t);return e&&e.value},rf=ef("fetch"),nf=ef("Request"),of=ef("Headers"),uf=nf&&nf.prototype,af=of&&of.prototype,cf=Lc.RegExp,ff=Lc.TypeError,sf=Lc.decodeURIComponent,lf=Lc.encodeURIComponent,pf=Tc("".charAt),yf=Tc([].join),hf=Tc([].push),gf=Tc("".replace),vf=Tc([].shift),df=Tc([].splice),bf=Tc("".split),mf=Tc("".slice),Sf=/\+/g,wf=Array(4),Of=function(t){return wf[t-1]||(wf[t-1]=cf("((?:%[\\da-f]{2}){"+t+"})","gi"))},jf=function(t){try{return sf(t)}catch(e){return t}},Lf=function(t){var e=gf(t,Sf," "),r=4;try{return sf(e)}catch(t){for(;r;)e=gf(e,Of(r--),jf);return e}},Pf=/[!'()~]|%20/g,Tf={"!":"%21","'":"%27","(":"%28",")":"%29","~":"%7E","%20":"+"},Rf=function(t){return Tf[t]},Ef=function(t){return gf(lf(t),Pf,Rf)},xf=Ic((function(t,e){Kc(this,{type:Xc,iterator:Vc($c(t).entries),kind:e})}),"Iterator",(function(){var t=Jc(this),e=t.kind,r=t.iterator.next(),n=r.value;return r.done||(r.value="keys"===e?n.key:"values"===e?n.value:[n.key,n.value]),r}),!0),kf=function(t){this.entries=[],this.url=null,void 0!==t&&(zc(t)?this.parseObject(t):this.parseQuery("string"==typeof t?"?"===pf(t,0)?mf(t,1):t:Nc(t)))};kf.prototype={type:Yc,bindURL:function(t){this.url=t,this.update()},parseObject:function(t){var e,r,n,o,i,u,a,c=Wc(t);if(c)for(r=(e=Vc(t,c)).next;!(n=Pc(r,e)).done;){if(i=(o=Vc(Dc(n.value))).next,(u=Pc(i,o)).done||(a=Pc(i,o)).done||!Pc(i,o).done)throw ff("Expected sequence with length 2");hf(this.entries,{key:Nc(u.value),value:Nc(a.value)})}else for(var f in t)Cc(t,f)&&hf(this.entries,{key:f,value:Nc(t[f])})},parseQuery:function(t){if(t)for(var e,r,n=bf(t,"&"),o=0;o<n.length;)(e=n[o++]).length&&(r=bf(e,"="),hf(this.entries,{key:Lf(vf(r)),value:Lf(yf(r,"="))}))},serialize:function(){for(var t,e=this.entries,r=[],n=0;n<e.length;)t=e[n++],hf(r,Ef(t.key)+"="+Ef(t.value));return yf(r,"&")},update:function(){this.entries.length=0,this.parseQuery(this.url.query)},updateURL:function(){this.url&&this.url.update()}};var Af=function(){Mc(this,If);var t=arguments.length>0?arguments[0]:void 0;Kc(this,new kf(t))},If=Af.prototype;if(kc(If,{append:function(t,e){Hc(arguments.length,2);var r=$c(this);hf(r.entries,{key:Nc(t),value:Nc(e)}),r.updateURL()},delete:function(t){Hc(arguments.length,1);for(var e=$c(this),r=e.entries,n=Nc(t),o=0;o<r.length;)r[o].key===n?df(r,o,1):o++;e.updateURL()},get:function(t){Hc(arguments.length,1);for(var e=$c(this).entries,r=Nc(t),n=0;n<e.length;n++)if(e[n].key===r)return e[n].value;return null},getAll:function(t){Hc(arguments.length,1);for(var e=$c(this).entries,r=Nc(t),n=[],o=0;o<e.length;o++)e[o].key===r&&hf(n,e[o].value);return n},has:function(t){Hc(arguments.length,1);for(var e=$c(this).entries,r=Nc(t),n=0;n<e.length;)if(e[n++].key===r)return!0;return!1},set:function(t,e){Hc(arguments.length,1);for(var r,n=$c(this),o=n.entries,i=!1,u=Nc(t),a=Nc(e),c=0;c<o.length;c++)(r=o[c]).key===u&&(i?df(o,c--,1):(i=!0,r.value=a));i||hf(o,{key:u,value:a}),n.updateURL()},sort:function(){var t=$c(this);Zc(t.entries,(function(t,e){return t.key>e.key?1:-1})),t.updateURL()},forEach:function(t){for(var e,r=$c(this).entries,n=_c(t,arguments.length>1?arguments[1]:void 0),o=0;o<r.length;)n((e=r[o++]).value,e.key,this)},keys:function(){return new xf(this,"keys")},values:function(){return new xf(this,"values")},entries:function(){return new xf(this,"entries")}},{enumerable:!0}),xc(If,Qc,If.entries,{name:"entries"}),xc(If,"toString",(function(){return $c(this).serialize()}),{enumerable:!0}),Ac(Af,Yc),jc({global:!0,constructor:!0,forced:!Ec},{URLSearchParams:Af}),!Ec&&Uc(of)){var Ff=Tc(af.has),Mf=Tc(af.set),Uf=function(t){if(zc(t)){var e,r=t.body;if(Gc(r)===Yc)return e=t.headers?new of(t.headers):new of,Ff(e,"content-type")||Mf(e,"content-type","application/x-www-form-urlencoded;charset=UTF-8"),Bc(t,{body:qc(0,Nc(r)),headers:qc(0,e)})}return t};if(Uc(rf)&&jc({global:!0,enumerable:!0,dontCallGetSet:!0,forced:!0},{fetch:function(t){return rf(t,arguments.length>1?Uf(arguments[1]):{})}}),Uc(nf)){var Cf=function(t){return Mc(this,uf),new nf(t,arguments.length>1?Uf(arguments[1]):{})};uf.constructor=Cf,Cf.prototype=uf,jc({global:!0,constructor:!0,dontCallGetSet:!0,forced:!0},{Request:Cf})}}var _f={request:"GetMap",service:"WMS",srs:"EPSG:3857"},Gf=20037508.34789244,Df=-Gf,zf=Gf;function Nf(t,e,r){var n=40075016.69578488/Math.pow(2,r);return[Df+t*n,zf-(e+1)*n,Df+(t+1)*n,zf-e*n]}t.WmsMapType=function(t){var e=t.url,r=t.layers,n=t.styles,o=void 0===n?"":n,i=t.bgcolor,u=void 0===i?"0xFFFFFF":i,a=t.version,c=void 0===a?"1.1.1":a,f=t.transparent,s=void 0===f||f,l=t.format,p=void 0===l?"image/png":l,y=t.outline,h=void 0!==y&&y,g=t.name,v=t.alt,d=t.maxZoom,b=t.minZoom,m=t.opacity,S=new google.maps.Size(256,256),w=Object.assign({layers:r,styles:o,version:c,transparent:String(s),bgcolor:u,format:p,outline:String(h),width:String(S.width),height:String(S.height)},_f);"?"!==e.slice(-1)&&(e+="?");return new google.maps.ImageMapType({getTileUrl:function(t,r){return e+new URLSearchParams(Object.assign({bbox:Nf(t.x,t.y,r).join(",")},w)).toString()},name:g,alt:v,opacity:m,maxZoom:d,minZoom:b,tileSize:S})},t.xyzToBounds=Nf,Object.defineProperty(t,"__esModule",{value:!0})}));
