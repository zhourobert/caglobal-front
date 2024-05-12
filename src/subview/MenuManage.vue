<script setup lang="ts">


import {ref} from "vue";
import {api} from "@/utils/axiosPackaging";
import {getMenuList, saveMenu} from "@/utils/UrlPackaging";
import type {Menu} from "@/entity/Entity";

const menuVo=ref()

const menuDto=ref({
  supId:null,
  name:"",
  icon:"",
  type:null,
  route:""
})

const dialogVisible = ref(false)

api.get(getMenuList).then((result)=>{
  menuVo.value=result.data.data
})

const submitMenu=()=>{
  dialogVisible.value = false
  api.post(saveMenu,menuDto)
}
</script>

<template>
  <h2>欢迎来到菜单管理</h2>
  <p>这里是后台管理页面的内容区域。</p>




  <div class="manu-table">
    <el-table :data="menuVo" border style="width: 100%">
      <el-table-column prop="supMenuName" label="上级菜单" width="150" />
      <el-table-column prop="name" label="菜单名" width="150" />
      <el-table-column prop="icon" label="图标" width="150" />
      <el-table-column prop="route" label="路由" width="150" />
      <el-table-column prop="type" label="菜单类型" width="150" />
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
        <el-form :model="menuDto" label-width="auto" style="max-width: 600px">
          <el-form-item label="上级菜单">
            <el-select
                v-model="menuDto.supId"
                placeholder="----无----"
                size="large"
                style="width: 240px"
            >
              <el-option
                  v-for="item in menuVo"
                  :key="item.id"
                  :label="item.name"
                  :value="item.id"
              />
            </el-select>
          </el-form-item>
          <el-form-item label="菜单名字">
            <el-input v-model="menuDto.name" placeholder="菜单名字" clearable />
          </el-form-item>

          <el-form-item label="路由地址">
            <el-input v-model="menuDto.route" placeholder="菜单路由" clearable />
          </el-form-item>
          <el-form-item label="菜单类型">
          </el-form-item>
          <el-form-item label="菜单图标">
          </el-form-item>
          <el-button @click="dialogVisible = false">取消</el-button>
          <el-button type="primary" @click="submitMenu">
            提交
          </el-button>
        </el-form>

      </template>
    </el-dialog>

  </div>
</template>

<style scoped>

</style>