
<template>
  <svg :width="size" :height="size" viewBox="0 0 24 24">
      <path d="M3,9H7L12,4V20L7,15H3V9M14,11H17V8H19V11H22V13H19V16H17V13H14V11Z" style="fill: currentColor" />
  </svg>
</template>

<script lang="ts">
  import { defineComponent } from 'vue';

  export default defineComponent({
      name: "MdiVolumePlus",
      props: {
          size: { 
              type: Number, 
              default: 24 
          }
      },
  })
</script>
