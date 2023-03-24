<template>
  <div class="search_input">
    <input type="text">
    <button class="search_input_btn">
      <IconsController name="search" />
    </button>
  </div>
</template>

<script setup lang="ts">
import IconsController from '@/components/IconsController.vue'
</script>

<style lang="scss" scoped>
.search_input {
  display: flex;
  justify-content: space-between;
  align-items: center;

  width: 274px;
  height: 48px;
  padding: 0 4px 0 20px;

  border: 1px solid #E0E3EE;
  border-radius: 10px;

  input {
    all: unset
  }

  &_btn {
    all: unset;
    cursor: pointer;
    display: flex;
    align-items: center;
    justify-content: center;

    width: 40px;
    height: 40px;

    background: #2D3B87;
    border-radius: 10px;
  }
}
</style>