
<template>
  <svg :width="size" :height="size" viewBox="0 0 24 24">
      <path d="M10,7V9H12V17H14V7H10Z" style="fill: currentColor" />
  </svg>
</template>

<script lang="ts">
  import { defineComponent } from 'vue';

  export default defineComponent({
      name: "MdiNumeric1",
      props: {
          size: { 
              type: Number, 
              default: 24 
          }
      },
  })
</script>
