
<template>
  <svg :width="size" :height="size" viewBox="0 0 24 24">
      <path d="M16,5V18H21V5M4,18H9V5H4M10,18H15V5H10V18Z" style="fill: currentColor" />
  </svg>
</template>

<script lang="ts">
  import { defineComponent } from 'vue';

  export default defineComponent({
      name: "MdiViewColumn",
      props: {
          size: { 
              type: Number, 
              default: 24 
          }
      },
  })
</script>
