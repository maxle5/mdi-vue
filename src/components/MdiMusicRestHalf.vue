
<template>
  <svg :width="size" :height="size" viewBox="0 0 24 24">
      <path d="M6 14H8V10H16V14H18V15H6V14Z" style="fill: currentColor" />
  </svg>
</template>

<script lang="ts">
  import { defineComponent } from 'vue';

  export default defineComponent({
      name: "MdiMusicRestHalf",
      props: {
          size: { 
              type: Number, 
              default: 24 
          }
      },
  })
</script>
