<template>
  <div style="border: 1px solid #ccc">
    <Toolbar
      style="border-bottom: 1px solid #ccc"
      :editor="editorRef"
      :defaultConfig="toolbarConfig"
      :mode="mode"
    />
    <Editor
      style="height: 500px; overflow-y: hidden"
      v-model="valueHtml"
      :defaultConfig="editorConfig"
      :mode="mode"
      @onCreated="handleCreated"
    />
  </div>
</template>
<script setup lang="ts">
import '@wangeditor/editor/dist/css/style.css' // 引入 css

import { onBeforeUnmount, ref, shallowRef, onMounted } from 'vue'
import { Editor, Toolbar } from '@wangeditor/editor-for-vue'
import axios from 'axios'

// 编辑器实例，必须用 shallowRef
const editorRef = shallowRef()

// 内容 HTML
const valueHtml = ref('<p>hello</p>')

// 模拟 ajax 异步获取内容
onMounted(() => {
  setTimeout(() => {
    valueHtml.value = '<p>模拟 Ajax 异步设置内容</p>'
  }, 1500)
})

const toolbarConfig = {}
const editorConfig = {
  placeholder: '请输入内容...',
  MENU_CONF: {
    // 字号
    fontSize: {
      fontSizeList: [
        '12px',
        '15px',
        '17px',
        '18px',
        '19px',
        '20px',
        '24px',
        '32px'
      ]
    },
    // 行高
    lineHeight: {
      lineHeightList: ['1', '1.5', '1.6', '2', '2.5']
    },
    // 自定义图片上传
    uploadImage: {
      allowedFileTypes: ['.png', '.jpg', '.jpeg', '.gif'],
      async customUpload(file: File, insertFn: any) {
        // // 限制大小
        // if (props?.image && props.image?.maxFileSize) {
        //   if (file.size > props.image.maxFileSize) {
        //     const num = props.image.maxFileSize / 1024 / 1024
        //     DasMessage.warning(`图片大小不能超过${num}M! 请重新上传`)
        //     return
        //   }
        // }
        // const url = await customUpload(file)
        // if (url) insertFn(url, '', url)

        const formData = new FormData()
        formData.append('file', file)

        const res = await axios({
          method: 'post',
          url: 'http://124.222.113.82:8999/file/upload',
          headers: { 'Content-Type': 'multipart/form-data' },
          data: formData
        })
        console.log(res)
        let url = res?.data?.data
        if (url) {
          url = 'http://124.222.113.82:8999' + url
          insertFn(url, '', url)
        }
      }
    },
    // 自定义视频上传
    uploadVideo: {
      customUpload(file: File, insertFn: any) {
        // // 限制大小
        // if (props?.video && props.video?.maxFileSize) {
        //   if (file.size > props.video.maxFileSize) {
        //     const num = props.video.maxFileSize / 1024 / 1024
        //     DasMessage.warning(`视频大小不能超过${num}M! 请重新上传`)
        //     return
        //   }
        // }
        // const url = await customUpload(file)
        // if (url) insertFn(url, '')
      }
    }
  }
}

// 组件销毁时，也及时销毁编辑器
onBeforeUnmount(() => {
  const editor = editorRef.value
  if (editor == null) return
  editor.destroy()
})

const handleCreated = (editor) => {
  editorRef.value = editor // 记录 editor 实例，重要！
}
const mode = 'default'
</script>
