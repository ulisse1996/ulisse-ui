import{j as r}from"./jsx-runtime-vNq4Oc-g.js";import{r as i}from"./index-4g5l5LRQ.js";import{d as j,o as S}from"./real-module-R3JuiRWs.js";import{C as y}from"./calendar-wWTtoyin.js";import"./range-calendar-xXNSYKbg.js";import{I as b}from"./input-RDt3y-7b.js";import{P as k,a as $,b as I}from"./popover-M2p7GKcb.js";import{C as O}from"./calendar-days-8zhnqrwO.js";import"./_commonjsHelpers-4gQjN7DL.js";import"./calendar-grid--OLyNsgY.js";import"./import-wL4esqGM.js";import"./import-gQu3LPhC.js";import"./utils-HR2XZNS3.js";import"./index-8fJbMDui.js";import"./index-_UegSYSw.js";import"./spinner-TPfN3SXW.js";import"./label-Ikklv8R6.js";import"./extends-dGVwEr9R.js";import"./index-XGpeoBSN.js";import"./index-jmm5gWkb.js";import"./index-0dIgYeBD.js";import"./index-wUOvkR5E.js";import"./Combination-nC2vVd1Z.js";import"./index-cd2BOhhG.js";import"./index-vOJqYY-v.js";import"./index-EwzVq0z5.js";import"./index-zgrs-vd1.js";import"./index-TcKUnSVx.js";import"./createLucideIcon-cZfFbMz1.js";function E(e,t){if(!t)return"";const a=S(t);return e.format(a.toDate(Intl.DateTimeFormat().resolvedOptions().timeZone))}function N({value:e,onDateChange:t,formatFn:a,...o},d){const n=j(),c=a||(l=>E(n,l)),[v,F]=i.useState(c(e)),P=l=>{const u=l;F(c(u)),t&&t(u)};return r.jsxs(k,{children:[r.jsx($,{asChild:!0,children:r.jsx(b,{leftComponent:r.jsx(O,{}),ref:d,...o,value:v,onChange:()=>{},className:"pl-10"})}),r.jsx(I,{className:"min-w-fit",children:r.jsx(y,{...o,value:e,onChange:P})})]})}const p=i.forwardRef(N);p.displayName="DatePicker";const it={component:p,title:"Form/Date Picker"},s={args:{id:"my-date",label:"Date"},render:e=>{const[t,a]=i.useState();return r.jsx(p,{...e,onDateChange:a,value:t})}},m={args:{id:"my-date",label:"Date"},render:e=>{const t=j({dateStyle:"full"}),[a,o]=i.useState(),d=n=>n?t.format(n.toDate(t.resolvedOptions().timeZone)):"";return r.jsx(p,{...e,onDateChange:o,value:a,formatFn:d})}};var f,D,C;s.parameters={...s.parameters,docs:{...(f=s.parameters)==null?void 0:f.docs,source:{originalSource:`{
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
