
<template>
  <svg :width="size" :height="size" viewBox="0 0 24 24">
      <path d="M4,18V20H8V18H4M4,14V16H14V14H4M10,18V20H14V18H10M16,14V16H20V14H16M16,18V20H20V18H16M2,22V8L7,12V8L12,12V8L17,12L18,2H21L22,12V22H2Z" style="fill: currentColor" />
  </svg>
</template>

<script lang="ts">
  import { defineComponent } from 'vue';

  export default defineComponent({
      name: "MdiFactory",
      props: {
          size: { 
              type: Number, 
              default: 24 
          }
      },
  })
</script>
