<template>
  <div class="recommend">
      <div v-for="item in recommends" :key="item.acm" class="recommend-item"> 
          <a :href="item.link">
              <img :src="item.image" alt="">
              <div>{{item.title}}</div>
          </a>
      </div>
  </div>
</template>

<script>
export default {
  name:'RecommendView',
  data(){
   return {
   }
  },
  props: {
    recommends: {
      type: Array,
      default() {
        return []
      },
    }
  }
}
</script>

<style scoped>
  .recommend{
    display: flex;
    padding: 15px 0 25px;
    border-bottom: 10px solid #eee;
  }
  .recommend-item{
    text-align: center;
  }
  .recommend img{ 
    width: 80%;
    margin-bottom: 10px;
  }
</style>
