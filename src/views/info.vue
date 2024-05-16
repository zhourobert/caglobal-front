<template>
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
        <li @click="router.push('/' + route.query.type)">
          {{ map[route.query.type] }}
        </li>
        <li>{{ info.title }}</li>
      </ul>
    </div>
  </div>
  <section class="uk-margin-large">
    <div class="uk-container">
      <div class="uk-grid-large uk-grid" uk-grid="">
        <div class="uk-width-2-3@m uk-first-column">
          <!-- 详情 -->
          <h1>{{ info.title }}</h1>
          <div class="article-meta">
            时间：{{ info.time }} 来源：{{ info.source }} 点击量：{{
              info.hits
            }}
          </div>
          <hr />
          <div v-html="info.text"></div>
          <div class="uk-margin-medium">
            <div class="d-page">
              <p>
                上一篇：
                <a
                  href="https://www.yesglobal.com.cn/2202.html"
                  title="十年美签到期，可申请续签免面试！"
                  >十年美签到期，可申请续签免面试！</a
                >
              </p>
              <p>下一篇： 没有了</p>
            </div>
          </div>

          <hr />
          <div
            class="uk-grid-small uk-child-width-1-2@m uk-grid uk-grid-stack"
            uk-grid=""
          ></div>
        </div>
        <div class="uk-width-1-3@m">
          <h3 class="pg-title uk-margin-small-bottom">
            最新移民百科 <span>Encyclopedias</span>
          </h3>
          <div class="baike">
            <h6 class="uk-text-truncate">
              <i>1</i
              ><a href="https://www.yesglobal.com.cn/1927.html"
                >移民澳大利亚的话，我中国国籍还在吗？</a
              >
            </h6>
            <p class="uk-text-truncate">
              澳大利亚一直都是一个移民大国，凭借着优质的生活环境和社会福利..
            </p>
          </div>
          <div class="baike">
            <h6 class="uk-text-truncate">
              <i>2</i
              ><a href="https://www.yesglobal.com.cn/1924.html"
                >2020受国内欢迎的移民美国方式的条件都是什么？</a
              >
            </h6>
            <p class="uk-text-truncate">
              自21世纪以来，人们的生活方式和水平都发生了巨大的改变，也有不..
            </p>
          </div>
          <div class="baike">
            <h6 class="uk-text-truncate">
              <i>3</i
              ><a href="https://www.yesglobal.com.cn/1900.html"
                >选择美国杰出人才申请前必须了解的五个步骤！</a
              >
            </h6>
            <p class="uk-text-truncate">
              第一步：了解美国杰出人才EB1A（E11）- 中国自主申请人真实数量及..
            </p>
          </div>
          <div class="baike">
            <h6 class="uk-text-truncate">
              <i>4</i
              ><a href="https://www.yesglobal.com.cn/936.html"
                >入籍澳大利亚之后要知道的公民权利和义务</a
              >
            </h6>
            <p class="uk-text-truncate">
              权利是指一国公民依法应享有的权利和利益，或者法律关系主体在法..
            </p>
          </div>

          <h3 class="pg-title uk-margin-small-bottom">
            实时政策要点 <span>Events</span>
          </h3>
          <div class="yaodian">
            <div class="uk-grid-small uk-grid" uk-grid="">
              <div class="uk-width-1-3 uk-first-column">
                <a href="https://www.yesglobal.com.cn/1974.html"
                  ><img
                    src="https://www.yesglobal.com.cn/res/202011/23/thumb_8172.png"
                    alt="美国排期更新，EB1又前进4个月，即将引来无排期！"
                /></a>
              </div>
              <div class="uk-width-2-3">
                <h6 class="uk-text-truncate">
                  <a href="https://www.yesglobal.com.cn/1974.html"
                    >美国排期更新，EB1又前进4个月，即将引来无排期！</a
                  >
                </h6>
                <p class="uk-text-truncate">
                  美国国务院签证办公室公布了2020年12月的签证公告（Visa Bulleti..
                </p>
              </div>
            </div>
          </div>
          <div class="yaodian">
            <div class="uk-grid-small uk-grid" uk-grid="">
              <div class="uk-width-1-3 uk-first-column">
                <a href="https://www.yesglobal.com.cn/1946.html"
                  ><img
                    src="https://www.yesglobal.com.cn/res/202010/12/thumb_8087.png"
                    alt="10月美签预约全部取消全部取消，2020年恢复无望"
                /></a>
              </div>
              <div class="uk-width-2-3">
                <h6 class="uk-text-truncate">
                  <a href="https://www.yesglobal.com.cn/1946.html"
                    >10月美签预约全部取消全部取消，2020年恢复无望</a
                  >
                </h6>
                <p class="uk-text-truncate">
                  十月美签预约全部取消美国驻华使领馆发布最新通知，取消10月30日..
                </p>
              </div>
            </div>
          </div>
          <div class="yaodian">
            <div class="uk-grid-small uk-grid" uk-grid="">
              <div class="uk-width-1-3 uk-first-column">
                <a href="https://www.yesglobal.com.cn/1932.html"
                  ><img
                    src="https://www.yesglobal.com.cn/res/202009/23/thumb_8047.png"
                    alt="日本新签证制度：给予日本留学生2年创业时间"
                /></a>
              </div>
              <div class="uk-width-2-3">
                <h6 class="uk-text-truncate">
                  <a href="https://www.yesglobal.com.cn/1932.html"
                    >日本新签证制度：给予日本留学生2年创业时间</a
                  >
                </h6>
                <p class="uk-text-truncate">
                  人民网东京9月23日电据《日本经济新闻》报道，为了给在日外国留学..
                </p>
              </div>
            </div>
          </div>
          <div class="yaodian">
            <div class="uk-grid-small uk-grid" uk-grid="">
              <div class="uk-width-1-3 uk-first-column">
                <a href="https://www.yesglobal.com.cn/1929.html"
                  ><img
                    src="https://www.yesglobal.com.cn/res/202009/23/thumb_8041.png"
                    alt="加拿大移民部公布新政细节：这些人不用离境也能申请工签"
                /></a>
              </div>
              <div class="uk-width-2-3">
                <h6 class="uk-text-truncate">
                  <a href="https://www.yesglobal.com.cn/1929.html"
                    >加拿大移民部公布新政细节：这些人不用离境也能申请工签</a
                  >
                </h6>
                <p class="uk-text-truncate">
                  来源：中新网9月21日电据加拿大《星岛日报》综合报道，哪些临时居..
                </p>
              </div>
            </div>
          </div>
          <div class="yaodian">
            <div class="uk-grid-small uk-grid" uk-grid="">
              <div class="uk-width-1-3 uk-first-column">
                <a href="https://www.yesglobal.com.cn/1888.html"
                  ><img
                    src="https://www.yesglobal.com.cn/res/202009/01/thumb_7888.png"
                    alt="注意：美国移民局部分移民服务费用将从10月2日起涨价！"
                /></a>
              </div>
              <div class="uk-width-2-3">
                <h6 class="uk-text-truncate">
                  <a href="https://www.yesglobal.com.cn/1888.html"
                    >注意：美国移民局部分移民服务费用将从10月2日起涨价！</a
                  >
                </h6>
                <p class="uk-text-truncate">
                  中新网9月1日电据美国《世界日报》报道，日前，美国国土安全部调..
                </p>
              </div>
            </div>
          </div>
          <div class="yaodian">
            <div class="uk-grid-small uk-grid" uk-grid="">
              <div class="uk-width-1-3 uk-first-column">
                <a href="https://www.yesglobal.com.cn/1786.html"
                  ><img
                    src="https://www.yesglobal.com.cn/res/202007/27/thumb_7376.png"
                    alt="日本放宽入境限制，持有在留签证，就可以入境日本！"
                /></a>
              </div>
              <div class="uk-width-2-3">
                <h6 class="uk-text-truncate">
                  <a href="https://www.yesglobal.com.cn/1786.html"
                    >日本放宽入境限制，持有在留签证，就可以入境日本！</a
                  >
                </h6>
                <p class="uk-text-truncate">
                  考虑到长期在日本居住的外国人出现暂时离境后不能返回日本的情况..
                </p>
              </div>
            </div>
          </div>
          <div class="yaodian">
            <div class="uk-grid-small uk-grid" uk-grid="">
              <div class="uk-width-1-3 uk-first-column">
                <a href="https://www.yesglobal.com.cn/1411.html"
                  ><img
                    src="https://www.yesglobal.com.cn/res/202003/18/thumb_6100.jpg"
                    alt="要闻：加拿大宣布封国，非公民及非永久居民不得入境！"
                /></a>
              </div>
              <div class="uk-width-2-3">
                <h6 class="uk-text-truncate">
                  <a href="https://www.yesglobal.com.cn/1411.html"
                    >要闻：加拿大宣布封国，非公民及非永久居民不得入境！</a
                  >
                </h6>
                <p class="uk-text-truncate">
                  据CTV报道，在加东时间3月16日下午1时举行的新闻发布会上，加拿大..
                </p>
              </div>
            </div>
          </div>
          <div class="yaodian">
            <div class="uk-grid-small uk-grid" uk-grid="">
              <div class="uk-width-1-3 uk-first-column">
                <a href="https://www.yesglobal.com.cn/935.html"
                  ><img
                    src="https://www.yesglobal.com.cn/res/201909/26/thumb_4247.jpg"
                    alt="美国会启动对总统弹劾程序，特朗普会被弹劾下台吗?"
                /></a>
              </div>
              <div class="uk-width-2-3">
                <h6 class="uk-text-truncate">
                  <a href="https://www.yesglobal.com.cn/935.html"
                    >美国会启动对总统弹劾程序，特朗普会被弹劾下台吗?</a
                  >
                </h6>
                <p class="uk-text-truncate">
                  美国总统特朗普遭弹劾美国众议院议长佩洛西在东部时间周二下午5点..
                </p>
              </div>
            </div>
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
import footer1 from '@/components/footer.vue'
import Header from '@/components/header.vue'
import { useRouter, useRoute } from 'vue-router'
import { getBlog } from '@/utils/UrlPackaging'
import { api } from '@/utils/axiosPackaging'
import Dialog1 from '@/components/dialog.vue'

