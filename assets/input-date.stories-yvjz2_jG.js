import{j as e}from"./clsx-KtS07kqv.js";import{e as W,g as E,f as R,a as k}from"./real-module-pIryxjSP.js";import{r as v}from"./index-4g5l5LRQ.js";import{$ as F,a as P,D as _}from"./date-segment-6nnfJBtd.js";import{L as O}from"./label-Uh2-_B8m.js";import"./_commonjsHelpers-4gQjN7DL.js";import"./import-ppAOho62.js";import"./import-dEUj_gQX.js";import"./import-YaVR7cVs.js";import"./import-gQu3LPhC.js";import"./utils-1S_n7jHw.js";import"./extends-dGVwEr9R.js";import"./index-XGpeoBSN.js";import"./index-jmm5gWkb.js";function q({...r},a){const{id:c,disabled:d,label:j}=r,{locale:S}=W(),C=E(a),l=F({...r,disabled:d,isDisabled:d,locale:S,createCalendar:R}),{labelProps:L,fieldProps:M}=P({...r,isDisabled:d},l,C);return e.jsxs("div",{className:"grid w-full max-w-sm items-center gap-1.5",children:[j&&e.jsx(O,{...L,htmlFor:c,children:r.label}),e.jsx("div",{...M,id:c,ref:a,className:"border-input flex h-10 w-fit rounded-md border bg-background px-3 py-2 text-sm ring-offset-background file:rounded-xl file:border-0 file:bg-primary file:px-3 file:text-sm file:font-medium file:text-primary-foreground placeholder:text-muted-foreground hover:file:bg-primary/90 focus:ring-primary focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-primary focus-visible:ring-offset-1 disabled:cursor-not-allowed disabled:opacity-50",children:l.segments.map((w,N)=>e.jsx(_,{segment:w,state:l},N))})]})}const t=v.forwardRef(q);t.displayName="InputDate";const ee={component:t,title:"Form/Input Date"},s={render:()=>e.jsx(t,{label:"My Input",id:"test-input"})},o={render:()=>e.jsx(t,{})},n={render:()=>{const[r,a]=v.useState(k("2023-10-10"));return e.jsxs("div",{className:"flex flex-col gap-4",children:[e.jsx("p",{children:r.toString()}),e.jsx(t,{hourCycle:24,value:r,onChange:a,label:"My Input",id:"test-input"})]})}},i={render:()=>e.jsx(t,{disabled:!0,placeholder:"Insert some text",label:"My Input",id:"test-input"})};var p,u,m;s.parameters={...s.parameters,docs:{...(p=s.parameters)==null?void 0:p.docs,source:{originalSource:`{
  render: () => {
    return <InputDate label="My Input" id="test-input" />;
  }
}`,...(m=(u=s.parameters)==null?void 0:u.docs)==null?void 0:m.source}}};var f,b,x;o.parameters={...o.parameters,docs:{...(f=o.parameters)==null?void 0:f.docs,source:{originalSource:`{
  render: () => {
    return <InputDate />;
  }
}`,...(x=(b=o.parameters)==null?void 0:b.docs)==null?void 0:x.source}}};var g,h,D;n.parameters={...n.parameters,docs:{...(g=n.parameters)==null?void 0:g.docs,source:{originalSource:`{
  render: () => {
    const [date, setDate] = useState<CalendarDate>(parseDate('2023-10-10'));
    return <div className="flex flex-col gap-4">
        <p>{date.toString()}</p>
        <InputDate hourCycle={24} value={date} onChange={setDate} label="My Input" id="test-input" />
      </div>;
  }
}`,...(D=(h=n.parameters)==null?void 0:h.docs)==null?void 0:D.source}}};var $,I,y;i.parameters={...i.parameters,docs:{...($=i.parameters)==null?void 0:$.docs,source:{originalSource:`{
  render: () => {
    return <InputDate disabled placeholder="Insert some text" label="My Input" id="test-input" />;
  }
}`,...(y=(I=i.parameters)==null?void 0:I.docs)==null?void 0:y.source}}};const re=["WithLabel","WithoutLabel","Controlled","Disabled"];export{n as Controlled,i as Disabled,s as WithLabel,o as WithoutLabel,re as __namedExportsOrder,ee as default};
