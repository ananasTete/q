<template>
  <div class="goodsList">
    <ul>
      <li v-for="item in goods" :key="item.acm">      <!--根据数组的长度生成多个listItem-->
        <goods-list-item :goodsItem="item" /> 
      </li>
    </ul>
  </div>
</template>

<script>
import GoodsListItem from './GoodsListItem.vue'

export default {
  name:'',
  data(){
    return {
    }
  },
  props: {
    goods: {               //自定义属性goods用于拿到父组件home请求到的对象数组
      type: Array,
      default() {
        return []
      }
    },
  },
  components: {
    GoodsListItem
  }
}
</script>

<style scoped>
  .goodsList{
    width: 100%;
  }
  .goodsList ul {
    width: 100%;
    display: flex;
    flex-wrap: wrap;
    justify-content: space-evenly;
    list-style: none;
  }
  .goodsList ul li{
    width: 47%;
  }
</style>
