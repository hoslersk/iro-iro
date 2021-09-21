(this["webpackJsonpiro-iro"]=this["webpackJsonpiro-iro"]||[]).push([[0],{18:function(e,t,r){},19:function(e,t,r){},21:function(e,t,r){},27:function(e,t,r){},29:function(e,t,r){},30:function(e,t,r){},31:function(e,t,r){},32:function(e,t,r){},33:function(e,t,r){},34:function(e,t,r){},35:function(e,t,r){},36:function(e,t,r){"use strict";r.r(t);var c=r(2),a=r.n(c),n=r(13),o=r.n(n),s=(r(18),r(5)),l=(r(19),r(0));function i(e){var t=e.backgroundColor,r=void 0===t?"#fff":t,c=e.foregroundColor,a=void 0===c?"#000":c;return Object(l.jsxs)("svg",{"aria-hidden":"true",className:"background",height:"100%",width:"100%",id:"background-gradient",children:[Object(l.jsxs)("defs",{children:[Object(l.jsx)("filter",{id:"blur",x:"0",y:"0",children:Object(l.jsx)("feGaussianBlur",{in:"SourceGraphic",stdDeviation:"20"})}),Object(l.jsxs)("linearGradient",{id:"linear-gradient",x1:"0%",y1:"100%",x2:"0%",y2:"0%",gradientUnits:"userSpaceOnUse",children:[Object(l.jsx)("stop",{offset:"0%",stopColor:a}),Object(l.jsx)("stop",{offset:"100%",stopColor:r})]}),Object(l.jsxs)("radialGradient",{id:"radial-gradient",cx:"50%",cy:"50%",r:"75%",fx:"50%",fy:"0",spreadMethod:"pad",children:[Object(l.jsx)("stop",{offset:"0%",stopColor:r}),Object(l.jsx)("stop",{offset:"100%",stopColor:a})]})]}),Object(l.jsx)("rect",{className:"background__radial-gradient",x:"0",y:"0",width:"100%",height:"100%",fill:"url(#radial-gradient)"}),Object(l.jsx)("rect",{className:"background__linear-gradient",x:"0",y:"0",width:"100%",height:"100%",fill:"url(#linear-gradient)"})]})}r(21);function d(e){e.backgroundColor;var t=e.foregroundColor,r=void 0===t?"#000":t;return Object(l.jsx)("p",{className:"body",style:{color:r},children:"a color contrast tool"})}var u=r(4),j=r.n(u),b=r(6),h=r(7);r(27);function x(e){var t=e.children,r=(e.label,Object(c.useState)(!1)),a=Object(s.a)(r,2),n=a[0],o=a[1],i=j()("card",{"card--minimized":n});return Object(l.jsxs)("div",{className:i,children:[Object(l.jsxs)("div",{className:"card__mock-bar",children:[Object(l.jsxs)("div",{className:"card__mock-buttons",children:[Object(l.jsx)("div",{className:"card__mock-button card__mock-button--close",children:Object(l.jsx)(b.a,{className:"card__icon",icon:h.d})}),Object(l.jsx)("div",{className:"card__mock-button card__mock-button--minimize",onClick:function(){return o(!0)},children:Object(l.jsx)(b.a,{className:"card__icon",icon:h.b})}),Object(l.jsx)("div",{className:"card__mock-button card__mock-button--maximize",children:Object(l.jsx)(b.a,{className:"card__icon",icon:h.c})})]}),Object(l.jsx)("div",{className:"card__label",children:"Color Contrast Tool"})]}),Object(l.jsx)("div",{className:"card__content",children:t})]})}var f=r(12),g=r(3);r(29);function O(e){var t=e.id,r=e.onChange,c=e.value;return Object(l.jsxs)("div",{className:"color-picker",children:[Object(l.jsx)("label",{className:"color-picker__label",htmlFor:t,children:Object(l.jsx)("span",{className:"sr-only",children:"Color Picker"})}),Object(l.jsx)("input",{className:"color-picker__input",id:t,onChange:r,type:"color",value:c}),Object(l.jsx)(b.a,{className:"color-picker__icon",icon:h.a})]})}r(30);function m(e){var t=e.hasError,r=(e.hexValue,e.id),c=e.onChange,a=e.value,n=j()("hex-input__help-text",{"hex-input__help-text--active":t});return Object(l.jsxs)("div",{className:"hex-input",children:[Object(l.jsx)("label",{className:"hex-input__label sr-only",htmlFor:r,children:"Hex Value"}),Object(l.jsx)("input",{className:"hex-input__input",id:r,maxLength:"7",onChange:c,required:!0,type:"text",value:a,size:"7"}),Object(l.jsx)("span",{className:n,children:"Enter valid hex value (Example: #ffffff)"})]})}function p(e){var t=/^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i.exec(e);return t?{r:parseInt(t[1],16),g:parseInt(t[2],16),b:parseInt(t[3],16)}:null}function _(e){var t=p(e),r=[t.r,t.g,t.b].map((function(e){return(e/=255)<=.03928?e/12.92:Math.pow((e+.055)/1.055,2.4)}));return.2126*r[0]+.7152*r[1]+.0722*r[2]}r(31);function v(e){var t=e.hexValue,r=e.updateHexValue,a=e.type,n=Object(c.useState)(t),o=Object(s.a)(n,2),i=o[0],d=o[1],u=Object(c.useState)(!1),j=Object(s.a)(u,2),b=j[0],h=j[1],x="color-fieldset",_="".concat(x,"__legend"),v="".concat(x,"__label"),C="".concat(x,"__input"),k="".concat(x,"__row"),N="".concat(x,"__lightness-gradient"),y=Object(g.startCase)(a),S="".concat(a,"-hex"),V="".concat(a,"-picker"),T="".concat(a,"-lightness"),H=p(t),w=function(e){var t,r,c=e.r/255,a=e.g/255,n=e.b/255,o=Object(g.sortBy)([c,a,n]),s=o[0],l=o[2],i=l-s,d=(l+s)/2,u=0,j=0;if(0!==i)switch(j=i/(1-Math.abs(2*d-1)),l){case c:r=0,(t=(a-n)/i)<0&&(r=6),u=t+r;break;case a:u=(t=(n-c)/i)+(r=2);break;case n:u=(t=(c-a)/i)+(r=4)}return{h:60*u,s:100*j,l:100*d}}(H),F=function(e){var t=/^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i.exec(e.target.value);d(e.target.value),t||h(!0),t&&(h(!1),r(e.target.value))},M=Object(g.sum)(Object(g.values)(H)),A={background:"linear-gradient(\n\t\t\tto right,\n\t\t\trgb(0, 0, 0),\n\t\t\t".concat(!(0===M)&&!(765===M)?"rgb(".concat(H.r,", ").concat(H.g,", ").concat(H.b,"),"):"","\n\t\t\trgb(255, 255, 255)\n\t\t)")};return Object(l.jsxs)("fieldset",{className:"color-fieldset",children:[Object(l.jsx)("legend",{className:_,children:y}),Object(l.jsx)("div",{className:v,children:"Color"}),Object(l.jsxs)("div",{className:k,children:[Object(l.jsx)(O,{id:V,onChange:F,value:t}),Object(l.jsx)(m,{id:S,onChange:F,value:i,hasError:b})]}),Object(l.jsx)("label",{className:v,htmlFor:T,children:"Lightness"}),Object(l.jsx)("input",{className:C,id:T,value:w.l,min:"0",max:"100",onChange:function(e){var t=e.target.value,c=function(e){var t={};return Object(g.forEach)(e,(function(e,r){var c=e.toString(16);1===c.length&&(c="0".concat(c)),t[r]=c})),function(e){var t=e.r,r=e.g,c=e.b;return"#".concat(t).concat(r).concat(c)}(t)}(function(e){var t=e.h,r=t/60,c=e.s/100,a=e.l/100,n=(1-Math.abs(2*a-1))*c,o=n*(1-Math.abs(r%2-1)),s=a-n/2,l=0,i=0,d=0;return 0<=t&&t<60?(l=n,i=o,d=0):60<=t&&t<120?(l=o,i=n,d=0):120<=t&&t<180?(l=0,i=n,d=o):180<=t&&t<240?(l=0,i=o,d=n):240<=t&&t<300?(l=o,i=0,d=n):300<=t&&t<360&&(l=n,i=0,d=o),{r:Math.round(255*(l+s)),g:Math.round(255*(i+s)),b:Math.round(255*(d+s))}}(Object(f.a)(Object(f.a)({},w),{l:t})));r(c)},step:"1",type:"range"}),Object(l.jsx)("div",{className:N,style:A})]})}r(32);function C(e){var t=e.backgroundColor,r=e.foregroundColor;return Object(l.jsx)("footer",{className:"footer",children:Object(l.jsxs)("div",{className:"container",style:{color:t},children:["Created by"," ",Object(l.jsxs)("a",{className:"footer__link",href:"https://schylerhosler.com",target:"_blank",rel:"noreferrer",style:{color:t},children:[Object(l.jsx)("span",{className:"footer__link-text footer-link-text--default",style:{color:t},children:"Schyler Hosler"}),Object(l.jsx)("span",{"aria-hidden":!0,className:"footer__link-text footer__link-text--highlighted",style:{color:r},children:"Schyler Hosler"}),Object(l.jsx)("span",{className:"footer__link-highlight",style:{backgroundColor:t}})]})]})})}r(33);function k(e){e.backgroundColor;var t=e.foregroundColor,r=void 0===t?"#000":t;return Object(l.jsx)("h1",{className:"heading",style:{color:r},children:"iro-iro"})}var N=r(10);r(34);function y(e){var t=e.backgroundColor,r=e.foregroundColor,c=e.type,a="text-example",n=j()(a,Object(N.a)({},"".concat(a,"--").concat(c),c)),o={backgroundColor:t,color:r};return Object(l.jsx)("div",{className:n,style:o,children:"The quick brown fox jumps over the lazy dog"})}r(35);function S(e){var t=e.aaThreshold,r=e.aaaThreshold,c=e.backgroundHexValue,a=e.contrastRatio,n=e.foregroundHexValue,o=e.type,s="results-group",i="".concat(s,"__wcag");return Object(l.jsxs)("div",{className:"results-group",children:[Object(l.jsxs)("div",{className:i,children:[Object(l.jsxs)("div",{children:["WCAG AA (\u2265 ",t,":1):"," ",Object(l.jsx)(V,{hasPassingScore:a>=t})]}),Object(l.jsxs)("div",{children:["WCAG AAA (\u2265 ",r,":1):"," ",Object(l.jsx)(V,{hasPassingScore:a>=r})]})]}),Object(l.jsx)(y,{backgroundColor:c,foregroundColor:n,type:o})]})}function V(e){var t=e.hasPassingScore,r=j()("results-group__assessment-text",{"results-group__assessment-text--pass":t,"results-group__assessment-text--fail":!t});return Object(l.jsx)("strong",{className:r,children:t?"Pass":"Fail"})}function T(){var e=Object(c.useState)("#e6e6e6"),t=Object(s.a)(e,2),r=t[0],a=t[1],n=Object(c.useState)("#2e4d5e"),o=Object(s.a)(n,2),u=o[0],j=o[1],b=function(e){var t=Object(g.sortBy)(Object(g.map)(e,_));return((t[1]+.05)/(t[0]+.05)).toFixed(2)}([r,u]);return Object(l.jsxs)(l.Fragment,{children:[Object(l.jsx)(i,{backgroundColor:u,foregroundColor:r}),Object(l.jsx)("main",{children:Object(l.jsxs)("div",{className:"container text-center",children:[Object(l.jsx)(k,{backgroundColor:u,foregroundColor:r}),Object(l.jsx)(d,{backgroundColor:u,foregroundColor:r}),Object(l.jsxs)(x,{label:"Color Contrast Tool",children:[Object(l.jsxs)("form",{onSubmit:function(e){return e.preventDefault()},children:[Object(l.jsx)(v,{hexValue:r,updateHexValue:a,type:"foreground"}),Object(l.jsx)(v,{hexValue:u,updateHexValue:j,type:"background"}),Object(l.jsx)("button",{className:"form__button",onClick:function(e){e&&e.preventDefault(),a(u),j(r)},type:"button",children:"Swap Colors"})]}),Object(l.jsx)("h2",{className:"sr-only",children:"Results"}),Object(l.jsxs)("p",{className:"contrast-ratio",role:"status",children:["Contrast Ratio: ",Object(l.jsx)("strong",{children:b}),":1"]}),Object(l.jsxs)("div",{className:"d-flex",children:[Object(l.jsx)("h3",{children:"Normal Text"}),Object(l.jsx)(S,{aaThreshold:4.5,aaaThreshold:7.1,backgroundHexValue:u,contrastRatio:b,foregroundHexValue:r,type:"normal"})]}),Object(l.jsxs)("div",{className:"d-flex",children:[Object(l.jsx)("h3",{children:"Large Text"}),Object(l.jsx)(S,{aaThreshold:3.1,aaaThreshold:4.5,backgroundHexValue:u,contrastRatio:b,foregroundHexValue:r,type:"large"})]})]})]})}),Object(l.jsx)(C,{backgroundColor:u,foregroundColor:r})]})}var H=function(e){e&&e instanceof Function&&r.e(3).then(r.bind(null,37)).then((function(t){var r=t.getCLS,c=t.getFID,a=t.getFCP,n=t.getLCP,o=t.getTTFB;r(e),c(e),a(e),n(e),o(e)}))};o.a.render(Object(l.jsx)(a.a.StrictMode,{children:Object(l.jsx)(T,{})}),document.getElementById("root")),H()}},[[36,1,2]]]);
//# sourceMappingURL=main.bc0bdec1.chunk.js.map