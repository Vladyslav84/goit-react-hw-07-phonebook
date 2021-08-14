(this["webpackJsonpgoit-react-hw-07-phonebook"]=this["webpackJsonpgoit-react-hw-07-phonebook"]||[]).push([[0],{12:function(t,e,n){t.exports={contactList:"ContactList_contactList__3NRhL",btn:"ContactList_btn__2HQx8",contactitem:"ContactList_contactitem__w5wmI"}},13:function(t,e,n){t.exports={container:"App_container__10QHA",title:"App_title__2HGxw"}},26:function(t,e,n){t.exports={filter:"Filter_filter__254X5"}},31:function(t,e,n){},56:function(t,e,n){"use strict";n.r(e);var r=n(0),a=n.n(r),c=n(11),u=n.n(c),s=(n(31),n(5)),o=n(9),i=n.n(o),l=n(58),b=n(3),j=n.n(b),p=n(8),f=n(10),d=n.n(f);function O(){return m.apply(this,arguments)}function m(){return(m=Object(p.a)(j.a.mark((function t(){var e;return j.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,d.a.get("/contacts");case 2:return e=t.sent,t.abrupt("return",e.data);case 4:case"end":return t.stop()}}),t)})))).apply(this,arguments)}function h(t){return x.apply(this,arguments)}function x(){return(x=Object(p.a)(j.a.mark((function t(e){var n;return j.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,d.a.post("/contacts",e);case 2:return n=t.sent,t.abrupt("return",n.data);case 4:case"end":return t.stop()}}),t)})))).apply(this,arguments)}function v(t){return _.apply(this,arguments)}function _(){return(_=Object(p.a)(j.a.mark((function t(e){var n;return j.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,d.a.delete("/contacts/".concat(e));case 2:return n=t.sent,t.abrupt("return",n.data);case 4:case"end":return t.stop()}}),t)})))).apply(this,arguments)}d.a.defaults.baseURL="http://localhost:3003";var w=n(7),N=Object(w.b)("contacts/fetcContacts",Object(p.a)(j.a.mark((function t(){var e;return j.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.prev=0,t.next=3,O();case 3:return e=t.sent,t.abrupt("return",e);case 7:return t.prev=7,t.t0=t.catch(0),t.abrupt("return",t.t0);case 10:case"end":return t.stop()}}),t,null,[[0,7]])})))),g=Object(w.b)("contacts/postContacts",function(){var t=Object(p.a)(j.a.mark((function t(e){var n;return j.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.prev=0,t.next=3,h(e);case 3:return n=t.sent,t.abrupt("return",n);case 7:return t.prev=7,t.t0=t.catch(0),t.abrupt("return",t.t0);case 10:case"end":return t.stop()}}),t,null,[[0,7]])})));return function(e){return t.apply(this,arguments)}}()),y=Object(w.b)("contacts/deleteContacts",function(){var t=Object(p.a)(j.a.mark((function t(e){return j.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.prev=0,t.next=3,v(e);case 3:return t.abrupt("return",e);case 6:return t.prev=6,t.t0=t.catch(0),t.abrupt("return",t.t0);case 9:case"end":return t.stop()}}),t,null,[[0,6]])})));return function(e){return t.apply(this,arguments)}}()),C=function(t){return t.contactsSlice.entities},L=function(t){return t.filterSlice},k=n(1);function A(){var t=Object(s.b)(),e=Object(s.c)(C),n=Object(l.a)(),r=Object(l.a)();return Object(k.jsxs)("form",{onSubmit:function(n){n.preventDefault(),e.some((function(t){return t.name===n.target.elements.inputName.value}))?alert("".concat(n.target.elements.inputName.value," is already in contacts")):t(g({name:n.target.elements.inputName.value,number:n.target.elements.inputNumber.value})),n.target.reset()},className:i.a.form,children:[Object(k.jsx)("span",{children:"Name"}),Object(k.jsx)("label",{className:i.a.formItem,children:Object(k.jsx)("input",{autoComplete:"off",type:"text",name:"inputName",pattern:"^[a-zA-Z\u0430-\u044f\u0410-\u042f]+(([' -][a-zA-Z\u0430-\u044f\u0410-\u042f ])?[a-zA-Z\u0430-\u044f\u0410-\u042f]*)*$",title:"\u0418\u043c\u044f \u043c\u043e\u0436\u0435\u0442 \u0441\u043e\u0441\u0442\u043e\u044f\u0442\u044c \u0442\u043e\u043b\u044c\u043a\u043e \u0438\u0437 \u0431\u0443\u043a\u0432, \u0430\u043f\u043e\u0441\u0442\u0440\u043e\u0444\u0430, \u0442\u0438\u0440\u0435 \u0438 \u043f\u0440\u043e\u0431\u0435\u043b\u043e\u0432. \u041d\u0430\u043f\u0440\u0438\u043c\u0435\u0440 Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan \u0438 \u0442. \u043f.",required:!0,id:r})}),Object(k.jsx)("span",{className:i.a.number,children:"Number"}),Object(k.jsx)("label",{className:i.a.formItem,children:Object(k.jsx)("input",{autoComplete:"off",type:"tel",name:"inputNumber",pattern:"\\+?\\d{1,4}?[-.\\s]?\\(?\\d{1,3}?\\)?[-.\\s]?\\d{1,4}[-.\\s]?\\d{1,4}[-.\\s]?\\d{1,9}",title:"\u041d\u043e\u043c\u0435\u0440 \u0442\u0435\u043b\u0435\u0444\u043e\u043d\u0430 \u0434\u043e\u043b\u0436\u0435\u043d \u0441\u043e\u0441\u0442\u043e\u044f\u0442\u044c \u0446\u0438\u0444\u0440 \u0438 \u043c\u043e\u0436\u0435\u0442 \u0441\u043e\u0434\u0435\u0440\u0436\u0430\u0442\u044c \u043f\u0440\u043e\u0431\u0435\u043b\u044b, \u0442\u0438\u0440\u0435, \u043a\u0440\u0443\u0433\u043b\u044b\u0435 \u0441\u043a\u043e\u0431\u043a\u0438 \u0438 \u043c\u043e\u0436\u0435\u0442 \u043d\u0430\u0447\u0438\u043d\u0430\u0442\u044c\u0441\u044f \u0441 +",required:!0,id:n})}),Object(k.jsx)("button",{type:"submit",className:i.a.btn,children:"Add contact"})]})}var S=n(26),F=n.n(S),I=Object(w.c)({name:"filter",initialState:"",reducers:{filter:function(t,e){return e.payload}}}),z=I.actions.filter,E=I.reducer;function J(){var t=Object(s.b)();return Object(k.jsxs)("div",{children:[Object(k.jsx)("p",{className:F.a.title,children:"Find contacts by name"}),Object(k.jsx)("label",{children:Object(k.jsx)("input",{type:"text",onChange:function(e){return t(z(e.currentTarget.value.toLocaleLowerCase()))}})})]})}var R=n(12),Z=n.n(R);function q(){var t=Object(s.c)(C),e=Object(s.c)(L),n=Object(s.b)();Object(r.useEffect)((function(){return n(N())}),[n]);var a=t.filter((function(t){return t.name.toLocaleLowerCase().includes(e)}));return Object(k.jsx)("ul",{className:Z.a.contactList,children:a.map((function(t){return Object(k.jsxs)("li",{className:Z.a.contactitem,children:[Object(k.jsxs)("span",{children:[t.name," ",t.number]}),Object(k.jsx)("button",{type:"button",className:Z.a.btn,onClick:function(){return n(y(t.id))},children:"Delete"})]},t.id)}))})}var H=n(13),B=n.n(H);function D(){var t=Object(s.c)(C);return Object(k.jsxs)("div",{className:B.a.container,children:[Object(k.jsx)("h1",{className:B.a.title,children:"Phonebook"}),Object(k.jsx)(A,{}),t.length>0&&Object(k.jsx)("h2",{className:B.a.title,children:"Contacts"}),t.length>0&&Object(k.jsx)(J,{}),Object(k.jsx)(q,{})]})}var M,Q=n(6),T=n(14),U=n(2),G={contactsSlice:Object(w.c)({name:"contacts",initialState:{entities:[],status:null,error:null},extraReducers:(M={},Object(Q.a)(M,N.fulfilled,(function(t,e){return Object(U.a)(Object(U.a)({},t),{},{entities:[].concat(Object(T.a)(t.entities),Object(T.a)(e.payload)),status:null,error:null})})),Object(Q.a)(M,N.pending,(function(t,e){return Object(U.a)(Object(U.a)({},t),{},{status:"Loading",error:null})})),Object(Q.a)(M,N.rejected,(function(t,e){return Object(U.a)(Object(U.a)({},t),{},{status:null,error:"Error"})})),Object(Q.a)(M,g.fulfilled,(function(t,e){return Object(U.a)(Object(U.a)({},t),{},{entities:[].concat(Object(T.a)(t.entities),[e.payload]),status:null,error:null})})),Object(Q.a)(M,g.pending,(function(t,e){return Object(U.a)(Object(U.a)({},t),{},{status:"Loading"})})),Object(Q.a)(M,g.rejected,(function(t,e){return Object(U.a)(Object(U.a)({},t),{},{status:null,error:"Error"})})),Object(Q.a)(M,y.fulfilled,(function(t,e){return Object(U.a)(Object(U.a)({},t),{},{entities:t.entities.filter((function(t){return t.id!==e.payload})),status:null,error:null})})),Object(Q.a)(M,y.pending,(function(t,e){return Object(U.a)(Object(U.a)({},t),{},{status:"Loading",error:null})})),Object(Q.a)(M,y.rejected,(function(t,e){return Object(U.a)(Object(U.a)({},t),{},{status:null,error:"Error"})})),M)}).reducer,filterSlice:E},P=Object(w.a)({reducer:G,devTools:!1});u.a.render(Object(k.jsx)(a.a.StrictMode,{children:Object(k.jsx)(s.a,{store:P,children:Object(k.jsx)(D,{})})}),document.getElementById("root"))},9:function(t,e,n){t.exports={form:"ContactForm_form__25xJC",formItem:"ContactForm_formItem__290oU",btn:"ContactForm_btn__2q6dz",number:"ContactForm_number__1RZ2o"}}},[[56,1,2]]]);
//# sourceMappingURL=main.036e83ad.chunk.js.map