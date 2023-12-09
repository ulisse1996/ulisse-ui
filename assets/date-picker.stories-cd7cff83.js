import{a as b,j as a}from"./jsx-runtime-29545a09.js";import{r as i}from"./index-76fb7be0.js";import{d as F,o as x}from"./real-module-ef20b043.js";import{C as k}from"./calendar-b3691e35.js";import"./range-calendar-c34b89b0.js";import{I as $}from"./input-05212480.js";import{P as I,a as O,b as j}from"./popover-1d06fbbf.js";import{C as N}from"./calendar-days-21abe58e.js";import"./_commonjsHelpers-de833af9.js";import"./calendar-grid-b748ab8a.js";import"./import-ff3a8ae5.js";import"./import-b6061ea2.js";import"./utils-636fbba8.js";import"./index-ac2f2f2d.js";import"./index-a011252c.js";import"./spinner-8a72c79d.js";import"./label-4f316bdd.js";import"./extends-98964cd2.js";import"./index-e2809c0a.js";import"./index-d3ea75b5.js";import"./index-7f80cad2.js";import"./index-90d601c3.js";import"./Combination-33a3cbce.js";import"./index-043160a2.js";import"./index-ef27adad.js";import"./index-57a346df.js";import"./index-b3fcadf7.js";import"./index-1f3e1a8a.js";import"./createLucideIcon-de0f8b79.js";function Z(e,t){if(!t)return"";const r=x(t);return e.format(r.toDate(Intl.DateTimeFormat().resolvedOptions().timeZone))}function w({value:e,onDateChange:t,formatFn:r,...o},l){const n=F(),c=r||(d=>Z(n,d)),[P,S]=i.useState(c(e)),y=d=>{const f=d;S(c(f)),t&&t(f)};return b(I,{children:[a(O,{asChild:!0,children:a($,{leftComponent:a(N,{}),ref:l,...o,value:P,onChange:()=>{},className:"pl-10"})}),a(j,{className:"min-w-fit",children:a(k,{...o,value:e,onChange:y})})]})}const p=i.forwardRef(w);p.displayName="DatePicker";const pt={component:p,title:"Form/Date Picker"},s={args:{id:"my-date",label:"Date"},render:e=>{const[t,r]=i.useState();return a(p,{...e,onDateChange:r,value:t})}},m={args:{id:"my-date",label:"Date"},render:e=>{const t=F({dateStyle:"full"}),[r,o]=i.useState();return a(p,{...e,onDateChange:o,value:r,formatFn:n=>n?t.format(n.toDate(t.resolvedOptions().timeZone)):""})}};var u,D,C;s.parameters={...s.parameters,docs:{...(u=s.parameters)==null?void 0:u.docs,source:{originalSource:`{
  args: {
    id: \`my-date\`,
    label: \`Date\`
  },
  render: props => {
    const [date, setDate] = useState<CalendarDate>();
    return <DatePicker<CalendarDate> {...props} onDateChange={setDate} value={date} />;
  }
}`,...(C=(D=s.parameters)==null?void 0:D.docs)==null?void 0:C.source}}};var g,h,v;m.parameters={...m.parameters,docs:{...(g=m.parameters)==null?void 0:g.docs,source:{originalSource:`{
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
}`,...(v=(h=m.parameters)==null?void 0:h.docs)==null?void 0:v.source}}};const dt=["Default","WithCustomFormatter"];export{s as Default,m as WithCustomFormatter,dt as __namedExportsOrder,pt as default};
