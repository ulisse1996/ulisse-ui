import{a as S,j as r}from"./jsx-runtime-29545a09.js";import{r as l}from"./index-76fb7be0.js";import{d as $,o as D}from"./real-module-ef20b043.js";import{R as y}from"./range-calendar-c34b89b0.js";import{I as b}from"./input-05212480.js";import{P as x,a as O,b as T}from"./popover-1d06fbbf.js";import{C as k}from"./calendar-days-21abe58e.js";import"./_commonjsHelpers-de833af9.js";import"./calendar-grid-b748ab8a.js";import"./import-ff3a8ae5.js";import"./import-b6061ea2.js";import"./utils-636fbba8.js";import"./index-ac2f2f2d.js";import"./index-a011252c.js";import"./spinner-8a72c79d.js";import"./label-4f316bdd.js";import"./extends-98964cd2.js";import"./index-e2809c0a.js";import"./index-d3ea75b5.js";import"./index-7f80cad2.js";import"./index-90d601c3.js";import"./Combination-33a3cbce.js";import"./index-043160a2.js";import"./index-ef27adad.js";import"./index-57a346df.js";import"./index-b3fcadf7.js";import"./index-1f3e1a8a.js";import"./createLucideIcon-de0f8b79.js";function Z(e,t){if(!t)return"";const a=D(t.start),o=D(t.end);return`${e.format(a.toDate(Intl.DateTimeFormat().resolvedOptions().timeZone))} - ${e.format(o.toDate(Intl.DateTimeFormat().resolvedOptions().timeZone))}`}function V({value:e,onRangeChange:t,formatFn:a,...o},u){const n=$(),s=a||(c=>Z(n,c)),[p,I]=l.useState(s(e)),P=c=>{const f=c;I(s(f)),t&&t(f)};return S(x,{children:[r(O,{asChild:!0,children:r(b,{leftComponent:r(k,{}),ref:u,...o,value:p,onChange:()=>{},className:"pl-10"})}),r(T,{className:"w-full md:h-96",children:r(y,{...o,value:e,onChange:P})})]})}const d=l.forwardRef(V);d.displayName="RangeDatePicker";const it={component:d,title:"Form/Range Picker"},m={args:{id:"my-ranges",label:"Ranges"},render:e=>{const[t,a]=l.useState();return r(d,{...e,onRangeChange:a,value:t})}},i={args:{id:"my-date",label:"Date"},render:e=>{const t=$({dateStyle:"full"}),[a,o]=l.useState();return r(d,{...e,onRangeChange:o,value:a,formatFn:n=>{if(!n)return"";const{start:s,end:p}=n;return`${t.format(s.toDate(Intl.DateTimeFormat().resolvedOptions().timeZone))} - ${t.format(p.toDate(Intl.DateTimeFormat().resolvedOptions().timeZone))}`}})}};var g,C,R;m.parameters={...m.parameters,docs:{...(g=m.parameters)==null?void 0:g.docs,source:{originalSource:`{
  args: {
    id: \`my-ranges\`,
    label: \`Ranges\`
  },
  render: props => {
    const [date, setDate] = useState<RangeValue<CalendarDate>>();
    return <RangeDatePicker<CalendarDate> {...props} onRangeChange={setDate} value={date} />;
  }
}`,...(R=(C=m.parameters)==null?void 0:C.docs)==null?void 0:R.source}}};var F,h,v;i.parameters={...i.parameters,docs:{...(F=i.parameters)==null?void 0:F.docs,source:{originalSource:`{
  args: {
    id: \`my-date\`,
    label: \`Date\`
  },
  render: props => {
    const formatter = useDateFormatter({
      dateStyle: 'full'
    });
    const [date, setDate] = useState<RangeValue<CalendarDate>>();
    const format = (d?: RangeValue<CalendarDate> | null) => {
      if (!d) {
        return \`\`;
      }
      const {
        start,
        end
      } = d;
      return \`\${formatter.format(start.toDate(Intl.DateTimeFormat().resolvedOptions().timeZone))} - \${formatter.format(end.toDate(Intl.DateTimeFormat().resolvedOptions().timeZone))}\`;
    };
    return <RangeDatePicker<CalendarDate> {...props} onRangeChange={setDate} value={date} formatFn={format} />;
  }
}`,...(v=(h=i.parameters)==null?void 0:h.docs)==null?void 0:v.source}}};const lt=["Default","WithCustomFormatter"];export{m as Default,i as WithCustomFormatter,lt as __namedExportsOrder,it as default};
