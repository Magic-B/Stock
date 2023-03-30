<template>
  <div class="lds-ring" :class='{ big_loader: bigLoader, color_white: colorWhite }'>
    <div></div>
    <div></div>
    <div></div>
    <div></div>
  </div>
</template>
  
<script setup lang="ts">
defineProps({
  bigLoader: {
    type: Boolean,
    required: false
  },
  colorWhite: {
    type: Boolean,
    required: false
  }
})
</script>
  
<style lang="scss" scoped>
.lds-ring {
  display: flex;
  align-items: center;
  justify-content: center;
  position: relative;
  width: 100%;
  height: 100%;
}

.big_loader {
  div {
    width: 54px !important;
    height: 54px !important;
  }
}

.color_white {
  div {
    border: 3px solid #fff !important;
    border-color: #fff transparent transparent transparent !important;
  }
}

.lds-ring div {
  box-sizing: border-box;
  display: block;
  position: absolute;
  width: 24px;
  height: 24px;
  border: 3px solid $primary;
  border-radius: 50%;
  animation: lds-ring 1.2s cubic-bezier(0.5, 0, 0.5, 1) infinite;
  border-color: $primary transparent transparent transparent;
}

div:nth-child(1) {
  animation-delay: -0.45s;
}

div:nth-child(2) {
  animation-delay: -0.3s;
}

div:nth-child(3) {
  animation-delay: -0.15s;
}

@keyframes lds-ring {
  0% {
    transform: rotate(0deg);
  }

  100% {
    transform: rotate(360deg);
  }
}</style>
