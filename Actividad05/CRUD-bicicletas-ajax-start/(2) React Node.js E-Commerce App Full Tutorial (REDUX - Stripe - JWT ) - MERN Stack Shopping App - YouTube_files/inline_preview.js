(function(g){var window=this;'use strict';var U3=function(a){g.W.call(this,{G:"div",L:"ytp-inline-preview-ui"});this.Be=!1;this.player=a;this.T(a,"onStateChange",this.dI);this.T(a,"videodatachange",this.Ll);this.T(a,"onInlinePreviewModeChange",this.nV);this.Zd=new g.op(this.Pq,null,this);g.H(this,this.Zd)},V3=function(a){g.rL.call(this,a);
this.j=new U3(this.player);g.H(this,this.j);this.j.hide();g.eL(this.player,this.j.element,4);a.isInline()&&(this.load(),g.O(a.getRootNode(),"ytp-inline-preview-mode",!0),this.player.V().S("web_inline_player_disable_scrubbing")&&g.O(a.getRootNode(),"ytp-inline-preview-mode-no-scrubbing",!0))};
g.w(U3,g.W);g.h=U3.prototype;
g.h.OF=function(){this.tooltip=new g.oP(this.player,this);g.H(this,this.tooltip);g.eL(this.player,this.tooltip.element,4);this.tooltip.scale=.6;this.yc=new g.mM(this.player);g.H(this,this.yc);var a=["ytp-inline-preview-scrim"];this.player.V().S("web_inline_player_expand_to_watch")||a.push("ytp-inline-preview-scrim-clear");this.Qg=new g.W({G:"div",Ga:a});g.H(this,this.Qg);this.Qg.Ba(this.element);this.T(this.Qg.element,"click",this.sB);this.player.V().S("web_inline_player_expand_to_watch")&&(a=new g.t_(this.player,
this),g.H(this,a),a.Ba(this.Qg.element));this.Tg=new g.aP(this.player,this);g.H(this,this.Tg);this.Tg.Ba(this.Qg.element);this.controls=new g.W({G:"div",L:"ytp-inline-preview-controls"});g.H(this,this.controls);this.controls.Ba(this.element);a=new g.JN(this.player,this);g.H(this,a);a.Ba(this.controls.element);a=new g.ZO(this.player,this);g.H(this,a);a.Ba(this.controls.element);this.Ic=new g.XN(this.player,this);g.H(this,this.Ic);g.eL(this.player,this.Ic.element,4);this.T(this.player,"appresize",this.yb);
this.T(this.player,"fullscreentoggled",this.yb);this.yb()};
g.h.show=function(){g.pp(this.Zd);this.Be||(this.OF(),this.Be=!0);0!==this.player.getPlayerState()&&g.W.prototype.show.call(this);this.Ic.show()};
g.h.hide=function(){this.Zd.stop();g.W.prototype.hide.call(this);this.player.isInline()||this.Be&&this.Ic.hide()};
g.h.ra=function(){g.W.prototype.ra.call(this)};
g.h.sB=function(a){a.target!==this.Qg.element||this.player.V().S("web_inline_player_expand_to_watch")||this.player.Oa("onExpandInlinePreview",a)};
g.h.nV=function(){g.O(this.player.getRootNode(),"ytp-inline-preview-mode",this.player.isInline())};
g.h.Gd=function(){this.Ic.Qb();this.Tg.Qb()};
g.h.Pq=function(){this.Gd();g.pp(this.Zd)};
g.h.yb=function(){g.mO(this.Ic,0,this.player.eb().getPlayerSize().width,!1);g.$N(this.Ic)};
g.h.dI=function(a){this.player.isInline()&&(0===a?this.hide():this.show())};
g.h.Ll=function(a,b){this.player.isInline()&&g.O(this.player.getRootNode(),"ytp-show-inline-preview-audio-controls",b.YF)};
g.h.pc=function(){return this.tooltip};
g.h.cf=function(){return!1};
g.h.Ff=function(){return!1};
g.h.Ni=function(){return!1};
g.h.ly=function(){};
g.h.Sn=function(){};
g.h.Us=function(){};
g.h.Bo=function(){return null};
g.h.Nw=function(){return null};
g.h.Kj=function(){return new g.Am(0,0,0,0)};
g.h.handleGlobalKeyDown=function(){return!1};
g.h.handleGlobalKeyUp=function(){return!1};
g.h.Wq=function(a,b,c,d,e){var f=d=0,k=0,l=g.Om(a);if(b){c=g.wp(b,"ytp-miniplayer-expand-watch-page-button");var m=g.wp(b,"ytp-mute-button"),n=g.wp(b,"ytp-subtitles-button"),p=g.Mm(b,this.element);b=g.Om(b);d=p.y+40;c&&(k=8);if(n||m)k=p.x-l.width+b.width}else k=c-l.width/2,f=35;b=this.player.eb().getPlayerSize().width;k=g.wh(k,0,b-l.width);d?(a.style.top=d+(e||0)+"px",a.style.bottom=""):(a.style.top="",a.style.bottom=f+"px");a.style.left=k+"px"};
g.h.showControls=function(){};
g.h.Jl=function(){};
g.h.Yk=function(){return!1};g.w(V3,g.rL);V3.prototype.ai=function(){return!1};
V3.prototype.load=function(){this.player.hideControls();this.j.show()};
V3.prototype.unload=function(){this.player.showControls();this.j.hide()};g.qL("inline_preview",V3);})(_yt_player);
