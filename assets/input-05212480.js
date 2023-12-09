import{a as d,j as e}from"./jsx-runtime-29545a09.js";import{r as c}from"./index-76fb7be0.js";import{L as m}from"./label-4f316bdd.js";import{c as a}from"./utils-636fbba8.js";const t=c.forwardRef(({id:r,disabled:i,label:l,rightComponent:o,leftComponent:n,type:s,className:p,...u},f)=>d("div",{className:"grid w-full max-w-sm items-center gap-1.5",children:[l&&e(m,{htmlFor:r,children:l}),d("div",{className:"relative",children:[e("input",{"data-input":s,type:s,className:a("data-[input=file]:border-0 data-[input=file]:px-0 flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background file:border-0 hover:file:bg-primary/90 file:rounded-xl file:px-3 file:text-primary-foreground file:bg-primary file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-1 focus:ring-primary focus-visible:ring-primary focus-visible:ring-offset-1 disabled:cursor-not-allowed disabled:opacity-50",p),disabled:i,id:r,ref:f,...u}),n&&e("div",{className:a("absolute left-2 top-2",{"opacity-50":i}),children:n}),o&&e("div",{className:a("absolute right-2 top-2",{"opacity-50":i}),children:o})]})]}));t.displayName="Input";try{t.displayName="Input",t.__docgenInfo={description:"",displayName:"Input",props:{label:{defaultValue:null,description:"",name:"label",required:!1,type:{name:"string"}},rightComponent:{defaultValue:null,description:"",name:"rightComponent",required:!1,type:{name:"ReactNode"}},leftComponent:{defaultValue:null,description:"",name:"leftComponent",required:!1,type:{name:"ReactNode"}}}}}catch{}export{t as I};