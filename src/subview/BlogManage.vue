<script setup lang="ts">
import type {Blog} from "@/entity/Entity";
import {api} from "@/utils/axiosPackaging";
import {getBlogList, getCountyList} from "@/utils/UrlPackaging";
import {onMounted, ref} from "vue";
import {Country} from "@/entity/Entity";
import {ElMessageBox} from "element-plus";
// import qullUtils from "@/utils/qullUtils";


let blogReceive=ref();

let blogAdd=ref()

let country:Country=ref();

let blogQuery=ref();




api.get(getBlogList)
.then((result)=>{
  blogReceive=result.data.records;
  console.log(blogReceive)
})


api.get(getCountyList).then(
    (result)=>{
      country.value=result.data.data;
    }
)

const onSubmit = () => {
  console.log('submit!')
}

const dialogVisible = ref(false)



</script>

<template>
  <div class="container">
    <div class="query-conditions">
      <el-form :inline="true" :model="blogQuery" class="demo-form-inline">
        <el-form-item label="文章标题">
          <el-input v-model="blogQuery.title" placeholder="文章标题" clearable />
        </el-form-item>
        <el-form-item label="作者">
          <el-input v-model="blogQuery.author" placeholder="作者" clearable />
        </el-form-item>
        <el-form-item label="来源">
          <el-input v-model="blogQuery.source" placeholder="来源" clearable />
        </el-form-item>
        <el-form-item label="国家" >
          <el-select
              v-model="blogQuery.countryId"
              placeholder="可选国家"
              style="width: 100px;margin-left: 10px;"
              clearable

          >
            <el-option v-for="(item,key) in country" :key="key" :label=item.countryName :value=item.id />
          </el-select>
        </el-form-item>
        <el-form-item>
          <el-button type="primary" @click="onSubmit">Query</el-button>
        </el-form-item>
        <el-form-item>
          <el-button plain type="primary" @click="dialogVisible = true">Add</el-button>
        </el-form-item>


      </el-form>


    </div>


    <el-dialog
        v-model="dialogVisible"
        title="新增文章"
        width="500"
    >
      <template #footer>
        <el-form :model="blogAdd" label-width="auto" style="max-width: 600px">
          <el-form-item label="文章标题">
<!--            <el-input v-model="blogAdd.title" placeholder="文章标题" clearable />-->
          </el-form-item>
          <el-button @click="dialogVisible = false">取消</el-button>
          <el-button type="primary" @click="dialogVisible = false">
            提交文章
          </el-button>

        </el-form>

      </template>
    </el-dialog>

    <div class="blog-table" >
      <el-table :data="blogReceive" border style="width: 100%">
        <el-table-column prop="id" label="id" width="150" />
        <el-table-column prop="author" label="作者" width="150" />
        <el-table-column prop="source" label="来源" width="150" />
        <el-table-column prop="countryId" label="国家id" width="150" />
        <el-table-column prop="title" label="标题" width="150" />
        <el-table-column prop="TypeId" label="文章类型" />
      </el-table>
    </div>
  </div>
</template>

<style scoped>
.container{
  width: inherit;
  height: inherit;
}

</style>