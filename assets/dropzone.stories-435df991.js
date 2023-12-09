import{j as r,a as f}from"./jsx-runtime-29545a09.js";import{r as p}from"./index-76fb7be0.js";import{B as w}from"./index-ac2f2f2d.js";import{C as T}from"./chip-20882728.js";import{I as F}from"./input-05212480.js";import{L as j}from"./label-4f316bdd.js";import{a as _,T as z,b as I,c as V}from"./tooltip-1081c591.js";import{c as L}from"./utils-636fbba8.js";import{c as y}from"./createLucideIcon-de0f8b79.js";import"./_commonjsHelpers-de833af9.js";import"./index-a011252c.js";import"./spinner-8a72c79d.js";import"./extends-98964cd2.js";import"./index-e2809c0a.js";import"./index-d3ea75b5.js";import"./index-7f80cad2.js";import"./index-90d601c3.js";import"./index-043160a2.js";import"./index-ef27adad.js";import"./index-57a346df.js";import"./index-1f3e1a8a.js";import"./index-748042b3.js";/**
 * @license lucide-react v0.293.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const W=y("DownloadCloud",[["path",{d:"M4 14.899A7 7 0 1 1 15.71 8h1.79a4.5 4.5 0 0 1 2.5 8.242",key:"1pljnt"}],["path",{d:"M12 12v9",key:"192myk"}],["path",{d:"m8 17 4 4 4-4",key:"1ul180"}]]);/**
 * @license lucide-react v0.293.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const q=y("Image",[["rect",{width:"18",height:"18",x:"3",y:"3",rx:"2",ry:"2",key:"1m3agn"}],["circle",{cx:"9",cy:"9",r:"2",key:"af1f0g"}],["path",{d:"m21 15-3.086-3.086a2 2 0 0 0-2.828 0L6 21",key:"1xmnt7"}]]);/**
 * @license lucide-react v0.293.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const M=y("Trash",[["path",{d:"M3 6h18",key:"d0wm0j"}],["path",{d:"M19 6v14c0 1-1 2-2 2H7c-1 0-2-1-2-2V6",key:"4alrt4"}],["path",{d:"M8 6V4c0-1 1-2 2-2h4c1 0 2 1 2 2v2",key:"v07s0e"}]]);function O(e,a,n){let s=!0;return a&&e.size>a&&(s=!1),n&&(s=n.split(",").map(l=>l.trim()).some(l=>e.type.match(l))),s}function R(e){return{file:e,id:crypto.randomUUID(),src:URL.createObjectURL(e)}}function S({maxSize:e,accept:a}){const[n,s]=p.useState([]),i=p.useCallback(t=>{const o=[];for(const c of t)O(c,e,a)&&o.push(R(c));s(c=>[...c,...o])},[e,a]),l=t=>{const{types:o}=t.dataTransfer;o.indexOf("Files")>-1&&t.preventDefault()},g=p.useCallback(t=>{t.preventDefault(),i(t.dataTransfer.files)},[]),d=p.useCallback(t=>{t.preventDefault();const{files:o}=t.target;o&&i(o)},[]);return{files:n,onDrop:g,onChange:d,onDelete:t=>{s(o=>[...o.filter(c=>c.id!==t.id)])},onDragOver:l}}function U({file:e,onDelete:a}){const n=e.file.type.match("image/*")?r("img",{src:e.src,alt:e.file.name,className:"h-24 w-32 rounded-md bg-fixed object-cover"}):r("div",{className:"flex h-24 w-32 items-center justify-center rounded-md bg-gray-300",children:r(q,{})});return f("div",{role:"presentation",onClick:i=>i.preventDefault(),className:"relative cursor-auto",children:[r("div",{className:"absolute right-1 top-1",children:r(w,{variant:"outline-destructive",size:"icon",className:"h-6 w-6",onClick:i=>{i.preventDefault(),a(e)},children:r(M,{size:16})})}),r("div",{className:"absolute bottom-1 left-1",children:r(_,{children:f(z,{children:[r(I,{children:r(T,{variant:"primary",className:"h-6 w-28",children:r("p",{className:"overflow-hidden text-ellipsis text-xs",children:e.file.name})})}),r(V,{side:"bottom",children:e.file.name})]})})}),n]},e.id)}function A({label:e,subTitle:a}){return f("div",{className:"flex flex-col items-center justify-center pb-6 pt-5",children:[r(W,{}),e&&r("p",{className:"mb-2 text-sm text-secondary-foreground",children:e}),a&&r("p",{className:"text-xs text-secondary-foreground/80",children:a})]})}const h=p.forwardRef(({subTitle:e,label:a,...n},s)=>{const{id:i}=n,{onDrop:l,onDragOver:g,files:d,onChange:b,onDelete:t}=S({...n});return r("div",{onDrop:l,onDragOver:g,className:"relative flex w-full items-center justify-center",children:f(j,{htmlFor:i,className:L("flex h-64 w-full cursor-pointer flex-col rounded-lg border-2 border-dashed border-secondary bg-gray-50 hover:bg-secondary/30",{"items-center justify-center":d.length===0}),children:[d.length===0?r(A,{label:a,subTitle:e}):r("div",{className:"flex flex-row gap-2 p-4",children:d.map(o=>r(U,{file:o,onDelete:t},o.id))}),r(F,{...n,ref:s,type:"file",className:"hidden",onChange:b})]})})});h.displayName="Dropzone";try{h.displayName="Dropzone",h.__docgenInfo={description:"",displayName:"Dropzone",props:{subTitle:{defaultValue:null,description:"",name:"subTitle",required:!1,type:{name:"string"}},maxSize:{defaultValue:null,description:"",name:"maxSize",required:!1,type:{name:"number"}},label:{defaultValue:null,description:"",name:"label",required:!1,type:{name:"string"}},rightComponent:{defaultValue:null,description:"",name:"rightComponent",required:!1,type:{name:"ReactNode"}},leftComponent:{defaultValue:null,description:"",name:"leftComponent",required:!1,type:{name:"ReactNode"}}}}}catch{}const de={component:h,title:"Form/Dropzone"},m={args:{label:"Drop your files here",id:"drop-files",subTitle:"We accept all files"}},u={args:{label:"Drop your files here",id:"drop-files",subTitle:"We accept only png",accept:"image/png"}};var D,v,x;m.parameters={...m.parameters,docs:{...(D=m.parameters)==null?void 0:D.docs,source:{originalSource:`{
  args: {
    label: \`Drop your files here\`,
    id: 'drop-files',
    subTitle: \`We accept all files\`
  }
}`,...(x=(v=m.parameters)==null?void 0:v.docs)==null?void 0:x.source}}};var N,C,k;u.parameters={...u.parameters,docs:{...(N=u.parameters)==null?void 0:N.docs,source:{originalSource:`{
  args: {
    label: \`Drop your files here\`,
    id: 'drop-files',
    subTitle: \`We accept only png\`,
    accept: \`image/png\`
  }
}`,...(k=(C=u.parameters)==null?void 0:C.docs)==null?void 0:k.source}}};const pe=["Default","WithSpecificFiles"];export{m as Default,u as WithSpecificFiles,pe as __namedExportsOrder,de as default};
