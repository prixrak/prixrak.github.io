"use strict";(self.webpackChunkrep08=self.webpackChunkrep08||[]).push([[716],{1236:function(e,t,n){n.r(t);var a=n(885),r=n(2791),o=n(6989),i=n(4958),s=n(9544),u=n(2308),l=n(32),c=n(6222),g=n(2186),h=n(184),D=(0,l.Pi)((function(){var e=(0,r.useState)(!1),t=(0,a.Z)(e,2),n=t[0],l=t[1];return(0,r.useEffect)((function(){c.Z.device===g.ii?l(!1):l(!0)}),[c.Z.device]),(0,h.jsx)(h.Fragment,{children:i.Z.isFetchingTransactions||o.Z.sorting||null===o.Z.transactions?(0,h.jsx)("div",{className:"overview__item overview__transactions",children:(0,h.jsx)(u.Z,{})}):(0,h.jsx)(s.Z,{classes:"archive__transactions",isResults:o.Z.isResults,isDetail:n,transactions:o.Z.transactions})})}));t.default=D},7711:function(e,t,n){n.d(t,{uf:function(){return a},Pz:function(){return r},NC:function(){return o}});var a=function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:new Date,n=new Date;return n.setMonth(t.getMonth()-e),[t.toLocaleDateString("en-CA"),n.toLocaleDateString("en-CA")]},r=function(e){if(!e)return"Today";var t=new Date((new Date).toLocaleDateString("en-CA")),n=new Date(e),a=Math.abs(t-n),r=Math.ceil(a/864e5);return 0===r?"Today":1===r?"Yesterday":r>1?n.toLocaleString("en-us",{day:"numeric"})+" "+n.toLocaleString("en-us",{month:"long"})+", "+n.toLocaleString("en-us",{year:"numeric"}):void 0},o=function(e){for(var t=new Date(e.getFullYear(),e.getMonth(),0),n=t.getDate(),a=new Date(e.getFullYear(),e.getMonth(),1),r=(new Date(e.getFullYear(),e.getMonth(),1).getDate(),a.toLocaleString("en-us",{weekday:"short"}).toUpperCase()),o=new Date(e.getFullYear(),e.getMonth()+1,0),i=new Date(e.getFullYear(),e.getMonth()+1,0).getDate(),s=(o.toLocaleString("en-us",{weekday:"short"}).toUpperCase(),new Date(e.getFullYear(),e.getMonth()+1,1)),u=s.getDate(),l=["SUN","MON","TUE","WED","THU","FRI","SAT"].indexOf(r),c=[],g=1,h=0;h<35;h++)h<l?c.push({day:n-l+h+1,id:h,date:new Date(t.getFullYear(),t.getMonth(),n-l+h+1).toLocaleDateString("en-CA"),this:!1}):h>=l&&g<=i?c.push({day:g++,id:h,date:new Date(a.getFullYear(),a.getMonth(),g-1).toLocaleDateString("en-CA"),this:!0}):c.push({day:u++,id:h,date:new Date(s.getFullYear(),s.getMonth(),u-1).toLocaleDateString("en-CA"),this:!1});return c}}}]);
//# sourceMappingURL=716.4ef7d1d0.chunk.js.map