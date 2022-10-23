"use strict";(self.webpackChunkreact_hw_phonebook_08=self.webpackChunkreact_hw_phonebook_08||[]).push([[370],{2634:function(n,e,t){t.d(e,{W:function(){return i}});var r,o=t(168),i=t(6444).ZP.div(r||(r=(0,o.Z)(["\n  padding-bottom: 8px;\n  padding-left: 8px;\n  padding-right: 8px;\n  margin: 0 auto;\n  max-width: 382px;\n\n  *:last-child {\n    margin-bottom: 0;\n  }\n"])))},5370:function(n,e,t){t.r(e),t.d(e,{default:function(){return xn}});var r,o,i,c,u,s,a,l,d,f,h,m,p,x,g,b,v,j,Z=t(2791),w=t(4270),y=t(9434),P=t(885),k=t(9126),z=t(5984),C=t(8174),S=t(6916),B=function(n){return n.filter},A=function(n){return n.contacts.items},F=function(n){return n.contacts.isLoading},q=function(n){return n.contacts.error},G=(0,S.P1)([B,A],(function(n,e){var t=n.toLowerCase();return e.filter((function(n){return n.name.toLowerCase().includes(t)}))})),_=t(6052),I=t(5243),L=t(3329),E=function(n){var e=n.height,t=void 0===e?"40":e,r=n.color,o=void 0===r?"#4fa94d":r;return(0,L.jsx)(I.g4,{height:t,width:"40",radius:"9",color:o,ariaLabel:"three-dots-loading",wrapperStyle:{display:"flex",alignItems:"center",justifyContent:"center"},wrapperClassName:"",visible:!0})},H=t(168),K=t(6444),N=K.ZP.form(r||(r=(0,H.Z)(["\n  display: flex;\n  flex-direction: column;\n  margin-bottom: ","px;\n  padding: ","px;\n  border: ",";\n  border-radius: ",";\n  background-color: ",";\n"])),(function(n){return n.theme.space[5]}),(function(n){return n.theme.space[5]}),(function(n){return"1px solid ".concat(n.theme.colors.inputBorder)}),(function(n){return n.theme.radii.sm}),(function(n){return n.theme.colors.background})),T=K.ZP.label(o||(o=(0,H.Z)(["\n  margin-bottom: ","px;\n  font-size: ",";\n  letter-spacing: 0.03em;\n"])),(function(n){return n.theme.space[2]}),(function(n){return n.theme.fontSizes.lm})),W=K.ZP.input(i||(i=(0,H.Z)(["\n  width: 100%;\n  padding-top: ","px;\n  padding-bottom: ","px;\n  padding-left: ","px;\n  padding-right: ","px;\n  font-size: ",";\n  letter-spacing: 0.03em;\n  border: ",";\n  border-radius: ",";\n\n  &::placeholder {\n    font-size: ",";\n    color: ",";\n    letter-spacing: 0.03em;\n  }\n\n  &:focus {\n    outline: ",";\n    border-color: transparent;\n  }\n"])),(function(n){return n.theme.space[3]}),(function(n){return n.theme.space[3]}),(function(n){return n.theme.space[6]}),(function(n){return n.theme.space[3]}),(function(n){return n.theme.fontSizes.m}),(function(n){return"1px solid ".concat(n.theme.colors.inputBorder)}),(function(n){return n.theme.radii.sm}),(function(n){return n.theme.fontSizes.s}),(function(n){return n.theme.colors.textPlaceholder}),(function(n){return"2px solid ".concat(n.theme.colors.lightBlue)})),R=K.ZP.div(c||(c=(0,H.Z)(["\n  position: relative;\n  display: flex;\n  align-items: center;\n  margin-bottom: ","px;\n\n  &:focus-within svg {\n    fill: ",";\n  }\n\n  & svg {\n    position: absolute;\n    left: 8px;\n    fill: ",";\n    transition: fill 250ms ease-in-out;\n  }\n\n  &:hover svg {\n    fill: ",";\n  }\n"])),(function(n){return n.theme.space[5]}),(function(n){return n.theme.colors.green}),(function(n){return n.theme.colors.inputBorder}),(function(n){return n.theme.colors.green})),D=(0,K.ZP)(R)(u||(u=(0,H.Z)([""]))),M=K.ZP.button(s||(s=(0,H.Z)(["\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  padding: ","px;\n  font-size: ",";\n  font-weight: ",";\n  color: ",";\n  background-color: ",";\n  border-style: none;\n  border-radius: ",";\n  cursor: pointer;\n  transition: background-color 300ms ease-in-out, transform 100ms ease-in-out;\n\n  &:focus {\n    outline: ",";\n    border-color: transparent;\n  }\n\n  &:hover,\n  :focus {\n    background-color: ",";\n  }\n\n  &:active {\n    transform: scale(0.98);\n  }\n\n  &:disabled {\n    background-color: ",";\n    transform: none;\n    cursor: not-allowed;\n  }\n"])),(function(n){return n.theme.space[3]}),(function(n){return n.theme.fontSizes.m}),(function(n){return n.theme.fontWeights.bold}),(function(n){return n.theme.colors.white}),(function(n){return n.theme.colors.green}),(function(n){return n.theme.radii.sm}),(function(n){return"2px solid ".concat(n.theme.colors.lightBlue)}),(function(n){return n.theme.colors.greenHover}),(function(n){return n.theme.colors.lightGrey})),$=function(){var n=(0,Z.useState)(""),e=(0,P.Z)(n,2),t=e[0],r=e[1],o=(0,Z.useState)(""),i=(0,P.Z)(o,2),c=i[0],u=i[1],s=(0,Z.useState)(!1),a=(0,P.Z)(s,2),l=a[0],d=a[1],f=(0,y.I0)(),h=(0,y.v9)(A),m=(0,z.x0)(),p=(0,z.x0)(),x=function(n){var e=n.target,t=e.name,o=e.value;switch(t){case"name":r(o);break;case"number":u(o);break;default:throw new Error("This field doesn`t exist")}},g=function(){r(""),u("")};return(0,L.jsxs)(N,{onSubmit:function(n){if(n.preventDefault(),d(!0),h.find((function(n){return n.name.toLowerCase()===t.toLowerCase()})))return g(),d(!1),function(n){return C.Am.info('The contact with name "'.concat(n,'" is already in contacts'))}(t);f((0,_.uK)({name:t,number:c})).then((function(n){"fulfilled"===n.meta.requestStatus&&(!function(n){C.Am.success('The contact with name "'.concat(n,'" added successfully'))}(t),d(!1))})),g()},autoComplete:"off",children:[(0,L.jsx)(T,{htmlFor:m,children:"Name"}),(0,L.jsxs)(R,{children:[(0,L.jsx)(W,{id:m,placeholder:"Enter name...",type:"text",name:"name",value:t,onChange:x,pattern:"^[a-zA-Z\u0430-\u044f\u0410-\u042f]+(([' -][a-zA-Z\u0430-\u044f\u0410-\u042f ])?[a-zA-Z\u0430-\u044f\u0410-\u042f]*)*$",title:"Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan",required:!0}),(0,L.jsx)(k.HHm,{size:"18"})]}),(0,L.jsx)(T,{htmlFor:p,children:"Number"}),(0,L.jsxs)(D,{children:[(0,L.jsx)(k.lfG,{size:"18"}),(0,L.jsx)(W,{id:p,placeholder:"Enter number...",type:"tel",name:"number",value:c,onChange:x,pattern:"\\+?\\d{1,4}?[-.\\s]?\\(?\\d{1,3}?\\)?[-.\\s]?\\d{1,4}[-.\\s]?\\d{1,4}[-.\\s]?\\d{1,9}",title:"Phone number must be digits and can contain spaces, dashes, parentheses and can start with +",required:!0})]}),(0,L.jsx)(M,{type:"submit",disabled:l,children:l?(0,L.jsx)(E,{height:"18"}):"Add contact"})]})},J=t(1634),O=K.ZP.li(a||(a=(0,H.Z)(["\n  display: flex;\n  justify-content: space-between;\n  align-items: center;\n  padding-left: ","px;\n  padding-right: ","px;\n  padding-top: ","px;\n  padding-bottom: ","px;\n  border-left: ",";\n  border-radius: ",";\n  background-color: ",";\n  box-shadow: 0px 0px 3px rgba(0, 0, 0, 0.12), 0px 1px 1px rgba(0, 0, 0, 0.14),\n    0px 2px 1px rgba(0, 0, 0, 0.2);\n\n  &:not(:last-child) {\n    margin-bottom: ","px;\n  }\n"])),(function(n){return n.theme.space[5]}),(function(n){return n.theme.space[3]}),(function(n){return n.theme.space[3]}),(function(n){return n.theme.space[3]}),(function(n){var e=n.theme;return"4px solid ".concat(e.colors.green)}),(function(n){return n.theme.radii.sm}),(function(n){return n.theme.colors.contact}),(function(n){return n.theme.space[3]})),Q=K.ZP.p(l||(l=(0,H.Z)(["\n  margin-right: ","px;\n  font-size: ",";\n\n  & a:focus {\n    outline: ",";\n    border-color: transparent;\n  }\n"])),(function(n){return n.theme.space[3]}),(function(n){return n.theme.fontSizes.m}),(function(n){return"2px solid ".concat(n.theme.colors.lightBlue)})),U=K.ZP.button(d||(d=(0,H.Z)(["\n  display: flex;\n  width: 35px;\n  height: 35px;\n  align-items: center;\n  justify-content: center;\n  padding: 0;\n  border-style: none;\n  border-radius: ",";\n  background: transparent;\n  cursor: pointer;\n  transition: background-color 250ms ease-in-out;\n\n  & svg {\n    width: 24px;\n    height: 24px;\n    fill: ",";\n    transition: fill 250ms ease-in-out;\n  }\n\n  &:hover {\n    background-color: ",";\n  }\n\n  &:active {\n    background-color: ",";\n  }\n\n  &:focus {\n    outline: ",";\n    border-color: transparent;\n  }\n"])),(function(n){return n.theme.radii.sm}),(function(n){return n.theme.colors.red}),(function(n){return n.theme.colors.lightGrey}),(function(n){return n.theme.colors.middleGrey}),(function(n){return"2px solid ".concat(n.theme.colors.lightBlue)})),V=t(4651),X=function(n){var e=n.id,t=n.name,r=n.number,o=n.clearFilter,i=(0,Z.useState)(!1),c=(0,P.Z)(i,2),u=c[0],s=c[1],a=(0,y.I0)();return(0,L.jsxs)(O,{children:[(0,L.jsxs)(Q,{children:[t,": ",(0,L.jsx)("a",{href:"tel:",children:r})]}),u?(0,L.jsx)(E,{height:"35"}):(0,L.jsx)(U,{onClick:function(){console.log(e),s(!0),a((0,_.GK)(e)).then((function(n){"fulfilled"===n.meta.requestStatus&&(C.Am.success("The contact named ".concat(t," deleted successfully")),o())}))},type:"button",children:(0,L.jsx)(V.R6G,{})})]})},Y=K.ZP.ul(f||(f=(0,H.Z)(["\n  /* max-width: 370px; */\n"]))),nn=function(){var n=(0,y.I0)(),e=(0,y.v9)(B),t=(0,y.v9)(G),r=function(){t.length-1===0&&""!==e&&n((0,J.sx)())};return(0,L.jsx)(Y,{children:t.map((function(n){var e=n.id,t=n.name,o=n.number;return(0,L.jsx)(X,{id:e,name:t,number:o,clearFilter:r},e)}))})},en=t(8820),tn=K.ZP.div(h||(h=(0,H.Z)(["\n  display: flex;\n  justify-content: space-between;\n  margin-bottom: ","px;\n  padding-left: ","px;\n  padding-right: ","px;\n  padding-top: ","px;\n  padding-bottom: ","px;\n  border: ",";\n  border-radius: ",";\n  background-color: ",";\n"])),(function(n){return n.theme.space[5]}),(function(n){return n.theme.space[5]}),(function(n){return n.theme.space[5]}),(function(n){return n.theme.space[3]}),(function(n){return n.theme.space[3]}),(function(n){var e=n.theme;return"1px solid ".concat(e.colors.inputBorder)}),(function(n){return n.theme.radii.sm}),(function(n){return n.theme.colors.background})),rn=K.ZP.div(m||(m=(0,H.Z)(["\n  position: relative;\n\n  & svg {\n    position: absolute;\n    top: 5px;\n    left: 6px;\n    fill: ",";\n  }\n"])),(function(n){return n.theme.colors.inputBorder})),on=K.ZP.p(p||(p=(0,H.Z)(["\n  margin-bottom: ","px;\n  letter-spacing: 0.02em;\n"])),(function(n){return n.theme.space[2]})),cn=K.ZP.input(x||(x=(0,H.Z)(["\n  padding-top: ","px;\n  padding-bottom: ","px;\n  padding-left: ","px;\n  padding-right: ","px;\n  font-size: ",";\n  letter-spacing: 0.03em;\n  border: ",";\n  border-radius: ",";\n\n  &::placeholder {\n    font-size: ",";\n    color: ",";\n    letter-spacing: 0.03em;\n  }\n\n  &:focus {\n    outline: ",";\n    border-color: transparent;\n  }\n"])),(function(n){return n.theme.space[2]}),(function(n){return n.theme.space[2]}),(function(n){return n.theme.space[6]}),(function(n){return n.theme.space[3]}),(function(n){return n.theme.fontSizes.m}),(function(n){return"1px solid ".concat(n.theme.colors.inputBorder)}),(function(n){return n.theme.radii.sm}),(function(n){return n.theme.fontSizes.s}),(function(n){return n.theme.colors.textPlaceholder}),(function(n){return"2px solid ".concat(n.theme.colors.lightBlue)})),un=K.ZP.div(g||(g=(0,H.Z)(["\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  justify-content: center;\n  padding: 0 10px;\n  background-color: ",";\n  border-radius: ",";\n"])),(function(n){return n.theme.colors.inputBorder}),(function(n){return n.theme.radii.sm})),sn=K.ZP.p(b||(b=(0,H.Z)(["\n  color: ",";\n"])),(function(n){return n.theme.colors.white})),an=K.ZP.p(v||(v=(0,H.Z)(["\n  font-size: ",";\n  font-weight: ",";\n  line-height: ",";\n  color: ",";\n"])),(function(n){return n.theme.fontSizes.xm}),(function(n){return n.theme.fontWeights.lightBold}),(function(n){return n.theme.lineHeights.text}),(function(n){return n.theme.colors.white})),ln=t(407),dn=(0,K.ZP)("div")(ln.$_,ln.Dh,ln.bK,ln.GQ,ln.eC,ln.Oq,ln.Cg,ln.FK),fn=function(){var n=(0,y.I0)(),e=(0,y.v9)(B),t=(0,y.v9)(G).length;return(0,L.jsxs)(tn,{children:[(0,L.jsxs)(dn,{children:[(0,L.jsx)(on,{children:"Find contacts by name:"}),(0,L.jsxs)(rn,{children:[(0,L.jsx)(cn,{autoComplete:"off",type:"text",name:"filter",placeholder:"Search contacts...",value:e,onChange:function(e){return n((0,J.M6)(e.target.value.trimStart()))}}),(0,L.jsx)(en.RB5,{size:"20"})]})]}),(0,L.jsxs)(un,{children:[(0,L.jsx)(sn,{children:"Find"}),(0,L.jsx)(an,{children:t})]})]})},hn=K.ZP.p(j||(j=(0,H.Z)(["\n  font-weight: 500;\n  text-align: center;\n"]))),mn=function(){var n=(0,y.v9)(q);return(0,L.jsxs)(hn,{children:[n," "]})},pn=t(2634),xn=function(){var n=(0,y.I0)(),e=(0,y.v9)(A),t=(0,y.v9)(F),r=(0,y.v9)(q),o=(0,Z.useRef)(!0);(0,Z.useEffect)((function(){n((0,_.yF)()).then((function(n){"fulfilled"===n.meta.requestStatus&&(o.current=!1)}))}),[n]);var i=e.length>0&&!r;return(0,L.jsxs)(pn.W,{children:[(0,L.jsx)(w.q,{children:(0,L.jsx)("title",{children:"Contacts"})}),(0,L.jsx)(dn,{as:"h1",mb:5,children:"Phonebook \u260e\ufe0f"}),(0,L.jsx)($,{}),(0,L.jsx)(dn,{as:"h2",mb:3,children:"Contacts"}),(0,L.jsx)(fn,{}),t&&o.current&&(0,L.jsx)(E,{height:"10"}),r&&(0,L.jsx)(mn,{}),i&&(0,L.jsx)(nn,{})]})}}}]);
//# sourceMappingURL=370.27772560.chunk.js.map