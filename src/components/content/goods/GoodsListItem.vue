<template>
  <div class="goodsListItem">
    <img :src="goodsItem.show.img" alt="">
    <div class="goodsInfo">
      <p>{{goodsItem.title}}</p>
      <p>
        <span class="price">{{goodsItem.price}}</span> | 
        <span class="collect"> 收藏：{{goodsItem.cfav}}</span>
      </p>
    </div>
  </div>
</template>

<script>
export default {
  name:'',
  data(){
    return {
    }
  },
  props: {
    goodsItem: {                    //自定义属性goodsItem拿到父组件的对象数组遍历出的某个对象
      type: Object,
      default() {
        return {}
      }
    }
  }
}
</script>

<style scoped>
  img, p{
     margin-top: 5px;
   }
   .goodsListItem img{
      width: 100%;
      border-radius: 5px;
   }
   .goodsInfo{
     text-align: center;
     font-size: 12px;
     overflow: hidden;
     text-overflow: ellipsis;
     white-space: nowrap;
   }
   .price{
     color: brown;
   }
   
</style>
