
<template>
  <svg :width="size" :height="size" viewBox="0 0 24 24">
      <path d="M2 3V10L17 12L2 14V21L23 12M22 15.5L18.5 19L16.5 17L15 18.5L18.5 22L23.5 17Z" style="fill: currentColor" />
  </svg>
</template>

<script lang="ts">
  import { defineComponent } from 'vue';

  export default defineComponent({
      name: "MdiSendCheck",
      props: {
          size: { 
              type: Number, 
              default: 24 
          }
      },
  })
</script>
