
<template>
  <svg :width="size" :height="size" viewBox="0 0 24 24">
      <path d="M4,15V9H12V4.16L19.84,12L12,19.84V15H4Z" style="fill: currentColor" />
  </svg>
</template>

<script lang="ts">
  import { defineComponent } from 'vue';

  export default defineComponent({
      name: "MdiArrowRightBold",
      props: {
          size: { 
              type: Number, 
              default: 24 
          }
      },
  })
</script>
