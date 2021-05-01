(this["webpackJsonpweather-app"]=this["webpackJsonpweather-app"]||[]).push([[0],{115:function(e,t,n){"use strict";n.r(t);var r,a,c,o,i,l,s=n(0),d=n.n(s),u=n(17),h=n.n(u),f=(n(86),n(13)),j=(n(92),n(135)),m=n(138),b=n(134),x=n(65),p=n.n(x),O=n(66),g=n.n(O),w=n(133),y=Object(s.createContext)(null),v=n(2),C=Object(w.a)((function(){return{arrowButtonsContainer:{display:"flex",flexDirection:"row",justifyContent:"space-between","& svg":{height:"5rem",width:"5rem"}}}})),E=function(){var e=C(),t=Object(s.useContext)(y),n=t.selectedCardIndex,r=t.setSelectedCardIndex,a=function(e){return r("left"===e?n-1:n+1)},c=Object(f.c)((function(e){return{length:e.weather.length}})).length;return Object(v.jsxs)(m.a,{className:e.arrowButtonsContainer,size:"large","aria-label":"button group",fullWidth:!0,orientation:"horizontal",children:[Object(v.jsx)(b.a,{onClick:function(){return a("left")},color:"primary","aria-label":"left",disabled:n<=0,children:Object(v.jsx)(p.a,{})}),Object(v.jsx)(b.a,{onClick:function(){return a("right")},color:"primary","aria-label":"right",disabled:n>=c-1,children:Object(v.jsx)(g.a,{})})]})},S=function(e){return Math.round(1.8*(e-273)+32)},T=function(e,t,n){var r;return t?"".concat(Math.round((r=e,5/9*(r-32)))).concat(n?"\xb0C":""):"".concat(Math.round(e)).concat(n?"\xb0F":"")},I=n(21),M=n(22),_=M.a.div(r||(r=Object(I.a)(["\n  height: 20rem;\n  display: flex;\n  flex-direction: column;\n  justify-content: flex-end;\n  max-width: 100%;\n  @media (max-width: 425px) {\n    margin: 1.6rem 0 0 2.6rem;\n    height: 10rem;\n  },\n"]))),N=M.a.div(a||(a=Object(I.a)(["\n  display: flex;\n  justify-content: space-between;\n  width: 100%;\n  height: 100%;\n  @media (max-width: 425px) {\n    width: 40%;\n    transform: rotate(90deg);\n  },\n"]))),W=M.a.div(c||(c=Object(I.a)(["\n  display: flex;\n  flex-direction: column;\n  justify-content: flex-end;\n  align-items: center;\n"]))),k=M.a.div(o||(o=Object(I.a)(["\n  height: ","%;\n  background-color: #6495ed;\n  margin-top: 1rem;\n  width: 2.4rem;\n  box-shadow: 0 0 0.5rem black;\n\n  @media (max-width: 425px) {\n    width: 1.5rem;\n  }\n"])),(function(e){return e.height})),L=M.a.span(i||(i=Object(I.a)(["\n  font-size: 1.2rem;\n  text-align: center;\n  @media (max-width: 425px) {\n    transform: rotate(270deg);\n  },\n"]))),R=M.a.div(l||(l=Object(I.a)(["\n  font-size: 0.8rem;\n  margin-top: 0.5rem;\n  @media (max-width: 425px) {\n    margin-top: 2rem;\n    transform: rotate(270deg);\n  },\n"]))),z=function(){var e=Object(s.useContext)(y),t=e.isMetric,n=e.selectedCardIndex,r=Object(f.c)((function(e){return{forecast:e.weather.forecast}})).forecast,a=r&&r.length>0&&r.find((function(e){return e.id===n})).threeHour;return Object(v.jsx)(_,{children:Object(v.jsx)(N,{children:a&&a.map((function(e){return Object(v.jsxs)(W,{children:[Object(v.jsx)(L,{children:T(e.temp,t,!0)}),Object(v.jsx)(k,{height:T(e.temp,t)}),Object(v.jsxs)(R,{children:[" ",e.hour," "]})]})}))})})},A=n(136),D=n(139),H=n(70),B=n.n(H),Y=n(32),F=n.n(Y),G=(n(97),n(71)),J=n.n(G),P=function(e){var t=e.lat,n=e.long;return J.a.get("".concat("https://api.openweathermap.org/data/2.5","/forecast?lat=").concat(t,"&lon=").concat(n,"&appid=").concat("b4ba51d1cb7f483373fab3430dd14f6f"))},U="SET_WEATHER_START",$="SET_WEATHER_SUCCESS",q="SET_LOCATION",K="SET_FORECAST_LENGTH",Q="SET_WEATHER_ERROR",V="SET_IS_LOADING",X=function(e){return{type:V,payload:e}},Z=function(e){var t=e.lat,n=e.long;return function(e){e({type:U}),e(X({isLoading:!0})),P({lat:t,long:n}).then((function(t){console.log({res:t});var n,r=t.data,a=r.city,c=function(e){var t=[];return Object.keys(e).map((function(n,r){return t.push({id:r,date:F()(n).locale("de").format("LL"),threeHour:e[n].map((function(e){return{hour:F()(e.dt_txt).format("HH:mm"),temp:S(e.main.temp)}})),average:S((a=e[n],a.map((function(e){return e.main.temp})).reduce((function(e,t){return e+t}),0)/a.length))});var a})),t}(B.a.groupBy(r.list,(function(e){return F()(e.dt_txt).startOf("day").format("YYYY-MM-DD")})));e(function(e){return{type:$,payload:{forecast:e}}}(c)),e({type:q,payload:{location:a}}),e((n=c.length,{type:K,payload:{length:n}}))})).catch((function(t){console.log(t),e({type:Q,payload:t})})).finally((function(){e(X({isLoading:!1}))}))}},ee=Object(w.a)((function(){return{weatherContainer:{display:"flex",flexDirection:"row",justifyContent:"space-between",width:"100%"},weatherCard:{display:"flex",flexDirection:"column",alignItems:"center",padding:"0 1.6rem 1.6rem 1.6rem",border:"0.2rem solid","@media (max-width: 425px)":{padding:"0 0.5rem 0.5rem 0.5rem","&:not(:last-child)":{marginRight:"1.5rem"}}},title:{fontWeight:"400",fontSize:"1.4rem",marginBottom:"1rem",overflow:"auto","@media (max-width: 425px)":{fontSize:"1rem"}},subtitle:{fontSize:"0.8rem","@media (max-width: 425px)":{fontSize:"0.8rem"}},value:{fontWeight:"700",fontSize:"1.2rem"}}})),te=function(){var e=Object(s.useContext)(y),t=e.isMetric,n=e.selectedCardIndex,r=Object(f.b)(),a=ee();Object(s.useEffect)((function(){navigator.geolocation&&navigator.geolocation.getCurrentPosition((function(e){r(Z({lat:e.coords.latitude,long:e.coords.longitude}))}))}),[r]);var c=Object(f.c)((function(e){return{forecast:e.weather.forecast,length:e.weather.length,isError:e.weather.isError}})),o=c.forecast,i=c.length,l=c.isError;Object(s.useEffect)((function(){l&&console.log("Cannot load weather for this place")}),[l]);var d=function(e){return e===n};return Object(v.jsx)(A.a,{className:a.weatherContainer,children:o&&o.map((function(e,r){return function(e){return 0===n?e<=n+2:n===i-1?e>=n-2:e===n||e===n+1||e===n-1}(r)&&Object(v.jsxs)(D.a,{className:a.weatherCard,elevation:d(r)?8:4,style:{borderColor:d(r)?"#6495ed":"#fff",opacity:d(r)?"1":"0.4"},children:[Object(v.jsx)("h6",{className:a.title,children:e.date}),Object(v.jsx)("p",{className:a.subtitle,children:" Daily Average: "}),Object(v.jsxs)("p",{className:a.value,children:[" ",T(e.average,t,!0)," "]})]})}))})},ne=n(140),re=n(142),ae=n(137),ce=function(){var e=Object(s.useContext)(y),t=e.isMetric,n=e.setIsMetric,r=t?"celcius":"fahrenheit";return Object(v.jsx)(A.a,{display:"flex",justifyContent:"center",children:Object(v.jsxs)(ne.a,{row:!0,className:"radio","aria-label":"unit",name:"unit",value:r,onChange:function(){return n(!t)},children:[Object(v.jsx)(re.a,{value:"fahrenheit",control:Object(v.jsx)(ae.a,{color:"primary"}),label:"Fahrenheit"}),Object(v.jsx)(re.a,{value:"celcius",control:Object(v.jsx)(ae.a,{color:"primary"}),label:"Celcius"})]})})},oe=n(43),ie=function(e){var t=e.children,n=Object(s.useState)(!1),r=Object(oe.a)(n,2),a=r[0],c=r[1],o=Object(s.useState)(2),i=Object(oe.a)(o,2),l=i[0],d=i[1];return Object(v.jsx)(y.Provider,{value:{isMetric:a,setIsMetric:c,selectedCardIndex:l,setSelectedCardIndex:d},children:t})},le=function(){var e=Object(f.c)((function(e){return{location:e.weather.location}})).location,t=Object(w.a)((function(){return{card:{display:"flex",justifyContent:"center",padding:"0 1rem",marginBottom:"1rem",backgroundColor:"#6495ed","& h3":{color:"#e6e6e6"}}}}))();return Object(v.jsx)(D.a,{className:t.card,children:Object(v.jsxs)("h3",{children:["Weather in: ",e&&e.name,",",e&&e.country]})})},se=function(){return Object(v.jsx)(j.a,{maxWidth:"sm",children:Object(v.jsxs)(ie,{children:[Object(v.jsx)(ce,{}),Object(v.jsx)(E,{}),Object(v.jsx)(le,{}),Object(v.jsx)(te,{}),Object(v.jsx)(z,{})]})})},de=function(){return Object(v.jsx)(se,{})},ue=function(){return Object(v.jsx)(de,{})},he=n(33),fe=n(72),je=n(73),me=n(14),be={forecast:[],location:[],isError:!1,isLoading:!1},xe=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:be,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case U:return e;case $:return Object(me.a)(Object(me.a)({},e),{},{forecast:t.payload.forecast});case q:return Object(me.a)(Object(me.a)({},e),{},{location:t.payload.location});case V:return Object(me.a)(Object(me.a)({},e),{},{isLoading:t.payload.isLoading});case K:return Object(me.a)(Object(me.a)({},e),{},{length:t.payload.length});case Q:return Object(me.a)(Object(me.a)({},e),{},{isError:!0});default:return e}},pe=Object(he.combineReducers)({weather:xe}),Oe=[fe.a],ge=Object(he.createStore)(pe,be,Object(je.composeWithDevTools)(he.applyMiddleware.apply(void 0,Oe)));Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));h.a.render(Object(v.jsx)(d.a.StrictMode,{children:Object(v.jsx)(f.a,{store:ge,children:Object(v.jsx)(ue,{})})}),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()}))},86:function(e,t,n){},92:function(e,t,n){}},[[115,1,2]]]);
//# sourceMappingURL=main.b693720d.chunk.js.map