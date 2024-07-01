
<template>
  <svg :width="size" :height="size" viewBox="0 0 24 24">
      <path d="M20 2H4C2.9 2 2 2.9 2 4V20C2 21.1 2.9 22 4 22H20C21.1 22 22 21.1 22 20V4C22 2.9 21.1 2 20 2M4 4H8V14H4V4M4 20V16H8V20H4M20 20H10V10H20V20M20 8H10V4H20V8Z" style="fill: currentColor" />
  </svg>
</template>

<script lang="ts">
  import { defineComponent } from 'vue';

  export default defineComponent({
      name: "MdiLandPlots",
      props: {
          size: { 
              type: Number, 
              default: 24 
          }
      },
  })
</script>
