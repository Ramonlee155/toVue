<template>
    <div>
        <h1 class="black-title">快速注册</h1>
<form class="layui-form">
    <label class="phone">
        <em class="area_code">+86</em>
        <input type="text" name="mobile" autocomplete="off" placeholder="请输入正确的手机号"
               class="layui-input register-mobile" lay-verType="tips" lay-verify="required|phone">
    </label>
    <label class="verify">
        <em class="get_code " data-type="102">获取验证码</em>
        <input type="text" name="code" autocomplete="off" placeholder="请输入验证码"
               class="layui-input" lay-verType="tips" lay-verify="required|number">
    </label>
    <label>
        <input type="text" name="account" autocomplete="off" placeholder="请设登录账号"
               class="layui-input" lay-verType="tips" lay-verify="required">
    </label>
    <label>
        <input type="password" name="password" autocomplete="off"
               placeholder="请输入8-20位字母、数字或字符密码"
               class="layui-input" lay-verType="tips" lay-verify="required|number">
    </label>
    <a href="javascript:" class="confirm" lay-filter="registerSubmit" lay-submit>立即注册</a>
    <a href="javascript:" class="jumps">
        <span class="jump">返回账号登录</span>
    </a>
    <div class="agreement pb-0">
        <label for="agreement" class="layui-hide"></label>
        <input type="checkbox" id="agreement" name="agreement" lay-skin="primary" />
        <div class="compact">
            已阅读并同意
            <a href="{:route('index/protocol', ['type'=>'service'])}" target="_blank">《用户协议》</a> 与
            <a href="{:route('index/protocol', ['type'=>'privacy'])}" target="_blank">《隐私协议》</a>
        </div>
    </div>
</form>

    </div>
</template>