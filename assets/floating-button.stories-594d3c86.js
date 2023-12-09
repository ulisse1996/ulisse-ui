import{j as o,a as C}from"./jsx-runtime-29545a09.js";import{r as m}from"./index-76fb7be0.js";import{B as V}from"./index-ac2f2f2d.js";import{c as q}from"./utils-636fbba8.js";import{P as I}from"./phone-b14a469d.js";import{c as j}from"./createLucideIcon-de0f8b79.js";import"./_commonjsHelpers-de833af9.js";import"./index-a011252c.js";import"./spinner-8a72c79d.js";/**
 * @license lucide-react v0.293.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const A=j("ArrowUp",[["path",{d:"m5 12 7-7 7 7",key:"hav0vg"}],["path",{d:"M12 19V5",key:"x0mq9r"}]]),t=m.forwardRef(({side:e="right",className:s,...a},u)=>o(V,{className:q("absolute fixed",{"left-8 bottom-8":e==="left","right-8 bottom-8":e==="right"},s),...a,ref:u}));t.displayName="FloatingButton";try{t.displayName="FloatingButton",t.__docgenInfo={description:"",displayName:"FloatingButton",props:{side:{defaultValue:{value:"right"},description:"",name:"side",required:!1,type:{name:"enum",value:[{value:'"right"'},{value:'"left"'}]}},isLoading:{defaultValue:null,description:"",name:"isLoading",required:!1,type:{name:"boolean"}},variant:{defaultValue:null,description:"",name:"variant",required:!1,type:{name:'"primary" | "secondary" | "destructive" | "outline-primary" | "outline-secondary" | "outline-destructive" | "flat" | null'}},size:{defaultValue:null,description:"",name:"size",required:!1,type:{name:'"sm" | "md" | "lg" | "icon" | null'}}}}}catch{}const K={component:t,title:"Components/Floating Button"},P=["primary","secondary","destructive","outline-primary","outline-secondary","outline-destructive","flat"],r={args:{children:"Click me",variant:"primary",size:"md"},argTypes:{variant:{options:P,control:{type:"radio"}},size:{options:["sm","md","lg","icon"],control:{type:"radio"}}},render:e=>o("div",{className:"flex flex-row gap-2",children:o(t,{...e})})},n={...r},i={...r,args:{...r.args,side:"left"}},l={...r,args:{...r.args,disabled:!0}},c={...r,args:{...r.args},render:e=>{const[s,a]=m.useState(!1);return C("div",{className:"flex flex-row gap-4",children:[o(t,{onClick:()=>a(!0),...e,isLoading:s}),o(t,{onClick:()=>a(u=>!u),children:`${s?"Stop":"Start"} loading`})]})}},d={...r,args:{...r.args,size:"icon",children:o(I,{size:24})}},p={render:()=>{const[e,s]=m.useState(!1);return m.useEffect(()=>{const a=()=>{s(document.body.scrollTop>300||document.documentElement.scrollTop>300)};return window.addEventListener("scroll",a),()=>{window.removeEventListener("scroll",a)}},[]),C("div",{className:"h-[200vh]",children:[o("p",{children:"Scroll to bottom to show back to top"}),o(t,{className:q({hidden:!e}),variant:"flat",size:"icon",onClick:()=>window.scrollTo({top:0,behavior:"smooth"}),children:o(A,{})})]})}};var g,f,v;n.parameters={...n.parameters,docs:{...(g=n.parameters)==null?void 0:g.docs,source:{originalSource:`{
  ...BaseStory
}`,...(v=(f=n.parameters)==null?void 0:f.docs)==null?void 0:v.source}}};var y,S,h;i.parameters={...i.parameters,docs:{...(y=i.parameters)==null?void 0:y.docs,source:{originalSource:`{
  ...BaseStory,
  args: {
    ...BaseStory.args,
    side: 'left'
  }
}`,...(h=(S=i.parameters)==null?void 0:S.docs)==null?void 0:h.source}}};var B,w,L;l.parameters={...l.parameters,docs:{...(B=l.parameters)==null?void 0:B.docs,source:{originalSource:`{
  ...BaseStory,
  args: {
    ...BaseStory.args,
    disabled: true
  }
}`,...(L=(w=l.parameters)==null?void 0:w.docs)==null?void 0:L.source}}};var b,k,x;c.parameters={...c.parameters,docs:{...(b=c.parameters)==null?void 0:b.docs,source:{originalSource:`{
  ...BaseStory,
  args: {
    ...BaseStory.args
  },
  render: props => {
    const [isLoading, setLoading] = useState(false);
    return <div className="flex flex-row gap-4">
        <FloatingButton onClick={() => setLoading(true)} {...props} isLoading={isLoading} />
        <FloatingButton onClick={() => setLoading(prev => !prev)}>
          {\`\${!isLoading ? \`Start\` : \`Stop\`} loading\`}
        </FloatingButton>
      </div>;
  }
}`,...(x=(k=c.parameters)==null?void 0:k.docs)==null?void 0:x.source}}};var F,N,T;d.parameters={...d.parameters,docs:{...(F=d.parameters)==null?void 0:F.docs,source:{originalSource:`{
  ...BaseStory,
  args: {
    ...BaseStory.args,
    size: 'icon',
    children: <Phone size={24} />
  }
}`,...(T=(N=d.parameters)==null?void 0:N.docs)==null?void 0:T.source}}};var z,E,_;p.parameters={...p.parameters,docs:{...(z=p.parameters)==null?void 0:z.docs,source:{originalSource:`{
  render: () => {
    const [scrolled, setScrolled] = useState(false);
    useEffect(() => {
      const onScroll = () => {
        setScrolled(document.body.scrollTop > 300 || document.documentElement.scrollTop > 300);
      };
      window.addEventListener('scroll', onScroll);
      return () => {
        window.removeEventListener('scroll', onScroll);
      };
    }, []);
    return <div className="h-[200vh]">
        <p>Scroll to bottom to show back to top</p>
        <FloatingButton className={cn({
        hidden: !scrolled
      })} variant="flat" size="icon" onClick={() => window.scrollTo({
        top: 0,
        behavior: 'smooth'
      })}>
          <ArrowUp />
        </FloatingButton>
      </div>;
  }
}`,...(_=(E=p.parameters)==null?void 0:E.docs)==null?void 0:_.source}}};const Q=["SimpleButton","LeftFloating","Disabled","Loading","Icon","BackToTop"];export{p as BackToTop,l as Disabled,d as Icon,i as LeftFloating,c as Loading,n as SimpleButton,Q as __namedExportsOrder,K as default};
