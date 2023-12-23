import{j as e}from"./clsx-KtS07kqv.js";import{$ as l,a as h}from"./real-module-pIryxjSP.js";import{r as w}from"./index-4g5l5LRQ.js";import{B as c}from"./index-S8TDwp6l.js";import{C as o}from"./calendar-m4RX9t6t.js";import"./_commonjsHelpers-4gQjN7DL.js";import"./index-nyTKe3TY.js";import"./spinner--pkT1kzj.js";import"./utils-1S_n7jHw.js";import"./calendar-grid-Mp7gqonw.js";import"./import-dEUj_gQX.js";import"./import-gQu3LPhC.js";const I={component:o,title:"Components/Calendar"},n={render:()=>{const a=new Date;return e.jsx("div",{className:"flex justify-center",children:e.jsx(o,{defaultValue:new l(a.getFullYear(),a.getMonth()+1,a.getDate())})})}},r={render:()=>{const[a,d]=w.useState(h("2023-12-05")),D=()=>{d(t=>t.add({days:1}))},g=()=>{d(t=>t.subtract({days:1}))};return e.jsxs("div",{className:"flex flex-col gap-3",children:[e.jsxs("div",{className:"flex flex-row gap-3",children:[e.jsx(c,{onClick:g,children:"-"}),e.jsx(c,{onClick:D,children:"+"})]}),e.jsx("div",{className:"flex justify-center",children:e.jsx(o,{value:a,onChange:t=>d(t)})})]})}},s={render:()=>e.jsx("div",{className:"flex justify-center",children:e.jsx(o,{maxValue:new l(2023,12,28),minValue:new l(2023,12,15),defaultValue:new l(2023,12,17)})})};var u,i,m;n.parameters={...n.parameters,docs:{...(u=n.parameters)==null?void 0:u.docs,source:{originalSource:`{
  render: () => {
    const date = new Date();
    return <div className="flex justify-center">
        <Calendar defaultValue={new CalendarDate(date.getFullYear(), date.getMonth() + 1, date.getDate())} />
      </div>;
  }
}`,...(m=(i=n.parameters)==null?void 0:i.docs)==null?void 0:m.source}}};var p,f,x;r.parameters={...r.parameters,docs:{...(p=r.parameters)==null?void 0:p.docs,source:{originalSource:`{
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
}`,...(x=(f=r.parameters)==null?void 0:f.docs)==null?void 0:x.source}}};var v,C,j;s.parameters={...s.parameters,docs:{...(v=s.parameters)==null?void 0:v.docs,source:{originalSource:`{
  render: () => {
    return <div className="flex justify-center">
        <Calendar maxValue={new CalendarDate(2023, 12, 28)} minValue={new CalendarDate(2023, 12, 15)} defaultValue={new CalendarDate(2023, 12, 17)} />
      </div>;
  }
}`,...(j=(C=s.parameters)==null?void 0:C.docs)==null?void 0:j.source}}};const M=["Default","ControlledDate","InRange"];export{r as ControlledDate,n as Default,s as InRange,M as __namedExportsOrder,I as default};
