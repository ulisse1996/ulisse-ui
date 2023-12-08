import{j as q}from"./jsx-runtime-vNq4Oc-g.js";import{_ as g}from"./extends-dGVwEr9R.js";import{r as o}from"./index-4g5l5LRQ.js";import{$ as B,b as z,c as y}from"./index-0dIgYeBD.js";import{$ as G,b as K,d as U}from"./index-XGpeoBSN.js";import{$ as Y}from"./index-wUOvkR5E.js";import{$ as X}from"./index-cd2BOhhG.js";import{$ as j,a as J,b as Q,c as W}from"./index-vOJqYY-v.js";import{$ as Z}from"./index-TcKUnSVx.js";import{$ as ee}from"./index-YCypRNSh.js";import{c as te}from"./utils-HR2XZNS3.js";const[w,Ne]=B("Tooltip",[j]),O=j(),oe="TooltipProvider",re=700,D="tooltip.open",[ne,k]=w(oe),ae=e=>{const{__scopeTooltip:r,delayDuration:t=re,skipDelayDuration:n=300,disableHoverableContent:a=!1,children:l}=e,[s,d]=o.useState(!0),c=o.useRef(!1),p=o.useRef(0);return o.useEffect(()=>{const i=p.current;return()=>window.clearTimeout(i)},[]),o.createElement(ne,{scope:r,isOpenDelayed:s,delayDuration:t,onOpen:o.useCallback(()=>{window.clearTimeout(p.current),d(!1)},[]),onClose:o.useCallback(()=>{window.clearTimeout(p.current),p.current=window.setTimeout(()=>d(!0),n)},[n]),isPointerInTransitRef:c,onPointerInTransitChange:o.useCallback(i=>{c.current=i},[]),disableHoverableContent:a},l)},I="Tooltip",[ce,P]=w(I),se=e=>{const{__scopeTooltip:r,children:t,open:n,defaultOpen:a=!1,onOpenChange:l,disableHoverableContent:s,delayDuration:d}=e,c=k(I,e.__scopeTooltip),p=O(r),[i,u]=o.useState(null),m=X(),f=o.useRef(0),$=s??c.disableHoverableContent,v=d??c.delayDuration,b=o.useRef(!1),[x=!1,h]=z({prop:n,defaultProp:a,onChange:N=>{N?(c.onOpen(),document.dispatchEvent(new CustomEvent(D))):c.onClose(),l==null||l(N)}}),T=o.useMemo(()=>x?b.current?"delayed-open":"instant-open":"closed",[x]),C=o.useCallback(()=>{window.clearTimeout(f.current),b.current=!1,h(!0)},[h]),_=o.useCallback(()=>{window.clearTimeout(f.current),h(!1)},[h]),L=o.useCallback(()=>{window.clearTimeout(f.current),f.current=window.setTimeout(()=>{b.current=!0,h(!0)},v)},[v,h]);return o.useEffect(()=>()=>window.clearTimeout(f.current),[]),o.createElement(J,p,o.createElement(ce,{scope:r,contentId:m,open:x,stateAttribute:T,trigger:i,onTriggerChange:u,onTriggerEnter:o.useCallback(()=>{c.isOpenDelayed?L():C()},[c.isOpenDelayed,L,C]),onTriggerLeave:o.useCallback(()=>{$?_():window.clearTimeout(f.current)},[_,$]),onOpen:C,onClose:_,disableHoverableContent:$},t))},A="TooltipTrigger",ie=o.forwardRef((e,r)=>{const{__scopeTooltip:t,...n}=e,a=P(A,t),l=k(A,t),s=O(t),d=o.useRef(null),c=G(r,d,a.onTriggerChange),p=o.useRef(!1),i=o.useRef(!1),u=o.useCallback(()=>p.current=!1,[]);return o.useEffect(()=>()=>document.removeEventListener("pointerup",u),[u]),o.createElement(Q,g({asChild:!0},s),o.createElement(K.button,g({"aria-describedby":a.open?a.contentId:void 0,"data-state":a.stateAttribute},n,{ref:c,onPointerMove:y(e.onPointerMove,m=>{m.pointerType!=="touch"&&!i.current&&!l.isPointerInTransitRef.current&&(a.onTriggerEnter(),i.current=!0)}),onPointerLeave:y(e.onPointerLeave,()=>{a.onTriggerLeave(),i.current=!1}),onPointerDown:y(e.onPointerDown,()=>{p.current=!0,document.addEventListener("pointerup",u,{once:!0})}),onFocus:y(e.onFocus,()=>{p.current||a.onOpen()}),onBlur:y(e.onBlur,a.onClose),onClick:y(e.onClick,a.onClose)})))}),le="TooltipPortal",[Ae,de]=w(le,{forceMount:void 0}),E="TooltipContent",pe=o.forwardRef((e,r)=>{const t=de(E,e.__scopeTooltip),{forceMount:n=t.forceMount,side:a="top",...l}=e,s=P(E,e.__scopeTooltip);return o.createElement(Z,{present:n||s.open},s.disableHoverableContent?o.createElement(F,g({side:a},l,{ref:r})):o.createElement(ue,g({side:a},l,{ref:r})))}),ue=o.forwardRef((e,r)=>{const t=P(E,e.__scopeTooltip),n=k(E,e.__scopeTooltip),a=o.useRef(null),l=G(r,a),[s,d]=o.useState(null),{trigger:c,onClose:p}=t,i=a.current,{onPointerInTransitChange:u}=n,m=o.useCallback(()=>{d(null),u(!1)},[u]),f=o.useCallback(($,v)=>{const b=$.currentTarget,x={x:$.clientX,y:$.clientY},h=$e(x,b.getBoundingClientRect()),T=me(x,h),C=be(v.getBoundingClientRect()),_=he([...T,...C]);d(_),u(!0)},[u]);return o.useEffect(()=>()=>m(),[m]),o.useEffect(()=>{if(c&&i){const $=b=>f(b,i),v=b=>f(b,c);return c.addEventListener("pointerleave",$),i.addEventListener("pointerleave",v),()=>{c.removeEventListener("pointerleave",$),i.removeEventListener("pointerleave",v)}}},[c,i,f,m]),o.useEffect(()=>{if(s){const $=v=>{const b=v.target,x={x:v.clientX,y:v.clientY},h=(c==null?void 0:c.contains(b))||(i==null?void 0:i.contains(b)),T=!ve(x,s);h?m():T&&(m(),p())};return document.addEventListener("pointermove",$),()=>document.removeEventListener("pointermove",$)}},[c,i,s,p,m]),o.createElement(F,g({},e,{ref:l}))}),[fe,Me]=w(I,{isInside:!1}),F=o.forwardRef((e,r)=>{const{__scopeTooltip:t,children:n,"aria-label":a,onEscapeKeyDown:l,onPointerDownOutside:s,...d}=e,c=P(E,t),p=O(t),{onClose:i}=c;return o.useEffect(()=>(document.addEventListener(D,i),()=>document.removeEventListener(D,i)),[i]),o.useEffect(()=>{if(c.trigger){const u=m=>{const f=m.target;f!=null&&f.contains(c.trigger)&&i()};return window.addEventListener("scroll",u,{capture:!0}),()=>window.removeEventListener("scroll",u,{capture:!0})}},[c.trigger,i]),o.createElement(Y,{asChild:!0,disableOutsidePointerEvents:!1,onEscapeKeyDown:l,onPointerDownOutside:s,onFocusOutside:u=>u.preventDefault(),onDismiss:i},o.createElement(W,g({"data-state":c.stateAttribute},p,d,{ref:r,style:{...d.style,"--radix-tooltip-content-transform-origin":"var(--radix-popper-transform-origin)","--radix-tooltip-content-available-width":"var(--radix-popper-available-width)","--radix-tooltip-content-available-height":"var(--radix-popper-available-height)","--radix-tooltip-trigger-width":"var(--radix-popper-anchor-width)","--radix-tooltip-trigger-height":"var(--radix-popper-anchor-height)"}}),o.createElement(U,null,n),o.createElement(fe,{scope:t,isInside:!0},o.createElement(ee,{id:c.contentId,role:"tooltip"},a||n))))});function $e(e,r){const t=Math.abs(r.top-e.y),n=Math.abs(r.bottom-e.y),a=Math.abs(r.right-e.x),l=Math.abs(r.left-e.x);switch(Math.min(t,n,a,l)){case l:return"left";case a:return"right";case t:return"top";case n:return"bottom";default:throw new Error("unreachable")}}function me(e,r,t=5){const n=[];switch(r){case"top":n.push({x:e.x-t,y:e.y+t},{x:e.x+t,y:e.y+t});break;case"bottom":n.push({x:e.x-t,y:e.y-t},{x:e.x+t,y:e.y-t});break;case"left":n.push({x:e.x+t,y:e.y-t},{x:e.x+t,y:e.y+t});break;case"right":n.push({x:e.x-t,y:e.y-t},{x:e.x-t,y:e.y+t});break}return n}function be(e){const{top:r,right:t,bottom:n,left:a}=e;return[{x:a,y:r},{x:t,y:r},{x:t,y:n},{x:a,y:n}]}function ve(e,r){const{x:t,y:n}=e;let a=!1;for(let l=0,s=r.length-1;l<r.length;s=l++){const d=r[l].x,c=r[l].y,p=r[s].x,i=r[s].y;c>n!=i>n&&t<(p-d)*(n-c)/(i-c)+d&&(a=!a)}return a}function he(e){const r=e.slice();return r.sort((t,n)=>t.x<n.x?-1:t.x>n.x?1:t.y<n.y?-1:t.y>n.y?1:0),xe(r)}function xe(e){if(e.length<=1)return e.slice();const r=[];for(let n=0;n<e.length;n++){const a=e[n];for(;r.length>=2;){const l=r[r.length-1],s=r[r.length-2];if((l.x-s.x)*(a.y-s.y)>=(l.y-s.y)*(a.x-s.x))r.pop();else break}r.push(a)}r.pop();const t=[];for(let n=e.length-1;n>=0;n--){const a=e[n];for(;t.length>=2;){const l=t[t.length-1],s=t[t.length-2];if((l.x-s.x)*(a.y-s.y)>=(l.y-s.y)*(a.x-s.x))t.pop();else break}t.push(a)}return t.pop(),r.length===1&&t.length===1&&r[0].x===t[0].x&&r[0].y===t[0].y?r:r.concat(t)}const ye=ae,ge=se,Te=ie,V=pe,M=ye,H=ge,S=Te,R=o.forwardRef(({className:e,sideOffset:r=4,...t},n)=>q.jsx(V,{ref:n,sideOffset:r,className:te("z-50 overflow-hidden rounded-md border bg-card px-3 py-1.5 text-sm text-card-foreground shadow-md animate-in fade-in-0 zoom-in-95 data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=closed]:zoom-out-95 data-[side=bottom]:slide-in-from-top-2 data-[side=left]:slide-in-from-right-2 data-[side=right]:slide-in-from-left-2 data-[side=top]:slide-in-from-bottom-2",e),...t}));R.displayName=V.displayName;try{H.displayName="Tooltip",H.__docgenInfo={description:"",displayName:"Tooltip",props:{}}}catch{}try{R.displayName="TooltipContent",R.__docgenInfo={description:"",displayName:"TooltipContent",props:{asChild:{defaultValue:null,description:"",name:"asChild",required:!1,type:{name:"boolean"}}}}}catch{}try{M.displayName="TooltipProvider",M.__docgenInfo={description:"",displayName:"TooltipProvider",props:{}}}catch{}try{S.displayName="TooltipTrigger",S.__docgenInfo={description:"",displayName:"TooltipTrigger",props:{asChild:{defaultValue:null,description:"",name:"asChild",required:!1,type:{name:"boolean"}}}}}catch{}export{H as T,M as a,S as b,R as c};
