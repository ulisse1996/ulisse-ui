import{j as e}from"./clsx-UwsAJbxu.js";import{r as l}from"./index-4g5l5LRQ.js";import{B as r}from"./index-2lMP598x.js";import{c as S}from"./utils-knXUKJUl.js";import{a as A,T as L,b as M,c as $}from"./tooltip-r_jmNdYl.js";import{H as j}from"./hotel-z_rjgubF.js";import{c as F}from"./createLucideIcon-cZfFbMz1.js";import{P as y}from"./phone-mBIi_KH8.js";import{M as W}from"./menu-i9mfWLfc.js";import{C as O}from"./check-TSqBSlXG.js";import"./_commonjsHelpers-4gQjN7DL.js";import"./index-polp_dyw.js";import"./spinner-vIff0ak-.js";import"./extends-dGVwEr9R.js";import"./index-0dIgYeBD.js";import"./index-XGpeoBSN.js";import"./index-jmm5gWkb.js";import"./index-VzvA_wF4.js";import"./index-cd2BOhhG.js";import"./index-HHSENXoC.js";import"./index-EwzVq0z5.js";import"./index-TcKUnSVx.js";import"./index-YCypRNSh.js";/**
 * @license lucide-react v0.293.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const b=F("Star",[["polygon",{points:"12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2",key:"8f66p6"}]]),d=l.forwardRef(({step:s,className:t,children:a,orientation:n="horizontal",...p},i)=>{const u=l.useRef(null),[N,x]=l.useState(0),B=l.Children.count(a)-1,R=n==="horizontal"?{width:s===0?0:`${N}px`}:{height:s===0?0:`${N}px`};return l.useEffect(()=>{if(u.current&&s!==0)if(s===B){const{width:c,height:m}=u.current.getBoundingClientRect();x(n==="vertical"?m:c)}else{let c=u.current.querySelector(`[data-step='${s}']`);if(!c){const g=u.current.querySelectorAll("li");g&&(c=g.item(s))}if(!c)return;const{x:m,y:E,height:q,width:V}=c.getBoundingClientRect();x(n==="vertical"?E+q/10:m+V/10)}},[s,n]),e.jsxs("div",{ref:u,className:"relative flex h-full w-full items-center justify-between",children:[e.jsx("div",{className:S("absolute left-0 bg-gray-300",{"top-2/4 h-0.5 w-full -translate-y-2/4":n==="horizontal","h-full top-0 w-0.5 left-5":n==="vertical"})}),e.jsx("div",{style:R,className:S("absolute left-0 bg-primary transition-all duration-700",{"top-2/4 h-0.5 w-full -translate-y-2/4":n==="horizontal","h-full top-0 w-0.5 left-5":n==="vertical"})}),e.jsx("ul",{role:"navigation","data-orientation":n,className:S("flex justify-between group",n==="vertical"?"flex-col h-full":"flex-row w-full",t),...p,ref:i,children:l.Children.map(a,(c,m)=>l.cloneElement(c,{...c.props,key:m,index:m,last:m===B}))})]})});d.displayName="Stepper";const o=l.forwardRef(({index:s,last:t,className:a,...n},p)=>e.jsx("li",{...n,className:S("inline-flex z-[3] items-center min-w-20 min-h-20",{"group-data-[orientation=horizontal]:justify-end":t},{"group-data-[orientation=horizontal]:justify-center":!t&&s!==0},{"group-data-[orientation=vertical]:items-start":s===0},{"group-data-[orientation=vertical]:items-end":t},a),ref:p}));o.displayName="StepperItem";try{d.displayName="Stepper",d.__docgenInfo={description:"",displayName:"Stepper",props:{orientation:{defaultValue:{value:"horizontal"},description:"",name:"orientation",required:!1,type:{name:"enum",value:[{value:'"horizontal"'},{value:'"vertical"'}]}},step:{defaultValue:null,description:"",name:"step",required:!0,type:{name:"number"}}}}}catch{}const xe={component:d,title:"Components/Stepper"},f={render:()=>{const[t,a]=l.useState(0),n=()=>{t!==2&&a(i=>i+1)},p=()=>{t!==0&&a(i=>i-1)};return e.jsxs("div",{className:"flex w-full flex-col gap-2",children:[e.jsxs(d,{step:t,children:[e.jsx(o,{children:e.jsx(r,{size:"icon",variant:t>=0?"primary":"flat",children:e.jsx(j,{})})}),e.jsx(o,{children:e.jsx(r,{size:"icon",variant:t>=1?"primary":"flat",children:e.jsx(b,{})})}),e.jsx(o,{children:e.jsx(r,{size:"icon",variant:t>=2?"primary":"flat",children:e.jsx(y,{})})})]}),e.jsxs("div",{className:"flex flex-row justify-between",children:[e.jsx(r,{disabled:t===0,onClick:p,children:"Previous"}),e.jsx(r,{disabled:t===2,onClick:n,children:"Next"})]})]})}},h={render:()=>{const[t,a]=l.useState(0),n=()=>{t!==4&&a(i=>i+1)},p=()=>{t!==0&&a(i=>i-1)};return e.jsxs("div",{className:"flex flex-col gap-4",children:[e.jsx("div",{className:"h-[80vh]",children:e.jsxs(d,{step:t,orientation:"vertical",children:[e.jsx(o,{children:e.jsx(r,{size:"icon",variant:t>=0?"primary":"flat",children:e.jsx(j,{})})}),e.jsx(o,{children:e.jsx(r,{size:"icon",variant:t>=1?"primary":"flat",children:e.jsx(b,{})})}),e.jsx(o,{children:e.jsx(r,{size:"icon",variant:t>=2?"primary":"flat",children:e.jsx(y,{})})}),e.jsx(o,{children:e.jsx(r,{size:"icon",variant:t>=3?"primary":"flat",children:e.jsx(W,{})})}),e.jsx(o,{children:e.jsx(r,{size:"icon",variant:t>=4?"primary":"flat",children:e.jsx(O,{})})})]})}),e.jsxs("div",{className:"flex flex-row justify-between",children:[e.jsx(r,{disabled:t===0,onClick:p,children:"Previous"}),e.jsx(r,{disabled:t===4,onClick:n,children:"Next"})]})]})}},v={render:()=>{const[t,a]=l.useState(0),n=()=>{t!==2&&a(i=>i+1)},p=()=>{t!==0&&a(i=>i-1)};return e.jsxs("div",{className:"flex w-full flex-col gap-8",children:[e.jsxs(d,{step:t,children:[e.jsxs(o,{children:[e.jsx(r,{size:"icon",variant:t>=0?"primary":"flat",children:e.jsx(j,{})}),e.jsx("span",{className:"absolute bottom-[-0.5rem] text-center",children:"Step 1"})]}),e.jsx(A,{children:e.jsxs(L,{children:[e.jsx(M,{asChild:!0,children:e.jsxs(o,{children:[e.jsx(r,{size:"icon",variant:t>=1?"primary":"flat",children:e.jsx(b,{})}),e.jsx("span",{className:"absolute bottom-[-0.5rem] text-center",children:"Step 2"})]})}),e.jsx($,{children:"Hello From Tooltip"})]})}),e.jsxs(o,{children:[e.jsx(r,{size:"icon",variant:t>=2?"primary":"flat",children:e.jsx(y,{})}),e.jsx("span",{className:"absolute bottom-[-0.5rem] text-center",children:"Step 3"}),e.jsx("div",{className:"absolute top-5 h-3 w-3 rounded-full border-2 border-white bg-amber-500 text-center"})]})]}),e.jsxs("div",{className:"flex flex-row justify-between",children:[e.jsx(r,{disabled:t===0,onClick:p,children:"Previous"}),e.jsx(r,{disabled:t===2,onClick:n,children:"Next"})]})]})}};var w,z,I;f.parameters={...f.parameters,docs:{...(w=f.parameters)==null?void 0:w.docs,source:{originalSource:`{
  render: () => {
    const maxSteps = 2;
    const [step, setStep] = useState(0);
    const handleNext = () => {
      if (step === maxSteps) {
        return;
      }
      setStep(prev => prev + 1);
    };
    const handlePrevious = () => {
      if (step === 0) {
        return;
      }
      setStep(prev => prev - 1);
    };
    return <div className="flex w-full flex-col gap-2">
        <Stepper step={step}>
          <StepperItem>
            <Button size="icon" variant={step >= 0 ? 'primary' : 'flat'}>
              <Hotel />
            </Button>
          </StepperItem>
          <StepperItem>
            <Button size="icon" variant={step >= 1 ? 'primary' : 'flat'}>
              <Star />
            </Button>
          </StepperItem>
          <StepperItem>
            <Button size="icon" variant={step >= 2 ? 'primary' : 'flat'}>
              <Phone />
            </Button>
          </StepperItem>
        </Stepper>
        <div className="flex flex-row justify-between">
          <Button disabled={step === 0} onClick={handlePrevious}>
            Previous
          </Button>
          <Button disabled={step === maxSteps} onClick={handleNext}>
            Next
          </Button>
        </div>
      </div>;
  }
}`,...(I=(z=f.parameters)==null?void 0:z.docs)==null?void 0:I.source}}};var C,P,T;h.parameters={...h.parameters,docs:{...(C=h.parameters)==null?void 0:C.docs,source:{originalSource:`{
  render: () => {
    const maxSteps = 4;
    const [step, setStep] = useState(0);
    const handleNext = () => {
      if (step === maxSteps) {
        return;
      }
      setStep(prev => prev + 1);
    };
    const handlePrevious = () => {
      if (step === 0) {
        return;
      }
      setStep(prev => prev - 1);
    };
    return <div className="flex flex-col gap-4">
        <div className="h-[80vh]">
          <Stepper step={step} orientation="vertical">
            <StepperItem>
              <Button size="icon" variant={step >= 0 ? 'primary' : 'flat'}>
                <Hotel />
              </Button>
            </StepperItem>
            <StepperItem>
              <Button size="icon" variant={step >= 1 ? 'primary' : 'flat'}>
                <Star />
              </Button>
            </StepperItem>
            <StepperItem>
              <Button size="icon" variant={step >= 2 ? 'primary' : 'flat'}>
                <Phone />
              </Button>
            </StepperItem>
            <StepperItem>
              <Button size="icon" variant={step >= 3 ? 'primary' : 'flat'}>
                <Menu />
              </Button>
            </StepperItem>
            <StepperItem>
              <Button size="icon" variant={step >= 4 ? 'primary' : 'flat'}>
                <Check />
              </Button>
            </StepperItem>
          </Stepper>
        </div>
        <div className="flex flex-row justify-between">
          <Button disabled={step === 0} onClick={handlePrevious}>
            Previous
          </Button>
          <Button disabled={step === maxSteps} onClick={handleNext}>
            Next
          </Button>
        </div>
      </div>;
  }
}`,...(T=(P=h.parameters)==null?void 0:P.docs)==null?void 0:T.source}}};var k,_,H;v.parameters={...v.parameters,docs:{...(k=v.parameters)==null?void 0:k.docs,source:{originalSource:`{
  render: () => {
    const maxSteps = 2;
    const [step, setStep] = useState(0);
    const handleNext = () => {
      if (step === maxSteps) {
        return;
      }
      setStep(prev => prev + 1);
    };
    const handlePrevious = () => {
      if (step === 0) {
        return;
      }
      setStep(prev => prev - 1);
    };
    return <div className="flex w-full flex-col gap-8">
        <Stepper step={step}>
          <StepperItem>
            <Button size="icon" variant={step >= 0 ? 'primary' : 'flat'}>
              <Hotel />
            </Button>
            <span className="absolute bottom-[-0.5rem] text-center">
              Step 1
            </span>
          </StepperItem>
          <TooltipProvider>
            <Tooltip>
              <TooltipTrigger asChild>
                <StepperItem>
                  <Button size="icon" variant={step >= 1 ? 'primary' : 'flat'}>
                    <Star />
                  </Button>
                  <span className="absolute bottom-[-0.5rem] text-center">
                    Step 2
                  </span>
                </StepperItem>
              </TooltipTrigger>
              <TooltipContent>Hello From Tooltip</TooltipContent>
            </Tooltip>
          </TooltipProvider>
          <StepperItem>
            <Button size="icon" variant={step >= 2 ? 'primary' : 'flat'}>
              <Phone />
            </Button>
            <span className="absolute bottom-[-0.5rem] text-center">
              Step 3
            </span>
            <div className="absolute top-5 h-3 w-3 rounded-full border-2 border-white bg-amber-500 text-center" />
          </StepperItem>
        </Stepper>
        <div className="flex flex-row justify-between">
          <Button disabled={step === 0} onClick={handlePrevious}>
            Previous
          </Button>
          <Button disabled={step === maxSteps} onClick={handleNext}>
            Next
          </Button>
        </div>
      </div>;
  }
}`,...(H=(_=v.parameters)==null?void 0:_.docs)==null?void 0:H.source}}};const fe=["Horizontal","Vertical","WithLabelsAndTooltip"];export{f as Horizontal,h as Vertical,v as WithLabelsAndTooltip,fe as __namedExportsOrder,xe as default};
