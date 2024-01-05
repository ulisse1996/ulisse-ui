import{j as e}from"./clsx-KtS07kqv.js";import{f as k}from"./index-KLTnsmU9.js";import{I as b}from"./chunk-W7EQS7E7-L66vMpM1.js";import{A as j}from"./avatar--eBa8FtU.js";import{B as w}from"./index-S8TDwp6l.js";import{r as L}from"./index-4g5l5LRQ.js";import{c as t}from"./utils-1S_n7jHw.js";import{C as m}from"./cat-FDIX2TDr.js";import{M as U}from"./menu-i9mfWLfc.js";import"./index-nyTKe3TY.js";import"./spinner--pkT1kzj.js";import"./_commonjsHelpers-4gQjN7DL.js";import"./createLucideIcon-cZfFbMz1.js";function I(a){return e.jsx("div",{...a,className:t("flex lg:hidden",a.className)})}function _(a){return e.jsx("div",{...a,className:t("lg:flex hidden",a.className)})}function n({as:a,className:s,...l}){const y=a||"a";return e.jsx("li",{children:e.jsx(y,{...l,className:t("hover:text-primary",s)})})}function A({className:a,...s}){return e.jsx("ul",{...s,className:t("flex flex-wrap gap-4 items-center text-sm font-medium text-card-foreground",a)})}const r=L.forwardRef(({className:a,...s},l)=>e.jsx("nav",{...s,ref:l,className:t("bg-card shadow-md flex flex-row justify-between items-center gap-2 p-4 w-full",a)}));r.displayName="Navbar";try{r.displayName="Navbar",r.__docgenInfo={description:"",displayName:"Navbar",props:{}}}catch{}const q={component:r,title:"Layout/Navbar"},i={render:()=>e.jsxs(r,{children:[e.jsxs("div",{className:"flex flex-row items-center gap-2",children:[e.jsx(m,{}),e.jsx("h1",{className:"text-lg uppercase",children:"Ulisse UI"})]}),e.jsx(_,{children:e.jsxs(A,{className:"hidden lg:flex",children:[e.jsx(n,{href:"#",children:"Home"}),e.jsx(n,{href:"#",children:"About"}),e.jsx(n,{href:"#",children:"Privacy"}),e.jsx(n,{href:"#",children:"Contact"})]})}),e.jsx(I,{children:e.jsx(w,{variant:"flat",children:e.jsx(U,{})})})]})},c={render:()=>e.jsxs(r,{className:"bg-primary text-primary-foreground",children:[e.jsxs("div",{className:"flex flex-row items-center gap-2",children:[e.jsx(m,{}),e.jsx("h1",{className:"text-lg uppercase",children:"Ulisse UI"})]}),e.jsx(j,{as:b,layout:"constrained",width:400,height:300,src:"https://cdn.shopify.com/static/sample-images/bath.jpeg",alt:"test",size:"sm"})]})},o={render:()=>e.jsxs("div",{children:[e.jsxs(r,{className:"sticky left-0 top-0 bg-primary text-primary-foreground",children:[e.jsxs("div",{className:"flex flex-row items-center gap-2",children:[e.jsx(m,{}),e.jsx("h1",{className:"text-lg uppercase",children:"Ulisse UI"})]}),e.jsx(j,{as:b,layout:"constrained",width:400,height:300,src:"https://cdn.shopify.com/static/sample-images/bath.jpeg",alt:"test",size:"sm"})]}),e.jsx("p",{children:k.lorem.paragraph(300)})]})};var p,d,h;i.parameters={...i.parameters,docs:{...(p=i.parameters)==null?void 0:p.docs,source:{originalSource:`{
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
}`,...(h=(d=i.parameters)==null?void 0:d.docs)==null?void 0:h.source}}};var x,f,N;c.parameters={...c.parameters,docs:{...(x=c.parameters)==null?void 0:x.docs,source:{originalSource:`{
  render: () => {
    return <Navbar className="bg-primary text-primary-foreground">
        <div className="flex flex-row items-center gap-2">
          <Cat />
          <h1 className="text-lg uppercase">Ulisse UI</h1>
        </div>
        <Avatar as={Image} layout="constrained" width={400} height={300} src="https://cdn.shopify.com/static/sample-images/bath.jpeg" alt="test" size="sm" />
      </Navbar>;
  }
}`,...(N=(f=c.parameters)==null?void 0:f.docs)==null?void 0:N.source}}};var u,v,g;o.parameters={...o.parameters,docs:{...(u=o.parameters)==null?void 0:u.docs,source:{originalSource:`{
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
}`,...(g=(v=o.parameters)==null?void 0:v.docs)==null?void 0:g.source}}};const G=["Default","WithAvatar","Fixed"];export{i as Default,o as Fixed,c as WithAvatar,G as __namedExportsOrder,q as default};
