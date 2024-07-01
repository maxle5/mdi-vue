
<template>
  <svg :width="size" :height="size" viewBox="0 0 24 24">
      <path d="M3 3H7V10.5C7 12.43 8.57 14 10.5 14H13V10L20 16L13 22V18H10.5C6.36 18 3 14.64 3 10.5V3Z" style="fill: currentColor" />
  </svg>
</template>

<script lang="ts">
  import { defineComponent } from 'vue';

  export default defineComponent({
      name: "MdiArrowRightBottomBold",
      props: {
          size: { 
              type: Number, 
              default: 24 
          }
      },
  })
</script>
