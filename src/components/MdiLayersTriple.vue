
<template>
  <svg :width="size" :height="size" viewBox="0 0 24 24">
      <path d="M12 0L3 7L4.63 8.27L12 14L19.36 8.27L21 7L12 0M19.37 10.73L12 16.47L4.62 10.74L3 12L12 19L21 12L19.37 10.73M19.37 15.73L12 21.47L4.62 15.74L3 17L12 24L21 17L19.37 15.73Z" style="fill: currentColor" />
  </svg>
</template>

<script lang="ts">
  import { defineComponent } from 'vue';

  export default defineComponent({
      name: "MdiLayersTriple",
      props: {
          size: { 
              type: Number, 
              default: 24 
          }
      },
  })
</script>
