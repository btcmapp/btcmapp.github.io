import{r as n,a as _,c as N,i as S,M as e2,j as e,B as u,f as t2}from"../index-BG6ikxhu.js";import{c as E,u as a2,a as s2}from"./index-BtXp1GfO.js";import{u as i2}from"./useConnectWalletStatus-5NS7beWs.js";import{t as m}from"./toFixed-BewtiTSV.js";import"./big-Bray3y5Z.js";import{u as b,I as n2}from"./nft-COzpp2A1.js";import{C as l2}from"./CardFactory-B5Mnixjl.js";import{u as B}from"./useIncrease-BOXh3CMm.js";import{C as o2}from"./CardNFT-C069KbgW.js";import{f as p,r as U,e as r2,a as V}from"./readContract-fuqYegYh.js";import{V as H}from"./Vault-Biqg-jHZ.js";import{P as c2}from"./PpToken-BMQKgRa-.js";import{B as m2,S as d2,C as x2,T as g,P as f,a as p2,b as w,c as u2,d as f2}from"./index-CWUwOQhB.js";import{L as h2}from"./logo-YDpTsbKF.js";import{u as g2}from"./useTranslation-CTJF1O5Y.js";import{u as w2}from"./useWriteContract-oqzahgyC.js";import"./useChainId-BIKkO4tN.js";import"./writeContract-CiXV8yKX.js";const C={address:"0x0370E05ccB936db29c32D79e1c60d076b1CCC0E1",abi:[{name:"Initialized",type:"event",inputs:[{type:"uint8",name:"version"}]},{name:"RoleAdminChanged",type:"event",inputs:[{type:"bytes32",name:"role",indexed:!0},{type:"bytes32",name:"previousAdminRole",indexed:!0},{type:"bytes32",name:"newAdminRole",indexed:!0}]},{name:"RoleGranted",type:"event",inputs:[{type:"bytes32",name:"role",indexed:!0},{type:"address",name:"account",indexed:!0},{type:"address",name:"sender",indexed:!0}]},{name:"RoleRevoked",type:"event",inputs:[{type:"bytes32",name:"role",indexed:!0},{type:"address",name:"account",indexed:!0},{type:"address",name:"sender",indexed:!0}]},{name:"DEFAULT_ADMIN_ROLE",type:"function",stateMutability:"view",inputs:[],outputs:[{type:"bytes32"}]},{name:"DELEGATE_ROLE",type:"function",stateMutability:"view",inputs:[],outputs:[{type:"bytes32"}]},{name:"MANAGER_ROLE",type:"function",stateMutability:"view",inputs:[],outputs:[{type:"bytes32"}]},{name:"expend",type:"function",stateMutability:"view",inputs:[],outputs:[{type:"uint256"}]},{name:"getRoleAdmin",type:"function",stateMutability:"view",inputs:[{type:"bytes32",name:"role"}],outputs:[{type:"bytes32"}]},{name:"grantRole",type:"function",stateMutability:"nonpayable",inputs:[{type:"bytes32",name:"role"},{type:"address",name:"account"}],outputs:[]},{name:"hasRole",type:"function",stateMutability:"view",inputs:[{type:"bytes32",name:"role"},{type:"address",name:"account"}],outputs:[{type:"bool"}]},{name:"renounceRole",type:"function",stateMutability:"nonpayable",inputs:[{type:"bytes32",name:"role"},{type:"address",name:"account"}],outputs:[]},{name:"revokeRole",type:"function",stateMutability:"nonpayable",inputs:[{type:"bytes32",name:"role"},{type:"address",name:"account"}],outputs:[]},{name:"router",type:"function",stateMutability:"view",inputs:[],outputs:[{type:"address"}]},{name:"supportsInterface",type:"function",stateMutability:"view",inputs:[{type:"bytes4",name:"interfaceId"}],outputs:[{type:"bool"}]},{name:"token",type:"function",stateMutability:"view",inputs:[],outputs:[{type:"address"}]},{name:"usdt",type:"function",stateMutability:"view",inputs:[],outputs:[{type:"address"}]},{name:"initialize",type:"function",stateMutability:"nonpayable",inputs:[{type:"address",name:"_token"},{type:"address",name:"_usdt"},{type:"address",name:"_router"}],outputs:[]},{name:"addLiquidity",type:"function",stateMutability:"nonpayable",inputs:[],outputs:[]}]};function C2(){const{data:t,refetch:a}=b({...l2,functionName:"nextAmount"});return{nextAmount:t??0n,refetch:a}}function b2(){const{data:t,refetch:a}=b({...o2,functionName:"totalSupply"});return{totalSupply:t??0n,refetch:a}}function y2({volume:t,price:a}){const{increase:i}=B(),l=n.useMemo(()=>{const s=a+(t-1n)*i;return t*(a+s)/2n},[t,a,i]);return{increase:i,mintVolumeUSD:l}}function v2(){const{totalSupply:t,refetch:a}=b2(),{increase:i}=B(),{nextAmount:l,refetch:s}=C2(),{mintVolumeUSD:c}=y2({volume:t,price:n2}),r=n.useCallback(()=>{a(),s()},[]);return{totalMintProgress:t.toString(),lastMintPrice:p(l-i,6),totalMintVolume:p(c,6),refetch:r}}function j2(){const{data:t,refetch:a}=b({...C,functionName:"expend"});return{expend:t??0n,refetch:a}}function N2(t){const[a,i]=n.useState(0n),l=_(),{address:s}=N();n.useEffect(()=>{c()},[t,s]);const c=n.useCallback(async()=>{const r=t;if(S(r)){const d=await U(l,{...c2,functionName:"balanceOf",args:[r]});i(d)}},[t,s]);return{balance:a,refetch:c}}function I(t){const[a,i]=n.useState(0n),l=_(),{address:s}=N();n.useEffect(()=>{c()},[t,s]);const c=n.useCallback(async()=>{const r=t||s;if(r&&S(r)){const d=await U(l,{abi:r2,address:"0xFd086bC7CD5C481DCC9C85ebE478A1C0b69FCbb9",functionName:"balanceOf",args:[r]});i(d)}},[t,s]);return{balance:a,refetch:c}}function k2(){const{data:t,refetch:a}=b({...H,functionName:"expend"});return{expend:t??0n,refetch:a}}function L2(){const{balance:t,refetch:a}=I(H.address),{expend:i,refetch:l}=k2(),s=n.useCallback(()=>{a(),l()},[]);return{buyback:{usable:p(t,6),used:p(i,6)},refetch:s}}function M2(){const{balance:t,refetch:a}=I(C.address),{balance:i,refetch:l}=N2(C.address),{expend:s,refetch:c}=j2(),r=n.useCallback(()=>{a(),l(),c()},[]);return{liquidity:{addableUSD:p(t,6),addablePR:V(i),added:p(s,6)},refetch:r}}function A2(){const{buyback:t,refetch:a}=L2(),{liquidity:i,refetch:l}=M2(),s=n.useCallback(()=>{a(),l()},[]);return{buyback:t,liquidity:i,refetch:s}}const T2="data:image/svg+xml,%3csvg%20width='24'%20height='24'%20viewBox='0%200%2024%2024'%20fill='none'%20xmlns='http://www.w3.org/2000/svg'%3e%3cpath%20d='M5%2012H19'%20stroke='url(%23paint0_linear_52_3510)'%20stroke-width='2'%20stroke-linecap='round'%20stroke-linejoin='round'/%3e%3cpath%20d='M12%205L19%2012L12%2019'%20stroke='url(%23paint1_linear_52_3510)'%20stroke-width='2'%20stroke-linecap='round'%20stroke-linejoin='round'/%3e%3cdefs%3e%3clinearGradient%20id='paint0_linear_52_3510'%20x1='5'%20y1='12.5'%20x2='19'%20y2='12.5'%20gradientUnits='userSpaceOnUse'%3e%3cstop%20stop-color='%23141AAD'/%3e%3cstop%20offset='1'%20stop-color='%239737A6'/%3e%3c/linearGradient%3e%3clinearGradient%20id='paint1_linear_52_3510'%20x1='12'%20y1='12'%20x2='19'%20y2='12'%20gradientUnits='userSpaceOnUse'%3e%3cstop%20stop-color='%23141AAD'/%3e%3cstop%20offset='1'%20stop-color='%239737A6'/%3e%3c/linearGradient%3e%3c/defs%3e%3c/svg%3e",R="data:image/svg+xml,%3csvg%20width='24'%20height='24'%20viewBox='0%200%2024%2024'%20fill='none'%20xmlns='http://www.w3.org/2000/svg'%3e%3cpath%20d='M20%209H11C9.89543%209%209%209.89543%209%2011V20C9%2021.1046%209.89543%2022%2011%2022H20C21.1046%2022%2022%2021.1046%2022%2020V11C22%209.89543%2021.1046%209%2020%209Z'%20stroke='white'%20stroke-width='2'%20stroke-linecap='round'%20stroke-linejoin='round'/%3e%3cpath%20d='M5%2015H4C3.46957%2015%202.96086%2014.7893%202.58579%2014.4142C2.21071%2014.0391%202%2013.5304%202%2013V4C2%203.46957%202.21071%202.96086%202.58579%202.58579C2.96086%202.21071%203.46957%202%204%202H13C13.5304%202%2014.0391%202.21071%2014.4142%202.58579C14.7893%202.96086%2015%203.46957%2015%204V5'%20stroke='white'%20stroke-width='2'%20stroke-linecap='round'%20stroke-linejoin='round'/%3e%3c/svg%3e",D2=""+new URL("../assets/dextools-lZB-MdiT.svg",import.meta.url).href,R2="data:image/svg+xml,%3csvg%20width='32'%20height='32'%20viewBox='0%200%2032%2032'%20fill='none'%20xmlns='http://www.w3.org/2000/svg'%3e%3crect%20width='32'%20height='32'%20rx='4'%20fill='white'/%3e%3cpath%20d='M5.42821%2017.3334L5.51218%2017.2014L10.5762%209.27941C10.6502%209.16342%2010.8242%209.17542%2010.8802%209.3014C11.7262%2011.1974%2012.4562%2013.5554%2012.1142%2015.0234C11.9682%2015.6274%2011.5682%2016.4454%2011.1182%2017.2014C11.0602%2017.3114%2010.9962%2017.4194%2010.9282%2017.5234C10.8962%2017.5714%2010.8422%2017.5994%2010.7842%2017.5994H5.57619C5.43619%2017.5994%205.35419%2017.4474%205.42821%2017.3334Z'%20fill='%2311183D'/%3e%3cpath%20d='M28%2018.806V20.06C28%2020.132%2027.956%2020.196%2027.892%2020.224C27.5%2020.392%2026.158%2021.008%2025.6%2021.784C24.176%2023.766%2023.088%2026.6%2020.656%2026.6H10.51C6.91402%2026.6%204%2023.676%204%2020.068V19.952C4%2019.856%204.07798%2019.778%204.17399%2019.778H9.83002C9.94199%2019.778%2010.024%2019.882%2010.014%2019.992C9.97399%2020.36%2010.042%2020.736%2010.216%2021.078C10.552%2021.76%2011.248%2022.186%2012%2022.186H14.8V20H12.032C11.89%2020%2011.806%2019.836%2011.888%2019.72C11.918%2019.674%2011.952%2019.626%2011.988%2019.572C12.25%2019.2%2012.624%2018.622%2012.996%2017.964C13.25%2017.52%2013.496%2017.046%2013.694%2016.57C13.734%2016.484%2013.766%2016.396%2013.798%2016.31C13.852%2016.158%2013.908%2016.016%2013.948%2015.874C13.988%2015.754%2014.02%2015.628%2014.052%2015.51C14.146%2015.106%2014.186%2014.678%2014.186%2014.234C14.186%2014.06%2014.178%2013.878%2014.162%2013.704C14.154%2013.514%2014.13%2013.324%2014.106%2013.134C14.09%2012.966%2014.06%2012.8%2014.028%2012.626C13.988%2012.372%2013.932%2012.12%2013.868%2011.866L13.846%2011.77C13.798%2011.596%2013.758%2011.43%2013.702%2011.256C13.544%2010.71%2013.362%2010.178%2013.17%209.68002C13.1%209.482%2013.02%209.29201%2012.94%209.10202C12.822%208.81602%2012.702%208.55602%2012.592%208.31C12.536%208.19799%2012.488%208.09599%2012.44%207.992C12.386%207.87399%2012.33%207.75599%2012.274%207.64402C12.234%207.55801%2012.188%207.47801%2012.156%207.398L11.814%206.766C11.766%206.68%2011.846%206.57799%2011.94%206.604L14.08%207.18398H14.086C14.09%207.18398%2014.092%207.18601%2014.094%207.18601L14.376%207.26399L14.686%207.35202L14.8%207.38398V6.112C14.8%205.49799%2015.292%205%2015.9%205C16.204%205%2016.48%205.124%2016.678%205.32599C16.876%205.52801%2017%205.804%2017%206.112V8.00002L17.228%208.06399C17.246%208.07002%2017.264%208.078%2017.28%208.08999C17.336%208.132%2017.416%208.19398%2017.518%208.27002C17.598%208.33399%2017.684%208.41201%2017.788%208.49202C17.994%208.65799%2018.24%208.872%2018.51%209.11802C18.582%209.18%2018.652%209.24401%2018.716%209.30801C19.064%209.63201%2019.454%2010.012%2019.826%2010.432C19.93%2010.55%2020.032%2010.67%2020.136%2010.796C20.24%2010.924%2020.35%2011.05%2020.446%2011.176C20.572%2011.344%2020.708%2011.518%2020.826%2011.7C20.882%2011.786%2020.946%2011.874%2021%2011.96C21.152%2012.19%2021.286%2012.428%2021.414%2012.666C21.468%2012.776%2021.524%2012.896%2021.572%2013.014C21.714%2013.332%2021.826%2013.656%2021.898%2013.98C21.92%2014.05%2021.936%2014.126%2021.944%2014.194V14.21C21.968%2014.306%2021.976%2014.408%2021.984%2014.512C22.016%2014.844%2022%2015.176%2021.928%2015.51C21.898%2015.652%2021.858%2015.786%2021.81%2015.928C21.762%2016.064%2021.714%2016.206%2021.652%2016.34C21.532%2016.618%2021.39%2016.896%2021.222%2017.156C21.168%2017.252%2021.104%2017.354%2021.04%2017.45C20.97%2017.552%2020.898%2017.648%2020.834%2017.742C20.746%2017.862%2020.652%2017.988%2020.556%2018.1C20.47%2018.218%2020.382%2018.336%2020.286%2018.44C20.152%2018.598%2020.024%2018.748%2019.89%2018.892C19.81%2018.986%2019.724%2019.082%2019.636%2019.168C19.55%2019.264%2019.462%2019.35%2019.382%2019.43C19.248%2019.564%2019.136%2019.668%2019.042%2019.754L18.822%2019.956C18.79%2019.984%2018.748%2020%2018.704%2020H17V22.186H19.144C19.624%2022.186%2020.08%2022.016%2020.448%2021.704C20.574%2021.594%2021.124%2021.118%2021.774%2020.4C21.796%2020.376%2021.824%2020.358%2021.856%2020.35L27.778%2018.638C27.888%2018.606%2028%2018.69%2028%2018.806Z'%20fill='%2311183D'/%3e%3c/svg%3e",P2="data:image/svg+xml,%3csvg%20width='32'%20height='32'%20viewBox='0%200%2032%2032'%20fill='none'%20xmlns='http://www.w3.org/2000/svg'%3e%3cg%20clip-path='url(%23clip0_1006_51864)'%3e%3cpath%20d='M22.4237%2011.3367L14.3092%2017.9694L13.9274%2018.2821C13.8435%2018.3486%2013.7887%2018.4451%2013.7747%2018.5512L13.6892%2019.2567L13.4547%2021.2385C13.4568%2021.2626%2013.4493%2021.2866%2013.4338%2021.3052C13.4183%2021.3237%2013.396%2021.3354%2013.3719%2021.3376C13.3478%2021.3397%2013.3238%2021.3322%2013.3053%2021.3167C13.2867%2021.3012%2013.275%2021.2789%2013.2728%2021.2548L12.6128%2019.273L11.931%2017.2457C11.9019%2017.1549%2011.9057%2017.0567%2011.9415%2016.9683C11.9774%2016.88%2012.0432%2016.807%2012.1274%2016.7621L20.571%2011.9221L22.1601%2011.013C22.391%2010.8785%2022.6274%2011.1694%2022.4237%2011.3367Z'%20fill='white'/%3e%3cpath%20d='M27.6364%200H4.36364C3.20633%200%202.09642%200.459739%201.27808%201.27808C0.459739%202.09642%200%203.20633%200%204.36364L0%2027.6364C0%2028.7937%200.459739%2029.9036%201.27808%2030.7219C2.09642%2031.5403%203.20633%2032%204.36364%2032H27.6364C28.7937%2032%2029.9036%2031.5403%2030.7219%2030.7219C31.5403%2029.9036%2032%2028.7937%2032%2027.6364V4.36364C32%203.20633%2031.5403%202.09642%2030.7219%201.27808C29.9036%200.459739%2028.7937%200%2027.6364%200ZM25.98%209.26182L22.8564%2023.0636C22.7091%2023.7109%2021.8873%2024.0036%2021.3109%2023.6091L16.5945%2020.4091L14.1927%2022.68C14.0948%2022.7719%2013.9759%2022.8385%2013.8464%2022.8741C13.7169%2022.9096%2013.5807%2022.913%2013.4495%2022.884C13.3184%2022.855%2013.1963%2022.7944%2013.0939%2022.7075C12.9915%2022.6207%2012.9118%2022.5101%2012.8618%2022.3855L11.9945%2019.84L11.1273%2017.2945L6.47818%2016.0218C6.34819%2015.9934%206.23122%2015.9229%206.14546%2015.8212C6.05969%2015.7195%206.00993%2015.5923%206.00392%2015.4594C5.9979%2015.3264%206.03597%2015.1953%206.1122%2015.0862C6.18844%2014.9772%206.29856%2014.8964%206.42545%2014.8564L24.3855%208.38545L24.7164%208.26727C25.4127%208.02364%2026.1327%208.58727%2025.98%209.26182Z'%20fill='white'/%3e%3c/g%3e%3cdefs%3e%3cclipPath%20id='clip0_1006_51864'%3e%3crect%20width='32'%20height='32'%20fill='white'/%3e%3c/clipPath%3e%3c/defs%3e%3c/svg%3e",_2="data:image/svg+xml,%3csvg%20fill='%23000000'%20viewBox='-51.2%20-51.2%20614.40%20614.40'%20id='icons'%20xmlns='http://www.w3.org/2000/svg'%20stroke='%23000000'%20transform='matrix(1,%200,%200,%201,%200,%200)rotate(0)'%3e%3cg%20id='SVGRepo_bgCarrier'%20stroke-width='0'%3e%3crect%20x='-51.2'%20y='-51.2'%20width='614.40'%20height='614.40'%20rx='61.44'%20fill='%23ffffff'%20strokewidth='0'%3e%3c/rect%3e%3c/g%3e%3cg%20id='SVGRepo_tracerCarrier'%20stroke-linecap='round'%20stroke-linejoin='round'%3e%3c/g%3e%3cg%20id='SVGRepo_iconCarrier'%3e%3cpath%20d='M412.19,118.66a109.27,109.27,0,0,1-9.45-5.5,132.87,132.87,0,0,1-24.27-20.62c-18.1-20.71-24.86-41.72-27.35-56.43h.1C349.14,23.9,350,16,350.13,16H267.69V334.78c0,4.28,0,8.51-.18,12.69,0,.52-.05,1-.08,1.56,0,.23,0,.47-.05.71,0,.06,0,.12,0,.18a70,70,0,0,1-35.22,55.56,68.8,68.8,0,0,1-34.11,9c-38.41,0-69.54-31.32-69.54-70s31.13-70,69.54-70a68.9,68.9,0,0,1,21.41,3.39l.1-83.94a153.14,153.14,0,0,0-118,34.52,161.79,161.79,0,0,0-35.3,43.53c-3.48,6-16.61,30.11-18.2,69.24-1,22.21,5.67,45.22,8.85,54.73v.2c2,5.6,9.75,24.71,22.38,40.82A167.53,167.53,0,0,0,115,470.66v-.2l.2.2C155.11,497.78,199.36,496,199.36,496c7.66-.31,33.32,0,62.46-13.81,32.32-15.31,50.72-38.12,50.72-38.12a158.46,158.46,0,0,0,27.64-45.93c7.46-19.61,9.95-43.13,9.95-52.53V176.49c1,.6,14.32,9.41,14.32,9.41s19.19,12.3,49.13,20.31c21.48,5.7,50.42,6.9,50.42,6.9V131.27C453.86,132.37,433.27,129.17,412.19,118.66Z'%3e%3c/path%3e%3c/g%3e%3c/svg%3e",S2="data:image/svg+xml,%3csvg%20width='32'%20height='32'%20viewBox='0%200%2032%2032'%20fill='none'%20xmlns='http://www.w3.org/2000/svg'%3e%3cg%20clip-path='url(%23clip0_1006_51863)'%3e%3cpath%20d='M17.0701%2015.4541L24.2713%2025.7543H21.3159L15.4396%2017.3493V17.3488L14.5769%2016.115L7.7124%206.2959H10.6678L16.2074%2014.2203L17.0701%2015.4541Z'%20fill='white'/%3e%3cpath%20d='M28.5423%200H3.45767C1.5481%200%200%201.5481%200%203.45767V28.5423C0%2030.4519%201.5481%2032%203.45767%2032H28.5423C30.4519%2032%2032%2030.4519%2032%2028.5423V3.45767C32%201.5481%2030.4519%200%2028.5423%200ZM20.4106%2027.1366L14.4642%2018.4823L7.01914%2027.1366H5.09496L13.6098%2017.2393L5.09496%204.84694H11.5894L17.2203%2013.042L24.2702%204.84694H26.1944L18.0749%2014.2852H18.0744L26.905%2027.1366H20.4106Z'%20fill='white'/%3e%3c/g%3e%3cdefs%3e%3cclipPath%20id='clip0_1006_51863'%3e%3crect%20width='32'%20height='32'%20fill='white'/%3e%3c/clipPath%3e%3c/defs%3e%3c/svg%3e",E2=""+new URL("../assets/uniswap-DjkE9zyU.svg",import.meta.url).href,B2="data:image/svg+xml,%3csvg%20width='32'%20height='32'%20viewBox='0%200%2032%2032'%20fill='none'%20xmlns='http://www.w3.org/2000/svg'%3e%3cg%20clip-path='url(%23clip0_1006_51865)'%3e%3cpath%20fill-rule='evenodd'%20clip-rule='evenodd'%20d='M4%200C1.79086%200%200%201.79086%200%204V28C0%2030.2091%201.79086%2032%204%2032H28C30.2091%2032%2032%2030.2091%2032%2028V4C32%201.79086%2030.2091%200%2028%200H4ZM25.5879%2011.199C25.3574%2010.3422%2024.6819%209.66684%2023.8252%209.43612C22.2602%209.00781%2015.9998%209.00781%2015.9998%209.00781C15.9998%209.00781%209.73961%209.00781%208.17452%209.4198C7.33438%209.65036%206.64239%2010.3423%206.41183%2011.199C6%2012.7639%206%2016.0094%206%2016.0094C6%2016.0094%206%2019.2713%206.41183%2020.8199C6.64254%2021.6765%207.3179%2022.352%208.17467%2022.5827C9.75609%2023.011%2016%2023.011%2016%2023.011C16%2023.011%2022.2602%2023.011%2023.8252%2022.5991C24.682%2022.3685%2025.3574%2021.693%2025.5881%2020.8364C25.9999%2019.2713%2025.9999%2016.0259%2025.9999%2016.0259C25.9999%2016.0259%2026.0164%2012.7639%2025.5879%2011.199ZM14.0066%2019.0079L19.2124%2016.0096L14.0066%2013.0112V19.0079Z'%20fill='white'/%3e%3c/g%3e%3cdefs%3e%3cclipPath%20id='clip0_1006_51865'%3e%3crect%20width='32'%20height='32'%20fill='white'/%3e%3c/clipPath%3e%3c/defs%3e%3c/svg%3e",U2=""+new URL("../assets/instagram-BTNkrYsp.png",import.meta.url).href,V2=[{logo:S2,url:"https://x.com/btcmapp/"},{logo:P2,url:"https://t.me/btcmapp/"},{logo:B2,url:"https://www.youtube.com/@btcmapp"},{logo:_2,url:"https://www.tiktok.com/@btcmapp"},{logo:U2,url:"https://www.instagram.com/@btcmapp"},{logo:E2,url:"https://app.uniswap.org/swap?chain=arbitrum&inputCurrency=0xFd086bC7CD5C481DCC9C85ebE478A1C0b69FCbb9&outputCurrency=0xE9f5a048103293aEEb05F1D986Bb91Ef38410D8E"},{logo:R2,url:`https://opensea.io/collection/${E}`},{logo:D2,url:"https://www.dextools.io/app/cn/arbitrum/pair-explorer/0x19e3c834e96a08a9806c9fd2a4628c4ac5c852cd"}],H2=""+new URL("../assets/bitcoin-D-MTcw9q.png",import.meta.url).href,I2=""+new URL("../assets/book-BhfmzMIM.png",import.meta.url).href,F2=""+new URL("../assets/poker-CFWvwbW7.png",import.meta.url).href,q2="data:image/svg+xml,%3csvg%20width='24'%20height='28'%20viewBox='0%200%2024%2028'%20fill='none'%20xmlns='http://www.w3.org/2000/svg'%3e%3cpath%20d='M21.2134%2015.3751C18.6153%2013.2931%2015.417%209.78698%2012.8667%206.225L11.9896%205L11.1278%206.23273C8.62169%209.81748%205.50585%2013.2333%202.79301%2015.37L2%2015.9945L2.78662%2016.6249C5.38475%2018.7069%208.58302%2022.2129%2011.1333%2025.775L12.0104%2027L12.8722%2025.7672C15.3783%2022.1825%2018.4941%2018.7667%2021.207%2016.63L22%2016.0054L21.2134%2015.3751ZM11.9901%2023.693C9.7699%2020.7621%207.1964%2017.9565%204.93696%2016.0061C7.30013%2014.0092%209.79965%2011.2877%2012.0098%208.307C14.23%2011.2378%2016.8035%2014.0435%2019.063%2015.9939C16.6998%2017.9907%2014.2004%2020.7123%2011.9901%2023.693Z'%20fill='url(%23paint0_linear_875_30038)'/%3e%3cdefs%3e%3clinearGradient%20id='paint0_linear_875_30038'%20x1='12'%20y1='5'%20x2='12'%20y2='27'%20gradientUnits='userSpaceOnUse'%3e%3cstop%20stop-color='%2361BDFE'/%3e%3cstop%20offset='0.19'%20stop-color='%2323D8AD'/%3e%3cstop%20offset='1'%20stop-color='%234F0F90'/%3e%3c/linearGradient%3e%3c/defs%3e%3c/svg%3e",P="data:image/svg+xml,%3c?xml%20version='1.0'%20standalone='no'?%3e%3c!DOCTYPE%20svg%20PUBLIC%20'-//W3C//DTD%20SVG%201.1//EN'%20'http://www.w3.org/Graphics/SVG/1.1/DTD/svg11.dtd'%3e%3csvg%20t='1730876190468'%20class='icon'%20viewBox='0%200%201024%201024'%20version='1.1'%20xmlns='http://www.w3.org/2000/svg'%20p-id='4266'%20width='16'%20height='16'%20xmlns:xlink='http://www.w3.org/1999/xlink'%3e%3cpath%20d='M463.99957%20784.352211c0%2026.509985%2021.490445%2048.00043%2048.00043%2048.00043s48.00043-21.490445%2048.00043-48.00043c0-26.509985-21.490445-48.00043-48.00043-48.00043S463.99957%20757.842226%20463.99957%20784.352211z'%20fill='%23ffffff'%20p-id='4267'%3e%3c/path%3e%3cpath%20d='M512%20960c-247.039484%200-448-200.960516-448-448S264.960516%2064%20512%2064%20960%20264.960516%20960%20512%20759.039484%20960%20512%20960zM512%20128.287273c-211.584464%200-383.712727%20172.128262-383.712727%20383.712727%200%20211.551781%20172.128262%20383.712727%20383.712727%20383.712727%20211.551781%200%20383.712727-172.159226%20383.712727-383.712727C895.712727%20300.415536%20723.551781%20128.287273%20512%20128.287273z'%20fill='%23ffffff'%20p-id='4268'%3e%3c/path%3e%3cpath%20d='M512%20673.695256c-17.664722%200-32.00086-14.336138-32.00086-31.99914l0-54.112297c0-52.352533%2039.999785-92.352318%2075.32751-127.647359%2025.887273-25.919957%2052.67249-52.67249%2052.67249-74.016718%200-53.343368-43.07206-96.735385-95.99914-96.735385-53.823303%200-95.99914%2041.535923-95.99914%2094.559333%200%2017.664722-14.336138%2031.99914-32.00086%2031.99914s-32.00086-14.336138-32.00086-31.99914c0-87.423948%2071.775299-158.559333%20160.00086-158.559333s160.00086%2072.095256%20160.00086%20160.735385c0%2047.904099-36.32028%2084.191695-71.424378%20119.295794-27.839699%2027.776052-56.575622%2056.511974-56.575622%2082.3356l0%2054.112297C544.00086%20659.328155%20529.664722%20673.695256%20512%20673.695256z'%20fill='%23ffffff'%20p-id='4269'%3e%3c/path%3e%3c/svg%3e",z2=""+new URL("../assets/respect-DJlFq-Sz.png",import.meta.url).href,O2=""+new URL("../assets/vector-5Q71gRtf.png",import.meta.url).href,G2=["Guide players to know and understand bitcoin with incentives, and eventually return to recognize and hold bitcoin","Push players to learn what is bitcoin and how it works with direct incentives which further makes them to continue to learn","Encourage players to hold Bitcoin rather than Pepe Respect","Finally let players recognize, hold and then start to promote the growth of Bitcoin ecosystem together with Pepe Respect"],Z2=["Connect your wallet and mint Pepe Paper NFT","Start answering the questions all about Bitcoin","Make a choice between claiming 1 PR and 10 PR","Claim your PR and hold your Bitcoin!"];function d0(){const{t}=g2(),{isConnected:a}=N(),{writeContract:i}=w2(),{showMessage:l}=n.useContext(e2),[s,c]=n.useState(!1),[r,d]=n.useState(!1),[F,y]=n.useState(),{totalMintProgress:q,lastMintPrice:k,totalMintVolume:z}=v2(),{buyback:v,liquidity:h,refetch:L}=A2(),{average_price:O,sales:G}=a2(),{value:M,currency:Z}=s2(),{status:W,open:Q}=i2(),$=+h.addableUSD>0&&+h.addablePR>0;n.useEffect(()=>{const o=document.querySelectorAll(".fadeLeft"),j=document.querySelectorAll(".fadeRight"),T=window.innerHeight,D=()=>{for(const x of o)x.getBoundingClientRect().top<T-100&&(x.classList.contains("animate_fadeInLeft")||x.classList.add("animate_fadeInLeft"));for(const x of j)x.getBoundingClientRect().top<T-100&&(x.classList.contains("animate_fadeInRight")||x.classList.add("animate_fadeInRight"))};return window.addEventListener("scroll",D),()=>window.removeEventListener("scroll",D)},[]);const X=()=>{if(!a&&W==="close")return Q();c(!0)},Y=n.useCallback(()=>c(!1),[]),A=o=>{t2(o),l("Copied","tip")},J=()=>{r||(d(!0),i({...C,functionName:"addLiquidity"},{onSuccess(){L(),d(!1)},onError(o){console.log(o),d(!1)}}))};return e.jsxs("div",{className:"w-screen h-full",children:[e.jsxs("div",{className:"relative pt-48",children:[e.jsx(m2,{}),e.jsx(d2,{}),e.jsxs("div",{className:"relative",children:[e.jsxs("div",{children:[e.jsxs("div",{className:"flex flex-col items-center",children:[e.jsxs("h1",{className:"font-semibold text-6xl text-white max-md:text-[40px]/[44px] tracking-[0.35px]",children:[e.jsx("span",{className:"bg-clip-text bg-gradient-to-r from-[-6.58%] from-[#141AAD] to-[#9737A6] to-[46.29%] text-transparent",children:"BITCOIN"})," ","MISSION"]}),e.jsx("span",{className:"mt-3 max-md:px-5 text-center text-lg text-white max-md:text-base tracking-[0.35px]",children:t("An Incentive Mechanism that Promotes the Growth of Bitcoin Ecosystem")}),e.jsx(u,{link:!0,to:"mint-guide",text:"Mint Now",className:"mt-8"})]}),e.jsxs("div",{className:"relative mt-[76px] min-h-[241px]",children:[e.jsx("img",{src:I2,alt:"Book",className:"left-1/2 z-10 max-[800px]:absolute w-full min-w-[800px] max-[800px]:-translate-x-1/2"}),e.jsx("img",{src:O2,alt:"Vector",className:"-top-[19px] left-1/2 z-10 absolute w-[55%] min-w-[440px] -translate-x-1/2"}),e.jsx("iframe",{src:"./particles/index.html",title:"particles",className:"top-[15%] left-1/2 z-20 absolute w-[30%] min-w-[200px] h-[50%] -translate-x-1/2"}),e.jsx(x2,{})]})]}),e.jsxs("div",{className:"mx-auto mt-[120px] max-sm:mt-[90px] max-xl:px-5 max-w-[1200px]",children:[e.jsxs("div",{children:[e.jsx(g,{normalTitle:"About Pepe Respect.white",gradientTitle:"About Pepe Respect.gradient",subtitle:"Mint a NFT. Complete the test. Claim your PR and hold your Bitcoin!"}),e.jsxs("div",{className:"flex max-xl:flex-col-reverse items-center border-white/20 bg-[#11183D]/60 mt-[60px] max-xl:mt-12 p-8 max-xl:p-8 border rounded-2xl",children:[e.jsx("div",{className:"fadeLeft",children:G2.map(o=>e.jsxs("div",{className:"flex items-start mb-8 max-xl:mb-6 last:mb-0",children:[e.jsx("img",{src:q2,alt:"Prefix",className:"w-6 shrink-0"}),e.jsx("span",{className:"ml-4 text-lg/8 text-white max-md:text-base",children:t(o)})]},o))}),e.jsx("img",{src:z2,alt:"Respest",className:"max-xl:mb-8 ml-20 max-xl:ml-0 w-full max-w-[498px] fadeRight"})]})]}),e.jsxs("div",{className:"mt-[120px] max-xl:mt-[90px]",children:[e.jsx("div",{className:"m-auto max-w-[1000px]",children:e.jsx(g,{normalTitle:"About Pepe Paper.white",gradientTitle:"About Pepe Paper.gradient",subtitle:"Pepe Paper is the NFT. Each Pepe Paper is uniquely coded with 10 PR the token in it. Players need to finish the test to unlock the inherent 10 PR. The test questions cover many aspects of bitcoin, and the number of questions is randomly generated between 1 and 210"})}),e.jsxs("div",{className:"flex max-lg:flex-col justify-between max-lg:justify-start items-center mt-[60px]",children:[e.jsxs("div",{className:"flex flex-col max-lg:items-center fadeLeft",children:[e.jsxs("div",{className:"flex max-xl:flex-col flex-wrap items-center",children:[e.jsx(f,{data:q,detail:"Total NFTs minted",className:"max-lg:items-center mr-5 max-xl:mr-0 mb-10 max-lg:mb-6"}),e.jsx(f,{data:m(k),symbol:"USDT",detail:"Last mint price",className:"max-lg:items-center mb-10 max-lg:mb-6"})]}),e.jsx(f,{data:m(z),symbol:"USDT",detail:"Total mint volume",className:"max-lg:items-center"}),e.jsx(u,{link:!0,to:"mint-guide",text:"Mint Now",className:"mt-[60px] max-lg:mt-10"})]}),e.jsxs("div",{className:"flex max-md:flex-col max-lg:justify-between items-center border-white/20 bg-gradient-to-br from-[#11183D]/60 from-[46.93%] to-[#0C2298]/60 to-[94.25%] max-lg:mt-[60px] max-md:px-[50.5px] max-md:py-8 p-8 border rounded-2xl max-lg:w-full fadeRight shrink-0",children:[e.jsx("img",{src:F2,alt:"Poker",className:"mr-8 w-[250px] shrink-0"}),e.jsxs("div",{className:"max-md:flex max-md:flex-col max-md:items-center max-md:mt-8 w-[306px]",children:[e.jsxs("div",{className:"flex items-center",children:[e.jsx("i",{className:"bg-gradient-to-r from-[#141AAD] to-[#9737A6] rounded-full w-12 h-12"}),e.jsxs("div",{className:"flex flex-col ml-5 text-lg tracking-wide",children:[e.jsx("h3",{className:"font-semibold text-white",children:t("Pepe respect")}),e.jsxs("span",{className:"text-[#8E8E8E]",children:[G,"+ ",t("artwork")]})]})]}),e.jsx(f,{isEstimateUsdt:!0,weth:M,data:m(V(M)),symbol:Z,detail:"Best offer",className:"max-md:items-center mt-8"}),e.jsx(f,{data:m(O),symbol:"ETH",detail:"24h Average price",className:"max-md:items-center mt-5"}),e.jsxs(u,{link:!0,to:`https://opensea.io/collection/${E}`,target:"_blank",type:"secondary",className:"mt-8",children:[e.jsx("span",{className:"bg-clip-text bg-gradient-to-r from-[#141AAD] to-[#9737A6] font-semibold text-base text-transparent tracking-[0.35px]",children:"Marketplace"}),e.jsx("img",{src:T2,alt:"Arrow Right",className:"ml-[10px] w-6 shrink-0"})]})]})]})]})]}),e.jsxs("div",{className:"mt-[154px] max-xl:mt-[90px]",children:[e.jsx(g,{normalTitle:"Make a test all about Bitcoin.white",gradientTitle:"Make a test all about Bitcoin.gradient"}),e.jsxs("div",{className:"relative max-xl:flex max-xl:flex-col justify-end max-xl:justify-center items-center gap-y-8 max-xl:gap-0 grid grid-cols-[repeat(1,minmax(0,488px))] mt-[60px] max-md:mt-6",children:[e.jsx("img",{src:H2,alt:"Bitcoin",className:"-left-[69px] max-xl:static absolute max-xl:mb-12 max-md:w-full max-w-[712px] fadeLeft"}),Z2.map((o,j)=>e.jsx(p2,{index:j,text:o},o))]})]})]}),e.jsx("div",{className:"mt-[120px]",children:e.jsxs("div",{className:"mx-auto max-xl:px-5 max-w-[1200px]",children:[e.jsxs("div",{className:"flex flex-col items-center",children:[e.jsxs("div",{className:"relative z-10 flex flex-col items-center max-w-[576px]",children:[e.jsx(g,{normalTitle:"Exchange Anytime.white",gradientTitle:"Exchange Anytime.gradient",subtitle:"Transfer your PR to forgone USDT contract, USDT will be exchanged and sent to you at the rate of current PR minting price"}),e.jsx(u,{text:"Transfer  "+t("BTCM"),className:"mt-8 max-lg:mt-8",onClick:X})]}),e.jsxs("div",{className:"flex max-md:flex-col items-center mt-[60px] max-md:mt-12 max-sm:w-full",children:[e.jsxs("div",{className:"relative bg-gradient-to-b from-[#61BDFE] via-[#23D8AD] via-[19%] to-[#4F0F90] mr-5 max-md:mr-0 p-px rounded-lg w-[388px] max-sm:w-full fadeLeft",children:[e.jsx("i",{className:"-top-[203px] max-sm:-top-[238px] -left-[249px] max-sm:-left-[250px] absolute bg-[radial-gradient(50%_50%_at_50%_50%,rgba(35,216,173,.2),transparent)] w-[537px] h-[537px]"}),e.jsxs("div",{className:"relative flex flex-col bg-gradient-to-r from-[#0C144A] to-[#010312] p-6 rounded-lg",children:[e.jsx(w,{text:"Remaining for one-way exchange",data:m(v.usable)}),e.jsx(w,{text:"Totally has been exchanged one-way",data:m(v.used)})]})]}),e.jsxs("div",{className:"relative bg-gradient-to-b from-[#61BDFE] via-[#23D8AD] via-[19%] to-[#4F0F90] max-md:mt-6 p-px rounded-lg w-[388px] max-sm:w-full fadeRight",children:[e.jsx("i",{className:"-top-[42px] max-sm:-top-[27px] left-[119px] max-sm:left-0 absolute bg-[radial-gradient(50%_50%_at_50%_50%,rgba(151,55,166,.2),transparent)] w-[537px] h-[537px]"}),e.jsxs("div",{className:"relative flex flex-col bg-gradient-to-r from-[#0C144A] to-[#010312] p-6 rounded-lg",children:[e.jsx(w,{text:"Available for adding liquidity",data:m(h.addableUSD)}),e.jsx(w,{text:"Totally has been sent to Uniswap",data:m(h.added)})]})]})]})]}),e.jsxs("div",{className:"hidden relative z-10 flex max-lg:flex-col justify-between items-center border-white/60 bg-gradient-to-r from-[#0C144A] to-[#010312] mt-[90px] max-lg:mt-[90px] px-8 max-lg:px-5 py-6 border rounded-3xl",children:[e.jsx("span",{className:"font-light text-lg text-white",children:t("Exchange your PR on Uniswap. Before that, add liquidity of recovered PR and forgone USDT to Uniswap.")}),e.jsx(u,{text:"Add liquidity",className:"hidden max-lg:mt-6",disabled:!$||r,isLoading:r,onClick:J})]}),e.jsxs("div",{className:"flex max-xl:flex-col-reverse justify-between items-start max-xl:items-center mt-[50px] h-[450px] max-xl:h-auto overflow-hidden max-sm:overflow-visible",children:[e.jsxs("div",{className:"relative fadeLeft",children:[e.jsx("iframe",{id:"dextswap-aggregator-widget",title:"DEXTswap Aggregator",className:"max-xl:mt-8 w-[550px] max-sm:w-full max-sm:min-w-[360px] h-[550px]",src:"https://www.dextools.io/widget-aggregator/cn/swap/arbitrum/0xe9f5a048103293aeeb05f1d986bb91ef38410d8e"}),e.jsx("span",{className:"top-3 max-xl:top-11 right-24 max-sm:right-2 absolute text-red-500 text-xs",children:t("Switch to KyberSwap before exchange")})]}),e.jsx("iframe",{id:"dextools-widget",title:"DEXTools Trading Chart",className:"w-[618px] max-sm:w-full max-sm:min-w-[360px] h-full max-sm:h-[300px] max-xl:h-[450px] fadeRight",src:"https://www.dextools.io/widget-chart/cn/arbitrum/pe-light/0x19E3C834E96a08a9806C9fD2A4628C4ac5C852cd?theme=dark&chartType=1&chartResolution=15&drawingToolbars=true"})]})]})})]})]}),e.jsxs("div",{className:"flex max-lg:flex-col justify-between items-center border-white mt-[120px] max-lg:mt-[90px] px-[120px] max-lg:px-5 pt-8 max-lg:pt-8 pb-[60px] max-lg:pb-[60px] border-t",children:[e.jsxs("div",{className:"max-lg:flex max-lg:flex-col max-lg:items-center",children:[e.jsxs("div",{className:"flex items-center",children:[e.jsx("img",{src:h2,alt:"Logo",className:"mr-3 w-10 shrink-0"}),e.jsx("span",{className:"font-medium text-2xl text-white",children:t("BITCOIN MISSION")})]}),e.jsx("div",{className:"flex items-center mt-8",children:V2.map(o=>e.jsx("a",{href:o.url,target:"_blank",rel:"noreferrer",className:"mr-4 last:mr-0",children:e.jsx("img",{src:o.logo,alt:"Media",className:"w-8"})},o.logo))})]}),e.jsxs("div",{className:"flex flex-col bg-[#11183D] max-lg:mt-8 px-6 py-5 rounded-lg max-lg:max-w-full text-lg",children:[e.jsxs("div",{className:"flex items-center",children:[e.jsx("span",{className:"mr-4 font-thin text-white",children:t("Donation for BTC")}),e.jsx("img",{src:P,alt:"QuestionMark",className:"hover:opacity-70 active:opacity-50 w-6 cursor-pointer shrink-0",onClick:()=>y(t("The donated BTC will be used for PP's ecosystem development in the future."))})]}),e.jsxs("div",{className:"flex justify-between items-center hover:opacity-70 active:opacity-50 mt-2 cursor-pointer",onClick:()=>A("bc1qz78s0nzku0mkmwq9xj5t0cg0puzjhvyph5r6ak"),children:[e.jsx("span",{className:"mr-4 font-thin text-base text-white max-sm:break-all",children:"bc1qz78s0nzku0mkmwq9xj5t0cg0puzjhvyph5r6ak"}),e.jsx("img",{src:R,alt:"Copy",className:"w-6 shrink-0"})]}),e.jsxs("div",{className:"flex items-center",children:[e.jsx("span",{className:"mr-4 font-medium text-white",children:t("Donation for PP")}),e.jsx("img",{src:P,alt:"QuestionMark",className:"hover:opacity-70 active:opacity-50 w-6 cursor-pointer shrink-0",onClick:()=>y(t("The donated PP will be used for BTC's ecosystem development in the future."))})]}),e.jsxs("div",{className:"flex justify-between items-center hover:opacity-70 active:opacity-50 mt-2 cursor-pointer",onClick:()=>A("0xd8971e18b160c60cC5a9DE59e3d56AD05F198e90"),children:[e.jsx("span",{className:"mr-4 font-thin text-base text-white max-sm:break-all",children:"0xd8971e18b160c60cC5a9DE59e3d56AD05F198e90"}),e.jsx("img",{src:R,alt:"Copy",className:"w-6 shrink-0"})]})]})]}),e.jsx(u2,{lastPrice:k,maxAmount:v.usable,open:s,onClose:Y,onSubmitted:L}),e.jsx(f2,{text:F,onClose:()=>y(void 0)})]})}export{d0 as default};
