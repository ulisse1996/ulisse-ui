import{j as e}from"./clsx-KtS07kqv.js";import{I as a}from"./chunk-W7EQS7E7-L66vMpM1.js";import{r as C}from"./index-4g5l5LRQ.js";import{B as i}from"./index-S8TDwp6l.js";import{S as r,a as o,b as c,c as h,d as l}from"./sheet-it_pgxqU.js";import{M as d}from"./menu-i9mfWLfc.js";import"./_commonjsHelpers-4gQjN7DL.js";import"./index-nyTKe3TY.js";import"./spinner--pkT1kzj.js";import"./utils-1S_n7jHw.js";import"./index-Q5hxq_6l.js";import"./extends-dGVwEr9R.js";import"./index-0dIgYeBD.js";import"./index-XGpeoBSN.js";import"./index-jmm5gWkb.js";import"./index-cd2BOhhG.js";import"./index-VzvA_wF4.js";import"./Combination-nC2vVd1Z.js";import"./index-zgrs-vd1.js";import"./index-TcKUnSVx.js";import"./createLucideIcon-cZfFbMz1.js";const K={component:r,title:"Components/Sheet"},t={render:()=>e.jsxs(r,{children:[e.jsx(o,{asChild:!0,children:e.jsx(i,{size:"icon",children:e.jsx(d,{})})}),e.jsxs(c,{className:"items-center",children:[e.jsx(h,{children:e.jsx(l,{children:"I'm a simple Sheet"})}),e.jsx(a,{src:"https://source.unsplash.com/random/1280x720/?cat",alt:"Fruit",layout:"constrained",width:600,height:600,className:"h-48 w-48 rounded-md"})]})]})},n={render:()=>e.jsxs(r,{shouldScaleBackground:!0,children:[e.jsx(o,{asChild:!0,children:e.jsx(i,{size:"icon",children:e.jsx(d,{})})}),e.jsxs(c,{className:"h-[96%]",children:[e.jsx(h,{children:e.jsx(l,{children:"I'm a simple Sheet"})}),e.jsx("div",{className:"flex h-full w-full items-center justify-center",children:e.jsx(a,{src:"https://source.unsplash.com/random/1280x720/?cat",alt:"Fruit",layout:"constrained",width:600,height:600,className:"h-96 w-96 rounded-md"})})]})]})},s={render:()=>{const[N,B]=C.useState("148px");return e.jsxs(r,{shouldScaleBackground:!0,snapPoints:["148px","355px",1],activeSnapPoint:N,setActiveSnapPoint:B,children:[e.jsx(o,{asChild:!0,children:e.jsx(i,{size:"icon",children:e.jsx(d,{})})}),e.jsxs(c,{className:"h-[96%]",children:[e.jsx(h,{children:e.jsx(l,{children:"I'm a simple Sheet"})}),e.jsx("div",{className:"flex h-full w-full items-center justify-center",children:e.jsx(a,{src:"https://source.unsplash.com/random/1280x720/?cat",alt:"Fruit",layout:"constrained",width:600,height:600,className:"h-96 w-96 rounded-md"})})]})]})}};var m,u,p;t.parameters={...t.parameters,docs:{...(m=t.parameters)==null?void 0:m.docs,source:{originalSource:`{
  render: () => {
    return <Sheet>
        <SheetTrigger asChild>
          <Button size="icon">
            <Menu />
          </Button>
        </SheetTrigger>
        <SheetContent className="items-center">
          <SheetHeader>
            <SheetTitle>{\`I'm a simple Sheet\`}</SheetTitle>
          </SheetHeader>
          <Image src="https://source.unsplash.com/random/1280x720/?cat" alt="Fruit" layout="constrained" width={600} height={600} className="h-48 w-48 rounded-md" />
        </SheetContent>
      </Sheet>;
  }
}`,...(p=(u=t.parameters)==null?void 0:u.docs)==null?void 0:p.source}}};var S,x,g;n.parameters={...n.parameters,docs:{...(S=n.parameters)==null?void 0:S.docs,source:{originalSource:`{
  render: () => {
    return <Sheet shouldScaleBackground>
        <SheetTrigger asChild>
          <Button size="icon">
            <Menu />
          </Button>
        </SheetTrigger>
        <SheetContent className="h-[96%]">
          <SheetHeader>
            <SheetTitle>{\`I'm a simple Sheet\`}</SheetTitle>
          </SheetHeader>
          <div className="flex h-full w-full items-center justify-center">
            <Image src="https://source.unsplash.com/random/1280x720/?cat" alt="Fruit" layout="constrained" width={600} height={600} className="h-96 w-96 rounded-md" />
          </div>
        </SheetContent>
      </Sheet>;
  }
}`,...(g=(x=n.parameters)==null?void 0:x.docs)==null?void 0:g.source}}};var j,f,w;s.parameters={...s.parameters,docs:{...(j=s.parameters)==null?void 0:j.docs,source:{originalSource:`{
  render: () => {
    const [snap, setSnap] = useState<number | string | null>('148px');
    return <Sheet shouldScaleBackground snapPoints={['148px', '355px', 1]} activeSnapPoint={snap} setActiveSnapPoint={setSnap}>
        <SheetTrigger asChild>
          <Button size="icon">
            <Menu />
          </Button>
        </SheetTrigger>
        <SheetContent className="h-[96%]">
          <SheetHeader>
            <SheetTitle>{\`I'm a simple Sheet\`}</SheetTitle>
          </SheetHeader>
          <div className="flex h-full w-full items-center justify-center">
            <Image src="https://source.unsplash.com/random/1280x720/?cat" alt="Fruit" layout="constrained" width={600} height={600} className="h-96 w-96 rounded-md" />
          </div>
        </SheetContent>
      </Sheet>;
  }
}`,...(w=(f=s.parameters)==null?void 0:f.docs)==null?void 0:w.source}}};const L=["Default","WithScaledBackground","WithSnapPoints"];export{t as Default,n as WithScaledBackground,s as WithSnapPoints,L as __namedExportsOrder,K as default};
