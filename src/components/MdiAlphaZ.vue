
<template>
  <svg :width="size" :height="size" viewBox="0 0 24 24">
      <path d="M9,7V9H13L9,15V17H15V15H11L15,9V7H9Z" style="fill: currentColor" />
  </svg>
</template>

<script lang="ts">
  import { defineComponent } from 'vue';

  export default defineComponent({
      name: "MdiAlphaZ",
      props: {
          size: { 
              type: Number, 
              default: 24 
          }
      },
  })
</script>
