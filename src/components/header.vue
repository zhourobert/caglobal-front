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
    if (menuVo[i].value) {
      menuVo[i].value.subMenuShow = false
    }
  }
  console.log(menuVo)
})

const router = useRouter()
</script>

<template>
  <!--  TODO:重新显示附属菜单，采用原来样式，getHeaderMenu type为2，附属菜单的二级菜单直接跳转到文章-->
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
                  <span @click="router.push({ path: item.route })">
                    {{ item.name }}</span
                  >
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
<!--            TODO:另外找个电话logo避免版权纠纷，电话号码按资料修改-->
            <img src="https://www.yesglobal.com.cn/tpl/www/images/phone.png" />
            <span>400-001-9801</span>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped>
.topbar {
  background-color: rgb(23, 38, 50);
  height: 42px;
  line-height: 42px;
  position: relative;
  z-index: 9;
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
nav ul li span {
  cursor: pointer;
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
