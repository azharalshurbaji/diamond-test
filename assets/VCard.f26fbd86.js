import{V as F,a as H,b as J}from"./VCardText.5ee38f1f.js";import{c as N}from"./createSimpleFunctional.89af850c.js";import{a as A,I as v,f as t,m as O,J as G,c as h,w as K,j as M}from"./index.d4fe3a41.js";import{m as S,u as P,d as y,R as Q,g as U,s as W,h as X,q as Y,t as Z,v as ee,i as ae,w as te,j as ne,x as le,l as se,y as ie,a as de,z as oe,n as ce,r as ue,A as re,B as ve,o as me,C as fe,e as ge,L as be,D as ke}from"./VImg.f70474b3.js";import{V as p}from"./VAvatar.b7407acc.js";const ye=N("v-card-subtitle"),Ie=A({name:"VCardItem",props:{appendAvatar:String,appendIcon:v,prependAvatar:String,prependIcon:v,subtitle:String,title:String,...S()},setup(e,m){let{slots:n}=m;return P(()=>{var a,i,d,o,c;const f=!!(e.prependAvatar||e.prependIcon||n.prepend),g=!!(e.appendAvatar||e.appendIcon||n.append),b=!!(e.title||n.title),k=!!(e.subtitle||n.subtitle);return t("div",{class:"v-card-item"},[f&&t(y,{key:"prepend",defaults:{VAvatar:{density:e.density,icon:e.prependIcon,image:e.prependAvatar},VIcon:{density:e.density,icon:e.prependIcon}}},{default:()=>{var l;return[t("div",{class:"v-card-item__prepend"},[(l=(a=n.prepend)==null?void 0:a.call(n))!=null?l:t(p,null,null)])]}}),t("div",{class:"v-card-item__content"},[b&&t(F,{key:"title"},{default:()=>{var l;return[(l=(i=n.title)==null?void 0:i.call(n))!=null?l:e.title]}}),k&&t(ye,{key:"subtitle"},{default:()=>{var l;return[(l=(d=n.subtitle)==null?void 0:d.call(n))!=null?l:e.subtitle]}}),(o=n.default)==null?void 0:o.call(n)]),g&&t(y,{key:"append",defaults:{VAvatar:{density:e.density,icon:e.appendIcon,image:e.appendAvatar},VIcon:{density:e.density,icon:e.appendIcon}}},{default:()=>{var l;return[t("div",{class:"v-card-item__append"},[(l=(c=n.append)==null?void 0:c.call(n))!=null?l:t(p,null,null)])]}})])}),{}}}),Se=A({name:"VCard",directives:{Ripple:Q},props:{appendAvatar:String,appendIcon:v,disabled:Boolean,flat:Boolean,hover:Boolean,image:String,link:{type:Boolean,default:void 0},prependAvatar:String,prependIcon:v,ripple:Boolean,subtitle:String,text:String,title:String,...O(),...U(),...S(),...W(),...X(),...Y(),...Z(),...ee(),...ae(),...te(),...ne(),...le({variant:"elevated"})},setup(e,m){let{attrs:n,slots:a}=m;const{themeClasses:i}=G(e),{borderClasses:d}=se(e),{colorClasses:o,colorStyles:c,variantClasses:f}=ie(e),{densityClasses:g}=de(e),{dimensionStyles:b}=oe(e),{elevationClasses:k}=ce(e),{loaderClasses:l}=ue(e),{locationStyles:_}=re(e),{positionClasses:x}=ve(e),{roundedClasses:L}=me(e),u=fe(e,n),T=h(()=>e.link!==!1&&u.isLink.value),r=h(()=>!e.disabled&&e.link!==!1&&(e.link||u.isClickable.value));return P(()=>{var I,C,V;const $=T.value?"a":e.tag,B=!!(a.title||e.title),D=!!(a.subtitle||e.subtitle),R=B||D,w=!!(a.append||e.appendAvatar||e.appendIcon),j=!!(a.prepend||e.prependAvatar||e.prependIcon),E=!!(a.image||e.image),q=R||j||w,z=!!(a.text||e.text);return K(t($,{class:["v-card",{"v-card--disabled":e.disabled,"v-card--flat":e.flat,"v-card--hover":e.hover&&!(e.disabled||e.flat),"v-card--link":r.value},i.value,d.value,o.value,g.value,k.value,l.value,x.value,L.value,f.value],style:[c.value,b.value,_.value],href:u.href.value,onClick:r.value&&u.navigate,tabindex:e.disabled?-1:void 0},{default:()=>[E&&t(y,{key:"image",defaults:{VImg:{cover:!0,src:e.image}}},{default:()=>{var s;return[t("div",{class:"v-card__image"},[(s=(I=a.image)==null?void 0:I.call(a))!=null?s:t(ge,null,null)])]}}),t(be,{name:"v-card",active:!!e.loading,color:typeof e.loading=="boolean"?void 0:e.loading},{default:a.loader}),q&&t(Ie,{key:"item",prependAvatar:e.prependAvatar,prependIcon:e.prependIcon,title:e.title,subtitle:e.subtitle,appendAvatar:e.appendAvatar,appendIcon:e.appendIcon},{default:a.item,prepend:a.prepend,title:a.title,subtitle:a.subtitle,append:a.append}),z&&t(H,{key:"text"},{default:()=>{var s;return[(s=(C=a.text)==null?void 0:C.call(a))!=null?s:e.text]}}),(V=a.default)==null?void 0:V.call(a),a.actions&&t(J,null,{default:a.actions}),ke(r.value,"v-card")]}),[[M("ripple"),r.value]])}),{}}});export{Se as V,ye as a,Ie as b};
