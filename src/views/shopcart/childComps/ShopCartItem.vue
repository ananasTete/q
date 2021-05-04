<template>
  <div id="shopcart-item">
   
    <div class="item-img">
      <img :src="product.image" alt="商品图片">
    </div>
    <div class="item-info">
      <div class="item-title">{{product.title}}</div>
      <div class="item-desc">商品描述: {{product.desc}}</div>
      <div class="info-bottom">
        <div class="item-price left">{{product.price}}</div>
        <div class="item-count right">x{{product.count}}</div>
      </div>
    </div>

    <div class="item-selector">
      <check-bottom ref="checkbottom"  :isChecked="product.isChecked" @click.native="bottomClick"></check-bottom>
    </div>
  </div>
</template>

<script>
import CheckBottom from 'components/content/checkbottom/CheckBottom.vue'

export default {
  components: { 
    CheckBottom,
  },
  name:'',
  data(){
    return {
    }
  },
  props: {
    product: {
      type: Object,
      default: {},
    }
  },
  methods: {
    bottomClick() {
      this.product.isChecked = !this.product.isChecked;
    }
  }
}
</script>


<style scoped>
#shopcart-item {
  width: 100%;
  display: flex;
  font-size: 0;
  padding: 5px;
  border-bottom: 1px solid #ccc;
}
.item-selector {
  display: flex;
  justify-content: center;
  align-items: center;
}
.item-title, .item-desc {
  overflow: hidden;
  white-space: nowrap;
  text-overflow: ellipsis;
}
.item-img {
  padding: 5px;
}
.item-img img {
  width: 80px;
  height: 100px;
  display: block;
  border-radius: 5px;
}
.item-info {
  font-size: 17px;
  color: #333;
  padding: 5px 10px;
  position: relative;
  overflow: hidden;
}
.item-info .item-desc {
  font-size: 14px;
  color: #666;
  margin-top: 15px;
}
.info-bottom {
  margin-top: 10px;
  position: absolute;
  bottom: 10px;
  left: 10px;
  right: 10px;
}
.info-bottom .item-price {
  color: orangered;
}
</style>
