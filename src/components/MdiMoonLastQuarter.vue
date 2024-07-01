
<template>
  <svg :width="size" :height="size" viewBox="0 0 24 24">
      <path d="M12 2A10 10 0 0 0 12 22Z" style="fill: currentColor" />
  </svg>
</template>

<script lang="ts">
  import { defineComponent } from 'vue';

  export default defineComponent({
      name: "MdiMoonLastQuarter",
      props: {
          size: { 
              type: Number, 
              default: 24 
          }
      },
  })
</script>
