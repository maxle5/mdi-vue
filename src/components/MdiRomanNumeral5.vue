
<template>
  <svg :width="size" :height="size" viewBox="0 0 24 24">
      <path d="M9 7L11 17H13L15 7H13L12 12L11 7H9Z" style="fill: currentColor" />
  </svg>
</template>

<script lang="ts">
  import { defineComponent } from 'vue';

  export default defineComponent({
      name: "MdiRomanNumeral5",
      props: {
          size: { 
              type: Number, 
              default: 24 
          }
      },
  })
</script>
