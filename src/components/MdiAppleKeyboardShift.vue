
<template>
  <svg :width="size" :height="size" viewBox="0 0 24 24">
      <path d="M15,18V12H17.17L12,6.83L6.83,12H9V18H15M12,4L22,14H17V20H7V14H2L12,4Z" style="fill: currentColor" />
  </svg>
</template>

<script lang="ts">
  import { defineComponent } from 'vue';

  export default defineComponent({
      name: "MdiAppleKeyboardShift",
      props: {
          size: { 
              type: Number, 
              default: 24 
          }
      },
  })
</script>
