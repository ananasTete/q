<template>
  <div class="wrapper" ref="wrapper">
    <div class="content">
      <slot></slot>
    </div>
  </div>
</template>

<script>

import BScroll from 'better-scroll';

export default {
  name:'Scroll',
  
  data(){
    return {
      bscroll: null,
    }
  },

  props: {
    probeType: {
      type: Number,             //将probeType的值设置为可监听时会影响性能，所以设置成用户自定义
      default: 0,
    },
    pullUpLoad: {
      type: Boolean,
      default: false,
    }
  },

  mounted() {
    this.bscroll = new BScroll(this.$refs.wrapper, {
      observeDOM: true,                                //开启对content以及content子元素DOM改变的探测。当插件被使用后，当这些DOM 素发生变化时将会触发scroll的refresh方法
      observeImage: true,
      click: true,                                     //滚动区内元素可以响应click事件
      probeType: this.probeType,                       //是否可以监听scroll事件，即滚动事件，0、1不侦测，2侦测手指滑动带来的滚动，手指离开后的惯性滚动不侦测；3全部侦测
      pullUpLoad: this.pullUpLoad,                     //是否可以监听pullingUp事件，即到达内容区底端后继续上拉
    })
    this.bscroll.on('scroll', (position) => {         //检测到滚动时，将自定义事件scroll和滚动距离传递出去
      this.$emit('scroll', position);                 //距离：滚动部分上沿到滚动区上沿的距离
    })
    this.bscroll.on('pullingUp', () => {
      this.$emit('pullingUp')
      setTimeout(() => {                         //设置一个延时，防止多次连续请求
        this.bscroll.finishPullUp();             //否则只能监听一次pullingUp事件，再拉就没用了
      },2000)
    })
  },

  methods: {
    scrollTo(x=0, y=0, time=500) {         //不传时间默认300ms
      this.bscroll.scrollTo(x, y, time);
    },
  },
  
}
</script>

<style scoped>

</style>