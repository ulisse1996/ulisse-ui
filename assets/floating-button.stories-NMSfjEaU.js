import{j as e}from"./clsx-KtS07kqv.js";import{r as p}from"./index-4g5l5LRQ.js";import{B as C}from"./index-S8TDwp6l.js";import{c as _}from"./utils-1S_n7jHw.js";import{P as q}from"./phone-mBIi_KH8.js";import{c as V}from"./createLucideIcon-cZfFbMz1.js";import"./_commonjsHelpers-4gQjN7DL.js";import"./index-nyTKe3TY.js";import"./spinner--pkT1kzj.js";/**
 * @license lucide-react v0.293.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const I=V("ArrowUp",[["path",{d:"m5 12 7-7 7 7",key:"hav0vg"}],["path",{d:"M12 19V5",key:"x0mq9r"}]]),t=p.forwardRef(({side:o="right",className:s,...n},u)=>e.jsx(C,{className:_("fixed",{"left-8 bottom-8":o==="left","right-8 bottom-8":o==="right"},s),...n,ref:u}));t.displayName="FloatingButton";try{t.displayName="FloatingButton",t.__docgenInfo={description:"",displayName:"FloatingButton",props:{side:{defaultValue:{value:"right"},description:"",name:"side",required:!1,type:{name:"enum",value:[{value:'"right"'},{value:'"left"'}]}},isLoading:{defaultValue:null,description:"",name:"isLoading",required:!1,type:{name:"boolean"}},variant:{defaultValue:null,description:"",name:"variant",required:!1,type:{name:'"primary" | "secondary" | "destructive" | "outline-primary" | "outline-secondary" | "outline-destructive" | "flat" | null'}},size:{defaultValue:null,description:"",name:"size",required:!1,type:{name:'"sm" | "md" | "lg" | "icon" | null'}}}}}catch{}const J={component:t,title:"Components/Floating Button"},A=["primary","secondary","destructive","outline-primary","outline-secondary","outline-destructive","flat"],r={args:{children:"Click me",variant:"primary",size:"md"},argTypes:{variant:{options:A,control:{type:"radio"}},size:{options:["sm","md","lg","icon"],control:{type:"radio"}}},render:o=>e.jsx("div",{className:"flex flex-row gap-2",children:e.jsx(t,{...o})})},a={...r},i={...r,args:{...r.args,side:"left"}},l={...r,args:{...r.args,disabled:!0}},c={...r,args:{...r.args},render:o=>{const[s,n]=p.useState(!1);return e.jsxs("div",{className:"flex flex-row gap-4",children:[e.jsx(t,{onClick:()=>n(!0),...o,isLoading:s}),e.jsx(t,{className:"right-40",onClick:()=>n(u=>!u),children:`${s?"Stop":"Start"} loading`})]})}},d={...r,args:{...r.args,size:"icon",children:e.jsx(q,{size:24})}},m={render:()=>{const[o,s]=p.useState(!1);return p.useEffect(()=>{const n=()=>{s(document.body.scrollTop>300||document.documentElement.scrollTop>300)};return window.addEventListener("scroll",n),()=>{window.removeEventListener("scroll",n)}},[]),e.jsxs("div",{className:"h-[200vh]",children:[e.jsx("p",{children:"Scroll to bottom to show back to top"}),e.jsx(t,{className:_({hidden:!o}),variant:"flat",size:"icon",onClick:()=>window.scrollTo({top:0,behavior:"smooth"}),children:e.jsx(I,{})})]})}};var g,f,v;a.parameters={...a.parameters,docs:{...(g=a.parameters)==null?void 0:g.docs,source:{originalSource:`{
  ...BaseStory
}`,...(v=(f=a.parameters)==null?void 0:f.docs)==null?void 0:v.source}}};var y,S,h;i.parameters={...i.parameters,docs:{...(y=i.parameters)==null?void 0:y.docs,source:{originalSource:`{
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
        <FloatingButton className="right-40" onClick={() => setLoading(prev => !prev)}>
          {\`\${!isLoading ? \`Start\` : \`Stop\`} loading\`}
        </FloatingButton>
      </div>;
  }
}`,...(j=(b=c.parameters)==null?void 0:b.docs)==null?void 0:j.source}}};var k,N,F;d.parameters={...d.parameters,docs:{...(k=d.parameters)==null?void 0:k.docs,source:{originalSource:`{
  ...BaseStory,
  args: {
    ...BaseStory.args,
    size: 'icon',
    children: <Phone size={24} />
  }
}`,...(F=(N=d.parameters)==null?void 0:N.docs)==null?void 0:F.source}}};var E,T,z;m.parameters={...m.parameters,docs:{...(E=m.parameters)==null?void 0:E.docs,source:{originalSource:`{
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
}`,...(z=(T=m.parameters)==null?void 0:T.docs)==null?void 0:z.source}}};const K=["SimpleButton","LeftFloating","Disabled","Loading","Icon","BackToTop"];export{m as BackToTop,l as Disabled,d as Icon,i as LeftFloating,c as Loading,a as SimpleButton,K as __namedExportsOrder,J as default};
