
<template>
  <svg :width="size" :height="size" viewBox="0 0 24 24">
      <path d="M5 5V11H19V5H5M17 9H7V7H17V9M5.27 13.32L3.5 15.09L4.91 16.5L6.68 14.73L5.27 13.32M18.73 13.32L17.32 14.73L19.09 16.5L20.5 15.09L18.73 13.32M11 16V19H13V16H11Z" style="fill: currentColor" />
  </svg>
</template>

<script lang="ts">
  import { defineComponent } from 'vue';

  export default defineComponent({
      name: "MdiWallSconceFlatOutline",
      props: {
          size: { 
              type: Number, 
              default: 24 
          }
      },
  })
</script>
