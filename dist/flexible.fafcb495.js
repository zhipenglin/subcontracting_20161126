!function(e){function t(r){if(i[r])return i[r].exports;var a=i[r]={exports:{},id:r,loaded:!1};return e[r].call(a.exports,a,a.exports,t),a.loaded=!0,a.exports}var i={};return t.m=e,t.c=i,t.p="",t(0)}([function(e,t){"use strict";!function(e,t){function i(){var t=n.getBoundingClientRect().width;t/s>540&&(t=540*s);var i=t/10;n.style.fontSize=i+"px",d.rem=e.rem=i}var r,a=e.document,n=a.documentElement,o=a.querySelector('meta[name="viewport"]'),l=a.querySelector('meta[name="flexible"]'),s=0,m=0,d=t.flexible||(t.flexible={});if(o){console.warn("将根据已有的meta标签来设置缩放比例");var c=o.getAttribute("content").match(/initial\-scale=([\d\.]+)/);c&&(m=parseFloat(c[1]),s=parseInt(1/m))}else if(l){var p=l.getAttribute("content");if(p){var u=p.match(/initial\-dpr=([\d\.]+)/),f=p.match(/maximum\-dpr=([\d\.]+)/);u&&(s=parseFloat(u[1]),m=parseFloat((1/s).toFixed(2))),f&&(s=parseFloat(f[1]),m=parseFloat((1/s).toFixed(2)))}}if(!s&&!m){var v=e.navigator.userAgent,x=(!!v.match(/android/gi),!!v.match(/iphone/gi)),h=x&&!!v.match(/OS 9_3/),b=e.devicePixelRatio;s=x&&!h?b>=3&&(!s||s>=3)?3:b>=2&&(!s||s>=2)?2:1:1,m=1/s}if(n.setAttribute("data-dpr",s),!o)if(o=a.createElement("meta"),o.setAttribute("name","viewport"),o.setAttribute("content","initial-scale="+m+", maximum-scale="+m+", minimum-scale="+m+", user-scalable=no"),n.firstElementChild)n.firstElementChild.appendChild(o);else{var w=a.createElement("div");w.appendChild(o),a.write(w.innerHTML)}e.addEventListener("resize",function(){clearTimeout(r),r=setTimeout(i,300)},!1),e.addEventListener("pageshow",function(e){e.persisted&&(clearTimeout(r),r=setTimeout(i,300))},!1),"complete"===a.readyState?a.body.style.fontSize=12*s+"px":a.addEventListener("DOMContentLoaded",function(){a.body.style.fontSize=12*s+"px"},!1),i(),d.dpr=e.dpr=s,d.refreshRem=i,d.rem2px=function(e){var t=parseFloat(e)*this.rem;return"string"==typeof e&&e.match(/rem$/)&&(t+="px"),t},d.px2rem=function(e){var t=parseFloat(e)/this.rem;return"string"==typeof e&&e.match(/px$/)&&(t+="rem"),t}}(window,window.lib||(window.lib={}))}]);
//# sourceMappingURL=flexible.fafcb495.js.map