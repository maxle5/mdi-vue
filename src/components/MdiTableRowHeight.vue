
<template>
  <svg :width="size" :height="size" viewBox="0 0 24 24">
      <path d="M3,5H15A2,2 0 0,1 17,7V17A2,2 0 0,1 15,19H3A2,2 0 0,1 1,17V7A2,2 0 0,1 3,5M3,9V12H8V9H3M10,9V12H15V9H10M3,14V17H8V14H3M10,14V17H15V14H10M23,14V7H19V9H21V12H19V14H23Z" style="fill: currentColor" />
  </svg>
</template>

<script lang="ts">
  import { defineComponent } from 'vue';

  export default defineComponent({
      name: "MdiTableRowHeight",
      props: {
          size: { 
              type: Number, 
              default: 24 
          }
      },
  })
</script>
