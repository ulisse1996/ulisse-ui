import{j as e}from"./clsx-UwsAJbxu.js";import{I as g}from"./chunk-W7EQS7E7-d3_FCpGs.js";import{B as D}from"./index-2lMP598x.js";import{$ as H,a as v,c as b,f as z,d as j,e as B,g as y,h as N}from"./index-Q5hxq_6l.js";import{c as R}from"./index-polp_dyw.js";import{r as i}from"./index-4g5l5LRQ.js";import{c as s}from"./utils-knXUKJUl.js";import{X as k}from"./x-mHLJlCGn.js";import{M as $}from"./menu-i9mfWLfc.js";import"./spinner-vIff0ak-.js";import"./extends-dGVwEr9R.js";import"./index-0dIgYeBD.js";import"./index-XGpeoBSN.js";import"./index-jmm5gWkb.js";import"./_commonjsHelpers-4gQjN7DL.js";import"./index-cd2BOhhG.js";import"./index-VzvA_wF4.js";import"./Combination-nC2vVd1Z.js";import"./index-zgrs-vd1.js";import"./index-TcKUnSVx.js";import"./createLucideIcon-cZfFbMz1.js";const c=H,C=v,T=i.forwardRef(({className:r,...t},a)=>e.jsx(b,{className:s("fixed inset-0 z-50 bg-background/80 backdrop-blur-sm data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0",r),...t,ref:a}));T.displayName=b.displayName;const F=R("fixed z-50 gap-4 bg-background p-6 shadow-lg transition ease-in-out data-[state=closed]:duration-300 data-[state=open]:duration-500 data-[state=open]:animate-in data-[state=closed]:animate-out",{variants:{side:{top:"inset-x-0 top-0 border-b data-[state=closed]:slide-out-to-top data-[state=open]:slide-in-from-top",bottom:"inset-x-0 bottom-0 rounded-t-3xl border-t data-[state=closed]:slide-out-to-bottom data-[state=open]:slide-in-from-bottom",left:"inset-y-0 left-0 h-full w-3/4 border-r data-[state=closed]:slide-out-to-left data-[state=open]:slide-in-from-left sm:max-w-sm",right:"inset-y-0 right-0 h-full w-3/4  border-l data-[state=closed]:slide-out-to-right data-[state=open]:slide-in-from-right sm:max-w-sm"}},defaultVariants:{side:"right"}}),m=i.forwardRef(({side:r="bottom",className:t,children:a,..._},I)=>e.jsxs(z,{children:[e.jsx(T,{}),e.jsxs(j,{ref:I,className:s(F({side:r}),t),..._,children:[a,e.jsxs(B,{className:s("absolute right-4 top-4 rounded-sm opacity-70 ring-offset-background transition-opacity hover:opacity-100 focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-2 disabled:pointer-events-none data-[state=open]:bg-secondary"),children:[e.jsx(k,{className:"h-4 w-4"}),e.jsx("span",{className:"sr-only",children:"Close"})]})]})]}));m.displayName=j.displayName;const o=({className:r,...t})=>e.jsx("div",{className:s("flex flex-col space-y-2 text-center sm:text-left",r),...t});o.displayName="DrawerHeader";const l=i.forwardRef(({className:r,...t},a)=>e.jsx(y,{ref:a,className:s("text-lg font-semibold text-card-foreground",r),...t}));l.displayName=y.displayName;const M=i.forwardRef(({className:r,...t},a)=>e.jsx(N,{ref:a,className:s("text-sm text-muted-foreground",r),...t}));M.displayName=N.displayName;try{o.displayName="DrawerHeader",o.__docgenInfo={description:"",displayName:"DrawerHeader",props:{}}}catch{}const se={component:c,title:"Components/Drawer"},n={render:()=>e.jsxs(c,{children:[e.jsx(C,{asChild:!0,children:e.jsx(D,{size:"icon",children:e.jsx($,{})})}),e.jsxs(m,{className:"items-center",side:"right",children:[e.jsx(o,{children:e.jsx(l,{children:"I'm a simple Drawer"})}),e.jsx(g,{src:"https://source.unsplash.com/random/1280x720/?cat",alt:"Fruit",layout:"constrained",width:600,height:600,className:"h-48 w-48 rounded-md"})]})]})},d={render:()=>e.jsxs(c,{children:[e.jsx(C,{asChild:!0,children:e.jsx(D,{size:"icon",children:e.jsx($,{})})}),e.jsxs(m,{className:"items-center",side:"left",children:[e.jsx(o,{children:e.jsx(l,{children:"I'm a simple Drawer"})}),e.jsx(g,{src:"https://source.unsplash.com/random/1280x720/?cat",alt:"Fruit",layout:"constrained",width:600,height:600,className:"h-48 w-48 rounded-md"})]})]})};var p,u,f;n.parameters={...n.parameters,docs:{...(p=n.parameters)==null?void 0:p.docs,source:{originalSource:`{
  render: () => {
    return <Drawer>
        <DrawerTrigger asChild>
          <Button size="icon">
            <Menu />
          </Button>
        </DrawerTrigger>
        <DrawerContent className="items-center" side="right">
          <DrawerHeader>
            <DrawerTitle>{\`I'm a simple Drawer\`}</DrawerTitle>
          </DrawerHeader>
          <Image src="https://source.unsplash.com/random/1280x720/?cat" alt="Fruit" layout="constrained" width={600} height={600} className="h-48 w-48 rounded-md" />
        </DrawerContent>
      </Drawer>;
  }
}`,...(f=(u=n.parameters)==null?void 0:u.docs)==null?void 0:f.source}}};var h,x,w;d.parameters={...d.parameters,docs:{...(h=d.parameters)==null?void 0:h.docs,source:{originalSource:`{
  render: () => {
    return <Drawer>
        <DrawerTrigger asChild>
          <Button size="icon">
            <Menu />
          </Button>
        </DrawerTrigger>
        <DrawerContent className="items-center" side="left">
          <DrawerHeader>
            <DrawerTitle>{\`I'm a simple Drawer\`}</DrawerTitle>
          </DrawerHeader>
          <Image src="https://source.unsplash.com/random/1280x720/?cat" alt="Fruit" layout="constrained" width={600} height={600} className="h-48 w-48 rounded-md" />
        </DrawerContent>
      </Drawer>;
  }
}`,...(w=(x=d.parameters)==null?void 0:x.docs)==null?void 0:w.source}}};const oe=["Default","Left"];export{n as Default,d as Left,oe as __namedExportsOrder,se as default};
