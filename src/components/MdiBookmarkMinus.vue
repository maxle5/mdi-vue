
<template>
  <svg :width="size" :height="size" viewBox="0 0 24 24">
      <path d="M17,3H7A2,2 0 0,0 5,5V21L12,18L19,21V5A2,2 0 0,0 17,3M15,11H9V9H15V11Z" style="fill: currentColor" />
  </svg>
</template>

<script lang="ts">
  import { defineComponent } from 'vue';

  export default defineComponent({
      name: "MdiBookmarkMinus",
      props: {
          size: { 
              type: Number, 
              default: 24 
          }
      },
  })
</script>
