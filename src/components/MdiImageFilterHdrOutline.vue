
<template>
  <svg :width="size" :height="size" viewBox="0 0 24 24">
      <path d="M23 18H1L8.25 8.33L10.25 11L14 6L23 18M11.5 12.67L14 16L19 16L14 9.33L11.5 12.67M5 16L11.5 16L8.25 11.67L5 16Z" style="fill: currentColor" />
  </svg>
</template>

<script lang="ts">
  import { defineComponent } from 'vue';

  export default defineComponent({
      name: "MdiImageFilterHdrOutline",
      props: {
          size: { 
              type: Number, 
              default: 24 
          }
      },
  })
</script>
