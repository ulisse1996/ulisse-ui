import{j as e,a as r}from"./jsx-runtime-29545a09.js";import{f as w}from"./index-3a83ac04.js";import{I as y}from"./chunk-W7EQS7E7-35841843.js";import{A as k}from"./avatar-9bd34950.js";import{B as L}from"./index-ac2f2f2d.js";import{r as U}from"./index-76fb7be0.js";import{c as n}from"./utils-636fbba8.js";import{C as p}from"./cat-11456127.js";import{M as I}from"./menu-52f13b7b.js";import"./index-a011252c.js";import"./spinner-8a72c79d.js";import"./_commonjsHelpers-de833af9.js";import"./createLucideIcon-de0f8b79.js";function _(a){return e("div",{...a,className:n("flex lg:hidden",a.className)})}function C(a){return e("div",{...a,className:n("lg:flex hidden",a.className)})}function i({as:a,className:s,...m}){return e("li",{children:e(a||"a",{...m,className:n("hover:text-primary",s)})})}function j({className:a,...s}){return e("ul",{...s,className:n("flex flex-wrap gap-4 items-center text-sm font-medium text-card-foreground",a)})}const t=U.forwardRef(({className:a,...s},m)=>e("nav",{...s,ref:m,className:n("bg-card shadow-md flex flex-row justify-between items-center gap-2 p-4 w-full",a)}));t.displayName="Navbar";try{t.displayName="Navbar",t.__docgenInfo={description:"",displayName:"Navbar",props:{}}}catch{}const G={component:t,title:"Layout/Navbar"},c={render:()=>r(t,{children:[r("div",{className:"flex flex-row items-center gap-2",children:[e(p,{}),e("h1",{className:"text-lg uppercase",children:"Ulisse UI"})]}),e(C,{children:r(j,{className:"hidden lg:flex",children:[e(i,{href:"#",children:"Home"}),e(i,{href:"#",children:"About"}),e(i,{href:"#",children:"Privacy"}),e(i,{href:"#",children:"Contact"})]})}),e(_,{children:e(L,{variant:"flat",children:e(I,{})})})]})},o={render:()=>r(t,{className:"bg-primary text-primary-foreground",children:[r("div",{className:"flex flex-row items-center gap-2",children:[e(p,{}),e("h1",{className:"text-lg uppercase",children:"Ulisse UI"})]}),e(k,{as:y,layout:"constrained",width:400,height:300,src:"https://cdn.shopify.com/static/sample-images/bath.jpeg",alt:"test",size:"sm"})]})},l={render:()=>r("div",{children:[r(t,{className:"sticky left-0 top-0 bg-primary text-primary-foreground",children:[r("div",{className:"flex flex-row items-center gap-2",children:[e(p,{}),e("h1",{className:"text-lg uppercase",children:"Ulisse UI"})]}),e(k,{as:y,layout:"constrained",width:400,height:300,src:"https://cdn.shopify.com/static/sample-images/bath.jpeg",alt:"test",size:"sm"})]}),e("p",{children:w.lorem.paragraph(300)})]})};var d,h,f;c.parameters={...c.parameters,docs:{...(d=c.parameters)==null?void 0:d.docs,source:{originalSource:`{
  render: () => {
    return <Navbar>
        <div className="flex flex-row items-center gap-2">
          <Cat />
          <h1 className="text-lg uppercase">Ulisse UI</h1>
        </div>
        <NavbarDesktop>
          <NavbarLinks className="hidden lg:flex">
            <NavbarLink href="#">Home</NavbarLink>
            <NavbarLink href="#">About</NavbarLink>
            <NavbarLink href="#">Privacy</NavbarLink>
            <NavbarLink href="#">Contact</NavbarLink>
          </NavbarLinks>
        </NavbarDesktop>
        <NavbarMobile>
          <Button variant="flat">
            <Menu />
          </Button>
        </NavbarMobile>
      </Navbar>;
  }
}`,...(f=(h=c.parameters)==null?void 0:h.docs)==null?void 0:f.source}}};var N,u,v;o.parameters={...o.parameters,docs:{...(N=o.parameters)==null?void 0:N.docs,source:{originalSource:`{
  render: () => {
    return <Navbar className="bg-primary text-primary-foreground">
        <div className="flex flex-row items-center gap-2">
          <Cat />
          <h1 className="text-lg uppercase">Ulisse UI</h1>
        </div>
        <Avatar as={Image} layout="constrained" width={400} height={300} src="https://cdn.shopify.com/static/sample-images/bath.jpeg" alt="test" size="sm" />
      </Navbar>;
  }
}`,...(v=(u=o.parameters)==null?void 0:u.docs)==null?void 0:v.source}}};var g,b,x;l.parameters={...l.parameters,docs:{...(g=l.parameters)==null?void 0:g.docs,source:{originalSource:`{
  render: () => {
    return <div>
        <Navbar className="sticky left-0 top-0 bg-primary text-primary-foreground">
          <div className="flex flex-row items-center gap-2">
            <Cat />
            <h1 className="text-lg uppercase">Ulisse UI</h1>
          </div>
          <Avatar as={Image} layout="constrained" width={400} height={300} src="https://cdn.shopify.com/static/sample-images/bath.jpeg" alt="test" size="sm" />
        </Navbar>
        <p>{faker.lorem.paragraph(300)}</p>
      </div>;
  }
}`,...(x=(b=l.parameters)==null?void 0:b.docs)==null?void 0:x.source}}};const J=["Default","WithAvatar","Fixed"];export{c as Default,l as Fixed,o as WithAvatar,J as __namedExportsOrder,G as default};
