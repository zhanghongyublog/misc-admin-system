<!--
 * @Description: 
 * @version: 
 * @Author: ZhangHongyu
 * @Date: 2022-07-11 16:51:00
 * @LastEditors: ZhangHongyu
 * @LastEditTime: 2022-07-11 18:25:00
-->
<template>
  <ConfigProvider>
    <img alt="Vue logo" src="./assets/logo.png" />
    <HelloWorld msg="Hello Vue 3 + TypeScript + Vite" />
  </ConfigProvider>
</template>
<script setup lang="ts">
import { ConfigProvider } from "ant-design-vue";
// This starter template is using Vue 3 <script setup> SFCs
// Check out https://vuejs.org/api/sfc-script-setup.html#script-setup
import HelloWorld from "./components/HelloWorld.vue";
</script>


<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
