
<template>
  <svg :width="size" :height="size" viewBox="0 0 24 24">
      <path d="M9,3L5,7H8V14H10V7H13M16,17V10H14V17H11L15,21L19,17H16Z" style="fill: currentColor" />
  </svg>
</template>

<script lang="ts">
  import { defineComponent } from 'vue';

  export default defineComponent({
      name: "MdiSwapVertical",
      props: {
          size: { 
              type: Number, 
              default: 24 
          }
      },
  })
</script>
