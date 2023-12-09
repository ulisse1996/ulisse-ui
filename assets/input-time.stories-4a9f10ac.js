import{a as v,j as e}from"./jsx-runtime-29545a09.js";import{e as j,g as k,p as E}from"./real-module-ef20b043.js";import{r as T}from"./index-76fb7be0.js";import{b as F,c as P,D as R}from"./date-segment-37715967.js";import{L as _}from"./label-4f316bdd.js";import"./_commonjsHelpers-de833af9.js";import"./import-b2195d95.js";import"./import-ff3a8ae5.js";import"./import-1b86da43.js";import"./import-b6061ea2.js";import"./utils-636fbba8.js";import"./extends-98964cd2.js";import"./index-e2809c0a.js";import"./index-d3ea75b5.js";function O({...r},o){const{id:d,disabled:S,label:w}=r,{locale:C}=j(),l=F({...r,isDisabled:S,locale:C}),L=k(o),{labelProps:M,fieldProps:D}=P(r,l,L);return v("div",{className:"grid w-full max-w-sm items-center gap-1.5",children:[w&&e(_,{...M,htmlFor:d,children:r.label}),e("div",{...D,id:d,ref:o,className:"border-input flex h-10 w-fit rounded-md border bg-background px-3 py-2 text-sm ring-offset-background file:rounded-xl file:border-0 file:bg-primary file:px-3 file:text-sm file:font-medium file:text-primary-foreground placeholder:text-muted-foreground hover:file:bg-primary/90 focus:ring-primary focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-primary focus-visible:ring-offset-1 disabled:cursor-not-allowed disabled:opacity-50",children:l.segments.map((N,W)=>e(R,{segment:N,state:l},W))})]})}const t=T.forwardRef(O);t.displayName="InputTime";const ee={component:t,title:"Form/Input Time"},n={render:()=>e(t,{label:"My Input",id:"test-input"})},a={render:()=>e(t,{})},s={render:()=>{const[r,o]=T.useState(new E(10,15));return v("div",{className:"flex flex-col gap-4",children:[e("p",{children:r.toString()}),e(t,{hourCycle:24,value:r,onChange:o,label:"My Input",id:"test-input"})]})}},i={render:()=>e(t,{disabled:!0,placeholder:"Insert some text",label:"My Input",id:"test-input"})};var c,m,p;n.parameters={...n.parameters,docs:{...(c=n.parameters)==null?void 0:c.docs,source:{originalSource:`{
  render: () => {
    return <InputTime label="My Input" id="test-input" />;
  }
}`,...(p=(m=n.parameters)==null?void 0:m.docs)==null?void 0:p.source}}};var u,f,b;a.parameters={...a.parameters,docs:{...(u=a.parameters)==null?void 0:u.docs,source:{originalSource:`{
  render: () => {
    return <InputTime />;
  }
}`,...(b=(f=a.parameters)==null?void 0:f.docs)==null?void 0:b.source}}};var g,x,h;s.parameters={...s.parameters,docs:{...(g=s.parameters)==null?void 0:g.docs,source:{originalSource:`{
  render: () => {
    const [time, setTime] = useState<Time>(new Time(10, 15));
    return <div className="flex flex-col gap-4">
        <p>{time.toString()}</p>
        <InputTime hourCycle={24} value={time} onChange={setTime} label="My Input" id="test-input" />
      </div>;
  }
}`,...(h=(x=s.parameters)==null?void 0:x.docs)==null?void 0:h.source}}};var I,y,$;i.parameters={...i.parameters,docs:{...(I=i.parameters)==null?void 0:I.docs,source:{originalSource:`{
  render: () => {
    return <InputTime disabled placeholder="Insert some text" label="My Input" id="test-input" />;
  }
}`,...($=(y=i.parameters)==null?void 0:y.docs)==null?void 0:$.source}}};const re=["WithLabel","WithoutLabel","Controlled","Disabled"];export{s as Controlled,i as Disabled,n as WithLabel,a as WithoutLabel,re as __namedExportsOrder,ee as default};
