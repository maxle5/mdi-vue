
<template>
  <svg :width="size" :height="size" viewBox="0 0 24 24">
      <path d="M14,17H17L19,13V7H13V13H16M6,17H9L11,13V7H5V13H8L6,17Z" style="fill: currentColor" />
  </svg>
</template>

<script lang="ts">
  import { defineComponent } from 'vue';

  export default defineComponent({
      name: "MdiFormatQuoteClose",
      props: {
          size: { 
              type: Number, 
              default: 24 
          }
      },
  })
</script>
