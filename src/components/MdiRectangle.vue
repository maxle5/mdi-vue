
<template>
  <svg :width="size" :height="size" viewBox="0 0 24 24">
      <path d="M4,6V19H20V6H4Z" style="fill: currentColor" />
  </svg>
</template>

<script lang="ts">
  import { defineComponent } from 'vue';

  export default defineComponent({
      name: "MdiRectangle",
      props: {
          size: { 
              type: Number, 
              default: 24 
          }
      },
  })
</script>
