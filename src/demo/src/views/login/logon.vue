<template>
<div>
    <div class="ac-login layui-tab layui-tab-brief">
    <ul class="layui-tab-title">
        <li class="layui-this">账号登录</li>
        <li>验证码登录</li>
    </ul>
    <div class="layui-tab-content">
        <div class="layui-tab-item layui-show">
            <form class="layui-form">
                <label>
                    <input type="hidden" name="scene" value="account">
                    <input type="text" name="account" autocomplete="off" placeholder="请输入登录手机号/邮箱"
                           class="layui-input" lay-verType="tips" lay-verify="required">
                </label>
                <label>
                    <input type="password" name="password" autocomplete="off" placeholder="请输入密码"
                           class="layui-input" lay-verType="tips" lay-verify="required">
                </label>
                <div class="control">
                    <a href="javascript:" class="forget js-forget-btn">忘记密码?</a>
                </div>
                <a href="javascript:" class="confirm" lay-filter="loginSubmit" lay-submit>登录</a>
                <a href="javascript:" class="jumps">
                    <span class="jump">快速注册</span>
                </a>
                <div class="empower">
                    <i id="wxLogin" class="layui-icon layui-icon-login-wechat"></i>
                </div>
                <div class="treaty">
                    登录即同意本网站<a href="{:route('index/protocol', ['type'=>'privacy'])}" target="_blank">《隐私政策》</a>
                </div>
            </form>
        </div>
        <div class="layui-tab-item">
            <form class="layui-form">
                <label class="phone">
                    <em class="area_code">+86</em>
                    <input type="hidden" name="scene" value="mobile">
                    <input type="text" name="mobile" autocomplete="off" placeholder="短信登录仅限中国大陆用户"
                           class="layui-input login-mobile" lay-verType="tips" lay-verify="required|phone">
                </label>
                <label class="verify">
                    <em class="get_code" data-type="101">获取验证码</em>
                    <input type="text" name="code" autocomplete="off" placeholder="请输入正确验证码"
                           class="layui-input" lay-verType="tips" lay-verify="required|number">
                </label>
                <div class="control">
                    <a href="javascript:" class="forget js-forget-btn">忘记密码?</a>
                </div>
                <a href="javascript:" class="confirm" lay-filter="loginSubmit" lay-submit>登录</a>
                <a href="javascript:" class="jumps">
                    <span class="jump">快速注册</span>
                </a>
                <div class="empower">
                    <i class="layui-icon layui-icon-login-wechat"></i>
                </div>
                <div class="treaty">
                    登录即同意本网站<a href="{:route('index/protocol', ['type'=>'privacy'])}" target="_blank">《隐私政策》</a>
                </div>
            </form>
        </div>
    </div>
</div>

<div class="wx-login" style="display: none;">
    <div class="switch"></div>
    <div class="title">微信扫码登录或注册</div>
    <div class="qrCode">
        <img src="" alt="qr" style="display: none;">
        <div class="loading">
            <i class="layui-icon layui-icon-loading layui-anim layui-anim-rotate layui-anim-loop"></i>
        </div>
        <div class="masking" style="display: none;">
            <p>二维码失效</p>
            <a href="javascript:" class="refresh">刷新</a>
        </div>
    </div>
    <div class="remark">打开微信扫一扫，快速登录/注册</div>
    <div class="treaty">
        登录即同意本网站<a href="{:route('index/protocol', ['type'=>'privacy'])}" target="_blank">《隐私政策》</a>
    </div>
</div>

<div class="ba-mobile" style="display: none;">
    <div class="title">绑定手机号完成登录</div>
    <div class="tips">首次登录需要绑定手机号</div>
    <form class="layui-form">
        <label class="phone">
            <em class="area_code">+86</em>
            <input type="hidden" name="scene" value="ba">
            <input type="hidden" name="sign" value="" class="sign">
            <input type="text" name="mobile" autocomplete="off" placeholder="短信登录仅限中国大陆用户"
                   class="layui-input bind-mobile" lay-verType="tips" lay-verify="required|phone">
        </label>
        <label class="verify">
            <em class="get_code" data-type="105">获取验证码</em>
            <input type="text" name="code" autocomplete="off" placeholder="请输入正确验证码"
                   class="layui-input" lay-verType="tips" lay-verify="required|number">
        </label>
        <a href="javascript:" class="confirm" lay-filter="bindSubmit" lay-submit>登录</a>
        <div class="treaty mt-10 mb-20">
            登录即同意本网站<a href="{:route('index/protocol', ['type'=>'privacy'])}" target="_blank">《隐私政策》</a>
        </div>
    </form>
</div>
</div>  
</template>