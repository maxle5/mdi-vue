
<template>
  <svg :width="size" :height="size" viewBox="0 0 24 24">
      <path d="M14,17H18V14L23,18.5L18,23V20H14V17M13,9H18.5L13,3.5V9M6,2H14L20,8V12.34C19.37,12.12 18.7,12 18,12A6,6 0 0,0 12,18C12,19.54 12.58,20.94 13.53,22H6C4.89,22 4,21.1 4,20V4A2,2 0 0,1 6,2Z" style="fill: currentColor" />
  </svg>
</template>

<script lang="ts">
  import { defineComponent } from 'vue';

  export default defineComponent({
      name: "MdiFileMove",
      props: {
          size: { 
              type: Number, 
              default: 24 
          }
      },
  })
</script>
