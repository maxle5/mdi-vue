
<template>
  <svg :width="size" :height="size" viewBox="0 0 24 24">
      <path d="M4,8H8V4H20V16H16V20H4V8M16,8V14H18V6H10V8H16M6,12V18H14V12H6Z" style="fill: currentColor" />
  </svg>
</template>

<script lang="ts">
  import { defineComponent } from 'vue';

  export default defineComponent({
      name: "MdiWindowRestore",
      props: {
          size: { 
              type: Number, 
              default: 24 
          }
      },
  })
</script>
