
<template>
  <svg :width="size" :height="size" viewBox="0 0 24 24">
      <path d="M13,18V10L16.5,13.5L17.92,12.08L12,6.16L6.08,12.08L7.5,13.5L11,10V18H13M12,2A10,10 0 0,1 22,12A10,10 0 0,1 12,22A10,10 0 0,1 2,12A10,10 0 0,1 12,2Z" style="fill: currentColor" />
  </svg>
</template>

<script lang="ts">
  import { defineComponent } from 'vue';

  export default defineComponent({
      name: "MdiArrowUpCircle",
      props: {
          size: { 
              type: Number, 
              default: 24 
          }
      },
  })
</script>
