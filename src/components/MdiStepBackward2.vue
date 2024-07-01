
<template>
  <svg :width="size" :height="size" viewBox="0 0 24 24">
      <path d="M17,5H14V19H17V5M12,5L1,12L12,19V5M22,5H19V19H22V5Z" style="fill: currentColor" />
  </svg>
</template>

<script lang="ts">
  import { defineComponent } from 'vue';

  export default defineComponent({
      name: "MdiStepBackward2",
      props: {
          size: { 
              type: Number, 
              default: 24 
          }
      },
  })
</script>
