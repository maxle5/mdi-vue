
<template>
  <svg :width="size" :height="size" viewBox="0 0 24 24">
      <path d="M7,5H10V19H7V5M12,5L23,12L12,19V5M2,5H5V19H2V5Z" style="fill: currentColor" />
  </svg>
</template>

<script lang="ts">
  import { defineComponent } from 'vue';

  export default defineComponent({
      name: "MdiStepForward2",
      props: {
          size: { 
              type: Number, 
              default: 24 
          }
      },
  })
</script>
