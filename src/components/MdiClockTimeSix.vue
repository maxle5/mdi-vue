
<template>
  <svg :width="size" :height="size" viewBox="0 0 24 24">
      <path d="M12 2C6.5 2 2 6.5 2 12C2 17.5 6.5 22 12 22C17.5 22 22 17.5 22 12S17.5 2 12 2M12.5 17H11V7H12.5V17Z" style="fill: currentColor" />
  </svg>
</template>

<script lang="ts">
  import { defineComponent } from 'vue';

  export default defineComponent({
      name: "MdiClockTimeSix",
      props: {
          size: { 
              type: Number, 
              default: 24 
          }
      },
  })
</script>
