
<template>
  <svg :width="size" :height="size" viewBox="0 0 24 24">
      <path d="M2 16H5V14H19V16H22V18H19V20H5V18H2V16M2 8H7V10H17V8H22V6H17V4H7V6H2V8Z" style="fill: currentColor" />
  </svg>
</template>

<script lang="ts">
  import { defineComponent } from 'vue';

  export default defineComponent({
      name: "MdiDistributeVerticalCenter",
      props: {
          size: { 
              type: Number, 
              default: 24 
          }
      },
  })
</script>
