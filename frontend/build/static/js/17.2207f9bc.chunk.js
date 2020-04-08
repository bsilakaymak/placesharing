(this.webpackJsonpfrontend=this.webpackJsonpfrontend||[]).push([[17],{118:function(e,a,t){"use strict";t.r(a);var n=t(74),r=t(11),o=t.n(r),c=t(13),i=t(3),l=t(0),s=t.n(l),d=t(2),u=t(76),p=t(61),m=function(e){var a=e.user,t=a.id,n=a.name,r=a.image;return s.a.createElement("li",{className:"user-item"},s.a.createElement(p.a,{className:"user-item__content"},s.a.createElement(d.b,{to:"/".concat(t,"/places")},s.a.createElement("div",{className:"user-item__image"},s.a.createElement(u.a,{image:r,alt:n})),s.a.createElement("div",{className:"user-item__info"},s.a.createElement("h2",null,n)))))},b=function(e){var a=e.friends;return 0===a.length?s.a.createElement("div",{className:"center m-1"},s.a.createElement(p.a,null,s.a.createElement("h2",{className:"gray-text"},"No friend found."))):s.a.createElement("ul",{className:"users-list"},a.map((function(e){return s.a.createElement(m,{user:e,key:e.id})})))},h=t(12),f=t(21),g=t(22),v=t(134),y=function(e){var a=e.request,t=a._id,n=a.user,r=n.id,i=n.name,l=n.image,m=e.auth,b=e.acceptFriendHandler,h=e.cancelFriendHandler,y=Object(f.a)(),x=y.error,E=y.sendRequest,k=y.clearError,S=function(){var e=Object(c.a)(o.a.mark((function e(a){return o.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,E("".concat("https://placesharing.herokuapp.com/api","/user/friends/requests/").concat(t),"PUT",null,{Authorization:"Bearer "+m.token});case 3:b(a),e.next=8;break;case 6:e.prev=6,e.t0=e.catch(0);case 8:case"end":return e.stop()}}),e,null,[[0,6]])})));return function(a){return e.apply(this,arguments)}}(),O=function(){var e=Object(c.a)(o.a.mark((function e(a){return o.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,E("".concat("https://placesharing.herokuapp.com/api","/user/friends/requests/").concat(t),"DELETE",null,{Authorization:"Bearer "+m.token});case 3:h(a),e.next=9;break;case 6:e.prev=6,e.t0=e.catch(0),console.error(e.t0);case 9:case"end":return e.stop()}}),e,null,[[0,6]])})));return function(a){return e.apply(this,arguments)}}();return s.a.createElement(s.a.Fragment,null,s.a.createElement(g.a,{error:x,onClear:k}),s.a.createElement("li",{className:"user-item"},s.a.createElement(p.a,{className:"user-item__content"},s.a.createElement(d.b,{to:"/".concat(r,"/places")},s.a.createElement("div",{className:"user-item__image"},s.a.createElement(u.a,{image:l,alt:i})),s.a.createElement("div",{className:"user-item__info"},s.a.createElement("h2",null,i)))),s.a.createElement(v.a,{variant:"contained",color:"primary",onClick:function(){return S(r)}},s.a.createElement("i",{className:"fas fa-check-circle"}),"Accept")," ",s.a.createElement(v.a,{variant:"contained",color:"secondary",onClick:function(){return O(r)}},s.a.createElement("i",{className:"fas fa-window-close"}),"Cancel")))},x=function(e){var a=e.auth,t=e.friendRequests,n=e.acceptFriendHandler,r=e.cancelFriendHandler;return 0===t.length?s.a.createElement("div",{className:"center m-1"},s.a.createElement(p.a,null,s.a.createElement("h2",{className:"gray-text"},"No friend requests found."))):s.a.createElement("ul",{className:"users-list"},t.map((function(e){return s.a.createElement(y,{auth:a,request:e,key:e.id,acceptFriendHandler:n,cancelFriendHandler:r})})))};a.default=function(){var e=Object(l.useContext)(h.a),a=Object(l.useState)([]),t=Object(i.a)(a,2),r=t[0],d=t[1],u=Object(l.useState)([]),p=Object(i.a)(u,2),m=p[0],v=p[1],y=Object(l.useState)([]),E=Object(i.a)(y,2),k=E[0],S=E[1],O=Object(f.a)(),j=O.isLoading,C=O.error,w=O.sendRequest,z=O.clearError;Object(l.useEffect)((function(){var a=function(){var a=Object(c.a)(o.a.mark((function a(){var t;return o.a.wrap((function(a){for(;;)switch(a.prev=a.next){case 0:return a.prev=0,a.next=3,w("".concat("https://placesharing.herokuapp.com/api","/user/friends"),"GET",null,{Authorization:"Bearer "+e.token});case 3:t=a.sent,d(t.friends),a.next=9;break;case 7:a.prev=7,a.t0=a.catch(0);case 9:case"end":return a.stop()}}),a,null,[[0,7]])})));return function(){return a.apply(this,arguments)}}(),t=function(){var a=Object(c.a)(o.a.mark((function a(){var t;return o.a.wrap((function(a){for(;;)switch(a.prev=a.next){case 0:return a.prev=0,a.next=3,w("".concat("https://placesharing.herokuapp.com/api","/user/friends/requests"),"GET",null,{Authorization:"Bearer "+e.token});case 3:t=a.sent,v(t.friendRequests),a.next=9;break;case 7:a.prev=7,a.t0=a.catch(0);case 9:case"end":return a.stop()}}),a,null,[[0,7]])})));return function(){return a.apply(this,arguments)}}();a(),t()}),[k,e.token,w]);var N=function(e){S((function(a){return[].concat(Object(n.a)(a),[e])}))};return s.a.createElement(l.Fragment,null,s.a.createElement("div",{className:"fade-in no-select"},s.a.createElement(g.a,{error:C,onClear:z}),!j&&r&&s.a.createElement(b,{friends:r}),s.a.createElement(g.a,{error:C,onClear:z}),!j&&m&&s.a.createElement(x,{auth:e,friendRequests:m,acceptFriendHandler:N,cancelFriendHandler:N})))}},134:function(e,a,t){"use strict";var n=t(60),r=t(1),o=t(0),c=(t(10),t(62)),i=t(63),l=t(79),s=t(177),d=t(73),u=o.forwardRef((function(e,a){var t=e.children,i=e.classes,l=e.className,u=e.color,p=void 0===u?"default":u,m=e.component,b=void 0===m?"button":m,h=e.disabled,f=void 0!==h&&h,g=e.disableElevation,v=void 0!==g&&g,y=e.disableFocusRipple,x=void 0!==y&&y,E=e.endIcon,k=e.focusVisibleClassName,S=e.fullWidth,O=void 0!==S&&S,j=e.size,C=void 0===j?"medium":j,w=e.startIcon,z=e.type,N=void 0===z?"button":z,R=e.variant,T=void 0===R?"text":R,_=Object(n.a)(e,["children","classes","className","color","component","disabled","disableElevation","disableFocusRipple","endIcon","focusVisibleClassName","fullWidth","size","startIcon","type","variant"]),F=w&&o.createElement("span",{className:Object(c.a)(i.startIcon,i["iconSize".concat(Object(d.a)(C))])},w),q=E&&o.createElement("span",{className:Object(c.a)(i.endIcon,i["iconSize".concat(Object(d.a)(C))])},E);return o.createElement(s.a,Object(r.a)({className:Object(c.a)(i.root,i[T],l,"inherit"===p?i.colorInherit:"default"!==p&&i["".concat(T).concat(Object(d.a)(p))],"medium"!==C&&[i["".concat(T,"Size").concat(Object(d.a)(C))],i["size".concat(Object(d.a)(C))]],v&&i.disableElevation,f&&i.disabled,O&&i.fullWidth),component:b,disabled:f,focusRipple:!x,focusVisibleClassName:Object(c.a)(i.focusVisible,k),ref:a,type:N},_),o.createElement("span",{className:i.label},F,t,q))}));a.a=Object(i.a)((function(e){return{root:Object(r.a)({},e.typography.button,{boxSizing:"border-box",minWidth:64,padding:"6px 16px",borderRadius:e.shape.borderRadius,color:e.palette.text.primary,transition:e.transitions.create(["background-color","box-shadow","border"],{duration:e.transitions.duration.short}),"&:hover":{textDecoration:"none",backgroundColor:Object(l.c)(e.palette.text.primary,e.palette.action.hoverOpacity),"@media (hover: none)":{backgroundColor:"transparent"},"&$disabled":{backgroundColor:"transparent"}},"&$disabled":{color:e.palette.action.disabled}}),label:{width:"100%",display:"inherit",alignItems:"inherit",justifyContent:"inherit"},text:{padding:"6px 8px"},textPrimary:{color:e.palette.primary.main,"&:hover":{backgroundColor:Object(l.c)(e.palette.primary.main,e.palette.action.hoverOpacity),"@media (hover: none)":{backgroundColor:"transparent"}}},textSecondary:{color:e.palette.secondary.main,"&:hover":{backgroundColor:Object(l.c)(e.palette.secondary.main,e.palette.action.hoverOpacity),"@media (hover: none)":{backgroundColor:"transparent"}}},outlined:{padding:"5px 15px",border:"1px solid ".concat("light"===e.palette.type?"rgba(0, 0, 0, 0.23)":"rgba(255, 255, 255, 0.23)"),"&$disabled":{border:"1px solid ".concat(e.palette.action.disabledBackground)}},outlinedPrimary:{color:e.palette.primary.main,border:"1px solid ".concat(Object(l.c)(e.palette.primary.main,.5)),"&:hover":{border:"1px solid ".concat(e.palette.primary.main),backgroundColor:Object(l.c)(e.palette.primary.main,e.palette.action.hoverOpacity),"@media (hover: none)":{backgroundColor:"transparent"}}},outlinedSecondary:{color:e.palette.secondary.main,border:"1px solid ".concat(Object(l.c)(e.palette.secondary.main,.5)),"&:hover":{border:"1px solid ".concat(e.palette.secondary.main),backgroundColor:Object(l.c)(e.palette.secondary.main,e.palette.action.hoverOpacity),"@media (hover: none)":{backgroundColor:"transparent"}},"&$disabled":{border:"1px solid ".concat(e.palette.action.disabled)}},contained:{color:e.palette.getContrastText(e.palette.grey[300]),backgroundColor:e.palette.grey[300],boxShadow:e.shadows[2],"&:hover":{backgroundColor:e.palette.grey.A100,boxShadow:e.shadows[4],"@media (hover: none)":{boxShadow:e.shadows[2],backgroundColor:e.palette.grey[300]},"&$disabled":{backgroundColor:e.palette.action.disabledBackground}},"&$focusVisible":{boxShadow:e.shadows[6]},"&:active":{boxShadow:e.shadows[8]},"&$disabled":{color:e.palette.action.disabled,boxShadow:e.shadows[0],backgroundColor:e.palette.action.disabledBackground}},containedPrimary:{color:e.palette.primary.contrastText,backgroundColor:e.palette.primary.main,"&:hover":{backgroundColor:e.palette.primary.dark,"@media (hover: none)":{backgroundColor:e.palette.primary.main}}},containedSecondary:{color:e.palette.secondary.contrastText,backgroundColor:e.palette.secondary.main,"&:hover":{backgroundColor:e.palette.secondary.dark,"@media (hover: none)":{backgroundColor:e.palette.secondary.main}}},disableElevation:{boxShadow:"none","&:hover":{boxShadow:"none"},"&$focusVisible":{boxShadow:"none"},"&:active":{boxShadow:"none"},"&$disabled":{boxShadow:"none"}},focusVisible:{},disabled:{},colorInherit:{color:"inherit",borderColor:"currentColor"},textSizeSmall:{padding:"4px 5px",fontSize:e.typography.pxToRem(13)},textSizeLarge:{padding:"8px 11px",fontSize:e.typography.pxToRem(15)},outlinedSizeSmall:{padding:"3px 9px",fontSize:e.typography.pxToRem(13)},outlinedSizeLarge:{padding:"7px 21px",fontSize:e.typography.pxToRem(15)},containedSizeSmall:{padding:"4px 10px",fontSize:e.typography.pxToRem(13)},containedSizeLarge:{padding:"8px 22px",fontSize:e.typography.pxToRem(15)},sizeSmall:{},sizeLarge:{},fullWidth:{width:"100%"},startIcon:{display:"inherit",marginRight:8,marginLeft:-4,"&$iconSizeSmall":{marginLeft:-2}},endIcon:{display:"inherit",marginRight:-4,marginLeft:8,"&$iconSizeSmall":{marginRight:-2}},iconSizeSmall:{"& > *:first-child":{fontSize:18}},iconSizeMedium:{"& > *:first-child":{fontSize:20}},iconSizeLarge:{"& > *:first-child":{fontSize:22}}}}),{name:"MuiButton"})(u)},61:function(e,a,t){"use strict";var n=t(0),r=t.n(n);t(68);a.a=function(e){return r.a.createElement("div",{className:"card ".concat(e.className),style:e.style},e.children)}},68:function(e,a,t){},76:function(e,a,t){"use strict";var n=t(0),r=t.n(n);t(82);a.a=function(e){var a=e.image,t=e.alt,n=e.style,o=e.className,c=e.width;return r.a.createElement("div",{className:"avatar ".concat(o),style:n},r.a.createElement("img",{src:a,alt:t,style:{width:c,height:c}}))}},82:function(e,a,t){}}]);
//# sourceMappingURL=17.2207f9bc.chunk.js.map