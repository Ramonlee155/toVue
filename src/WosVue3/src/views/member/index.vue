<template>
    <!-- <body class="skin_lhc skin_blue"> -->
    <!-- <div class="sub main" style="display: none;">
                                            <a href="javascript:void(0)" bid="23378685" class="click">特碼</a>
        
                        <a href="javascript:void(0)" bid="23378687">正碼</a>
        
                        <a href="javascript:void(0)" bid="23378688">正特</a>
        
                    <a href="javascript:void(0)" bid="1-6">正特1~6</a>
                <a href="javascript:void(0)" bid="23378689">特肖</a>
        
                        <a href="javascript:void(0)" bid="23378722">半波</a>
        
                        <a href="javascript:void(0)" bid="23378726">五行</a>
        
                        <a href="javascript:void(0)" bid="26000003">特头尾</a>
        
                        <a href="javascript:void(0)" bid="23378707">合肖</a>
        
                        <a href="javascript:void(0)" bid="23378697">一肖</a>
        
                        <a href="javascript:void(0)" bid="23378699">尾數</a>
        
                        <a href="javascript:void(0)" bid="26000004">正肖</a>
        
                        <a href="javascript:void(0)" bid="26000006">总肖七色波</a>
        
                        <a href="javascript:void(0)" bid="23378692">連碼</a>
        
                        <a href="javascript:void(0)" bid="23378714">不中</a>
        
                        <a href="javascript:void(0)" bid="23378747">生肖連</a>
        
                        <a href="javascript:void(0)" bid="23378754">尾數連</a>
        
        
        </div> -->
    <div id="main" class="lottery_body">
        <div id="header" style="display: none;">
            <div class="lottery_info">
                <div class="lottery_info_left floatleft">
                    <button class="button">快速模式</button>
    <!--                <span class="name" id="lotteryName">极速六合彩</span> — <span class="gameName" id="gameName"></span><span class="result">&nbsp;今日输赢：<span id="bresult" class='synow'>0.0</span></span>-->
                </div>
                <div class="lottery_info_right floatright">
    
                    <span id="drawNumber" class="thisqishu" upqishu="">11250989</span>期<span class="cdContainer panstatus" s="0" time0="99999" time1="99999" os="0">&nbsp;&nbsp;距离开盘: <span class="color_lv bold"><span id="cdClose" class="time0">{{openDisk}}</span></span></span>
                    &nbsp;&nbsp;距离开奖：<span class="color_lv bold kjstatus"><span id="cdDraw" class="kjtime" timek="-849718">00:00</span></span>
                    <span id="cdRefresh" style="float:right;width: 50px;"><span>{{drawPrizeTime}}秒</span></span>
    
                </div>
    
                <div class="clearfloat"></div>
            </div>
            <div class="control n_anniu">
                <div class="buttons">
                    <label class="checkdefault"><input type="checkbox" class="checkbox"><span class="color_lv bold">预设</span></label>&nbsp;&nbsp;<label id="quickAmount" class="quickAmount"><span class="color_lv bold">金额</span> <input class="zje"></label>
                    <input type="button" value="确定" class="exe button">
                    <input type="button" value="重置" class="cancel button">
                    <!--<input type="button" id="bntquick" value="快捷投注" class="quickbutton" />-->
                </div>
    
            </div>
        </div>
    
        <div id="bet_panel" class="bet_panel input_panel">
    
            <ul class="tab floatright">
                <li class="tab_title02 smenu">
                    <a href="javascript:void(0)" style="float:right" class="ab" v="B" :class="specialCode==2?'on':''" @click="handSpecialCodeSwitchClick">特碼B</a>
                    <a href="javascript:void(0)" style="float:right" class="ab" v="A" :class="specialCode==1?'on':''" @click="handSpecialCodeSwitchClick">特碼A</a>
                </li>
            </ul>
                    <table class="lists  head"><tbody><tr class="head"><th> 
                <div class="lottery_info_left floatleft">
                    <button class="button" @click="handQuickModeClick">快速模式</button>
    <!--                <span class="name" id="lotteryName">极速六合彩</span> — <span class="gameName" id="gameName"></span><span class="result">&nbsp;今日输赢：<span id="bresult" class='synow'>0.0</span></span>-->
                </div>
                <div class="lottery_info_right floatright">
    
                    <span id="drawNumber" class="thisqishu" upqishu="">11250989</span>期<span class="cdContainer panstatus" s="0" time0="99999" time1="99999" os="0">&nbsp;&nbsp;距离开盘:    <span class="color_lv bold"><span id="cdClose" class="time0">{{openDisk}}</span></span></span>
                    &nbsp;&nbsp;距离开奖：<span class="color_lv bold kjstatus"><span id="cdDraw" class="kjtime" timek="-849718">00:00</span></span>
                    <span id="cdRefresh" style="float:right;width: 50px;"><span>{{drawPrizeTime}}秒</span></span>
    
                </div>
    
                <div class="clearfloat"></div>
             </th></tr></tbody></table>
            <table class="lists table_ball make" style=""><tbody><tr><th class="name m m23378681" pid="23378681"><span class="b01">01</span></th><td class="odds p p23378681" pid="23378681" mname="01" maxje="5000" minje="5"><label class="peilv1">--</label></td><td class="amount i i23378681" pid="23378681"><input type="text" class="ba" disabled="" maxlength="7"></td><th class="name m m23378691" pid="23378691"><span class="b11">11</span></th><td class="odds p p23378691" pid="23378691" mname="11" maxje="5000" minje="5"><label class="peilv1">--</label></td><td class="amount i i23378691" pid="23378691"><input type="text" class="ba" disabled="" maxlength="7"></td><th class="name m m23378701" pid="23378701"><span class="b21">21</span></th><td class="odds p p23378701" pid="23378701" mname="21" maxje="5000" minje="5"><label class="peilv1">--</label></td><td class="amount i i23378701" pid="23378701"><input type="text" class="ba" disabled="" maxlength="7"></td><th class="name m m23378711" pid="23378711"><span class="b31">31</span></th><td class="odds p p23378711" pid="23378711" mname="31" maxje="5000" minje="5"><label class="peilv1">--</label></td><td class="amount i i23378711" pid="23378711"><input type="text" class="ba" disabled="" maxlength="7"></td><th class="name m m23378721" pid="23378721"><span class="b41">41</span></th><td class="odds p p23378721" pid="23378721" mname="41" maxje="5000" minje="5"><label class="peilv1">--</label></td><td class="amount i i23378721" pid="23378721"><input type="text" class="ba" disabled="" maxlength="7"></td></tr><tr><th class="name m m23378682" pid="23378682"><span class="b02">02</span></th><td class="odds p p23378682" pid="23378682" mname="02" maxje="5000" minje="5"><label class="peilv1">--</label></td><td class="amount i i23378682" pid="23378682"><input type="text" class="ba" disabled="" maxlength="7"></td><th class="name m m23378692" pid="23378692"><span class="b12">12</span></th><td class="odds p p23378692" pid="23378692" mname="12" maxje="5000" minje="5"><label class="peilv1">--</label></td><td class="amount i i23378692" pid="23378692"><input type="text" class="ba" disabled="" maxlength="7"></td><th class="name m m23378702" pid="23378702"><span class="b22">22</span></th><td class="odds p p23378702" pid="23378702" mname="22" maxje="5000" minje="5"><label class="peilv1">--</label></td><td class="amount i i23378702" pid="23378702"><input type="text" class="ba" disabled="" maxlength="7"></td><th class="name m m23378712" pid="23378712"><span class="b32">32</span></th><td class="odds p p23378712" pid="23378712" mname="32" maxje="5000" minje="5"><label class="peilv1">--</label></td><td class="amount i i23378712" pid="23378712"><input type="text" class="ba" disabled="" maxlength="7"></td><th class="name m m23378722" pid="23378722"><span class="b42">42</span></th><td class="odds p p23378722" pid="23378722" mname="42" maxje="5000" minje="5"><label class="peilv1">--</label></td><td class="amount i i23378722" pid="23378722"><input type="text" class="ba" disabled="" maxlength="7"></td></tr><tr><th class="name m m23378683" pid="23378683"><span class="b03">03</span></th><td class="odds p p23378683" pid="23378683" mname="03" maxje="5000" minje="5"><label class="peilv1">--</label></td><td class="amount i i23378683" pid="23378683"><input type="text" class="ba" disabled="" maxlength="7"></td><th class="name m m23378693" pid="23378693"><span class="b13">13</span></th><td class="odds p p23378693" pid="23378693" mname="13" maxje="5000" minje="5"><label class="peilv1">--</label></td><td class="amount i i23378693" pid="23378693"><input type="text" class="ba" disabled="" maxlength="7"></td><th class="name m m23378703" pid="23378703"><span class="b23">23</span></th><td class="odds p p23378703" pid="23378703" mname="23" maxje="5000" minje="5"><label class="peilv1">--</label></td><td class="amount i i23378703" pid="23378703"><input type="text" class="ba" disabled="" maxlength="7"></td><th class="name m m23378713" pid="23378713"><span class="b33">33</span></th><td class="odds p p23378713" pid="23378713" mname="33" maxje="5000" minje="5"><label class="peilv1">--</label></td><td class="amount i i23378713" pid="23378713"><input type="text" class="ba" disabled="" maxlength="7"></td><th class="name m m23378723" pid="23378723"><span class="b43">43</span></th><td class="odds p p23378723" pid="23378723" mname="43" maxje="5000" minje="5"><label class="peilv1">--</label></td><td class="amount i i23378723" pid="23378723"><input type="text" class="ba" disabled="" maxlength="7"></td></tr><tr><th class="name m m23378684" pid="23378684"><span class="b04">04</span></th><td class="odds p p23378684" pid="23378684" mname="04" maxje="5000" minje="5"><label class="peilv1">--</label></td><td class="amount i i23378684" pid="23378684"><input type="text" class="ba" disabled="" maxlength="7"></td><th class="name m m23378694" pid="23378694"><span class="b14">14</span></th><td class="odds p p23378694" pid="23378694" mname="14" maxje="5000" minje="5"><label class="peilv1">--</label></td><td class="amount i i23378694" pid="23378694"><input type="text" class="ba" disabled="" maxlength="7"></td><th class="name m m23378704" pid="23378704"><span class="b24">24</span></th><td class="odds p p23378704" pid="23378704" mname="24" maxje="5000" minje="5"><label class="peilv1">--</label></td><td class="amount i i23378704" pid="23378704"><input type="text" class="ba" disabled="" maxlength="7"></td><th class="name m m23378714" pid="23378714"><span class="b34">34</span></th><td class="odds p p23378714" pid="23378714" mname="34" maxje="5000" minje="5"><label class="peilv1">--</label></td><td class="amount i i23378714" pid="23378714"><input type="text" class="ba" disabled="" maxlength="7"></td><th class="name m m23378724" pid="23378724"><span class="b44">44</span></th><td class="odds p p23378724" pid="23378724" mname="44" maxje="5000" minje="5"><label class="peilv1">--</label></td><td class="amount i i23378724" pid="23378724"><input type="text" class="ba" disabled="" maxlength="7"></td></tr><tr><th class="name m m23378685" pid="23378685"><span class="b05">05</span></th><td class="odds p p23378685" pid="23378685" mname="05" maxje="5000" minje="5"><label class="peilv1">--</label></td><td class="amount i i23378685" pid="23378685"><input type="text" class="ba" disabled="" maxlength="7"></td><th class="name m m23378695" pid="23378695"><span class="b15">15</span></th><td class="odds p p23378695" pid="23378695" mname="15" maxje="5000" minje="5"><label class="peilv1">--</label></td><td class="amount i i23378695" pid="23378695"><input type="text" class="ba" disabled="" maxlength="7"></td><th class="name m m23378705" pid="23378705"><span class="b25">25</span></th><td class="odds p p23378705" pid="23378705" mname="25" maxje="5000" minje="5"><label class="peilv1">--</label></td><td class="amount i i23378705" pid="23378705"><input type="text" class="ba" disabled="" maxlength="7"></td><th class="name m m23378715" pid="23378715"><span class="b35">35</span></th><td class="odds p p23378715" pid="23378715" mname="35" maxje="5000" minje="5"><label class="peilv1">--</label></td><td class="amount i i23378715" pid="23378715"><input type="text" class="ba" disabled="" maxlength="7"></td><th class="name m m23378725" pid="23378725"><span class="b45">45</span></th><td class="odds p p23378725" pid="23378725" mname="45" maxje="5000" minje="5"><label class="peilv1">--</label></td><td class="amount i i23378725" pid="23378725"><input type="text" class="ba" disabled="" maxlength="7"></td></tr><tr><th class="name m m23378686" pid="23378686"><span class="b06">06</span></th><td class="odds p p23378686" pid="23378686" mname="06" maxje="5000" minje="5"><label class="peilv1">--</label></td><td class="amount i i23378686" pid="23378686"><input type="text" class="ba" disabled="" maxlength="7"></td><th class="name m m23378696" pid="23378696"><span class="b16">16</span></th><td class="odds p p23378696" pid="23378696" mname="16" maxje="5000" minje="5"><label class="peilv1">--</label></td><td class="amount i i23378696" pid="23378696"><input type="text" class="ba" disabled="" maxlength="7"></td><th class="name m m23378706" pid="23378706"><span class="b26">26</span></th><td class="odds p p23378706" pid="23378706" mname="26" maxje="5000" minje="5"><label class="peilv1">--</label></td><td class="amount i i23378706" pid="23378706"><input type="text" class="ba" disabled="" maxlength="7"></td><th class="name m m23378716" pid="23378716"><span class="b36">36</span></th><td class="odds p p23378716" pid="23378716" mname="36" maxje="5000" minje="5"><label class="peilv1">--</label></td><td class="amount i i23378716" pid="23378716"><input type="text" class="ba" disabled="" maxlength="7"></td><th class="name m m23378726" pid="23378726"><span class="b46">46</span></th><td class="odds p p23378726" pid="23378726" mname="46" maxje="5000" minje="5"><label class="peilv1">--</label></td><td class="amount i i23378726" pid="23378726"><input type="text" class="ba" disabled="" maxlength="7"></td></tr><tr><th class="name m m23378687" pid="23378687"><span class="b07">07</span></th><td class="odds p p23378687" pid="23378687" mname="07" maxje="5000" minje="5"><label class="peilv1">--</label></td><td class="amount i i23378687" pid="23378687"><input type="text" class="ba" disabled="" maxlength="7"></td><th class="name m m23378697" pid="23378697"><span class="b17">17</span></th><td class="odds p p23378697" pid="23378697" mname="17" maxje="5000" minje="5"><label class="peilv1">--</label></td><td class="amount i i23378697" pid="23378697"><input type="text" class="ba" disabled="" maxlength="7"></td><th class="name m m23378707" pid="23378707"><span class="b27">27</span></th><td class="odds p p23378707" pid="23378707" mname="27" maxje="5000" minje="5"><label class="peilv1">--</label></td><td class="amount i i23378707" pid="23378707"><input type="text" class="ba" disabled="" maxlength="7"></td><th class="name m m23378717" pid="23378717"><span class="b37">37</span></th><td class="odds p p23378717" pid="23378717" mname="37" maxje="5000" minje="5"><label class="peilv1">--</label></td><td class="amount i i23378717" pid="23378717"><input type="text" class="ba" disabled="" maxlength="7"></td><th class="name m m23378727" pid="23378727"><span class="b47">47</span></th><td class="odds p p23378727" pid="23378727" mname="47" maxje="5000" minje="5"><label class="peilv1">--</label></td><td class="amount i i23378727" pid="23378727"><input type="text" class="ba" disabled="" maxlength="7"></td></tr><tr><th class="name m m23378688" pid="23378688"><span class="b08">08</span></th><td class="odds p p23378688" pid="23378688" mname="08" maxje="5000" minje="5"><label class="peilv1">--</label></td><td class="amount i i23378688" pid="23378688"><input type="text" class="ba" disabled="" maxlength="7"></td><th class="name m m23378698" pid="23378698"><span class="b18">18</span></th><td class="odds p p23378698" pid="23378698" mname="18" maxje="5000" minje="5"><label class="peilv1">--</label></td><td class="amount i i23378698" pid="23378698"><input type="text" class="ba" disabled="" maxlength="7"></td><th class="name m m23378708" pid="23378708"><span class="b28">28</span></th><td class="odds p p23378708" pid="23378708" mname="28" maxje="5000" minje="5"><label class="peilv1">--</label></td><td class="amount i i23378708" pid="23378708"><input type="text" class="ba" disabled="" maxlength="7"></td><th class="name m m23378718" pid="23378718"><span class="b38">38</span></th><td class="odds p p23378718" pid="23378718" mname="38" maxje="5000" minje="5"><label class="peilv1">--</label></td><td class="amount i i23378718" pid="23378718"><input type="text" class="ba" disabled="" maxlength="7"></td><th class="name m m23378728" pid="23378728"><span class="b48">48</span></th><td class="odds p p23378728" pid="23378728" mname="48" maxje="5000" minje="5"><label class="peilv1">--</label></td><td class="amount i i23378728" pid="23378728"><input type="text" class="ba" disabled="" maxlength="7"></td></tr><tr><th class="name m m23378689" pid="23378689"><span class="b09">09</span></th><td class="odds p p23378689" pid="23378689" mname="09" maxje="5000" minje="5"><label class="peilv1">--</label></td><td class="amount i i23378689" pid="23378689"><input type="text" class="ba" disabled="" maxlength="7"></td><th class="name m m23378699" pid="23378699"><span class="b19">19</span></th><td class="odds p p23378699" pid="23378699" mname="19" maxje="5000" minje="5"><label class="peilv1">--</label></td><td class="amount i i23378699" pid="23378699"><input type="text" class="ba" disabled="" maxlength="7"></td><th class="name m m23378709" pid="23378709"><span class="b29">29</span></th><td class="odds p p23378709" pid="23378709" mname="29" maxje="5000" minje="5"><label class="peilv1">--</label></td><td class="amount i i23378709" pid="23378709"><input type="text" class="ba" disabled="" maxlength="7"></td><th class="name m m23378719" pid="23378719"><span class="b39">39</span></th><td class="odds p p23378719" pid="23378719" mname="39" maxje="5000" minje="5"><label class="peilv1">--</label></td><td class="amount i i23378719" pid="23378719"><input type="text" class="ba" disabled="" maxlength="7"></td><th class="name m m23378729" pid="23378729"><span class="b49">49</span></th><td class="odds p p23378729" pid="23378729" mname="49" maxje="5000" minje="5"><label class="peilv1">--</label></td><td class="amount i i23378729" pid="23378729"><input type="text" class="ba" disabled="" maxlength="7"></td></tr><tr><th class="name m m23378690" pid="23378690"><span class="b10">10</span></th><td class="odds p p23378690" pid="23378690" mname="10" maxje="5000" minje="5"><label class="peilv1">--</label></td><td class="amount i i23378690" pid="23378690"><input type="text" class="ba" disabled="" maxlength="7"></td><th class="name m m23378700" pid="23378700"><span class="b20">20</span></th><td class="odds p p23378700" pid="23378700" mname="20" maxje="5000" minje="5"><label class="peilv1">--</label></td><td class="amount i i23378700" pid="23378700"><input type="text" class="ba" disabled="" maxlength="7"></td><th class="name m m23378710" pid="23378710"><span class="b30">30</span></th><td class="odds p p23378710" pid="23378710" mname="30" maxje="5000" minje="5"><label class="peilv1">--</label></td><td class="amount i i23378710" pid="23378710"><input type="text" class="ba" disabled="" maxlength="7"></td><th class="name m m23378720" pid="23378720"><span class="b40">40</span></th><td class="odds p p23378720" pid="23378720" mname="40" maxje="5000" minje="5"><label class="peilv1">--</label></td><td class="amount i i23378720" pid="23378720"><input type="text" class="ba" disabled="" maxlength="7"></td><td></td><td></td><td></td></tr></tbody></table>
            <br><table class="lists table_zh2"><tbody><tr><th class="name m m23378730" pid="23378730">單</th><td class="odds p p23378730" pid="23378730" mname="單" maxje="10000" minje="5"><label class="peilv1">--</label></td><td class="amount i i23378730" pid="23378730"><input type="text" class="ba" disabled="" maxlength="7"></td><th class="name m m23378732" pid="23378732">大</th><td class="odds p p23378732" pid="23378732" mname="大" maxje="10000" minje="5"><label class="peilv1">--</label></td><td class="amount i i23378732" pid="23378732"><input type="text" class="ba" disabled="" maxlength="7"></td><th class="name m m23378734" pid="23378734">合單</th><td class="odds p p23378734" pid="23378734" mname="合單" maxje="10000" minje="5"><label class="peilv1">--</label></td><td class="amount i i23378734" pid="23378734"><input type="text" class="ba" disabled="" maxlength="7"></td><th class="name m m23378738" pid="23378738">尾大</th><td class="odds p p23378738" pid="23378738" mname="尾大" maxje="10000" minje="5"><label class="peilv1">--</label></td><td class="amount i i23378738" pid="23378738"><input type="text" class="ba" disabled="" maxlength="7"></td></tr><tr><th class="name m m23378731" pid="23378731">雙</th><td class="odds p p23378731" pid="23378731" mname="雙" maxje="10000" minje="5"><label class="peilv1">--</label></td><td class="amount i i23378731" pid="23378731"><input type="text" class="ba" disabled="" maxlength="7"></td><th class="name m m23378733" pid="23378733">小</th><td class="odds p p23378733" pid="23378733" mname="小" maxje="10000" minje="5"><label class="peilv1">--</label></td><td class="amount i i23378733" pid="23378733"><input type="text" class="ba" disabled="" maxlength="7"></td><th class="name m m23378735" pid="23378735">合雙</th><td class="odds p p23378735" pid="23378735" mname="合雙" maxje="10000" minje="5"><label class="peilv1">--</label></td><td class="amount i i23378735" pid="23378735"><input type="text" class="ba" disabled="" maxlength="7"></td><th class="name m m23378739" pid="23378739">尾小</th><td class="odds p p23378739" pid="23378739" mname="尾小" maxje="10000" minje="5"><label class="peilv1">--</label></td><td class="amount i i23378739" pid="23378739"><input type="text" class="ba" disabled="" maxlength="7"></td></tr><tr><th class="name m m97000157" pid="97000157">合大</th><td class="odds p p97000157" pid="97000157" mname="合大" maxje="10000" minje="5"><label class="peilv1">--</label></td><td class="amount i i97000157" pid="97000157"><input type="text" class="ba" disabled="" maxlength="7"></td><th class="name m m97000159" pid="97000159">合小</th><td class="odds p p97000159" pid="97000159" mname="合小" maxje="10000" minje="5"><label class="peilv1">--</label></td><td class="amount i i97000159" pid="97000159"><input type="text" class="ba" disabled="" maxlength="7"></td><th class="name m m97000160" pid="97000160">合尾大</th><td class="odds p p97000160" pid="97000160" mname="合尾大" maxje="10000" minje="5"><label class="peilv1">--</label></td><td class="amount i i97000160" pid="97000160"><input type="text" class="ba" disabled="" maxlength="7"></td><th class="name m m97000162" pid="97000162">合尾小</th><td class="odds p p97000162" pid="97000162" mname="合尾小" maxje="10000" minje="5"><label class="peilv1">--</label></td><td class="amount i i97000162" pid="97000162"><input type="text" class="ba" disabled="" maxlength="7"></td></tr><tr><th class="name m m23378740" pid="23378740" style="color: red;">紅</th><td class="odds p p23378740" pid="23378740" mname="紅" maxje="10000" minje="5"><label class="peilv1">--</label></td><td class="amount i i23378740" pid="23378740"><input type="text" class="ba" disabled="" maxlength="7"></td><th class="name m m23378741" pid="23378741" style="color: blue;">藍</th><td class="odds p p23378741" pid="23378741" mname="藍" maxje="10000" minje="5"><label class="peilv1">--</label></td><td class="amount i i23378741" pid="23378741"><input type="text" class="ba" disabled="" maxlength="7"></td><th class="name m m23378742" pid="23378742" style="color: green;">綠</th><td class="odds p p23378742" pid="23378742" mname="綠" maxje="10000" minje="5"><label class="peilv1">--</label></td><td class="amount i i23378742" pid="23378742"><input type="text" class="ba" disabled="" maxlength="7"></td><td></td><td></td><td></td></tr></tbody></table>
    
            <table class="lists quick_table  ">
                <tfoot>
                <tr>
                    <td colspan="4" height="36" style="font-size:12px;" class="left color_lv bold" id="sbt">
    <!--                    <div class="buttons">-->
    <!--                        <label class="checkdefault"><input type="checkbox" class="checkbox"><span class="color_lv bold">预设</span></label>&nbsp;&nbsp;-->
    <!--                        -->
    <!--                        <input type="button" class="exe button" value="确定"><input type="button" class="button cancel" value="重置">-->
    <!--                    </div>-->
                        &nbsp;&nbsp;
                        <label id="quickAmount" class="quickAmount"><span>金额</span> <input class="zje" maxlength="7"></label>&nbsp;&nbsp;
                        <span class="quick_select">
                        <input type="checkbox" value="全选" onclick="setBigType('tm')" name="bigType">全
                        <input type="checkbox" value="紅" onclick="setBigType('tm')" name="bigType">红
                        <input type="checkbox" value="藍" onclick="setBigType('tm')" name="bigType">蓝
                        <input type="checkbox" value="綠" onclick="setBigType('tm')" name="bigType">绿
                        <input type="checkbox" value="大" onclick="setBigType('tm')" name="bigType">大
                        <input type="checkbox" value="小" onclick="setBigType('tm')" name="bigType">小
                        <input type="checkbox" value="單" onclick="setBigType('tm')" name="bigType">单
                        <input type="checkbox" value="雙" onclick="setBigType('tm')" name="bigType">双
                        <input type="checkbox" value="合單" onclick="setBigType('tm')" name="bigType">合单
                        <input type="checkbox" value="合雙" onclick="setBigType('tm')" name="bigType">合双
                        <input type="checkbox" value="家畜" onclick="setBigType('tm')" name="bigType">家禽
                        <input type="checkbox" value="野獸" onclick="setBigType('tm')" name="bigType">野兽
                        </span>
    
                    </td>
                    <td class="control" style="text-align: right">
                        <input type="button" class="exe button" value="确定">&nbsp;&nbsp;&nbsp;&nbsp;
                        <input type="button" class="button cancel" value="重置">&nbsp;&nbsp;&nbsp;&nbsp;
                    </td>
                </tr>
                </tfoot>
            </table>
    
    
            <table class="duoexetb table_ball" style="display:none;">
                <tbody><tr>
                    <th style="text-align:left;">
                        <ul class="tab">
                            <li class="tab_title02" style="background:none;">
                                <a href="javascript:void(0)" class="mode" mode="1" style="display: block;">普通模式</a>
                                <a href="javascript:void(0)" class="mode" mode="2" style="display: block;">拖头模式</a>
                                <a href="javascript:void(0)" class="mode" mode="3" style="display: none;">生肖對碰</a>
                                <a href="javascript:void(0)" class="mode" mode="4" style="display: none;">尾數對碰</a>
                                <a href="javascript:void(0)" class="mode" mode="5" style="display: none;">混和對碰</a>
    
                            </li>
                        </ul>
                    </th>
                    <td style="text-align:right" class="control"><label id="quickAmount" class="quickAmount"><span class="color_lv bold">單註金额</span> <input class="duoje jes"></label>
                        <input type="button" class="exe button" value="投|註">
                        <input type="button" class="button cancel" value="重置"></td>
                </tr>
            </tbody></table>
            <table style="display:none;" class="ggmesstb table_ball"><tbody><tr><th style="text-align:left;padding-left:5px;">※ 说明:每个正特至多选择二项！    </th><td style="text-align:right;width:50%" class="control">
                总赔率:<label class="ggpeilv red">0</label>&nbsp;&nbsp;&nbsp;
                <label id="quickAmount" class="quickAmount"><span class="color_lv bold">过关金额</span> <input class="ggje jes"></label>
                <input class="exe button" value="确定" type="button"> <input type="button" class="button cancel" value="重置">
            </td></tr>
    
            </tbody></table>
    
    
            <input type="hidden" class="duotb2str" value="<table class='duotb2 table_ball' cellpadding='0' cellspacing='0' >
        <tr class='mtr duotr'><td class='wd100'>
          <TABLE cellpadding='0' cellspacing='0' class='table_ball balls'>
             <tr class='head'><th colspan=5>選擇拖号</th></tr>
             <tr class='m'><td>01</td><td>11</td><td>21</td><td>31</td><td>41</td></tr>
             <tr class='m'><td>02</td><td>12</td><td>22</td><td>32</td><td>42</td></tr>
             <tr class='m'><td>03</td><td>13</td><td>23</td><td>33</td><td>43</td></tr>
             <tr class='m'><td>04</td><td>14</td><td>24</td><td>34</td><td>44</td></tr>
             <tr class='m'><td>05</td><td>15</td><td>25</td><td>35</td><td>45</td></tr>
             <tr class='m'><td>06</td><td>16</td><td>26</td><td>36</td><td>46</td></tr>
             <tr class='m'><td>07</td><td>17</td><td>27</td><td>37</td><td>47</td></tr>
             <tr class='m'><td>08</td><td>18</td><td>28</td><td>38</td><td>48</td></tr>
             <tr class='m'><td>09</td><td>19</td><td>29</td><td>39</td><td>49</td></tr>
             <tr class='m'><td>10</td><td>20</td><td>30</td><td>40</td></tr>
          </TABLE>
        </td></tr>
        <tr class='sxtr1 duotr'><td class='wd100'>
          <TABLE cellpadding='0' cellspacing='0' class='wd100'>
             <tr class='head'><th colspan=6>選擇生肖<label class='tuohao hide'>(拖)</label></th></tr>
             <tr class='m'><td>鼠</td><td>牛</td><td>虎</td><td>兔</td><td>龍</td><td>蛇</td></tr>
             <tr class='m'><td>馬</td><td>羊</td><td>猴</td><td>雞</td><td>狗</td><td>豬</td></tr>
          </TABLE>
        </td></tr>
        <tr class='sxtr2 duotr'><td class='wd100'>
          <TABLE cellpadding='0' cellspacing='0' class='wd100'>
          <tr class='head'><th colspan=6>選擇對碰生肖</th></tr>
             <tr class='m'><td>鼠</td><td>牛</td><td>虎</td><td>兔</td><td>龍</td><td>蛇</td></tr>
             <tr class='m'><td>馬</td><td>羊</td><td>猴</td><td>雞</td><td>狗</td><td>豬</td></tr>
          </TABLE>
        </td></tr>
        <tr class='wstr1 duotr'><td class='wd100'>
          <TABLE cellpadding='0' cellspacing='0' class='wd100'>
          <tr class='head'><th colspan=6>選擇尾數<label class='tuohao hide'>(拖)</label></th></tr>
             <tr class='m'><td>0尾</td><td>1尾</td><td>2尾</td><td>3尾</td><td>4尾</td></tr>
             <tr class='m'><td>5尾</td><td>6尾</td><td>7尾</td><td>8尾</td><td>9尾</td></tr>
          </TABLE>
        </td></tr>
        <tr class='wstr2 duotr'><td class='wd100'>
          <TABLE cellpadding='0' cellspacing='0' class='wd100'>
          <tr class='head'><th colspan=6>選擇對碰尾數</th></tr>
             <tr class='m'><td>0尾</td><td>1尾</td><td>2尾</td><td>3尾</td><td>4尾</td></tr>
             <tr class='m'><td>5尾</td><td>6尾</td><td>7尾</td><td>8尾</td><td>9尾</td></tr>
          </TABLE>
        </td></tr>
     </table>">
            
    
    
            <table class="kuaijue">
                <tbody><tr>
                    <td style="line-height:150%" class="control">
                        <label>快捷下单:用逗号或空格分开，如1=200 2=100</label>
                        <input type="button" class="button sendtext" value="下单">&nbsp;<input type="button" class="button textclear" value="清空">&nbsp;
                        <input type="button" class="button textsm" value="详细说明" @click="handIllustrateClick" v-if="!illustrateVisible">
                        <input type="button" class="button textsm" value="关闭说明" @click="handIllustrateClick" v-else>
                        <br>
                        <textarea cols="90" rows="7" class="textnr"></textarea>
                    </td>
                </tr>
                <tr class="smnr" v-if="illustrateVisible">
                    <td style="text-align:left;padding-left:20px;line-height:150%;">
                        特别：输入项目中有重复号码金额会叠加,如[0尾,蓝]=10,其中10、20金额各为20.<br>
                        一、用逗号或空格分隔项目、用中括号[]分组、用等于号=注明金额<br>
                        如:7=10,12=20,龙=30,小=100&nbsp;&nbsp;
                        如:7=10 12=20 5尾=30 单=100&nbsp;&nbsp;<br>
                        如:[5,26,38,49]=10,[龙,虎]=20&nbsp;&nbsp;
                        如:[5 26 38]=10 [红 虎 家畜]=20<br>
                        二、12生肖可用 s1-s12代替.如s3=10等同虎=10.<br>
                        三、尾数可用 w0-w9代替.如w5=10等同5尾=10<br>
                        四、头数可用 t0-t4代替.<br>
                        五、单,双,大,小,红,蓝,绿,前,后可用拼音输入.如[dan,hong,da]=10<br>
                        六、其他代号:合单[hd],合双[hs],尾大[wd],尾小[wx],家畜[jc],野兽[ys]<br>
                        七、半波用全拼输入，如红单[hongdan],绿小[lvxiao]<br>
                        八、特段输入,如 1-19=20;
                    </td>
    
            </tr></tbody>
        </table>
            <table class="ftlutb lists table_ball" style="position: absolute;width: 500px;background: #fff;display: none;border: 2px;">
                <thead>
                <tr><th colspan="10">番露</th></tr>
                </thead>
                <tbody></tbody>
            </table>
    
            <div id="resultPanel" class="tu" style="display: none;"><table class="tabTitle"><tbody><tr></tr></tbody></table><table class="ballTable"><tbody><tr class="head"><tr class="head"><th> 
                <div class="lottery_info_left floatleft">
                    <button class="button">快速模式</button>
    <!--                <span class="name" id="lotteryName">极速六合彩</span> — <span class="gameName" id="gameName"></span><span class="result">&nbsp;今日输赢：<span id="bresult" class='synow'>0.0</span></span>-->
                </div>
                <div class="lottery_info_right floatright">
    
                    <span id="drawNumber" class="thisqishu" upqishu="">11250989</span>期<span class="cdContainer panstatus" s="0" time0="99999" time1="99999" os="0">&nbsp;&nbsp;距离开盘:<span class="color_lv bold"><span id="cdClose" class="time0">{{openDisk}}</span></span></span>
                    &nbsp;&nbsp;距离开奖：<span class="color_lv bold kjstatus"><span id="cdDraw" class="kjtime" timek="-849718">00:00</span></span>
                    <span id="cdRefresh" style="float:right;width: 50px;"><span>{{drawPrizeTime}}秒</span></span>
    
                </div>
    
                <div class="clearfloat"></div>
             </th></tr></tr></tbody></table><table class="tabTitle"><tbody><tr></tr></tbody></table><table class="tabContents"><tbody><tr></tr></tbody></table></div>
    
    
        </div><!--bet_panel-->
    
    </div><!--main-->
    
    
    <div id="quick_sec_table">
    <table class="fasttb" style="display: none">
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
    <table class="fasttb" style="display: none">
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
            <td class="blue">藍單</td>
            <td class="green">綠單</td>
            <td class="red">紅雙</td>
            <td class="blue">藍雙</td>
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
        <tr>
            <td>金</td>
            <td>木</td>
            <td>水</td>
            <td>火</td>
            <td>土</td>
            <td></td>
        </tr>
    
        </tbody><tbody>
    
        <tr class="kz">
            <td>全选</td>
            <td>反选</td>
            <td>清除</td>
            <td></td>
            <td></td>
            <td></td>
        </tr>
        <tr class="kz">
            <td colspan="4">
                <span class="color_lv bold">金额</span> <input class="zje" style="width: 60px;">
                <input type="button" class="exe button" value="确定" @click="handConfirmSubmitClick"><input type="button" class="button cancel" value="重置" @click="handConfirmResetClick">
    
            </td>
        </tr>
        </tbody>
    </table>
    </div>
    <table id="changlong" class="longr" style="display: none;">
       
         <thead><tr><th colspan="2" class="table_side">两面长龙排行</th></tr></thead>
         <tbody>    
         <tr style="display:none;">
         <th colspan="2" class="longrth">
           <input type="radio" name="longfs" class="ra" value="2">
           无出&nbsp;&nbsp;
           <input type="radio" name="longfs" class="ra" checked="" value="1">
           连出
          
        </th></tr>
        </tbody>
    </table>
    
    <div id="test"></div>
    <iframe name="sfrm" id="sfrm" style="display:none;"></iframe>
    </template>
    <!-- <script language="javascript" src="/js/jquery-1.8.3.min.js"></script>
    <script language="javascript" src="/js/public.js"></script>
    <script language="javascript" src="/js/jquery.cookie.js"></script>
    <script src="/js/default/jsuxj/makeuser.js?v=1.19" language="javascript"></script>
    <script src="/js/default/jsuxj/lhcuser.js?v=1.19" language="javascript"></script> -->
    <script type="text/javascript">
    //    import $ from 'jquery'
        $(function(){myready()});
        var mulu='/uxj/';
        var js=0;
        var sss="make";
        var ustatus = 1;
        // 快速模式
    
    
        $('.head').delegate(".button",'click',function (){
            if($('#quick_sec_table',parent.document).is(":visible")){
                $('#quick_sec_table',parent.document).hide();
                $('#side .user_info',parent.document).show();
                if($(".last15 .list .ml",parent.document).attr('ml') >0){
                    $('#lastBets',parent.document).show();
                }
    
            }else{
                $('#quick_sec_table',parent.document).show();
                $('#side .user_info',parent.document).hide();
                $('#lastBets',parent.document).hide();
            }
            // $(window.parent.document).find("#side .user_info").toggle();
            // $(window.parent.document).find("#side .betdone").toggle();
            // $(window.parent.document).find("").toggle();
        })
        //底部快速选择
        $(".quick_table input[name=\"bigType\"]").change(function (){
            var checked = $(this).attr("checked") ;
            var val = $(this).val() ;
            if("checked" != checked && val == "全选") {
                val = "反选" ;
            }
    
                $("#quick_sec_table .fasttb tbody td").each(function(){
                    // console.log($(this).html());
                    if($(this).html() == val ){
                        $(this).click();
    
                    }
                });
    
    
        });
    
        function setBigType(tm){
    
            // console.log('底部快速选择') ;
        }
    
        //+++++++++++++++++++++++++++++++++++++++++++
        var sdate=new Array();
            sdate[0]="2024-03-06";
            sdate[1]="2024-03-01";
            sdate[2]="2024-03-31";
            sdate[3]="2024-02-01";
            sdate[4]="2024-02-29";
            sdate[5]="2024-03-04";
            sdate[6]="2024-03-10";
            sdate[7]="2024-02-26";
            sdate[8]="2024-03-03";
            sdate[9]="2024-02-03";
            sdate[10]="2024-03-07";
                var style = '';
            var ngid= 200;
            var fenlei= 100;
            var sma =new Array();
                sma['金'] = new Array("01","08","09",22,23,30,31,38,39);
                sma['木'] = new Array("04","05",12,13,20,21,34,35,42,43);
                sma['水'] = new Array(10,11,18,19,26,27,40,41,48,49);
                sma['火'] = new Array("06","07",14,15,28,29,36,37,44,45);
                sma['土'] = new Array("02","03",16,17,24,25,32,33,46,47);
                sma['單'] = new Array("01","03","05","07","09",11,13,15,17,19,21,23,25,27,29,31,33,35,37,39,41,43,45,47);
                sma['雙'] = new Array("02","04","06","08",10,12,14,16,18,20,22,24,26,28,30,32,34,36,38,40,42,44,46,48);
                sma['大'] = new Array(25,26,27,28,29,30,31,32,33,34,35,36,37,38,39,40,41,42,43,44,45,46,47,48);
                sma['小'] = new Array("01","02","03","04","05","06","07","08","09",10,11,12,13,14,15,16,17,18,19,20,21,22,23,24);
                sma['合單'] = new Array("01","03","05","07","09",10,12,14,16,18,21,23,25,27,29,30,32,34,36,38,41,43,45,47);
                sma['合雙'] = new Array("02","04","06","08",11,13,15,17,19,20,22,24,26,28,31,33,35,37,39,40,42,44,46,48);
                sma['尾大'] = new Array("05","06","07","08","09",15,16,17,18,19,25,26,27,28,29,35,36,37,38,39,45,46,47,48);
                sma['尾小'] = new Array("01","02","03","04",10,11,12,13,14,20,21,22,23,24,30,31,32,33,34,40,41,42,43,44);
                sma['合大'] = new Array("07","08","09",16,17,18,19,25,26,27,28,29,34,35,36,37,38,39,43,44,45,46,47,48);
                sma['合小'] = new Array("01","02","03","04","05","06",10,11,12,13,14,15,20,21,22,23,24,30,31,32,33,40,41,42);
                sma['合尾大'] = new Array("05","06","07","08","09",14,15,16,17,18,23,24,25,26,27,32,33,34,35,36,41,42,43,44,45);
                sma['合尾小'] = new Array("01","02","03","04",10,11,12,13,19,20,21,22,28,29,30,31,37,38,39,40,46,47,48);
                sma['紅'] = new Array("01","02","07","08",12,13,18,19,23,24,29,30,34,35,40,45,46);
                sma['藍'] = new Array("03","04","09",10,14,15,20,25,26,31,36,37,41,42,47,48);
                sma['綠'] = new Array("05","06",11,16,17,21,22,27,28,32,33,38,39,43,44,49);
                sma['紅單'] = new Array("01","07",13,19,23,29,35,45);
                sma['紅雙'] = new Array("02","08",12,18,24,30,34,40,46);
                sma['藍單'] = new Array("03","09",15,25,31,37,41,47);
                sma['藍雙'] = new Array("04",10,14,20,26,36,42,48);
                sma['綠單'] = new Array("05",11,17,21,27,33,39,43);
                sma['綠雙'] = new Array("06",16,22,28,32,38,44);
                sma['紅大'] = new Array(29,30,34,35,40,45,46);
                sma['紅小'] = new Array("01","02","07","08",12,13,18,19,23,24);
                sma['藍大'] = new Array(25,26,31,36,37,41,42,47,48);
                sma['藍小'] = new Array("03","04","09",10,14,15,20);
                sma['綠大'] = new Array(27,28,32,33,38,39,43,44);
                sma['綠小'] = new Array("05","06",11,16,17,21,22);
                sma['鼠'] = new Array("03",15,27,39);
                sma['牛'] = new Array("02",14,26,38);
                sma['虎'] = new Array("01",13,25,37,49);
                sma['兔'] = new Array(12,24,36,48);
                sma['龍'] = new Array(11,23,35,47);
                sma['蛇'] = new Array(10,22,34,46);
                sma['馬'] = new Array("09",21,33,45);
                sma['羊'] = new Array("08",20,32,44);
                sma['猴'] = new Array("07",19,31,43);
                sma['雞'] = new Array("06",18,30,42);
                sma['狗'] = new Array("05",17,29,41);
                sma['豬'] = new Array("04",16,28,40);
                sma['野獸'] = new Array("01","03","07",10,11,12,13,15,19,22,23,24,25,27,31,34,35,36,37,39,43,46,47,48,49);
                sma['前'] = new Array("01","02","03",10,11,12,13,14,15,22,23,24,25,26,27,34,35,36,37,38,39,46,47,48,49);
                sma['後'] = new Array("04","05","06","07","08","09",16,17,18,19,20,21,28,29,30,31,32,33,40,41,42,43,44,45);
                sma['0头'] = new Array("01","02","03","04","05","06","07","08","09");
                sma['1头'] = new Array(10,11,12,13,14,15,16,17,18,19);
                sma['2头'] = new Array(20,21,22,23,24,25,26,27,28,29);
                sma['3头'] = new Array(30,31,32,33,34,35,36,37,38,39);
                sma['4头'] = new Array(40,41,42,43,44,45,46,47,48,49);
                sma['0尾'] = new Array(10,20,30,40);
                sma['1尾'] = new Array("01",11,21,31,41);
                sma['2尾'] = new Array("02",12,22,32,42);
                sma['3尾'] = new Array("03",13,23,33,43);
                sma['4尾'] = new Array("04",14,24,34,44);
                sma['5尾'] = new Array("05",15,25,35,45);
                sma['6尾'] = new Array("06",16,26,36,46);
                sma['7尾'] = new Array("07",17,27,37,47);
                sma['8尾'] = new Array("08",18,28,38,48);
                sma['9尾'] = new Array("09",19,29,39,49);
    
    
                        var fastinput=0;
                        var globalpath = '/';
                        var fast=1;
                        var fudong=1;
                        var kjurl='';
                        var pk10num = '1,2,3,9,10';
                        var pk10ts = '8';
                        var menu= "0";
    </script>
    
    
    <script setup>
        import $ from 'jquery'
        import { loadJs } from "@/utils/wmtools"
        import moment from 'moment';
        import { reactive, ref,onMounted,getCurrentInstance } from 'vue'
        let { proxy } = getCurrentInstance()
        const openDisk = ref("00:00:00")
        const drawPrizeTime=ref(6)
        //1.特码A,2.特码B
        const specialCode = ref(1)
        const handSpecialCodeSwitchClick=()=>{
            if(specialCode.value==1){
                specialCode.value = 2
                return
            }
            specialCode.value = 1
        }
    
        //快捷模式,默认关闭
        const quickModeVisible = ref(false)
        const handQuickModeClick=()=>{
            quickModeVisible.value = !quickModeVisible.value
            proxy.$mitt.emit('quickModeVisible',quickModeVisible.value)
        }
    
        //详细说明,默认隐藏
        const illustrateVisible = ref(false)
        const handIllustrateClick=()=>{
            illustrateVisible.value = !illustrateVisible.value 
        }
    
        //确认提交下注
        const handConfirmSubmitClick=()=>{
    
        }
    
        //确认重置下注表单
        const handConfirmResetClick=()=>{
    
        }
    
        const dateCountDown = (targetTime) => {
            let nowTime = new Date().getTime(); //现在时间
            let diff = moment(targetTime).valueOf() - nowTime; //目标时间 - 现在时间 计算时间差
            if(diff <= 0){
                clearInterval(intervalId); //时间到期，关闭定时器
            }
            let day= Math.floor(diff / (1000 * 60 * 60 * 24));
            let hours = Math.floor((diff / (1000 * 60 * 60)) % 24);
            let minutes = Math.floor((diff / (1000 * 60)) % 60);
            let seconds=Math.floor((diff / 1000) % 60);
            if(day>0){
                return `${dat}天 ${hours}时${minutes}分${seconds}秒`
            }
            if(hours>0){
               return `${hours}:${minutes}:${seconds}`
            }
            if(minutes>0){
               return `${minutes}:${seconds}`
            }
            if(seconds>0){
               return `00:${seconds}`
            }
        }
    
        onMounted(() => {
            setInterval(()=>{
                openDisk.value = dateCountDown('2024-03-07 22:58:00')
                if(drawPrizeTime.value==0){
                    drawPrizeTime.value = 6
                    return
                }
                drawPrizeTime.value -= 1
            }, 1000)
            // loadJs('/static/js/jquery-1.8.3.min.js')
            // loadJs('/static/js/public.js')
            // loadJs('/static/js/jquery.cookie.js')
            // loadJs('/static/js/default/jsuxj/makeuser.js?v=1.19')
            // loadJs('/static/js/default/jsuxj/lhcuser.js?v=1.19')
    
        })
    </script>
    
    <!-- <link href="/css/default/jquery-ui.css" rel="stylesheet" type="text/css"> -->

    <!-- 先注释
    <style src="@/assets/css/index/bet.scss" lang="scss"></style>
    <style src="@/assets/css/default/100.scss" lang="scss"></style>
    <style src="@/assets/css/betft.scss" lang="scss"></style>
    <style src="@/assets/css/index/lhc.scss" lang="scss"></style>
    先注释 -->

    <!-- <link href="/css/default/jquery-ui.css" rel="stylesheet" type="text/css">
    <link href="/css/index/bet.css" rel="stylesheet" type="text/css">
    <link href="/css/default/100.css" rel="stylesheet" type="text/css">
    <link href="/css/betft.css" type="text/css" rel="stylesheet">
    <link rel="stylesheet" type="text/css" href="/css/index/lhc.css"> -->
    
    <style type="scss">
    .lottery_body { 
        width: 95% ;
        .tab {
            margin: 0;
            height: 30px;
        }
    }


    .skin_lhc .tab_title02 {
        padding-top: 2px;
        height: 24px;
    }

    .tab_title02 {
        height: 32px;
        line-height: 32px;
        background: url(@/assets/images/tab_bg10.png) repeat-x center bottom;
    }


    .tab_title02 {
        height: 29px;
        line-height: 29px;
        margin-bottom: 10px !important;
        /* background: url(./images/red/tab_bg10.png) repeat-x left -93px; */
    }

    .skin_lhc .tab a {
    background: linear-gradient(to bottom, #f1f1f1 0%, #e2e2e2 100%);
    BORDER: 1px solid #af8300;
    width: 60px;
    height: 24px;
    line-height: 24px;
    border-radius: 5px;
    font-weight: 100;
}

.skin_lhc .tab a.on, .skin_lhc .tab a:hover {
    background: linear-gradient(to bottom, #ff8d52 0%, #ff692a 100%);
    BORDER: 1px solid #af8300;
    width: 60px;
    height: 24px;
    line-height: 24px;
}

.skin_lhc .tab_title02 a:hover, .skin_lhc .tab_title02 .on {
    background: linear-gradient(to bottom, #ff8d52 0%, #ff692a 100%);
    font-weight: bold;
    color: #ffffff;
    border: 1px solid #af8300;
}


.tab_title02 .on {
    color: #5a3500;
    font-weight: bold;
    background: url(@/assets/images/tab_bg10.png) no-repeat left top;
}


.floatleft {
    float: left;
}


.floatright {
    float: right;
    color: #5a3500;
}

.lottery_info_right {
    height: 30px;
    line-height: 30px;
    margin: 0 10px 0 0;
    text-align: right;
}


.skin_lhc .lottery_info_left .button {
    background: linear-gradient(to bottom, #f1f1f1 0%, #e2e2e2 100%);
    BORDER: 1px solid #af8300;
    PADDING: 2px 2px 0 2px;
    CURSOR: pointer;
    font-size: 13px;
    color: #6C2C08;
    height: 23px;
    line-height: 21px;
    width: 65px;
    margin: 3px 0 0 0;
    border-radius: 3px;
}

#drawNumber {
    color: #a40000;
    font-size: 14px;
    font-weight: bold;
}

.color_lv {
    color: #360c00;
}

.bold {
    font-weight: bold;
}

#cdClose {
    color: #00c700;
    font-size: 14px;
    font-weight: bold;
}

#cdDraw {
    color: #ff0000;
    font-size: 14px;
    font-weight: bold;
}

#cdRefresh {
    float: right;
}

