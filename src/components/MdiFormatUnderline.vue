
<template>
  <svg :width="size" :height="size" viewBox="0 0 24 24">
      <path d="M5,21H19V19H5V21M12,17A6,6 0 0,0 18,11V3H15.5V11A3.5,3.5 0 0,1 12,14.5A3.5,3.5 0 0,1 8.5,11V3H6V11A6,6 0 0,0 12,17Z" style="fill: currentColor" />
  </svg>
</template>

<script lang="ts">
  import { defineComponent } from 'vue';

  export default defineComponent({
      name: "MdiFormatUnderline",
      props: {
          size: { 
              type: Number, 
              default: 24 
          }
      },
  })
</script>
