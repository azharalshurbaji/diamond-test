import{h as W,I as q,m as X,q as Y,J as Z,u as ee,c as p,aw as te,aB as ae,r as L,g as le,f as t,F as R,s as r,z as U,H as ne,v as oe,x as ie,y as se,A as re,C as n,D as g,B as d}from"./index.d4fe3a41.js";import{u as ue}from"./products.7306e997.js";import{m as ce,H as de,j as me,u as fe,f as w,_ as E,V as H}from"./VImg.f70474b3.js";import{c as ge}from"./cart.1ae7f2f2.js";import{V as j,a as k}from"./VRow.10b7e8a2.js";import{V as ve,a as _}from"./VCarouselItem.6d59bfc4.js";import{V as be,a as M,b as he}from"./VCardText.5ee38f1f.js";import{V as pe}from"./VDivider.42182dd1.js";import{V as _e}from"./VSnackbar.7ef1ea31.js";import{V as ye}from"./VSpacer.35208189.js";import"./VWindowItem.cf196b8a.js";import"./lazy.794534cf.js";import"./ssrBoot.cd1b2803.js";import"./createSimpleFunctional.89af850c.js";import"./VOverlay.0b37fa51.js";import"./delay.2fa350fe.js";import"./forwardRefs.54bb1675.js";const Ve=W()({name:"VRating",props:{name:String,itemAriaLabel:{type:String,default:"$vuetify.rating.ariaLabel.item"},activeColor:String,color:String,clearable:Boolean,disabled:Boolean,emptyIcon:{type:q,default:"$ratingEmpty"},fullIcon:{type:q,default:"$ratingFull"},halfIncrements:Boolean,hover:Boolean,length:{type:[Number,String],default:5},readonly:Boolean,modelValue:{type:[Number,String],default:0},itemLabels:Array,itemLabelPosition:{type:String,default:"top",validator:e=>["top","bottom"].includes(e)},ripple:Boolean,...ce(),...de(),...me(),...X()},emits:{"update:modelValue":e=>!0},setup(e,s){let{slots:v}=s;const{t:x}=Y(),{themeClasses:u}=Z(e),y=ee(e,"modelValue"),m=p(()=>te(parseFloat(y.value),0,+e.length)),b=p(()=>ae(Number(e.length),1)),F=p(()=>b.value.flatMap(a=>e.halfIncrements?[a-.5,a]:[a])),V=L(-1),$=L(-1),P=L();let D=!1;const I=p(()=>F.value.map(a=>{var S;const c=e.hover&&V.value>-1,o=m.value>=a,l=V.value>=a,f=(c?l:o)?e.fullIcon:e.emptyIcon,h=(S=e.activeColor)!=null?S:e.color,B=o||l?h:e.color;return{isFilled:o,isHovered:l,icon:f,color:B}})),J=p(()=>[0,...F.value].map(a=>{function c(){V.value=a}function o(){V.value=-1}function l(){if(a===0&&m.value===0){var h;(h=P.value)==null||h.focus()}else $.value=a}function i(){D||($.value=-1)}function f(){e.disabled||e.readonly||(y.value=m.value===a&&e.clearable?0:a)}return{onMouseenter:e.hover?c:void 0,onMouseleave:e.hover?o:void 0,onFocus:l,onBlur:i,onClick:f}}));function G(){D=!0}function K(){D=!1}const A=p(()=>{var a;return(a=e.name)!=null?a:`v-rating-${le()}`});function C(a){var c,o;let{value:l,index:i,showStar:f=!0}=a;const{onMouseenter:h,onMouseleave:B,onFocus:S,onBlur:O,onClick:Q}=J.value[i+1],N=`${A.value}-${String(l).replace(".","-")}`,z={color:(c=I.value[i])==null?void 0:c.color,density:e.density,disabled:e.disabled,icon:(o=I.value[i])==null?void 0:o.icon,ripple:e.ripple,size:e.size,tag:"span",variant:"plain"};return t(R,null,[t("label",{for:N,class:{"v-rating__item--half":e.halfIncrements&&l%1>0,"v-rating__item--full":e.halfIncrements&&l%1===0},onMousedown:G,onMouseup:K,onMouseenter:h,onMouseleave:B},[t("span",{class:"v-rating__hidden"},[x(e.itemAriaLabel,l,e.length)]),f?v.item?v.item({...I.value[i],props:z,value:l,index:i}):t(w,z,null):void 0]),t("input",{class:"v-rating__hidden",name:A.value,id:N,type:"radio",value:l,checked:m.value===l,onClick:Q,onFocus:S,onBlur:O,ref:i===0?P:void 0,readonly:e.readonly,disabled:e.disabled},null)])}function T(a){return v["item-label"]?v["item-label"](a):a.label?t("span",null,[a.label]):t("span",null,[r("\xA0")])}return fe(()=>{var a;const c=!!((a=e.itemLabels)!=null&&a.length)||v["item-label"];return t(e.tag,{class:["v-rating",{"v-rating--hover":e.hover,"v-rating--readonly":e.readonly},u.value]},{default:()=>[t(C,{value:0,index:-1,showStar:!1},null),b.value.map((o,l)=>{var i,f;return t("div",{class:"v-rating__wrapper"},[c&&e.itemLabelPosition==="top"?T({value:o,index:l,label:(i=e.itemLabels)==null?void 0:i[l]}):void 0,t("div",{class:["v-rating__item",{"v-rating__item--focused":Math.ceil($.value)===o}]},[e.halfIncrements?t(R,null,[t(C,{value:o-.5,index:l*2},null),t(C,{value:o,index:l*2+1},null)]):t(C,{value:o,index:l},null)]),c&&e.itemLabelPosition==="bottom"?T({value:o,index:l,label:(f=e.itemLabels)==null?void 0:f[l]}):void 0])})]})}),{}}}),Ce={data:()=>({rating:"3.5"})};function Se(e,s,v,x,u,y){return U(),ne(Ve,{modelValue:e.rating,"onUpdate:modelValue":s[0]||(s[0]=m=>e.rating=m),hover:"","half-increments":"",size:"20","active-color":"yellow-accent-4",color:"yellow"},null,8,["modelValue"])}const ke=E(Ce,[["render",Se]]),we={components:{RatingSection:ke},data(){return{alert:!0,snackbar:!1,text:"Add to cart Product ...",timeout:2e3}},computed:{...oe(ue,["productDetails"])},methods:{...ie(ge,["addToCart"])}},xe={class:"text-body-1"},$e={class:"text-h6 text-grey my-2"},De={class:"mb-2"},Ie={class:"text-body-2 font-weight-bold"},Be=d("p",{class:"font-weight-bold text-grey"}," price: ",-1),Le={class:"mt-2 text-h5 font-weight-bold"},Me={class:"text-center"},Re={class:"text-body-1"};function Fe(e,s,v,x,u,y){const m=se("RatingSection");return U(),re(R,null,[t(j,{justify:"center"},{default:n(()=>[t(k,{cols:"12"},{default:n(()=>[t(ve,{"show-arrows":"hover",height:"410",class:"bg-grey-lighten-2"},{default:n(()=>[t(_,{src:e.productDetails.images[0]},null,8,["src"]),t(_,{src:e.productDetails.images[1]},null,8,["src"]),t(_,{src:e.productDetails.images[2]},null,8,["src"]),t(_,{src:e.productDetails.images[3]},null,8,["src"]),t(_,{src:e.productDetails.images[4]},null,8,["src"])]),_:1})]),_:1})]),_:1}),t(j,{justify:"center",class:"bg-grey-lighten-4 ma-0 pa-8"},{default:n(()=>[t(k,{class:"",cols:"12",lg:"6",sm:"12"},{default:n(()=>[t(be,{class:"pt-4 text-h4 font-weight-bold"},{default:n(()=>[r(g(e.productDetails.id)+" - "+g(e.productDetails.title)+" ",1)]),_:1}),d("p",xe,[t(m),r(" ("+g(e.productDetails.rating)+") ",1)]),t(M,{class:"text-grey-darken-4"},{default:n(()=>[r(g(e.productDetails.category)+" - "+g(e.productDetails.brand),1)]),_:1}),t(M,null,{default:n(()=>[d("h2",$e,[r(" Description : "),t(pe,{class:"text-center bg-grey-darken-2",width:"20%"})]),d("div",De,[d("p",Ie,g(e.productDetails.description)+" : ",1),r(" consectetur ipsum dolor sit amet consectetur adipisicing elit. Rem ipsam consectetur aperiam adipisci maiores aliquam? Aliquam laudantium rerum iste eligendi libero? Minima aliquam reprehenderit odit impedit doloremque rerum cupiditate distinctio! ")])]),_:1})]),_:1}),t(k,{cols:"12",lg:"3",sm:"3",class:""},{default:n(()=>[t(M,{class:"bg-grey-lighten-3 text-center text-grey-darken-4"},{default:n(()=>[Be,d("p",Le," $ \u2022 "+g(e.productDetails.price),1)]),_:1})]),_:1}),t(k,{cols:"12",lg:"4",sm:"12"},{default:n(()=>[t(he,null,{default:n(()=>[d("div",null,[t(w,{class:"text-orange",hover:"",variant:"outlined",onClick:s[2]||(s[2]=b=>(e.addToCart(e.productDetails),u.snackbar=!0))},{default:n(()=>[d("div",Me,[t(_e,{modelValue:u.snackbar,"onUpdate:modelValue":s[1]||(s[1]=b=>u.snackbar=b),timeout:u.timeout,color:"deep-orange-accent-4"},{actions:n(()=>[t(w,{color:"white",variant:"outlined",onClick:s[0]||(s[0]=b=>u.snackbar=!1)},{default:n(()=>[r(" Close ")]),_:1})]),default:n(()=>[d("p",Re,g(u.text),1)]),_:1},8,["modelValue","timeout"])]),t(H,{large:"",color:"orange"},{default:n(()=>[r(" mdi-cart ")]),_:1}),r(" add To Cart ")]),_:1})]),t(ye),t(w,{class:"bg-orange text-white",hover:"",value:"product"},{default:n(()=>[r(" Buy Now "),t(H,null,{default:n(()=>[r("mdi-arrow-right")]),_:1})]),_:1})]),_:1})]),_:1})]),_:1})],64)}const Ye=E(we,[["render",Fe]]);export{Ye as default};
