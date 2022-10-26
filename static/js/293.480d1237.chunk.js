"use strict";(self.webpackChunkreact_hw_phonebook_08=self.webpackChunkreact_hw_phonebook_08||[]).push([[293],{7293:function(n,e,r){r.r(e),r.d(e,{default:function(){return S}});r(2791);var i,o,a,d,t,l,s,c=r(4270),p=r(9434),x=r(5705),m=r(7103),u=r(5822),f=r(168),h=r(6444),g=(0,h.ZP)(x.l0)(i||(i=(0,f.Z)(["\n  display: flex;\n  flex-direction: column;\n  padding: 32px;\n  border-radius: 8px;\n  background-color: #303846;\n\n  @media (max-width: 480px) {\n    padding-left: 16px;\n    padding-right: 16px;\n  }\n"]))),b=h.ZP.label(o||(o=(0,f.Z)(["\n  margin-bottom: 4px;\n  color: #ffffff;\n"]))),j=(0,h.ZP)(x.gN)(a||(a=(0,f.Z)(["\n  padding-top: 8px;\n  padding-bottom: 8px;\n  padding-left: 16px;\n  padding-right: 16px;\n  color: #ffffff;\n  background-color: #515967;\n  border: 1px solid #cecdcd;\n  border-radius: 4px;\n\n  &::placeholder {\n    font-size: 14px;\n    color: #a7a7a7;\n  }\n\n  &:focus {\n    border-color: transparent;\n    outline: 2px solid #4cb3d4;\n  }\n"]))),Z=h.ZP.button(d||(d=(0,f.Z)(["\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  padding: 8px;\n  color: #ffffff;\n  border-radius: 4px;\n  border-style: none;\n  background-color: #f15c27;\n  cursor: pointer;\n  transition: background-color 250ms ease-in-out;\n\n  &:hover {\n    background-color: #e14913;\n  }\n\n  &:disabled {\n    background-color: grey;\n    cursor: not-allowed;\n  }\n"]))),w=h.ZP.p(t||(t=(0,f.Z)(["\n  padding-top: 4px;\n  padding-left: 8px;\n  padding-right: 8px;\n  font-size: 14px;\n  color: red;\n  text-align: end;\n  border-radius: 4px;\n"]))),y=h.ZP.div(l||(l=(0,f.Z)(["\n  display: flex;\n  flex-direction: column;\n  margin-bottom: 16px;\n\n  &:last-of-type {\n    margin-bottom: 32px;\n  }\n"]))),k=r(3329),v=m.Ry().shape({name:m.Z_().required("This field is required"),email:m.Z_().email("Invalid email format").required("This field is required"),password:m.Z_().min(4,"Should be more 4 characters").required("This field is required")}),_=function(n){var e=n.name;return(0,k.jsx)(x.Bc,{name:e,render:function(n){return(0,k.jsx)(w,{children:n})}})},P=function(){var n=(0,p.I0)();return(0,k.jsx)(x.J9,{validationSchema:v,initialValues:{name:"",email:"",password:""},onSubmit:function(e,r){var i=r.setSubmitting,o=r.resetForm;console.log(e),n((0,u.y1)(e)),i(!1),o()},children:function(n){var e=n.isSubmitting,r=n.isValid;return(0,k.jsxs)(g,{autoComplete:"off",children:[(0,k.jsxs)(y,{children:[(0,k.jsx)(b,{htmlFor:"name",children:"Username"}),(0,k.jsx)(j,{id:"name",type:"text",name:"name",placeholder:"Derek Menson"}),(0,k.jsx)(_,{name:"name"})]}),(0,k.jsxs)(y,{children:[(0,k.jsx)(b,{htmlFor:"email",children:"Email"}),(0,k.jsx)(j,{id:"email",type:"email",name:"email",placeholder:"123@mail.com"}),(0,k.jsx)(_,{name:"email"})]}),(0,k.jsxs)(y,{children:[(0,k.jsx)(b,{htmlFor:"password",children:"Password"}),(0,k.jsx)(j,{id:"password",type:"password",name:"password",placeholder:"12345678"}),(0,k.jsx)(_,{name:"password"})]}),(0,k.jsx)(Z,{type:"submit",disabled:e||!r,children:"Register"})]})}})},q=h.ZP.div(s||(s=(0,f.Z)(["\n  display: flex;\n  flex-direction: column;\n  justify-content: center;\n  padding-left: 16px;\n  padding-right: 16px;\n  margin: 0 auto;\n  max-width: 450px;\n  height: calc(100vh - 127px);\n\n  *:last-child {\n    margin-bottom: 0;\n  }\n"]))),S=function(){return(0,k.jsxs)(q,{children:[(0,k.jsx)(c.q,{children:(0,k.jsx)("title",{children:"Register"})}),(0,k.jsx)(P,{})]})}}}]);
//# sourceMappingURL=293.480d1237.chunk.js.map