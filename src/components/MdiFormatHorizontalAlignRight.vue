
<template>
  <svg :width="size" :height="size" viewBox="0 0 24 24">
      <path d="M13,8V11H3V13H13V16L17,12L13,8M19,20H21V4H19V20Z" style="fill: currentColor" />
  </svg>
</template>

<script lang="ts">
  import { defineComponent } from 'vue';

  export default defineComponent({
      name: "MdiFormatHorizontalAlignRight",
      props: {
          size: { 
              type: Number, 
              default: 24 
          }
      },
  })
</script>
