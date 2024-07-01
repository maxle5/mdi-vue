
<template>
  <svg :width="size" :height="size" viewBox="0 0 24 24">
      <path d="M22 12L18 8V11H10V13H18V16M20 18A10 10 0 1 1 20 6H17.27A8 8 0 1 0 17.27 18Z" style="fill: currentColor" />
  </svg>
</template>

<script lang="ts">
  import { defineComponent } from 'vue';

  export default defineComponent({
      name: "MdiLocationExit",
      props: {
          size: { 
              type: Number, 
              default: 24 
          }
      },
  })
</script>
