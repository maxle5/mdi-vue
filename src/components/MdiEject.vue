
<template>
  <svg :width="size" :height="size" viewBox="0 0 24 24">
      <path d="M12,5L5.33,15H18.67M5,17H19V19H5V17Z" style="fill: currentColor" />
  </svg>
</template>

<script lang="ts">
  import { defineComponent } from 'vue';

  export default defineComponent({
      name: "MdiEject",
      props: {
          size: { 
              type: Number, 
              default: 24 
          }
      },
  })
</script>
