import{j as e}from"./clsx-KtS07kqv.js";import{A as u}from"./avatar--eBa8FtU.js";import{c as g}from"./index-nyTKe3TY.js";import{r as f}from"./index-4g5l5LRQ.js";import{c as b}from"./utils-1S_n7jHw.js";import"./_commonjsHelpers-4gQjN7DL.js";const x=g("absolute z-[1] h-3.5 w-3.5 rounded-full border-2 border-white",{variants:{variant:{success:"bg-success text-success-foreground",destructive:"bg-destructive text-destructive-foreground"}},defaultVariants:{variant:"success"}}),r=f.forwardRef(({variant:a,className:l,...m},v)=>e.jsx("span",{...m,ref:v,className:b(x({variant:a,className:l}))}));r.displayName="Badge";try{r.displayName="Badge",r.__docgenInfo={description:"",displayName:"Badge",props:{variant:{defaultValue:null,description:"",name:"variant",required:!1,type:{name:'"destructive" | "success" | null'}}}}}catch{}const A={component:r,title:"Components/Badge"},s={args:{variant:"success"},argTypes:{variant:{options:["success","destructive"],control:{type:"radio"}}},render:a=>e.jsxs("div",{className:"relative",children:[e.jsx(u,{className:"rounded-md",alt:"test"}),e.jsx(r,{...a,className:"-top-1 left-12"})]})},t={args:{variant:"success"},argTypes:{variant:{options:["success","destructive"],control:{type:"radio"}}},render:a=>e.jsxs("div",{className:"relative",children:[e.jsx(u,{alt:"cat",src:"https://randompicturegenerator.com/img/cat-generator/g37b82da0af399ee430f5787f93289fa6bf0cee78a334568707574b938b0c2dd44c1e6505904a70b5cb55dbb1f3116639_640.jpg"}),e.jsx(r,{...a,className:"left-10 top-0.5"})]})};var n,c,o;s.parameters={...s.parameters,docs:{...(n=s.parameters)==null?void 0:n.docs,source:{originalSource:`{
  args: {
    variant: 'success'
  },
  argTypes: {
    variant: {
      options: ['success', 'destructive'],
      control: {
        type: 'radio'
      }
    }
  },
  render: props => {
    return <div className="relative">
        <Avatar className="rounded-md" alt="test" />
        <Badge {...props} className="-top-1 left-12" />
      </div>;
  }
}`,...(o=(c=s.parameters)==null?void 0:c.docs)==null?void 0:o.source}}};var d,i,p;t.parameters={...t.parameters,docs:{...(d=t.parameters)==null?void 0:d.docs,source:{originalSource:`{
  args: {
    variant: 'success'
  },
  argTypes: {
    variant: {
      options: ['success', 'destructive'],
      control: {
        type: 'radio'
      }
    }
  },
  render: props => {
    return <div className="relative">
        <Avatar alt="cat" src="https://randompicturegenerator.com/img/cat-generator/g37b82da0af399ee430f5787f93289fa6bf0cee78a334568707574b938b0c2dd44c1e6505904a70b5cb55dbb1f3116639_640.jpg" />
        <Badge {...props} className="left-10 top-0.5" />
      </div>;
  }
}`,...(p=(i=t.parameters)==null?void 0:i.docs)==null?void 0:p.source}}};const R=["Default","Rounded"];export{s as Default,t as Rounded,R as __namedExportsOrder,A as default};
