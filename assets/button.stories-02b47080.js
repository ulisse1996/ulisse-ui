import{a as z,j as e}from"./jsx-runtime-29545a09.js";import{r as C}from"./index-76fb7be0.js";import{B as n}from"./index-ac2f2f2d.js";import{P as k}from"./phone-b14a469d.js";import"./_commonjsHelpers-de833af9.js";import"./index-a011252c.js";import"./utils-636fbba8.js";import"./spinner-8a72c79d.js";import"./createLucideIcon-de0f8b79.js";const O={component:n,title:"Components/Button"},b=["primary","secondary","destructive","outline-primary","outline-secondary","outline-destructive","flat"],r={args:{children:"Click me",variant:"primary",size:"md"},argTypes:{variant:{options:b,control:{type:"radio"}},size:{options:["sm","md","lg","icon"],control:{type:"radio"}}},render:i=>e("div",{className:"flex flex-row gap-2",children:e(n,{...i})})},o={...r},s={...r,args:{...r.args,disabled:!0}},a={...r,args:{...r.args},render:i=>{const[c,d]=C.useState(!1);return z("div",{className:"flex flex-row gap-4",children:[e(n,{onClick:()=>d(!0),...i,isLoading:c}),e(n,{onClick:()=>d(h=>!h),children:`${c?"Stop":"Start"} loading`})]})}},t={...r,args:{...r.args,size:"icon",children:e(k,{size:24})}};var p,m,l;o.parameters={...o.parameters,docs:{...(p=o.parameters)==null?void 0:p.docs,source:{originalSource:`{
  ...BaseStory
}`,...(l=(m=o.parameters)==null?void 0:m.docs)==null?void 0:l.source}}};var g,u,S;s.parameters={...s.parameters,docs:{...(g=s.parameters)==null?void 0:g.docs,source:{originalSource:`{
  ...BaseStory,
  args: {
    ...BaseStory.args,
    disabled: true
  }
}`,...(S=(u=s.parameters)==null?void 0:u.docs)==null?void 0:S.source}}};var y,B,f;a.parameters={...a.parameters,docs:{...(y=a.parameters)==null?void 0:y.docs,source:{originalSource:`{
  ...BaseStory,
  args: {
    ...BaseStory.args
  },
  render: props => {
    const [isLoading, setLoading] = useState(false);
    return <div className="flex flex-row gap-4">
        <Button onClick={() => setLoading(true)} {...props} isLoading={isLoading} />
        <Button onClick={() => setLoading(prev => !prev)}>
          {\`\${!isLoading ? \`Start\` : \`Stop\`} loading\`}
        </Button>
      </div>;
  }
}`,...(f=(B=a.parameters)==null?void 0:B.docs)==null?void 0:f.source}}};var x,L,v;t.parameters={...t.parameters,docs:{...(x=t.parameters)==null?void 0:x.docs,source:{originalSource:`{
  ...BaseStory,
  args: {
    ...BaseStory.args,
    size: 'icon',
    children: <Phone size={24} />
  }
}`,...(v=(L=t.parameters)==null?void 0:L.docs)==null?void 0:v.source}}};const T=["SimpleButton","Disabled","Loading","Icon"];export{s as Disabled,t as Icon,a as Loading,o as SimpleButton,T as __namedExportsOrder,O as default};
