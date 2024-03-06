<template>
   <div class="side_left" id="side">
        <!--用户信息-->
        <div class="user_info">
            <div class="title" sy="0">账户信息 </div>
            <div class="zhanghu">
                <div class="info"><label>用户账号：</label><span style="width:100px;">dubah2(A盘)</span></div>
                <div class="info" style="display:none;"><label>盘口：</label><span>
                <select id="abcd" class="abcd"><option value="A" selected="">A盘</option></select></span></div>
                <div id="account0" class="accounts kedu" style="display: none;">
                    <div class="info" style="display:none;"><label>快开彩额度：</label><span class="kmaxmoney">890.8</span></div>
                    <div class="info"><label>快开彩额度：</label><span class="kmoney">890.8</span></div>
                    <div class="info"><label>未结算金额：</label><span class="kmoneyuse">0</span></div>
                </div>
                <div id="account2" class="accounts dedu" style="display: none;">
                    <div class="info"><label>低频彩额度：</label><span class="maxmoney">0</span></div>
                    <div class="info"><label>可用余额：</label><span class="money">0</span></div>
                    <div class="info" style="display:none;"><label>未结算金额：</label><span class="moneyuse">0</span></div>
                </div>

                <div id="account2" class="accounts fedu">
                    <div class="info" style="display:none;"><label>额度：</label><span class="fmaxmoney">890.8</span></div>
                    <div class="info"><label>快开彩额度：</label><span class="fmoney">890.8</span></div>
                    <div class="info"><label>未结算金额：</label><span class="fmoneyuse">0</span></div>
                </div>
            </div>
        </div>
        <!--下注单信息-->
        <div id="lastBets" style="display: none">
            <table class="table last15">
                <tbody>
                <tr><td>时间</td><td>金额</td><td>内容</td></tr>
                </tbody>
                <tbody class="list"><tr><td class="ml" ml="0" colspan="3" style="text-align: right; padding-right:10px">共0注,合计: 0 </td></tr></tbody>
            </table>
        </div>

        <!--下注确认-->
        <div id="betsBox" style="display: none">
            <div class="ui-dialog-content ui-widget-content" style="width: auto; min-height: 0px; max-height: none; height: auto;">
                <div class="title" style="text-align: center"><span>下注信息确认</span></div>
                <div class="betList">
                    <table class="table">
                        <thead>
                        <tr><td colspan="3">内容</td><td>金额</td></tr>
                        </thead>
                        <tbody id="betlist">
                        </tbody>
                        <tfoot id="betfoot">
                        <tr><td colspan="5" style="text-align: right; padding-right:10px ">共 <span id="bcount">0</span> 注， 合计 <span id="btotal">0.0</span></td></tr>
                        <tr><td colspan="5" class="zt"></td></tr>
                        </tfoot>

                    </table>
                </div>

            </div>
            <div class="ui-dialog-buttonset">
                <button type="button" class="ui-button qr"><span class="ui-button-text">确定</span></button>
                <button type="button" class="ui-button close" role="button"><span class="ui-button-text">取消</span></button>
            </div>
        </div>

        <!--快捷下单按钮-->
        <div id="quick_sec_table" style="display: none">
            <table class="fasttb">
                <thead>
                <tr><th colspan="5">特码下注单</th></tr>
                </thead>
                <tbody>
                <tr class="m"><td style="color: red; font-weight: bold;">01</td><td style="color: green; font-weight: bold;">11</td><td style="color: green; font-weight: bold;">21</td><td style="color: blue; font-weight: bold;">31</td><td style="color: blue; font-weight: bold;">41</td></tr>
                <tr class="m"><td style="color: red; font-weight: bold;">02</td><td style="color: red; font-weight: bold;">12</td><td style="color: green; font-weight: bold;">22</td><td style="color: green; font-weight: bold;">32</td><td style="color: blue; font-weight: bold;">42</td></tr>
                <tr class="m"><td style="color: blue; font-weight: bold;">03</td><td style="color: red; font-weight: bold;">13</td><td style="color: red; font-weight: bold;">23</td><td style="color: green; font-weight: bold;">33</td><td style="color: green; font-weight: bold;">43</td></tr>
                <tr class="m"><td style="color: blue; font-weight: bold;">04</td><td style="color: blue; font-weight: bold;">14</td><td style="color: red; font-weight: bold;">24</td><td style="color: red; font-weight: bold;">34</td><td style="color: green; font-weight: bold;">44</td></tr>
                <tr class="m"><td style="color: green; font-weight: bold;">05</td><td style="color: blue; font-weight: bold;">15</td><td style="color: blue; font-weight: bold;">25</td><td style="color: red; font-weight: bold;">35</td><td style="color: red; font-weight: bold;">45</td></tr>
                <tr class="m"><td style="color: green; font-weight: bold;">06</td><td style="color: green; font-weight: bold;">16</td><td style="color: blue; font-weight: bold;">26</td><td style="color: blue; font-weight: bold;">36</td><td style="color: red; font-weight: bold;">46</td></tr>
                <tr class="m"><td style="color: red; font-weight: bold;">07</td><td style="color: green; font-weight: bold;">17</td><td style="color: green; font-weight: bold;">27</td><td style="color: blue; font-weight: bold;">37</td><td style="color: blue; font-weight: bold;">47</td></tr>
                <tr class="m"><td style="color: red; font-weight: bold;">08</td><td style="color: red; font-weight: bold;">18</td><td style="color: green; font-weight: bold;">28</td><td style="color: green; font-weight: bold;">38</td><td style="color: blue; font-weight: bold;">48</td></tr>
                <tr class="m"><td style="color: blue; font-weight: bold;">09</td><td style="color: red; font-weight: bold;">19</td><td style="color: red; font-weight: bold;">29</td><td style="color: green; font-weight: bold;">39</td><td style="color: green; font-weight: bold;">49</td></tr>
                <tr class="m"><td style="color: blue; font-weight: bold;">10</td><td style="color: blue; font-weight: bold;">20</td><td style="color: red; font-weight: bold;">30</td><td style="color: red; font-weight: bold;">40</td><td style="font-weight: bold;"></td></tr>
                </tbody>
            </table>
            <br>
            <table class="fasttb">
                <tbody>
                <tr>
                    <td>單</td>
                    <td>雙</td>
                    <td>大</td>
                    <td>小</td>
                    <td>前</td>
                    <td>後</td>
                </tr>
                <tr>
                    <td>鼠</td>
                    <td>牛</td>
                    <td>虎</td>
                    <td>兔</td>
                    <td>龍</td>
                    <td>蛇</td>
                </tr>
                <tr>
                    <td>馬</td>
                    <td>羊</td>
                    <td>猴</td>
                    <td>雞</td>
                    <td>狗</td>
                    <td>豬</td>
                </tr>
                <tr>
                    <td>合單</td>
                    <td>合雙</td>
                    <td>尾大</td>
                    <td>尾小</td>
                    <td>家畜</td>
                    <td>野獸</td>
                </tr>

                <!--    <tr>-->
                <!--        <td>内围</td>-->
                <!--        <td>外围</td>-->
                <!--        <td>合大</td>-->
                <!--        <td>合小</td>-->
                <!--    </tr>-->
                <tr>
                    <td>0头</td>
                    <td>0尾</td>
                    <td>1头</td>
                    <td>1尾</td>
                    <td>2头</td>
                    <td>2尾</td>
                </tr>
                <tr>

                    <td>3头</td>
                    <td>3尾</td>
                    <td>4头</td>
                    <td>4尾</td>
                    <td>5尾</td>
                    <td>6尾</td>
                </tr>
                <tr>
                    <td>7尾</td>
                    <td>8尾</td>
                    <td>9尾</td>
                    <td class="red">紅</td>
                    <td class="blue">藍</td>
                    <td class="green">綠</td>
                </tr>

                <tr>
                    <td class="red">紅單</td>
                    <td class="red">紅雙</td>
                    <td class="blue">藍單</td>
                    <td class="blue">藍雙</td>
                    <td class="green">綠單</td>
                    <td class="green">綠雙</td>
                </tr>
                <tr>
                    <td class="red">紅大</td>
                    <td class="red">紅小</td>
                    <td class="green">綠大</td>
                    <td class="green">綠小</td>
                    <td class="blue">藍大</td>
                    <td class="blue">藍小</td>
                </tr>
