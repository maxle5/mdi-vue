
<template>
  <svg :width="size" :height="size" viewBox="0 0 24 24">
      <path d="M14 15V22H16V15H19L15 11L11 15H14M13 9H10V2H8V9H5L9 13L13 9Z" style="fill: currentColor" />
  </svg>
</template>

<script lang="ts">
  import { defineComponent } from 'vue';

  export default defineComponent({
      name: "MdiCompareVertical",
      props: {
          size: { 
              type: Number, 
              default: 24 
          }
      },
  })
</script>
