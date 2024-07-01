
<template>
  <svg :width="size" :height="size" viewBox="0 0 24 24">
      <path d="M7,2V13H10V22L17,10H13L17,2H7Z" style="fill: currentColor" />
  </svg>
</template>

<script lang="ts">
  import { defineComponent } from 'vue';

  export default defineComponent({
      name: "MdiFlash",
      props: {
          size: { 
              type: Number, 
              default: 24 
          }
      },
  })
</script>
