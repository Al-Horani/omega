if(!self.define){let e,s={};const i=(i,n)=>(i=new URL(i+".js",n).href,s[i]||new Promise((s=>{if("document"in self){const e=document.createElement("script");e.src=i,e.onload=s,document.head.appendChild(e)}else e=i,importScripts(i),s()})).then((()=>{let e=s[i];if(!e)throw new Error(`Module ${i} didn’t register its module`);return e})));self.define=(n,r)=>{const t=e||("document"in self?document.currentScript.src:"")||location.href;if(s[t])return;let f={};const o=e=>i(e,t),l={module:{uri:t},exports:f,require:o};s[t]=Promise.all(n.map((e=>l[e]||o(e)))).then((e=>(r(...e),f)))}}define(["./workbox-5ffe50d4"],(function(e){"use strict";self.skipWaiting(),e.clientsClaim(),e.precacheAndRoute([{url:"assets/index--ef9kzqf.js",revision:null},{url:"assets/index-CdnTprqK.css",revision:null},{url:"index.html",revision:"71efeaa9915fd10e6ed4902ee12f2103"},{url:"registerSW.js",revision:"403b5b2caf1e9c1b75b61bbefef489cf"},{url:"manifest.webmanifest",revision:"365ebcdcd90fdee44d59ff32a18baf1a"}],{}),e.cleanupOutdatedCaches(),e.registerRoute(new e.NavigationRoute(e.createHandlerBoundToURL("index.html")))}));
