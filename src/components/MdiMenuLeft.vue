
<template>
  <svg :width="size" :height="size" viewBox="0 0 24 24">
      <path d="M14,7L9,12L14,17V7Z" style="fill: currentColor" />
  </svg>
</template>

<script lang="ts">
  import { defineComponent } from 'vue';

  export default defineComponent({
      name: "MdiMenuLeft",
      props: {
          size: { 
              type: Number, 
              default: 24 
          }
      },
  })
</script>
