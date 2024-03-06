<template>
    <div class="login">
        <div class="login-wrapper layui-anim layui-anim-scale">
            <form class="layui-form" onsubmit="return false">
                <h2>六合彩平台</h2>
                <div class="layui-form-item layui-input-icon-group">
                    <label for="username" class="layui-form-label" style="display: none;"></label>
                    <i class="layui-icon layui-icon-username"></i>
                    <input type="text"  id="username" name="username" class="layui-input" placeholder="请输入登录账号"
                        autocomplete="off" lay-vertype="tips" lay-verify="required">
                </div>
                <div class="layui-form-item layui-input-icon-group">
                    <label for="password" class="layui-form-label" style="display: none;"></label>
                    <i class="layui-icon layui-icon-password"></i>
                    <input type="password"  id="password" name="password" class="layui-input" placeholder="请输入登录密码"
                        lay-vertype="tips" lay-verify="required">
                </div>
                <div class="layui-form-item layui-input-icon-group login-captcha-group">
                    <label for="captcha" class="layui-form-label" style="display: none;"></label>
                    <i class="layui-icon layui-icon-auz"></i>
                    <input type="text" id="captcha" name="captcha" class="layui-input" placeholder="请输入验证码" autocomplete="off"
                        lay-vertype="tips" lay-verify="required">
                    <img src="{$entrance}/captcha.html" class="login-captcha"
                        onclick="this.src='{$entrance}/captcha.html?'+Math.random()"
                        width="130px" height="48px" alt="点击刷新验证码">
                </div>
                <div class="layui-form-item">
                    <label for="remember" class="layui-form-label" style="display: none;"></label>
                    <input type="checkbox" id="remember" name="remember" title="记住密码" lay-skin="primary" checked="">
                    <div class="layui-unselect layui-form-checkbox layui-form-checked" lay-skin="primary">
                        <span>记住密码</span><i class="layui-icon layui-icon-ok"></i>
                    </div>
                </div>
                <div class="layui-form-item">
                    <button class="layui-btn layui-btn-fluid layui-btn-default" id="login" lay-filter="loginSubmit" lay-submit="">登录</button>
                </div>
            </form>
        </div>

    </div>

</template>
<script>
export default {
  name: 'loginIndex',
  components: {

  },created () {

  },
  methods: {
  },
  mounted(){

    // layui.use(['form'], function () {
    //     let $ = layui.$;
    //     let form = layui.form;

    //     let theme = waitCache.getItem('theme');
    //     if (theme && theme !== waitConfig.theme) {
    //         $('body').attr('data-theme', theme);
    //     }

    //     //如果是iframe,跳转到顶层
    //     if (window !== top) {
    //         top.location.href = location.href;
    //     }

    //     // 监听提交登录
    //     form.on('submit(loginSubmit)', function(data) {
    //         if (data.field['captcha'].length < 1) {
    //             return;
    //         }
    //         const that = $(this)
    //         rememberPass();
    //         waitUtil.locking(that);
    //         waitUtil.ajax({
    //             url: '{:route("Login/login")}',
    //             type: 'POST',
    //             data: data.field,
    //             fulShow: false,
    //             errShow: false
    //         }).then((res) => {
    //             if (res.code === 0) {
    //                 layer.msg(res.msg, {icon: 1, time: 1000}, function () {
    //                     location.href = '{:route("index")}'
    //                 });
    //             } else {
    //                 layer.msg(res.msg, {icon: 2, time: 1000});
    //                 $('.login-captcha').trigger('click');
    //             }

    //             setTimeout(function () {
    //                 waitUtil.unlock(that);
    //             }, 1500)
    //         }).catch(() => {
    //             waitUtil.unlock(that);
    //         });
    //     });

    //     // 取出密码自动填充
    //     let user = localStorage.getItem('keyName');
    //     let pass = localStorage.getItem('keyPass');
    //     if(user){
    //         $('#username').val(user);
    //     }
    //     if(pass){
    //         $('#password').val(pass);
    //     }

    //     // 记住密码
    //     function rememberPass() {
    //         let strName = $('#username').val();
    //         let strPass = $('#password').val();
    //         if($('#remember').is(':checked')){
    //             localStorage.setItem('keyName', strName);
    //             localStorage.setItem('keyPass', strPass);
    //         }else{
    //             localStorage.removeItem('keyName');
    //             localStorage.removeItem('keyPass');
    //         }
    //     }
    // });
  }
}
</script>
<style type="scss" scoped>
/**  =================== 登录的样式 ===================  **/
/* body, a, dl, dt, dd, li, img, button { cursor: url("@/assets/user/images/cursor.cur"), auto !important; }
body {
    min-height: 100vh;
    background-repeat: no-repeat;
    background-size: cover;
    background-image: url('@/assets/user/images/login.jpg');
} */
.login{
    width: 100%;
    min-height: 100vh;
    background-repeat: no-repeat;
    background-size: cover;
    background-image: url('@/assets/user/images/login.jpg');
}

