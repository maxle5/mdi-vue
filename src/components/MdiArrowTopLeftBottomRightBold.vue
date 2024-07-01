
<template>
  <svg :width="size" :height="size" viewBox="0 0 24 24">
      <path d="M5.83,8.66L3,11.5V3H11.5L8.66,5.83L18.17,15.34L21,12.5V21H12.5L15.34,18.17L5.83,8.66Z" style="fill: currentColor" />
  </svg>
</template>

<script lang="ts">
  import { defineComponent } from 'vue';

  export default defineComponent({
      name: "MdiArrowTopLeftBottomRightBold",
      props: {
          size: { 
              type: Number, 
              default: 24 
          }
      },
  })
</script>
