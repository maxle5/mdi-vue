
<template>
  <svg :width="size" :height="size" viewBox="0 0 24 24">
      <path d="M7.03 9.97H11.03V18.89L13.04 18.92V9.97H17.03L12.03 4.97Z" style="fill: currentColor" />
  </svg>
</template>

<script lang="ts">
  import { defineComponent } from 'vue';

  export default defineComponent({
      name: "MdiArrowUpThin",
      props: {
          size: { 
              type: Number, 
              default: 24 
          }
      },
  })
</script>
