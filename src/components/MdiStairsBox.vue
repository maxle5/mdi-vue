
<template>
  <svg :width="size" :height="size" viewBox="0 0 24 24">
      <path d="M5 3C3.89 3 3 3.89 3 5V19C3 20.11 3.89 21 5 21H19C20.11 21 21 20.11 21 19V5C21 3.89 20.11 3 19 3H5M14 7H19V9H16V12H13V15H10V18H5V16H8V13H11V10H14V7Z" style="fill: currentColor" />
  </svg>
</template>

<script lang="ts">
  import { defineComponent } from 'vue';

  export default defineComponent({
      name: "MdiStairsBox",
      props: {
          size: { 
              type: Number, 
              default: 24 
          }
      },
  })
</script>
