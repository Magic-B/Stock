<template>
  <button class="action_btn">
    {{ label }}
  </button>
</template>

<script setup lang="ts">
defineProps({
  label: {
    type: String,
    required: true
  }
})
</script>

<style lang="scss" scoped>
.action_btn {
  all: unset;
  cursor: pointer;
  display: flex;
  justify-content: center;
  align-items: center;

  font-weight: 500;
  font-size: 15px;

  width: 212px;
  height: 50px;
  background: $bg;
  border-radius: 10px;
  transition: all .1s;

  &:active {
    background: $selection;
  }
}
</style>
