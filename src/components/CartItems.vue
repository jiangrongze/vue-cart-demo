<template>
  <div :item ="list">
    <div class="good-container" v-for="item in list" :key="item.id">
      <div class="left">
        <img :src="item.thumb" alt="Product Image" />
      </div>
      <div class="right">
        <div class="title">{{ item.name }}</div>
        <div class="info">
          <span>Price: ${{ item.price }}</span>
          <div class="btns">
            <button class="btn btn-light">-</button>
            <span class="count">{{ item.count }}</span>
            <button class="btn btn-light">+</button>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'CartItems',
  props: {
    list: Array
  },
  methods: {
    removeItem () {
      this.$emit('remove', this.item.id)
    }
  }
}
</script>

<style>
</style>
