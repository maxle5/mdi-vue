
<template>
  <svg :width="size" :height="size" viewBox="0 0 24 24">
      <path d="M20.8 22.7L15 16.9V20H9V14H5L8.6 10.4L1.1 3L2.4 1.7L22.1 21.4L20.8 22.7M19 6V4H7.2L9.2 6H19M17.2 14H19L12 7L11.1 7.9L17.2 14Z" style="fill: currentColor" />
  </svg>
</template>

<script lang="ts">
  import { defineComponent } from 'vue';

  export default defineComponent({
      name: "MdiPublishOff",
      props: {
          size: { 
              type: Number, 
              default: 24 
          }
      },
  })
</script>
