
<template>
  <svg :width="size" :height="size" viewBox="0 0 24 24">
      <path d="M22,22H20V20H22V22M22,18H20V16H22V18M18,22H16V20H18V22M18,18H16V16H18V18M14,22H12V20H14V22M22,14H20V12H22V14Z" style="fill: currentColor" />
  </svg>
</template>

<script lang="ts">
  import { defineComponent } from 'vue';

  export default defineComponent({
      name: "MdiResizeBottomRight",
      props: {
          size: { 
              type: Number, 
              default: 24 
          }
      },
  })
</script>
