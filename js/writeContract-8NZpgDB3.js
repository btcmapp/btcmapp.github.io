import{a8 as K,$ as T,a5 as _,a3 as de,J as W,aa as A,ab as H,ac as q,ad as le,ae as S,af as j,ag as be,ah as he,ai as me,aj as P,ak as ye,al as pe,am as xe,an as ge,ao as O,ap as J,h as Q,aq as we}from"../index-Gnra8bl-.js";import{n as Pe,o as Fe,p as X,q as Y,r as Ge,s as I,h as p,t as Be,f as Ee,u as Te,v as $,w as Z,x as ee,y as Ce,I as ke,b as te,l as Ie,j as _e,d as He}from"./call-o4Y58EqS.js";function Ae({chain:e,currentChainId:s}){if(!e)throw new Pe;if(s!==e.id)throw new Fe({chain:e,currentChainId:s})}function qe(e,{docsPath:s,...o}){const t=(()=>{const n=X(e,o);return n instanceof Y?e:n})();return new Ge(t,{docsPath:s,...o})}async function se(e){const s=await e.request({method:"eth_chainId"},{dedupe:!0});return K(s)}class ze extends T{constructor(){super("`baseFeeMultiplier` must be greater than 1."),Object.defineProperty(this,"name",{enumerable:!0,configurable:!0,writable:!0,value:"BaseFeeScalarError"})}}class v extends T{constructor(){super("Chain does not support EIP-1559 fees."),Object.defineProperty(this,"name",{enumerable:!0,configurable:!0,writable:!0,value:"Eip1559FeesNotSupportedError"})}}class Me extends T{constructor({maxPriorityFeePerGas:s}){super(`\`maxFeePerGas\` cannot be less than the \`maxPriorityFeePerGas\` (${I(s)} gwei).`),Object.defineProperty(this,"name",{enumerable:!0,configurable:!0,writable:!0,value:"MaxFeePerGasTooLowError"})}}async function ne(e){const s=await e.request({method:"eth_gasPrice"});return BigInt(s)}async function Se(e,s){var c,a,i;const{block:o,chain:t=e.chain,request:n}=s||{};if(typeof((c=t==null?void 0:t.fees)==null?void 0:c.defaultPriorityFee)=="function"){const r=o||await p(e,_,"getBlock")({});return t.fees.defaultPriorityFee({block:r,client:e,request:n})}if(typeof((a=t==null?void 0:t.fees)==null?void 0:a.defaultPriorityFee)<"u")return(i=t==null?void 0:t.fees)==null?void 0:i.defaultPriorityFee;try{const r=await e.request({method:"eth_maxPriorityFeePerGas"});return de(r)}catch{const[r,d]=await Promise.all([o?Promise.resolve(o):p(e,_,"getBlock")({}),p(e,ne,"getGasPrice")({})]);if(typeof r.baseFeePerGas!="bigint")throw new v;const f=d-r.baseFeePerGas;return f<0n?0n:f}}async function R(e,s){var b,m;const{block:o,chain:t=e.chain,request:n,type:c="eip1559"}=s||{},a=await(async()=>{var l,y;return typeof((l=t==null?void 0:t.fees)==null?void 0:l.baseFeeMultiplier)=="function"?t.fees.baseFeeMultiplier({block:o,client:e,request:n}):((y=t==null?void 0:t.fees)==null?void 0:y.baseFeeMultiplier)??1.2})();if(a<1)throw new ze;const r=10**(((b=a.toString().split(".")[1])==null?void 0:b.length)??0),d=l=>l*BigInt(Math.ceil(a*r))/BigInt(r),f=o||await p(e,_,"getBlock")({});if(typeof((m=t==null?void 0:t.fees)==null?void 0:m.estimateFeesPerGas)=="function"){const l=await t.fees.estimateFeesPerGas({block:o,client:e,multiply:d,request:n,type:c});if(l!==null)return l}if(c==="eip1559"){if(typeof f.baseFeePerGas!="bigint")throw new v;const l=typeof(n==null?void 0:n.maxPriorityFeePerGas)=="bigint"?n.maxPriorityFeePerGas:await Se(e,{block:f,chain:t,request:n}),y=d(f.baseFeePerGas);return{maxFeePerGas:(n==null?void 0:n.maxFeePerGas)??y+l,maxPriorityFeePerGas:l}}return{gasPrice:(n==null?void 0:n.gasPrice)??d(await p(e,ne,"getGasPrice")({}))}}class $e extends T{constructor(s,{account:o,docsPath:t,chain:n,data:c,gas:a,gasPrice:i,maxFeePerGas:r,maxPriorityFeePerGas:d,nonce:f,to:u,value:b}){var l;const m=Be({from:o==null?void 0:o.address,to:u,value:typeof b<"u"&&`${Ee(b)} ${((l=n==null?void 0:n.nativeCurrency)==null?void 0:l.symbol)||"ETH"}`,data:c,gas:a,gasPrice:typeof i<"u"&&`${I(i)} gwei`,maxFeePerGas:typeof r<"u"&&`${I(r)} gwei`,maxPriorityFeePerGas:typeof d<"u"&&`${I(d)} gwei`,nonce:f});super(s.shortMessage,{cause:s,docsPath:t,metaMessages:[...s.metaMessages?[...s.metaMessages," "]:[],"Estimate Gas Arguments:",m].filter(Boolean)}),Object.defineProperty(this,"cause",{enumerable:!0,configurable:!0,writable:!0,value:void 0}),Object.defineProperty(this,"name",{enumerable:!0,configurable:!0,writable:!0,value:"EstimateGasExecutionError"}),this.cause=s}}function ve(e,{docsPath:s,...o}){const t=(()=>{const n=X(e,o);return n instanceof Y?e:n})();return new $e(t,{docsPath:s,...o})}async function Ue(e,s){var n,c,a;const o=s.account??e.account,t=o?A(o):void 0;try{const{accessList:i,blobs:r,blobVersionedHashes:d,blockNumber:f,blockTag:u,data:b,gas:m,gasPrice:l,maxFeePerBlobGas:y,maxFeePerGas:h,maxPriorityFeePerGas:x,nonce:g,to:C,value:k,stateOverride:w,...E}=await ue(e,{...s,parameters:(t==null?void 0:t.type)==="local"?void 0:["blobVersionedHashes"]}),B=(f?W(f):void 0)||u,L=Te(w);$(s);const N=(a=(c=(n=e.chain)==null?void 0:n.formatters)==null?void 0:c.transactionRequest)==null?void 0:a.format,M=(N||Z)({...ee(E,{format:N}),from:t==null?void 0:t.address,accessList:i,blobs:r,blobVersionedHashes:d,data:b,gas:m,gasPrice:l,maxFeePerBlobGas:y,maxFeePerGas:h,maxPriorityFeePerGas:x,nonce:g,to:C,value:k}),fe=await e.request({method:"eth_estimateGas",params:L?[M,B??"latest",L]:B?[M,B]:[M]});return BigInt(fe)}catch(i){throw ve(i,{...s,account:t,chain:e.chain})}}async function Le(e,{address:s,blockTag:o="latest",blockNumber:t}){const n=await e.request({method:"eth_getTransactionCount",params:[s,t?W(t):o]},{dedupe:!!t});return K(n)}function oe(e){const{kzg:s}=e,o=e.to??(typeof e.blobs[0]=="string"?"hex":"bytes"),t=typeof e.blobs[0]=="string"?e.blobs.map(c=>H(c)):e.blobs,n=[];for(const c of t)n.push(Uint8Array.from(s.blobToKzgCommitment(c)));return o==="bytes"?n:n.map(c=>q(c))}function ae(e){const{kzg:s}=e,o=e.to??(typeof e.blobs[0]=="string"?"hex":"bytes"),t=typeof e.blobs[0]=="string"?e.blobs.map(a=>H(a)):e.blobs,n=typeof e.commitments[0]=="string"?e.commitments.map(a=>H(a)):e.commitments,c=[];for(let a=0;a<t.length;a++){const i=t[a],r=n[a];c.push(Uint8Array.from(s.computeBlobKzgProof(i,r)))}return o==="bytes"?c:c.map(a=>q(a))}function Ne(e,s,o,t){if(typeof e.setBigUint64=="function")return e.setBigUint64(s,o,t);const n=BigInt(32),c=BigInt(4294967295),a=Number(o>>n&c),i=Number(o&c),r=t?4:0,d=t?0:4;e.setUint32(s+r,a,t),e.setUint32(s+d,i,t)}const je=(e,s,o)=>e&s^~e&o,Oe=(e,s,o)=>e&s^e&o^s&o;class Re extends le{constructor(s,o,t,n){super(),this.blockLen=s,this.outputLen=o,this.padOffset=t,this.isLE=n,this.finished=!1,this.length=0,this.pos=0,this.destroyed=!1,this.buffer=new Uint8Array(s),this.view=S(this.buffer)}update(s){j(this);const{view:o,buffer:t,blockLen:n}=this;s=be(s);const c=s.length;for(let a=0;a<c;){const i=Math.min(n-this.pos,c-a);if(i===n){const r=S(s);for(;n<=c-a;a+=n)this.process(r,a);continue}t.set(s.subarray(a,a+i),this.pos),this.pos+=i,a+=i,this.pos===n&&(this.process(o,0),this.pos=0)}return this.length+=s.length,this.roundClean(),this}digestInto(s){j(this),he(s,this),this.finished=!0;const{buffer:o,view:t,blockLen:n,isLE:c}=this;let{pos:a}=this;o[a++]=128,this.buffer.subarray(a).fill(0),this.padOffset>n-a&&(this.process(t,0),a=0);for(let u=a;u<n;u++)o[u]=0;Ne(t,n-8,BigInt(this.length*8),c),this.process(t,0);const i=S(s),r=this.outputLen;if(r%4)throw new Error("_sha2: outputLen should be aligned to 32bit");const d=r/4,f=this.get();if(d>f.length)throw new Error("_sha2: outputLen bigger than state");for(let u=0;u<d;u++)i.setUint32(4*u,f[u],c)}digest(){const{buffer:s,outputLen:o}=this;this.digestInto(s);const t=s.slice(0,o);return this.destroy(),t}_cloneInto(s){s||(s=new this.constructor),s.set(...this.get());const{blockLen:o,buffer:t,length:n,finished:c,destroyed:a,pos:i}=this;return s.length=n,s.pos=i,s.finished=c,s.destroyed=a,n%o&&s.buffer.set(t),s}}const Ve=new Uint32Array([1116352408,1899447441,3049323471,3921009573,961987163,1508970993,2453635748,2870763221,3624381080,310598401,607225278,1426881987,1925078388,2162078206,2614888103,3248222580,3835390401,4022224774,264347078,604807628,770255983,1249150122,1555081692,1996064986,2554220882,2821834349,2952996808,3210313671,3336571891,3584528711,113926993,338241895,666307205,773529912,1294757372,1396182291,1695183700,1986661051,2177026350,2456956037,2730485921,2820302411,3259730800,3345764771,3516065817,3600352804,4094571909,275423344,430227734,506948616,659060556,883997877,958139571,1322822218,1537002063,1747873779,1955562222,2024104815,2227730452,2361852424,2428436474,2756734187,3204031479,3329325298]),F=new Uint32Array([1779033703,3144134277,1013904242,2773480762,1359893119,2600822924,528734635,1541459225]),G=new Uint32Array(64);class De extends Re{constructor(){super(64,32,8,!1),this.A=F[0]|0,this.B=F[1]|0,this.C=F[2]|0,this.D=F[3]|0,this.E=F[4]|0,this.F=F[5]|0,this.G=F[6]|0,this.H=F[7]|0}get(){const{A:s,B:o,C:t,D:n,E:c,F:a,G:i,H:r}=this;return[s,o,t,n,c,a,i,r]}set(s,o,t,n,c,a,i,r){this.A=s|0,this.B=o|0,this.C=t|0,this.D=n|0,this.E=c|0,this.F=a|0,this.G=i|0,this.H=r|0}process(s,o){for(let u=0;u<16;u++,o+=4)G[u]=s.getUint32(o,!1);for(let u=16;u<64;u++){const b=G[u-15],m=G[u-2],l=P(b,7)^P(b,18)^b>>>3,y=P(m,17)^P(m,19)^m>>>10;G[u]=y+G[u-7]+l+G[u-16]|0}let{A:t,B:n,C:c,D:a,E:i,F:r,G:d,H:f}=this;for(let u=0;u<64;u++){const b=P(i,6)^P(i,11)^P(i,25),m=f+b+je(i,r,d)+Ve[u]+G[u]|0,y=(P(t,2)^P(t,13)^P(t,22))+Oe(t,n,c)|0;f=d,d=r,r=i,i=a+m|0,a=c,c=n,n=t,t=m+y|0}t=t+this.A|0,n=n+this.B|0,c=c+this.C|0,a=a+this.D|0,i=i+this.E|0,r=r+this.F|0,d=d+this.G|0,f=f+this.H|0,this.set(t,n,c,a,i,r,d,f)}roundClean(){G.fill(0)}destroy(){this.set(0,0,0,0,0,0,0,0),this.buffer.fill(0)}}const Ke=me(()=>new De);function We(e,s){return Ke(ye(e,{strict:!1})?pe(e):e)}function Je(e){const{commitment:s,version:o=1}=e,t=e.to??(typeof s=="string"?"hex":"bytes"),n=We(s);return n.set([o],0),t==="bytes"?n:q(n)}function Qe(e){const{commitments:s,version:o}=e,t=e.to??(typeof s[0]=="string"?"hex":"bytes"),n=[];for(const c of s)n.push(Je({commitment:c,to:t,version:o}));return n}const V=6,re=32,U=4096,ie=re*U,D=ie*V-1-1*U*V;class Xe extends T{constructor({maxSize:s,size:o}){super("Blob size is too large.",{metaMessages:[`Max: ${s} bytes`,`Given: ${o} bytes`]}),Object.defineProperty(this,"name",{enumerable:!0,configurable:!0,writable:!0,value:"BlobSizeTooLargeError"})}}class Ye extends T{constructor(){super("Blob data must not be empty."),Object.defineProperty(this,"name",{enumerable:!0,configurable:!0,writable:!0,value:"EmptyBlobError"})}}function Ze(e){const s=e.to??(typeof e.data=="string"?"hex":"bytes"),o=typeof e.data=="string"?H(e.data):e.data,t=xe(o);if(!t)throw new Ye;if(t>D)throw new Xe({maxSize:D,size:t});const n=[];let c=!0,a=0;for(;c;){const i=Ce(new Uint8Array(ie));let r=0;for(;r<U;){const d=o.slice(a,a+(re-1));if(i.pushByte(0),i.pushBytes(d),d.length<31){i.pushByte(128),c=!1;break}r++,a+=31}n.push(i)}return s==="bytes"?n.map(i=>i.bytes):n.map(i=>q(i.bytes))}function et(e){const{data:s,kzg:o,to:t}=e,n=e.blobs??Ze({data:s,to:t}),c=e.commitments??oe({blobs:n,kzg:o,to:t}),a=e.proofs??ae({blobs:n,commitments:c,kzg:o,to:t}),i=[];for(let r=0;r<n.length;r++)i.push({blob:n[r],commitment:c[r],proof:a[r]});return i}function tt(e){if(e.type)return e.type;if(typeof e.blobs<"u"||typeof e.blobVersionedHashes<"u"||typeof e.maxFeePerBlobGas<"u"||typeof e.sidecars<"u")return"eip4844";if(typeof e.maxFeePerGas<"u"||typeof e.maxPriorityFeePerGas<"u")return"eip1559";if(typeof e.gasPrice<"u")return typeof e.accessList<"u"?"eip2930":"legacy";throw new ke({transaction:e})}const ce=["blobVersionedHashes","chainId","fees","gas","nonce","type"];async function ue(e,s){const{account:o=e.account,blobs:t,chain:n,gas:c,kzg:a,nonce:i,parameters:r=ce,type:d}=s,f=o?A(o):void 0,u={...s,...f?{from:f==null?void 0:f.address}:{}};let b;async function m(){return b||(b=await p(e,_,"getBlock")({blockTag:"latest"}),b)}let l;async function y(){return l||(n?n.id:typeof s.chainId<"u"?s.chainId:(l=await p(e,se,"getChainId")({}),l))}if((r.includes("blobVersionedHashes")||r.includes("sidecars"))&&t&&a){const h=oe({blobs:t,kzg:a});if(r.includes("blobVersionedHashes")){const x=Qe({commitments:h,to:"hex"});u.blobVersionedHashes=x}if(r.includes("sidecars")){const x=ae({blobs:t,commitments:h,kzg:a}),g=et({blobs:t,commitments:h,proofs:x,to:"hex"});u.sidecars=g}}if(r.includes("chainId")&&(u.chainId=await y()),r.includes("nonce")&&typeof i>"u"&&f)if(f.nonceManager){const h=await y();u.nonce=await f.nonceManager.consume({address:f.address,chainId:h,client:e})}else u.nonce=await p(e,Le,"getTransactionCount")({address:f.address,blockTag:"pending"});if((r.includes("fees")||r.includes("type"))&&typeof d>"u")try{u.type=tt(u)}catch{const h=await m();u.type=typeof(h==null?void 0:h.baseFeePerGas)=="bigint"?"eip1559":"legacy"}if(r.includes("fees"))if(u.type!=="legacy"&&u.type!=="eip2930"){if(typeof u.maxFeePerGas>"u"||typeof u.maxPriorityFeePerGas>"u"){const h=await m(),{maxFeePerGas:x,maxPriorityFeePerGas:g}=await R(e,{block:h,chain:n,request:u});if(typeof s.maxPriorityFeePerGas>"u"&&s.maxFeePerGas&&s.maxFeePerGas<g)throw new Me({maxPriorityFeePerGas:g});u.maxPriorityFeePerGas=g,u.maxFeePerGas=x}}else{if(typeof s.maxFeePerGas<"u"||typeof s.maxPriorityFeePerGas<"u")throw new v;const h=await m(),{gasPrice:x}=await R(e,{block:h,chain:n,request:u,type:"legacy"});u.gasPrice=x}return r.includes("gas")&&typeof c>"u"&&(u.gas=await p(e,Ue,"estimateGas")({...u,account:f?{address:f.address,type:"json-rpc"}:void 0})),$(u),delete u.parameters,u}async function st(e,{serializedTransaction:s}){return e.request({method:"eth_sendRawTransaction",params:[s]},{retryCount:0})}async function nt(e,s){var x,g,C,k;const{account:o=e.account,chain:t=e.chain,accessList:n,blobs:c,data:a,gas:i,gasPrice:r,maxFeePerBlobGas:d,maxFeePerGas:f,maxPriorityFeePerGas:u,nonce:b,to:m,value:l,...y}=s;if(!o)throw new ge({docsPath:"/docs/actions/wallet/sendTransaction"});const h=A(o);try{$(s);let w;if(t!==null&&(w=await p(e,se,"getChainId")({}),Ae({currentChainId:w,chain:t})),h.type==="json-rpc"){const E=(C=(g=(x=e.chain)==null?void 0:x.formatters)==null?void 0:g.transactionRequest)==null?void 0:C.format,B=(E||Z)({...ee(y,{format:E}),accessList:n,blobs:c,chainId:w,data:a,from:h.address,gas:i,gasPrice:r,maxFeePerBlobGas:d,maxFeePerGas:f,maxPriorityFeePerGas:u,nonce:b,to:m,value:l});return await e.request({method:"eth_sendTransaction",params:[B]},{retryCount:0})}if(h.type==="local"){const E=await p(e,ue,"prepareTransactionRequest")({account:h,accessList:n,blobs:c,chain:t,chainId:w,data:a,gas:i,gasPrice:r,maxFeePerBlobGas:d,maxFeePerGas:f,maxPriorityFeePerGas:u,nonce:b,parameters:[...ce,"sidecars"],to:m,value:l,...y}),z=(k=t==null?void 0:t.serializers)==null?void 0:k.transaction,B=await h.signTransaction(E,{serializer:z});return await p(e,st,"sendRawTransaction")({serializedTransaction:B})}throw h.type==="smart"?new O({metaMessages:["Consider using the `sendUserOperation` Action instead."],docsPath:"/docs/actions/bundler/sendUserOperation",type:"smart"}):new Error("incompatible account type.")}catch(w){throw w instanceof O?w:qe(w,{...s,account:h,chain:s.chain||void 0})}}async function ot(e,s){const{abi:o,address:t,args:n,dataSuffix:c,functionName:a,...i}=s,r=i.account?A(i.account):e.account,d=te({abi:o,args:n,functionName:a});try{const{data:f}=await p(e,Ie,"call")({batch:!1,data:`${d}${c?c.replace("0x",""):""}`,to:t,...i,account:r}),u=_e({abi:o,args:n,functionName:a,data:f||"0x"}),b=o.filter(m=>"name"in m&&m.name===s.functionName);return{result:u,request:{abi:b,address:t,args:n,dataSuffix:c,functionName:a,...i,account:r}}}catch(f){throw He(f,{abi:o,address:t,args:n,docsPath:"/docs/contract/simulateContract",functionName:a,sender:r==null?void 0:r.address})}}async function at(e,s){const{abi:o,address:t,args:n,dataSuffix:c,functionName:a,...i}=s,r=te({abi:o,args:n,functionName:a});return p(e,nt,"sendTransaction")({data:`${r}${c?c.replace("0x",""):""}`,to:t,...i})}async function rt(e,s){const{abi:o,chainId:t,connector:n,...c}=s;let a;s.account?a=s.account:a=(await J(e,{chainId:t,connector:n})).account;const i=e.getClient({chainId:t}),r=Q(i,ot,"simulateContract"),{result:d,request:f}=await r({...c,abi:o,account:a});return{chainId:i.chain.id,result:d,request:{__mode:"prepared",...f,chainId:t}}}async function ft(e,s){const{account:o,chainId:t,connector:n,__mode:c,...a}=s;let i;typeof o=="object"&&o.type==="local"?i=e.getClient({chainId:t}):i=await J(e,{account:o,chainId:t,connector:n});const{connector:r}=we(e);let d;if(c==="prepared"||r!=null&&r.supportsSimulation)d=a;else{const{request:b}=await rt(e,{...a,account:o,chainId:t});d=b}return await Q(i,at,"writeContract")({...d,...o?{account:o}:{},chain:t?{id:t}:null})}export{rt as s,ft as w};
