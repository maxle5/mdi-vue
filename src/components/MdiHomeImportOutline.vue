
<template>
  <svg :width="size" :height="size" viewBox="0 0 24 24">
      <path d="M15 13L11 17V14H2V12H11V9L15 13M5 20V16H7V18H17V10.19L12 5.69L7.21 10H4.22L12 3L22 12H19V20H5Z" style="fill: currentColor" />
  </svg>
</template>

<script lang="ts">
  import { defineComponent } from 'vue';

  export default defineComponent({
      name: "MdiHomeImportOutline",
      props: {
          size: { 
              type: Number, 
              default: 24 
          }
      },
  })
</script>
