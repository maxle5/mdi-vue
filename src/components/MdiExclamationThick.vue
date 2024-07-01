
<template>
  <svg :width="size" :height="size" viewBox="0 0 24 24">
      <path d="M10 3H14V14H10V3M10 21V17H14V21H10Z" style="fill: currentColor" />
  </svg>
</template>

<script lang="ts">
  import { defineComponent } from 'vue';

  export default defineComponent({
      name: "MdiExclamationThick",
      props: {
          size: { 
              type: Number, 
              default: 24 
          }
      },
  })
</script>
