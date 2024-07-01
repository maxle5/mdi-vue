
<template>
  <svg :width="size" :height="size" viewBox="0 0 24 24">
      <path d="M18,9V10.5L12,16.5L6,10.5V9H18M12,13.67L14.67,11H9.33L12,13.67Z" style="fill: currentColor" />
  </svg>
</template>

<script lang="ts">
  import { defineComponent } from 'vue';

  export default defineComponent({
      name: "MdiMenuDownOutline",
      props: {
          size: { 
              type: Number, 
              default: 24 
          }
      },
  })
</script>
