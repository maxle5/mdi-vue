
<template>
  <svg :width="size" :height="size" viewBox="0 0 24 24">
      <path d="M9.5 14.5V9.5H21V21H15.5V14.5H9.5M3 3H21L21 8.5H8.5V15.5H14.5V21H3V3Z" style="fill: currentColor" />
  </svg>
</template>

<script lang="ts">
  import { defineComponent } from 'vue';

  export default defineComponent({
      name: "MdiFacebookGaming",
      props: {
          size: { 
              type: Number, 
              default: 24 
          }
      },
  })
</script>
