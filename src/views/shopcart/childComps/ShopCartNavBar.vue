<template>
  <div>
    <nav-bar class="navbar">
        <div slot="center">购物车({{shopCartCount}})</div>
    </nav-bar>
  </div>
</template>

<script>
import NavBar from 'components/common/navbar/NavBar'

import { mapGetters } from 'vuex'

export default {
  name:'',
  data(){
    return {
    }
  },
  computed: { 
    ...mapGetters(['shopCartCount']),        //将vuex的getters映射到此，本组件中可以当计算属性使用
  },
  components: {
    NavBar,
  }
}
</script>

<style scoped>
.navbar{
    background-color: #ff8198;
    color: #fff;
    font-size: 18px;
  }
</style>
