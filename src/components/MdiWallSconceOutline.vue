
<template>
  <svg :width="size" :height="size" viewBox="0 0 24 24">
      <path d="M13.7 6L15.92 11H10.08L12.3 6H13.7M15 4H11L7 13H19L15 4M4 14V22H6V19H14V14H12V17H6V14H4Z" style="fill: currentColor" />
  </svg>
</template>

<script lang="ts">
  import { defineComponent } from 'vue';

  export default defineComponent({
      name: "MdiWallSconceOutline",
      props: {
          size: { 
              type: Number, 
              default: 24 
          }
      },
  })
</script>
