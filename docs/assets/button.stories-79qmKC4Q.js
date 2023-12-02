import{j as e}from"./jsx-runtime-vNq4Oc-g.js";import{r as j}from"./index-4g5l5LRQ.js";import{B as n}from"./index-iptAJApz.js";import{c as z}from"./createLucideIcon-cZfFbMz1.js";import"./_commonjsHelpers-4gQjN7DL.js";import"./index-v55UWy9B.js";import"./utils-LqYgCrNY.js";import"./spinner-dOrrrPEq.js";/**
 * @license lucide-react v0.293.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const k=z("Phone",[["path",{d:"M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z",key:"foiqr5"}]]),_={component:n,title:"Components/Button"},C=["primary","secondary","destructive","outline-primary","outline-secondary","outline-destructive","flat"],r={args:{children:"Click me",variant:"primary",size:"md"},argTypes:{variant:{options:C,control:{type:"radio"}},size:{options:["sm","md","lg","icon"],control:{type:"radio"}}},render:i=>e.jsx("div",{className:"flex flex-row gap-2",children:e.jsx(n,{...i})})},s={...r},o={...r,args:{...r.args,disabled:!0}},a={...r,args:{...r.args},render:i=>{const[c,d]=j.useState(!1);return e.jsxs("div",{className:"flex flex-row gap-4",children:[e.jsx(n,{onClick:()=>d(!0),...i,isLoading:c}),e.jsx(n,{onClick:()=>d(v=>!v),children:`${c?"Stop":"Start"} loading`})]})}},t={...r,args:{...r.args,size:"icon",children:e.jsx(k,{size:24})}};var p,m,l;s.parameters={...s.parameters,docs:{...(p=s.parameters)==null?void 0:p.docs,source:{originalSource:`{
  ...BaseStory
}`,...(l=(m=s.parameters)==null?void 0:m.docs)==null?void 0:l.source}}};var u,g,S;o.parameters={...o.parameters,docs:{...(u=o.parameters)==null?void 0:u.docs,source:{originalSource:`{
  ...BaseStory,
  args: {
    ...BaseStory.args,
    disabled: true
  }
}`,...(S=(g=o.parameters)==null?void 0:g.docs)==null?void 0:S.source}}};var x,y,B;a.parameters={...a.parameters,docs:{...(x=a.parameters)==null?void 0:x.docs,source:{originalSource:`{
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
}`,...(B=(y=a.parameters)==null?void 0:y.docs)==null?void 0:B.source}}};var f,L,h;t.parameters={...t.parameters,docs:{...(f=t.parameters)==null?void 0:f.docs,source:{originalSource:`{
  ...BaseStory,
  args: {
    ...BaseStory.args,
    size: 'icon',
    children: <Phone size={24} />
  }
}`,...(h=(L=t.parameters)==null?void 0:L.docs)==null?void 0:h.source}}};const $=["SimpleButton","Disabled","Loading","Icon"];export{o as Disabled,t as Icon,a as Loading,s as SimpleButton,$ as __namedExportsOrder,_ as default};
