import{r as i,R as E,x as ae}from"../index-BXFkDR67.js";var $e=Object.defineProperty,we=(e,t,n)=>t in e?$e(e,t,{enumerable:!0,configurable:!0,writable:!0,value:n}):e[t]=n,Y=(e,t,n)=>(we(e,typeof t!="symbol"?t+"":t,n),n);let Te=class{constructor(){Y(this,"current",this.detect()),Y(this,"handoffState","pending"),Y(this,"currentId",0)}set(t){this.current!==t&&(this.handoffState="pending",this.currentId=0,this.current=t)}reset(){this.set(this.detect())}nextId(){return++this.currentId}get isServer(){return this.current==="server"}get isClient(){return this.current==="client"}detect(){return typeof window>"u"||typeof document>"u"?"server":"client"}handoff(){this.handoffState==="pending"&&(this.handoffState="complete")}get isHandoffComplete(){return this.handoffState==="complete"}},I=new Te;function Se(e){typeof queueMicrotask=="function"?queueMicrotask(e):Promise.resolve().then(e).catch(t=>setTimeout(()=>{throw t}))}function P(){let e=[],t={addEventListener(n,r,l,a){return n.addEventListener(r,l,a),t.add(()=>n.removeEventListener(r,l,a))},requestAnimationFrame(...n){let r=requestAnimationFrame(...n);return t.add(()=>cancelAnimationFrame(r))},nextFrame(...n){return t.requestAnimationFrame(()=>t.requestAnimationFrame(...n))},setTimeout(...n){let r=setTimeout(...n);return t.add(()=>clearTimeout(r))},microTask(...n){let r={current:!0};return Se(()=>{r.current&&n[0]()}),t.add(()=>{r.current=!1})},style(n,r,l){let a=n.style.getPropertyValue(r);return Object.assign(n.style,{[r]:l}),this.add(()=>{Object.assign(n.style,{[r]:a})})},group(n){let r=P();return n(r),this.add(()=>r.dispose())},add(n){return e.includes(n)||e.push(n),()=>{let r=e.indexOf(n);if(r>=0)for(let l of e.splice(r,1))l()}},dispose(){for(let n of e.splice(0))n()}};return t}function ue(){let[e]=i.useState(P);return i.useEffect(()=>()=>e.dispose(),[e]),e}let O=(e,t)=>{I.isServer?i.useEffect(e,t):i.useLayoutEffect(e,t)};function J(e){let t=i.useRef(e);return O(()=>{t.current=e},[e]),t}let $=function(e){let t=J(e);return E.useCallback((...n)=>t.current(...n),[t])};function _(...e){return Array.from(new Set(e.flatMap(t=>typeof t=="string"?t.split(" "):[]))).filter(Boolean).join(" ")}function U(e,t,...n){if(e in t){let l=t[e];return typeof l=="function"?l(...n):l}let r=new Error(`Tried to handle "${e}" but there is no handler defined. Only defined handlers are: ${Object.keys(t).map(l=>`"${l}"`).join(", ")}.`);throw Error.captureStackTrace&&Error.captureStackTrace(r,U),r}var se=(e=>(e[e.None=0]="None",e[e.RenderStrategy=1]="RenderStrategy",e[e.Static=2]="Static",e))(se||{}),S=(e=>(e[e.Unmount=0]="Unmount",e[e.Hidden=1]="Hidden",e))(S||{});function ce({ourProps:e,theirProps:t,slot:n,defaultTag:r,features:l,visible:a=!0,name:s,mergeRefs:m}){m=m??Oe;let o=de(t,e);if(a)return M(o,n,r,s,m);let f=l??0;if(f&2){let{static:u=!1,...d}=o;if(u)return M(d,n,r,s,m)}if(f&1){let{unmount:u=!0,...d}=o;return U(u?0:1,{0(){return null},1(){return M({...d,hidden:!0,style:{display:"none"}},n,r,s,m)}})}return M(o,n,r,s,m)}function M(e,t={},n,r,l){let{as:a=n,children:s,refName:m="ref",...o}=Z(e,["unmount","static"]),f=e.ref!==void 0?{[m]:e.ref}:{},u=typeof s=="function"?s(t):s;"className"in o&&o.className&&typeof o.className=="function"&&(o.className=o.className(t)),o["aria-labelledby"]&&o["aria-labelledby"]===o.id&&(o["aria-labelledby"]=void 0);let d={};if(t){let h=!1,p=[];for(let[c,v]of Object.entries(t))typeof v=="boolean"&&(h=!0),v===!0&&p.push(c.replace(/([A-Z])/g,g=>`-${g.toLowerCase()}`));if(h){d["data-headlessui-state"]=p.join(" ");for(let c of p)d[`data-${c}`]=""}}if(a===i.Fragment&&(Object.keys(R(o)).length>0||Object.keys(R(d)).length>0))if(!i.isValidElement(u)||Array.isArray(u)&&u.length>1){if(Object.keys(R(o)).length>0)throw new Error(['Passing props on "Fragment"!',"",`The current component <${r} /> is rendering a "Fragment".`,"However we need to passthrough the following props:",Object.keys(R(o)).concat(Object.keys(R(d))).map(h=>`  - ${h}`).join(`
`),"","You can apply a few solutions:",['Add an `as="..."` prop, to ensure that we render an actual element instead of a "Fragment".',"Render a single element as the child so that we can forward the props onto that element."].map(h=>`  - ${h}`).join(`
`)].join(`
`))}else{let h=u.props,p=h==null?void 0:h.className,c=typeof p=="function"?(...b)=>_(p(...b),o.className):_(p,o.className),v=c?{className:c}:{},g=de(u.props,R(Z(o,["ref"])));for(let b in d)b in g&&delete d[b];return i.cloneElement(u,Object.assign({},g,d,f,{ref:l(u.ref,f.ref)},v))}return i.createElement(a,Object.assign({},Z(o,["ref"]),a!==i.Fragment&&f,a!==i.Fragment&&d),u)}function Oe(...e){return e.every(t=>t==null)?void 0:t=>{for(let n of e)n!=null&&(typeof n=="function"?n(t):n.current=t)}}function de(...e){if(e.length===0)return{};if(e.length===1)return e[0];let t={},n={};for(let r of e)for(let l in r)l.startsWith("on")&&typeof r[l]=="function"?(n[l]!=null||(n[l]=[]),n[l].push(r[l])):t[l]=r[l];if(t.disabled||t["aria-disabled"])for(let r in n)/^(on(?:Click|Pointer|Mouse|Key)(?:Down|Up|Press)?)$/.test(r)&&(n[r]=[l=>{var a;return(a=l==null?void 0:l.preventDefault)==null?void 0:a.call(l)}]);for(let r in n)Object.assign(t,{[r](l,...a){let s=n[r];for(let m of s){if((l instanceof Event||(l==null?void 0:l.nativeEvent)instanceof Event)&&l.defaultPrevented)return;m(l,...a)}}});return t}function Q(e){var t;return Object.assign(i.forwardRef(e),{displayName:(t=e.displayName)!=null?t:e.name})}function R(e){let t=Object.assign({},e);for(let n in t)t[n]===void 0&&delete t[n];return t}function Z(e,t=[]){let n=Object.assign({},e);for(let r of t)r in n&&delete n[r];return n}let Re=Symbol();function fe(...e){let t=i.useRef(e);i.useEffect(()=>{t.current=e},[e]);let n=$(r=>{for(let l of t.current)l!=null&&(typeof l=="function"?l(r):l.current=r)});return e.every(r=>r==null||(r==null?void 0:r[Re]))?void 0:n}function xe(e,t,n){let r=J(l=>{let a=l.getBoundingClientRect();a.x===0&&a.y===0&&a.width===0&&a.height===0&&n()});i.useEffect(()=>{if(!e)return;let l=t===null?null:t instanceof HTMLElement?t:t.current;if(!l)return;let a=P();if(typeof ResizeObserver<"u"){let s=new ResizeObserver(()=>r.current(l));s.observe(l),a.add(()=>s.disconnect())}if(typeof IntersectionObserver<"u"){let s=new IntersectionObserver(()=>r.current(l));s.observe(l),a.add(()=>s.disconnect())}return()=>a.dispose()},[t,r,e])}function je(e){let t={called:!1};return(...n)=>{if(!t.called)return t.called=!0,e(...n)}}function Ne(e=0){let[t,n]=i.useState(e),r=i.useCallback(o=>n(o),[t]),l=i.useCallback(o=>n(f=>f|o),[t]),a=i.useCallback(o=>(t&o)===o,[t]),s=i.useCallback(o=>n(f=>f&~o),[n]),m=i.useCallback(o=>n(f=>f^o),[n]);return{flags:t,setFlag:r,addFlag:l,hasFlag:a,removeFlag:s,toggleFlag:m}}var Pe=(e=>(e[e.None=0]="None",e[e.Closed=1]="Closed",e[e.Enter=2]="Enter",e[e.Leave=4]="Leave",e))(Pe||{});function ke(e){let t={};for(let n in e)e[n]===!0&&(t[`data-${n}`]="");return t}function Ae(e,t,n,r){let[l,a]=i.useState(n),{hasFlag:s,addFlag:m,removeFlag:o}=Ne(e&&l?3:0),f=i.useRef(!1),u=i.useRef(!1),d=ue();return O(function h(){var p;if(!e)return;n&&a(!0);let c=t.current;return c?((p=r==null?void 0:r.start)==null||p.call(r,n),Le(c,{inFlight:f,prepare(){u.current?u.current=!1:u.current=f.current,f.current=!0,!u.current&&(n?(m(3),o(4)):(m(4),o(2)))},run(){u.current?n?(o(3),m(4)):(o(4),m(3)):n?o(1):m(1)},done(){var v;u.current&&typeof c.getAnimations=="function"&&c.getAnimations().length>0||(f.current=!1,o(7),n||a(!1),(v=r==null?void 0:r.end)==null||v.call(r,n))}})):n?(m(3),d.nextFrame(()=>h())):void 0},[e,n,t,d]),e?[l,{closed:s(1),enter:s(2),leave:s(4),transition:s(2)||s(4)}]:[n,{closed:void 0,enter:void 0,leave:void 0,transition:void 0}]}function Le(e,{prepare:t,run:n,done:r,inFlight:l}){let a=P();return Me(e,{prepare:t,inFlight:l}),a.nextFrame(()=>{a.add(He(e,r)),n()}),a.dispose}function He(e,t){let n=je(t),r=P();if(!e)return r.dispose;let{transitionDuration:l,transitionDelay:a}=getComputedStyle(e),[s,m]=[l,a].map(f=>{let[u=0]=f.split(",").filter(Boolean).map(d=>d.includes("ms")?parseFloat(d):parseFloat(d)*1e3).sort((d,h)=>h-d);return u}),o=s+m;if(o!==0){let f=r.group(u=>{let d=u.setTimeout(()=>{n(),u.dispose()},o);u.addEventListener(e,"transitionrun",h=>{h.target===h.currentTarget&&(d(),u.addEventListener(e,"transitioncancel",p=>{p.target===p.currentTarget&&(n(),f())}))})});r.addEventListener(e,"transitionend",u=>{u.target===u.currentTarget&&(n(),r.dispose())})}else n();return r.dispose}function Me(e,{inFlight:t,prepare:n}){if(t!=null&&t.current){n();return}let r=e.style.transition;e.style.transition="none",n(),e.offsetHeight,e.style.transition=r}let ee=i.createContext(null);ee.displayName="OpenClosedContext";var x=(e=>(e[e.Open=1]="Open",e[e.Closed=2]="Closed",e[e.Closing=4]="Closing",e[e.Opening=8]="Opening",e))(x||{});function pe(){return i.useContext(ee)}function Ie({value:e,children:t}){return E.createElement(ee.Provider,{value:e},t)}function Ue(){let e=typeof document>"u";return"useSyncExternalStore"in ae?(t=>t.useSyncExternalStore)(ae)(()=>()=>{},()=>!1,()=>!e):!1}function me(){let e=Ue(),[t,n]=i.useState(I.isHandoffComplete);return t&&I.isHandoffComplete===!1&&n(!1),i.useEffect(()=>{t!==!0&&n(!0)},[t]),i.useEffect(()=>I.handoff(),[]),e?!1:t}function qe(){let e=i.useRef(!1);return O(()=>(e.current=!0,()=>{e.current=!1}),[]),e}function he(e){var t;return!!(e.enter||e.enterFrom||e.enterTo||e.leave||e.leaveFrom||e.leaveTo)||((t=e.as)!=null?t:ge)!==i.Fragment||E.Children.count(e.children)===1}let q=i.createContext(null);q.displayName="TransitionContext";var De=(e=>(e.Visible="visible",e.Hidden="hidden",e))(De||{});function Ve(){let e=i.useContext(q);if(e===null)throw new Error("A <Transition.Child /> is used but it is missing a parent <Transition /> or <Transition.Root />.");return e}function ze(){let e=i.useContext(D);if(e===null)throw new Error("A <Transition.Child /> is used but it is missing a parent <Transition /> or <Transition.Root />.");return e}let D=i.createContext(null);D.displayName="NestingContext";function V(e){return"children"in e?V(e.children):e.current.filter(({el:t})=>t.current!==null).filter(({state:t})=>t==="visible").length>0}function ve(e,t){let n=J(e),r=i.useRef([]),l=qe(),a=ue(),s=$((p,c=S.Hidden)=>{let v=r.current.findIndex(({el:g})=>g===p);v!==-1&&(U(c,{[S.Unmount](){r.current.splice(v,1)},[S.Hidden](){r.current[v].state="hidden"}}),a.microTask(()=>{var g;!V(r)&&l.current&&((g=n.current)==null||g.call(n))}))}),m=$(p=>{let c=r.current.find(({el:v})=>v===p);return c?c.state!=="visible"&&(c.state="visible"):r.current.push({el:p,state:"visible"}),()=>s(p,S.Unmount)}),o=i.useRef([]),f=i.useRef(Promise.resolve()),u=i.useRef({enter:[],leave:[]}),d=$((p,c,v)=>{o.current.splice(0),t&&(t.chains.current[c]=t.chains.current[c].filter(([g])=>g!==p)),t==null||t.chains.current[c].push([p,new Promise(g=>{o.current.push(g)})]),t==null||t.chains.current[c].push([p,new Promise(g=>{Promise.all(u.current[c].map(([b,C])=>C)).then(()=>g())})]),c==="enter"?f.current=f.current.then(()=>t==null?void 0:t.wait.current).then(()=>v(c)):v(c)}),h=$((p,c,v)=>{Promise.all(u.current[c].splice(0).map(([g,b])=>b)).then(()=>{var g;(g=o.current.shift())==null||g()}).then(()=>v(c))});return i.useMemo(()=>({children:r,register:m,unregister:s,onStart:d,onStop:h,wait:f,chains:u}),[m,s,r,d,h,u,f])}let ge=i.Fragment,be=se.RenderStrategy;function Be(e,t){var n,r;let{transition:l=!0,beforeEnter:a,afterEnter:s,beforeLeave:m,afterLeave:o,enter:f,enterFrom:u,enterTo:d,entered:h,leave:p,leaveFrom:c,leaveTo:v,...g}=e,b=i.useRef(null),C=he(e),z=fe(...C?[b,t]:t===null?[]:[t]),w=(n=g.unmount)==null||n?S.Unmount:S.Hidden,{show:F,appear:te,initial:ne}=Ve(),[T,B]=i.useState(F?"visible":"hidden"),re=ze(),{register:k,unregister:A}=re;O(()=>k(b),[k,b]),O(()=>{if(w===S.Hidden&&b.current){if(F&&T!=="visible"){B("visible");return}return U(T,{hidden:()=>A(b),visible:()=>k(b)})}},[T,b,k,A,F,w]);let X=me();O(()=>{if(C&&X&&T==="visible"&&b.current===null)throw new Error("Did you forget to passthrough the `ref` to the actual DOM node?")},[b,T,X,C]);let Ee=ne&&!te,le=te&&F&&ne,K=i.useRef(!1),L=ve(()=>{K.current||(B("hidden"),A(b))},re),ie=$(W=>{K.current=!0;let H=W?"enter":"leave";L.onStart(b,H,N=>{N==="enter"?a==null||a():N==="leave"&&(m==null||m())})}),oe=$(W=>{let H=W?"enter":"leave";K.current=!1,L.onStop(b,H,N=>{N==="enter"?s==null||s():N==="leave"&&(o==null||o())}),H==="leave"&&!V(L)&&(B("hidden"),A(b))});i.useEffect(()=>{C&&l||(ie(F),oe(F))},[F,C,l]);let Ce=!(!l||!C||!X||Ee),[,y]=Ae(Ce,b,F,{start:ie,end:oe}),Fe=R({ref:z,className:((r=_(g.className,le&&f,le&&u,y.enter&&f,y.enter&&y.closed&&u,y.enter&&!y.closed&&d,y.leave&&p,y.leave&&!y.closed&&c,y.leave&&y.closed&&v,!y.transition&&F&&h))==null?void 0:r.trim())||void 0,...ke(y)}),j=0;return T==="visible"&&(j|=x.Open),T==="hidden"&&(j|=x.Closed),y.enter&&(j|=x.Opening),y.leave&&(j|=x.Closing),E.createElement(D.Provider,{value:L},E.createElement(Ie,{value:j},ce({ourProps:Fe,theirProps:g,defaultTag:ge,features:be,visible:T==="visible",name:"Transition.Child"})))}function Xe(e,t){let{show:n,appear:r=!1,unmount:l=!0,...a}=e,s=i.useRef(null),m=he(e),o=fe(...m?[s,t]:t===null?[]:[t]);me();let f=pe();if(n===void 0&&f!==null&&(n=(f&x.Open)===x.Open),n===void 0)throw new Error("A <Transition /> is used but it is missing a `show={true | false}` prop.");let[u,d]=i.useState(n?"visible":"hidden"),h=ve(()=>{n||d("hidden")}),[p,c]=i.useState(!0),v=i.useRef([n]);O(()=>{p!==!1&&v.current[v.current.length-1]!==n&&(v.current.push(n),c(!1))},[v,n]);let g=i.useMemo(()=>({show:n,appear:r,initial:p}),[n,r,p]);xe(n,s,()=>d("hidden")),O(()=>{n?d("visible"):!V(h)&&s.current!==null&&d("hidden")},[n,h]);let b={unmount:l},C=$(()=>{var w;p&&c(!1),(w=e.beforeEnter)==null||w.call(e)}),z=$(()=>{var w;p&&c(!1),(w=e.beforeLeave)==null||w.call(e)});return E.createElement(D.Provider,{value:h},E.createElement(q.Provider,{value:g},ce({ourProps:{...b,as:i.Fragment,children:E.createElement(ye,{ref:o,...b,...a,beforeEnter:C,beforeLeave:z})},theirProps:{},defaultTag:i.Fragment,features:be,visible:u==="visible",name:"Transition"})))}function Ke(e,t){let n=i.useContext(q)!==null,r=pe()!==null;return E.createElement(E.Fragment,null,!n&&r?E.createElement(G,{ref:t,...e}):E.createElement(ye,{ref:t,...e}))}let G=Q(Xe),ye=Q(Be),We=Q(Ke),_e=Object.assign(G,{Child:We,Root:G});export{_e as X};
