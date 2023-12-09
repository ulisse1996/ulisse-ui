import{j as e,a as r}from"./jsx-runtime-29545a09.js";import{f as t}from"./index-3a83ac04.js";import{r as N}from"./index-76fb7be0.js";import{c as g}from"./utils-636fbba8.js";import{C as w}from"./check-9fcffaf0.js";import{X as y}from"./x-8d05627f.js";import{d as k}from"./real-module-ef20b043.js";import"./_commonjsHelpers-de833af9.js";import"./createLucideIcon-de0f8b79.js";const s=N.forwardRef(({className:a,...m},o)=>e("ol",{className:g("relative flex flex-col",a),ref:o,...m}));s.displayName="Timeline";const n=N.forwardRef(({className:a,children:m,icon:o,...c},d)=>r("li",{className:g("pb-10 px-4 py-2 h-full w-full border-l-4 border-secondary",a),ref:d,...c,children:[o||e("div",{className:"absolute -start-1.5 mt-1.5 h-4 w-4 rounded-full border border-white bg-primary"}),m]}));n.displayName="TimelineItem";try{s.displayName="Timeline",s.__docgenInfo={description:"",displayName:"Timeline",props:{}}}catch{}const $={component:s,title:"Components/Timeline"},l={render:()=>r(s,{children:[r(n,{children:[e("time",{className:"mb-1 text-sm font-normal leading-none text-muted",children:"February 2023"}),e("h3",{className:"text-xl font-semibold",children:t.company.catchPhrase()}),e("p",{className:"text-base font-normal",children:t.lorem.lines(4)})]}),r(n,{children:[e("time",{className:"mb-1 text-sm font-normal leading-none text-muted",children:"August 2023"}),e("h3",{className:"text-xl font-semibold",children:t.company.catchPhrase()}),e("p",{className:"text-base font-normal",children:t.lorem.lines(4)})]}),r(n,{children:[e("time",{className:"mb-1 text-sm font-normal leading-none text-muted",children:"December 2023"}),e("h3",{className:"text-xl font-semibold",children:t.company.catchPhrase()}),e("p",{className:"text-base font-normal",children:t.lorem.lines(4)})]})]})},i={render:()=>{const a=k({dateStyle:"medium",timeStyle:"short"}),m=t.date.recent(),o=t.date.past({refDate:m}),c=t.date.past({refDate:o}),d=e(w,{className:"absolute -start-2.5 h-6 w-6 rounded-full border border-white bg-green-500 text-white"}),I=e(y,{className:"absolute -start-2.5 h-6 w-6 rounded-full border border-white bg-destructive text-destructive-foreground"}),T=e("p",{className:"absolute -start-2.5 h-6 w-6 rounded-full border border-white bg-amber-500 text-center text-white",children:"!"});return r(s,{children:[r(n,{className:"mt-2 border-green-500",icon:d,children:[e("time",{className:"mb-2 text-sm font-normal leading-none text-muted",children:a.format(c)}),e("h3",{className:"text-xl font-semibold",children:"Order received"}),e("p",{className:"text-base font-normal",children:t.lorem.lines(4)})]}),r(n,{className:"border-amber-500",icon:T,children:[e("time",{className:"mb-2 text-sm font-normal leading-none text-muted",children:a.format(o)}),e("h3",{className:"text-xl font-semibold",children:"Order sent to delivery"}),e("p",{className:"text-base font-normal",children:t.lorem.lines(4)})]}),r(n,{className:"border-destructive",icon:I,children:[e("time",{className:"mb-2 text-sm font-normal leading-none text-muted",children:a.format(m)}),e("h3",{className:"text-xl font-semibold",children:"Order lost"}),e("p",{className:"text-base font-normal",children:t.lorem.lines(4)})]})]})}};var f,b,h;l.parameters={...l.parameters,docs:{...(f=l.parameters)==null?void 0:f.docs,source:{originalSource:`{
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
}`,...(h=(b=l.parameters)==null?void 0:b.docs)==null?void 0:h.source}}};var x,p,u;i.parameters={...i.parameters,docs:{...(x=i.parameters)==null?void 0:x.docs,source:{originalSource:`{
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
}`,...(u=(p=i.parameters)==null?void 0:p.docs)==null?void 0:u.source}}};const A=["Default","PackageTrack"];export{l as Default,i as PackageTrack,A as __namedExportsOrder,$ as default};
