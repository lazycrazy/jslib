var BM=BM||{};BM.config={B:{timeout:7e3,delay:750,maxUrlLength:300,sendlimit:20},S:{distance:20},N:{maxUrlLength:300},E:{buffer:30,timeout:5e3,maxUrlLength:300},C:{distance:50}},BM=BM||{},BM.rules={".b_scopebar":[0,80,0],".b_logo":[-1,-1,0],".b_searchboxForm":[100,19,0],"#id_h":[-1,-1,0],"#b_tween":[-1,-1,1],"#b_results":[100,-1,1],"#b_context":[710,-1,1],".b_ad > ul":[-1,-1,1],".b_footer":[0,-1,0],"#b_notificationContainer":[-1,-1,0],"#ajaxMaskLayer":[-1,-1,0],"img,div[data-src]":[-1,-1,0],iframe:[-1,-1,0]},function(n){function bt(){var n,h;if(!document.querySelector||!document.querySelectorAll){nt({FN:"init",S:"QuerySelector"});return}y={},e=[],l=document.documentElement,b=document.body,it=1,ft=0,et=0,o=[],s=0,f=!1;var c=l.clientWidth,w=l.clientHeight,k=window.pageXOffset||l.scrollLeft,p=window.pageYOffset||l.scrollTop;wt=a(window,"devicePixelRatio")?window.devicePixelRatio:-1,n={t:r(),x:k,y:p,w:c,h:w,dw:b.clientWidth,dh:b.clientHeight,d:wt},h=Math.floor(Math.random()*1e4).toString(36),i={P:{C:0,N:0,I:h,S:"T",M:t,T:0,K:t},V:[n],L:[]},v={V:tt(n),L:[]},ii(),sj_be(window,"beforeunload",u,!1),sj_evt.bind("unload",u),sj_evt.bind("BMU",u)}function yt(n){var o,u,f,i;if(n.querySelectorAll){o=r();for(u in vt){var e=vt[u],h=e[0],s=e[1];for(u+=!e[2]?t:" >*",f=n.querySelectorAll(u),i=0;i<f.length;i++)dt(f[i],o,h,s)}}}function oi(){return v.V}function k(){return v.L||[]}function gt(n,t){var r={},i;for(i in n)i.indexOf("_")!==0&&(i in t&&(n[i]!==t[i]||i==="i")?(r[i]=t[i],n[i]=t[i]):r[i]=null);return r}function yi(n){while(n&&n.hasAttribute&&n!==document.body){if(n.hasAttribute("data-bm"))return parseInt(n.getAttribute("data-bm"));n=n.parentElement}return null}function pi(n,t){var f,u,i;if(n){for(f=r(),u=k(),i=0;i<u.length;i++)if(n===u[i]._e)return u[i].i;return t&&yt(n),dt(n,f)}return null}function dt(n,t,r,u){var f=st(n,t);if(!(f.x<0)&&!(f.y<0))return r&&(f._ex=r),u&&(f._ey=u),(n.tagName==="IMG"||n.tagName==="IFRAME")&&(f._s=ti(n)),f.i=v.L.length,n.setAttribute("data-bm",f.i),i.L.push(f),v.L.push(tt(f)),f.i}function tt(n){var i={},t;for(t in n)n.hasOwnProperty(t)&&(i[t]=n[t]);return i}function g(n,t,i){if(!f){nt({FN:"snapshot",S:n});return}i=i||hi,t=t||!1;var r=at()+i;d(o,n)===-1&&o.push(n),t?(ot(),ht(t)):r>s&&(ot(),et=sb_st(ht,i),s=r)}function nt(n){var e={T:"CI.BoxModelError",FID:"CI",Name:lt,P:i&&"P"in i?p(i.P):t,TS:r()},u,f;for(u in n)e[u]=n[u];f=p(e),ct(f)}function ot(){s>0&&(sb_ct(et),s=0)}function ht(n){var u,t;if(!f){nt({FN:"send",S:o.join(h[1])});return}(it<=fi||n)&&(i.P.S=o.join(h[1]),i.P.M=ri(),i.P.T=r(),u=sb_gt(),wi(),i.P.N=it++,i.P.C+=sb_gt()-u,t=vi(i),i.P.C=0,ct(t),o=[],s=0)}function wi(){for(var u=k(),e=r(),t,i,n=0;n<u.length;n++)t=u[n],i=st(t._e),li(t,i,e);f&&rt("compute")}function li(n,t,r){for(var o=["x","y","w","h","z"],e={},s=!1,u,f=0;f<o.length;f++)u=o[f],n[u]!==t[u]&&(s=!0,e[u]=t[u]);s&&(e.i=n.i,e.t=r,i.L.push(gt(n,e)))}function ct(n){if(a(window,"Log2")&&Log2.LogEvent&&JSON)Log2.LogEvent("ClientInst",JSON.parse(n));else{var r="/fd/ls/lsp.aspx",i=at(),f="<E><T>Event.ClientInst<\/T><IG>"+_G.IG+"<\/IG><TS>"+i+"<\/TS><D><![CDATA[["+n.replace("]\]>","]]]\]><![CDATA[>")+"]]\]><\/D><\/E>",u="<ClientInstRequest><Events>"+f+"<\/Events><STS>"+i+"<\/STS><\/ClientInstRequest>",t=sj_gx();t.open("POST",r,!0),t.setRequestHeader("Content-Type","text/xml"),t.send(u)}sj_evt.fire("BM",n)}function p(n){var r=t,f,i;for(f in n)if(i=n[f],i!==t){var o=typeof i=="number",u='"',e=o||i.indexOf("{")===0?t:u;r+=u+f+u+":"+e+i+e+","}return"{"+(r.length>0?r.substr(0,r.length-1):t)+"}"}function ai(n){return n.tagName+(n.id?"#"+n.id:n.className?"."+n.className:t)}function vi(n){function a(n,i){function b(n){return n.replace(ei,encodeURIComponent)}var p=!0,o=[],f,u,e,c,s,l,y;if(i=i||1,!("_c"in n)||i<=1){for(f in n)if(u=n[f],c=f.charCodeAt(0)>=65&&f.charCodeAt(0)<=90,c&&o.push(f),f.indexOf("_")===0)continue;else typeof u=="number"?(e=parseInt(u).toString(36),o.push(e),v(e)):typeof u=="string"?(e=b(u),o.push(e),v(e)):u==null?o.push(t):typeof u=="object"&&(s=a(u,i+1,f),(s&&s.length>0||c)&&o.push(s),p=!1);p&&(n._c=!0)}return l=h[i],y=o.join(w+l+w),y}function v(n){n.length>2&&(n in k&&d(e,n)===-1?e.push(n):k[n]=1)}var nt=sb_gt(),k={},l={T:"CI.BoxModel",FID:"CI",Name:lt,P:t},u={},o,b,r,f,g,s,c;for(r in n)r!=="P"&&(o=a(n[r]),o&&o.length>0&&(u[r]=o.split(w)));b=e.slice(ft).join(h[1]),ft=e.length,i.P.K=b;for(r in u){for(f=0;f<u[r].length;f++)g=u[r][f],s=d(e,g),s>=0&&(u[r][f]=w+s.toString(36));c=u[r].join(t),r in y&&y[r]===c||(l[r]=y[r]=c)}return i.P.C+=sb_gt()-nt,l.P=p(i.P),p(l)}function d(n,t){for(var i=0;i<n.length;i++)if(n[i]===t)return i;return-1}function st(n,i){var u,e,f;i=i||r(),u={t:i,i:null,s:ai(n),k:t,x:0,y:0,w:n.offsetWidth,h:n.offsetHeight,z:0,_e:n,_s:t,_ex:-1,_ey:-1},e=n.querySelector("a[h]"),u.k=e?e.getAttribute("h"):t,a(u,"k")&&(u.k=u.k?u.k.substr(u.k.indexOf("=")+1):t,u.k=u.k&&u.k.indexOf("javascript")>=0?t:u.k),f=n;try{if(n.offsetParent)do u.x+=n.offsetLeft,u.y+=n.offsetTop;while(n=n.offsetParent)}catch(o){u.x=null,u.y=null}while(f!==b&&(f=f.parentElement))u.z++;return u}function ti(n){try{if(a(n,"src")&&n.src.indexOf("data")!==0)return n.src?n.src:t}catch(i){}return t}function r(){return pt?kt(performance.now()):new Date-window.si_ST}function at(){return pt?kt(performance.now()+performance.timing.navigationStart):+new Date}function a(n,t){return typeof n[t]!="undefined"}function kt(n){return n<-1?-1:parseInt(n)}function ii(){var n=sb_gt();f=!0,yt(document),rt("load"),g("T",!1,ci),i.P.C+=sb_gt()-n}function u(){sj_ue(window,"beforeunload",u),sj_evt.unbind("unload",u),sj_evt.unbind("BMR",u),g("U",!0),f=!1,rt("unload")}function rt(n){for(var t=0;t<c.length;t++)c[t][n](i)}function ri(){for(var t=[],n=0;n<c.length;n++)t.push(c[n].id);return t.join(h[1])}function ui(n){n.check()&&c.push(n)}function ni(){sj_evt.bind("onP1",bt,!0),sj_evt.bind("ajax.postload",bt,!0)}if(!_w.BM||!n.register){var si="B",lt="v2.7",t="",vt=n.rules,ut=n.config[si],hi=ut.delay,ci=ut.timeout,fi=ut.sendlimit,pt=_w.performance&&performance.now&&performance.timing,w="@",h=["$","+","/",":",";"],ei=/([%$+\/:;"])/g,e,i,v,c=[],wt,y,o,s,et,ft,it,f,b,l;sb_st(ni,0),n.register=ui,n.snapshot=g,n.observe=pi,n.match=yi,n.delta=gt,n.clone=tt,n.exists=a,n.viewport=oi,n.layout=k,n.time=r}}(BM),function(n){function c(){return!0}function l(n){h=n,i=document.documentElement,sj_be(window,"scroll",u)}function u(){return t.push({t:n.time(),i:0,x:window.pageXOffset||i.scrollLeft,y:window.pageYOffset||i.scrollTop}),n.snapshot(r),!0}function o(n,t){var r=n.x-t.x,i=n.y-t.y;return r*r+i*i>f*f}function s(i){for(var e,f=t.length,s=n.viewport(),u,r=0;r<f;r++)u=t[r],(r===0||r===f-1||o(u,e))&&(i.V.push(n.delta(s,{t:u.t,x:u.x,y:u.y})),e=u);t=[]}function e(){sj_ue(window,"scroll",u)}var r="S",t=[],f=n.config[r].distance,i,h;n.register({id:r,check:c,load:l,compute:s,unload:e})}(BM),function(n){function e(){return!0}function o(n){i=n,sj_be(window,"resize",t)}function t(){var t=document.documentElement,u=n.viewport();i.V.push(n.delta(u,{t:n.time(),w:t.clientWidth,h:t.clientHeight})),n.snapshot(r)}function f(){}function u(){sj_ue(window,"resize",t)}var r="R",i;n.register({id:r,check:e,load:o,compute:f,unload:u})}(BM),function(n){function h(){return f in document}function c(n){n[t]=[],r=n,sj_be(document,"visibilitychange",u,!1),sj_evt.bind("visibility",l),sj_evt.bind("peekexpand",e),sj_be(window,"beforeunload",i,!1),sj_evt.bind("unload",i),sj_evt.bind("BMU",i)}function i(){r[t].push({t:n.time(),s:"unloaded",o:"unload"}),n.snapshot(t,!0)}function u(){var i=document[f];r[t].push({t:n.time(),s:i,o:"visibility"}),n.snapshot(t,i==="unloaded")}function l(i){if(i.length>1){var u=i[1]?"visible":"hidden";r[t].push({t:n.time(),s:u,o:"cortana"}),n.snapshot(t,!1)}}function e(){r[t].push({t:n.time(),s:"peekexpand",o:"cortana"}),n.snapshot(t,!1)}function s(){}function o(){sj_ue(document,"visibilitychange",u),sj_ue(window,"beforeunload",i),sj_evt.unbind("unload",i),sj_evt.unbind("peekexpand",e),sj_evt.unbind("BMU",i)}var t="PS",f="visibilityState",r;n.register({id:t,check:h,load:c,compute:s,unload:o})}(BM),function(n){function h(){return typeof window.MutationObserver!="undefined"}function c(n){s=n;var t=new MutationObserver(o);t&&t.observe(document.body,{childList:!0,subtree:!0})}function o(f){var h,e,s,o,l,c;if(t!==null){for(h=[],e=0;e<f.length;e++)for(s=0;s<f[e].addedNodes.length;s++)o=f[e].addedNodes[s],l=o.tagName,u(o)&&(c=n.observe(o,!0),h.push(o.parentNode));h.length>0&&(i=h,n.snapshot(r))}}function u(n){var r=n.offsetWidth>=20||n.offsetHeight>=20,t=i.indexOf(n.parentNode)>=0;return r&&!t}function f(){}function e(){t&&t.disconnect(),t=null,i=[]}var r="M",i=[],t,s;n.register({id:r,check:h,load:c,compute:f,unload:e})}(BM),function(n){function g(){return!0}function d(n){n[u]=[],l=n}function k(i){for(var tt=n.viewport().w,g=n.layout(),b,d,nt,v=0;v<g.length;v++){var f=g[v],c=f._e,w=f._s,l=f._ex,k=f._ey,p=y;f.i===v&&(l=_G.RTL&&l>=0?tt-l-c.offsetWidth:l,l>=0&&!e(f.x,l)&&(p=f.k.length===0?s(c):p,i[u].push({t:n.time(),l:f.i,e:"X",v:Math.abs(f.x-l),m:p})),k>=0&&!e(f.y,k)&&(p=f.k.length===0?s(c):p,i[u].push({t:n.time(),l:f.i,e:"Y",v:Math.abs(f.y-k),m:p})),c.tagName!=="IMG"||!w||f.i in t||(b=n.exists(c,b)?c[b]:!0,d=n.exists(c,a)?c[a]>1:!0,b?d||(t[f.i]={_e:c,_s:w,_d:!0,_b:!1},h(v,w)):(t[f.i]={_e:c,_s:w,_d:!1,_b:!0},o(c,!0))),c.tagName!=="DIV"||!c.hasAttribute("data-src")||f.i in t||(w=c.getAttribute("data-src"),nt=c.style.backgroundImage,nt||(t[f.i]={_e:c,_s:w,_d:!1,_b:!1},o(c,!1))))}}function o(n,t){t&&(sj_be(n,"load",r),sj_be(n,"error",r)),i||(i=sb_st(c,nt))}function r(n){var i=window.event||n,t=sj_et(n);return c(i.type,t)}function c(u,f){var c=0,e,o,s;for(e in t)if(!t[e]._d&&(!f||t[e]._e===f)&&(o=t[e]._e,s=o.tagName==="IMG"?!o[w]||u&&u==="error":!o.style.backgroundImage,t[e]._b&&(sj_ue(o,"load",r),sj_ue(o,"error",r)),s&&(h(e,t[e]._s),c++),t[e]._d=!0,f))return;c>0&&n.snapshot("E"),i=0}function h(t,i){l[u].push({t:n.time(),l:t,e:"S",v:404,m:i.substr(0,p)})}function s(n){var t=n.querySelector("a");return t&&t.href?t.href.substr(0,p):y}function e(n,t){return n>=t-v&&n<=t+v}function b(){var u,n;for(u in t)n=t[u],n._b&&!n._d&&(sj_ue(n._e,"load",r),sj_ue(n._e,"error",r));i&&(sb_ct(i),i=0),t={}}var u="E",y="",w="complete",a="naturalWidth",f=n.config[u],v=f.buffer,p=f.maxUrlLength,nt=f.timeout,i=0,t={},l;n.register({id:u,check:g,load:d,compute:k,unload:b})}(BM),function(n){function p(){return _w.performance&&performance.now&&performance.getEntries}function v(n){n[t]=[],f[t]=[]}function c(i){var e,l,k,y,p,d;if(t in f){var ut=i[t],h=f[t],ot=performance.timing,it=performance.getEntries();for(e=0;e<h.length;e++)l=h[e]._r,h[e].i==e&&l&&u(l.duration)!==h[e].d&&i.N.push(n.delta(h[e],{i:h[e].i,t:n.time(),d:u(l.duration)}));for(k=it.length,y=s;y<k;y++){var c=it[y],w=c.name,v=a(w);w.indexOf("format=json")>=0&&(o=c.startTime);var rt=u(c.startTime-o),ft=u(c.duration),tt=null,g=n.layout();for(p=0;p<g.length;p++){var b=g[p],et=b._e,nt=b._s;if(nt&&w===nt){tt=b.l;break}}d={_r:c,t:rt,i:h.length,l:tt,h:v[0],p:v[0].length===0?v[2]:v[1],s:c.initiatorType,d:ft},ut.push(d),h.push(n.clone(d))}s=k}}function a(n){var c,l,u,s,t,f,a,o;return r.href=n,s=r.hostname,t=r.pathname,t=t.indexOf(i)===0?t.substr(1):t,f=r.search.toLowerCase(),a=s.length>0?t.substr(0,h):n.substr(0,h),f.length>0&&(c=f.indexOf("event."))>0&&(l=f.indexOf("&data"))>0?(t=f.substr(c,l-c).replace("event.",e),t==="clientinst"&&(o=y.exec(f.replace(/%22/g,'"')),o!=null&&o.length>1&&(t=o[1]))):t.indexOf("rms/")===0&&(u=t.split(i))&&u.length>1?t=u[1].replace("rms%20answers%20",e).replace(".source",e):(u=t.split(i))&&u.length>=2&&(t=u[u.length-2]+i+u[u.length-1]),[s,t,a]}function u(n){return n<-1?-1:parseInt(n)}function l(){}var t="N",b="B",s=0,o=0,w=0,h=n.config[t].maxUrlLength,r=document.createElement("A"),e="",i="/",y=/"name":"(.*?)"/,f={};n.register({id:t,check:p,load:v,compute:c,unload:l})}(BM),function(n){function v(){return!0}function y(n){n[t]=[],a=n,u=document.documentElement,i=[],r={},e(sj_be,f)}function e(n,t){for(var r,i=0;i<o.length;i++)r=o[i],n(document,window.navigator.pointerEnabled?r.replace("mouse","pointer"):r,t,!1)}function f(r){r=_w.event||r;var e=r.pointerType||r.type.indexOf("touch")==0&&"touch"||"mouse",f={_e:r.target,t:n.time(),l:null,e:r.type,p:e,b:n.exists(r,"button")?r.button:null,x:r.pageX||r.clientX+u.scrollLeft,y:r.pageY||r.clientY+u.scrollTop};return i.push(f),n.snapshot(t),!0}function l(n,t){var r=n.x-t.x,i=n.y-t.y;return r*r+i*i>s*s}function c(u){var s=i.length,o,e,f;if(s>0){for(o=(t in r)?r[t]:null,e=0;e<s;e++)f=i[e],(e===0||e===s-1||f.e.indexOf("move")<0||l(f,o))&&(f.l=n.match(f._e),o===null?(o=r[t]=n.clone(f),u[t].push(f)):u[t].push(n.delta(o,f)));i=[]}}function h(){e(sj_ue,f)}var t="C",i=[],r={},s=n.config[t].distance,o=["click","mousedown","mouseup","touchstart","touchend","mousemove","touchmove"],u,a;n.register({id:t,check:v,load:y,compute:c,unload:h})}(BM),function(n){function s(){return!0}function h(n){n[t]=[],u=n,i(sj_be,r)}function i(n,t){for(var r,i=0;i<f.length;i++)r=f[i],n(document,r,t,!1)}function r(i){return i=_w.event||i,u[t].push({t:n.time(),l:n.observe(i.target),e:i.type,m:i.shiftKey<<1|i.ctrlKey<<2|i.altKey<<3|i.metaKey<<4|(i.repeat||0)<<5|(i.isComposing||0)<<6|(i.location||0)<<16,kc:i.keyCode,w:i.which,cc:i.charCode,k:encodeURIComponent(i.key),c:i.code}),n.snapshot(t),!0}function o(){}function e(){i(sj_ue,r)}var t="K",f=["keydown","keypress"],u;n.register({id:t,check:s,load:h,compute:o,unload:e})}(BM)