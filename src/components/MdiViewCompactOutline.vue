
<template>
  <svg :width="size" :height="size" viewBox="0 0 24 24">
      <path d="M3,5V19H22V5H3M5,7H20V11H5V7M5,17V13H9V17H5M11,17V13H20V17H11Z" style="fill: currentColor" />
  </svg>
</template>

<script lang="ts">
  import { defineComponent } from 'vue';

  export default defineComponent({
      name: "MdiViewCompactOutline",
      props: {
          size: { 
              type: Number, 
              default: 24 
          }
      },
  })
</script>
