<template>
  <button
    class="buy_btn"
    :class="isbought ? 'active' : ''"
    @click="buyProduct"
  >
    <template v-if="loader">
      <AppLoader color-white />
    </template>
    <template v-else>
      {{ isbought ? altLabel : label }}
    </template>
  </button>
</template>

<script setup lang="ts">
import { ref } from 'vue'
import AppLoader from '@/components/AppLoader.vue'
defineProps({
  label: {
    type: String,
    required: true
  },
  altLabel: {
    type: String,
    required: true
  }
})

const loader = ref(false)
const isbought = ref(false)

const buyProduct = () => {
  loader.value = true
  setTimeout(() => {
    loader.value = false
    isbought.value = true
  }, 1000)
}
</script>

<style lang="scss" scoped>
.buy_btn {
  all: unset;
  cursor: pointer;
  display: flex;
  justify-content: center;
  align-items: center;

  font-weight: 500;
  font-size: 15px;

  width: 212px;
  height: 50px;
  color: #fff;
  background: #69C57F;
  border-radius: 10px;

  &.active {
    background: none;
    color: $selection;
    border: 1px solid #E0E3EE;
  }
}
</style>
