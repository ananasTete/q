<template>
  <div class="tab-bar-item" @click='itemClick'>              <!--1.1为每个tabbaritem都添加了点击事件，实现页面跳转-->
    <div v-if='!isactive'>
      <slot name="item-icon"></slot>
    </div>                                                        <!--2.1通过v-if绑定isactive，判断显示哪个图标-->
    <div v-else>
      <slot name="item-icon-active"></slot>
    </div>
    <div :class='{active: isactive}'>
        <slot name="item-text"></slot>
    </div>
  </div>
</template>

<script>
export default {
  name:'TabbarItem',
  computed:{
    isactive() {
      return this.$route.path.indexOf(this.path) !== -1;        
    }           //2.2让每个组件实例都判断当前页面的url是否和自己的url一致，一致的组件实例中的isactive计算属性为true，用于判断是否选中了这个页面
  },
  props: {
    path: String,
  },
  methods: {
    itemClick() {
        this.$router.push(this.path);             //1.2没有指定固定的路径，通过自定义属性让每个组件实例绑定到自己的路径
    }
  }
}
</script>

<style scoped>
  .tab-bar-item{
    height: 49px;
    font-size: 17px;
    margin-top: 3px;
    text-align: center;
  }
  .tab-bar-item img{
    width: 24px;
    height: 24px;
    vertical-align: middle;
    margin-bottom: 2px;
  }
  .active{
    font-weight: 600;
  }
</style>
