
<template>
  <svg :width="size" :height="size" viewBox="0 0 24 24">
      <path d="M4 21H20V8H4M14 15V18H10V15H7L12 10L17 15M3 3H21V7H3" style="fill: currentColor" />
  </svg>
</template>

<script lang="ts">
  import { defineComponent } from 'vue';

  export default defineComponent({
      name: "MdiArchiveArrowUp",
      props: {
          size: { 
              type: Number, 
              default: 24 
          }
      },
  })
</script>
