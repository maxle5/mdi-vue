
<template>
  <svg :width="size" :height="size" viewBox="0 0 24 24">
      <path d="M8.5,7H10.5L16,21H13.6L12.5,18H6.3L5.2,21H3L8.5,7M7.1,16H11.9L9.5,9.7L7.1,16M22,5V7H19V10H17V7H14V5H17V2H19V5H22Z" style="fill: currentColor" />
  </svg>
</template>

<script lang="ts">
  import { defineComponent } from 'vue';

  export default defineComponent({
      name: "MdiFormatAnnotationPlus",
      props: {
          size: { 
              type: Number, 
              default: 24 
          }
      },
  })
</script>
