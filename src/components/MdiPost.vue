
<template>
  <svg :width="size" :height="size" viewBox="0 0 24 24">
      <path d="M3 3V21H21V3H3M18 18H6V17H18V18M18 16H6V15H18V16M18 12H6V6H18V12Z" style="fill: currentColor" />
  </svg>
</template>

<script lang="ts">
  import { defineComponent } from 'vue';

  export default defineComponent({
      name: "MdiPost",
      props: {
          size: { 
              type: Number, 
              default: 24 
          }
      },
  })
</script>
