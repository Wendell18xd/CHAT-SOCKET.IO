(this["webpackJsonpchat-app"]=this["webpackJsonpchat-app"]||[]).push([[0],{113:function(e,t,n){},120:function(e,t,n){},122:function(e,t,n){},123:function(e,t,n){"use strict";n.r(t);var a=n(1),c=n(29),s=n.n(c),r=n(4),i=n.n(r),o=n(7),u=n(6),l=n(33),j=n(2),m="[Chat] Usuarios cargados",b="[Chat] Activar chat",d="[Chat] Nuevo mensaje",p="[Chat] Cargar Mensajes",h="[Chat] Cerrar sesion",O=function(e,t){switch(t.type){case m:return Object(j.a)(Object(j.a)({},e),{},{usuarios:Object(l.a)(t.payload)});case b:return e.chatActivo===t.payload?e:Object(j.a)(Object(j.a)({},e),{},{chatActivo:t.payload,mensajes:[]});case d:return e.chatActivo===t.payload.de||e.chatActivo===t.payload.para?Object(j.a)(Object(j.a)({},e),{},{mensajes:[].concat(Object(l.a)(e.mensajes),[t.payload])}):e;case p:return Object(j.a)(Object(j.a)({},e),{},{mensajes:Object(l.a)(t.payload)});case h:return{uid:"",chatActivo:null,usuarios:[],mensajes:[]};default:return e}},x=n(0),f=Object(a.createContext)(),v={uid:"",chatActivo:null,usuarios:[],mensajes:[]},g=function(e){var t=e.children,n=Object(a.useReducer)(O,v),c=Object(u.a)(n,2),s=c[0],r=c[1];return Object(x.jsx)(f.Provider,{value:{chatState:s,dispatch:r},children:t})},N="https://chat-server-socketio-wendell.herokuapp.com/api",k=function(){var e=Object(o.a)(i.a.mark((function e(t,n){var a,c,s,r,o=arguments;return i.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(a=o.length>2&&void 0!==o[2]?o[2]:"GET",c="".concat(N,"/").concat(t),"GET"!==a){e.next=11;break}return e.next=5,fetch(c);case 5:return s=e.sent,e.next=8,s.json();case 8:return e.abrupt("return",e.sent);case 11:return e.next=13,fetch(c,{method:a,headers:{"Content-Type":"application/json"},body:JSON.stringify(n)});case 13:return r=e.sent,e.next=16,r.json();case 16:return e.abrupt("return",e.sent);case 17:case"end":return e.stop()}}),e)})));return function(t,n){return e.apply(this,arguments)}}(),w=function(){var e=Object(o.a)(i.a.mark((function e(t,n){var a,c,s,r,o,u=arguments;return i.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(a=u.length>2&&void 0!==u[2]?u[2]:"GET",c="".concat(N,"/").concat(t),s=localStorage.getItem("token")||"","GET"!==a){e.next=12;break}return e.next=6,fetch(c,{headers:{"x-token":s}});case 6:return r=e.sent,e.next=9,r.json();case 9:return e.abrupt("return",e.sent);case 12:return e.next=14,fetch(c,{method:a,headers:{"Content-Type":"application/json","x-token":s},body:JSON.stringify(n)});case 14:return o=e.sent,e.next=17,o.json();case 17:return e.abrupt("return",e.sent);case 18:case"end":return e.stop()}}),e)})));return function(t,n){return e.apply(this,arguments)}}(),y=Object(a.createContext)(),C={uid:null,checking:!0,logged:!1,name:null,email:null},S=function(e){var t=e.children,n=Object(a.useState)(C),c=Object(u.a)(n,2),s=c[0],r=c[1],l=Object(a.useContext)(f).dispatch,j=function(){var e=Object(o.a)(i.a.mark((function e(t,n){var a,c;return i.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,k("login",{email:t,password:n},"POST");case 2:return(a=e.sent).ok&&(localStorage.setItem("token",a.token),c=a.usuario,r({uid:c.uid,checking:!1,logged:!0,name:c.nombre,email:c.email})),e.abrupt("return",a.ok);case 5:case"end":return e.stop()}}),e)})));return function(t,n){return e.apply(this,arguments)}}(),m=function(){var e=Object(o.a)(i.a.mark((function e(t,n,a){var c,s;return i.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,k("login/new",{nombre:t,email:n,password:a},"POST");case 2:return(c=e.sent).ok&&(localStorage.setItem("token",c.token),s=c.usuario,r({uid:s.uid,checking:!1,logged:!0,name:s.nombre,email:s.email})),e.abrupt("return",c.ok);case 5:case"end":return e.stop()}}),e)})));return function(t,n,a){return e.apply(this,arguments)}}(),b=Object(a.useCallback)(Object(o.a)(i.a.mark((function e(){var t,n;return i.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(localStorage.getItem("token")){e.next=4;break}return r({uid:null,checking:!1,logged:!1,name:null,email:null}),e.abrupt("return",!1);case 4:return e.next=6,w("login/renew");case 6:if(!(t=e.sent).ok){e.next=14;break}return localStorage.setItem("token",t.token),n=t.usuario,r({uid:n.uid,checking:!1,logged:!0,name:n.nombre,email:n.email}),e.abrupt("return",!0);case 14:return r({uid:null,checking:!1,logged:!1,name:null,email:null}),e.abrupt("return",!1);case 16:case"end":return e.stop()}}),e)}))),[]);return Object(x.jsx)(y.Provider,{value:{auth:s,login:j,register:m,verificaToken:b,logout:function(){localStorage.removeItem("token"),l({type:h}),r({checking:!1,logged:!1})}},children:t})},_=n(67),E=n.n(_),A=n(44),I=Object(a.createContext)(),T=function(e){var t=e.children,n=function(e){var t=Object(a.useState)(null),n=Object(u.a)(t,2),c=n[0],s=n[1],r=Object(a.useState)(!1),i=Object(u.a)(r,2),o=i[0],l=i[1],j=Object(a.useCallback)((function(){var t=localStorage.getItem("token"),n=E.a.connect(e,{transports:["websocket"],autoConnect:!0,forceNew:!0,query:{"x-token":t}});s(n)}),[e]),m=Object(a.useCallback)((function(){null===c||void 0===c||c.disconnect()}),[c]);return Object(a.useEffect)((function(){l(null===c||void 0===c?void 0:c.connected)}),[c]),Object(a.useEffect)((function(){null===c||void 0===c||c.on("connect",(function(){return l(!0)}))}),[c]),Object(a.useEffect)((function(){null===c||void 0===c||c.on("disconnect",(function(){return l(!1)}))}),[c]),{socket:c,online:o,conectarSocket:j,desconectarSocket:m}}("https://chat-server-socketio-wendell.herokuapp.com/"),c=n.socket,s=n.online,r=n.conectarSocket,i=n.desconectarSocket,o=Object(a.useContext)(y).auth,l=Object(a.useContext)(f).dispatch;return Object(a.useEffect)((function(){o.logged&&r()}),[o,r]),Object(a.useEffect)((function(){o.logged||i()}),[o,i]),Object(a.useEffect)((function(){null===c||void 0===c||c.on("lista-usuarios",(function(e){l({type:m,payload:e})}))}),[c,l]),Object(a.useEffect)((function(){null===c||void 0===c||c.on("mensaje-personal",(function(e){var t;l({type:d,payload:e}),t="mensajes",A.animateScroll.scrollToBottom({containerId:t,duration:250}),document.querySelector("#sendMessages").focus()}))}),[c,l]),Object(x.jsx)(I.Provider,{value:{socket:c,online:s},children:t})},M=n(17),P=n(3),D=function(){return Object(x.jsx)("div",{className:"middle-screen",children:Object(x.jsxs)("div",{className:"alert-info",children:[Object(x.jsx)("hr",{}),Object(x.jsx)("h3",{children:"Seleccione una persona"}),Object(x.jsx)("span",{children:"Para comenzar una conversacion"})]})})},G=function(){var e=Object(a.useContext)(y),t=e.auth,n=e.logout;return Object(x.jsxs)("div",{className:"headind_srch",children:[Object(x.jsx)("div",{className:"recent_heading mt-2",children:Object(x.jsx)("h4",{children:t.name})}),Object(x.jsx)("div",{className:"srch_bar",children:Object(x.jsx)("div",{className:"stylish-input-group",children:Object(x.jsx)("button",{className:"btn text-danger",onClick:n,children:"Salir"})})})]})},J=function(e){var t=e.usuario,n=Object(a.useContext)(f),c=n.chatState,s=n.dispatch,r=c.chatActivo,u=function(){var e=Object(o.a)(i.a.mark((function e(){var n;return i.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return s({type:b,payload:t.uid}),e.next=3,w("mensajes/".concat(t.uid));case 3:n=e.sent,s({type:p,payload:n.mensajes}),a="mensajes",A.animateScroll.scrollToBottom({containerId:a,duration:0});case 6:case"end":return e.stop()}var a}),e)})));return function(){return e.apply(this,arguments)}}();return Object(x.jsx)("div",{className:"chat_list ".concat(t.uid===r&&"active_chat"),onClick:u,children:Object(x.jsxs)("div",{className:"chat_people",children:[Object(x.jsx)("div",{className:"chat_img",children:Object(x.jsx)("img",{src:"https://ptetutorials.com/images/user-profile.png",alt:"sunil"})}),Object(x.jsxs)("div",{className:"chat_ib",children:[Object(x.jsx)("h5",{children:t.nombre}),t.online?Object(x.jsx)("span",{className:"text-success",children:"Online"}):Object(x.jsx)("span",{className:"text-danger",children:"Offline"})]})]})})},q=function(){var e=Object(a.useContext)(f).chatState,t=Object(a.useContext)(y).auth;return Object(x.jsxs)("div",{className:"inbox_chat",children:[e.usuarios.filter((function(e){return e.uid!==t.uid})).map((function(e){return Object(x.jsx)(J,{usuario:e},e.uid)})),Object(x.jsx)("div",{className:"extra_space"})]})},B=function(){return Object(x.jsxs)("div",{className:"inbox_people",children:[Object(x.jsx)(G,{}),Object(x.jsx)(q,{})]})},R=n(24),H=n.n(R),z=function(e){return H()(e).format("HH:mm a | MMMM Do")},U=function(e){var t=e.msg;return Object(x.jsxs)("div",{className:"incoming_msg",children:[Object(x.jsx)("div",{className:"incoming_msg_img",children:Object(x.jsx)("img",{src:"https://ptetutorials.com/images/user-profile.png",alt:"sunil"})}),Object(x.jsx)("div",{className:"received_msg",children:Object(x.jsxs)("div",{className:"received_withd_msg",children:[Object(x.jsx)("p",{children:t.mensaje}),Object(x.jsx)("span",{className:"time_date",children:z(t.createdAt)})]})})]})},V=function(e){var t=e.msg;return Object(x.jsx)("div",{className:"outgoing_msg",children:Object(x.jsxs)("div",{className:"sent_msg",children:[Object(x.jsx)("p",{children:t.mensaje}),Object(x.jsxs)("span",{className:"time_date",children:[" ",z(t.createdAt)]})]})})},Y=function(){var e=Object(a.useState)(""),t=Object(u.a)(e,2),n=t[0],c=t[1],s=Object(a.useContext)(y).auth,r=Object(a.useContext)(I).socket,i=Object(a.useContext)(f).chatState;return Object(x.jsx)("form",{onSubmit:function(e){e.preventDefault(),0!==n.length&&(c(""),r.emit("mensaje-personal",{de:s.uid,para:i.chatActivo,mensaje:n}))},autoComplete:"off",children:Object(x.jsxs)("div",{className:"type_msg row",children:[Object(x.jsx)("div",{className:"input_msg_write col-sm-9",children:Object(x.jsx)("input",{type:"text",className:"write_msg",placeholder:"Mensaje...",value:n,onChange:function(e){var t=e.target;c(t.value)},id:"sendMessages"})}),Object(x.jsx)("div",{className:"col-sm-3 text-center",children:Object(x.jsx)("button",{className:"msg_send_btn mt-3",type:"submit",children:"enviar"})})]})})},F=function(){var e=Object(a.useContext)(f).chatState,t=Object(a.useContext)(y).auth;return Object(x.jsxs)("div",{className:"mesgs",children:[Object(x.jsx)("div",{id:"mensajes",className:"msg_history",children:e.mensajes.map((function(e){return e.para===t.uid?Object(x.jsx)(U,{msg:e},e._id):Object(x.jsx)(V,{msg:e},e._id)}))}),Object(x.jsx)(Y,{})]})},K=(n(113),function(){var e=Object(a.useContext)(f).chatState;return Object(x.jsx)("div",{className:"messaging",children:Object(x.jsxs)("div",{className:"inbox_msg",children:[Object(x.jsx)(B,{}),e.chatActivo?Object(x.jsx)(F,{}):Object(x.jsx)(D,{})]})})}),L=n(20),Q=n(31),W=n.n(Q),X=function(){var e=Object(a.useContext)(y).login,t=Object(a.useState)({email:"",password:"",rememberme:!1}),n=Object(u.a)(t,2),c=n[0],s=n[1];Object(a.useEffect)((function(){var e=localStorage.getItem("email");e&&s((function(t){return Object(j.a)(Object(j.a)({},t),{},{rememberme:!0,email:e})}))}),[]);var r=function(e){var t=e.target,n=t.name,a=t.value;s(Object(j.a)(Object(j.a)({},c),{},Object(L.a)({},n,a)))},l=function(){var t=Object(o.a)(i.a.mark((function t(n){var a,s;return i.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return n.preventDefault(),c.rememberme?localStorage.setItem("email",c.email):localStorage.removeItem("email"),a=c.email,s=c.password,t.next=5,e(a,s);case 5:t.sent||W.a.fire("Error","Verifique el usuario y contrase\xf1a","error");case 7:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}();return Object(x.jsxs)("form",{className:"login100-form validate-form flex-sb flex-w",autoComplete:"off",onSubmit:l,children:[Object(x.jsx)("span",{className:"login100-form-title mb-3",children:"Chat - Ingreso"}),Object(x.jsxs)("div",{className:"wrap-input100 validate-input mb-3",children:[Object(x.jsx)("input",{className:"input100",type:"email",name:"email",placeholder:"Email",value:c.email,onChange:r}),Object(x.jsx)("span",{className:"focus-input100"})]}),Object(x.jsxs)("div",{className:"wrap-input100 validate-input mb-3",children:[Object(x.jsx)("input",{className:"input100",type:"password",name:"password",placeholder:"Password",value:c.password,onChange:r}),Object(x.jsx)("span",{className:"focus-input100"})]}),Object(x.jsxs)("div",{className:"row mb-3",children:[Object(x.jsxs)("div",{className:"col",onClick:function(){s(Object(j.a)(Object(j.a)({},c),{},{rememberme:!c.rememberme}))},children:[Object(x.jsx)("input",{className:"input-checkbox100",id:"ckb1",type:"checkbox",name:"rememberme",checked:c.rememberme,readOnly:!0}),Object(x.jsx)("label",{className:"label-checkbox100",children:"Recordarme"})]}),Object(x.jsx)("div",{className:"col text-right",children:Object(x.jsx)(M.b,{to:"/auth/register",className:"txt1",children:"Nueva cuenta?"})})]}),Object(x.jsx)("div",{className:"container-login100-form-btn m-t-17",children:Object(x.jsx)("button",{type:"submit",className:"login100-form-btn",disabled:!(c.email.length>0&&c.password.length>5),children:"Ingresar"})})]})},Z=function(){var e=Object(a.useContext)(y).register,t=Object(a.useState)({nombre:"",email:"",password:""}),n=Object(u.a)(t,2),c=n[0],s=n[1],r=function(e){var t=e.target,n=t.name,a=t.value;s(Object(j.a)(Object(j.a)({},c),{},Object(L.a)({},n,a)))},l=function(){var t=Object(o.a)(i.a.mark((function t(n){var a,s,r;return i.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return n.preventDefault(),a=c.email,s=c.nombre,r=c.password,t.next=4,e(s,a,r);case 4:t.sent||W.a.fire("Error","Correo ya registrado","error");case 6:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}();return Object(x.jsxs)("form",{onSubmit:l,className:"login100-form validate-form flex-sb flex-w",autoComplete:"off",children:[Object(x.jsx)("span",{className:"login100-form-title mb-3",children:"Chat - Registro"}),Object(x.jsxs)("div",{className:"wrap-input100 validate-input mb-3",children:[Object(x.jsx)("input",{className:"input100",type:"text",name:"nombre",placeholder:"Nombre",value:c.nombre,onChange:r}),Object(x.jsx)("span",{className:"focus-input100"})]}),Object(x.jsxs)("div",{className:"wrap-input100 validate-input mb-3",children:[Object(x.jsx)("input",{className:"input100",type:"email",name:"email",placeholder:"Email",value:c.email,onChange:r}),Object(x.jsx)("span",{className:"focus-input100"})]}),Object(x.jsxs)("div",{className:"wrap-input100 validate-input mb-3",children:[Object(x.jsx)("input",{className:"input100",type:"password",name:"password",placeholder:"Password",value:c.password,onChange:r}),Object(x.jsx)("span",{className:"focus-input100"})]}),Object(x.jsx)("div",{className:"row mb-3",children:Object(x.jsx)("div",{className:"col text-right",children:Object(x.jsx)(M.b,{to:"auth/login",className:"txt1",children:"Ya tienes cuenta?"})})}),Object(x.jsx)("div",{className:"container-login100-form-btn m-t-17",children:Object(x.jsx)("button",{type:"submit",disabled:!(c.email.length>0&&c.password.length>5&&c.nombre.length>0),className:"login100-form-btn",children:"Crear cuenta"})})]})},$=(n(120),function(){return Object(x.jsx)("div",{className:"limiter",children:Object(x.jsx)("div",{className:"container-login100",children:Object(x.jsx)("div",{className:"wrap-login100 p-t-50 p-b-90",children:Object(x.jsxs)(P.d,{children:[Object(x.jsx)(P.b,{exact:!0,path:"/auth/login",component:X}),Object(x.jsx)(P.b,{exact:!0,path:"/auth/register",component:Z}),Object(x.jsx)(P.a,{to:"/auth/login"})]})})})})}),ee=n(32),te=["isAuthenticated","component"],ne=function(e){var t=e.isAuthenticated,n=e.component,a=Object(ee.a)(e,te);return Object(x.jsx)(P.b,Object(j.a)(Object(j.a)({},a),{},{component:function(e){return t?Object(x.jsx)(n,Object(j.a)({},e)):Object(x.jsx)(P.a,{to:"/auth"})}}))},ae=["isAuthenticated","component"],ce=function(e){var t=e.isAuthenticated,n=e.component,a=Object(ee.a)(e,ae);return Object(x.jsx)(P.b,Object(j.a)(Object(j.a)({},a),{},{component:function(e){return t?Object(x.jsx)(P.a,{to:"/"}):Object(x.jsx)(n,Object(j.a)({},e))}}))},se=function(){var e=Object(a.useContext)(y),t=e.auth,n=e.verificaToken;return Object(a.useEffect)((function(){n()}),[n]),t.checking?Object(x.jsx)("h1",{children:"Espere por favor..."}):Object(x.jsx)(M.a,{children:Object(x.jsx)("div",{children:Object(x.jsxs)(P.d,{children:[Object(x.jsx)(ce,{isAuthenticated:t.logged,path:"/auth",component:$}),Object(x.jsx)(ne,{exact:!0,isAuthenticated:t.logged,path:"/",component:K}),Object(x.jsx)(P.a,{to:"/"})]})})})};n(121);H.a.locale("es");var re=function(){return Object(x.jsx)(g,{children:Object(x.jsx)(S,{children:Object(x.jsx)(T,{children:Object(x.jsx)(se,{})})})})};n(122);s.a.render(Object(x.jsx)(re,{}),document.getElementById("root"))}},[[123,1,2]]]);
//# sourceMappingURL=main.9b81503a.chunk.js.map