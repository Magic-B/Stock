<template>
  <button class="favorites_btn" :class="active ? 'favorites_btn_active' : ''">
    <IconsController name="favorites" class="favorites_svg"/>
  </button>
</template>

<script setup lang="ts">
import IconsController from '@/components/IconsController.vue'

defineProps({
  active: {
    type: Boolean,
    required: true
  }
})
</script>

<style lang="scss" scoped>
.favorites_btn {
  all: unset;
  cursor: pointer;
  display: flex;
  justify-content: center;
  align-items: center;

  width: 50px;
  height: 50px;

  background: $bg;
  border-radius: 10px;

  transition: all .5s;
}

.favorites_btn_active {
  background: #2D3B87;
  & .favorites_svg {
  color: #fff ;
}
}
</style>