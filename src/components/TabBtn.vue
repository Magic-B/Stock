<template>
  <div class="tab">
    <IconsController :name="icon"/>
    <div class="tab_label">{{ label }}</div>
  </div>
</template>

<script setup lang="ts">
import IconsController from '@/components/IconsController.vue'

const props = defineProps({
  label: {
    type: String,
    required: true
  },
  icon: {
    type: String,
    required: true
  }
})
</script>

<style lang="scss">
.tab {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 4px;

  width: 86px;
  height: 60px;
  padding: 6px 0px 7px;

  &_label {
    font-weight: 500;
  }
}
</style>