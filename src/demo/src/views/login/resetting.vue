<template>
    <div>
        <h1 class="black-title">重置密码</h1>
<form class="layui-form">
    <label>
        <input type="text" name="mobile" autocomplete="off" placeholder="请输入登录手机号/邮箱"
               class="layui-input reset-mobile" lay-verType="tips" lay-verify="required">
    </label>
    <label class="verify">
        <em class="get_code" data-type="103">获取验证码</em>
        <input type="text" name="code" autocomplete="off" placeholder="请输入验证码"
               class="layui-input" lay-verType="tips" lay-verify="required|number">
    </label>
    <label>
        <input type="password" name="newPassword" autocomplete="off"
               placeholder="请输入6-20位字母、数字或字符"
               class="layui-input" lay-verType="tips" lay-verify="required">
    </label>
    <label>
        <input type="password" name="okPassword" autocomplete="off" placeholder="再次确认密码"
               class="layui-input" lay-verType="tips" lay-verify="required">
    </label>
    <a href="javascript:" class="confirm" lay-filter="resetSubmit" lay-submit>提交</a>
    <div class="go">
        <a href="javascript:" class="jumps">
            <span class="jump">返回账号登录</span>
        </a>
    </div>
</form>

    </div>
</template>