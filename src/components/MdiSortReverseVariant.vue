
<template>
  <svg :width="size" :height="size" viewBox="0 0 24 24">
      <path d="M3 11H15V13H3M3 18V16H21V18M3 6H9V8H3Z" style="fill: currentColor" />
  </svg>
</template>

<script lang="ts">
  import { defineComponent } from 'vue';

  export default defineComponent({
      name: "MdiSortReverseVariant",
      props: {
          size: { 
              type: Number, 
              default: 24 
          }
      },
  })
</script>
