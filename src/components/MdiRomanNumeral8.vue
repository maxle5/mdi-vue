
<template>
  <svg :width="size" :height="size" viewBox="0 0 24 24">
      <path d="M1 7L3 17H5L7 7H5L4 12L3 7H1M12 7V9H11V15H12V17H8V15H9V9H8V7H12M17 7V9H16V15H17V17H13V15H14V9H13V7H17M22 7V9H21V15H22V17H18V15H19V9H18V7H22Z" style="fill: currentColor" />
  </svg>
</template>

<script lang="ts">
  import { defineComponent } from 'vue';

  export default defineComponent({
      name: "MdiRomanNumeral8",
      props: {
          size: { 
              type: Number, 
              default: 24 
          }
      },
  })
</script>
