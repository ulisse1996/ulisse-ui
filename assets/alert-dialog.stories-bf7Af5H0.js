import{j as c}from"./jsx-runtime-vNq4Oc-g.js";import{f as k}from"./index-KLTnsmU9.js";import{b as w,B as R}from"./index-iptAJApz.js";import{_ as l}from"./extends-dGVwEr9R.js";import{r as o}from"./index-4g5l5LRQ.js";import{$ as B,b as z}from"./index-4b2-7lPk.js";import{$ as y,d as M}from"./index-vg5MHLvR.js";import{f as N,g as I,c as F,$ as L,a as V,h as q,d as G,i as H,j as J,e as S}from"./index-3jOhUAOB.js";import{a as p}from"./utils-LqYgCrNY.js";import"./index-v55UWy9B.js";import"./spinner-dOrrrPEq.js";import"./_commonjsHelpers-4gQjN7DL.js";import"./index-jmm5gWkb.js";import"./index-__5zQLl9.js";import"./index-e8T0CmYa.js";import"./Combination-OxY5g-Qw.js";import"./index-DMVQsSdb.js";import"./index-jEmRox_a.js";const K="AlertDialog",[Q,Te]=B(K,[N]),s=N(),U=e=>{const{__scopeAlertDialog:t,...a}=e,r=s(t);return o.createElement(L,l({},r,a,{modal:!0}))},W=o.forwardRef((e,t)=>{const{__scopeAlertDialog:a,...r}=e,n=s(a);return o.createElement(V,l({},n,r,{ref:t}))}),X=e=>{const{__scopeAlertDialog:t,...a}=e,r=s(t);return o.createElement(I,l({},r,a))},Y=o.forwardRef((e,t)=>{const{__scopeAlertDialog:a,...r}=e,n=s(a);return o.createElement(F,l({},n,r,{ref:t}))}),P="AlertDialogContent",[Z,ee]=Q(P),ae=o.forwardRef((e,t)=>{const{__scopeAlertDialog:a,children:r,...n}=e,i=s(a),g=o.useRef(null),O=y(t,g),A=o.useRef(null);return o.createElement(q,{contentName:P,titleName:te,docsSlug:"alert-dialog"},o.createElement(Z,{scope:a,cancelRef:A},o.createElement(G,l({role:"alertdialog"},i,n,{ref:O,onOpenAutoFocus:z(n.onOpenAutoFocus,d=>{var m;d.preventDefault(),(m=A.current)===null||m===void 0||m.focus({preventScroll:!0})}),onPointerDownOutside:d=>d.preventDefault(),onInteractOutside:d=>d.preventDefault()}),o.createElement(M,null,r),!1)))}),te="AlertDialogTitle",oe=o.forwardRef((e,t)=>{const{__scopeAlertDialog:a,...r}=e,n=s(a);return o.createElement(H,l({},n,r,{ref:t}))}),re=o.forwardRef((e,t)=>{const{__scopeAlertDialog:a,...r}=e,n=s(a);return o.createElement(J,l({},n,r,{ref:t}))}),ne=o.forwardRef((e,t)=>{const{__scopeAlertDialog:a,...r}=e,n=s(a);return o.createElement(S,l({},n,r,{ref:t}))}),ce="AlertDialogCancel",le=o.forwardRef((e,t)=>{const{__scopeAlertDialog:a,...r}=e,{cancelRef:n}=ee(ce,a),i=s(a),g=y(t,n);return o.createElement(S,l({},i,r,{ref:g}))}),se=U,ie=W,de=ae,pe=ne,fe=le,$e=oe,ge=re,u=se,T=ie,b=o.forwardRef(({className:e,header:t,children:a,description:r,...n},i)=>c.jsxs(X,{children:[c.jsx(Y,{className:"fixed inset-0 z-50 bg-black/60 backdrop-blur-sm data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0"}),c.jsxs(de,{ref:i,className:p("fixed left-[50%] top-[50%] z-50 grid w-full max-w-lg translate-x-[-50%] translate-y-[-50%] gap-4 border bg-background p-6 shadow-lg duration-200 data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0 data-[state=closed]:zoom-out-95 data-[state=open]:zoom-in-95 data-[state=closed]:slide-out-to-left-1/2 data-[state=closed]:slide-out-to-top-[48%] data-[state=open]:slide-in-from-left-1/2 data-[state=open]:slide-in-from-top-[48%] sm:rounded-lg",e),...n,children:[c.jsx($e,{className:p("text-lg font-semibold",e),children:t}),c.jsx(ge,{className:p("text-sm text-muted-foreground",e),children:r}),c.jsx("div",{className:"flex flex-col-reverse sm:flex-row sm:justify-end sm:space-x-2",children:a})]})]}));b.displayName="DialogContent";const D=o.forwardRef(({className:e,variant:t,size:a,...r},n)=>c.jsx(pe,{ref:n,className:p(w({className:e,variant:t,size:a}),e),...r}));D.displayName="DialogAction";const x=o.forwardRef(({className:e,variant:t="flat",size:a,...r},n)=>c.jsx(fe,{ref:n,className:p(w({className:e,variant:t,size:a}),"mt-2 sm:mt-0",e),...r}));x.displayName="DialogCancel";try{DialogContent.displayName="DialogContent",DialogContent.__docgenInfo={description:"",displayName:"DialogContent",props:{}}}catch{}const Oe={component:u,title:"Components/Alert Dialog"},f={args:{header:"Please review our changes",description:k.lorem.paragraph(3)},render:({header:e,description:t,...a})=>c.jsxs(u,{children:[c.jsx(T,{asChild:!0,children:c.jsx(R,{children:"Click me to open dialog"})}),c.jsxs(b,{...a,header:e,description:t,children:[c.jsx(x,{children:"Cancel"}),c.jsx(D,{children:"Confirm"})]})]})},$={args:{header:"Delete folder",description:'Are you sure you want to delete "Documents"? All contents will be permanently destroyed.'},render:({header:e,description:t,...a})=>c.jsxs(u,{children:[c.jsx(T,{asChild:!0,children:c.jsx(R,{variant:"destructive",children:"Delete"})}),c.jsxs(b,{...a,header:e,description:t,children:[c.jsx(x,{children:"Cancel"}),c.jsx(D,{variant:"destructive",children:"Confirm"})]})]})};var _,C,h;f.parameters={...f.parameters,docs:{...(_=f.parameters)==null?void 0:_.docs,source:{originalSource:`{
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
}`,...(h=(C=f.parameters)==null?void 0:C.docs)==null?void 0:h.source}}};var v,j,E;$.parameters={...$.parameters,docs:{...(v=$.parameters)==null?void 0:v.docs,source:{originalSource:`{
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
}`,...(E=(j=$.parameters)==null?void 0:j.docs)==null?void 0:E.source}}};const ke=["Default","Destructive"];export{f as Default,$ as Destructive,ke as __namedExportsOrder,Oe as default};