const router = useRouter()
const route = useRoute()
import { ref, onMounted } from 'vue'
const ishaiwai = ref(false)
const isguanyu = ref(false)
let info: any = ref({})
let map = {
  case: '寰球案例',
  project: '热门项目',
  schoolInformation: '学校资讯',
  recommendation: '留学建议'
}
onMounted(() => {
  // if (route.query.type == 'case' || route.query.type == 'project') {
  api.get(getBlog + '?id=' + route.query.id).then((res) => {
    info.value = res.data.data

    // 创建一个新的 Date 对象
    let date = new Date(info.value.updateTime)

    // 获取年、月、日、小时、分钟和秒
    let year = date.getFullYear()
    let month = ('0' + (date.getMonth() + 1)).slice(-2) // 月份从 0 开始，所以要加 1
    let day = ('0' + date.getDate()).slice(-2)
    let hours = ('0' + date.getHours()).slice(-2)
    let minutes = ('0' + date.getMinutes()).slice(-2)
    let seconds = ('0' + date.getSeconds()).slice(-2)

    // 格式化为指定格式的字符串
    let formattedDate =
      year +
      '-' +
      month +
      '-' +
      day +
      ' ' +
      hours +
      ':' +
      minutes +
      ':' +
      seconds

    info.value.time = formattedDate
  })
  // }
})
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
</style>
