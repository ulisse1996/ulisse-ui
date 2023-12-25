import{j as a}from"./clsx-KtS07kqv.js";import{r as l}from"./index-4g5l5LRQ.js";import{d as v,m as D}from"./real-module-pIryxjSP.js";import{R as I}from"./range-calendar-gbVT6b-M.js";import{I as P}from"./input-_u6HQfzb.js";import{P as S,a as y,b}from"./popover-u-RfhIKu.js";import{C as O}from"./calendar-days-8zhnqrwO.js";import"./_commonjsHelpers-4gQjN7DL.js";import"./calendar-grid-Mp7gqonw.js";import"./import-dEUj_gQX.js";import"./import-gQu3LPhC.js";import"./utils-1S_n7jHw.js";import"./index-S8TDwp6l.js";import"./index-nyTKe3TY.js";import"./spinner--pkT1kzj.js";import"./label-Uh2-_B8m.js";import"./extends-dGVwEr9R.js";import"./index-XGpeoBSN.js";import"./index-jmm5gWkb.js";import"./index-0dIgYeBD.js";import"./index-VzvA_wF4.js";import"./Combination-nC2vVd1Z.js";import"./index-cd2BOhhG.js";import"./index-HHSENXoC.js";import"./index-EwzVq0z5.js";import"./index-zgrs-vd1.js";import"./index-TcKUnSVx.js";import"./createLucideIcon-cZfFbMz1.js";function T(e,t){if(!t)return"";const r=D(t.start),n=D(t.end);return`${e.format(r.toDate(Intl.DateTimeFormat().resolvedOptions().timeZone))} - ${e.format(n.toDate(Intl.DateTimeFormat().resolvedOptions().timeZone))}`}function k({value:e,onRangeChange:t,formatFn:r,...n},d){const o=v(),s=r||(u=>T(o,u)),[c,$]=l.useState(s(e)),j=u=>{const f=u;$(s(f)),t&&t(f)};return a.jsxs(S,{children:[a.jsx(y,{asChild:!0,children:a.jsx(P,{leftComponent:a.jsx(O,{}),ref:d,...n,value:c,onChange:()=>{},className:"pl-10"})}),a.jsx(b,{className:"w-full md:h-96",children:a.jsx(I,{...n,value:e,onChange:j})})]})}const p=l.forwardRef(k);p.displayName="RangeDatePicker";const mt={component:p,title:"Form/Range Picker"},m={args:{id:"my-ranges",label:"Ranges"},render:e=>{const[t,r]=l.useState();return a.jsx(p,{...e,onRangeChange:r,value:t})}},i={args:{id:"my-date",label:"Date"},render:e=>{const t=v({dateStyle:"full"}),[r,n]=l.useState(),d=o=>{if(!o)return"";const{start:s,end:c}=o;return`${t.format(s.toDate(Intl.DateTimeFormat().resolvedOptions().timeZone))} - ${t.format(c.toDate(Intl.DateTimeFormat().resolvedOptions().timeZone))}`};return a.jsx(p,{...e,onRangeChange:n,value:r,formatFn:d})}};var g,C,R;m.parameters={...m.parameters,docs:{...(g=m.parameters)==null?void 0:g.docs,source:{originalSource:`{
  args: {
    id: \`my-ranges\`,
    label: \`Ranges\`
  },
  render: props => {
    const [date, setDate] = useState<RangeValue<CalendarDate>>();
    return <RangeDatePicker<CalendarDate> {...props} onRangeChange={setDate} value={date} />;
  }
}`,...(R=(C=m.parameters)==null?void 0:C.docs)==null?void 0:R.source}}};var x,F,h;i.parameters={...i.parameters,docs:{...(x=i.parameters)==null?void 0:x.docs,source:{originalSource:`{
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
}`,...(h=(F=i.parameters)==null?void 0:F.docs)==null?void 0:h.source}}};const it=["Default","WithCustomFormatter"];export{m as Default,i as WithCustomFormatter,it as __namedExportsOrder,mt as default};
