
<template>
  <svg :width="size" :height="size" viewBox="0 0 24 24">
      <path d="M5 7H11V9H7V11H10V13H7V17H5V7M15 17H13L17 9H13V7H19V9L15 17Z" style="fill: currentColor" />
  </svg>
</template>

<script lang="ts">
  import { defineComponent } from 'vue';

  export default defineComponent({
      name: "MdiKeyboardF7",
      props: {
          size: { 
              type: Number, 
              default: 24 
          }
      },
  })
</script>
