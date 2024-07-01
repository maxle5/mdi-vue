
<template>
  <svg :width="size" :height="size" viewBox="0 0 24 24">
      <path d="M10.59,12L14.59,8H11V6H18V13H16V9.41L12,13.41V16H20V4H8V12H10.59M22,2V18H12V22H2V12H6V2H22M10,14H4V20H10V14Z" style="fill: currentColor" />
  </svg>
</template>

<script lang="ts">
  import { defineComponent } from 'vue';

  export default defineComponent({
      name: "MdiResize",
      props: {
          size: { 
              type: Number, 
              default: 24 
          }
      },
  })
</script>
