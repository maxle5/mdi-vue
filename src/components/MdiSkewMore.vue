
<template>
  <svg :width="size" :height="size" viewBox="0 0 24 24">
      <path d="M12.5,11L10.41,20H5.5L7.59,11H12.5M15,9H6L3,22H12L15,9M21,6L17,2V5H9V7H17V10L21,6Z" style="fill: currentColor" />
  </svg>
</template>

<script lang="ts">
  import { defineComponent } from 'vue';

  export default defineComponent({
      name: "MdiSkewMore",
      props: {
          size: { 
              type: Number, 
              default: 24 
          }
      },
  })
</script>
