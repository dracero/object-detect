import{S as C,i as M,s as N,k as p,q as W,a as y,l as v,m as _,r as $,h as d,c as k,n as l,b as P,G as u,J as A,H as w,o as O,w as T,y as I,z as L,A as U,g as j,d as q,B}from"../chunks/index.33fbba09.js";function D(r){let e,t,a,o,s,h,m,i,f,n,b,x;return{c(){e=p("section"),t=p("h1"),a=W("Webcam Stream Mastery"),o=y(),s=p("button"),h=W("Take Photo"),m=y(),i=p("video"),f=y(),n=p("canvas"),this.h()},l(g){e=v(g,"SECTION",{class:!0});var c=_(e);t=v(c,"H1",{class:!0});var E=_(t);a=$(E,"Webcam Stream Mastery"),E.forEach(d),o=k(c),s=v(c,"BUTTON",{class:!0});var S=_(s);h=$(S,"Take Photo"),S.forEach(d),m=k(c),i=v(c,"VIDEO",{class:!0,width:!0,height:!0}),_(i).forEach(d),f=k(c),n=v(c,"CANVAS",{class:!0,width:!0,height:!0}),_(n).forEach(d),c.forEach(d),this.h()},h(){l(t,"class","text-4xl text-blue-500 my-4"),l(s,"class","rounded-sm bg-blue-600 text-white px-4 py-2"),l(i,"class","mt-4 rounded-sm "),l(i,"width","640"),l(i,"height","480"),i.autoplay=!0,l(n,"class","mt-4 rounded-sm"),l(n,"width","640"),l(n,"height","480"),l(e,"class","container mx-auto px-4")},m(g,c){P(g,e,c),u(e,t),u(t,a),u(e,o),u(e,s),u(s,h),u(e,m),u(e,i),r[3](i),u(e,f),u(e,n),r[4](n),b||(x=A(s,"click",r[2]),b=!0)},p:w,i:w,o:w,d(g){g&&d(e),r[3](null),r[4](null),b=!1,x()}}}function H(r,e,t){let a,o,s;async function h(){try{a=await navigator.mediaDevices.getUserMedia({video:!0,audio:!1}),t(0,o.srcObject=a,o)}catch(n){console.error(n)}console.log(a.getTracks()[0])}function m(){s.getContext("2d").drawImage(o,0,0,s.width,s.height)}O(()=>{h()});function i(n){T[n?"unshift":"push"](()=>{o=n,t(0,o)})}function f(n){T[n?"unshift":"push"](()=>{s=n,t(1,s)})}return[o,s,m,i,f]}class R extends C{constructor(e){super(),M(this,e,H,D,N,{})}}function V(r){let e,t;return e=new R({}),{c(){I(e.$$.fragment)},l(a){L(e.$$.fragment,a)},m(a,o){U(e,a,o),t=!0},p:w,i(a){t||(j(e.$$.fragment,a),t=!0)},o(a){q(e.$$.fragment,a),t=!1},d(a){B(e,a)}}}function z(){"serviceWorker"in navigator&&addEventListener("load",function(){navigator.serviceWorker.register("../service-worker.js")})}async function G(){const r=await navigator.serviceWorker.ready;r.addEventListener("updatefound",e=>{const t=r.installing;t.addEventListener("statechange",a=>{t.state=="installed"&&console.log("New service worker installed")})})}function J(r){return O(async()=>{z(),G()}),[]}class K extends C{constructor(e){super(),M(this,e,J,V,N,{})}}export{K as default};
