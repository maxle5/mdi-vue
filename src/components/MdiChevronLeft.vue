
<template>
  <svg :width="size" :height="size" viewBox="0 0 24 24">
      <path d="M15.41,16.58L10.83,12L15.41,7.41L14,6L8,12L14,18L15.41,16.58Z" style="fill: currentColor" />
  </svg>
</template>

<script lang="ts">
  import { defineComponent } from 'vue';

  export default defineComponent({
      name: "MdiChevronLeft",
      props: {
          size: { 
              type: Number, 
              default: 24 
          }
      },
  })
</script>