#cdRefresh span {
    color: blue;
}

#main .table_ball {
    margin-bottom: 5px;
    background: #fff;
}

.skin_lhc .bet_panel .name {
    background: none repeat 0 0 #FCF9F8;
}

.skin_lhc .table_ball .name {
    width: auto;
}

.table_ball .name {
    width: 35px;
}

.bet_panel .name {
    background: none repeat 0 0 #f8f1d1;
}

.table_zh2 .name {
    width: 60px;
}

.table_zh2 .odds {
    width: 70px;
}

.bet_panel .odds, #BetConfirmBox .odds {
    color: #f00;
    font-weight: bold;
    font-size: 12px;
    font-family: Verdana, Arial, Helvetica, sans-serif;
}


.bet_panel .odds {
    color: red;
    font-weight: bold;
    font-size: 12px;
    font-family: Verdana, Arial, Helvetica, sans-serif;
}

.table_zh2 .amount {
    width: 64px;
}

.amount {
    position: relative;
    background-clip: padding-box;
}


.bet_panel .amount input {
    max-width: 52px;
    border: #d8c28a 1px solid;
    padding: 2px;
    background: #fcfaeb;
}


 .bet_panel .amount input {
    width: 48px;
    background: url(@/assets/images/text_input.gif) repeat-x left top;
    border: #B9C2CB 1px solid;
    padding: 0 2px;
}

