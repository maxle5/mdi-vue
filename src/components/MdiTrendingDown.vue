
<template>
  <svg :width="size" :height="size" viewBox="0 0 24 24">
      <path d="M16,18L18.29,15.71L13.41,10.83L9.41,14.83L2,7.41L3.41,6L9.41,12L13.41,8L19.71,14.29L22,12V18H16Z" style="fill: currentColor" />
  </svg>
</template>

<script lang="ts">
  import { defineComponent } from 'vue';

  export default defineComponent({
      name: "MdiTrendingDown",
      props: {
          size: { 
              type: Number, 
              default: 24 
          }
      },
  })
</script>
