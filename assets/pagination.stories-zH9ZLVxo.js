import{j as P}from"./jsx-runtime-vNq4Oc-g.js";import{r as c}from"./index-4g5l5LRQ.js";import{P as p}from"./pagination-HETeTezt.js";import"./_commonjsHelpers-4gQjN7DL.js";import"./index-8fJbMDui.js";import"./index-_UegSYSw.js";import"./utils-HR2XZNS3.js";import"./spinner-TPfN3SXW.js";import"./createLucideIcon-cZfFbMz1.js";import"./chevron-right-VaZ_Ug1n.js";const _={component:p,title:"Components/Pagination"},s={args:{currentPage:3,pageSize:5,total:11,maxPages:8},render:e=>{const[a,n]=c.useState(e.currentPage),r=t=>{n(t)};return P.jsx(p,{...e,onPageChange:r,currentPage:a})}},g={args:{currentPage:1,pageSize:5,total:50,maxPages:8},render:e=>{const[a,n]=c.useState(e.currentPage),r=t=>{n(t)};return P.jsx(p,{...e,onPageChange:r,currentPage:a})}},o={args:{currentPage:1,pageSize:5,total:500,maxPages:8},render:e=>{const[a,n]=c.useState(e.currentPage),r=t=>{n(t)};return P.jsx(p,{...e,onPageChange:r,currentPage:a})}};var u,m,i;s.parameters={...s.parameters,docs:{...(u=s.parameters)==null?void 0:u.docs,source:{originalSource:`{
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
}`,...(i=(m=s.parameters)==null?void 0:m.docs)==null?void 0:i.source}}};var d,h,l;g.parameters={...g.parameters,docs:{...(d=g.parameters)==null?void 0:d.docs,source:{originalSource:`{
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
}`,...(l=(h=g.parameters)==null?void 0:h.docs)==null?void 0:l.source}}};var x,C,S;o.parameters={...o.parameters,docs:{...(x=o.parameters)==null?void 0:x.docs,source:{originalSource:`{
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
}`,...(S=(C=o.parameters)==null?void 0:C.docs)==null?void 0:S.source}}};const R=["LessThanMaxPages","Default","LotsOfPages"];export{g as Default,s as LessThanMaxPages,o as LotsOfPages,R as __namedExportsOrder,_ as default};
