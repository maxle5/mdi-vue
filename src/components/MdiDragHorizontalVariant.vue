
<template>
  <svg :width="size" :height="size" viewBox="0 0 24 24">
      <path d="M21 11H3V9H21V11M21 13H3V15H21V13Z" style="fill: currentColor" />
  </svg>
</template>

<script lang="ts">
  import { defineComponent } from 'vue';

  export default defineComponent({
      name: "MdiDragHorizontalVariant",
      props: {
          size: { 
              type: Number, 
              default: 24 
          }
      },
  })
</script>
