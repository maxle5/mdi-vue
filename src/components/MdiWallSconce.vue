
<template>
  <svg :width="size" :height="size" viewBox="0 0 24 24">
      <path d="M11,4L7,13H19L15,4H11M4,14V22H6V19H14V14H12V17H6V14H4Z" style="fill: currentColor" />
  </svg>
</template>

<script lang="ts">
  import { defineComponent } from 'vue';

  export default defineComponent({
      name: "MdiWallSconce",
      props: {
          size: { 
              type: Number, 
              default: 24 
          }
      },
  })
</script>
