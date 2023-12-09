import{r as L}from"./index-76fb7be0.js";import{j as q}from"./jsx-runtime-29545a09.js";const X={"images.ctfassets.net":"contentful","cdn.builder.io":"builder.io","images.prismic.io":"imgix","www.datocms-assets.com":"imgix","cdn.sanity.io":"imgix","images.unsplash.com":"imgix","cdn.shopify.com":"shopify","s7d1.scene7.com":"scene7","ip.keycdn.com":"keycdn","assets.caisy.io":"bunny","images.contentstack.io":"contentstack"},Y={"imgix.net":"imgix","files.wordpress.com":"wordpress","b-cdn.net":"bunny","storyblok.com":"storyblok","kc-usercontent.com":"kontent.ai","cloudinary.com":"cloudinary","kxcdn.com":"keycdn","imgeng.in":"imageengine","imagekit.io":"imagekit"},tt={"/cdn-cgi/image/":"cloudflare","/cdn-cgi/imagedelivery/":"cloudflare_images","/_next/image":"nextjs","/_next/static":"nextjs","/_vercel/image":"vercel","/is/image":"scene7","/_ipx/":"ipx","/.netlify/images":"netlify"},_=e=>{if(!e)return e;const t=Number(e);return isNaN(t)?e:Math.round(t)},u=(e,t,n,s,r)=>{n?(r&&(n=_(n)),e.searchParams.set(t,n.toString())):s&&e.searchParams.delete(t)},h=(e,t,n)=>{e.searchParams.has(t)||e.searchParams.set(t,n.toString())},S=(e,t)=>{const n=Number(e.searchParams.get(t));return isNaN(n)?void 0:n},C=e=>{const{pathname:t,search:n}=e;return`${t}${n}`},A=e=>e.hostname==="n"?C(e):e.toString(),l=(e,t)=>typeof e=="string"?new URL(e,t??"http://n/"):e,N=new Map(Object.entries(X)),et=Object.entries(Y);function rt(e){return F(e)||nt(e)}function F(e){if(typeof e=="string"&&!e.startsWith("https://"))return!1;const{hostname:t}=l(e);if(N.has(t))return N.get(t);for(const[n,s]of et)if(t.endsWith(`.${n}`))return s;return!1}function nt(e){const{pathname:t}=l(e);for(const[n,s]of Object.entries(tt))if(t.startsWith(n))return s;return!1}const st=({url:e,width:t,height:n,format:s})=>{const r=l(e);return u(r,"w",t,!0,!0),u(r,"h",n,!0,!0),u(r,"fm",s),h(r,"fit","fill"),r},it=({url:e,width:t,height:n,format:s})=>{const r=l(e);return u(r,"width",t,!0,!0),u(r,"height",n,!0,!0),u(r,"format",s),t&&n&&(h(r,"fit","cover"),h(r,"sharp","true")),r},ot=({url:e,width:t,height:n,format:s})=>{var i;const r=l(e);if(u(r,"w",t,!0,!0),u(r,"h",n,!0,!0),h(r,"fit","min"),s){r.searchParams.set("fm",s);const o=r.searchParams.get("auto");o==="format"?r.searchParams.delete("auto"):o!=null&&o.includes("format")&&r.searchParams.set("auto",o.split(",").filter(a=>a!=="format").join(","))}else r.searchParams.delete("fm"),(i=r.searchParams.get("auto"))!=null&&i.includes("format")||r.searchParams.append("auto","format");return r},at=/(.+?)(?:_(?:(pico|icon|thumb|small|compact|medium|large|grande|original|master)|(\d*)x(\d*)))?(?:_crop_([a-z]+))?(\.[a-zA-Z]+)(\.png|\.jpg|\.webp|\.avif)?$/,ct=e=>{const t=l(e),n=t.pathname.match(at);if(!n)throw new Error("Invalid Shopify URL");const[,s,r,i,o,a,c,f]=n;t.pathname=`${s}${c}`;const m=i||t.searchParams.get("width"),d=o||t.searchParams.get("height");return t.searchParams.delete("width"),t.searchParams.delete("height"),{base:t.toString(),width:Number(m)||void 0,height:Number(d)||void 0,format:f?f.slice(1):void 0,params:{crop:a,size:r},cdn:"shopify"}},ft=({base:e,width:t,height:n,format:s,params:r})=>{const i=l(e);return u(i,"width",t,!0,!0),u(i,"height",n,!0,!0),u(i,"crop",r==null?void 0:r.crop),u(i,"format",s),i},ut=({url:e,width:t,height:n})=>{const s=ct(e);if(!s)return;const r={...s,width:t,height:n};return ft(r)},lt=({url:e,width:t,height:n})=>{const s=l(e);return u(s,"w",t,!0,!0),u(s,"h",n,!0,!0),h(s,"crop","1"),s},mt=/https?:\/\/(?<host>[^\/]+)\/(?<cloudName>[^\/]+)\/(?<assetType>image|video|raw)\/(?<deliveryType>upload|fetch|private|authenticated|sprite|facebook|twitter|youtube|vimeo)\/?(?<signature>s\-\-[a-zA-Z0-9]+\-\-)?\/?(?<transformations>(?:[^_\/]+_[^,\/]+,?)*)?\/(?:(?<version>v\d+)\/)?(?<idAndFormat>[^\s]+)$/g,dt=e=>e?Object.fromEntries(e.split(",").map(t=>t.split("_"))):{},D=({host:e,cloudName:t,assetType:n,deliveryType:s,signature:r,transformations:i={},version:o,id:a,format:c})=>{c&&(i.f=c);const f=Object.entries(i).map(([d,g])=>`${d}_${g}`).join(",");return`https://${[e,t,n,s,r,f,o,a].filter(Boolean).join("/")}`},M=e=>{const n=[...l(e).toString().matchAll(mt)];if(!n.length)throw new Error("Invalid Cloudinary URL");const s=n[0].groups||{},{transformations:r="",idAndFormat:i,...o}=s;delete s.idAndFormat;const a=i.lastIndexOf("."),c=a<0?i:i.slice(0,a),f=a<0?void 0:i.slice(a+1),{w:m,h:d,f:g,...y}=dt(r),p=g&&g!=="auto"?g:f;return{base:D({...o,id:c,transformations:y}),width:Number(m)||void 0,height:Number(d)||void 0,format:p,cdn:"cloudinary",params:{...s,id:s.deliveryType==="fetch"?i:c,format:p,transformations:y}}},gt=({base:e,width:t,height:n,format:s,params:r})=>{var a;const i=M(e.toString()),o={transformations:{},...i.params,...r,format:s||"auto"};return t&&(o.transformations.w=_(t).toString()),n&&(o.transformations.h=_(n).toString()),(a=o.transformations).c||(a.c="lfill"),D(o)},ht=({url:e,width:t,height:n,format:s="auto"})=>{var o,a;const r=M(e);if(!r)throw new Error("Invalid Cloudinary URL");if(((o=r.params)==null?void 0:o.assetType)!=="image")throw new Error("Cloudinary transformer only supports images");if((a=r.params)!=null&&a.signature)throw new Error("Cloudinary transformer does not support signed URLs");const i={...r,width:t,height:n,format:s};return gt(i)},pt=/https?:\/\/(?<host>[^\/]+)\/cdn-cgi\/image\/(?<transformations>[^\/]+)?\/(?<path>.*)$/g,$t=e=>Object.fromEntries(e.split(",").map(t=>t.split("="))),B=({host:e,transformations:t={},path:n})=>{const s=Object.entries(t).map(([i,o])=>`${i}=${o}`).join(",");return`https://${[e,"cdn-cgi","image",s,n].join("/")}`},H=e=>{const t=l(e),n=[...t.toString().matchAll(pt)];if(!n.length)throw new Error("Invalid Cloudflare URL");const s=n[0].groups||{},{transformations:r,...i}=s,{width:o,height:a,f:c,...f}=$t(r);return B({...i,transformations:f}),{base:t.toString(),width:Number(o)||void 0,height:Number(a)||void 0,format:c,cdn:"cloudflare",params:{...s,transformations:f}}},yt=({base:e,width:t,height:n,format:s,params:r})=>{var a;const i=H(e.toString()),o={transformations:{},...i.params,...r};return t&&(o.transformations.width=t==null?void 0:t.toString()),n&&(o.transformations.height=n==null?void 0:n.toString()),s&&(o.transformations.f=s==="jpg"?"jpeg":s),(a=o.transformations).fit||(a.fit="cover"),new URL(B(o))},bt=({url:e,width:t,height:n,format:s="auto"})=>{const r=H(e);if(!r)throw new Error("Invalid Cloudflare URL");const i={...r,width:t,height:n,format:s};return yt(i)},xt=({url:e,width:t,height:n})=>{const s=l(e);return u(s,"width",t,!0,!0),t&&n&&h(s,"aspect_ratio",`${t}:${n}`),s},wt=/(?<id>\/f\/\d+\/\d+x\d+\/\w+\/[^\/]+)\/?(?<modifiers>m\/?(?<crop>\d+x\d+:\d+x\d+)?\/?(?<resize>(?<flipx>\-)?(?<width>\d+)x(?<flipy>\-)?(?<height>\d+))?\/?(filters\:(?<filters>[^\/]+))?)?$/g,St=/^(?<modifiers>\/(?<crop>\d+x\d+:\d+x\d+)?\/?(?<resize>(?<flipx>\-)?(?<width>\d+)x(?<flipy>\-)?(?<height>\d+))?\/?(filters\:(?<filters>[^\/]+))?\/?)?(?<id>\/f\/.+)$/g,vt=e=>e?Object.fromEntries(e.split(":").map(t=>{if(!t)return[];const[n,s]=t.split("(");return[n,s.replace(")","")]})):{},_t=e=>{if(!e)return;const t=Object.entries(e).map(([n,s])=>`${n}(${s??""})`);if(t.length!==0)return`filters:${t.join(":")}`},Pt=e=>{const t=l(e),n=t.hostname==="img2.storyblok.com"?St:wt,[s]=t.pathname.matchAll(n);if(!s||!s.groups)throw new Error("Invalid Storyblok URL");const{id:r,crop:i,width:o,height:a,filters:c,flipx:f,flipy:m}=s.groups,{format:d,...g}=vt(c);return t.hostname==="img2.storyblok.com"&&(t.hostname="a.storyblok.com"),{base:t.origin+r,width:Number(o)||void 0,height:Number(a)||void 0,format:d,params:{crop:i,filters:g,flipx:f,flipy:m},cdn:"storyblok"}},jt=({base:e,width:t=0,height:n=0,format:s,params:r={}})=>{const{crop:i,filters:o,flipx:a="",flipy:c=""}=r,f=`${a}${t}x${c}${n}`;return new URL([e,"m",i,f,_t(o),s].filter(Boolean).join("/"))},It=({url:e,width:t,height:n,format:s})=>{const r=Pt(e);if(r)return s&&(r.params||(r.params={filters:{}}),r.params.filters||(r.params.filters={}),r.params.filters.format=s),jt({...r,width:t,height:n})},Ut=({url:e,width:t,height:n,format:s})=>{const r=l(e);return u(r,"w",t,!0,!0),u(r,"h",n,!0,!0),u(r,"fm",s,!0),t&&n&&h(r,"fit","crop"),r},W=e=>{const n=l(e).searchParams.get("url");if(!n||!n.startsWith("http"))return!1;const s=F(n);return s?{cdn:s,url:n}:!1},Ot=({base:e,width:t,params:{quality:n=75,root:s="_vercel"}={}})=>{const r=new URL("http://n");return r.pathname=`/${s}/image`,r.searchParams.set("url",e.toString()),u(r,"w",t,!1,!0),h(r,"q",n),C(r)},K=({url:e,width:t,cdn:n})=>{const s=l(e),r=s.pathname.startsWith("/_next/image")||s.pathname.startsWith("/_vercel/image"),i=r?s.searchParams.get("url"):e.toString();if(i)return u(s,"w",t,!0,!0),r?A(s):Ot({base:i,width:t,params:{root:n==="nextjs"?"_next":"_vercel"}})},Et=e=>K({...e,cdn:"nextjs"}),Nt=({url:e,width:t,height:n,format:s})=>{const r=l(e);return u(r,"wid",t,!0,!0),u(r,"hei",n,!0,!0),u(r,"fmt",s,!0),u(r,"qlt",S(r,"qlt"),!0),u(r,"scl",S(r,"scl"),!0),h(r,"fit","crop"),!t&&!n&&h(r,"scl",1),r},Wt=({url:e,width:t,height:n,format:s})=>{const r=l(e);return u(r,"width",t,!0,!0),u(r,"height",n,!0,!0),u(r,"format",s,!0),u(r,"quality",S(r,"quality"),!0),h(r,"enlarge",0),r},Rt=({url:e,width:t,height:n,format:s})=>{const r=l(e);return u(r,"width",t,!0,!0),u(r,"height",n,!0,!0),u(r,"format",s),u(r,"quality",S(r,"quality"),!0),r},P={width:"w",height:"h",autoWidthWithFallback:"w_auto",auto_width_fallback:"w_auto",scaleToScreenWidth:"pc",scale_to_screen_width:"pc",crop:"cr",outputFormat:"f",format:"f",fit:"m",fitMethod:"m",compression:"cmpr",sharpness:"s",rotate:"r",inline:"in",keepMeta:"meta",keep_meta:"meta",noOptimization:"pass",no_optimization:"pass",force_download:"dl",max_device_pixel_ratio:"maxdpr",maxDevicePixelRatio:"maxdpr"};function kt(e){return Object.keys(P).find(s=>P[s]===e)||""}function Tt(e){let t=e.toString(),n=[];if(t){let s=t.split("imgeng=");s.length>1&&(n=s[1].split("/"))}return n}function zt(e){let t=e.toString(),n="";if(t){let s=t.split("imgeng=");s.length>1?n=s[0].slice(0,-1):n=t}return n}const Lt=({url:e,width:t,height:n,format:s})=>{const r=l(e),i=zt(r);let o={};const a=r.toString()===i?[]:Tt(r);a.length&&(o=Ft(a)),t&&(o.width=t),n&&(o.height=n),s&&(o.format=s),o.hasOwnProperty("fit")||(o={...o,fit:"cropbox"});let c=qt(o),f=Ct(c),m=f===""?"":i.includes("?")?"&":"?";return`${i}${m}${f}`};function qt(e){return Object.entries(e).reduce((t,[n,s])=>t+At(n,s),"")}function Ct(e){return e&&e!==""?`imgeng=${e}`:""}function At(e,t){let n=P[e];return n&&(t||t===0)?`/${n}_${t}`:""}function Ft(e){let t={};return e.forEach(n=>{let s=n.split("_");if(s.length>1){let r=s[0],i=s[1],o=kt(r);o&&(t[o]=i)}}),t}const Dt=({url:e,width:t,height:n,format:s})=>{const r=l(e);return u(r,"width",t,!0,!0),u(r,"height",n,!0,!0),u(r,"format",s),r.searchParams.has("format")||h(r,"auto","webp"),t&&n&&h(r,"fit","crop"),r},Mt=/https?:\/\/(?<host>[^\/]+)\/cdn-cgi\/imagedelivery\/(?<accountHash>[^\/]+)\/(?<imageId>[^\/]+)\/*(?<transformations>[^\/]+)*$/g,Bt=e=>{var t;return Object.fromEntries(((t=e==null?void 0:e.split(","))==null?void 0:t.map(n=>n.split("=")))??[])},Ht=({host:e,accountHash:t,transformations:n={},imageId:s})=>{const r=Object.entries(n).map(([o,a])=>`${o}=${a}`).join(",");return`https://${[e,"cdn-cgi","imagedelivery",t,s,r].join("/")}`},V=e=>{const t=l(e),n=[...t.toString().matchAll(Mt)];if(!n.length)throw new Error("Invalid Cloudflare Images URL");const s=n[0].groups||{},{transformations:r,...i}=s,{w:o,h:a,f:c,...f}=Bt(r);return{base:t.toString(),width:Number(o)||void 0,height:Number(a)||void 0,format:c,cdn:"cloudflare_images",params:{...i,transformations:f}}},Kt=({base:e,width:t,height:n,format:s,params:r})=>{var a;const i=V(e.toString()),o={transformations:{},...i.params,...r};return t&&(o.transformations.w=t==null?void 0:t.toString()),n&&(o.transformations.h=n==null?void 0:n.toString()),s&&(o.transformations.f=s),(a=o.transformations).fit||(a.fit="cover"),new URL(Ht(o))},Vt=({url:e,width:t,height:n,format:s="auto"})=>{const r=V(e);if(!r)throw new Error("Invalid Cloudflare Images URL");const i={...r,width:t,height:n,format:s};return Kt(i)},Zt=e=>{const t=l(e),[n,...s]=t.pathname.split("/").slice(1),r=Object.fromEntries(n.split(",").map(i=>{const[o,a]=i.split("_");return[o,a]}));if(r.s){const[i,o]=r.s.split("x");r.w||(r.w=i),r.h||(r.h=o)}return{base:s.join("/"),width:Number(r.w)||void 0,height:Number(r.h)||void 0,quality:Number(r.q)||void 0,format:r.f||"auto",params:r,cdn:"ipx"}},R=({base:e,width:t,height:n,format:s,params:r})=>{const i=(r==null?void 0:r.modifiers)??{};t&&n?i.s=`${t}x${n}`:t?i.w=`${t}`:n&&(i.h=`${n}`),s&&(i.f=s);const o=r!=null&&r.base.endsWith("/")?r==null?void 0:r.base:`${r==null?void 0:r.base}/`,a=Object.entries(i).map(([m,d])=>`${m}_${d}`).join(","),c=e.toString(),f=c.startsWith("/")?c.slice(1):c;return`${o}${a}/${f}`},Jt=e=>{var o,a,c,f;const t=String(e.url),n=l(t),s=n.pathname.startsWith("/_ipx")&&n.hostname!=="n"?`${n.origin}/_ipx`:"/_ipx",r=((a=(o=e.cdnOptions)==null?void 0:o.ipx)==null?void 0:a.base)??s;if(r&&r!=="/"&&t.startsWith(r)){const m=Zt(t.replace(r,""));return R({...m,...e,params:{...(c=e.cdnOptions)==null?void 0:c.ipx,base:r}})}return R({...e,base:t,params:{...(f=e.cdnOptions)==null?void 0:f.ipx,base:r}})},Gt=new Set(["w","h","q","fm","url","width","height","quality"]),Qt=e=>{const t=l(e),n=Number(t.searchParams.get("w")??t.searchParams.get("width"))??void 0,s=Number(t.searchParams.get("h")??t.searchParams.get("height"))??void 0,r=Number(t.searchParams.get("q")??t.searchParams.get("quality"))||void 0,i=t.searchParams.get("fm")||void 0,o=t.searchParams.get("url")||"",a={quality:r};return t.searchParams.forEach((c,f)=>{Gt.has(f)||(a[f]=c)}),t.search="",{base:o,width:n,height:s,format:i,params:a,cdn:"netlify"}},k=({base:e,width:t,height:n,format:s,params:{site:r,quality:i,...o}={}})=>{const a=l("/.netlify/images",r);return Object.entries(o).forEach(([c,f])=>u(a,c,f)),u(a,"q",i,!0,!0),u(a,"w",t,!0,!0),u(a,"h",n,!0,!0),u(a,"fm",s),h(a,"fit","cover"),a.searchParams.set("url",e.toString()),A(a)},Xt=e=>{var n,s;const t=l(e.url);if(t.pathname.startsWith("/.netlify/images")){const{params:r,base:i,format:o}=Qt(t);return k({base:i,format:o,...e,params:{...r,site:t.hostname==="n"?void 0:t.origin}})}return k({...e,base:e.url,params:{site:(s=(n=e.cdnOptions)==null?void 0:n.netlify)==null?void 0:s.site}})},Yt=e=>(e.searchParams.get("tr")||"").split(",").reduce((n,s)=>{const[r,i]=s.split("-");return n[r]=i,n},{}),te=({url:e,width:t,height:n,format:s})=>{const r=l(e),i=Yt(r);i.w=t&&Math.round(t),i.h=n&&Math.round(n),i.fm||(i.fm="auto"),s&&(i.fm=s);const o=Object.keys(i).map(a=>{const c=i[a];if(c)return`${a}-${c}`}).filter(a=>a).join(",");return r.searchParams.set("tr",o),r},T={vercel:W,nextjs:W};function ee(e,t){if(!(t in T))return!1;const n=T[t];return n?n(e):!1}function j(e,t){const n=rt(e)||t;if(!n)return!1;const s=ee(e,n);return s||{cdn:n,url:e}}const I=e=>({imgix:ot,contentful:st,"builder.io":it,shopify:ut,wordpress:lt,cloudinary:ht,bunny:xt,storyblok:It,cloudflare:bt,vercel:K,nextjs:Et,scene7:Nt,"kontent.ai":Ut,keycdn:Wt,directus:Rt,imageengine:Lt,contentstack:Dt,cloudflare_images:Vt,ipx:Jt,netlify:Xt,imagekit:te})[e];var Z=(e,t)=>{if(!(!e||!t))switch(t){case"constrained":return`(min-width: ${e}px) ${e}px, 100vw`;case"fixed":return`${e}px`;case"fullWidth":return"100vw";default:return}},x=e=>e||e===0?`${e}px`:void 0,re=({width:e,height:t,aspectRatio:n,layout:s,objectFit:r="cover",background:i})=>{const o=[["object-fit",r]];return i!=null&&i.startsWith("https:")||i!=null&&i.startsWith("http:")||i!=null&&i.startsWith("data:")?(o.push(["background-image",`url(${i})`]),o.push(["background-size","cover"]),o.push(["background-repeat","no-repeat"])):o.push(["background",i]),s==="fixed"&&(o.push(["width",x(e)]),o.push(["height",x(t)])),s==="constrained"&&(o.push(["max-width",x(e)]),o.push(["max-height",x(t)]),o.push(["aspect-ratio",n?`${n}`:void 0]),o.push(["width","100%"])),s==="fullWidth"&&(o.push(["width","100%"]),o.push(["aspect-ratio",n?`${n}`:void 0]),o.push(["height",x(t)])),Object.fromEntries(o.filter(([,a])=>a))},ne=[6016,5120,4480,3840,3200,2560,2048,1920,1668,1280,1080,960,828,750,640],z=24,se=({width:e,layout:t,resolutions:n=ne})=>{if(t==="fullWidth")return n;if(!e)return[];const s=e*2;return t==="fixed"?[e,s]:t==="constrained"?[e,s,...n.filter(r=>r<s)]:[]},J=({src:e,width:t,layout:n="constrained",height:s,aspectRatio:r,breakpoints:i,cdn:o,transformer:a,format:c})=>{const f=j(e,o);if(f&&!a&&(a=I(f.cdn)),!!a)return i||(i=se({width:t,layout:n})),i.sort((m,d)=>m-d).map(m=>{let d;s&&r&&(d=Math.round(m/r));const g=a({url:f?f.url:e,width:m,height:d,format:c});return g?`${g.toString()} ${m}w`:""}).join(`,
`)};function G({width:e,height:t,priority:n,layout:s="constrained",aspectRatio:r,...i}){return e=e&&Number(e)||void 0,t=t&&Number(t)||void 0,n?(i.loading||(i.loading="eager"),i.fetchpriority||(i.fetchpriority="high")):(i.loading||(i.loading="lazy"),i.decoding||(i.decoding="async")),i.alt===""&&(i.role||(i.role="presentation")),r?e?t||(t=e/r):t&&(e=t*r):e&&t&&(r=e/t),{width:e,height:t,aspectRatio:r,layout:s,...i}}function ie(e){let{src:t,cdn:n,transformer:s,background:r,layout:i,objectFit:o,breakpoints:a,width:c,height:f,aspectRatio:m,unstyled:d,...g}=G(e);const y=t?j(t,n):void 0;let p=t;if(y&&(p=y.url,s||(s=I(y.cdn))),s&&r==="auto"){const $=m?Math.round(z/m):void 0,w=s({url:p,width:z,height:$});w&&(r=w.toString())}const b={width:c,height:f,aspectRatio:m,layout:i,objectFit:o,background:r};if(g.sizes||(g.sizes=Z(c,i)),d||(g.style={...re(b),...g.style}),s){g.srcset=J({src:p,width:c,height:f,aspectRatio:m,layout:i,breakpoints:a,transformer:s,cdn:n});const $=s({url:p,width:c,height:f});$&&(p=$),(i==="fullWidth"||i==="constrained")&&(c=void 0,f=void 0)}return{...g,src:p==null?void 0:p.toString(),width:c,height:f}}function oe(e){return e?e.startsWith("image/")?{format:e.slice(6),mimeType:e}:{format:e,mimeType:`image/${e==="jpg"?"jpeg":e}`}:{}}function ae({media:e,type:t,...n}){let{src:s,cdn:r,transformer:i,layout:o,breakpoints:a,width:c,height:f,aspectRatio:m,sizes:d,loading:g,decoding:y,...p}=G(n);const b=s?j(s,r):void 0;let $=s;if(b&&($=b.url,i||(i=I(b.cdn))),!i)return{};const{format:w,mimeType:O}=oe(t);d||(d=Z(c,o));const Q=J({src:$,width:c,height:f,aspectRatio:m,layout:o,breakpoints:a,transformer:i,cdn:r,format:w}),E=i({url:$,width:c,height:f});E&&($=E);const v={...p,sizes:d,srcset:Q};return e&&(v.media=e),O&&(v.type=O),v}var ce=new Set(["style"]),fe={srcset:"srcSet",fetchpriority:"fetchPriority"},ue=e=>e.startsWith("data-")||e.startsWith("aria-")?e:fe[e]||e.replace(/-./g,t=>t[1].toUpperCase());function U(e){return Object.fromEntries(Object.entries(e).map(([t,n])=>[ue(t),ce.has(t)&&n&&typeof n!="string"?U(n):n]))}var de=L.forwardRef(function(t,n){const s=U(ie(t));return q("img",{...s,ref:n})});L.forwardRef(function(t,n){const s=U(ae(t));return q("source",{...s,ref:n})});export{de as I};