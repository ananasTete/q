<template>
  <div class="home">
    
    <!--home页顶部导航栏-->
    <nav-bar class="home-nav">
      <div slot="center">购物街</div>
    </nav-bar>
    
    <tab-control :titles="['流行', '新款', '精选']" v-show="isTabFixed" @tabClick="tabClick" ref="topTabcontrol" />

    <scroll class="scroll-content" ref="scroll" :probe-type="3" @scroll="contentScroll" :pull-up-load="true" @pullingUp="loadMore">   <!--滚动框需要设置一个固定高度，而每次复用时高度都可能不同，所以需要在创建时自定义-->
      
      <home-swiper :banners="banners" @swiperImagLoad="swiperImagLoad"/>

      <recommend-view :recommends="recommends" />
    
      <feature-view/>

      <tab-control :titles="['流行', '新款', '精选']"  @tabClick="tabClick" ref="tabcontrol" />
      <!--tabControl组件发生了点击事件,要在home页面进行响应，子传父：自定义事件-->

      <goods-list :goods="showGoods" />

    </scroll>

    <back-top @click.native="backTopClick" v-show="isShowBackTop"/>

  </div>
</template>

<script>

import NavBar from 'components/common/navbar/NavBar';
import Scroll from 'components/common/scroll/Scroll';

import TabControl from 'components/content/tabcontrol/TabControl';
import GoodsList from 'components/content/goods/GoodsList';
import BackTop from 'components/content/backtop/BackTop';

import HomeSwiper from './childComps/HomeSwiper';
import RecommendView from './childComps/RecommendView'
import FeatureView from './childComps/FeatureView';


import {
  getHomeMultidata,
  getHomeGoods,
} from 'network/home';



export default {
  name:'Home',

  data(){
   return {
     banners: [],
     recommends: [],
     goods: {
       'pop': {page: 1, list: []},      //用于+=每次请求到的数据
       'new': {page: 1, list: []},
       'sell': {page: 1, list: []},
     },
     currentType: 'pop',
     isShowBackTop: false,
     tabOffsetTop: 0,
     isTabFixed: false,
   }
  },

  computed:{
    showGoods() {
      return this.goods[this.currentType].list
    }
  },

  components: {
    NavBar,
    TabControl,

    NavBar, 
    HomeSwiper,
    RecommendView,
    FeatureView,
    TabControl,
    GoodsList,
    Scroll,
    BackTop,
  },

  created() {              //组件一旦创建好就就请求该数据。   
    this.getHomeMultidata();
    this.getHomeGoods('pop');
    this.getHomeGoods('new');
    this.getHomeGoods('sell');
  },

  methods: {

  /** 网络请求相关方法 */

    getHomeMultidata() {
      getHomeMultidata()
        .then(res => {
          this.banners = res.data.data.banner.list;         //如果不传给数据，那么created()执行完毕后res就会被销毁
          this.recommends = res.data.data.recommend.list;
        })
    },
    getHomeGoods(type){
      const page = this.goods[type].page;
      getHomeGoods(type, page)
        .then(res => {
          this.goods[type].list.push(...res.data.data.list);    //将请求到的数据push到对应类型数据的list数组中
          this.goods[type].page +=1 ;                           //page+1,下次请求时直接请求下一页数据，不用每次都要指定页数
        })
    },
    loadMore() {
      this.getHomeGoods(this.currentType);
    },

    
    /** 事件监听相关的方法 */

    tabClick(index) {
      //将两个tabcontrol点击选项同步
      this.$refs.topTabcontrol.currentIndex = index;
      this.$refs.tabcontrol.currentIndex = index;
      //根据tabbcontrol的点击获取选项名称，以此确定goodslist显示哪个选项页
      this.currentType = Object.keys(this.goods)[index];   //object.keys()，参数为对象，值为对象的属性名数组,结果表示序号为index的属性名字符串
    },

    backTopClick() {
      this.$refs.scroll.scrollTo(0, 0, 500);      //scrolTo()方法使滚动区回到指定坐标，500ms指定完成时间
    },

    contentScroll(position) {

      //判断backtop是否显示
      this.isShowBackTop = ( -position.y > this.tabOffsetTop - 44 );

      //判断tabcontrol是否吸顶
      this.isTabFixed = ( -position.y > this.tabOffsetTop);
    },

    swiperImagLoad() {
      this.tabOffsetTop = this.$refs.tabcontrol.$el.offsetTop;       //获取 轮播图第一张图片加载完成时tabcontrol和滚动区顶端的距离
    }
  }
    
}
</script>

<style scoped>

  .home{
    height: 100vh;                /**将home的高度设置为视口高度 */
  }
  .home-nav{
    background-color: #ff8198;
    color: #fff;
  }
  .scroll-content{                   /**better-scroll需要给swiper设置一固定高度，但如果在组件内设置那就不能复用了 */
    height: calc(100% - 96px);       /**组件实例上的属性会作用于组件的组件模板的根元素，这里正好是swiper元素，可以在这里设置此组件swiper的高度 */
    overflow: hidden;                /**100%在盒子模型中指的是内容区的100%，这里有一个内边距，将swiper的大小设置成减去tabbar即可 */
  }
  .fixed {
    position: fixed;
    left: 0;
    right: 0;
    top: 44px;
  }
</style>
