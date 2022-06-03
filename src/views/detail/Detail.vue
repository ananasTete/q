<template>
  <div class="detail">
  
    <detail-navbar @navClick="navClick" ref="navbar" :currentIndex="navIndex"/>

    <scroll class="scroll-content" :pull-up-load="true" :probe-type="3" ref="scroll" @scroll="scroll">

      <detail-swiper :top-images="topImages" ref="swiper"/>

      <detail-base-info :goods-info="goodsInfo"/>

      <detail-shop-info :shop="shop" />

      <detail-goods-info :detail-info="detailInfo" @imgLoad="imgLoad"/>

      <detail-param-info :param-info="paramInfo" ref="param"/>

      <detail-comment-info :comment-info="commentInfo" ref="comment"/>

      <goods-list :goods="recommend" ref="goodslist"/>

    </scroll>

    <back-top @click.native="backTopClick" v-show="isShowBackTop"/>

    <detail-bottom-bar @addCart="addCart"/>

  </div>
</template>

<script>

import DetailNavbar from './childComps/DetailNavbar'
import DetailSwiper from './childComps/DetailSwiper.vue'
import DetailBaseInfo from './childComps/DetailBaseInfo.vue'
import DetailShopInfo from './childComps/DetailShopInfo.vue'
import DetailGoodsInfo from './childComps/DetailGoodsInfo.vue'
import DetailParamInfo from './childComps/DetailParamInfo.vue'
import DetailCommentInfo from './childComps/DetailCommentInfo.vue'
import DetailBottomBar from './childComps/DetailBottomBar.vue'

import Scroll from 'components/common/scroll/Scroll.vue'
import GoodsList from 'components/content/goods/GoodsList.vue'


import {getDetailMultidata,
        goodsInfo,
        shop,
        goodsParam,
        getRecommend,} from 'network/detail.js'

import { deBounce } from 'common/utils.js'
import { backTopMixin } from 'common/mixin.js'


export default {
  name:'Detail',
  mixins: [backTopMixin],

  data(){
    return {
      iid: null,
      topImages: [],
      goodsInfo: {},  //不能为null因为网络请求为异步操作，而上面模板中监听是同步的
      shop: {},
      detailInfo: {},
      paramInfo: {},
      commentInfo: {},
      recommend: [],
      toThemes:[],
      navIndex: 0,
    }
  },
  created() {
    
    /**点击商品会跳转到详情页并将id传到url,根据id获取指定的商品详情数据 */
    this.iid = this.$route.params.iid;
    getDetailMultidata(this.iid)
      .then((result) => {


        const goods = result.data.result;
        
        //获取轮播图图片
        this.topImages = result.data.result.itemInfo.topImages;
        
        //获取商品信息
        this.goodsInfo = new goodsInfo(goods.itemInfo, goods.columns, goods.shopInfo.services);
        
        //获取店铺信息
        this.shop = new shop(goods.shopInfo)

        //获取商品图片
        this.detailInfo = goods.detailInfo;

        //获取商品尺码数据
        this.paramInfo = new goodsParam(goods.itemParams.info, goods.itemParams.rule);

        //获取评论信息,有可能没有评论
        if(goods.rate.cRate !== 0) {
          this.commentInfo = goods.rate.list[0];
        }

      }).catch((err) => {
        
      });
    
    /**获取商品推荐信息 */
    getRecommend()
      .then((result) => {
        console.log(result);
        this.recommend = result.data.data.list;
      }).catch((err) => {
        
      });
  },

  methods: {
    navClick(index) {
      this.$refs.scroll.scrollTo(0, -this.toThemes[index] + 44, 300)
    },

    imgLoad() {
      this.toThemes = [],
      this.toThemes.push(0),
      this.toThemes.push(this.$refs.param.$el.offsetTop);
      this.toThemes.push(this.$refs.comment.$el.offsetTop);
      this.toThemes.push(this.$refs.goodslist.$el.offsetTop);
      this.toThemes.push(Number.MAX_VALUE);
      // console.log(this.toThemes);
    },
    scroll(position) {
      const positionY = -position.y
      for(let i in this.toThemes) {
        i -= 0;    //字符串类型到数字型的隐式转换

        //  定义navIndex=0,为了让i改变后再给navIndex赋值，否则从一个区域到另一个区域距离很长，会给navbar赋值好多次，这样只有滚动到另一个区域时再赋值
        if(this.currentIndex !== i && ( positionY >= this.toThemes[i] - 44 && positionY < this.toThemes[i+1] - 44)) {
          this.navIndex = i;
        }
      }
      this.listenShowBackTop(positionY);
    },
    addCart() {
      //将本页商品中获取的购物车需要的一些信息保存到一个对象中
      const product = {};
      product.image = this.topImages[0];
      product.title = this.goodsInfo.title;
      product.desc = this.goodsInfo.desc;
      product.price = this.goodsInfo.lowNowPrice;
      product.iid = this.iid;

      this.$store.dispatch('addCart', product).then(res => {
        
        //可以在此添加一个防抖
      this.$toast.show(res, 800); 

      });
    },

  },

    
  components: {
    DetailNavbar,
    DetailSwiper,
    DetailBaseInfo,
    DetailShopInfo,
    Scroll,
    DetailGoodsInfo,
    DetailParamInfo,
    DetailCommentInfo,
    GoodsList,
    DetailBottomBar,
  }
  
}

</script>

<style scoped>
  .detail{
    height: 100vh;
  }
  .scroll-content{                   
    height: calc(100% - 96px);       
    overflow: hidden;                
  }
</style>
