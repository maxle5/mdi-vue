
<template>
  <svg :width="size" :height="size" viewBox="0 0 24 24">
      <path d="M2,15A1,1 0 0,1 3,16A1,1 0 0,1 2,17A1,1 0 0,1 1,16A1,1 0 0,1 2,15M21,17H19V9H17V7H23V9H21V17M16,7V9H14V11H16V13H14V15H16V17H12V7H16M11,7V17H9L6,11V17H4V7H6L9,13V7H11Z" style="fill: currentColor" />
  </svg>
</template>

<script lang="ts">
  import { defineComponent } from 'vue';

  export default defineComponent({
      name: "MdiDotNet",
      props: {
          size: { 
              type: Number, 
              default: 24 
          }
      },
  })
</script>
