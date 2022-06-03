export default {

  state: () => ({
    cartList: [],      //用于接收detail的商品数据对象，由于购物车中可能有任意个商品所以设计成对象数组的形式
  }),

  getters: {
    shopCartCount(state) {             //获取商品个数
      return state.cartList.length;
    },
    shopCartList(state) {               //获取数据对象
      return state.cartList;
    },
    totalPrice(state) {                  //获取总金额
      let totalPrice = 0;
      for(let item of state.cartList) {
        if(item.isChecked) {
          totalPrice += item.price * item.count;
        }
      }
      return totalPrice.toFixed(2);
    }, 
    totalCount(state) {                //获取选中商品的总数量
      let totalCount = 0;
      for(let item of state.cartList) {
        if(item.isChecked) {
          totalCount += item.count;
        }
      }
      return totalCount;
    },
    isCheckedAll(state) {
      if(state.cartList.length) {
        return state.cartList.every(item => {return item.isChecked})  //判断数组中每一个对象的isChecked属性是否为真，全真则返回真，一假则返回假
      }else {
        return false;
      }
    }
  },

  mutations: {
    addCount(state, payload) {
      payload.count++;
    },
    addToCart(state, payload) {
      //为什么不在checkbutton组件中定义点击事件改变选中状态而是给每个商品对象添加 ischecked属性呢，checkbotton定义自定义属性监听对象中的ischecked属性？
      //1.需要每个商品添加到购物车后默认选中
      //2.需要统计选中商品数量和总金额时，遍历cartList对象数组，对象的 ischecked属性为true则将其数量计入商品数量、将其金额计入总金额
      payload.isChecked = true;
      state.cartList.push(payload);
    },
    checkAll(state, payload) {
      state.cartList.forEach(item => {item.isChecked = !payload});    //对每个对象设置重新设置 isChecked属性后，上面的getters中isCheckedAll也会相应改变
    }
  },

  actions: {
    //传过来的对象应该有两种情况：1.对象数组中没有此对象则将其添加到对象数组中 2.添加过此对象则令数组中的对象的count+1
    addCart(context, payload) {
      return new Promise((resolve, reject) => {

         //遍历cartlist中是否添加过此商品,是的话获取已经添加到cartList中的该对象
        let oldList = context.state.cartList.find( item => item.iid === payload.iid);

        if(oldList) {                               //如果oldlist非空，则证明cartList中已经有了此对此对象
          context.commit('addCount', oldList);     //已存在的对象的 count属性+1
          resolve('商品数量+1');
        }else {                                     //如果oldlist为空，catlist中没有过payload对象
          payload.count = 1;                        //给payload一个新属性 count = 1
          context.commit('addToCart', payload);     //将新对象Push到cartlist数组中
          resolve('添加了一个新商品到购物车');
        }
      })  
    }
  },
}