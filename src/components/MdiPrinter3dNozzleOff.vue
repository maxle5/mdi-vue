
<template>
  <svg :width="size" :height="size" viewBox="0 0 24 24">
      <path d="M20.8 22.7L14 15.9L13 17H11L7.5 13H5V8H6.1L1.1 3L2.4 1.7L22.1 21.4L20.8 22.7M11 19C11 19.6 10.6 20 10 20H2V22H10C11.7 22 13 20.7 13 19V18H11V19M19 13V8H17V2H7V3.8L16.2 13H19Z" style="fill: currentColor" />
  </svg>
</template>

<script lang="ts">
  import { defineComponent } from 'vue';

  export default defineComponent({
      name: "MdiPrinter3dNozzleOff",
      props: {
          size: { 
              type: Number, 
              default: 24 
          }
      },
  })
</script>
