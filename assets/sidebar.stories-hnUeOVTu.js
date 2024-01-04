import{j as e}from"./clsx-KtS07kqv.js";import{e as m,f as l,g as p,d}from"./index-dA-Ahb8W.js";import{C as h}from"./card-ARLtkFle.js";import{I as f}from"./input-_u6HQfzb.js";import{L as r,a as s}from"./list-0UqcNVr7.js";import{T as x}from"./typography-eVQrMv8N.js";import{c as t}from"./createLucideIcon-cZfFbMz1.js";import{C as y}from"./chevron-down-4Sr4ed1S.js";import{C as n}from"./chevron-right-VaZ_Ug1n.js";import"./index-4g5l5LRQ.js";import"./_commonjsHelpers-4gQjN7DL.js";import"./extends-dGVwEr9R.js";import"./index-0dIgYeBD.js";import"./index-mbzsKfaj.js";import"./index-XGpeoBSN.js";import"./index-jmm5gWkb.js";import"./index-TcKUnSVx.js";import"./index-cd2BOhhG.js";import"./index-8KrFLZLq.js";import"./utils-1S_n7jHw.js";import"./label-Uh2-_B8m.js";import"./menu-UrwFCh5W.js";import"./index-VzvA_wF4.js";import"./Combination-nC2vVd1Z.js";import"./index-HHSENXoC.js";import"./index-EwzVq0z5.js";import"./index-zgrs-vd1.js";import"./index-Xxi_BI8n.js";import"./index-nyTKe3TY.js";/**
 * @license lucide-react v0.293.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const u=t("DollarSign",[["line",{x1:"12",x2:"12",y1:"2",y2:"22",key:"7eqyqh"}],["path",{d:"M17 5H9.5a3.5 3.5 0 0 0 0 7h5a3.5 3.5 0 0 1 0 7H6",key:"1b0p4s"}]]);/**
 * @license lucide-react v0.293.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const g=t("Presentation",[["path",{d:"M2 3h20",key:"91anmk"}],["path",{d:"M21 3v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V3",key:"2k9sn8"}],["path",{d:"m7 21 5-5 5 5",key:"bip4we"}]]);/**
 * @license lucide-react v0.293.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const j=t("Search",[["circle",{cx:"11",cy:"11",r:"8",key:"4ej97u"}],["path",{d:"m21 21-4.3-4.3",key:"1qie3q"}]]);/**
 * @license lucide-react v0.293.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const b=t("Users",[["path",{d:"M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2",key:"1yyitq"}],["circle",{cx:"9",cy:"7",r:"4",key:"nufk8"}],["path",{d:"M22 21v-2a4 4 0 0 0-3-3.87",key:"kshegd"}],["path",{d:"M16 3.13a4 4 0 0 1 0 7.75",key:"1da9ce"}]]),W={title:"Layout/Sidebar"},a={render:()=>e.jsxs(h,{className:"flex h-svh max-w-64 flex-col gap-4 rounded-none p-4",children:[e.jsx(x,{variant:"h5",children:"My Company"}),e.jsx(f,{leftComponent:e.jsx(j,{size:16})}),e.jsxs(r,{className:"p-0",children:[e.jsx(m,{type:"single",collapsible:!0,children:e.jsxs(l,{value:"dashboard",children:[e.jsx(p,{className:"[&[data-state=open]>svg]:rotate-180",asChild:!0,children:e.jsxs(s,{className:"w-full justify-between",children:[e.jsxs("div",{className:"flex items-center justify-start gap-4",children:[e.jsx(g,{size:16})," Dashboard"]}),e.jsx(y,{className:"h-4 w-4 shrink-0 transition-transform duration-200"})]})}),e.jsx(d,{className:"w-full overflow-hidden py-2 text-sm transition-all data-[state=closed]:animate-accordion-up data-[state=open]:animate-accordion-down",children:e.jsxs(r,{className:"ml-4 p-0",children:[e.jsxs(s,{className:"w-full gap-4",children:[e.jsx(n,{size:16})," Report"]}),e.jsxs(s,{className:"w-full gap-4",children:[e.jsx(n,{size:16})," Analytics"]})]})})]})}),e.jsxs(s,{className:"gap-4",children:[e.jsx(u,{size:16})," Invoices"]}),e.jsxs(s,{className:"gap-4",children:[e.jsx(b,{size:16})," Users"]})]})]})};var o,i,c;a.parameters={...a.parameters,docs:{...(o=a.parameters)==null?void 0:o.docs,source:{originalSource:`{
  render: () => {
    return <Card className="flex h-svh max-w-64 flex-col gap-4 rounded-none p-4">
        <Typography variant="h5">My Company</Typography>
        <Input leftComponent={<Search size={16} />} />
        <List className="p-0">
          <Accordion type="single" collapsible>
            <AccordionItem value="dashboard">
              <AccordionTrigger className="[&[data-state=open]>svg]:rotate-180" asChild>
                <ListItem className="w-full justify-between">
                  <div className="flex items-center justify-start gap-4">
                    <Presentation size={16} /> Dashboard
                  </div>
                  <ChevronDown className="h-4 w-4 shrink-0 transition-transform duration-200" />
                </ListItem>
              </AccordionTrigger>
              <AccordionContent className="w-full overflow-hidden py-2 text-sm transition-all data-[state=closed]:animate-accordion-up data-[state=open]:animate-accordion-down">
                <List className="ml-4 p-0">
                  <ListItem className="w-full gap-4">
                    <ChevronRight size={16} /> Report
                  </ListItem>
                  <ListItem className="w-full gap-4">
                    <ChevronRight size={16} /> Analytics
                  </ListItem>
                </List>
              </AccordionContent>
            </AccordionItem>
          </Accordion>
          <ListItem className="gap-4">
            <DollarSign size={16} /> Invoices
          </ListItem>
          <ListItem className="gap-4">
            <Users size={16} /> Users
          </ListItem>
        </List>
      </Card>;
  }
}`,...(c=(i=a.parameters)==null?void 0:i.docs)==null?void 0:c.source}}};const X=["Default"];export{a as Default,X as __namedExportsOrder,W as default};
