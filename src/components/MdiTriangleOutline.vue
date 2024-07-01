
<template>
  <svg :width="size" :height="size" viewBox="0 0 24 24">
      <path d="M12,2L1,21H23M12,6L19.53,19H4.47" style="fill: currentColor" />
  </svg>
</template>

<script lang="ts">
  import { defineComponent } from 'vue';

  export default defineComponent({
      name: "MdiTriangleOutline",
      props: {
          size: { 
              type: Number, 
              default: 24 
          }
      },
  })
</script>
