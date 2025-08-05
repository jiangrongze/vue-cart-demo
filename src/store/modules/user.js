import axios from 'axios'

const state = {
  userInfo: null,
  isLogin: false
}

const mutations = {
  setUserInfo (state, userInfo) {
    state.userInfo = userInfo
  },
  setLoginStatus (state, isLogin) {
    state.isLogin = isLogin
  }
}

const actions = {
  async login ({ commit }, userInfo) {
    try {
      const response = await axios.post('http://localhost:3000/login', userInfo)
      if (response.status === 200) {
        commit('setUserInfo', response.data)
        commit('setLoginStatus', true)
      } else {
        console.error('Login failed:', response.statusText)
      }
    } catch (error) {
      console.error('Error during login:', error)
    }
  },
  async logout ({ commit }) {
    try {
      const response = await axios.post('http://localhost:3000/logout')
      if (response.status === 200) {
        commit('setUserInfo', null)
        commit('setLoginStatus', false)
      } else {
        console.error('Logout failed:', response.statusText)
      }
    } catch (error) {
      console.error('Error during logout:', error)
    }
  }
}

const getters = {
  isLoggedIn: state => state.isLogin,
  userInfo: state => state.userInfo
}

export default {
  namespaced: true,
  state,
  mutations,
  actions,
  getters
}
