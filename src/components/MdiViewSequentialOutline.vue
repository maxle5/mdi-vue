
<template>
  <svg :width="size" :height="size" viewBox="0 0 24 24">
      <path d="M3 5V19H21V5H3M19 7V9H5V7H19M19 11V13H5V11H19M5 17V15H19V17H5Z" style="fill: currentColor" />
  </svg>
</template>

<script lang="ts">
  import { defineComponent } from 'vue';

  export default defineComponent({
      name: "MdiViewSequentialOutline",
      props: {
          size: { 
              type: Number, 
              default: 24 
          }
      },
  })
</script>
