import{j as n}from"./clsx-KtS07kqv.js";import{c as p}from"./index-nyTKe3TY.js";import{r as m}from"./index-4g5l5LRQ.js";import{S as y}from"./spinner--pkT1kzj.js";import{c as f}from"./utils-1S_n7jHw.js";const b=p("inline-flex items-center justify-center whitespace-nowrap rounded-xl text-sm font-medium transition-all focus-visible:outline-none focus-visible:ring-2 active:scale-75 disabled:pointer-events-none disabled:opacity-50",{variants:{variant:{primary:"bg-primary text-primary-foreground hover:bg-primary/90",secondary:"bg-secondary text-secondary-foreground hover:bg-secondary/90",destructive:"bg-destructive text-destructive-foreground hover:bg-destructive/90","outline-primary":"border-2 border-primary bg-background text-primary","outline-secondary":"border-2 border-secondary bg-background text-secondary","outline-destructive":"border-2 border-destructive bg-background text-destructive",flat:"border-2 border-gray-200 bg-gray-200 text-black"},size:{sm:"h-9 px-3",md:"h-10 px-4 py-2",lg:"h-11 px-8",icon:"h-10 w-10 rounded-full"}},defaultVariants:{variant:"primary",size:"md"}}),g={primary:"text-primary-foreground",secondary:"text-secondary-foreground",destructive:"text-destructive-foreground","outline-primary":"text-primary","outline-secondary":"text-secondary","outline-destructive":"text-destructive",flat:"text-black"},a=m.forwardRef(({className:e,disabled:o,isLoading:r,variant:t,children:i,size:s,...d},l)=>{const u=o||r,c=t?g[t]:void 0;return n.jsxs("button",{ref:l,className:f(b({variant:t,size:s,className:e})),disabled:u,...d,children:[r&&n.jsx(y,{isLoading:r,className:c}),i]})});a.displayName="Button";try{a.displayName="Button",a.__docgenInfo={description:"",displayName:"Button",props:{isLoading:{defaultValue:null,description:"",name:"isLoading",required:!1,type:{name:"boolean"}},variant:{defaultValue:null,description:"",name:"variant",required:!1,type:{name:'"primary" | "secondary" | "destructive" | "outline-primary" | "outline-secondary" | "outline-destructive" | "flat" | null'}},size:{defaultValue:null,description:"",name:"size",required:!1,type:{name:'"sm" | "md" | "lg" | "icon" | null'}}}}}catch{}try{Button.displayName="Button",Button.__docgenInfo={description:"",displayName:"Button",props:{isLoading:{defaultValue:null,description:"",name:"isLoading",required:!1,type:{name:"boolean"}},variant:{defaultValue:null,description:"",name:"variant",required:!1,type:{name:'"primary" | "secondary" | "destructive" | "outline-primary" | "outline-secondary" | "outline-destructive" | "flat" | null'}},size:{defaultValue:null,description:"",name:"size",required:!1,type:{name:'"sm" | "md" | "lg" | "icon" | null'}}}}}catch{}export{a as B,b};