<!--                <tr>-->
<!--                    <td>金</td>-->
<!--                    <td>木</td>-->
<!--                    <td>水</td>-->
<!--                    <td>火</td>-->
<!--                    <td>土</td>-->
<!--                    <td></td>-->
<!--                </tr>-->

                </tbody><tbody>

                <tr class="kz">
                    <td colspan="2">全选</td>
                    <td colspan="2">反选</td>
                    <td colspan="2">清除</td>

                </tr>
                <tr class="kz">
                    <td colspan="6">
                        <span class="color_lv bold">金额</span> <input class="zje" style="width: 60px;">
                        <input type="button" class="exe button" value="确定">
                        <input type="button" class="back button" value="返回">
                        <input type="button" class="button cancel" style="display: none" value="返回">

                    </td>
                </tr>
                </tbody>
            </table>
        </div>
        <div style="display:none" id="betResultPanel">

            <div class="control s0">
                <a onclick="resetPanel()" href="javascript:void(0)">返 回</a>
            </div>
            <div id="betResultDrawNumber" class="Paneltitle"></div>
            <div class="bresults">
                <ul class="bets" id="betReulstList"></ul>
                <table class="total s0">
                    <tbody>

                    </tbody></table>
            </div>
        </div>


    </div>
</template>
<script type="text/javascript">
const sma = ref([[]])
//在使用时，需要创建一个一维数组，否则会报错。
sma.value["金"] = ref([01,08,09,22,23,30,31,38,39])
sma.value["木"] = ref([04,05,12,13,20,21,34,35,42,43])
sma.value["水"] = ref([10,11,18,19,26,27,40,41,48,49])
sma.value["火"] = ref([06,07,14,15,28,29,36,37,44,45])
sma.value["土"] = ref([02,03,16,17,24,25,32,33,46,47])
sma.value["單"] = ref([01,03,05,07,09,11,13,15,17,19,21,23,25,27,29,31,33,35,37,39,41,43,45,47])
sma.value["雙"] = ref([02,04,06,08,10,12,14,16,18,20,22,24,26,28,30,32,34,36,38,40,42,44,46,48])
sma.value["大"] = ref([25,26,27,28,29,30,31,32,33,34,35,36,37,38,39,40,41,42,43,44,45,46,47,48])
sma.value["小"] = ref([01,02,03,04,05,06,07,08,09,10,11,12,13,14,15,16,17,18,19,20,21,22,23,24])
sma.value["合單"] = ref([01,03,05,07,09,10,12,14,16,18,21,23,25,27,29,30,32,34,36,38,41,43,45,47])
sma.value["合雙"] = ref([02,04,06,08,11,13,15,17,19,20,22,24,26,28,31,33,35,37,39,40,42,44,46,48])
sma.value["尾大"] = ref([05,06,07,08,09,15,16,17,18,19,25,26,27,28,29,35,36,37,38,39,45,46,47,48])
sma.value["尾小"] = ref([01,02,03,04,10,11,12,13,14,20,21,22,23,24,30,31,32,33,34,40,41,42,43,44])
sma.value["合大"] = ref([07,08,09,16,17,18,19,25,26,27,28,29,34,35,36,37,38,39,43,44,45,46,47,48])
sma.value["合小"] = ref([01,02,03,04,05,06,10,11,12,13,14,15,20,21,22,23,24,30,31,32,33,40,41,42])
sma.value["合尾大"] = ref([05,06,07,08,09,14,15,16,17,18,23,24,25,26,27,32,33,34,35,36,41,42,43,44,45])
sma.value["合尾小"] = ref([01,02,03,04,10,11,12,13,19,20,21,22,28,29,30,31,37,38,39,40,46,47,48])
sma.value["紅"] = ref([01,02,07,08,12,13,18,19,23,24,29,30,34,35,40,45,46])
sma.value["藍"] = ref([03,04,09,10,14,15,20,25,26,31,36,37,41,42,47,48])
sma.value["綠"] = ref([05,06,11,16,17,21,22,27,28,32,33,38,39,43,44,49])
sma.value["紅單"] = ref([01,07,13,19,23,29,35,45])
sma.value["紅雙"] = ref([02,08,12,18,24,30,34,40,46])
sma.value["藍單"] = ref([03,09,15,25,31,37,41,47])
sma.value["藍雙"] = ref([04,10,14,20,26,36,42,48])
sma.value["綠單"] = ref([05,11,17,21,27,33,39,43])
sma.value["綠雙"] = ref([06,16,22,28,32,38,44])
sma.value["紅大"] =ref([29,30,34,35,40,45,46])
sma.value["紅小"] =ref([01,02,07,08,12,13,18,19,23,24])
sma.value["藍大"] =ref([25,26,31,36,37,41,42,47,48])
sma.value["藍小"] =ref([03,04,09,10,14,15,20])
sma.value["綠大"] =ref([27,28,32,33,38,39,43,44])
sma.value["綠小"] =ref([05,06,11,16,17,21,22])
sma.value["鼠"] =ref([03,15,27,39])
sma.value["牛"] =ref([02,14,26,38])
sma.value["虎"] =ref([01,13,25,37,49])
sma.value["兔"] =ref([12,24,36,48])
sma.value["龍"] =ref([11,23,35,47])
sma.value["蛇"] =ref([10,22,34,46])
sma.value["馬"] =ref([09,21,33,45])
sma.value["羊"] =ref([08,20,32,44])
sma.value["猴"] =ref([07,19,31,43])
sma.value["雞"] =ref([06,18,30,42])
sma.value["狗"] =ref([05,17,29,41])
sma.value["豬"] =ref([04,16,28,40])
sma.value["野獸"] =ref([01,03,07,10,11,12,13,15,19,22,23,24,25,27,31,34,35,36,37,39,43,46,47,48,49])
sma.value["前"] =ref([01,02,03,10,11,12,13,14,15,22,23,24,25,26,27,34,35,36,37,38,39,46,47,48,49])
sma.value["後"] =ref([04,05,06,07,08,09,16,17,18,19,20,21,28,29,30,31,32,33,40,41,42,43,44,45])
sma.value["0头"] =ref([01,02,03,04,05,06,07,08,09])
sma.value["1头"] =ref([10,11,12,13,14,15,16,17,18,19])
sma.value["2头"] =ref([20,21,22,23,24,25,26,27,28,29])
sma.value["3头"] =ref([30,31,32,33,34,35,36,37,38,39])
sma.value["4头"] =ref([40,41,42,43,44,45,46,47,48,49])
sma.value["0尾"] =ref([10,20,30,40])
sma.value["1尾"] =ref([01,11,21,31,41])
sma.value["2尾"] =ref([02,12,22,32,42])
sma.value["3尾"] =ref([03,13,23,33,43])
sma.value["4尾"] =ref([04,14,24,34,44])
sma.value["5尾"] =ref([05,15,25,35,45])
sma.value["6尾"] =ref([06,16,26,36,46])
sma.value["7尾"] =ref([07,17,27,37,47])
sma.value["8尾"] =ref([08,18,28,38,48])
sma.value["9尾"] =ref([09,19,29,39,49])


