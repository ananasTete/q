<template>
  <div class="backtop">
    <img src="~assets/img/common/top.png" alt="">
  </div>
</template>

<script>
export default {
  name:'BackTop',
  data(){
    return {
    }
  },
}
</script>

<style scoped>
  .backtop{
    position: fixed;
    right: 8px;
    bottom: 50px;
  }
  .backtop img{
    width: 43px;
  }
</style>
