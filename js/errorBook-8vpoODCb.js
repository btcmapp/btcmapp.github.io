import{q as $,Q as q,c as z,r as o,C as _,j as s,g as k,S as R}from"../index-Cf1eMIkJ.js";import{c as C}from"./lite-DaUVFjkg.js";import{A as G,a as H,p as K}from"./papers-CuUIvilS.js";import{A as U}from"./arrow-left-CD6QIu67.js";import{u as V}from"./useTranslation-CbaEamwU.js";const W="data:image/svg+xml,%3csvg%20width='24'%20height='24'%20viewBox='0%200%2024%2024'%20fill='none'%20xmlns='http://www.w3.org/2000/svg'%3e%3cpath%20d='M4%204L20%2020'%20stroke='%23B8212A'%20stroke-width='1.5'%20stroke-linecap='round'/%3e%3cpath%20d='M20%204L4%2020'%20stroke='%23B8212A'%20stroke-width='1.5'%20stroke-linecap='round'/%3e%3c/svg%3e",re=()=>{const E=$(),x=q(),{t:u}=V(),{address:D}=z(),[r,w]=o.useState(0),[c,S]=o.useState(),[a,L]=o.useState(),[I,F]=o.useState([]),[p,B]=o.useState(),[f,T]=o.useState(),{removeLocalNft:J}=o.useContext(_);o.useEffect(()=>((async()=>{if(x.tokenId!==void 0){const n=JSON.parse(String(localStorage.getItem("paperData"))),i=JSON.parse(String(localStorage.getItem("paperDataSelect")));if(n!==null&&n.length>0&&i!==null&&i.length>0){const m=n.find(d=>d.nftId===x.tokenId),j=i.find(d=>d.nftId===x.tokenId);if(m&&m.topics.length>0&&j&&j.topics.length>0){const d=m.topics.map(t=>{const l=K.find(P=>P.id===t.id);return{...t,answer:l==null?void 0:l.answer}});let g=j.topics.map(t=>({index:t.index,id:t.id,answer:t.options[0]}));g=g.sort((t,l)=>t.index-l.index);const h=[],N=[],A=[];for(let t=0;t<m.topics.length;t++){const l=d[t].answer;g[t].answer!==l&&(h.push(m.topics[t]),N.push(d[t]),A.push(g[t]))}console.log(A),console.log(N),console.log(h),B(A),T(N),F(h),L(h.length),S(h[0])}}}})(),()=>{J(String(x.tokenId))}),[x,D]);const v=(()=>{if(a)return Array.from({length:a},(e,n)=>n+1)})(),b=e=>{I&&S(I[e])},y=e=>{if(p&&f&&(p==null?void 0:p.length)>0&&(f==null?void 0:f.length)>0&&e){const n=p[r].answer,i=f[r].answer;if(e.id===n&&e.id===i)return 1;if(e.id===n&&e.id!==i)return 2;if(e.id===i)return 1}return 0},M=()=>{r>0&&(w(r-1),b(r-1),R(r-1))},O=()=>{a!==void 0&&r+1<a&&(w(r+1),b(r+1),R(r+1))},Q=e=>{w(e),b(e)};return s.jsxs("div",{className:" w-full bg-[#11183D] text-[#fff] ",children:[s.jsx("div",{className:"flex justify-between items-center bg-[#070B27] px-5 lg:px-10 border-b border-b-[#FFFFFF] h-[64px]",children:s.jsxs("div",{className:"flex cursor-pointer",onClick:()=>E("/nft"),children:[s.jsx("img",{src:U,alt:""}),s.jsx("div",{className:"ml-[10px]",children:u("Back")})]})}),s.jsx("div",{className:"bg-[#11183D] px-5 pb-[60px] h-[100vh]",children:s.jsx("div",{className:"m-auto mb-[100px] w-full lg:w-[800px]",children:s.jsxs("div",{className:"mt-10",children:[s.jsxs("div",{className:"mb-[12px] text-center",children:[u("Test progress")," ",r+1,"/",a]}),s.jsxs("div",{className:"flex justify-between",children:[s.jsx("img",{onClick:M,className:"mr-[13px] cursor-pointer",src:G,alt:""}),s.jsx("div",{className:C("flex flex-wrap border-[#fff] [&::-webkit-scrollbar]:hidden pr-[1px] rounded-[4px] overflow-auto [scrollbar-width:none]",k()?"w-[702px]":"w-[235px]",k()&&Number(a)<=17?"justify-center border":"border",!k()&&Number(a)<6&&"justify-center"),children:s.jsx("div",{className:"flex select-none boxRef",style:{transition:"transform 0.3s ease"},children:v==null?void 0:v.map(e=>s.jsx("div",{id:`ref${e}`,className:C("relative flex justify-center items-center w-10 h-10 cursor-pointer numberRef",e-1===r?"bg-white":"bg-[#E8316866]"),style:{borderLeft:"1px solid #fff",borderRight:"1px solid #fff",marginLeft:"-1px",position:"relative",zIndex:e-1===r?1:"auto"},onClick:()=>{Q(e-1)},children:s.jsxs("span",{className:`${e-1===r?"text-black":"text-white"}`,children:[e," "]})},e))})}),s.jsx("img",{onClick:O,className:"ml-[13px] cursor-pointer",src:H,alt:""})]}),s.jsxs("div",{className:"content",children:[s.jsxs("div",{className:"my-[32px]",children:[s.jsxs("div",{className:"mb-4 text-[#8E8E8E]",children:[u("Question")," ",r+1]}),s.jsx("div",{className:"text-[18px] lg:text-[24px]",children:c==null?void 0:c.details})]}),c==null?void 0:c.options.map(e=>s.jsxs("div",{className:C("flex justify-between items-center mb-4 p-5 lg:p-[32px] border rounded-2xl w-full h-[88px]",y(e)===2?"border-white bg-[#E83168]/40":"border-white/20"),children:[s.jsx("div",{children:e.details}),y(e)===2&&s.jsx("img",{src:W,alt:""})]},e.id))]})]})})})]})};export{re as default};
