<template>
  <div class="news-center m80">
    <div class="uk-container">
      <div class="uk-flex-middle uk-grid" uk-grid="">
        <div
          class="uk-width-auto@m uk-text-left@m uk-text-center uk-first-column"
        >
          <h3 class="pg-title">学校资讯 <span>News center</span></h3>
        </div>
        <div class="uk-width-expand@m"></div>
      </div>
      <div class="uk-switcher uk-margin-medium-top news-switcher-container cc">
        <div :class="{ 'uk-active': type == 'xinwen' }">
          <div class="uk-grid">
            <div class="uk-width-2-5@m uk-flex-last@m">
              <div uk-slideshow="ratio: 4:3.3" class="uk-slideshow">
                <ul class="uk-slideshow-items" style="min-height: 381.15px">
                  <li
                    class="uk-active uk-transition-active"
                    style="transform: translateX(0px)"
                  >
                    <img
                      src="https://www.yesglobal.com.cn/res/201903/15/5f8b937cb59e30cc.jpg"
                    />
                  </li>
                </ul>
              </div>
            </div>
            <div class="uk-width-3-5@m uk-flex-first@m uk-first-column">
              <div class="news-box uk-grid" v-for="item in list">
                <div class="uk-width-auto uk-first-column">
                  <div class="news-date">
                    <span>{{ item.day }}</span>
                    <i>{{ item.year }}</i>
                  </div>
                </div>
                <div class="uk-width-expand">
                  <h5 class="uk-text-truncate">
                    <span>{{ item.title }} </span>
                  </h5>
                  <p v-html="item.text"></p>
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
import { computed, ref, onMounted, nextTick } from 'vue'
import dayjs from 'dayjs'
import { getBlogType, queryList } from '@/utils/UrlPackaging'
import { api } from '@/utils/axiosPackaging'

const blogList = ref([])
const getBlogList = async () => {
  const res = await api.get(queryList)
  blogList.value = res.data.data.records
  blogList.value.forEach((item) => {
    if (item.typeId == 2) {
      let date = dayjs(item.updateTime)
      item.year = date.year()
      item.day = date.month() + 1 + '-' + date.date()
      list.value.push(item)
    }
  })
  list.value = list.value.splice(0, 4)
}
const type = ref('xinwen')
type Props = { list: any[] }
const props = defineProps<Props>()
let list = ref([])

onMounted(() => {
  getBlogList()
})
</script>

<style scoped>
@media (max-width: 2560px) {
  .m80 {
    margin-top: 80px;
  }
}
@media (min-width: 960px) {
  .uk-container {
    padding-left: 40px;
    padding-right: 40px;
  }
}
@media (min-width: 640px) {
  .uk-container {
    padding-left: 30px;
    padding-right: 30px;
  }
}
.uk-container {
  box-sizing: content-box;
  max-width: 1200px;
  margin-left: auto;
  margin-right: auto;
  padding-left: 15px;
  padding-right: 15px;
}
.uk-container::before,
.uk-container::after {
  content: '';
  display: table;
}
.uk-flex-middle {
  align-items: center;
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
  margin: 0;
  padding: 0;
  list-style: none;
}
@media (min-width: 960px) .uk-text-left\@m {
  text-align: left !important;
}
.uk-text-center {
  text-align: center !important;
}
@media (min-width: 960px) {
  .uk-width-auto\@m {
    width: auto;
  }
}
.news-box .news-date {
  width: 70px;
}
.uk-width-auto {
  width: auto;
}
.news-box .news-date span {
  font-size: 22px;
  color: #333;
  display: block;
  line-height: 22px;
}
.uk-width-expand {
  flex: 1;
  min-width: 1px;
}
.news-box .news-date i {
  font-size: 12px;
  color: #666;
  font-style: normal;
}
.news-box h5 {
  margin-bottom: 10px;
}
.uk-text-truncate {
  max-width: 100%;
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
}
h5,
.uk-h5 {
  font-size: 16px;
  line-height: 1.4;
}
.uk-switcher {
  margin: 0;
  padding: 0;
  list-style: none;
}
.news-center-more a {
  font-size: 12px;
  color: #333;
  background-color: #ddd;
  padding: 5px 15px;
}
.uk-container > :last-child {
  margin-bottom: 0;
}
.uk-margin-medium-top {
  margin-top: 40px !important;
}
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
.uk-grid > * > :last-child {
  margin-bottom: 0;
}
.uk-slideshow {
  -webkit-tap-highlight-color: transparent;
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
@media (min-width: 960px) {
  .uk-width-expand\@m {
    flex: 1;
    min-width: 1px;
  }
}
@media (min-width: 1200px) {
  .uk-width-1-3\@l {
    width: calc(100% * 1 / 3.001);
  }
}
@media (min-width: 960px) {
  .uk-width-1-2\@m {
    width: 50%;
  }
}
.hot-project-tab {
  padding: 0;
  margin: 0;
  text-align: right;
}
.uk-text-center {
  text-align: center !important;
}
.uk-child-width-expand > :not([class*='uk-width']) {
  flex: 1;
  min-width: 1px;
}
.hot-project-tab li {
  list-style: none;
  display: inline-block;
}

.uk-grid-collapse > * {
  padding-left: 0;
}
.hot-project-tab li.uk-active a {
  color: #fff;
  background: #0f6ecd;
}
.hot-project-tab li a {
  display: block;
  padding: 3px 0;
  font-size: 14px;
  color: #333;
  transition: all 0.5s;
}
a,
.uk-link {
  color: #1e87f0;
  text-decoration: none;
  cursor: pointer;
}
@media (min-width: 960px) {
  .uk-flex-last\@m {
    order: 99;
  }
}
@media (min-width: 960px) {
  .uk-width-2-5\@m {
    width: 40%;
  }
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
.news-box h5 span {
  color: #000;
  font-weight: bold;
}
@media (min-width: 960px) {
  .uk-flex-first\@m {
    order: -1;
  }
}
@media (min-width: 960px) {
  .uk-width-3-5\@m {
    width: 60%;
  }
}
.news-box p {
  color: #999;
  font-size: 14px;
  line-height: 1.6em;
  margin: 0;
  height: 4em;
  overflow: hidden;
}
.cc > div {
  display: none;
}
.cc .uk-active {
  display: block;
}
.hot-project-tab li:hover div {
  color: #fff;
  background: #0f6ecd;
}
</style>
