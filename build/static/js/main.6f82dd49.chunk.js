(this["webpackJsonpmy-app-react"]=this["webpackJsonpmy-app-react"]||[]).push([[0],{66:function(e,t,c){},71:function(e,t,c){},72:function(e,t,c){},73:function(e,t,c){},74:function(e,t,c){},77:function(e,t,c){},78:function(e,t,c){},80:function(e,t,c){},81:function(e,t,c){},82:function(e,t,c){},83:function(e,t,c){},84:function(e,t,c){"use strict";c.r(t);var a=c(1),n=c(32),r=c.n(n),i=c(19),s=c(14),j=c(51),o=c(57),d=c(55),b=c(10),l=c(36),u=c(8),O=c(21),m=c(4),h=Object(a.createContext)([]),p=function(e){var t=e.children,c=Object(a.useState)([]),n=Object(b.a)(c,2),r=n[0],i=n[1];return Object(m.jsx)(h.Provider,{value:{cartList:r,AgregarAlCarrito:function(e){var t=r.findIndex((function(t){return t.id===e.id}));if(t>-1){var c=r[t].cantidad;r.splice(t,1),i([].concat(Object(O.a)(r),[Object(u.a)(Object(u.a)({},e),{},{cantidad:e.cantidad+c})]))}else i([].concat(Object(O.a)(r),[e]))},removeCart:function(){i([])},removeFromCart:function(e){i(r.filter((function(t){return t.id!==e.id})))},cartItemIncrease:function(e){if(r[e].cantidad<r[e].stock){var t=Object(O.a)(r);t[e].cantidad=t[e].cantidad+1,i(t)}else alert("Lo sentimos, no hay mas stock de este producto")},cartItemDecrease:function(e){if(r[e].cantidad>1){var t=Object(O.a)(r);t[e].cantidad=t[e].cantidad-1,i(t)}},totalCart:function(){return r.reduce((function(e,t){return e+t.price*t.cantidad}),0)}},children:t})},x=function(){var e=Object(a.useState)(0),t=Object(b.a)(e,2),c=t[0],n=t[1],r=Object(a.useContext)(h).cartList,i=0;return r.map((function(e){i+=e.cantidad})),Object(a.useEffect)((function(){n(i)}),[i]),Object(m.jsxs)("div",{children:[Object(m.jsx)(l.c,{}),c>0?Object(m.jsxs)("span",{class:"position-absolute top-0 start-100 translate-middle badge rounded-pill bg-danger",children:[c,Object(m.jsx)("span",{class:"visually-hidden"})]}):Object(m.jsx)(m.Fragment,{})]})},f=(c(66),function(){return Object(m.jsx)(j.a,{collapseOnSelect:!0,expand:"lg",bg:"dark",variant:"dark",className:"py-4 bg-dark",children:Object(m.jsxs)(o.a,{children:[Object(m.jsx)(i.b,{to:"/my-app-react/",className:"barraPrincipal link",children:"Equipment Vintage Sport Clote"}),Object(m.jsx)(j.a.Toggle,{"aria-controls":"responsive-navbar-nav"}),Object(m.jsxs)(j.a.Collapse,{id:"responsive-navbar-nav",children:[Object(m.jsx)(d.a,{className:"me-auto"}),Object(m.jsxs)(d.a,{className:"navCat",children:[Object(m.jsx)(i.b,{to:"my-app-react/category/Camperas",className:"link",children:"Camperas"}),Object(m.jsx)(i.b,{to:"my-app-react/category/Camisetas",className:"link",children:"Camisetas"}),Object(m.jsx)(i.b,{to:"my-app-react/category/Zapatillas",className:"link",children:"Zapatillas"}),Object(m.jsx)(i.b,{to:"my-app-react/category/Shorts",className:"link",children:"Shorts"}),Object(m.jsx)(i.b,{to:"my-app-react/carrito",className:"link",children:"Carrito"}),Object(m.jsx)("i",{className:"position-relative",children:Object(m.jsx)(x,{})})]})]})]})})});c(71),c(72),c(73);var g=function(e){var t=e.producto;return Object(m.jsx)("div",{className:"cardStyle",children:Object(m.jsxs)("div",{className:"cardBody",children:[Object(m.jsx)("div",{className:"contImg",children:Object(m.jsx)("img",{src:t.img,className:"imgCardItem"})}),Object(m.jsxs)("div",{className:"contTxt",children:[Object(m.jsxs)("h5",{className:"cardTitle",children:["Producto: ",t.name]}),Object(m.jsxs)("p",{children:["Descripcion: ",t.description]}),Object(m.jsxs)("p",{children:["Precio: $",t.price]}),Object(m.jsxs)(i.b,{to:"/my-app-react/detalle/".concat(t.id),children:[" ",Object(m.jsx)("button",{className:"btn btn-primary",children:"Detalle del producto"})]})]})]})},t.id)};c(74);var v=function(e){var t=e.productos;return Object(m.jsx)("div",{className:"itmList",children:t.map((function(e){return Object(m.jsx)(g,{producto:e},e.id)}))})},y=c(20),N=function(e){var t=Object(a.useState)([]),c=Object(b.a)(t,2),n=c[0],r=c[1],i=Object(a.useState)(!0),j=Object(b.a)(i,2),o=j[0],d=j[1],l=Object(s.g)().idCategory;return Object(a.useEffect)((function(){var e=Object(y.f)();if(l){var t=Object(y.g)(Object(y.b)(e,"Items"),Object(y.h)("category","==",l));Object(y.e)(t).then((function(e){r(e.docs.map((function(e){return Object(u.a)({id:e.id},e.data())})))})).catch((function(e){return console.log(e)})).finally((function(){return d(!1)}))}else{var c=Object(y.g)(Object(y.b)(e,"Items"));Object(y.e)(c).then((function(e){r(e.docs.map((function(e){return Object(u.a)({id:e.id},e.data())})))})).catch((function(e){return console.log(e)})).finally((function(){return d(!1)}))}}),[l]),Object(m.jsxs)("div",{className:"container greeting listCnt",children:[e.greeting,o?Object(m.jsx)("h2",{children:"Cargando..."}):Object(m.jsx)(v,{productos:n})]})},C=(c(77),c(59)),S=function(e){var t=e.stock,c=e.onAdd,n=Object(a.useState)(1),r=Object(b.a)(n,2),i=r[0],s=r[1];return Object(m.jsx)("div",{children:Object(m.jsxs)("div",{className:"counter",children:[Object(m.jsxs)("div",{className:"counterbody",children:[Object(m.jsxs)("button",{onClick:function(){0!==i&&s(i-1)},className:"btn btn-danger counterBtn",children:[Object(m.jsx)(C.a,{})," "]}),Object(m.jsx)("h4",{children:i}),Object(m.jsx)("button",{onClick:function(){i!==t&&s(i+1)},disabled:i===t,className:"btn btn-danger counterBtn",children:Object(m.jsx)(l.d,{})})]}),Object(m.jsx)("button",{disabled:0===i,onClick:function(){return c(i)},className:"btn btn-primary",children:"Agregar al carrito"})]})})},k=(c(78),function(e){var t=e.Item,c=Object(a.useContext)(h).AgregarAlCarrito,n=Object(a.useState)(!0),r=Object(b.a)(n,2),s=r[0],j=r[1];return Object(m.jsxs)("div",{className:"container cardStyleDetail",children:[Object(m.jsxs)("div",{children:[" ",Object(m.jsx)("img",{src:t.img,className:"ImgDetail"})]}),Object(m.jsxs)("div",{className:"card-body",style:{padding:"20px"},children:[Object(m.jsx)("h3",{children:t.name}),Object(m.jsxs)("p",{children:["Descripcion del producto: ",t.description," Lorem ipsum, dolor sit amet consectetur adipisicing elit. Vel, assumenda eum porro unde dolorem eius minima quae ut, tempora deserunt veritatis fugit similique perferendis consequatur nobis quas error, libero hic."]}),Object(m.jsxs)("h3",{children:[" Precio: $ ",t.price]}),s?Object(m.jsx)(S,{stock:t.stock,onAdd:function(e){j(!1),c(Object(u.a)(Object(u.a)({},t),{},{cantidad:e}))}}):Object(m.jsxs)("div",{className:"btnsItem",children:[Object(m.jsx)(i.b,{to:"/my-app-react/",children:Object(m.jsx)("button",{className:"btn btn-primary",children:"Seguir comprando"})}),Object(m.jsxs)(i.b,{to:"/my-app-react/carrito",children:[Object(m.jsx)("button",{className:"btn btn-warning",children:"Ir al carrito"})," "]})]})]})]})}),I=function(){var e=Object(a.useState)(!0),t=Object(b.a)(e,2),c=t[0],n=t[1],r=Object(a.useState)({}),i=Object(b.a)(r,2),j=i[0],o=i[1],d=Object(s.g)().id;return Object(a.useEffect)((function(){var e=Object(y.f)(),t=Object(y.c)(e,"Items",d);Object(y.d)(t).then((function(e){return o(Object(u.a)({id:e.id},e.data()))})).catch((function(e){return console.log(e)})).finally((function(){return n(!1)}))}),[d]),Object(m.jsx)("div",{children:c?Object(m.jsx)("h2",{children:"Cargando..."}):Object(m.jsx)(k,{Item:j})})},E=(c(79),c(80),function(e){var t=e.Item,c=e.index,n=Object(a.useContext)(h),r=n.cartList,i=n.cartItemIncrease,s=n.cartItemDecrease,j=n.removeFromCart,o=Object(a.useState)(0),d=Object(b.a)(o,2),u=d[0],O=d[1];return Object(a.useEffect)((function(){O(r[c].price*r[c].cantidad)}),[r]),Object(m.jsxs)("center",{className:"container cartItemStyle",children:[Object(m.jsx)("div",{children:Object(m.jsx)("img",{src:t.img,className:"cartImg"})}),Object(m.jsxs)("div",{className:"cartTxt",children:[Object(m.jsxs)("h3",{children:["Producto: ",t.name]}),Object(m.jsxs)("h5",{children:["Descripcion: ",t.description]}),Object(m.jsxs)("h3",{children:["Precio: $",t.price]})]}),Object(m.jsxs)("div",{children:[Object(m.jsx)("h5",{children:"Cantidad:"}),Object(m.jsxs)("div",{children:[Object(m.jsxs)("div",{className:"btnsCart",children:[Object(m.jsx)("button",{className:"btn btn-primary",onClick:function(){return s(c)},children:Object(m.jsx)(l.a,{})}),Object(m.jsxs)("h4",{children:[" ",r[c].cantidad," "]}),Object(m.jsx)("button",{className:"btn btn-danger",onClick:function(){return i(c)},children:Object(m.jsx)(l.b,{})})]}),Object(m.jsxs)("div",{children:[Object(m.jsx)("h5",{children:"Subtotal:"}),Object(m.jsxs)("h5",{children:["$",u]})]})]}),Object(m.jsx)("button",{className:"btn btn-danger",onClick:function(){return j(t)},children:Object(m.jsx)(l.e,{})})]})]})}),P=c(9);c(81);var A=function(){var e=Object(a.useContext)(h),t=e.cartList,c=e.removeCart,n=e.totalCart,r=Object(a.useState)(""),i=Object(b.a)(r,2),s=i[0],j=i[1],o=Object(a.useState)({name:"",email:"",phone:"",items:t.map((function(e){return{id:e.id,cantidad:e.cantidad,precio:e.price}})),total:n()}),d=Object(b.a)(o,2),l=d[0],O=d[1];return Object(m.jsxs)("div",{children:[s?Object(m.jsxs)("div",{children:[Object(m.jsxs)("h3",{children:["Orden de compra generada con el id: ",s]}),Object(m.jsxs)("h3",{children:["A nombre de: ",l.name]}),Object(m.jsxs)("h3",{children:["Telefono: ",l.phone," "]}),Object(m.jsxs)("h3",{children:["E-mail: ",l.email]})]}):t.map((function(e){return Object(m.jsx)("div",{children:Object(m.jsxs)("li",{children:[" Producto: ",e.name,", Cantidad: ",e.cantidad]},e.id)})})),Object(m.jsx)("h5",{className:"infTxt",children:"Para finalizar tu compra llena el siguiente formulario y genera la orden. "}),Object(m.jsxs)("form",{onSubmit:function(e){e.preventDefault();var t=Object(y.f)(),c=Object(y.b)(t,"orders");Object(y.a)(c,l).then((function(e){return j(e.id)})).catch((function(e){return console.log(e)})).finally((function(){O({name:l.name,email:l.email,phone:l.phone})}))},onChange:function(e){O(Object(u.a)(Object(u.a)({},l),{},Object(P.a)({},e.target.name,e.target.value)))},children:["   ",Object(m.jsx)("label",{htmlFor:"name",children:"Nombre:"}),Object(m.jsx)("input",{className:"",type:"text",name:"name",placeholder:"Ej: John Rodriguez",defaultValue:l.name}),Object(m.jsx)("br",{}),Object(m.jsx)("label",{htmlFor:"phone",children:"Telefono:"}),Object(m.jsx)("input",{type:"number",name:"phone",placeholder:"Ej: 011 1234567",defaultValue:l.phone}),Object(m.jsx)("br",{}),Object(m.jsx)("label",{htmlFor:"email",children:"E-Mail:"}),Object(m.jsx)("input",{type:"email",name:"email",placeholder:"Ej: nombre@mail.ok",defaultValue:l.email}),Object(m.jsx)("br",{}),Object(m.jsx)("br",{}),Object(m.jsxs)("div",{className:"btnsForm",children:[Object(m.jsx)("button",{className:"btn btn-primary",children:"Generar Orden"}),Object(m.jsx)("button",{onClick:c,className:"btn btn-danger",children:"Vaciar Carrito"})]})]})]})};c(82);var D=function(){var e=Object(a.useContext)(h).cartList,t=Object(a.useState)(0),c=Object(b.a)(t,2),n=c[0],r=c[1],s=0;e.map((function(e){var t=e.price*e.cantidad;s+=t})),Object(a.useEffect)((function(){r(s)}),[s]);var j=e.map((function(e,t){return Object(m.jsx)(E,{Item:e,index:t},e.id)}));return Object(m.jsx)(m.Fragment,{children:e.length?Object(m.jsxs)("div",{children:[Object(m.jsx)("center",{children:Object(m.jsx)("h2",{children:"Tu carrito: "})}),j,Object(m.jsxs)("center",{className:"container finalCard",children:[Object(m.jsxs)("h2",{className:"totalPrice",children:["Precio total de tus compras : $",n]}),Object(m.jsx)(A,{})]})]}):Object(m.jsxs)("center",{className:"container",children:[Object(m.jsx)("h2",{children:"Tu carrito est\xe1 vac\xedo"}),Object(m.jsx)(i.b,{className:"btn btn-warning",to:"/my-app-react/",children:"Seguir comprando"})]})})},L=(c(83),function(){return Object(m.jsx)("footer",{className:"py-4 bg-dark foot",children:Object(m.jsx)("div",{className:"container text-center border-0 bg-dark w-100",children:Object(m.jsx)("p",{className:" w-100 text-center text-light border-0 bg-dark fw-bolder fs-6",children:"Copyright \xa9Omar Martinez Your Website 2022"})})})});var T=function(){return Object(m.jsx)("div",{className:"App",children:Object(m.jsx)(p,{children:Object(m.jsxs)(i.a,{children:[Object(m.jsx)(f,{}),Object(m.jsxs)(s.c,{children:[Object(m.jsx)(s.a,{path:"my-app-react/",element:Object(m.jsx)(N,{greeting:"Equipment. Vintage Sport clote "})}),Object(m.jsx)(s.a,{path:"my-app-react/category/:idCategory",element:Object(m.jsx)(N,{greeting:"Equipment. Vintage Sport clote"})}),Object(m.jsx)(s.a,{path:"my-app-react/detalle/:id",element:Object(m.jsx)(I,{})}),Object(m.jsx)(s.a,{path:"my-app-react/carrito",element:Object(m.jsx)(D,{})})]}),Object(m.jsx)(L,{})]})})})},V=c(60);Object(V.a)({apiKey:"AIzaSyBSB8j4G_uBWRsqS1WPpd07rVfP5cLQiNU",authDomain:"my-app-react-4b8d6.firebaseapp.com",projectId:"my-app-react-4b8d6",storageBucket:"my-app-react-4b8d6.appspot.com",messagingSenderId:"986363507536",appId:"1:986363507536:web:89b98c31806ae4dbb77255"});r.a.render(Object(m.jsx)(T,{}),document.getElementById("root"))}},[[84,1,2]]]);
//# sourceMappingURL=main.6f82dd49.chunk.js.map