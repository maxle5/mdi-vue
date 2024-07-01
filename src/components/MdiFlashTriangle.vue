
<template>
  <svg :width="size" :height="size" viewBox="0 0 24 24">
      <path d="M12 2L1 21H23L12 2M10 15V10H14L12.5 13.5H14.5L11.5 19V15H10Z" style="fill: currentColor" />
  </svg>
</template>

<script lang="ts">
  import { defineComponent } from 'vue';

  export default defineComponent({
      name: "MdiFlashTriangle",
      props: {
          size: { 
              type: Number, 
              default: 24 
          }
      },
  })
</script>
