
<template>
  <svg :width="size" :height="size" viewBox="0 0 24 24">
      <path d="M2 4V7H7V19H10V7H15V4H2M21 9H12V12H15V19H18V12H21V9Z" style="fill: currentColor" />
  </svg>
</template>

<script lang="ts">
  import { defineComponent } from 'vue';

  export default defineComponent({
      name: "MdiFormatSize",
      props: {
          size: { 
              type: Number, 
              default: 24 
          }
      },
  })
</script>