// var sma =new Array();
//             sma['金'] = new Array(01,08,09,22,23,30,31,38,39);
//             sma['木'] = new Array(04,05,12,13,20,21,34,35,42,43);
//             sma['水'] = new Array(10,11,18,19,26,27,40,41,48,49);
//             sma['火'] = new Array(06,07,14,15,28,29,36,37,44,45);
//             sma['土'] = new Array(02,03,16,17,24,25,32,33,46,47);
//             sma['單'] = new Array(01,03,05,07,09,11,13,15,17,19,21,23,25,27,29,31,33,35,37,39,41,43,45,47);
//             sma['雙'] = new Array(02,04,06,08,10,12,14,16,18,20,22,24,26,28,30,32,34,36,38,40,42,44,46,48);
//             sma['大'] = new Array(25,26,27,28,29,30,31,32,33,34,35,36,37,38,39,40,41,42,43,44,45,46,47,48);
//             sma['小'] = new Array(01,02,03,04,05,06,07,08,09,10,11,12,13,14,15,16,17,18,19,20,21,22,23,24);
//             sma['合單'] = new Array(01,03,05,07,09,10,12,14,16,18,21,23,25,27,29,30,32,34,36,38,41,43,45,47);
//             sma['合雙'] = new Array(02,04,06,08,11,13,15,17,19,20,22,24,26,28,31,33,35,37,39,40,42,44,46,48);
//             sma['尾大'] = new Array(05,06,07,08,09,15,16,17,18,19,25,26,27,28,29,35,36,37,38,39,45,46,47,48);
//             sma['尾小'] = new Array(01,02,03,04,10,11,12,13,14,20,21,22,23,24,30,31,32,33,34,40,41,42,43,44);
//             sma['合大'] = new Array(07,08,09,16,17,18,19,25,26,27,28,29,34,35,36,37,38,39,43,44,45,46,47,48);
//             sma['合小'] = new Array(01,02,03,04,05,06,10,11,12,13,14,15,20,21,22,23,24,30,31,32,33,40,41,42);
//             sma['合尾大'] = new Array(05,06,07,08,09,14,15,16,17,18,23,24,25,26,27,32,33,34,35,36,41,42,43,44,45);
//             sma['合尾小'] = new Array(01,02,03,04,10,11,12,13,19,20,21,22,28,29,30,31,37,38,39,40,46,47,48);
//             sma['紅'] = new Array(01,02,07,08,12,13,18,19,23,24,29,30,34,35,40,45,46);
//             sma['藍'] = new Array(03,04,09,10,14,15,20,25,26,31,36,37,41,42,47,48);
//             sma['綠'] = new Array(05,06,11,16,17,21,22,27,28,32,33,38,39,43,44,49);
//             sma['紅單'] = new Array(01,07,13,19,23,29,35,45);
//             sma['紅雙'] = new Array(02,08,12,18,24,30,34,40,46);
//             sma['藍單'] = new Array(03,09,15,25,31,37,41,47);
//             sma['藍雙'] = new Array(04,10,14,20,26,36,42,48);
//             sma['綠單'] = new Array(05,11,17,21,27,33,39,43);
//             sma['綠雙'] = new Array(06,16,22,28,32,38,44);
//             sma['紅大'] = new Array(29,30,34,35,40,45,46);
//             sma['紅小'] = new Array(01,02,07,08,12,13,18,19,23,24);
//             sma['藍大'] = new Array(25,26,31,36,37,41,42,47,48);
//             sma['藍小'] = new Array(03,04,09,10,14,15,20);
//             sma['綠大'] = new Array(27,28,32,33,38,39,43,44);
//             sma['綠小'] = new Array(05,06,11,16,17,21,22);
//             sma['鼠'] = new Array(03,15,27,39);
//             sma['牛'] = new Array(02,14,26,38);
//             sma['虎'] = new Array(01,13,25,37,49);
//             sma['兔'] = new Array(12,24,36,48);
//             sma['龍'] = new Array(11,23,35,47);
//             sma['蛇'] = new Array(10,22,34,46);
//             sma['馬'] = new Array(09,21,33,45);
//             sma['羊'] = new Array(08,20,32,44);
//             sma['猴'] = new Array(07,19,31,43);
//             sma['雞'] = new Array(06,18,30,42);
//             sma['狗'] = new Array(05,17,29,41);
//             sma['豬'] = new Array(04,16,28,40);
//             sma['野獸'] = new Array(01,03,07,10,11,12,13,15,19,22,23,24,25,27,31,34,35,36,37,39,43,46,47,48,49);
//             sma['前'] = new Array(01,02,03,10,11,12,13,14,15,22,23,24,25,26,27,34,35,36,37,38,39,46,47,48,49);
//             sma['後'] = new Array(04,05,06,07,08,09,16,17,18,19,20,21,28,29,30,31,32,33,40,41,42,43,44,45);
//             sma['0头'] = new Array(01,02,03,04,05,06,07,08,09);
//             sma['1头'] = new Array(10,11,12,13,14,15,16,17,18,19);
//             sma['2头'] = new Array(20,21,22,23,24,25,26,27,28,29);
//             sma['3头'] = new Array(30,31,32,33,34,35,36,37,38,39);
//             sma['4头'] = new Array(40,41,42,43,44,45,46,47,48,49);
//             sma['0尾'] = new Array(10,20,30,40);
//             sma['1尾'] = new Array(01,11,21,31,41);
//             sma['2尾'] = new Array(02,12,22,32,42);
//             sma['3尾'] = new Array(03,13,23,33,43);
//             sma['4尾'] = new Array(04,14,24,34,44);
//             sma['5尾'] = new Array(05,15,25,35,45);
//             sma['6尾'] = new Array(06,16,26,36,46);
//             sma['7尾'] = new Array(07,17,27,37,47);
//             sma['8尾'] = new Array(08,18,28,38,48);
//             sma['9尾'] = new Array(09,19,29,39,49);
                
