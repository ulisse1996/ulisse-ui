import{j as a,a as f}from"./jsx-runtime-29545a09.js";import{c as g}from"./index-a011252c.js";import{r as s}from"./index-76fb7be0.js";import{c as d}from"./utils-636fbba8.js";import"./_commonjsHelpers-de833af9.js";const v=g("relative w-full rounded-lg border p-4",{variants:{variant:{default:"bg-background text-card-foreground",secondary:"border-secondary bg-secondary text-secondary-foreground",warning:"border-warning bg-warning text-warning-foreground",destructive:"border-destructive bg-destructive text-destructive-foreground"}},defaultVariants:{variant:"default"}}),n=s.forwardRef(({className:r,variant:e,...t},i)=>a("div",{ref:i,role:"alert",className:d(v({variant:e}),r),...t}));n.displayName="Alert";const u=s.forwardRef(({className:r,children:e,...t},i)=>a("h5",{ref:i,className:d("mb-1 font-medium leading-none tracking-tight",r),...t,children:e}));u.displayName="AlertTitle";const m=s.forwardRef(({className:r,...e},t)=>a("div",{ref:t,className:d("text-sm [&_p]:leading-relaxed",r),...e}));m.displayName="AlertDescription";try{n.displayName="Alert",n.__docgenInfo={description:"",displayName:"Alert",props:{variant:{defaultValue:null,description:"",name:"variant",required:!1,type:{name:'"secondary" | "destructive" | "default" | "warning" | null'}}}}}catch{}const _={component:n,title:"Components/Alert"},o={args:{variant:"default"},argTypes:{variant:{options:["default","secondary","warning","destructive"],control:{type:"radio"}}},render:r=>f(n,{...r,children:[a(u,{children:"I'm a title"}),a(m,{children:"I'm a big description for alert"})]})};var l,c,p;o.parameters={...o.parameters,docs:{...(l=o.parameters)==null?void 0:l.docs,source:{originalSource:`{
  args: {
    variant: 'default'
  },
  argTypes: {
    variant: {
      options: ['default', 'secondary', 'warning', 'destructive'],
      control: {
        type: 'radio'
      }
    }
  },
  render: props => {
    return <Alert {...props}>
        <AlertTitle>{\`I'm a title\`}</AlertTitle>
        <AlertDescription>{\`I'm a big description for alert\`}</AlertDescription>
      </Alert>;
  }
}`,...(p=(c=o.parameters)==null?void 0:c.docs)==null?void 0:p.source}}};const N=["Default"];export{o as Default,N as __namedExportsOrder,_ as default};
