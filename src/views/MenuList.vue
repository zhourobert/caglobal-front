<template>
  <Header></Header>

  <div class="index-banner uk-position-relative">
    <!-- banner-->
    <div class="page-banner uk-text-center uk-visible@m">
      <img :src="map[route.query.type]?.banner" />
    </div>
    <div class="page-banner uk-text-center uk-hidden@m">
      <img :src="map[route.query.type]?.banner" />
    </div>

    <div class="page-nav uk-position-bottom-left uk-width-1-1">
      <div class="uk-container">
        <div
          class="uk-child-width-1-5@l uk-child-width-1-4 uk-grid-collapse uk-grid"
        ></div>
      </div>
    </div>
  </div>
  <div class="breadcrumb">
    <div class="uk-container">
      <ul>
        <li>您的位置：</li>
        <li @click="router.push('/')">首页</li>
        <li>{{ map[route.query.type]?.name }}</li>
      </ul>
    </div>
  </div>
  <section class="uk-margin-large">
    <div class="uk-container">
      <h3 class="pg-title uk-margin-medium-bottom">
        {{ map[route.query.type]?.name }}
        <span> {{ map[route.query.type]?.secondName }}</span>
      </h3>
      <div class="uk-grid-large uk-grid" uk-grid="">
        <div class="uk-width-2-3@m news-list-content uk-first-column">
          <div class="news-list-box" v-for="item in blogList">
            <div
              class="uk-grid-small uk-flex-middle uk-grid"
              @click="
                router.push({
                  path: 'info',
                  query: { type: 'project', id: item.id }
                })
              "
            >
              <div class="uk-width-1-4 uk-visible@m uk-first-column">
                <img :src="item.cover" style="width: 100%; height: 50px" />
              </div>
              <div class="uk-width-expand">
                <h5>
                  <span style="color: #1e87f0">{{ item.title }}</span>
                </h5>
                <p v-html="item.text" class="vHtml"></p>
              </div>
              <div class="uk-width-auto uk-visible@m">
                <div class="news-list-date">
                  <span>{{ item.time }}</span>
                  <img src="../../public/imgs/arrow-right.jpg" />
                </div>
              </div>
            </div>
            <hr />
          </div>
          <div class="pagination">
            <el-pagination
              layout="prev, pager, next"
              :total="total"
              v-model:current-page="pages"
              @current-change="getBlogList"
            />
          </div>
        </div>
        <!--        TODO:axios获取后台相应文章-->
        <div class="uk-width-1-3@m">
          <h3 class="pg-title uk-margin-small-bottom">
            学校资讯 <span>Information</span>
          </h3>
          <div class="uk-inline-clip side-figure">
            <img
              :src="InformationList[0]?.cover"
              style="width: 350px; height: 167px"
            />
            <h6 class="uk-position-bottom uk-overlay">
              {{ InformationList[0]?.title }}
            </h6>
            <a href="" class="uk-position-cover"></a>
          </div>
          <div class="uk-margin side-more">
            <div
              class="uk-text-truncate"
              v-for="item in InformationList.slice(1, 5)"
              @click="
                router.push({
                  path: '/info',
                  query: { id: item.id, type: 'schoolInformation' }
                })
              "
            >
              <span>{{ item.title }}</span>
            </div>
            <hr />
          </div>
          <h3 class="pg-title uk-margin-small-bottom">
            热门项目 <span>Hot Project</span>
          </h3>
          <div
            class="uk-inline-clip side-figure uk-margin-small-bottom"
            v-for="item in hotProjectList"
            @click="
              router.push({
                path: '/info',
                query: { type: 'project', id: item.id }
              })
            "
          >
            <img :src="item.cover" style="width: 350px; height: 167px" />
            <h6 class="uk-position-bottom uk-overlay">{{ item.title }}</h6>
          </div>
        </div>
      </div>
    </div>
  </section>
  <footer1></footer1>
  <Dialog1></Dialog1>
</template>
<script setup lang="ts">
import './uikit.css'
import './iven.css'
import { useRouter, useRoute } from 'vue-router'
import footer1 from '@/components/footer.vue'
import { ref, onMounted, watch } from 'vue'
import Header from '@/components/header.vue'
import { queryList } from '@/utils/UrlPackaging'
import { api } from '@/utils/axiosPackaging'
import Dialog1 from '@/components/dialog.vue'
import bannerImg from '../../public/imgs/6215069a21796b8e.jpg'

const router = useRouter()
const route = useRoute()

let total = ref(0)
let pages = ref(1)

let map = {
  '/project': {
    name: '热门项目',
    secondName: 'Project',
    banner: bannerImg,
    id: 2
  },
  '/schoolInformation': {
    name: '学校资讯',
    secondName: 'Information',
    banner: bannerImg,
    id: 3
  },
  '/recommendation': {
    name: '留学建议',
    secondName: 'Recommendation',
    banner: bannerImg,
    id: 4
  },
  '/case': { name: '寰球案例', secondName: 'Case', banner: bannerImg, id: 6 }
}

const blogList = ref([])

onMounted(() => {
  getBlogList()
  getProject()
  getInformation()
})
watch(
  () => route.query.type,
  () => {
    getBlogList()
  }
)
const getBlogList = async () => {
  const res = await api.get(
    `${queryList}?typeId=${map[route.query.type].id}&size=10&pages=${
      pages.value
    }`
  )
  total.value = +res.data.data.total
  blogList.value = res.data.data.records

  blogList.value.forEach((item) => {
    const date = new Date(item.updateTime)

    // 获取月份和日期
    const month = date.getMonth() + 1 // 月份从 0 开始，所以要加 1
    const day = date.getDate()
    item.time = month + '-' + day
  })
}

const hotProjectList = ref([])
const getProject = () => {
  api(queryList + '?typeId=2').then((res) => {
    hotProjectList.value = res.data.data.records.splice(0, 3)
  })
}
const InformationList = ref([])
const getInformation = () => {
  api(queryList + '?typeId=3').then((res) => {
    InformationList.value = res.data.data.records.splice(0, 5)
  })
}
</script>
<style scoped>
.nav-dropdown {
  transform: none !important;
}
.subnav-box > ul > li > a:hover + .uk-dropdown {
  display: block;
}
.subnav-box .uk-dropdown:hover {
  display: block;
}
.dp-switcher-title li:hover a {
  background: rgb(0, 102, 204);
  text-decoration: none;
}
.page-nav {
  height: 85px;
}
.vHtml {
  height: 4em;
  overflow: hidden;
}
.pagination {
  position: relative;
  left: 50%;
  transform: translateX(-15%);
}
</style>
