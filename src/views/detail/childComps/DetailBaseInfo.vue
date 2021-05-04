<template>
  <div class="base-info" v-if="Object.keys(goodsInfo).length !== 0">
    <div class="info-title">{{goodsInfo.title}}</div>
    <div class="info-price">
      <span class="low-now-price">￥{{goodsInfo.lowNowPrice}}</span>
      <span class="old-price"> <s>{{goodsInfo.oldPrice}}</s> </span>
      <span class="discount" v-if="goodsInfo.discount">{{goodsInfo.discount}}</span>
    </div>
    <div class="info-other">
      <span>{{goodsInfo.columns[0]}}</span>
      <span>{{goodsInfo.columns[1]}}</span>
      <span>{{goodsInfo.services[goodsInfo.services.length-1].name}}</span>
    </div>
    <div class="info-services">
      <span class="info-services-item" v-for="index in (goodsInfo.services.length-1)" :key="index">
        <img src="goodsInfo.services[index-1].icon" alt="">
        <span>{{goodsInfo.services[index-1].name}}</span>
      </span>
    </div>

  </div>
</template>

<script>
export default {
  name:'DetailBaseInfo',
  data(){
    return {
    }
  },
  props: {
    goodsInfo: {
      type: Object,
      default() {
        return {};
      }
    }
  }
}
</script>

<style scoped>
  .info-title{
    font-size: 20px;
    margin-top: 10px;
    padding: 0 10px;
  }
  .info-price{
    margin-top: 10px;
  }
  .info-price .low-now-price{
    color: red;
    font-size: 30px;
  }
  .info-price .old-price{
    margin-left: 10px;
    color: #909497;
  }
  .info-price .discount{
    margin-left: 10px;
    padding: 5px;
    border-radius: 35px / 30px;
    background: #EC7063;
  }
  .info-other{
    padding: 0 10px;
    margin-top: 15px;
    display: flex;
    justify-content: space-between;
    color: #909497 ;
  }
  .info-services{
    margin-top: 5px;
    padding: 20px 10px;
    border-top: 2px solid #eee;
    border-bottom: 5px solid #eee;
    display: flex;
    justify-content: space-between;
  }

</style>
