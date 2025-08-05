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

      const res = await axios.patch('http://localhost:3000/cart/${obj.id}',[count:obj.newCount])
      console.log(res)
    }
  },
  // Note: getters are not defined here, as they are not used in the provided context.
  getters: {}
}
