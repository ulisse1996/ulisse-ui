import{j as a}from"./clsx-UwsAJbxu.js";import{b as d,c as n,d as x}from"./real-module-wTCPhnlO.js";import{r as g}from"./index-4g5l5LRQ.js";import{R as o}from"./range-calendar-w-chgVxs.js";import"./_commonjsHelpers-4gQjN7DL.js";import"./calendar-grid-U1rVaDDT.js";import"./import-EVjeKMzd.js";import"./import-gQu3LPhC.js";import"./utils-knXUKJUl.js";import"./index-2lMP598x.js";import"./index-polp_dyw.js";import"./spinner-vIff0ak-.js";const L={component:o,title:"Components/Range Calendar"},t={render:()=>a.jsx("div",{className:"flex justify-center",children:a.jsx(o,{defaultValue:{start:d(n()),end:d(n()).add({weeks:1})}})})},r={render:()=>{const s=x(),[e,u]=g.useState();return a.jsxs("div",{className:"flex flex-col items-center gap-10",children:[a.jsxs("p",{children:["Start"," ",(e==null?void 0:e.start)&&s.format(e.start.toDate(n()))," ","- End"," ",(e==null?void 0:e.end)&&s.format(e.end.toDate(n()))]}),a.jsx("div",{className:"flex justify-center",children:a.jsx(o,{value:e,onChange:u})})]})}};var c,m,l;t.parameters={...t.parameters,docs:{...(c=t.parameters)==null?void 0:c.docs,source:{originalSource:`{
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
}`,...(l=(m=t.parameters)==null?void 0:m.docs)==null?void 0:l.source}}};var i,f,p;r.parameters={...r.parameters,docs:{...(i=r.parameters)==null?void 0:i.docs,source:{originalSource:`{
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
}`,...(p=(f=r.parameters)==null?void 0:f.docs)==null?void 0:p.source}}};const T=["Default","Controlled"];export{r as Controlled,t as Default,T as __namedExportsOrder,L as default};
