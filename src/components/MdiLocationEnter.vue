
<template>
  <svg :width="size" :height="size" viewBox="0 0 24 24">
      <path d="M14 12L10 8V11H2V13H10V16M22 12A10 10 0 0 1 2.46 15H4.59A8 8 0 1 0 4.59 9H2.46A10 10 0 0 1 22 12Z" style="fill: currentColor" />
  </svg>
</template>

<script lang="ts">
  import { defineComponent } from 'vue';

  export default defineComponent({
      name: "MdiLocationEnter",
      props: {
          size: { 
              type: Number, 
              default: 24 
          }
      },
  })
</script>
