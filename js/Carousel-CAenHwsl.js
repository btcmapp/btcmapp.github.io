import{r as s,j as i}from"../index-Gnra8bl-.js";import{B as x}from"./big-Bray3y5Z.js";const d=""+new URL("../assets/banner0-BW5RP4dZ.png",import.meta.url).href,f=""+new URL("../assets/banner1-Dv7sDCOs.png",import.meta.url).href,m=""+new URL("../assets/banner2-CEJeIu5A.png",import.meta.url).href,p=""+new URL("../assets/banner3-BB5v4hF9.png",import.meta.url).href,h=""+new URL("../assets/banner4-maSO5ARI.png",import.meta.url).href,g=""+new URL("../assets/banner5-DzWOBBEa.png",import.meta.url).href,E=()=>{const a=s.useRef(null),o=s.useRef(0),c=s.useRef(!1),[w,v]=s.useState([{id:0,src:d},{id:1,src:f},{id:2,src:m},{id:3,src:p},{id:4,src:h},{id:5,src:g},{id:6,src:d},{id:7,src:f},{id:8,src:m},{id:9,src:p},{id:10,src:h},{id:11,src:g}]),[r,l]=s.useState(0),[n,b]=s.useState({offset:0,end:0,start:0});s.useEffect(()=>{const e=()=>{a.current&&(o.current=a.current.clientWidth/12)};e();const t=setInterval(()=>{c.current||l(R=>R+1)},30);return window.addEventListener("resize",e),()=>{clearInterval(t),window.removeEventListener("resize",e)}},[]),s.useEffect(()=>{r>=o.current&&(v(t=>[...t.slice(1),t[0]]),l(0));const e=x(r).div(o.current).mul(100);b({offset:e.toNumber(),end:e.mul(1.5).toNumber(),start:e.sub(10).toNumber()})},[r]);const u=s.useCallback(()=>{c.current=!c.current},[]),B=e=>{switch(e){case 0:return{mask:`linear-gradient(to right, transparent ${n.offset}%, black ${n.end}%)`};case 6:return{mask:`linear-gradient(to right, black ${n.start}%, transparent ${n.offset}%)`};default:return{}}};return i.jsx("div",{className:"-translate-x-1/2 -top-16 absolute left-1/2 z-30 w-[90%] min-w-[800px] overflow-hidden pt-5",onMouseEnter:u,onMouseLeave:u,children:i.jsx("div",{ref:a,style:{transform:`translateX(-${r}px)`},className:"grid w-[200%] grid-cols-12 gap-x-2",children:w.map((e,t)=>i.jsx("img",{src:e.src,alt:"Banner",className:"hover:-translate-y-3 shrink-0 transition-all hover:scale-105",style:B(t)},e.id))})})},I=s.memo(E);export{I as default};
