import{j as f}from"./clsx-KtS07kqv.js";import{I as Te}from"./chunk-W7EQS7E7-L66vMpM1.js";import{R as o,r as B}from"./index-4g5l5LRQ.js";import{B as $e}from"./index-S8TDwp6l.js";import{c as Rt,d as Pt,a as Tt,f as $t,e as Dt,g as Ct,h as Nt,$ as Ot}from"./index-Q5hxq_6l.js";import{c as Z}from"./utils-1S_n7jHw.js";import{M as De}from"./menu-i9mfWLfc.js";import"./_commonjsHelpers-4gQjN7DL.js";import"./index-nyTKe3TY.js";import"./spinner--pkT1kzj.js";import"./extends-dGVwEr9R.js";import"./index-0dIgYeBD.js";import"./index-XGpeoBSN.js";import"./index-jmm5gWkb.js";import"./index-cd2BOhhG.js";import"./index-VzvA_wF4.js";import"./Combination-nC2vVd1Z.js";import"./index-zgrs-vd1.js";import"./index-TcKUnSVx.js";import"./createLucideIcon-cZfFbMz1.js";var Ze=o.createContext({drawerRef:{current:null},overlayRef:{current:null},scaleBackground:()=>{},onPress:()=>{},onRelease:()=>{},onDrag:()=>{},onNestedDrag:()=>{},onNestedOpenChange:()=>{},onNestedRelease:()=>{},openProp:void 0,dismissible:!1,isOpen:!1,keyboardIsOpen:{current:!1},snapPointsOffset:null,snapPoints:null,modal:!1,shouldFade:!1,activeSnapPoint:null,onOpenChange:()=>{},setActiveSnapPoint:()=>{},visible:!1,closeDrawer:()=>{},setVisible:()=>{}}),Ce=()=>o.useContext(Ze);function jt(e,{insertAt:n}={}){if(!e||typeof document>"u")return;let t=document.head||document.getElementsByTagName("head")[0],r=document.createElement("style");r.type="text/css",n==="top"&&t.firstChild?t.insertBefore(r,t.firstChild):t.appendChild(r),r.styleSheet?r.styleSheet.cssText=e:r.appendChild(document.createTextNode(e))}jt(`[vaul-drawer]{touch-action:none;transform:translate3d(0,100%,0);transition:transform .5s cubic-bezier(.32,.72,0,1)}.vaul-dragging .vaul-scrollable{overflow-y:hidden!important}[vaul-drawer][vaul-drawer-visible=true]{transform:translate3d(0,var(--snap-point-height, 0),0)}[vaul-overlay]{opacity:0;transition:opacity .5s cubic-bezier(.32,.72,0,1)}[vaul-overlay][vaul-drawer-visible=true]{opacity:1}[vaul-drawer]:after{content:"";position:absolute;top:100%;background:inherit;background-color:inherit;left:0;right:0;height:200%}[vaul-overlay][vaul-snap-points=true]:not([vaul-snap-points-overlay="true"]):not([data-state="closed"]){opacity:0}[vaul-overlay][vaul-snap-points-overlay=true]:not([vaul-drawer-visible="false"]){opacity:1}@keyframes fake-animation{}@media (hover: hover) and (pointer: fine){[vaul-drawer]{user-select:none}}
`);var At=typeof window<"u"?B.useLayoutEffect:B.useEffect;function Pe(...e){return(...n)=>{for(let t of e)typeof t=="function"&&t(...n)}}function It(){return Ne(/^Mac/)}function Mt(){return Ne(/^iPhone/)}function kt(){return Ne(/^iPad/)||It()&&navigator.maxTouchPoints>1}function et(){return Mt()||kt()}function Ne(e){return typeof window<"u"&&window.navigator!=null?e.test(window.navigator.platform):void 0}var Ee=typeof document<"u"&&window.visualViewport;function Le(e){let n=window.getComputedStyle(e);return/(auto|scroll)/.test(n.overflow+n.overflowX+n.overflowY)}function tt(e){for(Le(e)&&(e=e.parentElement);e&&!Le(e);)e=e.parentElement;return e||document.scrollingElement||document.documentElement}var Bt=new Set(["checkbox","radio","range","color","file","image","button","submit","reset"]),ie=0,Re;function Ht(e={}){let{isDisabled:n}=e;At(()=>{if(!n)return ie++,ie===1&&(et()?Re=zt():Re=Lt()),()=>{ie--,ie===0&&Re()}},[n])}function Lt(){return Pe(de(document.documentElement,"paddingRight",`${window.innerWidth-document.documentElement.clientWidth}px`),de(document.documentElement,"overflow","hidden"))}function zt(){let e,n=0,t=m=>{e=tt(m.target),!(e===document.documentElement&&e===document.body)&&(n=m.changedTouches[0].pageY)},r=m=>{if(!e||e===document.documentElement||e===document.body){m.preventDefault();return}let i=m.changedTouches[0].pageY,j=e.scrollTop,D=e.scrollHeight-e.clientHeight;D!==0&&((j<=0&&i>n||j>=D&&i<n)&&m.preventDefault(),n=i)},c=m=>{let i=m.target;me(i)&&i!==document.activeElement&&(m.preventDefault(),i.style.transform="translateY(-2000px)",i.focus(),requestAnimationFrame(()=>{i.style.transform=""}))},a=m=>{let i=m.target;me(i)&&(i.style.transform="translateY(-2000px)",requestAnimationFrame(()=>{i.style.transform="",Ee&&(Ee.height<window.innerHeight?requestAnimationFrame(()=>{ze(i)}):Ee.addEventListener("resize",()=>ze(i),{once:!0}))}))},s=()=>{window.scrollTo(0,0)},w=window.pageXOffset,P=window.pageYOffset,y=Pe(de(document.documentElement,"paddingRight",`${window.innerWidth-document.documentElement.clientWidth}px`),de(document.documentElement,"overflow","hidden"));window.scrollTo(0,0);let x=Pe(K(document,"touchstart",t,{passive:!1,capture:!0}),K(document,"touchmove",r,{passive:!1,capture:!0}),K(document,"touchend",c,{passive:!1,capture:!0}),K(document,"focus",a,!0),K(window,"scroll",s));return()=>{y(),x(),window.scrollTo(w,P)}}function de(e,n,t){let r=e.style[n];return e.style[n]=t,()=>{e.style[n]=r}}function K(e,n,t,r){return e.addEventListener(n,t,r),()=>{e.removeEventListener(n,t,r)}}function ze(e){let n=document.scrollingElement||document.documentElement;for(;e&&e!==n;){let t=tt(e);if(t!==document.documentElement&&t!==document.body&&t!==e){let r=t.getBoundingClientRect().top,c=e.getBoundingClientRect().top,a=e.getBoundingClientRect().bottom,s=t.getBoundingClientRect().bottom;a>s&&(t.scrollTop+=c-r)}e=t.parentElement}}function me(e){return e instanceof HTMLInputElement&&!Bt.has(e.type)||e instanceof HTMLTextAreaElement||e instanceof HTMLElement&&e.isContentEditable}function Ft(e,n){typeof e=="function"?e(n):e!=null&&(e.current=n)}function qt(...e){return n=>e.forEach(t=>Ft(t,n))}function nt(...e){return B.useCallback(qt(...e),e)}var k=null;function Vt({isOpen:e,modal:n,nested:t,hasBeenOpened:r}){let[c,a]=o.useState(typeof window<"u"?window.location.href:""),s=o.useRef(0);function w(){if(k===null&&e){k={position:document.body.style.position,top:document.body.style.top,left:document.body.style.left,height:document.body.style.height};let{scrollX:y,innerHeight:x}=window;document.body.style.setProperty("position","fixed","important"),document.body.style.top=`${-s.current}px`,document.body.style.left=`${-y}px`,document.body.style.right="0px",document.body.style.height="auto",setTimeout(()=>requestAnimationFrame(()=>{let m=x-window.innerHeight;m&&s.current>=x&&(document.body.style.top=`${-(s.current+m)}px`)}),300)}}function P(){if(k!==null){let y=-parseInt(document.body.style.top,10),x=-parseInt(document.body.style.left,10);document.body.style.position=k.position,document.body.style.top=k.top,document.body.style.left=k.left,document.body.style.height=k.height,document.body.style.right="unset",requestAnimationFrame(()=>{if(c!==window.location.href){a(window.location.href);return}window.scrollTo(x,y)}),k=null}}return o.useEffect(()=>{function y(){s.current=window.scrollY}return y(),window.addEventListener("scroll",y),()=>{window.removeEventListener("scroll",y)}},[]),o.useEffect(()=>{t||!r||(e?(w(),n||setTimeout(()=>{P()},500)):P())},[e,r,c]),{restorePositionSetting:P}}var rt=new WeakMap;function S(e,n,t=!1){if(!e||!(e instanceof HTMLElement)||!n)return;let r={};Object.entries(n).forEach(([c,a])=>{if(c.startsWith("--")){e.style.setProperty(c,a);return}r[c]=e.style[c],e.style[c]=a}),!t&&rt.set(e,r)}function ae(e,n){if(!e||!(e instanceof HTMLElement))return;let t=rt.get(e);t&&(n?e.style[n]=t[n]:Object.entries(t).forEach(([r,c])=>{e.style[r]=c}))}function se(e){let n=window.getComputedStyle(e),t=n.transform||n.webkitTransform||n.mozTransform,r=t.match(/^matrix3d\((.+)\)$/);return r?parseFloat(r[1].split(", ")[13]):(r=t.match(/^matrix\((.+)\)$/),r?parseFloat(r[1].split(", ")[5]):null)}function Wt(e){return 8*(Math.log(e+1)-2)}var g={DURATION:.5,EASE:[.32,.72,0,1]},ot=.4;function it(e){let n=o.useRef(e);return o.useEffect(()=>{n.current=e}),o.useMemo(()=>(...t)=>{var r;return(r=n.current)==null?void 0:r.call(n,...t)},[])}function Ut({defaultProp:e,onChange:n}){let t=o.useState(e),[r]=t,c=o.useRef(r),a=it(n);return o.useEffect(()=>{c.current!==r&&(a(r),c.current=r)},[r,c,a]),t}function Yt({prop:e,defaultProp:n,onChange:t=()=>{}}){let[r,c]=Ut({defaultProp:n,onChange:t}),a=e!==void 0,s=a?e:r,w=it(t),P=o.useCallback(y=>{if(a){let x=typeof y=="function"?y(e):y;x!==e&&w(x)}else c(y)},[a,e,c,w]);return[s,P]}function _t({activeSnapPointProp:e,setActiveSnapPointProp:n,snapPoints:t,drawerRef:r,overlayRef:c,fadeFromIndex:a,onSnapPointChange:s}){let[w,P]=Yt({prop:e,defaultProp:t==null?void 0:t[0],onChange:n}),y=o.useMemo(()=>w===(t==null?void 0:t[t.length-1]),[t,w]),x=t&&t.length>0&&(a||a===0)&&!Number.isNaN(a)&&t[a]===w||!t,m=o.useMemo(()=>{var p;return(p=t==null?void 0:t.findIndex(v=>v===w))!=null?p:null},[t,w]),i=o.useMemo(()=>{var p;return(p=t==null?void 0:t.map(v=>{let h=typeof window<"u",$=typeof v=="string",C=0;$&&(C=parseInt(v,10));let A=$?C:h?v*window.innerHeight:0;return h?window.innerHeight-A:A}))!=null?p:[]},[t]),j=o.useMemo(()=>m!==null?i==null?void 0:i[m]:null,[i,m]),D=o.useCallback(p=>{var v;let h=(v=i==null?void 0:i.findIndex($=>$===p))!=null?v:null;s(h),S(r.current,{transition:`transform ${g.DURATION}s cubic-bezier(${g.EASE.join(",")})`,transform:`translate3d(0, ${p}px, 0)`}),i&&h!==i.length-1&&h!==a?S(c.current,{transition:`opacity ${g.DURATION}s cubic-bezier(${g.EASE.join(",")})`,opacity:"0"}):S(c.current,{transition:`opacity ${g.DURATION}s cubic-bezier(${g.EASE.join(",")})`,opacity:"1"}),P(h!==null?t==null?void 0:t[h]:null)},[r.current,t,i,a,c,P]);o.useEffect(()=>{var p;if(e){let v=(p=t==null?void 0:t.findIndex(h=>h===e))!=null?p:null;i&&v&&typeof i[v]=="number"&&D(i[v])}},[e,t,i,D]);function M({draggedDistance:p,closeDrawer:v,velocity:h,dismissible:$}){if(a===void 0)return;let C=j-p,A=m===a-1,ve=m===0,Y=p>0;if(A&&S(c.current,{transition:`opacity ${g.DURATION}s cubic-bezier(${g.EASE.join(",")})`}),h>2&&!Y){$?v():D(i[0]);return}if(h>2&&Y&&i&&t){D(i[t.length-1]);return}let _=i==null?void 0:i.reduce((N,X)=>typeof N!="number"||typeof X!="number"?N:Math.abs(X-C)<Math.abs(N-C)?X:N);if(h>ot&&Math.abs(p)<window.innerHeight*.4){let N=Y?1:-1;if(N>0&&y){D(i[t.length-1]);return}if(ve&&N<0&&$&&v(),m===null)return;D(i[m+N]);return}D(_)}function V({draggedDistance:p}){if(j===null)return;let v=j-p;S(r.current,{transform:`translate3d(0, ${v}px, 0)`})}function L(p,v){if(!t||typeof m!="number"||!i||a===void 0)return null;let h=m===a-1;if(m>=a&&v)return 0;if(h&&!v)return 1;if(!x&&!h)return null;let $=h?m+1:m-1,C=h?i[$]-i[$-1]:i[$+1]-i[$],A=p/Math.abs(C);return h?1-A:A}return{isLastSnapPoint:y,activeSnapPoint:w,shouldFade:x,getPercentageDragged:L,setActiveSnapPoint:P,activeSnapPointIndex:m,onRelease:M,onDrag:V,snapPointsOffset:i}}var Xt=.25,Qt=100,Fe=8,F=16,qe=26,Ve="vaul-dragging";function at({open:e,onOpenChange:n,children:t,shouldScaleBackground:r,onDrag:c,onRelease:a,snapPoints:s,nested:w,closeThreshold:P=Xt,scrollLockTimeout:y=Qt,dismissible:x=!0,fadeFromIndex:m=s&&s.length-1,activeSnapPoint:i,setActiveSnapPoint:j,fixed:D,modal:M=!0,onClose:V}){var L;let[p=!1,v]=o.useState(!1),[h,$]=o.useState(!1),[C,A]=o.useState(!1),[ve,Y]=o.useState(!1),[_,N]=o.useState(!1),[X,Oe]=o.useState(!1),z=o.useRef(null),ee=o.useRef(null),we=o.useRef(null),je=o.useRef(null),te=o.useRef(null),Q=o.useRef(!1),ye=o.useRef(null),be=o.useRef(0),W=o.useRef(!1),Ae=o.useRef(0),d=o.useRef(null),Ie=o.useRef(((L=d.current)==null?void 0:L.getBoundingClientRect().height)||0),Se=o.useRef(0),dt=o.useCallback(l=>{s&&l===J.length-1&&(ee.current=new Date)},[]),{activeSnapPoint:mt,activeSnapPointIndex:G,setActiveSnapPoint:Me,onRelease:ft,snapPointsOffset:J,onDrag:pt,shouldFade:ke,getPercentageDragged:ht}=_t({snapPoints:s,activeSnapPointProp:i,setActiveSnapPointProp:j,drawerRef:d,fadeFromIndex:m,overlayRef:z,onSnapPointChange:dt});Ht({isDisabled:!p||_||!M||X||!h});let{restorePositionSetting:gt}=Vt({isOpen:p,modal:M,nested:w,hasBeenOpened:h});function ne(){return(window.innerWidth-qe)/window.innerWidth}function vt(l){var u;!x&&!s||d.current&&!d.current.contains(l.target)||(Ie.current=((u=d.current)==null?void 0:u.getBoundingClientRect().height)||0,N(!0),we.current=new Date,et()&&window.addEventListener("touchend",()=>Q.current=!1,{once:!0}),l.target.setPointerCapture(l.pointerId),be.current=l.screenY)}function Be(l,u){var b;let E=l,T=(b=window.getSelection())==null?void 0:b.toString(),R=d.current?se(d.current):null,O=new Date;if(ee.current&&O.getTime()-ee.current.getTime()<500)return!1;if(R>0)return!0;if(T&&T.length>0)return!1;if(te.current&&O.getTime()-te.current.getTime()<y&&R===0||u)return te.current=O,!1;for(;E;){if(E.scrollHeight>E.clientHeight){if(E.scrollTop!==0)return te.current=new Date,!1;if(E.getAttribute("role")==="dialog")return!0}E=E.parentNode}return!0}function wt(l){if(_){let u=be.current-l.screenY,b=u>0;if(s&&G===0&&!x||!Q.current&&!Be(l.target,b))return;if(d.current.classList.add(Ve),Q.current=!0,S(d.current,{transition:"none"}),S(z.current,{transition:"none"}),s&&pt({draggedDistance:u}),b&&!s){let I=Wt(u);S(d.current,{transform:`translate3d(0, ${Math.min(I*-1,0)}px, 0)`});return}let E=Math.abs(u),T=document.querySelector("[vaul-drawer-wrapper]"),R=E/Ie.current,O=ht(E,b);O!==null&&(R=O);let xe=1-R;if((ke||m&&G===m-1)&&(c==null||c(l,R),S(z.current,{opacity:`${xe}`,transition:"none"},!0)),T&&z.current&&r){let I=Math.min(ne()+R*(1-ne()),1),oe=8-R*8,Et=Math.max(0,14-R*14);S(T,{borderRadius:`${oe}px`,transform:`scale(${I}) translate3d(0, ${Et}px, 0)`,transition:"none"},!0)}s||S(d.current,{transform:`translate3d(0, ${E}px, 0)`})}}o.useEffect(()=>()=>{re(!1),gt()},[]),o.useEffect(()=>{var l;function u(){var b;if(!d.current)return;let E=document.activeElement;if(me(E)||W.current){let T=((b=window.visualViewport)==null?void 0:b.height)||0,R=window.innerHeight-T,O=d.current.getBoundingClientRect().height||0;Se.current||(Se.current=O);let xe=d.current.getBoundingClientRect().top;if(Math.abs(Ae.current-R)>60&&(W.current=!W.current),s&&s.length>0&&J&&G){let I=J[G]||0;R+=I}if(Ae.current=R,O>T||W.current){let I=d.current.getBoundingClientRect().height,oe=I;I>T&&(oe=T-qe),D?d.current.style.height=`${I-Math.max(R,0)}px`:d.current.style.height=`${Math.max(oe,T-xe)}px`}else d.current.style.height=`${Se.current}px`;s&&s.length>0&&!W.current?d.current.style.bottom="0px":d.current.style.bottom=`${Math.max(R,0)}px`}}return(l=window.visualViewport)==null||l.addEventListener("resize",u),()=>{var b;return(b=window.visualViewport)==null?void 0:b.removeEventListener("resize",u)}},[G,s,J]);function U(){d.current&&(V==null||V(),S(d.current,{transform:"translate3d(0, 100%, 0)",transition:`transform ${g.DURATION}s cubic-bezier(${g.EASE.join(",")})`}),S(z.current,{opacity:"0",transition:`opacity ${g.DURATION}s cubic-bezier(${g.EASE.join(",")})`}),re(!1),setTimeout(()=>{A(!1),v(!1)},300),setTimeout(()=>{s&&Me(s[0])},g.DURATION*1e3))}o.useEffect(()=>{if(!p&&r){let l=setTimeout(()=>{ae(document.body)},200);return()=>clearTimeout(l)}},[p,r]),o.useEffect(()=>{e?(v(!0),$(!0)):U()},[e]),o.useEffect(()=>{ve&&(n==null||n(p))},[p]),o.useEffect(()=>{Y(!0)},[]);function He(){if(!d.current)return;let l=document.querySelector("[vaul-drawer-wrapper]"),u=se(d.current);S(d.current,{transform:"translate3d(0, 0, 0)",transition:`transform ${g.DURATION}s cubic-bezier(${g.EASE.join(",")})`}),S(z.current,{transition:`opacity ${g.DURATION}s cubic-bezier(${g.EASE.join(",")})`,opacity:"1"}),r&&u&&u>0&&p&&S(l,{borderRadius:`${Fe}px`,overflow:"hidden",transform:`scale(${ne()}) translate3d(0, calc(env(safe-area-inset-top) + 14px), 0)`,transformOrigin:"top",transitionProperty:"transform, border-radius",transitionDuration:`${g.DURATION}s`,transitionTimingFunction:`cubic-bezier(${g.EASE.join(",")})`},!0)}function yt(l){var u;if(!_||!d.current)return;Q.current&&me(l.target)&&l.target.blur(),d.current.classList.remove(Ve),Q.current=!1,N(!1),je.current=new Date;let b=se(d.current);if(!Be(l.target,!1)||!b||Number.isNaN(b)||we.current===null)return;let E=je.current.getTime()-we.current.getTime(),T=be.current-l.screenY,R=Math.abs(T)/E;if(R>.05&&(Oe(!0),setTimeout(()=>{Oe(!1)},200)),s){ft({draggedDistance:T,closeDrawer:U,velocity:R,dismissible:x}),a==null||a(l,!0);return}if(T>0){He(),a==null||a(l,!0);return}if(R>ot){U(),a==null||a(l,!1);return}let O=Math.min((u=d.current.getBoundingClientRect().height)!=null?u:0,window.innerHeight);if(b>=O*P){U(),a==null||a(l,!1);return}a==null||a(l,!0),He()}o.useEffect(()=>{p&&(ee.current=new Date,re(!0))},[p]),o.useEffect(()=>{C&&d.current.querySelectorAll("*").forEach(l=>{let u=l;(u.scrollHeight>u.clientHeight||u.scrollWidth>u.clientWidth)&&u.classList.add("vaul-scrollable")})},[C]);function re(l){let u=document.querySelector("[vaul-drawer-wrapper]");!u||!r||(l?(S(document.body,{background:"black"},!0),S(u,{borderRadius:`${Fe}px`,overflow:"hidden",transform:`scale(${ne()}) translate3d(0, calc(env(safe-area-inset-top) + 14px), 0)`,transformOrigin:"top",transitionProperty:"transform, border-radius",transitionDuration:`${g.DURATION}s`,transitionTimingFunction:`cubic-bezier(${g.EASE.join(",")})`})):(ae(u,"overflow"),ae(u,"transform"),ae(u,"borderRadius"),S(u,{transitionProperty:"transform, border-radius",transitionDuration:`${g.DURATION}s`,transitionTimingFunction:`cubic-bezier(${g.EASE.join(",")})`})))}function bt(l){let u=l?(window.innerWidth-F)/window.innerWidth:1,b=l?-F:0;ye.current&&window.clearTimeout(ye.current),S(d.current,{transition:`transform ${g.DURATION}s cubic-bezier(${g.EASE.join(",")})`,transform:`scale(${u}) translate3d(0, ${b}px, 0)`}),!l&&d.current&&(ye.current=setTimeout(()=>{S(d.current,{transition:"none",transform:`translate3d(0, ${se(d.current)}px, 0)`})},500))}function St(l,u){if(u<0)return;let b=(window.innerWidth-F)/window.innerWidth,E=b+u*(1-b),T=-F+u*F;S(d.current,{transform:`scale(${E}) translate3d(0, ${T}px, 0)`,transition:"none"})}function xt(l,u){let b=u?(window.innerWidth-F)/window.innerWidth:1,E=u?-F:0;u&&S(d.current,{transition:`transform ${g.DURATION}s cubic-bezier(${g.EASE.join(",")})`,transform:`scale(${b}) translate3d(0, ${E}px, 0)`})}return o.createElement(Ot,{modal:M,onOpenChange:l=>{if(e!==void 0){n==null||n(l);return}l?($(!0),v(l)):U()},open:p},o.createElement(Ze.Provider,{value:{visible:C,activeSnapPoint:mt,snapPoints:s,setActiveSnapPoint:Me,drawerRef:d,overlayRef:z,scaleBackground:re,onOpenChange:n,onPress:vt,setVisible:A,onRelease:yt,onDrag:wt,dismissible:x,isOpen:p,shouldFade:ke,closeDrawer:U,onNestedDrag:St,onNestedOpenChange:bt,onNestedRelease:xt,keyboardIsOpen:W,openProp:e,modal:M,snapPointsOffset:J}},t))}var st=o.forwardRef(function({children:e,...n},t){let{overlayRef:r,snapPoints:c,onRelease:a,shouldFade:s,isOpen:w,visible:P}=Ce(),y=nt(t,r),x=c&&c.length>0;return o.createElement(Rt,{onMouseUp:a,ref:y,"vaul-drawer-visible":P?"true":"false","vaul-overlay":"","vaul-snap-points":w&&x?"true":"false","vaul-snap-points-overlay":w&&s?"true":"false",...n})});st.displayName="Drawer.Overlay";var lt=o.forwardRef(function({onOpenAutoFocus:e,onPointerDownOutside:n,onAnimationEnd:t,style:r,...c},a){let{drawerRef:s,onPress:w,onRelease:P,onDrag:y,dismissible:x,keyboardIsOpen:m,snapPointsOffset:i,visible:j,closeDrawer:D,modal:M,openProp:V,onOpenChange:L,setVisible:p}=Ce(),v=nt(a,s);return o.useEffect(()=>{p(!0)},[]),o.createElement(Pt,{onOpenAutoFocus:h=>{e?e(h):(h.preventDefault(),s.current.focus())},onPointerDown:w,onPointerDownOutside:h=>{if(n==null||n(h),!M){h.preventDefault();return}m.current&&(m.current=!1),h.preventDefault(),L==null||L(!1),!(!x||V!==void 0)&&D()},onPointerMove:y,onPointerUp:P,ref:v,style:i&&i.length>0?{"--snap-point-height":`${i[0]}px`,...r}:r,...c,"vaul-drawer":"","vaul-drawer-visible":j?"true":"false"})});lt.displayName="Drawer.Content";function Gt({onDrag:e,onOpenChange:n,...t}){let{onNestedDrag:r,onNestedOpenChange:c,onNestedRelease:a}=Ce();if(!r)throw new Error("Drawer.NestedRoot must be placed in another drawer");return o.createElement(at,{nested:!0,onClose:()=>{c(!1)},onDrag:(s,w)=>{r(s,w),e==null||e(s,w)},onOpenChange:s=>{s&&c(s),n==null||n(s)},onRelease:a,...t})}var H={Root:at,NestedRoot:Gt,Content:lt,Overlay:st,Trigger:Tt,Portal:$t,Close:Dt,Title:Ct,Description:Nt};const q=({shouldScaleBackground:e=!0,...n})=>f.jsx(H.Root,{shouldScaleBackground:e,...n});q.displayName="Sheet";const fe=H.Trigger;fe.displayName="SheetTrigger";const ut=H.Portal;ut.displayName="SheetPortal";const Jt=H.Close;Jt.displayName="SheetClose";const ct=B.forwardRef(({className:e,...n},t)=>f.jsx(H.Overlay,{ref:t,className:Z("fixed inset-0 z-50 bg-black/80",e),...n}));ct.displayName="SheetOverlay";const pe=B.forwardRef(({className:e,children:n,...t},r)=>f.jsxs(ut,{children:[f.jsx(ct,{}),f.jsxs(H.Content,{ref:r,className:Z("fixed inset-x-0 bottom-0 z-50 mt-24 flex h-auto flex-col rounded-t-[10px] border bg-background",e),...t,children:[f.jsx("div",{className:"mx-auto mt-4 h-1 w-[100px] rounded-full bg-muted"}),n]})]}));pe.displayName="SheetContent";const he=({className:e,...n})=>f.jsx("div",{className:Z("grid gap-1.5 p-4 text-center sm:text-left",e),...n});he.displayName="SheetHeader";const ge=B.forwardRef(({className:e,...n},t)=>f.jsx(H.Title,{ref:t,className:Z("text-lg font-semibold leading-none tracking-tight",e),...n}));ge.displayName="SheetTitle";const Kt=B.forwardRef(({className:e,...n},t)=>f.jsx(H.Description,{ref:t,className:Z("text-sm text-muted-foreground",e),...n}));Kt.displayName="SheetDescription";try{q.displayName="Sheet",q.__docgenInfo={description:"",displayName:"Sheet",props:{activeSnapPoint:{defaultValue:null,description:"",name:"activeSnapPoint",required:!1,type:{name:"string | number | null"}},setActiveSnapPoint:{defaultValue:null,description:"",name:"setActiveSnapPoint",required:!1,type:{name:"((snapPoint: string | number | null) => void)"}},open:{defaultValue:null,description:"",name:"open",required:!1,type:{name:"boolean"}},closeThreshold:{defaultValue:null,description:"",name:"closeThreshold",required:!1,type:{name:"number"}},onOpenChange:{defaultValue:null,description:"",name:"onOpenChange",required:!1,type:{name:"((open: boolean) => void)"}},shouldScaleBackground:{defaultValue:{value:"true"},description:"",name:"shouldScaleBackground",required:!1,type:{name:"boolean"}},scrollLockTimeout:{defaultValue:null,description:"",name:"scrollLockTimeout",required:!1,type:{name:"number"}},fixed:{defaultValue:null,description:"",name:"fixed",required:!1,type:{name:"boolean"}},dismissible:{defaultValue:null,description:"",name:"dismissible",required:!1,type:{name:"boolean"}},onDrag:{defaultValue:null,description:"",name:"onDrag",required:!1,type:{name:"((event: PointerEvent<HTMLDivElement>, percentageDragged: number) => void)"}},onRelease:{defaultValue:null,description:"",name:"onRelease",required:!1,type:{name:"((event: PointerEvent<HTMLDivElement>, open: boolean) => void)"}},modal:{defaultValue:null,description:"",name:"modal",required:!1,type:{name:"boolean"}},nested:{defaultValue:null,description:"",name:"nested",required:!1,type:{name:"boolean"}},onClose:{defaultValue:null,description:"",name:"onClose",required:!1,type:{name:"(() => void)"}}}}}catch{}const bn={component:q,title:"Components/Sheet"},le={render:()=>f.jsxs(q,{children:[f.jsx(fe,{asChild:!0,children:f.jsx($e,{size:"icon",children:f.jsx(De,{})})}),f.jsxs(pe,{className:"items-center",children:[f.jsx(he,{children:f.jsx(ge,{children:"I'm a simple Sheet"})}),f.jsx(Te,{src:"https://source.unsplash.com/random/1280x720/?cat",alt:"Fruit",layout:"constrained",width:600,height:600,className:"h-48 w-48 rounded-md"})]})]})},ue={render:()=>f.jsxs(q,{shouldScaleBackground:!0,children:[f.jsx(fe,{asChild:!0,children:f.jsx($e,{size:"icon",children:f.jsx(De,{})})}),f.jsxs(pe,{className:"h-[96%]",children:[f.jsx(he,{children:f.jsx(ge,{children:"I'm a simple Sheet"})}),f.jsx("div",{className:"flex h-full w-full items-center justify-center",children:f.jsx(Te,{src:"https://source.unsplash.com/random/1280x720/?cat",alt:"Fruit",layout:"constrained",width:600,height:600,className:"h-96 w-96 rounded-md"})})]})]})},ce={render:()=>{const[e,n]=B.useState("148px");return f.jsxs(q,{shouldScaleBackground:!0,snapPoints:["148px","355px",1],activeSnapPoint:e,setActiveSnapPoint:n,children:[f.jsx(fe,{asChild:!0,children:f.jsx($e,{size:"icon",children:f.jsx(De,{})})}),f.jsxs(pe,{className:"h-[96%]",children:[f.jsx(he,{children:f.jsx(ge,{children:"I'm a simple Sheet"})}),f.jsx("div",{className:"flex h-full w-full items-center justify-center",children:f.jsx(Te,{src:"https://source.unsplash.com/random/1280x720/?cat",alt:"Fruit",layout:"constrained",width:600,height:600,className:"h-96 w-96 rounded-md"})})]})]})}};var We,Ue,Ye;le.parameters={...le.parameters,docs:{...(We=le.parameters)==null?void 0:We.docs,source:{originalSource:`{
  render: () => {
    return <Sheet>
        <SheetTrigger asChild>
          <Button size="icon">
            <Menu />
          </Button>
        </SheetTrigger>
        <SheetContent className="items-center">
          <SheetHeader>
            <SheetTitle>{\`I'm a simple Sheet\`}</SheetTitle>
          </SheetHeader>
          <Image src="https://source.unsplash.com/random/1280x720/?cat" alt="Fruit" layout="constrained" width={600} height={600} className="h-48 w-48 rounded-md" />
        </SheetContent>
      </Sheet>;
  }
}`,...(Ye=(Ue=le.parameters)==null?void 0:Ue.docs)==null?void 0:Ye.source}}};var _e,Xe,Qe;ue.parameters={...ue.parameters,docs:{...(_e=ue.parameters)==null?void 0:_e.docs,source:{originalSource:`{
  render: () => {
    return <Sheet shouldScaleBackground>
        <SheetTrigger asChild>
          <Button size="icon">
            <Menu />
          </Button>
        </SheetTrigger>
        <SheetContent className="h-[96%]">
          <SheetHeader>
            <SheetTitle>{\`I'm a simple Sheet\`}</SheetTitle>
          </SheetHeader>
          <div className="flex h-full w-full items-center justify-center">
            <Image src="https://source.unsplash.com/random/1280x720/?cat" alt="Fruit" layout="constrained" width={600} height={600} className="h-96 w-96 rounded-md" />
          </div>
        </SheetContent>
      </Sheet>;
  }
}`,...(Qe=(Xe=ue.parameters)==null?void 0:Xe.docs)==null?void 0:Qe.source}}};var Ge,Je,Ke;ce.parameters={...ce.parameters,docs:{...(Ge=ce.parameters)==null?void 0:Ge.docs,source:{originalSource:`{
  render: () => {
    const [snap, setSnap] = useState<number | string | null>('148px');
    return <Sheet shouldScaleBackground snapPoints={['148px', '355px', 1]} activeSnapPoint={snap} setActiveSnapPoint={setSnap}>
        <SheetTrigger asChild>
          <Button size="icon">
            <Menu />
          </Button>
        </SheetTrigger>
        <SheetContent className="h-[96%]">
          <SheetHeader>
            <SheetTitle>{\`I'm a simple Sheet\`}</SheetTitle>
          </SheetHeader>
          <div className="flex h-full w-full items-center justify-center">
            <Image src="https://source.unsplash.com/random/1280x720/?cat" alt="Fruit" layout="constrained" width={600} height={600} className="h-96 w-96 rounded-md" />
          </div>
        </SheetContent>
      </Sheet>;
  }
}`,...(Ke=(Je=ce.parameters)==null?void 0:Je.docs)==null?void 0:Ke.source}}};const Sn=["Default","WithScaledBackground","WithSnapPoints"];export{le as Default,ue as WithScaledBackground,ce as WithSnapPoints,Sn as __namedExportsOrder,bn as default};
