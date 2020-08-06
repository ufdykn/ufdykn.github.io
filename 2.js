From: <Saved by Blink>
X-Snapshot-Version: 1.0
X-Snapshot-Title: =?utf-8?Q??=
X-Snapshot-Content-Location: http://lib.baomitu.com/layer/3.1.1/layer.js
Subject: 
Date: Fri, 6 Aug 2020 12:22:14 -0000
MIME-Version: 1.0
Content-Type: multipart/related;
	type="text/html";
	boundary="----MultipartBoundary--XKTj8JHcTx79fTuSlvb9zv2AFapVnCCqHhZMSKWNuD----"

------MultipartBoundary--XKTj8JHcTx79fTuSlvb9zv2AFapVnCCqHhZMSKWNuD----
Content-Type: text/html
Content-ID: <frame-13-bd1050b1-b311-4f4f-a3c1-942c1e80c8e9@mhtml.blink>
Content-Transfer-Encoding: quoted-printable
Content-Location: http://lib.baomitu.com/layer/3.1.1/layer.js

<html><head><meta http-equiv=3D"Content-Type" content=3D"text/html; charset=
=3DUTF-8"></head><body><pre style=3D"word-wrap: break-word; white-space: pr=
e-wrap;">/*! layer-v3.1.1 Web=E5=BC=B9=E5=B1=82=E7=BB=84=E4=BB=B6 MIT Licen=
se  http://layer.layui.com/  By =E8=B4=A4=E5=BF=83 */
 ;!function(e,t){"use strict";var i,n,a=3De.layui&amp;&amp;layui.define,o=
=3D{getPath:function(){var e=3Ddocument.currentScript?document.currentScrip=
t.src:function(){for(var e,t=3Ddocument.scripts,i=3Dt.length-1,n=3Di;n&gt;0=
;n--)if("interactive"=3D=3D=3Dt[n].readyState){e=3Dt[n].src;break}return e|=
|t[i].src}();return e.substring(0,e.lastIndexOf("/")+1)}(),config:{},end:{}=
,minIndex:0,minLeft:[],btn:["&amp;#x786E;&amp;#x5B9A;","&amp;#x53D6;&amp;#x=
6D88;"],type:["dialog","page","iframe","loading","tips"],getStyle:function(=
t,i){var n=3Dt.currentStyle?t.currentStyle:e.getComputedStyle(t,null);retur=
n n[n.getPropertyValue?"getPropertyValue":"getAttribute"](i)},link:function=
(t,i,n){if(r.path){var a=3Ddocument.getElementsByTagName("head")[0],s=3Ddoc=
ument.createElement("link");"string"=3D=3Dtypeof i&amp;&amp;(n=3Di);var l=
=3D(n||t).replace(/\.|\//g,""),f=3D"layuicss-"+l,c=3D0;s.rel=3D"stylesheet"=
,s.href=3Dr.path+t,s.id=3Df,document.getElementById(f)||a.appendChild(s),"f=
unction"=3D=3Dtypeof i&amp;&amp;!function u(){return++c&gt;80?e.console&amp=
;&amp;console.error("layer.css: Invalid"):void(1989=3D=3D=3DparseInt(o.getS=
tyle(document.getElementById(f),"width"))?i():setTimeout(u,100))}()}}},r=3D=
{v:"3.1.1",ie:function(){var t=3Dnavigator.userAgent.toLowerCase();return!!=
(e.ActiveXObject||"ActiveXObject"in e)&amp;&amp;((t.match(/msie\s(\d+)/)||[=
])[1]||"11")}(),index:e.layer&amp;&amp;e.layer.v?1e5:0,path:o.getPath,confi=
g:function(e,t){return e=3De||{},r.cache=3Do.config=3Di.extend({},o.config,=
e),r.path=3Do.config.path||r.path,"string"=3D=3Dtypeof e.extend&amp;&amp;(e=
.extend=3D[e.extend]),o.config.path&amp;&amp;r.ready(),e.extend?(a?layui.ad=
dcss("modules/layer/"+e.extend):o.link("theme/"+e.extend),this):this},ready=
:function(e){var t=3D"layer",i=3D"",n=3D(a?"modules/layer/":"theme/")+"defa=
ult/layer.css?v=3D"+r.v+i;return a?layui.addcss(n,e,t):o.link(n,e,t),this},=
alert:function(e,t,n){var a=3D"function"=3D=3Dtypeof t;return a&amp;&amp;(n=
=3Dt),r.open(i.extend({content:e,yes:n},a?{}:t))},confirm:function(e,t,n,a)=
{var s=3D"function"=3D=3Dtypeof t;return s&amp;&amp;(a=3Dn,n=3Dt),r.open(i.=
extend({content:e,btn:o.btn,yes:n,btn2:a},s?{}:t))},msg:function(e,n,a){var=
 s=3D"function"=3D=3Dtypeof n,f=3Do.config.skin,c=3D(f?f+" "+f+"-msg":"")||=
"layui-layer-msg",u=3Dl.anim.length-1;return s&amp;&amp;(a=3Dn),r.open(i.ex=
tend({content:e,time:3e3,shade:!1,skin:c,title:!1,closeBtn:!1,btn:!1,resize=
:!1,end:a},s&amp;&amp;!o.config.skin?{skin:c+" layui-layer-hui",anim:u}:fun=
ction(){return n=3Dn||{},(n.icon=3D=3D=3D-1||n.icon=3D=3D=3Dt&amp;&amp;!o.c=
onfig.skin)&amp;&amp;(n.skin=3Dc+" "+(n.skin||"layui-layer-hui")),n}()))},l=
oad:function(e,t){return r.open(i.extend({type:3,icon:e||0,resize:!1,shade:=
.01},t))},tips:function(e,t,n){return r.open(i.extend({type:4,content:[e,t]=
,closeBtn:!1,time:3e3,shade:!1,resize:!1,fixed:!1,maxWidth:210},n))}},s=3Df=
unction(e){var t=3Dthis;t.index=3D++r.index,t.config=3Di.extend({},t.config=
,o.config,e),document.body?t.creat():setTimeout(function(){t.creat()},30)};=
s.pt=3Ds.prototype;var l=3D["layui-layer",".layui-layer-title",".layui-laye=
r-main",".layui-layer-dialog","layui-layer-iframe","layui-layer-content","l=
ayui-layer-btn","layui-layer-close"];l.anim=3D["layer-anim-00","layer-anim-=
01","layer-anim-02","layer-anim-03","layer-anim-04","layer-anim-05","layer-=
anim-06"],s.pt.config=3D{type:0,shade:.3,fixed:!0,move:l[1],title:"&amp;#x4=
FE1;&amp;#x606F;",offset:"auto",area:"auto",closeBtn:1,time:0,zIndex:198910=
14,maxWidth:360,anim:0,isOutAnim:!0,icon:-1,moveType:1,resize:!0,scrollbar:=
!0,tips:2},s.pt.vessel=3Dfunction(e,t){var n=3Dthis,a=3Dn.index,r=3Dn.confi=
g,s=3Dr.zIndex+a,f=3D"object"=3D=3Dtypeof r.title,c=3Dr.maxmin&amp;&amp;(1=
=3D=3D=3Dr.type||2=3D=3D=3Dr.type),u=3Dr.title?'&lt;div class=3D"layui-laye=
r-title" style=3D"'+(f?r.title[1]:"")+'"&gt;'+(f?r.title[0]:r.title)+"&lt;/=
div&gt;":"";return r.zIndex=3Ds,t([r.shade?'&lt;div class=3D"layui-layer-sh=
ade" id=3D"layui-layer-shade'+a+'" times=3D"'+a+'" style=3D"'+("z-index:"+(=
s-1)+"; ")+'"&gt;&lt;/div&gt;':"",'&lt;div class=3D"'+l[0]+(" layui-layer-"=
+o.type[r.type])+(0!=3Dr.type&amp;&amp;2!=3Dr.type||r.shade?"":" layui-laye=
r-border")+" "+(r.skin||"")+'" id=3D"'+l[0]+a+'" type=3D"'+o.type[r.type]+'=
" times=3D"'+a+'" showtime=3D"'+r.time+'" conType=3D"'+(e?"object":"string"=
)+'" style=3D"z-index: '+s+"; width:"+r.area[0]+";height:"+r.area[1]+(r.fix=
ed?"":";position:absolute;")+'"&gt;'+(e&amp;&amp;2!=3Dr.type?"":u)+'&lt;div=
 id=3D"'+(r.id||"")+'" class=3D"layui-layer-content'+(0=3D=3Dr.type&amp;&am=
p;r.icon!=3D=3D-1?" layui-layer-padding":"")+(3=3D=3Dr.type?" layui-layer-l=
oading"+r.icon:"")+'"&gt;'+(0=3D=3Dr.type&amp;&amp;r.icon!=3D=3D-1?'&lt;i c=
lass=3D"layui-layer-ico layui-layer-ico'+r.icon+'"&gt;&lt;/i&gt;':"")+(1=3D=
=3Dr.type&amp;&amp;e?"":r.content||"")+'&lt;/div&gt;&lt;span class=3D"layui=
-layer-setwin"&gt;'+function(){var e=3Dc?'&lt;a class=3D"layui-layer-min" h=
ref=3D"javascript:;"&gt;&lt;cite&gt;&lt;/cite&gt;&lt;/a&gt;&lt;a class=3D"l=
ayui-layer-ico layui-layer-max" href=3D"javascript:;"&gt;&lt;/a&gt;':"";ret=
urn r.closeBtn&amp;&amp;(e+=3D'&lt;a class=3D"layui-layer-ico '+l[7]+" "+l[=
7]+(r.title?r.closeBtn:4=3D=3Dr.type?"1":"2")+'" href=3D"javascript:;"&gt;&=
lt;/a&gt;'),e}()+"&lt;/span&gt;"+(r.btn?function(){var e=3D"";"string"=3D=
=3Dtypeof r.btn&amp;&amp;(r.btn=3D[r.btn]);for(var t=3D0,i=3Dr.btn.length;t=
&lt;i;t++)e+=3D'&lt;a class=3D"'+l[6]+t+'"&gt;'+r.btn[t]+"&lt;/a&gt;";retur=
n'&lt;div class=3D"'+l[6]+" layui-layer-btn-"+(r.btnAlign||"")+'"&gt;'+e+"&=
lt;/div&gt;"}():"")+(r.resize?'&lt;span class=3D"layui-layer-resize"&gt;&lt=
;/span&gt;':"")+"&lt;/div&gt;"],u,i('&lt;div class=3D"layui-layer-move"&gt;=
&lt;/div&gt;')),n},s.pt.creat=3Dfunction(){var e=3Dthis,t=3De.config,a=3De.=
index,s=3Dt.content,f=3D"object"=3D=3Dtypeof s,c=3Di("body");if(!t.id||!i("=
#"+t.id)[0]){switch("string"=3D=3Dtypeof t.area&amp;&amp;(t.area=3D"auto"=
=3D=3D=3Dt.area?["",""]:[t.area,""]),t.shift&amp;&amp;(t.anim=3Dt.shift),6=
=3D=3Dr.ie&amp;&amp;(t.fixed=3D!1),t.type){case 0:t.btn=3D"btn"in t?t.btn:o=
.btn[0],r.closeAll("dialog");break;case 2:var s=3Dt.content=3Df?t.content:[=
t.content||"http://layer.layui.com","auto"];t.content=3D'&lt;iframe scrolli=
ng=3D"'+(t.content[1]||"auto")+'" allowtransparency=3D"true" id=3D"'+l[4]+a=
+'" name=3D"'+l[4]+a+'" onload=3D"this.className=3D\'\';" class=3D"layui-la=
yer-load" frameborder=3D"0" src=3D"'+t.content[0]+'"&gt;&lt;/iframe&gt;';br=
eak;case 3:delete t.title,delete t.closeBtn,t.icon=3D=3D=3D-1&amp;&amp;0=3D=
=3D=3Dt.icon,r.closeAll("loading");break;case 4:f||(t.content=3D[t.content,=
"body"]),t.follow=3Dt.content[1],t.content=3Dt.content[0]+'&lt;i class=3D"l=
ayui-layer-TipsG"&gt;&lt;/i&gt;',delete t.title,t.tips=3D"object"=3D=3Dtype=
of t.tips?t.tips:[t.tips,!0],t.tipsMore||r.closeAll("tips")}if(e.vessel(f,f=
unction(n,r,u){c.append(n[0]),f?function(){2=3D=3Dt.type||4=3D=3Dt.type?fun=
ction(){i("body").append(n[1])}():function(){s.parents("."+l[0])[0]||(s.dat=
a("display",s.css("display")).show().addClass("layui-layer-wrap").wrap(n[1]=
),i("#"+l[0]+a).find("."+l[5]).before(r))}()}():c.append(n[1]),i(".layui-la=
yer-move")[0]||c.append(o.moveElem=3Du),e.layero=3Di("#"+l[0]+a),t.scrollba=
r||l.html.css("overflow","hidden").attr("layer-full",a)}).auto(a),i("#layui=
-layer-shade"+e.index).css({"background-color":t.shade[1]||"#000",opacity:t=
.shade[0]||t.shade}),2=3D=3Dt.type&amp;&amp;6=3D=3Dr.ie&amp;&amp;e.layero.f=
ind("iframe").attr("src",s[0]),4=3D=3Dt.type?e.tips():e.offset(),t.fixed&am=
p;&amp;n.on("resize",function(){e.offset(),(/^\d+%$/.test(t.area[0])||/^\d+=
%$/.test(t.area[1]))&amp;&amp;e.auto(a),4=3D=3Dt.type&amp;&amp;e.tips()}),t=
.time&lt;=3D0||setTimeout(function(){r.close(e.index)},t.time),e.move().cal=
lback(),l.anim[t.anim]){var u=3D"layer-anim "+l.anim[t.anim];e.layero.addCl=
ass(u).one("webkitAnimationEnd mozAnimationEnd MSAnimationEnd oanimationend=
 animationend",function(){i(this).removeClass(u)})}t.isOutAnim&amp;&amp;e.l=
ayero.data("isOutAnim",!0)}},s.pt.auto=3Dfunction(e){var t=3Dthis,a=3Dt.con=
fig,o=3Di("#"+l[0]+e);""=3D=3D=3Da.area[0]&amp;&amp;a.maxWidth&gt;0&amp;&am=
p;(r.ie&amp;&amp;r.ie&lt;8&amp;&amp;a.btn&amp;&amp;o.width(o.innerWidth()),=
o.outerWidth()&gt;a.maxWidth&amp;&amp;o.width(a.maxWidth));var s=3D[o.inner=
Width(),o.innerHeight()],f=3Do.find(l[1]).outerHeight()||0,c=3Do.find("."+l=
[6]).outerHeight()||0,u=3Dfunction(e){e=3Do.find(e),e.height(s[1]-f-c-2*(0|=
parseFloat(e.css("padding-top"))))};switch(a.type){case 2:u("iframe");break=
;default:""=3D=3D=3Da.area[1]?a.maxHeight&gt;0&amp;&amp;o.outerHeight()&gt;=
a.maxHeight?(s[1]=3Da.maxHeight,u("."+l[5])):a.fixed&amp;&amp;s[1]&gt;=3Dn.=
height()&amp;&amp;(s[1]=3Dn.height(),u("."+l[5])):u("."+l[5])}return t},s.p=
t.offset=3Dfunction(){var e=3Dthis,t=3De.config,i=3De.layero,a=3D[i.outerWi=
dth(),i.outerHeight()],o=3D"object"=3D=3Dtypeof t.offset;e.offsetTop=3D(n.h=
eight()-a[1])/2,e.offsetLeft=3D(n.width()-a[0])/2,o?(e.offsetTop=3Dt.offset=
[0],e.offsetLeft=3Dt.offset[1]||e.offsetLeft):"auto"!=3D=3Dt.offset&amp;&am=
p;("t"=3D=3D=3Dt.offset?e.offsetTop=3D0:"r"=3D=3D=3Dt.offset?e.offsetLeft=
=3Dn.width()-a[0]:"b"=3D=3D=3Dt.offset?e.offsetTop=3Dn.height()-a[1]:"l"=3D=
=3D=3Dt.offset?e.offsetLeft=3D0:"lt"=3D=3D=3Dt.offset?(e.offsetTop=3D0,e.of=
fsetLeft=3D0):"lb"=3D=3D=3Dt.offset?(e.offsetTop=3Dn.height()-a[1],e.offset=
Left=3D0):"rt"=3D=3D=3Dt.offset?(e.offsetTop=3D0,e.offsetLeft=3Dn.width()-a=
[0]):"rb"=3D=3D=3Dt.offset?(e.offsetTop=3Dn.height()-a[1],e.offsetLeft=3Dn.=
width()-a[0]):e.offsetTop=3Dt.offset),t.fixed||(e.offsetTop=3D/%$/.test(e.o=
ffsetTop)?n.height()*parseFloat(e.offsetTop)/100:parseFloat(e.offsetTop),e.=
offsetLeft=3D/%$/.test(e.offsetLeft)?n.width()*parseFloat(e.offsetLeft)/100=
:parseFloat(e.offsetLeft),e.offsetTop+=3Dn.scrollTop(),e.offsetLeft+=3Dn.sc=
rollLeft()),i.attr("minLeft")&amp;&amp;(e.offsetTop=3Dn.height()-(i.find(l[=
1]).outerHeight()||0),e.offsetLeft=3Di.css("left")),i.css({top:e.offsetTop,=
left:e.offsetLeft})},s.pt.tips=3Dfunction(){var e=3Dthis,t=3De.config,a=3De=
.layero,o=3D[a.outerWidth(),a.outerHeight()],r=3Di(t.follow);r[0]||(r=3Di("=
body"));var s=3D{width:r.outerWidth(),height:r.outerHeight(),top:r.offset()=
.top,left:r.offset().left},f=3Da.find(".layui-layer-TipsG"),c=3Dt.tips[0];t=
.tips[1]||f.remove(),s.autoLeft=3Dfunction(){s.left+o[0]-n.width()&gt;0?(s.=
tipLeft=3Ds.left+s.width-o[0],f.css({right:12,left:"auto"})):s.tipLeft=3Ds.=
left},s.where=3D[function(){s.autoLeft(),s.tipTop=3Ds.top-o[1]-10,f.removeC=
lass("layui-layer-TipsB").addClass("layui-layer-TipsT").css("border-right-c=
olor",t.tips[1])},function(){s.tipLeft=3Ds.left+s.width+10,s.tipTop=3Ds.top=
,f.removeClass("layui-layer-TipsL").addClass("layui-layer-TipsR").css("bord=
er-bottom-color",t.tips[1])},function(){s.autoLeft(),s.tipTop=3Ds.top+s.hei=
ght+10,f.removeClass("layui-layer-TipsT").addClass("layui-layer-TipsB").css=
("border-right-color",t.tips[1])},function(){s.tipLeft=3Ds.left-o[0]-10,s.t=
ipTop=3Ds.top,f.removeClass("layui-layer-TipsR").addClass("layui-layer-Tips=
L").css("border-bottom-color",t.tips[1])}],s.where[c-1](),1=3D=3D=3Dc?s.top=
-(n.scrollTop()+o[1]+16)&lt;0&amp;&amp;s.where[2]():2=3D=3D=3Dc?n.width()-(=
s.left+s.width+o[0]+16)&gt;0||s.where[3]():3=3D=3D=3Dc?s.top-n.scrollTop()+=
s.height+o[1]+16-n.height()&gt;0&amp;&amp;s.where[0]():4=3D=3D=3Dc&amp;&amp=
;o[0]+16-s.left&gt;0&amp;&amp;s.where[1](),a.find("."+l[5]).css({"backgroun=
d-color":t.tips[1],"padding-right":t.closeBtn?"30px":""}),a.css({left:s.tip=
Left-(t.fixed?n.scrollLeft():0),top:s.tipTop-(t.fixed?n.scrollTop():0)})},s=
.pt.move=3Dfunction(){var e=3Dthis,t=3De.config,a=3Di(document),s=3De.layer=
o,l=3Ds.find(t.move),f=3Ds.find(".layui-layer-resize"),c=3D{};return t.move=
&amp;&amp;l.css("cursor","move"),l.on("mousedown",function(e){e.preventDefa=
ult(),t.move&amp;&amp;(c.moveStart=3D!0,c.offset=3D[e.clientX-parseFloat(s.=
css("left")),e.clientY-parseFloat(s.css("top"))],o.moveElem.css("cursor","m=
ove").show())}),f.on("mousedown",function(e){e.preventDefault(),c.resizeSta=
rt=3D!0,c.offset=3D[e.clientX,e.clientY],c.area=3D[s.outerWidth(),s.outerHe=
ight()],o.moveElem.css("cursor","se-resize").show()}),a.on("mousemove",func=
tion(i){if(c.moveStart){var a=3Di.clientX-c.offset[0],o=3Di.clientY-c.offse=
t[1],l=3D"fixed"=3D=3D=3Ds.css("position");if(i.preventDefault(),c.stX=3Dl?=
0:n.scrollLeft(),c.stY=3Dl?0:n.scrollTop(),!t.moveOut){var f=3Dn.width()-s.=
outerWidth()+c.stX,u=3Dn.height()-s.outerHeight()+c.stY;a&lt;c.stX&amp;&amp=
;(a=3Dc.stX),a&gt;f&amp;&amp;(a=3Df),o&lt;c.stY&amp;&amp;(o=3Dc.stY),o&gt;u=
&amp;&amp;(o=3Du)}s.css({left:a,top:o})}if(t.resize&amp;&amp;c.resizeStart)=
{var a=3Di.clientX-c.offset[0],o=3Di.clientY-c.offset[1];i.preventDefault()=
,r.style(e.index,{width:c.area[0]+a,height:c.area[1]+o}),c.isResize=3D!0,t.=
resizing&amp;&amp;t.resizing(s)}}).on("mouseup",function(e){c.moveStart&amp=
;&amp;(delete c.moveStart,o.moveElem.hide(),t.moveEnd&amp;&amp;t.moveEnd(s)=
),c.resizeStart&amp;&amp;(delete c.resizeStart,o.moveElem.hide())}),e},s.pt=
.callback=3Dfunction(){function e(){var e=3Da.cancel&amp;&amp;a.cancel(t.in=
dex,n);e=3D=3D=3D!1||r.close(t.index)}var t=3Dthis,n=3Dt.layero,a=3Dt.confi=
g;t.openLayer(),a.success&amp;&amp;(2=3D=3Da.type?n.find("iframe").on("load=
",function(){a.success(n,t.index)}):a.success(n,t.index)),6=3D=3Dr.ie&amp;&=
amp;t.IE6(n),n.find("."+l[6]).children("a").on("click",function(){var e=3Di=
(this).index();if(0=3D=3D=3De)a.yes?a.yes(t.index,n):a.btn1?a.btn1(t.index,=
n):r.close(t.index);else{var o=3Da["btn"+(e+1)]&amp;&amp;a["btn"+(e+1)](t.i=
ndex,n);o=3D=3D=3D!1||r.close(t.index)}}),n.find("."+l[7]).on("click",e),a.=
shadeClose&amp;&amp;i("#layui-layer-shade"+t.index).on("click",function(){r=
.close(t.index)}),n.find(".layui-layer-min").on("click",function(){var e=3D=
a.min&amp;&amp;a.min(n);e=3D=3D=3D!1||r.min(t.index,a)}),n.find(".layui-lay=
er-max").on("click",function(){i(this).hasClass("layui-layer-maxmin")?(r.re=
store(t.index),a.restore&amp;&amp;a.restore(n)):(r.full(t.index,a),setTimeo=
ut(function(){a.full&amp;&amp;a.full(n)},100))}),a.end&amp;&amp;(o.end[t.in=
dex]=3Da.end)},o.reselect=3Dfunction(){i.each(i("select"),function(e,t){var=
 n=3Di(this);n.parents("."+l[0])[0]||1=3D=3Dn.attr("layer")&amp;&amp;i("."+=
l[0]).length&lt;1&amp;&amp;n.removeAttr("layer").show(),n=3Dnull})},s.pt.IE=
6=3Dfunction(e){i("select").each(function(e,t){var n=3Di(this);n.parents(".=
"+l[0])[0]||"none"=3D=3D=3Dn.css("display")||n.attr({layer:"1"}).hide(),n=
=3Dnull})},s.pt.openLayer=3Dfunction(){var e=3Dthis;r.zIndex=3De.config.zIn=
dex,r.setTop=3Dfunction(e){var t=3Dfunction(){r.zIndex++,e.css("z-index",r.=
zIndex+1)};return r.zIndex=3DparseInt(e[0].style.zIndex),e.on("mousedown",t=
),r.zIndex}},o.record=3Dfunction(e){var t=3D[e.width(),e.height(),e.positio=
n().top,e.position().left+parseFloat(e.css("margin-left"))];e.find(".layui-=
layer-max").addClass("layui-layer-maxmin"),e.attr({area:t})},o.rescollbar=
=3Dfunction(e){l.html.attr("layer-full")=3D=3De&amp;&amp;(l.html[0].style.r=
emoveProperty?l.html[0].style.removeProperty("overflow"):l.html[0].style.re=
moveAttribute("overflow"),l.html.removeAttr("layer-full"))},e.layer=3Dr,r.g=
etChildFrame=3Dfunction(e,t){return t=3Dt||i("."+l[4]).attr("times"),i("#"+=
l[0]+t).find("iframe").contents().find(e)},r.getFrameIndex=3Dfunction(e){re=
turn i("#"+e).parents("."+l[4]).attr("times")},r.iframeAuto=3Dfunction(e){i=
f(e){var t=3Dr.getChildFrame("html",e).outerHeight(),n=3Di("#"+l[0]+e),a=3D=
n.find(l[1]).outerHeight()||0,o=3Dn.find("."+l[6]).outerHeight()||0;n.css({=
height:t+a+o}),n.find("iframe").css({height:t})}},r.iframeSrc=3Dfunction(e,=
t){i("#"+l[0]+e).find("iframe").attr("src",t)},r.style=3Dfunction(e,t,n){va=
r a=3Di("#"+l[0]+e),r=3Da.find(".layui-layer-content"),s=3Da.attr("type"),f=
=3Da.find(l[1]).outerHeight()||0,c=3Da.find("."+l[6]).outerHeight()||0;a.at=
tr("minLeft");s!=3D=3Do.type[3]&amp;&amp;s!=3D=3Do.type[4]&amp;&amp;(n||(pa=
rseFloat(t.width)&lt;=3D260&amp;&amp;(t.width=3D260),parseFloat(t.height)-f=
-c&lt;=3D64&amp;&amp;(t.height=3D64+f+c)),a.css(t),c=3Da.find("."+l[6]).out=
erHeight(),s=3D=3D=3Do.type[2]?a.find("iframe").css({height:parseFloat(t.he=
ight)-f-c}):r.css({height:parseFloat(t.height)-f-c-parseFloat(r.css("paddin=
g-top"))-parseFloat(r.css("padding-bottom"))}))},r.min=3Dfunction(e,t){var =
a=3Di("#"+l[0]+e),s=3Da.find(l[1]).outerHeight()||0,f=3Da.attr("minLeft")||=
181*o.minIndex+"px",c=3Da.css("position");o.record(a),o.minLeft[0]&amp;&amp=
;(f=3Do.minLeft[0],o.minLeft.shift()),a.attr("position",c),r.style(e,{width=
:180,height:s,left:f,top:n.height()-s,position:"fixed",overflow:"hidden"},!=
0),a.find(".layui-layer-min").hide(),"page"=3D=3D=3Da.attr("type")&amp;&amp=
;a.find(l[4]).hide(),o.rescollbar(e),a.attr("minLeft")||o.minIndex++,a.attr=
("minLeft",f)},r.restore=3Dfunction(e){var t=3Di("#"+l[0]+e),n=3Dt.attr("ar=
ea").split(",");t.attr("type");r.style(e,{width:parseFloat(n[0]),height:par=
seFloat(n[1]),top:parseFloat(n[2]),left:parseFloat(n[3]),position:t.attr("p=
osition"),overflow:"visible"},!0),t.find(".layui-layer-max").removeClass("l=
ayui-layer-maxmin"),t.find(".layui-layer-min").show(),"page"=3D=3D=3Dt.attr=
("type")&amp;&amp;t.find(l[4]).show(),o.rescollbar(e)},r.full=3Dfunction(e)=
{var t,a=3Di("#"+l[0]+e);o.record(a),l.html.attr("layer-full")||l.html.css(=
"overflow","hidden").attr("layer-full",e),clearTimeout(t),t=3DsetTimeout(fu=
nction(){var t=3D"fixed"=3D=3D=3Da.css("position");r.style(e,{top:t?0:n.scr=
ollTop(),left:t?0:n.scrollLeft(),width:n.width(),height:n.height()},!0),a.f=
ind(".layui-layer-min").hide()},100)},r.title=3Dfunction(e,t){var n=3Di("#"=
+l[0]+(t||r.index)).find(l[1]);n.html(e)},r.close=3Dfunction(e){var t=3Di("=
#"+l[0]+e),n=3Dt.attr("type"),a=3D"layer-anim-close";if(t[0]){var s=3D"layu=
i-layer-wrap",f=3Dfunction(){if(n=3D=3D=3Do.type[1]&amp;&amp;"object"=3D=3D=
=3Dt.attr("conType")){t.children(":not(."+l[5]+")").remove();for(var a=3Dt.=
find("."+s),r=3D0;r&lt;2;r++)a.unwrap();a.css("display",a.data("display")).=
removeClass(s)}else{if(n=3D=3D=3Do.type[2])try{var f=3Di("#"+l[4]+e)[0];f.c=
ontentWindow.document.write(""),f.contentWindow.close(),t.find("."+l[5])[0]=
.removeChild(f)}catch(c){}t[0].innerHTML=3D"",t.remove()}"function"=3D=3Dty=
peof o.end[e]&amp;&amp;o.end[e](),delete o.end[e]};t.data("isOutAnim")&amp;=
&amp;t.addClass("layer-anim "+a),i("#layui-layer-moves, #layui-layer-shade"=
+e).remove(),6=3D=3Dr.ie&amp;&amp;o.reselect(),o.rescollbar(e),t.attr("minL=
eft")&amp;&amp;(o.minIndex--,o.minLeft.push(t.attr("minLeft"))),r.ie&amp;&a=
mp;r.ie&lt;10||!t.data("isOutAnim")?f():setTimeout(function(){f()},200)}},r=
.closeAll=3Dfunction(e){i.each(i("."+l[0]),function(){var t=3Di(this),n=3De=
?t.attr("type")=3D=3D=3De:1;n&amp;&amp;r.close(t.attr("times")),n=3Dnull})}=
;var f=3Dr.cache||{},c=3Dfunction(e){return f.skin?" "+f.skin+" "+f.skin+"-=
"+e:""};r.prompt=3Dfunction(e,t){var a=3D"";if(e=3De||{},"function"=3D=3Dty=
peof e&amp;&amp;(t=3De),e.area){var o=3De.area;a=3D'style=3D"width: '+o[0]+=
"; height: "+o[1]+';"',delete e.area}var s,l=3D2=3D=3De.formType?'&lt;texta=
rea class=3D"layui-layer-input"'+a+"&gt;"+(e.value||"")+"&lt;/textarea&gt;"=
:function(){return'&lt;input type=3D"'+(1=3D=3De.formType?"password":"text"=
)+'" class=3D"layui-layer-input" value=3D"'+(e.value||"")+'"&gt;'}(),f=3De.=
success;return delete e.success,r.open(i.extend({type:1,btn:["&amp;#x786E;&=
amp;#x5B9A;","&amp;#x53D6;&amp;#x6D88;"],content:l,skin:"layui-layer-prompt=
"+c("prompt"),maxWidth:n.width(),success:function(e){s=3De.find(".layui-lay=
er-input"),s.focus(),"function"=3D=3Dtypeof f&amp;&amp;f(e)},resize:!1,yes:=
function(i){var n=3Ds.val();""=3D=3D=3Dn?s.focus():n.length&gt;(e.maxlength=
||500)?r.tips("&amp;#x6700;&amp;#x591A;&amp;#x8F93;&amp;#x5165;"+(e.maxleng=
th||500)+"&amp;#x4E2A;&amp;#x5B57;&amp;#x6570;",s,{tips:1}):t&amp;&amp;t(n,=
i,s)}},e))},r.tab=3Dfunction(e){e=3De||{};var t=3De.tab||{},n=3D"layui-this=
",a=3De.success;return delete e.success,r.open(i.extend({type:1,skin:"layui=
-layer-tab"+c("tab"),resize:!1,title:function(){var e=3Dt.length,i=3D1,a=3D=
"";if(e&gt;0)for(a=3D'&lt;span class=3D"'+n+'"&gt;'+t[0].title+"&lt;/span&g=
t;";i&lt;e;i++)a+=3D"&lt;span&gt;"+t[i].title+"&lt;/span&gt;";return a}(),c=
ontent:'&lt;ul class=3D"layui-layer-tabmain"&gt;'+function(){var e=3Dt.leng=
th,i=3D1,a=3D"";if(e&gt;0)for(a=3D'&lt;li class=3D"layui-layer-tabli '+n+'"=
&gt;'+(t[0].content||"no content")+"&lt;/li&gt;";i&lt;e;i++)a+=3D'&lt;li cl=
ass=3D"layui-layer-tabli"&gt;'+(t[i].content||"no  content")+"&lt;/li&gt;";=
return a}()+"&lt;/ul&gt;",success:function(t){var o=3Dt.find(".layui-layer-=
title").children(),r=3Dt.find(".layui-layer-tabmain").children();o.on("mous=
edown",function(t){t.stopPropagation?t.stopPropagation():t.cancelBubble=3D!=
0;var a=3Di(this),o=3Da.index();a.addClass(n).siblings().removeClass(n),r.e=
q(o).show().siblings().hide(),"function"=3D=3Dtypeof e.change&amp;&amp;e.ch=
ange(o)}),"function"=3D=3Dtypeof a&amp;&amp;a(t)}},e))},r.photos=3Dfunction=
(t,n,a){function o(e,t,i){var n=3Dnew Image;return n.src=3De,n.complete?t(n=
):(n.onload=3Dfunction(){n.onload=3Dnull,t(n)},void(n.onerror=3Dfunction(e)=
{n.onerror=3Dnull,i(e)}))}var s=3D{};if(t=3Dt||{},t.photos){var l=3Dt.photo=
s.constructor=3D=3D=3DObject,f=3Dl?t.photos:{},u=3Df.data||[],d=3Df.start||=
0;s.imgIndex=3D(0|d)+1,t.img=3Dt.img||"img";var y=3Dt.success;if(delete t.s=
uccess,l){if(0=3D=3D=3Du.length)return r.msg("&amp;#x6CA1;&amp;#x6709;&amp;=
#x56FE;&amp;#x7247;")}else{var p=3Di(t.photos),h=3Dfunction(){u=3D[],p.find=
(t.img).each(function(e){var t=3Di(this);t.attr("layer-index",e),u.push({al=
t:t.attr("alt"),pid:t.attr("layer-pid"),src:t.attr("layer-src")||t.attr("sr=
c"),thumb:t.attr("src")})})};if(h(),0=3D=3D=3Du.length)return;if(n||p.on("c=
lick",t.img,function(){var e=3Di(this),n=3De.attr("layer-index");r.photos(i=
.extend(t,{photos:{start:n,data:u,tab:t.tab},full:t.full}),!0),h()}),!n)ret=
urn}s.imgprev=3Dfunction(e){s.imgIndex--,s.imgIndex&lt;1&amp;&amp;(s.imgInd=
ex=3Du.length),s.tabimg(e)},s.imgnext=3Dfunction(e,t){s.imgIndex++,s.imgInd=
ex&gt;u.length&amp;&amp;(s.imgIndex=3D1,t)||s.tabimg(e)},s.keyup=3Dfunction=
(e){if(!s.end){var t=3De.keyCode;e.preventDefault(),37=3D=3D=3Dt?s.imgprev(=
!0):39=3D=3D=3Dt?s.imgnext(!0):27=3D=3D=3Dt&amp;&amp;r.close(s.index)}},s.t=
abimg=3Dfunction(e){if(!(u.length&lt;=3D1))return f.start=3Ds.imgIndex-1,r.=
close(s.index),r.photos(t,!0,e)},s.event=3Dfunction(){s.bigimg.hover(functi=
on(){s.imgsee.show()},function(){s.imgsee.hide()}),s.bigimg.find(".layui-la=
yer-imgprev").on("click",function(e){e.preventDefault(),s.imgprev()}),s.big=
img.find(".layui-layer-imgnext").on("click",function(e){e.preventDefault(),=
s.imgnext()}),i(document).on("keyup",s.keyup)},s.loadi=3Dr.load(1,{shade:!(=
"shade"in t)&amp;&amp;.9,scrollbar:!1}),o(u[d].src,function(n){r.close(s.lo=
adi),s.index=3Dr.open(i.extend({type:1,id:"layui-layer-photos",area:functio=
n(){var a=3D[n.width,n.height],o=3D[i(e).width()-100,i(e).height()-100];if(=
!t.full&amp;&amp;(a[0]&gt;o[0]||a[1]&gt;o[1])){var r=3D[a[0]/o[0],a[1]/o[1]=
];r[0]&gt;r[1]?(a[0]=3Da[0]/r[0],a[1]=3Da[1]/r[0]):r[0]&lt;r[1]&amp;&amp;(a=
[0]=3Da[0]/r[1],a[1]=3Da[1]/r[1])}return[a[0]+"px",a[1]+"px"]}(),title:!1,s=
hade:.9,shadeClose:!0,closeBtn:!1,move:".layui-layer-phimg img",moveType:1,=
scrollbar:!1,moveOut:!0,isOutAnim:!1,skin:"layui-layer-photos"+c("photos"),=
content:'&lt;div class=3D"layui-layer-phimg"&gt;&lt;img src=3D"'+u[d].src+'=
" alt=3D"'+(u[d].alt||"")+'" layer-pid=3D"'+u[d].pid+'"&gt;&lt;div class=3D=
"layui-layer-imgsee"&gt;'+(u.length&gt;1?'&lt;span class=3D"layui-layer-img=
uide"&gt;&lt;a href=3D"javascript:;" class=3D"layui-layer-iconext layui-lay=
er-imgprev"&gt;&lt;/a&gt;&lt;a href=3D"javascript:;" class=3D"layui-layer-i=
conext layui-layer-imgnext"&gt;&lt;/a&gt;&lt;/span&gt;':"")+'&lt;div class=
=3D"layui-layer-imgbar" style=3D"display:'+(a?"block":"")+'"&gt;&lt;span cl=
ass=3D"layui-layer-imgtit"&gt;&lt;a href=3D"javascript:;"&gt;'+(u[d].alt||"=
")+"&lt;/a&gt;&lt;em&gt;"+s.imgIndex+"/"+u.length+"&lt;/em&gt;&lt;/span&gt;=
&lt;/div&gt;&lt;/div&gt;&lt;/div&gt;",success:function(e,i){s.bigimg=3De.fi=
nd(".layui-layer-phimg"),s.imgsee=3De.find(".layui-layer-imguide,.layui-lay=
er-imgbar"),s.event(e),t.tab&amp;&amp;t.tab(u[d],e),"function"=3D=3Dtypeof =
y&amp;&amp;y(e)},end:function(){s.end=3D!0,i(document).off("keyup",s.keyup)=
}},t))},function(){r.close(s.loadi),r.msg("&amp;#x5F53;&amp;#x524D;&amp;#x5=
6FE;&amp;#x7247;&amp;#x5730;&amp;#x5740;&amp;#x5F02;&amp;#x5E38;&lt;br&gt;&=
amp;#x662F;&amp;#x5426;&amp;#x7EE7;&amp;#x7EED;&amp;#x67E5;&amp;#x770B;&amp=
;#x4E0B;&amp;#x4E00;&amp;#x5F20;&amp;#xFF1F;",{time:3e4,btn:["&amp;#x4E0B;&=
amp;#x4E00;&amp;#x5F20;","&amp;#x4E0D;&amp;#x770B;&amp;#x4E86;"],yes:functi=
on(){u.length&gt;1&amp;&amp;s.imgnext(!0,!0)}})})}},o.run=3Dfunction(t){i=
=3Dt,n=3Di(e),l.html=3Di("html"),r.open=3Dfunction(e){var t=3Dnew s(e);retu=
rn t.index}},e.layui&amp;&amp;layui.define?(r.ready(),layui.define("jquery"=
,function(t){r.path=3Dlayui.cache.dir,o.run(layui.$),e.layer=3Dr,t("layer",=
r)})):"function"=3D=3Dtypeof define&amp;&amp;define.amd?define(["jquery"],f=
unction(){return o.run(e.jQuery),r}):function(){o.run(e.jQuery),r.ready()}(=
)}(window);</pre></body></html>
------MultipartBoundary--XKTj8JHcTx79fTuSlvb9zv2AFapVnCCqHhZMSKWNuD------
