
<template>
  <svg :width="size" :height="size" viewBox="0 0 24 24">
      <path d="M8.59,16.58L13.17,12L8.59,7.41L10,6L16,12L10,18L8.59,16.58Z" style="fill: currentColor" />
  </svg>
</template>

<script lang="ts">
  import { defineComponent } from 'vue';

  export default defineComponent({
      name: "MdiChevronRight",
      props: {
          size: { 
              type: Number, 
              default: 24 
          }
      },
  })
</script>
