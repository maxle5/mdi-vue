
<template>
  <svg :width="size" :height="size" viewBox="0 0 24 24">
      <path d="M3,14H21V12H3M5,4V7H10V10H14V7H19V4M10,19H14V16H10V19Z" style="fill: currentColor" />
  </svg>
</template>

<script lang="ts">
  import { defineComponent } from 'vue';

  export default defineComponent({
      name: "MdiFormatStrikethrough",
      props: {
          size: { 
              type: Number, 
              default: 24 
          }
      },
  })
</script>
