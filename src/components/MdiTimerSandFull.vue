
<template>
  <svg :width="size" :height="size" viewBox="0 0 24 24">
      <path d="M6,2V8H6V8L10,12L6,16V16H6V22H18V16H18V16L14,12L18,8V8H18V2H6Z" style="fill: currentColor" />
  </svg>
</template>

<script lang="ts">
  import { defineComponent } from 'vue';

  export default defineComponent({
      name: "MdiTimerSandFull",
      props: {
          size: { 
              type: Number, 
              default: 24 
          }
      },
  })
</script>
