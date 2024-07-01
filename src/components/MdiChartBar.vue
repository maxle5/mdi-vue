
<template>
  <svg :width="size" :height="size" viewBox="0 0 24 24">
      <path d="M22,21H2V3H4V19H6V10H10V19H12V6H16V19H18V14H22V21Z" style="fill: currentColor" />
  </svg>
</template>

<script lang="ts">
  import { defineComponent } from 'vue';

  export default defineComponent({
      name: "MdiChartBar",
      props: {
          size: { 
              type: Number, 
              default: 24 
          }
      },
  })
</script>
