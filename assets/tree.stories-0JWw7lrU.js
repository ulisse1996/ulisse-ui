import{j as e,c as O}from"./clsx-UwsAJbxu.js";import{C as B}from"./card-Nvn7YiDV.js";import{a as p}from"./list-SFd094T6.js";import{h as G,$ as C,c as J,a as K}from"./index-YWARlkLN.js";import{r as T}from"./index-4g5l5LRQ.js";import{C as Q}from"./chevron-down-4Sr4ed1S.js";import{c as f}from"./createLucideIcon-cZfFbMz1.js";import"./utils-knXUKJUl.js";import"./menu-n61mslWm.js";import"./extends-dGVwEr9R.js";import"./index-0dIgYeBD.js";import"./index-XGpeoBSN.js";import"./index-jmm5gWkb.js";import"./_commonjsHelpers-4gQjN7DL.js";import"./index-mbzsKfaj.js";import"./index-8KrFLZLq.js";import"./index-VzvA_wF4.js";import"./Combination-nC2vVd1Z.js";import"./index-cd2BOhhG.js";import"./index-HHSENXoC.js";import"./index-EwzVq0z5.js";import"./index-zgrs-vd1.js";import"./index-TcKUnSVx.js";import"./index-Xxi_BI8n.js";import"./index-polp_dyw.js";import"./chevron-right-VaZ_Ug1n.js";/**
 * @license lucide-react v0.293.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const W=f("ArrowDownLeft",[["path",{d:"M17 7 7 17",key:"15tmo1"}],["path",{d:"M17 17H7V7",key:"1org7z"}]]);/**
 * @license lucide-react v0.293.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const X=f("ArrowUpRight",[["path",{d:"M7 7h10v10",key:"1tivn9"}],["path",{d:"M7 17 17 7",key:"1vkiza"}]]);/**
 * @license lucide-react v0.293.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Y=f("Home",[["path",{d:"m3 9 9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z",key:"y5dka4"}],["polyline",{points:"9 22 9 12 15 12 15 22",key:"e2us08"}]]);/**
 * @license lucide-react v0.293.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Z=f("PieChart",[["path",{d:"M21.21 15.89A10 10 0 1 1 8 2.83",key:"k2fpak"}],["path",{d:"M22 12A10 10 0 0 0 12 2v10z",key:"1rfc4y"}]]),ee={1:"pl-4",2:"pl-8",3:"pl-12",4:"pl-16",5:"pl-20",6:"pl-24"},j=T.createContext({level:-1,levelClasses:void 0});function re(s){const{level:n,levelClasses:o}=T.useContext(j);return{level:n+1,levelClasses:o||s}}const l=T.forwardRef(({levelClasses:s=ee,...n},o)=>{const i=re(s);return i.level?e.jsx(G,{className:O("overflow-hidden text-sm transition-all data-[state=closed]:animate-accordion-up data-[state=open]:animate-accordion-down",i.levelClasses[i.level]),children:e.jsx(j.Provider,{value:i,children:e.jsx(C,{ref:o,...n})})}):e.jsx(j.Provider,{value:i,children:e.jsx(C,{ref:o,...n})})}),t=J,r=K;function a({className:s,...n}){return e.jsx(Q,{className:O("h-4 w-4 shrink-0 transition-transform duration-200",s),...n})}try{l.displayName="Tree",l.__docgenInfo={description:"",displayName:"Tree",props:{asChild:{defaultValue:null,description:"",name:"asChild",required:!1,type:{name:"boolean"}},levelClasses:{defaultValue:{value:`{
  1: 'pl-4',
  2: 'pl-8',
  3: 'pl-12',
  4: 'pl-16',
  5: 'pl-20',
  6: 'pl-24',
}`},description:"",name:"levelClasses",required:!1,type:{name:"TreeLevelClasses"}}}}}catch{}try{r.displayName="TreeItem",r.__docgenInfo={description:"",displayName:"TreeItem",props:{asChild:{defaultValue:null,description:"",name:"asChild",required:!1,type:{name:"boolean"}}}}}catch{}try{t.displayName="TreeTrigger",t.__docgenInfo={description:"",displayName:"TreeTrigger",props:{asChild:{defaultValue:null,description:"",name:"asChild",required:!1,type:{name:"boolean"}}}}}catch{}try{a.displayName="TreeTriggerIcon",a.__docgenInfo={description:"",displayName:"TreeTriggerIcon",props:{}}}catch{}const Le={component:l,title:"Components/Tree"},v=({type:s,levelClasses:n})=>e.jsxs(l,{type:s,levelClasses:n,collapsible:!0,children:[e.jsxs(r,{value:"first",children:[e.jsxs(t,{className:"flex items-center gap-2",children:["First ",e.jsx(a,{})]}),e.jsxs(l,{type:"multiple",children:[e.jsx(r,{value:"first-1",children:"First 1"}),e.jsx(r,{value:"first-2",children:"First 2"})]})]}),e.jsxs(r,{value:"second",children:[e.jsxs(t,{className:"flex items-center gap-2",children:["Second ",e.jsx(a,{})]}),e.jsxs(l,{type:"multiple",children:[e.jsx(r,{value:"second-1",children:"Second 1"}),e.jsx(r,{value:"second-2",children:"Second 2"})]})]})]}),y=({type:s,levelClasses:n})=>e.jsxs(l,{type:s,levelClasses:n,collapsible:!0,children:[e.jsxs(r,{value:"first",children:[e.jsxs(t,{className:"flex items-center gap-2",children:["First ",e.jsx(a,{})]}),e.jsxs(l,{type:"multiple",children:[e.jsxs(r,{value:"first-1",children:[e.jsxs(t,{className:"flex items-center gap-2",children:["First 1 ",e.jsx(a,{})]}),e.jsxs(l,{type:"multiple",children:[e.jsx(r,{value:"first-1-inner",children:"First 1 Inner"}),e.jsx(r,{value:"first-2-inner",children:"First 2 Inner"})]})]}),e.jsx(r,{value:"first-2",children:"First 2"})]})]}),e.jsxs(r,{value:"second",children:[e.jsxs(t,{className:"flex items-center gap-2",children:["Second ",e.jsx(a,{})]}),e.jsxs(l,{type:"multiple",children:[e.jsx(r,{value:"second-1",children:"Second 1"}),e.jsx(r,{value:"second-2",children:"Second 2"})]})]})]}),c={render:()=>e.jsx(v,{type:"single"})},m={render:()=>e.jsx(v,{type:"single",levelClasses:{1:"pl-8",2:"pl-16",3:"pl-24",4:"pl-32",5:"pl-40"}})},d={render:()=>e.jsx(v,{type:"multiple"})},u={render:()=>e.jsx(y,{type:"single"})},x={render:()=>e.jsx(y,{type:"single",levelClasses:{1:"pl-8",2:"pl-16",3:"pl-24",4:"pl-32",5:"pl-40"}})},h={render:()=>e.jsx(y,{type:"multiple"})},g={render:()=>e.jsx(B,{className:"h-svh max-w-56 p-2",children:e.jsxs(l,{type:"single",collapsible:!0,children:[e.jsx(r,{value:"homepage",children:e.jsxs(p,{children:[e.jsx(Y,{}),"Homepage"]})}),e.jsxs(r,{className:"py-2",value:"reports",children:[e.jsx(t,{asChild:!0,className:"flex items-center gap-2",children:e.jsxs(p,{children:[e.jsx(Z,{})," Reports ",e.jsx(a,{})]})}),e.jsxs(l,{type:"single",collapsible:!0,children:[e.jsx(r,{className:"pt-2",value:"incomes",children:e.jsxs(p,{children:[e.jsx(X,{})," Incomes"]})}),e.jsx(r,{className:"pt-2",value:"expenses",children:e.jsxs(p,{children:[e.jsx(W,{}),"Expenses"]})})]})]})]})})};var S,_,I;c.parameters={...c.parameters,docs:{...(S=c.parameters)==null?void 0:S.docs,source:{originalSource:`{
  render: () => {
    return <SimpleSelectionTree type="single" />;
  }
}`,...(I=(_=c.parameters)==null?void 0:_.docs)==null?void 0:I.source}}};var b,N,L;m.parameters={...m.parameters,docs:{...(b=m.parameters)==null?void 0:b.docs,source:{originalSource:`{
  render: () => {
    return <SimpleSelectionTree type="single" levelClasses={{
      1: 'pl-8',
      2: 'pl-16',
      3: 'pl-24',
      4: 'pl-32',
      5: 'pl-40'
    }} />;
  }
}`,...(L=(N=m.parameters)==null?void 0:N.docs)==null?void 0:L.source}}};var w,k,$;d.parameters={...d.parameters,docs:{...(w=d.parameters)==null?void 0:w.docs,source:{originalSource:`{
  render: () => {
    return <SimpleSelectionTree type="multiple" />;
  }
}`,...($=(k=d.parameters)==null?void 0:k.docs)==null?void 0:$.source}}};var M,A,F;u.parameters={...u.parameters,docs:{...(M=u.parameters)==null?void 0:M.docs,source:{originalSource:`{
  render: () => {
    return <ComplexSelectionTree type="single" />;
  }
}`,...(F=(A=u.parameters)==null?void 0:A.docs)==null?void 0:F.source}}};var R,E,H;x.parameters={...x.parameters,docs:{...(R=x.parameters)==null?void 0:R.docs,source:{originalSource:`{
  render: () => {
    return <ComplexSelectionTree type="single" levelClasses={{
      1: 'pl-8',
      2: 'pl-16',
      3: 'pl-24',
      4: 'pl-32',
      5: 'pl-40'
    }} />;
  }
}`,...(H=(E=x.parameters)==null?void 0:E.docs)==null?void 0:H.source}}};var D,V,P;h.parameters={...h.parameters,docs:{...(D=h.parameters)==null?void 0:D.docs,source:{originalSource:`{
  render: () => {
    return <ComplexSelectionTree type="multiple" />;
  }
}`,...(P=(V=h.parameters)==null?void 0:V.docs)==null?void 0:P.source}}};var q,z,U;g.parameters={...g.parameters,docs:{...(q=g.parameters)==null?void 0:q.docs,source:{originalSource:`{
  render: () => {
    return <Card className="h-svh max-w-56 p-2">
        <Tree type="single" collapsible>
          <TreeItem value="homepage">
            <ListItem>
              <Home />
              Homepage
            </ListItem>
          </TreeItem>
          <TreeItem className="py-2" value="reports">
            <TreeTrigger asChild className="flex items-center gap-2">
              <ListItem>
                <PieChart /> Reports <TreeTriggerIcon />
              </ListItem>
            </TreeTrigger>
            <Tree type="single" collapsible>
              <TreeItem className="pt-2" value="incomes">
                <ListItem>
                  <ArrowUpRight /> Incomes
                </ListItem>
              </TreeItem>
              <TreeItem className="pt-2" value="expenses">
                <ListItem>
                  <ArrowDownLeft />
                  Expenses
                </ListItem>
              </TreeItem>
            </Tree>
          </TreeItem>
        </Tree>
      </Card>;
  }
}`,...(U=(z=g.parameters)==null?void 0:z.docs)==null?void 0:U.source}}};const we=["SingleSimpleSelectionTree","CustomLevelClassesSimpleTree","MultipleSimpleSelectionTree","SingleComplexSelectionTree","CustomLevelClassesComplexTree","MultipleComplexSelectionTree","SidebarMenu"];export{x as CustomLevelClassesComplexTree,m as CustomLevelClassesSimpleTree,h as MultipleComplexSelectionTree,d as MultipleSimpleSelectionTree,g as SidebarMenu,u as SingleComplexSelectionTree,c as SingleSimpleSelectionTree,we as __namedExportsOrder,Le as default};
