var R={2126:(a,d,l)=>{var v={"./Component":()=>l.e(92).then(()=>()=>l(92))},g=(s,b)=>(l.R=b,b=l.o(v,s)?v[s]():Promise.resolve().then(()=>{throw new Error('Module "'+s+'" does not exist in container.')}),l.R=void 0,b),p=(s,b)=>{if(l.S){var h="default",w=l.S[h];if(w&&w!==s)throw new Error("Container initialization failed as it has already been initialized with a different share scope");return l.S[h]=s,l.I(h,b)}};l.d(d,{get:()=>g,init:()=>p})}},$={};function e(a){var d=$[a];if(void 0!==d)return d.exports;var l=$[a]={exports:{}};return R[a](l,l.exports,e),l.exports}e.m=R,e.c=$,e.n=a=>{var d=a&&a.__esModule?()=>a.default:()=>a;return e.d(d,{a:d}),d},e.d=(a,d)=>{for(var l in d)e.o(d,l)&&!e.o(a,l)&&Object.defineProperty(a,l,{enumerable:!0,get:d[l]})},e.f={},e.e=a=>Promise.all(Object.keys(e.f).reduce((d,l)=>(e.f[l](a,d),d),[])),e.u=a=>a+"."+{37:"1f75ec323ccd8333",87:"6e4d9c9afc49ac67",92:"c6122abf296d8a53",177:"8b22ccaf58048b86",245:"b26394bb7b9cf194",282:"8c2f438f77641178",345:"e91505f405ecbde3",488:"d70e3ff05e959618",546:"a0ace0cddf63b93f",558:"76d711ee6a4e993b",626:"a4a583a835bcb2c6",705:"110eb1fcbeb0b1ea",726:"002688e42c882ce0"}[a]+".js",e.miniCssF=a=>{},e.o=(a,d)=>Object.prototype.hasOwnProperty.call(a,d),(()=>{var a={},d="mfe-app-02:";e.l=(l,v,g,p)=>{if(a[l])a[l].push(v);else{var s,b;if(void 0!==g)for(var h=document.getElementsByTagName("script"),w=0;w<h.length;w++){var c=h[w];if(c.getAttribute("src")==l||c.getAttribute("data-webpack")==d+g){s=c;break}}s||(b=!0,(s=document.createElement("script")).type="module",s.charset="utf-8",s.timeout=120,e.nc&&s.setAttribute("nonce",e.nc),s.setAttribute("data-webpack",d+g),s.src=e.tu(l)),a[l]=[v];var S=(E,P)=>{s.onerror=s.onload=null,clearTimeout(x);var j=a[l];if(delete a[l],s.parentNode&&s.parentNode.removeChild(s),j&&j.forEach(m=>m(P)),E)return E(P)},x=setTimeout(S.bind(null,void 0,{type:"timeout",target:s}),12e4);s.onerror=S.bind(null,s.onerror),s.onload=S.bind(null,s.onload),b&&document.head.appendChild(s)}}})(),e.r=a=>{typeof Symbol<"u"&&Symbol.toStringTag&&Object.defineProperty(a,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(a,"__esModule",{value:!0})},(()=>{e.S={};var a={},d={};e.I=(l,v)=>{v||(v=[]);var g=d[l];if(g||(g=d[l]={}),!(v.indexOf(g)>=0)){if(v.push(g),a[l])return a[l];e.o(e.S,l)||(e.S[l]={});var p=e.S[l],b="mfe-app-02",h=(S,x,E,P)=>{var j=p[S]=p[S]||{},m=j[x];(!m||!m.loaded&&(!P!=!m.eager?P:b>m.from))&&(j[x]={get:E,from:b,eager:!!P})},c=[];return"default"===l&&(h("@angular/common/http","19.1.0",()=>e.e(626).then(()=>()=>e(1626))),h("@angular/common","19.1.0",()=>e.e(177).then(()=>()=>e(177))),h("@angular/core/primitives/event-dispatch","19.1.0",()=>e.e(546).then(()=>()=>e(7546))),h("@angular/core/primitives/signals","19.1.0",()=>e.e(488).then(()=>()=>e(3488))),h("@angular/core","19.1.0",()=>e.e(705).then(()=>()=>e(7705))),h("@angular/platform-browser","19.1.0",()=>e.e(345).then(()=>()=>e(345))),h("@angular/router","19.1.0",()=>e.e(282).then(()=>()=>e(7901))),h("rxjs/operators","7.8.0",()=>e.e(37).then(()=>()=>e(7037))),h("rxjs","7.8.0",()=>e.e(87).then(()=>()=>e(4087)))),a[l]=c.length?Promise.all(c).then(()=>a[l]=1):1}}})(),(()=>{var a;e.tt=()=>(void 0===a&&(a={createScriptURL:d=>d},typeof trustedTypes<"u"&&trustedTypes.createPolicy&&(a=trustedTypes.createPolicy("angular#bundler",a))),a)})(),e.tu=a=>e.tt().createScriptURL(a),(()=>{var a;if("string"==typeof import.meta.url&&(a=import.meta.url),!a)throw new Error("Automatic publicPath is not supported in this browser");a=a.replace(/#.*$/,"").replace(/\?.*$/,"").replace(/\/[^\/]+$/,"/"),e.p=a})(),(()=>{var a=t=>{var n=i=>i.split(".").map(o=>+o==o?+o:o),r=/^([^-+]+)?(?:-([^+]+))?(?:\+(.+))?$/.exec(t),u=r[1]?n(r[1]):[];return r[2]&&(u.length++,u.push.apply(u,n(r[2]))),r[3]&&(u.push([]),u.push.apply(u,n(r[3]))),u},l=t=>{var n=t[0],r="";if(1===t.length)return"*";if(n+.5){r+=0==n?">=":-1==n?"<":1==n?"^":2==n?"~":n>0?"=":"!=";for(var u=1,i=1;i<t.length;i++)u--,r+="u"==(typeof(f=t[i]))[0]?"-":(u>0?".":"")+(u=2,f);return r}var o=[];for(i=1;i<t.length;i++){var f=t[i];o.push(0===f?"not("+y()+")":1===f?"("+y()+" || "+y()+")":2===f?o.pop()+" "+o.pop():l(f))}return y();function y(){return o.pop().replace(/^\((.+)\)$/,"$1")}},v=(t,n)=>{if(0 in t){n=a(n);var r=t[0],u=r<0;u&&(r=-r-1);for(var i=0,o=1,f=!0;;o++,i++){var y,V,M=o<t.length?(typeof t[o])[0]:"";if(i>=n.length||"o"==(V=(typeof(y=n[i]))[0]))return!f||("u"==M?o>r&&!u:""==M!=u);if("u"==V){if(!f||"u"!=M)return!1}else if(f)if(M==V)if(o<=r){if(y!=t[o])return!1}else{if(u?y>t[o]:y<t[o])return!1;y!=t[o]&&(f=!1)}else if("s"!=M&&"n"!=M){if(u||o<=r)return!1;f=!1,o--}else{if(o<=r||V<M!=u)return!1;f=!1}else"s"!=M&&"n"!=M&&(f=!1,o--)}}var L=[],C=L.pop.bind(L);for(i=1;i<t.length;i++){var A=t[i];L.push(1==A?C()|C():2==A?C()&C():A?v(A,n):!C())}return!!C()},w=(t,n,r)=>{var u=r?(t=>Object.keys(t).reduce((n,r)=>(t[r].eager&&(n[r]=t[r]),n),{}))(t[n]):t[n];return Object.keys(u).reduce((i,o)=>!i||!u[i].loaded&&((t,n)=>{t=a(t),n=a(n);for(var r=0;;){if(r>=t.length)return r<n.length&&"u"!=(typeof n[r])[0];var u=t[r],i=(typeof u)[0];if(r>=n.length)return"u"==i;var o=n[r],f=(typeof o)[0];if(i!=f)return"o"==i&&"n"==f||"s"==f||"u"==i;if("o"!=i&&"u"!=i&&u!=o)return u<o;r++}})(i,o)?o:i,0)},x=t=>{throw new Error(t)},O=(t=>function(n,r,u,i,o){var f=e.I(n);return f&&f.then&&!u?f.then(t.bind(t,n,e.S[n],r,!1,i,o)):t(n,e.S[n],r,u,i,o)})((t,n,r,u,i,o)=>{if(!((t,n)=>t&&e.o(t,n))(n,r))return((t,n,r)=>r?r():((t,n)=>x("Shared module "+n+" doesn't exist in shared scope "+t))(t,n))(t,r,o);var f=w(n,r,u);return v(i,f)||x(((t,n,r,u)=>"Unsatisfied version "+r+" from "+(r&&t[n][r].from)+" of shared singleton module "+n+" (required "+l(u)+")")(n,r,f,i)),(t=>(t.loaded=1,t.get()))(n[r][f])}),T={},D={4119:()=>O("default","@angular/core",!1,[1,19,1,0],()=>e.e(705).then(()=>()=>e(7705))),1945:()=>O("default","@angular/common",!1,[1,19,1,0],()=>e.e(558).then(()=>()=>e(177))),2778:()=>O("default","rxjs/operators",!1,[2,7,8,0],()=>e.e(37).then(()=>()=>e(7037))),4866:()=>O("default","rxjs",!1,[2,7,8,0],()=>e.e(87).then(()=>()=>e(4087))),6063:()=>O("default","@angular/core/primitives/signals",!1,[1,19,1,0],()=>e.e(488).then(()=>()=>e(3488))),7043:()=>O("default","@angular/core/primitives/event-dispatch",!1,[1,19,1,0],()=>e.e(546).then(()=>()=>e(7546))),8687:()=>O("default","@angular/common/http",!1,[1,19,1,0],()=>e.e(245).then(()=>()=>e(1626))),6618:()=>O("default","@angular/platform-browser",!1,[1,19,1,0],()=>e.e(726).then(()=>()=>e(345)))},U={92:[4119],177:[4119,4866],245:[2778,4866],282:[1945,2778,4119,4866,6618],345:[1945,4119,8687],558:[4866],626:[1945,2778,4119,4866],705:[2778,4866,6063,7043],726:[1945,8687]},z={};e.f.consumes=(t,n)=>{e.o(U,t)&&U[t].forEach(r=>{if(e.o(T,r))return n.push(T[r]);if(!z[r]){var u=f=>{T[r]=0,e.m[r]=y=>{delete e.c[r],y.exports=f()}};z[r]=!0;var i=f=>{delete T[r],e.m[r]=y=>{throw delete e.c[r],f}};try{var o=D[r]();o.then?n.push(T[r]=o.then(u).catch(i)):u(o)}catch(f){i(f)}}})}})(),(()=>{var a={892:0};e.f.j=(v,g)=>{var p=e.o(a,v)?a[v]:void 0;if(0!==p)if(p)g.push(p[2]);else{var s=new Promise((c,S)=>p=a[v]=[c,S]);g.push(p[2]=s);var b=e.p+e.u(v),h=new Error;e.l(b,c=>{if(e.o(a,v)&&(0!==(p=a[v])&&(a[v]=void 0),p)){var S=c&&("load"===c.type?"missing":c.type),x=c&&c.target&&c.target.src;h.message="Loading chunk "+v+" failed.\n("+S+": "+x+")",h.name="ChunkLoadError",h.type=S,h.request=x,p[1](h)}},"chunk-"+v,v)}};var d=(v,g)=>{var h,w,[p,s,b]=g,c=0;if(p.some(x=>0!==a[x])){for(h in s)e.o(s,h)&&(e.m[h]=s[h]);b&&b(e)}for(v&&v(g);c<p.length;c++)e.o(a,w=p[c])&&a[w]&&a[w][0](),a[w]=0},l=self.webpackChunkmfe_app_02=self.webpackChunkmfe_app_02||[];l.forEach(d.bind(null,0)),l.push=d.bind(null,l.push.bind(l))})();var B=e(2126),G=B.get,H=B.init;export{G as get,H as init};