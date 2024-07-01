
<template>
  <svg :width="size" :height="size" viewBox="0 0 24 24">
      <path d="M22 12L17 22L7.1 6.04L4.24 12H2L7 2L16.9 17.96L19.76 12H22Z" style="fill: currentColor" />
  </svg>
</template>

<script lang="ts">
  import { defineComponent } from 'vue';

  export default defineComponent({
      name: "MdiTriangleWave",
      props: {
          size: { 
              type: Number, 
              default: 24 
          }
      },
  })
</script>
