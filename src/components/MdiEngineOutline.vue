
<template>
  <svg :width="size" :height="size" viewBox="0 0 24 24">
      <path d="M8,10H16V18H11L9,16H7V11M7,4V6H10V8H7L5,10V13H3V10H1V18H3V15H5V18H8L10,20H18V16H20V19H23V9H20V12H18V8H12V6H15V4H7Z" style="fill: currentColor" />
  </svg>
</template>

<script lang="ts">
  import { defineComponent } from 'vue';

  export default defineComponent({
      name: "MdiEngineOutline",
      props: {
          size: { 
              type: Number, 
              default: 24 
          }
      },
  })
</script>
