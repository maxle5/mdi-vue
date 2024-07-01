
<template>
  <svg :width="size" :height="size" viewBox="0 0 24 24">
      <path d="M3 20V14L11 12L3 10V4L22 12Z" style="fill: currentColor" />
  </svg>
</template>

<script lang="ts">
  import { defineComponent } from 'vue';

  export default defineComponent({
      name: "MdiSendVariant",
      props: {
          size: { 
              type: Number, 
              default: 24 
          }
      },
  })
</script>
