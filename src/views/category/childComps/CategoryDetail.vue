<template>
  <div>
    <goods-list :goods="goods"></goods-list>
  </div>
</template>

<script>
import GoodsList from 'components/content/goods/GoodsList.vue'
export default {
  components: { 
    GoodsList,
  },
  name:'',
  data(){
    return {
    }
  }
}
</script>

<style scoped>

</style>
