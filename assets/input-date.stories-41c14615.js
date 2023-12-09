import{a as v,j as e}from"./jsx-runtime-29545a09.js";import{e as k,g as E,f as F,a as P}from"./real-module-ef20b043.js";import{r as S}from"./index-76fb7be0.js";import{$ as R,a as _,D as O}from"./date-segment-37715967.js";import{L as q}from"./label-4f316bdd.js";import"./_commonjsHelpers-de833af9.js";import"./import-b2195d95.js";import"./import-ff3a8ae5.js";import"./import-1b86da43.js";import"./import-b6061ea2.js";import"./utils-636fbba8.js";import"./extends-98964cd2.js";import"./index-e2809c0a.js";import"./index-d3ea75b5.js";function z({...r},a){const{id:c,disabled:d,label:C}=r,{locale:L}=k(),M=E(a),l=R({...r,disabled:d,isDisabled:d,locale:L,createCalendar:F}),{labelProps:w,fieldProps:N}=_({...r,isDisabled:d},l,M);return v("div",{className:"grid w-full max-w-sm items-center gap-1.5",children:[C&&e(q,{...w,htmlFor:c,children:r.label}),e("div",{...N,id:c,ref:a,className:"border-input flex h-10 w-fit rounded-md border bg-background px-3 py-2 text-sm ring-offset-background file:rounded-xl file:border-0 file:bg-primary file:px-3 file:text-sm file:font-medium file:text-primary-foreground placeholder:text-muted-foreground hover:file:bg-primary/90 focus:ring-primary focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-primary focus-visible:ring-offset-1 disabled:cursor-not-allowed disabled:opacity-50",children:l.segments.map((W,j)=>e(O,{segment:W,state:l},j))})]})}const t=S.forwardRef(z);t.displayName="InputDate";const re={component:t,title:"Form/Input Date"},o={render:()=>e(t,{label:"My Input",id:"test-input"})},s={render:()=>e(t,{})},n={render:()=>{const[r,a]=S.useState(P("2023-10-10"));return v("div",{className:"flex flex-col gap-4",children:[e("p",{children:r.toString()}),e(t,{hourCycle:24,value:r,onChange:a,label:"My Input",id:"test-input"})]})}},i={render:()=>e(t,{disabled:!0,placeholder:"Insert some text",label:"My Input",id:"test-input"})};var p,u,m;o.parameters={...o.parameters,docs:{...(p=o.parameters)==null?void 0:p.docs,source:{originalSource:`{
  render: () => {
    return <InputDate label="My Input" id="test-input" />;
  }
}`,...(m=(u=o.parameters)==null?void 0:u.docs)==null?void 0:m.source}}};var f,b,g;s.parameters={...s.parameters,docs:{...(f=s.parameters)==null?void 0:f.docs,source:{originalSource:`{
  render: () => {
    return <InputDate />;
  }
}`,...(g=(b=s.parameters)==null?void 0:b.docs)==null?void 0:g.source}}};var x,h,D;n.parameters={...n.parameters,docs:{...(x=n.parameters)==null?void 0:x.docs,source:{originalSource:`{
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
}`,...(y=(I=i.parameters)==null?void 0:I.docs)==null?void 0:y.source}}};const te=["WithLabel","WithoutLabel","Controlled","Disabled"];export{n as Controlled,i as Disabled,o as WithLabel,s as WithoutLabel,te as __namedExportsOrder,re as default};
