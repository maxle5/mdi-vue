
<template>
  <svg :width="size" :height="size" viewBox="0 0 24 24">
      <path d="M18 18V20H4A2 2 0 0 1 2 18V8H4V18M22 6V14A2 2 0 0 1 20 16H8A2 2 0 0 1 6 14V6A2 2 0 0 1 8 4H20A2 2 0 0 1 22 6M20 6H8V14H20Z" style="fill: currentColor" />
  </svg>
</template>

<script lang="ts">
  import { defineComponent } from 'vue';

  export default defineComponent({
      name: "MdiDockWindow",
      props: {
          size: { 
              type: Number, 
              default: 24 
          }
      },
  })
</script>
