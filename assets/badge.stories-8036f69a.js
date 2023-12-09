import{j as r,a as u}from"./jsx-runtime-29545a09.js";import{A as l}from"./avatar-9bd34950.js";import{c as f}from"./index-a011252c.js";import{r as b}from"./index-76fb7be0.js";import{c as y}from"./utils-636fbba8.js";import"./_commonjsHelpers-de833af9.js";const N=f("absolute z-[1] h-3.5 w-3.5 rounded-full border-2 border-white",{variants:{variant:{success:"bg-success text-success-foreground",destructive:"bg-destructive text-destructive-foreground"}},defaultVariants:{variant:"success"}}),a=b.forwardRef(({variant:e,className:m,...v},g)=>r("span",{...v,ref:g,className:y(N({variant:e,className:m}))}));a.displayName="Badge";try{a.displayName="Badge",a.__docgenInfo={description:"",displayName:"Badge",props:{variant:{defaultValue:null,description:"",name:"variant",required:!1,type:{name:'"destructive" | "success" | null'}}}}}catch{}const T={component:a,title:"Components/Badge"},s={args:{variant:"success"},argTypes:{variant:{options:["success","destructive"],control:{type:"radio"}}},render:e=>u("div",{className:"relative",children:[r(l,{className:"rounded-md",alt:"test"}),r(a,{...e,className:"-top-1 left-12"})]})},t={args:{variant:"success"},argTypes:{variant:{options:["success","destructive"],control:{type:"radio"}}},render:e=>u("div",{className:"relative",children:[r(l,{alt:"cat",src:"https://randompicturegenerator.com/img/cat-generator/g37b82da0af399ee430f5787f93289fa6bf0cee78a334568707574b938b0c2dd44c1e6505904a70b5cb55dbb1f3116639_640.jpg"}),r(a,{...e,className:"left-10 top-0.5"})]})};var c,o,d;s.parameters={...s.parameters,docs:{...(c=s.parameters)==null?void 0:c.docs,source:{originalSource:`{
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
}`,...(d=(o=s.parameters)==null?void 0:o.docs)==null?void 0:d.source}}};var n,i,p;t.parameters={...t.parameters,docs:{...(n=t.parameters)==null?void 0:n.docs,source:{originalSource:`{
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
}`,...(p=(i=t.parameters)==null?void 0:i.docs)==null?void 0:p.source}}};const w=["Default","Rounded"];export{s as Default,t as Rounded,w as __namedExportsOrder,T as default};
