<template>
  <div id="app">
    <el-card class="box-card" style="width:700px;">
      <div slot="header" class="clearfix">
        <span>账号信息</span>
      </div>
      <div style="padding:0 10px;">
        <el-form :model="registerForm" :rules="rules" status-icon ref="registerForm" label-width="80px" :inline-message='true'>
          <el-form-item label="用户账号" prop="name">
            <el-input type="text" v-model="registerForm['name']"></el-input>
          </el-form-item>
          <el-form-item label="密码" prop="password">
            <el-input :type="passwordType" v-model="registerForm['password']">
              <i class="el-icon-view el-input__icon" slot="suffix" @click="onIconClick(1)"></i>
            </el-input>
          </el-form-item>
          <el-form-item label="确认密码" prop="confirmPassword">
            <el-input :type="confirmPasswordType" v-model="registerForm['confirmPassword']">
              <i class="el-icon-view el-input__icon" slot="suffix" @click="onIconClick(2)"></i>
            </el-input>
          </el-form-item>

          <el-form-item label="真实姓名" prop="trueName">
            <el-input type="text" v-model="registerForm['trueName']"></el-input>
            <label style="color:#878D99;">*必须与您的银行帐户名称相同, 否则将不能取款!</label>
          </el-form-item>
          <el-form-item label="手机号码" prop="telephone">
            <el-input type="text" v-model="registerForm['telephone']"></el-input>
            <label style="color:#878D99;">请认真填写, 以便有优惠活动可以即时的通知您！</label>
          </el-form-item>
          <el-form-item label="取款密码" prop="withdrawPassowrd">
            <el-input :type="withdrawPassowrdType" v-model="registerForm['withdrawPassowrd']">
            <i class="el-icon-view el-input__icon" slot="suffix" @click="onIconClick(3)"></i>
          </el-input>
          <label style="color:#878D99;">*提款需要验证密码, 请务必牢记!</label>
          </el-form-item>

          <el-form-item>
            <el-button type="primary" @click="onRegister('registerForm')">立即注册</el-button>
            <el-button @click="onResetForm('registerForm')">重置</el-button>
          </el-form-item>
        </el-form>
      </div>
    </el-card>
  </div>
</template>

<script>
import qs from 'qs'

export default {
  name: 'register-view',
  data() {
    const validate = (value) => {
      const pattern = /^[a-zA-Z0-9_]{6,20}$/
      return pattern.test(value)
    }
    const validateName = (rule, value, callback) => {
      if (validate(value)) {
        callback()
      } else {
        callback(new Error('6到20位字符, 可包含字母、数字、下划线'))
      }
    }
    const validatePass = (rule, value, callback) => {
      if (!validate(value)) {
        callback(new Error('6到20位字符, 可包含字母、数字、下划线'))
      } else {
        if (this.registerForm.confirmPassword !== '') {
          this.$refs.registerForm.validateField('confirmPassword');
        }
        callback();
      }
    }
    const validateConfirmPass = (rule, value, callback) => {
      if (value === '') {
        callback(new Error('请再次输入密码'));
      } else if (value !== this.registerForm.password) {
        callback(new Error('两次输入密码不一致'));
      } else {
        callback();
      }
    }
    const validateTelephone = (rule, value, callback) => {
      const pattern = /^\d{1,20}$/
      if (pattern.test(value)) {
        callback()
      } else {
        callback(new Error('不是正确的手机号码格式'))
      }
    }
    return {
      isShowPassword: false,
      isShowConfirmPassword: false,
      isShowWithdrawPassword: false,
      registerForm: {
        'name': '',
        'password': '',
        'confirmPassword': '',
        'trueName': '',
        'telephone': '',
        'withdrawPassowrd': '',
      },
      rules: {
        'name': [
          {required: true, message: '请输入用户名', trigger: 'blur'},
          { validator: validateName }
        ],
        password: [
          { required: true, message: '请输入密码', trigger: 'blur' },
          { validator: validatePass }
        ],
        confirmPassword: [
          { required: true, message: '请再次输入密码', trigger: 'blur' },
          { validator: validateConfirmPass }
        ],
        trueName: [
          { required: true, message: '请输入真实姓名', trigger: 'blur' },
          { min: 1, max: 64, message: '长度在 1 到 64 个字符' }
        ],
        telephone: [
          { required: true, message: '请输入手机号码', trigger: 'blur' },
          { validator: validateTelephone }
        ],
        withdrawPassowrd: [
          { required: true, message: '请输入取款密码', trigger: 'blur' },
          { validator: validateName }
        ],
      },
    }
  },
  computed: {
    passwordType: function() {
      return this.isShowPassword ? 'text' : 'password'
    },
    confirmPasswordType: function() {
      return this.isShowConfirmPassword ? 'text' : 'password'
    },
    withdrawPassowrdType: function() {
      return this.isShowWithdrawPassword ? 'text' : 'password'
    }
  },
  methods: {
    onIconClick(index) {
      if (index === 1) {
        this.isShowPassword = !this.isShowPassword
      }else if (index === 2) {
        this.isShowConfirmPassword = !this.isShowConfirmPassword
      }else {
        this.isShowWithdrawPassword = !this.isShowWithdrawPassword
      }
    },
    onRegister(formName) {
      console.log(1);
      this.$refs[formName].validate((valid) => {
        if (valid) {
          const user = {}
          for(var property in this.registerForm){
            user[`user.${property}`] = this.registerForm[property]
          }
          alert('submit:'+qs.stringify(user));
          const config = {

          }
          this.$http.post('/yulecheng/welcomeAction_add.action', qs.stringify(user))
          .then((response) => {
            this.$alert('您已成功加入会员!', '恭喜', {
              confirmButtonText: '确定',
              type: 'success'
            })
            console.log("Successfully ...");
            console.log(JSON.stringify(response));
          })
          .catch((error) => {
            console.log("Error ...");
            console.log(error);
          })
        } else {
          return false;
        }
      });
    },
    onResetForm(formName) {
      this.$refs[formName].resetFields();
    }
  }
}
</script>

<style>

</style>
