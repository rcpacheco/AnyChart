if(!_.tag_cloud_part){_.tag_cloud_part=1;(function($){var U1=function(a,b){a.U=b;a.R=!!b;a.reset()},V1=function(a){var b=new $.Yg;b.parent(a);return b},W1=function(a,b){$.Qt.call(this);this.Ql=["x","value"];this.Bc="category";this.Jb=this.jb=window.NaN;var c=[$.Lz.fY],d={};$.to(d,[["fill",16,1],["fontFamily",16388,1],["fontStyle",16388,1],["fontVariant",16388,1],["fontWeight",16388,1],["fontSize",16388,1]]);var e={};$.to(e,[["fill",0,0],["fontFamily",0,0],["fontStyle",0,0],["fontVariant",0,0],["fontWeight",0,0],["fontSize",0,0]]);this.ga=new $.qv(this,
d,$.Vk,c);this.Da=new $.qv(this,e,1,c);this.Ma=new $.qv(this,e,2,c);this.state=new $.ut(this);this.data(a||null,b);$.to(this.F,[["mode",4,1],["fromAngle",8192,1],["toAngle",8192,1],["anglesCount",8192,1],["textSpacing",4,1]])},X1=function(a,b,c){if($.J(a.j,b))c&&a.j.Y(c);else{var d=!!a.j;$.K(a.j);a.j=new b;c&&a.j.Y(c);$.T(a.j,a.n7,a);$.L(a,a.j);d&&a.D(512,1)}},Y1=function(a,b){var c=a.la(),d=c.sa(),d=b||a.wy().Sc(d)||"blue",e,f={},h=a.vl(),k=c.get("value"),c=c.G("category");f.value=k;f.category=c;
if(h){k=$.J(h,$.rG)&&$.n(c)?c:k;if(a.K||$.n(c))e=h.Xr(k);$.zc(f,{scaledColor:e,colorScale:a.K})}f.sourceColor=d;return f},Z1=function(a,b){$.B(b)?(a.vd("fill",b),a.vd("fill-opacity",1)):(a.vd("fill",b.color),a.vd("fill-opacity",b.opacity))},$1=function(a,b,c){var d,e,f;if(c!=$.Vk&&(d=1==c?a.Da:a.Ma,d=d.N(b),e=$.Pm(d),null!=d&&!$.D(d)&&!e))return d;var h=a.la().G("item");c=a.ga.N(b);var k=$.Pm(c);if(null==c||k){switch(b){case "fontFamily":f=h.font;break;case "fill":f=h.fill;break;case "fontStyle":f=
h.style;break;case "fontVariant":f=h.variant;break;case "fontWeight":f=h.weight;break;case "fontSize":f=h.size}c=f}else $.D(c)&&("fill"==b?f=Y1(a):(f=a.mc(),f.sourceValue=c),c=c.call(f,f));if(d){if(e)return c*(0,window.parseFloat)(d)/100;"fill"==b?f=Y1(a,c):(f=a.mc(),f.sourceValue=c);return d.call(f,f)}return c},Nga=function(a,b){if(b){var c=a.o/3,d=a.I/3,e=a.I/50,f=$.mb(e,~~d+1),h=$.gb(f,function(a){a=$.Jf().measure(b.text,{fontStyle:b.style,fontFamily:b.font,fontSize:a,fontWeight:b.weight,fontVariant:b.variant});
var e=$.Wm(a,"center"),e=$.Xb($.H(b.rotate),e.x,e.y);a=$.Ul(a)||[];e.transform(a,0,a,0,4);a=$.Vl(a);e=a.width;a=a.height;return e>c||a>d?-1:e==c||a==d?0:1});0>h&&(h=~h-1);a.jb=e;a.Jb=f[$.rb(h,0,f.length)]}},Oga=function(a,b,c,d,e){if(!c.Lw){var f=b.context,h=b.ratio;f.clearRect(0,0,2048/h,2048/h);var k=b=0,l=0,m=d.length;--e;for(var p=a.N("textSpacing");++e<m;){c=d[e];f.save();a="";"normal"!=c.style&&(a+=c.style+" ");"normal"!=c.weight&&(a+=c.weight+" ");"normal"!=c.variant&&(a+=c.variant+" ");f.font=
a+~~((c.size+1)/h)+"px "+c.font;a=f.measureText(c.text).width*h;var q=c.size<<1;if(c.rotate){var r=Math.sin($.H(c.rotate)),t=Math.cos($.H(c.rotate)),u=a*t,v=a*r,t=q*t;a=q*r;a=Math.max(Math.abs(u+a),Math.abs(u-a))+31>>5<<5;q=~~Math.max(Math.abs(v+t),Math.abs(v-t))}else a=a+31>>5<<5;q>l&&(l=q);2048<=b+a&&(b=0,k+=l,l=0);if(2048<=k+q)break;f.translate((b+(a>>1))/h,(k+(q>>1))/h);c.rotate&&f.rotate($.H(c.rotate));f.fillText(c.text,0,0);p&&(f.lineWidth=2*p,f.strokeText(c.text,0,0));f.restore();c.width=a;
c.height=q;c.lea=b;c.pea=k;c.En=a>>1;c.Vj=q>>1;c.Mo=-c.En;c.fj=-c.Vj;c.$T=!0;b+=a}f=f.getImageData(0,0,2048/h,2048/h).data;for(h=[];0<=--e;)if(c=d[e],c.$T){a=c.width;l=a>>5;q=c.Vj-c.fj;for(m=0;m<q*l;m++)h[m]=0;b=c.lea;if(null==b)break;k=c.pea;p=0;u=-1;for(v=0;v<q;v++){for(m=0;m<a;m++)r=f[2048*(k+v)+(b+m)<<2]?1<<31-m%32:0,h[l*v+(m>>5)]|=r,p|=r;p?u=v:(c.fj++,q--,v--,k++)}c.Vj=c.fj+u;c.Lw=h.slice(0,(c.Vj-c.fj)*l)}}},Pga=function(a,b){var c=a[0],d=a[1];b.x+b.Mo<c.x&&(c.x=b.x+b.Mo);b.y+b.fj<c.y&&(c.y=
b.y+b.fj);b.x+b.En>d.x&&(d.x=b.x+b.En);b.y+b.Vj>d.y&&(d.y=b.y+b.Vj)},Qga=function(a){var b=4*a.o/a.I,c=0,d=0;return function(a){var e=0>a?-1:1;switch(Math.sqrt(1+4*e*a)-e&3){case 0:c+=b;break;case 1:d+=4;break;case 2:c-=b;break;default:d-=4}return[c,d]}},Rga=function(a){for(var b=[],c=-1;++c<a;)b[c]=0;return b},Sga=function(a){a.width=a.height=1;var b=Math.sqrt(a.getContext("2d").getImageData(0,0,1,1).data.length>>2);a.width=2048/b;a.height=2048/b;a=a.getContext("2d");a.fillStyle=a.strokeStyle="red";
a.textAlign="center";return{context:a,ratio:b}},Tga=function(a,b,c,d,e){for(var f=c.x,h=c.y,k=0,l,m;l=a.gc(k);){k+=1;m=~~l[0];l=~~l[1];if(Math.min(Math.abs(m),Math.abs(l))>=e)break;c.x=f+m;c.y=h+l;if(!(m=0>c.x+c.Mo||0>c.y+c.fj||c.x+c.En>a.o||c.y+c.Vj>a.I)&&(m=d))a:{m=a.o;m>>=5;l=c.Lw;for(var p=c.width>>5,q=c.x-(p<<4),r=q&127,t=32-r,u=c.Vj-c.fj,q=(c.y+c.fj)*m+(q>>5),v,w=0;w<u;w++){for(var x=v=0;x<=p;x++)if((v<<t|(x<p?(v=l[w*p+x])>>>r:0))&b[q+x]){m=!0;break a}q+=m}m=!1}if(!m&&(!d||c.x+c.En>d[0].x&&
c.x+c.Mo<d[1].x&&c.y+c.Vj>d[0].y&&c.y+c.fj<d[1].y)){d=c.Lw;e=c.width>>5;a=a.o>>5;m=c.x-(e<<4);f=m&127;h=32-f;k=c.Vj-c.fj;m=(c.y+c.fj)*a+(m>>5);for(p=0;p<k;p++){for(r=l=0;r<=e;r++)b[m+r]=b[m+r]|l<<h|(r<e?(l=d[p*e+r])>>>f:0);m+=a}delete c.Lw;return!0}}return!1},a2=function(a){var b=a.la(),c=a.vl(),d=a.va,e=a.U,f=(0,window.parseFloat)(b.get("value")),h=b.get("category"),k=b.sa();if($.J(c,$.rG)&&$.n(h)){var l=h;b.G("category",h);b=a.ga.N("fill");$.D(b)&&(a={sourceColor:a.wy().Sc(k),category:h},b=b.call(a,
a));e.push($.fc(b))}else a.K?l=f:(b.G("category",void 0),l=$.fc($1(a,"fill",0)),e.push(l),l=$.A(l)?l.color:l,b.G("category",l));c.Uc(l);d.Uc(f)},b2=function(a,b){var c=new W1(a,b);c.ra(!0,$.bl("tagCloud"));return c},Uga={Sha:"spiral",WY:"rect"};$.G(W1,$.Qt);$.Go(W1,"fill fontFamily fontStyle fontVariant fontWeight fontSize".split(" "),"normal");W1.prototype.xa=$.Qt.prototype.xa|258064;var Vga=W1.prototype,c2={};
$.ro(c2,[[0,"mode",function(a,b){return $.qj(Uga,a,b||"spiral")}],[0,"fromAngle",$.Ao],[0,"toAngle",$.Ao],[0,"anglesCount",$.Ao],[0,"textSpacing",$.Ao]]);Vga.xC=c2;$.Fo(W1,W1.prototype.xC);$.g=W1.prototype;$.g.Xa=function(){return"tag-cloud"};$.g.Ub=function(){return this};$.g.If=function(){return!0};$.g.jh=function(){return!1};$.g.Mg=function(){return!0};$.g.Ce=function(){return[this]};$.g.Fd=function(a){this.la().select(a);return new $.Cw(this,a)};$.g.hn=function(){return null};
$.g.la=function(){return this.Ca||(this.Ca=this.Fa.la())};$.g.lc=function(){return this.Ca=this.Fa.la()};$.g.wy=function(a){if($.J(a,$.yq))return X1(this,$.yq,a),this;if($.J(a,$.uq))return X1(this,$.uq,a),this;$.A(a)&&"range"==a.type?X1(this,$.yq):($.A(a)||null==this.j)&&X1(this,$.uq);return $.n(a)?(this.j.Y(a),this):this.j};$.g.n7=function(a){$.W(a,2)&&this.D(65536,129)};$.g.vl=function(){return this.K||this.$b||(this.$b=$.tG())};
$.g.mc=function(){var a=this.la();this.ea||(this.ea=new $.Ns);this.ea.xh(a).Gh([this.Fd(a.sa()),this]);a={x:{value:a.get("x"),type:"string"},value:{value:a.get("value"),type:"number"},name:{value:a.get("name"),type:"string"},index:{value:a.sa(),type:"number"},chart:{value:this,type:""}};$.Bs(this.ea,a);return this.ea};$.g.Nh=function(){return this.mc()};$.g.Lh=function(){};
$.g.ii=function(a,b){var c=this.la().G("item");if(c&&c.Cv){var d=$.Uk(a),e=$.fc($1(this,"fill",d)),f=$1(this,"fontFamily",d),h=$1(this,"fontStyle",d),k=$1(this,"fontVariant",d),l=$1(this,"fontWeight",d),m=$1(this,"fontSize",d),p=this.aa()?this.aa().Ea():null,q=p&&!p.Rd();q&&p.ze();Z1(c.Cg,e);c.Cg.vd("font-family",f);c.Cg.vd("font-style",h);c.Cg.vd("font-variant",k);c.Cg.vd("font-weight",l);c.Cg.vd("font-size",m);c.Cg.zIndex(0+(d==$.Vk?0:1E-6));q&&p.se();return b}};$.g.yl=$.ha;
$.g.yD=function(a){var b=this.Ws();a=$.y(a)?a.length?a[0]:window.NaN:a;if(b&&b.target()&&!(0,window.isNaN)(a)){var c=b.target().la();c.select(a);a=this.vl();c=$.J(a,$.rG)?c.G("category"):c.get(this.Ql[1]);$.zG(b,c)}};$.g.ct=function(){var a=this.Ws();a&&a.enabled()&&$.AG(a)};
$.g.sf=function(a){var b=a.type;switch(b){case "mouseout":b="pointmouseout";break;case "mouseover":b="pointmouseover";break;case "mousemove":b="pointmousemove";break;case "mousedown":b="pointmousedown";break;case "mouseup":b="pointmouseup";break;case "click":b="pointclick";break;case "dblclick":b="pointdblclick";break;default:return null}var c;"pointIndex"in a?c=a.pointIndex:"labelIndex"in a?c=a.labelIndex:"markerIndex"in a&&(c=a.markerIndex);c=$.P(c);a.pointIndex=c;return{type:b,actualTarget:a.target,
series:this,pointIndex:c,target:this,originalEvent:a,point:this.Fd(c)}};
$.g.Uf=function(a){a={type:a.type,target:this,relatedTarget:$.ir(a.relatedTarget)||a.relatedTarget,domTarget:a.target,relatedDomTarget:a.relatedTarget,offsetX:a.offsetX,offsetY:a.offsetY,clientX:a.clientX,clientY:a.clientY,screenX:a.screenX,screenY:a.screenY,button:a.button,keyCode:a.keyCode,charCode:a.charCode,ctrlKey:a.ctrlKey,altKey:a.altKey,shiftKey:a.shiftKey,metaKey:a.metaKey,platformModifierKey:a.platformModifierKey,state:a.state};var b=$.Nm(a.domTarget).index;if(!$.n(b)&&$.yt(this.state,1)){var c=
$.Et(this.state,1);c.length&&(b=c[0])}b=$.P(b);(0,window.isNaN)(b)||(a.pointIndex=b);return a};$.g.Ui=function(){};$.g.Vc=function(a){return $.n(a)?(a=$.rj(a),a!=this.ta&&(this.ta=a),this):this.ta};$.g.De=function(a){return $.n(a)?(this.Hd().De(a),this):this.Hd().De()};
$.g.Ag=function(a,b){if(!this.enabled())return this;var c=this.aa()?this.aa().Ea():null,d=c&&!c.Rd();d&&c.ze();var e=!(b&&b.shiftKey);$.y(a)?(b||this.kd(),this.state.F(2,a,e?1:void 0)):$.C(a)&&this.state.F(2,a,e?1:void 0);d&&c.se();return this};$.g.kd=function(a){if(this.enabled()){var b=this.aa()?this.aa().Ea():null,c=b&&!b.Rd();c&&b.ze();var d;$.n(a)?d=a:d=this.state.j==$.Vk?window.NaN:void 0;this.state.g(2,d);c&&b.se()}};
$.g.vg=function(a){if(!this.enabled())return this;var b=this.aa()?this.aa().Ea():null,c=b&&!b.Rd();c&&b.ze();if($.y(a)){for(var d=$.Et(this.state,1),e=0;e<d.length;e++)$.Sa(a,d[e])||this.state.g(1,d[e]);$.Ct(this.state,a)}else $.C(a)&&(this.Zc(),$.Ct(this.state,a));c&&b.se();return this};
$.g.Zc=function(a){if(($.yt(this.state,1)||$.Gt(this.state.Xg(),1))&&this.enabled()){var b=this.aa()?this.aa().Ea():null,c=b&&!b.Rd();c&&b.ze();var d;$.n(a)?d=a:d=this.state.j==$.Vk?window.NaN:void 0;this.state.g(1,d);c&&b.se()}};
$.g.data=function(a,b){if($.n(a)){if(a){var c=a.title||a.caption;c&&this.title(c);a.rows&&(a=a.rows)}this.Ta!==a&&(this.Ta=a,$.K(this.$),$.J(a,$.pp)?this.Fa=this.$=a.Mk():$.J(a,$.zp)?this.Fa=this.$=a.ve():this.Fa=(this.$=new $.zp($.y(a)||$.B(a)?a:null,b)).ve(),$.T(this.Fa,this.m7,this),this.D(4352,1));return this}return this.Fa};$.g.m7=function(){this.D(4352,1)};$.g.BO=function(a){return $.n(a)?(a=$.y(a)?$.$a(a):null,this.ia!=a&&(this.ia=a,this.D(16388,1)),this):this.ia};
$.g.scale=function(a){if($.n(a)){if(a=$.Pq(this.va,a,null,3,null,this.o7,this)){var b=this.va==a;this.va=a;this.va.ja(b);b||this.D(131072,1)}return this}return this.va};$.g.o7=function(){this.D(131072,1)};$.g.Wd=function(a){if($.n(a)){if(null===a&&this.K)this.K=null,this.D(65536,129);else if(a=$.Pq(this.K,a,null,48,null,this.l7,this)){var b=this.K==a;this.K=a;this.K.ja(b);b||($.wG(this.Ws()),this.D(65536,129))}return this}return this.K};$.g.l7=function(a){$.W(a,6)&&this.D(65536,129)};
$.g.Ua=function(a){return $.n(a)?(this.ga.Y(a),this):this.ga};$.g.Fb=function(a){return $.n(a)?(this.Da.Y(a),this):this.Da};$.g.selected=function(a){return $.n(a)?(this.Ma.Y(a),this):this.Ma};$.g.Ws=function(a){this.b||(this.b=new $.vG,$.T(this.b,this.k7,this),this.D(32772,1));return $.n(a)?(this.b.Y(a),this):this.b};$.g.k7=function(a){var b=0,c=0;$.W(a,1)&&(b|=32772,c|=1);$.W(a,8)&&(b|=4,c|=8);$.W(a,2)&&(b|=32768,c|=8);this.D(b,c)};$.g.pp=function(a){return $.Om(this.Ws(),a)};
$.g.mj=function(a){var b,c=[],d;if("categories"==a&&(d=$.J(this.vl(),$.rG)?this.vl():void 0)){var e=d.tm();a=0;for(b=e.length;a<b;a++){var f=e[a];c.push({text:f.name,iconEnabled:!0,iconType:"square",iconFill:f.color,disabled:!this.enabled(),sourceUid:$.pa(this),sourceKey:a,meta:{ha:this,scale:d,Ld:f}})}}return c};$.g.pn=function(a){return"categories"==a};
$.g.zm=function(a,b){var c=a.G(),d;if("categories"==this.ee().kh()){d=c.ha;var e=c.scale;if(e&&d){for(var f=[],c=c.Ld,h=d.lc();h.advance();){var k=h.get("value"),l=h.G("category");c==e.Nj($.n(l)?l:k)&&f.push(h.sa())}"single"==this.Hd().Vc()?b.vc={ha:d,zc:f}:b.vc=[{ha:d,zc:f,Rj:f[f.length-1],qd:{index:f[f.length-1],Xe:0}}]}}};
$.g.Cl=function(a,b){var c=a.G(),d;if("categories"==this.ee().kh()){d=c.ha;var e=c.scale;if(e&&d){for(var c=c.Ld,f=d.lc(),h=[];f.advance();){var k=f.get("value"),l=f.G("category");c==e.Nj($.n(l)?l:k)&&h.push(f.sa())}if(e=$.Nm(b.domTarget))"single"==this.Hd().Vc()?e.vc={ha:d,zc:h}:e.vc=[{ha:d,zc:h,Rj:h[h.length-1],qd:{index:h[h.length-1],Xe:0}}];this.b&&this.b.enabled()&&this.b.target()&&$.zG(this.b,$.n(c.om)?c.om:(c.start+c.end)/2)}}};
$.g.Bl=function(a,b){var c=a.G();if("categories"==this.ee().kh()){if("single"==this.Hd().Vc()){var d=$.Nm(b.domTarget);d&&(d.ha=c.ha)}this.b&&this.b.enabled()&&this.b.target()&&$.AG(this.b)}};$.g.K7=function(a){return[this.o/this.I*(a*=.1)*Math.cos(a),a*Math.sin(a)]};
$.g.Cc=function(){var a=this.va;if(a){var b,c,d,e,f,h,k,l=this.lc(),m=this.vl();if(this.X(8192)){b=this.N("anglesCount");c=this.N("fromAngle");d=this.N("toAngle");d-=c;this.Gb=[];for(e=0;e<b;e++)this.Gb.push(c+d/(1==b?b:b-1)*e);this.ia||this.D(16388);this.W(8192)}if(this.X(4096)){this.bb=[];this.g&&this.g.forEach(function(a,b){a.Cg.parent(null);a.Oh.parent(null);a.Oh.oh();this.bb[b]=a},this);this.g=[];this.U=[];a.Bf();for(m.Bf();l.advance();)e=String(l.get("x")).toLowerCase(),c=(0,window.parseFloat)(l.get("value")),
d=l.get("category"),h=l.sa(),k=this.bb[h]?this.bb[h]:{},k.rowIndex=h,k.text=e,k.value=c,k.Cv=!1,k.dk=d,this.g.push(k),l.G("item",k),a2(this);a.Ff();m.Ff();this.K||($.cb(this.U,void 0,function(a){return $.A(a)?a.color+" "+a.opacity:a}),U1(m,this.U));$.ib(this.g,function(a,b){return b.value-a.value});this.D(16388);this.W(200704)}if(this.X(196608)){this.U=[];l=this.lc();a.Bf();for(m.Bf();l.advance();)a2(this);m.Ff();this.K||($.cb(this.U,void 0,function(a){return $.A(a)?a.color+" "+a.opacity:a}),U1(m,
this.U));this.X(65536)&&this.D(49680);this.X(131072)&&this.D(49156);this.W(196608)}if(this.X(16384)){f=this.ia?this.ia:this.Gb;var p=Math.max((0,$.Ra)(f,0),0);b=f.length;var a=this.g.length?this.g[0].value:window.NaN,m=this.g.length,q=0;this.g.forEach(function(a,c){var d=$.Uk($.zt(this.state,a.rowIndex));l.select(a.rowIndex);var e=$1(this,"fontFamily",d),h=$1(this,"fontStyle",d),k=$1(this,"fontVariant",d),m=$1(this,"fontWeight",d),d=$.fc($1(this,"fill",d));a.font=e;a.style=h;a.variant=k;a.weight=
m;a.fill=d;a.rotate=f[(c+p+b)%b];q+=a.value},this);this.Ga("sum",q);this.Ga("max",a);this.Ga("min",this.g.length?this.g[m-1].value:window.NaN);this.Ga("average",q/m);this.Ga("pointsCount",m);this.W(16384)}}};$.g.Gx=function(){this.Cc()};
$.g.mi=function(a){var b=this.va;this.X(32768)&&this.b&&($.U(this.b),this.b.scale(this.vl()),this.b.target(this),this.b.ib(this),this.b.ja(!1),this.b.enabled()&&this.D(4));if(this.X(4)){this.b&&this.b.enabled()?(this.b.qa(a.clone().round()),this.ba=this.b.Xc()):this.ba=a.clone();this.o=this.ba.width;this.I=this.ba.height;this.gc="spiral"==this.N("mode")?this.K7:Qga(this);a=this.g.length;var c=this.g[0],d=-1,e=null,f=Sga(this.canvas?this.canvas:this.canvas=window.document.createElement("canvas")),
h=Rga((this.o>>5)*this.I),k=Math.sqrt(this.o*this.o+this.I*this.I);Nga(this,c);for(this.g.forEach(function(a){this.la().select(a.rowIndex);delete a.size;delete a.Lw;var c=$.Uk($.zt(this.state,a.rowIndex)),c=$1(this,"fontSize",c),d=$.rb(b.transform(a.value),0,1),d=~~(this.jb+d*(this.Jb-this.jb));a.size=null!=c?$.Pm(c)?d*(0,window.parseFloat)(c)/100:c:d},this);++d<a;)c=this.g[d],c.x=this.o>>1,c.y=this.I>>1,Oga(this,f,c,this.g,d),c.$T&&Tga(this,h,c,e,k)&&(e?Pga(e,c):e=[{x:c.x+c.Mo,y:c.y+c.fj},{x:c.x+
c.En,y:c.y+c.Vj}],c.x-=this.o>>1,c.y-=this.I>>1);a=e?Math.min(this.o/Math.abs(e[1].x-this.o/2),this.o/Math.abs(e[0].x-this.o/2),this.I/Math.abs(e[1].y-this.I/2),this.I/Math.abs(e[0].y-this.I/2))/2:1;this.vb||(this.vb=this.aa().ue());this.Na||(this.Na=this.vb.ue(),$.gr(this,this.Na));this.Sa||(this.Sa=this.vb.ue());this.vb.Xb(a,0,0,a,this.ba.left+(this.o>>1),this.ba.top+(this.I>>1));var l=this.vb.Wc;this.g.forEach(function(a){var b=[a.x,a.y];l.transform(b,0,b,0,1);if(b[0]+a.Mo<this.ba.left||b[0]+a.En>
this.ba.Qa()||b[1]+a.fj<this.ba.top||b[1]+a.Vj>this.ba.La())a.Cv&&(a.Cg.parent(null),a.Oh.parent(null)),a.Cv=!1;else{a.Cv||(a.Cg=a.Cg?a.Cg.parent(this.Sa):V1(this.Sa),a.Cg.vd("text-anchor","middle"),a.Cg.cd(!0),a.Cg.text(a.text.toLowerCase()),a.Cg.cursor("default"),a.Oh=a.Oh?a.Oh.parent(this.Na):V1(this.Na),a.Oh&&(a.Oh.tag={ha:this,index:a.rowIndex}),a.Oh.vd("fill","#fff"),a.Oh.vd("opacity",1E-6),a.Oh.vd("text-anchor","middle"),a.Oh.text(a.text.toLowerCase()),a.Oh.cursor("default"),a.Cv=!0);var c=
$.Uk($.zt(this.state,a.rowIndex));this.la().select(a.rowIndex);var b=$.fc($1(this,"fill",c)),d=$1(this,"fontFamily",c),e=$1(this,"fontStyle",c),f=$1(this,"fontVariant",c),h=$1(this,"fontWeight",c),c=$1(this,"fontSize",c);Z1(a.Cg,b);a.Cg.vd("font-family",d);a.Cg.vd("font-style",e);a.Cg.vd("font-variant",f);a.Cg.vd("font-weight",h);a.Cg.vd("font-size",c);a.Cg.vd("transform","translate("+[a.x,a.y]+")rotate("+a.rotate+")");a.Cg.zIndex(0);a.Oh.vd("font-family",d);a.Oh.vd("font-style",e);a.Oh.vd("font-variant",
f);a.Oh.vd("font-weight",h);a.Oh.vd("font-size",c);a.Oh.vd("transform","translate("+[a.x,a.y]+")rotate("+a.rotate+")");a.Oh.zIndex(0)}},this);this.W(16);this.W(4)}this.X(32768)&&(this.b&&($.U(this.b),this.b.aa(this.Va),this.b.da(),this.b.ja(!1)),this.W(32768));if(this.X(16)){var m=this.lc();this.g.forEach(function(a){var b=$.Uk($.zt(this.state,a.rowIndex));m.select(a.rowIndex);a.Cv&&Z1(a.Cg,$.fc($1(this,"fill",b)))},this);this.W(16)}};$.g.Nv=function(){return["x"]};$.g.Ov=function(a){return a.get("x")};
$.g.Mv=function(a){a=a.get("name");return $.B(a)?a:null};$.g.JK=function(){return this.data().Je("category")?["value","category"]:["value"]};$.g.Ej=function(){return!this.la().Hb()};
$.g.fa=function(a,b){W1.J.fa.call(this,a,b);b?$.Ho(this.Ka,this.xC,a):$.Io(this,this.xC,a);var c,d=a.scale;$.B(d)?(c=$.Jq(d,null))||(c=null):$.A(d)?(c=$.Jq(d.type,!0),c.Y(d)):c=null;c&&this.scale(c);d=a.colorScale;$.B(d)?(c=$.Jq(d,null))||(c=null):$.A(d)?(c=$.Jq(d.type,!0),c.Y(d)):c=null;c&&this.Wd(c);this.data(a.data);this.BO(a.angles);this.wy(a.palette);this.Ws().ra(!!b,a.colorRange);this.ga.ra(!!b,a);this.ga.ra(!!b,a.normal);this.Da.ra(!!b,a.hovered);this.Ma.ra(!!b,a.selected)};
$.g.O=function(){var a=W1.J.O.call(this);$.Ro(this,this.xC,a);a.type=this.Xa();a.data=this.data().O();$.n(this.ia)&&(a.angles=this.ia);a.scale=this.scale().O();this.Wd()&&(a.colorScale=this.Wd().O());a.colorRange=this.Ws().O();a.palette=this.wy().O();a.normal=this.ga.O();a.hovered=this.Da.O();a.selected=this.Ma.O();return{chart:a}};$.g.ca=function(){(0,$.Na)(this.g,function(a){$.Sc(a.Cg,a.Oh,a.Lw)});$.Sc(this.vb,this.Sa,this.Na,this.ga,this.Da,this.Ma,this.b,this.K,this.va,this.state);W1.J.ca.call(this)};
var d2=W1.prototype;d2.getType=d2.Xa;d2.data=d2.data;d2.angles=d2.BO;d2.scale=d2.scale;d2.colorScale=d2.Wd;d2.colorRange=d2.Ws;d2.palette=d2.wy;d2.normal=d2.Ua;d2.hovered=d2.Fb;d2.selected=d2.selected;d2.hover=d2.vg;d2.unhover=d2.Zc;d2.select=d2.Ag;d2.unselect=d2.kd;d2.getPoint=d2.Fd;$.Vn["tag-cloud"]=b2;$.F("anychart.tagCloud",b2);}).call(this,$)}