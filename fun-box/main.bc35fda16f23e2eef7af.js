!function(e){function t(t){for(var r,c,i=t[0],s=t[1],l=t[2],f=0,p=[];f<i.length;f++)c=i[f],Object.prototype.hasOwnProperty.call(o,c)&&o[c]&&p.push(o[c][0]),o[c]=0;for(r in s)Object.prototype.hasOwnProperty.call(s,r)&&(e[r]=s[r]);for(u&&u(t);p.length;)p.shift()();return a.push.apply(a,l||[]),n()}function n(){for(var e,t=0;t<a.length;t++){for(var n=a[t],r=!0,i=1;i<n.length;i++){var s=n[i];0!==o[s]&&(r=!1)}r&&(a.splice(t--,1),e=c(c.s=n[0]))}return e}var r={},o={1:0},a=[];function c(t){if(r[t])return r[t].exports;var n=r[t]={i:t,l:!1,exports:{}};return e[t].call(n.exports,n,n.exports,c),n.l=!0,n.exports}c.m=e,c.c=r,c.d=function(e,t,n){c.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:n})},c.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},c.t=function(e,t){if(1&t&&(e=c(e)),8&t)return e;if(4&t&&"object"==typeof e&&e&&e.__esModule)return e;var n=Object.create(null);if(c.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var r in e)c.d(n,r,function(t){return e[t]}.bind(null,r));return n},c.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return c.d(t,"a",t),t},c.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},c.p="";var i=window.webpackJsonp=window.webpackJsonp||[],s=i.push.bind(i);i.push=t,i=i.slice();for(var l=0;l<i.length;l++)t(i[l]);var u=s;a.push([126,3]),n()}({125:function(e,t,n){"use strict";(function(e){n.d(t,"a",(function(){return r}));Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));function r(){"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))}}).call(this,n(320))},126:function(e,t,n){n(127),e.exports=n(323)},317:function(e,t,n){},318:function(e,t,n){},319:function(e,t,n){},321:function(e,t,n){},323:function(e,t,n){"use strict";n.r(t);var r=n(1),o=n.n(r),a=n(124),c=n.n(a),i=(n(317),n(318),n.p+"f22be2f84c689b1b4ba38dc5684cfcc9.png"),s=n.p+"a4825824118d7990b7f2ff339849c9bb.png",l=n.p+"45f3368af62c5e80300193003b62ecf1.webp",u=n.p+"0fe41bd504557b3ab29c8a40d153c189.webp";var f=function(e){return o.a.createElement("li",{className:"list__item item "+(e.item.disabled?"disabled":e.item.selected?"selected":"default")},o.a.createElement("svg",{className:"item__background",viewBox:"-2 -2 320 510"},o.a.createElement("path",{d:"M 160,476   \r L 10,476  \r C 10,476 0,476 0,466  \r L 0,45  \r L 45,0  \r L 306,0  \r C 306,0 316,0 316, 6  \r L 316, 466  \r C 316,466 316,476 306,476   \r L 306,476 160,476  \r "})),o.a.createElement("div",{className:"item__container container-"+(e.item.disabled?"disabled":e.item.selected?"selected":"default"),"data-id":e.item.id,onClick:e.onClick,onMouseEnter:e.onMouseEnter,onMouseLeave:e.onMouseLeave},o.a.createElement("div",{className:"item__info"},e.item.onHover?o.a.createElement("p",{className:"item__text--selected"},"Котэ не одобряет?"):o.a.createElement("p",{className:"item__text"},"Сказочное заморское яство"),o.a.createElement("h2",{className:"item__title"},o.a.createElement("span",{className:"item__title-name"},"Нямушка"),o.a.createElement("span",{className:"item__taste"}," ",e.item.taste)),o.a.createElement("span",{className:"item__portions"},e.item.portions," порций"),o.a.createElement("span",{className:"item__present"},e.item.present," в подарок"),o.a.createElement("span",{className:"item__complement"},e.item.textInfo)),o.a.createElement("picture",null,o.a.createElement("source",{srcSet:l+" 1x,"+u+" 2x",type:"image/webp"}),o.a.createElement("img",{className:"item__img",src:i,srcSet:s+" 2x",width:"312px",height:"265px",alt:"Фото кота"})),o.a.createElement("div",{className:"item__weight"},e.item.weight,o.a.createElement("span",{className:"item__kg"},"кг"))),o.a.createElement("p",{className:"item__bottom-comment"},e.item.disabled?e.item.textDisabled:e.item.selected?e.item.textSelected:o.a.createElement("span",null,"Чего сидишь? Порадуй котэ,"," ",o.a.createElement("a",{className:"item__link","data-id":e.item.id,onClick:e.onClick},"купи"))))};n(319);var p=function(e){return o.a.createElement("ul",{className:"list"},e.data.map((function(t){return o.a.createElement(f,{item:t,key:t.id,onClick:e.onClick,onMouseEnter:e.onMouseEnter,onMouseLeave:e.onMouseLeave})})))};function m(e){return(m="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}function d(e){return function(e){if(Array.isArray(e))return b(e)}(e)||function(e){if("undefined"!=typeof Symbol&&Symbol.iterator in Object(e))return Array.from(e)}(e)||function(e,t){if(!e)return;if("string"==typeof e)return b(e,t);var n=Object.prototype.toString.call(e).slice(8,-1);"Object"===n&&e.constructor&&(n=e.constructor.name);if("Map"===n||"Set"===n)return Array.from(e);if("Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n))return b(e,t)}(e)||function(){throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function b(e,t){(null==t||t>e.length)&&(t=e.length);for(var n=0,r=new Array(t);n<t;n++)r[n]=e[n];return r}function y(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function v(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?y(Object(n),!0).forEach((function(t){x(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):y(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function h(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function g(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}function _(e,t){return(_=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e})(e,t)}function w(e){var t=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],(function(){}))),!0}catch(e){return!1}}();return function(){var n,r=j(e);if(t){var o=j(this).constructor;n=Reflect.construct(r,arguments,o)}else n=r.apply(this,arguments);return E(this,n)}}function E(e,t){return!t||"object"!==m(t)&&"function"!=typeof t?O(e):t}function O(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}function j(e){return(j=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)})(e)}function x(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}var S=function(e){!function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),t&&_(e,t)}(c,e);var t,n,r,a=w(c);function c(){var e;h(this,c);for(var t=arguments.length,n=new Array(t),r=0;r<t;r++)n[r]=arguments[r];return x(O(e=a.call.apply(a,[this].concat(n))),"state",{products:[{id:0,taste:"с фуа-гра",portions:10,present:"мышь",weight:"0,5",selected:!1,disabled:!1,onHover:!1,textSelected:"Печень утки разварная с артишоками.",textDisabled:"Печалька, с фуа-гра закончился.",textInfo:""},{id:1,taste:"с рыбой",portions:40,present:"2 мыши",weight:"2",selected:!0,disabled:!1,onHover:!1,textSelected:"Головы щучьи с чесноком да свежайшая сёмгушка.",textDisabled:"Печалька, с рыбой закончился.",textInfo:""},{id:2,taste:"с курой",portions:100,present:"5 мышей",weight:"5",selected:!1,disabled:!0,onHover:!1,textSelected:"Филе из цыплят с трюфелями в бульоне.",textDisabled:"Печалька, с курой закончился.",textInfo:"Заказчик доволен"}]}),x(O(e),"onClick",(function(t){t.preventDefault;var n=e.state.products,r=e.state.products.findIndex((function(e){return e.id===+t.currentTarget.dataset.id})),o=v(v({},n[r]),{},{selected:!n[r].selected,onHover:!1});e.setState({products:[].concat(d(n.slice(0,r)),[o],d(n.slice(r+1)))})})),x(O(e),"onMouseEnter",(function(t){var n=e.state.products,r=e.state.products.findIndex((function(e){return e.id===+t.currentTarget.dataset.id}));if(n[r].selected){var o=v(v({},n[r]),{},{onHover:!0});e.setState({products:[].concat(d(n.slice(0,r)),[o],d(n.slice(r+1)))})}})),x(O(e),"onMouseLeave",(function(t){var n=e.state.products,r=e.state.products.findIndex((function(e){return e.id===+t.currentTarget.dataset.id})),o=v(v({},n[r]),{},{onHover:!1});e.setState({products:[].concat(d(n.slice(0,r)),[o],d(n.slice(r+1)))})})),e}return t=c,(n=[{key:"render",value:function(){return o.a.createElement("div",{className:"container"},o.a.createElement("section",{className:"catalog"},o.a.createElement("h1",{className:"catalog__title"},"Ты сегодня покормил кота?"),o.a.createElement(p,{data:this.state.products,onClick:this.onClick,onMouseEnter:this.onMouseEnter,onMouseLeave:this.onMouseLeave})))}}])&&g(t.prototype,n),r&&g(t,r),c}(r.Component),P=n(125);n(321);c.a.render(o.a.createElement(o.a.StrictMode,null,o.a.createElement(S,null)),document.getElementById("root")),P.a()}});