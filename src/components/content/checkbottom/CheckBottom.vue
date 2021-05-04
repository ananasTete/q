<template>
  <div class="check-bottom" :class="{active: isChecked}">
    <img src="~assets/img/cart/tick.svg" alt="">
  </div>
</template>

<script>
export default {
  name:'CheckBottom',
  data(){
    return {
    }
  },
  props: {
    isChecked: {
      type: Boolean,
    },
  }
}
</script>

<style scoped>
img {
  width: 25px;
}
.check-bottom {
  background-color: #aaa ;
  border-radius: 50%;
}
.active {
  background-color: brown;
  border: none;
}
</style>
