import{j as o}from"./jsx-runtime-vNq4Oc-g.js";import{T as t,a as m,b as d,c}from"./tooltip-HUymlOr1.js";import"./index-4g5l5LRQ.js";import"./_commonjsHelpers-4gQjN7DL.js";import"./extends-dGVwEr9R.js";import"./index-0dIgYeBD.js";import"./index-XGpeoBSN.js";import"./index-jmm5gWkb.js";import"./index-wUOvkR5E.js";import"./index-cd2BOhhG.js";import"./index-vOJqYY-v.js";import"./index-EwzVq0z5.js";import"./index-TcKUnSVx.js";import"./index-YCypRNSh.js";import"./utils-HR2XZNS3.js";const D={component:t,title:"Components/Tooltip"},e={render:()=>o.jsx("div",{className:"m-12",children:o.jsx(m,{children:o.jsxs(t,{children:[o.jsx(d,{className:"underline",children:"Hover me"}),o.jsx(c,{children:"I'm a tooltip"})]})})})},r={args:{side:"left"},argTypes:{side:{options:["left","right","bottom","top"],control:{type:"radio"}}},render:({side:T})=>o.jsx("div",{className:"m-24",children:o.jsx(m,{children:o.jsxs(t,{children:[o.jsx(d,{className:"underline",children:"Hover me"}),o.jsx(c,{side:T,children:"I'm a tooltip"})]})})})};var i,s,n;e.parameters={...e.parameters,docs:{...(i=e.parameters)==null?void 0:i.docs,source:{originalSource:`{
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
}`,...(a=(l=r.parameters)==null?void 0:l.docs)==null?void 0:a.source}}};const E=["Default","FixedSide"];export{e as Default,r as FixedSide,E as __namedExportsOrder,D as default};
