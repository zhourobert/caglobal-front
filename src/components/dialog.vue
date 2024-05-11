<template>
  <div class="zixun">
    <a href="http://" target="_blank">
      <img
        src="https://aff-im.bj.bcebos.com/onlineEnv/imsdk/assets/pcIcon5.png"
        alt=""
      />
    </a>
  </div>
  <div class="liuyan">
    <div class="top">
      <div class="left">请您留言</div>
      <div class="right" @click="clickLiuyan"></div>
    </div>

    <div class="content">
      <div style="" v-if="tag">
        <div class="embed-messageboard-text">
          <p class="embed-messageboard-company">
            感谢您的关注，当前客服人员不在线，请填写一下您的信息，我们会尽快和您联系。
          </p>
        </div>
        <div class="embed-messageboard-form" style="--b914a9de: #6696ff">
          <div class="">
            <div class="embed-messageboard-form-item">
              <label
                class="embed-messageboard-form-label embed-messageboard-form-icon-name"
              ></label
              ><input
                class="embed-messageboard-form-input"
                placeholder="姓名"
                maxlength="30"
              />
            </div>
          </div>
          <div class="">
            <div class="embed-messageboard-form-item">
              <label
                class="embed-messageboard-form-label embed-messageboard-form-icon-phone"
              ></label
              ><input
                class="embed-messageboard-form-input"
                placeholder="电话（必填）"
                maxlength="30"
              />
            </div>
          </div>
          <div class="">
            <div class="embed-messageboard-form-item">
              <label
                class="embed-messageboard-form-label embed-messageboard-form-icon-ext"
              ></label
              ><input
                class="embed-messageboard-form-input"
                placeholder="邮箱"
                maxlength="50"
              />
            </div>
          </div>
          <div class="">
            <div class="embed-messageboard-form-item">
              <label
                class="embed-messageboard-form-label embed-messageboard-form-icon-ext"
              ></label
              ><input
                class="embed-messageboard-form-input"
                placeholder="地址"
                maxlength="50"
              />
            </div>
          </div>
          <div class="embed-messageboard-send">
            <div class="embed-messageboard-send-btn">提交</div>
          </div>
        </div>
        <div
          class="embed-messageboard-result"
          style="display: none; --85fcfdfc: #6696ff"
        >
          <div data-v-b38b337f="" class="embed-messageboard-result-box">
            <div
              data-v-b38b337f=""
              class="embed-messageboard-result-icon"
            ></div>
            <div data-v-b38b337f="" class="embed-messageboard-result-title">
              感谢留言
            </div>
            <div data-v-b38b337f="" class="embed-messageboard-result-content">
              我们会尽快与您联系
            </div>
            <div data-v-b38b337f="" class="embed-messageboard-result-close">
              关闭
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>

  <div class="right_fixed uk-visible@m" :class="{ h_fixed: lianxi }">
    <div class="right_fixed1 allright">
      <a
        href="http://p.qiao.baidu.com/cps/chat?siteId=16651797&amp;userId=32720806&amp;siteToken=c34331e976edbe5389844a59bb7dd489"
        target="_blank"
        style="display: block"
      >
        <div class="lefttelcon">
          <div class="telpic">
            <img
              src="https://www.yesglobal.com.cn/tpl/www/images/f-phone.png"
              width="16"
            />
          </div>
          <div class="teltext">在线客服</div>
        </div>
        <div class="tel">
          <img src="https://www.yesglobal.com.cn/tpl/www/images/tel_400.png" />
        </div>
      </a>
      <div class="clear_both"></div>
    </div>
    <div class="right_fixed2 allright">
      <a
        target="_blank"
        href="http://www.yesglobal.com.cn/cactivity/recommendedactivity.html"
        style="display: block"
      >
        <img
          src="https://www.yesglobal.com.cn/tpl/www/images/f-yuyue.png"
          width="24"
        />
        <p>小红书频道</p>
      </a>
    </div>
    <div class="right_fixed2 allright">
      <a href="javascript:;" target="_blank" class="weixin">
        <img
          src="https://www.yesglobal.com.cn/tpl/www/images/f-weixin.png"
          width="32"
        />
        <p>微信咨询</p>
        <img
          src="https://www.yesglobal.com.cn/res/202010/14/c7fda8ba3e1d9787.jpg"
          alt=""
          class="fewm"
        />
      </a>
    </div>
    <div class="right_fixed3 allright" id="backtop" @click="toTop">
      <img
        src="https://www.yesglobal.com.cn/tpl/www/images/f-up.png"
        alt=""
        width="30"
      />
      <p>TOP</p>
    </div>
    <div class="lian" @click="lianxiClick">
      <div class="div">
        <p>联系我们</p>
        <img
          src="https://www.yesglobal.com.cn/tpl/www/images/f-arrow.png"
          width="18"
        />
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue'
let tag = ref(true)
const clickLiuyan = () => {
  tag.value = !tag.value
}
const lianxi = ref(true)
const lianxiClick = () => {
  lianxi.value = !lianxi.value
}
const toTop = () => {
  function scrollToTop() {
    const currentPosition = document.documentElement.scrollTop
    if (currentPosition > 0) {
      window.requestAnimationFrame(scrollToTop)
      window.scrollTo(0, currentPosition - currentPosition / 10)
    }
  }
  scrollToTop()
}
</script>

