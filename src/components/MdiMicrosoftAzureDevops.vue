
<template>
  <svg :width="size" :height="size" viewBox="0 0 24 24">
      <path d="M22 18L17 22L9 19V22L4.81 16.25L17.72 17.3V6.34L22 5.65V18M4.81 16.25V8.96L17.72 6.34L10.6 2V4.84L3.97 6.76L2 9.38V15.07L4.81 16.25Z" style="fill: currentColor" />
  </svg>
</template>

<script lang="ts">
  import { defineComponent } from 'vue';

  export default defineComponent({
      name: "MdiMicrosoftAzureDevops",
      props: {
          size: { 
              type: Number, 
              default: 24 
          }
      },
  })
</script>
