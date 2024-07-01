
<template>
  <svg :width="size" :height="size" viewBox="0 0 24 24">
      <path d="M9,7A2,2 0 0,0 7,9V17H9V9H11V16H13V9H15V17H17V9A2,2 0 0,0 15,7H9Z" style="fill: currentColor" />
  </svg>
</template>

<script lang="ts">
  import { defineComponent } from 'vue';

  export default defineComponent({
      name: "MdiAlphaM",
      props: {
          size: { 
              type: Number, 
              default: 24 
          }
      },
  })
</script>
