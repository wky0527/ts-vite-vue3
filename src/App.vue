<!--<script setup>-->
<!--// This starter template is using Vue 3 <script setup> SFCs-->
<!--// Check out https://vuejs.org/api/sfc-script-setup.html#script-setup-->
<!--</script>-->

<template>
  <van-config-provider :theme-vars="themeVars">
    <router-view/>
  </van-config-provider>
</template>
<script setup>
import {reactive} from "vue";
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
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
