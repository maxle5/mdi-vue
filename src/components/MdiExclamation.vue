
<template>
  <svg :width="size" :height="size" viewBox="0 0 24 24">
      <path d="M 11,4L 13,4L 13,15L 11,15L 11,4 Z M 13,18L 13,20L 11,20L 11,18L 13,18 Z" style="fill: currentColor" />
  </svg>
</template>

<script lang="ts">
  import { defineComponent } from 'vue';

  export default defineComponent({
      name: "MdiExclamation",
      props: {
          size: { 
              type: Number, 
              default: 24 
          }
      },
  })
</script>
