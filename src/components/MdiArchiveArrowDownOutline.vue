
<template>
  <svg :width="size" :height="size" viewBox="0 0 24 24">
      <path d="M20 21H4V10H6V19H18V10H20V21M3 3H21V9H3V3M5 5V7H19V5M10.5 11V14H8L12 18L16 14H13.5V11" style="fill: currentColor" />
  </svg>
</template>

<script lang="ts">
  import { defineComponent } from 'vue';

  export default defineComponent({
      name: "MdiArchiveArrowDownOutline",
      props: {
          size: { 
              type: Number, 
              default: 24 
          }
      },
  })
</script>
