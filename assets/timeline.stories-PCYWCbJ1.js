import{j as e}from"./clsx-UwsAJbxu.js";import{f as t}from"./index-KLTnsmU9.js";import{r as u}from"./index-4g5l5LRQ.js";import{c as N}from"./utils-knXUKJUl.js";import{C as I}from"./check-TSqBSlXG.js";import{X as T}from"./x-mHLJlCGn.js";import{d as w}from"./real-module-wTCPhnlO.js";import"./_commonjsHelpers-4gQjN7DL.js";import"./createLucideIcon-cZfFbMz1.js";const m=u.forwardRef(({className:n,...a},s)=>e.jsx("ol",{className:N("relative flex flex-col",n),ref:s,...a}));m.displayName="Timeline";const r=u.forwardRef(({className:n,children:a,icon:s,...i},c)=>e.jsxs("li",{className:N("pb-10 px-4 py-2 h-full w-full border-l-4 border-secondary",n),ref:c,...i,children:[s||e.jsx("div",{className:"absolute -start-1.5 mt-1.5 h-4 w-4 rounded-full border border-white bg-primary"}),a]}));r.displayName="TimelineItem";try{m.displayName="Timeline",m.__docgenInfo={description:"",displayName:"Timeline",props:{}}}catch{}const E={component:m,title:"Components/Timeline"},o={render:()=>e.jsxs(m,{children:[e.jsxs(r,{children:[e.jsx("time",{className:"mb-1 text-sm font-normal leading-none text-muted",children:"February 2023"}),e.jsx("h3",{className:"text-xl font-semibold",children:t.company.catchPhrase()}),e.jsx("p",{className:"text-base font-normal",children:t.lorem.lines(4)})]}),e.jsxs(r,{children:[e.jsx("time",{className:"mb-1 text-sm font-normal leading-none text-muted",children:"August 2023"}),e.jsx("h3",{className:"text-xl font-semibold",children:t.company.catchPhrase()}),e.jsx("p",{className:"text-base font-normal",children:t.lorem.lines(4)})]}),e.jsxs(r,{children:[e.jsx("time",{className:"mb-1 text-sm font-normal leading-none text-muted",children:"December 2023"}),e.jsx("h3",{className:"text-xl font-semibold",children:t.company.catchPhrase()}),e.jsx("p",{className:"text-base font-normal",children:t.lorem.lines(4)})]})]})},l={render:()=>{const n=w({dateStyle:"medium",timeStyle:"short"}),a=t.date.recent(),s=t.date.past({refDate:a}),i=t.date.past({refDate:s}),c=e.jsx(I,{className:"absolute -start-2.5 h-6 w-6 rounded-full border border-white bg-green-500 text-white"}),g=e.jsx(T,{className:"absolute -start-2.5 h-6 w-6 rounded-full border border-white bg-destructive text-destructive-foreground"}),j=e.jsx("p",{className:"absolute -start-2.5 h-6 w-6 rounded-full border border-white bg-amber-500 text-center text-white",children:"!"});return e.jsxs(m,{children:[e.jsxs(r,{className:"mt-2 border-green-500",icon:c,children:[e.jsx("time",{className:"mb-2 text-sm font-normal leading-none text-muted",children:n.format(i)}),e.jsx("h3",{className:"text-xl font-semibold",children:"Order received"}),e.jsx("p",{className:"text-base font-normal",children:t.lorem.lines(4)})]}),e.jsxs(r,{className:"border-amber-500",icon:j,children:[e.jsx("time",{className:"mb-2 text-sm font-normal leading-none text-muted",children:n.format(s)}),e.jsx("h3",{className:"text-xl font-semibold",children:"Order sent to delivery"}),e.jsx("p",{className:"text-base font-normal",children:t.lorem.lines(4)})]}),e.jsxs(r,{className:"border-destructive",icon:g,children:[e.jsx("time",{className:"mb-2 text-sm font-normal leading-none text-muted",children:n.format(a)}),e.jsx("h3",{className:"text-xl font-semibold",children:"Order lost"}),e.jsx("p",{className:"text-base font-normal",children:t.lorem.lines(4)})]})]})}};var d,x,f;o.parameters={...o.parameters,docs:{...(d=o.parameters)==null?void 0:d.docs,source:{originalSource:`{
  render: () => {
    return <Timeline>
        <TimelineItem>
          <time className="mb-1 text-sm font-normal leading-none text-muted">
            February 2023
          </time>
          <h3 className="text-xl font-semibold">
            {faker.company.catchPhrase()}
          </h3>
          <p className="text-base font-normal">{faker.lorem.lines(4)}</p>
        </TimelineItem>
        <TimelineItem>
          <time className="mb-1 text-sm font-normal leading-none text-muted">
            August 2023
          </time>
          <h3 className="text-xl font-semibold">
            {faker.company.catchPhrase()}
          </h3>
          <p className="text-base font-normal">{faker.lorem.lines(4)}</p>
        </TimelineItem>
        <TimelineItem>
          <time className="mb-1 text-sm font-normal leading-none text-muted">
            December 2023
          </time>
          <h3 className="text-xl font-semibold">
            {faker.company.catchPhrase()}
          </h3>
          <p className="text-base font-normal">{faker.lorem.lines(4)}</p>
        </TimelineItem>
      </Timeline>;
  }
}`,...(f=(x=o.parameters)==null?void 0:x.docs)==null?void 0:f.source}}};var b,h,p;l.parameters={...l.parameters,docs:{...(b=l.parameters)==null?void 0:b.docs,source:{originalSource:`{
  render: () => {
    const formatter = useDateFormatter({
      dateStyle: 'medium',
      timeStyle: 'short'
    });
    const end = faker.date.recent();
    const middle = faker.date.past({
      refDate: end
    });
    const start = faker.date.past({
      refDate: middle
    });
    const confirmIcon = <CheckIcon className="absolute -start-2.5 h-6 w-6 rounded-full border border-white bg-green-500 text-white" />;
    const errorIcon = <X className="absolute -start-2.5 h-6 w-6 rounded-full border border-white bg-destructive text-destructive-foreground" />;
    const warningIcon = <p className="absolute -start-2.5 h-6 w-6 rounded-full border border-white bg-amber-500 text-center text-white">
        !
      </p>;
    return <Timeline>
        <TimelineItem className="mt-2 border-green-500" icon={confirmIcon}>
          <time className="mb-2 text-sm font-normal leading-none text-muted">
            {formatter.format(start)}
          </time>
          <h3 className="text-xl font-semibold">Order received</h3>
          <p className="text-base font-normal">{faker.lorem.lines(4)}</p>
        </TimelineItem>
        <TimelineItem className="border-amber-500" icon={warningIcon}>
          <time className="mb-2 text-sm font-normal leading-none text-muted">
            {formatter.format(middle)}
          </time>
          <h3 className="text-xl font-semibold">Order sent to delivery</h3>
          <p className="text-base font-normal">{faker.lorem.lines(4)}</p>
        </TimelineItem>
        <TimelineItem className="border-destructive" icon={errorIcon}>
          <time className="mb-2 text-sm font-normal leading-none text-muted">
            {formatter.format(end)}
          </time>
          <h3 className="text-xl font-semibold">Order lost</h3>
          <p className="text-base font-normal">{faker.lorem.lines(4)}</p>
        </TimelineItem>
      </Timeline>;
  }
}`,...(p=(h=l.parameters)==null?void 0:h.docs)==null?void 0:p.source}}};const F=["Default","PackageTrack"];export{o as Default,l as PackageTrack,F as __namedExportsOrder,E as default};
