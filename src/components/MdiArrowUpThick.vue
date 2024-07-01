
<template>
  <svg :width="size" :height="size" viewBox="0 0 24 24">
      <path d="M14,20H10V11L6.5,14.5L4.08,12.08L12,4.16L19.92,12.08L17.5,14.5L14,11V20Z" style="fill: currentColor" />
  </svg>
</template>

<script lang="ts">
  import { defineComponent } from 'vue';

  export default defineComponent({
      name: "MdiArrowUpThick",
      props: {
          size: { 
              type: Number, 
              default: 24 
          }
      },
  })
</script>