body::before { position: fixed; top: 0; right: 0; bottom: 0; left: 0; background-color: rgba(0, 0, 0, .2); content: ""; }
.login-wrapper { position: relative; z-index: 2; margin: 0 auto; padding: 20px; max-width: 420px; box-sizing: border-box; }
.login-wrapper .layui-btn { border-color: currentcolor !important; }
.login-wrapper > .layui-form { padding: 25px 30px; border-radius: 4px; background-color: #ffffff; box-shadow: 0 3px 6px -1px rgba(0, 0, 0, .19); box-sizing: border-box; }
.login-wrapper > .layui-form > h2 { margin-bottom: 25px; font-size: 18px; text-align: center; color: #333333; }
.login-wrapper > .layui-form > .layui-form-item { position: relative; margin-bottom: 25px; }
.login-wrapper > .layui-form > .layui-form-item:last-child { margin-bottom: 0; }
.login-wrapper > .layui-form > .layui-form-item > .layui-input { height: 46px; line-height: 46px; border-radius: 2px !important; }
.login-wrapper .layui-input-icon-group > .layui-input { padding-left: 46px; }
.login-wrapper .layui-input-icon-group > .layui-icon { position: absolute; top: 0; left: 0; width: 46px; height: 46px; font-size: 20px; text-align: center; color: #909399; line-height: 46px; }
.login-wrapper > .layui-form > .layui-form-item.login-captcha-group { padding-right: 135px; }
.login-wrapper > .layui-form > .layui-form-item.login-captcha-group > .login-captcha { position: absolute; top: 0; right: 0; width: 120px; height: 46px; border: 1px solid #e6e6e6; border-radius: 2px !important; cursor: pointer; box-sizing: border-box; }
.login-wrapper > .layui-form > .layui-form-item > .layui-form-checkbox { margin: 0 !important; padding-left: 25px; }
.login-wrapper > .layui-form > .layui-form-item > .layui-form-checkbox > .layui-icon { width: 15px !important; height: 15px !important; }
.login-wrapper > .layui-form .layui-btn-fluid { height: 48px; line-height: 48px; font-size: 16px; border-radius: 2px !important; }
.login-wrapper > .layui-form > .layui-form-item.login-oauth-group > a > .layui-icon { font-size: 26px; }
.login-copyright { position: relative; z-index: 1; padding-bottom: 20px; text-align: center; color: #eeeeee; }
.layui-btn { border-color: #5fb878; background-color: #5fb878; }
.layui-link { color: #5fb878 !important; }
.layui-btn-gloomy { background-color: #444c69; }
.layui-btn-danger { background-color: #f56c6c; }
.layui-btn-default { background-color: #009688; }
.layui-btn-forbid,
.layui-btn-forbid:hover { cursor: not-allowed; opacity: 0.65; pointer-events: none; }

@media screen and (min-height: 550px) {
    .login-wrapper { position: absolute; top: 50%; right: 0; left: 0; margin: -250px auto 0; width: 100%; }
    .login-copyright { position: absolute; right: 0; bottom: 0; left: 0; }
}
</style>