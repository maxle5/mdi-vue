
<template>
  <svg :width="size" :height="size" viewBox="0 0 24 24">
      <path d="M13,5H21V19H13V5M3,5H11V7H3V5M3,11V9H11V11H3M3,19V17H11V19H3M3,15V13H11V15H3Z" style="fill: currentColor" />
  </svg>
</template>

<script lang="ts">
  import { defineComponent } from 'vue';

  export default defineComponent({
      name: "MdiViewSplitVertical",
      props: {
          size: { 
              type: Number, 
              default: 24 
          }
      },
  })
</script>
