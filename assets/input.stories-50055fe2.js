import{j as e}from"./jsx-runtime-29545a09.js";import{I as r}from"./input-05212480.js";import{C as F}from"./calendar-days-21abe58e.js";import{c as P}from"./createLucideIcon-de0f8b79.js";import"./index-76fb7be0.js";import"./_commonjsHelpers-de833af9.js";import"./label-4f316bdd.js";import"./extends-98964cd2.js";import"./index-e2809c0a.js";import"./index-d3ea75b5.js";import"./utils-636fbba8.js";/**
 * @license lucide-react v0.293.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const R=P("Euro",[["path",{d:"M4 10h12",key:"1y6xl8"}],["path",{d:"M4 14h9",key:"1loblj"}],["path",{d:"M19 6a7.7 7.7 0 0 0-5.2-2A7.9 7.9 0 0 0 6 12c0 4.4 3.5 8 7.8 8 2 0 3.8-.8 5.2-2",key:"1j6lzo"}]]),K={component:r,title:"Form/Input"},t={args:{type:"email"},render:u=>e(r,{...u,label:"My Input",id:"test-input"})},a={render:()=>e(r,{"aria-label":"My Input"})},s={render:()=>e(r,{placeholder:"Insert some text",label:"My Input",id:"test-input"})},n={render:()=>e(r,{disabled:!0,placeholder:"Insert some text",label:"My Input",id:"test-input"})},o={render:()=>e(r,{leftComponent:e(F,{}),disabled:!0,placeholder:"Insert some text",label:"My Input",id:"test-input",className:"pl-10"})},p={render:()=>e(r,{rightComponent:e(R,{}),disabled:!0,placeholder:"Insert some text",label:"My Input",id:"test-input",className:"pr-10"})},l={args:{type:"file"},render:u=>e(r,{...u,label:"My Input",id:"test-input"})};var i,d,c;t.parameters={...t.parameters,docs:{...(i=t.parameters)==null?void 0:i.docs,source:{originalSource:`{
  args: {
    type: 'email'
  },
  render: props => {
    return <Input {...props} label="My Input" id="test-input" />;
  }
}`,...(c=(d=t.parameters)==null?void 0:d.docs)==null?void 0:c.source}}};var m,I,h;a.parameters={...a.parameters,docs:{...(m=a.parameters)==null?void 0:m.docs,source:{originalSource:`{
  render: () => {
    return <Input aria-label="My Input" />;
  }
}`,...(h=(I=a.parameters)==null?void 0:I.docs)==null?void 0:h.source}}};var b,y,M;s.parameters={...s.parameters,docs:{...(b=s.parameters)==null?void 0:b.docs,source:{originalSource:`{
  render: () => {
    return <Input placeholder="Insert some text" label="My Input" id="test-input" />;
  }
}`,...(M=(y=s.parameters)==null?void 0:y.docs)==null?void 0:M.source}}};var g,x,f;n.parameters={...n.parameters,docs:{...(g=n.parameters)==null?void 0:g.docs,source:{originalSource:`{
  render: () => {
    return <Input disabled placeholder="Insert some text" label="My Input" id="test-input" />;
  }
}`,...(f=(x=n.parameters)==null?void 0:x.docs)==null?void 0:f.source}}};var W,C,L;o.parameters={...o.parameters,docs:{...(W=o.parameters)==null?void 0:W.docs,source:{originalSource:`{
  render: () => {
    return <Input leftComponent={<CalendarDays />} disabled placeholder="Insert some text" label="My Input" id="test-input" className="pl-10" />;
  }
}`,...(L=(C=o.parameters)==null?void 0:C.docs)==null?void 0:L.source}}};var S,j,D;p.parameters={...p.parameters,docs:{...(S=p.parameters)==null?void 0:S.docs,source:{originalSource:`{
  render: () => {
    return <Input rightComponent={<EuroIcon />} disabled placeholder="Insert some text" label="My Input" id="test-input" className="pr-10" />;
  }
}`,...(D=(j=p.parameters)==null?void 0:j.docs)==null?void 0:D.source}}};var E,N,k;l.parameters={...l.parameters,docs:{...(E=l.parameters)==null?void 0:E.docs,source:{originalSource:`{
  args: {
    type: 'file'
  },
  render: props => {
    return <Input {...props} label="My Input" id="test-input" />;
  }
}`,...(k=(N=l.parameters)==null?void 0:N.docs)==null?void 0:k.source}}};const Q=["WithLabel","WithoutLabel","WithPlaceholder","Disabled","WithLeftIcon","WithRightIcon","FileInput"];export{n as Disabled,l as FileInput,t as WithLabel,o as WithLeftIcon,s as WithPlaceholder,p as WithRightIcon,a as WithoutLabel,Q as __namedExportsOrder,K as default};
