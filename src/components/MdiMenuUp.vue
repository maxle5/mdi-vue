
<template>
  <svg :width="size" :height="size" viewBox="0 0 24 24">
      <path d="M7,15L12,10L17,15H7Z" style="fill: currentColor" />
  </svg>
</template>

<script lang="ts">
  import { defineComponent } from 'vue';

  export default defineComponent({
      name: "MdiMenuUp",
      props: {
          size: { 
              type: Number, 
              default: 24 
          }
      },
  })
</script>
