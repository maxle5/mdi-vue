
<template>
  <svg :width="size" :height="size" viewBox="0 0 24 24">
      <path d="M21,3H3A2,2 0 0,0 1,5V19A2,2 0 0,0 3,21H21A2,2 0 0,0 23,19V5A2,2 0 0,0 21,3M21,19H3V5H13V9H21V19Z" style="fill: currentColor" />
  </svg>
</template>

<script lang="ts">
  import { defineComponent } from 'vue';

  export default defineComponent({
      name: "MdiTab",
      props: {
          size: { 
              type: Number, 
              default: 24 
          }
      },
  })
</script>
