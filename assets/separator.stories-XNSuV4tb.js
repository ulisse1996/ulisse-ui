import{j as t}from"./clsx-KtS07kqv.js";import{_ as v}from"./extends-dGVwEr9R.js";import{r as l}from"./index-4g5l5LRQ.js";import{b as h}from"./index-XGpeoBSN.js";import{c as N}from"./utils-1S_n7jHw.js";import"./_commonjsHelpers-4gQjN7DL.js";import"./index-jmm5gWkb.js";const p="horizontal",_=["horizontal","vertical"],x=l.forwardRef((e,r)=>{const{decorative:n,orientation:a=p,...i}=e,c=u(a)?a:p,$=n?{role:"none"}:{"aria-orientation":c==="vertical"?c:void 0,role:"separator"};return l.createElement(h.div,v({"data-orientation":c},$,i,{ref:r}))});x.propTypes={orientation(e,r,n){const a=e[r],i=String(a);return a&&!u(a)?new Error(g(i,n)):null}};function g(e,r){return`Invalid prop \`orientation\` of value \`${e}\` supplied to \`${r}\`, expected one of:
  - horizontal
  - vertical

Defaulting to \`${p}\`.`}function u(e){return _.includes(e)}const T=x,o=l.forwardRef(({className:e,orientation:r="horizontal",decorative:n=!0,...a},i)=>t.jsx(T,{ref:i,decorative:n,orientation:r,className:N("shrink-0 bg-gray-400",r==="horizontal"?"h-[1px] w-full":"h-full w-[1px]",e),...a}));o.displayName="Separator";try{o.displayName="Separator",o.__docgenInfo={description:"",displayName:"Separator",props:{asChild:{defaultValue:null,description:"",name:"asChild",required:!1,type:{name:"boolean"}}}}}catch{}const z={component:o,title:"Components/Separator"},s={render:()=>t.jsxs("div",{className:"flex flex-col gap-2",children:[t.jsx("p",{children:"Text 1"}),t.jsx(o,{}),t.jsxs("div",{className:"flex flex-row gap-2",children:[t.jsx("p",{children:"Text 2"}),t.jsx(o,{orientation:"vertical",className:"h-auto"}),t.jsx("p",{children:"Text 3"})]})]})};var d,f,m;s.parameters={...s.parameters,docs:{...(d=s.parameters)==null?void 0:d.docs,source:{originalSource:`{
  render: () => {
    return <div className="flex flex-col gap-2">
        <p>Text 1</p>
        <Separator />
        <div className="flex flex-row gap-2">
          <p>Text 2</p>
          <Separator orientation="vertical" className="h-auto" />
          <p>Text 3</p>
        </div>
      </div>;
  }
}`,...(m=(f=s.parameters)==null?void 0:f.docs)==null?void 0:m.source}}};const R=["Default"];export{s as Default,R as __namedExportsOrder,z as default};
