
<template>
  <svg :width="size" :height="size" viewBox="0 0 24 24">
      <path d="M4 9V15H8L13 20V4L8 9H4M16.55 2.47L15.5 3.53L17.93 6L15 9L17.93 12L15 15L17.93 18L15.5 20.47L16.55 21.53L20 18L17.07 15L20 12L17.07 9L20 6L16.55 2.47Z" style="fill: currentColor" />
  </svg>
</template>

<script lang="ts">
  import { defineComponent } from 'vue';

  export default defineComponent({
      name: "MdiVolumeVibrate",
      props: {
          size: { 
              type: Number, 
              default: 24 
          }
      },
  })
</script>
