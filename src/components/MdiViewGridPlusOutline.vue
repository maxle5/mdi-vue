
<template>
  <svg :width="size" :height="size" viewBox="0 0 24 24">
      <path d="M3 21H11V13H3M5 15H9V19H5M3 11H11V3H3M5 5H9V9H5M13 3V11H21V3M19 9H15V5H19M18 16H21V18H18V21H16V18H13V16H16V13H18Z" style="fill: currentColor" />
  </svg>
</template>

<script lang="ts">
  import { defineComponent } from 'vue';

  export default defineComponent({
      name: "MdiViewGridPlusOutline",
      props: {
          size: { 
              type: Number, 
              default: 24 
          }
      },
  })
</script>
