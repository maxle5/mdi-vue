
<template>
  <svg :width="size" :height="size" viewBox="0 0 24 24">
      <path d="M4 7L6 17H8L10 7H8L7 12L6 7H4M15 7V9H14V15H15V17H11V15H12V9H11V7H15M20 7V9H19V15H20V17H16V15H17V9H16V7H20Z" style="fill: currentColor" />
  </svg>
</template>

<script lang="ts">
  import { defineComponent } from 'vue';

  export default defineComponent({
      name: "MdiRomanNumeral7",
      props: {
          size: { 
              type: Number, 
              default: 24 
          }
      },
  })
</script>
