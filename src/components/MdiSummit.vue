
<template>
  <svg :width="size" :height="size" viewBox="0 0 24 24">
      <path d="M15,3H17L22,5L17,7V10.17L22,21H2L8,13L11.5,17.7L15,10.17V3Z" style="fill: currentColor" />
  </svg>
</template>

<script lang="ts">
  import { defineComponent } from 'vue';

  export default defineComponent({
      name: "MdiSummit",
      props: {
          size: { 
              type: Number, 
              default: 24 
          }
      },
  })
</script>
