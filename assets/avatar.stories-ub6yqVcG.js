import{j as a}from"./jsx-runtime-vNq4Oc-g.js";import{I as N}from"./chunk-W7EQS7E7-E5h29MIc.js";import{c as U}from"./index-v55UWy9B.js";import{r as W}from"./index-4g5l5LRQ.js";import{a as V}from"./utils-LqYgCrNY.js";import"./_commonjsHelpers-4gQjN7DL.js";const O=U("relative box-border flex items-center justify-center overflow-hidden rounded-full bg-muted align-middle",{variants:{size:{sm:"h-12 w-12",md:"h-14 w-14",lg:"h-16 w-16"}},defaultVariants:{size:"md"}});function T({as:r,src:p,size:z,className:F,alt:i,...k},C){const E=r||"img",[m,R]=W.useState(typeof p>"u");return a.jsxs("span",{className:V(O({size:z,className:F})),tabIndex:-1,ref:C,children:[!m&&a.jsx(E,{...k,onError:()=>R(!0),src:p,alt:i,className:"h-full w-full object-cover"}),m&&a.jsx("p",{className:"uppercase text-black",children:i.charAt(0)})]})}const e=W.forwardRef(T);e.displayName="Avatar";try{e.displayName="Avatar",e.__docgenInfo={description:"",displayName:"Avatar",props:{}}}catch{}const K={component:e,title:"Components/Avatar"},t={args:{size:"md"},argTypes:{size:{options:["sm","md","lg"],control:{type:"radio"}}}},s={...t,render:r=>a.jsx(e,{src:"https://randompicturegenerator.com/img/cat-generator/g37b82da0af399ee430f5787f93289fa6bf0cee78a334568707574b938b0c2dd44c1e6505904a70b5cb55dbb1f3116639_640.jpg",alt:"test",...r})},o={...t,render:r=>a.jsx(e,{alt:"test",...r})},n={...t,render:r=>a.jsx(e,{src:"bad-url",alt:"test",...r})},c={...t,render:r=>a.jsx(e,{as:N,layout:"constrained",width:400,height:300,src:"https://cdn.shopify.com/static/sample-images/bath.jpeg",alt:"test",...r})},d={...t,render:r=>a.jsx(e,{as:N,layout:"constrained",width:400,height:300,src:"https://cdn.shopify.com/static/sample-images/bath.jpeg",alt:"test",className:"h-24 w-24",...r})};var l,u,g;s.parameters={...s.parameters,docs:{...(l=s.parameters)==null?void 0:l.docs,source:{originalSource:`{
  ...standardArgs,
  render: props => {
    return <Avatar src="https://randompicturegenerator.com/img/cat-generator/g37b82da0af399ee430f5787f93289fa6bf0cee78a334568707574b938b0c2dd44c1e6505904a70b5cb55dbb1f3116639_640.jpg" alt="test" {...props} />;
  }
}`,...(g=(u=s.parameters)==null?void 0:u.docs)==null?void 0:g.source}}};var h,f,b;o.parameters={...o.parameters,docs:{...(h=o.parameters)==null?void 0:h.docs,source:{originalSource:`{
  ...standardArgs,
  render: props => {
    return <Avatar alt="test" {...props} />;
  }
}`,...(b=(f=o.parameters)==null?void 0:f.docs)==null?void 0:b.source}}};var j,A,v;n.parameters={...n.parameters,docs:{...(j=n.parameters)==null?void 0:j.docs,source:{originalSource:`{
  ...standardArgs,
  render: props => {
    return <Avatar src="bad-url" alt="test" {...props} />;
  }
}`,...(v=(A=n.parameters)==null?void 0:A.docs)==null?void 0:v.source}}};var x,y,w;c.parameters={...c.parameters,docs:{...(x=c.parameters)==null?void 0:x.docs,source:{originalSource:`{
  ...standardArgs,
  render: props => {
    return <Avatar as={Image} layout="constrained" width={400} height={300} src="https://cdn.shopify.com/static/sample-images/bath.jpeg" alt="test" {...props} />;
  }
}`,...(w=(y=c.parameters)==null?void 0:y.docs)==null?void 0:w.source}}};var _,I,S;d.parameters={...d.parameters,docs:{...(_=d.parameters)==null?void 0:_.docs,source:{originalSource:`{
  ...standardArgs,
  render: props => {
    return <Avatar as={Image} layout="constrained" width={400} height={300} src="https://cdn.shopify.com/static/sample-images/bath.jpeg" alt="test" className="h-24 w-24" {...props} />;
  }
}`,...(S=(I=d.parameters)==null?void 0:I.docs)==null?void 0:S.source}}};const L=["WithImage","WithFallback","WithFailedImage","WithUnpic","CustomSize"];export{d as CustomSize,n as WithFailedImage,o as WithFallback,s as WithImage,c as WithUnpic,L as __namedExportsOrder,K as default};
