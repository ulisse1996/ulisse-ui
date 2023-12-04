import{j as r}from"./jsx-runtime-vNq4Oc-g.js";import{r as m}from"./index-4g5l5LRQ.js";import{L as te}from"./label-Q8peuTjB.js";import{c as oe,a as ne,d as v,b as re,e as _,y as ie,z as le,A as se,h as de,j as ue,k as ce,n as ge,B as pe,r as ve,m as G,o as J,u as me,p as S,s as fe,t as he,v as Re,w as x,x as P}from"./index-wh2dAGjG.js";import"./_commonjsHelpers-4gQjN7DL.js";import"./extends-dGVwEr9R.js";import"./index-vg5MHLvR.js";import"./index-jmm5gWkb.js";import"./utils-LqYgCrNY.js";const Ve=e=>typeof e=="function",Q=(e,...t)=>Ve(e)?e(...t):e;var Ie=oe("rating-group").parts("root","label","item","control"),I=Ie.build(),i=ne({getRootId:e=>{var t;return((t=e.ids)==null?void 0:t.root)??`rating:${e.id}`},getLabelId:e=>{var t;return((t=e.ids)==null?void 0:t.label)??`rating:${e.id}:label`},getHiddenInputId:e=>{var t;return((t=e.ids)==null?void 0:t.hiddenInput)??`rating:${e.id}:input`},getControlId:e=>{var t;return((t=e.ids)==null?void 0:t.control)??`rating:${e.id}:control`},getItemId:(e,t)=>{var a,o;return((o=(a=e.ids)==null?void 0:a.rating)==null?void 0:o.call(a,t))??`rating:${e.id}:star:${t}`},getRootEl:e=>i.getById(e,i.getRootId(e)),getControlEl:e=>i.getById(e,i.getControlId(e)),getRadioEl:e=>{var t;return(t=i.getControlEl(e))==null?void 0:t.querySelector(`[role=radio][aria-posinset='${Math.ceil(e.value)}']`)},getActiveEl:e=>i.getRootNode(e).activeElement,getHiddenInputEl:e=>i.getById(e,i.getHiddenInputId(e)),dispatchChangeEvent:e=>{const t=i.getHiddenInputEl(e);t&&ge(t,{value:e.value})}});function Ee(e,t,a){const o=e.context.isInteractive,n=e.context.isDisabled,s=e.context.value,p=e.context.hoveredValue,h=e.context.translations;function f(l){const d=e.context.isHovering?e.context.hoveredValue:e.context.value,u=Math.ceil(d)===l.index,w=l.index<=d||u,c=u&&Math.abs(d-l.index)===.5;return{isEqual:u,isValueEmpty:e.context.value===-1,isHighlighted:w,isHalf:c,isChecked:u||e.context.value===-1&&l.index===1}}return{isHovering:e.context.isHovering,value:s,hoveredValue:p,count:e.context.count,items:Array.from({length:e.context.count}).map((l,d)=>d+1),getItemState:f,setValue(l){t({type:"SET_VALUE",value:l})},clearValue(){t("CLEAR_VALUE")},rootProps:a.element({dir:e.context.dir,...I.root.attrs,id:i.getRootId(e.context)}),hiddenInputProps:a.input({name:e.context.name,form:e.context.form,type:"text",hidden:!0,id:i.getHiddenInputId(e.context),defaultValue:e.context.value}),labelProps:a.element({...I.label.attrs,dir:e.context.dir,id:i.getLabelId(e.context),"data-disabled":v(n)}),controlProps:a.element({id:i.getControlId(e.context),...I.control.attrs,dir:e.context.dir,role:"radiogroup","aria-orientation":"horizontal","aria-labelledby":i.getLabelId(e.context),tabIndex:e.context.readOnly?0:-1,"data-disabled":v(n),onPointerMove(l){!o||l.pointerType==="touch"||t("GROUP_POINTER_OVER")},onPointerLeave(l){!o||l.pointerType==="touch"||t("GROUP_POINTER_LEAVE")}}),getItemProps(l){const{index:d}=l,u=f(l),w=h.ratingValueText(d);return a.element({...I.item.attrs,dir:e.context.dir,id:i.getItemId(e.context,d.toString()),role:"radio",tabIndex:n?void 0:u.isChecked?0:-1,"aria-roledescription":"rating","aria-label":w,"aria-disabled":n,"data-disabled":v(n),"aria-readonly":re(e.context.readOnly),"data-readonly":v(e.context.readOnly),"aria-setsize":e.context.count,"aria-checked":u.isChecked,"data-checked":v(u.isChecked),"aria-posinset":d,"data-highlighted":v(u.isHighlighted),"data-half":v(u.isHalf),onPointerDown(c){if(!o)return;const R=_(c);ie(R)&&c.preventDefault()},onPointerMove(c){if(!o)return;const R=le(_(c)),ae=se(R,c.currentTarget).getPercentValue({orientation:"horizontal",dir:e.context.dir})<.5;t({type:"POINTER_OVER",index:d,isMidway:ae})},onKeyDown(c){if(!o)return;const R={ArrowLeft(){t("ARROW_LEFT")},ArrowRight(){t("ARROW_RIGHT")},ArrowUp(){t("ARROW_LEFT")},ArrowDown(){t("ARROW_RIGHT")},Space(){t({type:"SPACE",value:d})},Home(){t("HOME")},End(){t("END")}},O=de(c,e.context),H=R[O];H&&(c.preventDefault(),H(c))},onClick(){o&&t({type:"CLICK",value:d})},onFocus(){o&&t("FOCUS")},onBlur(){o&&t("BLUR")}})}}}function Ce(e){const t=ue(e);return ce({id:"rating",initial:"idle",context:{name:"rating",count:5,dir:"ltr",value:-1,hoveredValue:-1,readOnly:!1,disabled:!1,...t,fieldsetDisabled:!1,translations:{ratingValueText:a=>`${a} stars`,...t.translations}},created:["roundValueIfNeeded"],watch:{allowHalf:["roundValueIfNeeded"]},computed:{isDisabled:a=>!!a.disabled||a.fieldsetDisabled,isInteractive:a=>!(a.isDisabled||a.readOnly),isHovering:a=>a.hoveredValue>-1},activities:["trackFormControlState"],on:{SET_VALUE:{actions:["setValue"]},CLEAR_VALUE:{actions:["clearValue"]}},states:{idle:{entry:"clearHoveredValue",on:{GROUP_POINTER_OVER:"hover",FOCUS:"focus",CLICK:{actions:["setValue","focusActiveRadio"]}}},focus:{on:{POINTER_OVER:{actions:"setHoveredValue"},GROUP_POINTER_LEAVE:{actions:"clearHoveredValue"},BLUR:"idle",SPACE:{guard:"isValueEmpty",actions:["setValue"]},CLICK:{actions:["setValue","focusActiveRadio"]},ARROW_LEFT:{actions:["setPrevValue","focusActiveRadio"]},ARROW_RIGHT:{actions:["setNextValue","focusActiveRadio"]},HOME:{actions:["setValueToMin","focusActiveRadio"]},END:{actions:["setValueToMax","focusActiveRadio"]}}},hover:{on:{POINTER_OVER:{actions:"setHoveredValue"},GROUP_POINTER_LEAVE:[{guard:"isRadioFocused",target:"focus",actions:"clearHoveredValue"},{target:"idle",actions:"clearHoveredValue"}],CLICK:{actions:["setValue","focusActiveRadio"]}}}}},{guards:{isInteractive:a=>!(a.disabled||a.readOnly),isHoveredValueEmpty:a=>a.hoveredValue===-1,isValueEmpty:a=>a.value<=0,isRadioFocused:a=>{var o;return!!((o=i.getControlEl(a))!=null&&o.contains(i.getActiveEl(a)))}},activities:{trackFormControlState(a,o,{initialContext:n}){return pe(i.getHiddenInputEl(a),{onFieldsetDisabledChange(s){a.fieldsetDisabled=s},onFormReset(){g.value(a,n.value)}})}},actions:{clearHoveredValue(a){g.hoveredValue(a,-1)},focusActiveRadio(a){ve(()=>{var o;return(o=i.getRadioEl(a))==null?void 0:o.focus()})},setPrevValue(a){const o=a.allowHalf?.5:1;g.value(a,Math.max(0,a.value-o))},setNextValue(a){const o=a.allowHalf?.5:1,n=a.value===-1?0:a.value;g.value(a,Math.min(a.count,n+o))},setValueToMin(a){g.value(a,1)},setValueToMax(a){g.value(a,a.count)},setValue(a,o){const n=a.hoveredValue===-1?o.value:a.hoveredValue;g.value(a,n)},clearValue(a){g.value(a,-1)},setHoveredValue(a,o){const s=a.allowHalf&&o.isMidway?.5:0;g.hoveredValue(a,o.index-s)},roundValueIfNeeded(a){a.allowHalf||(a.value=Math.round(a.value))}}})}var T={change:e=>{var t;(t=e.onValueChange)==null||t.call(e,{value:e.value}),i.dispatchChangeEvent(e)},hoverChange:e=>{var t;(t=e.onHoverChange)==null||t.call(e,{hoveredValue:e.hoveredValue})}},g={value:(e,t)=>{G(e.value,t)||(e.value=t,T.change(e))},hoveredValue:(e,t)=>{G(e.hoveredValue,t)||(e.hoveredValue=t,T.hoverChange(e))}};const[be,L]=J({name:"RatingGroupContext",hookName:"useRatingGroupContext",providerName:"<RatingGroupProvider />"}),ye=e=>{const t={id:m.useId(),getRootNode:me(),...e,value:e.defaultValue},a={...t,value:e.value,onValueChange:S(e.onValueChange,{sync:!0}),onHoverChange:S(e.onHoverChange)},[o,n]=fe(Ce(t),{context:a});return Ee(o,n,he)},A=m.forwardRef((e,t)=>{const[a,o]=Re()(e,["allowHalf","autoFocus","count","defaultValue","dir","disabled","form","getRootNode","id","ids","name","onHoverChange","onValueChange","readOnly","translations","value"]),n=ye(a),s=x(n.rootProps,o);return r.jsx(be,{value:n,children:r.jsx(P.div,{...s,ref:t})})});A.displayName="RatingGroup";const Y=m.forwardRef((e,t)=>{const{children:a,...o}=e,n=L(),s=x(n.controlProps,o),p=Q(a,n);return r.jsxs(r.Fragment,{children:[r.jsx(P.div,{...s,ref:t,children:p}),r.jsx("input",{...n.hiddenInputProps})]})});Y.displayName="RatingGroupControl";const[xe,Te]=J({name:"RatingGroupItemContext",hookName:"useRatingGroupItemContext",providerName:"<RatingGroupItemProvider />"}),Z=m.forwardRef((e,t)=>{const{children:a,index:o,...n}=e,s=L(),p=s.getItemState({index:o}),h=x(s.getItemProps({index:o}),n),f=Q(a,p);return r.jsx(xe,{value:p,children:r.jsx(P.span,{...h,ref:t,children:f})})});Z.displayName="RatingGroupItem";const ee=m.forwardRef((e,t)=>{const a=L(),o=x(a.labelProps,e);return r.jsx(P.label,{...o,ref:t})});ee.displayName="RatingGroupLabel";const N=Object.assign(A,{Root:A,Control:Y,Label:ee,Item:Z});function Pe(e){return r.jsx("svg",{xmlns:"http://www.w3.org/2000/svg",width:"24",height:"24",fill:"currentColor",viewBox:"0 0 16 16",...e,children:r.jsx("path",{d:"M5.354 5.119 7.538.792A.516.516 0 0 1 8 .5c.183 0 .366.097.465.292l2.184 4.327 4.898.696A.537.537 0 0 1 16 6.32a.548.548 0 0 1-.17.445l-3.523 3.356.83 4.73c.078.443-.36.79-.746.592L8 13.187l-4.389 2.256a.52.52 0 0 1-.146.05c-.342.06-.668-.254-.6-.642l.83-4.73L.173 6.765a.55.55 0 0 1-.172-.403.58.58 0 0 1 .085-.302.513.513 0 0 1 .37-.245l4.898-.696zM8 12.027a.5.5 0 0 1 .232.056l3.686 1.894-.694-3.957a.565.565 0 0 1 .162-.505l2.907-2.77-4.052-.576a.525.525 0 0 1-.393-.288L8.001 2.223 8 2.226v9.8z"})})}function j(e){return r.jsx("svg",{xmlns:"http://www.w3.org/2000/svg",width:"24",height:"24",fill:"currentColor",viewBox:"0 0 16 16",...e,children:r.jsx("path",{d:"M3.612 15.443c-.386.198-.824-.149-.746-.592l.83-4.73L.173 6.765c-.329-.314-.158-.888.283-.95l4.898-.696L7.538.792c.197-.39.73-.39.927 0l2.184 4.327 4.898.696c.441.062.612.636.282.95l-3.522 3.356.83 4.73c.078.443-.36.79-.746.592L8 13.187l-4.389 2.256z"})})}const V=m.forwardRef(({label:e,disabled:t,...a},o)=>{const{id:n}=a,{halfIcon:s=r.jsx(Pe,{"aria-disabled":t,className:"fill-amber-400 stroke-transparent drop-shadow-sm"}),fullIcon:p=r.jsx(j,{"aria-disabled":t,className:"fill-amber-400 stroke-transparent drop-shadow-sm"}),emptyIcon:h=r.jsx(j,{"aria-disabled":t,className:"fill-amber-400/50 stroke-transparent drop-shadow-sm aria-[disabled=true]:fill-transparent"})}=a;return r.jsxs(N.Root,{className:"grid w-full max-w-sm items-center gap-1.5",...a,ref:o,children:[e&&r.jsx(te,{htmlFor:n,children:e}),r.jsx(N.Control,{className:"flex flex-row items-center gap-1",children:({items:f})=>f.map(l=>r.jsx(N.Item,{"aria-disabled":t,index:l,className:"!outline-none",children:({isHalf:d,isHighlighted:u})=>d?s:u?p:h},l))})]})});V.displayName="Rating";try{V.displayName="Rating",V.__docgenInfo={description:"",displayName:"Rating",props:{label:{defaultValue:null,description:"",name:"label",required:!1,type:{name:"string"}},halfIcon:{defaultValue:null,description:"",name:"halfIcon",required:!1,type:{name:"ReactNode"}},fullIcon:{defaultValue:null,description:"",name:"fullIcon",required:!1,type:{name:"ReactNode"}},emptyIcon:{defaultValue:null,description:"",name:"emptyIcon",required:!1,type:{name:"ReactNode"}},asChild:{defaultValue:null,description:"Render as a different element type.",name:"asChild",required:!1,type:{name:"boolean"}}}}}catch{}const je={component:V,title:"Components/Rating"},E={args:{count:5,label:"Rating",id:"rating",value:2}},C={args:{allowHalf:!0,count:5,label:"Rating",id:"rating",value:2.5}},b={args:{disabled:!0,allowHalf:!0,count:5,label:"Rating",id:"rating",value:2.5}},y={args:{count:5,label:"Rating",id:"rating",value:2},render:e=>{const[t,a]=m.useState(3);return r.jsx(V,{...e,value:t,defaultValue:t,onValueChange:o=>a(o.value)})}};var M,k,D;E.parameters={...E.parameters,docs:{...(M=E.parameters)==null?void 0:M.docs,source:{originalSource:`{
  args: {
    count: 5,
    label: 'Rating',
    id: 'rating',
    value: 2
  }
}`,...(D=(k=E.parameters)==null?void 0:k.docs)==null?void 0:D.source}}};var F,U,q;C.parameters={...C.parameters,docs:{...(F=C.parameters)==null?void 0:F.docs,source:{originalSource:`{
  args: {
    allowHalf: true,
    count: 5,
    label: 'Rating',
    id: 'rating',
    value: 2.5
  }
}`,...(q=(U=C.parameters)==null?void 0:U.docs)==null?void 0:q.source}}};var B,$,W;b.parameters={...b.parameters,docs:{...(B=b.parameters)==null?void 0:B.docs,source:{originalSource:`{
  args: {
    disabled: true,
    allowHalf: true,
    count: 5,
    label: 'Rating',
    id: 'rating',
    value: 2.5
  }
}`,...(W=($=b.parameters)==null?void 0:$.docs)==null?void 0:W.source}}};var K,z,X;y.parameters={...y.parameters,docs:{...(K=y.parameters)==null?void 0:K.docs,source:{originalSource:`{
  args: {
    count: 5,
    label: 'Rating',
    id: 'rating',
    value: 2
  },
  render: props => {
    const [stars, setStars] = useState(3);
    return <Rating {...props} value={stars} defaultValue={stars} onValueChange={e => setStars(e.value)} />;
  }
}`,...(X=(z=y.parameters)==null?void 0:z.docs)==null?void 0:X.source}}};const Me=["Default","WithHalf","Disabled","Controlled"];export{y as Controlled,E as Default,b as Disabled,C as WithHalf,Me as __namedExportsOrder,je as default};
