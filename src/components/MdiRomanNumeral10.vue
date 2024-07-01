
<template>
  <svg :width="size" :height="size" viewBox="0 0 24 24">
      <path d="M9 7L11 12L9 17H11L12 14.5L13 17H15L13 12L15 7H13L12 9.5L11 7H9Z" style="fill: currentColor" />
  </svg>
</template>

<script lang="ts">
  import { defineComponent } from 'vue';

  export default defineComponent({
      name: "MdiRomanNumeral10",
      props: {
          size: { 
              type: Number, 
              default: 24 
          }
      },
  })
</script>
