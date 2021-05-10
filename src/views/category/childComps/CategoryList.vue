<template>
  <div class="categorylist">
    <scroll class="scroll" :pullUpLoad="true">
      <ul>
      <li v-for="(item, index) in cateList" :key="index" 
          @click="liClick(index, item.maitKey)"  
          :class="{active: index === currentIndex}">
        {{item.title}}
      </li>
    </ul>
    </scroll>
  </div>
</template>

<script>
import Scroll from 'components/common/scroll/Scroll.vue'
export default {
  components: { 
    Scroll,
  },
  name:'CategoryList',
  data(){
    return {
      currentIndex: 0,
    }
  },
  props: {
    cateList: {
      type: Array,
      default: [],
    }
  },
  methods: {
    liClick(index, maitKey) {
      this.currentIndex = index;
      this.$emit('listClick', index);
    }
  }
}
</script>

<style scoped>
.categorylist{
  width: 25vw;
  height: calc(100vh - 96px);
}
.scroll{
  height: 100%;
  overflow: hidden;
}
ul{
  height: 100%;
  list-style: none;
}
li{
  height: 2.5em;
  line-height: 2.5em;
  text-align: center;
  font-size: 20px;
  border-right: 1px solid #D5DBDB;
}
.active{
  border-bottom: .2em solid #ff8198;
  color: #ff8198;
}
</style>
