<template>
<div id="header" class="header">
    <div class="logo"><span>独霸</span></div>
    <div class="top">
        <div class="menu">
            <div class="menu1">
                <div id="result_info" class="draw_number" v="11250988"><div>极速六合彩</div><div>11250988期开奖</div></div>
            </div>
            <div class="menu2">
                <div class="toplink">
                <span><a href="javascript:void(0);" class="lib">未结明细</a></span> |
                <span><a href="javascript:void(0);" class="baoday">今天已结</a></span> |
                <span><a href="javascript:void(0);" class="bao">两周报表</a></span> |
                <span><a href="javascript:void(0);" class="longs">开奖结果</a></span> |
                <span><a href="javascript:void(0);" class="userinfo">个人资讯</a></span> |
                <span><a href="javascript:void(0);" class="changepass2">修改密码</a></span> |
                <span><a href="javascript:void(0);" class="rule">游戏规则</a></span> |
                <span><a href="/uxj/top.php?logout=yes" class="logout">退出</a></span>
                </div>
                <div id="result_balls" class="T100"><span><b class="b32 a">32</b><span class="a">羊</span></span><span><b class="b11 a">11</b><span class="a">龍</span></span><span><b class="b21 a">21</b><span class="a">馬</span></span><span><b class="b40 a">40</b><span class="a">豬</span></span><span><b class="b35 a">35</b><span class="a">龍</span></span><span><b class="b33 a">33</b><span class="a">馬</span></span><span class="plus">+</span><span><b class="b27 a">27</b><span class="a">鼠</span></span></div>
            </div>
            <div class="menu3">

            </div>
            <div style="clear:both;"></div>
        </div>

        <div class="sub">
            <div class="sub-body">
                    <a href="javascript:void(0)" bid="23378685" class="click selected">特碼</a>
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
            </div>
        </div>
    </div>
</div>
</template>
<style type="scss" scoped>
.skin_lhc #header {
    height: 110px;
    .logo {
        left: 15px;
        position: absolute;
        top: 5px;
        width: 135px;
        span {
            display: block;
            color: #854c00;
            font-size: 30px;
            font-weight: bolder;
            text-align: center;
            letter-spacing: 5px;
            height: 50px;
            line-height: 50px;
            width: 180px;
        }
    }

    .menu{
        color: #854c00;
        height: 74px;
        background: url(@/assets/images/top_mid.gif) repeat-x left top;
        width: 100%;
        a {
            color: #854c00;
            display: inline-block;
            text-align: center;
        }
        .menu1 {
            width: 250px;
               /* background: url(.@/assets/images/red/top_bg.png) no-repeat 0 0; */
            float: left;
            height: 52px;
            margin-left: 200px;
            margin-top: 8px;
            .draw_number {
                height: 50px;
                display: inline-block;
                float: left;
                margin-left: 48px;
                div {
                    display: inline-block;
                    padding-right: 10px;
                    height: 22px;
                    line-height: 22px;
                    text-align: center;
                }
            }
        }
        .menu2 {
            float: right;
            color: #854c00;
            margin: 10px 8px 0;
            line-height: 18px;
            float: right;
            .toplink {
                text-align: right;
            }
            a {
                width: auto;
            }

            .T100 {
                margin: 10px 150px 0 0;
                span {
                    margin-left: 10px;
                    width: 49px;
                    height: 27px;
                    display: inline-block;
                }
                span.plus {
                    margin-left: 10px;
                    width: 9px;
                    height: 27px;
                    line-height: 27px;
                    display: inline-block;
                    position: relative;
                    top: -10px;
                }
                b.a {
                    float: left;
                    width: 23px;
                    height: 23px;
                    line-height: 22px;
                    text-align: center;
                    display: inline-block;
                    font-size: 12px;
                    color: #fff;
                }

                span.a {
                    /* display: inline-block; */
                    display: block;
                    float: left;
                    width: 7px;
                    height: 27px;
                    line-height: 27px;
                    margin-left: 5px;
                }
            }


        }

    }

    .sub {
        height: 31px;
        background: #FCF9F8;
        border-top: 1px solid #dec2b2;
        border-bottom: 1px solid #dec2b2;
        width: 100%;
        color: #999;
        position: relative;
        .sub-body{
            margin-left: 250px;
            height: 100%;
            line-height: 30px;
            a {
                color: #444;
                padding: 0.25em 1em;
                -webkit-box-sizing: border-box;
                -moz-box-sizing: border-box;
                box-sizing: border-box;
                border: 1px solid #e6e6e6;
                background: linear-gradient(to bottom, #f1f1f1 0%, #e2e2e2 100%);
                margin: auto 2px;
            }
            a:hover,.selected {
                color: #fff;
                /* font-weight: bold; */
                border: 1px solid #ff6e39;
                background: linear-gradient(to bottom, #ff8d52 0%, #ff692a 100%);
            }
        }
    }
}
</style>