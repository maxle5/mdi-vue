
<template>
  <svg :width="size" :height="size" viewBox="0 0 24 24">
      <path d="M7,9V15H11L16,20V4L11,9H7Z" style="fill: currentColor" />
  </svg>
</template>

<script lang="ts">
  import { defineComponent } from 'vue';

  export default defineComponent({
      name: "MdiVolumeLow",
      props: {
          size: { 
              type: Number, 
              default: 24 
          }
      },
  })
</script>
