<!--<script setup>-->
<!--// This starter template is using Vue 3 <script setup> SFCs-->
<!--// Check out https://vuejs.org/api/sfc-script-setup.html#script-setup-->
<!--</script>-->
<template>
  <van-config-provider :theme-vars="themeVars">
    <router-view />
    <van-tabbar route :safe-area-inset-bottom="safeArea">
      <van-tabbar-item replace to="/luck-draw" icon="home-o">抽奖</van-tabbar-item>
      <van-tabbar-item replace to="/best-select" icon="search">优选</van-tabbar-item>
      <van-tabbar-item replace to="/shopping-cart" icon="friends-o">购物车</van-tabbar-item>
      <van-tabbar-item replace to="/my" icon="setting-o">我的</van-tabbar-item>
    </van-tabbar>
  </van-config-provider>
</template>
<script setup lang="ts">
import {ref} from 'vue';
const safeArea = ref<Boolean>(true)
const themeVars = {
  rateIconFullColor: '#07c160',
  sliderBarHeight: '4px',
  sliderButtonWidth: '20px',
  sliderButtonHeight: '20px',
  sliderActiveBackgroundColor: '#07c160',
  buttonPrimaryBorderColor: '#07c160',
  buttonPrimaryBackgroundColor: '#07c160',
}

</script>
<style>
html,body {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
