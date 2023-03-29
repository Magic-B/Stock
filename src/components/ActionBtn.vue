<template>
  <button class="action_btn" :class="active ? 'action_btn_active' : ''">
    {{ active ? altLabel : label }}
  </button>
</template>

<script setup lang="ts">
defineProps({
  label: {
    type: String,
    required: true
  },
  altLabel: {
    type: String,
    required: true
  },
  active: {
    type: Boolean,
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
}

.action_btn_active {
  color: $selection;
}
</style>