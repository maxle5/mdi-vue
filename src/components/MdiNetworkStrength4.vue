
<template>
  <svg :width="size" :height="size" viewBox="0 0 24 24">
      <path d="M1,21H21V1" style="fill: currentColor" />
  </svg>
</template>

<script lang="ts">
  import { defineComponent } from 'vue';

  export default defineComponent({
      name: "MdiNetworkStrength4",
      props: {
          size: { 
              type: Number, 
              default: 24 
          }
      },
  })
</script>
