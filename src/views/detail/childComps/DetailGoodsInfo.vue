<template>
  <div v-if="Object.keys(detailInfo).length !== 0">
    <div v-for="item in (detailInfo.detailImage[0].list)" :key="item">
      <img :src="item" alt="" class="img" @load="imgLoad">
    </div>
  </div>
</template>

<script>
import {deBounce} from 'common/utils.js'
export default {
  name:'DetailGoodsInfo.vue',

  props: {
    detailInfo: {
      type: Object,
      default() {
        return {};
      }
    }
  },

  methods: {
    imgLoad() {
      // const emit = deBounce(this.$emit('imgLoad'), 1000);
      // emit();
      this.$emit('imgLoad');
    }
  }
}
</script>

<style scoped>
  .img {
    max-width: 100%;
  }
</style>
