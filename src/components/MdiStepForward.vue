
<template>
  <svg :width="size" :height="size" viewBox="0 0 24 24">
      <path d="M5,5V19H8V5M10,5V19L21,12" style="fill: currentColor" />
  </svg>
</template>

<script lang="ts">
  import { defineComponent } from 'vue';

  export default defineComponent({
      name: "MdiStepForward",
      props: {
          size: { 
              type: Number, 
              default: 24 
          }
      },
  })
</script>
