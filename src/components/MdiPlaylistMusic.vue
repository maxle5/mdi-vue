
<template>
  <svg :width="size" :height="size" viewBox="0 0 24 24">
      <path d="M15,6H3V8H15V6M15,10H3V12H15V10M3,16H11V14H3V16M17,6V14.18C16.69,14.07 16.35,14 16,14A3,3 0 0,0 13,17A3,3 0 0,0 16,20A3,3 0 0,0 19,17V8H22V6H17Z" style="fill: currentColor" />
  </svg>
</template>

<script lang="ts">
  import { defineComponent } from 'vue';

  export default defineComponent({
      name: "MdiPlaylistMusic",
      props: {
          size: { 
              type: Number, 
              default: 24 
          }
      },
  })
</script>
