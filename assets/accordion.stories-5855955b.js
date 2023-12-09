import{a as _,j as d}from"./jsx-runtime-29545a09.js";import{_ as m}from"./extends-98964cd2.js";import{r as s,R as r}from"./index-76fb7be0.js";import{$ as oe,a as $e,b as j,c as ie}from"./index-7f80cad2.js";import{$ as ve}from"./index-a93a8af2.js";import{$ as re,b as y}from"./index-e2809c0a.js";import{$ as he}from"./index-1f3e1a8a.js";import{$ as ce}from"./index-043160a2.js";import{$ as ge}from"./index-c6b1b4f9.js";import{c as Ae}from"./utils-636fbba8.js";import{C as Se}from"./chevron-down-1a7458c3.js";import"./_commonjsHelpers-de833af9.js";import"./index-d3ea75b5.js";import"./createLucideIcon-de0f8b79.js";const ae="Collapsible",[xe,se]=oe(ae),[Ce,G]=xe(ae),Ie=s.forwardRef((e,c)=>{const{__scopeCollapsible:t,open:o,defaultOpen:i,disabled:n,onOpenChange:a,...l}=e,[u=!1,p]=j({prop:o,defaultProp:i,onChange:a});return s.createElement(Ce,{scope:t,disabled:n,contentId:ce(),open:u,onOpenToggle:s.useCallback(()=>p(v=>!v),[p])},s.createElement(y.div,m({"data-state":H(u),"data-disabled":n?"":void 0},l,{ref:c})))}),_e="CollapsibleTrigger",Ee=s.forwardRef((e,c)=>{const{__scopeCollapsible:t,...o}=e,i=G(_e,t);return s.createElement(y.button,m({type:"button","aria-controls":i.contentId,"aria-expanded":i.open||!1,"data-state":H(i.open),"data-disabled":i.disabled?"":void 0,disabled:i.disabled},o,{ref:c,onClick:ie(e.onClick,i.onOpenToggle)}))}),le="CollapsibleContent",ye=s.forwardRef((e,c)=>{const{forceMount:t,...o}=e,i=G(le,e.__scopeCollapsible);return s.createElement(he,{present:t||i.open},({present:n})=>s.createElement(qe,m({},o,{ref:c,present:n})))}),qe=s.forwardRef((e,c)=>{const{__scopeCollapsible:t,present:o,children:i,...n}=e,a=G(le,t),[l,u]=s.useState(o),p=s.useRef(null),v=re(c,p),h=s.useRef(0),x=h.current,S=s.useRef(0),C=S.current,E=a.open||l,I=s.useRef(E),g=s.useRef();return s.useEffect(()=>{const f=requestAnimationFrame(()=>I.current=!1);return()=>cancelAnimationFrame(f)},[]),$e(()=>{const f=p.current;if(f){g.current=g.current||{transitionDuration:f.style.transitionDuration,animationName:f.style.animationName},f.style.transitionDuration="0s",f.style.animationName="none";const b=f.getBoundingClientRect();h.current=b.height,S.current=b.width,I.current||(f.style.transitionDuration=g.current.transitionDuration,f.style.animationName=g.current.animationName),u(o)}},[a.open,o]),s.createElement(y.div,m({"data-state":H(a.open),"data-disabled":a.disabled?"":void 0,id:a.contentId,hidden:!E},n,{ref:v,style:{"--radix-collapsible-content-height":x?`${x}px`:void 0,"--radix-collapsible-content-width":C?`${C}px`:void 0,...e.style}}),E&&i)});function H(e){return e?"open":"closed"}const Pe=Ie,we=Ee,Ne=ye,A="Accordion",Re=["Home","End","ArrowDown","ArrowUp","ArrowLeft","ArrowRight"],[K,Te,De]=ve(A),[N,ut]=oe(A,[De,se]),z=se(),de=r.forwardRef((e,c)=>{const{type:t,...o}=e,i=o,n=o;return r.createElement(K.Provider,{scope:e.__scopeAccordion},t==="multiple"?r.createElement(Ve,m({},n,{ref:c})):r.createElement(Me,m({},i,{ref:c})))});de.propTypes={type(e){const c=e.value||e.defaultValue;return e.type&&!["single","multiple"].includes(e.type)?new Error("Invalid prop `type` supplied to `Accordion`. Expected one of `single | multiple`."):e.type==="multiple"&&typeof c=="string"?new Error("Invalid prop `type` supplied to `Accordion`. Expected `single` when `defaultValue` or `value` is type `string`."):e.type==="single"&&Array.isArray(c)?new Error("Invalid prop `type` supplied to `Accordion`. Expected `multiple` when `defaultValue` or `value` is type `string[]`."):null}};const[ue,Fe]=N(A),[pe,Oe]=N(A,{collapsible:!1}),Me=r.forwardRef((e,c)=>{const{value:t,defaultValue:o,onValueChange:i=()=>{},collapsible:n=!1,...a}=e,[l,u]=j({prop:t,defaultProp:o,onChange:i});return r.createElement(ue,{scope:e.__scopeAccordion,value:l?[l]:[],onItemOpen:u,onItemClose:r.useCallback(()=>n&&u(""),[n,u])},r.createElement(pe,{scope:e.__scopeAccordion,collapsible:n},r.createElement(fe,m({},a,{ref:c}))))}),Ve=r.forwardRef((e,c)=>{const{value:t,defaultValue:o,onValueChange:i=()=>{},...n}=e,[a=[],l]=j({prop:t,defaultProp:o,onChange:i}),u=r.useCallback(v=>l((h=[])=>[...h,v]),[l]),p=r.useCallback(v=>l((h=[])=>h.filter(x=>x!==v)),[l]);return r.createElement(ue,{scope:e.__scopeAccordion,value:a,onItemOpen:u,onItemClose:p},r.createElement(pe,{scope:e.__scopeAccordion,collapsible:!0},r.createElement(fe,m({},n,{ref:c}))))}),[ke,R]=N(A),fe=r.forwardRef((e,c)=>{const{__scopeAccordion:t,disabled:o,dir:i,orientation:n="vertical",...a}=e,l=r.useRef(null),u=re(l,c),p=Te(t),h=ge(i)==="ltr",x=ie(e.onKeyDown,S=>{var C;if(!Re.includes(S.key))return;const E=S.target,I=p().filter(V=>{var k;return!((k=V.ref.current)!==null&&k!==void 0&&k.disabled)}),g=I.findIndex(V=>V.ref.current===E),f=I.length;if(g===-1)return;S.preventDefault();let b=g;const D=0,F=f-1,O=()=>{b=g+1,b>F&&(b=D)},M=()=>{b=g-1,b<D&&(b=F)};switch(S.key){case"Home":b=D;break;case"End":b=F;break;case"ArrowRight":n==="horizontal"&&(h?O():M());break;case"ArrowDown":n==="vertical"&&O();break;case"ArrowLeft":n==="horizontal"&&(h?M():O());break;case"ArrowUp":n==="vertical"&&M();break}const be=b%f;(C=I[be].ref.current)===null||C===void 0||C.focus()});return r.createElement(ke,{scope:t,disabled:o,direction:i,orientation:n},r.createElement(K.Slot,{scope:t},r.createElement(y.div,m({},a,{"data-orientation":n,ref:u,onKeyDown:o?void 0:x}))))}),L="AccordionItem",[Le,B]=N(L),je=r.forwardRef((e,c)=>{const{__scopeAccordion:t,value:o,...i}=e,n=R(L,t),a=Fe(L,t),l=z(t),u=ce(),p=o&&a.value.includes(o)||!1,v=n.disabled||e.disabled;return r.createElement(Le,{scope:t,open:p,disabled:v,triggerId:u},r.createElement(Pe,m({"data-orientation":n.orientation,"data-state":me(p)},l,i,{ref:c,disabled:v,open:p,onOpenChange:h=>{h?a.onItemOpen(o):a.onItemClose(o)}})))}),Ge="AccordionHeader",He=r.forwardRef((e,c)=>{const{__scopeAccordion:t,...o}=e,i=R(A,t),n=B(Ge,t);return r.createElement(y.h3,m({"data-orientation":i.orientation,"data-state":me(n.open),"data-disabled":n.disabled?"":void 0},o,{ref:c}))}),U="AccordionTrigger",Ke=r.forwardRef((e,c)=>{const{__scopeAccordion:t,...o}=e,i=R(A,t),n=B(U,t),a=Oe(U,t),l=z(t);return r.createElement(K.ItemSlot,{scope:t},r.createElement(we,m({"aria-disabled":n.open&&!a.collapsible||void 0,"data-orientation":i.orientation,id:n.triggerId},l,o,{ref:c})))}),ze="AccordionContent",Be=r.forwardRef((e,c)=>{const{__scopeAccordion:t,...o}=e,i=R(A,t),n=B(ze,t),a=z(t);return r.createElement(Ne,m({role:"region","aria-labelledby":n.triggerId,"data-orientation":i.orientation},a,o,{ref:c,style:{"--radix-accordion-content-height":"var(--radix-collapsible-content-height)","--radix-accordion-content-width":"var(--radix-collapsible-content-width)",...e.style}}))});function me(e){return e?"open":"closed"}const Ue=de,We=je,Ye=He,Je=Ke,T=Ue,$=s.forwardRef(({className:e,children:c,title:t,subTitle:o,...i},n)=>_(We,{ref:n,className:Ae("border-b",e),...i,children:[d(Ye,{className:"flex",children:_(Je,{className:"flex flex-1 items-center justify-between py-4 font-medium text-primary transition-all hover:underline [&[data-state=open]>svg]:rotate-180",children:[_("div",{className:"flex flex-col items-start",children:[d("span",{className:"font-semibold",children:t}),o&&d("span",{className:"text-sm text-primary/70",children:o})]}),d(Se,{className:"h-4 w-4 shrink-0 transition-transform duration-200"})]})}),d(Be,{className:"overflow-hidden text-sm transition-all data-[state=closed]:animate-accordion-up data-[state=open]:animate-accordion-down",children:d("div",{className:"pb-4 pt-0",children:c})})]}));$.displayName="AccordionItem";try{$.displayName="AccordionItem",$.__docgenInfo={description:"",displayName:"AccordionItem",props:{asChild:{defaultValue:null,description:"",name:"asChild",required:!1,type:{name:"boolean"}}}}}catch{}const pt={component:T,title:"Components/Accordion"},q={render:()=>_(T,{type:"single",collapsible:!0,children:[d($,{value:"first",title:"First Section",content:"First Section",children:"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam in quam id erat semper lacinia id nec tortor. Praesent dignissim porttitor libero, sed iaculis enim facilisis ac. Donec vestibulum feugiat consequat. Proin interdum ipsum sed quam dictum, finibus blandit nulla vehicula. Cras dictum et lectus quis tincidunt. Etiam eu odio nulla. Cras ac neque nec enim malesuada lobortis. Phasellus dapibus mattis ante, non faucibus odio viverra at. Aliquam varius finibus sapien, et pharetra quam scelerisque at. Maecenas tempus felis sit amet finibus iaculis. Maecenas vulputate pellentesque pulvinar. Nulla commodo tempus lacus. Duis sed risus pharetra, eleifend lacus nec, condimentum ipsum. Nunc ullamcorper diam ac posuere malesuada."}),d($,{value:"second",title:"Second Section",content:"Second Section",children:"Donec nec facilisis nulla. Duis id nisl consequat, imperdiet nunc sit amet, efficitur neque. Integer vel malesuada turpis, eget volutpat enim. Sed ornare turpis at orci varius tempor. Nulla risus lorem, luctus non accumsan quis, faucibus eu diam. Nam vel suscipit dolor, eget hendrerit turpis. Proin consequat eleifend imperdiet."}),d($,{value:"third",title:"Third Section",content:"Third Section",children:"Curabitur efficitur sodales nunc, at rutrum mauris tincidunt sit amet. Pellentesque ut quam et dui facilisis fringilla. Cras maximus sodales interdum. Integer consectetur nunc vitae erat congue tincidunt. Praesent imperdiet, dui non dictum pulvinar, lacus magna feugiat ante, eu molestie lacus est id nunc. Phasellus nisi tellus, eleifend quis sagittis quis, consequat non velit. Suspendisse vel ligula porttitor purus pulvinar pretium vel quis risus. Sed vestibulum suscipit metus, a consectetur quam consequat a. Aliquam fringilla ornare enim, vel semper eros interdum ut. Fusce porttitor consequat laoreet."})]})},P={render:()=>_(T,{type:"single",collapsible:!0,children:[d($,{value:"first",title:"First Section",subTitle:"First subtitle",content:"First Section",children:"First Section"}),d($,{value:"second",title:"Second Section",subTitle:"Second subtitle",content:"Second Section",children:"Second Section"}),d($,{value:"third",title:"Third Section",subTitle:"Third subtitle",content:"Third Section",children:"Third section"})]})},w={render:()=>_(T,{type:"multiple",children:[d($,{value:"first",title:"First Section",content:"First Section",children:"First Section"}),d($,{value:"second",title:"Second Section",content:"Second Section",children:"Second Section"}),d($,{value:"third",title:"Third Section",content:"Third Section",children:"Third section"})]})};var W,Y,J;q.parameters={...q.parameters,docs:{...(W=q.parameters)==null?void 0:W.docs,source:{originalSource:`{
  render: () => {
    return <Accordion type="single" collapsible>
        <AccordionItem value="first" title="First Section" content="First Section">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam in quam
          id erat semper lacinia id nec tortor. Praesent dignissim porttitor
          libero, sed iaculis enim facilisis ac. Donec vestibulum feugiat
          consequat. Proin interdum ipsum sed quam dictum, finibus blandit nulla
          vehicula. Cras dictum et lectus quis tincidunt. Etiam eu odio nulla.
          Cras ac neque nec enim malesuada lobortis. Phasellus dapibus mattis
          ante, non faucibus odio viverra at. Aliquam varius finibus sapien, et
          pharetra quam scelerisque at. Maecenas tempus felis sit amet finibus
          iaculis. Maecenas vulputate pellentesque pulvinar. Nulla commodo
          tempus lacus. Duis sed risus pharetra, eleifend lacus nec, condimentum
          ipsum. Nunc ullamcorper diam ac posuere malesuada.
        </AccordionItem>
        <AccordionItem value="second" title="Second Section" content="Second Section">
          Donec nec facilisis nulla. Duis id nisl consequat, imperdiet nunc sit
          amet, efficitur neque. Integer vel malesuada turpis, eget volutpat
          enim. Sed ornare turpis at orci varius tempor. Nulla risus lorem,
          luctus non accumsan quis, faucibus eu diam. Nam vel suscipit dolor,
          eget hendrerit turpis. Proin consequat eleifend imperdiet.
        </AccordionItem>
        <AccordionItem value="third" title="Third Section" content="Third Section">
          Curabitur efficitur sodales nunc, at rutrum mauris tincidunt sit amet.
          Pellentesque ut quam et dui facilisis fringilla. Cras maximus sodales
          interdum. Integer consectetur nunc vitae erat congue tincidunt.
          Praesent imperdiet, dui non dictum pulvinar, lacus magna feugiat ante,
          eu molestie lacus est id nunc. Phasellus nisi tellus, eleifend quis
          sagittis quis, consequat non velit. Suspendisse vel ligula porttitor
          purus pulvinar pretium vel quis risus. Sed vestibulum suscipit metus,
          a consectetur quam consequat a. Aliquam fringilla ornare enim, vel
          semper eros interdum ut. Fusce porttitor consequat laoreet.
        </AccordionItem>
      </Accordion>;
  }
}`,...(J=(Y=q.parameters)==null?void 0:Y.docs)==null?void 0:J.source}}};var Q,X,Z;P.parameters={...P.parameters,docs:{...(Q=P.parameters)==null?void 0:Q.docs,source:{originalSource:`{
  render: () => {
    return <Accordion type="single" collapsible>
        <AccordionItem value="first" title="First Section" subTitle="First subtitle" content="First Section">
          First Section
        </AccordionItem>
        <AccordionItem value="second" title="Second Section" subTitle="Second subtitle" content="Second Section">
          Second Section
        </AccordionItem>
        <AccordionItem value="third" title="Third Section" subTitle="Third subtitle" content="Third Section">
          Third section
        </AccordionItem>
      </Accordion>;
  }
}`,...(Z=(X=P.parameters)==null?void 0:X.docs)==null?void 0:Z.source}}};var ee,te,ne;w.parameters={...w.parameters,docs:{...(ee=w.parameters)==null?void 0:ee.docs,source:{originalSource:`{
  render: () => {
    return <Accordion type="multiple">
        <AccordionItem value="first" title="First Section" content="First Section">
          First Section
        </AccordionItem>
        <AccordionItem value="second" title="Second Section" content="Second Section">
          Second Section
        </AccordionItem>
        <AccordionItem value="third" title="Third Section" content="Third Section">
          Third section
        </AccordionItem>
      </Accordion>;
  }
}`,...(ne=(te=w.parameters)==null?void 0:te.docs)==null?void 0:ne.source}}};const ft=["Default","WithSubtitle","Multiple"];export{q as Default,w as Multiple,P as WithSubtitle,ft as __namedExportsOrder,pt as default};