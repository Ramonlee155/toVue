(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-f07b6e6c"],{"312d":function(t,a,e){"use strict";e.r(a);var n=function(){var t=this,a=t.$createElement,e=t._self._c||a;return e("div",{staticClass:"container"},[e("i-head"),e("i-side"),e("main",[e("div",{staticClass:"flex row admin-container"},[e("ul",{staticClass:"text-center"},[e("router-link",{attrs:{to:"/backWater/setting",tag:"li"}},[t._v(" 手动回水 "),e("i",{staticClass:"icon-go"})]),e("router-link",{attrs:{to:"/backWater/personal",tag:"li"}},[t._v("特殊回水 "),e("i",{staticClass:"icon-go"})]),e("router-link",{attrs:{to:"/backWater/app",tag:"li"}},[t._v("彩票回水 "),e("i",{staticClass:"icon-go"})]),e("router-link",{attrs:{to:"/backWater/lottery",tag:"li"}},[t._v("六合彩回水 "),e("i",{staticClass:"icon-go"})]),e("router-link",{attrs:{to:"/backWater/live",tag:"li"}},[t._v("娱乐回水 "),e("i",{staticClass:"icon-go"})])],1),e("div",[e("div",{staticClass:"back-water-app"},[e("div",[e("div",{staticClass:"mark-six-game-nav"},[e("button",{staticClass:"current-button large grey",class:{blue:1==t.tabIndex},on:{click:function(a){t.tabIndex=1}}},[t._v(" 香港六合彩")]),e("button",{staticClass:"current-button large grey",class:{blue:2==t.tabIndex},on:{click:function(a){t.tabIndex=2}}},[t._v(" 台湾六合彩 ")])])]),e("div",[e("ul",{staticClass:"flex wrap"},[t._m(0),t._l(t.gameList,function(a,n){return e("li",{key:n,staticClass:"mark-six"},[e("p",[t._v(t._s(a.label))]),e("div",[e("div",[e("input",{directives:[{name:"model",rawName:"v-model",value:a.number,expression:"item.number"}],staticClass:"current-input",attrs:{min:a.min,max:a.max,type:"text",autocomplete:"off",placeholder:"玩家返佣",maxlength:"5"},domProps:{value:a.number},on:{input:function(e){e.target.composing||t.$set(a,"number",e.target.value)}}}),e("span",[t._v("%")])])]),e("div",[e("div",[e("input",{directives:[{name:"model",rawName:"v-model",value:a.min,expression:"item.min"}],staticClass:"current-input",attrs:{type:"text",autocomplete:"off",placeholder:"返佣限制",maxlength:"5",disabled:"disabled"},domProps:{value:a.min},on:{input:function(e){e.target.composing||t.$set(a,"min",e.target.value)}}}),e("span",[t._v("%")])])]),e("div",[e("div",[e("input",{directives:[{name:"model",rawName:"v-model",value:a.max,expression:"item.max"}],staticClass:"current-input",attrs:{type:"text",autocomplete:"off",placeholder:"上级返佣",maxlength:"5",disabled:"disabled"},domProps:{value:a.max},on:{input:function(e){e.target.composing||t.$set(a,"max",e.target.value)}}}),e("span",[t._v("%")])])]),e("button",{staticClass:"current-button blue small"},[t._v(" 修改 ")])])})],2)])])])])])],1)},i=[function(){var t=this,a=t.$createElement,e=t._self._c||a;return e("li",{staticClass:"mark-six"},[e("p"),e("div",[t._v("玩家返佣")]),e("div",[t._v("返佣限制")]),e("div",[t._v("上级返佣")])])}],l=(e("ac6a"),e("f3e2"),{data:function(){return{tabIndex:1,gameList:[{label:"特码A球号",number:11,min:11,max:12.2},{label:"特码B球号",number:11,min:11,max:12.2},{label:"正码A球号",number:11,min:11,max:12.2},{label:"正码B球号",number:11,min:11,max:12.2},{label:"正码特球号",number:11,min:11,max:12.2},{label:"连码",number:11,min:11,max:12.2},{label:"两面",number:11,min:11,max:12.2},{label:"全波",number:11,min:11,max:12.2},{label:"半波",number:11,min:11,max:12.2},{label:"头数",number:11,min:11,max:12.2},{label:"肖尾",number:11,min:11,max:12.2},{label:"特肖",number:11,min:11,max:12.2},{label:"连肖连尾",number:11,min:11,max:12.2},{label:"全不中",number:11,min:11,max:12.2}]}},created:function(){for(var t=1;t<24;t++)this.optionsTime.push({value:t+":00",label:t+":00"})},methods:{all:function(){var t=this;this.gameList.forEach(function(a,e){a.number=t.number})}}}),s=l,r=(e("a284"),e("2877")),m=Object(r["a"])(s,n,i,!1,null,"6021e39e",null);a["default"]=m.exports},a284:function(t,a,e){"use strict";var n=e("f3b3"),i=e.n(n);i.a},f3b3:function(t,a,e){}}]);