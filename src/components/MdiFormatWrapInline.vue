
<template>
  <svg :width="size" :height="size" viewBox="0 0 24 24">
      <path d="M8,7L13,17H3L8,7M3,3H21V5H3V3M21,15V17H14V15H21M3,19H21V21H3V19Z" style="fill: currentColor" />
  </svg>
</template>

<script lang="ts">
  import { defineComponent } from 'vue';

  export default defineComponent({
      name: "MdiFormatWrapInline",
      props: {
          size: { 
              type: Number, 
              default: 24 
          }
      },
  })
</script>
