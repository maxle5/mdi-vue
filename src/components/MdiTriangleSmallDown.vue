
<template>
  <svg :width="size" :height="size" viewBox="0 0 24 24">
      <path d="M8 9H16L12 16" style="fill: currentColor" />
  </svg>
</template>

<script lang="ts">
  import { defineComponent } from 'vue';

  export default defineComponent({
      name: "MdiTriangleSmallDown",
      props: {
          size: { 
              type: Number, 
              default: 24 
          }
      },
  })
</script>
