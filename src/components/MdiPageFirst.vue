
<template>
  <svg :width="size" :height="size" viewBox="0 0 24 24">
      <path d="M18.41,16.59L13.82,12L18.41,7.41L17,6L11,12L17,18L18.41,16.59M6,6H8V18H6V6Z" style="fill: currentColor" />
  </svg>
</template>

<script lang="ts">
  import { defineComponent } from 'vue';

  export default defineComponent({
      name: "MdiPageFirst",
      props: {
          size: { 
              type: Number, 
              default: 24 
          }
      },
  })
</script>
