
<template>
  <svg :width="size" :height="size" viewBox="0 0 24 24">
      <path d="M16.56,12L19.23,20H4.78L7.44,12H16.56M7,1L3,5L7,9V6H11V4H7V1M17,1V4H13V6H17V9L21,5L17,1M18,10H6L2,22H22L18,10Z" style="fill: currentColor" />
  </svg>
</template>

<script lang="ts">
  import { defineComponent } from 'vue';

  export default defineComponent({
      name: "MdiPerspectiveLess",
      props: {
          size: { 
              type: Number, 
              default: 24 
          }
      },
  })
</script>
