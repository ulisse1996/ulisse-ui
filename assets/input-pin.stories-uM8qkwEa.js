import{j as r}from"./jsx-runtime-vNq4Oc-g.js";import{r as g}from"./index-4g5l5LRQ.js";import{L as Y}from"./label-Q8peuTjB.js";import{c as ee,a as te,i as ne,d as p,b as ae,g as oe,e as S,f as ue,h as re,j as le,k as se,l as ie,q as de,r as v,m as U,n as pe,o as ce,u as Ie,p as C,s as me,t as ge,v as fe,w as P,x as E}from"./index-wh2dAGjG.js";import"./_commonjsHelpers-4gQjN7DL.js";import"./extends-dGVwEr9R.js";import"./index-vg5MHLvR.js";import"./index-jmm5gWkb.js";import"./utils-LqYgCrNY.js";var ve={border:"0",clip:"rect(0 0 0 0)",height:"1px",margin:"-1px",overflow:"hidden",padding:"0",position:"absolute",width:"1px",whiteSpace:"nowrap",wordWrap:"normal"},he=ee("pinInput").parts("root","label","input","control"),h=he.build(),u=te({getRootId:t=>{var a;return((a=t.ids)==null?void 0:a.root)??`pin-input:${t.id}`},getInputId:(t,a)=>{var e,n;return((n=(e=t.ids)==null?void 0:e.input)==null?void 0:n.call(e,a))??`pin-input:${t.id}:${a}`},getHiddenInputId:t=>{var a;return((a=t.ids)==null?void 0:a.hiddenInput)??`pin-input:${t.id}:hidden`},getLabelId:t=>{var a;return((a=t.ids)==null?void 0:a.label)??`pin-input:${t.id}:label`},getControlId:t=>{var a;return((a=t.ids)==null?void 0:a.control)??`pin-input:${t.id}:control`},getRootEl:t=>u.getById(t,u.getRootId(t)),getInputEls:t=>{const e=`input[data-ownedby=${CSS.escape(u.getRootId(t))}]`;return de(u.getRootEl(t),e)},getInputEl:(t,a)=>u.getById(t,u.getInputId(t,a)),getFocusedInputEl:t=>u.getInputEls(t)[t.focusedIndex],getFirstInputEl:t=>u.getInputEls(t)[0],getHiddenInputEl:t=>u.getById(t,u.getHiddenInputId(t))}),Ve={numeric:/^[0-9]+$/,alphabetic:/^[A-Za-z]+$/,alphanumeric:/^[a-zA-Z0-9]+$/i};function xe(t,a){var e;return t.type?!!((e=Ve[t.type])!=null&&e.test(a)):!0}function ye(t,a){return t.pattern?new RegExp(t.pattern,"g").test(a):xe(t,a)}function be(t,a,e){const n=t.context.isValueComplete,o=t.context.invalid,l=t.context.focusedIndex,A=t.context.translations;function T(){var s;(s=u.getFirstInputEl(t.context))==null||s.focus()}return{focus:T,value:t.context.value,valueAsString:t.context.valueAsString,isValueComplete:n,setValue(s){Array.isArray(s)||ne("[pin-input/setValue] value must be an array"),a({type:"VALUE.SET",value:s})},clearValue(){a({type:"VALUE.CLEAR"})},setValueAtIndex(s,d){a({type:"VALUE.SET",value:d,index:s})},rootProps:e.element({dir:t.context.dir,...h.root.attrs,id:u.getRootId(t.context),"data-invalid":p(o),"data-disabled":p(t.context.disabled),"data-complete":p(n)}),labelProps:e.label({...h.label.attrs,dir:t.context.dir,htmlFor:u.getHiddenInputId(t.context),id:u.getLabelId(t.context),"data-invalid":p(o),"data-disabled":p(t.context.disabled),"data-complete":p(n),onClick(s){s.preventDefault(),T()}}),hiddenInputProps:e.input({"aria-hidden":!0,type:"text",tabIndex:-1,id:u.getHiddenInputId(t.context),name:t.context.name,form:t.context.form,style:ve,maxLength:t.context.valueLength,defaultValue:t.context.valueAsString}),controlProps:e.element({...h.control.attrs,dir:t.context.dir,id:u.getControlId(t.context)}),getInputProps(s){const{index:d}=s,Q=t.context.type==="numeric"?"tel":"text";return e.input({...h.input.attrs,dir:t.context.dir,disabled:t.context.disabled,"data-disabled":p(t.context.disabled),"data-complete":p(n),id:u.getInputId(t.context,d.toString()),"data-ownedby":u.getRootId(t.context),"aria-label":A.inputLabel(d,t.context.valueLength),inputMode:t.context.otp||t.context.type==="numeric"?"numeric":"text","aria-invalid":ae(o),"data-invalid":p(o),type:t.context.mask?"password":Q,defaultValue:t.context.value[d]||"",autoCapitalize:"none",autoComplete:t.context.otp?"one-time-code":"off",placeholder:l===d?"":t.context.placeholder,onBeforeInput(i){try{const I=oe(i);ye(t.context,I)||(a({type:"VALUE.INVALID",value:I}),i.preventDefault())}catch{}},onChange(i){const I=S(i),{value:f}=i.currentTarget;if(I.inputType==="insertFromPaste"||f.length>2){a({type:"INPUT.PASTE",value:f}),i.preventDefault();return}if(I.inputType==="deleteContentBackward"){a("INPUT.BACKSPACE");return}a({type:"INPUT.CHANGE",value:f,index:d})},onKeyDown(i){const I=S(i);if(ue(I))return;const R={Backspace(){a("INPUT.BACKSPACE")},Delete(){a("INPUT.DELETE")},ArrowLeft(){a("INPUT.ARROW_LEFT")},ArrowRight(){a("INPUT.ARROW_RIGHT")},Enter(){a("INPUT.ENTER")}}[re(i,t.context)];R&&(R(i),i.preventDefault())},onFocus(){a({type:"INPUT.FOCUS",index:d})},onBlur(){a({type:"INPUT.BLUR",index:d})}})}}}function Pe(t){const a=le(t);return se({id:"pin-input",initial:"idle",context:{value:[],focusedIndex:-1,placeholder:"○",otp:!1,type:"numeric",...a,translations:{inputLabel:(e,n)=>`pin code ${e+1} of ${n}`,...a.translations}},computed:{valueLength:e=>e.value.length,filledValueLength:e=>e.value.filter(n=>(n==null?void 0:n.trim())!=="").length,isValueComplete:e=>e.valueLength===e.filledValueLength,valueAsString:e=>e.value.join(""),focusedValue:e=>e.value[e.focusedIndex]||""},entry:ie([{guard:"autoFocus",actions:["setupValue","setFocusIndexToFirst"]},{actions:["setupValue"]}]),watch:{focusedIndex:["focusInput","selectInputIfNeeded"],value:["syncInputElements"],isValueComplete:["invokeOnComplete","blurFocusedInputIfNeeded"]},on:{"VALUE.SET":[{guard:"hasIndex",actions:["setValueAtIndex"]},{actions:["setValue"]}],"VALUE.CLEAR":{actions:["clearValue","setFocusIndexToFirst"]}},states:{idle:{on:{"INPUT.FOCUS":{target:"focused",actions:"setFocusedIndex"}}},focused:{on:{"INPUT.CHANGE":[{guard:"isFinalValue",actions:["setFocusedValue","syncInputValue"]},{actions:["setFocusedValue","setNextFocusedIndex","syncInputValue"]}],"INPUT.PASTE":{actions:["setPastedValue","setLastValueFocusIndex"]},"INPUT.BLUR":{target:"idle",actions:"clearFocusedIndex"},"INPUT.DELETE":{guard:"hasValue",actions:"clearFocusedValue"},"INPUT.ARROW_LEFT":{actions:"setPrevFocusedIndex"},"INPUT.ARROW_RIGHT":{actions:"setNextFocusedIndex"},"INPUT.BACKSPACE":[{guard:"hasValue",actions:["clearFocusedValue"]},{actions:["setPrevFocusedIndex","clearFocusedValue"]}],"INPUT.ENTER":{guard:"isValueComplete",actions:"requestFormSubmit"},"VALUE.INVALID":{actions:"invokeOnInvalid"}}}}},{guards:{autoFocus:e=>!!e.autoFocus,isValueEmpty:(e,n)=>n.value==="",hasValue:e=>e.value[e.focusedIndex]!=="",isValueComplete:e=>e.isValueComplete,isFinalValue:e=>e.filledValueLength+1===e.valueLength&&e.value.findIndex(n=>n.trim()==="")===e.focusedIndex,hasIndex:(e,n)=>n.index!==void 0,isDisabled:e=>!!e.disabled},actions:{setupValue(e){if(e.value.length)return;const n=u.getInputEls(e),o=Array.from({length:n.length}).fill("");Z(e,o)},focusInput(e){var n;e.focusedIndex!==-1&&((n=u.getFocusedInputEl(e))==null||n.focus({preventScroll:!0}))},selectInputIfNeeded(e){!e.selectOnFocus||e.focusedIndex===-1||v(()=>{var n;(n=u.getFocusedInputEl(e))==null||n.select()})},invokeOnComplete(e){var n;e.isValueComplete&&((n=e.onValueComplete)==null||n.call(e,{value:Array.from(e.value),valueAsString:e.valueAsString}))},invokeOnInvalid(e,n){var o;(o=e.onValueInvalid)==null||o.call(e,{value:n.value,index:e.focusedIndex})},clearFocusedIndex(e){e.focusedIndex=-1},setFocusedIndex(e,n){e.focusedIndex=n.index},setValue(e,n){m.value(e,n.value)},setFocusedValue(e,n){const o=w(e.focusedValue,n.value);m.valueAtIndex(e,e.focusedIndex,o)},revertInputValue(e){const n=u.getFocusedInputEl(e);u.setValue(n,e.focusedValue)},syncInputValue(e,n){const o=u.getInputEl(e,n.index.toString());u.setValue(o,e.value[n.index])},syncInputElements(e){u.getInputEls(e).forEach((o,l)=>{u.setValue(o,e.value[l])})},setPastedValue(e,n){v(()=>{const o=e.focusedValue?1:0,l=n.value.substring(o,o+e.valueLength);m.value(e,l)})},setValueAtIndex(e,n){const o=w(e.focusedValue,n.value);m.valueAtIndex(e,n.index,o)},clearValue(e){const n=Array.from({length:e.valueLength}).fill("");m.value(e,n)},clearFocusedValue(e){m.valueAtIndex(e,e.focusedIndex,"")},setFocusIndexToFirst(e){e.focusedIndex=0},setNextFocusedIndex(e){e.focusedIndex=Math.min(e.focusedIndex+1,e.valueLength-1)},setPrevFocusedIndex(e){e.focusedIndex=Math.max(e.focusedIndex-1,0)},setLastValueFocusIndex(e){v(()=>{e.focusedIndex=Math.min(e.filledValueLength,e.valueLength-1)})},blurFocusedInputIfNeeded(e){e.blurOnComplete&&v(()=>{var n;(n=u.getFocusedInputEl(e))==null||n.blur()})},requestFormSubmit(e){var o;if(!e.name||!e.isValueComplete)return;const n=u.getHiddenInputEl(e);(o=n==null?void 0:n.form)==null||o.requestSubmit()}}})}function Z(t,a){(Array.isArray(a)?a:a.split("").filter(Boolean)).forEach((n,o)=>{t.value[o]=n})}function w(t,a){let e=a;return t[0]===a[0]?e=a[1]:t[0]===a[1]&&(e=a[0]),e.split("")[e.length-1]}var j={change(t){var e;(e=t.onValueChange)==null||e.call(t,{value:Array.from(t.value),valueAsString:t.valueAsString});const a=u.getHiddenInputEl(t);pe(a,{value:t.valueAsString})}},m={value(t,a){U(t.value,a)||(Z(t,a),j.change(t))},valueAtIndex(t,a,e){U(t.value[a],e)||(t.value[a]=e,j.change(t))}};const[Ee,L]=ce({name:"PinInputContext",hookName:"usePinInputContext",providerName:"<PinInputProvider />"}),Ae=(t={})=>{const a={id:g.useId(),getRootNode:Ie(),...t,value:t.defaultValue??[]},e={...a,value:t.value,onValueChange:C(t.onValueChange,{sync:!0}),onValueComplete:C(t.onValueComplete),onValueInvalid:C(t.onValueInvalid)},[n,o]=me(Pe(a),{context:e});return be(n,o,ge)},N=g.forwardRef((t,a)=>{const[e,n]=fe()(t,["autoFocus","blurOnComplete","defaultValue","dir","disabled","form","getRootNode","id","ids","invalid","mask","name","onValueChange","onValueComplete","onValueInvalid","otp","pattern","placeholder","selectOnFocus","translations","type","value"]),o=Ae(e),l=P(o.rootProps,n);return r.jsxs(Ee,{value:o,children:[r.jsx(E.div,{...l,ref:a}),r.jsx("input",{...o.hiddenInputProps})]})});N.displayName="PinInput";const X=g.forwardRef((t,a)=>{const e=L(),n=P(e.controlProps,t);return r.jsx(E.div,{...n,ref:a})});X.displayName="PinInputControl";const z=g.forwardRef((t,a)=>{const{index:e,...n}=t,o=L(),l=P(o.getInputProps({index:e}),n);return r.jsx(E.input,{...l,ref:a})});z.displayName="PinInputInput";const J=g.forwardRef((t,a)=>{const e=L(),n=P(e.labelProps,t);return r.jsx(E.label,{...n,ref:a})});J.displayName="PinInputLabel";const F=Object.assign(N,{Root:N,Control:X,Input:z,Label:J}),c=g.forwardRef(({label:t,length:a,...e},n)=>{const{id:o}=e;return r.jsxs(F.Root,{ref:n,blurOnComplete:!0,otp:!0,...e,className:"grid w-full max-w-sm items-center gap-1.5",children:[t&&r.jsx(Y,{htmlFor:o,children:t}),r.jsx(F.Control,{className:"flex flex-row gap-1",children:[...Array(a).keys()].map((l,A)=>r.jsx(F.Input,{className:"border-input flex h-10 w-10 rounded-md border bg-background px-3 py-2 text-center text-sm ring-offset-background file:rounded-xl file:border-0 file:bg-primary file:px-3 file:text-sm file:font-medium file:text-primary-foreground placeholder:text-muted-foreground hover:file:bg-primary/90 focus:ring-primary focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-primary focus-visible:ring-offset-1 disabled:cursor-not-allowed disabled:opacity-50",index:A},l))})]})});c.displayName="InputPin";try{c.displayName="InputPin",c.__docgenInfo={description:"",displayName:"InputPin",props:{label:{defaultValue:null,description:"",name:"label",required:!1,type:{name:"string"}},length:{defaultValue:null,description:"",name:"length",required:!0,type:{name:"number"}},asChild:{defaultValue:null,description:"Render as a different element type.",name:"asChild",required:!1,type:{name:"boolean"}}}}}catch{}const je={component:c,title:"Form/Input Pin"},V={args:{type:"numeric"},render:t=>r.jsx(c,{...t,length:5,label:"My Input",id:"test-input"})},x={render:()=>r.jsx(c,{length:5,"aria-label":"My Input"})},y={render:()=>r.jsx(c,{length:5,placeholder:"Insert some text",label:"My Input",id:"test-input"})},b={render:()=>r.jsx(c,{length:3,disabled:!0,placeholder:"Insert some text",label:"My Input",id:"test-input"})};var k,M,O;V.parameters={...V.parameters,docs:{...(k=V.parameters)==null?void 0:k.docs,source:{originalSource:`{
  args: {
    type: 'numeric'
  },
  render: props => {
    return <InputPin {...props} length={5} label="My Input" id="test-input" />;
  }
}`,...(O=(M=V.parameters)==null?void 0:M.docs)==null?void 0:O.source}}};var _,B,D;x.parameters={...x.parameters,docs:{...(_=x.parameters)==null?void 0:_.docs,source:{originalSource:`{
  render: () => {
    return <InputPin length={5} aria-label="My Input" />;
  }
}`,...(D=(B=x.parameters)==null?void 0:B.docs)==null?void 0:D.source}}};var $,H,W;y.parameters={...y.parameters,docs:{...($=y.parameters)==null?void 0:$.docs,source:{originalSource:`{
  render: () => {
    return <InputPin length={5} placeholder="Insert some text" label="My Input" id="test-input" />;
  }
}`,...(W=(H=y.parameters)==null?void 0:H.docs)==null?void 0:W.source}}};var q,G,K;b.parameters={...b.parameters,docs:{...(q=b.parameters)==null?void 0:q.docs,source:{originalSource:`{
  render: () => {
    return <InputPin length={3} disabled placeholder="Insert some text" label="My Input" id="test-input" />;
  }
}`,...(K=(G=b.parameters)==null?void 0:G.docs)==null?void 0:K.source}}};const ke=["WithLabel","WithoutLabel","WithPlaceholder","Disabled"];export{b as Disabled,V as WithLabel,y as WithPlaceholder,x as WithoutLabel,ke as __namedExportsOrder,je as default};