.skin_lhc .quick_table {
    background: url(@/assets/images/m_bot_bg.gif) repeat-x left bottom;
    border: 1px solid #dec2b2;
}
.skin_lhc .quick_table tfoot tr td.left {
    text-align: left;
}

.skin_lhc .quick_table tfoot tr td {
    border: none;
    height: 36px;
    line-height: 36px;
}


.skin_lhc .quick_table tfoot tr td.left input {
    max-width: 52px;
    border: #d8c28a 1px solid;
    padding: 2px;
    background: #fcfaeb;
}


.skin_lhc .quick_table tfoot tr td.left input[type="checkbox"] {
    background-color: initial;
    cursor: default;
    appearance: auto;
    box-sizing: border-box;
    margin: 3px 3px 3px 4px;
    padding: initial;
    border: initial;
}

.skin_lhc .control .button {
    background: linear-gradient(to bottom, #f1f1f1 0%, #e2e2e2 100%);
    BORDER: 1px solid #af8300;
    PADDING-RIGHT: 2px;
    PADDING-LEFT: 2px;
    CURSOR: pointer;
    PADDING-TOP: 2px;
    font-size: 13px;
    color: #6C2C08;
    height: 25px;
    line-height: 21px;
    width: 60px;
    margin: 8px 0 0 8px;
    border-radius: 3px;
}

 .control label {
    font-weight: bold;
}

.control label {
    font-weight: bold;
}
.skin_lhc .textnr {
    margin: 10px 0;
}

#resultPanel .tabTitle {
    margin-top: 5px;
    width: 100%;
}

 #resultPanel .ballTable .head {
    color: blue;
}


 #resultPanel .ballTable th, #resultPanel .ballTable td {
    height: 22px;
    line-height: 22px;
}

