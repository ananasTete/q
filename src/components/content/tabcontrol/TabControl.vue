<template>
  <div class="tab-control">
      <div v-for="(item, index) in titles" :key="index" class="tab-control-item" 
        :class="{active: index === currentIndex}" @click="itemClick(index)">
        <span>{{item}}</span>
      </div>
  </div>
</template>

<script>
export default {
  name:'TabControl',
  data(){
    return {
      currentIndex: 0,        
    }
  },
  props: {
    titles:{
      type: Array,
      default() {
          return [];
      }
    },
  },
  methods:{
    itemClick(index) {
      this.currentIndex = index;
      this.$emit('tabClick', index);
    }
  }
}
</script>

<style scoped>
  .tab-control{
    display: flex; 
    justify-content: space-around;
    background-color: #fff;
  }
  .tab-control-item{
    height: 40px;
    line-height: 40px;
  }
  .active{
    color: #ff5777;
    border-bottom: 3px solid #ff5777;
  }
</style>
