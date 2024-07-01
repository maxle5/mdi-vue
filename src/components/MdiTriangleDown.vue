
<template>
  <svg :width="size" :height="size" viewBox="0 0 24 24">
      <path d="M1 3H23L12 22" style="fill: currentColor" />
  </svg>
</template>

<script lang="ts">
  import { defineComponent } from 'vue';

  export default defineComponent({
      name: "MdiTriangleDown",
      props: {
          size: { 
              type: Number, 
              default: 24 
          }
      },
  })
</script>
