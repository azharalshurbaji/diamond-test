import{p as J,r as C,c as x,l as Se,Q as F,a6 as K,ad as Y,at as Le,N as le,O as M,au as se,ae as H,S as Te,V as _e,av as Fe,a2 as _,aw as ue,ax as Re,Z as Be,Y as ke,b as Me,am as pe,R as He,m as Ne,h as Ie,u as Ve,J as We,a9 as $e,t as je,f as B,k as q,ay as X,az as ze,w as De,ah as qe,j as Ue,F as Ye,al as Ge,aa as Qe}from"./index.d4fe3a41.js";import{m as Ze,u as Je}from"./delay.2fa350fe.js";import{N as fe,O as ee,P as te,Q as ve,S as de,s as Ke,c as Xe,k as et,z as tt,T as nt,U as ot,u as at,M as it}from"./VImg.f70474b3.js";import{m as rt,u as lt}from"./lazy.794534cf.js";import{B as ne,g as me,n as st,a as ct,s as ut}from"./forwardRefs.54bb1675.js";function Oe(e){if(typeof e.getRootNode!="function"){for(;e.parentNode;)e=e.parentNode;return e!==document?null:document}const t=e.getRootNode();return t!==document&&t.getRootNode({composed:!0})!==document?null:t}function ft(e){for(;e;){if(ce(e))return e;e=e.parentElement}return document.scrollingElement}function Q(e,t){const n=[];if(t&&e&&!t.contains(e))return n;for(;e&&(ce(e)&&n.push(e),e!==t);)e=e.parentElement;return n}function ce(e){if(!e||e.nodeType!==Node.ELEMENT_NODE)return!1;const t=window.getComputedStyle(e);return t.overflowY==="scroll"||t.overflowY==="auto"&&e.scrollHeight>e.clientHeight}function vt(e){for(;e;){if(window.getComputedStyle(e).position==="fixed")return!0;e=e.offsetParent}return!1}const dt=Symbol.for("vuetify:v-menu"),mt=J({activator:[String,Object],activatorProps:{type:Object,default:()=>({})},openOnClick:{type:Boolean,default:void 0},openOnHover:Boolean,openOnFocus:{type:Boolean,default:void 0},closeOnContentClick:Boolean,...Ze()},"v-overlay-activator");function yt(e,t){let{isActive:n,isTop:o}=t;const i=C();let c=!1,r=!1,l=!0;const u=x(()=>e.openOnFocus||e.openOnFocus==null&&e.openOnHover),f=x(()=>e.openOnClick||e.openOnClick==null&&!e.openOnHover&&!u.value),{runOpenDelay:s,runCloseDelay:h}=Je(e,a=>{a===(e.openOnHover&&c||u.value&&r)&&!(e.openOnHover&&n.value&&!o.value)&&(n.value!==a&&(l=!0),n.value=a)}),b={click:a=>{a.stopPropagation(),i.value=a.currentTarget||a.target,n.value=!n.value},mouseenter:a=>{c=!0,i.value=a.currentTarget||a.target,s()},mouseleave:a=>{c=!1,h()},focus:a=>{Te&&!a.target.matches(":focus-visible")||(r=!0,a.stopPropagation(),i.value=a.currentTarget||a.target,s())},blur:a=>{r=!1,a.stopPropagation(),h()}},S=x(()=>{const a={};return f.value&&(a.click=b.click),e.openOnHover&&(a.mouseenter=b.mouseenter,a.mouseleave=b.mouseleave),u.value&&(a.focus=b.focus,a.blur=b.blur),a}),y=x(()=>{const a={};if(e.openOnHover&&(a.mouseenter=()=>{c=!0,s()},a.mouseleave=()=>{c=!1,h()}),e.closeOnContentClick){const N=Se(dt,null);a.click=()=>{n.value=!1,N==null||N.closeParents()}}return a}),v=x(()=>{const a={};return e.openOnHover&&(a.mouseenter=()=>{l&&(c=!0,l=!1,s())},a.mouseleave=()=>{c=!1,h()}),a});F(o,a=>{a&&(e.openOnHover&&!c&&(!u.value||!r)||u.value&&!r&&(!e.openOnHover||!c))&&(n.value=!1)});const P=C();K(()=>{!P.value||Y(()=>{const a=P.value;i.value=Le(a)?a.$el:a})});const O=le("useActivator");let E;return F(()=>!!e.activator,a=>{a&&M?(E=se(),E.run(()=>{gt(e,O,{activatorEl:i,activatorEvents:S})})):E&&E.stop()},{flush:"post",immediate:!0}),H(()=>{var a;(a=E)==null||a.stop()}),{activatorEl:i,activatorRef:P,activatorEvents:S,contentEvents:y,scrimEvents:v}}function gt(e,t,n){let{activatorEl:o,activatorEvents:i}=n;F(()=>e.activator,(u,f)=>{if(f&&u!==f){const s=l(f);s&&r(s)}u&&Y(()=>c())},{immediate:!0}),F(()=>e.activatorProps,()=>{c()}),H(()=>{r()});function c(){let u=arguments.length>0&&arguments[0]!==void 0?arguments[0]:l(),f=arguments.length>1&&arguments[1]!==void 0?arguments[1]:e.activatorProps;!u||(Object.entries(i.value).forEach(s=>{let[h,b]=s;u.addEventListener(h,b)}),Object.keys(f).forEach(s=>{f[s]==null?u.removeAttribute(s):u.setAttribute(s,f[s])}))}function r(){let u=arguments.length>0&&arguments[0]!==void 0?arguments[0]:l(),f=arguments.length>1&&arguments[1]!==void 0?arguments[1]:e.activatorProps;!u||(Object.entries(i.value).forEach(s=>{let[h,b]=s;u.removeEventListener(h,b)}),Object.keys(f).forEach(s=>{u.removeAttribute(s)}))}function l(){var u;let f=arguments.length>0&&arguments[0]!==void 0?arguments[0]:e.activator,s;if(f)if(f==="parent"){var h,b;let S=t==null||(h=t.proxy)==null||(b=h.$el)==null?void 0:b.parentNode;for(;S.hasAttribute("data-no-activator");)S=S.parentNode;s=S}else typeof f=="string"?s=document.querySelector(f):"$el"in f?s=f.$el:s=f;return o.value=((u=s)==null?void 0:u.nodeType)===Node.ELEMENT_NODE?s:null,o.value}}function oe(e,t){return{x:e.x+t.x,y:e.y+t.y}}function ht(e,t){return{x:e.x-t.x,y:e.y-t.y}}function ye(e,t){if(e.side==="top"||e.side==="bottom"){const{side:n,align:o}=e,i=o==="left"?0:o==="center"?t.width/2:o==="right"?t.width:o,c=n==="top"?0:n==="bottom"?t.height:n;return oe({x:i,y:c},t)}else if(e.side==="left"||e.side==="right"){const{side:n,align:o}=e,i=n==="left"?0:n==="right"?t.width:n,c=o==="top"?0:o==="center"?t.height/2:o==="bottom"?t.height:o;return oe({x:i,y:c},t)}return oe({x:t.width/2,y:t.height/2},t)}const xe={static:Et,connected:kt},bt=J({locationStrategy:{type:[String,Function],default:"static",validator:e=>typeof e=="function"||e in xe},location:{type:String,default:"bottom"},origin:{type:String,default:"auto"},offset:[Number,String,Array]},"v-overlay-location-strategies");function wt(e,t){const n=C({}),o=C();let i;K(async()=>{var r;(r=i)==null||r.stop(),o.value=void 0,M&&t.isActive.value&&e.locationStrategy&&(i=se(),e.locationStrategy!=="connected"&&await Y(),i.run(()=>{if(typeof e.locationStrategy=="function"){var l;o.value=(l=e.locationStrategy(t,e,n))==null?void 0:l.updateLocation}else{var u;o.value=(u=xe[e.locationStrategy](t,e,n))==null?void 0:u.updateLocation}}))}),M&&window.addEventListener("resize",c,{passive:!0}),H(()=>{var r;M&&window.removeEventListener("resize",c),o.value=void 0,(r=i)==null||r.stop()});function c(r){var l;(l=o.value)==null||l.call(o,r)}return{contentStyles:n,updateLocation:o}}function Et(){}function St(e){const t=st(e);return t.x-=parseFloat(e.style.left||0),t.y-=parseFloat(e.style.top||0),t}function kt(e,t,n){const o=vt(e.activatorEl.value);o&&Object.assign(n.value,{position:"fixed"});const{preferredAnchor:i,preferredOrigin:c}=_e(()=>{const y=fe(t.location,e.isRtl.value),v=t.origin==="overlap"?y:t.origin==="auto"?ee(y):fe(t.origin,e.isRtl.value);return y.side===v.side&&y.align===te(v).align?{preferredAnchor:ve(y),preferredOrigin:ve(v)}:{preferredAnchor:y,preferredOrigin:v}}),[r,l,u,f]=["minWidth","minHeight","maxWidth","maxHeight"].map(y=>x(()=>{const v=parseFloat(t[y]);return isNaN(v)?1/0:v})),s=x(()=>{if(Array.isArray(t.offset))return t.offset;if(typeof t.offset=="string"){const y=t.offset.split(" ").map(parseFloat);return y.length<2&&y.push(0),y}return typeof t.offset=="number"?[t.offset,0]:[0,0]});let h=!1;const b=new ResizeObserver(()=>{h&&S()});F([e.activatorEl,e.contentEl],(y,v)=>{let[P,O]=y,[E,a]=v;E&&b.unobserve(E),P&&b.observe(P),a&&b.unobserve(a),O&&b.observe(O)},{immediate:!0}),H(()=>{b.disconnect()});function S(){if(h=!1,requestAnimationFrame(()=>{requestAnimationFrame(()=>h=!0)}),!e.activatorEl.value||!e.contentEl.value)return;const y=e.activatorEl.value.getBoundingClientRect(),v=St(e.contentEl.value),P=Q(e.contentEl.value),O=12;P.length||(P.push(document.documentElement),e.contentEl.value.style.top&&e.contentEl.value.style.left||(v.x+=parseFloat(document.documentElement.style.getPropertyValue("--v-body-scroll-x")||0),v.y+=parseFloat(document.documentElement.style.getPropertyValue("--v-body-scroll-y")||0)));const E=P.reduce((k,w)=>{const d=w.getBoundingClientRect(),g=new ne({x:w===document.documentElement?0:d.x,y:w===document.documentElement?0:d.y,width:w.clientWidth,height:w.clientHeight});return k?new ne({x:Math.max(k.left,g.left),y:Math.max(k.top,g.top),width:Math.min(k.right,g.right)-Math.max(k.left,g.left),height:Math.min(k.bottom,g.bottom)-Math.max(k.top,g.top)}):g},void 0);E.x+=O,E.y+=O,E.width-=O*2,E.height-=O*2;let a={anchor:i.value,origin:c.value};function N(k){const w=new ne(v),d=ye(k.anchor,y),g=ye(k.origin,w);let{x:A,y:L}=ht(d,g);switch(k.anchor.side){case"top":L-=s.value[0];break;case"bottom":L+=s.value[0];break;case"left":A-=s.value[0];break;case"right":A+=s.value[0];break}switch(k.anchor.align){case"top":L-=s.value[1];break;case"bottom":L+=s.value[1];break;case"left":A-=s.value[1];break;case"right":A+=s.value[1];break}return w.x+=A,w.y+=L,w.width=Math.min(w.width,u.value),w.height=Math.min(w.height,f.value),{overflows:me(w,E),x:A,y:L}}let I=0,V=0;const W={x:0,y:0},j={x:!1,y:!1};let z=-1;for(;;){if(z++>10){Fe("Infinite loop detected in connectedLocationStrategy");break}const{x:k,y:w,overflows:d}=N(a);I+=k,V+=w,v.x+=k,v.y+=w;{const g=de(a.anchor),A=d.x.before||d.x.after,L=d.y.before||d.y.after;let $=!1;if(["x","y"].forEach(p=>{if(p==="x"&&A&&!j.x||p==="y"&&L&&!j.y){const m={anchor:{...a.anchor},origin:{...a.origin}},T=p==="x"?g==="y"?te:ee:g==="y"?ee:te;m.anchor=T(m.anchor),m.origin=T(m.origin);const{overflows:G}=N(m);(G[p].before<=d[p].before&&G[p].after<=d[p].after||G[p].before+G[p].after<(d[p].before+d[p].after)/2)&&(a=m,$=j[p]=!0)}}),$)continue}d.x.before&&(I+=d.x.before,v.x+=d.x.before),d.x.after&&(I-=d.x.after,v.x-=d.x.after),d.y.before&&(V+=d.y.before,v.y+=d.y.before),d.y.after&&(V-=d.y.after,v.y-=d.y.after);{const g=me(v,E);W.x=E.width-g.x.before-g.x.after,W.y=E.height-g.y.before-g.y.after,I+=g.x.before,v.x+=g.x.before,V+=g.y.before,v.y+=g.y.before}break}const R=de(a.anchor);Object.assign(n.value,{"--v-overlay-anchor-origin":`${a.anchor.side} ${a.anchor.align}`,transformOrigin:`${a.origin.side} ${a.origin.align}`,top:_(ge(V)),left:_(ge(I)),minWidth:_(R==="y"?Math.min(r.value,y.width):r.value),maxWidth:_(he(ue(W.x,r.value===1/0?0:r.value,u.value))),maxHeight:_(he(ue(W.y,l.value===1/0?0:l.value,f.value)))})}return F(()=>[i.value,c.value,t.offset,t.minWidth,t.minHeight,t.maxWidth,t.maxHeight],()=>S(),{immediate:!o}),o&&Y(()=>S()),requestAnimationFrame(()=>{n.value.maxHeight&&S()}),{updateLocation:S}}function ge(e){return Math.round(e*devicePixelRatio)/devicePixelRatio}function he(e){return Math.ceil(e*devicePixelRatio)/devicePixelRatio}let ae=!0;const Z=[];function pt(e){!ae||Z.length?(Z.push(e),ie()):(ae=!1,e(),ie())}let be=-1;function ie(){cancelAnimationFrame(be),be=requestAnimationFrame(()=>{const e=Z.shift();e&&e(),Z.length?ie():ae=!0})}const re={none:null,close:Pt,block:Ct,reposition:At},Ot=J({scrollStrategy:{type:[String,Function],default:"block",validator:e=>typeof e=="function"||e in re}},"v-overlay-scroll-strategies");function xt(e,t){if(!M)return;let n;K(async()=>{var o;(o=n)==null||o.stop(),t.isActive.value&&e.scrollStrategy&&(n=se(),await Y(),n.run(()=>{if(typeof e.scrollStrategy=="function")e.scrollStrategy(t,e);else{var i;(i=re[e.scrollStrategy])==null||i.call(re,t,e)}}))}),H(()=>{var o;(o=n)==null||o.stop()})}function Pt(e){var n;function t(o){e.isActive.value=!1}Pe((n=e.activatorEl.value)!=null?n:e.contentEl.value,t)}function Ct(e,t){var n;const o=(n=e.root.value)==null?void 0:n.offsetParent,i=[...new Set([...Q(e.activatorEl.value,t.contained?o:void 0),...Q(e.contentEl.value,t.contained?o:void 0)])].filter(l=>!l.classList.contains("v-overlay-scroll-blocked")),c=window.innerWidth-document.documentElement.offsetWidth,r=(l=>ce(l)&&l)(o||document.documentElement);r&&e.root.value.classList.add("v-overlay--scroll-blocked"),i.forEach((l,u)=>{l.style.setProperty("--v-body-scroll-x",_(-l.scrollLeft)),l.style.setProperty("--v-body-scroll-y",_(-l.scrollTop)),l.style.setProperty("--v-scrollbar-offset",_(c)),l.classList.add("v-overlay-scroll-blocked")}),H(()=>{i.forEach((l,u)=>{const f=parseFloat(l.style.getPropertyValue("--v-body-scroll-x")),s=parseFloat(l.style.getPropertyValue("--v-body-scroll-y"));l.style.removeProperty("--v-body-scroll-x"),l.style.removeProperty("--v-body-scroll-y"),l.style.removeProperty("--v-scrollbar-offset"),l.classList.remove("v-overlay-scroll-blocked"),l.scrollLeft=-f,l.scrollTop=-s}),r&&e.root.value.classList.remove("v-overlay--scroll-blocked")})}function At(e){var i;let t=!1,n=-1;function o(c){pt(()=>{var r,l;const u=performance.now();(r=(l=e.updateLocation).value)==null||r.call(l,c),t=(performance.now()-u)/(1e3/60)>2})}Pe((i=e.activatorEl.value)!=null?i:e.contentEl.value,c=>{t?(cancelAnimationFrame(n),n=requestAnimationFrame(()=>{n=requestAnimationFrame(()=>{o(c)})})):o(c)})}function Pe(e,t){const n=[document,...Q(e)];n.forEach(o=>{o.addEventListener("scroll",t,{passive:!0})}),H(()=>{n.forEach(o=>{o.removeEventListener("scroll",t)})})}function Lt(){if(!M)return C(!1);const{ssr:e}=Re();if(e){const t=C(!1);return Be(()=>{t.value=!0}),t}else return C(!0)}function Tt(){const t=le("useScopeId").vnode.scopeId;return{scopeId:t?{[t]:""}:void 0}}const we=Symbol.for("vuetify:stack"),D=ke([]);function _t(e,t,n){const o=le("useStack"),i=!n,c=Se(we,void 0),r=ke({activeChildren:new Set});Me(we,r);const l=C(+t.value);pe(e,()=>{var s;const h=(s=D.at(-1))==null?void 0:s[1];l.value=h?h+10:+t.value,i&&D.push([o.uid,l.value]),c==null||c.activeChildren.add(o.uid),H(()=>{if(i){const b=D.findIndex(S=>S[0]===o.uid);D.splice(b,1)}c==null||c.activeChildren.delete(o.uid)})});const u=C(!0);i&&K(()=>{var s;const h=((s=D.at(-1))==null?void 0:s[0])===o.uid;setTimeout(()=>u.value=h)});const f=x(()=>!r.activeChildren.size);return{globalTop:He(u),localTop:f,stackStyles:x(()=>({zIndex:l.value}))}}function U(e){return{teleportTarget:x(()=>{const n=e.value;if(n===!0||!M)return;const o=n===!1?document.body:typeof n=="string"?document.querySelector(n):n;if(o!=null){if(!U.cache.has(o)){const i=document.createElement("div");i.className="v-overlay-container",o.appendChild(i),U.cache.set(o,i)}return U.cache.get(o)}})}}U.cache=new WeakMap;function Ft(){return!0}function Ce(e,t,n){if(!e||Ae(e,n)===!1)return!1;const o=Oe(t);if(typeof ShadowRoot<"u"&&o instanceof ShadowRoot&&o.host===e.target)return!1;const i=(typeof n.value=="object"&&n.value.include||(()=>[]))();return i.push(t),!i.some(c=>c==null?void 0:c.contains(e.target))}function Ae(e,t){return(typeof t.value=="object"&&t.value.closeConditional||Ft)(e)}function Rt(e,t,n){const o=typeof n.value=="function"?n.value:n.value.handler;t._clickOutside.lastMousedownWasOutside&&Ce(e,t,n)&&setTimeout(()=>{Ae(e,n)&&o&&o(e)},0)}function Ee(e,t){const n=Oe(e);t(document),typeof ShadowRoot<"u"&&n instanceof ShadowRoot&&t(n)}const Bt={mounted(e,t){const n=i=>Rt(i,e,t),o=i=>{e._clickOutside.lastMousedownWasOutside=Ce(i,e,t)};Ee(e,i=>{i.addEventListener("click",n,!0),i.addEventListener("mousedown",o,!0)}),e._clickOutside||(e._clickOutside={lastMousedownWasOutside:!0}),e._clickOutside[t.instance.$.uid]={onClick:n,onMousedown:o}},unmounted(e,t){!e._clickOutside||(Ee(e,n=>{var o;if(!n||!((o=e._clickOutside)!=null&&o[t.instance.$.uid]))return;const{onClick:i,onMousedown:c}=e._clickOutside[t.instance.$.uid];n.removeEventListener("click",i,!0),n.removeEventListener("mousedown",c,!0)}),delete e._clickOutside[t.instance.$.uid])}};function Mt(e){const{modelValue:t,color:n,...o}=e;return B(Qe,{name:"fade-transition",appear:!0},{default:()=>[e.modelValue&&B("div",q({class:["v-overlay__scrim",e.color.backgroundColorClasses.value],style:e.color.backgroundColorStyles.value},o),null)]})}const Ht=J({absolute:Boolean,attach:[Boolean,String,Object],closeOnBack:{type:Boolean,default:!0},contained:Boolean,contentClass:null,contentProps:null,disabled:Boolean,noClickAnimation:Boolean,modelValue:Boolean,persistent:Boolean,scrim:{type:[String,Boolean],default:!0},zIndex:{type:[Number,String],default:2e3},...mt(),...Ke(),...rt(),...bt(),...Ot(),...Ne(),...Xe()},"v-overlay"),Nt=Ie()({name:"VOverlay",directives:{ClickOutside:Bt},inheritAttrs:!1,props:{_disableGlobalStack:Boolean,...Ht()},emits:{"click:outside":e=>!0,"update:modelValue":e=>!0,afterLeave:()=>!0},setup(e,t){let{slots:n,attrs:o,emit:i}=t;const c=Ve(e,"modelValue"),r=x({get:()=>c.value,set:m=>{m&&e.disabled||(c.value=m)}}),{teleportTarget:l}=U(x(()=>e.attach||e.contained)),{themeClasses:u}=We(e),{rtlClasses:f,isRtl:s}=$e(),{hasContent:h,onAfterLeave:b}=lt(e,r),S=et(x(()=>typeof e.scrim=="string"?e.scrim:null)),{globalTop:y,localTop:v,stackStyles:P}=_t(r,je(e,"zIndex"),e._disableGlobalStack),{activatorEl:O,activatorRef:E,activatorEvents:a,contentEvents:N,scrimEvents:I}=yt(e,{isActive:r,isTop:v}),{dimensionStyles:V}=tt(e),W=Lt(),{scopeId:j}=Tt();F(()=>e.disabled,m=>{m&&(r.value=!1)});const z=C(),R=C(),{contentStyles:k,updateLocation:w}=wt(e,{isRtl:s,contentEl:R,activatorEl:O,isActive:r});xt(e,{root:z,contentEl:R,activatorEl:O,isActive:r,updateLocation:w});function d(m){i("click:outside",m),e.persistent?p():r.value=!1}function g(){return r.value&&y.value}M&&F(r,m=>{m?window.addEventListener("keydown",A):window.removeEventListener("keydown",A)},{immediate:!0});function A(m){m.key==="Escape"&&y.value&&(e.persistent?p():r.value=!1)}const L=nt();pe(()=>e.closeOnBack,()=>{ot(L,m=>{y.value&&r.value?(m(!1),e.persistent?p():r.value=!1):m()})});const $=C();F(()=>r.value&&(e.absolute||e.contained)&&l.value==null,m=>{if(m){const T=ft(z.value);T&&T!==document.scrollingElement&&($.value=T.scrollTop)}});function p(){e.noClickAnimation||R.value&&ct(R.value,[{transformOrigin:"center"},{transform:"scale(1.03)"},{transformOrigin:"center"}],{duration:150,easing:ut})}return at(()=>{var m,T;return B(Ye,null,[(m=n.activator)==null?void 0:m.call(n,{isActive:r.value,props:q({ref:E},X(a.value),e.activatorProps)}),W.value&&B(ze,{disabled:!l.value,to:l.value},{default:()=>[h.value&&B("div",q({class:["v-overlay",{"v-overlay--absolute":e.absolute||e.contained,"v-overlay--active":r.value,"v-overlay--contained":e.contained},u.value,f.value],style:[P.value,{top:_($.value)}],ref:z},j,o),[B(Mt,q({color:S,modelValue:r.value&&!!e.scrim},X(I.value)),null),B(it,{appear:!0,persisted:!0,transition:e.transition,target:O.value,onAfterLeave:()=>{b(),i("afterLeave")}},{default:()=>[De(B("div",q({ref:R,class:["v-overlay__content",e.contentClass],style:[V.value,k.value]},X(N.value),e.contentProps),[(T=n.default)==null?void 0:T.call(n,{isActive:r})]),[[qe,r.value],[Ue("click-outside"),{handler:d,closeConditional:g,include:()=>[O.value]}]])]})])]})])}),{activatorEl:O,animateClick:p,contentEl:R,globalTop:y,localTop:v,updateLocation:w}}});function zt(e){return Ge(e,Object.keys(Nt.props))}export{dt as V,Nt as a,zt as f,Ht as m,Tt as u};
