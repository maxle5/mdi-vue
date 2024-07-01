
<template>
  <svg :width="size" :height="size" viewBox="0 0 24 24">
      <path d="M12,6L7,11H17L12,6M7,13L12,18L17,13H7Z" style="fill: currentColor" />
  </svg>
</template>

<script lang="ts">
  import { defineComponent } from 'vue';

  export default defineComponent({
      name: "MdiMenuSwap",
      props: {
          size: { 
              type: Number, 
              default: 24 
          }
      },
  })
</script>
