(function(e){function t(t){for(var a,r,s=t[0],c=t[1],l=t[2],d=0,b=[];d<s.length;d++)r=s[d],Object.prototype.hasOwnProperty.call(i,r)&&i[r]&&b.push(i[r][0]),i[r]=0;for(a in c)Object.prototype.hasOwnProperty.call(c,a)&&(e[a]=c[a]);u&&u(t);while(b.length)b.shift()();return o.push.apply(o,l||[]),n()}function n(){for(var e,t=0;t<o.length;t++){for(var n=o[t],a=!0,s=1;s<n.length;s++){var c=n[s];0!==i[c]&&(a=!1)}a&&(o.splice(t--,1),e=r(r.s=n[0]))}return e}var a={},i={app:0},o=[];function r(t){if(a[t])return a[t].exports;var n=a[t]={i:t,l:!1,exports:{}};return e[t].call(n.exports,n,n.exports,r),n.l=!0,n.exports}r.m=e,r.c=a,r.d=function(e,t,n){r.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:n})},r.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},r.t=function(e,t){if(1&t&&(e=r(e)),8&t)return e;if(4&t&&"object"===typeof e&&e&&e.__esModule)return e;var n=Object.create(null);if(r.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var a in e)r.d(n,a,function(t){return e[t]}.bind(null,a));return n},r.n=function(e){var t=e&&e.__esModule?function(){return e["default"]}:function(){return e};return r.d(t,"a",t),t},r.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},r.p="/table/";var s=window["webpackJsonp"]=window["webpackJsonp"]||[],c=s.push.bind(s);s.push=t,s=s.slice();for(var l=0;l<s.length;l++)t(s[l]);var u=c;o.push([0,"chunk-vendors"]),n()})({0:function(e,t,n){e.exports=n("56d7")},"475f":function(e,t,n){"use strict";n("5a91")},"56d7":function(e,t,n){"use strict";n.r(t);n("e260"),n("e6cf"),n("cca6"),n("a79d");var a=n("7a23"),i={class:"app"},o=Object(a["e"])("h1",null,"Таблица",-1),r=Object(a["e"])("hr",null,null,-1);function s(e,t,n,s,c,l){var u=Object(a["m"])("Table");return Object(a["i"])(),Object(a["d"])("div",i,[o,r,Object(a["g"])(u)])}n("b0c0");var c=function(e){return Object(a["k"])("data-v-76314860"),e=e(),Object(a["j"])(),e},l=c((function(){return Object(a["e"])("hr",null,null,-1)})),u={key:0,class:"highlight"},d=c((function(){return Object(a["e"])("thead",null,[Object(a["e"])("tr",null,[Object(a["e"])("th",null,"Дата"),Object(a["e"])("th",null,"Название"),Object(a["e"])("th",null,"Количество"),Object(a["e"])("th",null,"Расстояние")])],-1)})),b={key:1};function h(e,t,n,i,o,r){var s=Object(a["m"])("Sorting"),c=Object(a["m"])("Pagination");return Object(a["i"])(),Object(a["d"])("div",null,[Object(a["g"])(s,{onSort:r.sortData},null,8,["onSort"]),l,o.sortedArray?(Object(a["i"])(),Object(a["d"])("table",u,[d,Object(a["e"])("tbody",null,[(Object(a["i"])(!0),Object(a["d"])(a["a"],null,Object(a["l"])(e.pageItems,(function(e){return Object(a["i"])(),Object(a["d"])("tr",{key:e.code},[Object(a["e"])("td",null,Object(a["n"])(e.date),1),Object(a["e"])("td",null,Object(a["n"])(e.name),1),Object(a["e"])("td",null,Object(a["n"])(e.amount),1),Object(a["e"])("td",null,Object(a["n"])(e.distance),1)])})),128))])])):(Object(a["i"])(),Object(a["d"])("h5",b,"Ничего не найдено по заданным критериям поиска!")),Object(a["g"])(c,{activePage:e.activePage,allItems:e.allItems,allPages:e.allPages,sortedArray:o.sortedArray,onChangePage:e.renderPage},null,8,["activePage","allItems","allPages","sortedArray","onChangePage"])])}var m=[{date:"24/11/19",code:1,name:"delectus aut autem",amount:13,distance:555},{date:"21/12/19",code:2,name:"quis ut nam facilis et officia qui",amount:225,distance:5421},{date:"04/12/19",code:3,name:"fugiat veniam minus",amount:3123,distance:365},{date:"11/12/19",code:4,name:"et porro tempora",amount:698,distance:2584},{date:"28/12/19",code:5,name:"laboriosam mollitia et enim quasi adipisci quia provcodeent illum",amount:752,distance:402},{date:"02/12/19",code:6,name:"qui ullam ratione quibusdam voluptatem quia omnis",amount:48,distance:3684},{date:"12/12/19",code:7,name:"illo expedita consequatur quia in",amount:8585,distance:2518},{date:"30/12/19",code:8,name:"quo adipisci enim quam ut ab",amount:356,distance:96},{date:"24/11/19",code:9,name:"molestiae perspiciatis ipsa",amount:114,distance:1025},{date:"02/12/19",code:16,name:"qui ullam ratione quibusdam voluptatem quia omnis",amount:481,distance:684},{date:"12/12/19",code:17,name:"illo expedita consequatur quia in",amount:885,distance:258},{date:"30/12/19",code:18,name:"quo adipisci enim quam ut ab",amount:56,distance:906},{date:"24/11/19",code:19,name:"molestiae perspiciatis ipsa",amount:142,distance:1125},{date:"30/12/19",code:28,name:"quo adipisci enim quam ut ab",amount:566,distance:9106},{date:"24/11/19",code:29,name:"molestiae perspiciatis ipsa",amount:442,distance:135}],f=function(e){return Object(a["k"])("data-v-cb8e4094"),e=e(),Object(a["j"])(),e},p=f((function(){return Object(a["e"])("h4",null,"Сортировка данных таблицы",-1)})),g={class:"select__label"},O=Object(a["f"])(" Выберите колонку "),j=f((function(){return Object(a["e"])("option",{value:"",disabled:"",selected:""},"---",-1)})),v=f((function(){return Object(a["e"])("option",{value:"name"},"Название",-1)})),y=f((function(){return Object(a["e"])("option",{value:"amount"},"Количество",-1)})),A=f((function(){return Object(a["e"])("option",{value:"distance"},"Расстояние",-1)})),P=[j,v,y,A],q={class:"select__label"},w=Object(a["f"])(" Условие сортировки "),C=f((function(){return Object(a["e"])("option",{value:"",disabled:"",selected:""},"---",-1)})),k=f((function(){return Object(a["e"])("option",{value:"equals"},"Равно",-1)})),_=f((function(){return Object(a["e"])("option",{value:"contains"},"Содержит",-1)})),S={key:0,value:"more"},I={key:1,value:"less"},V={class:"select__label"},x=Object(a["f"])(" Введите данные "),L=["type","value","disabled"],M={key:0};function T(e,t,n,i,o,r){return Object(a["i"])(),Object(a["d"])(a["a"],null,[p,Object(a["e"])("div",{class:Object(a["h"])(["select__container",{divBottom:!o.message}])},[Object(a["e"])("label",g,[O,Object(a["q"])(Object(a["e"])("select",{class:"select__list","onUpdate:modelValue":t[0]||(t[0]=function(e){return o.selectColumn=e})},P,512),[[a["p"],o.selectColumn]])]),Object(a["e"])("label",q,[w,Object(a["q"])(Object(a["e"])("select",{class:"select__list","onUpdate:modelValue":t[1]||(t[1]=function(e){return o.selectСondition=e})},[C,k,_,"name"!==o.selectColumn?(Object(a["i"])(),Object(a["d"])("option",S,"Больше")):Object(a["c"])("",!0),"name"!==o.selectColumn?(Object(a["i"])(),Object(a["d"])("option",I,"Меньше")):Object(a["c"])("",!0)],512),[[a["p"],o.selectСondition]])]),Object(a["e"])("label",V,[x,Object(a["q"])(Object(a["e"])("input",{class:Object(a["h"])(["input",{input__disabled:!o.selectColumn||!o.selectСondition}]),type:o.selectColumn&&"name"!==o.selectColumn?"number":"text",minlength:"2",maxlength:"25",value:o.inputValue,disabled:!o.selectColumn||!o.selectСondition,"onUpdate:modelValue":t[2]||(t[2]=function(e){return o.inputValue=e}),placeholder:"Введите данные"},null,10,L),[[a["o"],o.inputValue]]),o.message?(Object(a["i"])(),Object(a["d"])("span",M,Object(a["n"])(o.message),1)):Object(a["c"])("",!0)])],2)],64)}var $=n("2909"),N=(n("4e82"),n("4de4"),n("d3b7"),n("498a"),{emits:["sort"],data:function(){return{valid:!0,inputValue:"",selectColumn:"","selectСondition":"",initialArray:[],sortedArray:[],message:""}},methods:{sort:function(e){"amount"===this.selectColumn?e.sort((function(e,t){return e.amount-t.amount})):e.sort((function(e,t){return e.distance-t.distance}))},handleSort:function(e){var t=this;if(this.selectColumn&&this.selectСondition&&!this.message)switch(this.sortedArray=Object($["a"])(this.initialArray),this.selectColumn){case"name":"equals"===this.selectСondition?this.sortedArray=this.sortedArray.filter((function(e){return e.name.toLowerCase()===String(t.inputValue).toLowerCase()})):"contains"===this.selectСondition&&(this.sortedArray=this.sortedArray.filter((function(e){return e.name.toLowerCase().indexOf(String(t.inputValue).toLowerCase())>-1})));break;case"amount":"equals"===this.selectСondition?this.sortedArray=this.sortedArray.filter((function(e){return+e.amount===+t.inputValue})):"contains"===this.selectСondition?this.sortedArray=this.sortedArray.filter((function(e){return String(e.amount).indexOf(String(t.inputValue))>-1})):"more"===this.selectСondition?(this.sortedArray=this.sortedArray.filter((function(e){return e.amount>t.inputValue})),this.sort(this.sortedArray)):"less"===this.selectСondition&&(this.sortedArray=this.sortedArray.filter((function(e){return e.amount<t.inputValue})),this.sort(this.sortedArray));break;case"distance":"equals"===this.selectСondition?this.sortedArray=this.sortedArray.filter((function(e){return+e.distance===+t.inputValue})):"contains"===this.selectСondition?this.sortedArray=this.sortedArray.filter((function(e){return String(e.distance).indexOf(String(t.inputValue))>-1})):"more"===this.selectСondition?(this.sortedArray=this.sortedArray.filter((function(e){return e.distance>t.inputValue})),this.sort(this.sortedArray)):"less"===this.selectСondition&&(this.sortedArray=this.sortedArray.filter((function(e){return e.distance<t.inputValue})),this.sort(this.sortedArray));break}else this.selectColumn&&this.selectСondition&&e&&(this.sortedArray=Object($["a"])(this.initialArray))}},mounted:function(){this.initialArray=Object($["a"])(m)},watch:{inputValue:function(e,t){"name"===this.selectColumn?e.trim().length>0&&e.trim().length<3?this.message="Минимум 3 и максимум 25 символов":this.message="":String(e.length)>0&&String(e.length)<2?this.message="Минимум 2 и максимум 25 символов":this.message="",this.handleSort(t)},selectColumn:function(){this.handleSort()},"selectСondition":function(){this.handleSort()},sortedArray:function(e){this.$emit("sort",e)}}}),U=(n("475f"),n("6b0d")),B=n.n(U);const D=B()(N,[["render",T],["__scopeId","data-v-cb8e4094"]]);var F=D,J={key:0,class:"pagination"},E=Object(a["e"])("a",{href:"#"},"Назад",-1),z=[E],G=["onClick"],H={href:"#!"},K=Object(a["e"])("a",{href:"#"},"Вперед",-1),Q=[K];function R(e,t,n,i,o,r){return n.sortedArray?(Object(a["i"])(),Object(a["d"])("ul",J,[Object(a["e"])("li",{class:Object(a["h"])(["waves-effect",{disabled:1===n.activePage}]),onClick:t[0]||(t[0]=function(t){return 1!==n.activePage&&e.$emit("change-page",n.activePage-1)})},z,2),(Object(a["i"])(!0),Object(a["d"])(a["a"],null,Object(a["l"])(n.allItems,(function(t,i){return Object(a["i"])(),Object(a["d"])("li",{key:i,class:Object(a["h"])(["waves-effect",{active:n.activePage===i+1}]),onClick:function(t){return e.$emit("change-page",i+1)}},[Object(a["e"])("a",H,Object(a["n"])(i+1),1)],10,G)})),128)),Object(a["e"])("li",{class:Object(a["h"])(["waves-effect",{disabled:n.activePage===n.allPages}]),onClick:t[1]||(t[1]=function(t){return n.activePage!==n.allPages&&e.$emit("change-page",n.activePage+1)})},Q,2)])):Object(a["c"])("",!0)}var W={props:["activePage","allPages","allItems","sortedArray"],emits:["change-page"]};const X=B()(W,[["render",R]]);var Y=X,Z=(n("a434"),{data:function(){return{activePage:1,pageLength:5,allPages:0,allItems:[],pageItems:[]}},methods:{setupPagination:function(e){this.allItems.length&&(this.allItems=[]);while(e.length)this.allItems.push(e.splice(0,this.pageLength));this.allPages=this.allItems.length,this.activePage>this.allItems.length?this.renderPage(this.allItems.length):this.renderPage(this.activePage)},renderPage:function(e){this.pageItems=this.allItems[e-1],this.activePage=e||1}}}),ee={mixins:[Z],data:function(){return{sortedArray:!0}},methods:{sortData:function(e){e.length?this.sortedArray=!0:this.sortedArray=!1,this.setupPagination(e)}},mounted:function(){this.setupPagination(m)},components:{Sorting:F,Pagination:Y}};n("d3c4");const te=B()(ee,[["render",h],["__scopeId","data-v-76314860"]]);var ne=te,ae={components:{Table:ne}};n("9fc5");const ie=B()(ae,[["render",s]]);var oe=ie,re=n("9483");Object(re["a"])("".concat("/table/","service-worker.js"),{ready:function(){console.log("App is being served from cache by a service worker.\nFor more details, visit https://goo.gl/AFskqB")},registered:function(){console.log("Service worker has been registered.")},cached:function(){console.log("Content has been cached for offline use.")},updatefound:function(){console.log("New content is downloading.")},updated:function(){console.log("New content is available; please refresh.")},offline:function(){console.log("No internet connection found. App is running in offline mode.")},error:function(e){console.error("Error during service worker registration:",e)}}),Object(a["b"])(oe).mount("#app")},"5a91":function(e,t,n){},"849e":function(e,t,n){},"9fc5":function(e,t,n){"use strict";n("849e")},d3c4:function(e,t,n){"use strict";n("df66")},df66:function(e,t,n){}});
//# sourceMappingURL=app.c87c2bb6.js.map