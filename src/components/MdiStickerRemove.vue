
<template>
  <svg :width="size" :height="size" viewBox="0 0 24 24">
      <path d="M18.5 2H5.5C3.6 2 2 3.6 2 5.5V18.5C2 20.4 3.6 22 5.5 22H16L22 16V5.5C22 3.6 20.4 2 18.5 2M12 13.4L9.9 15.5L8.5 14.1L10.6 12L8.5 9.9L9.9 8.5L12 10.6L14.1 8.5L15.5 9.9L13.4 12L15.5 14.1L14.1 15.5L12 13.4M15 20V18.5C15 16.6 16.6 15 18.5 15H20L15 20Z" style="fill: currentColor" />
  </svg>
</template>

<script lang="ts">
  import { defineComponent } from 'vue';

  export default defineComponent({
      name: "MdiStickerRemove",
      props: {
          size: { 
              type: Number, 
              default: 24 
          }
      },
  })
</script>
