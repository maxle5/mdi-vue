
<template>
  <svg :width="size" :height="size" viewBox="0 0 24 24">
      <path d="M9,7L11,17H13L15,7H13L12,12L11,7H9M5,3H19A2,2 0 0,1 21,5V19A2,2 0 0,1 19,21H5A2,2 0 0,1 3,19V5A2,2 0 0,1 5,3Z" style="fill: currentColor" />
  </svg>
</template>

<script lang="ts">
  import { defineComponent } from 'vue';

  export default defineComponent({
      name: "MdiAlphaVBox",
      props: {
          size: { 
              type: Number, 
              default: 24 
          }
      },
  })
</script>
