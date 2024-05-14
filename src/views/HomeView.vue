<template>
  <header1></header1>
  <!--图片轮换-->
  <el-carousel class="swiper" height="580px" autoplay>
    <el-carousel-item key="1">
      <img
        src="https://www.yesglobal.com.cn/res/202109/18/6bde9dd8f8c6df77.jpg"
        alt=""
        style="width: 100%; height: 100%"
      />
    </el-carousel-item>
    <el-carousel-item key="2">
      <img
        src="https://www.yesglobal.com.cn/res/201905/16/c11b056591f2063d.jpg"
        alt=""
        style="width: 100%; height: 100%"
      />
    </el-carousel-item>
  </el-carousel>
  <!--  新闻栏-->
  <div class="news">
    <div class="commend-news-box">
      <div class="uk-width-auto uk-first-column">
        <div class="live">LIVE</div>
      </div>
      <div class="uk-width-expand topslidernews">
        <el-carousel height="49px" direction="vertical" autoplay>
          <!-- <el-carousel-item v-for="item in 2" :key="item">
            <h3 text="2xl" justify="center">{{ item }}</h3>
          </el-carousel-item> -->
          <el-carousel-item>
            <div class="new">美国杰出人才申请（EB1A）——学历是必选项吗？</div>
          </el-carousel-item>
          <el-carousel-item>
            <div class="new">美国EB-5 |新法下I-526E递交数据和排期预测</div>
          </el-carousel-item>
          <el-carousel-item>
            <div class="new">攻略|中小企业主申请EB1A难点解析</div>
          </el-carousel-item>
        </el-carousel>
      </div>
    </div>
    <div class="nb-2">
      <div class="uk-grid-medium uk-grid">
        <div class="uk-width-auto uk-first-column">
          <div class="immig">IMMIGRATION ALARMS</div>
        </div>
      </div>
      <div style="flex: 1">
        <el-carousel height="49px" direction="vertical" autoplay>
          <!-- <el-carousel-item v-for="item in 2" :key="item">
            <h3 text="2xl" justify="center">{{ item }}</h3>
          </el-carousel-item> -->
          <el-carousel-item>
            <div class="new">美国杰出人才申请（EB1A）——学历是必选项吗？</div>
          </el-carousel-item>
          <el-carousel-item>
            <div class="new">美国EB-5 |新法下I-526E递交数据和排期预测</div>
          </el-carousel-item>
          <el-carousel-item>
            <div class="new">攻略|中小企业主申请EB1A难点解析</div>
          </el-carousel-item>
        </el-carousel>
      </div>
    </div>
  </div>
  <!--  第二栏-->
  <div class="updates m80">
    <div class="uk-container">
      <div class="uk-grid">
        <div class="uk-width-auto@m uk-visible@m uk-first-column">
          <div class="squareslider-box">
            <!--            轮换栏目-->
            <div class="bx-wrapper">
              <el-carousel autoplay height="398px">
                <el-carousel-item key="1">
                  <img
                    src="https://www.yesglobal.com.cn/res/201902/21/5b23173122a7afce.jpg"
                    alt=""
                    style="width: 100%; height: 100%"
                  />
                </el-carousel-item>
                <el-carousel-item key="2">
                  <img
                    src="https://www.yesglobal.com.cn/res/202009/18/743c74d9ac0ae956.jpg"
                    alt=""
                    style="width: 100%; height: 100%"
                  />
                </el-carousel-item>
              </el-carousel>
            </div>
          </div>
        </div>
        <!--        实时政策-->
        <div class="uk-width-expand@s uk-visible@m">
          <h3 class="pg-title">
            实时政策 <span>Real time policy</span>
            <a @click="toAbout">More &gt;</a>
          </h3>
          <div class="img-updates uk-position-relative">
            <a href=""
              ><img
                src="https://www.yesglobal.com.cn/res/202404/01/thumb_9407.jpg"
            /></a>
            <h6 class="uk-position-bottom-left uk-text-truncate">
              <a href="">干货 | EB1A申请为何会被拒？原因在这里！</a>
            </h6>
          </div>
          <ul>
            <li class="uk-text-truncate">
              <a href="">官宣！新加坡EP申请门槛再次提高</a>
            </li>
            <li class="uk-text-truncate">
              <a href="">最新！希腊移民新政解读</a>
            </li>
            <li class="uk-text-truncate">
              <a href="">十年美签到期，可申请续签免面试！</a>
            </li>
            <li class="uk-text-truncate">
              <a href="">攻略 | 市场型企业高管如何申请EB1A杰出人才移民？</a>
            </li>
          </ul>
        </div>
        <!--        活动公告-->
        <div class="uk-width-expand@s"></div>
      </div>
    </div>
  </div>
  <!--  热门项目-->
  <div class="hot-project p80">
    <div class="uk-container">
      <div class="uk-flex-middle uk-grid" uk-grid="">
        <div class="uk-width-auto@m uk-width-expand uk-first-column">
          <h3 class="pg-title">热门项目 <span>Hot project</span></h3>
        </div>
        <div class="uk-width-expand@m uk-visible@m"></div>
        <div class="uk-width-2-5@l uk-visible@m">
          <ul
            class="hot-project-tab uk-text-center uk-grid-collapse uk-child-width-expand uk-grid"
            uk-grid=""
            uk-switcher="connect: .hot-project-switcher"
          >
            <li
              @click="switchProject(item)"
              class="uk-first-column"
              v-for="item in blockTypeList"
              style="cursor: pointer"
            >
              <span>{{ item.typeName }}</span>
            </li>

            <!-- <li
              @click="isProject = 'tuijian'"
              class="uk-first-column"
              :class="{ 'uk-active': isProject == 'tuijian' }"
            >
              <span>推荐</span>
            </li>
            <li
              @click="isProject = 'touzi'"
              :class="{ 'uk-active': isProject == 'touzi' }"
            >
              <span>投资移民</span>
            </li>
            <li
              @click="isProject = 'rencai'"
              :class="{ 'uk-active': isProject == 'rencai' }"
            >
              <span>人才移民</span>
            </li>
            <li
              @click="isProject = 'huzhao'"
              :class="{ 'uk-active': isProject == 'huzhao' }"
            >
              <span>护照移民</span>
            </li>
            <li
              @click="isProject = 'yiming'"
              :class="{ 'uk-active': isProject == 'yiming' }"
            >
              <span>留学生移民</span>
            </li> -->
          </ul>
        </div>
        <div class="uk-width-auto">
          <div class="uk-switcher hot-project-switcher news-center-more">
            <div class="uk-active">
              <span @click="router.push('/project')">More</span>
            </div>
          </div>
        </div>
      </div>
      <!--      热门项目详情-->
      <div class="uk-switcher uk-margin-medium-top hot-project-switcher">
        <div :class="{ 'uk-active': isProject == 'tuijian' }">
          <div class="uk-child-width-1-3@m uk-grid-small uk-grid ff">
            <div
              class="uk-first-column"
              v-for="item in hotProjectList"
              style="cursor: pointer"
              @click="
                router.push({
                  path: '/info',
                  query: { id: item.id, type: 'project' }
                })
              "
            >
              <div class="img-updates uk-position-relative">
                <img
                  src="https://www.yesglobal.com.cn/res/201912/26/thumb_5530.png"
                />
                <h6 class="uk-position-bottom-left">
                  <span>{{ item.title }}</span>
                </h6>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>

  <dongtai></dongtai>
  <zixun></zixun>
  <div class="links uk-visible@m">
    <div class="uk-container">
      <strong>友情链接:</strong>
      <a href="https://www.amchamchina.org/" rel="nofollow" target="_blank"
        >中国美国商会</a
      >
      <a href="https://immi.homeaffairs.gov.au/" rel="nofollow" target="_blank"
        >澳大利亚移民局官网</a
      >
      <a
        href="https://www.canada.ca/en/services/immigration-citizenship.html"
        rel="nofollow"
        target="_blank"
        >加拿大联邦移民官网</a
      >
      <a href="https://www.uscis.gov/" rel="nofollow" target="_blank"
        >美国移民局官网</a
      >
      <a
        href="http://www.mccusa.org/htm_home/index.asp"
        rel="nofollow"
        target="_blank"
        >美国马里兰中心</a
      >
    </div>
  </div>
  <footer1></footer1>
  <Dialog1></Dialog1>
