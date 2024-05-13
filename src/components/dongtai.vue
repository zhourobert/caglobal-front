<template>
  <div class="information p80">
    <div class="uk-container">
      <h3 class="pg-title">
        寰球案例 <span>Information</span>
        <a href="">More</a>
      </h3>
      <div class="uk-margin-medium-top uk-grid bet">
        <div class="uk-width-1-2@m uk-first-column">
          <div uk-slideshow="ratio: 4:3" class="uk-slideshow">
            <ul class="uk-slideshow-items" style="min-height: 438.75px">
              <li
                class="uk-active uk-transition-active"
                style="transform: translateX(0px)"
              >
                <a href=""
                  ><img
                    src="https://www.yesglobal.com.cn/res/202401/16/65e3d9ce33f36006.jpg"
                /></a>
              </li>
            </ul>
          </div>
        </div>
        <div class="uk-width-1-2@m">
          <div class="info-box" v-for="item in blogList">
            <div class="uk-flex-middle uk-grid" @click="toBlog(item)">
              <div class="uk-width-expand uk-first-column">
                <h5 class="uk-text-truncate">
                  <a href="">{{ item.title }} </a>
                </h5>
                <div class="uk-grid-small uk-flex-middle uk-grid" uk-grid="">
                  <div class="uk-width-1-3@m uk-visible@m uk-first-column">
                    <a href=""
                      ><img
                        src="https://www.yesglobal.com.cn/res/202401/16/thumb_9224.jpg"
                    /></a>
                  </div>
                  <div class="uk-width-2-3@m">
                    <p v-html="item.text"></p>
                  </div>
                </div>
              </div>
              <div class="uk-width-auto">
                <div class="info-date">
                  <span>{{ item.time }}</span>
                  <a href=""
                    ><img
                      src="https://www.yesglobal.com.cn/tpl/www/images/go-info.jpg"
                  /></a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { queryList } from '@/utils/UrlPackaging'
import { api } from '@/utils/axiosPackaging'
import { ref } from 'vue'
import { useRouter } from 'vue-router'

const router = useRouter()

let blogList = ref([])
const getBlogList = () => {
  api.get(queryList).then((res) => {
    blogList.value = res.data.data.records
    blogList.value.forEach((item) => {
      // item.time =
      // 创建一个新的 Date 对象
      var date = new Date(item.updateTime)

      // 获取月份和日期
      var month = date.getMonth() + 1 // 月份从 0 开始，所以要加 1
      var day = date.getDate()
      item.time = month + '-' + day
    })
  })
}
getBlogList()
const toBlog = (item: any) => {
  router.push({ path: '' })
}
</script>

<style scoped>
.p80 {
  padding-top: 80px;
  padding-bottom: 80px;
}
.information {
  background: #f9f9f9;
}
.uk-container {
  box-sizing: content-box;
  max-width: 1200px;
  margin-left: auto;
  margin-right: auto;
  padding-left: 15px;
  padding-right: 15px;
}
@media (min-width: 960px) {
  .uk-container {
    padding-left: 40px;
    padding-right: 40px;
  }
}
.uk-container::before,
.uk-container::after {
  content: '';
  display: table;
}
h3,
.uk-h3 {
  font-size: 1.5rem;
  line-height: 1.4;
}
h1,
.uk-h1,
h2,
.uk-h2,
h3,
.uk-h3,
h4,
.uk-h4,
h5,
.uk-h5,
h6,
.uk-h6 {
  margin: 0 0 20px 0;
  font-family: 'Microsoft Yahei', -apple-system, BlinkMacSystemFont, 'Segoe UI',
    Roboto, 'Helvetica Neue', Arial, sans-serif;
  font-weight: normal;
  color: #333;
  text-transform: none;
}
.pg-title span {
  font-size: 1rem;
  line-height: 14px;
  color: #999;
}
.pg-title a {
  float: right;
  color: #666;
  font-size: 14px;
  transform: translateY(4px);
}
a,
.uk-link {
  color: #1e87f0;
  text-decoration: none;
  cursor: pointer;
}
.uk-container > :last-child {
  margin-bottom: 0;
}
.uk-margin-medium-top {
  margin-top: 40px !important;
}
@media (min-width: 1200px) {
  .uk-grid {
    margin-left: -30px;
  }
}
.uk-grid {
  margin-left: -30px;
}
.uk-grid {
  display: flex;
  /* flex-wrap: wrap; */
  margin: 0;
  padding: 0;
  list-style: none;
}
@media (min-width: 960px) {
  .uk-width-1-2\@m {
    width: 50%;
  }
}
/* [class*='uk-width'] {
  box-sizing: border-box;
  width: 100%;
  max-width: 100%;
} */

.uk-grid > * {
  padding-left: 30px;
}
.uk-grid > * {
  margin: 0;
}
.uk-slideshow {
  -webkit-tap-highlight-color: transparent;
}
.uk-slideshow-items {
  position: relative;
  z-index: 0;
  margin: 0;
  padding: 0;
  list-style: none;
  overflow: hidden;
  -webkit-touch-callout: none;
}
ul,
ol {
  padding-left: 30px;
}
p,
ul,
ol,
dl,
pre,
address,
fieldset,
figure {
  margin: 0 0 20px 0;
}
.uk-slideshow-items > * {
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  overflow: hidden;
  will-change: transform, opacity;
  touch-action: pan-y;
}
canvas,
img,
video {
  max-width: 100%;
  height: auto;
  box-sizing: border-box;
}
audio,
canvas,
iframe,
img,
svg,
video {
  vertical-align: middle;
}
@media (min-width: 960px) {
  .uk-width-1-2\@m {
    width: 50%;
  }
}
/* [class*='uk-width'] {
  box-sizing: border-box;
  width: 100%;
  max-width: 100%;
} */
@media (min-width: 1200px) {
  .uk-grid > * {
    padding-left: 30px;
  }
}
.uk-grid > * {
  padding-left: 30px;
}
.uk-grid > * {
  margin: 0;
}
.info-box {
  padding: 20px 0;
  border-top: #d9d9d9 1px solid;
}
.uk-flex-middle {
  align-items: center;
}
.uk-width-expand {
  flex: 1;
  min-width: 1px;
}
.info-box h5 {
  margin-bottom: 15px;
}
.uk-text-truncate {
  max-width: 100%;
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
}
.info-box h5 a {
  color: #333;
  font-size: 16px;
}
.uk-flex-middle {
  align-items: center;
}
.uk-grid-small {
  margin-left: -15px;
}
@media (min-width: 960px) {
  .uk-width-1-3\@m {
    width: calc(100% * 1 / 3.001);
  }
}
canvas,
img,
video {
  max-width: 100%;
  height: auto;
  box-sizing: border-box;
}
@media (min-width: 960px) {
  .uk-width-2-3\@m {
    width: calc(100% * 2 / 3.001);
  }
}
.info-box p {
  font-size: 13px;
  color: #666;
  line-height: 1.8em;
  height: 4em;
  overflow: hidden;
}
.bet {
  display: flex;
}
</style>
