
<template>
  <svg :width="size" :height="size" viewBox="0 0 24 24">
      <path d="M9,7V15A2,2 0 0,0 11,17H13A2,2 0 0,0 15,15V7H13V15H11V7H9Z" style="fill: currentColor" />
  </svg>
</template>

<script lang="ts">
  import { defineComponent } from 'vue';

  export default defineComponent({
      name: "MdiAlphaU",
      props: {
          size: { 
              type: Number, 
              default: 24 
          }
      },
  })
</script>
