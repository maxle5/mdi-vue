
<template>
  <svg :width="size" :height="size" viewBox="0 0 24 24">
      <path d="M10,7L8,11H11V17H5V11L7,7H10M18,7L16,11H19V17H13V11L15,7H18Z" style="fill: currentColor" />
  </svg>
</template>

<script lang="ts">
  import { defineComponent } from 'vue';

  export default defineComponent({
      name: "MdiFormatQuoteOpen",
      props: {
          size: { 
              type: Number, 
              default: 24 
          }
      },
  })
</script>
