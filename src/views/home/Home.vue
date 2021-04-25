<template>
  <div class="home">
    
    <!--home页顶部导航栏-->
    <nav-bar class="home-nav">
      <div slot="center">购物街</div>
    </nav-bar>
    
    
    <scroll class="scroll-content" ref="scroll" :probe-type="3" @scroll="contentScroll" :pull-up-load="true" @pullingUp="loadMore">   <!--滚动框需要设置一个固定高度，而每次复用时高度都可能不同，所以需要在创建时自定义-->
      
      <swiper :banners="banners" @swiperImagLoad="swiperImagLoad"/>

      <recommend-view :recommends="recommends" />
    
      <feature-view/>

      <tab-control :titles="['流行', '新款', '精选']" class="tab-control-home"  @tabClick="tabClick" ref="tabcontrol"/>
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

import Swiper from './childComps/Swiper';
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
    Swiper,
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

  //网络请求相关方法

    getHomeMultidata() {
      getHomeMultidata()
        .then(res => {
          this.banners = res.data.data.banner.list;         //如果不传给数据，那么created()执行完毕后res就会被销毁
          this.recommends = res.data.data.recommend.list;
        })
    },
    getHomeGoods(type){
      // const page = this.goods[type].page + 1;
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

    
    //事件监听相关的方法

    tabClick(index) {
      this.currentType = Object.keys(this.goods)[index];   //object.keys()，参数为对象，值为对象的属性名数组,结果表示序号为index的属性名字符串
    },

    backTopClick() {
      this.$refs.scroll.scrollTo(0, 0, 500);      //scrolTo()方法使滚动区回到指定坐标，500ms指定完成时间
    },

    contentScroll(position) {
      this.isShowBackTop = -position.y > 1000;
    },

    swiperImagLoad() {
      this.tabOffsetTop = this.$refs.tabcontrol.$el.offsetTop;       //获取 轮播图第一张图片加载完成时tabcontrol和滚动区顶端的距离
    }
  }
    
}
</script>

<style scoped>

  .home{
    padding-top: 44px;           /*设置z-index后，nav会将轮播图盖住，弄一个内上边距*/
    height: 100vh;                /**将home的高度设置为视口高度 */
  }
  .home-nav{
    background-color: #ff8198;
    color: #fff;

    position: fixed;           /*将home-nav固定到home页顶部 */
    left: 0;
    right: 0;
    top: 0;
    z-index: 9;                /*fixed会让home-nav脱离文档流，会被轮播图盖住，设置一下z-index*/
  }
  .tab-control-home{
    position: sticky;         /*当距离屏幕顶端一定距离时改为fixed定位 */
    top: 44px;
  }

  .scroll-content{                   /**better-scroll需要给swiper设置一固定高度，但如果在组件内设置那就不能复用了 */
    height: calc(100% - 52px);       /**组件实例上的属性会作用于组件的组件模板的根元素，这里正好是swiper元素，可以在这里设置此组件swiper的高度 */
    overflow: hidden;                /**100%在盒子模型中指的是内容区的100%，这里有一个内边距，将swiper的大小设置成减去tabbar即可 */
  }

</style>
