<template>
  <div class="cart-foote">
    <div class="footer-conten">
      <span>Total Items: {{ list.length }}</span><br/>
      <span>Total Count: {{ totalCount }}</span><br/>
      <span>Total Price1: {{ totalPrice }}</span><br/>
      <span>Total Price: ${{ list.reduce((total, item) => total + item.price * item.count, 0).toFixed(2) }}</span>
      <button @click="$emit('checkout')" class="btn btn-primary">Checkout</button>
    </div>
    <div class="footer-links">
      <router-link to="/about">About</router-link>
    </div>
    <div class="footer-info">
      <p>&copy; 2023 Vue.js Shopping Cart</p>
    </div>

  </div>
</template>

<script>
import { mapGetters, mapState } from 'vuex'

export default {
  name: 'CartFooter',

  props: {
    list: {
      type: Array,
      required: true
    }
  },

  methods: {
    checkout () {
      this.$emit('checkout')
    }
  },
  computed: {
    ...mapGetters('cart', ['totalPrice', 'totalCount']),
    ...mapState('cart', ['list'])
  }

}
</script>

<style>

</style>
