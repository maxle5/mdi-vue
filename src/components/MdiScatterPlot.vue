
<template>
  <svg :width="size" :height="size" viewBox="0 0 24 24">
      <path d="M7,11A3,3 0 0,1 10,14A3,3 0 0,1 7,17A3,3 0 0,1 4,14A3,3 0 0,1 7,11M11,3A3,3 0 0,1 14,6A3,3 0 0,1 11,9A3,3 0 0,1 8,6A3,3 0 0,1 11,3M16.6,14.6C18.25,14.6 19.6,15.94 19.6,17.6A3,3 0 0,1 16.6,20.6C14.94,20.6 13.6,19.25 13.6,17.6A3,3 0 0,1 16.6,14.6Z" style="fill: currentColor" />
  </svg>
</template>

<script lang="ts">
  import { defineComponent } from 'vue';

  export default defineComponent({
      name: "MdiScatterPlot",
      props: {
          size: { 
              type: Number, 
              default: 24 
          }
      },
  })
</script>
