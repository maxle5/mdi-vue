
<template>
  <svg :width="size" :height="size" viewBox="0 0 24 24">
      <path d="M14,7H10V9H11V15H10V17H14V15H13V9H14V7M5,3H19A2,2 0 0,1 21,5V19A2,2 0 0,1 19,21H5A2,2 0 0,1 3,19V5A2,2 0 0,1 5,3Z" style="fill: currentColor" />
  </svg>
</template>

<script lang="ts">
  import { defineComponent } from 'vue';

  export default defineComponent({
      name: "MdiAlphaIBox",
      props: {
          size: { 
              type: Number, 
              default: 24 
          }
      },
  })
</script>
