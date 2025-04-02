import{$ as P,h as R}from"../index-BwZE-zWi.js";import{g as z,d as v,h as x,i as $,m as O,j as _,R as B,k as T,l as q,C as M,r as Z}from"./readContract-BnIbWjDs.js";async function G(e,u){var I;const{allowFailure:i=!0,batchSize:g,blockNumber:d,blockTag:C,multicallAddress:w,stateOverride:A}=u,a=u.contracts,h=g??(typeof((I=e.batch)==null?void 0:I.multicall)=="object"&&e.batch.multicall.batchSize||1024);let c=w;if(!c){if(!e.chain)throw new Error("client chain not configured. multicallAddress is required.");c=z({blockNumber:d,chain:e.chain,contract:"multicall3"})}const s=[[]];let t=0,r=0;for(let n=0;n<a.length;n++){const{abi:f,address:p,args:l,functionName:k}=a[n];try{const m=v({abi:f,args:l,functionName:k});r+=(m.length-2)/2,h>0&&r>h&&s[t].length>0&&(t++,r=(m.length-2)/2,s[t]=[]),s[t]=[...s[t],{allowFailure:!0,callData:m,target:p}]}catch(m){const F=x(m,{abi:f,address:p,args:l,docsPath:"/docs/contract/multicall",functionName:k});if(!i)throw F;s[t]=[...s[t],{allowFailure:!0,callData:"0x",target:p}]}}const o=await Promise.allSettled(s.map(n=>$(e,q,"readContract")({abi:O,address:c,args:[n],blockNumber:d,blockTag:C,functionName:"aggregate3",stateOverride:A}))),b=[];for(let n=0;n<o.length;n++){const f=o[n];if(f.status==="rejected"){if(!i)throw f.reason;for(let l=0;l<s[n].length;l++)b.push({status:"failure",error:f.reason,result:void 0});continue}const p=f.value;for(let l=0;l<p.length;l++){const{returnData:k,success:m}=p[l],{callData:F}=s[n][l],{abi:j,address:N,functionName:D,args:E}=a[b.length];try{if(F==="0x")throw new _;if(!m)throw new B({data:k});const y=T({abi:j,args:E,data:k,functionName:D});b.push(i?{result:y,status:"success"}:y)}catch(y){const S=x(y,{abi:j,address:N,args:E,docsPath:"/docs/contract/multicall",functionName:D});if(!i)throw S;b.push({error:S,result:void 0,status:"failure"})}}}if(b.length!==a.length)throw new P("multicall results mismatch");return b}async function H(e,u){const{allowFailure:i=!0,chainId:g,contracts:d,...C}=u,w=e.getClient({chainId:g});return R(w,G,"multicall")({allowFailure:i,contracts:d,...C})}async function L(e,u){var A;const{allowFailure:i=!0,blockNumber:g,blockTag:d,...C}=u,w=u.contracts;try{const a={};for(const[t,r]of w.entries()){const o=r.chainId??e.state.chainId;a[o]||(a[o]=[]),(A=a[o])==null||A.push({contract:r,index:t})}const h=()=>Object.entries(a).map(([t,r])=>H(e,{...C,allowFailure:i,blockNumber:g,blockTag:d,chainId:Number.parseInt(t),contracts:r.map(({contract:o})=>o)})),c=(await Promise.all(h())).flat(),s=Object.values(a).flatMap(t=>t.map(({index:r})=>r));return c.reduce((t,r,o)=>(t&&(t[s[o]]=r),t),[])}catch(a){if(a instanceof M)throw a;const h=()=>w.map(c=>Z(e,{...c,blockNumber:g,blockTag:d}));return i?(await Promise.allSettled(h())).map(c=>c.status==="fulfilled"?{result:c.value,status:"success"}:{error:c.reason,result:void 0,status:"failure"}):await Promise.all(h())}}export{L as r};
