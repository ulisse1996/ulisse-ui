import{a as o,j as e}from"./jsx-runtime-29545a09.js";import{r as v}from"./index-76fb7be0.js";import{c as a}from"./utils-636fbba8.js";import{C as y}from"./cat-11456127.js";import"./_commonjsHelpers-de833af9.js";import"./createLucideIcon-de0f8b79.js";function w(r){return o("div",{className:"mt-4 flex w-full flex-col gap-4",children:[e("div",{className:"border-[1px] border-gray-500"}),e("p",{...r,className:a("text-center",r.className)})]})}function s({as:r,className:t,...d}){return e("li",{children:e(r||"a",{...d,className:a("hover:text-primary",t)})})}function k({className:r,...t}){return e("ul",{...t,className:a("flex flex-wrap gap-4 items-center text-sm font-medium text-card-foreground",r)})}function m({className:r,...t}){return e("div",{...t,className:a("flex flex-row w-full",r)})}const n=v.forwardRef(({className:r,...t},d)=>e("footer",{...t,className:a("bg-card w-full shadow-md p-4",r),ref:d}));n.displayName="Footer";try{n.displayName="Footer",n.__docgenInfo={description:"",displayName:"Footer",props:{}}}catch{}const I={component:n,title:"Layout/Footer"},c={render:()=>o(n,{children:[o(m,{className:"justify-between",children:[o("div",{className:"flex flex-row items-center gap-2",children:[e(y,{}),e("h1",{className:"text-lg uppercase",children:"Ulisse UI"})]}),o(k,{children:[e(s,{href:"#",children:"About"}),e(s,{href:"#",children:"Privacy"}),e(s,{href:"#",children:"Contact"})]})]}),e(m,{className:"justify-center",children:e(w,{children:"© 2023 Ulisse UI. All Rights Reserved"})})]})},l={render:()=>e(n,{children:e(m,{children:o("div",{className:"flex flex-row items-center gap-2",children:[e(y,{}),e("h1",{className:"text-lg uppercase",children:"Ulisse UI"})]})})})},i={render:()=>e(n,{children:e(m,{className:"justify-center",children:o(k,{children:[e(s,{href:"#",children:"About"}),e(s,{href:"#",children:"Privacy"}),e(s,{href:"#",children:"Contact"})]})})})};var f,p,h;c.parameters={...c.parameters,docs:{...(f=c.parameters)==null?void 0:f.docs,source:{originalSource:`{
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
}`,...(h=(p=c.parameters)==null?void 0:p.docs)==null?void 0:h.source}}};var u,F,x;l.parameters={...l.parameters,docs:{...(u=l.parameters)==null?void 0:u.docs,source:{originalSource:`{
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
}`,...(x=(F=l.parameters)==null?void 0:F.docs)==null?void 0:x.source}}};var g,N,L;i.parameters={...i.parameters,docs:{...(g=i.parameters)==null?void 0:g.docs,source:{originalSource:`{
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
}`,...(L=(N=i.parameters)==null?void 0:N.docs)==null?void 0:L.source}}};const A=["Default","OnlyLogo","OnlyLinks"];export{c as Default,i as OnlyLinks,l as OnlyLogo,A as __namedExportsOrder,I as default};
