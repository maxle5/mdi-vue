
<template>
  <svg :width="size" :height="size" viewBox="0 0 24 24">
      <path d="M21,15.61L19.59,17L14.58,12L19.59,7L21,8.39L17.44,12L21,15.61M3,6H16V8H3V6M3,13V11H13V13H3M3,18V16H16V18H3Z" style="fill: currentColor" />
  </svg>
</template>

<script lang="ts">
  import { defineComponent } from 'vue';

  export default defineComponent({
      name: "MdiMenuOpen",
      props: {
          size: { 
              type: Number, 
              default: 24 
          }
      },
  })
</script>
