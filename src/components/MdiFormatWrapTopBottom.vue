
<template>
  <svg :width="size" :height="size" viewBox="0 0 24 24">
      <path d="M12,7L17,17H7L12,7M3,3H21V5H3V3M3,19H21V21H3V19Z" style="fill: currentColor" />
  </svg>
</template>

<script lang="ts">
  import { defineComponent } from 'vue';

  export default defineComponent({
      name: "MdiFormatWrapTopBottom",
      props: {
          size: { 
              type: Number, 
              default: 24 
          }
      },
  })
</script>
