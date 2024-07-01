
<template>
  <svg :width="size" :height="size" viewBox="0 0 24 24">
      <path d="M15 2L17 9H7L9 2M13.6 4H10.4L9.55 7H14.45M11 10H13V20H16V22H8V20H11Z" style="fill: currentColor" />
  </svg>
</template>

<script lang="ts">
  import { defineComponent } from 'vue';

  export default defineComponent({
      name: "MdiFloorLampOutline",
      props: {
          size: { 
              type: Number, 
              default: 24 
          }
      },
  })
</script>
