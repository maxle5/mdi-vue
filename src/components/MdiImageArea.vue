
<template>
  <svg :width="size" :height="size" viewBox="0 0 24 24">
      <path d="M20,5A2,2 0 0,1 22,7V17A2,2 0 0,1 20,19H4C2.89,19 2,18.1 2,17V7C2,5.89 2.89,5 4,5H20M5,16H19L14.5,10L11,14.5L8.5,11.5L5,16Z" style="fill: currentColor" />
  </svg>
</template>

<script lang="ts">
  import { defineComponent } from 'vue';

  export default defineComponent({
      name: "MdiImageArea",
      props: {
          size: { 
              type: Number, 
              default: 24 
          }
      },
  })
</script>
