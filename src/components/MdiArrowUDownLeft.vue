
<template>
  <svg :width="size" :height="size" viewBox="0 0 24 24">
      <path d="M20 10.5V18H18V10.5C18 8 16 6 13.5 6S9 8 9 10.5V16.17L12.09 13.09L13.5 14.5L8 20L2.5 14.5L3.91 13.08L7 16.17V10.5C7 6.91 9.91 4 13.5 4S20 6.91 20 10.5Z" style="fill: currentColor" />
  </svg>
</template>

<script lang="ts">
  import { defineComponent } from 'vue';

  export default defineComponent({
      name: "MdiArrowUDownLeft",
      props: {
          size: { 
              type: Number, 
              default: 24 
          }
      },
  })
</script>
