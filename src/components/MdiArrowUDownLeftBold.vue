
<template>
  <svg :width="size" :height="size" viewBox="0 0 24 24">
      <path d="M21 10.5V18H17V10.5C17 8.57 15.43 7 13.5 7S10 8.57 10 10.5V13H14L8 20L2 13H6V10.5C6 6.36 9.36 3 13.5 3S21 6.36 21 10.5Z" style="fill: currentColor" />
  </svg>
</template>

<script lang="ts">
  import { defineComponent } from 'vue';

  export default defineComponent({
      name: "MdiArrowUDownLeftBold",
      props: {
          size: { 
              type: Number, 
              default: 24 
          }
      },
  })
</script>
