var $=Object.defineProperty;var j=(n,e,t)=>e in n?$(n,e,{enumerable:!0,configurable:!0,writable:!0,value:t}):n[e]=t;var T=(n,e,t)=>j(n,typeof e!="symbol"?e+"":e,t);import{r as f,l as A,m as F}from"../index-Cf1eMIkJ.js";function M(){if(console&&console.warn){for(var n=arguments.length,e=new Array(n),t=0;t<n;t++)e[t]=arguments[t];m(e[0])&&(e[0]=`react-i18next:: ${e[0]}`),console.warn(...e)}}const v={};function y(){for(var n=arguments.length,e=new Array(n),t=0;t<n;t++)e[t]=arguments[t];m(e[0])&&v[e[0]]||(m(e[0])&&(v[e[0]]=new Date),M(...e))}const z=(n,e)=>()=>{if(n.isInitialized)e();else{const t=()=>{setTimeout(()=>{n.off("initialized",t)},0),e()};n.on("initialized",t)}},E=(n,e,t)=>{n.loadNamespaces(e,z(n,t))},R=(n,e,t,o)=>{m(t)&&(t=[t]),t.forEach(i=>{n.options.ns.indexOf(i)<0&&n.options.ns.push(i)}),n.loadLanguages(e,z(n,o))},P=function(n,e){let t=arguments.length>2&&arguments[2]!==void 0?arguments[2]:{};const o=e.languages[0],i=e.options?e.options.fallbackLng:!1,s=e.languages[e.languages.length-1];if(o.toLowerCase()==="cimode")return!0;const c=(C,h)=>{const a=e.services.backendConnector.state[`${C}|${h}`];return a===-1||a===2};return t.bindI18n&&t.bindI18n.indexOf("languageChanging")>-1&&e.services.backendConnector.backend&&e.isLanguageChangingTo&&!c(e.isLanguageChangingTo,n)?!1:!!(e.hasResourceBundle(o,n)||!e.services.backendConnector.backend||e.options.resources&&!e.options.partialBundledLanguages||c(o,n)&&(!i||c(s,n)))},U=function(n,e){let t=arguments.length>2&&arguments[2]!==void 0?arguments[2]:{};return!e.languages||!e.languages.length?(y("i18n.languages were undefined or empty",e.languages),!0):e.options.ignoreJSONStructure!==void 0?e.hasLoadedNamespace(n,{lng:t.lng,precheck:(i,s)=>{if(t.bindI18n&&t.bindI18n.indexOf("languageChanging")>-1&&i.services.backendConnector.backend&&i.isLanguageChangingTo&&!s(i.isLanguageChangingTo,n))return!1}}):P(n,e,t)},m=n=>typeof n=="string",B=n=>typeof n=="object"&&n!==null,J=f.createContext();class G{constructor(){T(this,"getUsedNamespaces",()=>Object.keys(this.usedNamespaces));this.usedNamespaces={}}addUsedNamespaces(e){e.forEach(t=>{this.usedNamespaces[t]||(this.usedNamespaces[t]=!0)})}}const H=(n,e)=>{const t=f.useRef();return f.useEffect(()=>{t.current=n},[n,e]),t.current},k=(n,e,t,o)=>n.getFixedT(e,t,o),W=(n,e,t,o)=>f.useCallback(k(n,e,t,o),[n,e,t,o]),K=function(n){let e=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{};const{i18n:t}=e,{i18n:o,defaultNS:i}=f.useContext(J)||{},s=t||o||F();if(s&&!s.reportNamespaces&&(s.reportNamespaces=new G),!s){y("You will need to pass in an i18next instance by using initReactI18next");const r=(d,l)=>m(l)?l:B(l)&&m(l.defaultValue)?l.defaultValue:Array.isArray(d)?d[d.length-1]:d,u=[r,{},!1];return u.t=r,u.i18n={},u.ready=!1,u}s.options.react&&s.options.react.wait!==void 0&&y("It seems you are still using the old wait option, you may migrate to the new useSuspense behaviour.");const c={...A(),...s.options.react,...e},{useSuspense:C,keyPrefix:h}=c;let a=i||s.options&&s.options.defaultNS;a=m(a)?[a]:a||["translation"],s.reportNamespaces.addUsedNamespaces&&s.reportNamespaces.addUsedNamespaces(a);const g=(s.isInitialized||s.initializedStoreOnce)&&a.every(r=>U(r,s,c)),O=W(s,e.lng||null,c.nsMode==="fallback"?a:a[0],h),I=()=>O,x=()=>k(s,e.lng||null,c.nsMode==="fallback"?a:a[0],h),[L,N]=f.useState(I);let b=a.join();e.lng&&(b=`${e.lng}${b}`);const S=H(b),p=f.useRef(!0);f.useEffect(()=>{const{bindI18n:r,bindI18nStore:u}=c;p.current=!0,!g&&!C&&(e.lng?R(s,e.lng,a,()=>{p.current&&N(x)}):E(s,a,()=>{p.current&&N(x)})),g&&S&&S!==b&&p.current&&N(x);const d=()=>{p.current&&N(x)};return r&&s&&s.on(r,d),u&&s&&s.store.on(u,d),()=>{p.current=!1,r&&s&&r.split(" ").forEach(l=>s.off(l,d)),u&&s&&u.split(" ").forEach(l=>s.store.off(l,d))}},[s,b]),f.useEffect(()=>{p.current&&g&&N(I)},[s,h,g]);const w=[L,s,g];if(w.t=L,w.i18n=s,w.ready=g,g||!g&&!C)return w;throw new Promise(r=>{e.lng?R(s,e.lng,a,()=>r()):E(s,a,()=>r())})};export{J as I,M as a,B as b,m as i,K as u,y as w};
