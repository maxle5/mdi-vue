
<template>
  <svg :width="size" :height="size" viewBox="0 0 24 24">
      <path d="M20.8 22.7L10.2 12.1C7.8 12.4 7 14 7 14V21H5V6.9L1.1 3L2.4 1.7L22.1 21.4L20.8 22.7M20 12V4C20 4 19 6 16 6C14 6 14 4 11 4C9.8 4 8.7 4.3 7.8 4.6L17.1 13.9C19.2 13.5 20 12 20 12Z" style="fill: currentColor" />
  </svg>
</template>

<script lang="ts">
  import { defineComponent } from 'vue';

  export default defineComponent({
      name: "MdiFlagVariantOff",
      props: {
          size: { 
              type: Number, 
              default: 24 
          }
      },
  })
</script>
