this.google=this.google||{},this.google.maps=this.google.maps||{},this.google.maps.plugins=this.google.maps.plugins||{},this.google.maps.plugins.ogc=function(o){"use strict";var e={request:"GetMap",service:"WMS",srs:"EPSG:3857"},t=20037508.34789244,i=-t,s=t;function n(o,e,t){var n=40075016.69578488/Math.pow(2,t);return[i+o*n,s-(e+1)*n,i+(o+1)*n,s-e*n]}return o.WmsMapType=function(o){var t=o.url,i=o.layers,s=o.styles,a=void 0===s?"":s,r=o.bgcolor,g=void 0===r?"0xFFFFFF":r,l=o.version,m=void 0===l?"1.1.1":l,p=o.transparent,u=void 0===p||p,c=o.format,h=void 0===c?"image/png":c,v=o.outline,d=void 0!==v&&v,y=o.name,S=o.alt,b=o.maxZoom,f=o.minZoom,w=o.opacity,x=new google.maps.Size(256,256),F=Object.assign({layers:i,styles:a,version:m,transparent:String(u),bgcolor:g,format:h,outline:String(d),width:String(x.width),height:String(x.height)},e);"?"!==t.slice(-1)&&(t+="?");return new google.maps.ImageMapType({getTileUrl:function(o,e){return t+new URLSearchParams(Object.assign({bbox:n(o.x,o.y,e).join(",")},F)).toString()},name:y,alt:S,opacity:w,maxZoom:b,minZoom:f,tileSize:x})},o.xyzToBounds=n,Object.defineProperty(o,"__esModule",{value:!0}),o}({});
//# sourceMappingURL=index.dev.js.map
