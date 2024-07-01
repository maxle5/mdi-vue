
<template>
  <svg :width="size" :height="size" viewBox="0 0 24 24">
      <path d="M6,2C4.89,2 4,2.9 4,4V20A2,2 0 0,0 6,22H18A2,2 0 0,0 20,20V8L14,2M13,3.5L18.5,9H13M8.93,12.22H16V19.29L13.88,17.17L11.05,20L8.22,17.17L11.05,14.35" style="fill: currentColor" />
  </svg>
</template>

<script lang="ts">
  import { defineComponent } from 'vue';

  export default defineComponent({
      name: "MdiFileExport",
      props: {
          size: { 
              type: Number, 
              default: 24 
          }
      },
  })
</script>
