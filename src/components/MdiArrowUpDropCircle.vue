
<template>
  <svg :width="size" :height="size" viewBox="0 0 24 24">
      <path d="M12,22A10,10 0 0,1 2,12A10,10 0 0,1 12,2A10,10 0 0,1 22,12A10,10 0 0,1 12,22M17,14L12,9L7,14H17Z" style="fill: currentColor" />
  </svg>
</template>

<script lang="ts">
  import { defineComponent } from 'vue';

  export default defineComponent({
      name: "MdiArrowUpDropCircle",
      props: {
          size: { 
              type: Number, 
              default: 24 
          }
      },
  })
</script>
