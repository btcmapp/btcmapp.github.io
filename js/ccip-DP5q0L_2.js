import{F as O,o as L,G as E,H as x}from"./readContract-D3tpfWIv.js";import{i as h,A as m,$ as p,aQ as w,a2 as b,aR as y,ak as R}from"../index-DwVROOnd.js";function M(r,e){if(!h(r,{strict:!1}))throw new m({address:r});if(!h(e,{strict:!1}))throw new m({address:e});return r.toLowerCase()===e.toLowerCase()}class $ extends p{constructor({callbackSelector:e,cause:t,data:n,extraData:c,sender:u,urls:a}){var i;super(t.shortMessage||"An error occurred while fetching for an offchain result.",{cause:t,metaMessages:[...t.metaMessages||[],(i=t.metaMessages)!=null&&i.length?"":[],"Offchain Gateway Call:",a&&["  Gateway URL(s):",...a.map(d=>`    ${w(d)}`)],`  Sender: ${u}`,`  Data: ${n}`,`  Callback selector: ${e}`,`  Extra data: ${c}`].flat()}),Object.defineProperty(this,"name",{enumerable:!0,configurable:!0,writable:!0,value:"OffchainLookupError"})}}class A extends p{constructor({result:e,url:t}){super("Offchain gateway response is malformed. Response data must be a hex value.",{metaMessages:[`Gateway URL: ${w(t)}`,`Response: ${b(e)}`]}),Object.defineProperty(this,"name",{enumerable:!0,configurable:!0,writable:!0,value:"OffchainLookupResponseMalformedError"})}}class S extends p{constructor({sender:e,to:t}){super("Reverted sender address does not match target contract address (`to`).",{metaMessages:[`Contract address: ${t}`,`OffchainLookup sender address: ${e}`]}),Object.defineProperty(this,"name",{enumerable:!0,configurable:!0,writable:!0,value:"OffchainLookupSenderMismatchError"})}}const j="0x556f1830",q={name:"OffchainLookup",type:"error",inputs:[{name:"sender",type:"address"},{name:"urls",type:"string[]"},{name:"callData",type:"bytes"},{name:"callbackFunction",type:"bytes4"},{name:"extraData",type:"bytes"}]};async function D(r,{blockNumber:e,blockTag:t,data:n,to:c}){const{args:u}=O({data:n,abi:[q]}),[a,i,d,s,o]=u,{ccipRead:f}=r,g=f&&typeof(f==null?void 0:f.request)=="function"?f.request:v;try{if(!M(c,a))throw new S({sender:a,to:c});const l=await g({data:d,sender:a,urls:i}),{data:k}=await L(r,{blockNumber:e,blockTag:t,data:E([s,x([{type:"bytes"},{type:"bytes"}],[l,o])]),to:c});return k}catch(l){throw new $({callbackSelector:s,cause:l,data:n,extraData:o,sender:a,urls:i})}}async function v({data:r,sender:e,urls:t}){var c;let n=new Error("An unknown error occurred.");for(let u=0;u<t.length;u++){const a=t[u],i=a.includes("{data}")?"GET":"POST",d=i==="POST"?{data:r,sender:e}:void 0;try{const s=await fetch(a.replace("{sender}",e).replace("{data}",r),{body:JSON.stringify(d),method:i});let o;if((c=s.headers.get("Content-Type"))!=null&&c.startsWith("application/json")?o=(await s.json()).data:o=await s.text(),!s.ok){n=new y({body:d,details:o!=null&&o.error?b(o.error):s.statusText,headers:s.headers,status:s.status,url:a});continue}if(!R(o)){n=new A({result:o,url:a});continue}return o}catch(s){n=new y({body:d,details:s.message,url:a})}}throw n}export{v as ccipRequest,D as offchainLookup,q as offchainLookupAbiItem,j as offchainLookupSignature};
