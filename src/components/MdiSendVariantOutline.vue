
<template>
  <svg :width="size" :height="size" viewBox="0 0 24 24">
      <path d="M3 20V4L22 12M5 17L16.85 12L5 7V10.5L11 12L5 13.5M5 17V7 13.5Z" style="fill: currentColor" />
  </svg>
</template>

<script lang="ts">
  import { defineComponent } from 'vue';

  export default defineComponent({
      name: "MdiSendVariantOutline",
      props: {
          size: { 
              type: Number, 
              default: 24 
          }
      },
  })
</script>
