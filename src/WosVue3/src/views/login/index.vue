<template>
   <div class="login">
    <div class="login-wrapper">
        <h4 class="title">六合彩平台</h4>
        <el-form ref="ruleFormRef" :model="loginFormData" status-icon :rules="formRules">
            <el-form-item prop="name">
                <el-input v-model="loginFormData.name" autocomplete="off" maxlength="20" placeholder="用户名"  style="width: 380px;height: 45px;"/>
            </el-form-item>
            <el-form-item prop="password">
                <el-input :type="flagType" v-model="loginFormData.password" maxlength="20" placeholder="请输入6-20位登录密码" :show-password="false" autocomplete="new-password"  style="max-width: 380px;height: 45px;">
                        <template #suffix> 
                            <span @click="changeView">
                                <el-icon class="el-input__icon" v-if="flag"><i-ep-Hide /></el-icon>
                                <el-icon class="el-input__icon" v-else-if="!flag"><i-ep-View /></el-icon>
                            </span>
                        </template>
                </el-input>
            </el-form-item>
            <el-form-item prop="verify">
                <div class="bind_code margin_top">
                    <el-input class="code_input" v-model="loginFormData.verify" type="text" placeholder="请输入验证码"  style="height: 45px;"/>
                    <img class="login-verify" :src="verifyImg" alt="" @click="handVerifyChange"/>
                </div>
            </el-form-item>
            <el-form-item>
                <el-button class="loginBtn" type="primary" @click="submitForm(ruleFormRef)">登入</el-button>
            </el-form-item>
            <div class="sign-up">
                <el-link :underline="false" type="primary" @click="handGoRegisterClick">注册账号</el-link>
                <el-link :underline="false" type="primary" @click="handForgotPwdClick">忘记密码</el-link>
            </div>
        </el-form>
      </div>
    </div>
</template>
  <script setup>
  import { reactive, ref,onMounted,getCurrentInstance } from 'vue'
  import { useRoute,useRouter } from "vue-router";
  let { proxy } = getCurrentInstance()
  const router = useRouter();
  const verifyImg = ref(new URL(`@/assets/images/user/imgcode.jpg`, import.meta.url).href);
  const flagType = ref("password");
  const flag = ref(true);
  const btnText=ref("发送验证码")
  const disabled = ref(false)
  const ruleFormRef = ref(null)
  const loginFormData = reactive({
    name: '',
    password: '',
  });
  const formRules = reactive({
    name: [
        { required: true, message: '请输入用户名', trigger: 'blur' },
        { min: 0, max: 20, message: '请输入10-20长度的用户名', trigger: 'blur' },
    ],
    password: [
        {required: true, message: '请输入密码', trigger: 'blur' },
        { min: 0, max: 20, message: '请输入6-20长度的密码', trigger: 'blur' },
    ],
    verify: [
          { required: true, message: "请输入验证码", trigger: "blur" },
    ],
  });

    //切换小眼睛事件
    const changeView = () => {
         flag.value = !flag.value;
         flagType.value = flag.value ? "password" : "text";
     }
       
     const handForgotPwdClick=()=>{
        
     }
     const handGoRegisterClick=()=>{

     }
     const handVerifyChange=()=>{
        ElMessage({
            message: "获取验证码成功",
            type: 'success',
        })
    }

  const submitForm = async () => {
    router.push({name:"agreement"})
    // if (!ruleFormRef) return;
    // ruleFormRef.value.validate((valid) => {
    //   if (valid) {
    //     console.log("submit!");
    //   } else {
    //     return false;
    //   }
    // });
  };
   
  </script>
    <style type="scss" scoped>
    .login{
        width: 100%;
        min-height: 100vh;
        background-repeat: no-repeat;
        background-size: cover;
        background-image: url('@/assets/images/user/login.jpg');
        display: flex;
        align-items: center;
        justify-content: center;
        .login-wrapper { 
            max-width: 520px;
            border-radius: 10px;
            box-sizing: border-box;
            background-color: #fff;
            .title{
                margin-bottom: 25px;
                font-size: 18px;
                text-align: center;
                color: #333333;
            }

            .el-form{
                margin: 20px;
                .bind_code{
                    display: flex;
                    width: 100%;
                    .code_input{
                        flex: 1;
                    }
                    .login-verify{
                        width: 80px;
                        margin-left:10px;
                    }
                }
                
                .loginBtn{
                    width: 100%;
                    height: 45px;
                    margin: auto;
                    font-size: 16px;
                }
            }
            
            .sign-up{
                display: flex;
                justify-content: space-around;
            }
        }
    }
    </style>