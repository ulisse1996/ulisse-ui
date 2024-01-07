import{_ as p}from"./extends-dGVwEr9R.js";import{r as i,R as r}from"./index-4g5l5LRQ.js";import{$ as K,b as V,c as F,a as ee}from"./index-0dIgYeBD.js";import{$ as oe}from"./index-mbzsKfaj.js";import{b as h,$ as z}from"./index-XGpeoBSN.js";import{$ as te}from"./index-TcKUnSVx.js";import{$ as B}from"./index-cd2BOhhG.js";import{$ as ne}from"./index-8KrFLZLq.js";const U="Collapsible",[re,q]=K(U),[ce,k]=re(U),ae=i.forwardRef((e,a)=>{const{__scopeCollapsible:o,open:n,defaultOpen:c,disabled:t,onOpenChange:s,...l}=e,[d=!1,f]=V({prop:n,defaultProp:c,onChange:s});return i.createElement(ce,{scope:o,disabled:t,contentId:B(),open:d,onOpenToggle:i.useCallback(()=>f(u=>!u),[f])},i.createElement(h.div,p({"data-state":M(d),"data-disabled":t?"":void 0},l,{ref:a})))}),se="CollapsibleTrigger",ie=i.forwardRef((e,a)=>{const{__scopeCollapsible:o,...n}=e,c=k(se,o);return i.createElement(h.button,p({type:"button","aria-controls":c.contentId,"aria-expanded":c.open||!1,"data-state":M(c.open),"data-disabled":c.disabled?"":void 0,disabled:c.disabled},n,{ref:a,onClick:F(e.onClick,c.onOpenToggle)}))}),Y="CollapsibleContent",le=i.forwardRef((e,a)=>{const{forceMount:o,...n}=e,c=k(Y,e.__scopeCollapsible);return i.createElement(te,{present:o||c.open},({present:t})=>i.createElement(de,p({},n,{ref:a,present:t})))}),de=i.forwardRef((e,a)=>{const{__scopeCollapsible:o,present:n,children:c,...t}=e,s=k(Y,o),[l,d]=i.useState(n),f=i.useRef(null),u=z(a,f),m=i.useRef(0),g=m.current,x=i.useRef(0),A=x.current,E=s.open||l,_=i.useRef(E),v=i.useRef();return i.useEffect(()=>{const b=requestAnimationFrame(()=>_.current=!1);return()=>cancelAnimationFrame(b)},[]),ee(()=>{const b=f.current;if(b){v.current=v.current||{transitionDuration:b.style.transitionDuration,animationName:b.style.animationName},b.style.transitionDuration="0s",b.style.animationName="none";const $=b.getBoundingClientRect();m.current=$.height,x.current=$.width,_.current||(b.style.transitionDuration=v.current.transitionDuration,b.style.animationName=v.current.animationName),d(n)}},[s.open,n]),i.createElement(h.div,p({"data-state":M(s.open),"data-disabled":s.disabled?"":void 0,id:s.contentId,hidden:!E},t,{ref:u,style:{"--radix-collapsible-content-height":g?`${g}px`:void 0,"--radix-collapsible-content-width":A?`${A}px`:void 0,...e.style}}),E&&c)});function M(e){return e?"open":"closed"}const fe=ae,be=ie,pe=le,C="Accordion",$e=["Home","End","ArrowDown","ArrowUp","ArrowLeft","ArrowRight"],[T,ue,me]=oe(C),[I,Me]=K(C,[me,q]),L=q(),j=r.forwardRef((e,a)=>{const{type:o,...n}=e,c=n,t=n;return r.createElement(T.Provider,{scope:e.__scopeAccordion},o==="multiple"?r.createElement(ge,p({},t,{ref:a})):r.createElement(xe,p({},c,{ref:a})))});j.propTypes={type(e){const a=e.value||e.defaultValue;return e.type&&!["single","multiple"].includes(e.type)?new Error("Invalid prop `type` supplied to `Accordion`. Expected one of `single | multiple`."):e.type==="multiple"&&typeof a=="string"?new Error("Invalid prop `type` supplied to `Accordion`. Expected `single` when `defaultValue` or `value` is type `string`."):e.type==="single"&&Array.isArray(a)?new Error("Invalid prop `type` supplied to `Accordion`. Expected `multiple` when `defaultValue` or `value` is type `string[]`."):null}};const[J,ve]=I(C),[Q,Ce]=I(C,{collapsible:!1}),xe=r.forwardRef((e,a)=>{const{value:o,defaultValue:n,onValueChange:c=()=>{},collapsible:t=!1,...s}=e,[l,d]=V({prop:o,defaultProp:n,onChange:c});return r.createElement(J,{scope:e.__scopeAccordion,value:l?[l]:[],onItemOpen:d,onItemClose:r.useCallback(()=>t&&d(""),[t,d])},r.createElement(Q,{scope:e.__scopeAccordion,collapsible:t},r.createElement(W,p({},s,{ref:a}))))}),ge=r.forwardRef((e,a)=>{const{value:o,defaultValue:n,onValueChange:c=()=>{},...t}=e,[s=[],l]=V({prop:o,defaultProp:n,onChange:c}),d=r.useCallback(u=>l((m=[])=>[...m,u]),[l]),f=r.useCallback(u=>l((m=[])=>m.filter(g=>g!==u)),[l]);return r.createElement(J,{scope:e.__scopeAccordion,value:s,onItemOpen:d,onItemClose:f},r.createElement(Q,{scope:e.__scopeAccordion,collapsible:!0},r.createElement(W,p({},t,{ref:a}))))}),[Ae,R]=I(C),W=r.forwardRef((e,a)=>{const{__scopeAccordion:o,disabled:n,dir:c,orientation:t="vertical",...s}=e,l=r.useRef(null),d=z(l,a),f=ue(o),m=ne(c)==="ltr",g=F(e.onKeyDown,x=>{var A;if(!$e.includes(x.key))return;const E=x.target,_=f().filter(O=>{var D;return!((D=O.ref.current)!==null&&D!==void 0&&D.disabled)}),v=_.findIndex(O=>O.ref.current===E),b=_.length;if(v===-1)return;x.preventDefault();let $=v;const w=0,y=b-1,P=()=>{$=v+1,$>y&&($=w)},N=()=>{$=v-1,$<w&&($=y)};switch(x.key){case"Home":$=w;break;case"End":$=y;break;case"ArrowRight":t==="horizontal"&&(m?P():N());break;case"ArrowDown":t==="vertical"&&P();break;case"ArrowLeft":t==="horizontal"&&(m?N():P());break;case"ArrowUp":t==="vertical"&&N();break}const Z=$%b;(A=_[Z].ref.current)===null||A===void 0||A.focus()});return r.createElement(Ae,{scope:o,disabled:n,direction:c,orientation:t},r.createElement(T.Slot,{scope:o},r.createElement(h.div,p({},s,{"data-orientation":t,ref:d,onKeyDown:n?void 0:g}))))}),S="AccordionItem",[_e,G]=I(S),Ee=r.forwardRef((e,a)=>{const{__scopeAccordion:o,value:n,...c}=e,t=R(S,o),s=ve(S,o),l=L(o),d=B(),f=n&&s.value.includes(n)||!1,u=t.disabled||e.disabled;return r.createElement(_e,{scope:o,open:f,disabled:u,triggerId:d},r.createElement(fe,p({"data-orientation":t.orientation,"data-state":X(f)},l,c,{ref:a,disabled:u,open:f,onOpenChange:m=>{m?s.onItemOpen(n):s.onItemClose(n)}})))}),he="AccordionHeader",Ie=r.forwardRef((e,a)=>{const{__scopeAccordion:o,...n}=e,c=R(C,o),t=G(he,o);return r.createElement(h.h3,p({"data-orientation":c.orientation,"data-state":X(t.open),"data-disabled":t.disabled?"":void 0},n,{ref:a}))}),H="AccordionTrigger",Re=r.forwardRef((e,a)=>{const{__scopeAccordion:o,...n}=e,c=R(C,o),t=G(H,o),s=Ce(H,o),l=L(o);return r.createElement(T.ItemSlot,{scope:o},r.createElement(be,p({"aria-disabled":t.open&&!s.collapsible||void 0,"data-orientation":c.orientation,id:t.triggerId},l,n,{ref:a})))}),we="AccordionContent",Te=r.forwardRef((e,a)=>{const{__scopeAccordion:o,...n}=e,c=R(C,o),t=G(we,o),s=L(o);return r.createElement(pe,p({role:"region","aria-labelledby":t.triggerId,"data-orientation":c.orientation},s,n,{ref:a,style:{"--radix-accordion-content-height":"var(--radix-collapsible-content-height)","--radix-accordion-content-width":"var(--radix-collapsible-content-width)",...e.style}}))});function X(e){return e?"open":"closed"}const Le=j,Ge=Ee,He=Ie,Ke=Re;export{Le as $,Ge as a,He as b,Ke as c,Te as d,j as e,Ee as f,Re as g};