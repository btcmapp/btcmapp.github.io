import{r as s,a as g,n as j,j as t}from"../index-BwZE-zWi.js";import{U,a as b}from"./addresses-C-4MrEbO.js";import{a as y}from"./index-B7N5o5-q.js";import{b as T}from"./useMint-DtN8CHk3.js";import{t as o}from"./toFixed-BewtiTSV.js";import{u as v}from"./useTranslation-Dck5BSfT.js";import{f as i,r as A,a as D}from"./readContract-BnIbWjDs.js";import"./big-Bray3y5Z.js";import"./CardFactory-B5Mnixjl.js";import"./nft-D0QKYEFE.js";import"./useChainId-DfGO2NwF.js";import"./CardNFT-C069KbgW.js";import"./parseUnits-B8fA3GXb.js";const O=[{name:"getAmountsOut",type:"function",stateMutability:"view",inputs:[{type:"uint256"},{type:"address[]"}],outputs:[{type:"uint256[]"}]}],B=()=>{const m=g(),{t:a}=v(),c=T(),r=j({first:1}),e=y(),[x,l]=s.useState("0"),[f,u]=s.useState("0"),[d,h]=s.useState("0"),[S,N]=s.useState(0);return s.useEffect(()=>{if(r&&r.length>0){const n=r[0].tokenId,p=i(r[0].price,6),E=o(i(c,6));h(E),l(n),u(p)}},[r]),s.useEffect(()=>{e.token.length&&A(m,{abi:O,address:U,functionName:"getAmountsOut",args:[e.value,[e.token,b]]}).then(n=>{const[,p]=n;N(Number(i(p,6)))})},[e]),t.jsxs("div",{className:"flex flex-col bg-gradient-to-br from-[#1B256A] from-[9.64%] to-[#0B1139] to-[31.87%] p-[32px] rounded-[8px] w-[386px] max-sm:w-full text-[#fff]",children:[t.jsx("span",{className:"text-[32px]",children:a("The past")}),t.jsx("span",{className:"mt-[20px] text-[#8E8E8E] text-[14px]",children:a("Last mint price:")}),t.jsxs("span",{className:"text-[18px]",children:[o(f)," USDT at #",x]}),t.jsx("span",{className:"mt-[20px] text-[#8E8E8E] text-[14px]",children:a("Total mint volume:")}),t.jsxs("span",{className:"text-[18px]",children:[d.toString()," USDT"]}),t.jsx("div",{className:"bg-gradient-to-r from-[#141AAD] from-50% via-[#9737A6] via-100% mt-[20px] p-[1px] rounded-[8px]",children:t.jsxs("div",{className:"flex flex-col bg-[#0B1139] p-[24px] rounded-[8px]",children:[t.jsx("span",{className:"text-[#9737A6] text-[16px]",children:a("In the marketplace")}),t.jsx("span",{className:"mt-[12px] text-[#8E8E8E] text-[14px]",children:a("Best offer")}),t.jsxs("span",{className:"mt-[4px] text-[18px]",children:[o(D(e.value))," ",e.currency]}),t.jsxs("span",{className:"mt-[12px] text-[18px]",children:["≈",o(S)," USDT"]})]})})]})},q=s.memo(B);export{q as default};
