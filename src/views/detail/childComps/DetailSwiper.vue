<template>
  <div>
    <swiper :options="swiperOption" class="wrapper">
      <swiper-slide v-for="item of topImages" :key="item">       <!--每个图-->
        <img :src="item" alt="" class="imgauto">
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

export default {
  name:'DetailSwiper',
  data(){
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
    topImages: {
      type: Array,
      default() {
        return []
      }
    },
  },

  components: {
    Swiper,
    SwiperSlide,
  }
}
</script>

<style scoped>
  .wrapper{
    height: 300px;
    overflow: hidden;
  }
  .imgauto{
    max-width: 100%;
  }
</style>
