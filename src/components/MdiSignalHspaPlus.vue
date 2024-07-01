
<template>
  <svg :width="size" :height="size" viewBox="0 0 24 24">
      <path d="M19,8V11H22V14H19V17H16V14H13V11H16V8H19M5,10.5H8V4.5H11V19.5H8V13.5H5V19.5H2V4.5H5V10.5Z" style="fill: currentColor" />
  </svg>
</template>

<script lang="ts">
  import { defineComponent } from 'vue';

  export default defineComponent({
      name: "MdiSignalHspaPlus",
      props: {
          size: { 
              type: Number, 
              default: 24 
          }
      },
  })
</script>
