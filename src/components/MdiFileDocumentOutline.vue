
<template>
  <svg :width="size" :height="size" viewBox="0 0 24 24">
      <path d="M6,2A2,2 0 0,0 4,4V20A2,2 0 0,0 6,22H18A2,2 0 0,0 20,20V8L14,2H6M6,4H13V9H18V20H6V4M8,12V14H16V12H8M8,16V18H13V16H8Z" style="fill: currentColor" />
  </svg>
</template>

<script lang="ts">
  import { defineComponent } from 'vue';

  export default defineComponent({
      name: "MdiFileDocumentOutline",
      props: {
          size: { 
              type: Number, 
              default: 24 
          }
      },
  })
</script>
