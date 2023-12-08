import{j as e}from"./jsx-runtime-vNq4Oc-g.js";import{r as m}from"./index-4g5l5LRQ.js";import{B as C}from"./index-8fJbMDui.js";import{c as _}from"./utils-HR2XZNS3.js";import{P as q}from"./phone-mBIi_KH8.js";import{c as V}from"./createLucideIcon-cZfFbMz1.js";import"./_commonjsHelpers-4gQjN7DL.js";import"./index-_UegSYSw.js";import"./spinner-TPfN3SXW.js";/**
 * @license lucide-react v0.293.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const I=V("ArrowUp",[["path",{d:"m5 12 7-7 7 7",key:"hav0vg"}],["path",{d:"M12 19V5",key:"x0mq9r"}]]),t=m.forwardRef(({side:o="right",className:a,...s},u)=>e.jsx(C,{className:_("absolute fixed",{"left-8 bottom-8":o==="left","right-8 bottom-8":o==="right"},a),...s,ref:u}));t.displayName="FloatingButton";try{t.displayName="FloatingButton",t.__docgenInfo={description:"",displayName:"FloatingButton",props:{side:{defaultValue:{value:"right"},description:"",name:"side",required:!1,type:{name:"enum",value:[{value:'"right"'},{value:'"left"'}]}},isLoading:{defaultValue:null,description:"",name:"isLoading",required:!1,type:{name:"boolean"}},variant:{defaultValue:null,description:"",name:"variant",required:!1,type:{name:'"primary" | "secondary" | "destructive" | "outline-primary" | "outline-secondary" | "outline-destructive" | "flat" | null'}},size:{defaultValue:null,description:"",name:"size",required:!1,type:{name:'"sm" | "md" | "lg" | "icon" | null'}}}}}catch{}const J={component:t,title:"Components/Floating Button"},A=["primary","secondary","destructive","outline-primary","outline-secondary","outline-destructive","flat"],r={args:{children:"Click me",variant:"primary",size:"md"},argTypes:{variant:{options:A,control:{type:"radio"}},size:{options:["sm","md","lg","icon"],control:{type:"radio"}}},render:o=>e.jsx("div",{className:"flex flex-row gap-2",children:e.jsx(t,{...o})})},n={...r},i={...r,args:{...r.args,side:"left"}},l={...r,args:{...r.args,disabled:!0}},c={...r,args:{...r.args},render:o=>{const[a,s]=m.useState(!1);return e.jsxs("div",{className:"flex flex-row gap-4",children:[e.jsx(t,{onClick:()=>s(!0),...o,isLoading:a}),e.jsx(t,{onClick:()=>s(u=>!u),children:`${a?"Stop":"Start"} loading`})]})}},d={...r,args:{...r.args,size:"icon",children:e.jsx(q,{size:24})}},p={render:()=>{const[o,a]=m.useState(!1);return m.useEffect(()=>{const s=()=>{a(document.body.scrollTop>300||document.documentElement.scrollTop>300)};return window.addEventListener("scroll",s),()=>{window.removeEventListener("scroll",s)}},[]),e.jsxs("div",{className:"h-[200vh]",children:[e.jsx("p",{children:"Scroll to bottom to show back to top"}),e.jsx(t,{className:_({hidden:!o}),variant:"flat",size:"icon",onClick:()=>window.scrollTo({top:0,behavior:"smooth"}),children:e.jsx(I,{})})]})}};var g,f,v;n.parameters={...n.parameters,docs:{...(g=n.parameters)==null?void 0:g.docs,source:{originalSource:`{
  ...BaseStory
}`,...(v=(f=n.parameters)==null?void 0:f.docs)==null?void 0:v.source}}};var y,S,h;i.parameters={...i.parameters,docs:{...(y=i.parameters)==null?void 0:y.docs,source:{originalSource:`{
  ...BaseStory,
  args: {
    ...BaseStory.args,
    side: 'left'
  }
}`,...(h=(S=i.parameters)==null?void 0:S.docs)==null?void 0:h.source}}};var B,x,w;l.parameters={...l.parameters,docs:{...(B=l.parameters)==null?void 0:B.docs,source:{originalSource:`{
  ...BaseStory,
  args: {
    ...BaseStory.args,
    disabled: true
  }
}`,...(w=(x=l.parameters)==null?void 0:x.docs)==null?void 0:w.source}}};var L,b,j;c.parameters={...c.parameters,docs:{...(L=c.parameters)==null?void 0:L.docs,source:{originalSource:`{
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
}`,...(j=(b=c.parameters)==null?void 0:b.docs)==null?void 0:j.source}}};var k,F,E;d.parameters={...d.parameters,docs:{...(k=d.parameters)==null?void 0:k.docs,source:{originalSource:`{
  ...BaseStory,
  args: {
    ...BaseStory.args,
    size: 'icon',
    children: <Phone size={24} />
  }
}`,...(E=(F=d.parameters)==null?void 0:F.docs)==null?void 0:E.source}}};var N,T,z;p.parameters={...p.parameters,docs:{...(N=p.parameters)==null?void 0:N.docs,source:{originalSource:`{
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
}`,...(z=(T=p.parameters)==null?void 0:T.docs)==null?void 0:z.source}}};const K=["SimpleButton","LeftFloating","Disabled","Loading","Icon","BackToTop"];export{p as BackToTop,l as Disabled,d as Icon,i as LeftFloating,c as Loading,n as SimpleButton,K as __namedExportsOrder,J as default};
