<script setup lang="ts">

import {ref} from "vue";
//TODO:使引入不爆红
import {api} from "@/utils/axiosPackaging";
import {login} from "@/utils/UrlPackaging";
import {ElMessage} from "element-plus";
import {jump} from "@/utils/RouterJumpUtils";

const loginDto = ref({
  username: '',
  password: ''
})
const userJwt = ref()

const loginSubmit = () => {
  api.post(login, loginDto).then((res) => {
    if (res.data.code === 200) {
      userJwt.value = res.data.data
      window.localStorage.setItem("userJwt", res.data.data);
      ElMessage({
        showClose: true,
        message: res.data.msg,
        type: "success"
      })
      jump("/admin")
    }
  })
}
</script>

<template>

  <div id="login-box">
    <p>用户登录</p>
    <el-form :model="loginDto">
      <el-form-item label="用户名：">
        <el-input v-model="loginDto.username" clearable/>
      </el-form-item>
      <el-form-item label="密码：">
        <el-input v-model="loginDto.password" type="password" clearable/>
      </el-form-item>
      <el-button type="primary" @click="loginSubmit"/>
    </el-form>

  </div>

</template>

<style scoped>
html,body {
  height: 100%;
}
.page {
  width: 100%;
  height: 100%;
}

#login-box {
  margin: auto;

}
/*TODO:修改登录页面样式使得登录框居中*/
</style>