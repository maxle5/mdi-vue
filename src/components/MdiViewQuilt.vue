
<template>
  <svg :width="size" :height="size" viewBox="0 0 24 24">
      <path d="M10,5V11H21V5M16,18H21V12H16M4,18H9V5H4M10,18H15V12H10V18Z" style="fill: currentColor" />
  </svg>
</template>

<script lang="ts">
  import { defineComponent } from 'vue';

  export default defineComponent({
      name: "MdiViewQuilt",
      props: {
          size: { 
              type: Number, 
              default: 24 
          }
      },
  })
</script>
