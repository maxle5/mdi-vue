
<template>
  <svg :width="size" :height="size" viewBox="0 0 24 24">
      <path d="M4 6.03L11.5 9.25L4 8.25L4 6.03M11.5 14.75L4 17.97V15.75L11.5 14.75M2 3L2 10L17 12L2 14L2 21L23 12L2 3Z" style="fill: currentColor" />
  </svg>
</template>

<script lang="ts">
  import { defineComponent } from 'vue';

  export default defineComponent({
      name: "MdiSendOutline",
      props: {
          size: { 
              type: Number, 
              default: 24 
          }
      },
  })
</script>
