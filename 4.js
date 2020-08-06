From: <Saved by Blink>
X-Snapshot-Version: 1.0
X-Snapshot-Title: =?utf-8?Q??=
X-Snapshot-Content-Location: http://lib.baomitu.com/respond.js/1.4.2/respond.min.js
Subject: 
Date: Fri, 6 Aug 2020 12:24:41 -0000
MIME-Version: 1.0
Content-Type: multipart/related;
	type="text/html";
	boundary="----MultipartBoundary--VniDBjQhGeTo2m8PYkZjvG7oL0pe7SH6VGz4Mo8S4R----"

------MultipartBoundary--VniDBjQhGeTo2m8PYkZjvG7oL0pe7SH6VGz4Mo8S4R----
Content-Type: text/html
Content-ID: <frame-19-ef9e6c67-0252-4513-b982-3b594e104104@mhtml.blink>
Content-Transfer-Encoding: quoted-printable
Content-Location: http://lib.baomitu.com/respond.js/1.4.2/respond.min.js

<html><head><meta http-equiv=3D"Content-Type" content=3D"text/html; charset=
=3DUTF-8"></head><body><pre style=3D"word-wrap: break-word; white-space: pr=
e-wrap;">/*! Respond.js v1.4.2: min/max-width media query polyfill * Copyri=
ght 2013 Scott Jehl
 * Licensed under https://github.com/scottjehl/Respond/blob/master/LICENSE-=
MIT
 *  */

