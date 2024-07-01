
<template>
  <svg :width="size" :height="size" viewBox="0 0 24 24">
      <path d="M12 2A7 7 0 0 0 5 9C5 14.25 12 22 12 22S19 14.25 19 9A7 7 0 0 0 12 2M7.5 10H10V5H14V10H16.5L12 14.5Z" style="fill: currentColor" />
  </svg>
</template>

<script lang="ts">
  import { defineComponent } from 'vue';

  export default defineComponent({
      name: "MdiMapMarkerDown",
      props: {
          size: { 
              type: Number, 
              default: 24 
          }
      },
  })
</script>
