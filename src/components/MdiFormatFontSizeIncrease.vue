
<template>
  <svg :width="size" :height="size" viewBox="0 0 24 24">
      <path d="M5.12,14L7.5,7.67L9.87,14M6.5,5L1,19H3.25L4.37,16H10.62L11.75,19H14L8.5,5H6.5M18,7L13,12.07L14.41,13.5L17,10.9V17H19V10.9L21.59,13.5L23,12.07L18,7Z" style="fill: currentColor" />
  </svg>
</template>

<script lang="ts">
  import { defineComponent } from 'vue';

  export default defineComponent({
      name: "MdiFormatFontSizeIncrease",
      props: {
          size: { 
              type: Number, 
              default: 24 
          }
      },
  })
</script>
