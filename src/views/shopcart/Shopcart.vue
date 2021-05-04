<template>
  <div class="shopcart">
    
    <shop-cart-nav-bar/>

    <scroll class="scroll-content"  :pullUpLoad="true">
      <shop-cart-list/>
    </scroll>

    <shop-cart-bottom-bar/>
  </div>
</template>

<script>
import ShopCartList from './childComps/ShopCartList.vue'
import ShopCartNavBar from './childComps/ShopCartNavBar.vue'
import Scroll from 'components/common/scroll/Scroll.vue'
import ShopCartBottomBar from './childComps/ShopCartBottomBar.vue'


export default {
  name:'Shopcart',
  data(){
   return {
     navCount: 0,
   }
  },
  components: {
    ShopCartNavBar,
    ShopCartList,
    Scroll,
    ShopCartBottomBar,
  }
}
</script>

<style scoped>
.shopcart{
  height: 100vh;
}
.scroll-content{
  height: calc(100% - 44px - 52px - 40px);
  overflow: hidden;
}
</style>
