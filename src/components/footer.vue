<template>
  <footer class="uk-visible@m">
    <div class="uk-container">
      <div uk-grid="" class="uk-grid">
        <div class="uk-width-3-5@m uk-first-column">
          <div class="footer-nav">
            <ul></ul>
          </div>
          <br />
          <div class="address-switcher-title">
            <ul uk-grid="" class="uk-child-width-1-6 uk-grid-collapse uk-grid">
              <li
                data-id="address-1"
                class="uk-first-column"
                @mouseenter="isShow = 'shanghai'"
                :class="{ active: isShow == 'shanghai' }"
              >
                <a>总部·广州</a>
              </li>
              <li
                data-id="address-2"
                @mouseenter="isShow = 'meiguo'"
                :class="{ active: isShow == 'meiguo' }"
              >
                <a>寰宇·美国</a>
              </li>
              <li
                data-id="address-3"
                @mouseenter="isShow = 'yidali'"
                :class="{ active: isShow == 'yidali' }"
              >
                <a>寰宇·意大利</a>
              </li>
            </ul>
          </div>
          <div class="address-switcher-content">
            <div id="address-1" :class="{ active: isShow == 'shanghai' }">
              <address>
                <p>
                  <span style="font-size: 16px"
                    >全国免费咨询热线：400-001-9801&nbsp;</span
                  >
                </p>
                <p>
                  <span style="font-size: 16px"
                    >24小时咨询热线：150 0087 5706</span
                  >
                </p>
                <p>
                  <span style="font-size: 16px"
                    >上海行成因私出入境服务有限公司</span
                  >
                </p>
                <p>
                  <span style="font-size: 16px"
                    >地址：上海市黄浦区南京西路399号明天广场8楼</span
                  >
                </p>
                <p>
                  <span style="font-size: 16px"
                    >邮箱：infor@yesinvest.com.cn</span
                  >
                </p>
              </address>
            </div>
            <div id="address-2" :class="{ active: isShow == 'meiguo' }">
              <address>
                <p>
                  <span style="font-size: 16px"
                    ><span
                      style="
                        font-size: 16px;
                        font-family: arial, helvetica, sans-serif;
                      "
                      >Email： lynn@mccusa.org</span
                    ></span
                  >
                </p>
                <p>
                  <span
                    style="
                      font-size: 16px;
                      font-family: arial, helvetica, sans-serif;
                    "
                    >Tel： 400-001-9801</span
                  >
                </p>
                <p>
                  <span
                    style="
                      font-size: 16px;
                      font-family: arial, helvetica, sans-serif;
                    "
                    >Y.E.S. PRIVATE EXIT&amp;ENTRY SERVICE CO.,LTD</span
                  >
                </p>
                <p>
                  <span
                    style="
                      font-size: 16px;
                      font-family: arial, helvetica, sans-serif;
                    "
                    >&nbsp;Address: 5940 OAK Ave, TEMPLE CITY, CA 91780</span
                  >
                </p>
                <p>
                  <span
                    style="
                      font-size: 16px;
                      font-family: arial, helvetica, sans-serif;
                    "
                    >United States</span
                  >
                </p>
              </address>
            </div>
            <div id="address-3" :class="{ active: isShow == 'yidali' }">
              <address>
                <p
                  style="background-color: transparent; color: rgb(0, 0, 0); font-family: &amp;quot;微软雅黑&amp;quot;,&amp;quot;宋体&amp;quot;,&amp;quot;Arial Narrow&amp;quot;,HELVETICA; font-size: 16px; font-style: normal; font-variant: normal; font-weight: 500; letter-spacing: normal; line-height: 24px; margin-bottom: 0px; margin-left: 0px; margin-right: 0px; margin-top: 0px; orphans: 2; text-align: left; text-decoration: none; text-indent: 0px; text-transform: none; vertical-align: baseline; -webkit-text-stroke-width: 0px; white-space: normal; word-spacing: 0px;"
                >
                  <span
                    style="
                      font-family: arial, helvetica, sans-serif;
                      color: rgb(255, 255, 255);
                    "
                    >Tel： 400-001-9801<br
                  /></span>
                </p>
                <p
                  style="background-color: transparent; color: rgb(0, 0, 0); font-family: &amp;quot;微软雅黑&amp;quot;,&amp;quot;宋体&amp;quot;,&amp;quot;Arial Narrow&amp;quot;,HELVETICA; font-size: 16px; font-style: normal; font-variant: normal; font-weight: 500; letter-spacing: normal; line-height: 24px; margin-bottom: 0px; margin-left: 0px; margin-right: 0px; margin-top: 0px; orphans: 2; text-align: left; text-decoration: none; text-indent: 0px; text-transform: none; vertical-align: baseline; -webkit-text-stroke-width: 0px; white-space: normal; word-spacing: 0px;"
                >
                  <span
                    style="
                      font-family: arial, helvetica, sans-serif;
                      font-size: 16px;
                      color: rgb(255, 255, 255);
                    "
                    >Y.E.S. PRIVATE EXIT&amp;ENTRY SERVICE CO.,LTD</span
                  >
                </p>
                <p
                  style="
                    background-color: transparent;
                    color: rgb(0, 0, 0);
                    font-size: 16px;
                    font-style: normal;
                    font-variant: normal;
                    font-weight: 500;
                    letter-spacing: normal;
                    line-height: 24px;
                    margin: 0px;
                    orphans: 2;
                    text-align: left;
                    text-decoration: none;
                    text-indent: 0px;
                    text-transform: none;
                    vertical-align: baseline;
                    -webkit-text-stroke-width: 0px;
                    white-space: normal;
                    word-spacing: 0px;
                  "
                >
                  <span style="color: rgb(242, 242, 242)"
                    ><span
                      style="
                        font-family: arial, helvetica, sans-serif;
                        font-size: 16px;
                      "
                      >Address:</span
                    >v</span
                  ><span style="color: rgb(255, 255, 255)"
                    >iale&nbsp; berengario 11，Milano，Italia</span
                  >
                </p>
                <p
                  style="
                    background-color: transparent;
                    color: rgb(0, 0, 0);
                    font-size: 16px;
                    font-style: normal;
                    font-variant: normal;
                    font-weight: 500;
                    letter-spacing: normal;
                    line-height: 24px;
                    margin: 0px;
                    orphans: 2;
                    text-align: left;
                    text-decoration: none;
                    text-indent: 0px;
                    text-transform: none;
                    vertical-align: baseline;
                    -webkit-text-stroke-width: 0px;
                    white-space: normal;
                    word-spacing: 0px;
                  "
                >
                  <span style="color: rgb(255, 255, 255)"><br /></span>
                </p>
                <p
                  style="
                    background-color: transparent;
                    color: rgb(0, 0, 0);
                    font-size: 16px;
                    font-style: normal;
                    font-variant: normal;
                    font-weight: 500;
                    letter-spacing: normal;
                    line-height: 24px;
                    margin: 0px;
                    orphans: 2;
                    text-align: left;
                    text-decoration: none;
                    text-indent: 0px;
                    text-transform: none;
                    vertical-align: baseline;
                    -webkit-text-stroke-width: 0px;
                    white-space: normal;
                    word-spacing: 0px;
                  "
                >
                  <span style="color: rgb(255, 255, 255)"><br /></span>
                </p>
              </address>
            </div>
          </div>
        </div>
        <div class="uk-width-2-5@m">
          <div class="contact-box">
            <div class="uk-grid-small uk-text-center uk-grid" uk-grid="">
              <div class="uk-width-1-2 uk-first-column">
                <p style="text-align: left">
                  <img
                    src=""
                    title="寰宇海外,寰宇国际"
                    alt="寰宇海外,寰宇国际"
                  />
                </p>
              </div>
              <div class="uk-width-1-2">
                <p>
                  <img
                    src="https://www.yesglobal.com.cn/res/202010/14/auto_8108.jpg"
                    title="微信图片_20201014134948"
                    alt="微信图片_20201014134948"
                    style="white-space: normal"
                  />
                </p>
              </div>
            </div>
            <div
              class="uk-grid-collapse uk-margin-top uk-flex-middle uk-grid"
              uk-grid=""
            >
              <div class="uk-width-auto uk-first-column">
                <img
                  src="https://www.yesglobal.com.cn/tpl/www/images/tel.png"
                  alt="美国杰出人才移民电话"
                />
              </div>
              <div class="uk-width-expand">
                <div class="uk-margin-small-left">
                  <span class="tel-num">400-001-9801</span>
                  <i>7x24小时热线</i>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <hr style="border-color: #38424e" />
      <div class="copyright">
        <div class="uk-flex-middle uk-grid" uk-grid="">
          <div class="uk-width-auto uk-first-column">
            <img
              src="https://www.yesglobal.com.cn/res/202010/14/05e45bf1c7558cff.png"
            />
          </div>
          <div class="uk-width-expand uk-text-right">
            <address>
              <p style="text-align: center">
                COPYRIGHT 2018 美国杰出人才移民-行成海外&nbsp;
              </p>
              <p style="text-align: center">
                版权所有
                <a
                  href="https://beian.miit.gov.cn/"
                  target="_self"
                  title="工信部"
                  >沪ICP备18040686号</a
                >
              </p>
            </address>
          </div>
        </div>
      </div>
    </div>
  </footer>
