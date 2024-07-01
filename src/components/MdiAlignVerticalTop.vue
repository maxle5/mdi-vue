
<template>
  <svg :width="size" :height="size" viewBox="0 0 24 24">
      <path d="M22 2V4H2V2H22M7 22H10V6H7V22M14 16H17V6H14V16Z" style="fill: currentColor" />
  </svg>
</template>

<script lang="ts">
  import { defineComponent } from 'vue';

  export default defineComponent({
      name: "MdiAlignVerticalTop",
      props: {
          size: { 
              type: Number, 
              default: 24 
          }
      },
  })
</script>
