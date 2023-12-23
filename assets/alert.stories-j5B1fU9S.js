import{j as e}from"./clsx-KtS07kqv.js";import{c as f}from"./index-nyTKe3TY.js";import{r as i}from"./index-4g5l5LRQ.js";import{c as d}from"./utils-1S_n7jHw.js";import"./_commonjsHelpers-4gQjN7DL.js";const g=f("relative w-full rounded-lg border p-4",{variants:{variant:{default:"bg-background text-card-foreground",secondary:"border-secondary bg-secondary text-secondary-foreground",warning:"border-warning bg-warning text-warning-foreground",destructive:"border-destructive bg-destructive text-destructive-foreground"}},defaultVariants:{variant:"default"}}),n=i.forwardRef(({className:r,variant:t,...a},s)=>e.jsx("div",{ref:s,role:"alert",className:d(g({variant:t}),r),...a}));n.displayName="Alert";const u=i.forwardRef(({className:r,children:t,...a},s)=>e.jsx("h5",{ref:s,className:d("mb-1 font-medium leading-none tracking-tight",r),...a,children:t}));u.displayName="AlertTitle";const m=i.forwardRef(({className:r,...t},a)=>e.jsx("div",{ref:a,className:d("text-sm [&_p]:leading-relaxed",r),...t}));m.displayName="AlertDescription";try{n.displayName="Alert",n.__docgenInfo={description:"",displayName:"Alert",props:{variant:{defaultValue:null,description:"",name:"variant",required:!1,type:{name:'"secondary" | "destructive" | "default" | "warning" | null'}}}}}catch{}const w={component:n,title:"Components/Alert"},o={args:{variant:"default"},argTypes:{variant:{options:["default","secondary","warning","destructive"],control:{type:"radio"}}},render:r=>e.jsxs(n,{...r,children:[e.jsx(u,{children:"I'm a title"}),e.jsx(m,{children:"I'm a big description for alert"})]})};var l,c,p;o.parameters={...o.parameters,docs:{...(l=o.parameters)==null?void 0:l.docs,source:{originalSource:`{
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
}`,...(p=(c=o.parameters)==null?void 0:c.docs)==null?void 0:p.source}}};const _=["Default"];export{o as Default,_ as __namedExportsOrder,w as default};
