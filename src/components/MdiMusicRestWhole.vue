
<template>
  <svg :width="size" :height="size" viewBox="0 0 24 24">
      <path d="M18 10H16V14H8V10H6V9H18V10Z" style="fill: currentColor" />
  </svg>
</template>

<script lang="ts">
  import { defineComponent } from 'vue';

  export default defineComponent({
      name: "MdiMusicRestWhole",
      props: {
          size: { 
              type: Number, 
              default: 24 
          }
      },
  })
</script>
