<template>
  <div id="app" class="app-container">
    <cart-header></cart-header>
    <CartItem v-for="item in list" :key="item.id" :item="item"></CartItem>
    <!-- <cart-items  :item="list"></cart-items> -->
    <cart-summary></cart-summary>
    <CartFooter></CartFooter>
    <!-- <hello-world msg="Welcome to Your Vue.js App"/> -->
    <h1>Vue.js Shopping Cart{{ list[1].name }}</h1>

    <h3>Useful Links</h3>
    <nav>
      <router-link to="/">Home</router-link> |
      <router-link to="/about">About</router-link>
    </nav>
    <router-view/>
  </div>
</template>
<script>
import CartHeader from './components/CartHeader.vue'
import CartItem from './components/CartItem.vue'
import CartSummary from './components/CartSummary.vue'
import CartFooter from './components/CartFooter.vue'
// import HelloWorld from './components/HelloWorld.vue'
import { mapState } from 'vuex'

export default {
  name: 'App',
  methods: {
    add (newCount) {
      this.list.count = newCount
    },

    sub (newCount) {
      this.list.count = newCount
    }

  },
  components: {
    CartHeader,
    CartItem,
    // CartItems: () => import('./components/CartItems.vue'), // Lazy load CartItems component
    CartSummary,
    CartFooter
    // HelloWorld
  },
  created () {
    // Initialize any necessary data or state here
    this.$store.dispatch('cart/getList')
  },
  computed: {
    ...mapState('cart', ['list'])
  }
}

</script>

<style lang="less">
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

nav {
  padding: 30px;

  a {
    font-weight: bold;
    color: #2c3e50;

    &.router-link-exact-active {
      color: #42b983;
    }
  }
}
</style>
