
<template>
  <svg :width="size" :height="size" viewBox="0 0 24 24">
      <path d="M7,3L3,5V19A2,2 0 0,0 5,21H19A2,2 0 0,0 21,19V5L17,3V5A1,1 0 0,1 16,6H10A1,1 0 0,1 9,5V3H7M8,10H16A1,1 0 0,1 17,11V19H7V11A1,1 0 0,1 8,10Z" style="fill: currentColor" />
  </svg>
</template>

<script lang="ts">
  import { defineComponent } from 'vue';

  export default defineComponent({
      name: "MdiZipDisk",
      props: {
          size: { 
              type: Number, 
              default: 24 
          }
      },
  })
</script>
