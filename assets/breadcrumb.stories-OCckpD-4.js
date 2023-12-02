import{j as e}from"./jsx-runtime-vNq4Oc-g.js";import{r as m}from"./index-4g5l5LRQ.js";import{a as y}from"./utils-LqYgCrNY.js";import"./_commonjsHelpers-4gQjN7DL.js";const d=m.forwardRef(({children:o,disabled:a,className:l,...h},t)=>{const f=m.Children.count(o);return e.jsx("nav",{children:e.jsx("ol",{ref:t,className:y("flex flex-row gap-1",l),...h,children:m.Children.map(o,(r,s)=>m.cloneElement(r,{last:s===f-1,disabled:a,index:s+1}))})})});function c({children:o,last:a,className:l,separator:h,disabled:t,index:f,...r}){const s=h||e.jsx("span",{"aria-hidden":"true",style:{padding:"0 5px"},children:"›"}),P=n=>{if(t){n.preventDefault();return}r.onClick&&r.onClick(n)},D=n=>{if(t){n.preventDefault();return}r.onKeyUp&&r.onKeyUp(n)},_=n=>{if(t){n.preventDefault();return}r.onKeyDown&&r.onKeyDown(n)};return e.jsxs("li",{children:[e.jsx("a",{role:"link",tabIndex:f||0,onKeyUp:D,onKeyDown:_,onClick:P,...r,className:y("text-primary",{"font-bold":a,underline:!a},t&&"cursor-not-allowed no-underline",t&&!a&&"text-muted",l),children:o}),!a&&s]})}d.displayName="Breadcrumb";try{d.displayName="Breadcrumb",d.__docgenInfo={description:"",displayName:"Breadcrumb",props:{disabled:{defaultValue:null,description:"",name:"disabled",required:!1,type:{name:"boolean"}}}}}catch{}const K={component:d,title:"Components/Breadcrumb"},i={render:()=>e.jsxs(d,{children:[e.jsx(c,{href:"#",children:"First Path"}),e.jsx(c,{href:"#",children:"Second Path"}),e.jsx(c,{href:"#",children:"Last Path"})]})},u={render:()=>e.jsxs(d,{disabled:!0,children:[e.jsx(c,{href:"#",children:"First Path"}),e.jsx(c,{href:"#",children:"Second Path"}),e.jsx(c,{href:"#",children:"Last Path"})]})};var p,b,x;i.parameters={...i.parameters,docs:{...(p=i.parameters)==null?void 0:p.docs,source:{originalSource:`{
  render: () => {
    return <Breadcrumb>
        <BreadcrumbItem href="#">First Path</BreadcrumbItem>
        <BreadcrumbItem href="#">Second Path</BreadcrumbItem>
        <BreadcrumbItem href="#">Last Path</BreadcrumbItem>
      </Breadcrumb>;
  }
}`,...(x=(b=i.parameters)==null?void 0:b.docs)==null?void 0:x.source}}};var B,j,I;u.parameters={...u.parameters,docs:{...(B=u.parameters)==null?void 0:B.docs,source:{originalSource:`{
  render: () => {
    return <Breadcrumb disabled>
        <BreadcrumbItem href="#">First Path</BreadcrumbItem>
        <BreadcrumbItem href="#">Second Path</BreadcrumbItem>
        <BreadcrumbItem href="#">Last Path</BreadcrumbItem>
      </Breadcrumb>;
  }
}`,...(I=(j=u.parameters)==null?void 0:j.docs)==null?void 0:I.source}}};const k=["Default","Disabled"];export{i as Default,u as Disabled,k as __namedExportsOrder,K as default};
