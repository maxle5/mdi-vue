
<template>
  <svg :width="size" :height="size" viewBox="0 0 24 24">
      <path d="M21 22H3V20H21V22M21 4H3V2H21V4M10 13.7H14L12 8.3L10 13.7M11.2 6H12.9L17.6 18H15.6L14.7 15.4H9.4L8.5 18H6.5L11.2 6Z" style="fill: currentColor" />
  </svg>
</template>

<script lang="ts">
  import { defineComponent } from 'vue';

  export default defineComponent({
      name: "MdiFormatLineHeight",
      props: {
          size: { 
              type: Number, 
              default: 24 
          }
      },
  })
</script>
