
<template>
  <svg :width="size" :height="size" viewBox="0 0 24 24">
      <path d="M13 13H16V15H13V18H11V15H8V13H11V10H13V13M21 5V19C21 20.11 20.11 21 19 21H5C3.89 21 3 20.1 3 19V5C3 3.89 3.89 3 5 3H6V1H8V3H16V1H18V3H19C20.11 3 21 3.9 21 5M5 5V7H19V5H5M19 19V9H5V19H19Z" style="fill: currentColor" />
  </svg>
</template>

<script lang="ts">
  import { defineComponent } from 'vue';

  export default defineComponent({
      name: "MdiCalendarPlusOutline",
      props: {
          size: { 
              type: Number, 
              default: 24 
          }
      },
  })
</script>
