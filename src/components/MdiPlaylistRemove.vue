
<template>
  <svg :width="size" :height="size" viewBox="0 0 24 24">
      <path d="M14 10H3V12H14V10M14 6H3V8H14V6M3 16H10V14H3V16M14.4 22L17 19.4L19.6 22L21 20.6L18.4 18L21 15.4L19.6 14L17 16.6L14.4 14L13 15.4L15.6 18L13 20.6L14.4 22Z" style="fill: currentColor" />
  </svg>
</template>

<script lang="ts">
  import { defineComponent } from 'vue';

  export default defineComponent({
      name: "MdiPlaylistRemove",
      props: {
          size: { 
              type: Number, 
              default: 24 
          }
      },
  })
</script>
