
<template>
  <svg :width="size" :height="size" viewBox="0 0 24 24">
      <path d="M12,20L7,22L12,11L17,22L12,20M8,2H16V5H22V7H16V10H8V7H2V5H8V2M10,4V8H14V4H10Z" style="fill: currentColor" />
  </svg>
</template>

<script lang="ts">
  import { defineComponent } from 'vue';

  export default defineComponent({
      name: "MdiVectorPointSelect",
      props: {
          size: { 
              type: Number, 
              default: 24 
          }
      },
  })
</script>
