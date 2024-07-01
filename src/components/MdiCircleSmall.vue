
<template>
  <svg :width="size" :height="size" viewBox="0 0 24 24">
      <path d="M12,10A2,2 0 0,0 10,12C10,13.11 10.9,14 12,14C13.11,14 14,13.11 14,12A2,2 0 0,0 12,10Z" style="fill: currentColor" />
  </svg>
</template>

<script lang="ts">
  import { defineComponent } from 'vue';

  export default defineComponent({
      name: "MdiCircleSmall",
      props: {
          size: { 
              type: Number, 
              default: 24 
          }
      },
  })
</script>
