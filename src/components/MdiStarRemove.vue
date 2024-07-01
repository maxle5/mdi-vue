
<template>
  <svg :width="size" :height="size" viewBox="0 0 24 24">
      <path d="M5.8 21L7.4 14L2 9.2L9.2 8.6L12 2L14.8 8.6L22 9.2L18.8 12H18C14.9 12 12.4 14.3 12 17.3L5.8 21M20.1 14.5L18 16.6L15.9 14.5L14.5 15.9L16.6 18L14.5 20.1L15.9 21.5L18 19.4L20.1 21.5L21.5 20.1L19.4 18L21.5 15.9L20.1 14.5Z" style="fill: currentColor" />
  </svg>
</template>

<script lang="ts">
  import { defineComponent } from 'vue';

  export default defineComponent({
      name: "MdiStarRemove",
      props: {
          size: { 
              type: Number, 
              default: 24 
          }
      },
  })
</script>
