
<template>
  <svg :width="size" :height="size" viewBox="0 0 24 24">
      <path d="M21,17H7V3H21M21,1H7A2,2 0 0,0 5,3V17A2,2 0 0,0 7,19H21A2,2 0 0,0 23,17V3A2,2 0 0,0 21,1M3,5H1V21A2,2 0 0,0 3,23H19V21H3V5Z" style="fill: currentColor" />
  </svg>
</template>

<script lang="ts">
  import { defineComponent } from 'vue';

  export default defineComponent({
      name: "MdiImageFilterNone",
      props: {
          size: { 
              type: Number, 
              default: 24 
          }
      },
  })
</script>