<style scoped>
.h_fixed {
  right: -67px !important;
}
.lefttelcon {
  width: 22px;
  height: 146px;
  color: white;
  float: left;
  padding-left: 10px;
}
.telpic {
  width: 22px;
  height: 22px;
  margin-top: 20px;
}
.teltext {
  width: 22px;
  height: 100px;
  font-size: 14px;
  text-align: center;
  margin-top: 10px;
}
.tel {
  width: 22px;
  height: 146px;
  text-align: center;
  padding-left: 10px;
  float: left;
}
.tel img {
  display: inline-block;
  width: 13px;
  height: 127px;
  margin-top: 10px;
}
.right_fixed {
  width: 66px;
  height: 508px;
  position: fixed;
  right: 0;
  top: calc(50% - 254px);
  z-index: 9999;
  transition: all 0.3s;
}
.right_fixed1 {
  background-color: #132633;
  width: 66px;
  height: 146px;
}

.right_fixed2 {
  width: 66px;
  height: 64px;
  background-color: rgb(66, 88, 104);
  margin-top: 1px;
  font-size: 12px;
  position: relative;
  text-align: center;
  padding-top: 10px;
}

.right_fixed2 p {
  width: 100%;
  height: 30px;
  line-height: 30px;
  text-align: center;
  color: white;
  margin: 0;
}

.right_fixed2 img {
  display: inline-block;
}
.right_fixed2 a {
  display: block;
}
.right_fixed2 a:hover {
  text-decoration: none;
}

.right_fixed2 .fewm {
  position: absolute;
  right: 78px;
  top: 0;
  transform: scale(1.3);
  width: 66px;
  height: 66px;
  margin: 0;
  padding: 0;
  z-index: 1000;
  display: none;
}
.weixin:hover .fewm {
  display: block;
}

.right_fixed3 {
  width: 66px;
  height: 35px;
  background-color: rgb(66, 88, 104);
  margin-top: 1px;
  text-align: center;
}

