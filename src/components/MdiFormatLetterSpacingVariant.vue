
<template>
  <svg :width="size" :height="size" viewBox="0 0 24 24">
      <path d="M22 3V21H20V3H22M4 3V21H2V3H4M10 13.7H14L12 8.3L10 13.7M11.2 6H12.9L17.6 18H15.6L14.7 15.4H9.4L8.5 18H6.5L11.2 6Z" style="fill: currentColor" />
  </svg>
</template>

<script lang="ts">
  import { defineComponent } from 'vue';

  export default defineComponent({
      name: "MdiFormatLetterSpacingVariant",
      props: {
          size: { 
              type: Number, 
              default: 24 
          }
      },
  })
</script>
