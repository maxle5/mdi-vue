
<template>
  <svg :width="size" :height="size" viewBox="0 0 24 24">
      <path d="M11,16H3V8H11V2L21,12L11,22V16M13,7V10H5V14H13V17L18,12L13,7Z" style="fill: currentColor" />
  </svg>
</template>

<script lang="ts">
  import { defineComponent } from 'vue';

  export default defineComponent({
      name: "MdiArrowRightBoldOutline",
      props: {
          size: { 
              type: Number, 
              default: 24 
          }
      },
  })
</script>
