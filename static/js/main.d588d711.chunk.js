(this["webpackJsonpsolar-city"]=this["webpackJsonpsolar-city"]||[]).push([[0],{33:function(e,t,n){},34:function(e,t,n){},35:function(e,t,n){},36:function(e,t,n){},37:function(e,t,n){},38:function(e,t,n){},43:function(e,t,n){},44:function(e,t,n){},45:function(e,t,n){},46:function(e,t,n){},47:function(e,t,n){},48:function(e,t,n){},49:function(e,t,n){},50:function(e,t,n){},52:function(e,t,n){"use strict";n.r(t);var a=n(1),r=n(0),i=n(15),c=n.n(i),o=(n(33),n(34),n(3)),s=n(9),l=n(10),u=n(12),d=n(11),j=(n(35),function(){return Object(a.jsx)("section",{className:"VLine"})}),O=(n(36),function(e){var t=e.children;return Object(a.jsxs)("section",{className:"Article",children:[Object(a.jsx)(j,{}),Object(a.jsx)("section",{className:"Article__Container",children:t})]})}),b=(n(37),function(e){var t=e.children;return Object(a.jsx)("section",{className:"CTA",children:Object(a.jsx)("p",{className:"CTA__Text",children:t})})}),m=(n(38),function(e){var t=e.children;return Object(a.jsx)("p",{className:"Pointer",children:t})}),p=n(13),h=document.getElementById("modal"),C=function(e){Object(u.a)(n,e);var t=Object(d.a)(n);function n(e){var a;return Object(s.a)(this,n),(a=t.call(this,e)).element=document.createElement("div"),a}return Object(l.a)(n,[{key:"componentDidMount",value:function(){h.appendChild(this.element)}},{key:"componentWillUnmount",value:function(){h.removeChild(this.element)}},{key:"render",value:function(){return Object(i.createPortal)(this.props.children,this.element)}}]),n}(r.Component),x=(n(43),{TOGGLE_MODAL_CARDS:"TOGGLE_MODAL_CARDS",TOGGLE_MODAL_QUESTIONNAIRE:"TOGGLE_MODAL_QUESTIONNAIRE"}),f={ACTIVATE_CARD:"ACTIVATE_CARD"},A={ZIPCODE:"ZIPCODE",EBILL:"EBILL",CONTACT:"CONTACT",NAME:"NAME",NO:"NO"},_=A.ZIPCODE,g=A.EBILL,y=A.CONTACT,N=A.NAME,T=A.NO,v=(n(44),function(e){Object(u.a)(n,e);var t=Object(d.a)(n);function n(e){return Object(s.a)(this,n),t.call(this,e)}return Object(l.a)(n,[{key:"render",value:function(){var e=this.props.onClick;return Object(a.jsx)("section",{className:"QuestionnaireViewer",onClick:e,children:Object(a.jsxs)("section",{className:"QuestionnaireViewer__Container",onClick:function(e){return e.stopPropagation()},children:[Object(a.jsx)("section",{className:"QuestionnaireViewer__Container__Top"}),Object(a.jsx)("section",{className:"QuestionnaireViewer__Container__Bottom"}),Object(a.jsx)("p",{className:"QuestionnaireViewer__Container__X",onClick:e,children:"X"})]})})}}]),n}(r.Component)),E=Object(p.b)((function(e){var t=e.quoteForm;return{ownsHome:t.ownsHome,zipCode:t.zipCode,eBill:t.eBill,contact:t.contact,name:t.name}}),(function(e){return{eBill:function(t){return e({type:g,payload:t})},contact:function(t){return e({type:y,payload:t})},name:function(t){return e({type:N,payload:t})}}}))(v),w=function(e){Object(u.a)(n,e);var t=Object(d.a)(n);function n(e){return Object(s.a)(this,n),t.call(this,e)}return Object(l.a)(n,[{key:"render",value:function(){return Object(a.jsxs)("section",{className:"Questionnaire",children:[Object(a.jsx)("section",{className:"Questionnaire__Blur"}),Object(a.jsxs)("section",{className:"Questionnaire__Container",children:[Object(a.jsx)("h2",{className:"Questionnaire__Container__Title",children:"Do you own your home?"}),Object(a.jsx)("section",{className:"Questionnaire__Container__Options",children:Object(a.jsxs)("p",{className:"Questionnaire__Container__Options__Container",children:[Object(a.jsx)("span",{className:"Questionnaire__Container__Options__Container__Yes",onClick:this.props.modalToggle,children:"Yes"})," or ",Object(a.jsx)("span",{className:"Questionnaire__Container__Options__Container__No",onClick:this.props.modalToggle,children:"No"})]})})]}),this.props.modal?Object(a.jsx)(C,{children:Object(a.jsx)(E,{onClick:this.props.modalToggle})}):null]})}}]),n}(r.Component),I=Object(p.b)((function(e){return{modal:e.modal.modalQuestionnaireIsOpen}}),(function(e){return{modalToggle:function(){return e({type:x.TOGGLE_MODAL_QUESTIONNAIRE})},zipCode:function(t){return e({type:_,payload:t})},ownsHome:function(){return e({type:T})}}}))(w),S=(n(45),function(e){var t=e.children;return Object(a.jsx)("p",{className:"Title",children:t})}),L=(n(46),function(){return Object(a.jsxs)("section",{className:"Hero",children:[Object(a.jsxs)("section",{className:"Hero__Left-Container",children:[Object(a.jsxs)(S,{children:["Go Green",Object(a.jsx)("br",{}),"Save Green"]}),Object(a.jsxs)(O,{children:[Object(a.jsx)(m,{children:"Fixed Rate pricing."}),Object(a.jsx)(m,{children:"Pay half of what you pay right now."})]}),Object(a.jsx)(b,{children:"Schedule Now"})]}),Object(a.jsx)("section",{className:"Hero__Right-Container",children:Object(a.jsx)(I,{})})]})}),B=(n(47),function(e){var t=e.children,n=e.onClick,r=e.id;return Object(a.jsx)("section",{onClick:n,className:"Card",id:r,children:Object(a.jsx)("p",{className:"Card__Text",children:t})})}),D=(n(48),n(49),function(e){var t=e.onClick,n=e.cards[e.card],r=n.title,i=n.subTitle,c=n.text;return Object(a.jsxs)("section",{className:"CardViewer",onClick:t,children:[Object(a.jsxs)("section",{className:"CardViewer__Container",onClick:function(e){return e.stopPropagation()},children:[Object(a.jsx)("h2",{className:"CardViewer__Container__Title",children:r}),Object(a.jsx)("h3",{className:"CardViewer__Container__Sub-Title",children:i}),Object(a.jsx)("p",{className:"CardViewer__Container__Text",children:c})]}),Object(a.jsx)("p",{className:"CardViewer__X",children:"X"})]})}),V=function(e){Object(u.a)(n,e);var t=Object(d.a)(n);function n(e){return Object(s.a)(this,n),t.call(this,e)}return Object(l.a)(n,[{key:"render",value:function(){var e=this,t=function(t){var n=t.currentTarget.id;return e.props.activateCard(n),e.props.modalToggle()};return Object(a.jsxs)("section",{className:"Cards",children:[Object(a.jsxs)("section",{className:"Cards__Container",children:[Object(a.jsx)(B,{onClick:t,id:"netMetering",children:"Net Metering"}),Object(a.jsx)(B,{onClick:t,id:"taxExemptions",children:"Tax Exemptions"}),Object(a.jsxs)(B,{onClick:t,id:"solarTaxCredit",children:["Solar ",Object(a.jsx)("br",{}),"Tax Credit"]}),Object(a.jsx)(B,{onClick:t,id:"financingForSolar",children:"Financing for Solar"})]}),this.props.card&&this.props.modal?Object(a.jsx)(C,{children:Object(a.jsx)(D,{onClick:this.props.modalToggle,cards:{netMetering:{title:"Net Metering",subTitle:"(Lower your ELECTRICITY BILL)",text:"Florida power companies are required to provide their customers maximum 1-to-1 net metering by the Florida Public Service Commission, also known as the FPSC. What does this signify? Florida Law Requires utilities to provide you with the full retail value for every unit of solar power you generate."},taxExemptions:{title:"Tax Exemptions",subTitle:"(You may qualify for $0 down)",text:"Florida Offered two tax exemptions for solar system: A sales Taxes exemption and a property tax abatement. Under the Solar and CHP Sales Tax Exemption, Solar Energy systems are exempt from Florida\u2019s Sales tax and use tax. The Property Tax Abatement for renewable energy property exempts the assessed value of A solar system from your Property tax."},solarTaxCredit:{title:"Solar Tax Credit",subTitle:"(Get a 26% FEDERAL TAX CREDIT)",text:"The solar tax credit is a federal Incentive that can be applied to Solar systems. The credit allows for A 26% deduction of the costs of Installing a solar panel system from Your taxes. The tax Credit is nonrefundable, meaning you can Only get a refund up to the amount You owe in federal taxes."},financingForSolar:{title:"Financing for Solar",subTitle:"",text:"A solar system is a significant upfront Investment. Even if you decide not to purchase your solar in cash, we suggest Four solar financing options that can help You go solar and save you money On your electric bill."}},card:this.props.card})}):null]})}}]),n}(r.Component),k=Object(p.b)((function(e){return{modal:e.modal.modalCardsIsOpen,card:e.card.card}}),(function(e){return{modalToggle:function(){return e({type:x.TOGGLE_MODAL_CARDS})},activateCard:function(t){return e({type:f.ACTIVATE_CARD,payload:t})}}}))(V),F=(n(50),function(){return Object(a.jsxs)("header",{className:"NavBar",children:[Object(a.jsx)("img",{className:"NavBar__Logo",src:"data:image/png;base64,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"}),Object(a.jsxs)("section",{className:"NavBar__Container",children:[Object(a.jsx)("h2",{className:"NavBar__Container__Link active",children:"Home"}),Object(a.jsx)("h2",{className:"NavBar__Container__Link",children:"FAQs"}),Object(a.jsx)("h2",{className:"NavBar__Container__Link",children:"Financing"})]})]})}),Q=function(e){Object(u.a)(n,e);var t=Object(d.a)(n);function n(){return Object(s.a)(this,n),t.apply(this,arguments)}return Object(l.a)(n,[{key:"render",value:function(){return Object(a.jsxs)("section",{children:[Object(a.jsx)(F,{}),Object(a.jsx)(L,{}),Object(a.jsx)(k,{})]})}}]),n}(r.Component);var R=function(){return Object(a.jsx)(o.c,{children:Object(a.jsx)(o.a,{path:"/Stocked-On-Solar",exact:!0,component:Q})})},G=function(e){e&&e instanceof Function&&n.e(3).then(n.bind(null,53)).then((function(t){var n=t.getCLS,a=t.getFID,r=t.getFCP,i=t.getLCP,c=t.getTTFB;n(e),a(e),r(e),i(e),c(e)}))},H=n(22),z=n(14),q=n(27),M=n.n(q),J=n(4),Y={modalCardsIsOpen:!1,modalQuestionnaireIsOpen:!1},Z=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:Y,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case x.TOGGLE_MODAL_CARDS:return Object(J.a)(Object(J.a)({},e),{},{modalCardsIsOpen:!e.modalCardsIsOpen});case x.TOGGLE_MODAL_QUESTIONNAIRE:return Object(J.a)(Object(J.a)({},e),{},{modalQuestionnaireIsOpen:!e.modalQuestionnaireIsOpen});default:return e}},P=A.ZIPCODE,U=A.EBILL,W=A.CONTACT,X=A.NAME,K=A.NO,$={ownsHome:!0,zipCode:"",eBill:"",contact:[],name:[]},ee=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:$,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case P:return Object(J.a)(Object(J.a)({},e),{},{zipCode:t.payload});case U:return Object(J.a)(Object(J.a)({},e),{},{eBill:t.payload});case W:return Object(J.a)(Object(J.a)({},e),{},{contact:t.payload});case X:return Object(J.a)(Object(J.a)({},e),{},{name:t.payload});case K:return Object(J.a)(Object(J.a)({},e),{},{ownsHome:!1});default:return e}},te={card:""},ne=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:te,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case f.ACTIVATE_CARD:return Object(J.a)(Object(J.a)({},e),{},{card:t.payload});default:return e}},ae=Object(z.c)({modal:Z,quoteForm:ee,card:ne}),re=[M.a],ie=Object(z.d)(ae,z.a.apply(void 0,re));c.a.render(Object(a.jsx)(p.a,{store:ie,children:Object(a.jsx)(H.a,{children:Object(a.jsx)(R,{})})}),document.getElementById("root")),G()}},[[52,1,2]]]);
//# sourceMappingURL=main.d588d711.chunk.js.map