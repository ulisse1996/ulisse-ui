import{j as r,a as d}from"./jsx-runtime-29545a09.js";import{b as c,c as o,d as x}from"./real-module-ef20b043.js";import{r as v}from"./index-76fb7be0.js";import{R as n}from"./range-calendar-c34b89b0.js";import"./_commonjsHelpers-de833af9.js";import"./calendar-grid-b748ab8a.js";import"./import-ff3a8ae5.js";import"./import-b6061ea2.js";import"./utils-636fbba8.js";import"./index-ac2f2f2d.js";import"./index-a011252c.js";import"./spinner-8a72c79d.js";const T={component:n,title:"Components/Range Calendar"},a={render:()=>r("div",{className:"flex justify-center",children:r(n,{defaultValue:{start:c(o()),end:c(o()).add({weeks:1})}})})},t={render:()=>{const s=x(),[e,g]=v.useState();return d("div",{className:"flex flex-col items-center gap-10",children:[d("p",{children:["Start"," ",(e==null?void 0:e.start)&&s.format(e.start.toDate(o()))," ","- End"," ",(e==null?void 0:e.end)&&s.format(e.end.toDate(o()))]}),r("div",{className:"flex justify-center",children:r(n,{value:e,onChange:g})})]})}};var m,l,f;a.parameters={...a.parameters,docs:{...(m=a.parameters)==null?void 0:m.docs,source:{originalSource:`{
  render: () => {
    return <div className="flex justify-center">
        <RangeCalendar defaultValue={{
        start: today(getLocalTimeZone()),
        end: today(getLocalTimeZone()).add({
          weeks: 1
        })
      }} />
      </div>;
  }
}`,...(f=(l=a.parameters)==null?void 0:l.docs)==null?void 0:f.source}}};var i,p,u;t.parameters={...t.parameters,docs:{...(i=t.parameters)==null?void 0:i.docs,source:{originalSource:`{
  render: () => {
    const formatter = useDateFormatter();
    const [range, setRange] = useState<RangeValue<CalendarDate>>();
    return <div className="flex flex-col items-center gap-10">
        <p>
          Start{' '}
          {range?.start && formatter.format(range.start.toDate(getLocalTimeZone()))}{' '}
          - End{' '}
          {range?.end && formatter.format(range.end.toDate(getLocalTimeZone()))}
        </p>
        <div className="flex justify-center">
          <RangeCalendar value={range} onChange={setRange} />
        </div>
      </div>;
  }
}`,...(u=(p=t.parameters)==null?void 0:p.docs)==null?void 0:u.source}}};const Z=["Default","Controlled"];export{t as Controlled,a as Default,Z as __namedExportsOrder,T as default};
