import Vue from 'vue'
import Vuex from 'vuex'
import cart from './modules/cart'
import user from './modules/user'
import axiox from 'axios'

Vue.use(Vuex)

const store = new Vuex.Store({
  state: {
    list: []

  },
  getters: {
    getList: state => {
      return state.list
    }
  },
  mutations: {
    setList (state, data) {
      state.list = data
    }
  },

  actions: {
    async getList (ctx) {
      const data = await axiox.get('https://localhost:3000/cart')
      console.log(data)
      ctx.commit('setList', data)
      this.list = data
    }
  },

  modules: {
    cart,
    user
  }
})

export default store
