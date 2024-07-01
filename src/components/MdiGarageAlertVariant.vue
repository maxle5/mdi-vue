
<template>
  <svg :width="size" :height="size" viewBox="0 0 24 24">
      <path d="M20 9V20H18V11H2V20H0V9L10 5L20 9M17 12H3V14H17V12M17 15H3V17H17V15M22 15V10H24V15H22M22 19V17H24V19H22Z" style="fill: currentColor" />
  </svg>
</template>

<script lang="ts">
  import { defineComponent } from 'vue';

  export default defineComponent({
      name: "MdiGarageAlertVariant",
      props: {
          size: { 
              type: Number, 
              default: 24 
          }
      },
  })
</script>
