<template>
  <metainfo></metainfo>
  <!--  <nav>-->
  <!--    <router-link to="/">Home</router-link>-->
  <!--    |-->
  <!--    <router-link to="/about">About</router-link>-->
  <!--  </nav>-->
  <router-view/>
</template>
<script>
import AOS from 'aos';
import 'aos/dist/aos.css';
import 'ant-design-vue/dist/antd.less'
import './assets/less/custom_ant.less'
import {useMeta} from "vue-meta";

export default {
  setup(){
    useMeta({
      link: [
        { rel: 'icon', href: require('@/assets/favicon/16_16.png'), sizes:"16x16", type:"image/png" },
        { rel: 'icon', href: require('@/assets/favicon/32_32.png'), sizes:"32x32 48x48", type:"image/png" },
        { rel: 'icon', href: require('@/assets/favicon/180_180.png'), sizes:"128x128 512x512", type:"image/png" },
        { rel: 'icon', href: require('@/assets/favicon/fav.svg'), sizes:"any", type:"image/svg+xml" },
      ],
    });
  },
  mounted() {
    AOS.init({
      offset: 200,
      duration: 800,
      once: true,
    });
  },
}
</script>

<style lang="less"></style>

<style lang="scss">
@import url('https://fonts.googleapis.com/css2?family=Mulish:wght@400;500;700&family=Oswald:wght@400;500;700&display=swap');
@import "assets/scss/general.scss";
</style>
