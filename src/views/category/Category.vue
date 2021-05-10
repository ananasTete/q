<template>
  <div class="category">

    <nav-bar class="cate-nav">
      <div slot="center">
        分类
      </div>
    </nav-bar>


    <div class="content">
      <category-list :cate-list="cateList" @listClick="listClick"/>
      
      <div class="cateInfo">
        <tab-control class="head-control" :titles="['综合', '新品', '销量']" @tabClick="tabClick" ref="tabcontrol" v-show="showTab" :tab-index="tabIndex"></tab-control>

        <scroll class="scroll" :pullUpLoad="true" ref="scroll" :probeType="3" @scroll="scroll">
          <category-goods :sub-list="subList" @goodsImgLoad="goodsImgLoad"></category-goods>

          <tab-control :titles="['综合', '新品', '销量']" @tabClick="tabClick" ref="tabcontrol" :tab-index="tabIndex"></tab-control>

          <goods-list :goods="thisDetail"></goods-list>
        
        </scroll>
      </div>

      <back-top @click.native="backToTop" v-show="showBackTop"/>
    </div>
    
  </div>
</template>

<script>

import {getCategoryList, getSubCategory, getSubCategoryDetail} from 'network/category.js'
import CategoryList from './childComps/CategoryList.vue';
import CategoryGoods from './childComps/CategoryGoods.vue';

import NavBar from 'components/common/navbar/NavBar.vue';
import Scroll from 'components/common/scroll/Scroll.vue';
import TabControl from 'components/content/tabcontrol/TabControl.vue';
import GoodsList from 'components/content/goods/GoodsList.vue';
import BackTop from 'components/content/backtop/BackTop';

export default {
  components: { 
    CategoryList,
    NavBar,
    CategoryGoods,
    Scroll,
    TabControl,
    GoodsList,
    BackTop,
  },
  
  data(){
    return {
     cateList: [],        //左侧导航栏
     subList: [],         //右侧商品分类
     detailList:[],        //右侧商品
     currentIndex: -1,
     currentType: 'pop',
     showDetail: false,
     showBackTop: false,
     tabOffsetTop: 0,
     showTab: false,
     tabIndex: 0,
     
    }
  },
  computed: {
    thisDetail(){
      // console.log(this.detailList[this.currentIndex].listItem)
      // console.log( this.detailList[this.currentIndex].listItem);
      if (this.currentIndex === -1) return []
      return this.detailList[this.currentIndex][this.currentType];
    }
  },
  created() {
    getCategoryList()
      .then((result) => {
        // console.log(result.data.data.category);
        this.cateList = result.data.data.category.list;
        for(let i in this.cateList) {
          this.detailList[i] = {
            'pop': [],
            'new': [],
            'sell': [],
          }
        }
        // console.log(this.detailList);
        this.listClick(0);
      })
    
  },
  methods: {
    listClick(index) {
      this.currentIndex = index;
      getSubCategory(this.cateList[index].maitKey)
      .then((result) => {
        // console.log(result);
        this.subList = result.data.data.list;
        this.getSubCategoryDetail('pop');
        this.getSubCategoryDetail('new');
        this.getSubCategoryDetail('sell');
      })
    },
    getSubCategoryDetail(type) {
      const miniWallkey = this.cateList[this.currentIndex].miniWallkey;
      // console.log(miniWallkey);
      getSubCategoryDetail(miniWallkey, type)
      .then((result) => {
        // console.log(result.data);
        // console.log(this.detailList);
        this.detailList[this.currentIndex][type] = result.data;
        // console.log(this.detailList[this.currentIndex].listItem[type]);
        // this.showDetail = true;  
        this.detailList = { ...this.detailList};
        console.log(this.detailList);

        // console.log(this.showDetail);
      })
    },


    tabClick(index) {
      this.tabIndex = index;
      switch (index) {
        case 0 :
          this.currentType = 'pop';
          break
        case 1:
          this.currentType = 'new';
          break
        case 2:
          this.currentType = 'sell';
      }
    },
    scroll(position) {
      this.showBackTop = (-position.y > this.tabOffsetTop - 44);
      this.showTab = (-position.y > this.tabOffsetTop);
    },
    goodsImgLoad() {
      this.tabOffsetTop = this.$refs.tabcontrol.$el.offsetTop;
    },
    backToTop() {
      this.$refs.scroll.scrollTo();
    } 
  }
}
</script>

<style scoped>
.cate-nav{
  background-color: #ff8198;
  color: #fff;
}
.content{
  display: flex;
}
.cateInfo{
  width: 75vw;
  height: calc(100vh - 96px);
}
.scroll{
  width: 100%;
  height: 100%;
  overflow: hidden;
}
</style>
