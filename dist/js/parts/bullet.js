if(!_.bullet){_.bullet=1;(function($){var M1=function(){$.X.call(this);this.g=null;this.B=window.NaN;this.K=this.j="black"},N1=function(a,b){var c=!a.R&&a.$!=b;a.$=b;c&&a.D(4)},Jga=function(a,b){if("horizontal"==a)switch(b){default:case "bar":return function(a,b){var c=this.scale().transform(0),c=(0,window.isNaN)(c)?0:$.rb(c,0,1),d=this.qa(),h=this.pj(),k=$.Pm(h)?$.M(h,d.height):d.height*h,h=d.left+c*d.width,l=d.top+k/2,c=(b-c)*d.width,d=d.height-k;a.clear().moveTo(h,l).lineTo(h+c,l).lineTo(h+c,l+d).lineTo(h,l+d).close()};case "line":return function(a,
b){var c=this.qa(),d=this.pj(),h=Math.round(c.left+c.width*b),k=Math.round(c.top+c.height/2),c=c.height-($.Pm(d)?$.M(d,c.height):c.height*d);a.clear().moveTo(h-1,k-c/2).lineTo(h-1,k+c/2).lineTo(h+1,k+c/2).lineTo(h+1,k-c/2).close()};case "ellipse":return function(a,b){var c=this.qa(),d=this.pj(),h=c.left+c.width*b,k=c.top+c.height/2,c=(c.height-($.Pm(d)?$.M(d,c.height):c.height*d))/2,d=c/4;a.clear();a.bd(h,k,d,c,0,360).close()};case "x":return function(a,b){var c=this.qa(),d=this.pj(),h=Math.round(c.left+
c.width*b),k=Math.round(c.top+c.height/2),c=(c.height-($.Pm(d)?$.M(d,c.height):c.height*d))/2,d=c/1.5;a.clear().moveTo(h-d-1,k-c).lineTo(h+d-1,k+c).lineTo(h+d+1,k+c).lineTo(h-d+1,k-c).moveTo(h+d-1,k-c).lineTo(h-d-1,k+c).lineTo(h-d+1,k+c).lineTo(h+d+1,k-c).close()}}else switch(b){default:case "bar":return function(a,b){var c=this.scale().transform(0),c=(0,window.isNaN)(c)?0:$.rb(c,0,1),d=this.qa(),h=this.pj(),k=$.Pm(h)?$.M(h,d.width):d.width*h,h=d.left+k/2,l=d.La()-d.height*b,k=d.width-k,c=(b-c)*d.height;
a.clear().moveTo(h-.25,l-.5).lineTo(h+k+.25,l-.5).lineTo(h+k+.25,l+c-.5).lineTo(h-.25,l+c-.5).close()};case "line":return function(a,b){var c=this.qa(),d=this.pj(),h=Math.round(c.left+c.width/2),k=Math.round(c.La()-c.height*b),c=c.width-($.Pm(d)?$.M(d,c.width):c.width*d);a.clear().moveTo(h-c/2,k-1).lineTo(h+c/2,k-1).lineTo(h+c/2,k+1).lineTo(h-c/2,k+1).close()};case "ellipse":return function(a,b){var c=this.qa(),d=this.pj(),h=Math.round(c.left+c.width/2),k=Math.round(c.La()-c.height*b),c=(c.width-
($.Pm(d)?$.M(d,c.width):c.width*d))/2,d=c/4;a.clear();a.bd(h,k,c,d,0,360).close()};case "x":return function(a,b){var c=this.qa(),d=this.pj(),h=Math.round(c.left+c.width/2),k=Math.round(c.La()-c.height*b),c=(c.width-($.Pm(d)?$.M(d,c.width):c.width*d))/2,d=c/1.5;a.clear().moveTo(h-c-1,k-d).lineTo(h+c-1,k+d).lineTo(h+c+1,k+d).lineTo(h-c+1,k-d).moveTo(h+c-1,k-d).lineTo(h-c-1,k+d).lineTo(h-c+1,k+d).lineTo(h+c+1,k-d).close()}}},O1=function(a,b){$.Ht.call(this);this.b=[];this.g=[];this.Rr=!0;this.data(a||
null,b);$.so(this.F,"layout",114820,9)},P1=function(a,b){return $.n(b)?(a.Wa=b,a):a.Wa||{}},Q1=function(a,b){return $.n(b)?(a.Nd=b,a):a.Nd||{}},Lga=function(a){(0,$.Na)(a.g,function(a){$.K(a)});a.g.length=0;var b=a.Fa.la().reset();for(b.Hb();b.advance();)Kga(a,b)},Kga=function(a,b){var c=b.sa(),d=new M1;$.U(d);a.g[c]=d;$.L(a,d);d.scale(a.scale());d.aa(a.Va);var e=Q1(a);d.zIndex(e.zIndex);var f=e.fill,h=!d.I&&d.j!=f;d.j=f;h&&d.D(16);e=e.stroke;f=!d.o&&d.K!=e;d.K=e;f&&d.D(16);N1(d,a.ux().Sc(c));d.value(b.get("value"));
d.type(b.get("type"));d.pj(b.get("gap"));d.fill(b.get("fill"));d.stroke(b.get("stroke"));d.ja(!1);$.T(d,a.I0,a)},R1=function(a,b){var c=new O1(a,b);c.ra(!0,$.bl("bullet"));return c};$.G(M1,$.X);var Mga={x:"30%",line:"30%",ellipse:"30%",bar:"50%"};$.g=M1.prototype;$.g.Aa=$.X.prototype.Aa;$.g.xa=$.X.prototype.xa|20;$.g.type=function(a){return $.n(a)?(a=$.qj($.Bj,a,"bar"),this.R!=a&&(this.R=a,this.D(4,9)),this):this.R||this.$};
$.g.pj=function(a){return $.n(a)?(this.g!=a&&(this.g=a,this.D(4,9)),this):null===this.g?Mga[this.type()]:this.g};$.g.value=function(a){return $.n(a)?(a=$.P(a),this.B!=a&&(this.B=a,this.D(4,9)),this):this.B};$.g.Kd=function(a){return $.n(a)?(a=$.wj(a),this.P!=a&&(this.P=a,this.D(4,9)),this):this.P||this.U};$.g.Bb=function(){return"horizontal"==this.Kd()};$.g.scale=function(a){if($.n(a)){if(a=$.Pq(this.va,a,null,3,null,this.nca,this)){var b=this.va==a;this.va=a;a.ja(b);b||this.D(4,9)}return this}return this.va};
$.g.nca=function(a){var b=0;$.W(a,4)&&(b|=4);$.W(a,2)&&(b|=1);this.D(4,b|8)};$.g.fill=function(a,b,c,d,e,f,h){if($.n(a)){var k=$.fc.apply(null,arguments);k!=this.I&&(this.I=k,this.D(16,1));return this}return this.I||this.j};$.g.stroke=function(a,b,c,d,e){if($.n(a)){var f=$.gc.apply(null,arguments);this.o!=f&&(this.o=f,this.D(16,1));return this}return this.o||this.K};
$.g.da=function(){if(!this.scale())return $.ak(2),this;if(!this.hc())return this;var a=this.aa()?this.aa().Ea():null,b=a&&!a.Rd();b&&a.ze();this.b||(this.b=$.kj(),$.L(this,this.b));if(this.X(8)){var c=this.zIndex();this.b.zIndex(c);this.W(8)}this.X(2)&&(c=this.aa(),this.b.parent(c),this.W(2));this.X(16)&&(this.b.stroke(this.stroke()),this.b.fill(this.fill()),this.W(16));this.X(4)&&(c=this.value(),c=this.scale().transform(c,0),this.b.clear(),(0,window.isNaN)(c)||(c=$.rb(c,0,1),Jga(this.Kd(),this.type()).call(this,
this.b,c)),this.W(4));b&&a.se();return this};$.g.remove=function(){this.b&&this.b.parent(null)};$.G(O1,$.Ht);O1.prototype.xa=$.Ht.prototype.xa|126976;O1.prototype.Xa=function(){return"bullet"};O1.prototype.data=function(a,b){return $.n(a)?(this.Ta!==a&&(this.Ta=a,$.J(a,$.pp)?this.Fa=a.Mk():$.J(a,$.zp)?this.Fa=a.ve():(a=$.y(a)||$.B(a)?a:null,this.Fa=(new $.zp(a,b)).ve()),$.T(this.Fa,this.o,this),this.D(127232,1)),this):this.Fa};O1.prototype.o=function(a){$.W(a,16)&&this.D(127232,1)};var S1={};$.R(S1,0,"layout",$.wj);$.Fo(O1,S1);$.g=O1.prototype;$.g.Bb=function(){return"horizontal"==this.N("layout")};
$.g.scale=function(a){this.va||(this.va=$.Lq(),this.va.lv(0),this.va.kv(0),this.va.Ia().count(3,5));if($.n(a)){if(a=$.Pq(this.va,a,"linear",3))this.va=a,a.ja(!1),this.D(122880,1);return this}return this.va};$.g.Ru=function(a){this.U||(this.U=new $.Eu,this.U.ib(this),$.L(this,this.U),$.T(this.U,this.J0,this),this.D(114692,9));return $.n(a)?(this.U.Y(a),this):this.U};$.g.J0=function(a){var b=0,c=0;$.W(a,1)&&(b|=16384,c|=1);$.W(a,8)&&(b|=4);this.D(b,c)};
$.g.Ld=function(a,b){var c,d;c=$.P(a);(0,window.isNaN)(c)?(c=0,d=a):(c=a,d=b);var e=this.b[c];e||(e=new $.Yv,e.Y(P1(this)),this.b[c]=e,$.L(this,e),$.T(e,this.ica,this),this.D(32768,1));return $.n(d)?(e.Y(d),this):e};$.g.ica=function(){this.D(32768,1)};$.g.IF=function(a){this.j||(this.j=new $.uq,this.j.items(["#828282","#a8a8a8","#c2c2c2","#d4d4d4","#e1e1e1"]),$.T(this.j,this.hca,this),$.L(this,this.j));return $.n(a)?(this.j.Y(a),this):this.j};$.g.hca=function(a){$.W(a,2)&&this.D(32768,1)};
$.g.ux=function(a){this.ba||(this.ba=new $.wq,this.ba.items(["bar","line","x","ellipse"]),$.T(this.ba,this.gca,this),$.L(this,this.ba));return $.n(a)?(this.ba.Y(a),this):this.ba};$.g.gca=function(a){$.W(a,2)&&this.D(65536,1)};$.g.Cc=function(){var a,b,c,d=this.scale();d.ff()&&d.Bf();a=0;for(b=this.g.length;a<b;a++)if(c=this.g[a])c.scale(d),"bar"==c.type()&&d.Uc(0),d.Uc(c.value());a=0;for(b=this.b.length;a<b;a++){if(c=this.b[a])c.scale(d),d.Uc(c.from()),d.Uc(c.ud());d.ff()&&d.Ff()}this.Ru().scale(this.scale())};
$.g.Hx=function(){var a=this.Bb(),b=this.title(),c=this.Ru();a?($.Fu(c,"bottom"),$.os(b,"left")):($.Fu(c,"left"),$.os(b,"bottom"));return O1.J.Hx.call(this)};
$.g.mi=function(a){if(this.hc()){var b;this.X(4096)&&(Lga(this),this.W(4096));this.X(8192)&&(this.Cc(),this.W(8192));b=this.Ru();this.X(16388)&&($.U(b),!b.aa()&&b.enabled()&&b.aa(this.Va),b.qa(a),b.padding(0),b.ja(!1),b.da(),this.W(16384));var c=b.enabled()?b.Xc():a;if(this.X(32772)){a=0;for(b=this.b.length;a<b;a++){var d=this.b[a];d&&($.U(d),$.Zv(d,this.Bb()?"vertical":"horizontal"),$.Xv(d,this.IF().Sc(a)),d.qa(c),d.aa(this.Va),d.ck(0),d.da(),d.ja(!1))}this.W(32768)}if(this.X(65540)){a=0;for(b=this.g.length;a<
b;a++){d=this.g[a];$.U(d);d.qa(c);N1(d,this.ux().Sc(a));var e=d,f=this.N("layout"),h=!e.P&&e.U!=f;e.U=f;h&&e.D(4);d.da();d.ja(!1)}this.W(65536)}}};$.g.I0=function(){this.D(65536,1)};
$.g.sf=function(a){var b;"pointIndex"in a?b=a.pointIndex:"labelIndex"in a?b=a.labelIndex:"markerIndex"in a&&(b=a.markerIndex);b=$.P(b);a.pointIndex=b;var c=a.type;switch(c){case "mouseout":c="pointmouseout";break;case "mouseover":c="pointmouseover";break;case "mousemove":c="pointmousemove";break;case "mousedown":c="pointmousedown";break;case "mouseup":c="pointmouseup";break;case "click":c="pointclick";break;case "dblclick":c="pointdblclick";break;default:return null}var d=this.data().la();d.select(b)||
d.reset();return{type:c,actualTarget:a.target,pie:this,iterator:d,sliceIndex:b,pointIndex:b,target:this,originalEvent:a}};$.g.Ag=function(){return this};$.g.vg=function(){return this};$.g.Ce=function(){return[this]};$.g.Vc=function(a){return $.n(a)?(a=$.rj(a),a!=this.ta&&(this.ta=a),this):this.ta};$.g.Ej=function(){for(var a=this.Fa?this.Fa.la().Hb():0,b=0,c=this.g.length,d=0;d<c;d++){var e=this.g[d];if(e&&!e.enabled())b++;else break}return!a||!c||b==c};
$.g.O=function(){var a=O1.J.O.call(this);a.type="bullet";$.Ro(this,S1,a);a.data=this.data().O();a.rangePalette=this.IF().O();a.markerPalette=this.ux().O();a.scale=this.scale().O();a.axis=this.Ru().O();for(var b=[],c=0;c<this.b.length;c++)b.push(this.b[c].O());a.ranges=b;return{chart:a}};
$.g.fa=function(a,b){O1.J.fa.call(this,a,b);"defaultRangeMarkerSettings"in a&&P1(this,a.defaultRangeMarkerSettings);"defaultMarkerSettings"in a&&Q1(this,a.defaultMarkerSettings);this.data(a.data);$.Io(this,S1,a);this.IF(a.rangePalette);this.ux(a.markerPalette);var c=a.scale,d;$.B(c)?d=$.Jq(c,null):$.A(c)?(d=$.Jq(c.type,!1),d.Y(c)):d=null;d&&this.scale(d);this.Ru(a.axis);c=a.ranges;if($.y(c))for(d=0;d<c.length;d++)this.Ld(d,c[d])};var T1=O1.prototype;T1.data=T1.data;T1.rangePalette=T1.IF;
T1.markerPalette=T1.ux;T1.scale=T1.scale;T1.axis=T1.Ru;T1.range=T1.Ld;T1.isHorizontal=T1.Bb;T1.getType=T1.Xa;T1.noData=T1.Nq;$.Vn.bullet=R1;$.F("anychart.bullet",R1);}).call(this,$)}