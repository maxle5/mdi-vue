
<template>
  <svg :width="size" :height="size" viewBox="0 0 24 24">
      <path d="M10,2C8.18,2 6.47,2.5 5,3.35C8,5.08 10,8.3 10,12C10,15.7 8,18.92 5,20.65C6.47,21.5 8.18,22 10,22A10,10 0 0,0 20,12A10,10 0 0,0 10,2Z" style="fill: currentColor" />
  </svg>
</template>

<script lang="ts">
  import { defineComponent } from 'vue';

  export default defineComponent({
      name: "MdiBrightness2",
      props: {
          size: { 
              type: Number, 
              default: 24 
          }
      },
  })
</script>
