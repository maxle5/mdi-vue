
<template>
  <svg :width="size" :height="size" viewBox="0 0 24 24">
      <path d="M7,8L2.5,12L7,16V8M17,8V16L21.5,12L17,8M12,10A2,2 0 0,0 10,12A2,2 0 0,0 12,14A2,2 0 0,0 14,12A2,2 0 0,0 12,10Z" style="fill: currentColor" />
  </svg>
</template>

<script lang="ts">
  import { defineComponent } from 'vue';

  export default defineComponent({
      name: "MdiPanHorizontal",
      props: {
          size: { 
              type: Number, 
              default: 24 
          }
      },
  })
</script>
