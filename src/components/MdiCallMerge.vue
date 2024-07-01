
<template>
  <svg :width="size" :height="size" viewBox="0 0 24 24">
      <path d="M17,20.41L18.41,19L15,15.59L13.59,17M7.5,8H11V13.59L5.59,19L7,20.41L13,14.41V8H16.5L12,3.5" style="fill: currentColor" />
  </svg>
</template>

<script lang="ts">
  import { defineComponent } from 'vue';

  export default defineComponent({
      name: "MdiCallMerge",
      props: {
          size: { 
              type: Number, 
              default: 24 
          }
      },
  })
</script>
