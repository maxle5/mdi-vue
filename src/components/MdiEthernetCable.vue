
<template>
  <svg :width="size" :height="size" viewBox="0 0 24 24">
      <path d="M11,3V7H13V3H11M8,4V11H16V4H14V8H10V4H8M10,12V22H14V12H10Z" style="fill: currentColor" />
  </svg>
</template>

<script lang="ts">
  import { defineComponent } from 'vue';

  export default defineComponent({
      name: "MdiEthernetCable",
      props: {
          size: { 
              type: Number, 
              default: 24 
          }
      },
  })
</script>
