
<template>
  <svg :width="size" :height="size" viewBox="0 0 24 24">
      <path d="M14,8H11V14H6V8H3L8.5,2L14,8M15.5,22L21,16H18V10H13V16H10L15.5,22Z" style="fill: currentColor" />
  </svg>
</template>

<script lang="ts">
  import { defineComponent } from 'vue';

  export default defineComponent({
      name: "MdiSwapVerticalBold",
      props: {
          size: { 
              type: Number, 
              default: 24 
          }
      },
  })
</script>
