
<template>
  <svg :width="size" :height="size" viewBox="0 0 24 24">
      <path d="M3 5H21V9H3V5M3 10H21V14H3V10M3 15H21V19H3V15Z" style="fill: currentColor" />
  </svg>
</template>

<script lang="ts">
  import { defineComponent } from 'vue';

  export default defineComponent({
      name: "MdiViewSequential",
      props: {
          size: { 
              type: Number, 
              default: 24 
          }
      },
  })
</script>
