
<template>
  <svg :width="size" :height="size" viewBox="0 0 24 24">
      <path d="M3,3V21H21V3" style="fill: currentColor" />
  </svg>
</template>

<script lang="ts">
  import { defineComponent } from 'vue';

  export default defineComponent({
      name: "MdiSquare",
      props: {
          size: { 
              type: Number, 
              default: 24 
          }
      },
  })
</script>
