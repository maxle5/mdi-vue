
<template>
  <svg :width="size" :height="size" viewBox="0 0 24 24">
      <path d="M10,17L15,12L10,7V17Z" style="fill: currentColor" />
  </svg>
</template>

<script lang="ts">
  import { defineComponent } from 'vue';

  export default defineComponent({
      name: "MdiMenuRight",
      props: {
          size: { 
              type: Number, 
              default: 24 
          }
      },
  })
</script>