#resultPanel .ballTable th {
    height: 22px;
    line-height: 22px;
    background-color: #ddd;
    border: 1px solid #d4ba7a;
    border-top: none;
}

 .lottery_info_left {
    color: #000000;
    height: 30px;
    line-height: 30px;
}

#resultPanel .tabTitle {
    margin-top: 5px;
    width: 100%;
}

#changlong, #quick_sec_table {
    float: left;
    background: #fff;
}

#changlong, #quick_sec_table {
    float: left;
    /* margin-left: 3px; */
    width: 170px;
}

.skin_lhc #quick_sec_table table {
    float: none;
    width: 232px;
    text-align: center;
}

.skin_lhc #quick_sec_table td {
    cursor: pointer;
    height: 27px;
}

.skin_lhc #quick_sec_table .button {
    background: linear-gradient(to bottom, #f1f1f1 0%, #e2e2e2 100%);
    BORDER: 1px solid #af8300;
    padding: 1px 2px;
    margin-left: 3px;
}

 #changlong .table_side {
    background: url(@/assets/images/table_headerbg.gif) repeat-x repeat-y left top;
    color: #35406d;
}

 #changlong tbody th {
    background: none repeat 0 0 #FFFFFF;
}

#changlong tbody th {
    text-align: left;
    font-weight: normal;
    text-indent: 3px;
    height: 19px;
}





        .fantan td,.fantan th{height:30px;line-height: 30px;}
        .fantansan td,.fantansan th{height:60px;line-height: 30px;}
    
          .lottery_info , .n_anniu ,.control .buttons{ width: 100% ;}
    
         #side { width: 232px;}
    
    
        .ftlutb td.bai{color: #fff}
        .ftlutb td.red{color:red;}
        .ftlutb td.hei{color:#000;}





    </style>