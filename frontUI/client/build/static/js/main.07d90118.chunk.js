(this.webpackJsonpnicecarwash=this.webpackJsonpnicecarwash||[]).push([[0],{258:function(e,t,a){},259:function(e,t,a){},282:function(e,t,a){"use strict";a.r(t);var n=a(1),r=a(0),o=a.n(r),c=a(10),i=a.n(c),s=a(15),l=a(27),d=a(6),p=a(11),u=a(20);var g=a(36),h=a(299),m=a(236),b=a(300),f=a(322),j=a(233),O={alternate:{main:"rgb(247, 249, 250)",dark:"#e8eaf6"},cardShadow:"rgba(23, 70, 161, .11)",type:"light",primary:{main:"#3f51b5",light:"rgb(71, 145, 219)",dark:"rgb(17, 82, 147)",contrastText:"#fff"},secondary:{light:"#ffb74d",main:"#f9b934",dark:"#f57c00",contrastText:"rgba(0, 0, 0, 0.87)"},text:{primary:"#2d3748",secondary:"#718096"},divider:"rgba(0, 0, 0, 0.12)",background:{paper:"#fff",default:"#fff",level2:"#f5f5f5",level1:"#fff",footer:"#1b1642"}},v={alternate:{main:"#2D3748",dark:"#24242b"},cardShadow:"rgba(0, 0, 0, .11)",common:{black:"#000",white:"#fff"},type:"dark",primary:{main:"#90caf9",light:"rgb(166, 212, 250)",dark:"rgb(100, 141, 174)",contrastText:"rgba(0, 0, 0, 0.87)"},secondary:{light:"#ffb74d",main:"#f9b934",dark:"#f57c00",contrastText:"rgba(0, 0, 0, 0.87)"},text:{primary:"#EEEEEF",secondary:"#AEB0B4"},divider:"rgba(255, 255, 255, 0.12)",background:{paper:"#1A202C",default:"#121212",level2:"#333",level1:"#2D3748",footer:"#18181f"}},x=function(e){return Object(f.a)(Object(j.a)({palette:"light"===e?O:v,layout:{contentWidth:1236},typography:{fontFamily:"Lato"},zIndex:{appBar:1200,drawer:1100}}))},y=a(67),w=a.n(y);function I(e){var t=e.component,a=e.layout,c=Object(p.a)(e,["component","layout"]);o.a.useEffect((function(){var e=document.querySelector("#jss-server-side");e&&e.parentElement.removeChild(e),w.a.init({once:!0,delay:50,duration:500,easing:"ease-in-out"})}),[]);var i=function(){var e=Object(r.useState)("light"),t=Object(g.a)(e,2),a=t[0],n=t[1],o=Object(r.useState)(!1),c=Object(g.a)(o,2),i=c[0],s=c[1],l=function(e){window.localStorage.setItem("themeMode",e),n(e)};return Object(r.useEffect)((function(){var e=window.localStorage.getItem("themeMode");e?n(e):l("light"),s(!0),w.a.refresh()}),[]),Object(r.useEffect)((function(){w.a.refresh()}),[a]),[a,function(){l("light"===a?"dark":"light")},i]}(),s=Object(g.a)(i,3),l=s[0],u=s[1],f=s[2];return Object(r.useEffect)((function(){w.a.refresh()}),[f]),Object(n.jsxs)(h.a,{theme:x(l),children:[Object(n.jsx)(b.a,{}),Object(n.jsx)(m.a,{elevation:0,children:Object(n.jsx)(a,{themeMode:l,themeToggler:u,children:Object(n.jsx)(t,Object(d.a)({themeMode:l},c))})})]})}var k=a(16),S=a(3),T=a(301),E=(a(18),a(283),a(318)),N=a(62);a(253);N.a.initializeApp({apiKey:"AIzaSyCOLlh5It6dPmagmPDsouXUnoRIeFPJh1U",authDomain:"nice-car-wash.firebaseapp.com",projectId:"nice-car-wash",storageBucket:"nice-car-wash.appspot.com",messagingSenderId:"1008985706171",appId:"1:1008985706171:web:3006e4e76ebacdb6c8e39e",measurementId:"G-LYDYTBMKF6"});N.a.default.auth(),new N.a.auth.GoogleAuthProvider,new N.a.auth.FacebookAuthProvider,N.a;var C=a.p+"static/media/Logo.a34d760a.png",P=(Object(T.a)((function(e){var t;return{root:(t={padding:e.spacing(6,0)},Object(k.a)(t,e.breakpoints.up("md"),{padding:e.spacing(12,0)}),Object(k.a)(t,"background",e.palette.background.footer),t),footerContainer:Object(k.a)({maxWidth:e.layout.contentWidth,width:"100%",margin:"0 auto",padding:e.spacing(0,2)},e.breakpoints.up("sm"),{padding:e.spacing(0,8)}),logoContainerItem:{paddingTop:0},logoContainer:{width:120,height:32},logoImage:{width:"100%",height:"100%"},groupTitle:{textTransform:"uppercase",color:e.palette.primary.dark,marginBottom:e.spacing(1)},socialIcon:{padding:0,marginRight:e.spacing(1),color:"rgba(255,255,255,.6)","&:hover":{background:"transparent"},"&:last-child":{marginRight:0}},icon:{fontSize:24},menuListContainer:{padding:"0 !important"},menu:{display:"flex"},menuItem:{margin:e.spacing(2),"&:last-child":{marginBottom:0}},menuGroupItem:{paddingTop:0,paddingBottom:e.spacing(.5),"&:last-child":{paddingBottom:0}},menuGroupTitle:{textTransform:"uppercase",color:"white"},divider:{width:"100%"},navLink:{color:"rgba(255,255,255,.6)"}}})),a(309),a(310),a(303)),_=a(311),L=a(304),A=(a(226),a(19)),R=a(223),z=Object(T.a)((function(){return{root:{width:"100%",height:"100%"},dBlock:{display:"block"}}})),D=function(e){var t=e.src,a=e.srcSet,r=e.alt,o=e.lazy,c=e.lazyProps,i=e.className,s=Object(p.a)(e,["src","srcSet","alt","lazy","lazyProps","className"]),l=z();return o?Object(n.jsx)(R.LazyLoadImage,Object(d.a)(Object(d.a)({className:Object(S.a)("image",l.root,l.dBlock,i),alt:r,src:t,srcSet:a,effect:"opacity"},c),s)):Object(n.jsx)("img",Object(d.a)({className:Object(S.a)("image",l.root,i),alt:r,src:t,srcSet:a},s))};D.defaultProps={alt:"...",lazy:!0,lazyProps:{width:"auto",height:"auto"}};var U=D,B=a(302),W=Object(T.a)((function(){return{extraSmall:{fontSize:10},small:{fontSize:20},medium:{fontSize:30},large:{fontSize:40}}})),G=function(e){var t=e.fontIconClass,a=e.size,r=e.fontIconColor,o=e.className,c=Object(p.a)(e,["fontIconClass","size","fontIconColor","className"]),i=W();return Object(n.jsx)(B.a,{children:Object(n.jsx)("i",Object(d.a)({className:Object(S.a)("icon",t,i[a],o),style:{color:r}},c))})};G.defaultProps={size:"small"};var M=G,F=a(224),H=a.n(F),J=Object(T.a)((function(e){return{root:{display:"inline-flex",alignItems:"center",textDecoration:"none"},title:{fontWeight:"bold"},icon:{padding:0,marginLeft:e.spacing(1),"&:hover":{background:"transparent"}}}})),V=function(e){var t=e.color,a=(e.component,e.variant),r=e.title,o=e.href,c=e.className,i=e.iconProps,s=e.typographyProps,l=Object(p.a)(e,["color","component","variant","title","href","className","iconProps","typographyProps"]),u=J(),g=Object(n.jsxs)(n.Fragment,{children:[Object(n.jsx)(P.a,Object(d.a)(Object(d.a)({component:"span",className:Object(S.a)("learn-more-link__typography",u.title),variant:a,color:t||"primary"},s),{},{children:r})),Object(n.jsx)(L.a,Object(d.a)(Object(d.a)({className:Object(S.a)("learn-more-link__icon-button",u.icon),color:t||"primary"},i),{},{children:Object(n.jsx)(H.a,{className:"learn-more-link__arrow"})}))]});return Object(n.jsx)("a",Object(d.a)(Object(d.a)({href:o,className:Object(S.a)("learn-more-link",u.root,c)},l),{},{children:g}))};V.defaultProps={variant:"subtitle1",href:"#",typographyProps:{},iconProps:{},component:"a"};var Y=Object(T.a)((function(e){return{root:{display:"inline-flex",flexWrap:"nowrap",alignItems:"center",width:"100%"},title:{marginLeft:e.spacing(1)}}})),K=function(e){var t=e.title,a=e.color,r=e.fontIconClass,o=e.className,c=e.iconProps,i=e.typographyProps,s=Object(p.a)(e,["title","color","fontIconClass","className","iconProps","typographyProps"]),l=Y();return Object(n.jsxs)("div",Object(d.a)(Object(d.a)({className:Object(S.a)("icon-text",l.root,o)},s),{},{children:[Object(n.jsx)(M,Object(d.a)({className:"icon-text__icon",size:"small",fontIconClass:r,fontIconColor:a},c)),Object(n.jsx)(P.a,Object(d.a)(Object(d.a)({noWrap:!0,variant:"subtitle1",color:"textPrimary",className:Object(S.a)("icon-text__typography",l.title)},i),{},{children:t}))]}))};K.defaultProps={iconProps:{},typographyProps:{}};var X=a(23),q=(Object(T.a)((function(e){return{root:{position:"relative"},border:Object(k.a)({width:e.spacing(5),height:e.spacing(2),borderRadius:e.spacing(3),border:"3px solid",borderColor:e.palette.divider,backgroundColor:"transparent"},e.breakpoints.up("md"),{width:e.spacing(6),height:e.spacing(3)}),borderDark:{borderColor:X.a.indigo[700]},modeToggler:Object(k.a)({position:"absolute",top:"-".concat(e.spacing(.5),"px"),left:"-".concat(e.spacing(.5),"px"),width:e.spacing(3),height:e.spacing(3),borderRadius:"50%",backgroundColor:e.palette.text.primary,transition:"transform .3s cubic-bezier(.4,.03,0,1)",cursor:"pointer"},e.breakpoints.up("md"),{width:e.spacing(4),height:e.spacing(4)}),modeTogglerDark:{transform:"translateX(".concat(e.spacing(3),"px)"),backgroundColor:X.a.indigo[900]},modeTogglerIcon:Object(k.a)({fill:e.palette.secondary.main,marginTop:e.spacing(.5),marginLeft:e.spacing(.5)},e.breakpoints.up("md"),{marginTop:e.spacing(1),marginLeft:e.spacing(1)})}})),a(306),a(308),a(225),a(307),Object(T.a)((function(e){return{root:{position:"fixed",bottom:e.spacing(2),right:e.spacing(2)}}})),Object(T.a)((function(e){return{flexGrow:{flexGrow:1},navigationContainer:{display:"flex",justifyContent:"space-between",alignItems:"center"},toolbar:Object(k.a)({zIndex:999,maxWidth:e.layout.contentWidth,width:"100%",margin:"0 auto",padding:e.spacing(0,2)},e.breakpoints.up("sm"),{padding:e.spacing(0,8)}),navLink:{"&:hover":{color:e.palette.primary.dark}},listItem:{cursor:"pointer","&:hover > .menu-item, &:hover svg":{color:e.palette.primary.dark},"&.menu-item--no-dropdown":{paddingRight:0}},listItemActive:{"&> .menu-item":{color:e.palette.primary.dark}},listItemText:{flex:"0 0 auto",marginRight:e.spacing(2),whiteSpace:"nowrap"},listItemButton:{whiteSpace:"nowrap"},listItemIcon:{minWidth:"auto"},popover:{padding:e.spacing(4),border:e.spacing(2),boxShadow:"0 0.5rem 2rem 2px rgba(116, 123, 144, 0.09)",minWidth:350,marginTop:e.spacing(2)},iconButton:{marginLeft:e.spacing(2),padding:0,"&:hover":{background:"transparent"}},expandOpen:{transform:"rotate(180deg)",color:e.palette.primary.dark},logoContainer:Object(k.a)({width:100,height:28},e.breakpoints.up("md"),{width:120,height:32}),logoImage:{width:"100%",height:"100%"},menu:{display:"flex",justifyContent:"space-between"},menuItem:{marginRight:e.spacing(5),"&:last-child":{marginRight:0}},menuGroupItem:{paddingTop:0},menuGroupTitle:{textTransform:"uppercase"}}})),a(312)),$=(a(321),a(314),a(315),a(227),a(228),a(319),Object(T.a)((function(e){return{root:{},listItem:{flexDirection:"column",alignItems:"flex-start"},navLink:{"&:hover":{color:e.palette.primary.dark}},listItemIcon:{minWidth:"auto"},closeIcon:{justifyContent:"flex-end",cursor:"pointer"},menu:{display:"flex"},menuItem:{marginRight:e.spacing(8),"&:last-child":{marginRight:0}},menuGroupItem:{paddingTop:0},menuGroupTitle:{textTransform:"uppercase"},divider:{width:"100%"}}})),a(229),Object(T.a)((function(e){return{drawer:{width:"100%",maxWidth:325},root:{height:"100%",padding:e.spacing(1)},nav:{marginBottom:e.spacing(1)}}})),Object(T.a)((function(e){return{root:{height:"100%"}}})),Object(T.a)((function(e){return{toolbar:Object(k.a)({maxWidth:e.layout.contentWidth,width:"100%",margin:"0 auto",padding:e.spacing(0,2)},e.breakpoints.up("sm"),{padding:e.spacing(0,8)}),logoContainer:Object(k.a)({width:100,height:28},e.breakpoints.up("md"),{width:120,height:32}),logoImage:{width:"100%",height:"100%"}}}))),Q=function(e){e.themeMode;var t=e.className,a=Object(p.a)(e,["themeMode","className"]),r=$();return Object(n.jsx)(q.a,Object(d.a)(Object(d.a)({className:Object(S.a)(r.toolbar,t)},a),{},{children:Object(n.jsx)("div",{className:r.logoContainer,children:Object(n.jsx)(A.b,{to:"/",title:"Nice Car Wash",children:Object(n.jsx)(U,{className:r.logoImage,src:C,alt:"Nice Car Wash",lazy:!1})})})}))},Z=Object(T.a)((function(){return{root:{},content:{height:"100%"}}})),ee=function(e){var t=e.themeMode,a=e.children,r=e.className,o=Z();return Object(n.jsxs)("div",{className:Object(S.a)(o.root,r),children:[Object(n.jsx)(Q,{themeMode:t}),Object(n.jsx)(E.a,{}),Object(n.jsx)("main",{className:o.content,children:a})]})},te=a(320),ae=Object(T.a)({root:{width:"100%"}});function ne(){var e=ae(),t=o.a.useState(0),a=Object(g.a)(t,2),r=a[0],c=a[1];return o.a.useEffect((function(){var e=setInterval((function(){c((function(e){if(100===e)return 0;var t=10*Math.random();return Math.min(e+t,100)}))}),500);return function(){clearInterval(e)}}),[]),Object(n.jsx)("div",{className:e.root,children:Object(n.jsx)(te.a,{variant:"determinate",value:r})})}var re=a(323),oe=function(){var e=Object(re.a)("div")((function(e){var t=e.theme;return Object(k.a)({padding:t.spacing(10)},t.breakpoints.up(1368),{padding:t.spacing(5,8)})}));return Object(n.jsx)(e,{children:Object(n.jsx)(_.a,{container:!0,alignItems:"center",children:Object(n.jsx)(_.a,{item:!0,xs:12,lg:6,children:Object(n.jsxs)(P.a,{variant:"h4",children:["V\xe5r webbplats \xe4r f\xf6r n\xe4rvarande under underh\xe5ll, vi kommer att vara online snart, kontakta oss p\xe5 v\xe5r epostadress:",Object(n.jsx)(A.b,{to:{pathname:"https://mail.google.com/mail/?view=cm&fs=1&to=info@nicecarwash.se.com&su=SUBJECT&body=BODY&bcc=info@nicecarwash.se"},target:"_blank",children:"\xa0Here"})]})})})})},ce=function(){return Object(n.jsx)(o.a.Suspense,{fallback:Object(n.jsx)("div",{children:Object(n.jsx)(ne,{})}),children:Object(n.jsxs)(s.d,{children:[Object(n.jsx)(s.b,{exact:!0,path:"/",render:function(e){return Object(n.jsx)(I,Object(d.a)(Object(d.a)({},e),{},{component:oe,layout:ee}))}}),Object(n.jsx)(s.a,{to:"/"})]})})},ie=(a(256),a(257),a(258),a(209),a(259),a(260),a(61)),se=a.n(ie),le=a(78),de=a(79),pe=a.n(de),ue=function(){var e=Object(le.a)(se.a.mark((function e(){return se.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,pe.a.get("".concat("https://localhost:8000/api","/services"));case 2:return e.abrupt("return",e.sent);case 3:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}(),ge=function(){var e=Object(le.a)(se.a.mark((function e(){return se.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,pe.a.get("".concat("https://localhost:8000/api","/plans"));case 2:return e.abrupt("return",e.sent);case 3:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}(),he=Object(l.a)(),me=function(){var e=Object(u.b)();return Object(r.useEffect)((function(){ue().then((function(t){e({type:"SERVICE_LIST",payload:t})})),ge().then((function(t){e({type:"PLANS_LIST",payload:t})})),console.log("Data loading done!")}),[]),Object(n.jsx)(s.c,{history:he,children:Object(n.jsx)(ce,{})})};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));var be=a(230),fe=a(32),je=a(80),Oe=a(231),ve={data:[]},xe={loading:!1},ye=a(232),we={key:"root",storage:a.n(ye).a,whitelist:["plans","serivces","auth","orders"],blacklist:[]},Ie=Object(fe.c)({auth:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:null,t=arguments.length>1?arguments[1]:void 0,a=t.type,n=t.payload;t.loading;switch(a){case"LOGGED_IN_USER":case"CLEAN_UP":case"AUTH_FAIL":case"AUTH_SUCCESS":case"USER_PROFILE_UPDATE":return n;default:return e}},orders:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:xe,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"APP_START":case"AUTH_START":case"AUTH_END":case"AUTH_FAIL":case"AUTH_SUCCESS":case"LOGGED_IN_USER":case"CLEAN_UP":case"LOGIN_START":return t.loading;case"ORDER_LIST":case"USER_PROFILE_UPDATE":return t.payload;default:return e}},plans:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:null,t=arguments.length>1?arguments[1]:void 0,a=t.type,n=t.payload;switch(a){case"PLAN_CREATE":case"PLAN_READ":case"PLANS_LIST":case"PLAN_EDIT":case"PLAN_REMOVE":return n;default:return e}},servicesList:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:ve,t=arguments.length>1?arguments[1]:void 0,a=t.type,n=t.payload;switch(a){case"SERVICE_LIST":return n;default:return e}}}),ke=Object(je.a)(we,Ie),Se=Object(fe.e)(ke,Object(fe.d)(Object(fe.a)(Oe.a))),Te=Object(je.b)(Se);i.a.render(Object(n.jsx)(u.a,{store:Se,children:Object(n.jsx)(A.a,{children:Object(n.jsx)(be.a,{loading:null,persistor:Te,children:Object(n.jsx)(me,{})})})}),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))}},[[282,1,2]]]);