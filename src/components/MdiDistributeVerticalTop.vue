
<template>
  <svg :width="size" :height="size" viewBox="0 0 24 24">
      <path d="M17 21H7V16H2V14H22V16H17V21M22 5V3H2V5H5V10H19V5H22Z" style="fill: currentColor" />
  </svg>
</template>

<script lang="ts">
  import { defineComponent } from 'vue';

  export default defineComponent({
      name: "MdiDistributeVerticalTop",
      props: {
          size: { 
              type: Number, 
              default: 24 
          }
      },
  })
</script>
