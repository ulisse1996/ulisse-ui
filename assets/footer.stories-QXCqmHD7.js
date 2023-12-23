import{j as e}from"./clsx-KtS07kqv.js";import{r as k}from"./index-4g5l5LRQ.js";import{c as n}from"./utils-1S_n7jHw.js";import{C as N}from"./cat-FDIX2TDr.js";import"./_commonjsHelpers-4gQjN7DL.js";import"./createLucideIcon-cZfFbMz1.js";function v(r){return e.jsxs("div",{className:"mt-4 flex w-full flex-col gap-4",children:[e.jsx("div",{className:"border-[1px] border-gray-500"}),e.jsx("p",{...r,className:n("text-center",r.className)})]})}function o({as:r,className:s,...m}){const y=r||"a";return e.jsx("li",{children:e.jsx(y,{...m,className:n("hover:text-primary",s)})})}function L({className:r,...s}){return e.jsx("ul",{...s,className:n("flex flex-wrap gap-4 items-center text-sm font-medium text-card-foreground",r)})}function i({className:r,...s}){return e.jsx("div",{...s,className:n("flex flex-row w-full",r)})}const t=k.forwardRef(({className:r,...s},m)=>e.jsx("footer",{...s,className:n("bg-card w-full shadow-md p-4",r),ref:m}));t.displayName="Footer";try{t.displayName="Footer",t.__docgenInfo={description:"",displayName:"Footer",props:{}}}catch{}const R={component:t,title:"Layout/Footer"},a={render:()=>e.jsxs(t,{children:[e.jsxs(i,{className:"justify-between",children:[e.jsxs("div",{className:"flex flex-row items-center gap-2",children:[e.jsx(N,{}),e.jsx("h1",{className:"text-lg uppercase",children:"Ulisse UI"})]}),e.jsxs(L,{children:[e.jsx(o,{href:"#",children:"About"}),e.jsx(o,{href:"#",children:"Privacy"}),e.jsx(o,{href:"#",children:"Contact"})]})]}),e.jsx(i,{className:"justify-center",children:e.jsx(v,{children:"© 2023 Ulisse UI. All Rights Reserved"})})]})},c={render:()=>e.jsx(t,{children:e.jsx(i,{children:e.jsxs("div",{className:"flex flex-row items-center gap-2",children:[e.jsx(N,{}),e.jsx("h1",{className:"text-lg uppercase",children:"Ulisse UI"})]})})})},l={render:()=>e.jsx(t,{children:e.jsx(i,{className:"justify-center",children:e.jsxs(L,{children:[e.jsx(o,{href:"#",children:"About"}),e.jsx(o,{href:"#",children:"Privacy"}),e.jsx(o,{href:"#",children:"Contact"})]})})})};var d,x,f;a.parameters={...a.parameters,docs:{...(d=a.parameters)==null?void 0:d.docs,source:{originalSource:`{
  render: () => {
    return <Footer>
        <FooterElement className="justify-between">
          <div className="flex flex-row items-center gap-2">
            <Cat />
            <h1 className="text-lg uppercase">Ulisse UI</h1>
          </div>
          <FooterLinks>
            <FooterLink href="#">About</FooterLink>
            <FooterLink href="#">Privacy</FooterLink>
            <FooterLink href="#">Contact</FooterLink>
          </FooterLinks>
        </FooterElement>
        <FooterElement className="justify-center">
          <FooterRights>© 2023 Ulisse UI. All Rights Reserved</FooterRights>
        </FooterElement>
      </Footer>;
  }
}`,...(f=(x=a.parameters)==null?void 0:x.docs)==null?void 0:f.source}}};var p,u,h;c.parameters={...c.parameters,docs:{...(p=c.parameters)==null?void 0:p.docs,source:{originalSource:`{
  render: () => {
    return <Footer>
        <FooterElement>
          <div className="flex flex-row items-center gap-2">
            <Cat />
            <h1 className="text-lg uppercase">Ulisse UI</h1>
          </div>
        </FooterElement>
      </Footer>;
  }
}`,...(h=(u=c.parameters)==null?void 0:u.docs)==null?void 0:h.source}}};var F,j,g;l.parameters={...l.parameters,docs:{...(F=l.parameters)==null?void 0:F.docs,source:{originalSource:`{
  render: () => {
    return <Footer>
        <FooterElement className="justify-center">
          <FooterLinks>
            <FooterLink href="#">About</FooterLink>
            <FooterLink href="#">Privacy</FooterLink>
            <FooterLink href="#">Contact</FooterLink>
          </FooterLinks>
        </FooterElement>
      </Footer>;
  }
}`,...(g=(j=l.parameters)==null?void 0:j.docs)==null?void 0:g.source}}};const A=["Default","OnlyLogo","OnlyLinks"];export{a as Default,l as OnlyLinks,c as OnlyLogo,A as __namedExportsOrder,R as default};
