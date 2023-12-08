import{j as e}from"./jsx-runtime-vNq4Oc-g.js";import{r as j}from"./index-4g5l5LRQ.js";import{B as n}from"./index-8fJbMDui.js";import{P as z}from"./phone-mBIi_KH8.js";import"./_commonjsHelpers-4gQjN7DL.js";import"./index-_UegSYSw.js";import"./utils-HR2XZNS3.js";import"./spinner-TPfN3SXW.js";import"./createLucideIcon-cZfFbMz1.js";const $={component:n,title:"Components/Button"},C=["primary","secondary","destructive","outline-primary","outline-secondary","outline-destructive","flat"],r={args:{children:"Click me",variant:"primary",size:"md"},argTypes:{variant:{options:C,control:{type:"radio"}},size:{options:["sm","md","lg","icon"],control:{type:"radio"}}},render:i=>e.jsx("div",{className:"flex flex-row gap-2",children:e.jsx(n,{...i})})},s={...r},o={...r,args:{...r.args,disabled:!0}},a={...r,args:{...r.args},render:i=>{const[c,d]=j.useState(!1);return e.jsxs("div",{className:"flex flex-row gap-4",children:[e.jsx(n,{onClick:()=>d(!0),...i,isLoading:c}),e.jsx(n,{onClick:()=>d(h=>!h),children:`${c?"Stop":"Start"} loading`})]})}},t={...r,args:{...r.args,size:"icon",children:e.jsx(z,{size:24})}};var p,m,l;s.parameters={...s.parameters,docs:{...(p=s.parameters)==null?void 0:p.docs,source:{originalSource:`{
  ...BaseStory
}`,...(l=(m=s.parameters)==null?void 0:m.docs)==null?void 0:l.source}}};var g,u,S;o.parameters={...o.parameters,docs:{...(g=o.parameters)==null?void 0:g.docs,source:{originalSource:`{
  ...BaseStory,
  args: {
    ...BaseStory.args,
    disabled: true
  }
}`,...(S=(u=o.parameters)==null?void 0:u.docs)==null?void 0:S.source}}};var x,y,B;a.parameters={...a.parameters,docs:{...(x=a.parameters)==null?void 0:x.docs,source:{originalSource:`{
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
}`,...(B=(y=a.parameters)==null?void 0:y.docs)==null?void 0:B.source}}};var f,L,v;t.parameters={...t.parameters,docs:{...(f=t.parameters)==null?void 0:f.docs,source:{originalSource:`{
  ...BaseStory,
  args: {
    ...BaseStory.args,
    size: 'icon',
    children: <Phone size={24} />
  }
}`,...(v=(L=t.parameters)==null?void 0:L.docs)==null?void 0:v.source}}};const O=["SimpleButton","Disabled","Loading","Icon"];export{o as Disabled,t as Icon,a as Loading,s as SimpleButton,O as __namedExportsOrder,$ as default};
