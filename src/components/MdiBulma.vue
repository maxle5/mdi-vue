
<template>
  <svg :width="size" :height="size" viewBox="0 0 24 24">
      <path d="M11.38 2L6.38 7L5.13 15.75L11.38 22L18.88 17L13.88 12L17.63 8.25L11.38 2Z" style="fill: currentColor" />
  </svg>
</template>

<script lang="ts">
  import { defineComponent } from 'vue';

  export default defineComponent({
      name: "MdiBulma",
      props: {
          size: { 
              type: Number, 
              default: 24 
          }
      },
  })
</script>
