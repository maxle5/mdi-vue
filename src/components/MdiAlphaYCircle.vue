
<template>
  <svg :width="size" :height="size" viewBox="0 0 24 24">
      <path d="M9,7L11,13V17H13V13L15,7H13L12,10L11,7H9M12,2A10,10 0 0,1 22,12A10,10 0 0,1 12,22A10,10 0 0,1 2,12A10,10 0 0,1 12,2Z" style="fill: currentColor" />
  </svg>
</template>

<script lang="ts">
  import { defineComponent } from 'vue';

  export default defineComponent({
      name: "MdiAlphaYCircle",
      props: {
          size: { 
              type: Number, 
              default: 24 
          }
      },
  })
</script>
