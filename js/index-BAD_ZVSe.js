import{r,Z as l}from"../index-BXFkDR67.js";const u="cardnft-7",p={method:"GET",headers:{accept:"application/json","x-api-key":"c901b74a9cb041f086ee212ebc87305b"}};function v(){const[a,c]=r.useState({average_price:0,sales:0}),n=async()=>{const o=await fetch(`${l}/collections/${u}/stats`,p).then(s=>s.json()),{intervals:t,total:e}=o;let f=0;for(let s=0;s<t.length;s++)if(t[s].interval==="one_day"){f=t[s].average_price;break}c({average_price:f,sales:e.sales})};return r.useEffect(()=>{n()},[]),a}const i={value:BigInt(0),currency:"WETH",token:""};function y(){const[a,c]=r.useState(i);return r.useEffect(()=>{(async()=>{const{offers:o}=await fetch(`${l}/offers/collection/${u}`,p).then(e=>e.json());let t=i;for(const e of o)e.criteria&&e.protocol_data.parameters.orderType===2&&a.value<BigInt(e.price.value)&&(t={value:BigInt(e.price.value),currency:e.price.currency,token:e.protocol_data.parameters.offer[0].token});c(t)})()},[]),a}export{y as a,u as c,v as u};
