
<template>
  <svg :width="size" :height="size" viewBox="0 0 24 24">
      <path d="M12,9.5L13.2,13.5L16,16.5L12,15.6L7.9,16.5L10.7,13.5L12,9.5M12,2.6L9,12.4L2,19.9L12,17.6L22,20L15,12.5L12,2.6Z" style="fill: currentColor" />
  </svg>
</template>

<script lang="ts">
  import { defineComponent } from 'vue';

  export default defineComponent({
      name: "MdiStarThreePointsOutline",
      props: {
          size: { 
              type: Number, 
              default: 24 
          }
      },
  })
</script>
