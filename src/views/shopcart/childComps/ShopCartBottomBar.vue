<template>
  <div class="bottom-bar">
    <div class="check-all">
      <check-bottom @click.native="checkAllItem" :isChecked="isCheckedAll"></check-bottom>
      <span>全选</span>
    </div>
    <div class="total">
      合计：￥{{totalPrice}}
    </div>
    <div class="settlement">去结算({{totalCount}})</div>
  </div>
</template>

<script>
import CheckBottom from 'components/content/checkbottom/CheckBottom'
import { mapGetters } from 'vuex'

export default {
  name:'ShopCartBottomBar',
  data(){
    return {
    }
  },
  computed: {
    ...mapGetters(['totalPrice', 'totalCount', 'isCheckedAll']),
  },
  components: {
    CheckBottom,
  },
  methods: {
    checkAllItem() {
      this.$store.commit('checkAll', this.isCheckedAll)
    }
  }
}
</script>

<style scoped>
.bottom-bar {
  height: 40px;
  /* background: #aaa; */
  position: fixed;
  left: 0;
  right: 0;
  bottom: 52px;

  display: flex;
}
.check-all {
  width: 20%;
  display: flex;
  justify-content: space-evenly;
  align-items: center;
}
.total {
  width: 50%;
  line-height: 40px;
  padding-left: 20px;
}
.settlement {
  width: 30%;
  background-color: red;
  color: white;
  font-size: 20px;
  line-height: 40px;
  text-align: center;
}

</style>
