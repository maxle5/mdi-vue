
<template>
  <svg :width="size" :height="size" viewBox="0 0 24 24">
      <path d="M10,8H6L12,2L18,8H14V16H18L12,22L6,16H10V8Z" style="fill: currentColor" />
  </svg>
</template>

<script lang="ts">
  import { defineComponent } from 'vue';

  export default defineComponent({
      name: "MdiArrowUpDownBold",
      props: {
          size: { 
              type: Number, 
              default: 24 
          }
      },
  })
</script>