.right_fixed3 p {
  width: 100%;
  height: 12px;
  font-size: 10px;
  text-align: center;
  line-height: 12px;
  color: white;
  margin-bottom: 4px;
}
.lian {
  position: relative;
}
.lian div {
  width: 25px;
  text-align: center;
  background-color: #132633;
  color: white;
  font-size: 14px;
  padding: 5px 0;
  border-radius: 5px 0 0 5px;
  position: absolute;
  bottom: 0;
  right: calc(100% + 1px);
  cursor: pointer;
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
.h_fixed .lian div img {
  transform: rotate(90deg);
}
.lian div img {
  transform: rotate(-90deg);
  transition: all 0.3s;
}
.embed-messageboard-send-btn {
  height: 32px;
  width: 64px;
  line-height: 32px;
  text-align: center;
  border-radius: 4px;
  font-size: 12px;
  color: #fff;
  cursor: pointer;
  margin-left: auto;
  background-color: #6696ff;
}
.embed-messageboard-send {
  margin-top: 12px;
}
.content {
  background-color: #fff;
}
.embed-messageboard-form-icon-ext {
  background: #fff
    url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAwAAAAMCAYAAABWdVznAAAAAXNSR0IArs4c6QAAAERlWElmTU0AKgAAAAgAAYdpAAQAAAABAAAAGgAAAAAAA6ABAAMAAAABAAEAAKACAAQAAAABAAAADKADAAQAAAABAAAADAAAAAATDPpdAAAAb0lEQVQoFWNgIBEwgtQfPH5W8/+//22MDIyC/xn+v2dkYqwCiaOL2VsaX2eCSTAxM1XbWxs7gGiQQhBGFwOpBWsAmWxnYXQNJACiQXxsYnANIGccOnFOCyQAokF8bGIgefL8ANJJLBgOnibWr3B1AO+pkealweGNAAAAAElFTkSuQmCC)
    no-repeat 9px center;
}
.embed-messageboard-form-label {
  width: 35px;
  height: 32px;
  display: inline-block;
  text-align: center;
  background-color: #fff;
  vertical-align: top;
  border-right: 1px solid #fff;
  border-radius: 4px 0 0 4px;
  flex-shrink: 0;
}
.embed-messageboard-form-icon-phone {
  background: #fff
    url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAwAAAAMCAYAAABWdVznAAAAAXNSR0IArs4c6QAAAERlWElmTU0AKgAAAAgAAYdpAAQAAAABAAAAGgAAAAAAA6ABAAMAAAABAAEAAKACAAQAAAABAAAADKADAAQAAAABAAAADAAAAAATDPpdAAABT0lEQVQoFXVRMUvDUBC+9wyBFEkr6OaiIAjZaoZKQYro4CK42kVxcBNcRNAf4X9QN8HRTZO0aSMkkRQyuSiuLhZaQducd9EEh/SG3N133/fl3XsAf9Hq9Wacrl9FRJFhRTkdttxgPwFoAuIL0UuNurlbRE4xdrZd/z5ztt3gxn6MFiYJJAy/F2kYCiGQSZQiGI0mCzQFXwEFi6DTedNohQ29JEPui0KapvkOAnQnDOfK5f4YEdQiYoZJLqSAC/xMzg3D+BICzj6GyWUcx6rVDbcs72kz24+5+RXSslcoxXVjtXrnuMFeAnhKW92SgUrLLc9WtB02ZFEanvesW23/gYTrDJDr1O8EwGkHx2zCfXokLmq1pb4C09tUnliuf0Q5/zu9kZYIHDAvB7nhIGfF6YaHgNBEwJigCh1tsFZfOaCrH6ekog8JJT+g50Xz/+c/yfOLiRCRy8AAAAAASUVORK5CYII=)
    no-repeat 9px center;
}
.embed-messageboard-form-input {
  flex: 1;
  margin: 0;
  padding: 0;
  height: 32px;
  line-height: 32px;
  border: none;
  display: inline-block;
  outline: 0;
  font-size: 14px;
  font-weight: 400;
}
.embed-messageboard-form-icon-name {
  background: #fff
    url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAwAAAAMCAYAAABWdVznAAAAAXNSR0IArs4c6QAAAERlWElmTU0AKgAAAAgAAYdpAAQAAAABAAAAGgAAAAAAA6ABAAMAAAABAAEAAKACAAQAAAABAAAADKADAAQAAAABAAAADAAAAAATDPpdAAAA9ElEQVQoFYWQsWoCQRCGZ9a1SB1IrUW0y4FCOKLxRVIIPoNtItb6FjHvcQl7cgorXJoUKey1V2HvbrwJWTn3BIeF/f9/vr8ZBGeICNUyvue4++j9IiIVESyaMIzvDCUfgLAGIMxfrYrypdPxNpaTVvBvIJlKCa9dvx2xV5H2k8RMctlnX5rPUAdu6GbCBa55t3BYLH5ubelfH6zn/6yAWHnbm93MAqw5s/6sECj9TFk6yK+YWoA1Z7w7ZSy+5qtxRlQXFZj2/Pa3Xf7tIv2QpTAUiOveU2sESsXNINTvReiSZoZZKYTcIpmGe75yiW6YLedXkiNBwGUBI8BE6wAAAABJRU5ErkJggg==)
    no-repeat 9px center;
  width: 35px;
  height: 32px;
  display: inline-block;
  text-align: center;
  background-color: #fff;
  vertical-align: top;
  border-right: 1px solid #fff;
  border-radius: 4px 0 0 4px;
  flex-shrink: 0;
}
.embed-messageboard-form-item {
  height: 34px;
  width: 215px;
  line-height: 32px;
  margin: 8px auto 0;
  border: 1px solid #dcdfe6;
  position: relative;
  background-color: #fff;
  border-radius: 4px;
  font-size: 14px;
  display: flex;
  padding-right: 4px;
}
.embed-messageboard-form-content {
  width: 100%;
  box-sizing: border-box;
}
.embed-messageboard-form {
  padding: 8px 12px;
}
.embed-messageboard-text {
  padding: 12px 0;
}
.embed-messageboard-company {
  font-size: 14px;
  color: #303133;
  word-break: break-all;
  line-height: 18px;
  margin: 0 8px 0 12px;
  background-color: transparent;
  white-space: pre-line;
}
.zixun {
  position: fixed;
  top: 50%;
  left: 0;
  transform: translateY(-50%);
  width: 98px;
  height: 44px;
}
.zixun img {
  width: 100%;
}
.liuyan {
  width: 240px;
  border-radius: 8px;
  box-shadow: 0 8px 40px #0006;
  position: fixed;
  bottom: 10px;
  left: 20px;
}
.liuyan .top {
  background-color: #6696ff;
  color: #fff;
  height: 46px;
  line-height: 46px;
  border-radius: 5px 5px 0 0;
  display: flex;
  justify-content: space-between;
  padding-left: 14px;
}

.liuyan .right {
  width: 34px;
  height: 46px;
  cursor: pointer;
  display: inline-block;

  background: url(data:image/png;base64,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)
    no-repeat center;
}
</style>
