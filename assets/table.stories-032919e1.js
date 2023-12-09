import{j as e,a as n}from"./jsx-runtime-29545a09.js";import{f as d}from"./index-3a83ac04.js";import{r as c}from"./index-76fb7be0.js";import{P as A}from"./pagination-8b9cf8c7.js";import{c as s}from"./utils-636fbba8.js";import"./_commonjsHelpers-de833af9.js";import"./index-ac2f2f2d.js";import"./index-a011252c.js";import"./spinner-8a72c79d.js";import"./createLucideIcon-de0f8b79.js";import"./chevron-right-fb29f17f.js";const p=c.forwardRef(({className:a,...l},r)=>e("div",{className:"relative w-full overflow-auto",children:e("table",{ref:r,className:s("w-full caption-bottom text-sm",a),...l})}));p.displayName="Table";const h=c.forwardRef(({className:a,...l},r)=>e("thead",{ref:r,className:s("[&_tr]:border-b bg-primary [&_tr>th:first-child]:rounded-tl-md [&_tr>th:last-child]:rounded-tr-md",a),...l}));h.displayName="TableHeader";const g=c.forwardRef(({className:a,...l},r)=>e("tbody",{ref:r,className:s("[&_tr:last-child]:border-0",a),...l}));g.displayName="TableBody";const y=c.forwardRef(({className:a,...l},r)=>e("tfoot",{ref:r,className:s("border-t bg-primary text-primary-foreground font-medium [&>tr]:last:border-b-0 [&_tr>td:first-child]:rounded-bl-md [&_tr>td:last-child]:rounded-br-md",a),...l}));y.displayName="TableFooter";const i=c.forwardRef(({className:a,...l},r)=>e("tr",{ref:r,className:s("border-b transition-colors hover:bg-primary hover:text-primary-foreground data-[state=selected]:bg-muted",a),...l}));i.displayName="TableRow";const o=c.forwardRef(({className:a,...l},r)=>e("th",{ref:r,className:s("h-12 px-4 text-left align-middle font-medium text-primary-foreground [&:has([role=checkbox])]:pr-0",a),...l}));o.displayName="TableHead";const t=c.forwardRef(({className:a,...l},r)=>e("td",{ref:r,className:s("p-4 align-middle [&:has([role=checkbox])]:pr-0",a),...l}));t.displayName="TableCell";try{p.displayName="Table",p.__docgenInfo={description:"",displayName:"Table",props:{}}}catch{}const R=[...Array(10)].map(a=>{const l=d.commerce.price();return{id:d.number.int(),name:d.commerce.productName(),payedAmount:{currency:"$",amount:Number(l)},description:d.commerce.productDescription()}}),T=[...Array(100)].map(a=>{const l=d.commerce.price();return{id:d.number.int(),name:d.commerce.productName(),payedAmount:{currency:"$",amount:Number(l)},description:d.commerce.productDescription()}}),$="$",_=R.reduce((a,l)=>a+l.payedAmount.amount,0),P=T.reduce((a,l)=>a+l.payedAmount.amount,0),O={component:p,title:"Components/Table"},b={render:()=>n(p,{children:[e(h,{children:n(i,{children:[e(o,{className:"w-[100px]",children:"Invoice"}),e(o,{children:"Status"}),e(o,{children:"Method"}),e(o,{className:"text-right",children:"Amount"})]})}),e(g,{children:R.map(a=>n(i,{children:[e(t,{className:"font-medium",children:a.id}),e(t,{children:a.name}),e(t,{children:a.description}),e(t,{className:"text-right",children:`${a.payedAmount.currency} ${a.payedAmount.amount}`})]},a.id))}),e(y,{children:n(i,{children:[e(t,{colSpan:3,children:"Total"}),e(t,{className:"text-right",children:`${$} ${_}`})]})})]})},u={render:()=>{const[a,l]=c.useState(1),r=T.slice((a-1)*8,a*8);return n("div",{className:"flex flex-col gap-4",children:[n(p,{children:[e(h,{children:n(i,{children:[e(o,{className:"w-[100px]",children:"Invoice"}),e(o,{children:"Status"}),e(o,{children:"Method"}),e(o,{className:"text-right",children:"Amount"})]})}),e(g,{children:r.map(m=>n(i,{children:[e(t,{className:"font-medium",children:m.id}),e(t,{children:m.name}),e(t,{children:m.description}),e(t,{className:"text-right",children:`${m.payedAmount.currency} ${m.payedAmount.amount}`})]},m.id))}),e(y,{children:n(i,{children:[e(t,{colSpan:3,children:"Total"}),e(t,{className:"text-right",children:`${$}${P}`})]})})]}),e("div",{className:"flex justify-end",children:e(A,{onPageChange:l,currentPage:a,total:T.length,pageSize:8,maxPages:8})})]})}};var f,N,x;b.parameters={...b.parameters,docs:{...(f=b.parameters)==null?void 0:f.docs,source:{originalSource:`{
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
}`,...(x=(N=b.parameters)==null?void 0:N.docs)==null?void 0:x.source}}};var C,w,H;u.parameters={...u.parameters,docs:{...(C=u.parameters)==null?void 0:C.docs,source:{originalSource:`{
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
}`,...(H=(w=u.parameters)==null?void 0:w.docs)==null?void 0:H.source}}};const q=["Default","Paginated"];export{b as Default,u as Paginated,q as __namedExportsOrder,O as default};
