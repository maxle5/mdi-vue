
<template>
  <svg :width="size" :height="size" viewBox="0 0 24 24">
      <path d="M3 3H21V7H3V3M4 21V8H20V21H4M14 14V11H10V14H7L12 19L17 14H14Z" style="fill: currentColor" />
  </svg>
</template>

<script lang="ts">
  import { defineComponent } from 'vue';

  export default defineComponent({
      name: "MdiArchiveArrowDown",
      props: {
          size: { 
              type: Number, 
              default: 24 
          }
      },
  })
</script>
