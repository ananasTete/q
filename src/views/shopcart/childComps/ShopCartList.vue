<template>
  <div>
    <shop-cart-item v-for="(item, index) in shopCartList" :key="index" :product="item"></shop-cart-item>
  </div>
</template>

<script>
import { mapGetters } from 'vuex'
import ShopCartItem from './ShopCartItem.vue'

export default {
  name:'ShopCartList',
  data(){
    return {
    }
  },
  computed: {
    ...mapGetters(['shopCartList']),
  },
  components: { 
    ShopCartItem, 
  },
}
</script>

<style scoped>


</style>
