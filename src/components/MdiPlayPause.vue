
<template>
  <svg :width="size" :height="size" viewBox="0 0 24 24">
      <path d="M3,5V19L11,12M13,19H16V5H13M18,5V19H21V5" style="fill: currentColor" />
  </svg>
</template>

<script lang="ts">
  import { defineComponent } from 'vue';

  export default defineComponent({
      name: "MdiPlayPause",
      props: {
          size: { 
              type: Number, 
              default: 24 
          }
      },
  })
</script>
