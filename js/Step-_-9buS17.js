import{r as o,j as t}from"../index-BXFkDR67.js";import{B as x}from"./big-Bray3y5Z.js";import{c as b}from"./lite-DaUVFjkg.js";import{u as g}from"./useTranslation-5iXD-oKr.js";const y=({index:d,text:c})=>{const{t:a}=g(),s=o.useRef(null),[u,l]=o.useState(!1),[n,m]=o.useState({x:"0px",y:"0px"}),r=e=>{if(s.current){const i=s.current.getBoundingClientRect();m({x:`${x(e.clientX).sub(i.x).sub(103.5).toFixed()}px`,y:`${x(e.clientY).sub(i.y).sub(103.5).toFixed()}px`})}},p=e=>{l(!0),r(e)},f=e=>r(e),h=()=>l(!1);return t.jsxs("div",{ref:s,className:"fadeRight relative overflow-hidden rounded-2xl border border-white/60 bg-[#11183D]/60 last:mb-0 max-md:w-full max-xl:mb-6 max-xl:w-[488px]",onMouseEnter:e=>p(e),onMouseMove:e=>f(e),onMouseLeave:h,children:[t.jsx("i",{className:b("absolute h-[207px] w-[207px] bg-[radial-gradient(50%_50%_at_50%_50%,rgba(54,207,255,.2),transparent)]",!u&&"hidden"),style:{left:n.x,top:n.y}}),t.jsxs("div",{className:"relative flex h-full w-full flex-col p-8 max-md:p-6",children:[t.jsxs("span",{className:"font-semibold text-[#9737A6] text-lg",children:[a("Step"),d+1]}),t.jsx("span",{className:"mt-4 font-light text-2xl text-white max-sm:text-lg",children:a(c)})]})]})};export{y as default};
