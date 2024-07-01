
<template>
  <svg :width="size" :height="size" viewBox="0 0 24 24">
      <path d="M21,17H3V5H21M21,3H3A2,2 0 0,0 1,5V17A2,2 0 0,0 3,19H8V21H16V19H21A2,2 0 0,0 23,17V5A2,2 0 0,0 21,3Z" style="fill: currentColor" />
  </svg>
</template>

<script lang="ts">
  import { defineComponent } from 'vue';

  export default defineComponent({
      name: "MdiTelevision",
      props: {
          size: { 
              type: Number, 
              default: 24 
          }
      },
  })
</script>
