
<template>
  <svg :width="size" :height="size" viewBox="0 0 24 24">
      <path d="M12 3L2 12H5V20H19V12H22L12 3M13 18H11V16H13V18M13 14H11V8H13V14Z" style="fill: currentColor" />
  </svg>
</template>

<script lang="ts">
  import { defineComponent } from 'vue';

  export default defineComponent({
      name: "MdiHomeAlert",
      props: {
          size: { 
              type: Number, 
              default: 24 
          }
      },
  })
</script>
