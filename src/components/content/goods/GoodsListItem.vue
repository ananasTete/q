<template>
  <div class="goodsListItem" @click="itemClick">
    <img :src="showImg" alt="">
    <div class="goodsInfo">
      <p>{{goodsItem.title}}</p>
      <p v-show="showPrice">
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
  computed: {      //主页和详情页都用到了商品列表但两个接口中图片在数组中的地址不一样故做个判断
    showImg() {
      return this.goodsItem.img || (this.goodsItem.image || this.goodsItem.show.img) ;
    },
    showPrice() {
      return this.goodsItem.price || this.goodsItem.cfav;
    }

  },
  props: {
    goodsItem: {                    //自定义属性goodsItem拿到父组件的对象数组遍历出的某个对象
      type: Object,
      default() {
        return {}
      }
    }
  },

  methods: {
    itemClick() {
      //跳转到详情页
      if(this.goodsItem.iid){
        this.$router.push('/detail/' + this.goodsItem.iid);
      }else {
        
      }
    }
  }
}
</script>

<style scoped>
  img, p{
     margin-top: 5px;
   }
  img{
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
