import{K as oe,r as B,c as h,a2 as R,Z as Q,Q as N,P as G,aK as ne,a as le,m as ie,a9 as re,J as se,t as z,ax as ue,u as ce,ad as de,ag as ve,e as me,f as u,k as fe,aa as ge,F as he,v as U,x as we,aE as F,z as I,H as Y,C as M,s as ye,B as pe,D as be,aJ as ke,y as Se}from"./index.d4fe3a41.js";import{g as xe,h as _e,i as Me,j as Te,l as Ve,k as Z,n as Be,o as Ce,T as Ee,X as He,u as Le,_ as Pe,f as q,e as Re}from"./VImg.f70474b3.js";import{a as Ne,b as Ie,d as Ye,c as $e}from"./VApp.1b5e85e1.js";import{V as J}from"./VDivider.42182dd1.js";import{V as De,a as P}from"./VList.02c59198.js";import{m as We,u as Ae}from"./layout.12359a0c.js";import{u as Xe}from"./ssrBoot.cd1b2803.js";import"./index.41ec7963.js";import"./createSimpleFunctional.89af850c.js";import"./VAvatar.b7407acc.js";const Oe=oe("dashboard",{persist:!0,state:()=>({items:[]}),getters:{itemsCount(e){return e.items.length}},actions:{addToCart(e){this.items.push(e)},removeFromCart(e){this.items.splice(e,1)}}});function ze(e){let{rootEl:l,isSticky:c,layoutItemStyles:a}=e;const o=B(!1),t=B(0),d=h(()=>{const g=typeof o.value=="boolean"?"top":o.value;return[c.value?{top:"auto",bottom:"auto",height:void 0}:void 0,o.value?{[g]:R(t.value)}:{top:a.value.top}]});Q(()=>{N(c,g=>{g?window.addEventListener("scroll",S,{passive:!0}):window.removeEventListener("scroll",S)},{immediate:!0})}),G(()=>{document.removeEventListener("scroll",S)});let w=0;function S(){var _;const g=w>window.scrollY?"up":"down",i=l.value.getBoundingClientRect(),f=parseFloat((_=a.value.top)!=null?_:0),m=window.scrollY-Math.max(0,t.value-f),r=i.height+Math.max(t.value,f)-window.scrollY-window.innerHeight;i.height<window.innerHeight-f?(o.value="top",t.value=f):g==="up"&&o.value==="bottom"||g==="down"&&o.value==="top"?(t.value=window.scrollY+i.top,o.value=!0):g==="down"&&r<=0?(t.value=0,o.value="bottom"):g==="up"&&m<=0&&(t.value=i.top+m,o.value="top"),w=window.scrollY}return{isStuck:o,stickyStyles:d}}const Ue=100,Fe=20;function K(e){const l=1.41421356237;return(e<0?-1:1)*Math.sqrt(Math.abs(e))*l}function j(e){if(e.length<2)return 0;if(e.length===2)return e[1].t===e[0].t?0:(e[1].d-e[0].d)/(e[1].t-e[0].t);let l=0;for(let c=e.length-1;c>0;c--){if(e[c].t===e[c-1].t)continue;const a=K(l),o=(e[c].d-e[c-1].d)/(e[c].t-e[c-1].t);l+=(o-a)*Math.abs(o),c===e.length-1&&(l*=.5)}return K(l)*1e3}function Ze(){const e={};function l(o){Array.from(o.changedTouches).forEach(t=>{var w;((w=e[t.identifier])!=null?w:e[t.identifier]=new ne(Fe)).push([o.timeStamp,t])})}function c(o){Array.from(o.changedTouches).forEach(t=>{delete e[t.identifier]})}function a(o){var t;const d=(t=e[o])==null?void 0:t.values().reverse();if(!d)throw new Error(`No samples for touch id ${o}`);const w=d[0],S=[],g=[];for(const i of d){if(w[0]-i[0]>Ue)break;S.push({t:i[0],d:i[1].clientX}),g.push({t:i[0],d:i[1].clientY})}return{x:j(S),y:j(g),get direction(){const{x:i,y:f}=this,[m,r]=[Math.abs(i),Math.abs(f)];return m>r&&i>=0?"right":m>r&&i<=0?"left":r>m&&f>=0?"down":r>m&&f<=0?"up":qe()}}}return{addMovement:l,endTouch:c,getVelocity:a}}function qe(){throw new Error}function Je(e){let{isActive:l,isTemporary:c,width:a,touchless:o,position:t}=e;Q(()=>{window.addEventListener("touchstart",E,{passive:!0}),window.addEventListener("touchmove",V,{passive:!1}),window.addEventListener("touchend",b,{passive:!0})}),G(()=>{window.removeEventListener("touchstart",E),window.removeEventListener("touchmove",V),window.removeEventListener("touchend",b)});const d=h(()=>t.value!=="bottom"),{addMovement:w,endTouch:S,getVelocity:g}=Ze();let i=!1;const f=B(!1),m=B(0),r=B(0);let _;function C(n,s){return(t.value==="left"?n:t.value==="right"?document.documentElement.clientWidth-n:t.value==="bottom"?document.documentElement.clientHeight-n:H())-(s?a.value:0)}function T(n){let s=arguments.length>1&&arguments[1]!==void 0?arguments[1]:!0;const v=t.value==="left"?(n-r.value)/a.value:t.value==="right"?(document.documentElement.clientWidth-n-r.value)/a.value:t.value==="bottom"?(document.documentElement.clientHeight-n-r.value)/a.value:H();return s?Math.max(0,Math.min(1,v)):v}function E(n){if(o.value)return;const s=n.changedTouches[0].clientX,v=n.changedTouches[0].clientY,y=25,x=t.value==="left"?s<y:t.value==="right"?s>document.documentElement.clientWidth-y:t.value==="bottom"?v>document.documentElement.clientHeight-y:H(),p=l.value&&(t.value==="left"?s<a.value:t.value==="right"?s>document.documentElement.clientWidth-a.value:t.value==="bottom"?v>document.documentElement.clientHeight-a.value:H());(x||p||l.value&&c.value)&&(i=!0,_=[s,v],r.value=C(d.value?s:v,l.value),m.value=T(d.value?s:v),S(n),w(n))}function V(n){const s=n.changedTouches[0].clientX,v=n.changedTouches[0].clientY;if(i){if(!n.cancelable){i=!1;return}const x=Math.abs(s-_[0]),p=Math.abs(v-_[1]);(d.value?x>p&&x>3:p>x&&p>3)?(f.value=!0,i=!1):(d.value?p:x)>3&&(i=!1)}if(!f.value)return;n.preventDefault(),w(n);const y=T(d.value?s:v,!1);m.value=Math.max(0,Math.min(1,y)),y>1?r.value=C(d.value?s:v,!0):y<0&&(r.value=C(d.value?s:v,!1))}function b(n){if(i=!1,!f.value)return;w(n),f.value=!1;const s=g(n.changedTouches[0].identifier),v=Math.abs(s.x),y=Math.abs(s.y);(d.value?v>y&&v>400:y>v&&y>3)?l.value=s.direction===({left:"right",right:"left",bottom:"up"}[t.value]||H()):l.value=m.value>.5}const L=h(()=>f.value?{transform:t.value==="left"?`translateX(calc(-100% + ${m.value*a.value}px))`:t.value==="right"?`translateX(calc(100% - ${m.value*a.value}px))`:t.value==="bottom"?`translateY(calc(100% - ${m.value*a.value}px))`:H(),transition:"none"}:void 0);return{isDragging:f,dragProgress:m,dragStyles:L}}function H(){throw new Error}const Ke=["start","end","left","right","bottom"],je=le({name:"VNavigationDrawer",props:{color:String,disableResizeWatcher:Boolean,disableRouteWatcher:Boolean,expandOnHover:Boolean,floating:Boolean,modelValue:{type:Boolean,default:null},permanent:Boolean,rail:Boolean,railWidth:{type:[Number,String],default:56},scrim:{type:[String,Boolean],default:!0},image:String,temporary:Boolean,touchless:Boolean,width:{type:[Number,String],default:256},location:{type:String,default:"start",validator:e=>Ke.includes(e)},sticky:Boolean,...xe(),..._e(),...We(),...Me(),...Te({tag:"nav"}),...ie()},emits:{"update:modelValue":e=>!0},setup(e,l){let{attrs:c,slots:a}=l;const{isRtl:o}=re(),{themeClasses:t}=se(e),{borderClasses:d}=Ve(e),{backgroundColorClasses:w,backgroundColorStyles:S}=Z(z(e,"color")),{elevationClasses:g}=Be(e),{mobile:i}=ue(),{roundedClasses:f}=Ce(e),m=Ee(),r=ce(e,"modelValue",null,k=>!!k),{ssrBootStyles:_}=Xe(),C=B(),T=B(!1),E=h(()=>e.rail&&e.expandOnHover&&T.value?Number(e.width):Number(e.rail?e.railWidth:e.width)),V=h(()=>He(e.location,o.value)),b=h(()=>!e.permanent&&(i.value||e.temporary)),L=h(()=>e.sticky&&!b.value&&V.value!=="bottom");e.disableResizeWatcher||N(b,k=>!e.permanent&&de(()=>r.value=!k)),!e.disableRouteWatcher&&m&&N(m.currentRoute,()=>b.value&&(r.value=!1)),N(()=>e.permanent,k=>{k&&(r.value=!0)}),ve(()=>{e.modelValue!=null||b.value||(r.value=e.permanent||!i.value)});const{isDragging:n,dragProgress:s,dragStyles:v}=Je({isActive:r,isTemporary:b,width:E,touchless:z(e,"touchless"),position:V}),y=h(()=>{const k=b.value?0:e.rail&&e.expandOnHover?Number(e.railWidth):E.value;return n.value?k*s.value:k}),{layoutItemStyles:x,layoutRect:p,layoutItemScrimStyles:$}=Ae({id:e.name,order:h(()=>parseInt(e.order,10)),position:V,layoutSize:y,elementSize:E,active:h(()=>r.value||n.value),disableTransitions:h(()=>n.value),absolute:h(()=>e.absolute||L.value&&typeof D.value!="string")}),{isStuck:D,stickyStyles:ee}=ze({rootEl:C,isSticky:L,layoutItemStyles:x}),W=Z(h(()=>typeof e.scrim=="string"?e.scrim:null)),te=h(()=>({...n.value?{opacity:s.value*.2,transition:"none"}:void 0,...p.value?{left:R(p.value.left),right:R(p.value.right),top:R(p.value.top),bottom:R(p.value.bottom)}:void 0,...$.value}));return me({VList:{bgColor:"transparent"}}),Le(()=>{var k,A,X,O;const ae=a.image||e.image;return u(he,null,[u(e.tag,fe({ref:C,onMouseenter:()=>T.value=!0,onMouseleave:()=>T.value=!1,class:["v-navigation-drawer",`v-navigation-drawer--${V.value}`,{"v-navigation-drawer--expand-on-hover":e.expandOnHover,"v-navigation-drawer--floating":e.floating,"v-navigation-drawer--is-hovering":T.value,"v-navigation-drawer--rail":e.rail,"v-navigation-drawer--temporary":b.value,"v-navigation-drawer--active":r.value,"v-navigation-drawer--sticky":L.value},t.value,w.value,d.value,g.value,f.value],style:[S.value,x.value,v.value,_.value,ee.value]},c),{default:()=>[ae&&u("div",{key:"image",class:"v-navigation-drawer__img"},[a.image?(k=a.image)==null?void 0:k.call(a,{image:e.image}):u("img",{src:e.image,alt:""},null)]),a.prepend&&u("div",{class:"v-navigation-drawer__prepend"},[(A=a.prepend)==null?void 0:A.call(a)]),u("div",{class:"v-navigation-drawer__content"},[(X=a.default)==null?void 0:X.call(a)]),a.append&&u("div",{class:"v-navigation-drawer__append"},[(O=a.append)==null?void 0:O.call(a)])]}),u(ge,{name:"fade-transition"},{default:()=>[b.value&&(n.value||r.value)&&!!e.scrim&&u("div",{class:["v-navigation-drawer__scrim",W.backgroundColorClasses.value],style:[te.value,W.backgroundColorStyles.value],onClick:()=>r.value=!1},null)]})])}),{isStuck:D}}}),Qe={data(){return{drawer:!0,items:[{title:"Home",icon:"mdi-home-city"},{title:"My Account",icon:"mdi-account"},{title:"Users",icon:"mdi-account-group-outline"}],rail:!0}},computed:{...U(Oe,["itemsCount"]),...U(F,["isLoggedIn","user"])},methods:{...we(F,["logout"])}},Ge={class:"text-h6 text-white"};function et(e,l,c,a,o,t){return I(),Y(je,{modelValue:o.drawer,"onUpdate:modelValue":l[0]||(l[0]=d=>o.drawer=d),rail:o.rail,permanent:"",class:"bg-orange",onClick:l[1]||(l[1]=ke(d=>o.rail=!o.rail,["stop"]))},{append:M(()=>[e.isLoggedIn?(I(),Y(q,{key:0,variant:"text",icon:"mdi-logout",title:"Logout",to:"/",onClick:e.logout},null,8,["onClick"])):(I(),Y(q,{key:1,to:"/login",variant:"text",block:""},{default:M(()=>[ye(" Login ")]),_:1}))]),default:M(()=>[u(Ne,{class:"text-center"},{default:M(()=>[u(Re,{src:e.user.image,width:"90",class:"ma-1 rounded-circle bg-orange-lighten-4"},null,8,["src"]),pe("span",Ge,be(e.user.firstName+" "+e.user.lastName),1),u(J,{color:"red"})]),_:1}),u(J),u(De,{density:"compact",nav:""},{default:M(()=>[u(P,{exact:"","prepend-icon":"mdi-home",title:"Home",value:"Home",to:"/",class:"text-white"}),u(P,{exact:"","prepend-icon":"mdi-home-city",title:"Products Maneger",value:"Products Maneger",to:"/productsmaneger",class:"text-white"}),u(P,{"prepend-icon":"mdi-account",title:"My Account",value:"account",to:"/profile",class:"text-white"}),u(P,{"prepend-icon":"mdi-account-group-outline",title:"Users",value:"users",to:"/users",class:"text-white"}),u(P,{link:"","prepend-icon":"mdi-cart",title:"Cart Store",class:"text-white",to:"/dashboard"},{append:M(()=>[u(Ie,{color:"red",content:e.itemsCount},null,8,["content"])]),_:1})]),_:1})]),_:1},8,["modelValue","rail"])}const tt=Pe(Qe,[["render",et]]),vt={__name:"SideBar",setup(e){return(l,c)=>{const a=Se("router-view");return I(),Y(Ye,null,{default:M(()=>[u($e,null,{default:M(()=>[u(a)]),_:1}),u(tt)]),_:1})}}};export{vt as default};
