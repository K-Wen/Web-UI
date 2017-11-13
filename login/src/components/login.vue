<template>
  <div style="width:400px;">
    <el-card class="box-card">
      <div slot="header">
        <label>登录</label>
        <el-button style="float:right; padding:3px 0" type="text" @click="onRegister">还没有账号? 立即注册</el-button>
      </div>
      <div style="padding:0 10px;">
        <el-form :model="loginForm" :rules="rules" ref="loginForm" label-width="80px">
          <el-form-item label="用户账号" prop="name">
            <el-input type="text" v-model="loginForm['name']"></el-input>
          </el-form-item>
          <el-form-item label="密码" prop="password">
            <el-input :type="passwordType" v-model="loginForm['password']">
              <i class="el-icon-view el-input__icon" slot="suffix" @click="onIconClick(1)"></i>
              <template slot="append">
                <el-tooltip content="忘记密码?" placement="top">
                  <el-button size="small" icon="el-icon-question" @click="onForget"></el-button>
                </el-tooltip>
              </template>
            </el-input>
          </el-form-item>

          <el-form-item label="验证码" prop="vertifyCode">
            <el-input type="text" v-model="loginForm['vertifyCode']">
              <template slot="append">
                <el-tooltip content="点击刷新" placement="top">
                  <el-button @click="onRefreshVertifyCode">5XY7</el-button>
                </el-tooltip>
              </template>
            </el-input>
          </el-form-item>

          <el-form-item>
            <el-button type="primary" @click="onLogin('loginForm')" style="width:260px;">立即登录</el-button>
          </el-form-item>
        </el-form>
      </div>
    </el-card>
    <el-dialog title="注册" :visible.sync="isShowRegister">
      <registerView></registerView>
    </el-dialog>
  </div>
</template>

<script>
import qs from 'qs'
import registerView from './register.vue'
export default {
  name: 'login-view',
  components:{
    registerView
  },
  data() {
    return {
      isLogin: false,
      isShowRegister: false,
      isShowPassword: false,
      loginForm: {
        'name': '',
        'password': '',
        'vertifyCode': '',
      },
      rules: {
        'name': [
          {required: true, message: '请输入用户名', trigger: 'blur'},
        ],
        password: [
          { required: true, message: '请输入密码', trigger: 'blur' },
        ],
        vertifyCode: [
          { required: true, message: '请输入验证码', trigger: 'blur' },
        ],
      },
    }
  },
  computed: {
    passwordType: function() {
      return this.isShowPassword ? 'text' : 'password'
    }
  },
  methods: {
    onIconClick(index) {
      this.isShowPassword = !this.isShowPassword
    },
    onLogin(formName) {
      this.$refs[formName].validate((valid) => {
        if (valid) {
          const user = {}
          for(var property in this.loginForm){
            user[`user.${property}`] = this.loginForm[property]
          }
          console.log(this.loginForm);
          if (this.loginForm.name === '111') {
              console.log(1);
            this.$emit("login", {error: false})
          }else {
            console.log(2);
            this.onResetForm('loginForm')
            const reason = '登录失败, 请重试！'
            this.$emit("login", {error: true, errorMsg: reason})
          }

          // this.$http.post('/yulecheng/welcomeAction_login.action', qs.stringify(user))
          // .then(function (response) {
          //   if (response.data.success) {
          //     // 登录成功
          //     this.$emit("login", {error: false})
          //   }else {
          //     this.onResetForm('loginForm')
          //     const reason = response.data.message || '登录失败, 请重试！'
          //     this.$emit("login", {error: true, errorMsg: reason})
          //   }
          // })
          // .catch(function (error) {
          //   console.log(error);
          // })
        } else {
          return false;
        }
      });
    },
    onRegister() {
      this.isShowRegister = true
      // this.$http.post('/yulecheng/welcomeAction_register.action', {})
      // .then((response) => {
      //   console.log(response)
      //   if (response.data.success) {
      //     this.isShowRegister = true
      //   }else {
      //     alert("response failed, can not open register dialog");
      //   }
      // })
      // .catch((error) => {
      //   console.log("Error ...");
      //   console.log(error);
      // })
    },
    onForget() {
      console.log("forget!");
    },
    onRefreshVertifyCode() {
      console.log("refresh vertify code");
    },
    onResetForm(formName) {
      this.$refs[formName].resetFields();
    }
  }
}

</script>

<style>
</style>
