
<template>
  <svg :width="size" :height="size" viewBox="0 0 24 24">
      <path d="M6,5H18V7H6M7,11H17V13H7M5.5,17H18.5V19H5.5" style="fill: currentColor" />
  </svg>
</template>

<script lang="ts">
  import { defineComponent } from 'vue';

  export default defineComponent({
      name: "MdiCurrencyEth",
      props: {
          size: { 
              type: Number, 
              default: 24 
          }
      },
  })
</script>
