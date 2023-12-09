import{a as i,j as c}from"./jsx-runtime-29545a09.js";import{f as j}from"./index-3a83ac04.js";import{b as y,B as N}from"./index-ac2f2f2d.js";import{_ as l}from"./extends-98964cd2.js";import{r as o}from"./index-76fb7be0.js";import{$ as z,c as M}from"./index-7f80cad2.js";import{$ as S,d as I}from"./index-e2809c0a.js";import{i as P,c as F,b as L,$ as V,a as q,j as G,d as H,f as J,g as K,e as T}from"./index-a786fab8.js";import{c as f}from"./utils-636fbba8.js";import"./index-a011252c.js";import"./spinner-8a72c79d.js";import"./_commonjsHelpers-de833af9.js";import"./index-d3ea75b5.js";import"./index-043160a2.js";import"./index-90d601c3.js";import"./Combination-33a3cbce.js";import"./index-b3fcadf7.js";import"./index-1f3e1a8a.js";const Q="AlertDialog",[U,ke]=z(Q,[P]),s=P(),W=e=>{const{__scopeAlertDialog:t,...a}=e,r=s(t);return o.createElement(V,l({},r,a,{modal:!0}))},X=o.forwardRef((e,t)=>{const{__scopeAlertDialog:a,...r}=e,n=s(a);return o.createElement(q,l({},n,r,{ref:t}))}),Y=e=>{const{__scopeAlertDialog:t,...a}=e,r=s(t);return o.createElement(F,l({},r,a))},Z=o.forwardRef((e,t)=>{const{__scopeAlertDialog:a,...r}=e,n=s(a);return o.createElement(L,l({},n,r,{ref:t}))}),O="AlertDialogContent",[ee,ae]=U(O),te=o.forwardRef((e,t)=>{const{__scopeAlertDialog:a,children:r,...n}=e,d=s(a),m=o.useRef(null),B=S(t,m),x=o.useRef(null);return o.createElement(G,{contentName:O,titleName:oe,docsSlug:"alert-dialog"},o.createElement(ee,{scope:a,cancelRef:x},o.createElement(H,l({role:"alertdialog"},d,n,{ref:B,onOpenAutoFocus:M(n.onOpenAutoFocus,p=>{var u;p.preventDefault(),(u=x.current)===null||u===void 0||u.focus({preventScroll:!0})}),onPointerDownOutside:p=>p.preventDefault(),onInteractOutside:p=>p.preventDefault()}),o.createElement(I,null,r),!1)))}),oe="AlertDialogTitle",re=o.forwardRef((e,t)=>{const{__scopeAlertDialog:a,...r}=e,n=s(a);return o.createElement(J,l({},n,r,{ref:t}))}),ne=o.forwardRef((e,t)=>{const{__scopeAlertDialog:a,...r}=e,n=s(a);return o.createElement(K,l({},n,r,{ref:t}))}),ce=o.forwardRef((e,t)=>{const{__scopeAlertDialog:a,...r}=e,n=s(a);return o.createElement(T,l({},n,r,{ref:t}))}),le="AlertDialogCancel",se=o.forwardRef((e,t)=>{const{__scopeAlertDialog:a,...r}=e,{cancelRef:n}=ae(le,a),d=s(a),m=S(t,n);return o.createElement(T,l({},d,r,{ref:m}))}),ie=W,de=X,pe=te,fe=ce,$e=se,ge=re,me=ne,b=ie,k=de,D=o.forwardRef(({className:e,header:t,children:a,description:r,...n},d)=>i(Y,{children:[c(Z,{className:"fixed inset-0 z-50 bg-black/60 backdrop-blur-sm data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0"}),i(pe,{ref:d,className:f("fixed left-[50%] top-[50%] z-50 grid w-full max-w-lg translate-x-[-50%] translate-y-[-50%] gap-4 border bg-background p-6 shadow-lg duration-200 data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0 data-[state=closed]:zoom-out-95 data-[state=open]:zoom-in-95 data-[state=closed]:slide-out-to-left-1/2 data-[state=closed]:slide-out-to-top-[48%] data-[state=open]:slide-in-from-left-1/2 data-[state=open]:slide-in-from-top-[48%] sm:rounded-lg",e),...n,children:[c(ge,{className:f("text-lg font-semibold",e),children:t}),c(me,{className:f("text-sm text-muted-foreground",e),children:r}),c("div",{className:"flex flex-col-reverse sm:flex-row sm:justify-end sm:space-x-2",children:a})]})]}));D.displayName="DialogContent";const A=o.forwardRef(({className:e,variant:t,size:a,...r},n)=>c(fe,{ref:n,className:f(y({className:e,variant:t,size:a}),e),...r}));A.displayName="DialogAction";const _=o.forwardRef(({className:e,variant:t="flat",size:a,...r},n)=>c($e,{ref:n,className:f(y({className:e,variant:t,size:a}),"mt-2 sm:mt-0",e),...r}));_.displayName="DialogCancel";try{DialogContent.displayName="DialogContent",DialogContent.__docgenInfo={description:"",displayName:"DialogContent",props:{}}}catch{}const Be={component:b,title:"Components/Alert Dialog"},$={args:{header:"Please review our changes",description:j.lorem.paragraph(3)},render:({header:e,description:t,...a})=>i(b,{children:[c(k,{asChild:!0,children:c(N,{children:"Click me to open dialog"})}),i(D,{...a,header:e,description:t,children:[c(_,{children:"Cancel"}),c(A,{children:"Confirm"})]})]})},g={args:{header:"Delete folder",description:'Are you sure you want to delete "Documents"? All contents will be permanently destroyed.'},render:({header:e,description:t,...a})=>i(b,{children:[c(k,{asChild:!0,children:c(N,{variant:"destructive",children:"Delete"})}),i(D,{...a,header:e,description:t,children:[c(_,{children:"Cancel"}),c(A,{variant:"destructive",children:"Confirm"})]})]})};var C,h,v;$.parameters={...$.parameters,docs:{...(C=$.parameters)==null?void 0:C.docs,source:{originalSource:`{
  args: {
    header: \`Please review our changes\`,
    description: faker.lorem.paragraph(3)
  },
  render: ({
    header,
    description,
    ...props
  }) => {
    return <AlertDialog>
        <AlertDialogTrigger asChild>
          <Button>Click me to open dialog</Button>
        </AlertDialogTrigger>
        <AlertDialogContent {...props} header={header} description={description}>
          <AlertDialogCancel>Cancel</AlertDialogCancel>
          <AlertDialogAction>Confirm</AlertDialogAction>
        </AlertDialogContent>
      </AlertDialog>;
  }
}`,...(v=(h=$.parameters)==null?void 0:h.docs)==null?void 0:v.source}}};var w,E,R;g.parameters={...g.parameters,docs:{...(w=g.parameters)==null?void 0:w.docs,source:{originalSource:`{
  args: {
    header: \`Delete folder\`,
    description: 'Are you sure you want to delete "Documents"? All contents will be permanently destroyed.'
  },
  render: ({
    header,
    description,
    ...props
  }) => {
    return <AlertDialog>
        <AlertDialogTrigger asChild>
          <Button variant="destructive">Delete</Button>
        </AlertDialogTrigger>
        <AlertDialogContent {...props} header={header} description={description}>
          <AlertDialogCancel>Cancel</AlertDialogCancel>
          <AlertDialogAction variant="destructive">Confirm</AlertDialogAction>
        </AlertDialogContent>
      </AlertDialog>;
  }
}`,...(R=(E=g.parameters)==null?void 0:E.docs)==null?void 0:R.source}}};const je=["Default","Destructive"];export{$ as Default,g as Destructive,je as __namedExportsOrder,Be as default};
