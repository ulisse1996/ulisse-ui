import{j as l,a as v}from"./jsx-runtime-29545a09.js";import{f as E}from"./index-3a83ac04.js";import{_ as p}from"./extends-98964cd2.js";import{r as t}from"./index-76fb7be0.js";import{$ as L,b as j,c as x}from"./index-7f80cad2.js";import{$ as M,a as q,b as G}from"./index-ead001b7.js";import{$ as K}from"./index-1f3e1a8a.js";import{b as y}from"./index-e2809c0a.js";import{$ as B}from"./index-c6b1b4f9.js";import{$ as O}from"./index-043160a2.js";import{c as C}from"./utils-636fbba8.js";import"./_commonjsHelpers-de833af9.js";import"./index-a93a8af2.js";import"./index-d3ea75b5.js";const A="Tabs",[z,me]=L(A,[M]),F=M(),[H,N]=z(A),J=t.forwardRef((e,a)=>{const{__scopeTabs:o,value:r,onValueChange:c,defaultValue:d,orientation:n="horizontal",dir:b,activationMode:u="automatic",...m}=e,i=B(b),[s,f]=j({prop:r,onChange:c,defaultProp:d});return t.createElement(H,{scope:o,baseId:O(),value:s,onValueChange:f,orientation:n,dir:i,activationMode:u},t.createElement(y.div,p({dir:i,"data-orientation":n},m,{ref:a})))}),Q="TabsList",U=t.forwardRef((e,a)=>{const{__scopeTabs:o,loop:r=!0,...c}=e,d=N(Q,o),n=F(o);return t.createElement(q,p({asChild:!0},n,{orientation:d.orientation,dir:d.dir,loop:r}),t.createElement(y.div,p({role:"tablist","aria-orientation":d.orientation},c,{ref:a})))}),W="TabsTrigger",X=t.forwardRef((e,a)=>{const{__scopeTabs:o,value:r,disabled:c=!1,...d}=e,n=N(W,o),b=F(o),u=R(n.baseId,r),m=S(n.baseId,r),i=r===n.value;return t.createElement(G,p({asChild:!0},b,{focusable:!c,active:i}),t.createElement(y.button,p({type:"button",role:"tab","aria-selected":i,"aria-controls":m,"data-state":i?"active":"inactive","data-disabled":c?"":void 0,disabled:c,id:u},d,{ref:a,onMouseDown:x(e.onMouseDown,s=>{!c&&s.button===0&&s.ctrlKey===!1?n.onValueChange(r):s.preventDefault()}),onKeyDown:x(e.onKeyDown,s=>{[" ","Enter"].includes(s.key)&&n.onValueChange(r)}),onFocus:x(e.onFocus,()=>{const s=n.activationMode!=="manual";!i&&!c&&s&&n.onValueChange(r)})})))}),Y="TabsContent",Z=t.forwardRef((e,a)=>{const{__scopeTabs:o,value:r,forceMount:c,children:d,...n}=e,b=N(Y,o),u=R(b.baseId,r),m=S(b.baseId,r),i=r===b.value,s=t.useRef(i);return t.useEffect(()=>{const f=requestAnimationFrame(()=>s.current=!1);return()=>cancelAnimationFrame(f)},[]),t.createElement(K,{present:c||i},({present:f})=>t.createElement(y.div,p({"data-state":i?"active":"inactive","data-orientation":b.orientation,role:"tabpanel","aria-labelledby":u,hidden:!f,id:m,tabIndex:0},n,{ref:a,style:{...e.style,animationDuration:s.current?"0s":void 0}}),f&&d))});function R(e,a){return`${e}-trigger-${a}`}function S(e,a){return`${e}-content-${a}`}const ee=J,k=U,D=X,P=Z,T=ee,h=t.forwardRef(({className:e,...a},o)=>l(k,{ref:o,className:C("inline-flex h-10 items-center justify-center rounded-md bg-secondary text-secondary-foreground p-1",e),...a}));h.displayName=k.displayName;const $=t.forwardRef(({className:e,...a},o)=>l(D,{ref:o,className:C("inline-flex items-center justify-center whitespace-nowrap rounded-sm px-3 py-1.5 text-sm font-medium ring-offset-background transition-all focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 data-[state=active]:bg-background data-[state=active]:text-primary data-[state=active]:shadow-sm",e),...a}));$.displayName=D.displayName;const g=t.forwardRef(({className:e,...a},o)=>l(P,{ref:o,className:C("mt-2 ring-offset-background focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary focus-visible:ring-offset-2",e),...a}));g.displayName=P.displayName;try{T.displayName="Tabs",T.__docgenInfo={description:"",displayName:"Tabs",props:{asChild:{defaultValue:null,description:"",name:"asChild",required:!1,type:{name:"boolean"}}}}}catch{}try{g.displayName="TabsContent",g.__docgenInfo={description:"",displayName:"TabsContent",props:{asChild:{defaultValue:null,description:"",name:"asChild",required:!1,type:{name:"boolean"}}}}}catch{}try{h.displayName="TabsList",h.__docgenInfo={description:"",displayName:"TabsList",props:{asChild:{defaultValue:null,description:"",name:"asChild",required:!1,type:{name:"boolean"}}}}}catch{}try{$.displayName="TabsTrigger",$.__docgenInfo={description:"",displayName:"TabsTrigger",props:{asChild:{defaultValue:null,description:"",name:"asChild",required:!1,type:{name:"boolean"}}}}}catch{}const $e={component:T,title:"Components/Tabs"},_={render:()=>v(T,{defaultValue:"first",children:[v(h,{className:"grid w-full grid-cols-2",children:[l($,{value:"first",children:"First"}),l($,{value:"second",children:"Second"})]}),v(g,{value:"first",children:[l("h3",{className:"text-lg font-semibold",children:"First content"}),l("p",{children:E.lorem.paragraph(3)})]}),v(g,{value:"second",children:[l("h3",{className:"text-lg font-semibold",children:"Second content"}),l("p",{children:E.lorem.paragraph(3)})]})]})};var I,w,V;_.parameters={..._.parameters,docs:{...(I=_.parameters)==null?void 0:I.docs,source:{originalSource:`{
  render: () => {
    return <Tabs defaultValue="first">
        <TabsList className="grid w-full grid-cols-2">
          <TabsTrigger value="first">First</TabsTrigger>
          <TabsTrigger value="second">Second</TabsTrigger>
        </TabsList>
        <TabsContent value="first">
          <h3 className="text-lg font-semibold">First content</h3>
          <p>{faker.lorem.paragraph(3)}</p>
        </TabsContent>
        <TabsContent value="second">
          <h3 className="text-lg font-semibold">Second content</h3>
          <p>{faker.lorem.paragraph(3)}</p>
        </TabsContent>
      </Tabs>;
  }
}`,...(V=(w=_.parameters)==null?void 0:w.docs)==null?void 0:V.source}}};const ge=["Default"];export{_ as Default,ge as __namedExportsOrder,$e as default};