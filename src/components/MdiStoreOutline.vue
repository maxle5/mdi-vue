
<template>
  <svg :width="size" :height="size" viewBox="0 0 24 24">
      <path d="M18.36 9L18.96 12H5.04L5.64 9H18.36M20 4H4V6H20V4M20 7H4L3 12V14H4V20H14V14H18V20H20V14H21V12L20 7M6 18V14H12V18H6Z" style="fill: currentColor" />
  </svg>
</template>

<script lang="ts">
  import { defineComponent } from 'vue';

  export default defineComponent({
      name: "MdiStoreOutline",
      props: {
          size: { 
              type: Number, 
              default: 24 
          }
      },
  })
</script>
