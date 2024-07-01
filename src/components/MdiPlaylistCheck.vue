
<template>
  <svg :width="size" :height="size" viewBox="0 0 24 24">
      <path d="M14 10H3V12H14V10M14 6H3V8H14V6M3 16H10V14H3V16M21.5 11.5L23 13L16 20L11.5 15.5L13 14L16 17L21.5 11.5Z" style="fill: currentColor" />
  </svg>
</template>

<script lang="ts">
  import { defineComponent } from 'vue';

  export default defineComponent({
      name: "MdiPlaylistCheck",
      props: {
          size: { 
              type: Number, 
              default: 24 
          }
      },
  })
</script>
