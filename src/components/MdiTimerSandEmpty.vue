
<template>
  <svg :width="size" :height="size" viewBox="0 0 24 24">
      <path d="M6,2V8H6V8L10,12L6,16V16H6V22H18V16H18V16L14,12L18,8V8H18V2H6M16,16.5V20H8V16.5L12,12.5L16,16.5M12,11.5L8,7.5V4H16V7.5L12,11.5Z" style="fill: currentColor" />
  </svg>
</template>

<script lang="ts">
  import { defineComponent } from 'vue';

  export default defineComponent({
      name: "MdiTimerSandEmpty",
      props: {
          size: { 
              type: Number, 
              default: 24 
          }
      },
  })
</script>
