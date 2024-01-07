import{j as e}from"./clsx-KtS07kqv.js";import{e as N,g as W,n as E}from"./real-module-pIryxjSP.js";import{r as v}from"./index-4g5l5LRQ.js";import{b as R,c as k,D as F}from"./date-segment-6nnfJBtd.js";import{L as P}from"./label-Uh2-_B8m.js";import"./_commonjsHelpers-4gQjN7DL.js";import"./import-ppAOho62.js";import"./import-dEUj_gQX.js";import"./import-YaVR7cVs.js";import"./import-gQu3LPhC.js";import"./utils-1S_n7jHw.js";import"./extends-dGVwEr9R.js";import"./index-XGpeoBSN.js";import"./index-jmm5gWkb.js";function _({...r},s){const{id:d,disabled:T,label:j}=r,{locale:S}=N(),l=R({...r,isDisabled:T,locale:S}),w=W(s),{labelProps:C,fieldProps:L}=k(r,l,w);return e.jsxs("div",{className:"grid w-full max-w-sm items-center gap-1.5",children:[j&&e.jsx(P,{...C,htmlFor:d,children:r.label}),e.jsx("div",{...L,id:d,ref:s,className:"border-input flex h-10 w-fit rounded-md border bg-background px-3 py-2 text-sm ring-offset-background file:rounded-xl file:border-0 file:bg-primary file:px-3 file:text-sm file:font-medium file:text-primary-foreground placeholder:text-muted-foreground hover:file:bg-primary/90 focus:ring-primary focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-primary focus-visible:ring-offset-1 disabled:cursor-not-allowed disabled:opacity-50",children:l.segments.map((M,D)=>e.jsx(F,{segment:M,state:l},D))})]})}const t=v.forwardRef(_);t.displayName="InputTime";const Z={component:t,title:"Form/Input Time"},n={render:()=>e.jsx(t,{label:"My Input",id:"test-input"})},o={render:()=>e.jsx(t,{})},a={render:()=>{const[r,s]=v.useState(new E(10,15));return e.jsxs("div",{className:"flex flex-col gap-4",children:[e.jsx("p",{children:r.toString()}),e.jsx(t,{hourCycle:24,value:r,onChange:s,label:"My Input",id:"test-input"})]})}},i={render:()=>e.jsx(t,{disabled:!0,placeholder:"Insert some text",label:"My Input",id:"test-input"})};var m,c,p;n.parameters={...n.parameters,docs:{...(m=n.parameters)==null?void 0:m.docs,source:{originalSource:`{
  render: () => {
    return <InputTime label="My Input" id="test-input" />;
  }
}`,...(p=(c=n.parameters)==null?void 0:c.docs)==null?void 0:p.source}}};var u,f,b;o.parameters={...o.parameters,docs:{...(u=o.parameters)==null?void 0:u.docs,source:{originalSource:`{
  render: () => {
    return <InputTime />;
  }
}`,...(b=(f=o.parameters)==null?void 0:f.docs)==null?void 0:b.source}}};var x,g,h;a.parameters={...a.parameters,docs:{...(x=a.parameters)==null?void 0:x.docs,source:{originalSource:`{
  render: () => {
    const [time, setTime] = useState<Time>(new Time(10, 15));
    return <div className="flex flex-col gap-4">
        <p>{time.toString()}</p>
        <InputTime hourCycle={24} value={time} onChange={setTime} label="My Input" id="test-input" />
      </div>;
  }
}`,...(h=(g=a.parameters)==null?void 0:g.docs)==null?void 0:h.source}}};var I,y,$;i.parameters={...i.parameters,docs:{...(I=i.parameters)==null?void 0:I.docs,source:{originalSource:`{
  render: () => {
    return <InputTime disabled placeholder="Insert some text" label="My Input" id="test-input" />;
  }
}`,...($=(y=i.parameters)==null?void 0:y.docs)==null?void 0:$.source}}};const ee=["WithLabel","WithoutLabel","Controlled","Disabled"];export{a as Controlled,i as Disabled,n as WithLabel,o as WithoutLabel,ee as __namedExportsOrder,Z as default};