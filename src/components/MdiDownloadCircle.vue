
<template>
  <svg :width="size" :height="size" viewBox="0 0 24 24">
      <path d="M12 2C17.5 2 22 6.5 22 12C22 17.5 17.5 22 12 22C6.5 22 2 17.5 2 12C2 6.5 6.5 2 12 2M8 17H16V15H8V17M16 10H13.5V6H10.5V10H8L12 14L16 10Z" style="fill: currentColor" />
  </svg>
</template>

<script lang="ts">
  import { defineComponent } from 'vue';

  export default defineComponent({
      name: "MdiDownloadCircle",
      props: {
          size: { 
              type: Number, 
              default: 24 
          }
      },
  })
</script>
