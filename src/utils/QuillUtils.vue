<script setup lang="ts">
import { ref,reactive,toRaw,watch} from "vue";
import { QuillEditor, Quill } from '@vueup/vue-quill'
import '@vueup/vue-quill/dist/vue-quill.snow.css'
// import '@/styles/quill.font.css'
import 'quill-image-uploader/dist/quill.imageUploader.min.css';

import ImageUploader from 'quill-image-uploader';
import BlotFormatter from 'quill-blot-formatter'
import {api} from "@/utils/axiosPackaging";
import {fileUploading} from "@/utils/UrlPackaging";

const props = withDefaults(defineProps<{
  modelValue: any, // 双向绑定值
}>(), {
  modelValue: '', // 双向绑定值
})
const emit = defineEmits<{
  (e: 'update:modelValue', val: any): void
}>()
const content = ref<string>('')
const quillRef = ref<any>(null)


Quill.register("modules/imageUploader", ImageUploader);
Quill.register('modules/blotFormatter', BlotFormatter);

//富文本配置项，将模块功能一起写入到配置项内，也可以单独配置Modules
const myOptions = reactive({
  modules: {
    toolbar: [ //自定义toolbar，或者可以通过essential ,minimal ,full ,以及"" 使用默认选项
      [{ 'align': [] }],
      [{ 'list': 'ordered' }, { 'list': 'bullet' }],
      ['image'],
      [{ 'direction': 'rtl' }],
      [{ 'color': [] }, { 'background': [] }],
      ['clean']
    ],
    // 上传图片
    imageUploader: {
      upload: async (file: any) => {
        try {
          // const compressedFile: any = await compressImage(file); // 压缩图片
          return new Promise((resolve, reject) => {
            const formData = new FormData();
            formData.append("file", file);
            api.post(fileUploading,formData).then((res: any) => {
              resolve(res.data.url);
            }).catch(err => {
              reject("Upload failed");
              console.error("Error:", err)
            })
          })
        } catch (error) {
          console.error('压缩和上传图像时出错:', error);
        }
      }
    },
    // 图片缩放
    blotFormatter: {
    },
  },
  placeholder: '请输入内容...'
})

// 图片压缩
// const compressImage = (file: any) => {
//   return new Promise((resolve, reject) => {
//     new Compressor(file, {
//       quality: 0.6, // 设置压缩质量
//       maxWidth: 400, // 设置图片最大宽度
//       maxHeight: 400, // 设置图片最大高度
//       success(result) {
//         resolve(result);
//       },
//       error(error) {
//         reject(error);
//       },
//     });
//   });
// }

const setValue = () => { //用于设置双向绑定值
  const text = toRaw(quillRef.value).getHTML()
  emit('update:modelValue', text)
}

watch(() => props.modelValue, (val: any) => {
  if (val) {
    content.value = val //用于监听绑定值进行数据回填
  } else {
    toRaw(quillRef.value).setContents('') //可用于弹窗使用富文本框关闭弹窗清除值
  }
})

</script>

<style>
.ql-container {
  height: calc(100% - 42px);
}
</style>