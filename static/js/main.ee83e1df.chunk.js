(this["webpackJsonpsolar-city"]=this["webpackJsonpsolar-city"]||[]).push([[0],Array(33).concat([function(e,n,t){},function(e,n,t){},function(e,n,t){},function(e,n,t){},function(e,n,t){},function(e,n,t){},,,,,function(e,n,t){},function(e,n,t){},function(e,n,t){},function(e,n,t){},function(e,n,t){},function(e,n,t){},function(e,n,t){},function(e,n,t){},function(e,n,t){},function(e,n,t){},function(e,n,t){},function(e,n,t){},function(e,n,t){},function(e,n,t){},function(e,n,t){},,function(e,n,t){"use strict";t.r(n);var a=t(0),r=t(1),i=t.n(r),c=t(15),o=t.n(c),s=(t(33),t(34),t(3)),l=t(5),u=t(6),d=t(8),j=t(7),O=(t(35),function(){return Object(a.jsx)("section",{className:"VLine"})}),m=(t(36),function(e){var n=e.children;return Object(a.jsxs)("section",{className:"Article",children:[Object(a.jsx)(O,{}),Object(a.jsx)("section",{className:"Article__Container",children:n})]})}),p=(t(37),function(e){var n=e.children,t=e.onClick;return Object(a.jsx)("section",{className:"CTA",onClick:t,children:Object(a.jsx)("p",{className:"CTA__Text",children:n})})}),h=(t(38),function(e){var n=e.children;return Object(a.jsx)("p",{className:"Pointer",children:n})}),b=t(13),C=document.getElementById("modal"),f=function(e){Object(d.a)(t,e);var n=Object(j.a)(t);function t(e){var a;return Object(l.a)(this,t),(a=n.call(this,e)).element=document.createElement("div"),a}return Object(u.a)(t,[{key:"componentDidMount",value:function(){C.appendChild(this.element)}},{key:"componentWillUnmount",value:function(){C.removeChild(this.element)}},{key:"render",value:function(){return Object(c.createPortal)(this.props.children,this.element)}}]),t}(r.Component),x=(t(43),{TOGGLE_MODAL_CARDS:"TOGGLE_MODAL_CARDS",TOGGLE_MODAL_QUESTIONNAIRE:"TOGGLE_MODAL_QUESTIONNAIRE"}),A={ZIPCODE:"ZIPCODE",EBILL:"EBILL",CONTACT:"CONTACT",NAME:"NAME",NO:"NO",YES:"YES"},_=A.ZIPCODE,N=A.EBILL,y=A.CONTACT,v=A.NAME,g=A.NO,T=A.YES,E=function(e){return{type:_,payload:e}},w=function(){return{type:g}},I=function(){return{type:T}},B=(t(44),t(45),function(e){var n=e.children;return Object(a.jsx)("h2",{className:"QuestionnaireTitle",children:n})}),S=(t(46),i.a.forwardRef((function(e,n){var t=e.name,r=e.placeholder,i=e.onClick;return Object(a.jsx)("input",{onClick:i,ref:n,name:t,placeholder:r,className:"InputBox"})}))),k=(t(47),function(e){var n=e.children;return Object(a.jsx)("h3",{className:"QuestionnaireSubTitle",children:n})}),Q=(t(48),function(e){Object(d.a)(t,e);var n=Object(j.a)(t);function t(e){var a;return Object(l.a)(this,t),(a=n.call(this,e)).zipCodeInput=i.a.createRef(),a}return Object(u.a)(t,[{key:"render",value:function(){var e=this,n=this.props,t=n.zipCodeAction,r=n.noAction,i=n.yesAction;return Object(a.jsxs)("section",{className:"QuestionnaireCardHome",children:[Object(a.jsx)("section",{className:"QuestionnaireCardHome__Blur"}),Object(a.jsxs)("section",{className:"QuestionnaireCardHome__Container",children:[Object(a.jsx)("section",{className:"QuestionnaireCardHome__Container__Top",children:Object(a.jsx)(B,{children:"Do you own your home?"})}),Object(a.jsx)("section",{className:"QuestionnaireCardHome__Container__Bottom",children:Object(a.jsxs)(k,{children:[Object(a.jsx)(S,{name:"zipCode",placeholder:"Zip Code",ref:this.zipCodeInput})," ",Object(a.jsx)("span",{className:"QuestionnaireCardHome__Container__Bottom__Span",onClick:function(){return t(e.zipCodeInput.current.value),i()},children:"Yes"})," or ",Object(a.jsx)("span",{className:"QuestionnaireCardHome__Container__Bottom__Span",onClick:r,children:"No"})]})})]})]})}}]),t}(r.Component)),L=(t(49),function(e){Object(d.a)(t,e);var n=Object(j.a)(t);function t(e){var a;return Object(l.a)(this,t),(a=n.call(this,e)).eBillInput=i.a.createRef(),a}return Object(u.a)(t,[{key:"render",value:function(){var e=this,n=this.props.eBillAction;return Object(a.jsxs)("section",{className:"QuestionnaireCardBill",children:[Object(a.jsx)("section",{className:"QuestionnaireCardBill__Blur"}),Object(a.jsxs)("section",{className:"QuestionnaireCardBill__Container",children:[Object(a.jsx)("section",{className:"QuestionnaireCardBill__Container__Top",children:Object(a.jsx)(B,{children:"What is your average Electrical Bill?"})}),Object(a.jsxs)("section",{className:"QuestionnaireCardBill__Container__Bottom",children:[Object(a.jsx)("input",{ref:this.eBillInput,id:"eBillRange",className:"QuestionnaireCardBill__Container__Bottom__Input",type:"range",min:"0",max:"800"}),Object(a.jsx)(p,{onClick:function(){return n(e.eBillInput.current.value)},children:"Next"})]})]})]})}}]),t}(r.Component)),H=(t(50),function(e){Object(d.a)(t,e);var n=Object(j.a)(t);function t(e){var a;return Object(l.a)(this,t),(a=n.call(this,e)).nameInput=i.a.createRef(),a.phoneInput=i.a.createRef(),a}return Object(u.a)(t,[{key:"render",value:function(){var e=this;return Object(a.jsxs)("section",{className:"QuestionnaireCardContact",children:[Object(a.jsx)(B,{children:"How do you want the information sent?"}),Object(a.jsx)(S,{ref:this.phoneInput,placeholder:"Phone #",name:"phoneNumber"}),Object(a.jsx)(S,{ref:this.nameInput,placeholder:"Email @",name:"email"}),Object(a.jsx)(p,{onClick:function(){return e.props.contactAction([e.nameInput.current.value,e.phoneInput.current.value])},children:"Next"})]})}}]),t}(r.Component)),D=(t(51),function(e){Object(d.a)(t,e);var n=Object(j.a)(t);function t(e){var a;return Object(l.a)(this,t),(a=n.call(this,e)).firstNameInput=i.a.createRef(),a.lastNameInput=i.a.createRef(),a}return Object(u.a)(t,[{key:"render",value:function(){var e=this,n=this.props.nameAction;return Object(a.jsxs)("section",{className:"QuestionnaireCardName",children:[Object(a.jsx)(B,{children:"How do you want the information sent?"}),Object(a.jsx)(S,{ref:this.firstNameInput,placeholder:"First Name",name:"firstName"}),Object(a.jsx)(S,{ref:this.lastNameInput,placeholder:"Last Name",name:"lastName"}),Object(a.jsx)(p,{onClick:function(){return n([e.firstNameInput.current.value,e.lastNameInput.current.value])},children:"Next"})]})}}]),t}(r.Component)),R=function(e){Object(d.a)(t,e);var n=Object(j.a)(t);function t(e){return Object(l.a)(this,t),n.call(this,e)}return Object(u.a)(t,[{key:"render",value:function(){var e=this.props,n=e.onClick,t=e.ownsHome,r=(e.zipCode,e.eBill),i=e.contact,c=e.name,o=e.zipCodeAction,s=e.yesAction,l=e.noAction,u=e.eBillAction,d=e.contactAction,j=e.nameAction;return Object(a.jsx)("section",{className:"QuestionnaireViewer",onClick:n,children:Object(a.jsxs)("section",{className:"QuestionnaireViewer__Container",onClick:function(e){return e.stopPropagation()},children:[void 0===t?Object(a.jsx)(Q,{noAction:l,yesAction:s,zipCodeAction:o}):!1===t?Object(a.jsx)(B,{children:"Sorry, Solar solar only works if you are a Homeowner."}):""===r?Object(a.jsx)(L,{eBillAction:u}):i.length<1?Object(a.jsx)(H,{contactAction:d}):c.length<1?Object(a.jsx)(D,{nameAction:j}):Object(a.jsx)(B,{children:"Thank you, we will contact you shortly!"}),Object(a.jsx)("p",{className:"QuestionnaireViewer__Container__X",onClick:n,children:"X"})]})})}}]),t}(r.Component),V=Object(b.b)((function(e){var n=e.quoteForm;return{ownsHome:n.ownsHome,zipCode:n.zipCode,eBill:n.eBill,contact:n.contact,name:n.name}}),(function(e){return{zipCodeAction:function(n){return e(E(n))},eBillAction:function(n){return e({type:N,payload:n})},contactAction:function(n){return e({type:y,payload:n})},nameAction:function(n){return e({type:v,payload:n})},noAction:function(){return e(w())},yesAction:function(){return e(I())}}}))(R),z=function(e){Object(d.a)(t,e);var n=Object(j.a)(t);function t(e){return Object(l.a)(this,t),n.call(this,e)}return Object(u.a)(t,[{key:"render",value:function(){var e=this;return Object(a.jsxs)("section",{className:"Questionnaire",children:[Object(a.jsx)("section",{className:"Questionnaire__Blur"}),Object(a.jsxs)("section",{className:"Questionnaire__Container",children:[Object(a.jsx)("h2",{className:"Questionnaire__Container__Title",children:"Do you own your home?"}),Object(a.jsx)("section",{className:"Questionnaire__Container__Options",children:Object(a.jsxs)("p",{className:"Questionnaire__Container__Options__Container",children:[Object(a.jsx)("span",{className:"Questionnaire__Container__Options__Container__Yes",onClick:function(){return e.props.modalToggle(),e.props.doesOwnHome()},children:"Yes"})," or ",Object(a.jsx)("span",{className:"Questionnaire__Container__Options__Container__No",onClick:function(){return e.props.modalToggle(),e.props.doesntOwnsHome()},children:"No"})]})})]}),this.props.modal?Object(a.jsx)(f,{children:Object(a.jsx)(V,{onClick:this.props.modalToggle})}):null]})}}]),t}(r.Component),F=Object(b.b)((function(e){return{modal:e.modal.modalQuestionnaireIsOpen}}),(function(e){return{modalToggle:function(){return e({type:x.TOGGLE_MODAL_QUESTIONNAIRE})},zipCode:function(n){return e(E(n))},doesntOwnsHome:function(){return e(w())},doesOwnHome:function(){return e(I())}}}))(z),G=(t(52),function(e){var n=e.children;return Object(a.jsx)("p",{className:"Title",children:n})}),Y=(t(53),function(){return Object(a.jsxs)("section",{className:"Hero",children:[Object(a.jsxs)("section",{className:"Hero__Left-Container",children:[Object(a.jsxs)(G,{children:["Go Green",Object(a.jsx)("br",{}),"Save Green"]}),Object(a.jsxs)(m,{children:[Object(a.jsx)(h,{children:"Fixed Rate pricing."}),Object(a.jsx)(h,{children:"Pay half of what you pay right now."})]}),Object(a.jsx)(p,{children:"Schedule Now"})]}),Object(a.jsx)("section",{className:"Hero__Right-Container",children:Object(a.jsx)(F,{})})]})}),q=(t(54),function(e){var n=e.children,t=e.onClick,r=e.id;return Object(a.jsx)("section",{onClick:t,className:"Card",id:r,children:Object(a.jsx)("p",{className:"Card__Text",children:n})})}),M=(t(55),{ACTIVATE_CARD:"ACTIVATE_CARD"}),Z=(t(56),function(e){var n=e.onClick,t=e.cards[e.card],r=t.title,i=t.subTitle,c=t.text;return Object(a.jsxs)("section",{className:"CardViewer",onClick:n,children:[Object(a.jsxs)("section",{className:"CardViewer__Container",onClick:function(e){return e.stopPropagation()},children:[Object(a.jsx)("h2",{className:"CardViewer__Container__Title",children:r}),Object(a.jsx)("h3",{className:"CardViewer__Container__Sub-Title",children:i}),Object(a.jsx)("p",{className:"CardViewer__Container__Text",children:c})]}),Object(a.jsx)("p",{className:"CardViewer__X",children:"X"})]})}),J=function(e){Object(d.a)(t,e);var n=Object(j.a)(t);function t(e){return Object(l.a)(this,t),n.call(this,e)}return Object(u.a)(t,[{key:"render",value:function(){var e=this,n=function(n){var t=n.currentTarget.id;return e.props.activateCard(t),e.props.modalToggle()};return Object(a.jsxs)("section",{className:"Cards",children:[Object(a.jsxs)("section",{className:"Cards__Container",children:[Object(a.jsx)(q,{onClick:n,id:"netMetering",children:"Net Metering"}),Object(a.jsx)(q,{onClick:n,id:"taxExemptions",children:"Tax Exemptions"}),Object(a.jsxs)(q,{onClick:n,id:"solarTaxCredit",children:["Solar ",Object(a.jsx)("br",{}),"Tax Credit"]}),Object(a.jsx)(q,{onClick:n,id:"financingForSolar",children:"Financing for Solar"})]}),this.props.card&&this.props.modal?Object(a.jsx)(f,{children:Object(a.jsx)(Z,{onClick:this.props.modalToggle,cards:{netMetering:{title:"Net Metering",subTitle:"(Lower your ELECTRICITY BILL)",text:"Florida power companies are required to provide their customers maximum 1-to-1 net metering by the Florida Public Service Commission, also known as the FPSC. What does this signify? Florida Law Requires utilities to provide you with the full retail value for every unit of solar power you generate."},taxExemptions:{title:"Tax Exemptions",subTitle:"(You may qualify for $0 down)",text:"Florida Offered two tax exemptions for solar system: A sales Taxes exemption and a property tax abatement. Under the Solar and CHP Sales Tax Exemption, Solar Energy systems are exempt from Florida\u2019s Sales tax and use tax. The Property Tax Abatement for renewable energy property exempts the assessed value of A solar system from your Property tax."},solarTaxCredit:{title:"Solar Tax Credit",subTitle:"(Get a 26% FEDERAL TAX CREDIT)",text:"The solar tax credit is a federal Incentive that can be applied to Solar systems. The credit allows for A 26% deduction of the costs of Installing a solar panel system from Your taxes. The tax Credit is nonrefundable, meaning you can Only get a refund up to the amount You owe in federal taxes."},financingForSolar:{title:"Financing for Solar",subTitle:"",text:"A solar system is a significant upfront Investment. Even if you decide not to purchase your solar in cash, we suggest Four solar financing options that can help You go solar and save you money On your electric bill."}},card:this.props.card})}):null]})}}]),t}(r.Component),P=Object(b.b)((function(e){return{modal:e.modal.modalCardsIsOpen,card:e.card.card}}),(function(e){return{modalToggle:function(){return e({type:x.TOGGLE_MODAL_CARDS})},activateCard:function(n){return e({type:M.ACTIVATE_CARD,payload:n})}}}))(J),W=(t(57),function(){return Object(a.jsxs)("header",{className:"NavBar",children:[Object(a.jsx)("img",{className:"NavBar__Logo",src:"data:image/png;base64,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",alt:""}),Object(a.jsxs)("section",{className:"NavBar__Container",children:[Object(a.jsx)("h2",{className:"NavBar__Container__Link active",children:"Home"}),Object(a.jsx)("h2",{className:"NavBar__Container__Link",children:"FAQs"}),Object(a.jsx)("h2",{className:"NavBar__Container__Link",children:"Financing"})]})]})}),U=function(e){Object(d.a)(t,e);var n=Object(j.a)(t);function t(){return Object(l.a)(this,t),n.apply(this,arguments)}return Object(u.a)(t,[{key:"render",value:function(){return Object(a.jsxs)("section",{children:[Object(a.jsx)(W,{}),Object(a.jsx)(Y,{}),Object(a.jsx)(P,{})]})}}]),t}(r.Component);var X=function(){return Object(a.jsx)(s.c,{children:Object(a.jsx)(s.a,{path:"/Stocked-On-Solar",exact:!0,component:U})})},K=function(e){e&&e instanceof Function&&t.e(3).then(t.bind(null,60)).then((function(n){var t=n.getCLS,a=n.getFID,r=n.getFCP,i=n.getLCP,c=n.getTTFB;t(e),a(e),r(e),i(e),c(e)}))},$=t(22),ee=t(14),ne=t(27),te=t.n(ne),ae=t(4),re={modalCardsIsOpen:!1,modalQuestionnaireIsOpen:!1},ie=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:re,n=arguments.length>1?arguments[1]:void 0;switch(n.type){case x.TOGGLE_MODAL_CARDS:return Object(ae.a)(Object(ae.a)({},e),{},{modalCardsIsOpen:!e.modalCardsIsOpen});case x.TOGGLE_MODAL_QUESTIONNAIRE:return Object(ae.a)(Object(ae.a)({},e),{},{modalQuestionnaireIsOpen:!e.modalQuestionnaireIsOpen});default:return e}},ce=A.ZIPCODE,oe=A.EBILL,se=A.CONTACT,le=A.NAME,ue=A.NO,de=A.YES,je={ownsHome:void 0,zipCode:"",eBill:"",contact:[],name:[]},Oe=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:je,n=arguments.length>1?arguments[1]:void 0;switch(n.type){case ce:return Object(ae.a)(Object(ae.a)({},e),{},{zipCode:n.payload});case oe:return Object(ae.a)(Object(ae.a)({},e),{},{eBill:n.payload});case se:return Object(ae.a)(Object(ae.a)({},e),{},{contact:n.payload});case le:return Object(ae.a)(Object(ae.a)({},e),{},{name:n.payload});case ue:return Object(ae.a)(Object(ae.a)({},e),{},{ownsHome:!1});case de:return Object(ae.a)(Object(ae.a)({},e),{},{ownsHome:!0});default:return e}},me={card:""},pe=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:me,n=arguments.length>1?arguments[1]:void 0;switch(n.type){case M.ACTIVATE_CARD:return Object(ae.a)(Object(ae.a)({},e),{},{card:n.payload});default:return e}},he=Object(ee.c)({modal:ie,quoteForm:Oe,card:pe}),be=[te.a],Ce=Object(ee.d)(he,ee.a.apply(void 0,be));o.a.render(Object(a.jsx)(b.a,{store:Ce,children:Object(a.jsx)($.a,{children:Object(a.jsx)(X,{})})}),document.getElementById("root")),K()}]),[[59,1,2]]]);
//# sourceMappingURL=main.ee83e1df.chunk.js.map