</template>
<script setup lang="ts">
import { ref, onMounted } from 'vue'
import dongtai from '@/components/dongtai.vue'
import zixun from '@/components/zixun.vue'
import footer1 from '@/components/footer.vue'
import header1 from '@/components/header.vue'
import Dialog1 from '@/components/dialog.vue'
import { useRouter } from 'vue-router'
import { getBlogType, queryList } from '@/utils/UrlPackaging'
import { api } from '@/utils/axiosPackaging'

const router = useRouter()
const ishaiwai = ref(false)
const isguanyu = ref(false)
const isProject = ref('tuijian')

const isguojia = ref('xibanya')
const toAbout = () => {
  console.log(router)
  router.push('/about')
}

const blockTypeList = ref([])

let blogList = ref([])
const getBlogList = async () => {
  const res = await api.get(queryList)
  blogList.value = res.data.data.records
}

const switchProject = (item1: any) => {
  hotProjectList.value = blogList.value.filter(
    (item) => item.typeId == item1.id
  )
}
onMounted(async () => {
  await getBlogList()
  api(getBlogType).then((res) => {
    blockTypeList.value = res.data.data

    hotProjectList.value = blogList.value.filter(
      (item) => item.typeId == blockTypeList.value[0].id
    )
  })
})
let hotProjectList = ref([])
</script>

