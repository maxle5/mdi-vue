
<template>
  <svg :width="size" :height="size" viewBox="0 0 24 24">
      <path d="M4 7V9H8V11H6C4.9 11 4 11.9 4 13V17H10V15H6V13H8C9.1 13 10 12.1 10 11V9C10 7.9 9.1 7 8 7H4M14 17H12V15H14V17M16 7V9H18V17H20V7H16Z" style="fill: currentColor" />
  </svg>
</template>

<script lang="ts">
  import { defineComponent } from 'vue';

  export default defineComponent({
      name: "MdiSurroundSound21",
      props: {
          size: { 
              type: Number, 
              default: 24 
          }
      },
  })
</script>
