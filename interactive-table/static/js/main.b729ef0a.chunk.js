(this["webpackJsonpinteractive-table"]=this["webpackJsonpinteractive-table"]||[]).push([[0],{18:function(e,a,t){e.exports=t(39)},24:function(e,a,t){},25:function(e,a,t){},26:function(e,a,t){},27:function(e,a,t){},28:function(e,a,t){},31:function(e,a,t){},37:function(e,a,t){},38:function(e,a,t){},39:function(e,a,t){"use strict";t.r(a);var n=t(0),l=t.n(n),r=t(13),s=t.n(r),i=t(9),c=t.n(i),o=t(14),m=t(16),d=t(3),u=t(10),_=t(4),h=t(5),p=t(7),N=t(6);t(24),t(25);var f=function(){return l.a.createElement("div",{className:"loader"},l.a.createElement("div",{className:"loader__spinner"},l.a.createElement("div",null),l.a.createElement("div",null),l.a.createElement("div",null),l.a.createElement("div",null),l.a.createElement("div",null),l.a.createElement("div",null),l.a.createElement("div",null),l.a.createElement("div",null),l.a.createElement("div",null),l.a.createElement("div",null),l.a.createElement("div",null),l.a.createElement("div",null)),l.a.createElement("p",null,"\u041e\u0436\u0438\u0434\u0430\u0435\u043c \u0437\u0430\u0433\u0440\u0443\u0437\u043a\u0443 \u0434\u0430\u043d\u043d\u044b\u0445..."))};t(26);var E=function(e){return l.a.createElement("table",{className:"main__table table"},l.a.createElement("thead",{className:"table__thead"},l.a.createElement("tr",{className:"table__tr"},l.a.createElement("th",{className:"table__th",onClick:e.onSort.bind(null,"id"),title:"\u041d\u0430\u0436\u043c\u0438\u0442\u0435 \u0434\u043b\u044f \u0441\u043e\u0440\u0442\u0438\u0440\u043e\u0432\u043a\u0438"},"ID"," ","id"===e.sortField?l.a.createElement("span",{className:e.sort}):null),l.a.createElement("th",{className:"table__th",onClick:e.onSort.bind(null,"firstName"),title:"\u041d\u0430\u0436\u043c\u0438\u0442\u0435 \u0434\u043b\u044f \u0441\u043e\u0440\u0442\u0438\u0440\u043e\u0432\u043a\u0438"},"First Name","firstName"===e.sortField?l.a.createElement("span",{className:e.sort}):null),l.a.createElement("th",{className:"table__th",onClick:e.onSort.bind(null,"lastName"),title:"\u041d\u0430\u0436\u043c\u0438\u0442\u0435 \u0434\u043b\u044f \u0441\u043e\u0440\u0442\u0438\u0440\u043e\u0432\u043a\u0438"},"Last Name","lastName"===e.sortField?l.a.createElement("span",{className:e.sort}):null),l.a.createElement("th",{className:"table__th",onClick:e.onSort.bind(null,"email"),title:"\u041d\u0430\u0436\u043c\u0438\u0442\u0435 \u0434\u043b\u044f \u0441\u043e\u0440\u0442\u0438\u0440\u043e\u0432\u043a\u0438"},"E-mail","email"===e.sortField?l.a.createElement("span",{className:e.sort}):null),l.a.createElement("th",{className:"table__th",onClick:e.onSort.bind(null,"phone"),title:"\u041d\u0430\u0436\u043c\u0438\u0442\u0435 \u0434\u043b\u044f \u0441\u043e\u0440\u0442\u0438\u0440\u043e\u0432\u043a\u0438"},"Phone","phone"===e.sortField?l.a.createElement("span",{className:e.sort}):null))),l.a.createElement("tbody",{className:"table__tbody"},e.data.map((function(a){return l.a.createElement("tr",{className:"table__tr",key:a.id+a.phone,onClick:e.onClickRow.bind(null,a),title:"\u041d\u0430\u0436\u043c\u0438\u0442\u0435 \u0434\u043b\u044f \u043f\u043e\u043b\u0443\u0447\u0435\u043d\u0438\u044f \u043f\u043e\u0434\u0440\u043e\u0431\u043d\u043e\u0439 \u0438\u043d\u0444\u043e\u0440\u043c\u0430\u0446\u0438\u0438"},l.a.createElement("td",{className:"table__td"},a.id),l.a.createElement("td",{className:"table__td"},a.firstName),l.a.createElement("td",{className:"table__td"},a.lastName),l.a.createElement("td",{className:"table__td"},a.email),l.a.createElement("td",{className:"table__td"},a.phone))}))))},b=(t(27),function(e){Object(p.a)(t,e);var a=Object(N.a)(t);function t(){return Object(_.a)(this,t),a.apply(this,arguments)}return Object(h.a)(t,[{key:"render",value:function(){var e=this.props,a=e.submitHandler,t=e.onChangeInput,n=e.newUser,r=e.onClickClose;return l.a.createElement("form",{className:"header__add-form add-form",onSubmit:a},l.a.createElement("button",{className:"header__button-close",onClick:r,title:"\u0417\u0430\u043a\u0440\u044b\u0442\u044c"},"X"),l.a.createElement("h2",{className:"add-form__title"},"\u0414\u043e\u0431\u0430\u0432\u0438\u0442\u044c \u043d\u043e\u0432\u043e\u0433\u043e \u043f\u043e\u043b\u044c\u0437\u043e\u0432\u0430\u0442\u0435\u043b\u044f \u0432 \u0442\u0430\u0431\u043b\u0438\u0446\u0443:"),l.a.createElement("div",{className:"add-form__row"},l.a.createElement("label",{className:"add-form__label",htmlFor:"user-id"},"id:"),l.a.createElement("input",{className:"add-form__input",id:"id",type:"number",name:"user-id",placeholder:"id",onChange:t,value:n.id,required:!0})),l.a.createElement("div",{className:"add-form__row"},l.a.createElement("label",{className:"add-form__label",htmlFor:"firstName"},"firstName:"),l.a.createElement("input",{className:"add-form__input",id:"firstName",type:"text",name:"firstName",placeholder:"firstName",onChange:t,value:n.firstName,required:!0})),l.a.createElement("div",{className:"add-form__row"},l.a.createElement("label",{className:"add-form__label",htmlFor:"lastName"},"lastName:"),l.a.createElement("input",{className:"add-form__input",id:"lastName",type:"text",name:"lastName",placeholder:"lastName",onChange:t,value:n.lastName,required:!0})),l.a.createElement("div",{className:"add-form__row"},l.a.createElement("label",{className:"add-form__label",htmlFor:"email"},"email:"),l.a.createElement("input",{className:"add-form__input",id:"email",type:"email",name:"email",placeholder:"email",onChange:t,value:n.email,required:!0})),l.a.createElement("div",{className:"add-form__row"},l.a.createElement("label",{className:"add-form__label",htmlFor:"phone"},"phone:"),l.a.createElement("input",{className:"add-form__input",id:"phone",type:"number",name:"phone",placeholder:"phone",onChange:t,value:n.phone,required:!0})),l.a.createElement("button",{className:"add-form__button"},"\u0414\u043e\u0431\u0430\u0432\u0438\u0442\u044c \u0432 \u0442\u0430\u0431\u043b\u0438\u0446\u0443"))}}]),t}(n.Component));t(28);var v=function(e){var a=e.user,t=e.onClickClose;return l.a.createElement("div",{className:"main__info info"},l.a.createElement("h3",{className:"info__title"},"\u041f\u043e\u0434\u0440\u043e\u0431\u043d\u0430\u044f \u0438\u043d\u0444\u043e\u0440\u043c\u0430\u0446\u0438\u044f"),l.a.createElement("button",{className:"info__button",onClick:t,title:"\u0417\u0430\u043a\u0440\u044b\u0442\u044c"},"X"),l.a.createElement("div",{className:"info__row"},l.a.createElement("p",{className:"info__p"},"\u0412\u044b\u0431\u0440\u0430\u043d \u043f\u043e\u043b\u044c\u0437\u043e\u0432\u0430\u0442\u0435\u043b\u044c:")," ",l.a.createElement("span",null,a.firstName+" "+a.lastName)),l.a.createElement("div",{className:"info__row"},l.a.createElement("p",{className:"info__p"},"\u0410\u0434\u0440\u0435\u0441 \u043f\u0440\u043e\u0436\u0438\u0432\u0430\u043d\u0438\u044f:"),l.a.createElement("span",null,a.address.streetAddress)),l.a.createElement("div",{className:"info__row"},l.a.createElement("p",{className:"info__p"},"\u0413\u043e\u0440\u043e\u0434:")," ",l.a.createElement("span",null,a.address.city)),l.a.createElement("div",{className:"info__row"},l.a.createElement("p",{className:"info__p"},"\u041f\u0440\u043e\u0432\u0438\u043d\u0446\u0438\u044f/\u0448\u0442\u0430\u0442:")," ",l.a.createElement("span",null,a.address.state)),l.a.createElement("div",{className:"info__row"},l.a.createElement("p",{className:"info__p"},"\u0418\u043d\u0434\u0435\u043a\u0441:")," ",l.a.createElement("span",null,a.address.zip)),l.a.createElement("div",{className:"info__row"},l.a.createElement("p",{className:"info__p"},"\u041e\u043f\u0438\u0441\u0430\u043d\u0438\u0435:"),l.a.createElement("textarea",{className:"info__text",defaultValue:a.description})))},C=t(11),g=t.n(C);t(31);var w=function(e){return l.a.createElement("div",{className:"dataSelector"},l.a.createElement("button",{onClick:function(){return e.onSelect("http://www.filltext.com/?rows=32&id={number|1000}&firstName={firstName}&lastName={lastName}&email={email}&phone={phone|(xxx)xxx-xx-xx}&address={addressObject}&description={lorem|32}")},className:"dataSelector__button dataSelector__button--small"},"32 \u044d\u043b\u0435\u043c\u0435\u043d\u0442\u0430"),l.a.createElement("button",{onClick:function(){return e.onSelect("http://www.filltext.com/?rows=1000&id={number|1000}&firstName={firstName}&delay=3&lastName={lastName}&email={email}&phone={phone|(xxx)xxx-xx-xx}&address={addressObject}&description={lorem|32}")},className:"dataSelector__button dataSelector__button--big"},"1000 \u044d\u043b\u0435\u043c\u0435\u043d\u0442\u043e\u0432"))},k=t(15),S=t.n(k),x=(t(37),t(17));t(38);var y=function(e){var a=Object(n.useState)(""),t=Object(x.a)(a,2),r=t[0],s=t[1];return l.a.createElement("div",{className:"header__search search"},l.a.createElement("input",{type:"text",className:"search__input",onChange:function(e){s(e.target.value)},value:r}),l.a.createElement("button",{className:"search__button",onClick:function(){return e.onSearch(r)}},"\u041d\u0430\u0439\u0442\u0438"))},F=function(e){Object(p.a)(t,e);var a=Object(N.a)(t);function t(){var e;Object(_.a)(this,t);for(var n=arguments.length,l=new Array(n),r=0;r<n;r++)l[r]=arguments[r];return(e=a.call.apply(a,[this].concat(l))).state={isLoading:!1,data:[],sort:"asc",sortField:"",newUser:{id:"",firstName:"",lastName:"",email:"",phone:""},selectedRow:null,isDataSelected:!1,currentPage:0,displayForm:!1,search:""},e.onChangeInput=function(a){e.setState({newUser:Object(u.a)(Object(u.a)({},e.state.newUser),{},Object(d.a)({},a.target.id,a.target.value))})},e.submitHandler=function(a){a.preventDefault();var t=e.state,n=t.newUser,l=t.data;console.log(e.state.newUser),e.setState({data:[n].concat(Object(m.a)(l)),newUser:{id:"",firstName:"",lastName:"",email:"",phone:""}})},e.onClickRow=function(a){e.setState({selectedRow:a})},e.onClickClose=function(){e.setState({selectedRow:null})},e.onSort=function(a){var t=e.state.data.concat(),n="asc"===e.state.sort?"desc":"asc",l=g.a.orderBy(t,a,n);e.setState({data:l,sort:n,sortField:a})},e.dataSelectHandler=function(a){e.setState({isDataSelected:!0,isLoading:!0}),e.fetchData(a)},e.pageChangeHandler=function(a){var t=a.selected;e.setState({currentPage:t})},e.onClick=function(){e.setState({displayForm:!e.state.displayForm})},e.searchHandler=function(a){e.setState({search:a,currentPage:0})},e}return Object(h.a)(t,[{key:"fetchData",value:function(){var e=Object(o.a)(c.a.mark((function e(a){var t,n;return c.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,fetch(a);case 2:return t=e.sent,e.next=5,t.json();case 5:n=e.sent,this.setState({isLoading:!1,data:n});case 7:case"end":return e.stop()}}),e,this)})));return function(a){return e.apply(this,arguments)}}()},{key:"getFilteredData",value:function(){var e=this.state,a=e.data,t=e.search;return t?a.filter((function(e){return e.firstName.toLowerCase().includes(t.toLowerCase())||e.lastName.toLowerCase().includes(t.toLowerCase())||e.email.toLowerCase().includes(t.toLowerCase())})):a}},{key:"render",value:function(){var e=this.getFilteredData(this.state.data),a=Math.ceil(e.length/50),t=g.a.chunk(e,50)[this.state.currentPage];return this.state.isDataSelected?l.a.createElement(l.a.Fragment,null,this.state.isLoading?l.a.createElement(f,null):l.a.createElement(l.a.Fragment,null,l.a.createElement("header",{className:"header container"},l.a.createElement("h1",{className:"header__title"},"\u0418\u043d\u0442\u0435\u0440\u0430\u043a\u0442\u0438\u0432\u043d\u0430\u044f \u0442\u0430\u0431\u043b\u0438\u0446\u0430"),l.a.createElement("div",{className:"header__content"},l.a.createElement(y,{onSearch:this.searchHandler}),l.a.createElement("button",{className:"header__addButton",onClick:this.onClick},"\u0414\u043e\u0431\u0430\u0432\u0438\u0442\u044c")),this.state.displayForm?l.a.createElement(b,{submitHandler:this.submitHandler,onChangeInput:this.onChangeInput,newUser:this.state.newUser,onClickClose:this.onClick}):null),l.a.createElement("main",{className:"main container"},l.a.createElement(E,{data:t,onClickRow:this.onClickRow,onSort:this.onSort,sort:this.state.sort,sortField:this.state.sortField}),this.state.data.length>50?l.a.createElement(S.a,{previousLabel:"<",nextLabel:">",breakLabel:"...",breakClassName:"pagination__item--break",breakLinkClassName:"pagination__link--break",pageCount:a,marginPagesDisplayed:2,pageRangeDisplayed:5,onPageChange:this.pageChangeHandler,containerClassName:"main__pagination pagination",activeClassName:"pagination__item--active",disabledClassName:"pagination__item--disabled",pageClassName:"pagination__item",pageLinkClassName:"pagination__link",previousClassName:"pagination__item",nextClassName:"pagination__item",previousLinkClassName:"pagination__link",nextLinkClassName:"pagination__link",forcePage:this.state.currentPage}):null,this.state.selectedRow?l.a.createElement(v,{user:this.state.selectedRow,onClickClose:this.onClickClose}):null))):l.a.createElement("div",{className:"container"},l.a.createElement(w,{onSelect:this.dataSelectHandler}))}}]),t}(n.Component);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));s.a.render(l.a.createElement(l.a.StrictMode,null,l.a.createElement(F,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))}},[[18,1,2]]]);
//# sourceMappingURL=main.b729ef0a.chunk.js.map