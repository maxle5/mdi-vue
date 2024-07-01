
<template>
  <svg :width="size" :height="size" viewBox="0 0 24 24">
      <path d="M21,18L17,14V17H5V19H17V22M9,10V15H11V4H13V15H15V4H17V2H9A4,4 0 0,0 5,6A4,4 0 0,0 9,10Z" style="fill: currentColor" />
  </svg>
</template>

<script lang="ts">
  import { defineComponent } from 'vue';

  export default defineComponent({
      name: "MdiFormatPilcrowArrowRight",
      props: {
          size: { 
              type: Number, 
              default: 24 
          }
      },
  })
</script>
