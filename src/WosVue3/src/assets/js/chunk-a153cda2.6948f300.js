(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-a153cda2"],{"26ef":function(t,i,s){},a389:function(t,i,s){"use strict";var a=s("26ef"),e=s.n(a);e.a},ed5b:function(t,i,s){"use strict";s.r(i);var a=function(){var t=this,i=t.$createElement,s=t._self._c||i;return s("div",{staticClass:"container"},[s("i-head"),s("i-side"),s("main",[s("div",{staticClass:"flex row admin-container"},[s("ul",{staticClass:"text-center"},[s("router-link",{attrs:{to:"/user/member",tag:"li"}},[t._v(" 用户列表 "),s("i",{staticClass:"icon-go"})]),s("router-link",{attrs:{to:"/user/online",tag:"li"}},[t._v("在线会员 "),s("i",{staticClass:"icon-go"})]),s("router-link",{attrs:{to:"/user/pushHand",tag:"li"}},[t._v("代理列表 "),s("i",{staticClass:"icon-go"})]),s("router-link",{attrs:{to:"/user/robotList",tag:"li"}},[t._v("机器人列表 "),s("i",{staticClass:"icon-go"})])],1),s("div",[s("div",{staticClass:"user-robot"},[s("div",[s("ul",{staticClass:"flex row"},[s("router-link",{attrs:{to:"/user/robotList",tag:"li"}},[t._v("代理列表")]),s("router-link",{attrs:{to:"/user/addRobot",tag:"li"}},[t._v("添加机器人")])],1),s("div",{staticClass:"user-robot-list"},[s("div",[s("input",{staticClass:"current-input large",attrs:{type:"text",placeholder:"用户名"}}),s("input",{staticClass:"current-input large",attrs:{type:"text",placeholder:"会员编号"}}),s("button",{staticClass:"current-button large blue"},[t._v("搜索")]),s("button",{staticClass:"current-button large red"},[t._v("清空")]),s("button",{staticClass:"current-button large green",on:{click:t.oneKeyOpen}},[t._v("一键开启")]),s("button",{staticClass:"current-button large red",on:{click:t.oneKeyClose}},[t._v("一键关闭")])]),s("div",[s("div",[s("ul",{staticClass:"current-scroll-view scroll-view-hover"},[t._m(0),t._l(t.robotList,function(i,a){return s("li",{key:a,staticClass:"flex row"},[s("div",{staticClass:"flex-1"},[s("img",{attrs:{src:i.avator}})]),s("div",{staticClass:"flex-2"},[t._v(t._s(i.id))]),s("div",{staticClass:"flex-1"},[t._v(t._s(i.name))]),s("div",{staticClass:"flex-1"},[t._v(t._s(i.nickname))]),s("div",{staticClass:"flex-1 flex"},[s("i-switch",{attrs:{active:i.open},on:{change:function(i){return t.openChange(i,a)}}})],1),s("div",{staticClass:"flex-3"},[s("input",{staticClass:"current-button small blue",attrs:{type:"button",value:"分数操作"},on:{click:t.scoreSet}}),s("input",{staticClass:"current-button small blue",attrs:{type:"button",value:"编辑"},on:{click:t.edit}}),s("input",{staticClass:"current-button small red",attrs:{type:"button",value:"删除"},on:{click:t.del}})])])})],2)]),t._m(1)]),s("el-dialog",{attrs:{visible:t.scoresOperationVisible,width:"500px","show-close":!1,"custom-class":"diy-pop"},on:{"update:visible":function(i){t.scoresOperationVisible=i}}},[s("div",{staticClass:"current-mask current-points"},[s("div",[s("p",[t._v("分数操作 "),s("span",[t._v("78678809")])]),s("div",[s("ul",[s("li",{staticClass:"flex row"},[s("p",[t._v("分数操作")]),s("div",[s("el-select",{attrs:{placeholder:"请选择"},model:{value:t.scoresOperationValue,callback:function(i){t.scoresOperationValue=i},expression:"scoresOperationValue"}},t._l(t.scoresOperationOptions,function(t){return s("el-option",{key:t.value,attrs:{label:t.label,value:t.value}})}),1)],1)]),s("li",{staticClass:"flex row"},[s("p",[t._v("金额")]),s("div",{staticClass:"flex row"},[s("input",{staticClass:"current-input",attrs:{type:"text",maxlength:"7"}})])])])]),s("div",{staticClass:"flex row flex-end"},[s("input",{staticClass:"current-button grey",attrs:{type:"button",value:"取消"},on:{click:function(i){t.scoresOperationVisible=!1}}}),s("input",{staticClass:"current-button blue",attrs:{type:"button",value:"确定"}})])])])]),s("el-dialog",{attrs:{visible:t.editVisible,width:"1000px","show-close":!1,"custom-class":"diy-pop"},on:{"update:visible":function(i){t.editVisible=i}}},[s("div",{staticClass:"user-robot-list b0 p0"},[s("div",{staticClass:"current-mask"},[s("div",{staticStyle:{width:"1000px"}},[s("p",{staticClass:"flex row space-between"},[t._v(" 编辑 ")]),s("div",{staticStyle:{height:"auto"}},[s("ul",{staticClass:"text-center set-robot-details"},[s("li",{staticClass:"flex row"},[s("p",[t._v("头像")]),s("div",{staticClass:"flex row"},[s("button",{staticClass:"current-button light-blue",on:{click:t.selectAvator}},[t._v("\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t系统头像 ")]),s("button",{staticClass:"current-button light-blue",on:{click:t.uploadAvator}},[t._v("\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t上传头像 ")])])]),s("li",{staticClass:"flex row"},[s("p",[t._v("用户名")]),s("input",{staticClass:"current-input large disable",attrs:{type:"text",disabled:"disabled",value:"robot001"}}),s("p",[t._v("昵称")]),s("input",{staticClass:"current-input large",attrs:{type:"text",value:"美人无罪"}}),s("p",[t._v("状态")]),s("div",{staticClass:"flex row"},[s("i-switch",{attrs:{active:t.stadus},on:{change:t.stadusChange}})],1)]),s("li",{staticClass:"flex row"},[s("p",[t._v("下注金额")]),s("input",{staticClass:"current-input large",attrs:{type:"text",value:"10-100"}})]),s("li",{staticClass:"flex row"},[s("p",[t._v("自动上分警戒线")]),s("input",{staticClass:"current-input large",attrs:{type:"text",value:"10000"}}),s("p",[t._v("自动下分警戒线")]),s("input",{staticClass:"current-input large",attrs:{type:"text",value:"220#3030"}})]),s("li",{staticClass:"flex row"},[s("p",[t._v("自动上分金额")]),s("input",{staticClass:"current-input large",attrs:{type:"text",value:"220"}}),s("p",[t._v("自动下分金额")]),s("input",{staticClass:"current-input large",attrs:{type:"text",value:"200#"}})]),s("li",{staticClass:"flex row"},[s("p",[t._v("下注游戏")]),s("div",[s("ul",{staticClass:"flex row wrap"},t._l(t.gameList,function(i,a){return s("li",{key:a,staticClass:"flex row text-center"},[s("p",[t._v(t._s(i.label))]),s("i-switch",{attrs:{active:i.checked},on:{change:function(i){return t.change(i,a)}}})],1)}),0)])])])]),s("div",{staticClass:"flex row flex-end"},[s("input",{staticClass:"current-button grey",attrs:{type:"button",value:"取消"}}),s("input",{staticClass:"current-button light-blue",attrs:{type:"button",value:"确定"}})])])])])]),s("el-dialog",{attrs:{visible:t.selectAvatorVisible,width:"500px","show-close":!1,"custom-class":"diy-pop"},on:{"update:visible":function(i){t.selectAvatorVisible=i}}},[s("div",{staticClass:"current-mask"},[s("div",[s("p",{staticClass:"flex row space-between"},[t._v("系统头像 "),s("i",{staticClass:"icon-close",staticStyle:{display:"none"}})]),s("div",{staticStyle:{height:"auto"}},[s("div",{staticClass:"flex row wrap"},[s("img",{attrs:{src:"https://newfly-asia.huihuishun.com/minio9000/newfly/defaultimg/1586264544873.jpg"}}),s("img",{attrs:{src:"https://newfly-asia.huihuishun.com/minio9000/newfly/defaultimg/201901211657204585732.png"}}),s("img",{attrs:{src:"https://newfly-asia.huihuishun.com/minio9000/newfly/defaultimg/201901211657308711461.png"}}),s("img",{attrs:{src:"https://newfly-asia.huihuishun.com/minio9000/newfly/defaultimg/201903121019499850980.png"}}),s("img",{attrs:{src:"https://newfly-asia.huihuishun.com/minio9000/newfly/defaultimg/201903221557544122299.png"}}),s("img",{attrs:{src:"https://newfly-asia.huihuishun.com/minio9000/newfly/defaultimg/201903221558039678728.png"}}),s("img",{attrs:{src:"https://newfly-asia.huihuishun.com/minio9000/newfly/defaultimg/201903221558116762556.png"}}),s("img",{attrs:{src:"https://newfly-asia.huihuishun.com/minio9000/newfly/defaultimg/201903221559137131780.png"}}),s("img",{attrs:{src:"https://newfly-asia.huihuishun.com/minio9000/newfly/defaultimg/201903221559246993225.png"}}),s("img",{attrs:{src:"https://newfly-asia.huihuishun.com/minio9000/newfly/defaultimg/201903221600001817402.png"}}),s("img",{attrs:{src:"https://newfly-asia.huihuishun.com/minio9000/newfly/defaultimg/201903221602002389149.png"}}),s("img",{attrs:{src:"https://newfly-asia.huihuishun.com/minio9000/newfly/defaultimg/201903221603042802135.png"}}),s("img",{attrs:{src:"https://newfly-asia.huihuishun.com/minio9000/newfly/defaultimg/201904020022448364094.png"}}),s("img",{attrs:{src:"https://newfly-asia.huihuishun.com/minio9000/newfly/defaultimg/201904020023058777502.png"}}),s("img",{attrs:{src:"https://newfly-asia.huihuishun.com/minio9000/newfly/defaultimg/201904020023172987424.png"}}),s("img",{attrs:{src:"https://newfly-asia.huihuishun.com/minio9000/newfly/defaultimg/201904020023271860143.png"}}),s("img",{attrs:{src:"https://newfly-asia.huihuishun.com/minio9000/newfly/defaultimg/201904020023396093349.png"}}),s("img",{attrs:{src:"https://newfly-asia.huihuishun.com/minio9000/newfly/defaultimg/201904020023502809817.png"}}),s("img",{attrs:{src:"https://newfly-asia.huihuishun.com/minio9000/newfly/defaultimg/201904020024356331075.png"}}),s("img",{attrs:{src:"https://newfly-asia.huihuishun.com/minio9000/newfly/defaultimg/201904020025496356780.png"}}),s("img",{attrs:{src:"https://newfly-asia.huihuishun.com/minio9000/newfly/defaultimg/201904020025599373632.png"}}),s("img",{attrs:{src:"https://newfly-asia.huihuishun.com/minio9000/newfly/defaultimg/201904020026097647095.png"}}),s("img",{attrs:{src:"https://newfly-asia.huihuishun.com/minio9000/newfly/defaultimg/201904020026195869305.png"}}),s("img",{attrs:{src:"https://newfly-asia.huihuishun.com/minio9000/newfly/defaultimg/201904020026299151485.png"}}),s("img",{attrs:{src:"https://newfly-asia.huihuishun.com/minio9000/newfly/defaultimg/201904020026379967268.png"}}),s("img",{attrs:{src:"https://newfly-asia.huihuishun.com/minio9000/newfly/defaultimg/201904020026454671322.png"}}),s("img",{attrs:{src:"https://newfly-asia.huihuishun.com/minio9000/newfly/defaultimg/201904020026535009475.png"}}),s("img",{attrs:{src:"https://newfly-asia.huihuishun.com/minio9000/newfly/defaultimg/201904020027031843138.png"}}),s("img",{attrs:{src:"https://newfly-asia.huihuishun.com/minio9000/newfly/defaultimg/201904020027448995383.png"}}),s("img",{attrs:{src:"https://newfly-asia.huihuishun.com/minio9000/newfly/defaultimg/201904020027553793811.png"}}),s("img",{attrs:{src:"https://newfly-asia.huihuishun.com/minio9000/newfly/defaultimg/201904020028212821482.png"}}),s("img",{attrs:{src:"https://newfly-asia.huihuishun.com/minio9000/newfly/defaultimg/201904020028388356939.png"}}),s("img",{attrs:{src:"https://newfly-asia.huihuishun.com/minio9000/newfly/defaultimg/201904020028481013860.png"}}),s("img",{attrs:{src:"https://newfly-asia.huihuishun.com/minio9000/newfly/defaultimg/201904020029013094341.png"}}),s("img",{attrs:{src:"https://newfly-asia.huihuishun.com/minio9000/newfly/defaultimg/201904020029403092271.png"}}),s("img",{attrs:{src:"https://newfly-asia.huihuishun.com/minio9000/newfly/defaultimg/201904020029546888009.png"}}),s("img",{attrs:{src:"https://newfly-asia.huihuishun.com/minio9000/newfly/defaultimg/headimage_1.jpg"}}),s("img",{attrs:{src:"https://newfly-asia.huihuishun.com/minio9000/newfly/defaultimg/headimage_2.jpg"}}),s("img",{attrs:{src:"https://newfly-asia.huihuishun.com/minio9000/newfly/defaultimg/headimage_3.jpg"}}),s("img",{attrs:{src:"https://newfly-asia.huihuishun.com/minio9000/newfly/defaultimg/headimage_4.jpg"}}),s("img",{attrs:{src:"https://newfly-asia.huihuishun.com/minio9000/newfly/defaultimg/headimage_5.jpg"}}),s("img",{attrs:{src:"https://newfly-asia.huihuishun.com/minio9000/newfly/defaultimg/headimage_6.jpg"}}),s("img",{attrs:{src:"https://newfly-asia.huihuishun.com/minio9000/newfly/defaultimg/headimage_7.jpg"}}),s("img",{attrs:{src:"https://newfly-asia.huihuishun.com/minio9000/newfly/defaultimg/headimage_8.jpg"}}),s("img",{attrs:{src:"https://newfly-asia.huihuishun.com/minio9000/newfly/defaultimg/headimage_9.jpg"}}),s("img",{attrs:{src:"https://newfly-asia.huihuishun.com/minio9000/newfly/defaultimg/headimage_10.jpg"}}),s("img",{attrs:{src:"https://newfly-asia.huihuishun.com/minio9000/newfly/defaultimg/headimage_11.jpg"}}),s("img",{attrs:{src:"https://newfly-asia.huihuishun.com/minio9000/newfly/defaultimg/headimage_12.jpg"}}),s("img",{attrs:{src:"https://newfly-asia.huihuishun.com/minio9000/newfly/defaultimg/headimage_13.jpg"}}),s("img",{attrs:{src:"https://newfly-asia.huihuishun.com/minio9000/newfly/defaultimg/headimage_14.jpg"}}),s("img",{attrs:{src:"https://newfly-asia.huihuishun.com/minio9000/newfly/defaultimg/headimage_15.jpg"}}),s("img",{attrs:{src:"https://newfly-asia.huihuishun.com/minio9000/newfly/defaultimg/headimage_16.jpg"}}),s("img",{attrs:{src:"https://newfly-asia.huihuishun.com/minio9000/newfly/defaultimg/headimage_17.jpg"}}),s("img",{attrs:{src:"https://newfly-asia.huihuishun.com/minio9000/newfly/defaultimg/headimage_18.jpg"}}),s("img",{attrs:{src:"https://newfly-asia.huihuishun.com/minio9000/newfly/defaultimg/headimage_19.jpg"}}),s("img",{attrs:{src:"https://newfly-asia.huihuishun.com/minio9000/newfly/defaultimg/headimage_20.jpg"}}),s("img",{attrs:{src:"https://newfly-asia.huihuishun.com/minio9000/newfly/defaultimg/headimage_21.jpg"}}),s("img",{attrs:{src:"https://newfly-asia.huihuishun.com/minio9000/newfly/defaultimg/headimage_22.jpg"}}),s("img",{attrs:{src:"https://newfly-asia.huihuishun.com/minio9000/newfly/defaultimg/headimage_23.jpg"}}),s("img",{attrs:{src:"https://newfly-asia.huihuishun.com/minio9000/newfly/defaultimg/headimage_24.jpg"}}),s("img",{attrs:{src:"https://newfly-asia.huihuishun.com/minio9000/newfly/defaultimg/headimage_25.jpg"}}),s("img",{attrs:{src:"https://newfly-asia.huihuishun.com/minio9000/newfly/defaultimg/headimage_26.jpg"}}),s("img",{attrs:{src:"https://newfly-asia.huihuishun.com/minio9000/newfly/defaultimg/headimage_27.jpg"}}),s("img",{attrs:{src:"https://newfly-asia.huihuishun.com/minio9000/newfly/defaultimg/headimage_28.jpg"}}),s("img",{attrs:{src:"https://newfly-asia.huihuishun.com/minio9000/newfly/defaultimg/headimage_29.jpg"}}),s("img",{attrs:{src:"https://newfly-asia.huihuishun.com/minio9000/newfly/defaultimg/headimage_30.jpg"}}),s("img",{attrs:{src:"https://newfly-asia.huihuishun.com/minio9000/newfly/defaultimg/headimage_31.jpg"}})])]),s("div",{staticClass:"flex row flex-end"},[s("input",{staticClass:"current-button grey",attrs:{type:"button",value:"取消"},on:{click:function(i){t.selectAvatorVisible=!1}}}),s("input",{staticClass:"current-button light-blue",attrs:{type:"button",value:"确定"}})])])])])],1)])])])])]),s("i-upload",{ref:"uploadAvator",on:{change:t.uploadChange}})],1)},e=[function(){var t=this,i=t.$createElement,s=t._self._c||i;return s("li",{staticClass:"flex row scroll-view-title"},[s("div",{staticClass:"flex-1"},[t._v("头像")]),s("div",{staticClass:"flex-2"},[t._v("机器人编号")]),s("div",{staticClass:"flex-1"},[t._v("用户名")]),s("div",{staticClass:"flex-1"},[t._v("昵称")]),s("div",{staticClass:"flex-1"},[t._v("状态")]),s("div",{staticClass:"flex-3"},[t._v("操作")])])},function(){var t=this,i=t.$createElement,s=t._self._c||i;return s("div",{staticClass:"flex row flex-end"},[s("div",{staticClass:"flex row current-flip"},[s("p",[t._v(" 页码 1 / 2 "),s("span",[t._v("共 20 条")])]),s("div",{staticClass:"flex row"},[s("button",[t._v("上一页")]),s("button",[t._v("下一页")])]),s("input",{staticClass:"current-input",attrs:{type:"text"}}),s("button",{staticClass:"current-button blue"},[t._v("跳转")])])])}],n=(s("ac6a"),s("f3e2"),{data:function(){return{selectAvatorVisible:!1,editVisible:!1,scoresOperationVisible:!1,scoresOperationValue:"上分",scoresOperationOptions:[{value:"上分",label:"上分"},{value:"下分",label:"下分"}],robotList:[{avator:"https://newfly-asia.huihuishun.com/minio9000/newfly/defaultimg/201903221559246993225.png",id:"1234656",name:"robot001",nickname:"桔味美人",open:!1},{avator:"https://newfly-asia.huihuishun.com/minio9000/newfly/defaultimg/201903221559246993225.png",id:"1234656",name:"robot002",nickname:"浪迹天涯",open:!0}],stadus:!1,gameList:[{label:"香港六合彩",checked:!0},{label:"台湾六合彩",checked:!1},{label:"秒速赛车",checked:!1},{label:"极速赛车",checked:!1},{label:"极速飞艇",checked:!1},{label:"F3赛车",checked:!1},{label:"幸运赛车",checked:!1},{label:"澳洲幸运10",checked:!1},{label:"幸运飞艇",checked:!1},{label:"澳洲幸运5",checked:!1},{label:"极速时时彩",checked:!1},{label:"秒速时时彩",checked:!1}]}},methods:{oneKeyOpen:function(){var t=this;this.robotList.forEach(function(i,s){t.robotList[s].open=!0})},oneKeyClose:function(){var t=this;this.robotList.forEach(function(i,s){t.robotList[s].open=!1})},openChange:function(t,i){this.robotList[i].open=t,console.log("e",t)},scoreSet:function(){this.scoresOperationVisible=!0},edit:function(){this.editVisible=!0},del:function(){var t=this;this.$confirm("是否删除当前机器人","",{confirmButtonText:"确定",cancelButtonText:"取消",type:"info"}).then(function(){t.$message({type:"success",message:"删除成功!"})}).catch(function(){t.$message({type:"info",message:"已取消"})})},selectAvator:function(){this.selectAvatorVisible=!0},uploadAvator:function(){this.$refs.uploadAvator.open()},uploadChange:function(t){console.log("上传的头像",t)},stadusChange:function(t){this.stadus=t},change:function(t,i){this.gameList[i].checked=t}}}),l=n,u=(s("a389"),s("2877")),c=Object(u["a"])(l,a,e,!1,null,"32787214",null);i["default"]=c.exports}}]);