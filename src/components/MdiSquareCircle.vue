
<template>
  <svg :width="size" :height="size" viewBox="0 0 24 24">
      <path d="M20 4V20H4V4H20M22 2H2V22H22V2M12 6C8.69 6 6 8.69 6 12S8.69 18 12 18 18 15.31 18 12 15.31 6 12 6Z" style="fill: currentColor" />
  </svg>
</template>

<script lang="ts">
  import { defineComponent } from 'vue';

  export default defineComponent({
      name: "MdiSquareCircle",
      props: {
          size: { 
              type: Number, 
              default: 24 
          }
      },
  })
</script>
