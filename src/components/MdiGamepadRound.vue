
<template>
  <svg :width="size" :height="size" viewBox="0 0 24 24">
      <path d="M4,8H8V4A2,2 0 0,1 10,2H14A2,2 0 0,1 16,4V8H20A2,2 0 0,1 22,10V14A2,2 0 0,1 20,16H16V20A2,2 0 0,1 14,22H10A2,2 0 0,1 8,20V16H4A2,2 0 0,1 2,14V10A2,2 0 0,1 4,8Z" style="fill: currentColor" />
  </svg>
</template>

<script lang="ts">
  import { defineComponent } from 'vue';

  export default defineComponent({
      name: "MdiGamepadRound",
      props: {
          size: { 
              type: Number, 
              default: 24 
          }
      },
  })
</script>
