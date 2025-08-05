import axios from 'axios'

export default {

  namespaced: true,

  state () {
    return {
      list: []
    }
  },

  mutations: {
    updateList (state, newList) {
      state.list = newList
    },
    updateCount (state, obj) {
      const item = state.list.find(item => item.id === obj.id)
      if (item) {
        item.count = obj.newCount
      } else {
        console.error('Item not found in cart:', obj.id)
      }
    }

  },

  actions: {
    async getList (context) {
      // return new Promise((resolve, reject) => {
      //   // Simulating an API call
      //   setTimeout(() => {
      //     const data = [
      //       { id: 1, name: 'Item 1', price: 10 },
      //       { id: 2, name: 'Item 2', price: 20 }
      //     ]
      //     context.commit('updateList', data)
      //     resolve(data)
      //   }, 1000)
      // })
      const res = await axios.get('http://localhost:3000/cart')
      if (res.status === 200) {
        context.commit('updateList', res.data)
      } else {
        console.error('Failed to fetch cart items:', res.statusText)
      }
    },
    async updateCountAsync (context, obj) {
      // console.log(obj, '*************')

      const res = await axios.patch(`http://localhost:3000/cart/${obj.id}`, { count: obj.newCount })
      console.log(res)
      context.commit('updateCount', obj)
      if (res.status !== 200) {
        console.error('Failed to update item count:', res.statusText)
      }
    }
  },
  // Note: getters are not defined here, as they are not used in the provided context.
  getters: {
    cartList (state) {
      return state.list
    },
    totalPrice (state) {
      return state.list.reduce((total, item) => total + item.price * item.count, 0)
    },
    totalCount (state) {
      return state.list.reduce((total, item) => total + item.count, 0)
    }
  }
}
