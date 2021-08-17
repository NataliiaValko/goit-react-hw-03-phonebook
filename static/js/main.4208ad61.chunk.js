(this["webpackJsonpgoit-react-hw-03-phonebook"]=this["webpackJsonpgoit-react-hw-03-phonebook"]||[]).push([[0],{11:function(t,e,n){t.exports={icon:"Filter_icon__2oy5o",label:"Filter_label__k5Z5X",input:"Filter_input__gGtNN"}},13:function(t,e,n){t.exports={list:"ContactList_list__11p6n",item:"ContactList_item__2vRla"}},16:function(t,e,n){t.exports={"new-contact":"Section_new-contact__1GQMe",section:"Section_section__2tosu",sectionList:"Section_sectionList__2bdA7 Section_section__2tosu"}},17:function(t,e,n){t.exports={container:"Container_container__2RYPW"}},27:function(t,e,n){},3:function(t,e,n){t.exports={link:"ContactItem_link__1op4B",name:"ContactItem_name__1Xoui",wrapper:"ContactItem_wrapper__3XHy5",icon:"ContactItem_icon__3S4lH",number:"ContactItem_number__3208_",button:"ContactItem_button__1fHCA"}},4:function(t,e,n){t.exports={header:"App_header__KcLtF",title:"App_title__2mPpy",newContactWrapper:"App_newContactWrapper__3XwDX",newContactTitle:"App_newContactTitle__2-W6m",titleContacts:"App_titleContacts__ecOL0",text:"App_text__2Z3Qi"}},46:function(t,e,n){"use strict";n.r(e);var a=n(2),c=n(15),r=(n(26),n(27),n(21)),i=n(6),s=n(7),o=n(10),l=n(9),u=n(48),m=n(8),b=n.n(m),d=(n(44),n(16)),h=n.n(d),j=n(17),_=n.n(j),p=n(1),f=function(t){var e=t.children;return Object(p.jsx)("div",{className:_.a.container,children:e})},O=function(t){var e=t.nameForClass,n=t.children;return Object(p.jsx)("section",{className:h.a["".concat(e)],children:Object(p.jsx)(f,{children:n})})},x=n(18),C=n(5),v=n.n(C),N=function(t){Object(o.a)(n,t);var e=Object(l.a)(n);function n(){var t;Object(i.a)(this,n);for(var a=arguments.length,c=new Array(a),r=0;r<a;r++)c[r]=arguments[r];return(t=e.call.apply(e,[this].concat(c))).state={name:"",number:""},t.handleGetValue=function(e){var n=e.currentTarget.name;t.setState(Object(x.a)({},n,e.currentTarget.value))},t.handleSubmit=function(e){e.preventDefault(),t.props.onSubmit(t.state),t.setState({name:"",number:""})},t}return Object(s.a)(n,[{key:"render",value:function(){return Object(p.jsxs)("form",{onSubmit:this.handleSubmit,children:[Object(p.jsxs)("label",{className:v.a.label,children:["Name",Object(p.jsx)("input",{className:v.a.input,value:this.state.name,onChange:this.handleGetValue,placeholder:"Elon Reeve Musk",type:"text",name:"name",pattern:"^[a-zA-Z\u0430-\u044f\u0410-\u042f]+(([' -][a-zA-Z\u0430-\u044f\u0410-\u042f ])?[a-zA-Z\u0430-\u044f\u0410-\u042f]*)*$",title:"\u0418\u043c\u044f \u043c\u043e\u0436\u0435\u0442 \u0441\u043e\u0441\u0442\u043e\u044f\u0442\u044c \u0442\u043e\u043b\u044c\u043a\u043e \u0438\u0437 \u0431\u0443\u043a\u0432, \u0430\u043f\u043e\u0441\u0442\u0440\u043e\u0444\u0430, \u0442\u0438\u0440\u0435 \u0438 \u043f\u0440\u043e\u0431\u0435\u043b\u043e\u0432. \u041d\u0430\u043f\u0440\u0438\u043c\u0435\u0440 Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan \u0438 \u0442. \u043f.",required:!0})]}),Object(p.jsxs)("label",{className:v.a.label,children:["Number",Object(p.jsx)("input",{className:v.a.input,value:this.state.number,onChange:this.handleGetValue,placeholder:"1-800-613-8840",type:"tel",name:"number",pattern:"\\+?\\d{1,4}?[-.\\s]?\\(?\\d{1,3}?\\)?[-.\\s]?\\d{1,4}[-.\\s]?\\d{1,4}[-.\\s]?\\d{1,9}",title:"\u041d\u043e\u043c\u0435\u0440 \u0442\u0435\u043b\u0435\u0444\u043e\u043d\u0430 \u0434\u043e\u043b\u0436\u0435\u043d \u0441\u043e\u0441\u0442\u043e\u044f\u0442\u044c \u0446\u0438\u0444\u0440 \u0438 \u043c\u043e\u0436\u0435\u0442 \u0441\u043e\u0434\u0435\u0440\u0436\u0430\u0442\u044c \u043f\u0440\u043e\u0431\u0435\u043b\u044b, \u0442\u0438\u0440\u0435, \u043a\u0440\u0443\u0433\u043b\u044b\u0435 \u0441\u043a\u043e\u0431\u043a\u0438 \u0438 \u043c\u043e\u0436\u0435\u0442 \u043d\u0430\u0447\u0438\u043d\u0430\u0442\u044c\u0441\u044f \u0441 +",required:!0})]}),Object(p.jsx)("button",{className:v.a.button,type:"submit","aria-label":"button-submit",children:"Add contact"})]})}}]),n}(a.Component),g=n(19),w=n(11),A=n.n(w),y=function(t){var e=t.name,n=t.onChange;return Object(p.jsx)(p.Fragment,{children:Object(p.jsxs)("label",{className:A.a.label,children:[Object(p.jsx)("input",{className:A.a.input,placeholder:"Enter to search...",type:"text",name:e,onChange:n,pattern:"^[a-zA-Z\u0430-\u044f\u0410-\u042f]+(([' -][a-zA-Z\u0430-\u044f\u0410-\u042f ])?[a-zA-Z\u0430-\u044f\u0410-\u042f]*)*$",title:"\u0418\u043c\u044f \u043c\u043e\u0436\u0435\u0442 \u0441\u043e\u0441\u0442\u043e\u044f\u0442\u044c \u0442\u043e\u043b\u044c\u043a\u043e \u0438\u0437 \u0431\u0443\u043a\u0432, \u0430\u043f\u043e\u0441\u0442\u0440\u043e\u0444\u0430, \u0442\u0438\u0440\u0435 \u0438 \u043f\u0440\u043e\u0431\u0435\u043b\u043e\u0432. \u041d\u0430\u043f\u0440\u0438\u043c\u0435\u0440 Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan \u0438 \u0442. \u043f.",required:!0}),Object(p.jsx)(g.a,{className:A.a.icon})]})})},S=n(20),k=n(3),F=n.n(k),I=function(t){var e=t.id,n=t.name,a=t.number,c=t.onDeleteContact;return Object(p.jsxs)(p.Fragment,{children:[Object(p.jsxs)("a",{className:F.a.link,href:"tel:{number}",children:[Object(p.jsx)("p",{className:F.a.name,children:n}),Object(p.jsxs)("div",{className:F.a.wrapper,children:[Object(p.jsx)(S.a,{className:F.a.icon}),Object(p.jsx)("p",{className:F.a.number,children:a})]})]}),Object(p.jsx)("button",{className:F.a.button,type:"button",onClick:function(){return c(e)},"aria-label":"delete contact",children:"Delete"})]})},L=n(13),z=n.n(L),M=function(t){var e=t.contacts,n=t.onDeleteContact;return Object(p.jsx)("ul",{className:z.a.list,children:e.map((function(t){var e=t.id,a=t.name,c=t.number;return Object(p.jsx)("li",{className:z.a.item,children:Object(p.jsx)(I,{id:e,name:a,number:c,onDeleteContact:n})},e)}))})},Z=n(4),D=n.n(Z),T=function(t){Object(o.a)(n,t);var e=Object(l.a)(n);function n(){var t;Object(i.a)(this,n);for(var a=arguments.length,c=new Array(a),s=0;s<a;s++)c[s]=arguments[s];return(t=e.call.apply(e,[this].concat(c))).state={contacts:[],filter:""},t.repeatCheck=function(e){return!t.state.contacts.find((function(t){return t.name===e}))},t.showNotification=function(){m.store.addNotification({title:"Oops!",message:"But there\u2019s already a contact with that name on your contact list",type:"danger",insert:"top",container:"top-right",animationIn:["animate__animated","animate__fadeIn"],animationOut:["animate__animated","animate__fadeOut"],dismiss:{duration:3e3,onScreen:!0}})},t.addContact=function(e){var n=e.name,a=e.number;if(t.repeatCheck(n)){var c={id:Object(u.a)(),name:n,number:a};t.setState((function(t){var e=t.contacts;return{contacts:[c].concat(Object(r.a)(e))}}))}else t.showNotification()},t.deleteContact=function(e){t.setState((function(t){return{contacts:t.contacts.filter((function(t){return t.id!==e}))}}))},t.setFilterValue=function(e){t.setState({filter:e.currentTarget.value.trim()})},t.getResultSearch=function(){var e=t.state,n=e.filter;return e.contacts.filter((function(t){return t.name.toLowerCase().includes(n.toLowerCase())||t.number.includes(n)}))},t}return Object(s.a)(n,[{key:"render",value:function(){var t=this.state.filter,e=this.getResultSearch();return Object(p.jsxs)(p.Fragment,{children:[Object(p.jsx)(b.a,{}),Object(p.jsx)("header",{className:D.a.header,children:Object(p.jsx)(f,{children:Object(p.jsx)("h1",{className:D.a.title,children:"My phonebook"})})}),Object(p.jsx)(O,{nameForClass:"section",children:Object(p.jsxs)("div",{className:D.a.newContactWrapper,children:[Object(p.jsx)("h2",{className:D.a.newContactTitle,children:"A new contact"}),Object(p.jsx)(N,{onSubmit:this.addContact})]})}),Object(p.jsxs)(O,{nameForClass:"sectionList",children:[Object(p.jsx)("h2",{className:D.a.titleContacts,children:"Contacts"}),Object(p.jsx)(y,{name:t,onChange:this.setFilterValue}),this.state.contacts[0]&&!this.state.filter?Object(p.jsx)(M,{contacts:e,onDeleteContact:this.deleteContact}):Object(p.jsx)("p",{className:D.a.text,children:"There\u2019s nothing here yet..."})]})]})}}]),n}(a.Component);Object(c.render)(Object(p.jsx)(a.StrictMode,{children:Object(p.jsx)(T,{})}),document.getElementById("root"))},5:function(t,e,n){t.exports={label:"ContactForm_label__3XMsu",input:"ContactForm_input__UV2QP",button:"ContactForm_button__3wMC_"}}},[[46,1,2]]]);
//# sourceMappingURL=main.4208ad61.chunk.js.map