
<template>
  <svg :width="size" :height="size" viewBox="0 0 24 24">
      <path d="M14,17H12V9H10V7H14M19,3H5A2,2 0 0,0 3,5V19A2,2 0 0,0 5,21H19A2,2 0 0,0 21,19V5A2,2 0 0,0 19,3Z" style="fill: currentColor" />
  </svg>
</template>

<script lang="ts">
  import { defineComponent } from 'vue';

  export default defineComponent({
      name: "MdiNumeric1Box",
      props: {
          size: { 
              type: Number, 
              default: 24 
          }
      },
  })
</script>
