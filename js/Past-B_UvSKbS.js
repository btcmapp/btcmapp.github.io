import{r as s,a as g,n as j,j as t}from"../index-Gnra8bl-.js";import{U,a as b}from"./addresses-CC0kWpE8.js";import{a as y}from"./index-Dk0BPAsB.js";import{b as T}from"./useMint-DAOaLIDR.js";import{t as o,r as v}from"./toFixed-BIahhTDd.js";import{u as A}from"./useTranslation-gLFGE6pp.js";import{f as i,a as D}from"./call-o4Y58EqS.js";import"./big-Bray3y5Z.js";import"./CardFactory-rByaYZ0j.js";import"./nft-CbzfgkHb.js";import"./useChainId-HAP_GFQL.js";import"./CardNFT-Cn3jTTyS.js";import"./parseEther-BzT-Q8gQ.js";const O=[{name:"getAmountsOut",type:"function",stateMutability:"view",inputs:[{type:"uint256"},{type:"address[]"}],outputs:[{type:"uint256[]"}]}],B=()=>{const m=g(),{t:a}=A(),c=T(),r=j({first:1}),e=y(),[x,l]=s.useState("0"),[f,u]=s.useState("0"),[d,h]=s.useState("0"),[S,N]=s.useState(0);return s.useEffect(()=>{if(r&&r.length>0){const n=r[0].tokenId,p=i(r[0].price),E=o(i(c));h(E),l(n),u(p)}},[r]),s.useEffect(()=>{e.token.length&&v(m,{abi:O,address:U,functionName:"getAmountsOut",args:[e.value,[e.token,b]]}).then(n=>{const[,p]=n;N(Number(D(p,6)))})},[e]),t.jsxs("div",{className:"flex flex-col bg-gradient-to-br from-[#1B256A] from-[9.64%] to-[#0B1139] to-[31.87%] p-[32px] rounded-[8px] w-[386px] max-sm:w-full text-[#fff]",children:[t.jsx("span",{className:"text-[32px]",children:a("The past")}),t.jsx("span",{className:"mt-[20px] text-[#8E8E8E] text-[14px]",children:a("Last mint price:")}),t.jsxs("span",{className:"text-[18px]",children:[o(f)," USDT at #",x]}),t.jsx("span",{className:"mt-[20px] text-[#8E8E8E] text-[14px]",children:a("Total mint volume:")}),t.jsxs("span",{className:"text-[18px]",children:[d.toString()," USDT"]}),t.jsx("div",{className:"bg-gradient-to-r from-[#141AAD] from-50% via-[#9737A6] via-100% mt-[20px] p-[1px] rounded-[8px]",children:t.jsxs("div",{className:"flex flex-col bg-[#0B1139] p-[24px] rounded-[8px]",children:[t.jsx("span",{className:"text-[#9737A6] text-[16px]",children:a("In the marketplace")}),t.jsx("span",{className:"mt-[12px] text-[#8E8E8E] text-[14px]",children:a("Best offer")}),t.jsxs("span",{className:"mt-[4px] text-[18px]",children:[o(i(e.value))," ",e.currency]}),t.jsxs("span",{className:"mt-[12px] text-[18px]",children:["≈",o(S)," USDT"]})]})})]})},q=s.memo(B);export{q as default};
