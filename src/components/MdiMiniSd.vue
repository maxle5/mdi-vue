
<template>
  <svg :width="size" :height="size" viewBox="0 0 24 24">
      <path d="M6,4A2,2 0 0,0 4,6V18A2,2 0 0,0 6,20H18A2,2 0 0,0 20,18V12L18,10V6A2,2 0 0,0 16,4H6M7,6H9V10H7V6M10,6H12V10H10V6M13,6H15V10H13V6Z" style="fill: currentColor" />
  </svg>
</template>

<script lang="ts">
  import { defineComponent } from 'vue';

  export default defineComponent({
      name: "MdiMiniSd",
      props: {
          size: { 
              type: Number, 
              default: 24 
          }
      },
  })
</script>
