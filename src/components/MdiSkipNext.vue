
<template>
  <svg :width="size" :height="size" viewBox="0 0 24 24">
      <path d="M16,18H18V6H16M6,18L14.5,12L6,6V18Z" style="fill: currentColor" />
  </svg>
</template>

<script lang="ts">
  import { defineComponent } from 'vue';

  export default defineComponent({
      name: "MdiSkipNext",
      props: {
          size: { 
              type: Number, 
              default: 24 
          }
      },
  })
</script>
