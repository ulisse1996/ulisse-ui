import{j as u}from"./clsx-KtS07kqv.js";import{f as le}from"./index-KLTnsmU9.js";import{E as ce,I as ie,g as de}from"./real-module-pIryxjSP.js";import{a as fe}from"./import-cSfh1Bg_.js";import{$ as pe}from"./import-dEUj_gQX.js";import{r as o}from"./index-4g5l5LRQ.js";import{I as he}from"./input-_W7Macw7.js";import{L as me}from"./label-Uh2-_B8m.js";import{P as $e,a as xe,b as ve}from"./popover-u-RfhIKu.js";import{S as be}from"./spinner--pkT1kzj.js";import{c as Ce}from"./utils-1S_n7jHw.js";import"./import-ppAOho62.js";import"./_commonjsHelpers-4gQjN7DL.js";import"./extends-dGVwEr9R.js";import"./index-XGpeoBSN.js";import"./index-jmm5gWkb.js";import"./index-0dIgYeBD.js";import"./index-VzvA_wF4.js";import"./Combination-nC2vVd1Z.js";import"./index-cd2BOhhG.js";import"./index-HHSENXoC.js";import"./index-EwzVq0z5.js";import"./index-zgrs-vd1.js";import"./index-TcKUnSVx.js";import"./index-nyTKe3TY.js";var P={};P={"Clear search":"مسح البحث"};var D={};D={"Clear search":"Изчистване на търсене"};var B={};B={"Clear search":"Vymazat hledání"};var R={};R={"Clear search":"Ryd søgning"};var F={};F={"Clear search":"Suche zurücksetzen"};var j={};j={"Clear search":"Απαλοιφή αναζήτησης"};var k={};k={"Clear search":"Clear search"};var L={};L={"Clear search":"Borrar búsqueda"};var q={};q={"Clear search":"Tühjenda otsing"};var A={};A={"Clear search":"Tyhjennä haku"};var V={};V={"Clear search":"Effacer la recherche"};var _={};_={"Clear search":"נקה חיפוש"};var w={};w={"Clear search":"Obriši pretragu"};var I={};I={"Clear search":"Keresés törlése"};var N={};N={"Clear search":"Cancella ricerca"};var O={};O={"Clear search":"検索をクリア"};var T={};T={"Clear search":"검색 지우기"};var z={};z={"Clear search":"Išvalyti iešką"};var K={};K={"Clear search":"Notīrīt meklēšanu"};var U={};U={"Clear search":"Tøm søk"};var M={};M={"Clear search":"Zoekactie wissen"};var G={};G={"Clear search":"Wyczyść zawartość wyszukiwania"};var H={};H={"Clear search":"Limpar pesquisa"};var W={};W={"Clear search":"Limpar pesquisa"};var Z={};Z={"Clear search":"Ştergeţi căutarea"};var J={};J={"Clear search":"Очистить поиск"};var Q={};Q={"Clear search":"Vymazať vyhľadávanie"};var X={};X={"Clear search":"Počisti iskanje"};var Y={};Y={"Clear search":"Obriši pretragu"};var ee={};ee={"Clear search":"Rensa sökning"};var re={};re={"Clear search":"Aramayı temizle"};var ae={};ae={"Clear search":"Очистити пошук"};var te={};te={"Clear search":"清除搜索"};var se={};se={"Clear search":"清除搜尋條件"};function ye(e){return e&&e.__esModule?e.default:e}var ue={};ue={"ar-AE":P,"bg-BG":D,"cs-CZ":B,"da-DK":R,"de-DE":F,"el-GR":j,"en-US":k,"es-ES":L,"et-EE":q,"fi-FI":A,"fr-FR":V,"he-IL":_,"hr-HR":w,"hu-HU":I,"it-IT":N,"ja-JP":O,"ko-KR":T,"lt-LT":z,"lv-LV":K,"nb-NO":U,"nl-NL":M,"pl-PL":G,"pt-BR":H,"pt-PT":W,"ro-RO":Z,"ru-RU":J,"sk-SK":Q,"sl-SI":X,"sr-SP":Y,"sv-SE":ee,"tr-TR":re,"uk-UA":ae,"zh-CN":te,"zh-TW":se};function ge(e,r,s){let t=ce(ye(ue),"@react-aria/searchfield"),{isDisabled:n,isReadOnly:l,onSubmit:a=()=>{},onClear:c,type:f="search"}=e,m=p=>{const C=p.key;C==="Enter"&&p.preventDefault(),!(n||l)&&(C==="Enter"&&a(r.value),C==="Escape"&&(r.value===""?p.continuePropagation():(r.setValue(""),c&&c())))},$=()=>{r.setValue(""),c&&c()},h=()=>{var p;(p=s.current)===null||p===void 0||p.focus()},{labelProps:i,inputProps:d,descriptionProps:b,errorMessageProps:oe,...ne}=fe({...e,value:r.value,onChange:r.setValue,onKeyDown:l?e.onKeyDown:ie(m,e.onKeyDown),type:f},s);return{labelProps:i,inputProps:{...d,defaultValue:void 0},clearButtonProps:{"aria-label":t.format("Clear search"),excludeFromTabOrder:!0,preventFocusOnPress:!0,isDisabled:n||l,onPress:$,onPressStart:h},descriptionProps:b,errorMessageProps:oe,...ne}}function Ee(e){let[r,s]=pe(y(e.value),y(e.defaultValue)||"",e.onChange);return{value:r,setValue:s}}function y(e){if(e!=null)return e.toString()}const Se=o.forwardRef(({className:e,onSelect:r,...s},t)=>u.jsx("li",{onClick:r,onKeyUp:r,onKeyDown:r,...s,ref:t,className:Ce("relative flex cursor-default select-none items-center gap-1 rounded-md px-2 py-1.5 text-sm outline-none data-[disabled]:pointer-events-none data-[disabled]:opacity-50 hover:bg-secondary hover:text-secondary-foreground focus:bg-secondary focus:text-secondary-foreground",e)})),x=o.forwardRef(({loading:e,empty:r,children:s,label:t,...n},l)=>{const{id:a}=n,c=Ee(n),f=de(l),{labelProps:m,inputProps:$}=ge({...n,"aria-label":t},c,f),[h,i]=o.useState(!1);o.useEffect(()=>{c.value&&i(!0)},[c.value]);const d=o.Children.count(s);return u.jsxs($e,{open:h,onOpenChange:i,children:[u.jsx(xe,{asChild:!0,children:u.jsxs("div",{className:"grid w-full max-w-sm items-center gap-1.5",children:[t&&u.jsx(me,{...m,htmlFor:a,children:t}),u.jsx(he,{...$,ref:f})]})}),u.jsxs(ve,{onOpenAutoFocus:b=>b.preventDefault(),children:[e&&u.jsx("div",{className:"flex flex-col items-center",children:u.jsx(be,{isLoading:!0,className:"text-primary"})}),!e&&d===0&&r,!e&&u.jsx("ul",{children:s})]})]})});x.displayName="SearchField";try{x.displayName="SearchField",x.__docgenInfo={description:"",displayName:"SearchField",props:{label:{defaultValue:null,description:"",name:"label",required:!1,type:{name:"string"}},loading:{defaultValue:null,description:"",name:"loading",required:!1,type:{name:"boolean"}},empty:{defaultValue:null,description:"",name:"empty",required:!1,type:{name:"ReactNode"}},rightComponent:{defaultValue:null,description:"",name:"rightComponent",required:!1,type:{name:"ReactNode"}},leftComponent:{defaultValue:null,description:"",name:"leftComponent",required:!1,type:{name:"ReactNode"}}}}}catch{}function Pe({minChars:e=0,delay:r=500,fetcher:s}){const t=o.useRef(),[n,l]=o.useState(!1),[a,c]=o.useState({value:"",prevent:!1}),[f,m]=o.useState([]),[$,h]=o.useState(!1);return o.useEffect(()=>{if(a.prevent)return;const{value:i}=a;typeof i>"u"||i.length<e||(t.current&&clearTimeout(t.current),h(!1),l(!0),t.current=setTimeout(async()=>{try{const d=await s(i);m(d)}catch{h(!0)}finally{l(!1)}},r))},[a]),{isEmpty:!f,isError:$,isLoading:n,query:a.value,results:f,search:(i,d)=>{c({value:i,prevent:d||!1})}}}const Xe={component:x,title:"Form/Search"};function De(){return Promise.resolve([...Array(5)].map((e,r)=>({id:r,value:le.location.city()})))}const v={args:{label:"Search flights"},render:e=>{const{query:r,results:s,search:t,isLoading:n}=Pe({fetcher:De,delay:3e3,minChars:3}),l=a=>{t(a.value,!0)};return u.jsx(x,{...e,id:"search-flight",value:r,onChange:a=>t(a),loading:n,empty:"Please Enter 3 chars to start search",children:(s||[]).map(a=>u.jsx(Se,{onSelect:()=>l(a),children:a.value},a.id))})}};var g,E,S;v.parameters={...v.parameters,docs:{...(g=v.parameters)==null?void 0:g.docs,source:{originalSource:`{
  args: {
    label: \`Search flights\`
  },
  render: props => {
    const {
      query,
      results,
      search,
      isLoading
    } = useSearch<Item>({
      fetcher,
      delay: 3000,
      minChars: 3
    });
    const handleSelection = (el: Item) => {
      search(el.value, true);
    };
    return <SearchField {...props} id="search-flight" value={query} onChange={q => search(q)} loading={isLoading} empty="Please Enter 3 chars to start search">
        {(results || []).map(el => <SearchItem key={el.id} onSelect={() => handleSelection(el)}>
            {el.value}
          </SearchItem>)}
      </SearchField>;
  }
}`,...(S=(E=v.parameters)==null?void 0:E.docs)==null?void 0:S.source}}};const Ye=["Default"];export{v as Default,Ye as __namedExportsOrder,Xe as default};
