
<template>
  <svg :width="size" :height="size" viewBox="0 0 24 24">
      <path d="M3 10H14V12H3V10M3 6H14V8H3V6M3 14H10V16H3V14M16 13V21L22 17L16 13Z" style="fill: currentColor" />
  </svg>
</template>

<script lang="ts">
  import { defineComponent } from 'vue';

  export default defineComponent({
      name: "MdiPlaylistPlay",
      props: {
          size: { 
              type: Number, 
              default: 24 
          }
      },
  })
</script>
