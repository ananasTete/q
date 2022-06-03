<template>
  <div id="app">
    <keep-alive exclude='Detail'>
      <router-view/>
    </keep-alive>

    <main-tabbar v-show="this.$route.meta.showTabbar == undefined ? true : false"/>
  </div>
</template>

<script>


import MainTabbar from 'components/content/maintabbar/MainTabbar'

export default {
  name: 'App',
  components: {
    MainTabbar,
  }
};

</script>

<style>
  @import 'assets/css/base.css'
</style>
