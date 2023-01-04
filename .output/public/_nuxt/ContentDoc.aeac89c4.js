import{u as h,w as d,a as g,b as w,e as _,f as v,h as C,i as s}from"./entry.02a49739.js";import{u as D}from"./composables.7d3721cf.js";import S from"./ContentRenderer.1c034a60.js";import{_ as $}from"./ContentQuery.99c7d42c.js";import"./ContentRendererMarkdown.ff217d56.js";import"./index.68c44503.js";import"./asyncData.7b6388df.js";import"./utils.27bb479c.js";const a=(f,e=g())=>{const m=h(f);d(()=>h(f),(o=m)=>{if(!e.path||!o)return;const t=Object.assign({},(o==null?void 0:o.head)||{}),p=t.title||(o==null?void 0:o.title);p&&(t.title=p),t.meta=[...t.meta||[]];const u=(t==null?void 0:t.description)||(o==null?void 0:o.description);u&&t.meta.filter(n=>n.name==="description").length===0&&t.meta.push({name:"description",content:u});const r=(t==null?void 0:t.image)||(o==null?void 0:o.image);if(r&&t.meta.filter(n=>n.property==="og:image").length===0&&(typeof r=="string"&&t.meta.push({property:"og:image",content:r}),typeof r=="object")){const n=["src","secure_url","type","width","height","alt"];for(const i of n)i==="src"&&r.src?t.meta.push({property:"og:image",content:r[i]}):r[i]&&t.meta.push({property:`og:image:${i}`,content:r[i]})}w(()=>D(t))},{immediate:!0})},N=_({name:"ContentDoc",props:{tag:{type:String,required:!1,default:"div"},excerpt:{type:Boolean,default:!1},path:{type:String,required:!1,default:void 0},query:{type:Object,required:!1,default:void 0},head:{type:Boolean,required:!1,default:!0}},render(f){const e=v(),{tag:m,excerpt:c,path:o,query:t,head:p}=f,u={...t||{},path:o||(t==null?void 0:t.path)||C(g().path),find:"one"},r=(n,i)=>s("pre",null,JSON.stringify({message:"You should use slots with <ContentDoc>",slot:n,data:i},null,2));return s($,u,{default:e!=null&&e.default?({data:n,refresh:i,isPartial:y})=>{var l;return p&&a(n),(l=e.default)==null?void 0:l.call(e,{doc:n,refresh:i,isPartial:y,excerpt:c,...this.$attrs})}:({data:n})=>(p&&a(n),s(S,{value:n,excerpt:c,tag:m,...this.$attrs},{empty:i=>e!=null&&e.empty?e.empty(i):r("default",n)})),empty:n=>{var i;return((i=e==null?void 0:e.empty)==null?void 0:i.call(e,n))||s("p",null,"Document is empty, overwrite this content with #empty slot in <ContentDoc>.")},"not-found":n=>{var i;return((i=e==null?void 0:e["not-found"])==null?void 0:i.call(e,n))||s("p",null,"Document not found, overwrite this content with #not-found slot in <ContentDoc>.")}})}});export{N as default};
