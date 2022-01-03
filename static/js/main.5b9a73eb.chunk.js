(this["webpackJsonpiro-iro"]=this["webpackJsonpiro-iro"]||[]).push([[0],{18:function(e,t,c){},24:function(e,t,c){},26:function(e,t,c){},28:function(e,t,c){},29:function(e,t,c){},30:function(e,t,c){},31:function(e,t,c){},32:function(e,t,c){},33:function(e,t,c){},34:function(e,t,c){},35:function(e,t,c){},36:function(e,t,c){"use strict";c.r(t);var a=c(2),r=c.n(a),n=c(13),o=c.n(n),s=(c(18),c(7)),l=c(5),i=c(6),d=(c(24),c(0));function u(e){var t=e.backgroundColor,c=void 0===t?"#fff":t,a=e.foregroundColor,r=void 0===a?"#000":a;return Object(d.jsxs)("svg",{"aria-hidden":"true",className:"background",height:"100%",width:"100%",id:"background-gradient",children:[Object(d.jsxs)("defs",{children:[Object(d.jsx)("filter",{id:"blur",x:"0",y:"0",children:Object(d.jsx)("feGaussianBlur",{in:"SourceGraphic",stdDeviation:"20"})}),Object(d.jsxs)("linearGradient",{id:"linear-gradient",x1:"0%",y1:"100%",x2:"0%",y2:"0%",gradientUnits:"userSpaceOnUse",children:[Object(d.jsx)("stop",{offset:"0%",stopColor:r}),Object(d.jsx)("stop",{offset:"100%",stopColor:c})]}),Object(d.jsxs)("radialGradient",{id:"radial-gradient",cx:"50%",cy:"50%",r:"75%",fx:"50%",fy:"0",spreadMethod:"pad",children:[Object(d.jsx)("stop",{offset:"0%",stopColor:c}),Object(d.jsx)("stop",{offset:"100%",stopColor:r})]})]}),Object(d.jsx)("rect",{className:"background__radial-gradient",x:"0",y:"0",width:"100%",height:"100%",fill:"url(#radial-gradient)"}),Object(d.jsx)("rect",{className:"background__linear-gradient",x:"0",y:"0",width:"100%",height:"100%",fill:"url(#linear-gradient)"})]})}c(26);function j(e){e.backgroundColor;var t=e.foregroundColor,c=void 0===t?"#000":t;return Object(d.jsx)("p",{className:"body",style:{color:c},children:"a color contrast tool"})}var b=c(4),h=c.n(b),x=c(3);c(28);function f(e){var t=e.actions,c=void 0===t?[]:t,r=e.children,n=(e.label,Object(a.useState)(!1)),o=Object(s.a)(n,1)[0],u=h()("card",{"card--minimized":o});return Object(d.jsxs)("div",{className:u,children:[Object(d.jsxs)("div",{className:"card__mock-bar",children:[Object(d.jsxs)("div",{className:"card__mock-buttons",children:[Object(d.jsx)("div",{className:"card__mock-button card__mock-button--close",children:Object(d.jsx)(l.a,{className:"card__icon",icon:i.e})}),Object(d.jsx)("div",{className:"card__mock-button card__mock-button--minimize",children:Object(d.jsx)(l.a,{className:"card__icon",icon:i.c})}),Object(d.jsx)("div",{className:"card__mock-button card__mock-button--maximize",children:Object(d.jsx)(l.a,{className:"card__icon",icon:i.d})})]}),c.length&&Object(d.jsx)("div",{className:"card__actions",children:Object(x.map)(c,(function(e){var t=e.icon,c=(e.label,e.onClick);return Object(d.jsx)("button",{className:"card__action",onClick:c,type:"button",children:t},t)}))}),Object(d.jsx)("div",{className:"card__label",children:"Color Contrast Tool"})]}),Object(d.jsx)("div",{className:"card__content",children:r})]})}var g=c(12);c(29);function O(e){var t=e.id,c=e.onChange,a=e.value;return Object(d.jsxs)("div",{className:"color-picker",children:[Object(d.jsx)("label",{className:"color-picker__label",htmlFor:t,children:Object(d.jsx)("span",{className:"sr-only",children:"Color Picker"})}),Object(d.jsx)("input",{className:"color-picker__input",id:t,onChange:c,type:"color",value:a}),Object(d.jsx)(l.a,{className:"color-picker__icon",icon:i.b})]})}c(30);function m(e){var t=e.hasError,c=e.hexValue,a=e.id,r=e.onChange,n=e.value,o=h()("hex-input__help-text",{"hex-input__help-text--active":t});return Object(d.jsxs)("div",{className:"hex-input",children:[Object(d.jsx)("label",{className:"hex-input__label sr-only",htmlFor:a,children:"Hex Value"}),Object(d.jsx)("input",{className:"hex-input__input",id:a,maxLength:"7",onChange:r,required:!0,type:"text",value:c||n,size:"7"}),Object(d.jsx)("span",{className:o,children:"Enter valid hex value (Example: #ffffff)"})]})}function _(e){var t=/^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i.exec(e);return t?{r:parseInt(t[1],16),g:parseInt(t[2],16),b:parseInt(t[3],16)}:null}function v(e){var t=_(e),c=[t.r,t.g,t.b].map((function(e){return(e/=255)<=.03928?e/12.92:Math.pow((e+.055)/1.055,2.4)}));return.2126*c[0]+.7152*c[1]+.0722*c[2]}c(31);function p(e){var t=e.hexValue,c=e.updateHexValue,r=e.type,n=Object(a.useState)(t),o=Object(s.a)(n,2),l=o[0],i=o[1],u=Object(a.useState)(!1),j=Object(s.a)(u,2),b=j[0],h=j[1],f="color-fieldset",v="".concat(f,"__legend"),p="".concat(f,"__label"),k="".concat(f,"__input"),C="".concat(f,"__row"),N="".concat(f,"__lightness-gradient"),y=Object(x.startCase)(r),S="".concat(r,"-hex"),V="".concat(r,"-picker"),w="".concat(r,"-lightness"),H=_(t),T=function(e){var t,c,a=e.r/255,r=e.g/255,n=e.b/255,o=Object(x.sortBy)([a,r,n]),s=o[0],l=o[2],i=l-s,d=(l+s)/2,u=0,j=0;if(0!==i)switch(j=i/(1-Math.abs(2*d-1)),l){case a:c=0,(t=(r-n)/i)<0&&(c=6),u=t+c;break;case r:u=(t=(n-a)/i)+(c=2);break;case n:u=(t=(a-r)/i)+(c=4)}return{h:60*u,s:100*j,l:100*d}}(H),F=function(e){var t=/^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i.exec(e.target.value);i(e.target.value),t||h(!0),t&&(h(!1),c(e.target.value))};Object(a.useEffect)((function(){i(t)}),[t]);var M=Object(x.sum)(Object(x.values)(H)),A={background:"linear-gradient(\n\t\t\tto right,\n\t\t\trgb(0, 0, 0),\n\t\t\t".concat(!(0===M)&&!(765===M)?"rgb(".concat(H.r,", ").concat(H.g,", ").concat(H.b,"),"):"","\n\t\t\trgb(255, 255, 255)\n\t\t)")};return Object(d.jsxs)("fieldset",{className:"color-fieldset",children:[Object(d.jsx)("legend",{className:v,children:y}),Object(d.jsx)("div",{className:p,children:"Color"}),Object(d.jsxs)("div",{className:C,children:[Object(d.jsx)(O,{id:V,onChange:F,value:t}),Object(d.jsx)(m,{id:S,onChange:F,value:l,hasError:b})]}),Object(d.jsx)("label",{className:p,htmlFor:w,children:"Lightness"}),Object(d.jsx)("input",{className:k,id:w,value:T.l,min:"0",max:"100",onChange:function(e){var t=e.target.value,a=function(e){var t={};return Object(x.forEach)(e,(function(e,c){var a=e.toString(16);1===a.length&&(a="0".concat(a)),t[c]=a})),function(e){var t=e.r,c=e.g,a=e.b;return"#".concat(t).concat(c).concat(a)}(t)}(function(e){var t=e.h,c=t/60,a=e.s/100,r=e.l/100,n=(1-Math.abs(2*r-1))*a,o=n*(1-Math.abs(c%2-1)),s=r-n/2,l=0,i=0,d=0;return 0<=t&&t<60?(l=n,i=o,d=0):60<=t&&t<120?(l=o,i=n,d=0):120<=t&&t<180?(l=0,i=n,d=o):180<=t&&t<240?(l=0,i=o,d=n):240<=t&&t<300?(l=o,i=0,d=n):300<=t&&t<360&&(l=n,i=0,d=o),{r:Math.round(255*(l+s)),g:Math.round(255*(i+s)),b:Math.round(255*(d+s))}}(Object(g.a)(Object(g.a)({},T),{l:t})));c(a)},step:"1",type:"range"}),Object(d.jsx)("div",{className:N,style:A})]})}c(32);function k(e){var t=e.backgroundColor,c=e.foregroundColor;return Object(d.jsx)("footer",{className:"footer",children:Object(d.jsxs)("div",{className:"container",style:{color:t,textShadow:"0.125rem 0.125rem 0 ".concat(c)},children:["Created by"," ",Object(d.jsxs)("a",{className:"footer__link",href:"https://schylerhosler.com",target:"_blank",rel:"noreferrer",style:{color:t},children:[Object(d.jsx)("span",{className:"footer__link-text footer-link-text--default",style:{color:t},children:"Schyler Hosler"}),Object(d.jsx)("span",{"aria-hidden":!0,className:"footer__link-text footer__link-text--highlighted",style:{color:c},children:"Schyler Hosler"}),Object(d.jsx)("span",{className:"footer__link-highlight",style:{backgroundColor:t}})]})]})})}c(33);function C(e){e.backgroundColor;var t=e.foregroundColor,c=void 0===t?"#000":t;return Object(d.jsx)("h1",{className:"heading",style:{color:c},children:"iro-iro"})}var N=c(10);c(34);function y(e){var t=e.backgroundColor,c=e.foregroundColor,a=e.type,r="text-example",n=h()(r,Object(N.a)({},"".concat(r,"--").concat(a),a)),o={backgroundColor:t,color:c};return Object(d.jsx)("div",{className:n,style:o,children:"The quick brown fox jumps over the lazy dog"})}c(35);function S(e){var t=e.aaThreshold,c=e.aaaThreshold,a=e.backgroundHexValue,r=e.contrastRatio,n=e.foregroundHexValue,o=e.type;return Object(d.jsxs)("div",{className:"results-group",children:[Object(d.jsxs)("div",{className:"results-group__label",children:[Object(x.startCase)(o)," Text"]}),Object(d.jsxs)("div",{className:"results-group__wcag",children:[Object(d.jsxs)("div",{children:["WCAG AA (\u2265 ",t,":1):"," ",Object(d.jsx)(V,{hasPassingScore:r>=t})]}),Object(d.jsxs)("div",{children:["WCAG AAA (\u2265 ",c,":1):"," ",Object(d.jsx)(V,{hasPassingScore:r>=c})]})]}),Object(d.jsx)(y,{backgroundColor:a,foregroundColor:n,type:o})]})}function V(e){var t=e.hasPassingScore,c=h()("results-group__assessment-text",{"results-group__assessment-text--pass":t,"results-group__assessment-text--fail":!t});return Object(d.jsx)("strong",{className:c,children:t?"Pass":"Fail"})}function w(){var e=Object(a.useState)("#e6e6e6"),t=Object(s.a)(e,2),c=t[0],r=t[1],n=Object(a.useState)("#2e4d5e"),o=Object(s.a)(n,2),b=o[0],h=o[1],g=function(e){var t=Object(x.sortBy)(Object(x.map)(e,v));return((t[1]+.05)/(t[0]+.05)).toFixed(2)}([c,b]);return Object(d.jsxs)(d.Fragment,{children:[Object(d.jsx)(u,{backgroundColor:b,foregroundColor:c}),Object(d.jsx)("main",{children:Object(d.jsxs)("div",{className:"container text-center",children:[Object(d.jsx)(C,{backgroundColor:b,foregroundColor:c}),Object(d.jsx)(j,{backgroundColor:b,foregroundColor:c}),Object(d.jsxs)(f,{actions:[{icon:Object(d.jsx)(l.a,{icon:i.a}),label:"Swap colors",onClick:function(e){e&&e.preventDefault(),r(b),h(c)}}],label:"Color Contrast Tool",children:[Object(d.jsxs)("form",{onSubmit:function(e){return e.preventDefault()},children:[Object(d.jsx)("div",{className:"card__section",children:Object(d.jsx)(p,{hexValue:c,updateHexValue:r,type:"foreground"})}),Object(d.jsx)("div",{className:"card__section",children:Object(d.jsx)(p,{hexValue:b,updateHexValue:h,type:"background"})})]}),Object(d.jsx)("div",{className:"card__section",children:Object(d.jsx)(S,{aaThreshold:4.5,aaaThreshold:7.1,backgroundHexValue:b,contrastRatio:g,foregroundHexValue:c,type:"normal"})}),Object(d.jsx)("div",{className:"card__section",children:Object(d.jsx)(S,{aaThreshold:3.1,aaaThreshold:4.5,backgroundHexValue:b,contrastRatio:g,foregroundHexValue:c,type:"large"})})]})]})}),Object(d.jsx)(k,{backgroundColor:b,foregroundColor:c})]})}var H=function(e){e&&e instanceof Function&&c.e(3).then(c.bind(null,37)).then((function(t){var c=t.getCLS,a=t.getFID,r=t.getFCP,n=t.getLCP,o=t.getTTFB;c(e),a(e),r(e),n(e),o(e)}))};o.a.render(Object(d.jsx)(r.a.StrictMode,{children:Object(d.jsx)(w,{})}),document.getElementById("root")),H()}},[[36,1,2]]]);
//# sourceMappingURL=main.5b9a73eb.chunk.js.map