
<template>
  <svg :width="size" :height="size" viewBox="0 0 24 24">
      <path d="M9,13H15V19H18V10L12,5.5L6,10V19H9V13M4,21V9L12,3L20,9V21H4Z" style="fill: currentColor" />
  </svg>
</template>

<script lang="ts">
  import { defineComponent } from 'vue';

  export default defineComponent({
      name: "MdiHomeVariantOutline",
      props: {
          size: { 
              type: Number, 
              default: 24 
          }
      },
  })
</script>
