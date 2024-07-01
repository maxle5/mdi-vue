
<template>
  <svg :width="size" :height="size" viewBox="0 0 24 24">
      <path d="M12,1L9,9L1,12L9,15L12,23L15,15L23,12L15,9L12,1Z" style="fill: currentColor" />
  </svg>
</template>

<script lang="ts">
  import { defineComponent } from 'vue';

  export default defineComponent({
      name: "MdiStarFourPoints",
      props: {
          size: { 
              type: Number, 
              default: 24 
          }
      },
  })
</script>
