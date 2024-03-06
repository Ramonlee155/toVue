<template>
    <div class="layout-global-header">
    <div class="navigation">
        <div class="container">
            <a class="logo"><img src="@/assets/logo.png" alt="logo"></a>
            <ul class="nav">
                {volist name="navigation" id="vo"}
                    {if !$vo.children}
                        <li class="{:active_url($vo.url)}">
                            <a href="{$vo.url}" target="{$vo.target}">{$vo.name}</a>
                        </li>
                    {else}
                        <li class="children {:active_url($vo.url)}">
                            <a href="javascript:">{$vo.name}</a>
                            <dl>
                                {volist name="$vo.children" id="subItem"}
                                    <dd><a href="{$subItem.url}" target="{$subItem.target}">{$subItem.name}</a></dd>
                                {/volist}
                            </dl>
                        </li>
                    {/if}
                {/volist}
            </ul>
            <ul class="layui-nav">
                {if !$Request.session.userId}
                    <li class="sign-in">
                        <a href="javascript:" id="js-enroll-btn">登录</a> /
                        <a href="javascript:" id="js-signup-btn">注册</a>
                    </li>
                {else}
                    <li class="layui-nav-item">
                        <a class="layui-nav-avatar">
                            <cite>{$userInfo.nickname??'-'}</cite>
                            <img src="@/assets/common/images/avatar.png" alt="avatar">
                        </a>
                        <dl class="layui-nav-child">
                            <dd><a href="{:route('user/index')}">个人中心</a></dd>
                            <dd><a href="{:route('user/collect')}">我的收藏</a></dd>
                            <dd><a href="{:route('login/logout')}">退出登录</a></dd>
                        </dl>
                    </li>
                {/if}
            </ul>
        </div>
    </div>
</div>
</template>
<style type="scss" scoped>
/** 布局头部 **/
.layout-global-header { height: 60px; }
.layout-global-header .navigation { position: fixed; top: 0; z-index: 9999; width: 100%; background: #3a67e4; }
.layout-global-header .navigation .container { display: flex; }
.layout-global-header .navigation .logo { display: flex; align-items: center; width: 160px; height: 50px; }
.layout-global-header .navigation .logo img { max-width: 100%; max-height: 100%; }
.layout-global-header .navigation ul.nav { display: flex; flex: 1; align-items: center; overflow: hidden; }
.layout-global-header .navigation ul.nav li { height: 60px; line-height: 60px; flex-shrink: 0; }
.layout-global-header .navigation ul.nav li.active { background: #345dcd; }
.layout-global-header .navigation ul.nav li:hover { background: #345dcd; }
.layout-global-header .navigation ul.nav li a { position: relative; display: block; padding: 0 28px; font-size: 16px; color: #ffffff; }
.layout-global-header .navigation ul.nav li.children > a::before { position: absolute; top: 28px; right: 12px; border-top: 5px solid #ffffff; border-right: 4px solid transparent; border-left: 4px solid transparent; content: ""; }
.layout-global-header .navigation ul.nav li:hover > dl { display: block; transition: all 300ms; }
.layout-global-header .navigation ul.nav li dl { position: absolute; padding: 5px 0; z-index: 2000; display: none;  min-width: 140px; border-radius: 2px; border: 1px solid #e6e6e6;     box-shadow: 0 6px 12px rgba(0,0,0,0.175); background: #ffffff; transition: all 300ms; }
.layout-global-header .navigation ul.nav li dl dd { line-height: normal; }
.layout-global-header .navigation ul.nav dl dd:hover { background: #f3f3f3; }
.layout-global-header .navigation ul.nav li dl dd a { display: block; line-height: 1; font-size: 15px; color: #677282; padding: 11px 20px; }
.layout-global-header .navigation .layui-nav { display: flex; align-items: center; color: #ffffff; cursor: pointer; background-color: #3a67e4; }
.layout-global-header .navigation .layui-nav .sign-in a { display: inline-block; padding: 0 8px; font-size: 16px; color: #ffffff; }
.layout-global-header .navigation .layui-nav .sign-in a:hover { opacity: .9; }
.layout-global-header .navigation .layui-nav .layui-nav-avatar img { width: 36px; height: 36px; margin-left: 10px; border-radius: 100%; }
.layout-global-header .navigation .layui-nav .layui-nav-avatar cite { font-size: 16px; color: #fff; }
.layout-global-header .navigation .layui-nav .layui-nav-more{ display: none !important; }
.layout-global-header .navigation .layui-nav .layui-nav-child{ text-align: center; }
</style>