<template>
  <div class="category">
      <h1>分类</h1>
      <div class="wrapper">
        <ul>
          <li v-for="item in 100" :key="item">{{item}}</li>
        </ul>
      </div>
      
  </div>
</template>

<script>

import BScroll from 'better-scroll';

export default {
  name:'Category',
  data(){
   return {
     bscroll: null,
   }
  },
  mounted() {
    this.bscroll = new BScroll('.wrapper', {
      probeType: 3,             //是否可以实时监听内容的顶端到容器顶端的距离即scroll事件，0、1不侦测，2侦测手指滑动带来的滚动，手指离开后的惯性滚动不侦测；3全部侦测
      pullUpLoad: true,         //是否可以监听到上拉事件，如pullingUp
    })

    this.bscroll.on('scroll', (position) => {
      console.log(position);
    })

    this.bscroll.on('pullingUp', ()=> {    //监听pullingUp事件，当滚动到底部上拉时触发
      console.log('下拉加载更多');

      setTimeout(() => {                         //设置一个延时，防止多次连续请求
        this.bscroll.finishPullUp();             //否则只能监听一次pullingUp事件，再拉就没用了
      },2000)
     
    })

  }
}
</script>

<style scoped>
  .wrapper{
    height: 400px;
    overflow: hidden;
  }
</style>
