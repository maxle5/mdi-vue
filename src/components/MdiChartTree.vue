
<template>
  <svg :width="size" :height="size" viewBox="0 0 24 24">
      <path d="M14,6H22V22H14V6M2,4H22V2H2V4M2,8H12V6H2V8M9,22H12V10H9V22M2,22H7V10H2V22Z" style="fill: currentColor" />
  </svg>
</template>

<script lang="ts">
  import { defineComponent } from 'vue';

  export default defineComponent({
      name: "MdiChartTree",
      props: {
          size: { 
              type: Number, 
              default: 24 
          }
      },
  })
</script>
