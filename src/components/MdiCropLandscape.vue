
<template>
  <svg :width="size" :height="size" viewBox="0 0 24 24">
      <path d="M19,17H5V7H19M19,5H5A2,2 0 0,0 3,7V17A2,2 0 0,0 5,19H19A2,2 0 0,0 21,17V7C21,5.89 20.1,5 19,5Z" style="fill: currentColor" />
  </svg>
</template>

<script lang="ts">
  import { defineComponent } from 'vue';

  export default defineComponent({
      name: "MdiCropLandscape",
      props: {
          size: { 
              type: Number, 
              default: 24 
          }
      },
  })
</script>
