
<template>
  <svg :width="size" :height="size" viewBox="0 0 24 24">
      <path d="M14 17H12V15H14V17M20 7V17H18V9H16V7H20M10 15C10 16.1 9.1 17 8 17H4V15H8V13H6V11H8V9H4V7H8C9.1 7 10 7.9 10 9V10.5C10 11.3 9.3 12 8.5 12C9.3 12 10 12.7 10 13.5V15" style="fill: currentColor" />
  </svg>
</template>

<script lang="ts">
  import { defineComponent } from 'vue';

  export default defineComponent({
      name: "MdiSurroundSound31",
      props: {
          size: { 
              type: Number, 
              default: 24 
          }
      },
  })
</script>