<style scoped>
.topbar {
  background-color: rgb(23, 38, 50);
  height: 42px;
  line-height: 42px;
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
.uk-container::after {
  clear: both;
}
.uk-container::before,
.uk-container::after {
  content: '';
  display: table;
}
.uk-container > :last-child {
  margin-bottom: 0;
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
  flex-wrap: wrap;
  margin: 0;
  padding: 0;
  list-style: none;
}
.uk-width-auto {
  width: auto;
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

a,
.uk-link {
  color: #1e87f0;
  text-decoration: none;
  cursor: pointer;
}
a {
  -webkit-text-decoration-skip: objects;
}
a:-webkit-any-link {
  /* color: -webkit-link; */
  cursor: pointer;
  /* text-decoration: underline; */
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
.uk-width-expand {
  flex: 1;
  min-width: 1px;
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

.uk-grid-collapse {
  margin-left: 0;
}
@media (min-width: 1200px) {
  .uk-grid {
    margin-left: -30px;
  }
}
.uk-grid {
  margin-left: -30px;
}
/* .uk-grid {
  display: flex;
  flex-wrap: wrap;
  margin: 0;
  padding: 0;
  list-style: none;
} */
nav ul {
  text-align: center;
  margin: 0;
  padding: 0;
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
.uk-width-expand {
  flex: 1;
  min-width: 1px;
}
/* [class*='uk-width'] {
  box-sizing: border-box;
  width: 100%;
  max-width: 100%;
} */
.uk-grid-collapse > * {
  padding-left: 0;
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
nav ul li {
  display: inline-block;
  text-align: center;
}
.uk-grid > * > :last-child {
  margin-bottom: 0;
}
nav ul li a {
  color: #fff;
  font-size: 14px;
}

.topbar-contact {
  width: 200px;
}
.uk-width-auto {
  width: auto;
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

.uk-flex-middle {
  align-items: center;
}
.uk-flex {
  display: flex;
}
.topbar-contact img {
  margin-right: 10px;
}
.topbar-contact span {
  color: #fff;
}

.nav-dropdown a {
  display: block;
  color: #fff;
  font-size: 13px;
}
.uk-dropdown {
  display: none;
  position: absolute;
  z-index: 1020;
  box-sizing: border-box;
  min-width: 200px;
  padding: 25px;
  background: #fff;
  color: #666;
  box-shadow: 0 5px 12px rgba(0, 0, 0, 0.15);
}
.nav-dropdown {
  padding: 10px;
  background-color: rgba(0, 0, 0, 0.7);
  min-width: 130px !important;
  transform: translateX(-15%);
}

.uk-open {
  display: block;
}
.subnav {
  background: rgba(255, 255, 255, 0.39);
  position: relative;
  z-index: 10;
}
.subnav-box > ul {
  margin: 0;
  padding: 0;
  text-align: center;
}
.subnav-box > ul > li {
  display: inline-block;
}
.subnav-box > ul > li > a {
  display: inline-block;
  color: #333;
  padding: 11px 41px;
  font-size: 14px;
}
a,
.uk-link {
  color: #1e87f0;
  text-decoration: none;
  cursor: pointer;
}
.subnav-box .uk-dropdown {
  background: rgba(0, 0, 0, 0.4);
  padding: 0;
  text-align: left;
}
.dp-switcher-title {
  margin: 0;
  padding: 0;
  background: rgba(0, 102, 204, 0.3);
}
.dp-switcher-title li {
  list-style: none;
  line-height: 54px;
  display: inline-block;
}

.dp-switcher-title li a {
  color: #fff;
  display: block;
  line-height: 54px;
  color: #fff;
  padding: 0 15px;
  font-size: 14px;
  cursor: pointer;
}
.dp-switcher-title li a img {
  margin-right: 5px;
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
.swiper {
  position: relative;
  top: -40px;
  z-index: 0;
}
/*header的css到此为止*/

.news {
  box-sizing: content-box;
  max-width: 1200px;
  background: rgba(186, 9, 32, 0.8);
  /* margin-left: auto;

  margin-right: auto; */
  margin: 0 auto;
  position: relative;
  /* height: 49px; */
  /* position: relative; */
  /* top: -40px; */
  transform: translateY(-88px);
}
.commend-news-box {
  /* background: rgba(186, 9, 32, 0.8); */
  /* transform: translateY(68px); */
  width: 100%;
  /* position: absolute; */
  /* top: -40px; */
  display: flex;
}
.uk-grid-small {
  margin-left: -15px;
}
.uk-grid-small > * {
  margin: 0;
}
.commend-news-box .live {
  background: #fff;
  width: 227px;
  height: 49px;
  line-height: 49px;
  text-align: center;
  font-size: 28px;
  color: #000;
}
.news >>> .el-carousel__indicators {
  display: none;
}
.new {
  line-height: 49px;
  padding-left: 10px;
  color: #fff;
}
.nb-2 {
  font-size: 14px;
  color: #fff;
  line-height: 49px;
  /* background: rgba(186, 9, 32, 0.8); */
  max-width: 1200px;
  margin: 0 auto;
  position: relative;
  display: flex;
}
.nb-2 .immig {
  text-align: center;
  font-size: 18px;
  line-height: 32px;
  margin: 8px 0;
  color: #fff;
  width: 255px;
  border-right: #fff 1px solid;
}
@media (max-width: 2560px) {
  .m80 {
    margin-top: 80px;
    margin-bottom: 80px;
  }
}
.uk-width-auto\@m {
  width: auto;
}
.squareslider-box {
  width: 380px;
}
.bx-wrapper {
  position: relative;
  padding: 0;
  -ms-touch-action: pan-y;
  touch-action: pan-y;
}
@media (min-width: 640px) {
  .uk-width-expand\@s {
    flex: 1;
    min-width: 1px;
  }
}
h3,
.uk-h3 {
  font-size: 1.5rem;
  line-height: 1.4;
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
.uk-position-relative {
  position: relative !important;
}
.img-updates h6 {
  text-align: center;
  width: 100%;
  margin: 0;
}
.uk-position-bottom-left {
  bottom: 0;
  left: 0;
}
.uk-text-truncate {
  max-width: 100%;
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
}
h6,
.uk-h6 {
  font-size: 0.875rem;
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
.img-updates h6 span {
  color: #fff;
  display: block;
  padding: 8px 0;
  background: rgba(0, 0, 0, 0.7);
  transition: all 0.3s;
}
.updates ul {
  margin: 0;
  padding: 0;
}
.updates ul li {
  list-style: none;
  line-height: 40px;
  border-bottom: rgba(0, 0, 0, 0.1) 1px solid;
}
.uk-text-truncate {
  max-width: 100%;
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
}
.updates ul li a {
  color: #666;
  font-size: 16px;
}
.p80 {
  padding-top: 80px;
  padding-bottom: 80px;
}
.hot-project {
  background: #f9f9f9;
}

.uk-width-expand {
  flex: 1;
  min-width: 1px;
}
.pg-title span {
  font-size: 1rem;
  line-height: 14px;
  color: #999;
}
.uk-width-expand\@m {
  flex: 1;
  min-width: 1px;
}
@media (min-width: 1200px) {
  .uk-width-2-5\@l {
    width: 56%;
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
.hot-project-tab li {
  list-style: none;
  display: inline-block;
}
.hot-project-tab li.uk-active span {
  color: #fff;
  background: #0f6ecd;
}
.hot-project-tab li span {
  display: block;
  padding: 3px 0;
  font-size: 14px;
  color: #333;
  transition: all 0.5s;
}
.hot-project-tab li span:hover {
  color: #fff;
  background: #0f6ecd;
}
.uk-child-width-expand > :not([class*='uk-width']) {
  flex: 1;
  min-width: 1px;
}
.uk-grid > * > :last-child {
  margin-bottom: 0;
}
.uk-margin-medium-top {
  margin-top: 40px !important;
}
.uk-grid-small {
  margin-left: -15px;
}
@media (min-width: 960px) {
  .uk-child-width-1-3\@m > * {
    /* width: calc(100% * 1 / 3.001); */
  }
}
.uk-grid-small > * {
  padding-left: 15px;
}
.ff {
  display: flex;
  flex-wrap: wrap;
  margin: 0 !important;
  justify-content: space-between;
}
.ff > div {
  margin: 20px 0 0 !important;
  padding: 0 !important;
  width: 32%;
}
.hot-project-switcher .uk-active {
  display: block;
}
.hot-project-switcher > div {
  display: none;
}
.m80 {
  margin-top: 80px;
  margin-bottom: 80px;
}
.uk-container {
  padding-left: 40px;
  padding-right: 40px;
}
.overseas-purchase-tab {
  padding: 0;
  margin: 0;
  text-align: right;
}
.overseas-purchase-tab li {
  display: inline-block;
  list-style: none;
  text-align: left;
  margin-left: 40px;
}
.overseas-purchase-tab li img {
  margin-right: 12px;
}
.overseas-purchase-tab li div {
  transform: translateY(3px);
}
.overseas-purchase-tab li span {
  display: block;
  font-size: 14px;
  color: #000;
  line-height: 12px;
}
.uk-switcher {
  margin: 0;
  padding: 0;
  list-style: none;
}
.purchase-switcher-card figcaption {
  padding: 30px 45px;
  text-align: center;
  border: #eee 1px solid;
}
.purchase-switcher-card figcaption h6 a {
  color: #000;
  font-size: 16px;
}
.purchase-switcher-card figcaption > .uk-flex {
  line-height: 28px;
  font-size: 12px;
  color: #999;
}

.uk-flex-center {
  justify-content: center;
}
.dd > div {
  display: none;
}
.dd .uk-active {
  display: block;
}
.links {
  background: #151e2a;
}
.links strong {
  color: #fff;
  padding: 15px 0;
  font-size: 14px;
}
.links a {
  color: #a6b0c0;
  display: inline-block;
  padding: 15px;
  font-size: 12px;
}
</style>
