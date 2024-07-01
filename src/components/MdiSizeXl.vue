
<template>
  <svg :width="size" :height="size" viewBox="0 0 24 24">
      <path d="M6 7H8L9 9.5L10 7H12L10 12L12 17H10L9 14.5L8 17H6L8 12L6 7M13 7H15V15H19V17H13V7Z" style="fill: currentColor" />
  </svg>
</template>

<script lang="ts">
  import { defineComponent } from 'vue';

  export default defineComponent({
      name: "MdiSizeXl",
      props: {
          size: { 
              type: Number, 
              default: 24 
          }
      },
  })
</script>
