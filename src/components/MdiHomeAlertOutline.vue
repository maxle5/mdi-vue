
<template>
  <svg :width="size" :height="size" viewBox="0 0 24 24">
      <path d="M12 5.7L17 10.2V18H7V10.2L12 5.7M19 20V12H22L12 3L2 12H5V20M13 8H11V13H13V8M13 15H11V17H13V15" style="fill: currentColor" />
  </svg>
</template>

<script lang="ts">
  import { defineComponent } from 'vue';

  export default defineComponent({
      name: "MdiHomeAlertOutline",
      props: {
          size: { 
              type: Number, 
              default: 24 
          }
      },
  })
</script>
