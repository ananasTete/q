import BackTop from 'components/content/backtop/BackTop'


/**定义backTop组件在不同父组件中的配置 */
export const backTopMixin = {
  components: {
    BackTop,
  },
  data() {
    return {
      isShowBackTop: false,
    }
  },
  methods: {
    backTopClick() {
      this.$refs.scroll.scrollTo(0, 0, 500);      
    },
    listenShowBackTop(positionY) {
      this.isShowBackTop = (positionY > 1000);
    },
  }
}