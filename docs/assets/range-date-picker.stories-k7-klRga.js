import{j as a}from"./jsx-runtime-vNq4Oc-g.js";import{r as l}from"./index-4g5l5LRQ.js";import{d as v,o as D}from"./real-module-R3JuiRWs.js";import{R as I}from"./range-calendar-IGwmFQt_.js";import{I as P}from"./input-gaVrPWZn.js";import{P as S,a as y,b}from"./popover-6bzkrgzk.js";import{C as O}from"./calendar-days-8zhnqrwO.js";import"./_commonjsHelpers-4gQjN7DL.js";import"./calendar-grid-l31oSslM.js";import"./import-wL4esqGM.js";import"./import-gQu3LPhC.js";import"./utils-LqYgCrNY.js";import"./index-iptAJApz.js";import"./index-v55UWy9B.js";import"./spinner-dOrrrPEq.js";import"./label-Q8peuTjB.js";import"./extends-dGVwEr9R.js";import"./index-vg5MHLvR.js";import"./index-jmm5gWkb.js";import"./index-4b2-7lPk.js";import"./index-e8T0CmYa.js";import"./Combination-OxY5g-Qw.js";import"./index-__5zQLl9.js";import"./index-T0hCE2_o.js";import"./index-JV3TYAdl.js";import"./index-DMVQsSdb.js";import"./index-jEmRox_a.js";import"./createLucideIcon-cZfFbMz1.js";function T(e,t){if(!t)return"";const r=D(t.start),n=D(t.end);return`${e.format(r.toDate(Intl.DateTimeFormat().resolvedOptions().timeZone))} - ${e.format(n.toDate(Intl.DateTimeFormat().resolvedOptions().timeZone))}`}function k({value:e,onRangeChange:t,formatFn:r,...n},d){const o=v(),s=r||(u=>T(o,u)),[c,$]=l.useState(s(e)),j=u=>{const f=u;$(s(f)),t&&t(f)};return a.jsxs(S,{children:[a.jsx(y,{asChild:!0,children:a.jsx(P,{leftComponent:a.jsx(O,{}),ref:d,...n,value:c,onChange:()=>{},className:"pl-10"})}),a.jsx(b,{className:"w-full md:h-96",children:a.jsx(I,{...n,value:e,onChange:j})})]})}const p=l.forwardRef(k);p.displayName="RangeDatePicker";const mt={component:p,title:"Form/Range Picker"},m={args:{id:"my-ranges",label:"Ranges"},render:e=>{const[t,r]=l.useState();return a.jsx(p,{...e,onRangeChange:r,value:t})}},i={args:{id:"my-date",label:"Date"},render:e=>{const t=v({dateStyle:"full"}),[r,n]=l.useState(),d=o=>{if(!o)return"";const{start:s,end:c}=o;return`${t.format(s.toDate(Intl.DateTimeFormat().resolvedOptions().timeZone))} - ${t.format(c.toDate(Intl.DateTimeFormat().resolvedOptions().timeZone))}`};return a.jsx(p,{...e,onRangeChange:n,value:r,formatFn:d})}};var g,C,R;m.parameters={...m.parameters,docs:{...(g=m.parameters)==null?void 0:g.docs,source:{originalSource:`{
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
