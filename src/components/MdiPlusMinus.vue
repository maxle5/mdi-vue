
<template>
  <svg :width="size" :height="size" viewBox="0 0 24 24">
      <path d="M11,4V9H6V11H11V16H13V11H18V9H13V4H11M6,18V20H18V18H6Z" style="fill: currentColor" />
  </svg>
</template>

<script lang="ts">
  import { defineComponent } from 'vue';

  export default defineComponent({
      name: "MdiPlusMinus",
      props: {
          size: { 
              type: Number, 
              default: 24 
          }
      },
  })
</script>
