/*!
 * jQuery UI 1.8
 *
 * Copyright (c) 2010 AUTHORS.txt (http://jqueryui.com/about)
 * Dual licensed under the MIT (MIT-LICENSE.txt)
 * and GPL (GPL-LICENSE.txt) licenses.
 *
 * http://docs.jquery.com/UI
 */
/*
 * jQuery UI 1.8
 *
 * Copyright (c) 2010 AUTHORS.txt (http://jqueryui.com/about)
 * Dual licensed under the MIT (MIT-LICENSE.txt)
 * and GPL (GPL-LICENSE.txt) licenses.
 *
 * http://docs.jquery.com/UI
 */
jQuery.ui||(function(a){
    a.ui={
        version:"1.8",
        plugin:{
            add:function(c,d,f){
                var e=a.ui[c].prototype;for(var b in f){
                    e.plugins[b]=e.plugins[b]||[];e.plugins[b].push([d,f[b]])
                    }
                },
            call:function(b,d,c){
                var f=b.plugins[d];if(!f||!b.element[0].parentNode){
                    return
                }for(var e=0;e<f.length;e++){
                    if(b.options[f[e][0]]){
                        f[e][1].apply(b.element,c)
                        }
                    }
                }
            },
        contains:function(d,c){
            return document.compareDocumentPosition?d.compareDocumentPosition(c)&16:d!==c&&d.contains(c)
            },
        hasScroll:function(e,c){
            if(a(e).css("overflow")=="hidden"){
                return false
                }var b=(c&&c=="left")?"scrollLeft":"scrollTop",d=false;if(e[b]>0){
                return true
                }e[b]=1;d=(e[b]>0);e[b]=0;return d
            },
        isOverAxis:function(c,b,d){
            return(c>b)&&(c<(b+d))
            },
        isOver:function(g,c,f,e,b,d){
            return a.ui.isOverAxis(g,f,b)&&a.ui.isOverAxis(c,e,d)
            },
        keyCode:{
            BACKSPACE:8,
            CAPS_LOCK:20,
            COMMA:188,
            CONTROL:17,
            DELETE:46,
            DOWN:40,
            END:35,
            ENTER:13,
            ESCAPE:27,
            HOME:36,
            INSERT:45,
            LEFT:37,
            NUMPAD_ADD:107,
            NUMPAD_DECIMAL:110,
            NUMPAD_DIVIDE:111,
            NUMPAD_ENTER:108,
            NUMPAD_MULTIPLY:106,
            NUMPAD_SUBTRACT:109,
            PAGE_DOWN:34,
            PAGE_UP:33,
            PERIOD:190,
            RIGHT:39,
            SHIFT:16,
            SPACE:32,
            TAB:9,
            UP:38
        }
        };a.fn.extend({
        _focus:a.fn.focus,
        focus:function(b,c){
            return typeof b==="number"?this.each(function(){
                var d=this;setTimeout(function(){
                    a(d).focus();(c&&c.call(d))
                    },b)
                }):this._focus.apply(this,arguments)
            },
        enableSelection:function(){
            return this.attr("unselectable","off").css("MozUserSelect","").unbind("selectstart.ui")
            },
        disableSelection:function(){
            return this.attr("unselectable","on").css("MozUserSelect","none").bind("selectstart.ui",function(){
                return false
                })
            },
        scrollParent:function(){
            var b;if((a.browser.msie&&(/(static|relative)/).test(this.css("position")))||(/absolute/).test(this.css("position"))){
                b=this.parents().filter(function(){
                    return(/(relative|absolute|fixed)/).test(a.curCSS(this,"position",1))&&(/(auto|scroll)/).test(a.curCSS(this,"overflow",1)+a.curCSS(this,"overflow-y",1)+a.curCSS(this,"overflow-x",1))
                    }).eq(0)
                }else{
                b=this.parents().filter(function(){
                    return(/(auto|scroll)/).test(a.curCSS(this,"overflow",1)+a.curCSS(this,"overflow-y",1)+a.curCSS(this,"overflow-x",1))
                    }).eq(0)
                }return(/fixed/).test(this.css("position"))||!b.length?a(document):b
            },
        zIndex:function(e){
            if(e!==undefined){
                return this.css("zIndex",e)
                }if(this.length){
                var c=a(this[0]),b,d;while(c.length&&c[0]!==document){
                    b=c.css("position");if(b=="absolute"||b=="relative"||b=="fixed"){
                        d=parseInt(c.css("zIndex"));if(!isNaN(d)&&d!=0){
                            return d
                            }
                        }c=c.parent()
                    }
                }return 0
            }
        });a.extend(a.expr[":"],{
        data:function(d,c,b){
            return !!a.data(d,b[3])
            },
        focusable:function(c){
            var d=c.nodeName.toLowerCase(),b=a.attr(c,"tabindex");return(/input|select|textarea|button|object/.test(d)?!c.disabled:"a"==d||"area"==d?c.href||!isNaN(b):!isNaN(b))&&!a(c)["area"==d?"parents":"closest"](":hidden").length
            },
        tabbable:function(c){
            var b=a.attr(c,"tabindex");return(isNaN(b)||b>=0)&&a(c).is(":focusable")
            }
        })
    })(jQuery);;/*
 * jQuery UI Effects 1.8
 *
 * Copyright (c) 2010 AUTHORS.txt (http://jqueryui.com/about)
 * Dual licensed under the MIT (MIT-LICENSE.txt)
 * and GPL (GPL-LICENSE.txt) licenses.
 *
 * http://docs.jquery.com/UI/Effects/
 */
