
<template>
  <svg :width="size" :height="size" viewBox="0 0 24 24">
      <path d="M18,2A2,2 0 0,1 20,4V20A2,2 0 0,1 18,22H6A2,2 0 0,1 4,20V4A2,2 0 0,1 6,2H18M18,4H13V12L10.5,9.75L8,12V4H6V20H18V4Z" style="fill: currentColor" />
  </svg>
</template>

<script lang="ts">
  import { defineComponent } from 'vue';

  export default defineComponent({
      name: "MdiBookOutline",
      props: {
          size: { 
              type: Number, 
              default: 24 
          }
      },
  })
</script>
