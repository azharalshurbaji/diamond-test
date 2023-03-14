import{j as V,u as d,t as T,i as k,c as A,k as N,o as L,b as P,A as R,M as w,V as M}from"./VImg.f70474b3.js";import{h as I,f as l,a as v,I as D,m as S,t as _,q as X,aD as Y,al as j,w as q,ah as H,k as x,J,a9 as z}from"./index.d4fe3a41.js";import{a as E,b as F,c as G}from"./layout.12359a0c.js";import{u as K}from"./ssrBoot.cd1b2803.js";const C=I()({name:"VToolbarTitle",props:{text:String,...V()},setup(e,a){let{slots:t}=a;return d(()=>{var s;const n=!!(t.default||t.text||e.text);return l(e.tag,{class:"v-toolbar-title"},{default:()=>[n&&l("div",{class:"v-toolbar-title__placeholder"},[t.text?t.text():e.text,(s=t.default)==null?void 0:s.call(t)])]})}),{}}}),Z=v({name:"VAppBarTitle",props:{...C.props},setup(e,a){let{slots:t}=a;return d(()=>l(C,{class:"v-app-bar-title"},t)),{}}});const p=v({name:"VBadge",inheritAttrs:!1,props:{bordered:Boolean,color:String,content:[Number,String],dot:Boolean,floating:Boolean,icon:D,inline:Boolean,label:{type:String,default:"$vuetify.badge"},max:[Number,String],modelValue:{type:Boolean,default:!0},offsetX:[Number,String],offsetY:[Number,String],textColor:String,...T({location:"top end"}),...k(),...V(),...S(),...A({transition:"scale-rotate-transition"})},setup(e,a){const{backgroundColorClasses:t,backgroundColorStyles:s}=N(_(e,"color")),{roundedClasses:n}=L(e),{t:i}=X(),{textColorClasses:r,textColorStyles:b}=P(_(e,"textColor")),{themeClasses:f}=Y(),{locationStyles:g}=R(e,!0,o=>{var u,c;return(e.floating?e.dot?2:4:e.dot?8:12)+(["top","bottom"].includes(o)?+((u=e.offsetY)!=null?u:0):["left","right"].includes(o)?+((c=e.offsetX)!=null?c:0):0)});return d(()=>{var o,y,u,c;const m=Number(e.content),h=!e.max||isNaN(m)?e.content:m<=e.max?m:`${e.max}+`,[$,B]=j(a.attrs,["aria-atomic","aria-label","aria-live","role","title"]);return l(e.tag,x({class:["v-badge",{"v-badge--bordered":e.bordered,"v-badge--dot":e.dot,"v-badge--floating":e.floating,"v-badge--inline":e.inline}]},B),{default:()=>[l("div",{class:"v-badge__wrapper"},[(o=(y=a.slots).default)==null?void 0:o.call(y),l(w,{transition:e.transition},{default:()=>[q(l("span",x({class:["v-badge__badge",f.value,t.value,n.value,r.value],style:[s.value,b.value,e.inline?{}:g.value],"aria-atomic":"true","aria-label":i(e.label,m),"aria-live":"polite",role:"status"},$),[e.dot?void 0:a.slots.badge?(u=(c=a.slots).badge)==null?void 0:u.call(c):e.icon?l(M,{icon:e.icon},null):h]),[[H,e.modelValue]])]})])]})}),{}}});const ee=v({name:"VMain",props:{scrollable:Boolean,...V({tag:"main"})},setup(e,a){let{slots:t}=a;const{mainStyles:s}=E(),{ssrBootStyles:n}=K();return d(()=>{var i,r;return l(e.tag,{class:["v-main",{"v-main--scrollable":e.scrollable}],style:[s.value,n.value]},{default:()=>[e.scrollable?l("div",{class:"v-main__scroller"},[(i=t.default)==null?void 0:i.call(t)]):(r=t.default)==null?void 0:r.call(t)]})}),{}}});const te=v({name:"VApp",props:{...F({fullHeight:!0}),...S()},setup(e,a){let{slots:t}=a;const s=J(e),{layoutClasses:n,layoutStyles:i,getLayoutItem:r,items:b,layoutRef:f}=G(e),{rtlClasses:g}=z();return d(()=>{var o;return l("div",{ref:f,class:["v-application",s.themeClasses.value,n.value,g.value],style:i.value},[l("div",{class:"v-application__wrap"},[(o=t.default)==null?void 0:o.call(t)])])}),{getLayoutItem:r,items:b,theme:s}}});export{C as V,Z as a,p as b,ee as c,te as d};
