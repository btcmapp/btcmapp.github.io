import{a as I,c as M,r,j as e,w as V,B as W}from"../index-DwVROOnd.js";import{B as b}from"./big-Bray3y5Z.js";import{P as w}from"./PpToken-BMQKgRa-.js";import{V as N}from"./Vault-Biqg-jHZ.js";import{t as f}from"./toFixed-BewtiTSV.js";import{u as G}from"./useTranslation-BDz7G61D.js";import{u as S}from"./useWriteContract-DscC5UHJ.js";import{f as L,u as _,a as z}from"./useChainId-BI5A3_l3.js";import{w as J}from"./waitForTransactionReceipt-BMzL2Slo.js";import{b as X,a as D}from"./readContract-D3tpfWIv.js";import{p as k}from"./parseUnits-B8fA3GXb.js";import{r as Y}from"./readContracts-BxZ53xtd.js";import"./writeContract-BKzJ3VAt.js";import"./getTransactionReceipt-B7uKD5Xz.js";function Z(t,a="wei"){return k(t,X[a])}function $(t,a={}){return{async queryFn({queryKey:o}){const{hash:n,...i}=o[1];if(!n)throw new Error("hash is required");return J(t,{...i,onReplaced:a.onReplaced,hash:n})},queryKey:ee(a)}}function ee(t={}){const{onReplaced:a,...o}=t;return["waitForTransactionReceipt",L(o)]}function U(t={}){const{hash:a,query:o={}}=t,n=I(t),i=_({config:n}),l=$(n,{...t,chainId:t.chainId??i}),p=!!(a&&(o.enabled??!0));return z({...o,...l,enabled:p})}const xe=({lastPrice:t,maxAmount:a,open:o,onClose:n,onSubmitted:i})=>{const{t:l}=G(),p=I(),{address:u}=M(),{writeContract:A}=S(),[C,j]=r.useState(),{data:g}=U({hash:C}),{writeContract:P}=S(),[q,y]=r.useState(),{data:v}=U({hash:q}),[d,H]=r.useState({balance:0,allowance:0}),[c,T]=r.useState(""),[B,m]=r.useState(!1),E=b(t).div(10).toFixed(),x=+c>0?b(c).mul(E).toFixed():"-",R=Number(c),Q=R<=0||R>d.balance||Number(x)>Number(a)||B;r.useEffect(()=>{h()},[u]),r.useEffect(()=>{g&&(d.allowance>=Number(c)?(F(),j(void 0)):h())},[g,d,c]),r.useEffect(()=>{v&&(h(),T(""),m(!1),i==null||i(),n==null||n(),y(void 0))},[v]);const h=r.useCallback(async()=>{if(u){const[{result:s},{result:K}]=await Y(p,{contracts:[{...w,functionName:"balanceOf",args:[u]},{...w,functionName:"allowance",args:[u,N.address]}]});H({balance:Number(D(s??0n)),allowance:Number(D(K??0n))})}},[u]),O=()=>{A({...w,functionName:"approve",args:[N.address,BigInt(b(2).pow(256).sub(1).toFixed())]},{onSuccess(s){j(s)},onError(s){console.log(s),m(!1)}})},F=()=>{if(m(!0),d.allowance<Number(c))return O();P({...N,functionName:"sell",args:[Z(c),k(x,6)]},{onSuccess(s){y(s)},onError(s){m(!1),console.log(s)}})};return e.jsxs(V,{closeBtn:!0,title:"Transfer PR",open:o,onClose:n,children:[e.jsxs("div",{className:"grid grid-cols-2 mt-8",children:[e.jsxs("div",{className:"flex flex-col",children:[e.jsxs("span",{className:"text-2xl text-white",children:[e.jsx("span",{className:"font-semibold text-[32px]/10",children:f(E)})," ","USDT"]}),e.jsx("span",{className:"mt-1 text-[#B8B8B8] text-xs",children:l("Recycled price")})]}),e.jsxs("div",{className:"flex flex-col",children:[e.jsxs("span",{className:"text-2xl text-white",children:[e.jsx("span",{className:"font-semibold text-[32px]/10",children:f(a)})," ","USDT"]}),e.jsx("span",{className:"mt-1 text-[#B8B8B8] text-xs",children:l("Amount left")})]})]}),e.jsx("input",{type:"number",placeholder:l("Transfer amount"),className:"border-white/60 focus:border-white bg-[#080E2A] mt-8 px-3 py-[10px] border rounded text-base text-white placeholder:text-[#8E8E8E] transition outline-none",value:c,onChange:s=>T(s.target.value)}),e.jsxs("div",{className:"mt-8 text-sm text-white",children:[e.jsxs("div",{className:"flex justify-between items-center",children:[e.jsx("span",{children:l("PR amount left")}),e.jsx("span",{className:"font-semibold",children:f(d.balance)})]}),e.jsxs("div",{className:"flex justify-between items-center mt-2",children:[e.jsx("span",{children:l("USDT getting back")}),e.jsx("span",{className:"font-semibold",children:f(x)})]})]}),e.jsx(W,{type:"secondary",text:"Confirm",className:"mt-8 w-full",disabled:Q,isLoading:B,onClick:F})]})};export{xe as default};
