
<template>
  <svg :width="size" :height="size" viewBox="0 0 24 24">
      <path d="M1.5,21L12,3.5L22.5,21H1.5M12,21L17,12H7L12,21Z" style="fill: currentColor" />
  </svg>
</template>

<script lang="ts">
  import { defineComponent } from 'vue';

  export default defineComponent({
      name: "MdiTriforce",
      props: {
          size: { 
              type: Number, 
              default: 24 
          }
      },
  })
</script>
