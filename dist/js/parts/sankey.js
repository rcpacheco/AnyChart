if(!_.sankey){_.sankey=1;(function($){var cfa=function(a,b){return a|(this.vG[b]||0)},xO=function(a,b,c){$.Gp(a,"sankey")&&(b=(0,$.bg)(b,cfa,0,a.Rt.sankey)&~a.Do.sankey,a.Do.sankey|=b,(b||a.nq())&&a.sa(c||0))},yO=function(a,b){$.Dp.call(this);this.ya=a;this.Id=b;this.mb=null;var c={};$.T(c,[["fill",0,8192],["stroke",0,8192],["labels",0,0]]);this.ia=new $.Gv(this,c,$.Jk);this.ia.ca.labelsFactoryConstructor=$.Iv;this.ia.ca.labelsAfterInitCallback=$.Lv;this.Ba=new $.Gv(this,c,1);this.Ba.ca.labelsFactoryConstructor=$.Iv;$.Ep(this.Ba,"labelsAfterInitCallback",
function(a){a.I(4294967295)})},zO=function(a,b){$.fv.call(this);$.js(this,this,this.Fg,this.$g,null,this.Fg,null,null);$.T(this.za,dfa);this.data(a||null,b);this.PN=(0,$.qa)(this.PN,this);this.NN=(0,$.qa)(this.NN,this)},AO=function(a,b){for(var c=b.IB,d=0;d<c.length;d++){var e=c[d];b.level>=e.level&&(e.level=b.level+1,AO(a,e));e.level>a.G&&(a.G=e.level)}},CO=function(a,b){return b?(a.qg[b]||(a.qg[b]={type:BO,name:b,level:0,HJ:0,EK:0,fE:0,$E:[],IB:[],fY:[],tZ:[],GW:[],Bja:[],Hja:[],Dw:[],Rw:[],mO:!1}),
a.qg[b]):null},EO=function(a,b){var c=b.type,d;if(c==BO){var e=b.name;a.isConflict={value:b.mO,type:"string"};var f=[];for(d=0;d<b.$E.length;d++){var h=b.$E[d];var k=$.va(h.IB,function(a){return a==b});f.push({name:h.name,value:h.tZ[k]})}a.income={value:f,type:""};f=[];for(d=0;d<b.IB.length;d++)h=b.IB[d],k=$.va(h.$E,function(a){return a==b}),f.push({name:h.name,value:h.fY[k]});a.outcome={value:f,type:""};a.dropoff={value:b.fE,type:"number"}}else e=c==DO?b.from.name+" -> "+b.Yf.name:b.from.name+" dropoff";
a.type={value:efa[c],type:"string"};a.name={value:e,type:"string"};a.value={value:b.weight,type:"number"}},FO=function(a,b,c){c=c?a.node().fb().labels():a.node().Ma().labels();a=a.node().Ma().labels();c=c.i("position");a=a.i("position");a=$.ij(c||a,"center");var d=c=0,e=(b.Cj+b.Dj)/2,f=(b.be+b.We)/2;switch(a){case "left-top":c=b.Cj;d=b.be;break;case "left-center":c=b.Cj;d=f;break;case "left-bottom":c=b.Cj;d=b.We;break;case "center-top":c=e;d=b.be;break;case "center":c=e;d=f;break;case "center-bottom":c=
e;d=b.We;break;case "right-top":c=b.Dj;d=b.be;break;case "right-center":c=b.Dj;d=f;break;case "right-bottom":c=b.Dj,d=b.We}return{value:{x:c,y:d}}},HO=function(a,b,c,d,e,f){for(var h,k,l=0;l<b.length;l++)h=b[l],k=h.path,GO(a,a.f,k.tag,k,d),h.label.gk(c),h.label.rc({value:e(h,f)}),a.Cd(a.f,h,d)},GO=function(a,b,c,d,e){c=a.Ee(c);a=b.Sn(e,c);b=b.Vo(e,c);d.fill(a);d.stroke(b)},IO=function(a,b,c,d,e,f){var h=b.tag;GO(a,a.g,h,b,c);b=h.element;HO(a,b.Dw,d,c,f,"leftTop");HO(a,b.Rw,e,c,f,"rightTop");b.label.rc(FO(a,
b,c));a.Cd(a.g,b,c)},JO=function(a,b,c){b=b.tag;var d=b.element;GO(a,a.f,b,d.path,c);d.label.gk("center-bottom");d.label.rc({value:a.wT(d)});GO(a,a.g,d.from.path.tag,d.from.path,c);GO(a,a.g,d.Yf.path.tag,d.Yf.path,c);a.Cd(a.f,d,c)},KO=function(a,b,c){var d=b.tag;GO(a,a.o,d,b,c);a.Cd(a.o,d.element,c)},LO=function(a){return(a.be+a.We)/2},ffa=function(a,b){for(var c=0;c<a.b.length;c++)for(var d=a.b[c].qg,e=0;e<d.length;e++){var f=d[e];if(f.Dw.length){var h=(0,$.bg)(f.Dw,function(a,b){return a+LO(b.from)*
b.weight},0,a),k=(0,$.bg)(f.Dw,function(a,b){return a+b.weight},0,a);h=(h/k-LO(f))*b;f.be+=h;f.We+=h}}},gfa=function(a,b){for(var c=a.b.slice(),d=0;d<c.length;d++)for(var e=a.b[d].qg,f=0;f<e.length;f++){var h=e[f];if(h.Rw.length){var k=(0,$.bg)(h.Rw,function(a,b){return a+LO(b.Yf)*b.weight},0,a),l=(0,$.bg)(h.Rw,function(a,b){return a+b.weight},0,a);k=(k/l-LO(h))*b;h.be+=k;h.We+=k}}},MO=function(a,b){for(var c=0;c<a.b.length;c++){var d=a.b[c].qg.slice(),e=b.top,f=e+b.height,h=d.length,k,l=a.i("nodePadding");
d.sort(a.ON);for(k=0;k<h;++k){var m=d[k];e-=m.be;0<e&&(m.be+=e,m.We+=e);e=m.We+l}e=e-l-f;if(0<e)for(m.be=m.be-e,m.We=m.We-e,e=m.be,k=h-2;0<=k;--k)m=d[k],e=m.We+l-e,0<e&&(m.be-=e,m.We-=e),e=m.be}},hfa=function(a,b){return function(c){return a*(1-c)+b*c}},NO=function(a,b,c){var d;for(d=0;d<b.length;d++){var e=b[d];GO(a,c,e.tag,e,$.Jk)}},OO=function(a,b){var c=new zO(a,b);c.fa(!0,$.Qk("sankey"));return c};$.H(yO,$.Dp);$.$o(yO,["fill","stroke","labels"],"normal");$.g=yO.prototype;
$.g.ua=$.Dp.prototype.ua|28672;$.g.La=function(){return this.Id};$.g.Za=function(a){this.mb||(this.mb=new $.iu(0),this.mb.Md(),this.mb.parent(this.ya.Za()),this.mb.ya(this.ya));return $.n(a)?(this.mb.N(a),this):this.mb};$.g.mp=function(){this.sa(16384)};$.g.Td=function(){this.sa(4096)};$.g.yF=function(){this.ia.labels().I(4294967295);this.Ba.labels().I(4294967295)};$.g.Ma=function(a){return $.n(a)?(this.ia.N(a),this):this.ia};$.g.fb=function(a){return $.n(a)?(this.Ba.N(a),this):this.Ba};
$.g.Sn=function(a,b){return this.dx("fill",a,b)};$.g.Vo=function(a,b){return this.dx("stroke",a,b)};$.g.dx=function(a,b,c){a=(b?this.Ba:this.ia).i(a)||this.ia.i(a);$.E(a)&&(a=a.call(c,c));return a};$.g.F=function(){var a=yO.B.F.call(this);a.tooltip=this.Za().F();a.normal=this.ia.F();a.hovered=this.Ba.F();return a};$.g.Y=function(a,b){yO.B.Y.call(this,a,b);"tooltip"in a&&this.Za().fa(!!b,a.tooltip);this.ia.fa(!!b,a);this.ia.fa(!!b,a.normal);this.Ba.fa(!!b,a.hovered)};
$.g.R=function(){$.$c(this.mb,this.ia,this.Ba);yO.B.R.call(this)};var PO=yO.prototype;PO.tooltip=PO.Za;PO.normal=PO.Ma;PO.hovered=PO.fb;$.H(zO,$.fv);$.Vw(zO,"sankey",["appearance","data","flowlabels","nodelabels"]);zO.prototype.ua=$.fv.prototype.ua;var QO={};$.Mo(QO,[[0,"nodeWidth",$.vp],[0,"nodePadding",$.Uo],[0,"curveFactor",$.yp]]);$.Zo(zO,QO);var dfa=[["nodeWidth",4,1],["nodePadding",4,1],["curveFactor",4,1]];$.g=zO.prototype;
$.g.data=function(a,b){if($.n(a)){if(a){var c=a.title||a.caption;c&&this.title(c);a.rows&&(a=a.rows)}this.Hg!==a&&(this.Hg=a,$.Zc(this.xa),this.lf=null,$.K(a,$.Wp)?this.xa=a.Ll():this.xa=$.K(a,$.fq)?a.we():(new $.fq($.A(a)||$.z(a)?a:null,b)).we(),$.U(this.xa,this.Ke,this),this.u(256),$.Hp(this,"sankey","data",1));return this}return this.xa};$.g.Ke=function(){this.u(256);$.Hp(this,"sankey","data",1)};$.g.Bf=function(){return this.xa.aa()};$.g.tc=function(){return this.lf=this.xa.aa()};
$.g.aa=function(){return this.lf||(this.lf=this.xa.aa())};$.g.La=function(){return"sankey"};
$.g.kb=function(){if($.Jp(this,"sankey","data")){this.qg={};this.D={};this.G=-1;for(var a=this.aa().reset();a.advance();){var b=String(a.get("from"));var c=a.get("to");c=null===c||$.D(c)?null:String(c);var d=$.O(a.get("weight"));var e=!b.length;var f=null!==c&&!c.length;$.ea(d)&&0<d&&!e&&!f&&(b=CO(this,b),e=CO(this,c),c=b,b=e,e=this.aa().ja(),this.D[e]={type:b?DO:RO,di:e,from:c,Yf:b,weight:d},c.EK+=d,b?(c.Rw.push(this.D[e]),c.tZ.push(d),c.IB.push(b),b.HJ+=d,b.fY.push(d),b.$E.push(c),b.Dw.push(this.D[e]),
c.level>=b.level&&(b.level=c.level+1,AO(this,b)),b.level>this.G&&(this.G=b.level)):(c.fE+=d,c.GW.push(d)))}this.b=[];this.ra=!0;for(var h in this.qg)d=this.qg[h],d.weight=Math.max(d.HJ,d.EK),a=d.IB.length+d.GW.length,this.ra&&!a&&(d.level=this.G),d.$E.length&&a&&(d.mO=d.HJ!=d.EK),a=d.level,this.b[a]||(this.b[a]={qg:[],weight:0,top:window.NaN}),a=this.b[a],a.qg.push(d),a.weight+=d.weight;for(d=h=0;d<this.b.length;d++)for(a=this.b[d],c=0;c<a.qg.length;c++)a.qg[c].id=h++;this.u(4);$.Ip(this,"sankey",
"data")}};$.g.uk=function(){return!this.aa().Mb()};$.g.Se=function(){return[]};$.g.mp=function(){this.Za().W()};$.g.KD=function(a,b){if(!this.K||b)this.K=new $.ru;var c={};EO(c,a);if(a.type!=BO){var d=this.aa();d.select(a.di);this.K.jg(d)}else this.K.jg(null);return $.ct(this.K,c)};$.g.Daa=function(a,b){return{x:a[b].x,y:a[b].y}};$.g.wT=function(a){return{x:(a.left+a.right)/2,y:a.topCenter}};
$.g.Fg=function(a){var b=a.domTarget,c=b.tag;if(c){var d=c.element.type;d==BO?(d=this.g.Za(),IO(this,b,1,"left-bottom","right-bottom",this.Daa)):d==DO?(d=this.f.Za(),JO(this,b,1)):(d=this.o.Za(),KO(this,b,1));b=d;d=a.clientX;a=a.clientY;this.cn||(this.cn=new $.ru);var e={};c=c.element;EO(e,c);if(c.type!=BO){var f=this.aa();f.select(c.di);this.cn.jg(f)}else this.cn.jg(null);c=$.ct(this.cn,e);$.Au(b,d,a,c)}else this.Za().md()};
$.g.$g=function(a){a=a.domTarget;var b=a.tag;this.Za().md();b&&(b=b.element.type,b==BO?IO(this,a,$.Jk,"center-bottom","center-bottom",this.wT):b==DO?JO(this,a,$.Jk):KO(this,a,$.Jk))};$.g.dP=function(a){var b=[];$.W(a,8192)&&b.push("appearance");$.W(a,4096)&&(a=a.target.La()==BO,b.push(a?"nodelabels":"flowlabels"));xO(this,b,1)};$.g.bP=function(a){this.o||(this.o=new yO(this,RO),$.U(this.o,this.dP,this));return $.n(a)?(this.o.N(a),this):this.o};
$.g.nP=function(a){this.f||(this.f=new yO(this,DO),$.U(this.f,this.dP,this));return $.n(a)?(this.f.N(a),this):this.f};$.g.node=function(a){this.g||(this.g=new yO(this,BO),$.U(this.g,this.dP,this));return $.n(a)?(this.g.N(a),this):this.g};$.g.Yb=function(a){if($.K(a,$.ar))return this.Tc($.ar,a),this;if($.K(a,$.Yq))return this.Tc($.Yq,a),this;$.D(a)&&"range"==a.type?this.Tc($.ar):($.D(a)||null==this.Fa)&&this.Tc($.Yq);return $.n(a)?(this.Fa.N(a),this):this.Fa};
$.g.Tc=function(a,b){if($.K(this.Fa,a))b&&this.Fa.N(b);else{var c=!!this.Fa;$.Zc(this.Fa);this.Fa=new a;$.Pp(this,"palette",this.Fa);this.Fa.xr();b&&this.Fa.N(b);$.U(this.Fa,this.If,this);c&&$.Hp(this,"sankey","appearance",1)}};$.g.If=function(a){$.W(a,2)&&$.Hp(this,"sankey","appearance",1)};
$.g.Ee=function(a){var b=a.element;a=a.element.type;var c=this.Yb();return a==BO?{id:b.id,name:b.name,sourceColor:c.fc(b.id),conflict:b.mO}:a==DO?{from:b.from.name,to:b.Yf.name,sourceColor:c.fc(b.from.id)}:{from:b.from.name,sourceColor:c.fc(b.from.id)}};var BO=0,DO=1,RO=2,efa={0:"node",1:"flow",2:"dropoff"};$.g=zO.prototype;$.g.NN=function(a,b){return this.ON(a.from,b.from)};$.g.PN=function(a,b){return this.ON(a.Yf,b.Yf)};$.g.ON=function(a,b){return a.be-b.be};
$.g.Mj=function(a){if(!this.Vf()){this.kb();this.va||(this.va=this.Va.ve(),this.va.zIndex(30));if(this.J(4)){this.va.yj();this.g.labels().u(2);this.f.labels().u(2);this.o.labels().u(2);this.P=[];this.ea=[];this.$=[];this.ta=[];var b=this.i("nodePadding"),c=this.i("nodeWidth");if(this.b.length){var d=this.b.length;var e=a.width/d;c=$.M(c,e);e=.3*c}else c=e=d=0;var f,h=[];for(f=0;f<this.b.length;f++){var k=this.b[f];var l=k.qg;var m=l[l.length-1].fE?e:0;l=(a.height-m-b*(l.length-1))/k.weight;h.push(l)}this.la=
Math.min.apply(null,h);b=(a.width-c)/(d-1);for(f=0;f<this.b.length;f++)for(k=this.b[f],l=k.qg,k=0;k<l.length;k++)d=l[k],d.Cj=a.left+d.level*b,d.Dj=d.Cj+c,d.be=a.top+k,d.We=d.be+d.weight*this.la;for(var p in this.D)l=this.D[p],l.height=l.weight*this.la;MO(this,a);l=1;for(f=32;0<f;--f)l*=.99,gfa(this,l),MO(this,a),ffa(this,l),MO(this,a);for(v in this.qg)d=this.qg[v],d.Rw.sort(this.PN),d.Dw.sort(this.NN);for(v in this.qg){d=this.qg[v];var q=b=d.be;for(f=0;f<d.Rw.length;f++)l=d.Rw[f],l.be=q+l.height/
2,q+=l.height;for(f=0;f<d.Dw.length;f++)l=d.Dw[f],l.We=b+l.height/2,b+=l.height}for(v in this.qg)d=this.qg[v],k=this.va.path(),k.zIndex(3),this.ea.push(k),k.tag={element:d},d.path=k,d.Cj=$.xn($.Bl(d.Cj,4),1),d.be=$.xn($.Bl(d.be,4),1),d.Dj=$.xn($.Bl(d.Dj,4),1),d.We=$.xn($.Bl(d.We,4),1),k.moveTo(d.Cj,d.be).lineTo(d.Dj,d.be).lineTo(d.Dj,d.We).lineTo(d.Cj,d.We).lineTo(d.Cj,d.be).close();d=this.i("curveFactor");for(p in this.D)if(l=this.D[p],l.Yf){k=this.va.path();k.zIndex(1);this.$.push(k);k.tag={element:l};
l.path=k;a=l.from.Dj;f=l.Yf.Cj;q=l.be;b=l.We;m=hfa(a,f);h=m(d);m=m(1-d);var r=l.height/2;l.left=a;l.right=f;l.topCenter=(q+b)/2-r;l.leftTop={x:a,y:q-r};l.rightTop={x:f,y:b-r};var t=q-r,u=b-r;q+=r;b+=r;k.moveTo(a,t).jk(h,t,m,u,f,u).lineTo(f,b).jk(m,b,h,q,a,q).lineTo(a,t);3>l.height&&(k=this.va.path(),k.zIndex(2),this.ta.push(k),k.fill($.Ek).stroke($.Ek,3),k.moveTo(a,t).jk(h,t,m,u,f,u).lineTo(f,b).jk(m,b,h,q,a,q).lineTo(a,t),k.tag={element:l})}else b=l.from.fE*this.la,m=Math.min(b,c/4),a=l.from.Dj,
f=a+m,h=l.from.We,b=h-b,k=this.va.path(),k.zIndex(1),this.P.push(k),k.tag={element:l},l.path=k,l.Lda=f,l.Mda=h,k.moveTo(a,b).arcTo(m,m,-90,90),b+m<h&&k.lineTo(f,h),k.lineTo((a+f)/2,h+e).lineTo(a,h).close();xO(this,["appearance","nodelabels","flowlabels"]);this.I(4)}$.Jp(this,"sankey","appearance")&&(NO(this,this.ea,this.g),NO(this,this.$,this.f),NO(this,this.P,this.o),$.Ip(this,"sankey","appearance"));if($.Jp(this,"sankey","nodelabels")){l=this.g.labels();l.clear().O(this.va).zIndex(3);for(var v in this.qg)d=
this.qg[v],a=d.id,c=this.KD(d,!0),e=FO(this,d,$.Jk),d.label=l.add(c,e,a),this.Cd(this.g,d,$.Jk);l.W();this.g.yF();$.Ip(this,"sankey","nodelabels")}if($.Jp(this,"sankey","flowlabels")){v=this.f.labels();f=this.o.labels();v.clear().O(this.va).zIndex(3);f.clear().O(this.va).zIndex(3);for(p in this.D)l=this.D[p],a=$.O(p),d=l.Yf,c=this.KD(l,!0),d?(e={value:this.wT(l)},l.label=v.add(c,e,a),l.label.gk("center-bottom")):(e={value:{x:l.Lda,y:l.Mda}},l.label=f.add(c,e,a),l.label.gk("left-center")),this.Cd(d?
this.f:this.o,l,$.Jk);v.W();f.W();this.f.yF();this.o.yF();$.Ip(this,"sankey","flowlabels")}}};
$.g.Cd=function(a,b,c){var d=b.label;if(d){var e=this.aa();a.La()==BO?e.reset():e.select(b.di);b=e.get("normal");b=$.n(b)?b.label:void 0;var f=e.get("hovered");f=$.n(f)?f.label:void 0;b=$.zn(b,e.get("label"),null);e=$.zn(f,e.get("hoverLabel"),null);e=c?e:null;f=c?a.fb().labels():null;var h=a.Ma().labels();c=c?a.fb().labels().pa:null;var k=a.Ma().labels().pa,l=e&&$.n(e.enabled)?e.enabled:null,m=b&&$.n(b.enabled)?b.enabled:null,p=f&&null!==f.enabled()?f.enabled():null,q=h&&null!==h.enabled()?h.enabled():
null;a=!1;null!=l?a=l:null!=m?a=m:null!=p?a=p:a=q;a?(d.enabled(!0),d.state("labelOwnSettings",d.ca,0),d.state("pointState",e,1),d.state("pointNormal",b,2),d.state("elementState",f,3),d.state("elementNormal",h,4),d.state("elementStateTheme",c,5),d.state("auto",d.ed,6),d.state("elementNormalTheme",k,7)):d.enabled(!1);d.W()}};$.g.uy=function(){return[this]};$.g.YI=function(){return["from","to","weight"]};
$.g.F=function(){var a=zO.B.F.call(this);a.type=this.La();a.data=this.data().F();a.tooltip=this.Za().F();a.palette=this.Yb().F();a.dropoff=this.bP().F();a.flow=this.nP().F();a.node=this.node().F();$.lp(this,QO,a);return{chart:a}};$.g.Y=function(a,b){zO.B.Y.call(this,a,b);"data"in a&&this.data(a.data);this.Yb(a.palette);"tooltip"in a&&this.Za().fa(!!b,a.tooltip);"dropoff"in a&&this.bP().fa(!!b,a.dropoff);"flow"in a&&this.nP().fa(!!b,a.flow);"node"in a&&this.node().fa(!!b,a.node);$.bp(this,QO,a,b)};
$.g.R=function(){$.$c(this.Fa,this.o,this.f,this.g,this.mb,this.P,this.ea,this.$,this.ta);zO.B.R.call(this)};var SO=zO.prototype;SO.data=SO.data;SO.noData=SO.rn;SO.tooltip=SO.Za;SO.dropoff=SO.bP;SO.flow=SO.nP;SO.node=SO.node;SO.palette=SO.Yb;$.no.sankey=OO;$.G("anychart.sankey",OO);}).call(this,$)}