!function(a){"use strict";a.matchMedia=3Da.matchMedia||function(a){var b,c=
=3Da.documentElement,d=3Dc.firstElementChild||c.firstChild,e=3Da.createElem=
ent("body"),f=3Da.createElement("div");return f.id=3D"mq-test-1",f.style.cs=
sText=3D"position:absolute;top:-100em",e.style.background=3D"none",e.append=
Child(f),function(a){return f.innerHTML=3D'&amp;shy;&lt;style media=3D"'+a+=
'"&gt; #mq-test-1 { width: 42px; }&lt;/style&gt;',c.insertBefore(e,d),b=3D4=
2=3D=3D=3Df.offsetWidth,c.removeChild(e),{matches:b,media:a}}}(a.document)}=
(this),function(a){"use strict";function b(){u(!0)}var c=3D{};a.respond=3Dc=
,c.update=3Dfunction(){};var d=3D[],e=3Dfunction(){var b=3D!1;try{b=3Dnew a=
.XMLHttpRequest}catch(c){b=3Dnew a.ActiveXObject("Microsoft.XMLHTTP")}retur=
n function(){return b}}(),f=3Dfunction(a,b){var c=3De();c&amp;&amp;(c.open(=
"GET",a,!0),c.onreadystatechange=3Dfunction(){4!=3D=3Dc.readyState||200!=3D=
=3Dc.status&amp;&amp;304!=3D=3Dc.status||b(c.responseText)},4!=3D=3Dc.ready=
State&amp;&amp;c.send(null))};if(c.ajax=3Df,c.queue=3Dd,c.regex=3D{media:/@=
media[^\{]+\{([^\{\}]*\{[^\}\{]*\})+/gi,keyframes:/@(?:\-(?:o|moz|webkit)\-=
)?keyframes[^\{]+\{(?:[^\{\}]*\{[^\}\{]*\})+[^\}]*\}/gi,urls:/(url\()['"]?(=
[^\/\)'"][^:\)'"]+)['"]?(\))/g,findStyles:/@media *([^\{]+)\{([\S\s]+?)$/,o=
nly:/(only\s+)?([a-zA-Z]+)\s?/,minw:/\([\s]*min\-width\s*:[\s]*([\s]*[0-9\.=
]+)(px|em)[\s]*\)/,maxw:/\([\s]*max\-width\s*:[\s]*([\s]*[0-9\.]+)(px|em)[\=
s]*\)/},c.mediaQueriesSupported=3Da.matchMedia&amp;&amp;null!=3D=3Da.matchM=
edia("only all")&amp;&amp;a.matchMedia("only all").matches,!c.mediaQueriesS=
upported){var g,h,i,j=3Da.document,k=3Dj.documentElement,l=3D[],m=3D[],n=3D=
[],o=3D{},p=3D30,q=3Dj.getElementsByTagName("head")[0]||k,r=3Dj.getElements=
ByTagName("base")[0],s=3Dq.getElementsByTagName("link"),t=3Dfunction(){var =
a,b=3Dj.createElement("div"),c=3Dj.body,d=3Dk.style.fontSize,e=3Dc&amp;&amp=
;c.style.fontSize,f=3D!1;return b.style.cssText=3D"position:absolute;font-s=
ize:1em;width:1em",c||(c=3Df=3Dj.createElement("body"),c.style.background=
=3D"none"),k.style.fontSize=3D"100%",c.style.fontSize=3D"100%",c.appendChil=
d(b),f&amp;&amp;k.insertBefore(c,k.firstChild),a=3Db.offsetWidth,f?k.remove=
Child(c):c.removeChild(b),k.style.fontSize=3Dd,e&amp;&amp;(c.style.fontSize=
=3De),a=3Di=3DparseFloat(a)},u=3Dfunction(b){var c=3D"clientWidth",d=3Dk[c]=
,e=3D"CSS1Compat"=3D=3D=3Dj.compatMode&amp;&amp;d||j.body[c]||d,f=3D{},o=3D=
s[s.length-1],r=3D(new Date).getTime();if(b&amp;&amp;g&amp;&amp;p&gt;r-g)re=
turn a.clearTimeout(h),h=3Da.setTimeout(u,p),void 0;g=3Dr;for(var v in l)if=
(l.hasOwnProperty(v)){var w=3Dl[v],x=3Dw.minw,y=3Dw.maxw,z=3Dnull=3D=3D=3Dx=
,A=3Dnull=3D=3D=3Dy,B=3D"em";x&amp;&amp;(x=3DparseFloat(x)*(x.indexOf(B)&gt=
;-1?i||t():1)),y&amp;&amp;(y=3DparseFloat(y)*(y.indexOf(B)&gt;-1?i||t():1))=
,w.hasquery&amp;&amp;(z&amp;&amp;A||!(z||e&gt;=3Dx)||!(A||y&gt;=3De))||(f[w=
.media]||(f[w.media]=3D[]),f[w.media].push(m[w.rules]))}for(var C in n)n.ha=
sOwnProperty(C)&amp;&amp;n[C]&amp;&amp;n[C].parentNode=3D=3D=3Dq&amp;&amp;q=
.removeChild(n[C]);n.length=3D0;for(var D in f)if(f.hasOwnProperty(D)){var =
E=3Dj.createElement("style"),F=3Df[D].join("\n");E.type=3D"text/css",E.medi=
a=3DD,q.insertBefore(E,o.nextSibling),E.styleSheet?E.styleSheet.cssText=3DF=
:E.appendChild(j.createTextNode(F)),n.push(E)}},v=3Dfunction(a,b,d){var e=
=3Da.replace(c.regex.keyframes,"").match(c.regex.media),f=3De&amp;&amp;e.le=
ngth||0;b=3Db.substring(0,b.lastIndexOf("/"));var g=3Dfunction(a){return a.=
replace(c.regex.urls,"$1"+b+"$2$3")},h=3D!f&amp;&amp;d;b.length&amp;&amp;(b=
+=3D"/"),h&amp;&amp;(f=3D1);for(var i=3D0;f&gt;i;i++){var j,k,n,o;h?(j=3Dd,=
m.push(g(a))):(j=3De[i].match(c.regex.findStyles)&amp;&amp;RegExp.$1,m.push=
(RegExp.$2&amp;&amp;g(RegExp.$2))),n=3Dj.split(","),o=3Dn.length;for(var p=
=3D0;o&gt;p;p++)k=3Dn[p],l.push({media:k.split("(")[0].match(c.regex.only)&=
amp;&amp;RegExp.$2||"all",rules:m.length-1,hasquery:k.indexOf("(")&gt;-1,mi=
nw:k.match(c.regex.minw)&amp;&amp;parseFloat(RegExp.$1)+(RegExp.$2||""),max=
w:k.match(c.regex.maxw)&amp;&amp;parseFloat(RegExp.$1)+(RegExp.$2||"")})}u(=
)},w=3Dfunction(){if(d.length){var b=3Dd.shift();f(b.href,function(c){v(c,b=
.href,b.media),o[b.href]=3D!0,a.setTimeout(function(){w()},0)})}},x=3Dfunct=
ion(){for(var b=3D0;b&lt;s.length;b++){var c=3Ds[b],e=3Dc.href,f=3Dc.media,=
g=3Dc.rel&amp;&amp;"stylesheet"=3D=3D=3Dc.rel.toLowerCase();e&amp;&amp;g&am=
p;&amp;!o[e]&amp;&amp;(c.styleSheet&amp;&amp;c.styleSheet.rawCssText?(v(c.s=
tyleSheet.rawCssText,e,f),o[e]=3D!0):(!/^([a-zA-Z:]*\/\/)/.test(e)&amp;&amp=
;!r||e.replace(RegExp.$1,"").split("/")[0]=3D=3D=3Da.location.host)&amp;&am=
p;("//"=3D=3D=3De.substring(0,2)&amp;&amp;(e=3Da.location.protocol+e),d.pus=
h({href:e,media:f})))}w()};x(),c.update=3Dx,c.getEmValue=3Dt,a.addEventList=
ener?a.addEventListener("resize",b,!1):a.attachEvent&amp;&amp;a.attachEvent=
("onresize",b)}}(this);</pre></body></html>
------MultipartBoundary--VniDBjQhGeTo2m8PYkZjvG7oL0pe7SH6VGz4Mo8S4R------
