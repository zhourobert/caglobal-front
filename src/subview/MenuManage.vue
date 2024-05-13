<script setup lang="ts">
import { ref, watch } from 'vue'
import { api } from '@/utils/axiosPackaging'
import { getMenuList, saveMenu, updateMenu } from '@/utils/UrlPackaging'
import type { Menu } from '@/entity/Entity'

const menuVo: any = ref([])

const menuDto: any = ref({
  supId: null,
  name: '',
  icon: '',
  type: null,
  route: ''
})

const dialogVisible = ref(false)

const getData = () => {
  api.get(getMenuList).then((result) => {
    menuVo.value = result.data.data
    console.log(menuVo.value)
    menuVo.value = menuVo.value.filter((item: any) => !item.delFlag)
  })
}
getData()
watch(
  () => dialogVisible.value,
  () => {
    if (!dialogVisible.value) {
      menuDto.value = {
        supId: null,
        name: '',
        icon: '',
        type: null,
        route: ''
      }
    }
  }
)
const submitMenu = () => {
  if (dialogType.value == 'add') {
    api.post(saveMenu, { ...menuDto.value })
    // api.post(saveMenu, {
    //   supId: '0',
    //   name: 'test',
    //   type: '1'
    // })
  } else {
    api.post(updateMenu, { ...menuDto.value })
  }

  dialogVisible.value = false
  getData()
}

let dialogType = ref('add')
const edit = (row: any) => {
  dialogType.value = 'edit'
  console.log(row)
  menuDto.value = row
  menuDto.value.supId = +row.supId
  dialogVisible.value = true
}

const deleteClick = (row: any) => {
  api.post(updateMenu, { ...row, delFlag: 1 })
  getData()
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
      <el-table-column label="操作" width="150">
        <template #default="scope">
          <!--        TODO:删除修改逻辑书写完整-->
          <span @click="edit(scope.row)">修改</span> |
          <span @click="deleteClick(scope.row)">删除</span>
        </template>
      </el-table-column>
    </el-table>
    <el-button plain type="primary" @click="dialogVisible = true"
      >Add</el-button
    >

    <el-dialog
      v-model="dialogVisible"
      :title="dialogType == 'add' ? '新增目录' : '编辑目录'"
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
            <el-input
              v-model="menuDto.route"
              placeholder="菜单路由"
              clearable
            />
          </el-form-item>
          <el-form-item label="菜单类型"
            ><el-input
              v-model="menuDto.type"
              placeholder="菜单类型"
              clearable
            />
          </el-form-item>
          <el-form-item label="菜单图标"> </el-form-item>
          <el-button @click="dialogVisible = false">取消</el-button>
          <el-button type="primary" @click="submitMenu"> 提交 </el-button>
        </el-form>
      </template>
    </el-dialog>
  </div>
</template>

<style scoped></style>
