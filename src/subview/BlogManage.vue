<script setup lang="ts">
import type {Blog} from "@/entity/Entity";
import {api} from "@/utils/axiosPackaging";
import {addBlog, fileDownloading, fileUploading, getBlogList, getCountyList, getTypeList} from "@/utils/UrlPackaging";
import { ref} from "vue";

import Editor from '@/utils/QuillUtils.vue'

const getMsg = (val) => {
  blogAdd.value.text = val
}


let blogReceive=ref();

let blogAdd=ref({
  title:"",
  author:"",
  source:"",
  text:"",
  countryId:null,
  typeId:null
})

let country=ref();

let type=ref();

let blogQuery=ref({
  title:"",
  author:"",
  source:"",
  countryId:null
});




api.get(getBlogList)
.then((result)=>{
  blogReceive=result.data.data.records;
  console.log(blogReceive)
})


api.get(getCountyList).then(
    (result)=>{
      country.value=result.data.data;
    }
)

api.get(getTypeList).then(
    (result)=>{
      type.value=result.data.data;
    }
)

const onSubmit = () => {
  console.log('submit!')
}

const dialogVisible = ref(false)


const blogSubmit=()=>{
  api.post(addBlog,blogAdd.value).then(res=>{
    console.log(res.data)
    dialogVisible.value = false
  })

 const editorOption=ref( {
    modules: {
      imageUploader: {
        upload: file => {
          return new Promise((resolve, reject) => {

            const formData = new FormData();
            formData.append("file", file);

            api.post(fileUploading, formData)
                .then(res => {
                  resolve(res.data.data)
                })
                .catch(error => {
                  reject("upload failed")
                })
          })
        }
      },
      toolbar: [
        ['bold', 'italic', 'underline', 'strike'],
        [{ 'size': ['small', false, 'large', 'huge'] }],
        [{ 'font': [] }],
        [{ 'align': [] }],
        [{ 'list': 'ordered' }, { 'list': 'bullet' }],
        [{ 'indent': '-1' }, { 'indent': '+1' }],
        [{ 'header': 1 }, { 'header': 2 }],
        ['image'],
        [{ 'direction': 'rtl' }],
        [{ 'color': [] }, { 'background': [] }]
      ]
    },
    placeholder: '请输入内容...'
  })

}
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
        width="800"
    >
      <template #footer>
        <el-form :model="blogAdd" label-width="auto" style="max-width: 800px">
          <el-form-item label="文章标题">
            <el-input v-model="blogAdd.title" placeholder="文章标题" clearable />
          </el-form-item>
          <el-form-item label="文章类型">
            <el-select
                v-model="blogAdd.typeId"
                placeholder="Select"
                size="large"
                style="width: 240px"
            >
              <el-option
                  v-for="item in type"
                  :key="item.id"
                  :label="item.typeName"
                  :value="item.id"
              />
            </el-select>
          </el-form-item>
          <el-form-item label="国家" >
            <el-select
                v-model="blogAdd.countryId"
                placeholder="可选国家"
                style="width: 100px;margin-left: 10px;"
                clearable

            >
              <el-option v-for="(item,key) in country" :key="key" :label=item.countryName :value=item.id />
            </el-select>
          </el-form-item>
          <el-form-item label="作者">
            <el-input v-model="blogAdd.author" placeholder="作者" clearable/>
          </el-form-item>
<!--          TODO:引入富文本框架使得满足上传图文混排富文本-->
<!--          <Editor :value="blogAdd.text" @updateValue="getMsg" style="height: 600px"/>-->
          <QuillEditor
              ref="myQuillEditor"
              contentType="html"
              v-model:content="blogAdd.text"
              :options="editorOption"
              toolbar="full"
              style="height: 600px;"
              @update:content="setValue()"
          />
<!--          <quill-editor  theme="snow" toolbar="full"/>-->
          <el-button @click="dialogVisible = false">取消</el-button>
          <el-button type="primary" @click="blogSubmit">
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
        <el-table-column label="操作" width="150" >
<!--          TODO:增加文章的修改和删除-->
          <a href="">修改</a> |  <a href="">删除</a>
        </el-table-column>
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