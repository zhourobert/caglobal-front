<template>
  <!-- <header1></header1> -->
  <Header></Header>

  <div class="index-banner uk-position-relative">
    <!-- banner-->
    <div class="page-banner uk-text-center uk-visible@m">
      <img
        src="https://www.yesglobal.com.cn/res/201906/10/6215069a21796b8e.jpg"
      />
    </div>
    <div class="page-banner uk-text-center uk-hidden@m">
      <img
        src="https://www.yesglobal.com.cn/res/201906/10/6215069a21796b8e.jpg"
      />
    </div>

    <div class="page-nav uk-position-bottom-left uk-width-1-1">
      <div class="uk-container">
        <div
          class="uk-child-width-1-5@l uk-child-width-1-4 uk-grid-collapse uk-grid"
          uk-grid=""
        ></div>
      </div>
    </div>
  </div>
  <div class="breadcrumb">
    <div class="uk-container">
      <ul>
        <li>您的位置：</li>
        <li @click="router.push('/')">首页</li>
        <li>热门项目</li>
      </ul>
    </div>
  </div>
  <section class="uk-margin-large">
    <div class="uk-container">
      <h3 class="pg-title uk-margin-medium-bottom">
        热门项目 <span>Project</span>
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
                  <span @click="router.push('/info')" style="color: #1e87f0">{{
                    item.title
                  }}</span>
                </h5>
                <p v-html="item.text" class="vHtml"></p>
              </div>
              <div class="uk-width-auto uk-visible@m">
                <div class="news-list-date">
                  <span>{{ item.time }}</span>
                  <img
                    src="https://www.yesglobal.com.cn/tpl/www/images/arrow-right.jpg"
                  />
                </div>
              </div>
            </div>
            <hr />
          </div>
          <hr />

          <div class="uk-margin">
            <ul class="pages">
              <li>
                <a href="">上一页</a>
              </li>
              <li>
                <a href="" class="active">1</a>
              </li>
              <li>
                <a href="">2</a>
              </li>
              <li>
                <a href="">3</a>
              </li>
              <li>
                <a href="">4</a>
              </li>
              <li>
                <a href="">5</a>
              </li>
              <li>
                <a href="">6</a>
              </li>
              <li>
                <a href="">下一页</a>
              </li>
            </ul>
          </div>
        </div>
        <div class="uk-width-1-3@m">
          <h3 class="pg-title uk-margin-small-bottom">
            热点资讯 <span>Latest Events</span>
          </h3>
          <div class="uk-inline-clip side-figure">
            <img
              src="https://www.yesglobal.com.cn/res/202105/26/thumb_8308.png"
              alt="2021年6月签证排期公告：EB-5前进1个月，EB-1继续无排期！"
            />
            <h6 class="uk-position-bottom uk-overlay">
              2021年6月签证排期公告：EB-5前进1个月，EB..
            </h6>
            <a href="" class="uk-position-cover"></a>
          </div>
          <div class="uk-margin side-more">
            <div class="uk-text-truncate">
              <a href="">10月美签预约全部取消全部取消，2020年恢复无望</a>
            </div>
            <hr />
            <div class="uk-text-truncate">
              <a href=""
                >2020年10月美国移民排期公布（新财年第一个月：表B开放）</a
              >
            </div>
            <hr />
            <div class="uk-text-truncate">
              <a href="">日本新签证制度：给予日本留学生2年创业时间</a>
            </div>
            <hr />
            <div class="uk-text-truncate">
              <a href=""
                >加拿大移民部公布新政细节：这些人不用离境也能申请工签</a
              >
            </div>
            <hr />
          </div>
          <h3 class="pg-title uk-margin-small-bottom">
            热门项目 <span>Hot Project</span>
          </h3>
          <div class="uk-inline-clip side-figure uk-margin-small-bottom">
            <img
              src="https://www.yesglobal.com.cn/res/201912/26/thumb_5530.png"
              alt="美国杰出人才移民"
            />
            <h6 class="uk-position-bottom uk-overlay">美国杰出人才移民</h6>
            <a href="" class="uk-position-cover"></a>
          </div>
          <div class="uk-inline-clip side-figure uk-margin-small-bottom">
            <img
              src="https://www.yesglobal.com.cn/res/201905/23/thumb_2957.jpg"
              alt="西班牙置业移民"
            />
            <h6 class="uk-position-bottom uk-overlay">西班牙置业移民</h6>
            <a href="" class="uk-position-cover"></a>
          </div>
          <div class="uk-inline-clip side-figure uk-margin-small-bottom">
            <img
              src="https://www.yesglobal.com.cn/res/201812/19/thumb_328.jpg"
              alt="马耳他投资移民"
            />
            <h6 class="uk-position-bottom uk-overlay">马耳他投资移民</h6>
            <a href="" class="uk-position-cover"></a>
          </div>
          <div class="uk-inline-clip side-figure uk-margin-small-bottom">
            <img
              src="https://www.yesglobal.com.cn/res/201903/18/thumb_1462.jpg"
              alt="圣基茨尼维斯护照"
            />
            <h6 class="uk-position-bottom uk-overlay">圣基茨尼维斯护照</h6>
            <a href="" class="uk-position-cover"></a>
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
import { useRouter } from 'vue-router'
import footer1 from '@/components/footer.vue'
import { ref, onMounted } from 'vue'
import Header from '@/components/header.vue'
import { queryList } from '@/utils/UrlPackaging'
import { api } from '@/utils/axiosPackaging'
import Dialog1 from '@/components/dialog.vue'

const router = useRouter()

const ishaiwai = ref(false)
const isguanyu = ref(false)
const blogList = ref([])

onMounted(() => {
  getBlogList()
})
const getBlogList = async () => {
  const res = await api.get(queryList)
  blogList.value = res.data.data.records
  blogList.value = blogList.value.filter((item) => item.typeId == 1)
  blogList.value.forEach((item) => {
    const date = new Date(item.updateTime)

    // 获取月份和日期
    const month = date.getMonth() + 1 // 月份从 0 开始，所以要加 1
    const day = date.getDate()
    item.time = month + '-' + day
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
</style>
