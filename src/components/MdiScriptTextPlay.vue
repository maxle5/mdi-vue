
<template>
  <svg :width="size" :height="size" viewBox="0 0 24 24">
      <path d="M13.8 22H5C3.3 22 2 20.7 2 19V18H13.1C13 18.3 13 18.7 13 19C13 20.1 13.3 21.1 13.8 22M13.8 16H5V5C5 3.3 6.3 2 8 2H19C20.7 2 22 3.3 22 5V6H20V5C20 4.4 19.6 4 19 4S18 4.4 18 5V13.1C16.2 13.4 14.7 14.5 13.8 16M8 8H15V6H8V8M8 12H14V10H8V12M17 16V22L22 19L17 16Z" style="fill: currentColor" />
  </svg>
</template>

<script lang="ts">
  import { defineComponent } from 'vue';

  export default defineComponent({
      name: "MdiScriptTextPlay",
      props: {
          size: { 
              type: Number, 
              default: 24 
          }
      },
  })
</script>
