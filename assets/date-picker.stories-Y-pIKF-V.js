import{j as r}from"./clsx-KtS07kqv.js";import{r as i}from"./index-4g5l5LRQ.js";import{d as j,m as S}from"./real-module-pIryxjSP.js";import{C as y}from"./calendar-m4RX9t6t.js";import"./range-calendar-gbVT6b-M.js";import{I as b}from"./input-_u6HQfzb.js";import{P as k,a as $,b as I}from"./popover-u-RfhIKu.js";import{C as O}from"./calendar-days-8zhnqrwO.js";import"./_commonjsHelpers-4gQjN7DL.js";import"./calendar-grid-Mp7gqonw.js";import"./import-dEUj_gQX.js";import"./import-gQu3LPhC.js";import"./utils-1S_n7jHw.js";import"./index-S8TDwp6l.js";import"./index-nyTKe3TY.js";import"./spinner--pkT1kzj.js";import"./label-Uh2-_B8m.js";import"./extends-dGVwEr9R.js";import"./index-XGpeoBSN.js";import"./index-jmm5gWkb.js";import"./index-0dIgYeBD.js";import"./index-VzvA_wF4.js";import"./Combination-nC2vVd1Z.js";import"./index-cd2BOhhG.js";import"./index-HHSENXoC.js";import"./index-EwzVq0z5.js";import"./index-zgrs-vd1.js";import"./index-TcKUnSVx.js";import"./createLucideIcon-cZfFbMz1.js";function E(e,t){if(!t)return"";const a=S(t);return e.format(a.toDate(Intl.DateTimeFormat().resolvedOptions().timeZone))}function N({value:e,onDateChange:t,formatFn:a,...o},d){const n=j(),c=a||(l=>E(n,l)),[v,F]=i.useState(c(e)),P=l=>{const u=l;F(c(u)),t&&t(u)};return r.jsxs(k,{children:[r.jsx($,{asChild:!0,children:r.jsx(b,{leftComponent:r.jsx(O,{}),ref:d,...o,value:v,onChange:()=>{},className:"pl-10"})}),r.jsx(I,{className:"min-w-fit",children:r.jsx(y,{...o,value:e,onChange:P})})]})}const p=i.forwardRef(N);p.displayName="DatePicker";const it={component:p,title:"Form/Date Picker"},s={args:{id:"my-date",label:"Date"},render:e=>{const[t,a]=i.useState();return r.jsx(p,{...e,onDateChange:a,value:t})}},m={args:{id:"my-date",label:"Date"},render:e=>{const t=j({dateStyle:"full"}),[a,o]=i.useState(),d=n=>n?t.format(n.toDate(t.resolvedOptions().timeZone)):"";return r.jsx(p,{...e,onDateChange:o,value:a,formatFn:d})}};var f,D,C;s.parameters={...s.parameters,docs:{...(f=s.parameters)==null?void 0:f.docs,source:{originalSource:`{
  args: {
    id: \`my-date\`,
    label: \`Date\`
  },
  render: props => {
    const [date, setDate] = useState<CalendarDate>();
    return <DatePicker<CalendarDate> {...props} onDateChange={setDate} value={date} />;
  }
}`,...(C=(D=s.parameters)==null?void 0:D.docs)==null?void 0:C.source}}};var x,g,h;m.parameters={...m.parameters,docs:{...(x=m.parameters)==null?void 0:x.docs,source:{originalSource:`{
  args: {
    id: \`my-date\`,
    label: \`Date\`
  },
  render: props => {
    const formatter = useDateFormatter({
      dateStyle: 'full'
    });
    const [date, setDate] = useState<CalendarDate>();
    const format = (d?: CalendarDate | null) => {
      if (!d) {
        return \`\`;
      }
      return formatter.format(d.toDate(formatter.resolvedOptions().timeZone));
    };
    return <DatePicker<CalendarDate> {...props} onDateChange={setDate} value={date} formatFn={format} />;
  }
}`,...(h=(g=m.parameters)==null?void 0:g.docs)==null?void 0:h.source}}};const pt=["Default","WithCustomFormatter"];export{s as Default,m as WithCustomFormatter,pt as __namedExportsOrder,it as default};
