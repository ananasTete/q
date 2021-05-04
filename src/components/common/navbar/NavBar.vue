<template>
  <div class="nav-bar">
      <div class="left">
          <slot name="left"></slot>
      </div>
      <div class="center">
          <slot name="center"></slot>
      </div>
      <div class="right">
          <slot name="right"></slot>
      </div>
  </div>
</template>

<script>
export default {
  name:'',
  data(){
   return {
   }
  }
}
</script>

<style scoped>
  .nav-bar{
    height: 44px;          /*一般导航栏高度为44px*/
    display: flex;
    text-align: center;
    line-height: 44px;
    box-shadow: 0 1px 1px rgba(100, 100, 100, .1);
  }
  .left , .right{             /**左右插槽占60px */
    width: 60px;
  }
  .center{                   /**center插槽填满中间 */
    flex-grow: 1;
  }
</style>
