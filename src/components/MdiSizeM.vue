
<template>
  <svg :width="size" :height="size" viewBox="0 0 24 24">
      <path d="M9 7C7.9 7 7 7.9 7 9V17H9V9H11V16H13V9H15V17H17V9C17 7.9 16.11 7 15 7H9Z" style="fill: currentColor" />
  </svg>
</template>

<script lang="ts">
  import { defineComponent } from 'vue';

  export default defineComponent({
      name: "MdiSizeM",
      props: {
          size: { 
              type: Number, 
              default: 24 
          }
      },
  })
</script>
