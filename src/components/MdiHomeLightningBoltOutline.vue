
<template>
  <svg :width="size" :height="size" viewBox="0 0 24 24">
      <path d="M5 20V12H2L12 3L22 12H19V20H5M12 5.69L7 10.19V18H17V10.19L12 5.69M11.5 18V14H9L12.5 7V11H15L11.5 18Z" style="fill: currentColor" />
  </svg>
</template>

<script lang="ts">
  import { defineComponent } from 'vue';

  export default defineComponent({
      name: "MdiHomeLightningBoltOutline",
      props: {
          size: { 
              type: Number, 
              default: 24 
          }
      },
  })
</script>
