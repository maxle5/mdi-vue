
<template>
  <svg :width="size" :height="size" viewBox="0 0 24 24">
      <path d="M22 22H2V20H22V22M10 2H7V18H10V2M17 8H14V18H17V8Z" style="fill: currentColor" />
  </svg>
</template>

<script lang="ts">
  import { defineComponent } from 'vue';

  export default defineComponent({
      name: "MdiAlignVerticalBottom",
      props: {
          size: { 
              type: Number, 
              default: 24 
          }
      },
  })
</script>
