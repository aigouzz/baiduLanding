function Swipe(t,n){"use strict";function e(){m=g.children,E=m.length,m.length<1&&(n.continuous=!1),h.transitions&&n.continuous&&m.length<2&&(g.appendChild(m[0].cloneNode(!0)),g.appendChild(g.children[1].cloneNode(!0)),m=g.children),w=new Array(m.length),p=t.getBoundingClientRect().width||t.offsetWidth,g.style.width=m.length*p+"px";for(var e=m.length;e--;){var i=m[e];i.style.width=p+"px",i.setAttribute("data-index",e),i.style.position="relative",h.transitions&&(i.style.left=e*-p+"px",r(e,b>e?-p:e>b?p:0,0))}n.continuous&&h.transitions&&(r(a(b-1),-p,0),r(a(b+1),p,0)),h.transitions||(g.style.left=b*-p+"px"),t.style.visibility="visible"}function i(){n.continuous?s(b-1):b&&s(b-1)}function o(){n.continuous?s(b+1):b<m.length-1&&s(b+1)}function a(t){return(m.length+t%m.length)%m.length}function s(t,e){if(b!=t){if(h.transitions){var i=Math.abs(b-t)/(b-t);if(n.continuous){var o=i;i=-w[a(t)]/p,i!==o&&(t=-i*m.length+t)}for(var s=Math.abs(b-t)-1;s--;)r(a((t>b?t:b)-s-1),p*i,0);t=a(t),r(b,p*i,e||y),r(t,0,e||y),n.continuous&&r(a(t-i),-(p*i),0)}else t=a(t),c(b*-p,t*-p,e||y);b=t,f(n.callback&&n.callback(b,m[b],i))}}function r(t,n,e){u(t,n,e),w[t]=n}function u(t,n,e){var i=m[t],o=i&&i.style;o&&(o.webkitTransitionDuration=o.MozTransitionDuration=o.msTransitionDuration=o.OTransitionDuration=o.transitionDuration=e+"ms",o.webkitTransform="translate("+n+"px,0)translateZ(0)",o.msTransform=o.MozTransform=o.OTransform="translateX("+n+"px)")}function c(t,e,i){if(!i)return void(g.style.left=e+"px");var o=+new Date,a=setInterval(function(){var s=+new Date-o;return s>i?(g.style.left=e+"px",L&&d(),n.transitionEnd&&n.transitionEnd.call(event,b,m[b]),void clearInterval(a)):void(g.style.left=(e-t)*(Math.floor(s/i*100)/100)+t+"px")},4)}function d(){x=setTimeout(o,L)}function l(){L=0,clearTimeout(x)}var v=function(){},f=function(t){setTimeout(t||v,0)},h={addEventListener:!!window.addEventListener,touch:"ontouchstart"in window||window.DocumentTouch&&document instanceof DocumentTouch,transitions:function(t){var n=["transitionProperty","WebkitTransition","MozTransition","OTransition","msTransition"];for(var e in n)if(void 0!==t.style[n[e]])return!0;return!1}(document.createElement("swipe"))};if(t){var m,w,p,E,g=t.children[0];n=n||{};var b=parseInt(n.startSlide,10)||0,y=n.speed||300;n.continuous=void 0!==n.continuous?n.continuous:!0;var x,T,L=n.auto||0,k={},D={},M={handleEvent:function(t){switch(t.type){case"touchstart":this.start(t);break;case"touchmove":this.move(t);break;case"touchend":f(this.end(t));break;case"webkitTransitionEnd":case"msTransitionEnd":case"oTransitionEnd":case"otransitionend":case"transitionend":f(this.transitionEnd(t));break;case"resize":f(e.call())}},start:function(t){var n=t.touches[0];k={x:n.pageX,y:n.pageY,time:+new Date},T=void 0,D={},g.addEventListener("touchmove",this,!1),g.addEventListener("touchend",this,!1)},move:function(t){if(!(t.touches.length>1||t.scale&&1!==t.scale)){n.disableScroll&&t.preventDefault();var e=t.touches[0];D={x:e.pageX-k.x,y:e.pageY-k.y};var i=D.x<0;n.moveCallback&&n.moveCallback(b,m[b],i)||(n.stopPropagation&&t.stopPropagation(),"undefined"==typeof T&&(T=!!(T||Math.abs(D.x)<Math.abs(D.y))),T||(t.preventDefault(),l(),n.continuous?(u(a(b-1),D.x+w[a(b-1)],0),u(b,D.x+w[b],0),u(a(b+1),D.x+w[a(b+1)],0)):D.x=D.x/(!b&&D.x>0||b==m.length-1&&D.x<0?Math.abs(D.x)/p+1:1)))}},end:function(t){var e=+new Date-k.time,i=Number(e)<250&&Math.abs(D.x)>20||Math.abs(D.x)>p/2,o=!b&&D.x>0||b==m.length-1&&D.x<0;n.continuous&&(o=!1);var s=D.x<0;n.moveCallback&&n.moveCallback(b,m[b],s)||(T||(i&&!o?(s?(n.continuous?(r(a(b-1),-p,0),r(a(b+2),p,0)):r(b-1,-p,0),r(b,w[b]-p,y),r(a(b+1),w[a(b+1)]-p,y),b=a(b+1)):(n.continuous?(r(a(b+1),p,0),r(a(b-2),-p,0)):r(b+1,p,0),r(b,w[b]+p,y),r(a(b-1),w[a(b-1)]+p,y),b=a(b-1)),n.callback&&n.callback(b,m[b],s)):n.continuous?(r(a(b-1),-p,y),r(b,0,y),r(a(b+1),p,y)):(r(b-1,-p,y),r(b,0,y),r(b+1,p,y))),g.removeEventListener("touchmove",M,!1),g.removeEventListener("touchend",M,!1))},transitionEnd:function(t){parseInt(t.target.getAttribute("data-index"),10)==b&&(L&&d(),n.transitionEnd&&n.transitionEnd.call(t,b,m[b]))}};return e(),L&&d(),h.addEventListener?(h.touch&&g.addEventListener("touchstart",M,!1),h.transitions&&(g.addEventListener("webkitTransitionEnd",M,!1),g.addEventListener("msTransitionEnd",M,!1),g.addEventListener("oTransitionEnd",M,!1),g.addEventListener("otransitionend",M,!1),g.addEventListener("transitionend",M,!1)),window.addEventListener("resize",M,!1)):window.onresize=function(){e()},{setup:function(){e()},slide:function(t,n){l(),s(t,n)},prev:function(){l(),i()},next:function(){l(),o()},getPos:function(){return b},getNumSlides:function(){return E},kill:function(){l(),g.style.width="auto",g.style.left=0;for(var t=m.length;t--;){var n=m[t];n.style.width="100%",n.style.left=0,h.transitions&&u(t,0,0)}h.addEventListener?(g.removeEventListener("touchstart",M,!1),g.removeEventListener("webkitTransitionEnd",M,!1),g.removeEventListener("msTransitionEnd",M,!1),g.removeEventListener("oTransitionEnd",M,!1),g.removeEventListener("otransitionend",M,!1),g.removeEventListener("transitionend",M,!1),window.removeEventListener("resize",M,!1)):window.onresize=null}}}}$().ready(function(){{var t=document.getElementById("slider"),n=document.getElementById("pageNav"),e=n.getElementsByTagName("a");t.getElementsByTagName("li"),Swipe(t,{auto:3e3,continuous:!0,stopPropagation:!0,callback:function(t,n){for(var i=e.length;i--;)i==t?e[t].className="point":e[i].className=""}})}}),(window.jQuery||window.Zepto)&&!function(t){t.fn.Swipe=function(n){return this.each(function(){t(this).data("Swipe",new Swipe(t(this)[0],n))})}}(window.jQuery||window.Zepto);