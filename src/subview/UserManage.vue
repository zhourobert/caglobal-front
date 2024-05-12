<script setup lang="ts">

import {ref} from "vue";
import {api} from "@/utils/axiosPackaging";
import {saveMenu} from "@/utils/UrlPackaging";

const userVo=ref()

const userDto=ref({
  username:'',
  password:'',
  authority:null
})

const dialogVisible=ref(false)

const submitUser=()=>{
  dialogVisible.value = false
  api.post(saveMenu,userDto)
}
</script>

<template>
  <h2>欢迎来到用户管理</h2>
  <p>这里是后台管理页面的内容区域。</p>

  <el-table :data="userVo" border style="width: 100%">
    <el-table-column prop="username" label="用户名" width="150" />
    <el-table-column prop="password" label="密码" width="150" />
    <el-table-column prop="updateTime" label="修改时间" width="150" />
    <el-table-column prop="authority" label="权限" width="150" />
    <el-table-column label="操作" width="150" >
      <a href="">修改</a> |  <a href="">删除</a>
    </el-table-column>
  </el-table>

  <el-button plain type="primary" @click="dialogVisible = true">Add</el-button>

  <el-dialog
      v-model="dialogVisible"
      title="新增目录"
      width="500"
  >
    <template #footer>
      <el-form :model="userDto" label-width="auto" style="max-width: 600px">
        <el-form-item label="用户名">
          <el-input v-model="userDto.username" placeholder="菜单名字" clearable />
        </el-form-item>

        <el-form-item label="密码">
          <el-input v-model="userDto.password" type="password" placeholder="菜单路由" clearable />
        </el-form-item>
        <el-form-item label="权限">
        </el-form-item>

        <el-button @click="dialogVisible = false">取消</el-button>
        <el-button type="primary" @click="submitUser">
          提交
        </el-button>
      </el-form>

    </template>
  </el-dialog>
</template>

<style scoped>

</style>