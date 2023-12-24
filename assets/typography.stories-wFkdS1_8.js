import{j as a}from"./clsx-KtS07kqv.js";import{c as d}from"./index-nyTKe3TY.js";import{r as y}from"./index-4g5l5LRQ.js";import{c as g}from"./utils-1S_n7jHw.js";import"./_commonjsHelpers-4gQjN7DL.js";const c=d("",{variants:{variant:{h1:"text-5xl font-bold",h2:"text-4xl font-bold",h3:"text-3xl font-bold",h4:"text-2xl font-bold",h5:"text-xl font-bold",h6:"text-base font-bold",p:"text-base",small:"text-sm font-light"}}}),r=y.forwardRef(({variant:e,className:i,...h},l)=>{const s=e;return a.jsx(s,{...h,ref:l,className:g(c({variant:e,className:i}))})});try{r.displayName="Typography",r.__docgenInfo={description:"",displayName:"Typography",props:{variant:{defaultValue:null,description:"",name:"variant",required:!0,type:{name:"enum",value:[{value:'"h2"'},{value:'"h3"'},{value:'"p"'},{value:'"h1"'},{value:'"h4"'},{value:'"h5"'},{value:'"h6"'},{value:'"small"'}]}}}}}catch{}const f={component:r,title:"Components/Typography"},n={render:()=>a.jsxs(a.Fragment,{children:[a.jsx(r,{variant:"h1",children:"Heading 1"}),a.jsx(r,{variant:"h2",children:"Heading 2"}),a.jsx(r,{variant:"h3",children:"Heading 3"}),a.jsx(r,{variant:"h4",children:"Heading 4"}),a.jsx(r,{variant:"h5",children:"Heading 5"}),a.jsx(r,{variant:"h6",children:"Heading 6"}),a.jsx(r,{variant:"p",children:"Paragraph"}),a.jsx(r,{variant:"small",children:"Small"}),a.jsx(r,{variant:"p",className:"font-bold",children:"Custom With Bold"})]})};var t,o,p;n.parameters={...n.parameters,docs:{...(t=n.parameters)==null?void 0:t.docs,source:{originalSource:`{
  render: () => {
    return <>
        <Typography variant="h1">Heading 1</Typography>
        <Typography variant="h2">Heading 2</Typography>
        <Typography variant="h3">Heading 3</Typography>
        <Typography variant="h4">Heading 4</Typography>
        <Typography variant="h5">Heading 5</Typography>
        <Typography variant="h6">Heading 6</Typography>
        <Typography variant="p">Paragraph</Typography>
        <Typography variant="small">Small</Typography>
        <Typography variant="p" className="font-bold">
          Custom With Bold
        </Typography>
      </>;
  }
}`,...(p=(o=n.parameters)==null?void 0:o.docs)==null?void 0:p.source}}};const j=["Default"];export{n as Default,j as __namedExportsOrder,f as default};
