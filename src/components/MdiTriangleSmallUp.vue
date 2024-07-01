
<template>
  <svg :width="size" :height="size" viewBox="0 0 24 24">
      <path d="M8 15H16L12 8" style="fill: currentColor" />
  </svg>
</template>

<script lang="ts">
  import { defineComponent } from 'vue';

  export default defineComponent({
      name: "MdiTriangleSmallUp",
      props: {
          size: { 
              type: Number, 
              default: 24 
          }
      },
  })
</script>