</template>

<script setup lang="ts">
import { ref } from 'vue'
const isShow = ref('shanghai')
</script>

<style scoped>
footer {
  background: rgb(31, 42, 58);
  padding: 50px 0 40px;
}
.copyright address p {
  font-size: 14px;
  color: #a6b0c0;
  margin: 0;
  line-height: 2.4em;
}
.uk-margin-top {
  margin-top: 20px !important;
}
@media (min-width: 960px) {
  .uk-container {
    padding-left: 40px;
    padding-right: 40px;
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
.uk-grid {
  display: flex;
  flex-wrap: wrap;
  margin: 0;
  padding: 0;
  list-style: none;
}
* + hr,
* + .uk-hr {
  margin: 20px 0 !important;
}

hr,
.uk-hr {
  box-sizing: content-box;
  height: 0;
  overflow: visible;
  text-align: inherit;
  margin: 0 0 20px 0;
  border: 0;
  border-top: 1px solid #e5e5e5;
}
@media (min-width: 960px) {
  .uk-width-3-5\@m {
    width: 60%;
  }
}
.footer-nav ul {
  margin: 0;
  padding: 0;
}
.address-switcher-title {
  border-bottom: #fff 1px solid;
}
.address-switcher-title ul {
  margin: 0;
  padding: 0;
}
.address-switcher-title ul li {
  list-style: none;
  display: inline-block;
  text-align: center;
}
.uk-child-width-1-6 > * {
  width: calc(100% * 1 / 6.001);
}
.address-switcher-title ul li a {
  color: #fff;
  display: block;
  padding: 5px 0;
}
a,
.uk-link {
  color: #1e87f0;
  text-decoration: none;
  cursor: pointer;
}
.address-switcher-content {
  margin: 20px 10px;
}
.address-switcher-content address {
  margin: 0;
  color: #fff;
}

address {
  font-style: normal;
}
.address-switcher-content address p {
  font-size: 12px;
  color: #fff;
  margin: 0;
}
@media (min-width: 960px) {
  .uk-width-2-5\@m {
    width: 40%;
  }
}
.uk-grid > * > :last-child {
  margin-bottom: 0;
}

.contact-box {
  width: 300px;
  float: right;
}
.uk-text-center {
  text-align: center !important;
}

.uk-grid-small {
  margin-left: -15px;
}
.uk-width-1-2 {
  width: 50%;
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
.uk-flex-middle {
  align-items: center;
}
.uk-grid-collapse {
  margin-left: 0;
}
.uk-width-auto {
  width: auto;
}
.uk-width-expand {
  flex: 1;
  min-width: 1px;
}
.uk-margin-small-left {
  margin-left: 10px !important;
}
.contact-box span {
  font-size: 33px;
  color: #fff;
  line-height: 30px;
}
.contact-box i {
  color: #fff;
  font-size: 12px;
  display: block;
  font-style: normal;
}
.uk-container > :last-child {
  margin-bottom: 0;
}
.uk-text-right {
  text-align: right !important;
}
/* .address-switcher-title .active {
} */
.address-switcher-title ul li.active a {
  background-color: #fff;
  color: #333;
}
.address-switcher-content > div {
  display: none;
}
.address-switcher-content .active {
  display: block;
}
</style>
