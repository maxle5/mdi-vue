
<template>
  <svg :width="size" :height="size" viewBox="0 0 24 24">
      <path d="M2,21L23,12L2,3V10L17,12L2,14V21Z" style="fill: currentColor" />
  </svg>
</template>

<script lang="ts">
  import { defineComponent } from 'vue';

  export default defineComponent({
      name: "MdiSend",
      props: {
          size: { 
              type: Number, 
              default: 24 
          }
      },
  })
</script>
