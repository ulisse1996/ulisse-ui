import{j as P}from"./jsx-runtime-29545a09.js";import{r as p}from"./index-76fb7be0.js";import{P as o}from"./pagination-8b9cf8c7.js";import"./_commonjsHelpers-de833af9.js";import"./index-ac2f2f2d.js";import"./index-a011252c.js";import"./utils-636fbba8.js";import"./spinner-8a72c79d.js";import"./createLucideIcon-de0f8b79.js";import"./chevron-right-fb29f17f.js";const _={component:o,title:"Components/Pagination"},t={args:{currentPage:3,pageSize:5,total:11,maxPages:8},render:e=>{const[a,n]=p.useState(e.currentPage);return P(o,{...e,onPageChange:r=>{n(r)},currentPage:a})}},g={args:{currentPage:1,pageSize:5,total:50,maxPages:8},render:e=>{const[a,n]=p.useState(e.currentPage);return P(o,{...e,onPageChange:r=>{n(r)},currentPage:a})}},s={args:{currentPage:1,pageSize:5,total:500,maxPages:8},render:e=>{const[a,n]=p.useState(e.currentPage);return P(o,{...e,onPageChange:r=>{n(r)},currentPage:a})}};var u,m,i;t.parameters={...t.parameters,docs:{...(u=t.parameters)==null?void 0:u.docs,source:{originalSource:`{
  args: {
    currentPage: 3,
    pageSize: 5,
    total: 11,
    maxPages: 8
  },
  render: props => {
    const [page, setPage] = useState(props.currentPage);
    const handlePageChange = (p: number) => {
      setPage(p);
    };
    return <Pagination {...props} onPageChange={handlePageChange} currentPage={page} />;
  }
}`,...(i=(m=t.parameters)==null?void 0:m.docs)==null?void 0:i.source}}};var h,d,l;g.parameters={...g.parameters,docs:{...(h=g.parameters)==null?void 0:h.docs,source:{originalSource:`{
  args: {
    currentPage: 1,
    pageSize: 5,
    total: 50,
    maxPages: 8
  },
  render: props => {
    const [page, setPage] = useState(props.currentPage);
    const handlePageChange = (p: number) => {
      setPage(p);
    };
    return <Pagination {...props} onPageChange={handlePageChange} currentPage={page} />;
  }
}`,...(l=(d=g.parameters)==null?void 0:d.docs)==null?void 0:l.source}}};var C,S,x;s.parameters={...s.parameters,docs:{...(C=s.parameters)==null?void 0:C.docs,source:{originalSource:`{
  args: {
    currentPage: 1,
    pageSize: 5,
    total: 500,
    maxPages: 8
  },
  render: props => {
    const [page, setPage] = useState(props.currentPage);
    const handlePageChange = (p: number) => {
      setPage(p);
    };
    return <Pagination {...props} onPageChange={handlePageChange} currentPage={page} />;
  }
}`,...(x=(S=s.parameters)==null?void 0:S.docs)==null?void 0:x.source}}};const k=["LessThanMaxPages","Default","LotsOfPages"];export{g as Default,t as LessThanMaxPages,s as LotsOfPages,k as __namedExportsOrder,_ as default};
