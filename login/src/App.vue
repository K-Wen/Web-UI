<template>
  <div id="app" class="container">
    <div class="main-content redBorder">
      <el-container class="redBorder">
        <el-header height="120px" class="redBorder" style="padding:0;">
          <headerView :permission="1"></headerView>
        </el-header>

        <el-main class="redBorder">
          <div style="float:right;">
            <userInfoView v-if='isLogin'></userInfoView>
            <loginView v-else v-on:login="onChildLogin"></loginView>
          </div>
        </el-main>

        <el-footer class="redBorder">Footer</el-footer>
      </el-container>
    </div>
  </div>
</template>

<script>
// asddsa123654
// asddsa123456
import headerView from './components/header.vue'
import loginView from './components/login.vue'
import userInfoView from './components/userInfo.vue'

import qs from 'qs'
export default {
  components:{
    headerView, loginView, userInfoView
  },
  data() {
    return {
      isLogin: false,
    }
  },
  computed: {
    // passwordType: function() {
    //   return this.isShowPassword ? 'text' : 'password'
    // }
  },
  methods: {
    onChildLogin: function({error, errorMsg}) {
      console.log(0);
      if (!error) {
        console.log(1);
        this.isLogin = true
      }else {
        console.log(2);
        this.$alert(errorMsg, '出错了', {
          confirmButtonText: '好的',
          callback: action => {
          }
        });
      }
    }
  },
  mounted: function() {
    // get from session
    this.isLogin = false
  },
}
</script>

<style>
.container {
  background:#2f1c20;
}
.main-content {
  position: relative;
  width: 1200px;
  /*background:#2f1c20;*/
  margin: 0 auto;
}
.redBorder {
  border: 1px solid red;
}
</style>
