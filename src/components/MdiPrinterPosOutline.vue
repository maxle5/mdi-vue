
<template>
  <svg :width="size" :height="size" viewBox="0 0 24 24">
      <path d="M18 10H17V4H7V10H6C4.89 10 4 10.9 4 12V19H20V12C20 10.9 19.11 10 18 10M9 6H15V10H9V6M18 17H6V12H18V17M17 15H13V13H17V15Z" style="fill: currentColor" />
  </svg>
</template>

<script lang="ts">
  import { defineComponent } from 'vue';

  export default defineComponent({
      name: "MdiPrinterPosOutline",
      props: {
          size: { 
              type: Number, 
              default: 24 
          }
      },
  })
</script>
