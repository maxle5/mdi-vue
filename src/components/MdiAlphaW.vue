
<template>
  <svg :width="size" :height="size" viewBox="0 0 24 24">
      <path d="M9,17A2,2 0 0,1 7,15V7H9V15H11V8H13V15H15V7H17V15A2,2 0 0,1 15,17H9Z" style="fill: currentColor" />
  </svg>
</template>

<script lang="ts">
  import { defineComponent } from 'vue';

  export default defineComponent({
      name: "MdiAlphaW",
      props: {
          size: { 
              type: Number, 
              default: 24 
          }
      },
  })
</script>
