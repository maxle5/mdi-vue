
<template>
  <svg :width="size" :height="size" viewBox="0 0 24 24">
      <path d="M10,4V7H12.21L8.79,15H6V18H14V15H11.79L15.21,7H18V4H10Z" style="fill: currentColor" />
  </svg>
</template>

<script lang="ts">
  import { defineComponent } from 'vue';

  export default defineComponent({
      name: "MdiFormatItalic",
      props: {
          size: { 
              type: Number, 
              default: 24 
          }
      },
  })
</script>
