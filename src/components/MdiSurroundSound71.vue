
<template>
  <svg :width="size" :height="size" viewBox="0 0 24 24">
      <path d="M14 17H12V15H14V17M20 7V17H18V9H16V7H20M4 17L8 9H4V7H10V9L6 17" style="fill: currentColor" />
  </svg>
</template>

<script lang="ts">
  import { defineComponent } from 'vue';

  export default defineComponent({
      name: "MdiSurroundSound71",
      props: {
          size: { 
              type: Number, 
              default: 24 
          }
      },
  })
</script>
