
<template>
  <svg :width="size" :height="size" viewBox="0 0 24 24">
      <path d="M0,21V10L7.5,5L15,10V21H10V14H5V21H0M24,2V21H17V8.93L16,8.27V6H14V6.93L10,4.27V2H24M21,14H19V16H21V14M21,10H19V12H21V10M21,6H19V8H21V6Z" style="fill: currentColor" />
  </svg>
</template>

<script lang="ts">
  import { defineComponent } from 'vue';

  export default defineComponent({
      name: "MdiHomeCity",
      props: {
          size: { 
              type: Number, 
              default: 24 
          }
      },
  })
</script>
