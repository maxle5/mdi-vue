
<template>
  <svg :width="size" :height="size" viewBox="0 0 24 24">
      <path d="M10,14V10H14V14H10Z" style="fill: currentColor" />
  </svg>
</template>

<script lang="ts">
  import { defineComponent } from 'vue';

  export default defineComponent({
      name: "MdiSquareSmall",
      props: {
          size: { 
              type: Number, 
              default: 24 
          }
      },
  })
</script>
