import{r as i,n as d,j as t}from"../index-BwZE-zWi.js";import{u as m}from"./useMint-DtN8CHk3.js";import{t as u}from"./toFixed-BewtiTSV.js";import{u as E}from"./useTranslation-Dck5BSfT.js";import{f as x}from"./readContract-BnIbWjDs.js";import"./big-Bray3y5Z.js";import"./CardFactory-B5Mnixjl.js";import"./nft-D0QKYEFE.js";import"./useChainId-DfGO2NwF.js";import"./CardNFT-C069KbgW.js";import"./parseUnits-B8fA3GXb.js";const S=()=>{const{t:s}=E(),[f,n]=i.useState("0"),[l,a]=i.useState("0"),c=m(2),p=m(),e=d({first:1});return i.useEffect(()=>{if(e&&e.length>0){const r=(Number(e[0].tokenId)+2).toString(),o=x(c-p,6);n(r),a(o)}else{const r="2",o=x(c-p,6);n(r),a(o)}},[e]),t.jsxs("div",{className:"flex flex-col bg-gradient-to-br from-[#B21600] from-[9.64%] via-[#6E0F90] via-[56.94%] to-[#5F33BB] to-[98.89%] p-[32px] rounded-[8px] w-[386px] max-sm:w-full text-[#fff]",children:[t.jsx("span",{className:"text-[32px]",children:s("Future")}),t.jsx("span",{className:"mt-[20px] text-[#8E8E8E] text-[14px]",children:s("Next mint price:")}),t.jsxs("span",{className:"text-[18px]",children:[u(l)," USDT at #",f]}),t.jsx("div",{className:"mt-[210px] text-[24px]",children:t.jsx("div",{className:"bg-clip-text bg-gradient-to-r from-[#35DEDE] to-[#23FF7B] text-transparent",children:s("All for Bitcoin")})})]})};export{S as default};
