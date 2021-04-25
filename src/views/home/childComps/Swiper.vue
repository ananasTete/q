<template>
  <div>
    <swiper :options="swiperOption" class="wrapper">
      <swiper-slide v-for="item of banners" :key="item.acm">       <!--每个图-->
        <a href="item.link">
          <img class="swiper-img  imgauto" :src="item.image" @load="swiperImgLoad"/>    <!--监听图片是否加载完成-->
        </a>
      </swiper-slide>
      <div class="swiper-pagination" slot="pagination"></div>   <!--点状进度条-->
      <div class="swiper-button-prev" slot="button-prev"></div>  <!--左点击跳转-->
      <div class="swiper-button-next" slot="button-next"></div>  <!--右点击跳转-->
    </swiper>
    
  </div>
</template>

<script>

import { Swiper, SwiperSlide } from 'vue-awesome-swiper'
import 'swiper/css/swiper.css'


export default{
    name:"HomeSwiper",

    data () {
      return {
        swiperOption:{
          pagination: {
            el: '.swiper-pagination',
            clickable: true
          },
          navigation: {
            nextEl: '.swiper-button-next',
            prevEl: '.swiper-button-prev'
          },
          slidesPerView: 1,
          spaceBetween: 30,
          loop:true,                  //轮播图是否可以循环
        },
        isload: false,
      }
    },

    props: {
      banners:  Array
    },

    components: {
        Swiper, 
        SwiperSlide,
    },

    methods: {
      swiperImgLoad() {              //四张图片就会调用四次此函数，但实际上只要一张图片加载完成swiper就有了高度，所以只让自定义事件触发一次就够了
        if(!this.isload) {
          this.$emit('swiperImagLoad');
          this.isload = true;
        }
      }
    }
  }
</script>
  
<style scoped>
  .imgauto{
    max-width: 100%;            /*设置图片大于屏幕时宽高*/
  }
</style>