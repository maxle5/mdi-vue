
<template>
  <svg :width="size" :height="size" viewBox="0 0 24 24">
      <path d="M17 14H19V17H22V19H19V22H17V19H14V17H17V14M5 20V12H2L12 3L22 12H17V10.19L12 5.69L7 10.19V18H12C12 18.7 12.12 19.37 12.34 20H5Z" style="fill: currentColor" />
  </svg>
</template>

<script lang="ts">
  import { defineComponent } from 'vue';

  export default defineComponent({
      name: "MdiHomePlusOutline",
      props: {
          size: { 
              type: Number, 
              default: 24 
          }
      },
  })
</script>
