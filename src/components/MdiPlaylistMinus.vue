
<template>
  <svg :width="size" :height="size" viewBox="0 0 24 24">
      <path d="M3 16H10V14H3M12 14V16H22V14M14 6H3V8H14M14 10H3V12H14V10Z" style="fill: currentColor" />
  </svg>
</template>

<script lang="ts">
  import { defineComponent } from 'vue';

  export default defineComponent({
      name: "MdiPlaylistMinus",
      props: {
          size: { 
              type: Number, 
              default: 24 
          }
      },
  })
</script>
