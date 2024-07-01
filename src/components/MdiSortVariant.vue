
<template>
  <svg :width="size" :height="size" viewBox="0 0 24 24">
      <path d="M3,13H15V11H3M3,6V8H21V6M3,18H9V16H3V18Z" style="fill: currentColor" />
  </svg>
</template>

<script lang="ts">
  import { defineComponent } from 'vue';

  export default defineComponent({
      name: "MdiSortVariant",
      props: {
          size: { 
              type: Number, 
              default: 24 
          }
      },
  })
</script>
