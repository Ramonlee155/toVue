(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-1a74649e"],{"7e14":function(t,a,e){"use strict";e.r(a);var s=function(){var t=this,a=t.$createElement,e=t._self._c||a;return e("div",{staticClass:"container"},[e("i-head"),e("i-side"),e("main",[e("div",{staticClass:"flex row admin-container"},[e("ul",{staticClass:"text-center"},[e("router-link",{attrs:{to:"/report/reportMember/userReport",tag:"li"}},[t._v(" 彩票报表 "),e("i",{staticClass:"icon-go"})]),e("router-link",{attrs:{to:"/report/entertainment/total",tag:"li"}},[t._v("娱乐报表 "),e("i",{staticClass:"icon-go"})]),e("router-link",{staticClass:"router-link-exact-active router-link-active",attrs:{to:"/report/devidend/backBonus",tag:"li"}},[t._v("代理返佣 "),e("i",{staticClass:"icon-go"})]),e("router-link",{attrs:{to:"/report/rebate/total",tag:"li"}},[t._v("回水报表 "),e("i",{staticClass:"icon-go"})]),e("router-link",{attrs:{to:"/report/envelope",tag:"li"}},[t._v("红包报表 "),e("i",{staticClass:"icon-go"})]),e("router-link",{attrs:{to:"/report/occupation",tag:"li"}},[t._v("占成报表 "),e("i",{staticClass:"icon-go"})])],1),e("div",[e("div",{staticClass:"report-devidend"},[e("div",[e("ul",{staticClass:"flex row"},[e("router-link",{attrs:{to:"/report/devidend/backBonus",tag:"li"}},[t._v("代理返佣")]),e("router-link",{attrs:{to:"/report/devidend/bonusReport",tag:"li"}},[t._v("佣金报表")])],1),e("div",{staticClass:"back-bonus"},[e("div",{staticClass:"flex row"},[e("input",{staticClass:"current-input large",attrs:{type:"text",placeholder:"用户名/昵称/备注"}}),e("input",{staticClass:"current-input large",attrs:{type:"text",placeholder:"会员编号"}}),e("el-date-picker",{attrs:{type:"datetimerange","range-separator":"至","start-placeholder":"开始日期","end-placeholder":"结束日期"},model:{value:t.date,callback:function(a){t.date=a},expression:"date"}}),e("button",{staticClass:"current-button large blue"},[t._v("搜索")]),e("button",{staticClass:"current-button large red"},[t._v("清空")])],1),e("div",[e("ul",{staticClass:"current-scroll-view scroll-view-hover"},[t._m(0),t._l(t.rebateReport,function(a,s){return e("li",{staticClass:"flex row"},[e("div",{staticClass:"flex-1"},[t._v(t._s(a.userid))]),e("div",{staticClass:"flex-1"},[t._v(t._s(a.userid))]),e("div",{staticClass:"flex-1"},[t._v(t._s(a.username))]),e("div",{staticClass:"flex-1"},[t._v(t._s(a.remark))]),e("div",{staticClass:"flex-1"},[t._v(t._s(a.money))]),e("div",{staticClass:"flex-1"},[t._v(t._s(a.content))]),e("div",{staticClass:"flex-1"},[t._v(t._s(a.addtime))])])})],2)]),t._m(1)])])])])])])],1)},r=[function(){var t=this,a=t.$createElement,e=t._self._c||a;return e("li",{staticClass:"flex row scroll-view-title"},[e("div",{staticClass:"flex-1"},[t._v("用户编号")]),e("div",{staticClass:"flex-1"},[t._v("用户名")]),e("div",{staticClass:"flex-1"},[t._v("昵称")]),e("div",{staticClass:"flex-1"},[t._v("会员备注")]),e("div",{staticClass:"flex-1"},[t._v("积分")]),e("div",{staticClass:"flex-1"},[t._v("备注")]),e("div",{staticClass:"flex-1"},[t._v("时间")])])},function(){var t=this,a=t.$createElement,e=t._self._c||a;return e("div",{staticClass:"flex row space-between"},[e("ul",{staticClass:"flex row report_total"},[e("li",[t._v(" 佣金: "),e("b",[t._v("0")])])]),e("div",{staticClass:"flex row current-flip"},[e("p",[t._v(" 页码 1 / 1 "),e("span",[t._v("共 0 条")])]),e("div",{staticClass:"flex row"},[e("button",[t._v("上一页")]),e("button",[t._v("下一页")])]),e("input",{staticClass:"current-input",attrs:{type:"text"}}),e("button",{staticClass:"current-button blue"},[t._v("跳转")])])])}],i=e("5a0c"),o=e.n(i),l=e("9101");o.a.locale("zh-cn");var n=e("5e77");o.a.extend(n);var c=new Date,d=(c.getFullYear(),c.getMonth()+1);d=d<10?"0".concat(d):d;c.getDate();var Y={data:function(){return{rebateReport:[],date:[]}},mounted:function(){this.roomid=sessionStorage.getItem("roomid"),this.getuserRseport(0)},methods:{getuserRseport:function(t){var a=new Date,e=a.getHours();if(e>7)switch(t){case 1:console.log("昨天"),this.startDate=o()().subtract(1,"day").format("YYYY-MM-DD"),this.endDate=o()().subtract(1,"day").format("YYYY-MM-DD");break;case 2:this.startDate=o()().isoWeekday(1).format("YYYY-MM-DD"),this.endDate=o()().isoWeekday(7).format("YYYY-MM-DD");break;case 3:console.log("上周"),this.startDate=o()().isoWeekday(-6).format("YYYY-MM-DD"),this.endDate=o()().isoWeekday(0).format("YYYY-MM-DD");break;case 4:console.log("本月"),this.startDate=o()().startOf("month").format("YYYY-MM-DD"),this.endDate=o()().endOf("month").format("YYYY-MM-DD");break;default:this.startDate=o()().format("YYYY-MM-DD"),this.endDate=o()().format("YYYY-MM-DD");break}else switch(t){case 1:console.log("昨天"),this.startDate=o()().subtract(2,"day").format("YYYY-MM-DD"),this.endDate=o()().subtract(2,"day").format("YYYY-MM-DD");break;case 2:console.log("本周"),console.log();var s=o()().isoWeekday();1==s?(this.startDate=o()().isoWeekday(-6).format("YYYY-MM-DD"),this.endDate=o()().isoWeekday(0).format("YYYY-MM-DD")):(this.startDate=o()().isoWeekday(1).format("YYYY-MM-DD"),this.endDate=o()().isoWeekday(7).format("YYYY-MM-DD"));break;case 3:console.log("上周"),this.startDate=o()().isoWeekday(-6).format("YYYY-MM-DD"),this.endDate=o()().isoWeekday(0).format("YYYY-MM-DD");s=o()().isoWeekday();1==s?(this.startDate=o()().isoWeekday(-13).format("YYYY-MM-DD"),this.endDate=o()().isoWeekday(-7).format("YYYY-MM-DD")):(this.startDate=o()().isoWeekday(-6).format("YYYY-MM-DD"),this.endDate=o()().isoWeekday(0).format("YYYY-MM-DD"));break;case 4:console.log("本月"),this.startDate=o()().startOf("month").format("YYYY-MM-DD"),this.endDate=o()().endOf("month").format("YYYY-MM-DD");break;default:this.startDate=o()().subtract(1,"day").format("YYYY-MM-DD"),this.endDate=o()().subtract(1,"day").format("YYYY-MM-DD");break}var r=this;axios.post(l["a"]+"/room/report/bonusReport&roomid="+this.roomid,{beginDate:this.startDate,endDate:this.endDate,pageSize:this.pageSize,page:this.page}).then(function(t){r.rebateReport=t.data.data,r.TotalData=t.data.TotalData,r.total=t.data.total})}}},D=Y,u=e("2877"),v=Object(u["a"])(D,s,r,!1,null,null,null);a["default"]=v.exports},9101:function(t,a,e){"use strict";var s="http://chxbanjia.cn/";a["a"]=s}}]);