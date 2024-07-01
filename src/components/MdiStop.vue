
<template>
  <svg :width="size" :height="size" viewBox="0 0 24 24">
      <path d="M18,18H6V6H18V18Z" style="fill: currentColor" />
  </svg>
</template>

<script lang="ts">
  import { defineComponent } from 'vue';

  export default defineComponent({
      name: "MdiStop",
      props: {
          size: { 
              type: Number, 
              default: 24 
          }
      },
  })
</script>
