
<template>
  <svg :width="size" :height="size" viewBox="0 0 24 24">
      <path d="M21,8H3V6H21M9,13H21V11H9M9,18H21V16H9" style="fill: currentColor" />
  </svg>
</template>

<script lang="ts">
  import { defineComponent } from 'vue';

  export default defineComponent({
      name: "MdiSegment",
      props: {
          size: { 
              type: Number, 
              default: 24 
          }
      },
  })
</script>
