
<template>
  <svg :width="size" :height="size" viewBox="0 0 24 24">
      <path d="M5,17.59L15.59,7H9V5H19V15H17V8.41L6.41,19L5,17.59Z" style="fill: currentColor" />
  </svg>
</template>

<script lang="ts">
  import { defineComponent } from 'vue';

  export default defineComponent({
      name: "MdiArrowTopRight",
      props: {
          size: { 
              type: Number, 
              default: 24 
          }
      },
  })
</script>
