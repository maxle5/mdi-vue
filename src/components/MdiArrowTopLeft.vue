
<template>
  <svg :width="size" :height="size" viewBox="0 0 24 24">
      <path d="M19,17.59L17.59,19L7,8.41V15H5V5H15V7H8.41L19,17.59Z" style="fill: currentColor" />
  </svg>
</template>

<script lang="ts">
  import { defineComponent } from 'vue';

  export default defineComponent({
      name: "MdiArrowTopLeft",
      props: {
          size: { 
              type: Number, 
              default: 24 
          }
      },
  })
</script>
