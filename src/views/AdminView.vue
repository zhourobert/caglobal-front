<script setup lang="ts">

import {jump} from "@/utils/RouterJumpUtils";
import {jwtDecode} from "jwt-decode";

const token=window.localStorage.getItem("userJwt")
//TODO:解析jwt获得用户数据，决定用户权限
// const userInfo=jwtDecode(token);
</script>

<template>
  <!-- 导航栏 -->
  <nav class="navbar">
    <div class="header">
      <h1>寰宇后台管理系统</h1>
<!--      TODO:修改登出样式使之美观-->
      <a style="color: white" href="">登出</a>
    </div>
  </nav>

  <div id="tool-bar">
    <!-- 侧边栏 -->
    <aside class="sidebar">
<!--      TODO:修改样式使得鼠标悬停和点击底色会变化（采用不同灰度区分）-->
      <ul class="menu">
<!--        TODO:完成这几个页面的增加删除修改分页功能-->
        <li @click="jump('/menuManage')">目录管理</li>
        <li @click="jump('/blogManage')">文章管理</li>
        <li @click="jump('/userManage')">用户管理</li>
        <li @click="jump('/setting')">设置</li>
      </ul>
    </aside>

    <!-- 内容区域 -->
    <div class="content">
      <router-view/>
    </div>
  </div>

</template>

<style scoped>
#tool-bar{
  width: 100%;
  height: 100%;
  position: fixed;
  background-color: white;

  display: inline-flex;
}

.header {
  display: inline-flex;
  justify-content: space-between;
  align-items: center;
  width: 95%;
  margin: 0 auto;
  padding: 0 20px;
}

/* 导航栏样式 */
.navbar {
  background-color: #333;
  color: #fff;
  padding: 10px 0;
}
.menu li{
  height: 30px;
  padding: 20px;
}

.navbar h1 {
  margin: 0;
}

.navbar-menu {
  list-style: none;
  padding: 0;
  color: white;
}

.navbar-menu li {
  display: inline;
  margin-right: 20px;
}

.navbar-menu li a {
  color: #fff;
  text-decoration: none;
}

/* 侧边栏样式 */
.sidebar {
  background-color: #c9c9c9;
  width: 200px;
  min-width: 200px;
  height: inherit;
  padding: 0px;
}

.sidebar ul {
  list-style: none;
  padding: 0;
}



.sidebar ul li a {
  color: #333;
  text-decoration: none;
}

/* 内容区域样式 */
.content {

  padding: 20px;
}
</style>