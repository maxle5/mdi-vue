
<template>
  <svg :width="size" :height="size" viewBox="0 0 24 24">
      <path d="M6,6H12L14,2H18V6L14.5,13H18V18H12L10,22H6V18L9.5,11H6V6Z" style="fill: currentColor" />
  </svg>
</template>

<script lang="ts">
  import { defineComponent } from 'vue';

  export default defineComponent({
      name: "MdiDeviantart",
      props: {
          size: { 
              type: Number, 
              default: 24 
          }
      },
  })
</script>
