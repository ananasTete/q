<template>
  <div class="toast" v-show="isShow">
    {{message}}
  </div>
</template>

<script>
export default {
  name:'Toast',
  data(){
    return {
      isShow: false,
      message: '',
    }
  },
  methods: {
    show(message, time=800) {
      this.isShow = true;
      this.message = message;
      setTimeout(() => {
        this.isShow = false;
        this.message = '';
      }, time)
    }
  }
}
</script>

<style scoped>
.toast{
  background: rgba(0, 0, 0, .8);
  border-radius: 15px;
  color: aliceblue;
  font-size: 20px;
  padding: 15px;
  position: fixed;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  z-index: 9;
}
</style>
