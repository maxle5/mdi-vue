
<template>
  <svg :width="size" :height="size" viewBox="0 0 24 24">
      <path d="M9,7L11,12L9,17H11L12,14.5L13,17H15L13,12L15,7H13L12,9.5L11,7H9M12,2A10,10 0 0,1 22,12A10,10 0 0,1 12,22A10,10 0 0,1 2,12A10,10 0 0,1 12,2Z" style="fill: currentColor" />
  </svg>
</template>

<script lang="ts">
  import { defineComponent } from 'vue';

  export default defineComponent({
      name: "MdiAlphaXCircle",
      props: {
          size: { 
              type: Number, 
              default: 24 
          }
      },
  })
</script>
