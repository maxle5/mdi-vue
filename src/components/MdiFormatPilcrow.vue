
<template>
  <svg :width="size" :height="size" viewBox="0 0 24 24">
      <path d="M10,11A4,4 0 0,1 6,7A4,4 0 0,1 10,3H18V5H16V21H14V5H12V21H10V11Z" style="fill: currentColor" />
  </svg>
</template>

<script lang="ts">
  import { defineComponent } from 'vue';

  export default defineComponent({
      name: "MdiFormatPilcrow",
      props: {
          size: { 
              type: Number, 
              default: 24 
          }
      },
  })
</script>