jQuery.effects||(function(g){
    g.effects={};g.each(["backgroundColor","borderBottomColor","borderLeftColor","borderRightColor","borderTopColor","color","outlineColor"],function(l,k){
        g.fx.step[k]=function(m){
            if(!m.colorInit){
                m.start=j(m.elem,k);m.end=i(m.end);m.colorInit=true
                }m.elem.style[k]="rgb("+Math.max(Math.min(parseInt((m.pos*(m.end[0]-m.start[0]))+m.start[0],10),255),0)+","+Math.max(Math.min(parseInt((m.pos*(m.end[1]-m.start[1]))+m.start[1],10),255),0)+","+Math.max(Math.min(parseInt((m.pos*(m.end[2]-m.start[2]))+m.start[2],10),255),0)+")"
            }
        });function i(l){
        var k;if(l&&l.constructor==Array&&l.length==3){
            return l
            }if(k=/rgb\(\s*([0-9]{1,3})\s*,\s*([0-9]{1,3})\s*,\s*([0-9]{1,3})\s*\)/.exec(l)){
            return[parseInt(k[1],10),parseInt(k[2],10),parseInt(k[3],10)]
            }if(k=/rgb\(\s*([0-9]+(?:\.[0-9]+)?)\%\s*,\s*([0-9]+(?:\.[0-9]+)?)\%\s*,\s*([0-9]+(?:\.[0-9]+)?)\%\s*\)/.exec(l)){
            return[parseFloat(k[1])*2.55,parseFloat(k[2])*2.55,parseFloat(k[3])*2.55]
            }if(k=/#([a-fA-F0-9]{2})([a-fA-F0-9]{2})([a-fA-F0-9]{2})/.exec(l)){
            return[parseInt(k[1],16),parseInt(k[2],16),parseInt(k[3],16)]
            }if(k=/#([a-fA-F0-9])([a-fA-F0-9])([a-fA-F0-9])/.exec(l)){
            return[parseInt(k[1]+k[1],16),parseInt(k[2]+k[2],16),parseInt(k[3]+k[3],16)]
            }if(k=/rgba\(0, 0, 0, 0\)/.exec(l)){
            return a.transparent
            }return a[g.trim(l).toLowerCase()]
        }function j(m,k){
        var l;do{
            l=g.curCSS(m,k);if(l!=""&&l!="transparent"||g.nodeName(m,"body")){
                break
            }k="backgroundColor"
            }while(m=m.parentNode);return i(l)
        }var a={
        aqua:[0,255,255],
        azure:[240,255,255],
        beige:[245,245,220],
        black:[0,0,0],
        blue:[0,0,255],
        brown:[165,42,42],
        cyan:[0,255,255],
        darkblue:[0,0,139],
        darkcyan:[0,139,139],
        darkgrey:[169,169,169],
        darkgreen:[0,100,0],
        darkkhaki:[189,183,107],
        darkmagenta:[139,0,139],
        darkolivegreen:[85,107,47],
        darkorange:[255,140,0],
        darkorchid:[153,50,204],
        darkred:[139,0,0],
        darksalmon:[233,150,122],
        darkviolet:[148,0,211],
        fuchsia:[255,0,255],
        gold:[255,215,0],
        green:[0,128,0],
        indigo:[75,0,130],
        khaki:[240,230,140],
        lightblue:[173,216,230],
        lightcyan:[224,255,255],
        lightgreen:[144,238,144],
        lightgrey:[211,211,211],
        lightpink:[255,182,193],
        lightyellow:[255,255,224],
        lime:[0,255,0],
        magenta:[255,0,255],
        maroon:[128,0,0],
        navy:[0,0,128],
        olive:[128,128,0],
        orange:[255,165,0],
        pink:[255,192,203],
        purple:[128,0,128],
        violet:[128,0,128],
        red:[255,0,0],
        silver:[192,192,192],
        white:[255,255,255],
        yellow:[255,255,0],
        transparent:[255,255,255]
        };var e=["add","remove","toggle"],c={
        border:1,
        borderBottom:1,
        borderColor:1,
        borderLeft:1,
        borderRight:1,
        borderTop:1,
        borderWidth:1,
        margin:1,
        padding:1
    };function f(){
        var n=document.defaultView?document.defaultView.getComputedStyle(this,null):this.currentStyle,o={},l,m;if(n&&n.length&&n[0]&&n[n[0]]){
            var k=n.length;while(k--){
                l=n[k];if(typeof n[l]=="string"){
                    m=l.replace(/\-(\w)/g,function(p,q){
                        return q.toUpperCase()
                        });o[m]=n[l]
                    }
                }
            }else{
            for(l in n){
                if(typeof n[l]==="string"){
                    o[l]=n[l]
                    }
                }
            }return o
        }function b(l){
        var k,m;for(k in l){
            m=l[k];if(m==null||g.isFunction(m)||k in c||(/scrollbar/).test(k)||(!(/color/i).test(k)&&isNaN(parseFloat(m)))){
                delete l[k]
            }
            }return l
        }function h(k,m){
        var n={
            _:0
        },l;for(l in m){
            if(k[l]!=m[l]){
                n[l]=m[l]
                }
            }return n
        }g.effects.animateClass=function(k,l,n,m){
        if(g.isFunction(n)){
            m=n;n=null
            }return this.each(function(){
            var r=g(this),o=r.attr("style")||" ",s=b(f.call(this)),q,p=r.attr("className");g.each(e,function(t,u){
                if(k[u]){
                    r[u+"Class"](k[u])
                    }
                });q=b(f.call(this));r.attr("className",p);r.animate(h(s,q),l,n,function(){
                g.each(e,function(t,u){
                    if(k[u]){
                        r[u+"Class"](k[u])
                        }
                    });if(typeof r.attr("style")=="object"){
                    r.attr("style").cssText="";r.attr("style").cssText=o
                    }else{
                    r.attr("style",o)
                    }if(m){
                    m.apply(this,arguments)
                    }
                })
            })
        };g.fn.extend({
        _addClass:g.fn.addClass,
        addClass:function(l,k,n,m){
            return k?g.effects.animateClass.apply(this,[{
                add:l
            },k,n,m]):this._addClass(l)
            },
        _removeClass:g.fn.removeClass,
        removeClass:function(l,k,n,m){
            return k?g.effects.animateClass.apply(this,[{
                remove:l
            },k,n,m]):this._removeClass(l)
            },
        _toggleClass:g.fn.toggleClass,
        toggleClass:function(m,l,k,o,n){
            if(typeof l=="boolean"||l===undefined){
                if(!k){
                    return this._toggleClass(m,l)
                    }else{
                    return g.effects.animateClass.apply(this,[(l?{
                        add:m
                    }:{
                        remove:m
                    }),k,o,n])
                    }
                }else{
                return g.effects.animateClass.apply(this,[{
                    toggle:m
                },l,k,o])
                }
            },
        switchClass:function(k,m,l,o,n){
            return g.effects.animateClass.apply(this,[{
                add:m,
                remove:k
            },l,o,n])
            }
        });g.extend(g.effects,{
        version:"1.8",
        save:function(l,m){
            for(var k=0;k<m.length;k++){
                if(m[k]!==null){
                    l.data("ec.storage."+m[k],l[0].style[m[k]])
                    }
                }
            },
        restore:function(l,m){
            for(var k=0;k<m.length;k++){
                if(m[k]!==null){
                    l.css(m[k],l.data("ec.storage."+m[k]))
                    }
                }
            },
        setMode:function(k,l){
            if(l=="toggle"){
                l=k.is(":hidden")?"show":"hide"
                }return l
            },
        getBaseline:function(l,m){
            var n,k;switch(l[0]){
                case"top":n=0;break;case"middle":n=0.5;break;case"bottom":n=1;break;default:n=l[0]/m.height
                    }switch(l[1]){
                case"left":k=0;break;case"center":k=0.5;break;case"right":k=1;break;default:k=l[1]/m.width
                    }return{
                x:k,
                y:n
            }
            },
        createWrapper:function(k){
            if(k.parent().is(".ui-effects-wrapper")){
                return k.parent()
                }var l={
                width:k.outerWidth(true),
                height:k.outerHeight(true),
                "float":k.css("float")
                },m=g("<div></div>").addClass("ui-effects-wrapper").css({
                fontSize:"100%",
                background:"transparent",
                border:"none",
                margin:0,
                padding:0
            });k.wrap(m);m=k.parent();if(k.css("position")=="static"){
                m.css({
                    position:"relative"
                });k.css({
                    position:"relative"
                })
                }else{
                g.extend(l,{
                    position:k.css("position"),
                    zIndex:k.css("z-index")
                    });g.each(["top","left","bottom","right"],function(n,o){
                    l[o]=k.css(o);if(isNaN(parseInt(l[o],10))){
                        l[o]="auto"
                        }
                    });k.css({
                    position:"relative",
                    top:0,
                    left:0
                })
                }return m.css(l).show()
            },
        removeWrapper:function(k){
            if(k.parent().is(".ui-effects-wrapper")){
                return k.parent().replaceWith(k)
                }return k
            },
        setTransition:function(l,n,k,m){
            m=m||{};g.each(n,function(p,o){
                unit=l.cssUnit(o);if(unit[0]>0){
                    m[o]=unit[0]*k+unit[1]
                    }
                });return m
            }
        });function d(l,k,m,n){
        if(typeof l=="object"){
            n=k;m=null;k=l;l=k.effect
            }if(g.isFunction(k)){
            n=k;m=null;k={}
            }if(g.isFunction(m)){
            n=m;m=null
            }if(typeof k=="number"||g.fx.speeds[k]){
            n=m;m=k;k={}
            }k=k||{};m=m||k.duration;m=g.fx.off?0:typeof m=="number"?m:g.fx.speeds[m]||g.fx.speeds._default;n=n||k.complete;return[l,k,m,n]
        }g.fn.extend({
        effect:function(n,m,p,q){
            var l=d.apply(this,arguments),o={
                options:l[1],
                duration:l[2],
                callback:l[3]
                },k=g.effects[n];return k&&!g.fx.off?k.call(this,o):this
            },
        _show:g.fn.show,
        show:function(l){
            if(!l||typeof l=="number"||g.fx.speeds[l]){
                return this._show.apply(this,arguments)
                }else{
                var k=d.apply(this,arguments);k[1].mode="show";return this.effect.apply(this,k)
                }
            },
        _hide:g.fn.hide,
        hide:function(l){
            if(!l||typeof l=="number"||g.fx.speeds[l]){
                return this._hide.apply(this,arguments)
                }else{
                var k=d.apply(this,arguments);k[1].mode="hide";return this.effect.apply(this,k)
                }
            },
        __toggle:g.fn.toggle,
        toggle:function(l){
            if(!l||typeof l=="number"||g.fx.speeds[l]||typeof l=="boolean"||g.isFunction(l)){
                return this.__toggle.apply(this,arguments)
                }else{
                var k=d.apply(this,arguments);k[1].mode="toggle";return this.effect.apply(this,k)
                }
            },
        cssUnit:function(k){
            var l=this.css(k),m=[];g.each(["em","px","%","pt"],function(n,o){
                if(l.indexOf(o)>0){
                    m=[parseFloat(l),o]
                    }
                });return m
            }
        });g.easing.jswing=g.easing.swing;g.extend(g.easing,{
        def:"easeOutQuad",
        swing:function(l,m,k,o,n){
            return g.easing[g.easing.def](l,m,k,o,n)
            },
        easeInQuad:function(l,m,k,o,n){
            return o*(m/=n)*m+k
            },
        easeOutQuad:function(l,m,k,o,n){
            return -o*(m/=n)*(m-2)+k
            },
        easeInOutQuad:function(l,m,k,o,n){
            if((m/=n/2)<1){
                return o/2*m*m+k
                }return -o/2*((--m)*(m-2)-1)+k
            },
        easeInCubic:function(l,m,k,o,n){
            return o*(m/=n)*m*m+k
            },
        easeOutCubic:function(l,m,k,o,n){
            return o*((m=m/n-1)*m*m+1)+k
            },
        easeInOutCubic:function(l,m,k,o,n){
            if((m/=n/2)<1){
                return o/2*m*m*m+k
                }return o/2*((m-=2)*m*m+2)+k
            },
        easeInQuart:function(l,m,k,o,n){
            return o*(m/=n)*m*m*m+k
            },
        easeOutQuart:function(l,m,k,o,n){
            return -o*((m=m/n-1)*m*m*m-1)+k
            },
        easeInOutQuart:function(l,m,k,o,n){
            if((m/=n/2)<1){
                return o/2*m*m*m*m+k
                }return -o/2*((m-=2)*m*m*m-2)+k
            },
        easeInQuint:function(l,m,k,o,n){
            return o*(m/=n)*m*m*m*m+k
            },
        easeOutQuint:function(l,m,k,o,n){
            return o*((m=m/n-1)*m*m*m*m+1)+k
            },
        easeInOutQuint:function(l,m,k,o,n){
            if((m/=n/2)<1){
                return o/2*m*m*m*m*m+k
                }return o/2*((m-=2)*m*m*m*m+2)+k
            },
        easeInSine:function(l,m,k,o,n){
            return -o*Math.cos(m/n*(Math.PI/2))+o+k
            },
        easeOutSine:function(l,m,k,o,n){
            return o*Math.sin(m/n*(Math.PI/2))+k
            },
        easeInOutSine:function(l,m,k,o,n){
            return -o/2*(Math.cos(Math.PI*m/n)-1)+k
            },
        easeInExpo:function(l,m,k,o,n){
            return(m==0)?k:o*Math.pow(2,10*(m/n-1))+k
            },
        easeOutExpo:function(l,m,k,o,n){
            return(m==n)?k+o:o*(-Math.pow(2,-10*m/n)+1)+k
            },
        easeInOutExpo:function(l,m,k,o,n){
            if(m==0){
                return k
                }if(m==n){
                return k+o
                }if((m/=n/2)<1){
                return o/2*Math.pow(2,10*(m-1))+k
                }return o/2*(-Math.pow(2,-10*--m)+2)+k
            },
        easeInCirc:function(l,m,k,o,n){
            return -o*(Math.sqrt(1-(m/=n)*m)-1)+k
            },
        easeOutCirc:function(l,m,k,o,n){
            return o*Math.sqrt(1-(m=m/n-1)*m)+k
            },
        easeInOutCirc:function(l,m,k,o,n){
            if((m/=n/2)<1){
                return -o/2*(Math.sqrt(1-m*m)-1)+k
                }return o/2*(Math.sqrt(1-(m-=2)*m)+1)+k
            },
        easeInElastic:function(l,n,k,u,r){
            var o=1.70158;var q=0;var m=u;if(n==0){
                return k
                }if((n/=r)==1){
                return k+u
                }if(!q){
                q=r*0.3
                }if(m<Math.abs(u)){
                m=u;var o=q/4
                }else{
                var o=q/(2*Math.PI)*Math.asin(u/m)
                }return -(m*Math.pow(2,10*(n-=1))*Math.sin((n*r-o)*(2*Math.PI)/q))+k
            },
        easeOutElastic:function(l,n,k,u,r){
            var o=1.70158;var q=0;var m=u;if(n==0){
                return k
                }if((n/=r)==1){
                return k+u
                }if(!q){
                q=r*0.3
                }if(m<Math.abs(u)){
                m=u;var o=q/4
                }else{
                var o=q/(2*Math.PI)*Math.asin(u/m)
                }return m*Math.pow(2,-10*n)*Math.sin((n*r-o)*(2*Math.PI)/q)+u+k
            },
        easeInOutElastic:function(l,n,k,u,r){
            var o=1.70158;var q=0;var m=u;if(n==0){
                return k
                }if((n/=r/2)==2){
                return k+u
                }if(!q){
                q=r*(0.3*1.5)
                }if(m<Math.abs(u)){
                m=u;var o=q/4
                }else{
                var o=q/(2*Math.PI)*Math.asin(u/m)
                }if(n<1){
                return -0.5*(m*Math.pow(2,10*(n-=1))*Math.sin((n*r-o)*(2*Math.PI)/q))+k
                }return m*Math.pow(2,-10*(n-=1))*Math.sin((n*r-o)*(2*Math.PI)/q)*0.5+u+k
            },
        easeInBack:function(l,m,k,p,o,n){
            if(n==undefined){
                n=1.70158
                }return p*(m/=o)*m*((n+1)*m-n)+k
            },
        easeOutBack:function(l,m,k,p,o,n){
            if(n==undefined){
                n=1.70158
                }return p*((m=m/o-1)*m*((n+1)*m+n)+1)+k
            },
        easeInOutBack:function(l,m,k,p,o,n){
            if(n==undefined){
                n=1.70158
                }if((m/=o/2)<1){
                return p/2*(m*m*(((n*=(1.525))+1)*m-n))+k
                }return p/2*((m-=2)*m*(((n*=(1.525))+1)*m+n)+2)+k
            },
        easeInBounce:function(l,m,k,o,n){
            return o-g.easing.easeOutBounce(l,n-m,0,o,n)+k
            },
        easeOutBounce:function(l,m,k,o,n){
            if((m/=n)<(1/2.75)){
                return o*(7.5625*m*m)+k
                }else{
                if(m<(2/2.75)){
                    return o*(7.5625*(m-=(1.5/2.75))*m+0.75)+k
                    }else{
                    if(m<(2.5/2.75)){
                        return o*(7.5625*(m-=(2.25/2.75))*m+0.9375)+k
                        }else{
                        return o*(7.5625*(m-=(2.625/2.75))*m+0.984375)+k
                        }
                    }
                }
            },
        easeInOutBounce:function(l,m,k,o,n){
            if(m<n/2){
                return g.easing.easeInBounce(l,m*2,0,o,n)*0.5+k
                }return g.easing.easeOutBounce(l,m*2-n,0,o,n)*0.5+o*0.5+k
            }
        })
    })(jQuery);;/*
 * jQuery UI Effects Highlight 1.8
 *
 * Copyright (c) 2010 AUTHORS.txt (http://jqueryui.com/about)
 * Dual licensed under the MIT (MIT-LICENSE.txt)
 * and GPL (GPL-LICENSE.txt) licenses.
 *
 * http://docs.jquery.com/UI/Effects/Highlight
 *
 * Depends:
 *	jquery.effects.core.js
 */
(function(a){
    a.effects.highlight=function(b){
        return this.queue(function(){
            var d=a(this),c=["backgroundImage","backgroundColor","opacity"],f=a.effects.setMode(d,b.options.mode||"show"),e={
                backgroundColor:d.css("backgroundColor")
                };if(f=="hide"){
                e.opacity=0
                }a.effects.save(d,c);d.show().css({
                backgroundImage:"none",
                backgroundColor:b.options.color||"#ffff99"
                }).animate(e,{
                queue:false,
                duration:b.duration,
                easing:b.options.easing,
                complete:function(){
                    (f=="hide"&&d.hide());a.effects.restore(d,c);(f=="show"&&!a.support.opacity&&this.style.removeAttribute("filter"));(b.callback&&b.callback.apply(this,arguments));d.dequeue()
                    }
                })
            })
        }
    })(jQuery);;