
<template>
  <svg :width="size" :height="size" viewBox="0 0 24 24">
      <path d="M3,15H21V13H3V15M3,19H21V17H3V19M3,11H21V9H3V11M3,5V7H21V5H3Z" style="fill: currentColor" />
  </svg>
</template>

<script lang="ts">
  import { defineComponent } from 'vue';

  export default defineComponent({
      name: "MdiReorderHorizontal",
      props: {
          size: { 
              type: Number, 
              default: 24 
          }
      },
  })
</script>
