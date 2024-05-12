<script setup lang="ts">
import { ref } from 'vue'
import { useRouter } from 'vue-router'
import { api } from '@/utils/axiosPackaging'
import { MenuVo } from '@/entity/Entity'
import { getHeaderMenu } from '@/utils/UrlPackaging'

let menuVo = ref(new Array<MenuVo>())
api(getHeaderMenu).then((response) => {
  menuVo.value = response.data.data
  for (let i in menuVo) {
    menuVo[i].value.subMenuShow = false
  }
  console.log(menuVo)
})

const router = useRouter()
</script>

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
              <li v-for="item in menuVo" class="uk-width-expand">
                <div
                  @mouseenter="item.subMenuShow = true"
                  @mouseleave="item.subMenuShow = false"
                >
                  <a href="">{{ item.name }}</a>
                  <div
                    v-if="item.subMenu.length !== 0"
                    class="nav-dropdown uk-dropdown"
                    :class="{ 'uk-open': item.subMenuShow }"
                  >
                    <a
                      v-for="subItem in item.subMenu"
                      href=""
                      v-title="subItem.name"
                      target=""
                      >{{ subItem.name }}</a
                    >
                  </div>
                </div>
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
  <!--  次级菜单-->
  <div class="subnav" style="opacity: 0">
    <div class="uk-container">
      <div class="subnav-box">
        <ul>
          <li>
            <a>美洲移民</a>
            <div class="uk-dropdown">
              <ul class="dp-switcher-title">
                <li>
                  <a href=""
                    ><img
                      src="https://www.yesglobal.com.cn/res/201812/17/c6f42f55336815e0.png"
                    />
                    美国</a
                  >
                </li>
                <li>
                  <a href=""
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
                  <a href=""
                    ><img
                      src="https://www.yesglobal.com.cn/res/201812/17/344ef3826194416f.png"
                    />
                    希腊</a
                  >
                </li>
                <li class="">
                  <a href=""
                    ><img
                      src="https://www.yesglobal.com.cn/res/201812/17/8c4d7f6487f4b49e.png"
                    />
                    西班牙</a
                  >
                </li>
                <li class="">
                  <a href=""
                    ><img
                      src="https://www.yesglobal.com.cn/res/201812/17/bab64e00d6379156.png"
                    />
                    马耳他</a
                  >
                </li>
                <li>
                  <a href=""
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
                  <a href=""
                    ><img
                      src="https://www.yesglobal.com.cn/res/201812/17/d7f3f37df0f33488.png"
                    />
                    澳大利亚</a
                  >
                </li>
                <li>
                  <a href=""
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
                  <a href=""
                    ><img
                      src="https://www.yesglobal.com.cn/res/201906/13/50893a6357be4fe1.png"
                    />
                    土耳其</a
                  >
                </li>
                <li>
                  <a href=""
                    ><img
                      src="https://www.yesglobal.com.cn/res/201812/17/55bba832b41b646a.png"
                    />
                    中国</a
                  >
                </li>
                <li>
                  <a href=""
                    ><img
                      src="https://www.yesglobal.com.cn/res/201812/17/41ba4f2135ef9754.png"
                    />
                    中国香港</a
                  >
                </li>
                <li>
                  <a href=""
                    ><img
                      src="https://www.yesglobal.com.cn/res/201812/17/ddd4e3625b728756.png"
                    />
                    马来西亚</a
                  >
                </li>
                <li>
                  <a href=""
                    ><img
                      src="https://www.yesglobal.com.cn/res/201812/17/aa40a748bed4186b.png"
                    />
                    泰国</a
                  >
                </li>
                <li>
                  <a href=""
                    ><img
                      src="https://www.yesglobal.com.cn/res/201812/17/4c0734db950a6332.png"
                    />
                    日本</a
                  >
                </li>
              </ul>
            </div>
          </li>
          <li><a href="">海外置业</a></li>

          <li>
            <a href="javascript:;" class="">国际教育</a>
            <div class="uk-dropdown">
              <ul class="dp-switcher-title">
                <li class="">
                  <a href=""
                    ><img
                      src="https://www.yesglobal.com.cn/res/202107/29/148106ac906a65d9.png"
                    />青少年教育</a
                  >
                </li>
                <li class="">
                  <a href=""
                    ><img
                      src="https://www.yesglobal.com.cn/res/202108/02/e211de22d71bb99d.png"
                    />升学规划</a
                  >
                </li>
                <li>
                  <a href=""
                    ><img
                      src="https://www.yesglobal.com.cn/res/202108/02/34d86ca9f8534f11.png"
                    />海外留学</a
                  >
                </li>
                <li class="">
                  <a href=""
                    ><img
                      src="https://www.yesglobal.com.cn/res/202108/02/c8ed286601582761.png"
                    />背景提升</a
                  >
                </li>
                <li>
                  <a href=""
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
</style>
