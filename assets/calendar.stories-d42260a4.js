import{j as e,a as c}from"./jsx-runtime-29545a09.js";import{$ as l,a as g}from"./real-module-ef20b043.js";import{r as w}from"./index-76fb7be0.js";import{B as u}from"./index-ac2f2f2d.js";import{C as d}from"./calendar-b3691e35.js";import"./_commonjsHelpers-de833af9.js";import"./index-a011252c.js";import"./utils-636fbba8.js";import"./spinner-8a72c79d.js";import"./calendar-grid-b748ab8a.js";import"./import-ff3a8ae5.js";import"./import-b6061ea2.js";const R={component:d,title:"Components/Calendar"},r={render:()=>{const a=new Date;return e("div",{className:"flex justify-center",children:e(d,{defaultValue:new l(a.getFullYear(),a.getMonth()+1,a.getDate())})})}},n={render:()=>{const[a,o]=w.useState(g("2023-12-05"));return c("div",{className:"flex flex-col gap-3",children:[c("div",{className:"flex flex-row gap-3",children:[e(u,{onClick:()=>{o(t=>t.subtract({days:1}))},children:"-"}),e(u,{onClick:()=>{o(t=>t.add({days:1}))},children:"+"})]}),e("div",{className:"flex justify-center",children:e(d,{value:a,onChange:t=>o(t)})})]})}},s={render:()=>e("div",{className:"flex justify-center",children:e(d,{maxValue:new l(2023,12,28),minValue:new l(2023,12,15),defaultValue:new l(2023,12,17)})})};var i,m,p;r.parameters={...r.parameters,docs:{...(i=r.parameters)==null?void 0:i.docs,source:{originalSource:`{
  render: () => {
    const date = new Date();
    return <div className="flex justify-center">
        <Calendar defaultValue={new CalendarDate(date.getFullYear(), date.getMonth() + 1, date.getDate())} />
      </div>;
  }
}`,...(p=(m=r.parameters)==null?void 0:m.docs)==null?void 0:p.source}}};var f,x,v;n.parameters={...n.parameters,docs:{...(f=n.parameters)==null?void 0:f.docs,source:{originalSource:`{
  render: () => {
    const [date, setDate] = useState(parseDate('2023-12-05'));
    const handlePlus = () => {
      setDate(prev => prev.add({
        days: 1
      }));
    };
    const handleSub = () => {
      setDate(prev => prev.subtract({
        days: 1
      }));
    };
    return <div className="flex flex-col gap-3">
        <div className="flex flex-row gap-3">
          <Button onClick={handleSub}>-</Button>
          <Button onClick={handlePlus}>+</Button>
        </div>
        <div className="flex justify-center">
          <Calendar value={date} onChange={d => setDate(d)} />
        </div>
      </div>;
  }
}`,...(v=(x=n.parameters)==null?void 0:x.docs)==null?void 0:v.source}}};var h,C,D;s.parameters={...s.parameters,docs:{...(h=s.parameters)==null?void 0:h.docs,source:{originalSource:`{
  render: () => {
    return <div className="flex justify-center">
        <Calendar maxValue={new CalendarDate(2023, 12, 28)} minValue={new CalendarDate(2023, 12, 15)} defaultValue={new CalendarDate(2023, 12, 17)} />
      </div>;
  }
}`,...(D=(C=s.parameters)==null?void 0:C.docs)==null?void 0:D.source}}};const Y=["Default","ControlledDate","InRange"];export{n as ControlledDate,r as Default,s as InRange,Y as __namedExportsOrder,R as default};
