
<template>
  <svg :width="size" :height="size" viewBox="0 0 24 24">
      <path d="M19,5H22V7H19V10H17V7H14V5H17V2H19V5M17,19V13H19V21H3V5H11V7H5V19H17Z" style="fill: currentColor" />
  </svg>
</template>

<script lang="ts">
  import { defineComponent } from 'vue';

  export default defineComponent({
      name: "MdiShapeSquarePlus",
      props: {
          size: { 
              type: Number, 
              default: 24 
          }
      },
  })
</script>
