import{f as c,u as d,a as f,s as I}from"./useChainId-DLow6e50.js";import{a as y}from"../index-D1vmEJg1.js";import{r as h}from"./readContract-D4hoMUIJ.js";function C(r,t={}){return{async queryFn({queryKey:a}){const o=t.abi;if(!o)throw new Error("abi is required");const{address:n,functionName:e,scopeKey:u,...s}=a[1];if(!n)throw new Error("address is required");if(!e)throw new Error("functionName is required");const i=s.args;return h(r,{abi:o,address:n,functionName:e,args:i,...s})},queryKey:g(t)}}function g(r={}){const{abi:t,...a}=r;return["readContract",c(a)]}function m(r={}){const{abi:t,address:a,functionName:o,query:n={}}=r,e=y(r),u=d({config:e}),s=C(e,{...r,chainId:r.chainId??u}),i=!!(a&&t&&o&&(n.enabled??!0));return f({...n,...s,enabled:i,structuralSharing:n.structuralSharing??I})}const N=21e5,T=BigInt(1e7),_="HERMKo85";export{T as I,N as T,_ as a,m as u};
