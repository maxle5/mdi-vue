
<template>
  <svg :width="size" :height="size" viewBox="0 0 24 24">
      <path d="M17 5L21 9L17 13V5M16 8H13V10H16V8M12 10V8H10V10H12M3 15L7 11V19L3 15M8 16H11V14H8V16M12 14V16H14V14H12Z" style="fill: currentColor" />
  </svg>
</template>

<script lang="ts">
  import { defineComponent } from 'vue';

  export default defineComponent({
      name: "MdiSwapHorizontalHidden",
      props: {
          size: { 
              type: Number, 
              default: 24 
          }
      },
  })
</script>
