
<template>
  <svg :width="size" :height="size" viewBox="0 0 24 24">
      <path d="M10,20A1,1 0 0,1 9,21H4V3H13.71A6.75,6.75 0 0,1 20.46,9.75C20.46,13.5 17.44,16.5 13.71,16.5H10V20Z" style="fill: currentColor" />
  </svg>
</template>

<script lang="ts">
  import { defineComponent } from 'vue';

  export default defineComponent({
      name: "MdiPandora",
      props: {
          size: { 
              type: Number, 
              default: 24 
          }
      },
  })
</script>
