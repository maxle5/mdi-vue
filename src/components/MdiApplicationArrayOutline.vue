
<template>
  <svg :width="size" :height="size" viewBox="0 0 24 24">
      <path d="M21 2H3C1.9 2 1 2.9 1 4V20C1 21.1 1.9 22 3 22H21C22.1 22 23 21.1 23 20V4C23 2.9 22.1 2 21 2M21 20H3V6H21V20M6 8V18H10V16H8V10H10V8H6M16 16H14V18H18V8H14V10H16V16" style="fill: currentColor" />
  </svg>
</template>

<script lang="ts">
  import { defineComponent } from 'vue';

  export default defineComponent({
      name: "MdiApplicationArrayOutline",
      props: {
          size: { 
              type: Number, 
              default: 24 
          }
      },
  })
</script>
