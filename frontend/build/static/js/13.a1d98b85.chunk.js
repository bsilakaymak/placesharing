(this.webpackJsonpfrontend=this.webpackJsonpfrontend||[]).push([[13],{166:function(e,t,n){"use strict";n.r(t);var r=n(11),a=n.n(r),i=n(13),c=n(3),o=n(0),u=n.n(o),s=n(9),l=n(61),p=n(69),d=n(23),f=n(22),v=n(14),b=n(70),m=n(65),y=n(21);n(80);t.default=function(){var e=Object(s.h)().token,t=Object(y.a)(),n=t.isLoading,r=t.error,O=t.sendRequest,j=t.clearError,h=Object(o.useState)(),E=Object(c.a)(h,2),w=E[0],T=E[1],g=Object(b.a)({password:{value:"",isValid:!1},confirmpassword:{value:"",isValid:!1}},!1),N=Object(c.a)(g,2),I=N[0],V=N[1],A=function(){var t=Object(i.a)(a.a.mark((function t(n){var r,i;return a.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return n.preventDefault(),r={password:I.inputs.password.value,confirmpassword:I.inputs.confirmpassword.value},t.prev=2,n.preventDefault(),t.next=6,O("".concat("https://placesharer.herokuapp.com/api","/users/reset/").concat(e),"POST",JSON.stringify(r),{"Content-Type":"application/json"});case 6:i=t.sent,T(i),t.next=12;break;case 10:t.prev=10,t.t0=t.catch(2);case 12:case"end":return t.stop()}}),t,null,[[2,10]])})));return function(e){return t.apply(this,arguments)}}();return u.a.createElement(o.Fragment,null,u.a.createElement(f.a,{error:r,onClear:j}),n&&u.a.createElement(v.a,{asOverlay:!0}),w?u.a.createElement(l.a,{className:"forget_password no-select"},u.a.createElement("p",null,w.message),u.a.createElement(d.a,{to:"/auth"},"AUTHENTICATE")):u.a.createElement(l.a,{className:"forget_password no-select"},u.a.createElement("form",{className:"place-form",onSubmit:A},u.a.createElement(p.a,{id:"password",element:"input",type:"password",label:"New password",validators:[Object(m.b)(6)],errorText:"Please enter a valid password, at least 6 characters.",onInput:V}),u.a.createElement(p.a,{id:"confirmpassword",element:"input",type:"password",label:"confirm password",validators:[Object(m.b)(6)],errorText:"Please enter a valid password, at least 6 characters.",onInput:V}),u.a.createElement(d.a,{type:"submit",disabled:!I.isValid},"Reset Password"))))}},61:function(e,t,n){"use strict";var r=n(0),a=n.n(r);n(68);t.a=function(e){return a.a.createElement("div",{className:"card ".concat(e.className),style:e.style},e.children)}},65:function(e,t,n){"use strict";n.d(t,"c",(function(){return a})),n.d(t,"b",(function(){return i})),n.d(t,"a",(function(){return c})),n.d(t,"d",(function(){return o}));var r=n(72),a=function(){return{type:"REQUIRE"}},i=function(e){return{type:"MINLENGTH",val:e}},c=function(){return{type:"EMAIL"}},o=function(e,t){var n,a=!0,i=Object(r.a)(t);try{for(i.s();!(n=i.n()).done;){var c=n.value;"REQUIRE"===c.type&&(a=a&&e.trim().length>0),"MINLENGTH"===c.type&&(a=a&&e.trim().length>=c.val),"MAXLENGTH"===c.type&&(a=a&&e.trim().length<=c.val),"MIN"===c.type&&(a=a&&+e>=c.val),"MAX"===c.type&&(a=a&&+e<=c.val),"EMAIL"===c.type&&(a=a&&/^\S+@\S+\.\S+$/.test(e))}}catch(o){i.e(o)}finally{i.f()}return a}},66:function(e,t,n){"use strict";n.d(t,"a",(function(){return i}));var r=n(67);function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){Object(r.a)(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}},67:function(e,t,n){"use strict";function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}n.d(t,"a",(function(){return r}))},68:function(e,t,n){},69:function(e,t,n){"use strict";var r=n(3),a=n(66),i=n(0),c=n.n(i),o=n(65),u=(n(71),function(e,t){switch(t.type){case"CHANGE":return Object(a.a)({},e,{value:t.val,isValid:Object(o.d)(t.val,t.validators)});case"TOUCH":return Object(a.a)({},e,{isTouched:!0});default:return e}});t.a=function(e){var t=function(t){p({type:"CHANGE",val:t.target.value,validators:e.validators})},n=function(e){p({type:"TOUCH"})},a={value:e.initailValue||"",isValid:e.initailValid||!1,isTouched:!1},o=Object(i.useReducer)(u,a),s=Object(r.a)(o,2),l=s[0],p=s[1],d=e.id,f=e.onInput,v=l.value,b=l.isValid;Object(i.useEffect)((function(){f(d,v,b)}),[d,v,b,f]);var m="input"===e.element?c.a.createElement("input",{id:e.id,type:e.type,placeholder:e.placeholder,onChange:t,onBlur:n,value:l.value}):c.a.createElement("textarea",{id:e.id,rows:e.rows||3,onChange:t,onBlur:n,value:l.value});return c.a.createElement("div",{className:"form-control ".concat(!l.isValid&&l.isTouched&&"form-control--invalid")},c.a.createElement("label",{htmlFor:e.id},e.label),m,!l.isValid&&l.isTouched&&c.a.createElement("p",null,e.errorText))}},70:function(e,t,n){"use strict";n.d(t,"a",(function(){return u}));var r=n(3),a=n(67),i=n(66),c=n(0),o=function(e,t){switch(t.type){case"INPUT_CHANGE":var n=!0;for(var r in e.inputs)e.inputs[r]&&(n=r===t.inputId?n&&t.isValid:n&&e.inputs[r].isValid);return Object(i.a)({},e,{inputs:Object(i.a)({},e.inputs,Object(a.a)({},t.inputId,{value:t.value,isValid:t.isValid})),isValid:n});case"SET_DATA":return Object(i.a)({},e,{inputs:t.inputs,isValid:t.formIsValid});default:return e}},u=function(e,t){var n=Object(c.useReducer)(o,{inputs:e,isValid:t}),a=Object(r.a)(n,2),i=a[0],u=a[1];return[i,Object(c.useCallback)((function(e,t,n){u({type:"INPUT_CHANGE",value:t,isValid:n,inputId:e})}),[]),Object(c.useCallback)((function(e,t){u({type:"SET_DATA",inputs:e,formIsValid:t})}),[])]}},71:function(e,t,n){},72:function(e,t,n){"use strict";n.d(t,"a",(function(){return a}));var r=n(24);function a(e){if("undefined"===typeof Symbol||null==e[Symbol.iterator]){if(Array.isArray(e)||(e=Object(r.a)(e))){var t=0,n=function(){};return{s:n,n:function(){return t>=e.length?{done:!0}:{done:!1,value:e[t++]}},e:function(e){throw e},f:n}}throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}var a,i,c=!0,o=!1;return{s:function(){a=e[Symbol.iterator]()},n:function(){var e=a.next();return c=e.done,e},e:function(e){o=!0,i=e},f:function(){try{c||null==a.return||a.return()}finally{if(o)throw i}}}}},80:function(e,t,n){}}]);
//# sourceMappingURL=13.a1d98b85.chunk.js.map