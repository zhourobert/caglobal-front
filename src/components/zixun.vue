<template>
  <div class="news-center m80">
    <div class="uk-container">
      <div class="uk-flex-middle uk-grid" uk-grid="">
        <div
          class="uk-width-auto@m uk-text-left@m uk-text-center uk-first-column"
        >
          <h3 class="pg-title">资讯中心 <span>News center</span></h3>
        </div>
        <div class="uk-width-expand@m"></div>
        <div class="uk-width-1-3@l uk-width-1-2@m">
          <ul
            class="hot-project-tab uk-text-center uk-grid-collapse uk-child-width-expand uk-grid"
            uk-grid=""
            uk-switcher="connect: .news-switcher-container"
          >
            <li
              aria-expanded="true"
              class="uk-first-column"
              :class="{ 'uk-active': type == 'xinwen' }"
              @click="type = 'xinwen'"
            >
              <div href="">新闻动态</div>
            </li>
            <li
              @click="type = 'baike'"
              :class="{ 'uk-active': type == 'baike' }"
            >
              <div href="">移民百科</div>
            </li>
            <li
              @click="type = 'shengh'"
              :class="{ 'uk-active': type == 'shengh' }"
            >
              <div href="">移民生活</div>
            </li>
            <li @click="type = 'anli'" :class="{ 'uk-active': type == 'anli' }">
              <div href="">成功案例</div>
            </li>
          </ul>
        </div>
        <div class="uk-width-auto@m uk-visible@m">
          <div class="uk-switcher news-switcher-container news-center-more">
            <div class="uk-active">
              <a href=""
                >More</a
              >
            </div>
          </div>
        </div>
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
                    <a href=""
                      ><img
                        src="https://www.yesglobal.com.cn/res/201903/15/5f8b937cb59e30cc.jpg"
                    /></a>
                  </li>
                </ul>
              </div>
            </div>
            <div class="uk-width-3-5@m uk-flex-first@m uk-first-column">
              <div class="news-box uk-grid" uk-grid="">
                <div class="uk-width-auto uk-first-column">
                  <div class="news-date">
                    <span>04-01</span>
                    <i>2024</i>
                  </div>
                </div>
                <div class="uk-width-expand">
                  <h5 class="uk-text-truncate">
                    <a href=""
                      >干货 | EB1A申请为何会被拒？原因在这里！
                    </a>
                  </h5>
                  <p>
                    凭借无投资风险及排期时间短等优势，EB1A申请在近几年热度高涨。但EB1A申请需要大量的证据支撑及详实的文件准备，因此专业的文案..
                  </p>
                </div>
              </div>
              <div class="news-box uk-grid" uk-grid="">
                <div class="uk-width-auto uk-first-column">
                  <div class="news-date">
                    <span>03-28</span>
                    <i>2024</i>
                  </div>
                </div>
                <div class="uk-width-expand">
                  <h5 class="uk-text-truncate">
                    <a href=""
                      >官宣！新加坡EP申请门槛再次提高
                    </a>
                  </h5>
                  <p>
                    2024年3月4日新加坡人力部宣布：将再次调高新加坡就业准证（EP）的收入门槛！并从2025年1月起，将从原有的5000新元调高至5600新元..
                  </p>
                </div>
              </div>
              <div class="news-box uk-grid" uk-grid="">
                <div class="uk-width-auto uk-first-column">
                  <div class="news-date">
                    <span>03-28</span>
                    <i>2024</i>
                  </div>
                </div>
                <div class="uk-width-expand">
                  <h5 class="uk-text-truncate">
                    <a href=""
                      >最新！希腊移民新政解读
                    </a>
                  </h5>
                  <p>
                    2024年3月21日希腊国民经济和财政部长哈齐达基斯宣布了关于希腊本次“黄金签证”的调整细则。哈齐达基斯宣布，希腊“黄金签证”的..
                  </p>
                </div>
              </div>
              <div class="news-box uk-grid" uk-grid="">
                <div class="uk-width-auto uk-first-column">
                  <div class="news-date">
                    <span>03-25</span>
                    <i>2024</i>
                  </div>
                </div>
                <div class="uk-width-expand">
                  <h5 class="uk-text-truncate">
                    <a href=""
                      >十年美签到期，可申请续签免面试！
                    </a>
                  </h5>
                  <p>
                    十年美签如何申请免面试及申请条件2014年11月美国驻华大使馆签证处为首批获得十年签的中国申请人颁发了新签证。如今十年将至，第..
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div :class="{ 'uk-active': type == 'baike' }">
          <div uk-grid="" class="uk-grid">
            <div class="uk-width-2-5@m uk-flex-last@m">
              <div uk-slideshow="ratio: 4:3.3" class="uk-slideshow">
                <ul class="uk-slideshow-items" style="min-height: 0px">
                  <li
                    class="uk-active uk-transition-active"
                    style="transform: translateX(0px)"
                  >
                    <img
                      src="https://www.yesglobal.com.cn/res/201903/15/121493240de9bd84.jpg"
                    />
                    <a href="" class="uk-position-cover"></a>
                  </li>
                </ul>
              </div>
            </div>
            <div class="uk-width-3-5@m uk-flex-first@m">
              <div class="news-box uk-grid" uk-grid="">
                <div class="uk-width-auto">
                  <div class="news-date">
                    <span>08-15</span>
                    <i>2023</i>
                  </div>
                </div>
                <div class="uk-width-expand">
                  <h5 class="uk-text-truncate">
                    <a href=""
                      >葡萄牙公布7月黄金签证数据，2023年至今批准量已接近1,000宗！
                    </a>
                  </h5>
                  <p>
                    近日，葡萄牙移民局(SEF)公布了2023年7月黄金签证数据。数据显示，2023年7月共有101位主申请人和169位附属申请人获批葡萄牙黄金签..
                  </p>
                </div>
              </div>
              <div class="news-box uk-grid" uk-grid="">
                <div class="uk-width-auto">
                  <div class="news-date">
                    <span>09-09</span>
                    <i>2022</i>
                  </div>
                </div>
                <div class="uk-width-expand">
                  <h5 class="uk-text-truncate">
                    <a href=""
                      >美移民局就EB-5相关新表格征集公众意见，首发推广机构登记表I-956K！
                    </a>
                  </h5>
                  <p>
                    9月2日，美国国土安全部、美国移民局邀请公众和其他联邦机构对拟议的新信息收集发表意见。意见征集已在联邦公报上发布，截止2022..
                  </p>
                </div>
              </div>
              <div class="news-box uk-grid" uk-grid="">
                <div class="uk-width-auto">
                  <div class="news-date">
                    <span>11-24</span>
                    <i>2020</i>
                  </div>
                </div>
                <div class="uk-width-expand">
                  <h5 class="uk-text-truncate">
                    <a href=""
                      >从美本TOP50的「转学成功率」，我发现了这些秘密
                    </a>
                  </h5>
                  <p>
                    好不容易申请到美国大学，却不是自己最理想的院校？别伤心！其实，你还是有机会的！通过“曲线救国”的转学申请，就有可能进入你..
                  </p>
                </div>
              </div>
              <div class="news-box uk-grid" uk-grid="">
                <div class="uk-width-auto">
                  <div class="news-date">
                    <span>11-02</span>
                    <i>2020</i>
                  </div>
                </div>
                <div class="uk-width-expand">
                  <h5 class="uk-text-truncate">
                    <a href=""
                      >创历史记录！加拿大重磅宣布：计划未来3年将狂揽123万新移民！
                    </a>
                  </h5>
                  <p>
                    当地时间10月30日，加拿大移民部长马可·门迪基诺公布了一项为期三年的移民计划。加拿大计划在未来3年，狂揽总计接收123.3万新移..
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div :class="{ 'uk-active': type == 'shengh' }">
          <div uk-grid="" class="uk-grid">
            <div class="uk-width-2-5@m uk-flex-last@m">
              <div uk-slideshow="ratio: 4:3.3" class="uk-slideshow">
                <ul class="uk-slideshow-items" style="min-height: 0px">
                  <li
                    class="uk-active uk-transition-active"
                    style="transform: translateX(0px)"
                  >
                    <a href=""
                      ><img
                        src="https://www.yesglobal.com.cn/res/201903/15/51b9fc6f35f1fe00.jpg"
                    /></a>
                  </li>
                </ul>
              </div>
            </div>
            <div class="uk-width-3-5@m uk-flex-first@m">
              <div class="news-box uk-grid" uk-grid="">
                <div class="uk-width-auto">
                  <div class="news-date">
                    <span>10-23</span>
                    <i>2020</i>
                  </div>
                </div>
                <div class="uk-width-expand">
                  <h5 class="uk-text-truncate">
                    <a href=""
                      >关于加拿大访问签证、旅游签转工签的几个问题！
                    </a>
                  </h5>
                  <p>
                    近期，加拿大政府重新调整了现有的入境豁免政策，从10月8起，大家庭成员和出于人道主义理由旅行的人可以入境加拿大，不需要强制性..
                  </p>
                </div>
              </div>
              <div class="news-box uk-grid" uk-grid="">
                <div class="uk-width-auto">
                  <div class="news-date">
                    <span>09-23</span>
                    <i>2020</i>
                  </div>
                </div>
                <div class="uk-width-expand">
                  <h5 class="uk-text-truncate">
                    <a href=""
                      >日本陪读签证有吗？子女留学日本，我可以去日本陪读吗？
                    </a>
                  </h5>
                  <p>
                    日本紧邻中国，身为一个发达国家，教育自然也不落后，所以每年都有不少的中国大学生选择留学日本，所以对于子女留学日本的家庭来..
                  </p>
                </div>
              </div>
              <div class="news-box uk-grid" uk-grid="">
                <div class="uk-width-auto">
                  <div class="news-date">
                    <span>09-21</span>
                    <i>2020</i>
                  </div>
                </div>
                <div class="uk-width-expand">
                  <h5 class="uk-text-truncate">
                    <a href=""
                      >已经移民美国的人生活过得还好吗？一切冷暖自知！
                    </a>
                  </h5>
                  <p>
                    每年中国移民美国生活的人数非常多，一般移民过去的华人，都是聚集到一片生活，一般来说文化和交流上没有太大的担忧，但是也仅限..
                  </p>
                </div>
              </div>
              <div class="news-box uk-grid" uk-grid="">
                <div class="uk-width-auto">
                  <div class="news-date">
                    <span>09-07</span>
                    <i>2020</i>
                  </div>
                </div>
                <div class="uk-width-expand">
                  <h5 class="uk-text-truncate">
                    <a href=""
                      >停摆3个月的美国护照，恢复发放了，申请或换新的要注意了！
                    </a>
                  </h5>
                  <p>
                    因新冠病疫停摆了三个月的美国护照核发已恢复，180万件积案处理顺利，国务院官员说，不管旧照过期还是要进行美国换照更换，或首次..
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div :class="{ 'uk-active': type == 'anli' }">
          <div uk-grid="" class="uk-grid">
            <div class="uk-width-2-5@m uk-flex-last@m">
              <div uk-slideshow="ratio: 4:3.3" class="uk-slideshow">
                <ul class="uk-slideshow-items" style="min-height: 0px">
                  <li
                    class="uk-active uk-transition-active"
                    style="transform: translateX(0px)"
                  >
                    <a href=""
                      ><img
                        src=""
                    /></a>
                  </li>
                </ul>
              </div>
            </div>
            <div class="uk-width-3-5@m uk-flex-first@m">
              <div class="news-box uk-grid" uk-grid="">
                <div class="uk-width-auto">
                  <div class="news-date">
                    <span>11-30</span>
                    <i>2020</i>
                  </div>
                </div>
                <div class="uk-width-expand">
                  <h5 class="uk-text-truncate">
                    <a href=""
                      >徐女士留学移民成功案例
                    </a>
                  </h5>
                  <p>
                    徐女士，1985 年生 国内学历：软件工程（国内本科）
                    国内工作经验：测试开发工程师（5 年） 当时英文程度：雅思 6 分
                    移民前期：..
                  </p>
                </div>
              </div>
              <div class="news-box uk-grid" uk-grid="">
                <div class="uk-width-auto">
                  <div class="news-date">
                    <span>10-13</span>
                    <i>2020</i>
                  </div>
                </div>
                <div class="uk-width-expand">
                  <h5 class="uk-text-truncate">
                    <a href=""
                      >美国杰出人才成功案例：市场总监如何未补件一次通过美国杰出人才
                    </a>
                  </h5>
                  <p>
                    长假刚刚结束，我们行成海外便收到了一个好消息，节前刚刚递交的某旅游网站市场总监M女士，喜获美国杰出人才移民批准。用时仅1周..
                  </p>
                </div>
              </div>
              <div class="news-box uk-grid" uk-grid="">
                <div class="uk-width-auto">
                  <div class="news-date">
                    <span>09-07</span>
                    <i>2020</i>
                  </div>
                </div>
                <div class="uk-width-expand">
                  <h5 class="uk-text-truncate">
                    <a href=""
                      >入籍加拿大的利与弊！
                    </a>
                  </h5>
                  <p>
                    关于弊：1、中国不承认双国籍，入籍加拿大后，等于自动放弃中国国籍；2、想要再次回中国，可以比较不方便，需要重新办理诸多签证..
                  </p>
                </div>
              </div>
              <div class="news-box uk-grid" uk-grid="">
                <div class="uk-width-auto">
                  <div class="news-date">
                    <span>07-30</span>
                    <i>2020</i>
                  </div>
                </div>
                <div class="uk-width-expand">
                  <h5 class="uk-text-truncate">
                    <a href=""
                      >行成海外恭喜Z先生成功获批日本经营管理签证！
                    </a>
                  </h5>
                  <p>
                    Z先生在国内经营一家电器公司，出售的产品中也有不少日本的品牌。Z先生的夫人非常喜欢日本，经常和孩子去日本度假旅游。在去年的..
                  </p>
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
import { ref } from 'vue'
const type = ref('xinwen')
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
.news-box h5 a {
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
