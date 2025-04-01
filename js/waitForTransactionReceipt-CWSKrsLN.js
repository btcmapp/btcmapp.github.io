import{J as I,a0 as D,a1 as S,a2 as C,a3 as J,a4 as q,a5 as L,a6 as V,h as _,a7 as Y}from"../index-BG6ikxhu.js";import{T as E,i as N,W as A,n as z,o as O}from"./readContract-fuqYegYh.js";import{g as G}from"./getTransactionReceipt-GANZC7SL.js";const Q=new Map,U=new Map;function X(e){const o=(r,n)=>({clear:()=>n.delete(r),get:()=>n.get(r),set:i=>n.set(r,i)}),a=o(e,Q),c=o(e,U);return{clear:()=>{a.clear(),c.clear()},promise:a,response:c}}async function Z(e,{cacheKey:o,cacheTime:a=Number.POSITIVE_INFINITY}){const c=X(o),r=c.response.get();if(r&&a>0&&new Date().getTime()-r.created.getTime()<a)return r.data;let n=c.promise.get();n||(n=e(),c.promise.set(n));try{const i=await n;return c.response.set({created:new Date,data:i}),i}finally{c.promise.clear()}}const K=e=>`blockNumber.${e}`;async function W(e,{cacheTime:o=e.cacheTime}={}){const a=await Z(()=>e.request({method:"eth_blockNumber"}),{cacheKey:K(e.uid),cacheTime:o});return BigInt(a)}async function M(e,{blockHash:o,blockNumber:a,blockTag:c,hash:r,index:n}){var f,u,t;const i=c||"latest",l=a!==void 0?I(a):void 0;let s=null;if(r?s=await e.request({method:"eth_getTransactionByHash",params:[r]},{dedupe:!0}):o?s=await e.request({method:"eth_getTransactionByBlockHashAndIndex",params:[o,I(n)]},{dedupe:!0}):(l||i)&&(s=await e.request({method:"eth_getTransactionByBlockNumberAndIndex",params:[l||i,I(n)]},{dedupe:!!l})),!s)throw new E({blockHash:o,blockNumber:a,blockTag:i,hash:r,index:n});return(((t=(u=(f=e.chain)==null?void 0:f.formatters)==null?void 0:u.transaction)==null?void 0:t.format)||D)(s)}const P=new Map,$=new Map;let ee=0;function H(e,o,a){const c=++ee,r=()=>P.get(e)||[],n=()=>{const f=r();P.set(e,f.filter(u=>u.id!==c))},i=()=>{const f=$.get(e);r().length===1&&f&&f(),n()},l=r();if(P.set(e,[...l,{id:c,fns:o}]),l&&l.length>0)return i;const s={};for(const f in o)s[f]=(...u)=>{var d,b;const t=r();if(t.length!==0)for(const g of t)(b=(d=g.fns)[f])==null||b.call(d,...u)};const p=a(s);return typeof p=="function"&&$.set(e,p),i}function te(e,{emitOnBegin:o,initialWaitTime:a,interval:c}){let r=!0;const n=()=>r=!1;return(async()=>{let l;o&&(l=await e({unpoll:n}));const s=await(a==null?void 0:a(l))??c;await S(s);const p=async()=>{r&&(await e({unpoll:n}),await S(c),p())};p()})(),n}function ne(e,{emitOnBegin:o=!1,emitMissed:a=!1,onBlockNumber:c,onError:r,poll:n,pollingInterval:i=e.pollingInterval}){const l=typeof n<"u"?n:!(e.transport.type==="webSocket"||e.transport.type==="fallback"&&e.transport.transports[0].config.type==="webSocket");let s;return l?(()=>{const u=C(["watchBlockNumber",e.uid,o,a,i]);return H(u,{onBlockNumber:c,onError:r},t=>te(async()=>{var d;try{const b=await N(e,W,"getBlockNumber")({cacheTime:0});if(s){if(b===s)return;if(b-s>1&&a)for(let g=s+1n;g<b;g++)t.onBlockNumber(g,s),s=g}(!s||b>s)&&(t.onBlockNumber(b,s),s=b)}catch(b){(d=t.onError)==null||d.call(t,b)}},{emitOnBegin:o,interval:i}))})():(()=>{const u=C(["watchBlockNumber",e.uid,o,a]);return H(u,{onBlockNumber:c,onError:r},t=>{let d=!0,b=()=>d=!1;return(async()=>{try{const g=(()=>{if(e.transport.type==="fallback"){const w=e.transport.transports.find(k=>k.config.type==="webSocket");return w?w.value:e.transport}return e.transport})(),{unsubscribe:F}=await g.subscribe({params:["newHeads"],onData(w){var v;if(!d)return;const k=J((v=w.result)==null?void 0:v.number);t.onBlockNumber(k,s),s=k},onError(w){var k;(k=t.onError)==null||k.call(t,w)}});b=F,d||b()}catch(g){r==null||r(g)}})(),()=>b()})})()}async function ae(e,{confirmations:o=1,hash:a,onReplaced:c,pollingInterval:r=e.pollingInterval,retryCount:n=6,retryDelay:i=({count:s})=>~~(1<<s)*200,timeout:l}){const s=C(["waitForTransactionReceipt",e.uid,a]);let p=0,f,u,t,d=!1;return new Promise((b,g)=>{l&&setTimeout(()=>g(new A({hash:a})),l);const F=H(s,{onReplaced:c,resolve:b,reject:g},w=>{const k=N(e,ne,"watchBlockNumber")({emitMissed:!0,emitOnBegin:!0,poll:!0,pollingInterval:r,async onBlockNumber(v){const h=B=>{k(),B(),F()};let T=v;if(!d){p>n&&h(()=>w.reject(new A({hash:a})));try{if(t){if(o>1&&(!t.blockNumber||T-t.blockNumber+1n<o))return;h(()=>w.resolve(t));return}if(f||(d=!0,await q(async()=>{f=await N(e,M,"getTransaction")({hash:a}),f.blockNumber&&(T=f.blockNumber)},{delay:i,retryCount:n}),d=!1),t=await N(e,G,"getTransactionReceipt")({hash:a}),o>1&&(!t.blockNumber||T-t.blockNumber+1n<o))return;h(()=>w.resolve(t))}catch(B){if(B instanceof E||B instanceof z){if(!f){d=!1;return}try{u=f,d=!0;const R=await q(()=>N(e,L,"getBlock")({blockNumber:T,includeTransactions:!0}),{delay:i,retryCount:n,shouldRetry:({error:y})=>y instanceof V});d=!1;const m=R.transactions.find(({from:y,nonce:j})=>y===u.from&&j===u.nonce);if(!m||(t=await N(e,G,"getTransactionReceipt")({hash:m.hash}),o>1&&(!t.blockNumber||T-t.blockNumber+1n<o)))return;let x="replaced";m.to===u.to&&m.value===u.value?x="repriced":m.from===m.to&&m.value===0n&&(x="cancelled"),h(()=>{var y;(y=w.onReplaced)==null||y.call(w,{reason:x,replacedTransaction:u,transaction:m,transactionReceipt:t}),w.resolve(t)})}catch(R){h(()=>w.reject(R))}}else h(()=>w.reject(B))}finally{p++}}}})})})}async function ce(e,o){const{chainId:a,timeout:c=0,...r}=o,n=e.getClient({chainId:a}),l=await _(n,ae,"waitForTransactionReceipt")({...r,timeout:c});if(l.status==="reverted"){const p=await _(n,M,"getTransaction")({hash:l.transactionHash}),u=await _(n,O,"call")({...p,gasPrice:p.type!=="eip1559"?p.gasPrice:void 0,maxFeePerGas:p.type==="eip1559"?p.maxFeePerGas:void 0,maxPriorityFeePerGas:p.type==="eip1559"?p.maxPriorityFeePerGas:void 0}),t=u!=null&&u.data?Y(`0x${u.data.substring(138)}`):"unknown reason";throw new Error(t)}return{...l,chainId:n.chain.id}}export{ce as w};
