
<template>
  <svg :width="size" :height="size" viewBox="0 0 24 24">
      <path d="M4 6V18H21V6H4M19 16H6V13H19V16M6 11V8H19V11H6Z" style="fill: currentColor" />
  </svg>
</template>

<script lang="ts">
  import { defineComponent } from 'vue';

  export default defineComponent({
      name: "MdiViewStreamOutline",
      props: {
          size: { 
              type: Number, 
              default: 24 
          }
      },
  })
</script>
