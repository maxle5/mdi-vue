
<template>
  <svg :width="size" :height="size" viewBox="0 0 24 24">
      <path d="M13,9L15.5,6.5L16.92,7.92L12,12.84L7.08,7.92L8.5,6.5L11,9V3H13V9M3,15H21V17H3V15M3,19H13V21H3V19Z" style="fill: currentColor" />
  </svg>
</template>

<script lang="ts">
  import { defineComponent } from 'vue';

  export default defineComponent({
      name: "MdiFormatAlignBottom",
      props: {
          size: { 
              type: Number, 
              default: 24 
          }
      },
  })
</script>
