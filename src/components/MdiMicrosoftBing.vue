
<template>
  <svg :width="size" :height="size" viewBox="0 0 24 24">
      <path d="M5,3V19L8.72,21L18,15.82V11.73H18L9.77,8.95L11.38,12.84L13.94,14L8.7,16.92V4.27L5,3" style="fill: currentColor" />
  </svg>
</template>

<script lang="ts">
  import { defineComponent } from 'vue';

  export default defineComponent({
      name: "MdiMicrosoftBing",
      props: {
          size: { 
              type: Number, 
              default: 24 
          }
      },
  })
</script>
