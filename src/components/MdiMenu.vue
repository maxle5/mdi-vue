
<template>
  <svg :width="size" :height="size" viewBox="0 0 24 24">
      <path d="M3,6H21V8H3V6M3,11H21V13H3V11M3,16H21V18H3V16Z" style="fill: currentColor" />
  </svg>
</template>

<script lang="ts">
  import { defineComponent } from 'vue';

  export default defineComponent({
      name: "MdiMenu",
      props: {
          size: { 
              type: Number, 
              default: 24 
          }
      },
  })
</script>
