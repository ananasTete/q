<template>
  <div class="detailnavbar">
    <nav-bar>
      <div slot="left" class="back" @click="backHome">
        <img src="~assets/img/common/back.svg" alt="">
      </div>
      <div slot="center" class="titles">
        <div v-for="(item, index) in titles" :key="index" 
             :class="{active:  index === currentIndex}" 
             @click="titlesClick(index)">
             {{item}}
        </div>
      </div>
    </nav-bar>
  </div>
</template>

<script>
import NavBar from 'components/common/navbar/NavBar';
export default {
  name:'DetailNavbar',
  data(){
    return {
      titles:['商品', '参数', '评论', '推荐'],
      currentIndex: 0,
    }
  },
  components: {
    NavBar,
  },
  methods: {
    titlesClick(index) {
      this.currentIndex = index;
      this.$emit('navClick', index);
    },
    backHome() {
      this.$router.back();
    }
  }
}
</script>

<style scoped>
  .titles{
    display: flex;
    justify-content: space-between;
    font-size: 13px;
  }
  .active{
    color: brown;
  }
  .back img{
    margin-top: 12px;
  }

</style>
