(this["webpackJsonpsolar-city"]=this["webpackJsonpsolar-city"]||[]).push([[0],Array(34).concat([function(e,t,n){},function(e,t,n){},function(e,t,n){},function(e,t,n){},function(e,t,n){},function(e,t,n){},,,,,function(e,t,n){},function(e,t,n){},function(e,t,n){},function(e,t,n){},function(e,t,n){},function(e,t,n){},function(e,t,n){},function(e,t,n){},function(e,t,n){},function(e,t,n){},function(e,t,n){},function(e,t,n){},function(e,t,n){},function(e,t,n){},function(e,t,n){},function(e,t,n){},function(e,t,n){},function(e,t,n){},function(e,t,n){},function(e,t,n){},,function(e,t,n){"use strict";n.r(t);var i=n(0),r=n(1),o=n.n(r),c=n(16),a=n.n(c),s=(n(34),n(35),n(5)),l=n(11),u=n(12),d=n(14),j=n(13),O=(n(36),function(){return Object(i.jsx)("section",{className:"VLine"})}),b=(n(37),function(e){var t=e.children;return Object(i.jsxs)("section",{className:"Article",children:[Object(i.jsx)(O,{}),Object(i.jsx)("section",{className:"Article__Container",children:t})]})}),m=(n(38),function(e){var t=e.children,n=e.onClick,r=e.styles,o=e.form,c=e.type;return Object(i.jsx)("button",{form:o,type:c,className:"CTA ".concat(r),onClick:n,children:Object(i.jsx)("p",{className:"CTA__Text",children:t})})}),h=(n(39),function(e){var t=e.children;return Object(i.jsx)("p",{className:"Pointer",children:t})}),p=n(4),f=n(6),A=(n(44),Object(f.a)([function(e){return e.questionnaireStage}],(function(e){return e.questionnairePosition}))),x={MOVEFORWARDS:"MOVEFORWARDS",MOVEBACKWARDS:"MOVEBACKWARDS"},C=x.MOVEFORWARDS,g=x.MOVEBACKWARDS,E=function(){return{type:C}},y=function(){return{type:g}};n(45);function w(){return(w=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var i in n)Object.prototype.hasOwnProperty.call(n,i)&&(e[i]=n[i])}return e}).apply(this,arguments)}function N(e,t){if(null==e)return{};var n,i,r=function(e,t){if(null==e)return{};var n,i,r={},o=Object.keys(e);for(i=0;i<o.length;i++)n=o[i],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(i=0;i<o.length;i++)n=o[i],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var v=r.createElement("path",{fillRule:"evenodd",clipRule:"evenodd",d:"M0.0411072 25.0574L8.99999 12.5574L0.0411127 0.057373H80V25.0574H0.0411072Z",fill:"#FA9400"});function I(e,t){var n=e.title,i=e.titleId,o=N(e,["title","titleId"]);return r.createElement("svg",w({width:80,height:26,viewBox:"0 0 80 26",fill:"none",xmlns:"http://www.w3.org/2000/svg",ref:t,"aria-labelledby":i},o),n?r.createElement("title",{id:i},n):null,v)}var T=r.forwardRef(I),B=(n.p,{TOGGLETICKET:"TOGGLETICKET"}),S=B.TOGGLETICKET,k=function(e){Object(d.a)(n,e);var t=Object(j.a)(n);function n(e){return Object(l.a)(this,n),t.call(this,e)}return Object(u.a)(n,[{key:"render",value:function(){var e=this.props,t=e.children,n=e.styles;return Object(i.jsxs)("section",{className:"Ticket ".concat(n),onClick:this.props.toggleTicketAction,children:[Object(i.jsx)(T,{width:"52px"}),Object(i.jsx)("p",{className:"Ticket__Text",children:t})]})}}]),n}(r.Component),R=Object(p.b)(null,(function(e){return{toggleTicketAction:function(){return e({type:S})}}}))(k),L=Object(f.a)([function(e){return e.ticket}],(function(e){return e.ticketIsOpen})),F=Object(f.a)([function(e){return e.windowWidth}],(function(e){return e.windowWidth})),D=(n(46),function(e){var t=e.children;return Object(i.jsx)("h2",{className:"QuestionnaireTitle",children:t})}),W=(n(47),Object(p.b)(null,(function(e){return{moveF:function(){return e(E())}}}))((function(e){var t=e.moveF;return Object(i.jsxs)("section",{className:"QuestionnaireCardNoHome",children:[Object(i.jsx)(D,{children:"Sorry, but to use solar you need to own a home"}),Object(i.jsx)(m,{onClick:t,children:"Go Back"})]})}))),G=(n(48),n(49),o.a.forwardRef((function(e,t){var n=e.name,r=e.placeholder,o=e.onClick,c=e.styles,a=e.onChange,s=e.id,l=e.type,u=e.onKeyPress,d=e.maxlength,j=e.minlength,O=e.required;return Object(i.jsx)("input",{required:O,maxlength:d,minlength:j,onKeyDown:u,id:s,type:l,onChange:a,onClick:o,ref:t,name:n,placeholder:r,className:"InputBox ".concat(c)})}))),_={ZIPCODE:"ZIPCODE",EBILL:"EBILL",EMAIL:"EMAIL",NUMBER:"NUMBER",FIRSTNAME:"FIRSTNAME",LASTNAME:"LASTNAME",NO:"NO",YES:"YES"},H=_.ZIPCODE,M=_.EBILL,V=_.EMAIL,P=_.NUMBER,Q=_.FIRSTNAME,q=_.LASTNAME,Y=_.YES,U=Object(p.b)(null,(function(e){return{zipCode:function(t){return e({type:H,payload:t})},moveF:function(){return e(E())}}}))((function(e){var t=e.zipCode,n=e.moveF;return Object(i.jsxs)("section",{className:"QuestionnaireCardZipCode",children:[Object(i.jsx)(D,{children:"What's your Zip Code?"}),Object(i.jsx)(G,{maxlenght:5,required:!0,minlength:5,onChange:function(e){return t(e.target.value)},name:"zipCode",placeholder:"Zip Code",styles:"ZipCode"}),Object(i.jsx)(m,{styles:"ZipCodeCTA",onClick:n,children:"Next"})]})})),z=(n(50),function(e){var t=e.src,n=e.text,r=e.alt,o=e.onClick;return Object(i.jsxs)("section",{className:"GlyphAndText",onClick:o,children:[Object(i.jsx)("img",{src:t,alt:"".concat(r," option"),className:"GlyphAndText__Img"}),Object(i.jsx)("p",{className:"GlyphAndText__Text",children:n})]})}),K=(n(51),Object(p.b)(null,(function(e){return{ownsHome:function(){return e({type:Y})},moveF:function(){return e(E())},moveB:function(){return e(y())}}}))((function(e){var t=e.ownsHome,n=e.moveF,r=e.moveB;return Object(i.jsxs)("section",{className:"QuestionnaireCardHome",children:[Object(i.jsx)(D,{children:"Do you own your home?"}),Object(i.jsxs)("section",{className:"QuestionnaireCardHome__Options",children:[Object(i.jsx)(z,{src:"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAEIAAAA1CAYAAAD1cz2RAAAABHNCSVQICAgIfAhkiAAABMFJREFUaEPtmnnIpXMUxz9flKWsJSEkZBnbTMiMLDXKyJ4t/KUpNUmNZWRsGUbG0tiGKEmKGMRMlInsRLYQSoSyZE0RyvLVef2m7nvnPvf+nt+9z5173+b893bP9/x+5/ue5zxnecQ6mWBAU4kH2/cDxwJfAU8C10j6I8fHKUOE7aeBo9qc/gA4QdLnvciYEkTYvgxYXOHsr8BpkoKoShl7ImzPAl4G1uvip4ElwOWS/u2kN9ZE2N4GeBfYtlfop9+fkHTSVCTiBeDwTBJWq50l6cF2zNhGhO1FwJU1SQj1+ySdPSWIsH0k8EwBCQG5XtIlY0+E7e2B94GtCoj4Ddhd0jdjTYTt9YEXgUMKSAhI1BQrxz5Z2r4BWFBIwjJJ51VhxyZZ2o6qsWtR1IWg94ADJP091kTY3g74ENiiIBqistxH0pdjXVna3gB4DTiwgISueaHV3sg/GrZvAyqf7R7kLJV0YQ6BI02E7eOBFTmOdNB5E5gp6Z8c/MgSYXsnINroTXMcadP5BZjWqV4Yq2Rpe0PgDWC/AhICMkfSqjrYkYwI23cD59RxpEV3iaSFdbEjR4TtU4HldR1J+q8Ch0qK+UMtGSkibO+S+ohNannxv/JPwF6Svi/A9h7e2r44WE4FzWOSIhsPXGxvDITtaYXGZ0t6rhDbnQjbEaIRqq2yWNIVpQdW4Ww/AJxZaHeRpKsKsROwykfD9kXAjRXGowM8XdJ3/Ry+Gmt7LnBPoa3ngYiG2nmh9byORNg+OA1Eo7ytkh+AUyS9VOjABMz2nsA7wEYFduIfEXnh5wLsJMgaRNiOgcdHQAxGe0lMhGNkFouU2v+RlBdiyLJrr4M6/B5nxxsi+pC+ZRIRtuPvSDhH1LT8LHCGpB/r4Gw/HDuHOpgW3RjNX1uIXQPWTsR84OZC49+mRcorOXjb84A7c3Q76KySNKcQ2xHWTsTHwB59HrBQUixTKsX2DODtwnNirzm9bvT1OqudiE+A3XqBMn6PSVLsD9ZIYrajiYqJ0c4ZdjqpREf5eiG2EtZOxKXAoJ67mBSf3H5p2zE8Pa7QkQWSbirEdoV1ems8FDXCAA+7QNJE3rF9PrC00PZTkmLl34hU1RExEYrJ0KAkouD2PpYyXwN7S4o5QyPSrbLcP02Hdmzk5HyjfwGzJL2VD6mv2bX7tL0ZEI/K0fVNDwwxX9KtA7NWYSirDU99x3VAt5K7ibuukHRiE4bbbWYRkRLdTOARIHaPw5Av0j4i9pWNSzYRiYwt0/QottFNSuSF2ExFHzIUqUVEIiMw8c1S9P+xlG1C5km6qwnDVTZrE7HakO3DgEeBrQd84eWSBlnHZF2vmIgUHdGqRwdZ9/Odqst9Cuyb+21kloeZSn0RkciIr9muBqI878fen8AMSdH4DV36ufiky9qenRJpyZcsYWuupHuHzkA6cGBEpOiI9f3jwEE1HVoreaH1jgMlIpERRVfMI7K20GksGK/KrG+maxKcrT5wIlreKjFBivJ88y63+T0lx8+yb9yQYmNEpOjYITVu0yvuH99IR7W61qVRIlqiYxlwbpu3t0iK+cRIyFCISNFxDBCOx+MQw9c7RoKBJt4ao+RY3bsMLSLqXmzY+uuISIz/BwusUUWeJSXFAAAAAElFTkSuQmCC",text:"yes",alt:"Yes",onClick:function(){return t(),n()}}),Object(i.jsx)(z,{src:"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADAAAAAxCAYAAACcXioiAAAABHNCSVQICAgIfAhkiAAAAzJJREFUaEPVmvF51DAMxfUmgA1oJ4BOQJmAbkA7AWUCYALKBLQTUCaADWgn4JgAmEB8z2ffl3PsxLHlXuo/75Lo/WRZlpVAEkNVT0XkjYicichTf8mtiNwCuEndY/GbqgabtMvxlzZF5AbAj5QNxD+q6icRuZwQdCcirwDw4SZDVemk7yLyYuKBVwDexf/vAajqFxE5L1BlBlEoPki6BnAx1LcDWCA+3N8MsVB8EsIBqOoHEXlf4Pn4kmqISvHB/mcALsyhqkci8qtCfPVMNIoPdo8BbAhwJSJvGwB4a/FMGImnTWamcwLQ+5yF1jELYSieWjcAjgmgrcoH92chjMU7k+AwBsiGk6p+9Rujmb8CAL323Oyp2wft5euKFF0i5zeAI85AbQqdM+IgOomnbZdKCcBtfCMiT+YUVfzP51okiNj0P5YdLo36jYzlA8uIxzIuAFy7hRwUq+pjgfgIgGG/zURDlxttaj1n0W1eQwOpcppTw7p8bWMkfjQDg3BaG0RSfBbAL+y1QGTFTwKsBGJS/CzAgSFmxRcBHAiiSHwxwANDFItfBOAh2OJ43TG/3ovI6ZKOx2gfmBKnqjyHsu3SYywWv2gGOpcaVeKLAVSVDSc2nkKXznIGqsUXARxKPNubuXbiZC0UFXcH8fwgXHdlc27Ks4v4gJ6Py/oTADz2JkcSYEXiKZpNZDaTkxCpcrpn2OyOgrE7Z7JcFiI+0PQWz4U58mRhik5CDI+UaxYfJmwEEQ71zO9sMfbI8wybFs/H0UYILmx2PLZnYlXlJsXXStbDWnzQdwfgxAEUxl8N2JR4i3B1ewQBelSYvcXTod8AnBHgj3HsP4R4FxG9utPZnVNVufCe1cRj6p4eAJO1i9/h+b7XpA8bAKzWwGzh5TMeF7AFxG4NWPREi8SHMPAz8bMxlLZZyHul5SXHIvEDiBbH3QNwb/UDQO20VolvhNgrCONaaElsNomvhBil6FQ1WgJhIj6C4PvqqeyU3F9S5wG+EuILhFSLnQfwy5Kz6tIF6hc2IV4m7uUnPrQ7+kJm6kjJypQFHtcHNyAWUNmj3VLBuev9pw90Iu3SHu1mP+35DyWww0EwKG5dAAAAAElFTkSuQmCC",text:"no",alt:"No",onClick:r})]})]})}))),J=(n(52),function(e){return e.quoteForm}),Z=(Object(f.a)([J],(function(e){return e.ownsHome})),Object(f.a)([J],(function(e){return e.zipCode})),Object(f.a)([J],(function(e){return e.eBill}))),X=(Object(f.a)([J],(function(e){return e.firstName})),Object(f.a)([J],(function(e){return e.lastName})),Object(f.a)([J],(function(e){return e.number})),Object(f.a)([J],(function(e){return e.email})),Object(f.b)({billCounter:Z})),$=Object(p.b)(X,(function(e){return{moveF:function(){return e(E())},billCounterAction:function(t){return e({type:M,payload:t})}}}))((function(e){var t=e.billCounter,n=e.billCounterAction,r=e.moveF;return Object(i.jsxs)("section",{className:"QuestionnaireCardBill",children:[Object(i.jsx)(D,{children:"What is your average Electrical Bill?"}),Object(i.jsx)("p",{className:"QuestionnaireCardBill__Counter",children:"US$".concat(t)}),Object(i.jsx)("input",{onChange:function(e){return n(e.target.value)},id:"eBillRange",className:"QuestionnaireCardBill__Input",defaultValue:100,type:"range",min:"0",max:"1500",list:"range"}),Object(i.jsxs)("datalist",{id:"range",children:[Object(i.jsx)("option",{value:"0",label:"$0"}),Object(i.jsx)("option",{value:"1500",label:"$1500"})]}),Object(i.jsx)(m,{onClick:r,children:"Next"})]})})),ee=(n(53),Object(p.b)(null,(function(e){return{setNumber:function(t){return e({type:P,payload:t})},setEmail:function(t){return e({type:V,payload:t})},moveF:function(){return e(E())}}}))((function(e){var t=e.setNumber,n=e.setEmail,r=e.moveF;return Object(i.jsxs)("section",{className:"QuestionnaireCardContact",children:[Object(i.jsx)(D,{children:"How do you want the information sent?"}),Object(i.jsx)(G,{onChange:function(e){return t(e.target.value)},placeholder:"Phone #",name:"phoneNumber"}),Object(i.jsx)(G,{onChange:function(e){return n(e.target.value)},placeholder:"Email @",name:"email"}),Object(i.jsx)(m,{onClick:r,children:"Next"})]})}))),te=(n(54),Object(p.b)(null,(function(e){return{moveF:function(){return e(E())},setFirstName:function(t){return e({type:Q,payload:t})},setLastName:function(t){return e({type:q,payload:t})}}}))((function(e){var t=e.setFirstName,n=e.setLastName,r=e.moveF;return Object(i.jsxs)("section",{className:"QuestionnaireCardName",children:[Object(i.jsx)(D,{children:"Who is this quote for?"}),Object(i.jsx)(G,{placeholder:"First Name",name:"firstName",onChange:function(e){return t(e.target.value)}}),Object(i.jsx)(G,{placeholder:"Last Name",name:"lastName",onChange:function(e){return n(e.target.value)}}),Object(i.jsx)(m,{onClick:r,children:"Next"})]})}))),ne=(n(55),function(){return Object(i.jsx)("section",{className:"QuestionnaireFinish",children:Object(i.jsxs)(D,{children:["Thank you for completing the questionnaire.",Object(i.jsx)("br",{})," We will contact you shortly"]})})}),ie=Object(f.b)({stagePosition:A,ticketStatus:L,windowWidth:F}),re=Object(p.b)(ie,(function(e){return{moveBackwardsAction:function(){return e(y())},moveForwardsAction:function(){return e(E())}}}))((function(e){var t=e.stagePosition,n=e.mobileOnly,r=e.ticketStatus,o=e.windowWidth,c=[W,K,U,$,te,ee,ne][t];return Object(i.jsxs)("section",{className:"Questionnaire ".concat(n?"mobileOnly":""),children:[r&&o<768?Object(i.jsx)(R,{children:"Exit"}):null,Object(i.jsx)("section",{className:"Questionnaire__Container",children:Object(i.jsx)(c,{})})]})})),oe=(n(56),function(e){var t=e.children;return Object(i.jsx)("p",{className:"Title",children:t})}),ce=(n(57),{WINDOWWIDTH:"WINDOWWIDTH"}),ae=ce.WINDOWWIDTH,se={TOGGLE_MODAL_CARDS:"TOGGLE_MODAL_CARDS",TOGGLE_MODAL_QUESTIONNAIRE:"TOGGLE_MODAL_QUESTIONNAIRE",TOGGLE_MODAL_BOOKER:"TOGGLE_MODAL_BOOKER"},le=function(){return{type:se.TOGGLE_MODAL_BOOKER}},ue=(n(58),Object(p.b)(null,(function(e){return{toggleModal:function(){return e(le())}}}))((function(e){var t=e.toggleModal;return Object(i.jsxs)("section",{className:"Booker",onClick:t,children:[Object(i.jsx)("p",{className:"Booker__X",children:"X"}),Object(i.jsxs)("form",{id:"booker",action:"https://gmail.us8.list-manage.com/subscribe/post",method:"POST",className:"Booker__Form",onClick:function(e){return e.stopPropagation()},children:[Object(i.jsx)("input",{type:"hidden",name:"u",value:"74e6de5699f8e9e2b792b749c"}),Object(i.jsx)("input",{type:"hidden",name:"id",value:"9225535055"}),Object(i.jsxs)("section",{className:"Booker__Form__Container",children:[Object(i.jsx)("p",{className:"Booker__Form__Container__Label",children:"First Name: "}),Object(i.jsx)(G,{placeholder:"First Name",name:"MERGE1"}),Object(i.jsx)("br",{}),Object(i.jsx)("p",{className:"Booker__Form__Container__Label",children:"Last Nanme: "}),Object(i.jsx)(G,{placeholder:"Last Name",name:"MERGE2"}),Object(i.jsx)("br",{}),Object(i.jsx)("p",{className:"Booker__Form__Container__Label",children:"Email: "}),Object(i.jsx)(G,{placeholder:"Email",name:"MERGE0",type:"email"}),Object(i.jsx)("br",{}),Object(i.jsx)("p",{className:"Booker__Form__Container__Label",children:"Phone Number: "}),Object(i.jsx)(G,{placeholder:"Phone #",name:"MERGE4",type:"number"}),Object(i.jsx)("br",{}),Object(i.jsx)("p",{className:"Booker__Form__Container__Label",children:"Pick a date for your appointment: "}),Object(i.jsx)("input",{className:"Booker__Form__Container__DatePicker",name:"MERGE3",id:"booker",type:"datetime-local"}),Object(i.jsx)(m,{form:"booker",type:"submit",onClick:null,children:"Submit"})]})]})]})}))),de=document.getElementById("modal"),je=function(e){Object(d.a)(n,e);var t=Object(j.a)(n);function n(e){var i;return Object(l.a)(this,n),(i=t.call(this,e)).element=document.createElement("div"),i}return Object(u.a)(n,[{key:"componentDidMount",value:function(){de.appendChild(this.element)}},{key:"componentWillUnmount",value:function(){de.removeChild(this.element)}},{key:"render",value:function(){return Object(c.createPortal)(this.props.children,this.element)}}]),n}(r.Component),Oe=function(e){Object(d.a)(n,e);var t=Object(j.a)(n);function n(e){var i;return Object(l.a)(this,n),(i=t.call(this,e)).handleResize=function(){return i.props.windowWidthTrigger(window.innerWidth)},i}return Object(u.a)(n,[{key:"componentDidMount",value:function(){this.props.windowWidthTrigger(window.innerWidth),window.addEventListener("resize",this.handleResize)}},{key:"componentWillUnmount",value:function(){window.removeEventListener("resize",this.handleResize)}},{key:"render",value:function(){return Object(i.jsxs)("section",{className:"Hero",children:[Object(i.jsxs)("section",{className:"Hero__Left-Container",children:[Object(i.jsxs)(oe,{children:["Go Green",Object(i.jsx)("br",{}),"Save Green"]}),this.props.windowWidth<768&&this.props.ticketIsOpen?Object(i.jsx)(re,{mobileOnly:!0}):null,this.props.windowWidth<768&&!this.props.ticketIsOpen?Object(i.jsxs)(R,{styles:"Closed",children:["Do you",Object(i.jsx)("br",{}),"Qualify?"]}):null,Object(i.jsxs)(b,{children:[Object(i.jsx)(h,{children:"Fixed Rate pricing."}),Object(i.jsx)(h,{children:"Pay half of what you pay right now."})]}),Object(i.jsx)(m,{onClick:this.props.toggleBooker,children:"Schedule Now"})]}),Object(i.jsx)("section",{className:"Hero__Right-Container",children:this.props.windowWidth>=768?Object(i.jsx)(re,{}):null}),this.props.bookerIsOpen?Object(i.jsx)(je,{children:Object(i.jsx)(ue,{})}):null]})}}]),n}(r.Component),be=Object(p.b)((function(e){return{ticketIsOpen:e.ticket.ticketIsOpen,windowWidth:e.windowWidth.windowWidth,bookerIsOpen:e.modal.modalBookerIsOpen}}),(function(e){return{windowWidthTrigger:function(t){return e({type:ae,payload:t})},toggleBooker:function(){return e(le())}}}))(Oe),me=(n(59),function(e){var t=e.children,n=e.onClick,r=e.id;return Object(i.jsx)("section",{onClick:n,className:"Card",id:r,children:Object(i.jsx)("p",{className:"Card__Text",children:t})})}),he=(n(60),{ACTIVATE_CARD:"ACTIVATE_CARD"}),pe=(n(61),function(e){var t=e.onClick,n=e.cards[e.card],r=n.title,o=n.subTitle,c=n.text;return Object(i.jsxs)("section",{className:"CardViewer",onClick:t,children:[Object(i.jsxs)("section",{className:"CardViewer__Container",onClick:function(e){return e.stopPropagation()},children:[Object(i.jsx)("h2",{className:"CardViewer__Container__Title",children:r}),Object(i.jsx)("h3",{className:"CardViewer__Container__Sub-Title",children:o}),Object(i.jsx)("p",{className:"CardViewer__Container__Text",children:c})]}),Object(i.jsx)("p",{className:"CardViewer__X",children:"X"})]})}),fe=function(e){Object(d.a)(n,e);var t=Object(j.a)(n);function n(e){return Object(l.a)(this,n),t.call(this,e)}return Object(u.a)(n,[{key:"render",value:function(){var e=this,t=function(t){var n=t.currentTarget.id;return e.props.activateCard(n),e.props.modalToggle()};return Object(i.jsxs)("section",{className:"Cards",children:[Object(i.jsxs)("section",{className:"Cards__Container",children:[Object(i.jsx)(me,{onClick:t,id:"netMetering",children:"Net Metering"}),Object(i.jsx)(me,{onClick:t,id:"taxExemptions",children:"Tax Exemptions"}),Object(i.jsx)(me,{onClick:t,id:"solarTaxCredit",children:"Solar Tax Credit"}),Object(i.jsx)(me,{onClick:t,id:"financingForSolar",children:"Financing for Solar"})]}),this.props.card&&this.props.modal?Object(i.jsx)(je,{children:Object(i.jsx)(pe,{onClick:this.props.modalToggle,cards:{netMetering:{title:"Net Metering",subTitle:"(Lower your ELECTRICITY BILL)",text:"Florida power companies are required to provide their customers maximum 1-to-1 net metering by the Florida Public Service Commission, also known as the FPSC. What does this signify? Florida Law Requires utilities to provide you with the full retail value for every unit of solar power you generate."},taxExemptions:{title:"Tax Exemptions",subTitle:"(You may qualify for $0 down)",text:"Florida Offered two tax exemptions for solar system: A sales Taxes exemption and a property tax abatement. Under the Solar and CHP Sales Tax Exemption, Solar Energy systems are exempt from Florida\u2019s Sales tax and use tax. The Property Tax Abatement for renewable energy property exempts the assessed value of A solar system from your Property tax."},solarTaxCredit:{title:"Solar Tax Credit",subTitle:"(Get a 26% FEDERAL TAX CREDIT)",text:"The solar tax credit is a federal Incentive that can be applied to Solar systems. The credit allows for A 26% deduction of the costs of Installing a solar panel system from Your taxes. The tax Credit is nonrefundable, meaning you can Only get a refund up to the amount You owe in federal taxes."},financingForSolar:{title:"Financing for Solar",subTitle:"",text:"A solar system is a significant upfront Investment. Even if you decide not to purchase your solar in cash, we suggest Four solar financing options that can help You go solar and save you money On your electric bill."}},card:this.props.card})}):null]})}}]),n}(r.Component),Ae=Object(p.b)((function(e){return{modal:e.modal.modalCardsIsOpen,card:e.card.card}}),(function(e){return{modalToggle:function(){return e({type:se.TOGGLE_MODAL_CARDS})},activateCard:function(t){return e({type:he.ACTIVATE_CARD,payload:t})}}}))(fe),xe=(n(62),function(){return Object(i.jsxs)("header",{className:"NavBar",children:[Object(i.jsx)("img",{className:"NavBar__Logo",src:"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACcAAAApCAYAAAC2qTBFAAAABHNCSVQICAgIfAhkiAAABlJJREFUWEfNmGeoXVUQhb+xx957x96xYQMVRMWGCqISW0QsWKI/AjYQUWzREAUVRdT4R1EDNhBURIgtduw1id1YEqPGHrd8j5lwXgi+x31XyIbDuefcXdasmVl79gn61FprqwFHAO8Am+b1DDA1Iub1skwMZ1BrbSVgD+Bz4HvgD+AvYOcE9CewL7AN8BXQEtxSwETgshzjci0i/H/INiS41toSwJ7AOcB2wEfAt8D7wH7AAcBiwD+ADC2el8/+fg+4HXgDWC7HzxgOwOGA2wi4C9ghF5sLLA/8CKyZLC0JyN5vCcB5ZUfQswAZ/AJYHbhOsBHx+1DU/Se41pqWXwmcCKyS4BwjQy7s9TcguAGXJYPefe9dYDbHeT2dxj4F/ALsnnMbmzO7gAeBa62NSst/AlYFzgNOzXcFxvHlMl3u71q4APlsTHrJkEwvnX3tY2i8lO+2Bn42LiPi+YWCa63poqPSVWbcusAFeXcxQdgqvvw9A9DtutjFjSn7CcD/Nu+A1wvFehkhGb77DrgTuCkijOf5VJPuM7CvB2TjZuBYYMdOgNcYwVXTLfa/BdglXeSz7vQSkM8FqjxV9zLUvgJ8GJgQEZ9UHAhuBeBc4KK0+nVge2DFjuXFnPHl73KnLLwG3ADsAxyfMeT8FW8mS8WkwGS52NOAak8A4yLCDB+wSHCbpBY5cVldlpdLS5sqvmq8yWFseTe+ZEOjvPuuWBJEd2710uy1ya59HwUunM9cCqzpfRxgDNSiJQWVmZWJg0IiGShXVvbaV8lRrAVQoVBgZwPLAIq7htnfvgr2tRGhJBGttQOB+zr65ER2LlDlDu/dpCgmdE/pWrHrHGaj1xn5v6zK6ILJJag5wFvAJGByRAyEgeDuBkYnHSURWmZcVMyUxS7u5DJVrbsVFXiBfwM8C+wNrJxMuv9WcpRxArstCZoeEb/Od01r7W1gq2SqwKlzUvt1JobgXOyHlJauqyoGHVvuK3acQ7epc45VJtZPBsXgvCUjD0TEux2jB5i7FdgwY0PLHOwg6dYVa+QAJ3cr8lk9qzjTrVqvkG7Q2S0Ea59yuzHofO40Zrzzy97H+TwduBF4vPZdwbkTyJzuFZyy4sTGi++drJsclX32qezzt8Dta6ALQmPWScNKgIvdSi6fja+Kc4E+llimlZSo8gqwk2utC8mCJdCCWuVzBbEGbZY7izjcFT5IMT0cOCSZs4LZNpmq7HTtAt3d9iy5VI/7C5zIlRGt9t2yafUJwEHp6oqtqcC9wKHZ58zcptzqjLHnsoKxnNIQXf5i1nvObxNg7RxdNehKziTd6gR7AfsDOyVI4879dXICvTo1SYACKFlwAVl8Ieu7kxJQZbNuM/uMURfWhcam7pNxn1UF41FC7C/L3qdUzKlzAqy9sOJJEIJRnzSiYsPSxvj0ndnmhD6bWHpAAI5TZHW1720WnM5pzPm/2fthVtiW9o57JEupUYIzc9y2xqU1VQYtqG1V4ZYYy6KS82AapRutZGRSSXB/NH7UzKMzuQx2ty2Zlr3ZEfFZYtCQubU7lAgLxq3r0ix/ukVk7RRWsS6sCwRZm/5DwNiUAsGdBqyV25DZbmgoPRYUJoTVhsWmhebMoUp1mRPcGODidJ8W2GTFjVjqdYcV665ZGpWcTMkE0BUydUXGrlvWK8mWZde0dOeAsEeEpdaQrbJVCbEyWS8B7AYozlrfPRusnS46BfC38WZ2er8DOBnYMpnRfUqETM2KiNrahgQ1f/vq9myt6VKZNAHmRIQpP6i11g4DLkk3mRCybv13cG7yxpWAPKlNXNgcw0U36Awx3EEZwKa+bprnobm1pkHX5LuXgS8jQrf33HoCt7DVWmsK7OWZNGqb5wGLhZ5bP8HJpMdI3a5ujo8Idavn1k9wFgy61ROccfhkL0nQtaSf4NyirspPF2MiQo0bUesnuEqILYCzIsKD84haP8Ep3rrVouG8iLB4HFHrJ7hizgLz/Ij4dETIOmfKkc7j2ddzxfisTsYuasxZMlnB6tazI8KqY0Stn26VOUv9jYHTI8I6bUStn+D8SuX3ErNVKRl0zOsFZT/BWe9NyIJgdES82Qug/0uEPcF57vTz7DER8eqiBE5QfpgW5JER4SltRK0vbs2Pj34QMub89GBFfE9EeJ7ouf0Lwycof/iqlhAAAAAASUVORK5CYII=",alt:""}),Object(i.jsx)("section",{className:"NavBar__Container",children:Object(i.jsx)("h2",{className:"NavBar__Container__Link active",children:"Home"})})]})}),Ce=(n(63),function(e){Object(d.a)(n,e);var t=Object(j.a)(n);function n(){return Object(l.a)(this,n),t.apply(this,arguments)}return Object(u.a)(n,[{key:"render",value:function(){return Object(i.jsxs)("section",{className:"Homepage",children:[Object(i.jsx)(xe,{}),Object(i.jsx)(be,{}),Object(i.jsx)(Ae,{})]})}}]),n}(r.Component));var ge=function(){return Object(i.jsx)(s.c,{children:Object(i.jsx)(s.a,{path:"/Stocked-On-Solar",exact:!0,component:Ce})})},Ee=function(e){e&&e instanceof Function&&n.e(3).then(n.bind(null,66)).then((function(t){var n=t.getCLS,i=t.getFID,r=t.getFCP,o=t.getLCP,c=t.getTTFB;n(e),i(e),r(e),o(e),c(e)}))},ye=n(23),we=n(15),Ne=n(28),ve=n.n(Ne),Ie=n(2),Te={modalCardsIsOpen:!1,modalQuestionnaireIsOpen:!1,modalBookerIsOpen:!1},Be=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:Te,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case se.TOGGLE_MODAL_CARDS:return Object(Ie.a)(Object(Ie.a)({},e),{},{modalCardsIsOpen:!e.modalCardsIsOpen});case se.TOGGLE_MODAL_QUESTIONNAIRE:return Object(Ie.a)(Object(Ie.a)({},e),{},{modalQuestionnaireIsOpen:!e.modalQuestionnaireIsOpen});case se.TOGGLE_MODAL_BOOKER:return Object(Ie.a)(Object(Ie.a)({},e),{},{modalBookerIsOpen:!e.modalBookerIsOpen});default:return e}},Se=_.ZIPCODE,ke=_.EBILL,Re=_.NUMBER,Le=_.EMAIL,Fe=_.FIRSTNAME,De=_.LASTNAME,We=_.NO,Ge=_.YES,_e={ownsHome:void 0,zipCode:"",eBill:0,number:"",email:"",firstName:"",lastName:""},He=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:_e,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case Se:return Object(Ie.a)(Object(Ie.a)({},e),{},{zipCode:t.payload});case ke:return Object(Ie.a)(Object(Ie.a)({},e),{},{eBill:t.payload});case Re:return Object(Ie.a)(Object(Ie.a)({},e),{},{number:t.payload});case Le:return Object(Ie.a)(Object(Ie.a)({},e),{},{email:t.payload});case Fe:return Object(Ie.a)(Object(Ie.a)({},e),{},{firstName:t.payload});case De:return Object(Ie.a)(Object(Ie.a)({},e),{},{lastName:t.payload});case We:return Object(Ie.a)(Object(Ie.a)({},e),{},{ownsHome:!1});case Ge:return Object(Ie.a)(Object(Ie.a)({},e),{},{ownsHome:!0});default:return e}},Me={card:""},Ve=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:Me,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case he.ACTIVATE_CARD:return Object(Ie.a)(Object(Ie.a)({},e),{},{card:t.payload});default:return e}},Pe=B.TOGGLETICKET,Qe={ticketIsOpen:!1},qe=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:Qe,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case Pe:return Object(Ie.a)(Object(Ie.a)({},e),{},{ticketIsOpen:!e.ticketIsOpen});default:return e}},Ye=ce.WINDOWWIDTH,Ue={windowWidth:0},ze=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:Ue,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case Ye:return Object(Ie.a)(Object(Ie.a)({},e),{},{windowWidth:t.payload});default:return e}},Ke=x.MOVEBACKWARDS,Je=x.MOVEFORWARDS,Ze={questionnairePosition:1},Xe=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:Ze,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case Ke:return 0===e.questionnairePosition?e:Object(Ie.a)(Object(Ie.a)({},e),{},{questionnairePosition:e.questionnairePosition-1});case Je:return e.questionnairePosition>=6?e:Object(Ie.a)(Object(Ie.a)({},e),{},{questionnairePosition:e.questionnairePosition+1});default:return e}},$e=Object(we.c)({modal:Be,quoteForm:He,card:Ve,ticket:qe,windowWidth:ze,questionnaireStage:Xe}),et=[ve.a],tt=Object(we.d)($e,we.a.apply(void 0,et));a.a.render(Object(i.jsx)(p.a,{store:tt,children:Object(i.jsx)(ye.a,{children:Object(i.jsx)(ge,{})})}),document.getElementById("root")),Ee()}]),[[65,1,2]]]);
//# sourceMappingURL=main.17374dc9.chunk.js.map