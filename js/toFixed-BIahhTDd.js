import{h as d}from"../index-Gnra8bl-.js";import{b as u,h as f,l,j as h,d as $}from"./call-o4Y58EqS.js";async function g(o,n){const{abi:t,address:a,args:r,functionName:c,...s}=n,i=u({abi:t,args:r,functionName:c});try{const{data:e}=await f(o,l,"call")({...s,data:i,to:a});return h({abi:t,args:r,functionName:c,data:e||"0x"})}catch(e){throw $(e,{abi:t,address:a,args:r,docsPath:"/docs/contract/readContract",functionName:c})}}function C(o,n){const{chainId:t,...a}=n,r=o.getClient({chainId:t});return d(r,g,"readContract")(a)}function E(o,n=4){const t=`${o}`;if(!/^-?[0-9]+(\.[0-9]+)?$/.test(t))return t;const a=t.indexOf(".");if(a===-1)return`${t}.${"".padEnd(n,"0")}`;const r=t.slice(a+1);return r.length>n?t.slice(0,a+1+n):r.length<n?`${t.slice(0,a)}.${r.padEnd(n,"0")}`:t}export{g as a,C as r,E as t};
