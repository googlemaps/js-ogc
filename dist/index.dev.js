this.google=this.google||{},this.google.maps=this.google.maps||{},this.google.maps.plugins=this.google.maps.plugins||{},this.google.maps.plugins.ogc=function(t,n){"use strict";var r,e,o="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof window?window:"undefined"!=typeof global?global:"undefined"!=typeof self?self:{},i=function(t){try{return!!t()}catch(t){return!0}},u=!i((function(){return 7!=Object.defineProperty({},1,{get:function(){return 7}})[1]})),c=Function.prototype,a=c.bind,f=c.call,s=a&&a.bind(f),l=a?function(t){return t&&s(f,t)}:function(t){return t&&function(){return f.apply(t,arguments)}},p=function(t){return t&&t.Math==Math&&t},g=p("object"==typeof globalThis&&globalThis)||p("object"==typeof window&&window)||p("object"==typeof self&&self)||p("object"==typeof o&&o)||function(){return this}()||Function("return this")(),y=g.TypeError,v=function(t){if(null==t)throw y("Can't call method on "+t);return t},b=v,h=g.Object,m=function(t){return h(b(t))},d=m,S=l({}.hasOwnProperty),O=Object.hasOwn||function(t,n){return S(d(t),n)},j=u,w=O,P=Function.prototype,T=j&&Object.getOwnPropertyDescriptor,E=w(P,"name"),x={EXISTS:E,PROPER:E&&"something"===function(){}.name,CONFIGURABLE:E&&(!j||j&&T(P,"name").configurable)},F={},M=function(t){return"function"==typeof t},A=M,I=function(t){return"object"==typeof t?null!==t:A(t)},z=I,k=g.document,G=z(k)&&z(k.createElement),_=function(t){return G?k.createElement(t):{}},C=!u&&!i((function(){return 7!=Object.defineProperty(_("div"),"a",{get:function(){return 7}}).a})),L=g,N=I,R=L.String,D=L.TypeError,q=function(t){if(N(t))return t;throw D(R(t)+" is not an object")},B=Function.prototype.call,U=B.bind?B.bind(B):function(){return B.apply(B,arguments)},W=g,Z=M,X=function(t){return Z(t)?t:void 0},K=function(t,n){return arguments.length<2?X(W[t]):W[t]&&W[t][n]},V=l({}.isPrototypeOf),Y=g,$=K("navigator","userAgent")||"",H=Y.process,J=Y.Deno,Q=H&&H.versions||J&&J.version,tt=Q&&Q.v8;tt&&(e=(r=tt.split("."))[0]>0&&r[0]<4?1:+(r[0]+r[1])),!e&&$&&(!(r=$.match(/Edge\/(\d+)/))||r[1]>=74)&&(r=$.match(/Chrome\/(\d+)/))&&(e=+r[1]);var nt=e,rt=nt,et=i,ot=!!Object.getOwnPropertySymbols&&!et((function(){var t=Symbol();return!String(t)||!(Object(t)instanceof Symbol)||!Symbol.sham&&rt&&rt<41})),it=ot&&!Symbol.sham&&"symbol"==typeof Symbol.iterator,ut=K,ct=M,at=V,ft=it,st=g.Object,lt=ft?function(t){return"symbol"==typeof t}:function(t){var n=ut("Symbol");return ct(n)&&at(n.prototype,st(t))},pt=g.String,gt=M,yt=function(t){try{return pt(t)}catch(t){return"Object"}},vt=g.TypeError,bt=function(t){if(gt(t))return t;throw vt(yt(t)+" is not a function")},ht=U,mt=M,dt=I,St=g.TypeError,Ot={exports:{}},jt=g,wt=Object.defineProperty,Pt=function(t,n){try{wt(jt,t,{value:n,configurable:!0,writable:!0})}catch(r){jt[t]=n}return n},Tt=Pt,Et="__core-js_shared__",xt=g[Et]||Tt(Et,{}),Ft=xt;(Ot.exports=function(t,n){return Ft[t]||(Ft[t]=void 0!==n?n:{})})("versions",[]).push({version:"3.19.2",mode:"global",copyright:"© 2021 Denis Pushkarev (zloirock.ru)"});var Mt=l,At=0,It=Math.random(),zt=Mt(1..toString),kt=function(t){return"Symbol("+(void 0===t?"":t)+")_"+zt(++At+It,36)},Gt=g,_t=Ot.exports,Ct=O,Lt=kt,Nt=ot,Rt=it,Dt=_t("wks"),qt=Gt.Symbol,Bt=qt&&qt.for,Ut=Rt?qt:qt&&qt.withoutSetter||Lt,Wt=function(t){if(!Ct(Dt,t)||!Nt&&"string"!=typeof Dt[t]){var n="Symbol."+t;Nt&&Ct(qt,t)?Dt[t]=qt[t]:Dt[t]=Rt&&Bt?Bt(n):Ut(n)}return Dt[t]},Zt=U,Xt=I,Kt=lt,Vt=function(t,n){var r=t[n];return null==r?void 0:bt(r)},Yt=function(t,n){var r,e;if("string"===n&&mt(r=t.toString)&&!dt(e=ht(r,t)))return e;if(mt(r=t.valueOf)&&!dt(e=ht(r,t)))return e;if("string"!==n&&mt(r=t.toString)&&!dt(e=ht(r,t)))return e;throw St("Can't convert object to primitive value")},$t=Wt,Ht=g.TypeError,Jt=$t("toPrimitive"),Qt=function(t,n){if(!Xt(t)||Kt(t))return t;var r,e=Vt(t,Jt);if(e){if(void 0===n&&(n="default"),r=Zt(e,t,n),!Xt(r)||Kt(r))return r;throw Ht("Can't convert object to primitive value")}return void 0===n&&(n="number"),Yt(t,n)},tn=lt,nn=function(t){var n=Qt(t,"string");return tn(n)?n:n+""},rn=u,en=C,on=q,un=nn,cn=g.TypeError,an=Object.defineProperty;F.f=rn?an:function(t,n,r){if(on(t),n=un(n),on(r),en)try{return an(t,n,r)}catch(t){}if("get"in r||"set"in r)throw cn("Accessors not supported");return"value"in r&&(t[n]=r.value),t};var fn=u,sn=x.EXISTS,ln=l,pn=F.f,gn=Function.prototype,yn=ln(gn.toString),vn=/function\b(?:\s|\/\*[\S\s]*?\*\/|\/\/[^\n\r]*[\n\r]+)*([^\s(/]*)/,bn=ln(vn.exec);fn&&!sn&&pn(gn,"name",{configurable:!0,get:function(){try{return bn(vn,yn(this))[1]}catch(t){return""}}});var hn={},mn={},dn={}.propertyIsEnumerable,Sn=Object.getOwnPropertyDescriptor,On=Sn&&!dn.call({1:2},1);mn.f=On?function(t){var n=Sn(this,t);return!!n&&n.enumerable}:dn;var jn=function(t,n){return{enumerable:!(1&t),configurable:!(2&t),writable:!(4&t),value:n}},wn=l,Pn=wn({}.toString),Tn=wn("".slice),En=function(t){return Tn(Pn(t),8,-1)},xn=l,Fn=i,Mn=En,An=g.Object,In=xn("".split),zn=Fn((function(){return!An("z").propertyIsEnumerable(0)}))?function(t){return"String"==Mn(t)?In(t,""):An(t)}:An,kn=zn,Gn=v,_n=function(t){return kn(Gn(t))},Cn=u,Ln=U,Nn=mn,Rn=jn,Dn=_n,qn=nn,Bn=O,Un=C,Wn=Object.getOwnPropertyDescriptor;hn.f=Cn?Wn:function(t,n){if(t=Dn(t),n=qn(n),Un)try{return Wn(t,n)}catch(t){}if(Bn(t,n))return Rn(!Ln(Nn.f,t,n),t[n])};var Zn=F,Xn=jn,Kn=u?function(t,n,r){return Zn.f(t,n,Xn(1,r))}:function(t,n,r){return t[n]=r,t},Vn={exports:{}},Yn=M,$n=xt,Hn=l(Function.toString);Yn($n.inspectSource)||($n.inspectSource=function(t){return Hn(t)});var Jn,Qn,tr,nr=$n.inspectSource,rr=M,er=nr,or=g.WeakMap,ir=rr(or)&&/native code/.test(er(or)),ur=Ot.exports,cr=kt,ar=ur("keys"),fr={},sr=ir,lr=g,pr=l,gr=I,yr=Kn,vr=O,br=xt,hr=function(t){return ar[t]||(ar[t]=cr(t))},mr=fr,dr="Object already initialized",Sr=lr.TypeError,Or=lr.WeakMap;if(sr||br.state){var jr=br.state||(br.state=new Or),wr=pr(jr.get),Pr=pr(jr.has),Tr=pr(jr.set);Jn=function(t,n){if(Pr(jr,t))throw new Sr(dr);return n.facade=t,Tr(jr,t,n),n},Qn=function(t){return wr(jr,t)||{}},tr=function(t){return Pr(jr,t)}}else{var Er=hr("state");mr[Er]=!0,Jn=function(t,n){if(vr(t,Er))throw new Sr(dr);return n.facade=t,yr(t,Er,n),n},Qn=function(t){return vr(t,Er)?t[Er]:{}},tr=function(t){return vr(t,Er)}}var xr={set:Jn,get:Qn,has:tr,enforce:function(t){return tr(t)?Qn(t):Jn(t,{})},getterFor:function(t){return function(n){var r;if(!gr(n)||(r=Qn(n)).type!==t)throw Sr("Incompatible receiver, "+t+" required");return r}}},Fr=g,Mr=M,Ar=O,Ir=Kn,zr=Pt,kr=nr,Gr=x.CONFIGURABLE,_r=xr.get,Cr=xr.enforce,Lr=String(String).split("String");(Vn.exports=function(t,n,r,e){var o,i=!!e&&!!e.unsafe,u=!!e&&!!e.enumerable,c=!!e&&!!e.noTargetGet,a=e&&void 0!==e.name?e.name:n;Mr(r)&&("Symbol("===String(a).slice(0,7)&&(a="["+String(a).replace(/^Symbol\(([^)]*)\)/,"$1")+"]"),(!Ar(r,"name")||Gr&&r.name!==a)&&Ir(r,"name",a),(o=Cr(r)).source||(o.source=Lr.join("string"==typeof a?a:""))),t!==Fr?(i?!c&&t[n]&&(u=!0):delete t[n],u?t[n]=r:Ir(t,n,r)):u?t[n]=r:zr(n,r)})(Function.prototype,"toString",(function(){return Mr(this)&&_r(this).source||kr(this)}));var Nr={},Rr=Math.ceil,Dr=Math.floor,qr=function(t){var n=+t;return n!=n||0===n?0:(n>0?Dr:Rr)(n)},Br=qr,Ur=Math.max,Wr=Math.min,Zr=function(t,n){var r=Br(t);return r<0?Ur(r+n,0):Wr(r,n)},Xr=qr,Kr=Math.min,Vr=function(t){return t>0?Kr(Xr(t),9007199254740991):0},Yr=function(t){return Vr(t.length)},$r=_n,Hr=Zr,Jr=Yr,Qr=function(t){return function(n,r,e){var o,i=$r(n),u=Jr(i),c=Hr(e,u);if(t&&r!=r){for(;u>c;)if((o=i[c++])!=o)return!0}else for(;u>c;c++)if((t||c in i)&&i[c]===r)return t||c||0;return!t&&-1}},te={includes:Qr(!0),indexOf:Qr(!1)},ne=O,re=_n,ee=te.indexOf,oe=fr,ie=l([].push),ue=function(t,n){var r,e=re(t),o=0,i=[];for(r in e)!ne(oe,r)&&ne(e,r)&&ie(i,r);for(;n.length>o;)ne(e,r=n[o++])&&(~ee(i,r)||ie(i,r));return i},ce=["constructor","hasOwnProperty","isPrototypeOf","propertyIsEnumerable","toLocaleString","toString","valueOf"],ae=ue,fe=ce.concat("length","prototype");Nr.f=Object.getOwnPropertyNames||function(t){return ae(t,fe)};var se={};se.f=Object.getOwnPropertySymbols;var le=K,pe=Nr,ge=se,ye=q,ve=l([].concat),be=le("Reflect","ownKeys")||function(t){var n=pe.f(ye(t)),r=ge.f;return r?ve(n,r(t)):n},he=O,me=be,de=hn,Se=F,Oe=i,je=M,we=/#|\.prototype\./,Pe=function(t,n){var r=Ee[Te(t)];return r==Fe||r!=xe&&(je(n)?Oe(n):!!n)},Te=Pe.normalize=function(t){return String(t).replace(we,".").toLowerCase()},Ee=Pe.data={},xe=Pe.NATIVE="N",Fe=Pe.POLYFILL="P",Me=Pe,Ae=g,Ie=hn.f,ze=Kn,ke=Vn.exports,Ge=Pt,_e=function(t,n){for(var r=me(n),e=Se.f,o=de.f,i=0;i<r.length;i++){var u=r[i];he(t,u)||e(t,u,o(n,u))}},Ce=Me,Le=function(t,n){var r,e,o,i,u,c=t.target,a=t.global,f=t.stat;if(r=a?Ae:f?Ae[c]||Ge(c,{}):(Ae[c]||{}).prototype)for(e in n){if(i=n[e],o=t.noTargetGet?(u=Ie(r,e))&&u.value:r[e],!Ce(a?e:c+(f?".":"#")+e,t.forced)&&void 0!==o){if(typeof i==typeof o)continue;_e(i,o)}(t.sham||o&&o.sham)&&ze(i,"sham",!0),ke(r,e,i,t)}},Ne=ue,Re=ce,De=Object.keys||function(t){return Ne(t,Re)},qe=u,Be=l,Ue=U,We=i,Ze=De,Xe=se,Ke=mn,Ve=m,Ye=zn,$e=Object.assign,He=Object.defineProperty,Je=Be([].concat),Qe=!$e||We((function(){if(qe&&1!==$e({b:1},$e(He({},"a",{enumerable:!0,get:function(){He(this,"b",{value:3,enumerable:!1})}}),{b:2})).b)return!0;var t={},n={},r=Symbol(),e="abcdefghijklmnopqrst";return t[r]=7,e.split("").forEach((function(t){n[t]=t})),7!=$e({},t)[r]||Ze($e({},n)).join("")!=e}))?function(t,n){for(var r=Ve(t),e=arguments.length,o=1,i=Xe.f,u=Ke.f;e>o;)for(var c,a=Ye(arguments[o++]),f=i?Je(Ze(a),i(a)):Ze(a),s=f.length,l=0;s>l;)c=f[l++],qe&&!Ue(u,a,c)||(r[c]=a[c]);return r}:$e;Le({target:"Object",stat:!0,forced:Object.assign!==Qe},{assign:Qe});var to=En,no=Array.isArray||function(t){return"Array"==to(t)},ro={};ro[Wt("toStringTag")]="z";var eo=g,oo="[object z]"===String(ro),io=M,uo=En,co=Wt("toStringTag"),ao=eo.Object,fo="Arguments"==uo(function(){return arguments}()),so=l,lo=i,po=M,go=oo?uo:function(t){var n,r,e;return void 0===t?"Undefined":null===t?"Null":"string"==typeof(r=function(t,n){try{return t[n]}catch(t){}}(n=ao(t),co))?r:fo?uo(n):"Object"==(e=uo(n))&&io(n.callee)?"Arguments":e},yo=nr,vo=function(){},bo=[],ho=K("Reflect","construct"),mo=/^\s*(?:class|function)\b/,So=so(mo.exec),Oo=!mo.exec(vo),jo=function(t){if(!po(t))return!1;try{return ho(vo,bo,t),!0}catch(t){return!1}},wo=!ho||lo((function(){var t;return jo(jo.call)||!jo(Object)||!jo((function(){t=!0}))||t}))?function(t){if(!po(t))return!1;switch(go(t)){case"AsyncFunction":case"GeneratorFunction":case"AsyncGeneratorFunction":return!1}return Oo||!!So(mo,yo(t))}:jo,Po=nn,To=F,Eo=jn,xo=i,Fo=nt,Mo=Wt("species"),Ao=l([].slice),Io=Le,zo=g,ko=no,Go=wo,_o=I,Co=Zr,Lo=Yr,No=_n,Ro=function(t,n,r){var e=Po(n);e in t?To.f(t,e,Eo(0,r)):t[e]=r},Do=Wt,qo=Ao,Bo=function(t){return Fo>=51||!xo((function(){var n=[];return(n.constructor={})[Mo]=function(){return{foo:1}},1!==n[t](Boolean).foo}))}("slice"),Uo=Do("species"),Wo=zo.Array,Zo=Math.max;Io({target:"Array",proto:!0,forced:!Bo},{slice:function(t,n){var r,e,o,i=No(this),u=Lo(i),c=Co(t,u),a=Co(void 0===n?u:n,u);if(ko(i)&&(r=i.constructor,(Go(r)&&(r===Wo||ko(r.prototype))||_o(r)&&null===(r=r[Uo]))&&(r=void 0),r===Wo||void 0===r))return qo(i,c,a);for(e=new(void 0===r?Wo:r)(Zo(a-c,0)),o=0;c<a;c++,o++)c in i&&Ro(e,o,i[c]);return e.length=o,e}});var Xo=i,Ko=Le,Vo=zn,Yo=_n,$o=function(t,n){var r=[][t];return!!r&&Xo((function(){r.call(null,n||function(){throw 1},1)}))},Ho=l([].join),Jo=Vo!=Object,Qo=$o("join",",");Ko({target:"Array",proto:!0,forced:Jo||!Qo},{join:function(t){return Ho(Yo(this),void 0===t?",":t)}});var ti={request:"GetMap",service:"WMS",srs:"EPSG:3857"},ni=20037508.34789244,ri=-ni,ei=ni;function oi(t,n,r){var e=40075016.69578488/Math.pow(2,r);return[ri+t*e,ei-(n+1)*e,ri+(t+1)*e,ei-n*e]}return t.WmsMapType=function(t){var r=t.url,e=t.layers,o=t.styles,i=void 0===o?"":o,u=t.bgcolor,c=void 0===u?"0xFFFFFF":u,a=t.version,f=void 0===a?"1.1.1":a,s=t.transparent,l=void 0===s||s,p=t.format,g=void 0===p?"image/png":p,y=t.outline,v=void 0!==y&&y,b=t.name,h=t.alt,m=t.maxZoom,d=t.minZoom,S=t.opacity,O=new google.maps.Size(256,256),j=Object.assign({layers:e,styles:i,version:f,transparent:l,bgcolor:c,format:g,outline:v,width:O.width,height:O.height},ti);"?"!==r.slice(-1)&&(r+="?");return new google.maps.ImageMapType({getTileUrl:function(t,e){return r+n.stringify(Object.assign({bbox:oi(t.x,t.y,e).join(",")},j))},name:b,alt:h,opacity:S,maxZoom:m,minZoom:d,tileSize:O})},t.xyzToBounds=oi,Object.defineProperty(t,"__esModule",{value:!0}),t}({},queryString);
//# sourceMappingURL=index.dev.js.map
