import{a as e,j as t}from"./jsx-runtime-29545a09.js";import{B as r}from"./index-ac2f2f2d.js";import{$ as g,a as u,h as b,b as x,d as h,e as $}from"./index-a786fab8.js";import{r as y}from"./index-76fb7be0.js";import{c as D}from"./utils-636fbba8.js";import{X as N}from"./x-8d05627f.js";import{I as s}from"./input-05212480.js";import"./index-a011252c.js";import"./spinner-8a72c79d.js";import"./extends-98964cd2.js";import"./index-7f80cad2.js";import"./index-e2809c0a.js";import"./index-d3ea75b5.js";import"./_commonjsHelpers-de833af9.js";import"./index-043160a2.js";import"./index-90d601c3.js";import"./Combination-33a3cbce.js";import"./index-b3fcadf7.js";import"./index-1f3e1a8a.js";import"./createLucideIcon-de0f8b79.js";import"./label-4f316bdd.js";const c=g,C=u,n=y.forwardRef(({className:a,children:p,...m},f)=>e(b,{children:[t(x,{className:"fixed inset-0 z-50 bg-black/60 backdrop-blur-sm data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0"}),e(h,{ref:f,className:D("fixed left-[50%] top-[50%] z-50 grid w-full max-w-lg translate-x-[-50%] translate-y-[-50%] gap-4 border bg-background p-6 shadow-lg duration-200 data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0 data-[state=closed]:zoom-out-95 data-[state=open]:zoom-in-95 data-[state=closed]:slide-out-to-left-1/2 data-[state=closed]:slide-out-to-top-[48%] data-[state=open]:slide-in-from-left-1/2 data-[state=open]:slide-in-from-top-[48%] sm:rounded-lg",a),...m,children:[p,e($,{className:"absolute right-4 top-4 rounded-sm opacity-70 ring-offset-background transition-opacity hover:opacity-100 focus:outline-none focus:ring-2 focus:ring-secondary focus:ring-offset-2 disabled:pointer-events-none data-[state=open]:bg-secondary data-[state=open]:text-muted-foreground",children:[t(N,{className:"h-4 w-4"}),t("span",{className:"sr-only",children:"Close"})]})]})]}));n.displayName="DialogContent";try{n.displayName="DialogContent",n.__docgenInfo={description:"",displayName:"DialogContent",props:{}}}catch{}const J={component:c,title:"Components/Dialog"},o={args:{},render:({...a})=>e(c,{children:[t(C,{asChild:!0,children:t(r,{children:"Sign In"})}),e(n,{...a,className:"flex flex-col items-center gap-4 py-4",children:[t("h3",{className:"text-lg font-semibold",children:"Login"}),t(s,{label:"Email",type:"email"}),t(s,{label:"Password",type:"password"}),t(r,{children:"Sign In"})]})]})};var i,d,l;o.parameters={...o.parameters,docs:{...(i=o.parameters)==null?void 0:i.docs,source:{originalSource:`{
  args: {},
  render: ({
    ...props
  }) => {
    return <Dialog>
        <DialogTrigger asChild>
          <Button>Sign In</Button>
        </DialogTrigger>
        <DialogContent {...props} className="flex flex-col items-center gap-4 py-4">
          <h3 className="text-lg font-semibold">Login</h3>
          <Input label="Email" type="email" />
          <Input label="Password" type="password" />
          <Button>Sign In</Button>
        </DialogContent>
      </Dialog>;
  }
}`,...(l=(d=o.parameters)==null?void 0:d.docs)==null?void 0:l.source}}};const K=["Default"];export{o as Default,K as __namedExportsOrder,J as default};
