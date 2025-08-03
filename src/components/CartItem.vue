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
          <button @click="sub" class="btn btn-light">-</button>
          <span class="count">{{ item.count }}</span>
          <button @click="add" class="btn btn-light">+</button>
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
      this.$emit('add', this.item.id)
    },
    sub () {
      this.$emit('sub', this.item.id)
    }
  }
}
</script>

<style></style>
