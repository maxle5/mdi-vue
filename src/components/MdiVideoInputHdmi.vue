
<template>
  <svg :width="size" :height="size" viewBox="0 0 24 24">
      <path d="M18,7V4A2,2 0 0,0 16,2H8A2,2 0 0,0 6,4V7H5V13L8,19V22H16V19L19,13V7H18M8,4H16V7H14V5H13V7H11V5H10V7H8V4Z" style="fill: currentColor" />
  </svg>
</template>

<script lang="ts">
  import { defineComponent } from 'vue';

  export default defineComponent({
      name: "MdiVideoInputHdmi",
      props: {
          size: { 
              type: Number, 
              default: 24 
          }
      },
  })
</script>
