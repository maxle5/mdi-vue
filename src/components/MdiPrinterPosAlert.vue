
<template>
  <svg :width="size" :height="size" viewBox="0 0 24 24">
      <path d="M16 10H4C2.9 10 2 10.9 2 12V19H18V12C18 10.9 17.11 10 16 10M16 14H12V12H16V14M15 9H5V4H15V9M22 7V13H20V7H22M20 15H22V17H20V15Z" style="fill: currentColor" />
  </svg>
</template>

<script lang="ts">
  import { defineComponent } from 'vue';

  export default defineComponent({
      name: "MdiPrinterPosAlert",
      props: {
          size: { 
              type: Number, 
              default: 24 
          }
      },
  })
</script>
