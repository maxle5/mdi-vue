
<template>
  <svg :width="size" :height="size" viewBox="0 0 24 24">
      <path d="M9,7V9H13V11H11A2,2 0 0,0 9,13V17H11L15,17V15H11V13H13A2,2 0 0,0 15,11V9A2,2 0 0,0 13,7H9Z" style="fill: currentColor" />
  </svg>
</template>

<script lang="ts">
  import { defineComponent } from 'vue';

  export default defineComponent({
      name: "MdiNumeric2",
      props: {
          size: { 
              type: Number, 
              default: 24 
          }
      },
  })
</script>
