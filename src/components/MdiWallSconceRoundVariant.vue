
<template>
  <svg :width="size" :height="size" viewBox="0 0 24 24">
      <path d="M11 5V8H13V5H11M4.91 7.5L3.5 8.91L5.27 10.68L6.68 9.27L4.91 7.5M19.09 7.5L17.32 9.27L18.73 10.68L20.5 8.91L19.09 7.5M4 12C4 14.86 5.5 17.5 8 18.93S13.5 20.36 16 18.93 20 14.86 20 12H4Z" style="fill: currentColor" />
  </svg>
</template>

<script lang="ts">
  import { defineComponent } from 'vue';

  export default defineComponent({
      name: "MdiWallSconceRoundVariant",
      props: {
          size: { 
              type: Number, 
              default: 24 
          }
      },
  })
</script>
