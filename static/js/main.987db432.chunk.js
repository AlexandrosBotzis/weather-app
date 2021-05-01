(this["webpackJsonpweather-app"]=this["webpackJsonpweather-app"]||[]).push([[0],{115:function(e,t,n){"use strict";n.r(t);var a,r,c,i,o,l,s=n(0),d=n.n(s),u=n(17),h=n.n(u),j=(n(86),n(13)),b=(n(92),n(135)),f=n(136),m=n(139),p=n(134),x=n(65),O=n.n(x),g=n(66),w=n.n(g),y=n(133),v=Object(s.createContext)(null),C=n(2),S=Object(y.a)((function(){return{arrowButtonsContainer:{display:"flex",flexDirection:"row",justifyContent:"space-between","& svg":{height:"5rem",width:"5rem"}}}})),E=function(){var e=S(),t=Object(s.useContext)(v),n=t.selectedCardIndex,a=t.setSelectedCardIndex,r=function(e){return a("left"===e?n-1:n+1)},c=Object(j.c)((function(e){return{length:e.weather.length}})).length;return Object(C.jsxs)(m.a,{className:e.arrowButtonsContainer,size:"large","aria-label":"button group",fullWidth:!0,orientation:"horizontal",children:[Object(C.jsx)(p.a,{onClick:function(){return r("left")},color:"primary","aria-label":"left",disabled:n<=0,children:Object(C.jsx)(O.a,{})}),Object(C.jsx)(p.a,{onClick:function(){return r("right")},color:"primary","aria-label":"right",disabled:n>=c-1,children:Object(C.jsx)(w.a,{})})]})},T=function(e){return Math.round(1.8*(e-273)+32)},I=function(e,t,n){var a;return t?"".concat(Math.round((a=e,5/9*(a-32)))).concat(n?"\xb0C":""):"".concat(Math.round(e)).concat(n?"\xb0F":"")},M=n(21),_=n(22),k=_.a.div(a||(a=Object(M.a)(["\n  height: 20rem;\n  display: flex;\n  flex-direction: column;\n  justify-content: flex-end;\n  max-width: 100%;\n  @media (max-width: 425px) {\n    margin: 1.6rem 0 0 2.6rem;\n    height: 10rem;\n  },\n"]))),D=_.a.div(r||(r=Object(M.a)(["\n  display: flex;\n  justify-content: space-between;\n  width: 100%;\n  height: 100%;\n  @media (max-width: 425px) {\n    width: 40%;\n    transform: rotate(90deg);\n  },\n"]))),N=_.a.div(c||(c=Object(M.a)(["\n  display: flex;\n  flex-direction: column;\n  justify-content: flex-end;\n  align-items: center;\n"]))),W=_.a.div(i||(i=Object(M.a)(["\n  height: ","%;\n  background-color: #6495ed;\n  margin-top: 1rem;\n  width: 2.4rem;\n  box-shadow: 0 0 0.5rem black;\n\n  @media (max-width: 425px) {\n    width: 1.5rem;\n  }\n"])),(function(e){return e.height})),R=_.a.span(o||(o=Object(M.a)(["\n  font-size: 1.2rem;\n  text-align: center;\n  @media (max-width: 425px) {\n    transform: rotate(270deg);\n  },\n"]))),z=_.a.div(l||(l=Object(M.a)(["\n  font-size: 0.8rem;\n  margin-top: 0.5rem;\n  @media (max-width: 425px) {\n    margin-top: 2rem;\n    transform: rotate(270deg);\n  },\n"]))),L=function(){var e=Object(s.useContext)(v),t=e.isMetric,n=e.selectedCardIndex,a=Object(j.c)((function(e){return{weather:e.weather.weatherData}})).weather,r=a&&a.length>0&&a.find((function(e){return e.id===n})).threeHour;return Object(C.jsx)(k,{children:Object(C.jsx)(D,{children:r&&r.map((function(e){return Object(C.jsxs)(N,{children:[Object(C.jsx)(R,{children:I(e.temp,t,!0)}),Object(C.jsx)(W,{height:I(e.temp,t)}),Object(C.jsxs)(z,{children:[" ",e.hour," "]})]})}))})})},A=n(137),B=n(140),H=n(70),Y=n.n(H),F=n(32),G=n.n(F),J=(n(97),n(71)),P=n.n(J),U=function(e){var t=e.lat,n=e.long;return P.a.get("".concat("https://api.openweathermap.org/data/2.5","/forecast?lat=").concat(t,"&lon=").concat(n,"&appid=").concat("b4ba51d1cb7f483373fab3430dd14f6f"))},$="SET_WEATHER_START",q="SET_WEATHER_SUCCESS",K="SET_LOCATION",Q="SET_FORECAST_LENGTH",V="SET_WEATHER_ERROR",X="SET_IS_LOADING",Z=function(e){var t=e.lat,n=e.long;return function(e){e({type:$}),U({lat:t,long:n}).then((function(t){var n,a=t.data,r=a.city,c=function(e){var t=[];return Object.keys(e).map((function(n,a){return t.push({id:a,date:G()(n).locale("de").format("LL"),threeHour:e[n].map((function(e){return{hour:G()(e.dt_txt).format("HH:mm"),temp:T(e.main.temp)}})),average:T((r=e[n],r.map((function(e){return e.main.temp})).reduce((function(e,t){return e+t}),0)/r.length))});var r})),t}(Y.a.groupBy(a.list,(function(e){return G()(e.dt_txt).startOf("day").format("YYYY-MM-DD")})));e({type:q,payload:{weather:c}}),e({type:K,payload:{location:r}}),e((n=c.length,{type:Q,payload:{length:n}}))})).catch((function(t){e({type:V,payload:t})}))}},ee=Object(y.a)((function(){return{weatherContainer:{display:"flex",flexDirection:"row",justifyContent:"space-between",width:"100%"},weatherCard:{display:"flex",flexDirection:"column",alignItems:"center",padding:"0 1.6rem 1.6rem 1.6rem",border:"0.2rem solid","@media (max-width: 425px)":{padding:"0 0.5rem 0.5rem 0.5rem","&:not(:last-child)":{marginRight:"1.5rem"}}},title:{fontWeight:"400",fontSize:"1.4rem",marginBottom:"1rem",overflow:"auto","@media (max-width: 425px)":{fontSize:"1rem"}},subtitle:{fontSize:"0.8rem","@media (max-width: 425px)":{fontSize:"0.8rem"}},value:{fontWeight:"700",fontSize:"1.2rem"}}})),te=function(){var e=Object(s.useContext)(v),t=e.isMetric,n=e.selectedCardIndex,a=Object(j.b)(),r=ee();Object(s.useEffect)((function(){navigator.geolocation&&navigator.geolocation.getCurrentPosition((function(e){a(Z({lat:e.coords.latitude,long:e.coords.longitude}))}))}),[a]);var c=Object(j.c)((function(e){return{weather:e.weather.weatherData,length:e.weather.length,isError:e.weather.isError}})),i=c.weather,o=c.length,l=c.isError;Object(s.useEffect)((function(){l&&console.log("Cannot load weather for this place")}),[l]);var d=function(e){return e===n};return Object(C.jsx)(A.a,{className:r.weatherContainer,children:i&&i.map((function(e,a){return function(e){return 0===n?e<=n+2:n===o-1?e>=n-2:e===n||e===n+1||e===n-1}(a)&&Object(C.jsxs)(B.a,{className:r.weatherCard,elevation:d(a)?8:4,style:{borderColor:d(a)?"#6495ed":"#fff",opacity:d(a)?"1":"0.4"},children:[Object(C.jsx)("h6",{className:r.title,children:e.date}),Object(C.jsx)("p",{className:r.subtitle,children:" Daily Average: "}),Object(C.jsxs)("p",{className:r.value,children:[" ",I(e.average,t,!0)," "]})]})}))})},ne=n(141),ae=n(143),re=n(138),ce=function(){var e=Object(s.useContext)(v),t=e.isMetric,n=e.setIsMetric,a=t?"celcius":"fahrenheit";return Object(C.jsx)(A.a,{display:"flex",justifyContent:"center",children:Object(C.jsxs)(ne.a,{row:!0,className:"radio","aria-label":"unit",name:"unit",value:a,onChange:function(){return n(!t)},children:[Object(C.jsx)(ae.a,{value:"fahrenheit",control:Object(C.jsx)(re.a,{color:"primary"}),label:"Fahrenheit"}),Object(C.jsx)(ae.a,{value:"celcius",control:Object(C.jsx)(re.a,{color:"primary"}),label:"Celcius"})]})})},ie=n(42),oe=function(e){var t=e.children,n=Object(s.useState)(!1),a=Object(ie.a)(n,2),r=a[0],c=a[1],i=Object(s.useState)(!0),o=Object(ie.a)(i,2),l=o[0],d=o[1],u=Object(s.useState)(2),h=Object(ie.a)(u,2),j=h[0],b=h[1];return Object(C.jsx)(v.Provider,{value:{isMetric:r,setIsMetric:c,loading:l,setLoading:d,selectedCardIndex:j,setSelectedCardIndex:b},children:t})},le=function(){var e=Object(j.c)((function(e){return{location:e.weather.location}})).location,t=Object(y.a)((function(){return{card:{display:"flex",justifyContent:"center",padding:"0 1rem",marginBottom:"1rem",backgroundColor:"#6495ed","& h3":{color:"#e6e6e6"}}}}))();return Object(C.jsx)(B.a,{className:t.card,children:Object(C.jsxs)("h3",{children:["Weather in: ",e&&e.name,",",e&&e.country]})})},se=function(){return Object(j.c)((function(e){return{loading:e.weather.isLoading}})).loading?Object(C.jsx)(b.a,{}):Object(C.jsx)(f.a,{maxWidth:"sm",children:Object(C.jsxs)(oe,{children:[Object(C.jsx)(ce,{}),Object(C.jsx)(E,{}),Object(C.jsx)(le,{}),Object(C.jsx)(te,{}),Object(C.jsx)(L,{})]})})},de={paperContainer:{backgroundImage:"url(/public/weatherBackground.jpeg)"}},ue=function(){return Object(C.jsx)(se,{style:de.paperContainer})},he=function(){return Object(C.jsx)(ue,{})},je=n(33),be=n(72),fe=n(73),me=n(14),pe={weather:{weatherData:[],isLoading:!1}},xe=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:pe,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case $:return e;case q:return Object(me.a)(Object(me.a)({},e),{},{weatherData:t.payload.weather});case K:return Object(me.a)(Object(me.a)({},e),{},{location:t.payload.location});case X:return Object(me.a)(Object(me.a)({},e),{},{isLoading:t.payload});case Q:return Object(me.a)(Object(me.a)({},e),{},{length:t.payload.length});case V:return Object(me.a)(Object(me.a)({},e),{},{isError:!0});default:return e}},Oe=Object(je.combineReducers)({weather:xe}),ge=[be.a],we=Object(je.createStore)(Oe,pe,Object(fe.composeWithDevTools)(je.applyMiddleware.apply(void 0,ge)));Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));h.a.render(Object(C.jsx)(d.a.StrictMode,{children:Object(C.jsx)(j.a,{store:we,children:Object(C.jsx)(he,{})})}),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()}))},86:function(e,t,n){},92:function(e,t,n){}},[[115,1,2]]]);
//# sourceMappingURL=main.987db432.chunk.js.map