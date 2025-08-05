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
          <button @click="btnClick(-1)" class="btn btn-light">-</button>
          <span class="count">{{ item.count }}</span>
          <button @click="btnClick(1)" class="btn btn-light">+</button>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
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
      this.$emit('add', this.item.count + 1, this.item.id)
    },
    sub () {
      this.$emit('sub', this.item.count - 1, this.item.id)
    },
    btnClick (step) {
      const newCount = this.item.count + step
      const id = this.item.id
      console.log(id, newCount)
      this.$store.dispatch('cart/updateCountAsync', {
        id,
        newCount
      })
    }
  }
}
</script>

<style></style>
