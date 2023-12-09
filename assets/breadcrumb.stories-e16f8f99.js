import{j as e,a as p}from"./jsx-runtime-29545a09.js";import{r as s}from"./index-76fb7be0.js";import{c as D}from"./utils-636fbba8.js";import"./_commonjsHelpers-de833af9.js";const d=s.forwardRef(({children:o,disabled:t,className:u,...h},a)=>{const f=s.Children.count(o);return e("nav",{children:e("ol",{ref:a,className:D("flex flex-row gap-1",u),...h,children:s.Children.map(o,(r,m)=>s.cloneElement(r,{last:m===f-1,disabled:t,index:m+1}))})})});function c({children:o,last:t,className:u,separator:h,disabled:a,index:f,...r}){const m=h||e("span",{"aria-hidden":"true",style:{padding:"0 5px"},children:"›"});return p("li",{children:[e("a",{role:"link",tabIndex:f||0,onKeyUp:n=>{if(a){n.preventDefault();return}r.onKeyUp&&r.onKeyUp(n)},onKeyDown:n=>{if(a){n.preventDefault();return}r.onKeyDown&&r.onKeyDown(n)},onClick:n=>{if(a){n.preventDefault();return}r.onClick&&r.onClick(n)},...r,className:D("text-primary",{"font-bold":t,underline:!t},a&&"cursor-not-allowed no-underline",a&&!t&&"text-muted",u),children:o}),!t&&m]})}d.displayName="Breadcrumb";try{d.displayName="Breadcrumb",d.__docgenInfo={description:"",displayName:"Breadcrumb",props:{disabled:{defaultValue:null,description:"",name:"disabled",required:!1,type:{name:"boolean"}}}}}catch{}const N={component:d,title:"Components/Breadcrumb"},l={render:()=>p(d,{children:[e(c,{href:"#",children:"First Path"}),e(c,{href:"#",children:"Second Path"}),e(c,{href:"#",children:"Last Path"})]})},i={render:()=>p(d,{disabled:!0,children:[e(c,{href:"#",children:"First Path"}),e(c,{href:"#",children:"Second Path"}),e(c,{href:"#",children:"Last Path"})]})};var b,B,P;l.parameters={...l.parameters,docs:{...(b=l.parameters)==null?void 0:b.docs,source:{originalSource:`{
  render: () => {
    return <Breadcrumb>
        <BreadcrumbItem href="#">First Path</BreadcrumbItem>
        <BreadcrumbItem href="#">Second Path</BreadcrumbItem>
        <BreadcrumbItem href="#">Last Path</BreadcrumbItem>
      </Breadcrumb>;
  }
}`,...(P=(B=l.parameters)==null?void 0:B.docs)==null?void 0:P.source}}};var I,y,x;i.parameters={...i.parameters,docs:{...(I=i.parameters)==null?void 0:I.docs,source:{originalSource:`{
  render: () => {
    return <Breadcrumb disabled>
        <BreadcrumbItem href="#">First Path</BreadcrumbItem>
        <BreadcrumbItem href="#">Second Path</BreadcrumbItem>
        <BreadcrumbItem href="#">Last Path</BreadcrumbItem>
      </Breadcrumb>;
  }
}`,...(x=(y=i.parameters)==null?void 0:y.docs)==null?void 0:x.source}}};const U=["Default","Disabled"];export{l as Default,i as Disabled,U as __namedExportsOrder,N as default};
