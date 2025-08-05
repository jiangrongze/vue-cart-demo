<template>
  <div class="good-container">
    <div class="left">
      <img :src="item.thumb" alt="Product Image" />
    </div>
    <div class="right">
      <div class="title">{{ item.name }}</div>
      <div class="info">
        <span>Price: ${{ item.price }}</span>
        <div class="btns">
          <button @click="onButClick(-1)" class="btn btn-light">-</button>
          <span class="count">{{ item.count }}</span>
          <button @click="onButClick(1)" class="btn btn-light">+</button>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
// import { mapState } from 'vuex'
// import { mapActions } from 'vuex'
// import { mapMutations } from 'vuex'
// import { mapGetters } from 'vuex'
// import { mapActions } from 'vuex'
// import { mapMutations } from 'vuex'

export default {

  name: 'CartItem',

  props: {
    item: {
      type: Object,
      required: true
    }
  },

  methods: {
    removeItem () {
      this.$emit('remove', this.item.id)
    },
    add () {
      this.$emit('add', this.item.id)
    },
    sub () {
      this.$emit('sub', this.item.id)
    },
    onButClick (step) {
      const newCount = this.item.count + step
      if (newCount < 1) {
        return
      }
      this.$store.dispatch('cart/updateList', {
        id: this.item.id,
        count: newCount
      })
      console.log('onButClick', this.item.count, step, newCount)
    }
  }
}
</script>

<style></style>
