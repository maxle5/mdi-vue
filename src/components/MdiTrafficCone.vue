
<template>
  <svg :width="size" :height="size" viewBox="0 0 24 24">
      <path d="M17 15L18 19H21V22H3V19H6L7 15H17M15 8L16 12H8L9 8H15M13 1L14 5H10L11 1H13Z" style="fill: currentColor" />
  </svg>
</template>

<script lang="ts">
  import { defineComponent } from 'vue';

  export default defineComponent({
      name: "MdiTrafficCone",
      props: {
          size: { 
              type: Number, 
              default: 24 
          }
      },
  })
</script>
