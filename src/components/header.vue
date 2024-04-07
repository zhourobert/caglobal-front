<template>
  <div class="topbar">
    <div class="uk-container">
      <div class="uk-grid">
        <div class="uk-width-auto uk-first-column">
          <a class="logo" href=""
            ><img
              src="https://www.yesglobal.com.cn/res/202010/14/80073c4fdd34f875.jpg"
          /></a>
        </div>
        <div class="uk-width-expand">
          <nav>
            <ul class="uk-grid-collapse uk-grid" uk-grid="">
              <li class="uk-width-expand uk-first-column">
                <a href="/">首页</a>
              </li>
              <li class="uk-width-expand">
                <a href="news.html">资讯中心</a>
              </li>
              <li class="uk-width-expand">
                <a href="">活动公告</a>
              </li>
              <li class="uk-width-expand">
                <a
                  href=""
                  @mouseenter="ishaiwai = true"
                  @mouseleave="ishaiwai = false"
                  >海外生活服务</a
                >
                <div
                  class="nav-dropdown uk-dropdown"
                  :class="{ 'uk-open': ishaiwai }"
                >
                  <a href="" title="海外安家服务" target="">海外安家服务</a>
                  <a href="" title="海外保险服务" target="">海外保险服务</a>
                  <a href="" title="海外教育规划" target="">海外教育规划</a>
                </div>
              </li>
              <li class="uk-width-expand">
                <a
                  href=""
                  @mouseenter="isguanyu = true"
                  @mouseleave="isguanyu = false"
                  >关于行成</a
                >
                <div
                  class="nav-dropdown uk-dropdown"
                  :class="{ 'uk-open': isguanyu }"
                >
                  <a href="" title="行成海外" target="">行成海外</a>
                  <a href="" title="创始人寄语" target="">创始人寄语</a>
                  <a href="" title="全球合伙人" target="">全球合伙人</a>
                  <a href="" title="资料下载" target="">资料下载</a>
                  <a href="" title="全球客户投诉平台" target=""
                    >全球客户投诉平台</a
                  >
                  <a href="" title="联系我们" target="">联系我们</a>
                </div>
              </li>
              <li class="uk-width-expand">
                <a href="">EB-1A成功案例</a>
              </li>
            </ul>
          </nav>
        </div>
        <div class="uk-width-auto topbar-contact">
          <div class="uk-flex uk-flex-middle">
            <img src="https://www.yesglobal.com.cn/tpl/www/images/phone.png" />
            <span>400-001-9801</span>
          </div>
        </div>
      </div>
    </div>
  </div>
  <div class="subnav">
    <div class="uk-container">
      <div class="subnav-box">
        <ul>
          <li>
            <a>美洲移民</a>
            <div class="uk-dropdown">
              <ul class="dp-switcher-title">
                <li>
                  <a href="https://www.yesglobal.com.cn/90.html"
                    ><img
                      src="https://www.yesglobal.com.cn/res/201812/17/c6f42f55336815e0.png"
                    />
                    美国</a
                  >
                </li>
                <li>
                  <a href="https://www.yesglobal.com.cn/91.html"
                    ><img
                      src="https://www.yesglobal.com.cn/res/201812/17/2fd3579168d83e25.png"
                    />
                    加拿大</a
                  >
                </li>
              </ul>
            </div>
          </li>
          <li>
            <a class="" aria-expanded="false">欧洲移民</a>
            <div class="uk-dropdown">
              <ul class="dp-switcher-title">
                <li>
                  <a href="https://www.yesglobal.com.cn/87.html"
                    ><img
                      src="https://www.yesglobal.com.cn/res/201812/17/344ef3826194416f.png"
                    />
                    希腊</a
                  >
                </li>
                <li class="">
                  <a href="https://www.yesglobal.com.cn/86.html"
                    ><img
                      src="https://www.yesglobal.com.cn/res/201812/17/8c4d7f6487f4b49e.png"
                    />
                    西班牙</a
                  >
                </li>
                <li class="">
                  <a href="https://www.yesglobal.com.cn/84.html"
                    ><img
                      src="https://www.yesglobal.com.cn/res/201812/17/bab64e00d6379156.png"
                    />
                    马耳他</a
                  >
                </li>
                <li>
                  <a href="https://www.yesglobal.com.cn/83.html"
                    ><img
                      src="https://www.yesglobal.com.cn/res/201812/17/5ebe795419fabd60.png"
                    />
                    塞浦路斯</a
                  >
                </li>
              </ul>
            </div>
          </li>
          <li>
            <a href="javascript:;" class="" aria-expanded="false">大洋洲移民</a>
            <div class="uk-dropdown">
              <ul class="dp-switcher-title">
                <li>
                  <a href="https://www.yesglobal.com.cn/92.html"
                    ><img
                      src="https://www.yesglobal.com.cn/res/201812/17/d7f3f37df0f33488.png"
                    />
                    澳大利亚</a
                  >
                </li>
                <li>
                  <a href="https://www.yesglobal.com.cn/93.html"
                    ><img
                      src="https://www.yesglobal.com.cn/res/201812/17/24e8cba64b0eef7a.png"
                    />
                    新西兰</a
                  >
                </li>
              </ul>
            </div>
          </li>
          <li>
            <a href="javascript:;" class="">亚洲移民</a>
            <div class="uk-dropdown">
              <ul class="dp-switcher-title">
                <li>
                  <a href="https://www.yesglobal.com.cn/588.html"
                    ><img
                      src="https://www.yesglobal.com.cn/res/201906/13/50893a6357be4fe1.png"
                    />
                    土耳其</a
                  >
                </li>
                <li>
                  <a href="https://www.yesglobal.com.cn/94.html"
                    ><img
                      src="https://www.yesglobal.com.cn/res/201812/17/55bba832b41b646a.png"
                    />
                    中国</a
                  >
                </li>
                <li>
                  <a href="https://www.yesglobal.com.cn/95.html"
                    ><img
                      src="https://www.yesglobal.com.cn/res/201812/17/41ba4f2135ef9754.png"
                    />
                    中国香港</a
                  >
                </li>
                <li>
                  <a href="https://www.yesglobal.com.cn/96.html"
                    ><img
                      src="https://www.yesglobal.com.cn/res/201812/17/ddd4e3625b728756.png"
                    />
                    马来西亚</a
                  >
                </li>
                <li>
                  <a href="https://www.yesglobal.com.cn/97.html"
                    ><img
                      src="https://www.yesglobal.com.cn/res/201812/17/aa40a748bed4186b.png"
                    />
                    泰国</a
                  >
                </li>
                <li>
                  <a href="https://www.yesglobal.com.cn/98.html"
                    ><img
                      src="https://www.yesglobal.com.cn/res/201812/17/4c0734db950a6332.png"
                    />
                    日本</a
                  >
                </li>
              </ul>
            </div>
          </li>
          <li><a href="https://www.yesglobal.com.cn/ownership">海外置业</a></li>

          <li>
            <a href="javascript:;" class="">国际教育</a>
            <div class="uk-dropdown">
              <ul class="dp-switcher-title">
                <li class="">
                  <a href="https://www.yesglobal.com.cn/2004.html"
                    ><img
                      src="https://www.yesglobal.com.cn/res/202107/29/148106ac906a65d9.png"
                    />青少年教育</a
                  >
                </li>
                <li class="">
                  <a href="https://www.yesglobal.com.cn/2005.html"
                    ><img
                      src="https://www.yesglobal.com.cn/res/202108/02/e211de22d71bb99d.png"
                    />升学规划</a
                  >
                </li>
                <li>
                  <a href="https://www.yesglobal.com.cn/2006.html"
                    ><img
                      src="https://www.yesglobal.com.cn/res/202108/02/34d86ca9f8534f11.png"
                    />海外留学</a
                  >
                </li>
                <li class="">
                  <a href="https://www.yesglobal.com.cn/2007.html"
                    ><img
                      src="https://www.yesglobal.com.cn/res/202108/02/c8ed286601582761.png"
                    />背景提升</a
                  >
                </li>
                <li>
                  <a href="https://www.yesglobal.com.cn/2008.html"
                    ><img
                      src="https://www.yesglobal.com.cn/res/202108/02/7a89af55e704b4a4.png"
                    />海归创业班</a
                  >
                </li>
              </ul>
            </div>
          </li>
        </ul>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue'
const ishaiwai = ref(false)

const isguanyu = ref(false)
</script>

<style scoped></style>
