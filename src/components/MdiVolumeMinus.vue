
<template>
  <svg :width="size" :height="size" viewBox="0 0 24 24">
      <path d="M3,9H7L12,4V20L7,15H3V9M14,11H22V13H14V11Z" style="fill: currentColor" />
  </svg>
</template>

<script lang="ts">
  import { defineComponent } from 'vue';

  export default defineComponent({
      name: "MdiVolumeMinus",
      props: {
          size: { 
              type: Number, 
              default: 24 
          }
      },
  })
</script>
