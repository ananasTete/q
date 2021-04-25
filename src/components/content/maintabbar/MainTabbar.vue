<template>
  <div>
      
    <TabBar>
      <TabbarItem path='/home'>
        <img slot="item-icon" src="~assets/img/tabbar/home.svg" alt="">
        <img slot="item-icon-active" src="~assets/img/tabbar/homeActive.svg" alt="">
        <div slot="item-text">首页</div>
      </TabbarItem>
      <TabbarItem path='/category'>
        <img slot="item-icon" src="~assets/img/tabbar/category.svg" alt="">
        <img slot="item-icon-active" src="~assets/img/tabbar/categoryActive.svg" alt="">
        <div slot="item-text">分类</div>
      </TabbarItem>
      <TabbarItem path='/shopcart'>
        <img slot="item-icon" src="~assets/img/tabbar/shopcart.svg" alt="">
        <img slot="item-icon-active" src="~assets/img/tabbar/shopcartActive.svg" alt="">
        <div slot="item-text">购物车</div>
      </TabbarItem>
      <TabbarItem path='/profile'>
        <img slot="item-icon" src="~assets/img/tabbar/profile.svg" alt="">
        <img slot="item-icon-active" src="~assets/img/tabbar/profileActive.svg" alt="">
        <div slot="item-text">我的</div>
      </TabbarItem>
    </TabBar>
  </div>
</template>

<script>
import TabBar from 'components/common/tabbar/TabBar';
import TabbarItem from 'components/common/tabbar/TabbarItem'

export default {
  name:'',
  data(){
   return {
   }
  },
  components: {
    TabBar,
    TabbarItem,
  },
}
</script>

<style scoped>

</style>
