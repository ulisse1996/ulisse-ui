import{j as o,a as d}from"./jsx-runtime-29545a09.js";import{T as t,a as m,b as c,c as T}from"./tooltip-1081c591.js";import"./index-76fb7be0.js";import"./_commonjsHelpers-de833af9.js";import"./extends-98964cd2.js";import"./index-7f80cad2.js";import"./index-e2809c0a.js";import"./index-d3ea75b5.js";import"./index-90d601c3.js";import"./index-043160a2.js";import"./index-ef27adad.js";import"./index-57a346df.js";import"./index-1f3e1a8a.js";import"./index-748042b3.js";import"./utils-636fbba8.js";const F={component:t,title:"Components/Tooltip"},e={render:()=>o("div",{className:"m-12",children:o(m,{children:d(t,{children:[o(c,{className:"underline",children:"Hover me"}),o(T,{children:"I'm a tooltip"})]})})})},r={args:{side:"left"},argTypes:{side:{options:["left","right","bottom","top"],control:{type:"radio"}}},render:({side:g})=>o("div",{className:"m-24",children:o(m,{children:d(t,{children:[o(c,{className:"underline",children:"Hover me"}),o(T,{side:g,children:"I'm a tooltip"})]})})})};var i,s,n;e.parameters={...e.parameters,docs:{...(i=e.parameters)==null?void 0:i.docs,source:{originalSource:`{
  render: () => {
    return <div className="m-12">
        <TooltipProvider>
          <Tooltip>
            <TooltipTrigger className="underline">Hover me</TooltipTrigger>
            <TooltipContent>{\`I'm a tooltip\`}</TooltipContent>
          </Tooltip>
        </TooltipProvider>
      </div>;
  }
}`,...(n=(s=e.parameters)==null?void 0:s.docs)==null?void 0:n.source}}};var p,l,a;r.parameters={...r.parameters,docs:{...(p=r.parameters)==null?void 0:p.docs,source:{originalSource:`{
  args: {
    side: 'left'
  },
  argTypes: {
    side: {
      options: ['left', 'right', 'bottom', 'top'],
      control: {
        type: 'radio'
      }
    }
  },
  render: ({
    side
  }) => {
    return <div className="m-24">
        <TooltipProvider>
          <Tooltip>
            <TooltipTrigger className="underline">Hover me</TooltipTrigger>
            <TooltipContent side={side}>{\`I'm a tooltip\`}</TooltipContent>
          </Tooltip>
        </TooltipProvider>
      </div>;
  }
}`,...(a=(l=r.parameters)==null?void 0:l.docs)==null?void 0:a.source}}};const _=["Default","FixedSide"];export{e as Default,r as FixedSide,_ as __namedExportsOrder,F as default};
