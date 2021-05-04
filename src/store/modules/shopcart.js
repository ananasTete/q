export default {

  state: () => ({
    cartList: [],
  }),

  getters: {
    shopCartCount(state) {
      return state.cartList.length;
    },
    shopCartList(state) {
      return state.cartList;
    },
    totalPrice(state) {
      let totalPrice = 0;
      for(let item of state.cartList) {
        if(item.isChecked) {
          totalPrice += item.price * item.count;
        }
      }
      return totalPrice.toFixed(2);
    },
    totalCount(state) {
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
    addCount(state,payload) {
      payload.count++;
    },
    addToCart(state, payload) {
      payload.isChecked = true;
      state.cartList.push(payload);
    },
    checkAll(state, payload) {
      state.cartList.forEach(item => {item.isChecked = !payload});    //对每个对象设置重新设置 isChecked属性后，上面的getters中isCheckedAll也会相应改变
    }
  },

  actions: {
    addCart(context, payload) {
      return new Promise((resolve, reject) => {

         //遍历cartlist中是否添加过此商品,是的话获取已经添加到cartList中的该对象
        let oldList = context.state.cartList.find( item => item.iid === payload.iid);

        if(oldList) {                               //如果oldlist非空，即如果给oldlist添加了item，则证明cartList中已经有了此对此对象
          context.commit('addCount', oldList);     //已存在的对象的 count属性+1
          resolve('商品数量+1');
        }else {                                     //如果oldlist为空，则说明没有给它添加item，catlist中没有过payload对象
          payload.count = 1;                        //给payload一个新属性 count = 1
          context.commit('addToCart', payload);     //将新对象Push到cartlist数组中
          resolve('添加了一个新商品到购物车');
        }
      })  
    }
  },
}