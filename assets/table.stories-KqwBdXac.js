import{j as e}from"./jsx-runtime-vNq4Oc-g.js";import{f as o}from"./index-KLTnsmU9.js";import{r as s}from"./index-4g5l5LRQ.js";import{P as R}from"./pagination-HETeTezt.js";import{c}from"./utils-HR2XZNS3.js";import"./_commonjsHelpers-4gQjN7DL.js";import"./index-8fJbMDui.js";import"./index-_UegSYSw.js";import"./spinner-TPfN3SXW.js";import"./createLucideIcon-cZfFbMz1.js";import"./chevron-right-VaZ_Ug1n.js";const m=s.forwardRef(({className:a,...l},r)=>e.jsx("div",{className:"relative w-full overflow-auto",children:e.jsx("table",{ref:r,className:c("w-full caption-bottom text-sm",a),...l})}));m.displayName="Table";const T=s.forwardRef(({className:a,...l},r)=>e.jsx("thead",{ref:r,className:c("[&_tr]:border-b bg-primary [&_tr>th:first-child]:rounded-tl-md [&_tr>th:last-child]:rounded-tr-md",a),...l}));T.displayName="TableHeader";const x=s.forwardRef(({className:a,...l},r)=>e.jsx("tbody",{ref:r,className:c("[&_tr:last-child]:border-0",a),...l}));x.displayName="TableBody";const h=s.forwardRef(({className:a,...l},r)=>e.jsx("tfoot",{ref:r,className:c("border-t bg-primary text-primary-foreground font-medium [&>tr]:last:border-b-0 [&_tr>td:first-child]:rounded-bl-md [&_tr>td:last-child]:rounded-br-md",a),...l}));h.displayName="TableFooter";const d=s.forwardRef(({className:a,...l},r)=>e.jsx("tr",{ref:r,className:c("border-b transition-colors hover:bg-primary hover:text-primary-foreground data-[state=selected]:bg-muted",a),...l}));d.displayName="TableRow";const n=s.forwardRef(({className:a,...l},r)=>e.jsx("th",{ref:r,className:c("h-12 px-4 text-left align-middle font-medium text-primary-foreground [&:has([role=checkbox])]:pr-0",a),...l}));n.displayName="TableHead";const t=s.forwardRef(({className:a,...l},r)=>e.jsx("td",{ref:r,className:c("p-4 align-middle [&:has([role=checkbox])]:pr-0",a),...l}));t.displayName="TableCell";try{m.displayName="Table",m.__docgenInfo={description:"",displayName:"Table",props:{}}}catch{}const w=[...Array(10)].map(a=>{const l=o.commerce.price();return{id:o.number.int(),name:o.commerce.productName(),payedAmount:{currency:"$",amount:Number(l)},description:o.commerce.productDescription()}}),u=[...Array(100)].map(a=>{const l=o.commerce.price();return{id:o.number.int(),name:o.commerce.productName(),payedAmount:{currency:"$",amount:Number(l)},description:o.commerce.productDescription()}}),H="$",$=w.reduce((a,l)=>a+l.payedAmount.amount,0),A=u.reduce((a,l)=>a+l.payedAmount.amount,0),z={component:m,title:"Components/Table"},p={render:()=>e.jsxs(m,{children:[e.jsx(T,{children:e.jsxs(d,{children:[e.jsx(n,{className:"w-[100px]",children:"Invoice"}),e.jsx(n,{children:"Status"}),e.jsx(n,{children:"Method"}),e.jsx(n,{className:"text-right",children:"Amount"})]})}),e.jsx(x,{children:w.map(a=>e.jsxs(d,{children:[e.jsx(t,{className:"font-medium",children:a.id}),e.jsx(t,{children:a.name}),e.jsx(t,{children:a.description}),e.jsx(t,{className:"text-right",children:`${a.payedAmount.currency} ${a.payedAmount.amount}`})]},a.id))}),e.jsx(h,{children:e.jsxs(d,{children:[e.jsx(t,{colSpan:3,children:"Total"}),e.jsx(t,{className:"text-right",children:`${H} ${$}`})]})})]})},b={render:()=>{const[a,l]=s.useState(1),r=u.slice((a-1)*8,a*8);return e.jsxs("div",{className:"flex flex-col gap-4",children:[e.jsxs(m,{children:[e.jsx(T,{children:e.jsxs(d,{children:[e.jsx(n,{className:"w-[100px]",children:"Invoice"}),e.jsx(n,{children:"Status"}),e.jsx(n,{children:"Method"}),e.jsx(n,{className:"text-right",children:"Amount"})]})}),e.jsx(x,{children:r.map(i=>e.jsxs(d,{children:[e.jsx(t,{className:"font-medium",children:i.id}),e.jsx(t,{children:i.name}),e.jsx(t,{children:i.description}),e.jsx(t,{className:"text-right",children:`${i.payedAmount.currency} ${i.payedAmount.amount}`})]},i.id))}),e.jsx(h,{children:e.jsxs(d,{children:[e.jsx(t,{colSpan:3,children:"Total"}),e.jsx(t,{className:"text-right",children:`${H}${A}`})]})})]}),e.jsx("div",{className:"flex justify-end",children:e.jsx(R,{onPageChange:l,currentPage:a,total:u.length,pageSize:8,maxPages:8})})]})}};var g,y,j;p.parameters={...p.parameters,docs:{...(g=p.parameters)==null?void 0:g.docs,source:{originalSource:`{
  render: () => {
    return <Table>
        <TableHeader>
          <TableRow>
            <TableHead className="w-[100px]">Invoice</TableHead>
            <TableHead>Status</TableHead>
            <TableHead>Method</TableHead>
            <TableHead className="text-right">Amount</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {data.map(product => <TableRow key={product.id}>
              <TableCell className="font-medium">{product.id}</TableCell>
              <TableCell>{product.name}</TableCell>
              <TableCell>{product.description}</TableCell>
              <TableCell className="text-right">{\`\${product.payedAmount.currency} \${product.payedAmount.amount}\`}</TableCell>
            </TableRow>)}
        </TableBody>
        <TableFooter>
          <TableRow>
            <TableCell colSpan={3}>Total</TableCell>
            <TableCell className="text-right">{\`\${currency} \${total}\`}</TableCell>
          </TableRow>
        </TableFooter>
      </Table>;
  }
}`,...(j=(y=p.parameters)==null?void 0:y.docs)==null?void 0:j.source}}};var f,N,C;b.parameters={...b.parameters,docs:{...(f=b.parameters)==null?void 0:f.docs,source:{originalSource:`{
  render: () => {
    const [page, setPage] = useState(1);
    const pageData = paginatedData.slice((page - 1) * 8, page * 8);
    return <div className="flex flex-col gap-4">
        <Table>
          <TableHeader>
            <TableRow>
              <TableHead className="w-[100px]">Invoice</TableHead>
              <TableHead>Status</TableHead>
              <TableHead>Method</TableHead>
              <TableHead className="text-right">Amount</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {pageData.map(product => <TableRow key={product.id}>
                <TableCell className="font-medium">{product.id}</TableCell>
                <TableCell>{product.name}</TableCell>
                <TableCell>{product.description}</TableCell>
                <TableCell className="text-right">{\`\${product.payedAmount.currency} \${product.payedAmount.amount}\`}</TableCell>
              </TableRow>)}
          </TableBody>
          <TableFooter>
            <TableRow>
              <TableCell colSpan={3}>Total</TableCell>
              <TableCell className="text-right">{\`\${currency}\${totalPaginated}\`}</TableCell>
            </TableRow>
          </TableFooter>
        </Table>
        <div className="flex justify-end">
          <Pagination onPageChange={setPage} currentPage={page} total={paginatedData.length} pageSize={8} maxPages={8} />
        </div>
      </div>;
  }
}`,...(C=(N=b.parameters)==null?void 0:N.docs)==null?void 0:C.source}}};const O=["Default","Paginated"];export{p as Default,b as Paginated,O as __namedExportsOrder,z as default};
