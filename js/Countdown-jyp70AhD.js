import{r as i,j as S}from"../index-BG6ikxhu.js";const x=({endTime:s,onComplete:t,className:c})=>{const[n,a]=i.useState(0);i.useEffect(()=>{let r=null;return(async()=>{const l=Math.floor(Date.now()/1e3),e=s-l;if(e<=0){t&&t(),a(0);return}a(e),r=setInterval(()=>{a(o=>o===0?(r&&clearInterval(r),t&&t(),0):o-1)},1e3)})(),()=>{r&&clearInterval(r)}},[s,t]);const u=Math.floor(n/3600),f=Math.floor(n%3600/60),d=n%60;return S.jsxs("div",{className:c,children:[u.toString().padStart(2,"0"),":",f.toString().padStart(2,"0"),":",d.toString().padStart(2,"0")]})};export{x as default};