// $(".fasttb td").hover(function() {
//     $(this).addClass('hover')
// }, function() {
//     $(this).removeClass('hover')
// });

$(".fasttb tr.m td").each(function(){
    // console.log($(this).html());
    if(!isNaN($(this).html())){
        $(this).css("color",colorm(Number($(this).html())));
        $(this).css("font-weight","bold");
    }
});



$(".fasttb tbody td").click(function() {
    var val = $(this).html();
    var zje = $('.zje').val();

    if (val == '') return false;

    var bname = $(window.frames["frame"].document).find(".main a.click").html();

    console.log('bname',bname);
    var tmp;
    if (bname == '特碼' | bname == '正碼' | bname == '正特') {
        if(!isNaN(val)){


            if($(this).hasClass("selected")){
                $(window.frames["frame"].document).find(".make input:text").each(function(i) {

                    console.log('frame---');
                    var pname = Number($(this).parent().prev().attr('mname'));

                    console.log('frame---');
                    console.log('val',val);
                    console.log('pname',pname);


                    var pid = $(this).parent().attr("pid");
                    if(Number(pname)==Number(val)){
                        $(window.frames["frame"].document).find(".make td.i" + pid).removeClass("selected");
                        $(window.frames["frame"].document).find(".make td.p" + pid).removeClass("selected");
                        $(window.frames["frame"].document).find(".make th.m" + pid).removeClass("selected");
                        $(window.frames["frame"].document).find(".make td.i" + pid+" input.ba").val('');
                        $(window.frames["frame"].document).find(".make td.p" + pid+" input.ba").val('');
                        $(window.frames["frame"].document).find(".make th.m" + pid+" input.ba").val('');
                    }
                });
                $(this).removeClass('selected');
            }else{
                $(window.frames["frame"].document).find(".make input:text").each(function(i) {
                    var pname = Number($(this).parent().prev().attr('mname'));
                    var pid = $(this).parent().attr("pid");
                    console.log('val',val);
                    console.log('pname 289',pname);


                    if(Number(pname)==Number(val)){
                        $(window.frames["frame"].document).find(".make td.i" + pid).addClass("selected");
                        $(window.frames["frame"].document).find(".make td.p" + pid).addClass("selected");
                        $(window.frames["frame"].document).find(".make th.m" + pid).addClass("selected");
                        $(window.frames["frame"].document).find(".make td.i" + pid+" input.ba").val(zje);
                        $(window.frames["frame"].document).find(".make td.p" + pid+" input.ba").val(zje);
                        $(window.frames["frame"].document).find(".make th.m" + pid+" input.ba").val(zje);

                    }
                });
                $(this).addClass('selected');
            }


        }
        else if (val == '反选') {
            $(window.frames["frame"].document).find(".make input:text").each(function(i) {
                var pname = Number($(this).parent().prev().attr('mname'));
                var pid = $(this).parent().attr("pid");
                if (i <= 48) {
                    if ($(this).parent().hasClass("selected")) {
                        $(window.frames["frame"].document).find(".make td.i" + pid).removeClass("selected");
                        $(window.frames["frame"].document).find(".make td.p" + pid).removeClass("selected");
                        $(window.frames["frame"].document).find(".make th.m" + pid).removeClass("selected");
                        $(window.frames["frame"].document).find(".make td.i" + pid+" input.ba").val('');
                        $(window.frames["frame"].document).find(".make td.p" + pid+" input.ba").val('');
                        $(window.frames["frame"].document).find(".make th.m" + pid+" input.ba").val('');
                    } else {
                        $(window.frames["frame"].document).find(".make td.i" + pid).addClass("selected");
                        $(window.frames["frame"].document).find(".make td.p" + pid).addClass("selected");
                        $(window.frames["frame"].document).find(".make th.m" + pid).addClass("selected");
                        $(window.frames["frame"].document).find(".make td.i" + pid+" input.ba").val(zje);
                        $(window.frames["frame"].document).find(".make td.p" + pid+" input.ba").val(zje);
                        $(window.frames["frame"].document).find(".make th.m" + pid+" input.ba").val(zje);
                    }
                }
            });
            if($(".kuai1").hasClass("noselected")){
                $(".fasttb tr.m td").toggleClass("selected");
            }


        }
        else if (val == '全选') {
            $(window.frames["frame"].document).find(".make input:text").each(function(i) {
                var pname = Number($(this).parent().prev().attr('mname'));
                var pid = $(this).parent().attr("pid");
                $(window.frames["frame"].document).find(".make td.i" + pid).addClass("selected");
                $(window.frames["frame"].document).find(".make td.p" + pid).addClass("selected");
                $(window.frames["frame"].document).find(".make th.m" + pid).addClass("selected");
                $(window.frames["frame"].document).find(".make td.i" + pid+" input.ba").val(zje);
                $(window.frames["frame"].document).find(".make td.p" + pid+" input.ba").val(zje);
                $(window.frames["frame"].document).find(".make th.m" + pid+" input.ba").val(zje);
            })
            $('.cancel').click();
        }
        else if (val == '清除' ) {
           $(window.frames["frame"].document).find(".cancel:eq(0)").click();
            $('.cancel').click();
        } else {



            if( val.length >50) return false;
            tmp = sma[val];

            console.log(tmp , '====');
            if ($(this).hasClass('selected')) {
                $('#quick_sec_table .m td').each(function (){
                    var nn = Number($(this).html()) ;
                    if( $.inArray(nn, tmp) != -1){
                       $(this).removeClass("selected");
                    }
                });



                $(window.frames["frame"].document).find(".make input:text").each(function(i) {
                    var pname = Number($(this).parent().prev().attr('mname'));
                    var pid = $(this).parent().attr("pid");
                    if (i <= 48 & $.inArray(pname, tmp) != -1) {
                        $(window.frames["frame"].document).find(".make td.i" + pid).removeClass("selected");
                        $(window.frames["frame"].document).find(".make td.p" + pid).removeClass("selected");
                        $(window.frames["frame"].document).find(".make th.m" + pid).removeClass("selected");
                        console.log('removeClass 361');
                        $(window.frames["frame"].document).find(".make td.i" + pid+" input.ba").val('');
                        $(window.frames["frame"].document).find(".make td.p" + pid+" input.ba").val('');
                        $(window.frames["frame"].document).find(".make th.m" + pid+" input.ba").val('');
                    }

                });
                $(this).removeClass('selected');
            } else {
                var flag = true;
                $(window.frames["frame"].document).find(".make input:text").each(function(i) {
                    var pname = Number($(this).parent().prev().attr('mname'));
                    if (i <= 48 & $.inArray(pname, tmp) != -1 & $(this).parent().hasClass('selected')) {
                        flag = false;
                    }
                });
                if (!flag) {
                    $(".cancel:eq(0)").click();
                }
                $(window.frames["frame"].document).find(".make input:text").each(function(i) {
                    var pname = Number($(this).parent().prev().attr('mname'));
                    var pid = $(this).parent().attr("pid");
                    if (i <= 48 & $.inArray(pname, tmp) != -1) {
                        $(window.frames["frame"].document).find(".make td.i" + pid).addClass("selected");
                        $(window.frames["frame"].document).find(".make td.p" + pid).addClass("selected");
                        $(window.frames["frame"].document).find(".make th.m" + pid).addClass("selected");
                        $(window.frames["frame"].document).find(".make td.i" + pid+" input.ba").val(zje);
                        $(window.frames["frame"].document).find(".make td.p" + pid+" input.ba").val(zje);
                        $(window.frames["frame"].document).find(".make th.m" + pid+" input.ba").val(zje);
                    }

                });

                $(this).addClass('selected');
                 // $('#quick_sec_table .m td').eq(i)

                // console.log($('#quick_sec_table .m td').eq(3).addClass("selected"));

                $('#quick_sec_table .m td').each(function (i){
                    var nn = Number($(this).html()) ;
                    if( $.inArray(nn, tmp) != -1){
                        $(this).addClass("selected");
                    }
                });
            }

        }
    }
    else if (bname == '連碼' | bname == '不中') {
        var mode = Number($(".duoexetb a.on").attr('mode'));
        if (mode == 1) {
            var tb = "duotb"
        } else if (mode == 2) {
            var tb = "mtr"
        } else {
            return false
        }

        if (val == '反选') {
            $("." + tb + " td.names").each(function(i) {
                var pid = $(this).attr("i");
                if (i <= 48) {
                    if ($(this).hasClass("selected")) {
                        $("." + tb + " .m" + pid).removeClass("selected");
                        $(this).removeClass("selected");
                    } else {
                        $("." + tb + " .m" + pid).addClass("selected");
                        $(this).addClass("selected");
                    }
                }
            })
        } else if (val == '全选') {
            $("." + tb + " td.names").each(function(i) {
                var pid = $(this).attr("i");
                $("." + tb + " .m" + pid).addClass("selected");
                $(this).addClass("selected");

            })
        } else if (val == '清除') {
            $(window.frames["frame"].document).find(".cancel:eq(0)").click();
            $(".fasttb tr td").each(function(){
                $(this).removeClass('selected');
            });
        } else {
            tmp = sma[val];
            if ($(this).hasClass('selected')) {
                $("." + tb + " td.names").each(function(i) {
                    var pid = $(this).attr("i");
                    var pname = Number($(this).find("span").html());
                    if (i <= 48 & $.inArray(pname, tmp) != -1) {
                        $("." + tb + " .m" + pid).removeClass("selected");
                        $(this).removeClass("selected");
                    }

                });
                $(this).removeClass('selected');
            } else {
                var flag = true;
                $("." + tb + " td.names").each(function(i) {
                    var pname = $(this).find("span").html();
                    if (i <= 48 & $.inArray(pname, tmp) != -1 & $(this).hasClass('selected')) {
                        flag = false;

                    }
                });
                if (!flag) {
                    $(".cancel:eq(0)").click();
                }
                $("." + tb + " td.names").each(function(i) {
                    var pid = $(this).attr("i");
                    var pname = Number($(this).find("span").html());
                    if (i <= 48 & $.inArray(pname, tmp) != -1) {
                        $("." + tb + " .m" + pid).addClass("selected");
                        $(this).addClass("selected");
                    }
                });
                $(this).addClass('selected');
            }


        }
    }
    $(".zje:eq(0)").focus();
});
// 文本框输入
$(".zje").keyup(function (){
    console.log($(this).val());
    $(window.frames["frame"].document).find(".zje").val($(this).val());
    $(window.frames["frame"].document).find(".zje").click();
    $(this).focus();
});

$('.cancel').click(function (){
    $(window.frames["frame"].document).find(".cancel:eq(0)").click();
    $(".fasttb tr td").each(function(){
        $(this).removeClass('selected');
    });
    // $(".zje").val('');
});
$('.exe').click(function (){
    $(window.frames["frame"].document).find(".exe:eq(0)").click();
});
//快捷方式 返回
$('.back').click(function (){
    $("#side .user_info").show();
    $("#side .betdone").show();
    $("#quick_sec_table").hide();
});
//下注信息确认取消
 $('.close').click(function () {
     $("#side .user_info").show();
     $("#betsBox").hide();
     if($(".last15 .list .ml").attr('ml') >0){
         $('#lastBets').show();
     }
 });




function colorm(m) {
    if ($.inArray(m, sma['紅']) != -1) return "red";
    if ($.inArray(m, sma['藍']) != -1) return "blue";
    if ($.inArray(m, sma['綠']) != -1) return "green"
}
</script>