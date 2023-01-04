import{l as R,_ as r,e as m,x as v,q as T,D as V,E as y,F as S,G as P,i as p,H as b,p as A,d as i,t as j,I as N,f as $,J as k}from"./entry.02a49739.js";import{u as B}from"./asyncData.7b6388df.js";import{h as g,e as x,j as w}from"./ContentQuery.99c7d42c.js";import{w as O,s as C,u as M,a as z}from"./utils.27bb479c.js";/* empty css                                                        *//* empty css                                                *//* empty css                                               */import"./ContentDoc.aeac89c4.js";import"./ContentList.e8ca5a85.js";import"./ContentRenderer.1c034a60.js";import"./ContentRendererMarkdown.ff217d56.js";import"./ContentSlot.d75dccd0.js";import"./DocumentDrivenEmpty.56d57c70.js";import"./DocumentDrivenNotFound.848368dd.js";import"./Markdown.98a2e04f.js";import"./ProseCode.6c520e19.js";import{u as H}from"./composables.7d3721cf.js";import"./index.68c44503.js";const q=async t=>{var n,_;const{content:e}=R().public,o=typeof(t==null?void 0:t.params)=="function"?t.params():t||{};e.locales.length&&((_=(n=o.where)==null?void 0:n.find(l=>l._locale))!=null&&_._locale||(o.where=o.where||[],o.where.push({_locale:e.defaultLocale})));const u=e.experimental.stripQueryParameters?O(`/navigation/${`${g(o)}.${e.integrity}`}/${x(o)}.json`):O(`/navigation/${g(o)}.${e.integrity}.json`);if(C())return(await r(()=>import("./client-db.ef9755da.js"),["./client-db.ef9755da.js","./entry.02a49739.js","./utils.27bb479c.js","./ContentQuery.99c7d42c.js","./asyncData.7b6388df.js","./index.68c44503.js"],import.meta.url).then(l=>l.generateNavigation))(o);const a=await $fetch(u,{method:"GET",responseType:"json",params:e.experimental.stripQueryParameters?void 0:{_params:w(o),previewToken:M("previewToken").value}});if(typeof a=="string"&&a.startsWith("<!DOCTYPE html>"))throw new Error("Not found");return a};const F=m({emits:{error(t){return!0}},setup(t,{slots:e,emit:o}){const u=v(null),a=T();return V(n=>{if(!a.isHydrating)return o("error",n),u.value=n,!1}),()=>{var n,_;return u.value?(n=e.error)==null?void 0:n.call(e,{error:u}):(_=e.default)==null?void 0:_.call(e)}}}),U=Object.freeze(Object.defineProperty({__proto__:null,default:F},Symbol.toStringTag,{value:"Module"})),Q=m({name:"ClientOnly",inheritAttrs:!1,props:["fallback","placeholder","placeholderTag","fallbackTag"],setup(t,{slots:e,attrs:o}){const u=v(!1);return y(()=>{u.value=!0}),a=>{var l;if(u.value)return(l=e.default)==null?void 0:l.call(e);const n=e.fallback||e.placeholder;if(n)return n();const _=a.fallback||a.placeholder||"",d=a.fallbackTag||a.placeholderTag||"span";return S(d,o,_)}}}),E=new WeakMap;function G(t){if(E.has(t))return E.get(t);const e={...t};return e.render?e.render=(o,...u)=>{var a;if(o.mounted$){const n=t.render(o,...u);return n.children===null||typeof n.children=="string"?P(n.type,n.props,n.children,n.patchFlag,n.dynamicProps,n.shapeFlag):p(n)}else return p("div",(a=o.$attrs)!=null?a:o._.attrs)}:e.template&&(e.template=`
      <template v-if="mounted$">${t.template}</template>
      <template v-else><div></div></template>
    `),e.setup=(o,u)=>{var n;const a=v(!1);return y(()=>{a.value=!0}),Promise.resolve(((n=t.setup)==null?void 0:n.call(t,o,u))||{}).then(_=>typeof _!="function"?{..._,mounted$:a}:(...d)=>{if(a.value){const l=_(...d);return l.children===null||typeof l.children=="string"?P(l.type,l.props,l.children,l.patchFlag,l.dynamicProps,l.shapeFlag):p(l)}else return p("div",u.attrs)})},E.set(t,e),e}const W=Object.freeze(Object.defineProperty({__proto__:null,default:Q,createClientOnly:G},Symbol.toStringTag,{value:"Module"})),Y=m({name:"DevOnly",setup(t,e){return()=>null}}),J=Object.freeze(Object.defineProperty({__proto__:null,default:Y},Symbol.toStringTag,{value:"Module"})),X=m({name:"ServerPlaceholder",render(){return S("div")}}),Z=Object.freeze(Object.defineProperty({__proto__:null,default:X},Symbol.toStringTag,{value:"Module"})),K=m({name:"NuxtLoadingIndicator",props:{throttle:{type:Number,default:200},duration:{type:Number,default:2e3},height:{type:Number,default:3},color:{type:String,default:"repeating-linear-gradient(to right,#00dc82 0%,#34cdfe 50%,#0047e1 100%)"}},setup(t,{slots:e}){const o=tt({duration:t.duration,throttle:t.throttle}),u=T();return u.hook("page:start",o.start),u.hook("page:finish",o.finish),b(()=>o.clear),()=>p("div",{class:"nuxt-loading-indicator",style:{position:"fixed",top:0,right:0,left:0,pointerEvents:"none",width:`${o.progress.value}%`,height:`${t.height}px`,opacity:o.isLoading.value?1:0,background:t.color,backgroundSize:`${100/o.progress.value*100}% auto`,transition:"width 0.1s, height 0.4s, opacity 0.4s",zIndex:999999}},e)}});function tt(t){const e=v(0),o=v(!1),u=A(()=>1e4/t.duration);let a=null,n=null;function _(){l(),e.value=0,o.value=!0,t.throttle?n=setTimeout(c,t.throttle):c()}function d(){e.value=100,I()}function l(){clearInterval(a),clearTimeout(n),a=null,n=null}function L(D){e.value=Math.min(100,e.value+D)}function I(){l(),setTimeout(()=>{o.value=!1,setTimeout(()=>{e.value=0},400)},500)}function c(){a=setInterval(()=>{L(u.value)},100)}return{progress:e,isLoading:o,start:_,finish:d,clear:l}}const et=Object.freeze(Object.defineProperty({__proto__:null,default:K},Symbol.toStringTag,{value:"Module"})),rt=t=>Object.fromEntries(Object.entries(t).filter(([,e])=>e!==void 0)),f=(t,e)=>(o,u)=>(H(()=>t({...rt(o),...u.attrs},u)),()=>{var a,n;return e?(n=(a=u.slots).default)==null?void 0:n.call(a):null}),h={accesskey:String,autocapitalize:String,autofocus:{type:Boolean,default:void 0},class:String,contenteditable:{type:Boolean,default:void 0},contextmenu:String,dir:String,draggable:{type:Boolean,default:void 0},enterkeyhint:String,exportparts:String,hidden:{type:Boolean,default:void 0},id:String,inputmode:String,is:String,itemid:String,itemprop:String,itemref:String,itemscope:String,itemtype:String,lang:String,nonce:String,part:String,slot:String,spellcheck:{type:Boolean,default:void 0},style:String,tabindex:String,title:String,translate:String},it=m({name:"NoScript",inheritAttrs:!1,props:{...h,title:String,body:Boolean,renderPriority:[String,Number]},setup:f((t,{slots:e})=>{var a;const o={...t},u=(((a=e.default)==null?void 0:a.call(e))||[]).filter(({children:n})=>n).map(({children:n})=>n).join("");return u&&(o.children=u),{noscript:[o]}})}),ot=m({name:"Link",inheritAttrs:!1,props:{...h,as:String,crossorigin:String,disabled:Boolean,fetchpriority:String,href:String,hreflang:String,imagesizes:String,imagesrcset:String,integrity:String,media:String,prefetch:{type:Boolean,default:void 0},referrerpolicy:String,rel:String,sizes:String,title:String,type:String,methods:String,target:String,body:Boolean,renderPriority:[String,Number]},setup:f(t=>({link:[t]}))}),nt=m({name:"Base",inheritAttrs:!1,props:{...h,href:String,target:String},setup:f(t=>({base:t}))}),at=m({name:"Title",inheritAttrs:!1,setup:f((t,{slots:e})=>{var u,a,n;return{title:((n=(a=(u=e.default)==null?void 0:u.call(e))==null?void 0:a[0])==null?void 0:n.children)||null}})}),ut=m({name:"Meta",inheritAttrs:!1,props:{...h,charset:String,content:String,httpEquiv:String,name:String,body:Boolean,renderPriority:[String,Number]},setup:f(t=>{const e={...t};return e.httpEquiv&&(e["http-equiv"]=e.httpEquiv,delete e.httpEquiv),{meta:[e]}})}),lt=m({name:"Style",inheritAttrs:!1,props:{...h,type:String,media:String,nonce:String,title:String,scoped:{type:Boolean,default:void 0},body:Boolean,renderPriority:[String,Number]},setup:f((t,{slots:e})=>{var a,n,_;const o={...t},u=(_=(n=(a=e.default)==null?void 0:a.call(e))==null?void 0:n[0])==null?void 0:_.children;return u&&(o.children=u),{style:[o]}})}),_t=m({name:"Head",inheritAttrs:!1,setup:(t,e)=>()=>{var o,u;return(u=(o=e.slots).default)==null?void 0:u.call(o)}}),mt=m({name:"Html",inheritAttrs:!1,props:{...h,manifest:String,version:String,xmlns:String,renderPriority:[String,Number]},setup:f(t=>({htmlAttrs:t}),!0)}),dt=m({name:"Body",inheritAttrs:!1,props:{...h,renderPriority:[String,Number]},setup:f(t=>({bodyAttrs:t}),!0)}),s=Object.freeze(Object.defineProperty({__proto__:null,NoScript:it,Link:ot,Base:nt,Title:at,Meta:ut,Style:lt,Head:_t,Html:mt,Body:dt},Symbol.toStringTag,{value:"Module"}));i(()=>r(()=>import("./ContactInfo.3fb45849.js"),["./ContactInfo.3fb45849.js","./entry.02a49739.js","./TheTechnologist.5ddf8a05.css"],import.meta.url).then(t=>t.default||t));i(()=>r(()=>import("./TheAttorney.77973cd1.js"),["./TheAttorney.77973cd1.js","./entry.02a49739.js","./TheTechnologist.5ddf8a05.css"],import.meta.url).then(t=>t.default||t));i(()=>r(()=>import("./TheBellyButton.177d3f9b.js"),["./TheBellyButton.177d3f9b.js","./entry.02a49739.js","./TheTechnologist.5ddf8a05.css"],import.meta.url).then(t=>t.default||t));i(()=>r(()=>import("./TheHusband.34fe1219.js"),["./TheHusband.34fe1219.js","./entry.02a49739.js","./TheTechnologist.5ddf8a05.css"],import.meta.url).then(t=>t.default||t));i(()=>r(()=>import("./TheIntro.8782f24b.js"),["./TheIntro.8782f24b.js","./entry.02a49739.js","./TheTechnologist.5ddf8a05.css"],import.meta.url).then(t=>t.default||t));i(()=>r(()=>import("./TheProblemSolver.80d38bff.js"),["./TheProblemSolver.80d38bff.js","./entry.02a49739.js","./TheTechnologist.5ddf8a05.css"],import.meta.url).then(t=>t.default||t));i(()=>r(()=>import("./TheTechnologist.99194089.js"),["./TheTechnologist.99194089.js","./entry.02a49739.js","./TheTechnologist.5ddf8a05.css"],import.meta.url).then(t=>t.default||t));i(()=>r(()=>import("./Columns.8f804676.js"),["./Columns.8f804676.js","./LeftCol.a8e125a1.js","./entry.02a49739.js","./Columns.ebbe0a2d.css"],import.meta.url).then(t=>t.default||t));i(()=>r(()=>import("./LeftCol.a8e125a1.js"),["./LeftCol.a8e125a1.js","./entry.02a49739.js"],import.meta.url).then(t=>t.default||t));i(()=>r(()=>import("./Columns.ea9868d8.js"),["./Columns.ea9868d8.js","./LeftCol.e2bc0228.js","./entry.02a49739.js","./RightCol.954d6450.js","./Header.0b4c9f70.css"],import.meta.url).then(t=>t.default||t));i(()=>r(()=>import("./Header.65211cd5.js"),["./Header.65211cd5.js","./entry.02a49739.js","./Header.0b4c9f70.css"],import.meta.url).then(t=>t.default||t));i(()=>r(()=>import("./LeftCol.e2bc0228.js"),["./LeftCol.e2bc0228.js","./entry.02a49739.js"],import.meta.url).then(t=>t.default||t));i(()=>r(()=>import("./RightCol.954d6450.js"),["./RightCol.954d6450.js","./entry.02a49739.js","./Header.0b4c9f70.css"],import.meta.url).then(t=>t.default||t));i(()=>r(()=>import("./ContentDoc.aeac89c4.js"),["./ContentDoc.aeac89c4.js","./entry.02a49739.js","./composables.7d3721cf.js","./ContentRenderer.1c034a60.js","./ContentRendererMarkdown.ff217d56.js","./index.68c44503.js","./ContentQuery.99c7d42c.js","./asyncData.7b6388df.js","./utils.27bb479c.js"],import.meta.url).then(t=>t.default||t));i(()=>r(()=>import("./ContentList.e8ca5a85.js"),["./ContentList.e8ca5a85.js","./ContentQuery.99c7d42c.js","./entry.02a49739.js","./asyncData.7b6388df.js","./utils.27bb479c.js"],import.meta.url).then(t=>t.default||t));i(()=>r(()=>Promise.resolve().then(()=>st),void 0,import.meta.url).then(t=>t.default||t));i(()=>r(()=>import("./ContentQuery.99c7d42c.js").then(t=>t.C),["./ContentQuery.99c7d42c.js","./entry.02a49739.js","./asyncData.7b6388df.js","./utils.27bb479c.js"],import.meta.url).then(t=>t.default||t));i(()=>r(()=>import("./ContentRenderer.1c034a60.js"),["./ContentRenderer.1c034a60.js","./ContentRendererMarkdown.ff217d56.js","./entry.02a49739.js","./index.68c44503.js"],import.meta.url).then(t=>t.default||t));i(()=>r(()=>import("./ContentRendererMarkdown.ff217d56.js"),["./ContentRendererMarkdown.ff217d56.js","./entry.02a49739.js","./index.68c44503.js"],import.meta.url).then(t=>t.default||t));i(()=>r(()=>import("./ContentSlot.d75dccd0.js"),["./ContentSlot.d75dccd0.js","./utils.27bb479c.js","./entry.02a49739.js"],import.meta.url).then(t=>t.default||t));i(()=>r(()=>import("./DocumentDrivenEmpty.56d57c70.js"),["./DocumentDrivenEmpty.56d57c70.js","./entry.02a49739.js"],import.meta.url).then(t=>t.default||t));i(()=>r(()=>import("./DocumentDrivenNotFound.848368dd.js"),["./DocumentDrivenNotFound.848368dd.js","./entry.02a49739.js"],import.meta.url).then(t=>t.default||t));i(()=>r(()=>import("./Markdown.98a2e04f.js"),["./Markdown.98a2e04f.js","./ContentSlot.d75dccd0.js","./utils.27bb479c.js","./entry.02a49739.js"],import.meta.url).then(t=>t.default||t));i(()=>r(()=>import("./ProseA.7a5887c0.js"),["./ProseA.7a5887c0.js","./entry.02a49739.js"],import.meta.url).then(t=>t.default||t));i(()=>r(()=>import("./ProseBlockquote.343ede90.js"),["./ProseBlockquote.343ede90.js","./entry.02a49739.js"],import.meta.url).then(t=>t.default||t));i(()=>r(()=>import("./ProseCode.6c520e19.js"),["./ProseCode.6c520e19.js","./entry.02a49739.js","./ProseCode.e63e49c6.css"],import.meta.url).then(t=>t.default||t));i(()=>r(()=>import("./ProseCodeInline.3b298462.js"),["./ProseCodeInline.3b298462.js","./entry.02a49739.js"],import.meta.url).then(t=>t.default||t));i(()=>r(()=>import("./ProseEm.fd0bbe8b.js"),["./ProseEm.fd0bbe8b.js","./entry.02a49739.js"],import.meta.url).then(t=>t.default||t));i(()=>r(()=>import("./ProseH1.4054a39e.js"),["./ProseH1.4054a39e.js","./entry.02a49739.js"],import.meta.url).then(t=>t.default||t));i(()=>r(()=>import("./ProseH2.b695e21a.js"),["./ProseH2.b695e21a.js","./entry.02a49739.js"],import.meta.url).then(t=>t.default||t));i(()=>r(()=>import("./ProseH3.53b1321c.js"),["./ProseH3.53b1321c.js","./entry.02a49739.js"],import.meta.url).then(t=>t.default||t));i(()=>r(()=>import("./ProseH4.c0073187.js"),["./ProseH4.c0073187.js","./entry.02a49739.js"],import.meta.url).then(t=>t.default||t));i(()=>r(()=>import("./ProseH5.ef9e8d42.js"),["./ProseH5.ef9e8d42.js","./entry.02a49739.js"],import.meta.url).then(t=>t.default||t));i(()=>r(()=>import("./ProseH6.a32eabd9.js"),["./ProseH6.a32eabd9.js","./entry.02a49739.js"],import.meta.url).then(t=>t.default||t));i(()=>r(()=>import("./ProseHr.03a3251d.js"),["./ProseHr.03a3251d.js","./entry.02a49739.js"],import.meta.url).then(t=>t.default||t));i(()=>r(()=>import("./ProseImg.7b25bb39.js"),["./ProseImg.7b25bb39.js","./entry.02a49739.js"],import.meta.url).then(t=>t.default||t));i(()=>r(()=>import("./ProseLi.377b1724.js"),["./ProseLi.377b1724.js","./entry.02a49739.js"],import.meta.url).then(t=>t.default||t));i(()=>r(()=>import("./ProseOl.aec6e299.js"),["./ProseOl.aec6e299.js","./entry.02a49739.js"],import.meta.url).then(t=>t.default||t));i(()=>r(()=>import("./ProseP.972889f7.js"),["./ProseP.972889f7.js","./entry.02a49739.js"],import.meta.url).then(t=>t.default||t));i(()=>r(()=>import("./ProseStrong.ac6147c1.js"),["./ProseStrong.ac6147c1.js","./entry.02a49739.js"],import.meta.url).then(t=>t.default||t));i(()=>r(()=>import("./ProseTable.7b71dec3.js"),["./ProseTable.7b71dec3.js","./entry.02a49739.js"],import.meta.url).then(t=>t.default||t));i(()=>r(()=>import("./ProseTbody.a7c71ae7.js"),["./ProseTbody.a7c71ae7.js","./entry.02a49739.js"],import.meta.url).then(t=>t.default||t));i(()=>r(()=>import("./ProseTd.ac49878e.js"),["./ProseTd.ac49878e.js","./entry.02a49739.js"],import.meta.url).then(t=>t.default||t));i(()=>r(()=>import("./ProseTh.7fd88082.js"),["./ProseTh.7fd88082.js","./entry.02a49739.js"],import.meta.url).then(t=>t.default||t));i(()=>r(()=>import("./ProseThead.c1aa67a2.js"),["./ProseThead.c1aa67a2.js","./entry.02a49739.js"],import.meta.url).then(t=>t.default||t));i(()=>r(()=>import("./ProseTr.6d0ac73e.js"),["./ProseTr.6d0ac73e.js","./entry.02a49739.js"],import.meta.url).then(t=>t.default||t));i(()=>r(()=>import("./ProseUl.3c13007d.js"),["./ProseUl.3c13007d.js","./entry.02a49739.js"],import.meta.url).then(t=>t.default||t));i(()=>r(()=>import("./welcome.6fc3c824.js"),["./welcome.6fc3c824.js","./composables.7d3721cf.js","./entry.02a49739.js","./asyncData.7b6388df.js","./ContentQuery.99c7d42c.js","./utils.27bb479c.js","./ContentDoc.aeac89c4.js","./ContentRenderer.1c034a60.js","./ContentRendererMarkdown.ff217d56.js","./index.68c44503.js","./ContentList.e8ca5a85.js","./ContentSlot.d75dccd0.js","./DocumentDrivenEmpty.56d57c70.js","./DocumentDrivenNotFound.848368dd.js","./Markdown.98a2e04f.js","./ProseCode.6c520e19.js","./ProseCode.e63e49c6.css","./TheTechnologist.5ddf8a05.css","./Columns.ebbe0a2d.css","./Header.0b4c9f70.css"],import.meta.url).then(t=>t.default||t));i(()=>r(()=>import("./entry.02a49739.js").then(t=>t.Z),[],import.meta.url).then(t=>t.default||t));i(()=>r(()=>Promise.resolve().then(()=>U),void 0,import.meta.url).then(t=>t.default||t));i(()=>r(()=>Promise.resolve().then(()=>W),void 0,import.meta.url).then(t=>t.default||t));i(()=>r(()=>Promise.resolve().then(()=>J),void 0,import.meta.url).then(t=>t.default||t));i(()=>r(()=>Promise.resolve().then(()=>Z),void 0,import.meta.url).then(t=>t.default||t));i(()=>r(()=>import("./entry.02a49739.js").then(t=>t.X),[],import.meta.url).then(t=>t.default||t));i(()=>r(()=>Promise.resolve().then(()=>et),void 0,import.meta.url).then(t=>t.default||t));i(()=>r(()=>import("./entry.02a49739.js").then(t=>t.Y),[],import.meta.url).then(t=>t.default||t));i(()=>r(()=>Promise.resolve().then(()=>s),void 0,import.meta.url).then(t=>t.NoScript));i(()=>r(()=>Promise.resolve().then(()=>s),void 0,import.meta.url).then(t=>t.Link));i(()=>r(()=>Promise.resolve().then(()=>s),void 0,import.meta.url).then(t=>t.Base));i(()=>r(()=>Promise.resolve().then(()=>s),void 0,import.meta.url).then(t=>t.Title));i(()=>r(()=>Promise.resolve().then(()=>s),void 0,import.meta.url).then(t=>t.Meta));i(()=>r(()=>Promise.resolve().then(()=>s),void 0,import.meta.url).then(t=>t.Style));i(()=>r(()=>Promise.resolve().then(()=>s),void 0,import.meta.url).then(t=>t.Head));i(()=>r(()=>Promise.resolve().then(()=>s),void 0,import.meta.url).then(t=>t.Html));i(()=>r(()=>Promise.resolve().then(()=>s),void 0,import.meta.url).then(t=>t.Body));const pt=m({name:"ContentNavigation",props:{query:{type:Object,required:!1,default:void 0}},async setup(t){const{query:e}=j(t),o=A(()=>{var a;return typeof((a=e.value)==null?void 0:a.params)=="function"?e.value.params():e.value});if(!o.value&&N("dd-navigation").value){const{navigation:a}=z();return{navigation:a}}const{data:u}=await B(`content-navigation-${g(o.value)}`,()=>q(o.value));return{navigation:u}},render(t){const e=$(),{navigation:o}=t,u=_=>p(k,{to:_._path},()=>_.title),a=(_,d)=>p("ul",d?{"data-level":d}:null,_.map(l=>l.children?p("li",null,[u(l),a(l.children,d+1)]):p("li",null,u(l)))),n=_=>a(_,0);return e!=null&&e.default?e.default({navigation:o,...this.$attrs}):n(o)}}),st=Object.freeze(Object.defineProperty({__proto__:null,default:pt},Symbol.toStringTag,{value:"Module"}));export{pt as default};