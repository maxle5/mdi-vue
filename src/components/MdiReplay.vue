
<template>
  <svg :width="size" :height="size" viewBox="0 0 24 24">
      <path d="M12,5V1L7,6L12,11V7A6,6 0 0,1 18,13A6,6 0 0,1 12,19A6,6 0 0,1 6,13H4A8,8 0 0,0 12,21A8,8 0 0,0 20,13A8,8 0 0,0 12,5Z" style="fill: currentColor" />
  </svg>
</template>

<script lang="ts">
  import { defineComponent } from 'vue';

  export default defineComponent({
      name: "MdiReplay",
      props: {
          size: { 
              type: Number, 
              default: 24 
          }
      },
  })
</script>
