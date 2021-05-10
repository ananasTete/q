<template>
  <div class="categorygoods">

    <ul>
      <li v-for="(item, index) in subList" :key="index">
        <div class="item" >
          <a :href="item.link">
            <img class="item-img" :src="item.image" alt="" @load="goodsImgLoad">
            <div class="item-text">{{item.title}}</div>
          </a>
        </div>
      </li>
    </ul>   
    
  </div>
</template>

<script>


export default {
  name:'CateGoods',
  data(){
    return {
    }
  },
  props: {
    subList: {
      type: Array,
      default: [],
    }
  },
  methods: {
    goodsImgLoad() {
      this.$emit('goodsImgLoad')
    }
  }
  
}
</script>

<style scoped>
.categorygoods{
  width: 100%;
}

ul {
  width: 100%;
  display: flex;
  flex-wrap: wrap;
  justify-content: space-evenly;
  list-style: none;
}
ul li{
  width: 23%;
}
.item-img{
  width: 100%;
  border-radius: 5px;
}
.item-text{
  text-align: center;
  font-size: 16px;
  margin: 10px auto;
}

</style>
